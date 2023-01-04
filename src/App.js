import Navbar from './Components/Navbar';
import MainPage from './Components/MainPage'
// import fetchRoad from './Components/fetchRoad';

import DropDown from './Components/DropDown';
import Months from './Components/Months';
import DataFetching from './Components/DataFetching';

function App() {
  
  
  return (
    <div className="App">
     <Navbar></Navbar>
     <DropDown></DropDown>
     <MainPage></MainPage>
     <Months></Months>
     <DataFetching></DataFetching>

    </div>
  );
}

export default App;
