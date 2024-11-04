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
            description: "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"",
            dates: "January 2021 - May 2022",
        },
        {
            logo: "/universitat_politecnica_de_catalunya_logo.jpg",
            title: "UPC Barcelona",
            position: "International Studies",
            description: "Master in Artificial Intelligence + Master in Research in Informatics",
            dates: "September 2023 - February 2024",
        }
    ];

    const projects = [
        {
            title: "Progetto 1",
            description: "Descrizione del progetto 1.",
            image: "/profile_photo.png",
            link: "https://example.com/project1",
        },
        {
            title: "Progetto 2",
            description: "Descrizione del progetto 2.",
            image: "/profile_photo.png",
            link: "https://example.com/project2",
        },
        {
            title: "Progetto 3",
            description: "Descrizione del progetto 3.",
            image: "/profile_photo.png",
            link: "https://example.com/project3",
        },
        {
            title: "Progetto 4",
            description: "Descrizione del progetto 4.",
            image: "/profile_photo.png",
            link: "https://example.com/project4",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">

            <div className="flex items-center gap-4">
                <h1 className="text-4xl font-bold">Hi, I&#39;m Filippo</h1>
                <Image
                    src="/profile_photo.png"
                    alt="Foto di Filippo"
                    width={150}
                    height={150}
                    className="rounded-full object-cover"
                    priority
                />
            </div>

            <section className="text-center max-w-xl">
                <p className="mb-4 text-lg">
                    Hi! I&#39;m Filippo, ...about me...
                </p>
                <h2 className="text-2xl font-semibold mt-4 mb-2">Work Experience</h2>
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

                <h2 className="text-2xl font-semibold mt-4 mb-2">Education</h2>
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

            <section className="max-w-6xl w-full mt-12">
                <h2 className="text-2xl font-semibold text-center mb-4">Personal Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            style={{ backgroundColor: 'rgba(0, 0, 255, 0.1)', backdropFilter: 'blur(10px)', padding: '16px', maxWidth: '270px' }} // Background trasparente opaco
                            className={`py-4 rounded-xl w-full transition-transform transform hover:scale-105 ${
                                index % 2 === 0 ? 'justify-self-end' : 'justify-self-start'
                            }`}
                        >
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                <p className="text-tiny uppercase font-bold">Daily Mix</p>
                                <small className="text-default-500">12 Tracks</small>
                                <h4 className="font-bold text-large">Frontend Radio</h4>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2">
                                <Image
                                    alt="Card background"
                                    className="object-cover rounded-xl"
                                    src="/profile_photo.png"
                                    width={270}
                                    height={270}
                                />
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </section>

        </div>
    );
}
