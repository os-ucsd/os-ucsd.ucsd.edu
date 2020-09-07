import React from "react"
import Header from './header'
import Footer from './footer'
import Emoji from './emoji'
import { Redirect } from "react-router-dom"

class FormSubmit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }
    // Count up to 4 seconds before redirect the route
    componentDidMount() {
        this.id = setTimeout(() => this.setState({ redirect: true }), 4000)
    }

    // Reset the time
    componentWillUnmount() {
        clearTimeout(this.id)
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to="/contact" />;
        }
        else {
            return (
                <div>
                    <Header />
                    <h3 style={{ marginTop: "200px", textAlign: "center" }}>
                        Thank you for contacting us! We will get back to you as soon as possible. <Emoji symbol="⏳" />
                    </h3>
                    <div style={{ position: 'fixed', bottom: '0', width: '100%' }}>
                        <Footer />
                    </div>
                </div>
            )
        }
    }
}
export default FormSubmit