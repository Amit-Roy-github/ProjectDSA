import React, { useState } from 'react'

import {
   Box,
   Container,
   createTheme,
   Paper,
   styled,
   ThemeProvider,
   Typography
} from '@mui/material'

import Header from './Layout/Header'
import { grey } from '@mui/material/colors'


const theme = createTheme({
   conponents: {
      MuiTypography: {
         styleoverrides: {

         }
      }
   },
   typography: {
      allVariants: {
            color: 'white',
         fontFamily: `"Noto Serif", "Inter", "Rubik", "Merriweather", "Georgia", Cambria, "Times New Roman", Times, serif`,
         whiteSpace:'pre-line'
    },

   }
});
const MyBox = styled(Box)({
   marginBottom: '1rem',
});

const AlgorithmPage = () => {

   const [algoDetails, setAlgoDetails] = useState({
      title: '',
      statement: '',
      intuition: '',
      approch: ``
   });

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
                  display: 'flex',
                  justifyContent: 'center',
                  bgcolor: 'black'
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
                     <Typography
                     variant='h4'
                  >
                     {
                        algoDetails.title
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
            </Container>
         </ThemeProvider>
      </Container>
   )
}

export default AlgorithmPage;