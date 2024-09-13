import React from 'react';

import { Container } from '@mui/material';
import {
   green,
   grey
} from '@mui/material/colors';
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
           bgcolor: '#0F0F0F',
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