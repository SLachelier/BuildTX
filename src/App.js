import Navbar from './Components/Navbar';
import MainPage from './Components/MainPage'
import fetchRoad from './Components/fetchRoad';
import test from './Components/test';
import DropDown from './Components/DropDown';
import Months from './Components/Months';

function App() {
  fetchRoad();
  test();
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
