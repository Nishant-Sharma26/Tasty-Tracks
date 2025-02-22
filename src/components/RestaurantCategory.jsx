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
      {/* Make the whole line clickable */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion} // Add the onClick to the parent div
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        {/* Button icon, but the click is handled by the parent div */}
        <button>
          {isOpen ? "🔼" : "🔽"}
        </button>
      </div>

      {/* Conditionally render the ItemList based on isOpen */}
      {isOpen && <ItemList items={data.itemCards} dummy={dummy} />}
    </div>
  );
};

export default RestaurantCategory;
