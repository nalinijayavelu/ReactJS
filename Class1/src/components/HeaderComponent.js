import Title from "./Title";
const HeaderComponent = () => {
  return (
    <div className="header">
      {/* {title} */}
      {/* {xyz}
        {console.log("React JS")} */}
      {/* {heading} */}
      {/* <h1>Namaste React FC</h1> */}
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;
