import React from 'react';

import '../css/winter-projects.css';
import winterProjectsHeader from '../images/winter_projects_header.png';
import scheduleImg from '../images/winter_projects_schedule.png';

class WinterProjects extends React.Component {
    render() {
        return (
            <div className="wip-container">
                <img className="wp-header-img" src={winterProjectsHeader} alt="Winter Projects" width="100%" />
                <div className="wp-header-text vert-centered">
                    <h2 className="wp-title-text">What are winter projects? <span role="img" aria-label="snowflake">⛄</span></h2>
                    <div className="wp-desc-text vert-centered-text">
                        Open Source @ UCSD will be hosting quarter long project teams with 4 to 5 members each. Led by project leads, the project members will
                        work on a project from start to finish; from ideation to designing to implementing to deployment! Each week, you'll learn about many different
                        technical topics, such as Git and testing, that will not only help you complete this project, but help you thrive in a real world job.
                        Beginners are very much welcome!
                    </div>
                </div>
                <div className="wp-body-content">
                    <div className="wp-header-text vert-centered">
                        <h2 className="wp-title-text">This quarter's theme: Remote Work</h2>
                        <div className="wp-desc-text vert-centered-text">
                            With quarantine lasting as long as it has, many students and those working from home have struggled to stay as productive as the pre-quarantine
                            days. It has also been more difficult to keep in touch with friends and family now that we don't see them on a day-to-day basis. This quarter is your 
                            chance to work with your peers to help alleviate these problems! 
                        </div>
                    </div>
                    <div className="wp-header-text vert-centered">
                        <h2 className="wp-title-text">Weekly schedule</h2>
                        <img className="header-img" src={scheduleImg} alt="Winter Projects Schedule" width="100%" />
                    </div>
                    <div className="wp-header-text vert-centered">
                        <h2 className="wp-title-text">Resources</h2>
                        <div className="wp-resources-container vert-centered-text">
                            <div className="left-header">
                                Wireframing/Mockups
                            </div>
                            <div className="right-desc">
                                There are tools that allow you to design what your project will actually look like, and how everything is connected, such as how to get from
                                one view of an application to the next. Here are some free resources that you could use to wireframe/mockup. <br></br>
                                <a href="https://www.figma.com/">Figma</a><br></br>
                                <a href="https://miro.com/">Mirio</a><br></br>
                                <a href="https://www.figma.com/file/tXlVuJnowtypVdUq6Pmjtk/CodeJam">Example Figma project</a>
                            </div>
                        </div>
                        <div className="wp-resources-container vert-centered-text">
                            <div className="left-header">
                                Diagramming
                            </div>
                            <div className="right-desc">
                                Diagrams allow you to visualize your system and software. You can use diagrams to display the relationships between components in your project
                                and how these components react to each other/change over time. Here are some resources involving diagramming.<br></br>
                                <a href="https://drawio-app.com/uml-diagrams/">Types of diagrams</a><br></br>
                                <a href="https://app.diagrams.net/">Draw.io</a><br></br>
                                <a href="https://www.lucidchart.com/">Lucid Chart</a><br></br>
                                <a href="https://photos.google.com/share/AF1QipMqqU6rvjtu_LYehQb70ubv7WsTwLPn5t39m5tMuTC_0sv132tqhWq81KdYU49DHA?key=MlAwOVJMSF9aNzhUV19VRkMtaUxRU3BodTg5QmFB">
                                    Example architecture diagram
                                </a>
                            </div>
                        </div>
                        <div className="wp-resources-container vert-centered-text">
                            <div className="left-desc">
                                ... And more! We'll be updating this page with more resources as the projects go on.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WinterProjects;