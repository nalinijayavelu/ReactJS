import { useState, useEffect } from "react";
import { FETCH_MENU } from "../components/config";
const useRestaurant = (id) => {
  const [restaurant, setRestaurents] = useState(null);

  useEffect(() => {
    getRestaurentInfo();
  }, []);

  async function getRestaurentInfo() {
    const data = await fetch(FETCH_MENU + id);
    const json = await data.json();
    console.log(json.data);
    setRestaurents(json.data);
  }
  return restaurant;
};
export default useRestaurant;
