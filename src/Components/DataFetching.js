import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

// 'https://jsonplaceholder.typicode.com/posts'

function DataFetching(Month,Year,District) {
  const [posts, setPosts] = useState([]);
  
  
  Month= 2
  Year = 2021
  District = "Austin"


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
            res.data.features[i].properties.DISTRICT_NAME === District &&
            res.data.features[i].properties.NBR_LET_YEAR === Year &&
            res.data.features[i].properties.NBR_LET_MONTH === Month &&
            res.data.features[i].properties.HIGHWAY_NUMBER !== "VA"
          ) {
            jobs.push(res.data.features[i].properties);

            const test = res.data.features[i].properties.CONTROL_SECT_JOB.split("");
            test.splice(4, 0, "-");
            test.splice(7, 0, "-");
        
            const elements = test.join("");
            res.data.features[i].properties.CSJ=elements

            switch(Month) {
              case 1:
                res.data.features[i].properties.Month="January";
                break

                case 2:
                res.data.features[i].properties.Month="February";
                break

                case 3:
                res.data.features[i].properties.Month="March";
                break

                case 4:
                res.data.features[i].properties.Month="April";
                break

                case 5:
                res.data.features[i].properties.Month="May";
                break

                case 6:
                res.data.features[i].properties.Month="June";
                break

                case 7:
                res.data.features[i].properties.Month="July";
                break

                case 8:
                res.data.features[i].properties.Month="August";
                break

                case 9:
                res.data.features[i].properties.Month="September";
                break

                case 10:
                res.data.features[i].properties.Month="October";
                break

                case 11:
                res.data.features[i].properties.Month="November";
                break

                case 12:
                res.data.features[i].properties.Month="December";
                break



              default:
                return 'Something went wrong';
            }


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
      {/* <input type= "text" value={OBJECTID} onChange={e=>setID(e.target.value)}/>
            <button type="button" onClick={handleClick}>Fetch Post</button> */}
      <ul>
        {/* {
                    posts.map(post=><div key={post.properties.OBJECTID}> CONTROL_SECT_JOB: {post.properties.CONTROL_SECT_JOB} <br></br> COUNTY_NAME: {post.properties.COUNTY_NAME}    <br></br> DISTRICT_NAME: {post.properties.DISTRICT_NAME} <br></br> _</div>)
                } */}
            

        
        {posts.map((el) => (

            
          <div key={el.OBJECTID}>
            <div>CSJ: {el.CSJ} </div>
            <div>DISTRICT NAME: {el.DISTRICT_NAME} </div>
            <div>COUNTY NAME: {el.COUNTY_NAME} </div>
            <div>LAYMAN DESCRIPTION: {el.LAYMAN_DESCRIPTION1} </div>
            <div>TYPE OF WORK: {el.TYPE_OF_WORK} </div>
            <div>PROJ CLASS: {el.PROJ_CLASS} </div>
            <div>
              Date of Construction: {el.Month}/{el.NBR_LET_YEAR}
            </div>
            <a             
              //   href="https://planuser:txdotplans@ftp.txdot.gov/plans/State-Let-Construction/${el.NBR_LET_YEAR}/01%20January/01%20Plans/Bastrop%200573-01-040.pdf"
                    
              href={`https://planuser:txdotplans@ftp.txdot.gov/plans/State-Let-Construction/${el.NBR_LET_YEAR}/0${el.NBR_LET_MONTH}%20${el.Month}/0${el.NBR_LET_MONTH}%20Plans/${el.COUNTY_NAME}%20${el.CSJ}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              PDF
            </a>

            <br></br>
            <br></br>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;
