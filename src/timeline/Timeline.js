import React, { useState } from 'react';
import animated from "animate.css";
import './Timeline.css';
import PullRequestItem from './PullRequestItem';
class Timeline extends React.Component{
	constructor(props) {
		super(props)
		this.toggleHover = this.toggleHover.bind(this);
		this.state = {
		  hover:false
		}
	  }
	  toggleHover() {
		this.setState({hover: !this.state.hover})
		}
	render(){
        let {prs} = this.props;
		let listOfPRs = 
				prs ? prs.map((pr, i) => {
					return(
						<div key={i} className="pr-list-container">
					
							<div className="pr-list-content-circle" >
							<div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} className={this.state.hover ? 'pulse animated' : ''}>
								<div className="pr-list-content">
									<div className="pr-info" >
									<PullRequestItem  prData={pr} />		
									</div>
								</div>
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
