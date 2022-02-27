// Import the React and the ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a React Component
const App = () => {

    const buttonText = 'Click Me!';

    return (
        <div>
            <label className="label" htmlFor="name">
                Enter name:
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText}</button>
        </div>);
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);