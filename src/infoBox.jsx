import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./infoBox.css";

export default function InfoBox({info}){
    let init_url = "https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8fDA%3D"
   let hot_url ="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
   let cold_url ="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
   let rainy_url = "https://images.unsplash.com/photo-1635823288719-93f2c8ac7f3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    return(
        <div className="infoBox">
           
            <div className='card-container'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? rainy_url : info.temp >15 ?hot_url:cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity>80 ? ThunderstormIcon : info.temp >15 ? WbSunnyIcon: AcUnitIcon}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min temp = {info.temp_min}</p>
          <p>Max temp = {info.temp_max}</p>
          <p>
            The Weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C
          </p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    )
}
