import React from "react";
import './intro.css';
import my from '../../images/My-Photo-2.png'
import { Link } from "react-scroll";


const Intro=() =>{

    return(
       <section id="intro">

        <div className="introContent">
            <span className="Hi">Hi!</span>
            <span className="Introtext">I am <span className="Name">Parami Jayasinghe</span><br />A software Engineer</span>
            <p className="IntroPara">I am a skilled fullstack software engineer</p>
            <Link ><button className="HireBtn">Hire me</button></Link>

        </div>

        <img src={my} alt="My" className="my" />

       </section>
    )
}
export default Intro