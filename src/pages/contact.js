import React from "react"
import { Link } from "gatsby"

import "../styles/contact.sass"

import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

class Contact extends React.Component {

  render() {
    return (
      <div id="body">
        <title>PDP - Contact Us</title>
        <Header CurrentPage="Contact"/>
        <form id="contact-form" name="contact-us" netlify>
          <h1>Contact Us</h1>
          <label>Name:</label>
          <input name="name" type="text" placeholder="John Smith"/>
          <label>Email Address:</label>
          <input name="email" type="email" placeholder="jsmith@example.com"/>
          <label>Message:</label>
          <textarea name="message"/>
          <button type="submit">Send</button>
        </form>
        <Footer/>
      </div>
    )
  }
}

export default Contact
