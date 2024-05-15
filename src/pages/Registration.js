import React, {useState} from "react";
import axios from "axios";
import { useNavigate  } from "react-router-dom";


function Registration () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function login(event){
        event.preventDefault();

        axios.post("https://apitest.reachstar.io/signup", {
            email: email,
            password : password
    
        }).then(function(response) {

            navigate("/Home");

        }).catch(function(error) {
            window.alert("შეცდომა");
        });
       
    }

    return(

        <React.Fragment>
           <div className="container">
            <div className="row justify-content-center">
                <div className="col-5 mt-5">
                  <form method="POST"  onSubmit={(event => login(event))}>
                    <label htmlFor ="email" style={{display: "block"}}>ელ ფოსტა</label>
                    <input type="email" className="mt-2" placeholder="ელ ფოსტა" onChange={(event) => setEmail(event.target.value)}></input><br /><br />

                    <label htmlFor ="password" style={{display: "block"}}>პაროლი</label>
                    <input type="password" className="mt-2" placeholder="პაროლი" onChange={(event) => setPassword(event.target.value)}></input><br /><br />

                    <label htmlFor ="password" style={{display: "block"}}>გაიმეორეთ პაროლი</label>
                    <input type="password" className="mt-2" placeholder="პაროლი" onChange={(event) => setPassword(event.target.value)}></input><br /><br />

                   <div className="form-group">
                    <input type="submit" className="btn btn primary bg-success " value="რეგისტრაცია"></input>
                   </div>
                   </form>
                </div>
             </div>
           </div>
        </React.Fragment> 
    
       )
}

export default Registration;
