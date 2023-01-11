import React from "react";

function Home (){
    return(
       <div className="fetched">
        <h2 className="innerHome">
            BuildTX was created with the aim of reducing search time for information on any construction project's taking place in Texas. 
        </h2>

        <h2 className="innerHome">
            Using TxDOT's construction database, BuildTx is able to sort and filter based off your choice input. Currently there are 3 search options located in the drop down menu at the top left corner. 
        </h2>

        <h2 className="innerHome">
            Should be noted that search by District and search by County are only searching for projects that are under construction right now. Due to a limitation with the API, the pdf function would not be able to retrieve any projects that haven't been done in the past 2 years. 
        </h2>

        

        
        
    </div> 
    )
    
}

export default Home;