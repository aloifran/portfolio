import Contact from "@/components/Contact";
import PageWrapper from "@/components/PageWrapper";

export default function About() {
    return (
        <PageWrapper>
            <div className="mx-auto flex w-4/5 flex-col gap-8 py-8 md:w-3/5">
                <div className="flex flex-col gap-6 md:w-11/12">
                    <h1 className="text-3xl font-bold">About me</h1>
                    <div className="flex flex-col gap-6">
                        <p>
                            Hi there, I’m Francisco Aloi, a Software Engineer
                            with a Test Automation background from Argentina,
                            currently based in Germany.
                        </p>
                        <p>
                            I began my programming journey in Java focused on
                            automating end-to-end workflows using diverse
                            approaches and tools to cover front-end, back-end,
                            and mobile products. I had to adapt to many
                            different system architectures including messaging
                            systems, microservices, databases, and APIs.
                        </p>
                        <p>
                            After years of programming for tests, I realized I
                            desired to code for creating products and pursue a
                            software development career. I recently completed a
                            full-stack software development bootcamp, were I
                            gained hands-on experience with various technologies
                            and successfully delivered multiple projects. This
                            challenge solidified my career path and reinforced
                            my dedication to pursue this role.
                        </p>
                        <p>
                            Now, I am actively seeking a new position as a
                            Software Engineer.
                        </p>
                    </div>
                </div>

                <Contact />
            </div>
        </PageWrapper>
    );
}
