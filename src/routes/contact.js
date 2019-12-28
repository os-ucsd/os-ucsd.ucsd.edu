import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Container from "@material-ui/core/Container/Container";
import Button from '@material-ui/core/Button';
import axios from "axios"
import "../css/contact.css"
import MenuBar from "../components/navbar";
import Background from "../images/spacebackground.jpg";
import Footer from "../components/footer";

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
    axios({
      method: "POST",
      url:"http://localhost:3000/contact/send",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent.");
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  };

  resetForm(){
    this.setState({name: '', email: '', message: ''})
  }

  render() {
    return (
        <React.Fragment>
          <CssBaseline />
          {/*<Container maxWidth="lg">*/}
            <MenuBar />
            <section
                id="banner"
                style={{ backgroundImage: `url(${Background})`, height: "20px" }}
            >
              <div className="inner">
                <div className="content">
                  <h2>Open Source at UCSD Contact</h2>
                </div>
              </div>
            </section>
          {/*</Container>*/}
          <Container>
            {this.ContactMe()}
          </Container>
          <br /> <br />
          <Footer />
        </React.Fragment>
    );
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }
  onEmailChange(event) {
    this.setState({email: event.target.value})
  }
  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  ContactMe = () => {
    return (
        <div className="Contact">
          <br/> <br />
          <h5 style={{ fontWeight: 'bold' }}>Leave us a message and we'll get back to you :)</h5>
          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" placeholder={"Your name.."}
                     value={this.state.name}
                     onChange={this.onNameChange.bind(this)} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Your email.."
                     value={this.state.email}
                     onChange={this.onEmailChange.bind(this)} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="10" placeholder="Write something.."
                        value={this.state.message}
                        onChange={this.onMessageChange.bind(this)} />
            </div>
            <Button variant="outlined" type="submit" className="btn btn-primary">
              Send
            </Button>
          </form>
        </div>
    );
  }
}

export default Contact;