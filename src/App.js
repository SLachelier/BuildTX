import Navbar from './Components/Navbar';
import MainPage from './Components/MainPage'
// import fetchRoad from './Components/fetchRoad';

import DropDown from './Components/DropDown';
import Months from './Components/Months';

function App() {
  
  
  return (
    <div className="App">
     <Navbar></Navbar>
     <DropDown></DropDown>
     <MainPage></MainPage>
     <Months></Months>

    </div>
  );
}

export default App;
