import React from "react"
import Link from 'next/link'
import Sanity from "../sanity-client.js"

import "../styles/about.sass"

import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

class About extends React.Component {
  render() {
    var BoardMembers = this.props.boardMembers.map((itemData) => (
      <li>{
        itemData.firstName + " " + itemData.lastName +
        ((typeof itemData.role !== "undefined" && itemData.role != "") ? (", " + itemData.role) : (""))
      }</li>
    ))
    return (
      <div id="body">
        <title>PDP - About Us</title>
        <Header CurrentPage="About"/>
        <div id="MissionContainer">
          <div id="MissionStatement">
            <h3>Our Mission</h3>
            <p>
              The mission of Philadelphia Dance Projects is to support contemporary dance through Projects that encourage artists and audiences to more fully participate and engage in the experience and pursuit of dance as an evolving form.
            </p>
            <Link href="/page/history" as="/page/history"><h5>Read About Our History</h5></Link>
          </div>
        </div>
        <div id="BoardMembers">
          <h3>Board of Directors</h3>
          <ul>
            {BoardMembers}
          </ul>
        </div>
        <Footer/>
      </div>
    )
  }
}

About.getInitialProps = async function(context){
  // Get BoardMembers
  var query = `*[_type == "boardmember"] | order(order asc, lastName asc)`
  var boardMembers = await Sanity.fetch(query, {})

  return {boardMembers: boardMembers}
}

export default About
