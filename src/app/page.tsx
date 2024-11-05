import Image from "next/image";
import {Card, CardHeader, CardBody} from "@nextui-org/card";

export default function Home() {
    const experiences = [
        {
            logo: "/reply_logo.jpg",
            title: "Blue Reply IT",
            position: "Software Engineer",
            description: "Backend software development.",
            dates: "October 2024 - Current",
        },
        {
            logo: "/spot_logo.jpg",
            title: "SPOT Software",
            position: "Software Engineer, Intern",
            description: "Designed and implemented a micro service web application in Angular, React and Node.",
            dates: "February 2022 - April 2022",
        },
        {
            logo: "/vae_victis_logo.jpg",
            title: "Vae Victis Games",
            position: "AI Tester, Intern",
            description: "Evaluated the AI model for random circuit generation in RaceCraft. Tested and fine-tuned the hyperparameters of the AI model employed for the automated drivers.",
            dates: "January 2018 - March 2018",
        },
    ];

    const educations = [
        {
            logo: "/unibo_logo.jpg",
            title: "University of Bologna",
            position: "Msc in Computer Science and Engineering",
            description: "Grade: 110/110 with honors",
            dates: "2022 - 2024",
        },
        {
            logo: "/universitat_politecnica_de_catalunya_logo.jpg",
            title: "UPC Barcelona",
            position: "International Studies",
            description: "Master in Artificial Intelligence + Master in Research in Informatics",
            dates: "September 2023 - February 2024",
        },
        {
            logo: "/unibo_logo.jpg",
            title: "University of Bologna",
            position: "Bsc in Computer Science and Engineering",
            description: "Grade: 110/110 with honors",
            dates: "2019 - 2022",
        },
    ];

    const projects = [
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
        },
        {
            title: "MARL of Swarm Behaviours with GNNs",
            description: "Master Thesis",
            technologies: "Graph Neural Networks, Multi-Agent, Reinforcement Learning",
            image: "/Master_Thesis.png",
            link: "https://example.com/project4",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <section className="max-w-xl">
                <div className="flex items-center gap-4">
                    <div>
                        <h1 className="text-6xl font-bold">Hi, I&#39;m Filippo</h1>
                        <p className="text-lg">Software Engineer, passionate about IoT, Machine Learning, Distributed Systems, and VR/AR systems.</p>
                    </div>

                    <Image
                        src="/profile_photo.png"
                        alt="Foto di Filippo"
                        width={150}
                        height={150}
                        className="rounded-full object-cover"
                        priority
                    />
                </div>
            </section>

            <section className="text-center max-w-xl">
                <h2 className="text-2xl font-semibold text-start">About</h2>
                <p className="mb-4 text-md text-gray-600 text-start">
                    Hi! I&#39;m Filippo, I'm currently working as a Software Engineer at Blue Reply IT.
                </p>
                <h2 className="text-2xl font-semibold mt-4 mb-2 text-start">Work Experience</h2>
                <ul className="list-none space-y-4">
                    {experiences.map((experience, index) => (
                        <li key={index} className="flex items-start space-x-4 p-4">
                            <Image
                                src={experience.logo}
                                alt={`Logo di ${experience.title}`}
                                width={50}
                                height={50}
                                className="rounded-lg object-cover mr-4"
                            />
                            <div className="flex flex-col justify-between flex-grow">

                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-semibold">{experience.title}</h3>
                                    <p className="text-sm text-gray-500">{experience.dates}</p>
                                </div>
                                <div className="flex justify-start">
                                    <h4 className="text-md text-gray-600">{experience.position}</h4>
                                </div>
                                <p className="text-gray-700 text-left">{experience.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>

                <h2 className="text-2xl font-semibold mt-4 mb-2 text-start">Education</h2>
                <ul className="list-none space-y-4">
                    {educations.map((education, index) => (
                        <li key={index} className="flex items-start space-x-4 p-4">
                            <Image
                                src={education.logo}
                                alt={`Logo di ${education.title}`}
                                width={50}
                                height={50}
                                className="rounded-lg object-cover mr-4"
                            />
                            <div className="flex flex-col justify-between flex-grow">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-semibold">{education.title}</h3>
                                    <p className="text-sm text-gray-500">{education.dates}</p>
                                </div>
                                <div className="flex justify-start">
                                    <h4 className="text-md text-gray-600">{education.position}</h4>
                                </div>
                                <p className="text-gray-700 text-left">{education.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="max-w-xl w-full mt-12">
                <h2 className="text-2xl font-semibold text-center mb-4 text-start">Personal Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                    {projects.map((project, index) => (
                        <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                            <Card
                                style={{ padding: '16px', maxWidth: '270px', willChange: 'transform' }}
                                className={`glassmorphic py-4 rounded-xl w-full transition-transform transform hover:scale-105 ${
                                    index % 2 === 0 ? 'justify-self-end' : 'justify-self-start'
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

        </div>
    );
}
