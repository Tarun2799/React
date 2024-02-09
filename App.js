

const heading = React.createElement(
    "h1", 
    { id:"heading", abc: "xyz"}, 
    "Hello world from react!"
    );

console.log(heading); // This is a JS Object.

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(heading); // ye render function convert karta html element, react element ko.