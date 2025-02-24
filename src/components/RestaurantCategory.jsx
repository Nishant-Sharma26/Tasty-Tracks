import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, dummy }) => {
  // State to control whether the accordion is expanded or collapsed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the accordion
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-8/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
    
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion} 
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
     
        <button>
          {isOpen ? "🔼" : "🔽"}
        </button>
      </div>

     
      {isOpen && <ItemList items={data.itemCards} dummy={dummy} />}
    </div>
  );
};

export default RestaurantCategory;
