import mongoose from "mongoose";
import { Schema } from "mongoose";

const example = new Schema({
   input: String,
   output: String,
   explanation: String
});

const problemSchema = new Schema({
   title: {type:String , required : true },
   statement: {type:String , required : true },
   note: String,
   constraints: [String],
   examples : [example],
   solution: String
});

const Problem = mongoose.model('Problems', problemSchema);

export default Problem;