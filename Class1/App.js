const heading = React.createElement(
  "h1",
  { id: "title1", className: "h1Title" },
  "Heading 1"
);
const heading2 = React.createElement(
  "h2",
  { id: "title2", className: "h1Title" },
  "Heading 2"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

const container = React.createElement("div", { div: "container" }, [
  heading,
  heading2,
]);
// root.render(heading);
root.render(container);
