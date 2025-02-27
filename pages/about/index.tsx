import Contact from "@/components/Contact";
import PageWrapper from "@/components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <div className="mx-auto flex w-4/5 flex-col gap-8 py-8 md:w-3/5">
        <div className="flex flex-col gap-6 md:w-11/12">
          <h1 className="text-3xl font-semibold md:text-4xl">About me</h1>
          <div className="flex flex-col gap-6">
            <p>
              Hi there, I&apos;m Francisco Aloi, a{" "}
              <span className="font-semibold">Software Engineer</span> with a{" "}
              <span className="font-semibold">Test Automation</span> background from Argentina,
              currently based in Berlin.
            </p>
            <p>
              I began my programming journey in <span className="font-semibold">Java</span> focused
              on automating end-to-end workflows using diverse approaches and tools to cover
              front-end, back-end, and mobile domains. Later I discovered the simplicity of{" "}
              <span className="font-semibold">Javascript</span> and{" "}
              <span className="font-semibold">Typescript</span> and started learning testing tools
              such as Cypress and Playwright.
            </p>

            <p>
              As part of my experiences in various companies, I had to adapt to many different{" "}
              <span className="font-semibold">system architectures</span> including messaging
              systems, microservices, databases, and APIs.
            </p>

            <p>
              After years of programming for tests, I felt the need to deepen my understanding of how software products are built
              and gain insight into the <span className="font-semibold">full stack development</span> process.
              I recently completed an intensive software development bootcamp, where I gained hands-on
              experience with various technologies and successfully delivered multiple projects.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
