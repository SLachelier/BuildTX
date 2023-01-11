// import Navbar from './Components/Navbar';

// import fetchRoad from './Components/fetchRoad';

// import FetchJob from './Components/FetchJob';
// import Months from './Components/Months';
// import FetchCounty from './Components/FetchCounty';
// import FetchDistrict from './Components/FetchDistrict';
// import Test from './Components/test';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
function App() {
  
  
  return (
    <div className="App">
     
     <h1>Ayooo </h1>
     <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path='/'/>
      </Switch>
     </Router>
     

    </div>
  );
}

export default App;
