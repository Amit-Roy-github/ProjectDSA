import React, { useState } from 'react'

import {
   Box,
   Button,
   Container,
   createTheme,
   Paper,
   styled,
   TextField,
   ThemeProvider,
   Typography
} from '@mui/material'

import SendIcon from '@mui/icons-material/Send';
import Header from './Layout/Header'
import { grey } from '@mui/material/colors'
import axios from 'axios';
import apiList from '../lib/apiList';


const theme = createTheme({
   conponents: {
      MuiTypography: {
         styleoverrides: {

         }
      },
   },
   typography: {
      allVariants: {
            color: 'white',
         fontFamily: `"Noto Serif", "Inter", "Rubik", "Merriweather", "Georgia", Cambria, "Times New Roman", Times, serif`,
         whiteSpace:'pre-line'
    },
   },
   // TextField: {
   //    input: {
   //       color: 'white'
   //    }
   // }
});
const MyBox = styled(Box)({
   marginBottom: '1rem',
});

const InputAlgorithm = () => {

   const [algoDetails, setAlgoDetails] = useState({
      title: ``,
      statement: ``,
      intuition: ``,
      approch: ``,
   });

   const handleChange = (event) => {
      
      const {name, value} = event.target;
      setAlgoDetails({
         ...algoDetails,
         [name]: value,
      });
   };

   const handleSubmit = async () => {
      try {
         const response = await axios.post(`${apiList.server}/alogritmInput` , algoDetails);
         console.log(response.data);
      }
      catch (error)
      {
         console.error(error);
      }
   }

   return (
      <Container
         maxWidth
         disableGutters
      >
         <Header />
         <ThemeProvider theme={theme} >
            <Container
               disableGutters
               maxWidth
               sx={{
                  minHeight:'100vh',
                  display: 'flex',
                  flexDirection:'column' ,
                  alignItems: 'center',
                  bgcolor: 'black',
                  gap:'1rem',
               }}
            >
               <Paper
                  sx={{
                     bgcolor: grey[800],
                     width: '70%',
                     p:'2rem 5rem'
                  }}
               >
                  <MyBox>
                     <Typography variant='h4'>

                        {
                           !algoDetails.title ? 'Title' : algoDetails.title
                        }

                     </Typography>
                  </MyBox>
                  <MyBox>
                     <Typography
                        variant='h6'
                     >
                        Statement :
                     </Typography>
                     <Typography
                        // variant='body1'
                     >
                      {algoDetails.statement}
                     </Typography>
                  </MyBox>
                  <MyBox>
                     <Typography
                        variant='h6'
                     >
                        Intuition :
                     </Typography>
                     <Typography>
                        {algoDetails.intuition}
                     </Typography>
                  </MyBox>
                  <MyBox>
                     <Typography variant='h6'>
                        Approch :
                     </Typography>
                     <Typography>
                        {algoDetails.approch}
                     </Typography>
                  </MyBox>
               </Paper>

               <Paper
                  sx={{
                     padding: '2rem 3rem',
                     width: '70%',
                     bgcolor:grey[800]
                  }}
               >

                  <form>
                     <TextField
                        fullWidth
                        label='Title'
                        name='title'
                        value={algoDetails.title}
                        onChange={handleChange}
                        sx={{
                           mb: '1rem',
                           input: { color: 'white' },
                        }}
                     />
                     <TextField
                        fullWidth
                        label='Statement'
                        name='statement'
                        multiline
                        value={algoDetails.statement}
                        onChange={handleChange}
                        sx={{
                           mb: '1rem',
                           textArea: { color: 'white' },
                        }}
                     />
                     <TextField
                        fullWidth
                        label='Intuition'
                        name='intuition'
                        multiline
                        value={algoDetails.intuition}
                        onChange={handleChange}
                        sx={{
                           mb: '1rem',
                           textArea: { color: 'white' },
                        }}
                     />
                     <TextField
                        fullWidth
                        label='Approch'
                        name='approch'
                        value={algoDetails.approch}
                        multiline
                        onChange={handleChange}
                        sx={{
                           mb: '1rem',
                           textArea: { color: 'white' },
                        }}
                     />
                     <Button
                        variant='contained'
                        endIcon={<SendIcon />}
                        onClick={handleSubmit}
                     >
                        save
                     </Button>
                  </form>
               </Paper>
            </Container>
         </ThemeProvider>
      </Container>
   )
}

export default InputAlgorithm