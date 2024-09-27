import React from "react";
import './skills.css';
import UIDesign from '../../images/UI_UX.jpg';
import WebDesign from '../../images/webDesign.png';
import AppDesign from '../../images/appDesign.png';

const Skills=() =>{

    return(
       <section id="skills">
        <span className="skillTitle">What I do</span>
        <sapn className="skillDescription">I am a versatile designer skilled in crafting engaging user interfaces (UI) and seamless user experiences (UX) across digital platforms. With expertise in both web and app design, he creates visually appealing, responsive websites and intuitive mobile applications that prioritize usability and aesthetics. His ability to blend creativity with functionality ensures that users have an enjoyable and efficient experience, whether browsing a website or navigating an app.</sapn>
        <div className="skillBars">
            <div className="skillbar">
                <img src={UIDesign} alt="uidesign" className="skillBarImg" />
                <div className="skillBarText">
                <h1>UI/UX DESIGN</h1>
                <p>Involves creating intuitive, user-friendly interfaces that enhance the overall user experience through effective layout, design, and interaction.</p>
                </div>
                
            </div>
            <div className="skillbar">
                <img src={WebDesign} alt="webdesign" className="skillBarImg" />
                <div className="skillBarText">
                <h1>WEB DESIGN</h1>
                <p>Focuses on crafting visually appealing and responsive websites with an emphasis on layout, typography, color schemes, and navigation for seamless browsing across devices.</p>
                </div>
                
            </div>
            <div className="skillbar">
                <img src={AppDesign} alt="appdesign" className="skillBarImg" />
                <div className="skillBarText">
                <h1>APP DESIGN</h1>
                <p>Encompasses the creation of mobile or desktop application interfaces that are easy to use, aesthetically pleasing, and optimized for performance on various platforms.</p>
                </div>
                
            </div>
        </div>
       </section>
    )
}
export default Skills