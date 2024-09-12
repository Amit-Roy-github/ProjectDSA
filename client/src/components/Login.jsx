import {Paper ,  Typography, TextField, Button } from '@mui/material'
import { Container } from '@mui/material'
import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import EmailInput from '../lib/EmailInput'
import { setPopupContext } from '../App'
import axios from 'axios'
import apiList from '../lib/apiList'
import { green } from '@mui/material/colors'
import PasswordInput from '../lib/PasswordInput'

const Login = () => {
   const navigate = useNavigate();
   const setPopup = useContext(setPopupContext);

   const [loggedin, setLoggedin] = useState(false);

   const [loginDetails, setLoginDetails] = useState({
      email: '',
      password: '',
   });

   const [inputErrorHandler, setInputErrorHandler] = useState({
      email: {
         error: true,
         message: ""
      },
      password: {
         error: true,
         message: ''
      }
   });
   const handleInputError = (key, status , message) => {
      setInputErrorHandler({
         ...inputErrorHandler,
         [key]: {
            error: status,
            message: message,
         },
      });
   };
   const handleInput = (key, value) => {
      setLoginDetails({
         ...loginDetails,
         [key]: value,
      });
   };
   const handleLogin = () => {
      const verified = !Object.keys(inputErrorHandler).some((key) => {
         return inputErrorHandler[key].error === true;
      });
      if (verified)
      {
         axios.
            post(apiList.login, loginDetails)
            .then(response => {
               console.log(response);
               setPopup({
                  open: true,
                  severity: 'success',
                  message: 'Logged in successfully'
               });
                navigate('/');
            })
            .catch((err) => {
               // console.log("Error");
               console.log(err.response.data);
                setPopup({
                  open: true,
                   severity: 'error',
                   message: err.response.data ,
               });
            });
      }
      else {
          setPopup({
            open: true,
            severity: 'error',
            message: 'Incorrect input'
         });
      }
   }

   return  (
     <Container maxWidth={false}  sx={{display:'flex' ,justifyContent:'center' ,alignItems:'center', bgcolor:green[900]  }}>
        <Paper sx={{ width:'20rem',my:'5rem', marginBottom:'16rem', p:'2rem' , display:'flex' , flexDirection:'column', gap:'1rem'}}>
           <Typography textAlign={'center'} variant='h4' component={'h2'} >Login</Typography>
           <EmailInput
              required
              label='Email'
              value={loginDetails.email}
              onChange={(event) => handleInput('email', event.target.value)}
              inputErrorHandler={inputErrorHandler}
              handleInputError ={handleInputError}
           />
            <PasswordInput
               required
               label='Password'
               value={loginDetails.password}
               onChange={(event) => handleInput('password', event.target.value)}
               inputErrorHandler={inputErrorHandler}
               handleInputError = {handleInputError}
            />
           <Button
              variant='contained'
              color='primary'
              onClick={handleLogin}
           >
                 Login
            </Button>
            <Typography textAlign={'center'}>or</Typography>
            <Button
               variant='outlined'
               onClick={() => {
                  navigate('/signup');
               }}
            >
               Signup instead
            </Button>
        </Paper>
     </Container>
  )
}

export default Login