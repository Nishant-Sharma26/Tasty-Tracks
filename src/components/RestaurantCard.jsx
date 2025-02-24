import { CDN_URL } from "../uttils/constants";
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId = "", // Default empty string
    name = "Unknown Restaurant", // Default name
    avgRating = "N/A", // Default rating
    cuisines = [], // Default empty array
  } = resData|| {}; // Fallback to an empty object if resData.info is undefined
  const { deliveryTime = "N/A" } = resData.sla || {}; // Default delivery time
  
  return (                         
    <Card data-testid = "res-card" sx={{ width: 340, height: 480, m: 2, p: 2, backgroundColor: "#f0f0f0", borderRadius: '40px' }}>
      <CardMedia 
        sx={{ height: 250, width: 300, borderRadius: '25px' }}
        component="img"
        height="140"
        image={cloudinaryImageId ? CDN_URL + cloudinaryImageId : "/default-image.png"} // Fallback to default image
        alt="Restaurant logo"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cuisines.length > 0 ? cuisines.join(", ") : "Cuisines not available"}
        </Typography>
        <Box mt={1} sx={{ display: "flex" }}>
          <Typography mr={2} variant="body1" component="div">
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

// Higher Order Component (HOC)
export const withIsOpenlabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div style={{ position: "relative" }}>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Closed</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
