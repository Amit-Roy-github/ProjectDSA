import { Box , Container, Grid2, List ,Link, Typography } from '@mui/material'
import { grey } from '@mui/material/colors';
import React from 'react'

const Footer = () => {
  return (
     <Container
        maxWidth={false}
        disableGutters
        sx={{
           bgcolor:grey[900],
           color: grey[300]
        }}
     >
        <Grid2
           sx={{
              px: '2rem',
              py:'3rem' ,
              display: 'grid',
              gridTemplateColumns:'30% 70%'
           }}
        >
           <Box sx={{
              px:'1.5rem'
           }} >
              <Typography variant='h5'
              >HackerRank</Typography>
              <Typography
                 sx={{
                    fontSize: '13px',
                    my:'1rem'
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
              justifyContent:'space-around'
           }} >
              <Box
              >
                 <Typography
                    variant='body1'
                    marginBottom={'1rem'}
                    sx={{
                       fontSize:'15px'
                    }}
                 >Company</Typography>
                 <List
                    sx={{
                       display: 'flex',
                       flexDirection: 'column',
                       gap:'1rem'
                    }}
                 >
                    <Link
                       color='inherit'
                       underline='hover'
                       sx={{
                          cursor:'pointer'
                       }}
                    >About us</Link>
                    <Link
                       color='inherit'
                       underline='hover'
                       sx={{
                          cursor:'pointer'
                       }}
                    >Contact us</Link>
                    <Link
                       color='inherit'
                       underline='hover'
                       sx={{
                          cursor:'pointer'
                       }}
                    >Pricing</Link>
                    <Link
                       color='inherit'
                       underline='hover'
                       sx={{
                          cursor:'pointer'
                       }}
                    >Privacy Policy</Link>
                    <Link
                       color='inherit'
                       underline='hover'
                       sx={{
                          cursor:'pointer'
                       }}
                    >Terms & conditions</Link>
                 </List>
            </Box>
              <Box
              >
                 <Typography
                    variant='body1'
                    marginBottom={'1rem'}
                    sx={{
                       fontSize:'15px'
                    }}
                 >DSA Series</Typography>
                 <List
                    sx={{
                       display: 'flex',
                       flexDirection: 'column',
                       gap:'1rem'
                    }}
                 >
                    <Link
                       color='inherit'
                       underline='hover'
                       sx={{
                          cursor:'pointer'
                       }}
                    >array series</Link>
                    <Link
                       color='inherit'
                       underline='hover'
                       sx={{
                          cursor:'pointer'
                       }}
                    >graph series</Link>
                    <Link
                       color='inherit'
                       underline='hover'
                       sx={{
                          cursor:'pointer'
                       }}
                    >Dp series</Link>
                    <Link
                       color='inherit'
                       underline='hover'
                       sx={{
                          cursor:'pointer'
                       }}
                    >string series</Link>
                    <Link
                       color='inherit'
                       underline='hover'
                       sx={{
                          cursor:'pointer'
                       }}
                    >trie series</Link>
                 </List>
            </Box>
              <Box
              >
                 <Typography
                    variant='body1'
                    marginBottom={'1rem'}
                    sx={{
                       fontSize:'15px'
                    }}
                 >Algorithms</Typography>
                 <List
                    sx={{
                       display: 'flex',
                       flexDirection: 'column',
                       gap:'1rem'
                    }}
                 >
                    <Link
                       color='inherit'
                       underline='hover'
                       sx={{
                          cursor:'pointer'
                       }}
                    >string algorithms</Link>
                    <Link
                       color='inherit'
                       underline='hover'
                       sx={{
                          cursor:'pointer'
                       }}
                    >graph algorithms</Link>

                 </List>
            </Box>
           </Box>
        </Grid2>
        <Typography
           sx={{
              textAlign: 'center',
              py: '1rem',
              borderTop: '1px solid',
              borderTopColor:grey[700]
           }}
        >
           copyright : &copy; {new Date().getFullYear() }  |  All rights reserved
        </Typography>
     </Container>
  )
}

export default Footer;