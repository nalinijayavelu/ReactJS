import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import { IMG_CDN_URL } from "./config";
import Shimmer from "./Shimmer";
const RestaurentMenu = () => {
  //read a dynamic url param
  const { id } = useParams();

  // const [restaurentMenu, setRestaurentMenu] = useState(null);

  const restaurentMenu = useRestaurant(id);
  // useEffect(() => {
  //   getRestaurentInfo();
  // }, []);

  // async function getRestaurentInfo() {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/menu/v4/full?menuId=" + id
  //   );
  //   const json = await data.json();
  //   console.log(json.data);
  //   setRestaurentMenu(json.data);
  // }

  return !restaurentMenu ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurent Id: {id}</h1>
        <h2>Meghanas Food</h2>
        <img src={IMG_CDN_URL + restaurentMenu?.cloudinaryImageId} />
        <h3>{restaurentMenu.area}</h3>
        <h3>{restaurentMenu.city}</h3>
        <h3>{restaurentMenu.avgRating}</h3>
        <h3>{restaurentMenu.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {/* {restaurentMenu} */}
          {console.log(Object.values(restaurentMenu.menu.items))}
          {Object.values(restaurentMenu?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurentMenu;
