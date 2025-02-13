import ProjectCard from "@/components/ProjectCard";
import PageWrapper from "@/components/PageWrapper";
import Contact from "@/components/Contact";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <PageWrapper>
      <div className="mx-auto flex w-4/5 flex-col gap-16 pt-8 md:w-3/5">
        {/* Intro */}
        <div className="flex flex-col gap-3 md:w-11/12">
          <h1 className="text-2xl font-semibold md:text-2xl">Hi, I&apos;m Francisco.</h1>
          <p>I&apos;m a Software Engineer with a Test Automation background.</p>
          <p>
            I love building things, automating tests, and exploring new frameworks that enhance the
            development experience and challenge my way of thinking.
          </p>
          <p>
            I&apos;m currently working as a Senior Test Automation Engineer at{" "}
            <a href="https://www.klara.com/" className="link">
              Klara
            </a>
          </p>

          <div className="mt-4">
            <Contact />
          </div>
        </div>

        <Divider />

        {/* Skills */}
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold">My Skills</h1>
          <div className="-mx-4 mt-4 flex flex-wrap">
            <div className="mt-4 w-1/2 px-4 lg:w-1/4">
              <div className="font-semibold">Front-End</div>
              <div className="mt-2 space-y-1">
                <ul>
                  <li>HTML & CSS</li>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Vue.js</li>
                  <li>Redux</li>
                  <li>Pinia</li>
                  <li>Tailwind</li>
                  <li>Storybook</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 w-1/2 px-4 lg:w-1/4">
              <div className="font-semibold">Back-End</div>
              <div className="mt-2 space-y-1">
                <ul>
                  <li>Javascript (Node.js)</li>
                  <li>Typescript</li>
                  <li>Java</li>
                  <li>Rest APIs</li>
                  <li>GraphQL</li>
                  <li>SQL</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 w-1/2 px-4 lg:w-1/4">
              <div className="font-semibold">Testing</div>
              <div className="mt-2 space-y-1">
                <ul>
                  <li>Playwright</li>
                  <li>Cypress</li>
                  <li>Jest</li>
                  <li>Cucumber</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 w-1/2 px-4 lg:w-1/4">
              <div className="font-semibold">DevOps & Tools</div>
              <div className="mt-2 space-y-1">
                <ul>
                  <li>Git</li>
                  <li>Docker</li>
                  <li>AWS</li>
                  <li>CircleCI</li>
                  <li>Github Actions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Divider />

        {/* Projects  */}
        <div className="flex max-w-5xl scroll-mt-28 flex-col gap-2" id="projects">
          <h1 className="text-2xl font-semibold">Projects</h1>
          <p>Some of the projects I’ve been working on lately.</p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <ProjectCard
              title="Sound Synthesis"
              description="An interactive educational site about the essentials of sound synthesis with audiovisual examples."
              imageSrc="/sound-synth.png"
              repoUrl="https://github.com/aloifran/SoundSynthesis"
              siteUrl="https://sound-synthesis.vercel.app/"
              techStack={["React", "Tone.js", "P5.js", "MUI", "Typescript"]}
            />
            <ProjectCard
              title="Image Gallery"
              description="A private image manager that uses Supabase for authentication, database, and storage."
              inDevelopment
              imageSrc="/image-gallery.png"
              repoUrl="https://github.com/aloifran/image-board"
              siteUrl="https://image--gallery.vercel.app/"
              techStack={["Vue.js", "Vuetify", "Supabase", "Typescript"]}
            />
            <ProjectCard
              title="Rock Paper Scissors"
              description="A classic game with a minimalist approach where I focused on the possibilities of Framer Motion animation."
              imageSrc="/rock-paper-scissors.png"
              repoUrl="https://github.com/aloifran/rock-paper-scissors"
              siteUrl="https://rock-paper-scissors-aloifran.vercel.app/"
              techStack={["React", "Bulma", "Framer Motion", "Typescript"]}
            />
          </div>
        </div>
        <Divider />
      </div>
    </PageWrapper>
  );
}
