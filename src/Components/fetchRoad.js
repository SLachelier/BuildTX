

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
