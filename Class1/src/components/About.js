import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
const About = () => {
  return (
    <div>
      <h1>About Us page</h1>
      <h2>Food Delivery App</h2>
      {/* <Outlet /> */}
      <ProfileClass name={"Nalini"} />
    </div>
  );
};
export default About;
