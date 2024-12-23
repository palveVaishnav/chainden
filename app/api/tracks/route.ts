import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const routes = await prisma.routes.findMany({
			include: {
				comments: true, // Include related data if necessary
			},
		});

		return NextResponse.json({
			success: true,
			data: routes,
		});
	} catch (error) {
		console.error("Error fetching routes:", error);
		return NextResponse.json(
			{
				success: false,
				message: "Internal Server Error",
			},
			{ status: 500 }
		);
	}
}
