/* eslint-disable react/no-unescaped-entities */
import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Web development
            </h5>
            <p className="font-semibold">Academy of Technology (2020-2024)</p>
            <p className="my-3">
              I am currently pursuing B.tech in web development
              from Academy of Technology
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Front end Developer Jr.</h5>
            <p className="font-semibold">MBLabs apps</p>
            <h5 className="my-2 text-xl font-bold">Front end Developer Jr.</h5>
            <p className="font-semibold">Strongway</p>
          </div>
        </div>
      </div>

      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;