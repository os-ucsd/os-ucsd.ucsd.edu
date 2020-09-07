import React from 'react';
import './PullRequestItem.css'; 
import defaultProfilePicture from '../../images/default-profile-picture.png';

class PullRequestItem extends React.Component{
	render(){
        const {prData, imgSide, cardSide} = this.props;
        let allPRTimes = []
        // if the pr is 'your contribution', don't do this part
        if (prData.user !== "I"){
            // get all PR times if there are multiple in a row
            for (let i = 0; i < prData.allMergedDates.length; i++){
                const mergedTime = new Date(prData.allMergedDates[i]);
                let monthStr = mergedTime.getMonth() + 1;
                let dateStr = mergedTime.getDate();
                let yearStr = mergedTime.getFullYear();
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
        }

		return(
            <div className="item-container">
            {
               (prData.user === "I") ?
                    (   <div className="item-content">
                            <p>NOW</p>
                            <a href="https://github.com/os-ucsd" className="pr-link">
                                <p style={{fontSize: "0.9rem", color: "blue"}}>Make this your contribution!</p>
                            </a>
                        </div>
                    ) 
                :
                    (   <div className={cardSide === "r" ? "item-content right-card" : "item-content left-card"}>
                            {  
                                allPRTimes.map((prTime, i) => 
                                    <p key={i}>{prTime}</p>
                                )
                            }
                            <div className="user-container">
                                {
                                    // If the card is on the right, show profile picture on the leftg
                                    imgSide === 'l' ? 
                                        <img className="profile-pic left-pic"
                                            src={"https://github.com/" + prData.user + ".png"} 
                                            onError={evt => evt.target.src = "https://github.com/blau0123.png"}
                                            width="30px" height="30px"
                                            alt={prData.user}/> : null
                                }
                                <a href={prData.repoURL} className="pr-link">
                                    <p>{prData.user + " made a pull request to " + prData.repoName + "!"}</p>
                                </a>
                                {
                                    // If the card is on the left, show profile picture on the right
                                    imgSide === 'r' ? 
                                        <img className="profile-pic right-pic"
                                            src={"https://github.com/" + prData.user + ".png"} 
                                            onError={evt => evt.target.src = defaultProfilePicture}
                                            width="30px" height="30px"
                                            alt={prData.user}/> : null
                                }
                            </div>
                        </div>
                    )
            }
           
            </div>
		)
	}
}

export default PullRequestItem;
