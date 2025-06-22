import { useState } from "react";
import "./faq.css"; 

const faqData = [
    {
        question: "What kind of businesses do you work with?",
        answer:
            "We work with a wide range of businesses — from startups and small enterprises to NGOs and growing brands.Whether you’re launching your first website or scaling a custom tech platform, we tailor our services to fit your needs.",
    },
    {
        question: "What makes your startup different from other web agencies?",
        answer:
            "We’re a youth-led company driven by purpose, not just profit. We combine innovation, design, and strategic thinking to deliver tech that works — not just looks good. Every project is built with care, scalability, and long-term impact in mind.",

    },
    {
        question: "Can you work with international clients?",
        answer: "Yes. We serve clients globally, leveraging remote collaboration tools to ensure smooth communication and project delivery. Our team is comfortable working across time zones and cultures.",
    },
    {
        question: "Do you offer both design and development services?",
        answer:
            "Yes! We offer full-service digital solutions — UI/UX design, frontend and backend development, mobile app development, and branding. From concept to launch, we handle everything in-house.",
    },
    {
        question: " How long does it take to complete a project?",
        answer:
            "Timelines depend on the scope and complexity. Simple websites take about 2–4 weeks. Custom platforms or apps can take 6–12 weeks. We always provide clear timelines after our initial consultation and keep clients updated every step of the way.",
    },
    {
        question: " What technologies do you use?",
        answer:"We use modern, battle-tested stacks like React, Next.js, Tailwind CSS, FastAPI, PostgreSQL, and more. We choose tech based on performance, security, and your project goals.",
    },
];

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section" id="faq" data-aos="zoom-out" data-aos-delay={100}>
            <h2 className="faq-title   bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">Frequently Asked Questions</h2>
            <div className="faq-container">
                {faqData.map((item, index) => (
                    <div className="faq-item" key={index}>
                        <button
                            className={`faq-question ${openIndex === index ? "active" : ""}`}
                            onClick={() => toggleFaq(index)}
                        >
                            {item.question}
                        </button>
                        <div
                            className={`faq-answer ${openIndex === index ? "show" : ""}`}
                        >
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FaqSection;
