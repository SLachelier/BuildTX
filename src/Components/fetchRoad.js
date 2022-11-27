let roads = {
  fetchData: function () {
    // fetch(
    //   "https://services.arcgis.com/KTcxiTD9dsQw4r7Z/arcgis/rest/services/TxDOT_Projects/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Foot&relationParam=&returnGeodetic=false&outFields=OBJECTID%2CPT_PHASE%2CCONTROL_SECT_JOB%2CDISTRICT_NAME%2CCOUNTY_NAME%2CNBR_LET_YEAR%2CNBR_LET_MONTH&returnGeometry=false&featureEncoding=esriDefault&multipatchOption=none&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token="
    // )
    fetch("https://services.arcgis.com/KTcxiTD9dsQw4r7Z/ArcGIS/rest/services/TxDOT_Projects/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelWithin&resultType=none&distance=0.0&units=esriSRUnit_Foot&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token=")
      // converts fetched data into a json format
      .then((response) => response.json())
      .then(function (data) {
        //   console.log(data);
        //   console.log(data.features[0].properties);
        for (let i = 0; i < data.features.length; i++) {
          if (
            data.features[i].properties.PT_PHASE ===
            "Construction underway or begins soon" && data.features[i].properties.DISTRICT_NAME === "Austin" && data.features[i].properties.NBR_LET_YEAR === 2021 && data.features[i].properties.NBR_LET_MONTH === 12 && data.features[i].properties.HIGHWAY_NUMBER !== "VA" && data.features[i].properties.HIGHWAY_NUMBER !== "CR"
          ) {
            
            let anchor = document.createElement("a")
            document.querySelector(".january").append(data.features[i].properties.CONTROL_SECT_JOB,anchor);
            document.querySelector(".january").href ="https://planuser:txdotplans@ftp.txdot.gov/plans/State-Let-Construction/2020/01%20January/01%20Plans/Angelina%200911-00-081.pdf";
            <br></br>
              document.querySelector(".january").innerHTML = data.features[i].properties.OBJECTID;
            //   document.querySelector(".january").createTextNode = data.features[i].properties.CONTROL_SECT_JOB;




            
          }
          
        }
      });
  },

  // testing case situation here
  displayRoad: function (data) {
    const name = data.features[0].properties.COUNTY_NAME;
    console.log(name);
  },
};

function fetchRoad() {
  roads.fetchData();
}
export default fetchRoad;
