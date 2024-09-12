import { TextField } from '@mui/material';
import React from 'react'

const EmailInput = (proops) => {
   // console.log(proops);

   const {
      label,
      value,
      onChange,
      inputErrorHandler,
      handleInputError,
      required,
   } = proops;

   return (
      <TextField
         label={label}
         required
         value={value}
         onChange={onChange}
         helperText={inputErrorHandler.email.message}
         onBlur={(event) => {
            if (event.target.value === '') {
               if (required) handleInputError('email', true, "Email is required")
               else handleInputError('email', false, '');
            }
            else {
               const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
               if (re.test(String(event.target.value).toLowerCase())) {
                  handleInputError("email", false, "");
               } else {
                  handleInputError("email", true, "Incorrect email format");
               }
            }
         }}
         error={(inputErrorHandler.email.message ? inputErrorHandler.email.error : null) }
      />
   );
};

export default EmailInput;