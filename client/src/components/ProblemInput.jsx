import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import slugify from 'slugify';

import {
   Alert,
   Box,
   Button,
   Container,
   FormControl,
   IconButton,
   InputLabel,
   MenuItem,
   Paper,
   Select,
   TextField,
   Typography
} from '@mui/material'

import {
   blueGrey,
   green
} from '@mui/material/colors'

import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send'
import EastIcon from '@mui/icons-material/East';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import apiList from '../lib/apiList';


const initialProblemDetails = {
   title: '',
   statement: '',
   difficulty: '',
   tag:'',
   note: '',
   constraints: [],
   examples: [],
   solution: ''
};

const state = {
   tags: [
      'Array',
      'String',
      'Graph',
      'Dp',
      'SlidingWindow',
      'Trie'
   ],
   difficulty: [
      'Easy',
      'Medium',
      'Hard'
   ]
};

const InputExample = ({ example, index, setProblemDetails }) => {

   const handleChange = (event) => {

      const field = event.target.name;
      const value = event.target.value;

      setProblemDetails((preDetails) => ({
         ...preDetails,
         examples: preDetails.examples.map((exam, ind) =>
            ind === index ? { ...exam, [field]: value } : exam
         ),
      }));
   };

   return (
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
         }}
      >
         <Typography>Test-Case : {index + 1} </Typography>
         <TextField
            fullWidth
            label='input format'
            name='input'
            value={example.input}
            onChange={handleChange}
         />
         <TextField
            fullWidth
            label='output format'
            name='output'
            value={example.output}
            onChange={handleChange}
         />
         <TextField
            fullWidth
            multiline
            label='explanation'
            name='explanation'
            value={example.explanation}
            onChange={handleChange}
         />
      </Box>
   )
}

