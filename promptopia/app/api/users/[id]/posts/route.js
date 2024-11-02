import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { NextResponse } from 'next/server';

export const GET = async (request, context) => {
    try {
        await connectToDB();

        // Esperar a que context.params esté disponible y luego obtener el id
        const { id } = await context.params;

        const prompts = await Prompt.find({ creator: id }).populate("creator");

        return NextResponse.json(prompts, { status: 200 });
    } catch (error) {
        console.error("GET Error:", error);
        return NextResponse.json(
            { error: "Failed to fetch prompts created by user" },
            { status: 500 }
        );
    }
};