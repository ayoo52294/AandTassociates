import "./About.css"; 
import GifThumb from '../assets/A&T+Associates.gif'; 


function About() {
  return (
    <>

      <section className="about" id="about" data-aos="zoom-in" data-aos-delay={100}>
        <div className="about-img overflow-y-hidden">
          <div className="mx-auto max-w-5xl" >
            
            <img
              src={GifThumb}
              alt="Cybersecurity Animation"
              className="rounded-lg shadow-lg"
              width={700}
              height={400}
              loading="lazy"
            />
          </div>

      
        </div>
        <div className="about-content">
          <h2 className="jun  bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            About Us
          </h2>
          <p>
          A&T Associates is a results-driven digital solutions team helping startups, growing businesses, and established companies thrive online. We specialize in web/mobile app development, social media management, branding and digital strategy, focused on elevating your brand and delivering measurable impact.

          </p>
        </div>
      </section>
    </>
  );
}

export default About;
