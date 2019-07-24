import React from "react"
import { Link } from "gatsby"

import "../styles/Contributors.sass"

import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

var arraySort = require('array-sort');

class Contributors extends React.Component {
  FormatContributors(raw){
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
    var AlphabeticallyPrioritized = arraySort(AlphabeticallyPrioritized, 'name');
    FormattedData = AlphabeticallyPrioritized
    for(var i=0;i<PositionPrioritized.length;i++){
      FormattedData.splice((PositionPrioritized[i].order - 1), 0, PositionPrioritized[i])
    }
    return FormattedData
  }

  FormatDonors(raw){
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

  render() {
    var FormattedCurrentContributors = this.FormatContributors(this.props.data.allSanityCurrentcontributor.edges)
    var FormattedPastContributors = this.FormatContributors(this.props.data.allSanityPastcontributor.edges)
    var FormattedDonors = this.FormatDonors(this.props.data.allSanityDonor.edges)
    var CurrentContributors = FormattedCurrentContributors.map((contributor) =>
      <li>{contributor.name}</li>
    )
    var PastContributors = FormattedPastContributors.map((contributor) =>
      <li>{contributor.name}</li>
    )
    var isLast = function(object, array){
      if(object == array[array.length - 1]){
        return true
      } else {
        return false
      }
    }
    var Donors = FormattedDonors.map((donor) => {
      if(isLast(donor, FormattedDonors)){
        return <span>{donor.firstName + ' ' + donor.lastName}</span>
      } else {
        return <span>{donor.firstName + ' ' + donor.lastName + ' • '}</span>
      }
    })
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


export const query = graphql`{
  allSanityCurrentcontributor {
    edges {
      node {
        _id
        name
        order
      }
    }
  }
  allSanityPastcontributor {
    edges {
      node {
        _id
        name
        order
      }
    }
  }
  allSanityDonor {
    edges {
      node {
        _id
        firstName
        lastName
        order
      }
    }
  }
}`

export default Contributors
