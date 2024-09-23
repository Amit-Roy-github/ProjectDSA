import {
   Box,
   Container,
   Paper,
   Typography,
   createTheme,
   ThemeProvider
} from '@mui/material'
import React, { useState } from 'react'
import Header from './Layout/Header'


const theme = createTheme({
   components: {
      MuiTypography: {
         styleOverrides: {
            p: {
               marginBottom: '7px'
            },
            h3: {
               marginBottom: '2rem',
            },
            h6: {
               // textAlign:'center',
               margin: '1rem 0 0.3125rem'
            }
         }
      }
   },
   typography: {
      fontFamily: 'verdana , sans-serif',
   },

});

const Blog = () => {

   const [blog, setBlog] = useState({
      title: 'Oops',
      explanation :  ` It is computer program model that organises software design around data or objects \n
       The main aim of the oop is to bind together the data and functins operates on them so that no other part of the code can access this except that fnnctions
       `,
    contents : [
      {
         tag: 'Class',
         content: `Classes are user-defind data types consists of data members and member functions which can be accessed or used by creating an instances of that class`,
      },
      {
         tag: 'Object',
         content: `Objects are the instances of classes with specifically defined data. An object has its own properties.`,
      },
      {
         tag: 'Encapsulation',
         content: `It is an important concept of oop ,
                  It is method of binding data and methods together .
                  Only objects allowed to access their entities .
                  It protects the internal state of the object by keeping the data memberprivate .
                  This method applied at the implementation level .
                  ` ,
      },
      {
         tag: 'Abstaction',
         content: `It is an important concept of oop.
                  It is a method of hiding unwanted information .
                  It means displaying only essential information to the outside world anhiding the background details and implementation.
                  This method applied at the Design level .
                        ` ,
      },
      {
         tag: 'Polymorphism',
         content: `It means ability of a message to be displayed in many forms`,
      },
      {
         tag:'Runtime Polymorphism' ,
         content: `This type of polymorphism is achieved by function Overriding
         Late Binding and Dynamic polymorphism are the other names of runtime polymorphism.
         `,
      },
      {
         tag: 'Function overriding',
         content: `It occurs when a derived class has defination of one of the memeber functions of the base class
         Then the base class is said to be overriden.
         In this parent class reference always refers to data member of parent class .
         And derived class reference always refers to data member of derived class .
         ` ,
      },
      {
         tag:'Virtual Function' ,
         content: `It is member function declared by using virtual keyword in the base class and
         Re-defined or overridden in the derived class .
         Virtual function is called during runtime.
         Runtime polymorphism achived by only through a pointer of base class type .
         `,
      },
      {
         tag: 'Compiletime polymorphism',
         content:`This type of polymorphism is achieved by function or operator overloading` ,
       },
       {
          tag: 'Function overloading',
          content:`When there are multiple functions with the same name but different parameters , then the functions are said to be overloaded.`
      },
       {
          tag: 'Operator overloading',
          content:`C++ has ability to provide the operator with special meaning for a data type.`
      },
       {
          tag: 'Inheritance',
          content:`The capability of a class to derive properties and characteristic of another class`
       },
       {
          tag: 'Multiple Inheritence',
          content:`A class can derive properties for more than one class .`
       },
       {
          tag: 'Multilevel Inheritence',
          content:`A class can derive properties from another derive class .`
       },
       {
          tag: 'Hierarchial Inheritence',
          content:`More than one subclass can Inherit properties from a single base class`
       },
       {
          tag: 'Hybrid Inheritence',
          content:`Combination of more than one Inheritance`
       },
       {
          tag: 'Friend class',
          content:`A friend class can access private and protected member of other class in which it is declared as friend .`
       },
       {
          tag: 'Friend function ',
          content: `By declaring a friend function is a way to private access to non-member function.
          They are not member function but can access the  private and protected member of that class .
          It can be Global function or member function of another class .
          `
       },
       {
          tag: 'Scope resolution',
          content: `To access Global variables.
          To define function outside class.
          To access class static variables .
          Refer to a class inside another class .
          `
       },
       {
          tag: 'Static member',
          content: `Just like static valiable once declared allocated with memory that cann't be change
          Every object points to the same memory location .
          Only one member of that class is created for the entire class and is shared by all the object .
          Its lifetime is entire Program .
          Can accessed without an object .
          Define outside the class .
          `
       },
      ]
})
   return (
      <ThemeProvider theme={theme} >
         <Container
            maxWidth
            disableGutters
         >
            <Header />
            <Box
               sx={{
                  py: '1rem',
                  display: 'flex',
                  justifyContent: 'center'
               }}
            >
               <Paper
                  sx={{
                     p: '1rem 2rem',
                     width: '70%'
                  }}
               >
                  <Typography
                     variant='h3'
                     sx={{

                     }}
                  >
                     {blog.title}
                  </Typography>
                  <Typography
                     whiteSpace={'pre-line'}
                  >
                     {
                       blog.explanation
                     }
                  </Typography>
                  {
                     blog.contents.map((content) =>
                        <Box>
                           <Typography variant='h6'>{content.tag+':'}</Typography>
                           <Typography whiteSpace={'pre-line'} >{content.content}</Typography>
                        </Box>
                     )
                  }
               </Paper>
            </Box>
         </Container>
      </ThemeProvider>
   )
}

export default Blog