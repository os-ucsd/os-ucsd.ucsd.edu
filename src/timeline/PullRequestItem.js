import React from 'react';
import './PullRequestItem.css'; 

class PullRequestItem extends React.Component{
	render(){
        const {prData} = this.props;
        let allPRTimes = []
        // get all PR times if there are multiple in a row
        for (let i = 0; i < prData.allMergedDates.length; i++){
            const mergedTime = new Date(prData.allMergedDates[i]);
            let monthStr = mergedTime.getUTCMonth() + 1;
            let dateStr = mergedTime.getUTCDate();
            let yearStr = mergedTime.getUTCFullYear();
            let timeStr = new Date(mergedTime.setSeconds(0,0)).toLocaleTimeString();
            
            // get rid of seconds
            timeStr = timeStr.split(' ');
            const time = timeStr[0];
            const ampm = timeStr[1];
            let removeSecs = time.split(':');
            removeSecs = removeSecs[0] + ':' + removeSecs[1] + ' ' + ampm;
            var fullDate = monthStr + '/' + dateStr + '/' + yearStr + ' ' + removeSecs;
            allPRTimes.push(fullDate);
        }

		return(
            <div className="item-container">
            
            {
               (prData.user === "I") ?
                    (   <div className="item-content">
                        <p>NOW</p>
                        <a href="https://github.com/os-ucsd" className="pr-link">
                            <p>Make this your contribution!</p>
                        </a>
                        <span className="circle" />
                        </div>
                    ) 
                :
                    (   <div className="item-content">
                        {  allPRTimes.map((prTime, i) => 
                            <p key={i}>{prTime}</p>
                            )
                        }
                        <a href={prData.repoURL} className="pr-link">
                            <p>{prData.user + " made a pull request to " + prData.repoName + "!"}</p>
                        </a>
                        <span className="circle" />
                        </div>
                    )
            }
           
            </div>
		)
	}
}

export default PullRequestItem;
