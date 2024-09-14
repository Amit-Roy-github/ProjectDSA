import express from "express";
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/data-structure/:slug' , async (req, res) => {
   const title = req.params.slug.replace(/-/g, ' ');
   res.json("From Backed with slug");
});



app.get('/', (req, res) => {
   res.json("Im the backend");
})

app.post('/login', (req, res) => {
   console.log(req.body);
   res.json("Hello From Backend and Verified ");
});

app.post('/signup', (req, res) => {
   console.log(req.body);
   res.json("Hello From Backend and Verified ");
});

app.listen(port, () => {
   console.log(`Listening to Port ${port}`);
});