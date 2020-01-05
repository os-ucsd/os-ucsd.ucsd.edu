import React from "react";
//import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Container from "@material-ui/core/Container/Container";
import Button from "@material-ui/core/Button";
//import axios from "axios";
import Typography from "@material-ui/core/Typography";
import "../css/contact.css";
import MenuBar from "../components/navbar";
import Background from "../images/material-space/material-space5.jpg";
import Footer from "../components/footer";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      emailSubject: "Message from OS website"
      /*email: "",
      message: ""*/
    };
  }
  /*
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    axios({
      method: "POST",
      url: "http://localhost:3000/contact/send",
      data: this.state
    }).then(response => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  };

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }
*/
  render() {
    return (
      <React.Fragment>
        <MenuBar />
        <section
          id="banner"
          style={{ backgroundImage: `url(${Background})`, height: "20px" }}
        >
          <div className="inner">
            <div className="content">
              <h2>Contact</h2>
            </div>
          </div>
        </section>
        {/*</Container>*/}
        <Container>{this.ContactMe()}</Container>
        <br /> <br />
        <Footer />
      </React.Fragment>
    );
  }

  onNameChange(event) {
    let s1 = "Message from ".concat(event.target.value, " to OS at UCSD");
    console.log(s1);
    this.setState({
      name: event.target.value,
      emailSubject: s1
    });
  }
  /*
  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
*/
  ContactMe = () => {
    return (
      <div className="Contact">
        <br /> <br />
        <Typography variant="h5" component="h1">
          Leave us a message and we'll get back to you :)
        </Typography>
        <br />
        <form
          id="contact-form"
          method="POST"
          action="https://formspree.io/mvoznrwd"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your name"
              required
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
            />
            <input
              type="hidden"
              name="_subject"
              value={this.state.emailSubject}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              className="form-control"
              aria-describedby="emailHelp"
              type="email"
              name="_replyto"
              placeholder="Your email"
              required
              //value={this.state.email}
              //onChange={this.onEmailChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              name="message"
              rows="10"
              placeholder="Your message ..."
              required
              //value={this.state.message}
              //onChange={this.onMessageChange.bind(this)}
            />
          </div>
          <Button variant="outlined" type="submit" className="btn btn-primary">
            Send
          </Button>
        </form>
      </div>
    );
  };
}

export default Contact;
