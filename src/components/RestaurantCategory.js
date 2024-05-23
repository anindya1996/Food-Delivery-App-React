import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, toggleShowIndex }) => {
  console.log(data.itemCards);
  const handleClick = () => {
    toggleShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 bg-gray-100 shadow-lg p-[16px] mx-auto my-[0.75rem] ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-base font-medium">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
