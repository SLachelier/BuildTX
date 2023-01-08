import Navbar from './Components/Navbar';
import MainPage from './Components/MainPage'
// import fetchRoad from './Components/fetchRoad';

import DropDown from './Components/DropDown';
import Months from './Components/Months';
import DataFetching from './Components/DataFetching';
// import Test from './Components/test2';


function App() {
  
  
  return (
    <div className="App">
     <Navbar></Navbar>
     <DropDown></DropDown>
     <MainPage></MainPage>
     <Months></Months>
     <DataFetching></DataFetching>
     {/* <Test></Test> */}

    </div>
  );
}

export default App;
