import React from "react";
import { Link } from "react-router-dom";

export default function Logout({ IsLoggedIn, handleLogout }) {
    // const handleLogout = () => {
    //     onLogout();
    // };
console.log(IsLoggedIn)
    return (
        <div>
            <h2>Welcome!</h2>
            <button onClick={handleLogout}>Log out</button>
        </div>
    );
}
