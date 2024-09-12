import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid2, Typography } from '@mui/material'
import React from 'react'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { grey } from '@mui/material/colors';

const Content = () => {
  return (
     <Container>
        <Grid2
           sx={{
              p:'1rem',
              display:'grid',
              gridTemplateColumns: 'auto auto auto',
              gap: '2rem',
           }}
        >
           <Card
              variant='outlined'
              sx={{
                 background: '#ffffff0d',
                 color: 'white',
              }}
           >
              <CardMedia sx={{
                 p:'2rem 0 0 2rem'
              }} >
                 <MenuBookIcon
                    color='success'
                    sx={{
                    fontSize: '3.5rem',
                 }} />
              </CardMedia>
              <CardContent  >
                 <Typography variant='h5' color='white' paddingBottom={'10px'} >Dsa Series</Typography>
                 <Typography variant='subtitle2' color={grey[700]} fontWeight={550} >Boost your DSA skills </Typography>
              </CardContent>
              <CardActions >
                 <Button variant='contained'  >Learn</Button>
              </CardActions>
           </Card>
           <Card
              variant='outlined'
              sx={{
                 background: '#ffffff0d',
                 color: 'white',
              }}
           >
              <CardMedia sx={{
                 p:'2rem 0 0 2rem'
              }} >
                 <MenuBookIcon
                    color='success'
                    sx={{
                    fontSize: '3.5rem',
                 }} />
              </CardMedia>
              <CardContent  >
                 <Typography variant='h5' color='white' paddingBottom={'10px'} >Dsa Series</Typography>
                 <Typography variant='subtitle2' color={grey[700]} fontWeight={550} >Boost your DSA skills </Typography>
              </CardContent>
              <CardActions >
                 <Button variant='contained'  >Learn</Button>
              </CardActions>
           </Card>
           <Card
              variant='outlined'
              sx={{
                 background: '#ffffff0d',
                 color: 'white',
              }}
           >
              <CardMedia sx={{
                 p:'2rem 0 0 2rem'
              }} >
                 <MenuBookIcon
                    color='success'
                    sx={{
                    fontSize: '3.5rem',
                 }} />
              </CardMedia>
              <CardContent  >
                 <Typography variant='h5' color='white' paddingBottom={'10px'} >Dsa Series</Typography>
                 <Typography variant='subtitle2' color={grey[700]} fontWeight={550} >Boost your DSA skills </Typography>
              </CardContent>
              <CardActions >
                 <Button variant='contained'  >Learn</Button>
              </CardActions>
           </Card>

           <Card>d</Card>
           <Card>e</Card>
           <Card>f</Card>
        </Grid2>
    </Container>
  )
}

export default Content;