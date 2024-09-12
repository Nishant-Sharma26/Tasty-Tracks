import { useEffect, useState } from "react";
import { RESMENU_URL1 } from "../uttils/constants";
 

const useRestaurantMenu = (resId) =>{
    const [resInfo,setResInfo] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
            const data = await fetch(
                `${RESMENU_URL1}${resId}`
            );
            const json = await data.json();
           // console.log(json);
            setResInfo(json.data);
        
    };

    return resInfo;
};

export default useRestaurantMenu;