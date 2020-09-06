import React from "react"
import Header from '../components/header'
import Footer from '../components/footer'

class FormSubmit extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <h3 style={{ marginTop: "200px", textAlign: "center" }}>Thank you for contacting us! We will get back to you as soon as possible. </h3>
                <div style={{ position: 'fixed', bottom: '0', width: '100%' }}>
                    <Footer />
                </div>
            </div>
        )
    }
}
export default FormSubmit