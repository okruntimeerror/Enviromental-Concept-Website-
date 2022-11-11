import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import logo1 from '../../assets/Images/kraftpaperstraws_960x.webp'
import logo2 from '../../assets/Images/boat_960x.webp'
import logo3 from '../../assets/Images/cutleryset1_960x.webp'
export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {logo1}  
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Paper Straws
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Single use Enviromentally minded and sources straws for your buisness
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export  function ActionAreaCard2() {
  return (
    <Card sx={{ maxWidth: 250  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {logo2}  
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Single Use Serving tray
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Single use Enviromentally minded and sources straws for your buisness
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export  function ActionAreaCard3() {
  return (
    <Card sx={{ maxWidth: 250,  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {logo3}  
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bamboo Utencils
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Single use Enviromentally minded and sources straws for your buisness
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}