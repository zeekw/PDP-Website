import React from "react"
import { Link, graphql } from "gatsby"
import autoBind from 'react-autobind'
import axios from "axios"

import "../styles/index.sass"

import Header from "../components/Header.js"
import HomeCarousel from "../components/HomeCarousel.js"
import UpcomingList from '../components/UpcomingList.js'
import Footer from "../components/Footer.js"

class Index extends React.Component {

  CreateCarouselData(RawEvents, RawAnnouncements, RawPressClips){
    var allItems = []
    for(var i=0; i < RawEvents.length; i++){
      var item = { data: RawEvents[i].node, deltaTime: Math.abs(Date.parse(RawEvents[i].node.date) - Date.now()) }
      allItems.push(item)
    }
    for(var i=0; i < RawAnnouncements.length; i++){
      var item = { data: RawAnnouncements[i].node, deltaTime: Math.abs(Date.parse(RawAnnouncements[i].node._createdAt) - Date.now()) }
      allItems.push(item)
    }
    for(var i=0; i < RawPressClips.length; i++){
      var item = { data: RawPressClips[i].node, deltaTime: Math.abs(Date.parse(RawPressClips[i].node.date) - Date.now()) }
      allItems.push(item)
    }
    allItems.sort(function(a, b) {
      return a.deltaTime - b.deltaTime;
    })
    var sortedItems = []
    for(var i=0; i<allItems.length; i++){
      sortedItems.push(allItems[i].data)
    }
    console.log(sortedItems)
    return sortedItems
  }

  FormatUpcomingData(raw) {
    var Events = []
    var UnmarkedOldEvent_ids = []
    var niter = raw.length
    for(var i=0; i<niter; i++){
      var node = raw[i].node
      var FormattedEvent = JSON.parse(JSON.stringify(node))
      if(Date.parse(node.date) < (new Date()).getTime()){
        console.log("This is old")
        UnmarkedOldEvent_ids.push(node._id)
      }
      else {
        if(node.price > 0){
          FormattedEvent.price = node.price
        }
        else {
          FormattedEvent.price = "FREE"
        }
        FormattedEvent["ItemType"] = "event"
        Events.push(FormattedEvent);
      }
    }
    // this.markOldEvents(UnmarkedOldEvent_ids);
    return Events;
  }

  FormatAnnouncementData(raw) {
    var Events = []
    var UnmarkedOldEvent_ids = []
    var niter = raw.length
    for(var i=0; i<niter; i++){
      var node = raw[i].node
      var FormattedEvent = JSON.parse(JSON.stringify(node))
      FormattedEvent.price = "FREE"
      FormattedEvent.date = node._createdAt
      FormattedEvent._rawDescription = node._rawBody
      FormattedEvent["ItemType"] = "announcement"
      Events.push(FormattedEvent);
    }
    return Events;
  }

  render() {

    var RawUpcomingData = this.props.data.allSanityEvent.edges
    var UpcomingData = this.FormatUpcomingData(RawUpcomingData)

    var RawAnnouncements = this.props.data.allSanityAnnouncement.edges
    var RawPressClips = this.props.data.allSanityPressclip.edges
    var CarouselData = this.CreateCarouselData(RawUpcomingData, RawAnnouncements, RawPressClips)

    return (
      <div id="body">
        <title>Philadelphia Dance Projects</title>
        <Header CurrentPage="Home"/>
        <HomeCarousel data={CarouselData}/>
        <div id="Upcoming">
          {(this.props.data.allSanityEvent.edges.length != 0) ? <h1 id="UpcomingHeader">Upcoming:</h1> : null}
          <UpcomingList data={UpcomingData} limit={3}/>
        </div>
        <div id="Upcoming">
          {(this.props.data.allSanityAnnouncement.edges.length != 0) ? <h1 id="UpcomingHeader">Announcements:</h1> : null}
          <UpcomingList data={this.FormatAnnouncementData(RawAnnouncements)} limit={3}/>
        </div>
        <Footer/>
      </div>
    )
  }
}

export const query = graphql`
  {

      allSanityPressclip(sort: {fields: date, order: DESC}, limit: 6) {
        edges {
          node {
            date
            author
            organization
            _createdAt
            title
            _id
            _type
            slug {
              current
            }
            heroImage {
              asset {
                url
                _id
              }
            }
            _rawBody
          }
        }
      }
    allSanityEvent(sort: {fields: date}, limit: 9, filter: {old: {ne: true}}) {
      edges {
        node {
          _id
          _rawDescription
          _type
          slug {
            current
          }
          date(formatString: "")
          image {
            asset {
              url
              fluid(maxWidth: 9999, maxHeight: 9999) {
                ...GatsbySanityImageFluid
              }
            }
            crop {
              _key
              _type
              bottom
              left
              right
              top
            }
            hotspot {
              _key
              _type
              height
              width
              x
              y
            }
          }
          price
          title
        }
      }
    }

    allSanityAnnouncement(sort: {fields: _createdAt, order: DESC}, limit: 6, filter: {heroImage: {asset: {url: {ne: null}}}}) {
      edges {
        node {
          _id
          _type
          _createdAt
          _rawBody
          title
          slug {
            current
          }
          heroImage {
            asset {
              url
              fluid(maxWidth: 9999, maxHeight: 9999) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`

export default Index
