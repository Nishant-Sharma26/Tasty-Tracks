import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import  { RESMENU_URL1 }from "../uttils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setresInfo] = useState(null);

     const {resId } = useParams();
     
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            RESMENU_URL1
            +
            resId
        );
        const json = await data.json();
        console.log(json);
        setresInfo(json.data);
    };

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines = [], costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
     
    console.log(itemCards);
    return (
        <div className="menu">
           <div className="menu-first-card">
            <h3>{name}</h3>
            <p>
                {cuisines.join(", ")}
            </p>
            <p>
            {costForTwoMessage}
            </p>
            </div>
            <h3>Menu</h3>
            <ul> 
             {itemCards.map((item)=>(
                <li key={item.card.info.id}>
                    {item.card.info.name}-{" Rs"}
                    {item.card.info.price/100 || item.card.info.defaultPrice/100}
                </li>
             ))}
            </ul>


        </div>
    );
};

export default RestaurantMenu;
