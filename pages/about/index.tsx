import PageWrapper from "@/components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <div className="mx-auto flex w-4/5 flex-col gap-8 py-8 md:w-3/5">
        <div className="flex flex-col gap-6 md:w-11/12">
          <h1 className="text-3xl font-semibold md:text-4xl">About me</h1>
          <div className="flex flex-col gap-6">
            <p>
              I&apos;m Francisco Aloi, a{" "}
              <span className="font-semibold">Senior Test Automation Engineer</span> from Argentina, and now based in Berlin. <br />
               I have over a decade of experience in front-end and back-end testing and specialize in building automated test systems that
               are easy to maintain and extend, alongside{" "}<span className="font-semibold">CI/CD pipelines</span> that improve delivery speed and reliability.
            </p>
            <p>
              I began my programming journey with{" "}<span className="font-semibold">Java</span>, focusing on automating complex end-to-end 
              workflows across{" "}<span className="font-semibold">front-end</span>,{" "}<span className="font-semibold">back-end</span>, and{" "}<span className="font-semibold">mobile</span> domains.
               As the years passed and the industry evolved, I discovered the simplicity of{" "}<span className="font-semibold">Javascript</span> and{" "}later adopted{" "}
              <span className="font-semibold">Typescript</span> as my current main language, embracing modern testing tools like{" "}
              <span className="font-semibold">Cypress</span> and{" "}<span className="font-semibold">Playwright</span> to build
              resilient and maintainable test frameworks.
              Most recently at Klara, I&apos;ve expanded into{" "}<span className="font-semibold">Ruby</span>, allowing me to contribute to the backend codebase mostly written
               in{" "}<span className="font-semibold">Ruby on Rails</span>.
            </p>

            <p>
              After years of programming for testing, I felt the need to deepen my understanding of how software products are built
              and gain insight into the development process.
              This led me to complete an intensive{" "}<span className="font-semibold">Full-stack Software Development Bootcamp</span>{" "}
              where I had the opportunity to successfully deliver multiple projects.
              That experience changed my perspective and allowed me to see the big picture of how a product is built and delivered,
               and how testing fits into the development process.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
