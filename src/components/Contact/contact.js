import React from "react";
import './contact.css';
import facebook from '..//..//images/facebook.png';
import kfc from '..//..//images/kfc.png';
import uber from '..//..//images/uber.jpg';
import coolPlanet from '..//..//images/coolplanet.png';
import FbIcon from "..//..//images/FBIcon.jpeg";
import YtICon from "..//..//images/ytIconf.png";
import TwitterIcon from "..//..//images/twitterIcon.jpeg";
import InstaIcon from "..//..//images/instaIcon.jpeg";


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
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDEsc">PLease fill the form below to discuss the works.</span>
                <form className="contactForm">
                    <input type="text" className="name" placeholder="Your Name" />
                    <input type="text" className="email" placeholder="Your Email" />
                    <textarea className ="msg" name="message" rows={5} placeholder="Your Message" ></textarea>
                    <button type="submit" value='send' className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={FbIcon} alt="facebook" className="link" />
                        <img src={YtICon} alt="youtube" className="link" />
                        <img src={InstaIcon} alt="insta" className="link" />
                        <img src={TwitterIcon} alt="twitter" className="link" />
                    </div>
                </form>


            </div>


        </section>
    
    ) 
}

export default Contact