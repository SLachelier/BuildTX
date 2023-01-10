import Navbar from './Components/Navbar';

// import fetchRoad from './Components/fetchRoad';

import JobFetch from './Components/JobFetch';
import Months from './Components/Months';
// import DataFetching from './Components/DistrictFetch';
// import Test from './Components/test';


function App() {
  
  
  return (
    <div className="App">
     <Navbar></Navbar>
     
     
     <Months></Months>
     <JobFetch></JobFetch>
     {/* <DataFetching></DataFetching> */}
     {/* <Test></Test> */}

    </div>
  );
}

export default App;
