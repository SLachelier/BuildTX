
let roads = {




    fetchData: function() {
  fetch(
    "https://services.arcgis.com/KTcxiTD9dsQw4r7Z/arcgis/rest/services/TxDOT_Projects/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Foot&relationParam=&returnGeodetic=false&outFields=OBJECTID%2CPT_PHASE%2CCONTROL_SECT_JOB%2CDISTRICT_NAME%2CCOUNTY_NAME%2CNBR_LET_YEAR%2CNBR_LET_MONTH&returnGeometry=false&featureEncoding=esriDefault&multipatchOption=none&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token="
  )

    // converts fetched data into a json format
    .then((response) => response.json())
    .then(function (data) {
    //   console.log(data);
    //   console.log(data.features[0].properties);

      for(let i=0;i<data.features.length;i++){
        if(data.features[i].properties.PT_PHASE === "Construction begins within 4 years"){
            console.log(data.features[i].properties)
        }
        
    }
      
    });
    

    
  
},

// testing case situation here
 displayRoad:function(data) {
    const name = data.features[0].properties.COUNTY_NAME;
    console.log(name);
  },

}


function fetchRoad(){
    roads.fetchData();
};
export default fetchRoad;
