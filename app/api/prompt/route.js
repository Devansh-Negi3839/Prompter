import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import Usir from "@models/user";

export const dynamic = 'force-dynamic';
export const GET = async (request) => {
    try {
        await connectToDB();
        const prompts = await Prompt.find({});

        // Fetch user data for each prompt's creator ID and append it to the prompt
        const attach = async (prompts) => {
            for (let prompt of prompts) {
                const user = await Usir.findById(prompt.creator);
                if (user) {
                    console.log(user);
                    prompt.creator = user; // Append user data to the creator field of the prompt
                }
            }
            return prompts;
        }

        // Call attach function properly and await its result
        const updatedPrompts = await attach(prompts);
        console.log(updatedPrompts);
        return new Response(JSON.stringify(updatedPrompts), { status: 200 });
    } catch (error) {
        console.error("Failed to fetch all prompts", error);
        return new Response("Failed to fetch all prompts", { status: 500 });
    }
};
