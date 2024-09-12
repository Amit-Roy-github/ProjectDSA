import {  TextField } from '@mui/material'
import React from 'react'

const PasswordInput = (proops) => {
   const {
      required,
      value,
      label,
      onChange,
      inputErrorHandler,
      handleInputError,
   } = proops;

  return (
     <TextField
        required
        label={label}
        value={value}
        onChange={onChange}
        error={inputErrorHandler.password.message?inputErrorHandler.password.error:null}
        helperText={inputErrorHandler.password.message}
        onBlur={(event) => {
           if (event.target.value === '') {
               if(required) handleInputError('password', true, 'Field is required');
               else handleInputError('password', false, '');
           }
           else handleInputError('password', false, '');
        }}
     />
  )
}

export default PasswordInput