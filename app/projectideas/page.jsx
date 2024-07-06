// pages/resources.js

import Link from "next/link";

const resourcesData = {
  projectIdeas: [
    "Y combinator",
    "Product Hunt",
    "App Sumo",
    "GitHub Topics",
    "Twitter",
    "LinkedIn (maybe)",
    "Templates",
    "Indie Hackers",
  ],
  projectResources: {
    landingPageTemplates: [
      {
        name: "Tailwind Awesome",
        link: "https://www.tailwindawesome.com/?price=free&type=template",
      },
      { name: "Web3 Templates", link: "https://web3templates.com/" },
      {
        name: "Themewagon",
        link: "https://themewagon.com/theme-framework/tailwind-css/",
      },
    ],
    nextJSTemplates: [
      { name: "Vercel Templates", link: "https://vercel.com/templates" },
      {
        name: "Creative Tim",
        link: "https://www.creative-tim.com/templates/nextjs",
      },
      { name: "Static Hunt", link: "https://statichunt.com/nextjs-templates" },
    ],
    blockchainProjects: [
      { name: "Thirdweb Templates", link: "https://thirdweb.com/templates" },
      {
        name: "Blockchain Course",
        link: "https://courses.30dayscoding.com/courses/Blockchain-developer-course-64eec408e4b002b964b568be",
      },
    ],
    githubRepositories: [
      {
        name: "Firebase Everything",
        link: "https://github.com/singh1aryan/firebase-everything",
      },
      {
        name: "NextJS Prisma SQL",
        link: "https://github.com/singh1aryan/nextjs-prisma-sql",
      },
      {
        name: "Pinecone Vercel AI",
        link: "https://github.com/singh1aryan/pinecone-vercel-ai",
      },
      {
        name: "NextJS NestJS GraphQL Starter",
        link: "https://github.com/singh1aryan/NextJS-NestJS-GraphQL-Starter",
      },
      {
        name: "API SaaS Project",
        link: "https://github.com/singh1aryan/api-saas-project",
      },
      {
        name: "Subscription Starter",
        link: "https://github.com/singh1aryan/subscription-starter",
      },
      { name: "Taxonomy", link: "https://github.com/singh1aryan/taxonomy" },
    ],
    supabaseProjects: [
      {
        name: "Discord Bot",
        link: "https://supabase.com/docs/guides/functions/examples/discord-bot",
      },
      {
        name: "Telegram Bot",
        link: "https://supabase.com/docs/guides/functions/examples/telegram-bot",
      },
      {
        name: "Screenshots App",
        link: "https://supabase.com/docs/guides/functions/examples/screenshots",
      },
    ],
    nextJSProjects: [
      { name: "Kontent Creator", link: "https://KontentCreator.com" },
      { name: "Talk to Hire", link: "https://talktohire.com" },
      {
        name: "Next.js Prisma Postgres",
        link: "https://vercel.com/guides/nextjs-prisma-postgres",
      },
      { name: "Liftoff", link: "https://vercel.com/templates/next.js/liftoff" },
      {
        name: "Shooketh",
        link: "https://vercel.com/templates/next.js/shooketh",
      },
      { name: "Novel", link: "https://vercel.com/templates/next.js/novel" },
      { name: "Tier", link: "https://vercel.com/templates/next.js/tier" },
      {
        name: "Fullstack Prisma NextJS Blog",
        link: "https://vercel.com/templates/next.js/fullstack-prisma-nextjs-blog",
      },
      {
        name: "Notion as a CMS",
        link: "https://bejamas.io/blog/how-to-create-next-js-blog-using-notion-as-a-cms/",
      },
      { name: "Linknode", link: "https://github.com/sujjeee/linknode" },
      {
        name: "Headshots Starter",
        link: "https://github.com/leap-ai/headshots-starter",
      },
      { name: "Liftoff", link: "https://vercel.com/templates/next.js/liftoff" },
      {
        name: "Traveling AI App",
        link: "https://www.notion.so/brwnboi/Traveling-AI-app-e4c2ab3427824793811f3be4dbf0942a",
      },
    ],
  },
  indieHackers: [
    { name: "Steven", link: "https://github.com/steven-tey" },
    { name: "Nutlope", link: "https://github.com/Nutlope/pdftochat" },
    { name: "Nader", link: "https://github.com/dabit3" },
    { name: "Levels", link: "https://twitter.com/levelsio" },
    { name: "Danish", link: "https://twitter.com/mddanishyusuf" },
    { name: "Tibo", link: "https://twitter.com/tibo_maker" },
    { name: "Manu", link: "https://twitter.com/mannupaaji" },
  ],
  projectIdeas: [
    "Donation app with a niche cause",
    "Sports community app - growing field",
    "Fundraising for early startups - how to do it?",
    "Community for fitness",
    "Sports tournaments app - local",
    "Indoor cricket app / scoring / finding grounds, people",
    "Connect chefs with investors / business minded people",
    "DSA league / tournament",
    "Algorithms which are practical - flight simulator style",
    "AI app for creators - video to blogs to repurposing",
    "One DSA question per day in email",
    "Ai mock interview - take the screening round",
    "Dsa / full stack gamified Leaderboard",
    "Interview questions - auto generated thru ai",
    "React / fe / be interview - thru ai",
    "Behavior interview dashboard - ai + gamified",
  ],
};

