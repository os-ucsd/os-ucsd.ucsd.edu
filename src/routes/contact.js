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
    }
    handleSubmit(e) {
        e.preventDefault();
        //console.log(e.target)
        emailjs.sendForm('service_w2t5s7b', 'template_aiblrmi', e.target, 'user_tcCTJnUYsvoujhBxEX0w6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
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
                            type='text'
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
                            type='text'
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
                            style={{ width: '400px', marginBottom: '6px' }}
                            type='text'
                        />
                        <br />
                        <Button type="submit" variant="contained" endIcon={<SendIcon />} style={{ marginBottom: '6px', fontSize: '15px', backgroundColor: '#314858', color: 'white' }}>
                            Primary
                        </Button>
                    </form>
                </div>
                <Footer />
            </div >
        )
    }
}

export default Contact