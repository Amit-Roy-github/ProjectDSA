import mongoose from "mongoose";
import { Schema } from "mongoose";

const example = new Schema({
   input: {type : String , required : true } ,
   output: {type : String , required : true } ,
   explanation: String ,
});

const problemSchema = new Schema({
   title: {type:String , required : true },
   statement: {type:String , required : true },
   note: String,
   difficulty:{type : String , required : true } ,
   constraints: [String],
   tag : String ,
   examples : [example],
   solution: String
});

const Problem = mongoose.model('Problems', problemSchema);

export default Problem ;