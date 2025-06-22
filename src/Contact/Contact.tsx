import "./Contact.css";
import header from "../assets/blurred-shape-gray 1.svg";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessageSent(false);

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_es5nuv3",       // EmailJS service ID
        "template_72h7sne",      // EmailJS template ID
        form.current,
        "lILLLbcjmv5DPCMMM"        //EmailJS public key
      )
      .then(() => {
        setLoading(false);
        setMessageSent(true);
        form.current?.reset();
        setTimeout(() => setMessageSent(false), 4000); 
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setLoading(false);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <>
      <div className="background">
        <img src={header} alt="background" />
      </div>

      <section id="contact" className="contact" data-aos="zoom-in" data-aos-delay={100}>
        <h2 className="colr text-3xl md:text-5xl font-nacelle font-semibold bg-clip-text text-transparent bg-[length:200%_auto] pb-4 overflow-hidden">
          Contact Us
        </h2>
        <p className="text-2xl md:text-3xl font-nacelle font-semibold text-transparent bg-white bg-clip-text bg-[length:200%_auto] pb-4 overflow-hidden">
          We'd love to hear from you! Reach out to us to get the job done ✔
        </p>

        <div className="contact-container">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="input-group">
              <input type="text" name="user_name" placeholder="Your Name" required />
              <input type="email" name="user_email" placeholder="Your Email" required />
            </div>
            <textarea name="message" rows={5} placeholder="Your Message" required></textarea>

            <button type="submit" className="btn bg-[length:200%_auto]" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {messageSent && <p className="success-message">✅Message Sent Successfully😉!</p>}
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
