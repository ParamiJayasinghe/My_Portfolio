import myPhoto from '../../images/My-Photo-4.png'

export default function HeroSection(){

    return(
        <section id="heroSectoin" className="hero--section">
            <div className="hero--section--content">
            <div className="hero--section--content">
                <p className="section--title">Hey,I am parami</p>
                <h1 className="hero--section--title">
                    <span className="hero--section--title--color">Full Stack</span>{""}
                    <br/>
                    Developer
                </h1>
                <p className="hero--section--description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br/>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt repellendus aliquid dolore cupiditate sed.
                </p>
            </div>
            <button className="btn btn--primary">Get in touch</button>
            </div>
            
            <div className="hero--section--img">
                <img style={{width:'600px'}} className='img' src={myPhoto} alt="Hero Section" />
            </div>
        </section>

    )
    ;
}