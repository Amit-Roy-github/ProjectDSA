import { Button, Card, CardActions, CardContent, Container, Grid2, Typography } from '@mui/material'
import React from 'react'

const Content = () => {
  return (
     <Container>
        <Grid2
           sx={{
              p:'1rem',
              display:'grid',
              gridTemplateColumns: 'auto auto auto',
              gap: '1rem',
           }}
        >
           <Card
              variant='outlined'
              sx={{
                 background: 'transparent',
                 color:'white'
              }}
           >
              <CardContent  >
                 <Typography variant='h5' color='white' paddingBottom={'10px'} >Dsa Series</Typography>
                 <Typography variant='subtitle2' >Boost your DSA skills</Typography>
              </CardContent>
              <CardActions>
                 <Button  >Learn</Button>
              </CardActions>
           </Card>
           <Card>b</Card>
           <Card>c</Card>
           <Card>d</Card>
           <Card>e</Card>
           <Card>f</Card>
        </Grid2>
    </Container>
  )
}

export default Content;