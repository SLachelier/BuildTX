import React,{useState, useEffect} from "react";
import axios from "axios";

// 'https://jsonplaceholder.typicode.com/posts'

function DataFetching (){
    const [posts,setPosts]=useState([])

    useEffect(()=>{
        axios
        .get("https://services.arcgis.com/KTcxiTD9dsQw4r7Z/ArcGIS/rest/services/TxDOT_Projects/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelWithin&resultType=none&distance=0.0&units=esriSRUnit_Foot&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token=")
        .then(res=>
            
            
            {
            console.log(res.data.features)
            setPosts(res.data.features)
            }
        
        )
        .catch(err=>{
            console.log(err)
        })
    },[])

    return(
        <ul>
            {
                posts.map(post=><li key={post.properties.OBJECTID}> {post.properties.CONTROL_SECT_JOB}</li>)
            }
        </ul>
    )
}

export default DataFetching