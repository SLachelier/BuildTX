import Navbar from './Components/Navbar';
import MainPage from './Components/MainPage'
import fetchRoad from './Components/fetchRoad';
import test from './Components/test';


function App() {
  fetchRoad();
  test();
  return (
    <div className="App">
     <Navbar></Navbar>
     <MainPage></MainPage>
    </div>
  );
}

export default App;
