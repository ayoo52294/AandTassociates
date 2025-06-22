import React, { useState } from 'react';
import './footer.css';
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaGithub,
    FaWhatsapp,
    FaTelegramPlane
} from 'react-icons/fa';
import Logo from '../assets/Yellow and Black Modern Media Logo (1).png'
import { HiClipboardDocument, HiCheckCircle } from "react-icons/hi2";




const Footer: React.FC = () =>{
    const [copied, setCopied] = useState<string | null>(null);

    const handleCopy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(text);
            setTimeout(() => setCopied(null), 2000); 
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    const renderCopyItem = (label: string, value: string) => (
        <div
            className="copy-item"
            onClick={() => handleCopy(value)}
            style={{ 
                cursor: "pointer", 
                display: "flex", 
                alignItems: "center", 
                gap: "0.5rem", 
                marginBottom: "0.5rem", 
                backgroundColor: "#f8f9fa",
                padding: "0.5rem",
                borderRadius: "0.25rem" 
            }}
        >
            <p style={{ margin: 0 }}>{label}: {value}</p>
            {copied === value ? (
                <HiCheckCircle style={{ color: "#10b981" }} /> 
            ) : (
                    <HiClipboardDocument style={{ color: "black" }} />
            )}
        </div>
    );

    return (
        <footer className="footer  font-nacelle" data-aos="zoom-out" data-aos-delay={100}>
            <div className="footer-container">

                <div className="footer-section logo-section">
                    <img src={Logo} alt="Company Logo" className="logo" />
                    <p>Think. Build. Elevate.</p>
                    <p>Code with purpose.</p>
                </div>

                <div className="footer-section info-section ">
                    <h4>Information</h4>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#projects">Our Services</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                </div>

                <div className="contact-section">
                    <h4>Contact</h4>
                    {renderCopyItem("Email", "a.and.tassociatesofficial@gmail.com")}
                    {renderCopyItem("Phone", "+2348143082149")}
                    {renderCopyItem("Phone", "+2347045136425")}
                    {renderCopyItem("Phone", "+2349160821403")}
                    <p>Mon–Sunday🌗: Always Open✔</p>
                </div>

                <div className="footer-section address-section">
                    <h4>Address</h4>
                    <p>Third Avenue,FHA Lugbe </p>
                    <p> Abuja, Nigeria</p>
                </div>

                <div className="footer-section social-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="#" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" aria-label="Github"><FaGithub /></a>
                        <a href="#" aria-label="Whatsapp"><FaWhatsapp /></a>
                        <a href="#" aria-label="Telegram"><FaTelegramPlane /></a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom ">
                <p>&copy; {new Date().getFullYear()} A&T Associates. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
