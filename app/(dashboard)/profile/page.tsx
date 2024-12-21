import NavigationBar from "@/components/Menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Grid, Bookmark } from 'lucide-react'
import Image from "next/image"
import { Cards } from "../routes/page"

export default function ProfilePage() {
    return (
        <div className="container mx-auto">
            {/* Profile Header */}
            <NavigationBar />
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8 mt-10 px-4">
                <Avatar className="w-32 h-32 md:w-40 md:h-40">
                    <AvatarImage src="https://avatar.iran.liara.run/public" alt="@username" />
                    <AvatarFallback>UN</AvatarFallback>
                </Avatar>
                <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                        <h1 className="text-2xl font-bold">Vaishnav Palve</h1>
                        {/* <div className="flex gap-2">
                            <Button>Edit Profile</Button>
                            <Button variant="outline" size="icon">
                                <Settings className="h-4 w-4" />
                            </Button>
                        </div> */}
                    </div>
                    <p className="font-medium mb-2">@vaishnav</p>
                    <p className="text-sm flex items-center gap-1">
                        <MapPin className="h-4 w-4" /> Pune, India
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                        Adventure seeker | Route creator | Nature lover
                    </p>
                    <div className="flex justify-center md:justify-start gap-6 mb-4">
                        <div className="text-center">
                            <p className="font-bold">15</p>
                            <p className="text-sm text-muted-foreground">Routes</p>
                        </div>
                        <div className="text-center">
                            <p className="font-bold">1.2k</p>
                            <p className="text-sm text-muted-foreground">Followers</p>
                        </div>
                        <div className="text-center">
                            <p className="font-bold">500</p>
                            <p className="text-sm text-muted-foreground">Following</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs for Routes and Saved */}
            <Tabs defaultValue="routes" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="routes" className="flex items-center gap-2 p-1">
                        <Grid className="h-4 w-4" /> Routes
                    </TabsTrigger>
                    <TabsTrigger value="saved" className="flex items-center gap-2 p-1">
                        <Bookmark className="h-4 w-4" /> Saved
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="routes">
                    <Cards />
                </TabsContent>
                <TabsContent value="saved">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[1, 2, 3, 4].map((saved) => (
                            <Card key={saved}>
                                <CardContent className="p-0">
                                    <div className="relative aspect-square">
                                        <Image
                                            src={`/placeholder.svg?text=Saved ${saved}`}
                                            alt={`Saved Route ${saved}`}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-t-lg"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold mb-1">Saved Route {saved}</h3>
                                        <p className="text-sm text-muted-foreground">
                                            4 locations • 1.5 hours
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

