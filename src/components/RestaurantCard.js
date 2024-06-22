import { CDN_URL } from "./utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, cuisines, name, avgRating, costForTwo } =
    resData?.card.card.info;
  const { slaString } = resData?.card.card.info.sla;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
