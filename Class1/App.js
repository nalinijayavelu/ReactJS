import React from "react";
import ReactDOM from "react-dom/client";
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

const heading = (
  <h1 id="heading" key="h2">
    Namaste React
  </h1>
);

const Title = () => (
  <h1 id="title" key="h3">
    Namaste Everyone
  </h1>
);

var xyz = 10;
//Funcational component
const HeaderComponent = () => {
  return (
    <div>
      {xyz}
      {console.log("React JS")}
      <Title />
      {heading}
      <h1>Namaste React FC</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeaderComponent />);
