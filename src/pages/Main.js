import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Main () {

   const [data, setData] = useState ([]);

   useEffect(function() {

     axios.get("https://apitest.reachstar.io/blog/list").then(function(response) {
      setData(response.data);
     }).catch(function(error) {
      console.log(error);
     });

   });
  
    return (
    <React.Fragment>
      <div className="container">
         <div className="row justify-content-center">
            <div className="col-6">
               {
                  data.map((item, index) => <div className="card">
                     <div className="card-header">
                        <h1 className="card-title"> { item.title } </h1>
                     </div>
                     <div className="card-body">
                        <p dangerouslySetInnerHTML={{ __html: item.description}}></p>
                     </div>
                     <div className="card-footer">
                        <link to={"/details/" + item.id} className="btn btn danger">details</link>
                     </div>
                  </div>)
               }
            </div>
         </div>
      </div>
    </React.Fragment>

   )
}

export default Main;



