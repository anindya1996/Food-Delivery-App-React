import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log("resData: ", resData);

  const { cloudinaryImageId, name, avgRating, cuisines, sla } = resData?.info;
  console.log(cloudinaryImageId);
  return (
    <div className="p-4 w-[200px] mr-4 ml-[50px] transition-transform transform hover:scale-95 rounded-lg h-[350px]">
      <img
        className="rounded-lg "
        src={CDN_URL + cloudinaryImageId}
        alt="burger-photo"
      ></img>

      <h3 className="font-bold text-lg">
        {" "}
        {name.length > 18 ? name.substring(0, 14) + "..." : name}
      </h3>

      <h4 className="py-2">
        ⭐{avgRating}
        <span className="pl-2 pr-2">◉</span>
        <span className="delivery-time">{sla?.slaString} </span>
      </h4>

      <h4 className="">{formatCuisines(cuisines)}</h4>
    </div>
  );
};

const formatCuisines = (cuisines, maxCuisines = 6) =>
  cuisines.length <= maxCuisines / 2
    ? cuisines.join(", ")
    : `${cuisines.slice(0, maxCuisines / 2).join(", ")} ...`;

// const formatCuisines = (cuisines) => {
//   const maxCuisines = 6; // Maximum number of cuisines to display without ellipsis

//   if (cuisines.length <= maxCuisines / 2) {
//     return cuisines.join(", ");
//   } else {
//     const firstLine = cuisines.slice(0, maxCuisines / 2).join(", ");

//     return `${firstLine} ...`;
//   }
// };

//Higher Order Component

// input - RestaurantCard =>> RestaurantCardPromoted

export const withPromotedLabel = () => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
