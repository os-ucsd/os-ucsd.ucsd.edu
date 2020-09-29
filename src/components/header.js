import React from "react"
import '../css/header.css'
import { slide as Menu } from 'react-burger-menu'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: 0
        }

        this.updateWindowSize = this.updateWindowSize.bind(this);

    }

    componentDidMount() {
        //this.setState({ width: window.innerWidth })
        window.addEventListener('resize', this.updateWindowSize);

    }

    updateWindowSize() {
        this.setState({ width: window.innerWidth })
    }

    render() {
        let buttonStyles = {
            bmBurgerButton: {
                position: 'fixed',
                width: '30px',
                height: '30px',
                left: '20px',
                top: '10px',
            },
            bmBurgerBars: {
                background: "white"
            },
            bmCrossButton: {
                height: '24px',
                width: '24px'
            },
            bmCross: {
                background: 'white'
            },
            bmItem: {
                textDecoration: 'none',
                outline: 'none',
                marginBottom: '5px',
                color: 'white',
                transition: 'color 0.2s'
            },
            bmMenu: {
                padding: '2.5em 1.5em 0',
                fontSize: "1.15em",
                background: '#314858'
            }
        }
        if (window.innerWidth > 700) {
            return (
                <div className="header">
                    {console.log(this.state.width)}
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
        } else {
            return (
                <div className="menu-bar">
                    <Menu left styles={buttonStyles} >
                        <a className="menu-item" href="/">Home</a>
                        <a className="menu-item" href="/about">About</a>
                        <a className="menu-item" href="/projects">Projects</a>
                        <a className="menu-item" href="/tutorial">Tutorials</a>
                        <a className="menu-item" href="/events">Events</a>
                        <a className="menu-item" href="/hacktoberfest">Hacktoberfest</a>
                        <a className="menu-item" href="/contact">Contact</a>
                    </Menu >
                </div>

            )
        }
    }
}

export default Header