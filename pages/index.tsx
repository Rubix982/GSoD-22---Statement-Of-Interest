import type { NextPage } from "next";

import { Header, Personal, Professional, Projects } from "../components";

const Home: NextPage = () => {
  return (
    <html className="scroll-smooth hover:scroll-auto">
      <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
        <Header />
        <Personal />
        <Professional />
        <Projects />
      </div>
    </html>
  );
};

export default Home;