const ProjectIdeasPage = () => {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">Project Resources</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How to Find Project Ideas?
        </h2>
        <ul className="list-disc list-inside">
          {resourcesData.projectIdeas.map((idea, index) => (
            <li key={index}>{idea}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Contact me for any queries!
        </h2>
        <a
          className=" underline text-blue-500"
          href="https://www.instagram.com/kuchbhiakshay?igsh=MWh0OXB6b3htaTFsYw=="
        >
          Instagram Profile
        </a>
        <br />
        <a
          className="underline text-blue-500"
          href="https://www.linkedin.com/in/akshay-kumar-pandey/"
        >
          LinkedIn Profile
        </a>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Project Templates / Links / Resources / Guides
        </h2>
        <div className="mb-5">
          <h3 className="text-xl font-semibold mb-2">Landing Page Templates</h3>
          <ul className="list-disc list-inside">
            {resourcesData.projectResources.landingPageTemplates.map(
              (template, index) => (
                <li key={index}>
                  <a
                    className="text-blue-500 underline"
                    href={template.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {template.name}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="mb-5">
          <h3 className="text-xl font-semibold mb-2">Next JS Templates</h3>
          <ul className="list-disc list-inside">
            {resourcesData.projectResources.nextJSTemplates.map(
              (template, index) => (
                <li key={index}>
                  <a
                    className="text-blue-500 underline"
                    href={template.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {template.name}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="mb-5">
          <h3 className="text-xl font-semibold mb-2">Blockchain Projects</h3>
          <ul className="list-disc list-inside">
            {resourcesData.projectResources.blockchainProjects.map(
              (project, index) => (
                <li key={index}>
                  <a
                    className="text-blue-500 underline"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="mb-5">
          <h3 className="text-xl font-semibold mb-2">Github Repositories</h3>
          <ul className="list-disc list-inside">
            {resourcesData.projectResources.githubRepositories.map(
              (repo, index) => (
                <li key={index}>
                  <a
                    className="text-blue-500 underline"
                    href={repo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="mb-5">
          <h3 className="text-xl font-semibold mb-2">Supabase Projects</h3>
          <ul className="list-disc list-inside">
            {resourcesData.projectResources.supabaseProjects.map(
              (project, index) => (
                <li key={index}>
                  <a
                    className="text-blue-500 underline"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="mb-5">
          <h3 className="text-xl font-semibold mb-2">
            Next JS Projects / Templates
          </h3>
          <ul className="list-disc list-inside">
            {resourcesData.projectResources.nextJSProjects.map(
              (project, index) => (
                <li key={index}>
                  <a
                    className="text-blue-500 underline"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Follow Indie Hackers and Product Builders
        </h2>
        <ul className="list-disc list-inside">
          {resourcesData.indieHackers.map((hacker, index) => (
            <li key={index}>
              <a
                className="text-blue-500 underline"
                href={hacker.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {hacker.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Ideas that You Can Turn into Products
        </h2>
        <ul className="list-disc list-inside">
          {resourcesData.projectIdeas.map((idea, index) => (
            <li key={index}>{idea}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          Want to Discuss? DM Me on Instagram
        </h2>
        <p>Make projects with chat GPT - prompts</p>
        <ul className="list-disc list-inside">
          <li>
            <a
              className="text-blue-500 underline"
              href="https://chat.openai.com/share/f2ba18b2-e499-4798-a707-180044d53d49"
              target="_blank"
              rel="noopener noreferrer"
            >
              JS Projects
            </a>
          </li>
          <li>
            <a
              className="text-blue-500 underline"
              href="https://chat.openai.com/share/f2f5f3e4-ad16-4b52-9851-7c25d4b11c06"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Projects
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ProjectIdeasPage;
