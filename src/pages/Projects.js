import { useState, useEffect } from "react";
function Projects(props){
  const [projects, setProjects]= useState(null);
  const getProjectsData = async() =>{
    const response= await fetch(props.URL + "projects");
    const data= await response.json();
    setProjects(data);
  };
  useEffect (()=> getProjectsData(), []);
  const loaded = () =>{
    return projects.map((project) => (
      <div>
        <h1>{project.title}</h1>
        <div className="project_item-cta">
          <img src={project.image}/>
          <a href={project.git} className="btn" target="_blank">
            Github
          </a>
          <a href={project.live} className="btn btn-primary" target="_blank">
            Live site
          </a>
        </div>
      </div>
    ));
  };
  return projects ? loaded() : <h1> loading ...</h1>;
}
export default Projects;