import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../uttils/useRestaurantMenu";

const RestaurantMenu = () => {
   
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);


    if (resInfo === null) return <Shimmer />;

    const { name, cuisines = [], costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info || {};
    const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];

    const itemCards2 = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

    return (
        <div className="menu">
            <div className="menu-first-card">
                <h3>{name}</h3>
                <p>{cuisines.join(", ")}</p>
                <p>{costForTwoMessage}</p>
            </div>
            <h3>Menu</h3>
            <ul>
                {itemCards.length > 0 ? (
                    itemCards.map((item) => (
                        <li key={item.card.info.id}>
                            {item.card.info.name} - Rs {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                        </li>
                    ))
                ) :itemCards2.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - Rs {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
