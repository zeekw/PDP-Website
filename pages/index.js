import React from 'react'
import Link from 'next/link'
import Sanity from '../sanity-client.js'
import Favicon from 'react-favicon'

import Header from '../components/Header.js'
import Carousel from '../components/Carousel.js'
import DocumentList from '../components/DocumentList.js'
import Footer from '../components/Footer.js'

import { sortByTimeDelta } from '../helperFunctions.js'

// import '../styles/index.sass'

const getData = async function(){
  // Get announcements and events to display on page
  var currentDate = (new Date()).toISOString()
  const query = `*[(_type == "event" && date >= "${currentDate}") || _type == "announcement"]`
  var data = await Sanity.fetch(query, {})
  // Sort data by timeDelta value in ascending order
  var sortedData = sortByTimeDelta(data)
  return {data: sortedData}
}

class Index extends React.Component {
  render(){
    var Events = this.props.data.filter(obj => {
      return obj._type === "event"
    })
    for(var event of Events){
      event.readableDate = (new Date(event.date)).toLocaleString([], {year:'numeric', month: '2-digit', day:'numeric', hour: '2-digit', minute:'2-digit'})
      event.readablePrice = (event.price == 0) ? '' : ("$" + event.price)
    }
    var Announcements = this.props.data.filter(obj => {
      return obj._type === "announcement"
    })
    for(var announcement of Announcements){
      announcement.readableDate = (new Date(announcement._createdAt)).toLocaleString([], {year:'numeric', month: '2-digit', day:'numeric', hour: '2-digit', minute:'2-digit'})
    }
    return(
      <div>
        <title>PDP</title>
        <Favicon url={"../static/favicon.ico"}/>
        <Header CurrentPage="Home"/>
        <Carousel data={this.props.data}/>
        <div id="AboutContainer">
          <div id="MissionStatement">
            <h3>Our Mission</h3>
            <p>
              The mission of Philadelphia Dance Projects is to support contemporary dance through Projects that encourage artists and audiences to more fully participate and engage in the experience and pursuit of dance as an evolving form.
            </p>
          </div>
        </div>
        <div id="Lists">
          <div id="Upcoming">
            <h1 id="UpcomingHeader">{Events.length > 0 ? "Upcoming:" : ""}</h1>
            <DocumentList data={Events} headline={"title"} primaryDetail={"readableDate"} secondaryDetail={"readablePrice"} image={"image"} maxLength={3} body="Description"/>
          </div>
          <div id="Announcements">
            <h1 id="AnnouncementsHeader">{Announcements.length > 0 ? "Announcements:" : ""}</h1>
            <DocumentList data={Announcements} headline={"title"} primaryDetail={"readableDate"} secondaryDetail={null} image={"image"} maxLength={3} body="body"/>
          </div>
        </div>
        <Footer/>
        <style jsx global>{`
          a:hover {
            text-decoration: none !important;
          }

          #hiddenDataContainer {
            display: none;
          }

          #AboutContainer {
            max-width: 60%;
            min-width: 800px;
            margin: 0 auto;
            -webkit-font-smoothing: antialiased;
          }

          #AboutContainer #MissionStatement {
            background-color: #eee;
            width: 100%;
            max-width: 920px;
            margin: 30px auto;
            color: #333;
            text-align: center;
            padding: 20px 15px;
            padding-bottom: 3px;
          }

          #AboutContainer #MissionStatement p {
            line-height: 22px;
            font-weight: 400;
            font-size: 18px;
          }

          #AboutContainer #MissionStatement h3 {
            font-size: 22px;
            text-transform: uppercase;
            font-weight: 700;
            line-height: 20px;
          }

          #Upcoming, #Announcements {
            width: calc(60% - 70px);
            min-width: 600px;
            margin: 0 auto;
          }

          #Upcoming #UpcomingHeader, #Upcoming #AnnouncementsHeader, #Announcements #UpcomingHeader, #Announcements #AnnouncementsHeader {
            font-weight: 700;
            margin-bottom: 20px;
          }

          @media (max-width: 800px) {
            #Upcoming, #Announcements {
                width: calc(100% - 30px);
                min-width: auto;
                margin: 15px;
            }
            #Upcoming .DocumentListItem .DocumentListItemBody, #Announcements .DocumentListItem .DocumentListItemBody {
                width: 100%;
                max-height: none !important;
            }
            #Upcoming .DocumentListItem .DocumentListItemBody .DocumentListItemImage, #Announcements .DocumentListItem .DocumentListItemBody .DocumentListItemImage {
                float: none !important;
                width: 100% !important;
            }
            #Upcoming .DocumentListItem .DocumentListItemBody .DocumentListItemText, #Announcements .DocumentListItem .DocumentListItemBody .DocumentListItemText {
                float: none !important;
                width: 100% !important;
                padding-left: 0px !important;
            }
            #Upcoming .DocumentListItem .DocumentListItemBody .DocumentListItemText div.DocumentListItemName div, #Announcements .DocumentListItem .DocumentListItemBody .DocumentListItemText div.DocumentListItemName div {
                font-size: 18px !important;
                white-space: normal;
            }
            #Upcoming .DocumentListItem .DocumentListItemBody .DocumentListItemText .DocumentListItemDescription, #Announcements .DocumentListItem .DocumentListItemBody .DocumentListItemText .DocumentListItemDescription {
                padding-left: 3px;
                margin-bottom: 0px !important;
            }
            #CarouselContainer {
                max-width: 100% !important;
                min-width: auto !important;
                margin-bottom: 0px;
            }
            #AboutContainer {
                max-width: 100% !important;
                min-width: auto !important;
            }
          }

          @media (max-width: 650px) {
            #CarouselContainer {
                margin-top: 30px !important;
            }
          }

        `}</style>
      </div>
    )
  }
}

Index.getInitialProps = getData

export default Index;