const ProblemInput = () => {

   const navigate = useNavigate();

   const [problemDetails, setProblemDetails] = useState(initialProblemDetails);
   const [savedMessage, setSavedMessage] = useState({
      error: null,
      severity: '',
      message: '',
      title: ''
   });

   const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;

      // console.log(name, value);

      setProblemDetails({
         ...problemDetails,
         [name]: value
      });

   }
   console.log(problemDetails);


   const addExample = () => {

      const length = problemDetails.examples.length;
      if (length !== 0 && problemDetails.examples[length - 1].input === '') return;

      setProblemDetails((preDetails) => ({
         ...preDetails,
         examples: [...preDetails.examples, {
            input: '',
            output: '',
            explanation: ''
         }],
      }));
   }
   const removeExample = () => {
      setProblemDetails((preDetails) => ({
         ...problemDetails,
         examples: preDetails.examples.slice(0, -1),
      }));
   };

   const handleConstraints = (index, value) => {

      console.log(index, value);

      const update = [...problemDetails.constraints];
      update[index] = value;

      setProblemDetails({
         ...problemDetails,
         constraints: update,
      })
   }
   const addConstraints = () => {

      const arr = problemDetails.constraints;
      if (arr.length !== 0 && arr[arr.length - 1] === '') return;

      setProblemDetails((preDetails) => ({
         ...preDetails,
         constraints: [...preDetails.constraints, ''],
      }))
   }

   const handleSubmit = async (e) => {

      try {
         const response = await axios.post(`${apiList.server}/problemInput`, problemDetails);
         setSavedMessage({
            error: false,
            severity: 'success',
            message: response.data,
            title: problemDetails.title,
         });
         setProblemDetails(initialProblemDetails);
      }
      catch (error) {
         console.error(error);
         setSavedMessage({
            error: true,
            severity: 'error',
            message: 'Error occured in saving data',
            title: ''
         });
      };
   };

   const handleVisitPageClick = () => {
      const slug = slugify(savedMessage.title, { lower: true, strict: true });
      navigate(`/data-structure/${slug}`);
   }

   return (
      <Container
         maxWidth={false}
         disableGutters
         sx={{
            minheight: '100vh',
            py:'1rem',
            bgcolor: blueGrey[500],
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start'
         }}
      >
         <Paper
            sx={{
               p: '3rem',
               display: 'flex',
               flexDirection: 'column',
               gap: '1rem'
            }}
         >
            { // For message popup
               savedMessage.error !== null ? (
                  <Box>
                     <Alert severity={savedMessage.severity}
                        variant='filled'
                     >
                        {savedMessage.message}
                     </Alert>
                     {
                        !savedMessage.error ? (
                           <Button
                              sx={{ mt: '5px' }}
                              endIcon={<EastIcon />}
                              variant='contained'
                              color='success'
                              size='small'
                              onClick={handleVisitPageClick}
                           >
                              visit page
                           </Button>
                        ) : null
                     }
                  </Box>) : null
            }

            <form >
               <TextField
                  // required
                  label='Title'
                  name='title'
                  onChange={handleChange}
                  value={problemDetails.title}
                  fullWidth
                  sx={{
                     mb: 4
                  }}
               />
               <TextField
                  // required
                  multiline
                  name='statement'
                  label='Problem Statement'
                  value={problemDetails.statement}
                  onChange={handleChange}
                  fullWidth
                  sx={{
                     mb: 4
                  }}
               />
               <TextField
                  required
                  select
                  name='difficulty'
                  label='Difficulty'
                  value={problemDetails.difficulty}
                  onChange={handleChange}
                  sx={{
                     width: '8rem',
                     mb: 4,
                     mr:3,
                     padding: 0,
                  }}
               >
                  { state.difficulty.map((tag) => <MenuItem value={tag}>{tag}</MenuItem> )}
               </TextField>
               <TextField
                  required
                  select
                  name='tag'
                  label='Tag'
                  value={problemDetails.tag}
                  onChange={handleChange}
                  sx={{
                     width: '10rem',
                     mb: 4,
                     padding: 0,
                  }}
               >
                  {
                     state.tags.map((tag) => <MenuItem value={tag}>{tag}</MenuItem> )
                  }
               </TextField>

               <TextField
                  label='note'
                  name='note'
                  multiline
                  value={problemDetails.note}
                  onChange={handleChange}
                  fullWidth
                  sx={{
                     mb: 4
                  }}
               />

               <Typography>Examples : </Typography>
               <Box
                  sx={{
                     p: '1rem',
                     display: 'flex',
                     flexDirection: 'column',
                     gap: 2,
                  }}
               >
                  {problemDetails.examples.map((example, index) =>
                     <InputExample
                        example={example}
                        index={index}
                        setProblemDetails={setProblemDetails}
                     />
                  )}
                  <Box>
                     <IconButton color='success' sx={{
                        bgcolor: green[400]
                     }}
                        onClick={addExample}
                     >
                        <AddIcon />
                     </IconButton>
                     <IconButton color='success' sx={{
                        bgcolor: green[400]
                     }}
                        onClick={removeExample}
                     >
                        <DeleteIcon />
                     </IconButton>
                  </Box>
               </Box>

               <Typography>Constraints</Typography>
               <Box
                  sx={{
                     p: '1rem',
                     display: 'flex',
                     flexDirection: 'column',
                     gap: 1
                  }}
               >
                  {problemDetails.constraints.map((value, index) =>
                     <TextField
                        value={value}
                        placeholder='eg. size of array <= 1e6 or n <= 1e6 '
                        onChange={(e) => handleConstraints(index, e.target.value)}
                     />
                  )}
                  <Box>
                     <IconButton color='success' sx={{
                        bgcolor: green[400]
                     }}
                        onClick={addConstraints}
                     >
                        <AddIcon />
                     </IconButton>
                  </Box>
               </Box>
               <Button
                  endIcon={<SendIcon />}
                  variant='contained'
                  color='success'
                  onClick={handleSubmit}
               >
                  save
               </Button>
            </form>

         </Paper>
      </Container>
   )
}

export default ProblemInput