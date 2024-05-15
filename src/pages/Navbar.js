import React, { Fragment } from "react";

import { Link } from "react-router-dom";

function Navbar() {


     return(

    
      
      <React.Fragment>

           <nav className="navbar navbar-expand-lg">
                <Link to = {"/"} className="Navbar-brand p-5">Login</Link>
                <Link to = {"/Registration"} className="p-5">Registration </Link>
                <Link to = {"/Main"} className="p-5">Home</Link>
                <Link to = {"/Details"} className="p-5">Details</Link>
            </nav>

           
        </React.Fragment>

    )

}
 export default Navbar;