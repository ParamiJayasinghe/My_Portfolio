import React from "react";
import './contact.css';
import facebook from '..//..//images/facebook.png';
import kfc from '..//..//images/kfc.png';
import uber from '..//..//images/uber.jpg';
import coolPlanet from '..//..//images/coolplanet.png';


const Contact = () => {
    return(
        <section className="contactPage">
            <div id="myClients">
                <h1 className="myClients">My Clients</h1>
                <p className="clientDes">I have had the opurtunity to work with several companies as my clients. Here are some notable works with clients</p>

                <div className="clientImgs">
                    <img src={facebook} alt="Facebook" className="clientImg" />
                    <img src={uber} alt="Uber" className="clientImg" />
                    <img src={coolPlanet} alt="Coolplanet" className="clientImg" />
                    <img src={kfc} alt="KFC" className="clientImg" />
                </div>

            </div>

            <div id="contactMe">


            </div>


        </section>
    
    ) 
}

export default Contact