import RestaurantCard ,{ withIsOpenlabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import React, { useEffect, useState , useContext} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UserContext from "../uttils/UserContext";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [initialResList, setInitialResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  const {loggedInUser,setuserName} = useContext(UserContext);
  const RestaurantCardOpened = withIsOpenlabel(RestaurantCard);

  console.log("body rendered", resList);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      console.log(json);
      const restaurants =
        json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      
      if (restaurants) {
        setResList(restaurants);
        setInitialResList(restaurants);
      } else {
        console.error("Restaurant data structure not found.");
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  // If the data is still being fetched, show the shimmer
 

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);

    const filteredResList = initialResList.filter((res) =>
      res.info.name.toLowerCase().includes(value.toLowerCase())
    );

    if (value.length === 0) {
      setResList(initialResList);
    } else {
      setResList(filteredResList);
    }
  };

  const handleTopRated = () => {
    const filteredResList = initialResList.filter(
      (res) => res.info.avgRating > 4.5
    );
    setResList(filteredResList);
  };

  return (
    <div className="bg-slate-50">
      <div className="flex">
        <div className="mr-4 pl-4">
          <TextField
            id="outlined-basic"
            sx={{ width: '220px', marginLeft: '5px' }}
            value={searchText}
            onChange={handleSearch}
            label="Search"
            variant="outlined"
          />
        </div>

        <Button
          variant="contained"
          sx={{ borderRadius: '20px' }}
          onClick={handleTopRated}
        >
          Top Rated Restaurant
        </Button>
        <div className="search  flex items-center flex-auto m-2 ">
          <label>Username</label>
          <input 
          className= "border border-black p-1"
          value = {loggedInUser}
          onChange = {(e)=>setuserName(e.target.value)}
          
          />
          
        </div>
      </div>

      {/* If no restaurants match the search */} 
      {resList.length === 0 && searchText.length !== 0 ? (
        <h1>No Restaurant available</h1>
      ) : (
        <div className="flex flex-wrap">
          {resList.map((restaurant) => (
            <Link key={restaurant.info.id}
             to={"/restaurants/" + restaurant.info.id}
             >
              {restaurant.info.isOpen === false ? (
                <RestaurantCardOpened resData = {restaurant}/>
              ):(
                <RestaurantCard resData={restaurant} />
              )
            }
             
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
