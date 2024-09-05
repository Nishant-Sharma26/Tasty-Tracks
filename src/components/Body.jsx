import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Body = () => {
  const [resList, setResList] = useState([]);
  const [InitialresList,setInitialresList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
    const restaurants =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setResList(restaurants);
    setInitialresList(restaurants);
  };

  if (resList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="bg-slate-50">
      <div className="flex">
        <div className="mr-4 pl-4">
        <TextField id="outlined-basic" sx ={{ width: '220px', marginLeft:'5px'}}
         onChange={(e) => {
          setSearchText(e.target.value);
          const filterReslist = InitialresList.filter((res) =>
            res.info.name.toLowerCase().includes(e.target.value.toLowerCase())
          );
          setResList(filterReslist);
          if(e.target.value.length==0)
            setResList(InitialresList);
        }}
         label="Search" 
         variant="outlined" />
        
        </div>
        
        <Button variant="contained" sx = {{borderRadius:'20px', backgroundColor: 'light-blue'}}
           onClick={() => {
            const filteredResList = InitialresList.filter(
              (res) => res.info.avgRating > 4.5
            );
            setResList(filteredResList);
            console.log("button clicked");
          }}>Top Rated Restaurant </Button>
      </div>
      <div className="flex flex-wrap">
        {resList.map((restaurant) => (
          <Link key = {restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
          < RestaurantCard  resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
