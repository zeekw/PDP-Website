import React from "react"
import Link from 'next/link'
import Sanity from '../sanity-client.js'

import "../styles/contributors.sass"

import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

class Contributors extends React.Component {

  render() {
    var CurrentContributors = this.props.currentContributors.map((itemData) => (
      <a href={itemData.url}><li>{itemData.name}</li></a>
    ))
    var PastContributors = this.props.pastContributors.map((itemData) => (
      <a href={itemData.url}><li>{itemData.name}</li></a>
    ))
    var Donors = this.props.donors.map((itemData) => (
      <span><span>{itemData.firstName + " " + itemData.lastName}</span><span>&nbsp;•&nbsp;</span></span>
    ))
    console.log(this.props.donors)
    return (
      <div id="body">
        <title>PDP - Contributors</title>
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
