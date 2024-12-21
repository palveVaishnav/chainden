import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Bookmark, Map, Navigation, Clock, Calendar, User, ChevronRight } from 'lucide-react'
import NavigationBar from "@/components/Menu"

export default function RoutePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <NavigationBar />
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-green-700 to-green-400 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col justify- items-start md:items- gap-6">
                        <div className="space-y-4">
                            <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
                                5 locations
                            </Badge>
                            <h1 className="text-4xl font-bold">Route-1</h1>
                            <p className="text-xl text-white/80">This is the route-1</p>
                            <div className="flex items-center gap-4">
                                <Avatar className="h-10 w-10 border-2 border-white">
                                    <AvatarImage src="/https://avatar.iran.liara.run/public" />
                                    <AvatarFallback>U</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-medium">username</p>
                                    <p className="text-sm text-white/80">Created on 12 July, 2024</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Button variant="secondary" className="bg-white/20 hover:bg-white/30">
                                <Heart className="h-5 w-5 mr-2" />
                                23 Likes
                            </Button>
                            <Button variant="secondary" className="bg-white/20 hover:bg-white/30">
                                <MessageCircle className="h-5 w-5 mr-2" />
                                10 Comments
                            </Button>
                            <Button variant="secondary" className="bg-white/20 hover:bg-white/30">
                                <Bookmark className="h-5 w-5 mr-2" />
                                20 Saves
                            </Button>
                        </div>

                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Route Map */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <h2 className="text-2xl font-semibold">Route Map</h2>
                        </CardHeader>
                        <CardContent>
                            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                                <Map className="h-16 w-16 text-muted-foreground" />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Route Details */}
                    <Card>
                        <CardHeader>
                            <h2 className="text-2xl font-semibold">Route Details</h2>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Navigation className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium">5 locations</p>
                                    <p className="text-sm text-muted-foreground">Stops on this route</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Clock className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium">Estimated time: 2 hours</p>
                                    <p className="text-sm text-muted-foreground">Total journey duration</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Calendar className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium">Created: 12 July, 2024</p>
                                    <p className="text-sm text-muted-foreground">Date of route creation</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium">Created by: username</p>
                                    <p className="text-sm text-muted-foreground">Route author</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Location List */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <h2 className="text-2xl font-semibold">Locations</h2>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {[1, 2, 3, 4, 5].map((location) => (
                                    <li key={location} className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                                        <div className="bg-primary text-white p-2 rounded-full">
                                            <span className="font-bold">{location}</span>
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="font-medium">Location {location}</h3>
                                            <p className="text-sm text-muted-foreground">Brief description of location {location}</p>
                                        </div>
                                        <Button variant="ghost" size="icon">
                                            <ChevronRight className="h-5 w-5" />
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Similar Routes */}
                    <Card>
                        <CardHeader>
                            <h2 className="text-2xl font-semibold">Similar Routes</h2>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {[1, 2, 3].map((route) => (
                                    <li key={route} className="flex items-center gap-4">
                                        <div className="bg-muted p-2 rounded">
                                            <Map className="h-10 w-10 text-muted-foreground" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium">Similar Route {route}</h3>
                                            <p className="text-sm text-muted-foreground">4 locations • 1.5 hours</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}

