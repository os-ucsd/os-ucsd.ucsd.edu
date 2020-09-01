import React from "react"
import '../css/header.css'

class Header extends React.Component {
    render() {
        return (
            <nav id="nav-container">
                <ul id="nav-list">
                    <a class="nav-item" href="/">Home</a>
                    <a class="nav-item" href="/about">About</a>
                    <a class="nav-item" href="/projects">Projects</a>
                    <a class="nav-item" href="/tutorials">Tutorials</a>
                    <a class="nav-item" href="/events">Events</a>
                    <a class="nav-item" href="/contact">Contact</a>
                </ul>
            </nav>
        )
    }
}

export default Header