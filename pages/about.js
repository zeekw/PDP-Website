import React from "react"
import Link from 'next/link'
import Sanity from "../sanity-client.js"
import Favicon from 'react-favicon'

// import "../styles/about.sass"

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
        <Favicon url={"../static/favicon.ico"}/>
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
        <style jsx global>{`
          * {
            -webkit-font-smoothing: antialiased !important;
          }

          #MissionContainer {
            max-width: 60%;
            min-width: 800px;
            margin: 0 auto;
            -webkit-font-smoothing: antialiased;
          }

          #MissionContainer #MissionStatement {
            background-color: #eee;
            width: 100%;
            max-width: 920px;
            margin: 30px auto;
            color: #333;
            text-align: center;
            padding: 20px 15px;
            padding-bottom: 3px;
          }

          #MissionContainer #MissionStatement p {
            line-height: 22px;
            font-weight: 400;
            font-size: 18px;
          }

          #MissionContainer #MissionStatement h3 {
            font-size: 22px;
            text-transform: uppercase;
            font-weight: 700;
            line-height: 20px;
          }

          #MissionContainer #MissionStatement h5 {
            color: blue;
            cursor: pointer;
          }

          #BoardMembers {
            padding: 20px;
          }

          #BoardMembers h3 {
            text-align: center;
            font-weight: 700;
            font-size: 24px;
          }

          #BoardMembers ul {
            list-style: none;
            text-align: center;
            padding-left: 0px;
          }

          #BoardMembers ul li {
            font-size: 22px;
            font-weight: 400;
            line-height: 32px;
          }

        `}</style>
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
