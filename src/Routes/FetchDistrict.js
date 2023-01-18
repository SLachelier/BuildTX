import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchDistrict() {
  // lists out useState variables
  const [posts, setPosts] = useState([]);
  const [Year, setYear] = useState();
  const [Month, setMonth] = useState();
  const [District, setDistrict] = useState();

  useEffect(() => {
    const jobs = [];

    // fetches from TxDOT database
    axios
      .get(
        `https://services.arcgis.com/KTcxiTD9dsQw4r7Z/ArcGIS/rest/services/TxDOT_Projects/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelWithin&resultType=none&distance=0.0&units=esriSRUnit_Foot&relationParam=&returnGeodetic=true&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token=`
      )
      .then((res) => {
        // filters and pushes items into an empty array based off the year, county name, and phase condition.

        for (let i = 0; i < res.data.features.length; i++) {
          if (
            res.data.features[i].properties.PT_PHASE ===
              "Construction underway or begins soon" &&
            res.data.features[i].properties.DISTRICT_NAME === District &&
            res.data.features[i].properties.NBR_LET_YEAR === parseInt(Year) &&
            res.data.features[i].properties.NBR_LET_MONTH === parseInt(Month)
            
          ) {
            // pushes if condition into the empty array
            jobs.push(res.data.features[i].properties);

            // adds dashes into the CSJ number, this is useful for creating the link
            const test =
              res.data.features[i].properties.CONTROL_SECT_JOB.split("");
            test.splice(4, 0, "-");
            test.splice(7, 0, "-");

            // console.log(boop[0][0])
            const elements = test.join("");
            // adds the rewritten CSJ number as a new property into the object.
            // console.log(res.data.features[i].properties.CONTROL_SECT_JOB)
            // console.table(res.data.features[i].geometry.coordinates[0])
            
            res.data.features[i].properties.CSJ = elements;
            
            
            if(res.data.features[i].geometry === null){
              let X= "N/A"
              res.data.features[i].properties.x_Coordinate= X;
              let Y= "N/A"
              res.data.features[i].properties.y_Coordinate= Y;
              res.data.features[i].properties.location= "N/A";
              
            }else{
              let X = JSON.stringify(res.data.features[i].geometry.coordinates[0][1])
              res.data.features[i].properties.x_Coordinate= X;
              let Y = JSON.stringify(res.data.features[i].geometry.coordinates[0][0])
              res.data.features[i].properties.y_Coordinate= Y;
              res.data.features[i].properties.location=res.data.features[i].properties.LIMITS_FROM ;
              
            }
            

            // adds a "month in letters" as a propery into the object. Based off what the numerical month is it will add the appropiate written out month.
            switch (Month) {
              case "1":
                res.data.features[i].properties.Month = "January";
                break;

              case "2":
                res.data.features[i].properties.Month = "February";
                break;

              case "3":
                res.data.features[i].properties.Month = "March";
                break;

              case "4":
                res.data.features[i].properties.Month = "April";
                break;

              case "5":
                res.data.features[i].properties.Month = "May";
                break;

              case "6":
                res.data.features[i].properties.Month = "June";
                break;

              case "7":
                res.data.features[i].properties.Month = "July";
                break;

              case "8":
                res.data.features[i].properties.Month = "August";
                break;

              case "9":
                res.data.features[i].properties.Month = "September";
                break;

              case "10":
                res.data.features[i].properties.Month = "October";
                break;

              case "11":
                res.data.features[i].properties.Month = "November";
                break;

              case "12":
                res.data.features[i].properties.Month = "December";
                break;

              default:
                return "Something went wrong";
            }
          }
        }

        console.log(jobs);
        // adds the newly filled out array into the useState variable
        setPosts(jobs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [posts, District, Month, Year]);

  return (
    // html for the input
    <div className="fetched">
      <div>
        <form className="inner-dist">
          <h3>
            District:
            <input
              className="typeList"
              list="districts"
              value={District}
              onChange={(e) => setDistrict(e.target.value)}
              placeholder={"District Name "}
            ></input>
          </h3>

          <h3>
            Month:
            <input
              className="typeList"
              list="months"
              value={Month}
              onChange={(e) => setMonth(e.target.value)}
              placeholder={"Month"}
            ></input>
          </h3>
          <h3>
            Year:
            <input
              className="typeList"
              type="number"
              value={Year}
              onChange={(e) => setYear(e.target.value)}
              placeholder={"Year"}
            ></input>
          </h3>
          {/* lists out all the districts in numbers */}
          <datalist id="districts">
            <option value="Abilene" />
            <option value="Amarillo" />
            <option value="Atlanta" />
            <option value="Austin" />
            <option value="Beaumont" />
            <option value="Bryan" />
            <option value="Childress" />
            <option value="Corpus Christi" />
            <option value="Dallas" />
            <option value="El Paso" />
            <option value="Fort Worth" />
            <option value="Houston" />
            <option value="Laredo" />
            <option value="Lubbock" />
            <option value="Lufkin" />
            <option value="Odessa" />
            <option value="Paris" />
            <option value="Pharr" />
            <option value="San Angelo" />
            <option value="San Antonio" />
            <option value="Tyler" />
            <option value="Waco" />
            <option value="Wichita Falls" />
            <option value="Yoakum" />
          </datalist>
          {/* lists out all the months in numbers */}
          <datalist id="months">
            <option value="1" />
            <option value="2" />
            <option value="3" />
            <option value="4" />
            <option value="5" />
            <option value="6" />
            <option value="7" />
            <option value="8" />
            <option value="9" />
            <option value="10" />
            <option value="11" />
            <option value="12" />
          </datalist>
        </form>
      </div>

      {posts.map((el) => (
        <div className="csj" key={el.OBJECTID}>
          <div>CSJ: {el.CSJ} </div>
          <div>DISTRICT NAME: {el.DISTRICT_NAME} </div>
          <div>COUNTY NAME: {el.COUNTY_NAME} </div>
          <div>DESCRIPTION: {el.LAYMAN_DESCRIPTION1} </div>
          <div>TYPE OF WORK: {el.TYPE_OF_WORK} </div>
          <div>PROJ CLASS: {el.PROJ_CLASS} </div>
          <div>
            Date of Construction: {el.Month}/{el.NBR_LET_YEAR}
          </div>
          <a
            href={`https://planuser:txdotplans@ftp.txdot.gov/plans/State-Let-Construction/${el.NBR_LET_YEAR}/0${el.NBR_LET_MONTH}%20${el.Month}/0${el.NBR_LET_MONTH}%20Plans/${el.COUNTY_NAME}%20${el.CSJ}.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            PDF
          </a>
          <div>
          LOCATION: 
           <a
            href={`https://www.google.com/maps/@${el.x_Coordinate},${el.y_Coordinate},15z`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {el.location}
          </a> 
          
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default FetchDistrict;
