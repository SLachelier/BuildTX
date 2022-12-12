

// make this function an onclick in the future
export default function fetchRoad() {
  
  let jan = [];
  
    fetch("https://services.arcgis.com/KTcxiTD9dsQw4r7Z/ArcGIS/rest/services/TxDOT_Projects/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelWithin&resultType=none&distance=0.0&units=esriSRUnit_Foot&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token=")
      // converts fetched data into a json format
      .then((response) => response.json())
      .then(function (data) {
        //   console.log(data);
        //   console.log(data.features[0].properties);
        for (let i = 0; i < data.features.length; i++) {
          if (
            data.features[i].properties.PT_PHASE ===
            "Construction underway or begins soon" && data.features[i].properties.DISTRICT_NAME === "Austin" && data.features[i].properties.NBR_LET_YEAR === 2021 && data.features[i].properties.NBR_LET_MONTH === 1 && data.features[i].properties.HIGHWAY_NUMBER !== "VA" 
          ) {
            

            // let anchor = document.createElement("a")
            // document.querySelector(".january").append(data.features[i].properties.OBJECTID,anchor);
           jan.push(data.features[i].properties)
           
            
            //   document.querySelector(".january").createTextNode = data.features[i].properties.CONTROL_SECT_JOB;




            
          }
          
          
        }
        console.log(jan);
        // let paragraph = document.createElement("p")
        // let district = document.createElement("p")
        // let county = document.createElement("p")
        // let breakLine= document.createElement("br")
        // let element = document.createElement('div');
        
        // for(let i = 0; i<jan.length;i++){
        //   // let container = document.getElementsByClassName("january");
        //   // container.innerHTML = '<div class="box"></div>';
        //   document.querySelector(".january").append(jan[i].CONTROL_SECT_JOB)
        //   // document.querySelector(".january").append(breakLine)
        //   document.querySelector(".january").append(jan[i].DISTRICT_NAME)
        //   document.querySelector(".january").append(jan[i].COUNTY_NAME)
        //   document.querySelector(".january").append(jan[i].NBR_LET_MONTH)
        //   document.querySelector(".january").append(jan[i].NBR_LET_YEAR)
        // }
        

        
        jan.map((el) => {
          
          var newDiv = document.createElement('div')
          function breakLine () {
            (newDiv.appendChild(document.createElement('br')))
          } 
          function anchorMan () {
            var newAnchor = document.createElement('a')
            newAnchor.text = "PDF"
            newAnchor.target = "_blank"

            newAnchor.href = "https://www.google.com/search?q=add+a+breakline+in+react+map+function&rlz=1C1CHBF_enUS812US812&oq=add+a+breakline&aqs=chrome.1.69i57j35i39j0i22i30j0i10i22i30j0i22i30j0i10i22i30l3j0i22i30.10375j1j4&sourceid=chrome&ie=UTF-8"
            newDiv.appendChild(newAnchor)
    
            
          } 


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
