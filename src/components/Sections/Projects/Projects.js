import "./Projects.scss";
import ProjectsList from "./ProjectsList";
import { useState, useEffect } from "react";
import {
  featuredPortfolio,
  reactPortfolio,
  apiPortfolio,
  opensourcePortfolio,
  commissionedPortfolio,
} from "../../../projectData";

function Projects() {
  const projects = [
    { id: "featured", title: "Featured" },
    { id: "react", title: "React" },
    { id: "api", title: "API connected" },
    { id: "os", title: "Open Source" },
    { id: "commissioned", title: "Commissioned" },
  ];

  const [selected, setSelected] = useState("featured");
  const [projectData, setProjectData] = useState(featuredPortfolio);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setProjectData(featuredPortfolio);
        break;
      case "react":
        setProjectData(reactPortfolio);
        break;
      case "api":
        setProjectData(apiPortfolio);
        break;
      case "os":
        setProjectData(opensourcePortfolio);
        break;
      case "commissioned":
        setProjectData(commissionedPortfolio);
        break;
      default:
        setProjectData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <section className="projects" id="projects">
      <h1>Portfolio</h1>
      <ProjectsList
        projects={projects}
        setSelected={setSelected}
        currentSelected={selected}
      />
      <div className="container">
        {projectData.map((project) => {
          return (
            <div className="item" key={project.id}>
              <img src={project.img} alt="" />
              <h3>{project.title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
