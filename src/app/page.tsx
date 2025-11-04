import Image from "next/image";
import {Card, CardHeader, CardBody} from "@nextui-org/card";
import {FaHome, FaLinkedin, FaGithub} from "react-icons/fa";
import Head from "next/head";

export default function Home() {
    const experiences = [
        {
            logo: "/reply_logo.jpg",
            title: "Blue Reply IT",
            position: "Software Engineer",
            description: [
            "Built a real-time clustering system for road events (accidents, construction, weather) powering (de)activation of autonomous driving features across 1M+ vehicles, with 85% latency reduction. Scaled to 30k+ daily events using Java, Spring Boot, and MongoDB on Kubernetes/AWS.",
            "Designed and deployed a multi-agent system with LangGraph and Python to automate end-to-end JUnit test generation from GitLab issues. Processed 50+ issues/month, saving ~60 QA hours/quarter; adopted by 2+ engineering teams within 3 months, fully replacing manual test workflows."
            ],
            dates: "October 2024 - Current",
            link: "https://www.reply.com/blue-reply/it/"
        },
        {
            logo: "/spot_logo.jpg",
            title: "SPOT Software",
            position: "Software Engineer, Intern",
            description: ["Developed modular web applications using Angular microfrontends, enabling independent deployment pipelines across feature teams. ", 
                          "Implemented async data flows with RxJS streams and leveraged functional programming patterns (immutability, pure functions, monadic composition) to reduce side effects and improve code testability."],
            dates: "February 2022 - April 2022",
            link: "https://www.spotdigitalmadesimple.com/it/"
        },
        {
            logo: "/vae_victis_logo.jpg",
            title: "Vae Victis Games",
            position: "AI Tester, Intern",
            description: ["Evaluated and optimized the AI model for random circuit generation in the sandbox racing game RaceCraft, enhancing track diversity and player experience. Tested and fine-tuned hyperparameters for AI-driven automated drivers, resulting in smoother, more competitive, and adaptive racing behavior."],
            dates: "January 2018 - March 2018",
            link: "https://racecraft.tecnoplay.com/"
        },
    ];

    const educations = [
        {
            logo: "/unibo_logo.jpg",
            title: "University of Bologna",
            position: "Msc in Computer Science and Engineering",
            description: ["110/110 with Honors", "Thesis focused on decentralized multi-agent reinforcement learning via GNNs, leading to a published research paper."],
            dates: "2022 - 2024",
            link: "https://corsi.unibo.it/2cycle/ComputerScienceEngineering"
        },
        {
            logo: "/universitat_politecnica_de_catalunya_logo.jpg",
            title: "UPC Barcelona",
            position: "Erasmus - MSc in Artificial Intelligence",
            description: ["Completed coursework in Computer Graphics, Virtual and Augmented Reality, Cognitive Interaction with Robots, and Normative and Dynamic Virtual Worlds, focused on real-time simulation, embodied interaction, and AI for games.",
                "Simulated particle, cloth, and fluid dynamics in C++ for real-time rendering.",
                "Built AR and VR apps in Unity, including mobile-based AR and room-scale VR, sustaining 60 FPS on consumer devices.",
                "Engineered a 3D investigation game with FSM-driven NPCs and AI behaviors, enabling 100% dynamic branching dialogue across 5+ suspect profiles.",
                "Developed a pose-matching browser game using Google MediaPipe and webcam-based real-time human pose estimation, achieving >90% classification accuracy and <100 ms latency on Chrome."
            ],
            dates: "September 2023 - February 2024",
            link: "https://www.upc.edu/en"
        },
        {
            logo: "/unibo_logo.jpg",
            title: "University of Bologna",
            position: "Bsc in Computer Science and Engineering",
            description: ["110/110 with Honors", "Thesis: built a real-time network architecture in Unity (C#) for collaborative Mixed Reality on HoloLens 2, supporting consistent multi-user state sync. Achieved <50 ms latency and 3,800 packets/sec throughput in high-entity-density scenarios over TCP and UDP."],
            dates: "2019 - 2022",
            link: "https://corsi.unibo.it/1cycle/ComputerScienceEngineering"
        },
    ];

    const projects = [
        {
            title: "ARGUS",
            description: "NASA Space Apps",
            technologies: "3D Engine, Simulation, Astrophysics, ThreeJS",
            image: "/argus.png",
            link: "https://github.com/Filippo-Venturini/meteor-madness/tree/main",
        },
        {
            title: "Swarm Coordination with GNNs",
            description: "Paper",
            technologies: "Graph Neural Networks, Multi-Agent, Reinforcement Learning",
            image: "/paper_2.png",
            link: "https://www.mdpi.com/2673-2688/6/11/282",
        },
        {
            title: "PlagueDotScala",
            description: "Game",
            technologies: "Scala, FP, SCRUM, TDD",
            image: "/PlagueDotScala.png",
            link: "https://github.com/Filippo-Venturini/PPS-22-plague",
        },
        {
            title: "ErasmusPlus",
            description: "Website",
            technologies: "MEVN Stack, GoogleMaps, HCI, UX",
            image: "/ErasmusPlus.png",
            link: "https://github.com/Filippo-Venturini/ErasmusPlus",
        },
        {
            title: "MovieNerd",
            description: "Mobile Application",
            technologies: "Android, Java, IMDB, Gamification",
            image: "/MovieNerd.png",
            link: "https://github.com/Filippo-Venturini/MovieNerd",
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8 md:p-20 font-[family-name:var(--font-geist-sans)]">
            <Head>
                <title>Filippo Venturini</title>
            </Head>
            <section className="max-w-xl">
                <div className="flex items-center gap-4">
                    <div>
                        <h1 className="text-3xl md:text-6xl font-bold">
                            Hi, I&#39;m <span className="text-customColor">Filippo</span>
                        </h1>
                        <p className="text-base md:text-lg">Software Engineer, passionate about Generative AI, Machine Learning, IoT, Distributed Systems, and VR/AR systems. 🚀🤖✨</p>
                    </div>

                    <Image
                        src="/profile_photo.png"
                        alt="photo of Filippo"
                        width={150}
                        height={150}
                        className="rounded-full object-cover"
                        priority
                    />
                </div>
            </section>

            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-around bg-white/80 backdrop-blur-md rounded-full shadow-md p-4 w-full max-w-64 md:max-w-80">
                <a><FaHome className="text-xl cursor-pointer hover:text-customColor transition" /></a>
                <a href="https://www.linkedin.com/in/filippo-venturini-4265b8235/" target="_blank"><FaLinkedin className="text-xl cursor-pointer hover:text-customColor transition" /></a>
                <a href="https://github.com/Filippo-Venturini" target="_blank"><FaGithub className="text-xl cursor-pointer hover:text-customColor transition" /></a>
            </div>

            <section className="text-center max-w-xl">
                <h2 className="text-xl font-semibold text-start">About <span className="text-customColor">Me</span></h2>
                <p className="mb-4 text-md text-gray-600 text-start">
                    Hi! I&#39;m Filippo, I&#39;m currently working as a Software Engineer at Blue Reply IT.
                </p>
                <h2 className="text-xl font-semibold mt-4 mb-2 text-start">Work <span className="text-customColor">Experience</span></h2>
                <ul className="list-none space-y-8">
                    {experiences.map((experience, index) => (
                        <a key={index} href={experience.link} target="_blank" className="flex items-start space-x-4 hover:bg-gray-100 p-4 rounded-lg transition">
                            <li className="flex items-start space-x-4 w-full">
                                <Image
                                    src={experience.logo}
                                    alt={`Logo of ${experience.title}`}
                                    width={50}
                                    height={50}
                                    className="rounded-lg object-cover mr-4 border border-gray-300"
                                />
                                <div className="flex flex-col justify-between flex-grow">
                                    <div className="flex justify-between items-center w-full">
                                        <h3 className="text-xs md:text-sm text-left flex-1 font-semibold">{experience.title}</h3>
                                        <p className="text-xs md:text-sm text-right text-gray-500">{experience.dates}</p>
                                    </div>
                                    <div className="flex justify-start">
                                        <h4 className="text-xs text-gray-600">{experience.position}</h4>
                                    </div>
                                    <ul>
                                        {experience.description.map((item, idx) => (
                                            <li key={idx} className="text-xs md:text-sm text-gray-700 text-left mb-2">• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        </a>
                    ))}
                </ul>

                <h2 className="text-xl font-semibold mt-4 mb-2 text-start">My <span className="text-customColor">Education</span></h2>
                <ul className="list-none space-y-8">
                    {educations.map((education, index) => (
                        <a key={index} href={education.link} target="_blank" className="flex items-start space-x-4 hover:bg-gray-100 p-4 rounded-lg transition">
                            <li className="flex items-start space-x-4 w-full">
                                <Image
                                    src={education.logo}
                                    alt={`Logo of ${education.title}`}
                                    width={50}
                                    height={50}
                                    className="rounded-lg object-cover mr-4 border border-gray-300"
                                />
                                <div className="flex flex-col justify-between flex-grow">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-xs md:text-sm text-lg text-left font-semibold">{education.title}</h3>
                                        <p className="text-xs md:text-sm text-gray-500">{education.dates}</p>
                                    </div>
                                    <div className="flex justify-start">
                                        <h4 className="text-xs text-left text-gray-600">{education.position}</h4>
                                    </div>
                                    <div className="flex justify-start">
                                        <ul>
                                            {education.description.map((item, idx) => (
                                                <li key={idx} className="text-xs md:text-sm text-gray-700 text-left mb-2">• {item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </a>
                    ))}
                </ul>
            </section>

            <section className="max-w-xl w-full mt-12">
                <h2 className="text-2xl font-semibold text-center mb-16 text-start">Personal <span className="text-customColor">Projects</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
                    {projects.map((project, index) => (
                        <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                        >
                        <Card
                            style={{ padding: '16px', maxWidth: '370px', willChange: 'transform' }}
                            className={`glassmorphic py-4 rounded-xl w-full h-full flex flex-col justify-between transition-transform transform hover:scale-105 ${
                            index % 2 === 0 ? 'md:justify-self-end' : 'md:justify-self-start'
                            }`}
                        >
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start flex-grow">
                            <p className="text-tiny uppercase font-bold">{project.title}</p>
                            <p className="text-tiny">{project.description}</p>
                            <small className="text-default-500">{project.technologies}</small>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2">
                            <Image
                                alt="Card background"
                                className="object-cover rounded-xl w-[270px] h-[250px]"
                                src={project.image}
                                width={270}
                                height={270}
                            />
                            </CardBody>
                        </Card>
                        </a>
                    ))}
                </div>
            </section>

        </div>);
}
