import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList';
import GithubIcon from "@material-ui/icons/GitHub"
import '../Styles/ProjectDisplay.css'

const ProjectDisplay = () => {
    const { id } = useParams();
    const project = ProjectList[id];
  return (
    <div className='project'>
      <h1>{project.name}</h1>
      <img src={project.image} alt="" />
      <p><b>Skills: </b>{project.skills}</p>
      <a href={project.url} target="_blank"><GithubIcon /></a>
      <p style={{fontSize: "14px"}}>click here to see demo</p>
    </div>
  )
}

export default ProjectDisplay
