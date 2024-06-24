import { resList } from "./utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  //   var listOfRestaurant = [];

  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              filteredRestaurant = listOfRestaurant.filter((res) =>
                res.card.card.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              console.log(filteredRes);
              setFilteredRes(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = resList.filter(
              (res) => res.card.card.info.avgRating > 4
            );
            setListOfRestaurant(filtered);
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRes.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
