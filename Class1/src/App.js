import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import HeaderComponent from "./components/HeaderComponent";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass";
// const heading = React.createElement(
//   "h1",
//   { id: "title1", key: "h1", className: "h1Title" },
//   "Heading 1"
// );
// const heading2 = React.createElement(
//   "h2",
//   { id: "title2", key: "h2", className: "h1Title" },
//   "Heading 2"
// );
//console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// const container = React.createElement("div", { div: "container" }, [
//   heading,
//   heading2,
// ]);

// const heading = (
//   <h1 id="heading" key="h2">
//     Namaste React
//   </h1>
// );

// const title = (
//   <h1 id="title" key="h3">
//     Food Villa
//   </h1>
// );

// var xyz = 10;
//Funcational component

// const burgerKing = {
//   name: "BurgerExpress",
//   image: { IMG_CDN_URL },

//   cuisine: ["Burger", "American"],
//   rating: "4.2",
// };
// const RestaurentList = () => {
//   return (
//     <div className="card">
//       <img className="card-img" src={burgerKing.image} alt="restaurent-card" />
//       <h2>{burgerKing.name}</h2>
//       <h3>{burgerKing.cuisine.join(",")}</h3>
//       <h4>{burgerKing.rating} stars</h4>
//     </div>
//   );
// };

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      {/* <About />
      <Contact />
      <Body /> */}
      {/* {Outlet} */}
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurent/:id",
        element: <RestaurentMenu />,
      },
    ],
  },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  //   errorElement: <Error />,
  // },
  // {
  //   path: "/about",
  //   element: <About />,
  //   errorElement: <Error />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<RouterProvider router={appRouter} />);
