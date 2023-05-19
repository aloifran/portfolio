import Image from "next/image";

export default function About() {
    return (
        <div className="mx-auto flex w-4/5 flex-col gap-8 px-4 py-8">
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold">About me</h1>

                <p>
                    Hi there, I’m Francisco Aloi, a Software Engineer with a
                    Test Automation background from Argentina, currently based
                    in Germany.
                </p>
                <p>
                    I began my programming journey in Java focused on automating
                    end-to-end workflows. I mostly worked for Fintech companies
                    using diverse approaches and tools to cover front-end,
                    back-end, and mobile products. This involved adapting to
                    various system architectures including messaging systems,
                    microservices, databases, and APIs.
                </p>
                <p>
                    After years of programming for tests, I realized I desired
                    to code for creating products and pursue a software
                    development career. I recently completed a Full-stack
                    Software Development Bootcamp, gaining hands-on experience
                    with various technologies and successfully delivering
                    multiple projects. This challenge solidified my career path
                    and reinforced my dedication to pursue this role.
                </p>
                <p>
                    Now, I am actively seeking a new position as a Software
                    Engineer.
                </p>

                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-bold">Contact me</h2>
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
        </div>
    );
}
