import Image from "next/image";

export default function Home() {
    const experiences = [
        {
            logo: "/profile_photo.png",
            title: "Reply",
            position: "Software Engineer",
            description: "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"",
            dates: "October 2023 - Current",
        },
        {
            logo: "/profile_photo.png",
            title: "Tech Solutions",
            position: "Frontend Developer",
            description: "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"",
            dates: "June 2022 - September 2023",
        },
        {
            logo: "/profile_photo.png",
            title: "Innovative Corp",
            position: "Backend Developer",
            description: "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"",
            dates: "January 2021 - May 2022",
        },
    ];

    const educations = [
        {
            logo: "/profile_photo.png",
            title: "University of Bologna",
            position: "Msc in Computer Science and Engineering",
            description: "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"",
            dates: "January 2021 - May 2022",
        }
    ]

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="flex items-center gap-4">
                <h1 className="text-4xl font-bold">Hi, I'm Filippo</h1>
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
                    Hi! I'm Filippo, ...about me...
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
        </div>
    );
}
