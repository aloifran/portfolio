import Contact from "@/components/Contact";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
    return (
        <div className="mx-auto flex w-3/5 flex-col gap-20 py-8">
            {/* Intro */}
            <div className="flex flex-col gap-4 md:w-11/12">
                <h1 className="text-3xl font-semibold md:text-4xl">
                    Hi, I’m Francisco,{" "}
                </h1>
                <h2 className="text-lg font-semibold md:text-xl">
                    a Software Engineer with a Test Automation background.
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
                <h1 className="text-3xl font-semibold">My Skills</h1>
                <p>
                    Through my studies and experience, these are the
                    technologies I enjoy using the most.
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
                                <li>Vue.js</li>
                                <li>Storybook</li>
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
                                <li>React Testing Library</li>
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
            <div className="flex scroll-mt-28 flex-col gap-2" id="projects">
                <h1 className="text-3xl font-semibold">Projects</h1>
                <p>Take a look at some of the projects I’ve been working on.</p>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                    <ProjectCard
                        title="Image Gallery"
                        description="A private image gallery where I focused on the possibilities of Supabase for database, authentication and storage management."
                        imageSrc="https://picsum.photos/600/300"
                        repoUrl="https://github.com/aloifran/image-board"
                        siteUrl="https://image-board.vercel.app/"
                        techStack={[
                            "Vue.js",
                            "Vuetify",
                            "Supabase",
                            "Typescript",
                        ]}
                    />
                    <ProjectCard
                        title="Sound Synthesis"
                        description="An interactive educational site about the essentials of sound synthesis with audiovisual examples."
                        imageSrc="https://picsum.photos/600/300"
                        repoUrl="https://github.com/aloifran/SoundSynthesis"
                        siteUrl="https://sound-synthesis.vercel.app/"
                        techStack={[
                            "React",
                            "Tone.js",
                            "P5.js",
                            "MUI",
                            "Typescript",
                        ]}
                    />
                    <ProjectCard
                        title="Rock Paper Scissors"
                        description="A game with a minimalist approach where I explored the possibilities of Framer Motion animation."
                        imageSrc="https://picsum.photos/600/300"
                        repoUrl="https://github.com/aloifran/rock-paper-scissors"
                        siteUrl="https://rock-paper-scissors-aloifran.vercel.app/"
                        techStack={[
                            "React",
                            "Bulma",
                            "Framer Motion",
                            "Typescript",
                        ]}
                    />
                </div>
            </div>

            <Contact />
        </div>
    );
}
