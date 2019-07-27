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

  CreateCarouselData(RawEvents, RawPosts){
    var Events = this.FormatUpcomingData(RawEvents)
    var Posts = []
    for(var i=0; i<RawPosts.length; i++){
      var node = RawPosts[i].node
      var FormattedPost = JSON.parse(JSON.stringify(node))
      FormattedPost["ItemType"] = "post"
      FormattedPost["image"] = FormattedPost["heroImage"]
      Posts.push(FormattedPost)
    }
    var EventsWithinOneWeek = []
    var EventsWithinOneMonth = []
    var EventsWithinThreeMonths = []
    var EventsFarInFuture = []
    var now = (new Date()).getTime()
    var oneWeek = 604800000
    var oneMonth = 2592000000
    var threeMonths = 7776000000
    for(var i=0; i<Events.length; i++){
      if(Events[i].image != null){
        var then = Date.parse(Events[i].date)
        if(then - now <= oneWeek){
          EventsWithinOneWeek.push(Events[i])
        } else if(then - now <= oneMonth) {
          EventsWithinOneMonth.push(Events[i])
        } else if(then - now <= threeMonths){
          EventsWithinThreeMonths.push(Events[i])
        } else {
          EventsFarInFuture.push(Events[i])
        }
      }
    }
    var PostsNewerThanOneWeek = []
    var PostsNewerThanOneMonth = []
    var OlderPosts = []
    for(var i=0; i<Posts.length; i++){
      var then = Date.parse(Posts[i]._createdAt)
      if(now - then <= oneWeek){
        PostsNewerThanOneWeek.push(Posts[i])
      } else if(now - then <= oneMonth){
        PostsNewerThanOneMonth.push(Posts[i])
      } else {
        OlderPosts.push(Posts[i])
      }
    }
    var Data = EventsWithinOneWeek.concat(PostsNewerThanOneWeek, EventsWithinOneMonth, PostsNewerThanOneMonth, EventsWithinThreeMonths, OlderPosts, EventsFarInFuture)
    return Data
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
    this.markOldEvents(UnmarkedOldEvent_ids);
    return Events;
  }

  markOldEvents(_ids){
    console.log(_ids)
    for(var i=0; i<_ids.length; i++){
      var mutations = JSON.stringify({ "mutations": [ { "patch": { "id": _ids[0], "set": { "old": true } } } ] });
      this.MutateSanity(mutations)
    }
  }

  MutateSanity(mutations){
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });
    xhr.open("POST", "https://ocpl5ulk.api.sanity.io/v1/data/mutate/pdp-data");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer " + process.env.SANITY_TOKEN);
    xhr.send(mutations);
  }

  render() {

    var RawUpcomingData = this.props.data.allSanityEvent.edges
    var UpcomingData = this.FormatUpcomingData(RawUpcomingData)

    var RawPosts = this.props.data.allSanityBlogpost.edges
    var CarouselData = this.CreateCarouselData(RawUpcomingData, RawPosts)

    return (
      <div id="body">
        <title>Philadelphia Dance Projects</title>
        <Header CurrentPage="Home"/>
        <HomeCarousel data={CarouselData}/>
        <div id="Upcoming">
          <h1 id="UpcomingHeader">Upcoming:</h1>
          <UpcomingList data={UpcomingData} limit={3}/>
        </div>
        <Footer/>
      </div>
    )
  }
}

export const query = graphql`
  {
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

    allSanityBlogpost(sort: {fields: _createdAt, order: DESC}, limit: 6, filter: {heroImage: {asset: {url: {ne: null}}}}) {
      edges {
        node {
          _id
          _type
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
