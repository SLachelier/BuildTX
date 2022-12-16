

// make this function an onclick in the future
export default function fetchRoad(year) {
  
  let jan = [];
    // fetches data from database
    fetch("https://services.arcgis.com/KTcxiTD9dsQw4r7Z/ArcGIS/rest/services/TxDOT_Projects/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelWithin&resultType=none&distance=0.0&units=esriSRUnit_Foot&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token=")
      // converts fetched data into a json format
      .then((response) => response.json())
      .then(function (data) {
        
        for (let i = 0; i < data.features.length; i++) {
          // sorts through all the data to grab 
          if (
            data.features[i].properties.PT_PHASE ===
            "Construction underway or begins soon" && data.features[i].properties.DISTRICT_NAME === "Austin" && data.features[i].properties.NBR_LET_YEAR === year && data.features[i].properties.NBR_LET_MONTH === 1 && data.features[i].properties.HIGHWAY_NUMBER !== "VA" 
          ) {
            
           jan.push(data.features[i].properties)
         
          }
          
          
        }
        console.log(jan);
        
        

        
        jan.map((el) => {
          
          var newDiv = document.createElement('div')
          function breakLine () {
            (newDiv.appendChild(document.createElement('br')))
          } 
          
          function anchorMan () {
            var newAnchor = document.createElement('a')

            var url = "https://planuser:txdotplans@ftp.txdot.gov/plans/State-Let-Construction/"+el.NBR_LET_YEAR+"/0"+el.NBR_LET_MONTH+"%20"+Let_Month+"/01%20Plans/"+el.COUNTY_NAME+"%20"+elements+".pdf";

            

            newAnchor.text = "PDF"
            newAnchor.target = "_blank"

            


            
            newAnchor.href = url
            newDiv.appendChild(newAnchor)
    
            
          } 
          // https://planuser:txdotplans@ftp.txdot.gov/plans/State-Let-Construction/2021/01%20January/01%20Plans/Bastrop%200573-01-040.pdf

          // https://planuser:txdotplans@ftp.txdot.gov/plans/State-Let-Construction/2021/01%20January/01%20Plans/Williamson%200914-05-193.pdf

          

          const test = el.CONTROL_SECT_JOB.split("");
          test.splice(4,0,"-")
          test.splice(7,0,"-");
          
          
          const elements= test.join('')

          
          
          let Let_Month = "January"

            // if(el.NBR_LET_MONTH=== 1){
            //   Let_Month = "January"
            // }


          breakLine()
          newDiv.append("CONTROL_SECT_JOB: "+ el.CONTROL_SECT_JOB)
          breakLine()
          newDiv.append("DISTRICT_NAME: "+ el.DISTRICT_NAME)
          breakLine()
          newDiv.append("COUNTY_NAME: "+ el.COUNTY_NAME)
          breakLine()
          newDiv.append("NBR_LET_YEAR: "+ el.NBR_LET_YEAR)
          breakLine()
          newDiv.append("NBR_LET_MONTH: "+ el.NBR_LET_MONTH)
          breakLine()
          anchorMan();
          // newDiv.append("PDF "+ anchorMan())



          // breakLine()
          // breakLine()

          
          
         
          document.querySelector(".january").append(newDiv);

          return jan;

        }
          
            
          
)
          // <option 
          // value={el} key={el}>{" "}{el}{" "}
          // </option>
        

      });

}
