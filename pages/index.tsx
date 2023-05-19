import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="mx-auto flex w-4/5 flex-col gap-8 px-4 py-8">
            {/* Intro */}
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold">Hi, I’m Francisco, </h1>
                <h2 className="text-xl font-bold">
                    a Software Engineer with Test Automation background.
                </h2>
                <p>
                    I love building things with Javascript and Typescript and
                    enjoy learning new frameworks that enhance the development
                    experience and challenge my way of thinking.
                    <br />
                    Working alongside senior developers for years as a Test
                    Automation Engineer encouraged me to become one myself.
                </p>
            </div>

            {/* Skills */}
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">My Skills</h1>
                <p>
                    Through my studies and experience, these are the
                    technologies I enjoy using the most
                </p>
                <div className="-mx-4 mt-4 flex flex-wrap">
                    <div className="mt-4 w-1/2 px-4 lg:w-1/4">
                        <div className="font-semibold">Front-End</div>
                        <div className="mt-2 space-y-1">
                            <ul>
                                <li>Javascript & Typescript</li>
                                <li>HTML & CSS</li>
                                <li>Tailwind</li>
                                <li>React</li>
                                <li>Next.js</li>
                                <li>Vue</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-4 w-1/2 px-4 lg:w-1/4">
                        <div className="font-semibold">Back-End</div>
                        <div className="mt-2 space-y-1">
                            <ul>
                                <li>Java</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>Rest APIs</li>
                                <li>GraphQL</li>
                                <li>SQL</li>
                                <li>Prisma</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-4 w-1/2 px-4 lg:w-1/4">
                        <div className="font-semibold">Testing</div>
                        <div className="mt-2 space-y-1">
                            <ul>
                                <li>Cypress</li>
                                <li>Jest</li>
                                <li>Cucumber</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-4 w-1/2 px-4 lg:w-1/4">
                        <div className="font-semibold">Other</div>
                        <div className="mt-2 space-y-1">
                            <ul>
                                <li>Redux</li>
                                <li>Pinia</li>
                                <li>Git</li>
                                <li>Docker</li>
                                <li>AWS</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects  */}
            <div>
                <h2 className="text-xl font-bold">
                    Take a look at{" "}
                    <Link href="/projects">what I’ve been doing</Link>
                </h2>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold">Get in touch with me</h2>
                {/* contact info and icons */}
                <div className="flex gap-8">
                    <a href="https://github.com/aloifran" target="_blank">
                        <Image
                            src="/icon-github.svg"
                            alt="Github"
                            height={35}
                            width={35}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/fjaloi"
                        target="_blank"
                    >
                        <Image
                            src="/icon-linkedin.svg"
                            alt="LinkedIn"
                            height={35}
                            width={35}
                        />
                    </a>
                    <a href="mailto:franad89@gmail.com">
                        <Image
                            src="/icon-email.svg"
                            alt="Email"
                            height={35}
                            width={35}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
