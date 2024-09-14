import { useDispatch } from "react-redux";

import { addItem } from "../uttils/cartSlice";
const CDN_URL2 =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

const ItemList = ({ items }) => {
  
  const dispatch = useDispatch();

  const handleAddItem = (item) =>{
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="p-4 m-4 border-gray-400 border-b-2 text-left flex justify-between items-start"
          >
            <div className="w-8/12">
              <span className="text-lg font-semibold">{item?.card?.info?.name}</span>
              <div className="py-2 text-md font-medium text-gray-600">
                Rs
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </div>
              <p className="text-gray-700 py-2">{item?.card?.info?.description}</p>
            </div>

            <div className="w-4/12 flex flex-col items-center">
              <img
                src={`${CDN_URL2}${item?.card?.info?.imageId}`}
                alt="food-item"
                className="w-full h-40 object-cover rounded-lg"
              />
              <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg shadow-lg hover:bg-gray-800"
              
              onClick ={()=>handleAddItem(item)}>
           
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
