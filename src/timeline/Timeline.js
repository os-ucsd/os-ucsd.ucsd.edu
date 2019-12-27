import React from 'react';
import './Timeline.css';
import PullRequestItem from './PullRequestItem';

class Timeline extends React.Component{
	render(){
        let {prs} = this.props;
		let listOfPRs = 
				prs ? prs.map((pr, i) => {
					return(
						<div key={i} className="pr-list-container">
							<div className="pr-list-content">	
								<div className="pr-info">
                                    <PullRequestItem prData={pr} />
								</div>
							</div>
						</div>	
					)
				}) : <p>No pull requests to show currently.</p>
		
		return(
			<div className='total-timeline-container'>
				<div className="list-container" >
					{listOfPRs}
				</div>
			</div>
		);
	}
}

export default Timeline;
