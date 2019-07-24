import React from "react"
import { Link } from "gatsby"

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import "../styles/calendar.sass"

import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

class Calendar extends React.Component {

  FormatEventData(raw){
    var edges = raw.allSanityEvent.edges
    var Events = [];
    for(var i=0; i<edges.length; i++){
      var node = edges[i].node
      var NewNode = { title: node.title, start: (new Date(node.date)), allDay: true, url: '/event?' + node.slug.current }
      Events.push(NewNode);
    }
    return Events
  }

  render() {
    var Events = this.FormatEventData(this.props.data)
    console.log(Events)

    return (
      <div id="body">
        <title>PDP - Calendar</title>
        <Header CurrentPage="Calendar"/>
        <div id="CalendarContainer">
          <FullCalendar
            id="Calendar"
            defaultView="dayGridMonth"
            plugins={[ dayGridPlugin ]}
            aspectRatio={1.3}
            handleWindowResize={true}
            events={Events}
            />
        </div>
        <Footer/>
      </div>
    )
  }
}

export const query = graphql`
{
allSanityEvent {
  edges {
    node {
      _id
      slug {
        current
      }
      date
      title
    }
  }
}
}
`

export default Calendar
