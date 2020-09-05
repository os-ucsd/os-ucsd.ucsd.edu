import React from "react"
import Header from '../components/header'
import Footer from '../components/footer'
import CardWithLink from "../components/card-with-link";

import projects_list from "../data/project-data";

import '../css/projects.css';

class Project extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <h2 className="firstTitle" style={{ marginTop: "100px", fontSize: "40px", textAlign: "center", padding: "10px" }}>
                    Projects
                </h2>
                <div className="projects-container">
                   {
                       projects_list && projects_list.length > 0 ? projects_list.map((project, indx) =>
                            <div key={indx} className="project">
                                <CardWithLink
                                    title={project.title}
                                    description={project.description}
                                    image={project.image}
                                    link={project.link}
                                    linkText={project.linkText}/>
                            </div>
                        ) : null
                   }
                </div>
                <Footer />
            </div >
        )
    }
}

export default Project