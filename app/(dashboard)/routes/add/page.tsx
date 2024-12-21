'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const formSchema = z.object({
    name: z.string().min(3, {
        message: "Route name must be at least 3 characters.",
    }),
    description: z.string().min(10, {
        message: "Description must be at least 10 characters.",
    }),
    tags: z.string().refine((val) => val.split(',').filter(Boolean).length > 0, {
        message: "At least one tag is required.",
    }),
    link: z.string().url({
        message: "Please enter a valid Google Maps URL.",
    }),
    estimatedTime: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
        message: "Please enter a valid positive number for estimated time.",
    }),
})

export default function CreateRoutePage() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            tags: "",
            link: "",
            estimatedTime: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        // Here you would typically send the form data to your backend
        console.log(values)
        setTimeout(() => {
            setIsSubmitting(false)
            form.reset()
            // Here you would typically show a success message or redirect
        }, 2000)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <Card className="max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>Create a New Route</CardTitle>
                    <CardDescription>Share your favorite route with the community</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Route Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter route name" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Give your route a catchy name
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Describe your route"
                                                className="resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Provide details about the route, points of interest, etc.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="tags"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Tags</FormLabel>
                                        <FormControl>
                                            <Input placeholder="hiking, nature, city (comma-separated)" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Add tags to help others find your route
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="link"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Google Maps Link</FormLabel>
                                        <FormControl>
                                            <Input placeholder="https://goo.gl/maps/..." {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Paste the Google Maps link for your route
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="estimatedTime"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Estimated Time (in minutes)</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="60" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            How long does it take to complete this route?
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? "Submitting..." : "Submit Route"}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}

