import React from "react"
import Link from 'next/link'
import autoBind from 'react-autobind'
// import "../styles/contact.sass"
import Favicon from 'react-favicon'

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
      emailjs.send("default_service","contact_form", template_params, "user_iwNYDzYdroz7xWuiQ7c0q").then((response) => {
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
        <Favicon url={"../static/favicon.ico"}/>
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
        <style jsx global>{`
          #contact-form {
            box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.1);
            margin: 0 auto;
            width: 600px;
            max-width: 100%;
            padding: 40px;
          }

          #contact-form h1 {
            text-align: center;
            font-weight: 700;
            margin-bottom: 20px;
          }

          #contact-form label {
            display: block;
            font-weight: 700;
          }

          #contact-form input {
            display: block;
            font-size: 28px;
            width: 100%;
            margin-bottom: 10px;
          }

          #contact-form textarea {
            display: block;
            width: 100%;
            height: 200px;
            font-size: 24px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
          }

          #contact-form button {
            width: 130px;
            height: 50px;
            margin: 0 auto;
            display: block;
            background-color: #1daeff;
            color: white;
            border-style: none;
            outline: none;
          }

          #contact-form button:hover {
            opacity: 0.8;
          }

          #contact-form #notification {
            padding: 3px;
            color: white;
            margin-top: 10px;
            text-align: center;
          }

          #contact-form #notification.good {
            background-color: #94f285;
          }

          #contact-form #notification.bad {
            background-color: #f17267;
          }

          #AlternateMethods {
            width: 100%;
            max-width: 500px;
            margin: 20px auto;
            background-color: #eee;
            color: #333;
            text-align: center;
            padding: 20px;
          }

          #AlternateMethods p {
            line-height: 22px;
            font-weight: 400;
            font-size: 18px;
          }

          #AlternateMethods h3 {
            font-size: 22px;
            text-transform: uppercase;
            font-weight: 700;
            line-height: 20px;
          }

          #AlternateMethods h5 {
            color: blue;
          }

        `}</style>
      </div>
    )
  }
}

export default Contact
