import { restaurentList } from "./config";
import RestaurentCard from "./RestaurentCard";
import { useState } from "react";

function filterData(searchtxt, restaurentsList) {
  console.log("searchtxt ", searchtxt);
  console.log("restaurentsList ", restaurentsList);
  const result = restaurentsList.filter((restau) =>
    restau.data.data.name.toLowerCase().includes(searchtxt.toLowerCase())
  );
  return result;
}

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchClicked, setSearchclicked] = useState(false);
  const [restaurants, setRestaurents] = useState(restaurentList);
  return (
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
            setRestaurents(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurent-list">
        {/* <RestaurentList /> */}
        {/* <RestaurentCard restaurant={restaurentList[0]} />
        <RestaurentCard restaurant={restaurentList[1]} />
        <RestaurentCard restaurant={restaurentList[2]} /> */}
        {restaurants.map((restaurent) => {
          return (
            <RestaurentCard
              {...restaurent.data.data}
              key={restaurent.data.data.id}
            />
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
