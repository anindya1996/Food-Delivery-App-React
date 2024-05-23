import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-0">
              <span className="font-semibold ">{item.card.info.name}- </span>
              <span>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs p-2">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <div className="relative">
              <img
                src={
                  CDN_URL + item.card.info.imageId
                    ? CDN_URL + item.card.info.imageId
                    : ""
                }
                className="w-full font-thin text-xs pb-3 pt-0"
                alt={item.card.info.name}
                image
              ></img>
              <div className="absolute bottom-[-5px] left-0 right-0">
                <button
                  className=" p-[10px] mx-[60px] bg-white rounded-lg text-black shadow-lg text-xs"
                  onClick={() => handleAddItem(item)}
                >
                  Add+
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
