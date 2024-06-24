// Write your code here

import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {eachItem} = props
  const {projectTitle, description, duration, projectUrl, imageUrl} = eachItem

  return (
    <div className="containers">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="detail-container">
        <div className="title-container">
          <h1 className="project-header">{projectTitle}</h1>
          <div className="duration-container">
            <AiFillClockCircle color="#171f46" />
            <p>{duration}</p>
          </div>
        </div>
        <p className="project-subHeader">{description}</p>
        <a href={projectUrl} target="blank" className="project-link">
          Visit
        </a>
      </div>
    </div>
  )
}

export default ProjectTimelineCard
