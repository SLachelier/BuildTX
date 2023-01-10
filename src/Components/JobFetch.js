import React, { useState, useEffect } from "react";
import axios from "axios";


function JobFetch() {
  const [posts, setPosts] = useState([]);
  const [job,setJob]=useState()
  
  

  useEffect(() => {
    const jobs = [];

    axios
      .get(
        `https://services.arcgis.com/KTcxiTD9dsQw4r7Z/ArcGIS/rest/services/TxDOT_Projects/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelWithin&resultType=none&distance=0.0&units=esriSRUnit_Foot&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token=&CONTROL_SECT_JOB=Bastrop`
      )
      .then((res) => {
        
        for (let i = 0; i < res.data.features.length; i++) {
          if (
            res.data.features[i].properties.CONTROL_SECT_JOB === job
          ) {
            jobs.push(res.data.features[i].properties);

            const test =
              res.data.features[i].properties.CONTROL_SECT_JOB.split("");
            test.splice(4, 0, "-");
            test.splice(7, 0, "-");

            const elements = test.join("");
            res.data.features[i].properties.CSJ = elements;

            

            switch (res.data.features[i].properties.NBR_LET_MONTH) {
              case 1:
                res.data.features[i].properties.Month = "January";
                break;

              case 2:
                res.data.features[i].properties.Month = "February";
                break;

              case 3:
                res.data.features[i].properties.Month = "March";
                break;

              case 4:
                res.data.features[i].properties.Month = "April";
                break;

              case 5:
                res.data.features[i].properties.Month = "May";
                break;

              case 6:
                res.data.features[i].properties.Month = "June";
                break;

              case 7:
                res.data.features[i].properties.Month = "July";
                break;

              case 8:
                res.data.features[i].properties.Month = "August";
                break;

              case 9:
                res.data.features[i].properties.Month = "September";
                break;

              case 10:
                res.data.features[i].properties.Month = "October";
                break;

              case 11:
                res.data.features[i].properties.Month = "November";
                break;

              case 12:
                res.data.features[i].properties.Month = "December";
                break;

              default:
                return "Something went wrong";
            }
          }
          
        }

        console.log(jobs);
        setPosts(jobs);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <ul>
        <div>

        <h3>
            CSJ:
            <input
              list="months"
              value={job}
              onChange={(e) => setJob(e.target.value)}
              placeholder={"CSJ Number"}
            ></input>
          </h3>
        

          
          

          
          
        </div>

        {/* <input type="text" value={District} onChange={e=>setDistrict(e.target.value)}></input> */}

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

export default JobFetch;
