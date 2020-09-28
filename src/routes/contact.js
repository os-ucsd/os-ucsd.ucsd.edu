import React from "react"
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import emailjs from 'emailjs-com';
import Emoji from '../components/emoji'
import '../css/contact.css'

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
        // Send email API
        emailjs.send('service_w2t5s7b', 'template_aiblrmi', this.state, 'user_tcCTJnUYsvoujhBxEX0w6')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                window.location.href = "/formSubmitted"
                this.setState({ name: "", email: "", message: "" });
            }, function (error) {
                console.log('FAILED...', error);
            });

    }

    render() {
        return (
            <div className="contact-container">
                <h2 className="firstTitle">
                    Leave us a message and we'll get back to you <Emoji symbol="🙂" />
                </h2>
                {window.innerWidth > 500 ? <QuestionForm
                    handleSubmit={this.handleSubmit}
                    name={this.state.name}
                    email={this.state.email}
                    message={this.state.message}
                    onNameChange={this.onNameChange}
                    onEmailChange={this.onEmailChange}
                    onMessageChange={this.onMessageChange}
                    parent={this}
                /> :
                    <QuestionFormSmall
                        handleSubmit={this.handleSubmit}
                        name={this.state.name}
                        email={this.state.email}
                        message={this.state.message}
                        onNameChange={this.onNameChange}
                        onEmailChange={this.onEmailChange}
                        onMessageChange={this.onMessageChange}
                        parent={this}
                    />
                }

            </div >
        )
    }
}

/* Display form on phones */
const QuestionFormSmall = props => {
    const { handleSubmit, name, email, message, onNameChange,
        onMessageChange, onEmailChange, parent
    } = props
    return (
        <div style={{ textAlign: 'center' }}>
            <form onSubmit={handleSubmit}>
                <div className="styleText">
                    <TextField
                        id="name"
                        label={<Typography variant="body1" component="p"> Name </Typography>}
                        placeholder='Name'
                        rows={1}
                        variant="outlined"
                        required
                        InputProps={{
                            style: { fontSize: 15, marginTop: '10px' }
                        }}
                        style={{ width: '300px', marginBottom: '6px' }}
                        value={name}
                        onChange={onNameChange.bind(parent)}

                    />

                    <br />
                    <TextField
                        id="email"
                        label={<Typography variant="body1" component="p"> Email </Typography>}
                        placeholder='Email'
                        rows={1}
                        variant="outlined"
                        required
                        InputProps={{
                            style: { fontSize: 15, marginTop: '10px' }
                        }}
                        style={{ width: '300px', marginBottom: '6px' }}
                        value={email}
                        onChange={onEmailChange.bind(parent)}
                        className="styleText"

                    />
                    <br />
                    <TextField
                        id="message"
                        label={<Typography variant="body1" component="p"> Message </Typography>}
                        placeholder='Message'
                        multiline
                        rows={10}
                        variant="outlined"
                        required
                        InputProps={{
                            style: { fontSize: 15, marginTop: '10px' }
                        }}
                        style={{ width: '300px', marginBottom: '10px' }}
                        value={message}
                        onChange={onMessageChange.bind(parent)}
                        className="styleText"

                    />
                    <br />
                </div>
                <Button type="submit" variant="contained" endIcon={<SendIcon />}
                    style={{ marginBottom: '45px', fontSize: '15px', backgroundColor: '#314858', color: 'white', borderRadius: 25 }}>
                    Send
                </Button>
            </form>
        </div>
    )
}

/* Display form on browsers */
const QuestionForm = props => {
    const { handleSubmit, name, email, message, onNameChange,
        onMessageChange, onEmailChange, parent
    } = props
    return (
        <div style={{ textAlign: 'center' }}>
            <form onSubmit={handleSubmit}>
                <div className="styleText">
                    <TextField
                        id="name"
                        label={<Typography variant="h4" component="h4"> Name </Typography>}
                        placeholder='Name'
                        rows={1}
                        variant="outlined"
                        required
                        InputProps={{
                            style: { fontSize: 15, marginTop: '10px' }
                        }}
                        style={{ width: '500px', marginBottom: '6px' }}
                        value={name}
                        onChange={onNameChange.bind(parent)}

                    />

                    <br />
                    <TextField
                        id="email"
                        label={<Typography variant="h4" component="h4"> Email </Typography>}
                        placeholder='Email'
                        rows={1}
                        variant="outlined"
                        required
                        InputProps={{
                            style: { fontSize: 15, marginTop: '10px' }
                        }}
                        style={{ width: '500px', marginBottom: '6px' }}
                        value={email}
                        onChange={onEmailChange.bind(parent)}
                        className="styleText"

                    />
                    <br />
                    <TextField
                        id="message"
                        label={<Typography variant="h4" component="h4"> Message </Typography>}
                        placeholder='Message'
                        multiline
                        rows={10}
                        variant="outlined"
                        required
                        InputProps={{
                            style: { fontSize: 20, marginTop: '10px' }
                        }}
                        style={{ width: '500px', marginBottom: '10px' }}
                        value={message}
                        onChange={onMessageChange.bind(parent)}
                        className="styleText"

                    />
                    <br />
                </div>
                <Button type="submit" variant="contained" endIcon={<SendIcon />}
                    style={{ marginBottom: '45px', fontSize: '15px', backgroundColor: '#314858', color: 'white', borderRadius: 25 }}>
                    Send
                </Button>
            </form>
        </div>
    )
}

export default Contact