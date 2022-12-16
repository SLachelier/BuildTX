import React from "react";
import '../Styles/MainPage.css'
import fetchRoad from "./fetchRoad";




    
    
function MainPage(){

    
    const shouldAddEventHandler = true;

    const click2020 = event => {
        
        fetchRoad(2020)
    };
    const click2021 = event => {
        fetchRoad(2021)
    };
    const click2022 = event => {
        fetchRoad(2022)
    };
    
    return (
        

        <>
        <div className="mainPage">
        <h1> Welcome to the Website</h1>
        {/* <button onClick={year=2021} className="twentyOne">2021</button> */}
        <button onClick={shouldAddEventHandler ? click2020 : undefined}>
        2020
      </button>

      <button onClick={shouldAddEventHandler ? click2021 : undefined}>
        2021
      </button>

      <button onClick={shouldAddEventHandler ? click2022 : undefined}>
        2022
      </button>
      

      
        
        </div>
        <div></div>
        <div>
    
    </div>
        
        </>
    )
}

export default MainPage;