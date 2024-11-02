import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { NextResponse } from 'next/server';

export const GET = async (request, context) => {
    try {
        await connectToDB();

        // Esperar params y obtener id
        const { id } = await context.params;

        const prompt = await Prompt.findById(id).populate("creator");
        if (!prompt) {
            return NextResponse.json({ error: "Prompt Not Found" }, { status: 404 });
        }

        return NextResponse.json(prompt, { status: 200 });
    } catch (error) {
        console.error("GET Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};

export const PATCH = async (request, context) => {
    try {
        const { prompt, tag } = await request.json();
        await connectToDB();

        // Esperar params y obtener id
        const { id } = await context.params;

        const existingPrompt = await Prompt.findById(id);
        if (!existingPrompt) {
            return NextResponse.json({ error: "Prompt not found" }, { status: 404 });
        }

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;
        await existingPrompt.save();

        return NextResponse.json(existingPrompt, { status: 200 });
    } catch (error) {
        console.error("PATCH Error:", error);
        return NextResponse.json({ error: "Error Updating Prompt" }, { status: 500 });
    }
};

export const DELETE = async (request, context) => {
    try {
        await connectToDB();

        // Esperar params y obtener id
        const { id } = await context.params;

        const deletedPrompt = await Prompt.findByIdAndDelete(id);
        if (!deletedPrompt) {
            return NextResponse.json({ error: "Prompt not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Prompt deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("DELETE Error:", error);
        return NextResponse.json({ error: "Error deleting prompt" }, { status: 500 });
    }
};