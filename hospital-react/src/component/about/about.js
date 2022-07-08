import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './about.css';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {GiHospitalCross} from 'react-icons/gi';


export default function MultiActionAreaCard() {
  return (
      <div className="card" id='about'>
       
        <h4 className="h4-about"><span className='logo'><GiHospitalCross /></span>  Hospital Inform About.</h4>

          <div className='row'>

            <div className='col-md-4'>
            <Card sx={{ maxWidth: 345 }}>

              <CardActionArea>
                <div className='cardMedias'>
                <CardMedia
                  border-radius='20'
                  component="img"
                  height="40"
                  image="contemplative-reptile.jpg"
                  alt="green iguana"
                />
                </div>
        
                <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                    Quality
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
              </Card>
            </div>

            <div className='col-md-4'>
            <Card sx={{ maxWidth: 345 }}>

              <CardActionArea>
                <div className='cardMedias'>
                <CardMedia
                  component="img"
                  height="40"
                  image=""
                  alt="green iguana"
                />
                </div>
        
                <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                    Reality
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
              </Card>
            </div>

            <div className='col-md-4'>
            <Card sx={{ maxWidth: 345 }}>

              <CardActionArea>
                <div className='cardMedias'>
                <CardMedia
                  component="img"
                  height="40"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                </div>
        
                <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                    Availability
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
              </Card>
            </div>
          </div>
      </div>
    
  );
}
