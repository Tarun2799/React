

// const heading = React.createElement(
//     "h1", 
//     { id:"heading", abc: "xyz"}, 
//     "Hello world from react!"
// );

// console.log(heading); // This is a JS Object.


// Let's create nested element in the react. 
// <div id="parent">
//     <div id="child">
//         <h1></h1>
//     </div>
// </div>

//First we have to create an element in React , now I know how to create one. 3rd Argument is Children here. (We can put a string there or a React Element) 
// const parent = React.createElement(
//     "div", 
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         React.createElement(
//             "h1",
//             {},
//             "I'm a h1 tag"
//         )
//     )
// );

// console.log(parent); // It is an Object: React element. Converting into HTML : while it is rendering on to the DOM, it converts itself into HTML element.



// Let's see how to create SIBLINGS in the div tag rather than children(nested elements). We use Array of children in the 3rd argument of the createElement().

// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         [
//             React.createElement("h1", {}, "I'm h1 tag"),
//             React.createElement("h2", {}, "I'm h2 tag")
//         ]
//     )
// );

// this will display an error in the CONSOLE , that each child should have a unique "key" prop. let's see this in another lecture. how to solve this.

// if we more complicate it more than one child.

const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
        "div",
        {id:"child1"},
        [
            React.createElement("h1",{}, "I'm h1 tag"),
            React.createElement("h2", {}, "I'm h2 tag")
        ]
        ),
        React.createElement(
            "div",
            {id:"child2"},
            [
                React.createElement("h1", {}, "I'm h1 tag"),
                React.createElement("h2", {}, "I'm h2 tag")
            ]
        )
    ]
);



const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(root);

// root.render(heading); // ye render function convert karta react element, HTML element ko.

root.render(parent);