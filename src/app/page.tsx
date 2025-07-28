import Image from "next/image";
import {Card, CardHeader, CardBody} from "@nextui-org/card";
import {FaHome, FaLinkedin, FaGithub, FaSun} from "react-icons/fa";
import Head from "next/head";

export default function Home() {
    const experiences = [
        {
            logo: "/reply_logo.jpg",
            title: "Blue Reply IT",
            position: "Software Engineer",
            description: "Built and optimized multi-agent systems with LangGraph and Generative AI, enhancing automation and decision-making capabilities across complex workflows by 70%. Designed and developed large-scale backend systems using microservice architectures, AWS cloud technologies, Kubernetes, and MongoDB, improving system scalability and reliability for millions of users.",
            dates: "October 2024 - Current",
            link: "https://www.reply.com/blue-reply/it/"
        },
        {
            logo: "/spot_logo.jpg",
            title: "SPOT Software",
            position: "Software Engineer, Intern",
            description: "Designed and implemented a micro service web application in Angular, React and Node.",
            dates: "February 2022 - April 2022",
            link: "https://www.spotdigitalmadesimple.com/it/"
        },
        {
            logo: "/vae_victis_logo.jpg",
            title: "Vae Victis Games",
            position: "AI Tester, Intern",
            description: "Evaluated and optimized the AI model for random circuit generation in the sandbox racing game RaceCraft, enhancing track diversity and player experience. Tested and fine-tuned hyperparameters for AI-driven automated drivers, resulting in smoother, more competitive, and adaptive racing behavior.",
            dates: "January 2018 - March 2018",
            link: "https://racecraft.tecnoplay.com/"
        },
    ];

    const educations = [
        {
            logo: "/unibo_logo.jpg",
            title: "University of Bologna",
            position: "Msc in Computer Science and Engineering",
            description: "Grade: 110/110 with honors",
            dates: "2022 - 2024",
            link: "https://corsi.unibo.it/2cycle/ComputerScienceEngineering"
        },
        {
            logo: "/universitat_politecnica_de_catalunya_logo.jpg",
            title: "UPC Barcelona",
            position: "International Studies",
            description: "Master in Artificial Intelligence and Master in Research in Informatics",
            dates: "September 2023 - February 2024",
            link: "https://www.upc.edu/en"
        },
        {
            logo: "/unibo_logo.jpg",
            title: "University of Bologna",
            position: "Bsc in Computer Science and Engineering",
            description: "Grade: 110/110 with honors",
            dates: "2019 - 2022",
            link: "https://corsi.unibo.it/1cycle/ComputerScienceEngineering"
        },
    ];

    const projects = [
        {
            title: "MARL of Swarm Behaviours with GNNs",
            description: "Master Thesis",
            technologies: "Graph Neural Networks, Multi-Agent, Reinforcement Learning",
            image: "/Master_Thesis.png",
            link: "https://amslaurea.unibo.it/id/eprint/33685/",
        },
        {
            title: "PlagueDotScala",
            description: "Game",
            technologies: "Scala, FP, SCRUM, TDD",
            image: "/PlagueDotScala_1.jpg",
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
                <FaSun className="text-xl cursor-pointer hover:text-customColor transition"></FaSun>
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
                                    <p className="text-xs md:text-sm text-gray-700 text-left">{experience.description}</p>
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
                                        <p className="text-xs md:text-sm text-gray-700 text-left">{education.description}</p>
                                    </div>
                                </div>
                            </li>
                        </a>
                    ))}
                </ul>
            </section>

            <section className="max-w-xl w-full mt-12">
                <h2 className="text-2xl font-semibold text-center mb-16 text-start">Personal <span className="text-customColor">Projects</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {projects.map((project, index) => (
                        <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                            <Card
                                style={{ padding: '16px', maxWidth: '270px', willChange: 'transform' }}
                                className={`glassmorphic py-4 rounded-xl w-full transition-transform transform hover:scale-105 justify-self-center ${
                                    index % 2 === 0 ? 'md:justify-self-end' : 'md:justify-self-start'
                                }`}
                            >
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                    <p className="text-tiny uppercase font-bold">{project.title}</p>
                                    <p className="text-tiny">{project.description}</p>
                                    <small className="text-default-500">{project.technologies}</small>
                                </CardHeader>
                                <CardBody className="overflow-visible py-2">
                                    <Image
                                        alt="Card background"
                                        className="object-cover rounded-xl"
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
