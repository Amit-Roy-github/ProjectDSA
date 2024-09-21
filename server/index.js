import express from "express";
import cors from 'cors';
import { connectDB } from "./database/db.js";
import Problem from "./models/Problem.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

connectDB().then(() => {

});

app.get('/data-structure/:slug' , async (req, res) => {
   const title = req.params.slug.replace(/-/g, ' ');
   res.json("From Backed with slug");
});



app.get('/', (req, res) => {
   res.json("Im the backend");
})

app.post('/login', (req, res) => {
   // console.log(req.body);
   res.json("Hello From Backend and Verified ");
});

app.post('/signup', (req, res) => {
   console.log(req.body);
   res.json("Hello From Backend and Verified ");
});


app.post('/problemInput', async (req, res) => {
   // console.log(req.body)
   try {
      const newProblem = new Problem(req.body);
       await newProblem.save();
      res.json('Problem saved successfully');
   }
   catch(error) {
      // console.error(error);
      res.status(500).json('A error occured while saving the problem');
   }
});



app.listen(port, () => {
   console.log(`Listening to Port ${port}`);
});