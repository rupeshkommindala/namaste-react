import { RES_LOGO } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, costForTwo, cuisines, avgRating, sla, cloudinaryImageId } =
    resData.info;
  return (
    <div className="res-card">
      <img
        src={
          RES_LOGO +
          cloudinaryImageId
        }
        className="res-image"
        alt="res-image"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};
export default RestaurantCard;
