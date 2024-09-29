import {
   Paper,
   Typography,
   TextField,
   Button
} from '@mui/material'

import {
   Container
} from '@mui/material'

import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import EmailInput from '../lib/EmailInput'
import PasswordInput from '../lib/PasswordInput'
import { setPopupContext } from '../App'
import axios from 'axios'
import apiList from '../lib/apiList'
import { green } from '@mui/material/colors'

const Signup = () => {
   const navigate = useNavigate();
   const setPopup = useContext(setPopupContext);

   const [signupDetails, setSignupDetails] = useState({
      username: '',
      email: '',
      password: ''
   });

   const [inputErrorHandler, setInputErrorHandler] = useState({
      email: {
         error: true,
         message: '',
      },
      password: {
         error: true,
         message: '',
      }
   });

   const handleInput = (key, value) => {
      setSignupDetails({
         ...signupDetails,
         [key]: value,
      });
   };

   const handleInputError = (key, status, message) => {
      setInputErrorHandler({
         ...inputErrorHandler,
         [key]: {
            error: status,
            message: message
         }
      });
   };

   const handleSignup = () => {

      const verified = !Object.keys(inputErrorHandler).some(key => {
         return inputErrorHandler[key].error === true;
      });

      if (verified) {
         axios.
            post(apiList.signup, signupDetails)
            .then(response => {
               setPopup({
                  open: true,
                  severity: 'success',
                  message: 'Signed up Successfully'
               });
               navigate('/');
            })
            .catch((err) => {
               setPopup({
                  open: true,
                  severity: 'error',
                  message: err.response.data
               });
            });
      }
      else {
         setPopup({
            open: true,
            severity: 'error',
            message: 'Incorrect input field'
         });
      }
   }
   
   return  (
      <Container
         maxWidth={false}
         sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: green[900]
         }}>
         <Paper
            sx={{
               width: '20rem',
               my: '5rem',
               marginBottom: '16rem',
               p: '2rem',
               display: 'flex',
               flexDirection: 'column',
               gap: '1rem'
            }}>
            <Typography
               textAlign={'center'}
               variant='h4'
               component={'h2'}
            >Sign up</Typography>
            <TextField
               required
               label='Username'
               value={signupDetails.username}
               onChange={(event) => handleInput('username' , event.target.value)}
            />
           <EmailInput
              required
              label='Email'
              value={signupDetails.email}
              onChange={(event) => handleInput('email', event.target.value)}
              inputErrorHandler={inputErrorHandler}
              handleInputError ={handleInputError}
           />
            <PasswordInput
               required
               label='Password'
               value={signupDetails.password}
               onChange={(event) => handleInput('password', event.target.value)}
               inputErrorHandler={inputErrorHandler}
               handleInputError = {handleInputError}
            />

           <Button
              variant='contained'
              color='primary'
              onClick={handleSignup}
           >
                 Signup
            </Button>
            <Typography
               textAlign={'center'}
            >
               or</Typography>
            <Button
               variant='outlined'
               onClick={() => {
                  navigate('/login');
               }}
            >
               Login instead
            </Button>
        </Paper>
     </Container>
  )
}


export default Signup