import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box,  Divider,  ListItem, ListItemText, MenuItem, MenuList, Paper } from '@mui/material';
import { blue, green, grey } from '@mui/material/colors';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Header = () => {
   const navigate = useNavigate();
   const handleLogin = () => {
      console.log("Clicked");
      navigate('/login');
   }
   return (
         <Paper sx={{
            bgcolor: grey[900],  //'#121418' ,
            height: '4rem',
            px:'4rem'
         }}>
            <Box sx={{
               display: 'flex', alignItems: 'center', justifyContent: 'space-between',
               color:'white' , height:'100%',
            }}>
               <Box >
                  <MenuList sx={{ display: 'flex', fontSize: '14px', fontWeight: '600' }} >
                     <MenuItem>
                        <ListItem
                           onClick={() => {
                              navigate('/');
                           }}
                           sx={{
                        fontSize:'20px',fontWeight:'800'
                        }}>HackerRank</ListItem>
                     </MenuItem>
                     <MenuItem>
                        <Divider orientation='vertical' flexItem sx={{bgcolor:blue[100] , height:'1.75rem' , margin:'auto' }} />
                     </MenuItem>
                        <MenuItem >
                           <ListItemText sx={{fontSize:'14px' , fontWeight:'600'} } disableTypography  >Prepare</ListItemText>
                        </MenuItem>
                        <MenuItem>
                           <ListItemText sx={{fontSize:'14px' , fontWeight:'600'} } disableTypography  >Practice</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemText sx={{fontSize:'14px' , fontWeight:'600'} } disableTypography  >DSA</ListItemText>
                        </MenuItem>
                     </MenuList>
               </Box>
               <Box>
                  <MenuList sx={{display:'flex'}}>
                     <MenuItem><NotificationsNoneOutlinedIcon /></MenuItem>
                     <MenuItem><ListItemText sx={{ fontSize: '14px', fontWeight: '600' }} disableTypography
                        onClick={handleLogin}
                     >Login</ListItemText></MenuItem>
                  </MenuList>
               </Box>
            </Box>
         </Paper>
  )
}

export default Header;