import Navbar from './Components/Navbar';

// import fetchRoad from './Components/fetchRoad';

// import FetchJob from './Components/FetchJob';
import Months from './Components/Months';
import FetchCounty from './Components/FetchCounty';
// import FetchDistrict from './Components/FetchDistrict';
// import Test from './Components/test';


function App() {
  
  
  return (
    <div className="App">
     <Navbar></Navbar>
     
     
     <Months></Months>
     <FetchCounty></FetchCounty>
     {/* <DataFetching></DataFetching> */}
     {/* <Test></Test> */}

    </div>
  );
}

export default App;
