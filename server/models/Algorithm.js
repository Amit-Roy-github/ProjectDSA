import mongoose from "mongoose";
import { Schema } from "mongoose";

const algoSchema = new Schema({
   title: { type: String, required: true },
   statement: { type: String, required: true },
   intuition: String,
   approch: String,
});

const Algorithm = mongoose.model('algorithm', algoSchema);
export default Algorithm;