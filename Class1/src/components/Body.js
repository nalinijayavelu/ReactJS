import { restaurentList } from "./config";
import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import searchImage from "../images/search-icon.png";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [filteredRestaurents, setFilteredRestaurents] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurents] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setRestaurents(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurents(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>🔴Offline, Please check you internet Connectivity</h1>;
  }

  //early return (not render component)
  if (!restaurants) return null;

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-button"
          onClick={() => {
            //need to filter the data
            //update the state -restaurents
            const data = filterData(searchInput, restaurants);
            {
              console.log("data ", data);
            }
            setFilteredRestaurents(data);
          }}
        >
          <img src={searchImage} alt="search-image" className="search-image" />
        </button>
      </div>
      <div className="restaurent-list">
        {/* <RestaurentList /> */}
        {/* <RestaurentCard restaurant={restaurentList[0]} />
        <RestaurentCard restaurant={restaurentList[1]} />
        <RestaurentCard restaurant={restaurentList[2]} /> */}
        {filteredRestaurents.map((restaurent) => {
          console.log("------", restaurent);
          if (!filteredRestaurents) return null;
          return filteredRestaurents?.length === 0 ? (
            <Shimmer />
          ) : (
            <Link
              to={"/restaurent/" + restaurent.data.id}
              key={restaurent.data.id}
            >
              <RestaurentCard {...restaurent.data} key={restaurent.data.id} />
            </Link>
          );
        })}
        {/* <RestaurentCard {...restaurentList[0].data.data} />
        <RestaurentCard {...restaurentList[1].data.data} />
        <RestaurentCard {...restaurentList[2].data.data} />
        <RestaurentCard {...restaurentList[3].data.data} />
        <RestaurentCard {...restaurentList[4].data.data} />
        <RestaurentCard {...restaurentList[5].data.data} /> */}
      </div>
    </>
  );
};
export default Body;
