import type { NextComponentType } from "next";

import Link from "next/link";
import {
  MdEmail,
  AiOutlineTwitter,
  FaStackOverflow,
  SiCoursera,
  SiDevpost,
  SiHashnode,
  SiDevdotto,
  SiLinkedin,
} from "../Misc/Icons.collection";

import { Icon } from "../Misc/Icon.component";

const Personal: NextComponentType = () => {
  return (
    <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
      <div>
        <h1 className="pb-3 text-9xl font-bold text-white">
          Statement Of Interest: Moja Global: GSoD'22
        </h1>
        <p className="text-white">
          As per the format,{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 visited:text-purple-600"
            href="https://developers.google.com/season-of-docs/docs/tech-writer-statement"
          >
            Tech Writer Statement
          </a>
        </p>
      </div>
      <div>
        <div className="pb-10 text-white">
          <div className="w-full border-b border-gray-500">
            <h1 className="py-4 text-6xl font-bold">Personal</h1>
          </div>
        </div>
        {/* Include your name and email address. If you do not wish your name included in the public final case study reports, please note that in your proposal and provide a username. */}
        <p className="text-3xl font-bold text-white">Saif Ul Islam</p>
        <p className="mt-1 text-lg text-gray-100">
          Software Engineer, Blogger, Open Source &amp; Student
        </p>

        <p className="mt-4 text-gray-400">
          Focused on Web apps, proficient in full stack development in the JS
          and Python world.
          <br />
          <br />
          Sometimes I write articles when I can manage the time.
        </p>

        <div className="pt-3 font-sen" id="contact">
          <p className="text-3xl font-bold text-white">Get in touch</p>

          <div className="my-8 flex flex-row gap-x-4">
            <Icon
              icon={<AiOutlineTwitter />}
              url="https://twitter.com/SaifUlI25919743"
            />

            <Icon icon={<MdEmail />} url="mailto:saifulislam84210@gmail.com" />

            <Icon
              icon={<FaStackOverflow />}
              url="https://stackoverflow.com/users/10576072/saif-ul-islam"
            />

            <Icon
              icon={<SiCoursera />}
              url="https://www.coursera.org/user/894a184e37e4c4bb50544fcdc21a4edd"
            />

            <Icon icon={<SiDevpost />} url="https://devpost.com/Rubix982" />

            <Icon icon={<SiLinkedin />} url="https://linkedin.com/in/suislam" />
          </div>
        </div>

        <Link href="https://opensoft.hashnode.dev/" passHref>
          <a
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read my Blog On Hashnode! &nbsp; <SiHashnode />
          </a>
        </Link>

        <Link href="https://dev.to/rubix982" passHref>
          <a
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read my Blog On Dev.To! &nbsp; <SiDevdotto />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Personal;
