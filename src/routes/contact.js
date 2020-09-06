import React from "react"
import Header from '../components/header'
import Footer from '../components/footer'
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import emailjs from 'emailjs-com';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    onNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }
    onEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }
    onMessageChange(e) {
        this.setState({
            message: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        emailjs.send('service_w2t5s7b', 'template_aiblrmi', this.state, 'user_tcCTJnUYsvoujhBxEX0w6')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                window.location.href = "/formSubmitted"
                this.setState({ name: "", email: "", message: "" });
            }, function (error) {
                console.log('FAILED...', error);
            });
        //this.setState({ name: "", email: "", message: "" });
    }

    render() {
        return (
            <div>
                <Header />
                <h2 className="firstTitle" style={{ marginTop: "100px", fontSize: "30px", textAlign: "center", padding: "10px" }}>
                    Leave us a message and we'll get back to you :)
                </h2>
                <div style={{ textAlign: 'center' }}>
                    <form onSubmit={this.handleSubmit} style={{ display: 'inline-block' }}>
                        <TextField
                            id="name"
                            label={<Typography variant="h4" component="h4"> Name </Typography>}
                            placeholder='Name'
                            rows={1}
                            variant="outlined"
                            InputProps={{
                                style: { fontSize: 15, marginTop: '10px' }
                            }}
                            style={{ width: '400px', marginBottom: '6px' }}
                            value={this.state.name}
                            onChange={this.onNameChange.bind(this)}
                        />
                        <br />
                        <TextField
                            id="email"
                            label={<Typography variant="h4" component="h4"> Email </Typography>}
                            placeholder='Email'
                            rows={1}
                            variant="outlined"
                            InputProps={{
                                style: { fontSize: 15, marginTop: '10px' }
                            }}
                            style={{ width: '400px', marginBottom: '6px' }}
                            value={this.state.email}
                            onChange={this.onEmailChange.bind(this)}
                        />
                        <br />
                        <TextField
                            id="message"
                            label={<Typography variant="h4" component="h4"> Message </Typography>}
                            placeholder='Message'
                            multiline
                            rows={10}
                            variant="outlined"
                            InputProps={{
                                style: { fontSize: 20, marginTop: '10px' }
                            }}
                            style={{ width: '400px', marginBottom: '10px' }}
                            value={this.state.message}
                            onChange={this.onMessageChange.bind(this)}
                        />
                        <br />
                        <Button type="submit" variant="contained" endIcon={<SendIcon />} style={{ marginBottom: '45px', fontSize: '15px', backgroundColor: '#314858', color: 'white' }}>
                            Send
                        </Button>
                    </form>
                </div>
                <Footer />
            </div >
        )
    }
}

export default Contact