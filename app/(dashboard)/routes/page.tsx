'use client'
import NavigationBar from "@/components/Menu";
import { TrailData } from "@/types/route";
import { Bookmark, HeartIcon, MessageCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
    return (
        <div className="flex flex-col p-4 border border-black">
            <NavigationBar />
            <Searchbar />
            <Cards />
        </div>
    )
}

function Searchbar() {
    const cityList = [
        'Pune', 'Goa', 'Kanpur', 'Mumbai', 'Nagar', 'Nagpur'
    ];
    return (
        <div className="flex gap-4 sticky top-16 p-4 backdrop-blur-3xl">
            <select name="cityName" id="cityName" className="border px-2 py-2 rounded-md p-2 border-green-500">
                {cityList.map((city, id) => (
                    <option key={id} value={city}
                        className="p-4"
                    >{city}</option>
                ))}
            </select>
            <input type="text" placeholder="Search locations" className="border border-black px-2 py-2 rounded-md" />
        </div>
    )
}


export function Cards() {
    const router = useRouter();
    const [newRouteList, setRouteList] = useState<TrailData>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRoutes = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/tracks');
                const data = await response.json();
                if (data.success) {
                    setRouteList(data.data);  // Set the route list from API response
                }
            } catch (error) {
                console.error("Error fetching routes:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRoutes();
    }, []);

    console.log(newRouteList)

    /*
    const routeList = [
        {
            name: 'Maharashtra Marvels',
            locations: ["Mumbai", "Pune", "Nashik", "Aurangabad", "Nagpur"],
            description: 'Journey through the heart of Maharashtra, from bustling cities to serene landscapes.',
            username: 'traveller_1',
            createdAt: '12 July, 2024',
            totalViews: 150,
            totalSaves: 30,
            totalComments: 15,
            totalLikes: 50,
        },
        {
            name: 'Capital Connect',
            locations: ["Delhi", "Noida", "Gurgaon", "Ghaziabad", "Faridabad"],
            description: 'Explore the vibrant hub of the National Capital Region.',
            username: 'wanderer_2',
            createdAt: '15 July, 2024',
            totalViews: 200,
            totalSaves: 45,
            totalComments: 20,
            totalLikes: 75,
        },
        {
            name: 'Bengal Bliss',
            locations: ["Kolkata", "Durgapur", "Asansol", "Siliguri", "Darjeeling"],
            description: 'From the cultural capital to the misty hills of Bengal.',
            username: 'explorer_3',
            createdAt: '18 July, 2024',
            totalViews: 180,
            totalSaves: 40,
            totalComments: 25,
            totalLikes: 60,
        },
        {
            name: 'Tamil Treasures',
            locations: ["Chennai", "Vellore", "Tiruchirappalli", "Madurai", "Coimbatore"],
            description: 'A journey through the historic and scenic spots of Tamil Nadu.',
            username: 'nomad_4',
            createdAt: '20 July, 2024',
            totalViews: 140,
            totalSaves: 25,
            totalComments: 10,
            totalLikes: 40,
        },
        {
            name: 'Kerala Kaleidoscope',
            locations: ["Thiruvananthapuram", "Kochi", "Alappuzha", "Munnar", "Wayanad"],
            description: 'Discover the breathtaking beauty of God’s Own Country.',
            username: 'nature_lover_5',
            createdAt: '22 July, 2024',
            totalViews: 250,
            totalSaves: 60,
            totalComments: 35,
            totalLikes: 100,
        },
        {
            name: 'Rajasthan Royale',
            locations: ["Jaipur", "Jodhpur", "Udaipur", "Jaisalmer", "Bikaner"],
            description: 'A royal trail through the desert state of Rajasthan.',
            username: 'heritage_seeker_6',
            createdAt: '25 July, 2024',
            totalViews: 300,
            totalSaves: 70,
            totalComments: 40,
            totalLikes: 120,
        },
        {
            name: 'Karnataka Odyssey',
            locations: ["Bengaluru", "Mysuru", "Hampi", "Coorg", "Chikmagalur"],
            description: 'Dive into the history, coffee, and culture of Karnataka.',
            username: 'coffee_enthusiast_7',
            createdAt: '28 July, 2024',
            totalViews: 220,
            totalSaves: 50,
            totalComments: 30,
            totalLikes: 90,
        },
        {
            name: 'Himalayan Heights',
            locations: ["Shimla", "Manali", "Dharamshala", "Leh", "Spiti"],
            description: 'Reach for the skies with this picturesque Himalayan route.',
            username: 'mountain_maniac_8',
            createdAt: '30 July, 2024',
            totalViews: 320,
            totalSaves: 80,
            totalComments: 50,
            totalLikes: 150,
        },
        {
            name: 'Eastern Escapade',
            locations: ["Guwahati", "Shillong", "Cherrapunji", "Kaziranga", "Tawang"],
            description: 'A serene escape into the untouched beauty of Northeast India.',
            username: 'peace_seeker_9',
            createdAt: '1 August, 2024',
            totalViews: 280,
            totalSaves: 65,
            totalComments: 40,
            totalLikes: 110,
        },
        {
            name: 'Western Wanderlust',
            locations: ["Ahmedabad", "Vadodara", "Surat", "Bhuj", "Dwarka"],
            description: 'Explore the land of heritage, business, and spirituality in Gujarat.',
            username: 'heritage_lover_10',
            createdAt: '3 August, 2024',
            totalViews: 260,
            totalSaves: 55,
            totalComments: 35,
            totalLikes: 95,
        },
    ];
    */

    return (
        <div className="grid grid-cols-3 gap-8 mt-4 px-40">
            {newRouteList.map((route, id) => (
                <div
                    className="relative border border-black rounded-lg p-8 cursor-pointer flex flex-col gap-4 group hover:shadow-xl transition-shadow duration-300"
                    key={id}
                    onClick={() => router.push('/routes/route')}
                >
                    <div id="mainCard" className="group grid gap-4">
                        {/* Header Section */}
                        <div className="flex justify-between">
                            <p className="border border-black rounded-md px-2 text-sm font-medium">
                                {route.locations.length} locations
                            </p>
                            <p className="border border-black rounded-md px-2 text-sm font-medium">
                                {route.createdAt}
                            </p>
                        </div>

                        {/* Main Content */}
                        <div>
                            <p className="text-2xl font-bold">{route.name}</p>
                            <p className="text-gray-600">{route.description}</p>
                        </div>

                        {/* User Info */}
                        <div className="flex gap-4 items-center">
                            <div className="p-4 border rounded-full bg-black"></div>
                            <p className="font-medium">{route.createdAt}</p>
                        </div>

                        {/* Stats Section */}
                        <div className="flex gap-4 text-gray-700">
                            <span className="flex items-center gap-1">
                                <HeartIcon />
                                <p>{route.likes.length}</p>
                            </span>
                            <span className="flex items-center gap-1">
                                <MessageCircle />
                                <p>{route.comments.length}</p>
                            </span>
                            <span className="flex items-center gap-1">
                                <Bookmark />
                                <p>{route.savedBy.length}</p>
                            </span>
                        </div>
                    </div>
                    {/* 
                    <div
                        className="absolute inset-0 bg-white group-hover:translate-x-20 p-6 rounded-lg shadow-lg border border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0 z-10 grid gap-2"
                    >
                        {route.locations.map((location, id) => (
                            <span key={id} className="text-sm font-medium text-gray-700">
                                {location}
                            </span>
                        ))}
                    </div> */}
                </div>
            ))}
        </div>
    )
}