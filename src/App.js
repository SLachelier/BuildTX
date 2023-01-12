// Currently a useless file, but is being kept on as an archived file in case the index file changes again.

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
