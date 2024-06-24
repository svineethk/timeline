// Write your code here
import './index.css'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  console.log(timelineItemsList)

  const renderTimeline = eachItem => {
    if (eachItem.categoryId === 'COURSE') {
      return <CourseTimelineCard key={eachItem.id} eachItem={eachItem} />
    }
    return <ProjectTimelineCard key={eachItem.id} eachItem={eachItem} />
  }

  return (
    <div className="app-container">
      <h1 className="header">
        MY JOURNEY OF <br /> <span className="sub-header">CCBP 4.0</span>
      </h1>
      <Chrono
        items={timelineItemsList}
        mode="VERTICAL_ALTERNATING"
        theme={{
          secondary: '#0967d2',
          titleColor: '#171f46',
        }}
      >
        {timelineItemsList.map(eachItem => renderTimeline(eachItem))}
      </Chrono>
    </div>
  )
}

export default TimelineView
