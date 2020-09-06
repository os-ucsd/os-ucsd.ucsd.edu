import React from "react"
import '../css/header.css'

class Header extends React.Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
                <nav id="nav-container">
                    <ul id="nav-list">
                        <a className="nav-item" href="/">Home</a>
                        <a className="nav-item" href="/about">About</a>
                        <a className="nav-item" href="/projects">Projects</a>
                        <a className="nav-item" href="/tutorial">Tutorials</a>
                        <a className="nav-item" href="/events">Events</a>
                        <a className="nav-item" href="/hacktoberfest">Hacktoberfest</a>
                        <a className="nav-item" href="/contact">Contact</a>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header