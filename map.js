async function getLocationsFromRedirectedURL(originalURL) {
    async function getRedirectedURL(url) {
        try {
            const response = await fetch(url, { method: 'HEAD', redirect: 'follow' });
            return response.url; // Returns the final redirected URL
        } catch (error) {
            console.error('Error fetching the redirected URL:', error);
            return null;
        }
    }

    // Function to extract locations from the URL
    function extractLocationsFromURL(url) {
        // Regex patterns for different URL structures
        const dirRegex = /\/dir\/([^@]+)/; // For `/dir/...` paths
        const placeOrQueryRegex = /(?:\/place\/|[?&]q=)([^/?&]+)/; // For `/place/...` or `?q=...`

        const matches = [];

        // Handle `/dir/...` paths
        const dirMatch = dirRegex.exec(url);
        if (dirMatch) {
            const locationsSegment = dirMatch[1];
            const locations = locationsSegment.split('/').map((location) =>
                decodeURIComponent(location.replace(/\+/g, ' '))
            );
            matches.push(...locations);
        }

        // Handle `/place/...` or `?q=...`
        const placeMatch = placeOrQueryRegex.exec(url);
        if (placeMatch) {
            const location = decodeURIComponent(placeMatch[1].replace(/\+/g, ' '));
            matches.push(location);
        }

        // Return unique locations (deduplicated)
        return [...new Set(matches)];
    }

    // Step 1: Get the redirected URL
    const redirectedURL = await getRedirectedURL(originalURL);
    if (!redirectedURL) {
        console.error('Failed to retrieve the redirected URL');
        return [];
    }

    // console.log('Redirected URL:', redirectedURL);

    // Step 2: Extract locations from the final redirected URL
    const locations = extractLocationsFromURL(redirectedURL);
    return locations;
}

// Example usage
(async function () {
    const originalURL = 'https://maps.app.goo.gl/FL7fD51etmgHsJzdA'; // Example Google Maps URL
    const locations = await getLocationsFromRedirectedURL(originalURL);
    console.log('Extracted Locations:', locations);
})();
