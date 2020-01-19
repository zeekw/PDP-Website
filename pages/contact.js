import React from "react"
import Link from 'next/link'
import autoBind from 'react-autobind'
import "../styles/contact.sass"

import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

import emailjs from "emailjs-com"

class Contact extends React.Component {
  constructor() {
    super();
    autoBind(this);
  }
  state = {
    sendStatus: "Send",
    message: "",
    email: "",
    name: "",
    notification: "",
    notificationType: ""
  }

  handleNameChange(e){
    this.setState({name: e.target.value})
  }

  handleEmailChange(e){
    this.setState({email: e.target.value})
  }

  handleMessageChange(e){
    this.setState({message: e.target.value})
  }

  sendEmail(){
    if(this.state.message == ""){
      this.setState({notification: "Message is a required field", notificationType: "bad"})
    }
    else if(this.state.email == ""){
      this.setState({notification: "Your email address is a required field", notificationType: "bad"})
    }
    else if(this.state.name == ""){
      this.setState({notification: "Your name is a required field", notificationType: "bad"})
    }
    else {
      this.setState({sendStatus: "Sending"})
      var template_params = {
        "name": this.state.name,
        "email": this.state.email,
        "message": this.state.message
      }
      console.log(process.env.EMAILJS_UID)
      emailjs.send("default_service","contact_form", template_params, process.env.EMAILJS_UID).then((response) => {
         this.setState({sendStatus: "sent", notification: "Message sent", notificationType: "good"})
      }, (err) => {
         console.log('FAILED...', err)
      })
    }
  }

  render() {
    return (
      <div id="body">
        <title>PDP - Contact Us</title>
        <Header CurrentPage="Contact"/>
        <div id="contact-form">
          <h1>Email Us</h1>
          <label>Your Name:</label>
          <input name="name" type="text" placeholder="John Smith" value={this.state.name} onChange={this.handleNameChange}/>
          <label>Your Email Address:</label>
          <input name="email" type="email" placeholder="jsmith@example.com" value={this.state.email} onChange={this.handleEmailChange}/>
          <label>Message:</label>
          <textarea name="message" value={this.state.message} onChange={this.handleMessageChange}/>
          <button className={this.state.sendStatus} onClick={this.sendEmail}>{this.state.sendStatus}</button>
          <label id="notification" className={this.state.notificationType}>{this.state.notification}</label>
        </div>
        <div id="AlternateMethods">
          <h4>Phone: (215) 546-2552</h4>
          <div>
            <h6>Philadelphia Dance Projects</h6>
            <h6>at Philadanco, 9 N. Preston Street</h6>
            <h6>Philadelphia, PA 19104</h6>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Contact
