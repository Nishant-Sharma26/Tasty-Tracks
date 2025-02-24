import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../uttils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
   
    const { resId } = useParams();

    const dummy = "Dummy data";

    const resInfo = useRestaurantMenu(resId);


    if (resInfo === null) return <Shimmer />;

    const {name, cuisines = [], costForTwoMessage } = resInfo?.info || {};
   

    const categories = resInfo?.menu.filter(c=>c.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory' );

    return (
        <div className="text-center">
           
                <h1 className="font-bold my-4 text-2xl"> {name}</h1>
                <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}

                </p>
                {/* categories accordation */}
                {categories.map((category)=>(
                        <RestaurantCategory data = {category?.card?.card} key = {category?.card?.card?.title} dummy = {dummy}/>
                ))}
                  
        </div>
    );
};

export default RestaurantMenu;
