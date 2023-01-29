const RestaurentCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  // const { name, cuisines, cloudinaryImageId, lastMileTravelString } =
  //   restaurant.data.data;

  return (
    <div className="card">
      {/* <img
          className="card-img"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            restaurentList[0].data.data?.cloudinaryImageId
          }
          alt="restarentList"
        />
        {/* optional chaining ? on field name      */}
      {/* <h2>{restaurentList[0].data.data?.name}</h2>
        <h3>{restaurentList[0].data.data?.cuisines.join(",")}</h3>
        <h4>{restaurentList[0].data.data?.lastMileTravelString} minutes</h4> */}

      <img
        className="card-img"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="restarentList"
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};
export default RestaurentCard;
