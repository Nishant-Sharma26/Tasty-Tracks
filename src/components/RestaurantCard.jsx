
import { CDN_URL } from "../uttils/constants";
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
  } = resData?.info;
  const { deliveryTime } = resData?.info.sla;

  return (
    <Card sx={{ maxWidth: 245, height:500 , m: 2, p: 2, backgroundColor: "#f0f0f0" }}>
      <CardMedia
        component="img"
        height="140"
        image={CDN_URL + cloudinaryImageId}
        alt="Restaurant logo"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cuisines.join(", ")}
        </Typography>
        <Box mt={1} sx={{display: "flex"}}>
          <Typography mr= {2} variant="body1" component="div">
            {avgRating} ⭐
          </Typography>
          <Typography variant="body1" component="div">
            {deliveryTime} min
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;
