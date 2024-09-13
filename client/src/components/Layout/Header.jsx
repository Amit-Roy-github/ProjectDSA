import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
   Box,
   Divider,
   MenuItem,
   MenuList,
   Paper
} from '@mui/material';
import {
   blue,
   grey
} from '@mui/material/colors';

import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Header = () => {
   
   const navigate = useNavigate();
   const handleLogin = () => {
      navigate('/login');
   }
   return (
      <Paper sx={{
         bgcolor: grey[900],  //'#121418' ,
         height: '4.5rem',
         px: '4rem'
      }}>
         <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: 'white',
            height: '100%',
         }}>
            <Box >
               <MenuList sx={{
                  display: 'flex',
                  fontSize: '14px',
                  fontWeight: '600'
               }} >
                  <MenuItem key={1}
                     onClick={() => {
                        navigate('/');
                     }}
                     sx={{
                        fontSize: '20px',
                        fontWeight: '800',
                     }}>LetsCode
                  </MenuItem>
                  <MenuItem
                     key={2}
                  >
                     <Divider
                        orientation='vertical'
                        flexItem
                        sx={{
                           bgcolor: blue[100],
                           height: '1.75rem',
                           margin: 'auto'
                        }} />
                  </MenuItem>
                  <MenuItem
                     key={3}
                     sx={{
                        fontSize: '14px',
                        fontWeight: '600'
                     }}
                  >Prepare
                  </MenuItem>
                  <MenuItem key={4}
                     sx={{
                        fontSize: '14px',
                        fontWeight: '600'
                     }}
                  >Practice
                  </MenuItem>
                  <MenuItem
                     key={5}
                     sx={{
                        fontSize: '14px',
                        fontWeight: '600'
                     }}
                  >DSA
                  </MenuItem>
               </MenuList>
            </Box>
            <Box>
               <MenuList
                  sx={{
                     display: 'flex'
                  }}>
                  <MenuItem key={1}>
                     <NotificationsNoneOutlinedIcon />
                  </MenuItem>
                  <MenuItem
                     key={2}
                     sx={{
                        fontSize: '14px',
                        fontWeight: '600'
                     }}
                     onClick={handleLogin}
                  >Login</MenuItem>
               </MenuList>
            </Box>
         </Box>
      </Paper>
   )
}

export default Header;