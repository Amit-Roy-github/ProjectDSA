import React, { useState } from 'react';
import Header from './Layout/Header';
import { useNavigate, useParams } from 'react-router-dom';
import slugify from 'slugify';

import {
   Box,
   Button,
   Card,
   Container,
   createTheme,
   ThemeProvider,
   Typography
} from '@mui/material';

import {
   blueGrey,
   green,
   grey,
   lime,
   red,
} from '@mui/material/colors';

import "@fontsource/aileron";
import { Link } from 'react-router-dom';

const theme = createTheme({
   typography: {
      fontFamily:
         "Aileron",
   },
});

// enable content creator to select hard , easy , medium
// no need to input it
const colors = {
   Easy: green[600],
   Medium: lime[500],
   Hard: red[300],
}

const TitleCard = ({ problem, index }) => {

   const navigate = useNavigate();

   const slug = slugify(problem.title, { lower: true, strict: true });

   const handleClick = () => {
      navigate(`/data-structure/${slug}`);
   }
   return (
      <Card
         key={index}
         variant='outlined'
         sx={{
            display: 'flex',
            justifyContent: 'space-between',
            background: 'transparent',
            borderRadius: '1rem',
            p: '1.5rem 2rem 1rem',
            m: '1rem 0'
         }}
      >
         <Box
            sx={{
               color: grey[300],
            }}
         >
            <Typography
               variant='h5'
            >
               {problem.title}
            </Typography>
            <Box
               display={'flex'}
               sx={{
                  color: grey[400]
               }}
            >
               <Typography
                  sx={{
                     fontSize: '0.875rem',
                     fontWeight: 600,
                  }}
               >
                  Difficulty :
               </Typography>
               <Typography
                  sx={{
                     mx: '0.5rem',
                     fontSize: '0.875rem',
                     fontWeight: 550,
                     color: colors[problem.difficulty],
                  }}
               >
                  {problem.difficulty}
               </Typography>
            </Box>
         </Box>

         <Box
            sx={{
               p: '1rem'
            }}
         >
            <Button
               variant='contained'
               onClick={handleClick}
            >

            </Button>
         </Box>
      </Card>
   )
}

const ProblemList = () => {

   const [problemDetails, setProblemDetails] = useState([
      {
         title: 'Find the Final value of Array after performing operations',
         difficulty: 'Medium',
      },
      {
         title: 'Find the Sum of the Array',
         difficulty: 'Easy',
      },

   ]);

   return (
      <Container
         maxWidth={false}
         disableGutters
         sx={{
            height: '100vh',
            background: blueGrey[900]
         }}
      >
         <Header />

         <Container
            disableGutters
            sx={{
               display: 'grid',
               gridTemplateColumns: '30% 70%'
            }}
         >
            <Box >Left</Box>

            <ThemeProvider theme={theme} >
               <Box
                  sx={{
                     py: '3rem',
                     pr:'5rem'
                  }}
               >
                  {problemDetails.map((problem, index) =>
                     <TitleCard key={index} problem={problem} />)}
               </Box>
            </ThemeProvider>

         </Container>
      </Container>
   )
}

export default ProblemList;