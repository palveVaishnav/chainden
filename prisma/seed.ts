const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Create Users
    const user1 = await prisma.user.create({
        data: {
            publicKey: "0x123456789abcdef",
            profile: "Adventurer and nature lover.",
        },
    });

    const user2 = await prisma.user.create({
        data: {
            publicKey: "0x987654321fedcba",
            profile: "Avid traveler exploring the world.",
        },
    });

    // Create Routes
    const route1 = await prisma.routes.create({
        data: {
            name: "Mountain Trail",
            description: "A scenic trail through the mountains.",
            tags: ["mountain", "hiking", "scenic"],
            likes: [user1.id],
            savedBy: [user2.id],
            mapsUrl: "https://maps.example.com/trail",
            locations: ["Mountain Peak", "Valley View"],
        },
    });

    const route2 = await prisma.routes.create({
        data: {
            name: "Beach Walk",
            description: "A relaxing walk along the beach.",
            tags: ["beach", "relaxing"],
            likes: [user2.id],
            savedBy: [user1.id],
            mapsUrl: "https://maps.example.com/beach",
            locations: ["Sunny Beach", "Palm Cove"],
        },
    });

    // Create Comments
    await prisma.comments.createMany({
        data: [
            {
                comment: "Amazing trail! Highly recommended.",
                userId: user1.id,
                routesId: route1.id,
            },
            {
                comment: "Perfect for a sunny day.",
                userId: user2.id,
                routesId: route2.id,
            },
        ],
    });

    console.log("Seeding completed!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
