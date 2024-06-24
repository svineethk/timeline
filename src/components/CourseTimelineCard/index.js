// Write your code here

import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {eachItem} = props
  const {courseTitle, duration, description, tagsList} = eachItem

  const renderTagItem = eachTag => {
    const {name} = eachTag

    return (
      <div className="eachTag-container">
        <p>{name}</p>
      </div>
    )
  }

  return (
    <div className="containers">
      <div className="detail-container">
        <div className="title-container">
          <h1>{courseTitle}</h1>
          <div className="course-duration-container">
            <AiFillCalendar color="#171f46" />
            <p>{duration}</p>
          </div>
        </div>
        <p>{description}</p>
        <div className="skill-container">
          {tagsList.map(eachTag => renderTagItem(eachTag))}
        </div>
      </div>
    </div>
  )
}

export default CourseTimelineCard
