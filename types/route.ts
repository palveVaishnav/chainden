export type Trail = {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    tags: string[];
    likes: string[];
    savedBy: string[];
    mapsUrl: string;
    locations: string[];
    comments: Comment[];
};

export type Comment = {
    id: string;
    comment: string;
    userId: string;
    routesId: string;
};

// Example of an array of trails
export type TrailData = Trail[];
