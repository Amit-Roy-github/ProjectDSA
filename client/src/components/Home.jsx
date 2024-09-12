import React from 'react';

import { Container } from '@mui/material';
import { green } from '@mui/material/colors';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Content from './Layout/Content';

const Home = () => {
  return (
     <>
        <Container
        maxWidth={false}
        disableGutters
        sx={{
           height:'100vh',
           bgcolor: green[900],
           fontFamily : ' Satoshi, Open Sans, sans-serif' ,
        }}
     >
        <Header />
         <Content />
        <Footer />
     </Container>
     </>
  )
}

export default Home