// let roads = {
//   fetchData: function () {
    

//     let jan = [];
//     fetch("https://services.arcgis.com/KTcxiTD9dsQw4r7Z/ArcGIS/rest/services/TxDOT_Projects/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelWithin&resultType=none&distance=0.0&units=esriSRUnit_Foot&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token=")
//       // converts fetched data into a json format
//       .then((response) => response.json())
//       .then(function (data) {
//         //   console.log(data);
//         //   console.log(data.features[0].properties);
//         for (let i = 0; i < data.features.length; i++) {
//           if (
//             data.features[i].properties.PT_PHASE ===
//             "Construction underway or begins soon" && data.features[i].properties.DISTRICT_NAME === "Austin" && data.features[i].properties.NBR_LET_YEAR === 2020 && data.features[i].properties.NBR_LET_MONTH === 12 && data.features[i].properties.HIGHWAY_NUMBER !== "VA" 
//           ) {
            

//             // let anchor = document.createElement("a")
//             // document.querySelector(".january").append(data.features[i].properties.OBJECTID,anchor);
//            jan.push(data.features[i].properties)
           
            
//             //   document.querySelector(".january").createTextNode = data.features[i].properties.CONTROL_SECT_JOB;




            
//           }
          
          
//         }
//         console.log(jan[0]);
//         return jan;
//       });
//   }
  
// };

monthData{
  
}


// make this function an onclick in the future
export default function fetchRoad() {
  // roads.fetchData();

  let jan = [{
    name: "Silver500",
    premiumInDollars: 500,
    validityInYears: 2
  }];
  
    fetch("https://services.arcgis.com/KTcxiTD9dsQw4r7Z/ArcGIS/rest/services/TxDOT_Projects/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelWithin&resultType=none&distance=0.0&units=esriSRUnit_Foot&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token=")
      // converts fetched data into a json format
      .then((response) => response.json())
      .then(function (data) {
        //   console.log(data);
        //   console.log(data.features[0].properties);
        for (let i = 0; i < data.features.length; i++) {
          if (
            data.features[i].properties.PT_PHASE ===
            "Construction underway or begins soon" && data.features[i].properties.DISTRICT_NAME === "Austin" && data.features[i].properties.NBR_LET_YEAR === 2020 && data.features[i].properties.NBR_LET_MONTH === 12 && data.features[i].properties.HIGHWAY_NUMBER !== "VA" 
          ) {
            

            // let anchor = document.createElement("a")
            // document.querySelector(".january").append(data.features[i].properties.OBJECTID,anchor);
           jan.push(data.features[i].properties)
           
            
            //   document.querySelector(".january").createTextNode = data.features[i].properties.CONTROL_SECT_JOB;




            
          }
          
          
        }
        console.log(jan);
       let anchor = document.createElement("a")

        jan.map((el) => (

          
            document.querySelector(".january").append(jan[el].ACTUAL_LET_DATE,anchor)
          // <option 
          // value={el} key={el}>{" "}{el}{" "}
          // </option>
        ))

      });

}
