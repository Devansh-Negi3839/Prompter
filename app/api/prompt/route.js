import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import Usir from "@models/user";

export const GET = async (request) => {
    try {
        await connectToDB();
        const prompts = await Prompt.find({});

        // Fetch user data for each prompt's creator ID and append it to the prompt
        for (let prompt of prompts) {
            const user = await Usir.findById(prompt.creator);
            if (user) {
                console.log(user);
                prompt.creator = user; // Append user data to the creator field of the prompt
            }
        }

        console.log(prompts);
        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        console.error("Failed to fetch all prompts", error);
        return new Response("Failed to fetch all prompts", { status: 500 });
    }
};