import React, { useEffect, useState } from 'react';
import Header from './Layout/Header';
import { useNavigate } from 'react-router-dom';
import slugify from 'slugify';

import {
   Box,
   Button,
   Card,
   Checkbox,
   Container,
   Divider,
   FormControl,
   FormControlLabel,
   FormGroup,
   FormLabel,
   Typography
} from '@mui/material';

import {
   blueGrey,
   green,
   grey,
   lime,
   red,
} from '@mui/material/colors';

import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import apiList from '../lib/apiList';


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
            background: blueGrey[800],
            borderRadius: '1rem',
            p: '1.5rem 2rem',
            m: '1rem 0'
         }}
      >
         <Box
            sx={{
               color: grey[300],
            }}
         >
            <Typography
               fontSize={'1.4375rem'}
               fontWeight={700}
            >
               {problem.title.charAt(0).toUpperCase()+problem.title.slice(1)}
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
               display: 'flex',
               alignItems: 'center',
               // position:'relative'
            }}
         >
            <Button
               disableRipple
               variant='contained'
               onClick={handleClick}
               endIcon={<SendIcon />}
               sx={{
                  position: 'inherit',
                  fontFamily: 'inherit'
               }}
            >
               Analyse
            </Button>
         </Box>
      </Card>
   )
}

const MyFormControlLabel = ({ label, setState }) => {

   const handleChange = (event) => {
      const value = event.target.value;
      setState((preState) => {
         const newState = { ...preState };
         Object.entries(preState).some(([entryKey, entryVal]) =>
            Object.entries(entryVal).some(([key, val]) => {
               if (value === key) {
                  newState[entryKey] = {...entryVal , [key] : !val } ;
                  return true;
               }
            })
         )
         return newState ;
      });
   }
   return (
      <FormControlLabel
         control={
            <Checkbox
               value={label}
               style={{
                  color: '#00e676',
                  padding: '0.3125rem'
               }}
               onChange={handleChange}
            />
         }
         label={label}
      />
   );
};

const ProblemList = () => {

   const navigate = useNavigate();

   const [state, setState] = useState({
      tags: {
         Array: false,
         String: false,
         Graph: false,
         Dp: false,
         SlidingWindow: false,
         Trie: false
      },
      difficulty: {
         Easy: false,
         Medium: false,
         Hard: false
      }
   });


   const [problemList, setProblemList] = useState([]);
   const [problemCache, setProblemCache] = useState([]);

   useEffect(() => {

      const filterList = () => {
         setProblemList(() => {
            const newList = problemCache.filter(problem =>
               Object.entries(state).some(([entry, entryVal]) =>
                  Object.entries(entryVal).some(([key, val]) =>
                     val && problem[entry] === key
                  )
               )
            )
            return !newList.length ?  problemCache : newList ;
         })
      };
      filterList();

   }, [state]);


   useEffect(() => {
      const fetchDetails = async () => {
         try {
            const response = await axios.get(`${apiList.server}/data-structure`);
            setProblemCache(response.data);
            setProblemList(response.data);
            // console.log(response.data);
         }
         catch (err) {
            console.error(err);
         }
      };
      fetchDetails();

   }, []);

   return (
      <Container
         maxWidth={false}
         disableGutters
         sx={{
            background: blueGrey[900],
            minHeight:'100vh'
         }}
      >
         <Header />

         <Container
            disableGutters
            sx={{
               display: 'grid',
               gridTemplateColumns: '25% auto',
               gap: '2rem'
            }}
         >
            <Box>
               <Box
                  component={'section'}
                  sx={{
                     position: 'fixed',
                     py: '4rem ',
                     color: 'white',
                  }}
               >
                  <FormControl
                     component={'fieldset'}
                     variant='standard'
                     sx={{
                        marginLeft: '3rem'
                     }}
                  >
                     <FormLabel
                        component={'legend'}
                     >
                        <Typography variant='h5' color={grey[300]} >Difficulty</Typography>
                     </FormLabel>

                     <FormGroup sx={{ padding: '0.25rem' }}>
                        {Object.entries(state.difficulty).map(([key, isChecked]) =>
                           <MyFormControlLabel
                              label={key}
                              checked={isChecked}
                              setState={setState}
                           />
                        )}
                     </FormGroup>
                  </FormControl>

                  <Divider
                     variant='middle'
                     sx={{
                        borderColor: grey[600],
                        my: '0.5rem'
                     }}
                  />

                  <FormControl
                     component={'fieldset'}
                     variant='standard'
                     sx={{
                        marginLeft: '3rem'
                     }}
                  >
                     <FormLabel
                        component={'legend'}
                     >
                        <Typography variant='h5' color={grey[300]} >Problem Tag</Typography>
                     </FormLabel>

                     <FormGroup sx={{ padding: '0.25rem' }}>
                        {Object.entries(state.tags).map(([key, isChecked]) =>
                           <MyFormControlLabel
                              label={key}
                              checked={isChecked}
                              setState={setState}
                           />
                        )}
                     </FormGroup>
                  </FormControl>
                  <Divider
                     variant='middle'
                     sx={{
                        borderColor: grey[600],
                        my: '0.5rem'
                     }}
                  />
                  <Button
                     endIcon={<AddIcon />}
                     variant='contained'
                     color='secondary'
                     onClick={()=>navigate('input/input-problem')}
                     sx={{
                       m:'0.375rem 2rem'
                     }}
                   >
                     contribute
                  </Button>

               </Box>
            </Box>

            <Box
               sx={{
                  py: '3rem',
                  pr: '5rem'
               }}
            >
               {problemList.map((problem, index) =>
                  <TitleCard key={index} problem={problem} />)}
            </Box>

         </Container>
      </Container>
   )
}

export default ProblemList;

