import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function Detail () {

   const [data, setData] = useState ([]);

   const { id } = useParams();

   useEffect(function() {

     axios.get("https://apitest.reachstar.io/blog/get/" + id).then(function (response) {
      console.log(response.data);
     }).catch(function (error) {
      console.log(error);
     });

   }, []);
  
    return(
    <React.Fragment>
      <div className="container">
         <div className="row">
            <div className="col-6">
                <div className="card">
                     <div className="card-header">
                        <h1 className="card-title"> {data.title} </h1>
                     </div>
                     <div className="card-body">
                        <p dangerouslySetInnerHTML={{ __html: data.description}}></p>
                     </div>
                     <div className="card-footer">
                        {
                         data.comments.map(item => <p> {item.comment} </p>)
                        }
                     </div>
                  </div>
            </div>
         </div>
      </div>
    </React.Fragment>

   )
}

export default Detail;




