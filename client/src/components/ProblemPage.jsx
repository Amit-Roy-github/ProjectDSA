import React, { useState } from 'react'
import Header from './Layout/Header';
import {
   Box,
   Container,
   ThemeProvider,
   Typography,
   createTheme,
   List,
   ListItem,
   styled,
} from '@mui/material';

import { blueGrey, grey } from '@mui/material/colors';

import "@fontsource/amaranth"

const theme = createTheme({
   typography: {
      fontFamily:
         '"Amarnath", cursive',
   },
});
const colorTheme = createTheme({
   typography: {
      body1: {
         color: grey[300],
      }
   },
});
const MyBox = styled(Box)({
   paddingBottom: '1.5rem',
});

const ProblemPage = () => {
   const [problem, setProblem] = useState({
      name: 'Two sum',
      statement: 'You are given an array of integers having length n and value Target t , print the pair of indices whose sum is equal to target .',
      note: 'Each Pair indices have to be unique . ',
      constraints: [
         "size of array <= 1e6 ",
         ' arr[i] <= 1e9',
         ' Target <=  1e9',
      ],
      example: [
         { input: 'n=4 , arr[] = 8393 , t = 5 ', output: 5, explanation: 'I am the explanation' },
         { input: 'n=4 , arr[] = 8393 , t = 5 ', output: 5, explanation: 'I am the explanation' }
      ],
   });

   return (
      <>
         <Container
            maxWidth={false}
            disableGutters
            sx={{
               background: blueGrey[900],
            }}>
            <Header />
            <Container
               maxWidth={false}
               sx={{
                  display: 'grid',
                  gridTemplateColumns: '20% 80%'
               }}
            >
               <Box>List</Box>
               <Container
                  component={'section'}
                  disableGutters
                  sx={{
                     p: '3rem 8rem'
                  }}
               >
                  <Box marginBottom={'2.5rem'}>
                     <ThemeProvider theme={theme} >
                        <Typography
                           variant='h4'
                           sx={{
                              color: grey[300],
                              fontWeight: '550'
                           }}
                        >{problem.name} </Typography>
                     </ThemeProvider>
                  </Box>
                  <ThemeProvider theme={colorTheme} >
                     <Box>
                        <MyBox>
                           <Typography
                              fontWeight={550}
                              my={'0.4375rem'}
                           >
                              Problem statement :
                           </Typography>
                           <Typography>
                              {problem.statement}
                           </Typography>
                        </MyBox>
                        <MyBox>
                           <Typography
                              fontWeight={550}
                              my={'0.4375rem'}
                           >
                              Note :
                           </Typography>
                           <Typography>
                              {problem.note}
                           </Typography>
                        </MyBox>
                        <MyBox>
                           <Typography
                              fontWeight={550}
                              my={'0.4375rem'}
                           >
                              Examples :
                           </Typography>
                           <Box sx={{ p: '0.5rem' }}>
                              {problem.example.map((element, index) =>
                                 <TestCase testCase={element} index={index} />
                              )}
                           </Box>
                        </MyBox>
                        <MyBox>
                           <Typography
                              fontWeight={550}
                              my={'6px'}
                           >
                              Contraints :
                           </Typography>
                           <List
                              disablePadding
                              sx={{
                                 listStyle: 'circle',
                                 px: '2rem'
                              }}>
                              {problem.constraints.map((element, index) => (
                                 <ListItem
                                    key={index}
                                    disablePadding
                                    sx={{
                                       display: 'list-item',
                                       fontSize: '0.9375rem',
                                       color: 'white'
                                    }}
                                 >
                                    <Typography>
                                       {element}
                                    </Typography>
                                 </ListItem>
                              ))}
                           </List>
                        </MyBox>
                     </Box>
                  </ThemeProvider>
               </Container>
            </Container>
         </Container>
      </>
   )
}

const TestCase = ({ testCase, index }) => {
   return (
      <>
         <Typography
            fontWeight={550}
            my={'0.4375rem'}
         >
            test-case {index + 1} :
         </Typography>
         <List
            key={`list-${index}`}
            disablePadding
            sx={{
               px: '0.4375rem'
            }}>
            <ListItem
               key={`input-${index}`}
               disablePadding
               sx={{
                  py: '0.25rem'
               }}>
               <Typography>
                  input format : {testCase.input}
               </Typography>
            </ListItem>
            <ListItem
               key={`output-${index}`}
               disablePadding
               sx={{
                  py: '0.25rem'

               }}>
               <Typography>
                  {'output\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0: ' + testCase.output}
               </Typography>
            </ListItem>
            <ListItem
               key={`explanation-${index}`}
               disablePadding
               sx={{
                  display: 'block',
                  py: '0.25rem'
               }}>
               <Typography>
                  explanation :
               </Typography>
               <Typography
                  px={'1.25rem'}
               > {testCase.explanation}
               </Typography>
            </ListItem>
         </List>
      </>
   )
};

export default ProblemPage ;