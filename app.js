const parent = React.createElement(
    "div", {id:'container'}, 
        React.createElement(
        "h1", {id:'hdng'}, 
            "Hello world from React"
    )
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);