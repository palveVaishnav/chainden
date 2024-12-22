import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";




export async function Get(){
	try{
	const users = await prisma.user.findMany();

		return NextResponse.json({
			success: true,
			data: users,
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



