import React from "react"
import Link from 'next/link'
import Sanity from '../sanity-client.js'
import Favicon from 'react-favicon'

// import "../styles/contributors.sass"

import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

class Contributors extends React.Component {

  render() {
    var CurrentContributors = this.props.currentContributors.map((itemData) => (
      <a key={itemData._id} href={itemData.url}><li>{itemData.name}</li></a>
    ))
    var PastContributors = this.props.pastContributors.map((itemData) => (
      <a key={itemData._id} href={itemData.url}><li>{itemData.name}</li></a>
    ))
    var Donors = this.props.donors.map((itemData, index) => (
    <span key={itemData._id}><span>{itemData.firstName + " " + itemData.lastName}</span><span>{(index != this.props.donors.length - 1) ? "\xa0•\xa0" : ""}</span></span>
    ))
    console.log(Donors)
    return (
      <div id="body">
        <title>PDP - Contributors</title>
        <Favicon url={"../static/favicon.ico"}/>
        <Header CurrentPage="Contributors"/>
        <div id="Contributors">
          <h3>Contributors</h3>
          <h4>PDP gratefully acknowledges support from:</h4>
          <ul>
            {CurrentContributors}
          </ul>
          <h4>Additionally past support has included:</h4>
          <ul>
            {PastContributors}
          </ul>
        </div>
        <div id="Donors">
          <h3>Donors</h3>
          <p>
            {Donors}
          </p>
        </div>
        <Footer/>
        <style jsx global>{`
          #Contributors {
            padding: 20px;
            margin-top: 30px;
          }

          #Contributors h3 {
            text-align: center;
            font-weight: 700;
            font-size: 24px;
          }

          #Contributors h4 {
            text-align: center;
            font-weight: 600;
            font-size: 16px;
            font-style: italic;
          }

          #Contributors ul {
            list-style: none;
            text-align: center;
            padding-left: 0px;
            margin: 0 auto;
            width: 700px;
            max-width: 100%;
            margin-bottom: 30px;
          }

          #Contributors ul li {
            font-size: 16px;
            font-weight: 400;
            padding: 3px 0px;
          }

          #Donors {
            padding: 20px;
            width: 700px;
            max-width: 100%;
            margin: 0 auto;
          }

          #Donors h3 {
            text-align: center;
            font-weight: 700;
            font-size: 24px;
          }

          #Donors h4 {
            text-align: center;
            font-weight: 600;
            font-size: 16px;
            font-style: italic;
          }

          #Donors p {
            font-size: 16px;
            font-weight: 400;
            text-align: center;
          }

          #Donors p span {
            display: inline-block !important;
          }

        `}</style>
      </div>
    )
  }
}

Contributors.getInitialProps = async function(context){
  // Get CurrentContributors
  var query = `*[_type == "currentcontributor"] | order(order asc, name asc)`
  var currentContributors = await Sanity.fetch(query, {})
  // Get PastContributors
  query = `*[_type == "pastcontributor"] | order(order asc, name asc)`
  var pastContributors = await Sanity.fetch(query, {})
  // Get Donors
  query = `*[_type == "donor"] | order(order asc)`
  var donors = await Sanity.fetch(query, {})
  return {currentContributors: currentContributors, pastContributors: pastContributors, donors: donors}
}

export default Contributors
