import WorflowImg01 from "../assets/jpeg-optimizer_patrik-michalicka-r3iAqHb7JWs-unsplash.jpg";
import WorflowImg02 from "../assets/jpeg-optimizer_carriza-maiquez-RTdvy9izXvw-unsplash.jpg";
import WorflowImg03 from "../assets/jpeg-optimizer_markus-winkler-QJOxrWXTARM-unsplash.jpg";
import './services.css'
import { JSX } from "react/jsx-runtime";

interface WorkflowItem {
    img: string;
    alt: string;
    label: string;
    description: string;
}

const workflowItems: WorkflowItem[] = [
    {
        img: WorflowImg01,
        alt: "Workflow 01",
        label: "Digital Presence & Branding",
        description: "We help businesses create a powerful first impression.From sleek websites to cohesive brand identities, we ensure your online presence reflects your vision, values, and credibility.",
    },
    {
        img: WorflowImg02,
        alt: "Workflow 02",
        label: "Custom Web & App Development",
        description:
            "We build tailored digital solutions that fit your business like a glove.Whether it's a dynamic website, mobile app, or full-scale platform, we prioritize performance, user experience, and future scalability.",
    },
    {
        img: WorflowImg03,
        alt: "Workflow 03",
        label: "Tech Advisory & Innovation Strategy",
        description:
            "We’re more than developers — we’re growth partners.We offer strategic guidance on how to leverage technology for competitive advantage, streamline operations, and launch innovative projects with real impact.",
    },
];

function Workflows(): JSX.Element {
    return (
        <section className="workflow-section" id="projects" data-aos="zoom-in" data-aos-delay={100}>
            <div className="workflow-container">
                <div className="workflow-header">
                    <h2 className="workflow-title">Our Services</h2>
                </div>

                <div className="workflow-spotlight">
                    {workflowItems.map((item, index) => (
                        <a key={index} className="workflow-card" href="#0">
                            <div className="workflow-card-inner">
                                <img
                                    className="workflow-img"
                                    src={item.img}
                                    width={350}
                                    height={288}
                                    alt={item.alt}
                                />
                                <div className="workflow-content">
                                    <div className="workflow-label">{item.label}</div>
                                    <p className="workflow-description">{item.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Workflows;
