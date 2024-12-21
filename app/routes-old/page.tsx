'use client'
import NavigationBar from "@/components/Menu";
import { Bookmark, HeartIcon, MessageCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
    return (
        <div className="flex flex-col p-4 border border-black">
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
        <div className="flex gap-4 sticky top-0 p-4 backdrop-blur-xl">
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


function Cards() {
    const router = useRouter();
    const routeList = [
        {
            name: 'Route-1',
            locations: ["one", "two", "three", "four", "five"],
            description: 'This is the route-1',
            username: 'username',
            createdAt: '12 July, 2024',
            totalViews: 100,
            totalSaves: 20,
            totalComments: 10,
            totalLikes: 23,
        },
        {
            name: 'Route-1',
            locations: ["one", "two", "three", "four", "five"],
            description: 'This is the route-1',
            username: 'username',
            createdAt: '12 July, 2024',
            totalViews: 100,
            totalSaves: 20,
            totalComments: 10,
            totalLikes: 23,
        },
        {
            name: 'Route-1',
            locations: ["one", "two", "three", "four", "five"],
            description: 'This is the route-1',
            username: 'username',
            createdAt: '12 July, 2024',
            totalViews: 100,
            totalSaves: 20,
            totalComments: 10,
            totalLikes: 23,
        },
        {
            name: 'Route-1',
            locations: ["one", "two", "three", "four", "five"],
            description: 'This is the route-1',
            username: 'username',
            createdAt: '12 July, 2024',
            totalViews: 100,
            totalSaves: 20,
            totalComments: 10,
            totalLikes: 23,
        },
        {
            name: 'Route-1',
            locations: ["one", "two", "three", "four", "five"],
            description: 'This is the route-1',
            username: 'username',
            createdAt: '12 July, 2024',
            totalViews: 100,
            totalSaves: 20,
            totalComments: 10,
            totalLikes: 23,
        },
        {
            name: 'Route-1',
            locations: ["one", "two", "three", "four", "five"],
            description: 'This is the route-1',
            username: 'username',
            createdAt: '12 July, 2024',
            totalViews: 100,
            totalSaves: 20,
            totalComments: 10,
            totalLikes: 23,
        },
        {
            name: 'Route-1',
            locations: ["one", "two", "three", "four", "five"],
            description: 'This is the route-1',
            username: 'username',
            createdAt: '12 July, 2024',
            totalViews: 100,
            totalSaves: 20,
            totalComments: 10,
            totalLikes: 23,
        },
        {
            name: 'Route-1',
            locations: ["one", "two", "three", "four", "five"],
            description: 'This is the route-1',
            username: 'username',
            createdAt: '12 July, 2024',
            totalViews: 100,
            totalSaves: 20,
            totalComments: 10,
            totalLikes: 23,
        },
        {
            name: 'Route-1',
            locations: ["one", "two", "three", "four", "five"],
            description: 'This is the route-1',
            username: 'username',
            createdAt: '12 July, 2024',
            totalViews: 100,
            totalSaves: 20,
            totalComments: 10,
            totalLikes: 23,
        },
        {
            name: 'Route-1',
            locations: ["one", "two", "three", "four", "five"],
            description: 'This is the route-1',
            username: 'username',
            createdAt: '12 July, 2024',
            totalViews: 100,
            totalSaves: 20,
            totalComments: 10,
            totalLikes: 23,
        },
        {
            name: 'Route-1',
            locations: ["one", "two", "three", "four", "five"],
            description: 'This is the route-1',
            username: 'username',
            createdAt: '12 July, 2024',
            totalViews: 100,
            totalSaves: 20,
            totalComments: 10,
            totalLikes: 23,
        },
        {
            name: 'Route-1',
            locations: ["one", "two", "three", "four", "five"],
            description: 'This is the route-1',
            username: 'username',
            createdAt: '12 July, 2024',
            totalViews: 100,
            totalSaves: 20,
            totalComments: 10,
            totalLikes: 23,
        },
    ]
    return (
        <div className="grid grid-cols-3 gap-8 mt-4 px-40">
            <NavigationBar />
            {routeList.map((route, id) => (
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
                            <p className="font-medium">{route.username}</p>
                        </div>

                        {/* Stats Section */}
                        <div className="flex gap-4 text-gray-700">
                            <span className="flex items-center gap-1">
                                <HeartIcon />
                                <p>{route.totalLikes}</p>
                            </span>
                            <span className="flex items-center gap-1">
                                <MessageCircle />
                                <p>{route.totalComments}</p>
                            </span>
                            <span className="flex items-center gap-1">
                                <Bookmark />
                                <p>{route.totalSaves}</p>
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