import { Schema, model, models } from "mongoose";
import {Usir} from "@models/user"
const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "Usir", 
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required."],
  },
  tag: {
    type: String,
    required: [true, "Tag is required."],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
