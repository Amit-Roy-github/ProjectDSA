import {
   Box,
   Container,
   Grid2,
   List,
   Link,
   Typography
} from '@mui/material';
import {
   grey
} from '@mui/material/colors';
import React from 'react'

const MyLink = ({ content }) => {
   return (
      <Link
         color='inherit'
         underline='hover'
         sx={{
            cursor: 'pointer'
         }}
      >{content}</Link>
   )
};

const Footer = () => {
   return (
      <Container
         maxWidth={false}
         disableGutters
         sx={{
            bgcolor: grey[900],
            color: grey[300]
         }}
      >
         <Grid2
            sx={{
               px: '2rem',
               py: '3rem',
               display: 'grid',
               gridTemplateColumns: '30% 70%'
            }}
         >
            <Box sx={{
               px: '1.5rem'
            }} >
               <Typography variant='h5'
               >HackerRank</Typography>
               <Typography
                  sx={{
                     fontSize: '0.8125rem',
                     my: '1rem'
                  }}
               >
                  The Best Place to learn data structure , algorithms , most asked coding interview questions are free of cost .
               </Typography>
               <Box>
                  Link
               </Box>
            </Box >

            <Box sx={{
               display: 'flex',
               justifyContent: 'space-around'
            }} >
               <Box
               >
                  <Typography
                     variant='body1'
                     marginBottom={'1rem'}
                     sx={{
                        fontSize: '0.9375rem'
                     }}
                  >Company</Typography>
                  <List
                     sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                     }}
                  >
                     <MyLink content={'about us'} />
                     <MyLink content={'contact us'} />
                     <MyLink content={'pricing'} />
                     <MyLink content={'privacy policy'} />
                     <MyLink content={'terms & conditions'} />
                  </List>
               </Box>

               <Box
               >
                  <Typography
                     variant='body1'
                     marginBottom={'1rem'}
                     sx={{
                        fontSize: '0.9375rem'
                     }}
                  >DSA Series</Typography>
                  <List
                     sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                     }}
                  >
                     <MyLink content={'dsa series'} />
                     <MyLink content={'graph series'} />
                     <MyLink content={'dp series'} />
                     <MyLink content={'string series'} />
                     <MyLink content={'trie series'} />
                  </List>
               </Box>

               <Box
               >
                  <Typography
                     variant='body1'
                     marginBottom={'1rem'}
                     sx={{
                        fontSize: '0.9375rem'
                     }}
                  >Algorithms</Typography>
                  <List
                     sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                     }}
                  >
                     <MyLink content={'string algorithms'} />
                     <MyLink content={'graph algorithms'} />
                  </List>
               </Box>
               
            </Box>
         </Grid2>
         <Typography
            sx={{
               textAlign: 'center',
               py: '1rem',
               borderTop: '0.0625rem solid',
               borderTopColor: grey[700]
            }}
         >
            copyright : &copy; {new Date().getFullYear()}  |  All rights reserved
         </Typography>
      </Container>
   )
}

export default Footer;