import React, { useState, useEffect } from "react";
import axios from "axios";

function Test() {
  const [posts, setPosts] = useState([]);
//   const Months = [1, 2, 3, 4, 5, 6];

  let Month= "January"
  

  // const [OBJECTID,setID]=useState(0)
  // const [idFromButtonClick, setIdFromButtonClick]=useState(0)

  // const handleClick=()=>{
  //     setIdFromButtonClick(OBJECTID)
  // }

  useEffect(() => {
    const jobs = [];
    axios
      .get(
        `https://services.arcgis.com/KTcxiTD9dsQw4r7Z/ArcGIS/rest/services/TxDOT_Projects/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelWithin&resultType=none&distance=0.0&units=esriSRUnit_Foot&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token=&CONTROL_SECT_JOB=Bastrop`
      )
      .then((res) => {
        for (let i = 0; i < res.data.features.length; i++) {
          if (
            res.data.features[i].properties.PT_PHASE ===
              "Construction underway or begins soon" &&
            res.data.features[i].properties.DISTRICT_NAME === "Austin" &&
            res.data.features[i].properties.NBR_LET_YEAR === 2021 &&
            res.data.features[i].properties.NBR_LET_MONTH === 1 &&
            res.data.features[i].properties.HIGHWAY_NUMBER !== "VA"
          ) {
            jobs.push(res.data.features[i].properties);
          }
        }
        console.log(jobs);
        setPosts(jobs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (

   
    
    <div>
            
        {posts.map((el) => (

            
          <div key={el.OBJECTID}>
            <div>CONTROL_SECT_JOB: {el.CONTROL_SECT_JOB} </div>
            <div>DISTRICT_NAME: {el.DISTRICT_NAME} </div>
            <div>COUNTY_NAME: {el.COUNTY_NAME} </div>
            <div>CONTROL_SECT_JOB: {el.CONTROL_SECT_JOB} </div>
            <div>
              Date of Construction: {el.NBR_LET_MONTH}/{el.NBR_LET_YEAR}
            </div>
            <a             
              //   href="https://planuser:txdotplans@ftp.txdot.gov/plans/State-Let-Construction/${el.NBR_LET_YEAR}/01%20January/01%20Plans/Bastrop%200573-01-040.pdf"
                    
              href={`https://planuser:txdotplans@ftp.txdot.gov/plans/State-Let-Construction/${el.NBR_LET_YEAR}/0${el.NBR_LET_MONTH}%20${Month}/0${el.NBR_LET_MONTH}%20Plans/${el.COUNTY_NAME}%200573-01-040.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              PDF
            </a>

            <br></br>
            <br></br>
          </div>
        ))}
      
    </div>
  );
}

export default Test;
