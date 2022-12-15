import React from "react";
import '../Styles/MainPage.css'
import fetchRoad from "./fetchRoad";


function MainPage(){

    return (
        
        <>
        <div className="mainPage">
        <h1> Welcome to the Website</h1>
        
        <button onClick={fetchRoad}>Click Here</button>
        </div>
        <div></div>
        <div>
    
    </div>
        
        </>
    )
}

export default MainPage;