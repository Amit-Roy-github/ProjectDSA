import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid2, Typography } from '@mui/material'
import React from 'react'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { grey } from '@mui/material/colors';

const Content = () => {
  return (
     <Container sx={{py:'4rem'}}>
        <Grid2
           sx={{
              px:'1rem',
              display:'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '2rem',

           }}
        >
           <Card
              variant='outlined'
              sx={{
                 background: '#ffffff0d',
                 color: 'white',
                 px: '1rem',
                 borderRadius:'2rem'
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
                 <Typography variant='h5' color='white' paddingBottom={'0'} >Dsa series</Typography>
                 <Typography variant='subtitle2' color={grey[700]} fontWeight={550} >Boost your DSA skills </Typography>
              </CardContent>
              <CardActions sx={{px:'2rem' , marginBottom:'1rem'}} >
                 <Button variant='contained'  >Learn</Button>
              </CardActions>
           </Card>
           <Card
              variant='outlined'
              sx={{
                 background: '#ffffff0d',
                 color: 'white',
                 px: '1rem',
                 borderRadius:'2rem'
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
                 <Typography variant='h5' color='white' paddingBottom={'0'} >Algorithms</Typography>
                 <Typography variant='subtitle2' color={grey[700]} fontWeight={550} >Strengthen your algorithmic knowledge </Typography>
              </CardContent>
              <CardActions sx={{px:'2rem' , marginBottom:'1rem'}} >
                 <Button variant='contained'  >Learn</Button>
              </CardActions>
           </Card>
           <Card
              variant='outlined'
              sx={{
                 background: '#ffffff0d',
                 color: 'white',
                 px: '1rem',
                 borderRadius:'2rem'
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
                 <Typography variant='h5' color='white' paddingBottom={'0'} >Technical blogs</Typography>
                 <Typography variant='subtitle2' color={grey[700]} fontWeight={550} >Dive deep into Tech innovation</Typography>
              </CardContent>
              <CardActions sx={{px:'2rem' , marginBottom:'1rem'}} >
                 <Button variant='contained'  >Learn</Button>
              </CardActions>
           </Card>
           <Card
              variant='outlined'
              sx={{
                 background: '#ffffff0d',
                 color: 'white',
                 px: '1rem',
                 borderRadius:'2rem'
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
                 <Typography variant='h5' color='white' paddingBottom={'0'} >Cs subjects</Typography>
                 <Typography variant='subtitle2' color={grey[700]} fontWeight={550} >Strengthen your understanding of CS topics </Typography>
              </CardContent>
              <CardActions sx={{px:'2rem' , marginBottom:'1rem'}} >
                 <Button variant='contained'  >Learn</Button>
              </CardActions>
           </Card>
           <Card
              variant='outlined'
              sx={{
                 background: '#ffffff0d',
                 color: 'white',
                 px: '1rem',
                 borderRadius:'2rem'
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
                 <Typography variant='h5' color='white' paddingBottom={'0'} >System Design</Typography>
                 <Typography variant='subtitle2' color={grey[700]} fontWeight={550} >Design better system with our simplified approch </Typography>
              </CardContent>
              <CardActions sx={{px:'2rem' , marginBottom:'1rem'}} >
                 <Button variant='contained'  >Learn</Button>
              </CardActions>
           </Card>
           <Card
              variant='outlined'
              sx={{
                 background: '#ffffff0d',
                 color: 'white',
                 px: '1rem',
                 borderRadius:'2rem'
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
                 <Typography variant='h5' color='white' paddingBottom={'0'} >CP Sheet</Typography>
                 <Typography variant='subtitle2' color={grey[700]} fontWeight={550} >Level up your coding game with cp source </Typography>
              </CardContent>
              <CardActions sx={{px:'2rem' , marginBottom:'1rem'}} >
                 <Button variant='contained'  >Learn</Button>
              </CardActions>
           </Card>
        </Grid2>
    </Container>
  )
}

export default Content;