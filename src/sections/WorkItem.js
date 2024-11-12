import React from 'react';
import { object } from 'prop-types';
import './WorkItem.css';

const WorkItem = props => {
  const { workItemData } = props
  const getWorkDates = () => {
    const startdate = workItemData.startDate;
    let enddate = null;
    if (workItemData.endDate !== '') {
      enddate = workItemData.endDate;
    } else {
      enddate = 'Present';
    }

    return <span className='startdate'>{startdate} - {enddate}</span>
  }
    // Modified summary parsing to handle nested points
    const parseSummaryPoints = (summary) => {
      return summary.split('|').map(point => {
        const [mainPoint, ...subPoints] = point.split('>').map(p => p.trim());
        return {
          main: mainPoint,
          sub: subPoints
        };
      });
    };
  
    const summaryPoints = parseSummaryPoints(workItemData.summary);

  
  const getHighlights = workItemData.highlights.map(function(item, index) {
    return (<li key={index}>{item}</li>)
  });

  return (
    <div className="workItem">
      <h3>{workItemData.position}, <span>{workItemData.company}</span></h3>
      <p className="workDates">{getWorkDates()}</p>
       {/* Replace the paragraph with an unordered list */}
       <ul>
        {summaryPoints.map((point, index) => (
          <li key={index}>
            {point.main}
            {point.sub.length > 0 && (
              <ul>
                {point.sub.map((subPoint, subIndex) => (
                  <li key={`${index}-${subIndex}`}>{subPoint}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <ul>{getHighlights}</ul>
    </div>
  )
};

WorkItem.propTypes = {
  workItemData: object.isRequired
}

export default WorkItem;
