import type { NextComponentType } from "next";

import Link from "next/link";

const Projects: NextComponentType = () => {
  return (
    <div className="my-16 px-3 font-sen" id="projects">

  {/* Project title. If the organization's project page lists several possible projects, make sure your statement of interest title reflects the project you wish to work on. If you are submitting a statement of interest to an organization that has not yet determined possible projects, your title should summarize the work you are proposing. For example, "Create Interactive ProjectX API Documentation" is a better title than "Documentation for ProjectX".
  Detailed description.
  Give a description of how you would approach the project that the organization stated on their project proposal page.
  Say how what you’re proposing will solve the problem or meet the goal that the organization set out on their project proposal page.
  Include a summary of any discussions you’ve had with members of the organization about the project.
  Pay attention to the language and style of your proposal. The open source organization may use these as a factor in assessing your proposal.
  Proposed timeline
  Give a general outline of the timeline and phases of the project. For example, you may budget two weeks for information gathering, four weeks for writing, two weeks for review and changes, and a week for publication.
  Include explicit expectations for participation and feedback from project members. For example, you may state that your timeline is dependent on receiving responses to queries within three days.
  Proposed budget
  We recommend that technical writers propose a budget for the entire project, rather than an hourly rate.
  If possible, give options for reduced or increased scope. For example, you may give different budget options for documenting deployment instructions for two, four, or six platforms. */}

      <p className="text-3xl font-bold text-white">Project Timeline</p>
      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
        {/* <Link href="https://vault3.live" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#D8B4FE] to-[#818CF8] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Vault3</p>
              <p>Your safest decentralized vault</p>
            </div>
          </a>
        </Link>

        <Link href="https://github.com/avneesh0612/Orbits-UI" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Orbits UI</p>
              <p>React component library built with Tailwind CSS</p>
            </div>
          </a>
        </Link> */}
      </div>
    </div>
  );
};

export default Projects;
