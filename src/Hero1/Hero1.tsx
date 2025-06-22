
import "./Hero1.css";

function Hero1() {
  return (
    
    <section className="hero1-section" id="home1" >
      <div className="hero1-image"></div>
      <div className="hero1-overlay"></div>
      <div className="hero1-content">
        <h1 className="peter">
          A&T Associates
        </h1>

        <p
          className="mb-8 text-xl text-white font-nacelle"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          At A&T Associates, we help businesses unlock their online potential with stunning websites, custom platforms, and tech solutions tailored to their growth. Our mission is to make a lasting impact in the digital space—one project at a time.
        </p>
        <p className="text-white font-nacelle ">
          Your Vision, Our Code
        </p>
        <a className="btn bg-[length:200%_auto]" href="#contact">
          Get Started
        </a>
        <a className="btn " id="btn-learn" href="#about">
          Who we are
        </a>


      </div>
    </section>




  );
}

export default Hero1;
