import React from "react"
import { Link } from "gatsby"

import "../styles/about.sass"

import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

var arraySort = require('array-sort');

class About extends React.Component {
  FormatData(raw){
    var FormattedData = []
    var PositionPrioritized = []
    var AlphabeticallyPrioritized = []
    for(var i=0; i<raw.length; i++){
      var node = raw[i].node
      if(node.order != null){
        PositionPrioritized.push(node)
      } else {
        AlphabeticallyPrioritized.push(node)
      }
    }
    var PositionPrioritized = arraySort(PositionPrioritized, 'order')
    var AlphabeticallyPrioritized = arraySort(AlphabeticallyPrioritized, 'lastName');
    FormattedData = AlphabeticallyPrioritized
    for(var i=0;i<PositionPrioritized.length;i++){
      FormattedData.splice((PositionPrioritized[i].order - 1), 0, PositionPrioritized[i])
    }
    return FormattedData
  }

  FormatRole(role){
    if(role != null){
      return (", " + role)
    } else {
      return ""
    }
  }

  render() {
    var FormattedData = this.FormatData(this.props.data.allSanityBoardmember.edges)
    var BoardMembers = FormattedData.map((member) =>
      <li>{member.firstName + " " + member.lastName}{this.FormatRole(member.role)}</li>
    )
    return (
      <div id="body">
        <title>PDP - About Us</title>
        <Header CurrentPage="About"/>
        <div id="MissionStatement">
          <h3>Our Mission</h3>
          <p>
            The mission of Philadelphia Dance Projects is to support contemporary dance through Projects that encourage artists and audiences to more fully participate and engage in the experience and pursuit of dance as an evolving form.
          </p>
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


export const query = graphql`{
  allSanityBoardmember {
    edges {
      node {
        id
        firstName
        lastName
        order
        role
      }
    }
  }
}`

export default About
