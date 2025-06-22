import React from 'react';
import './founder.css';
import pict from '../assets/WhatsApp Image 2024-05-19 at 19.59.16_33227387.jpg'
import pict2 from '../assets/photo_2025-06-20_14-12-59.jpg'
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaGithub,
    FaWhatsapp,
    FaLink,
    FaTelegramPlane
} from 'react-icons/fa';


const MeetTheVisionaries: React.FC = () => {
    return (
        <section className="meet-visionaries" data-aos="slide-up" data-aos-delay={100}>
            <div className="section-header">
                <h2>Meet the Visionaries</h2>
                <p className="subtext">
                    Young, focused, and fearless — We are not just coders or strategists. We're architects of a new digital age.
                </p>


            </div>

            <div className="visionary-grid">
                {/* Founder */}
                <div className="founder-card">
                    <img
                        src={pict}
                        alt="Founder"
                        className="founder-img founder"
                    />
                    <h3>Oke Ayomide Peter</h3>
                    <p className="role blue">Founder & CEO</p>
                    <div className="social-iconst">
                        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="https://x.com/AyomidePet60412" aria-label="Twitter"><FaTwitter /></a>
                        <a href="https://www.linkedin.com/in/ayomide-peter-oke-483420273" aria-label="LinkedIn"><FaLinkedinIn /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                        <a href="https://github.com/ayoo52294" aria-label="Github"><FaGithub /></a>
                        <a href="#" aria-label="Whatsapp"><FaWhatsapp /></a>
                        <a href="#" aria-label="Website"><FaLink /></a>
                        <a href="#" aria-label="Telegram"><FaTelegramPlane /></a>
                    </div>
                    <p className="bio">
                        A tech innovator and strategist driven by impact. With a passion for decentralization and inclusive technology, Oke Ayomide Peter leads with vision and purpose.
                    </p>

                </div>

                {/* Co-Founder */}
                <div className="founder-card">
                    <img
                        src={pict2}
                        alt="Co-Founder"
                        className="founder-img cofounder"
                    />
                    <h3>Jeje Oluwatimilehin Paul</h3>
                    <p className="role indigo">Co-Founder & CTO</p>
                    <div className="social-iconst">
                        <a href="https://www.facebook.com/JejeTimmy" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="https://x.com/ExecTimmy?t=UuormOoLTiUo81b7Y3Lgfg&s=09" aria-label="Twitter"><FaTwitter /></a>
                        <a href="https://www.linkedin.com/in/jeje-timmy-9b011b2a7" aria-label="LinkedIn"><FaLinkedinIn /></a>
                        <a href="https://www.instagram.com/exectimmy" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" aria-label="Github"><FaGithub /></a>
                        <a href="https://wa.me/2347045136425" aria-label="Whatsapp"><FaWhatsapp /></a>
                        <a href="#" aria-label="Website"><FaLink /></a>
                        <a href="#" aria-label="Telegram"><FaTelegramPlane /></a>

                    </div>
                    <p className="bio">
                        A builder and creative engineer passionate about solving real-world problems through code. Jeje Oluwatimilehin Paul is focused on crafting scalable, elegant solutions.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MeetTheVisionaries;
