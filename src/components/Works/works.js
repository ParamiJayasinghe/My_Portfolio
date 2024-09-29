import React from "react";
import './works.css';
import Portfolio1 from '../../images/healthcare system.webp';
import Portfolio2 from '../../images/hotel booking system.jpg';
import Portfolio3 from '../../images/movie review.jpg';
import Portfolio4 from '../../images/new recipe.png';
import Portfolio5 from '../../images/online shopping.jpg';
import Portfolio6 from '../../images/song recomendation system.webp';


const Works=() =>{

    return(
       <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDescription">A descriotion sentence</span>
        <div className="worksImgs">
            <img src={Portfolio1} alt="portfolio1" className="worksImg" />
            <img src={Portfolio2} alt="portfolio2" className="worksImg" />
            <img src={Portfolio3} alt="portfolio3" className="worksImg" />
            <img src={Portfolio4} alt="portfolio4" className="worksImg" />
            <img src={Portfolio5} alt="portfolio5" className="worksImg" />
            <img src={Portfolio6} alt="portfolio6" className="worksImg" />

        </div>
       </section>
    )
}
export default Works