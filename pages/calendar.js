import React from "react"
import Link from 'next/link'
import autoBind from 'react-autobind'
import FullCalendar from '../components/FullCalendar-NoSSR.js'
import ReactTooltip from 'react-tooltip'
import Sanity from "../sanity-client.js"
import "../styles/calendar.sass"
import Favicon from 'react-favicon'

import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

class Calendar extends React.Component {
  constructor() {
    super();
    autoBind(this);
  }
  state = {
    showingTooltip: false
  }
  tooltipOn(e){
    if(!this.state.showingTooltip){
      this.setState({showingTooltip: true})
    }
  }
  tooltipOff(){
    if(this.state.showingTooltip){
      this.setState({showingTooltip: false})
    }
  }

  render() {
    return (
      <div id="body">
        <title>PDP - Calendar</title>
        <Favicon url={"../static/favicon.ico"}/>
        <Header CurrentPage="Calendar"/>
        <div id="CalendarContainer">
          <FullCalendar
            defaultView="dayGridMonth"
            aspectRatio={1.3}
            handleWindowResize={true}
            events={this.props.data}
          />
        </div>
        <Footer/>
      </div>
    )
  }
}

Calendar.getInitialProps = async function(context){
  // Get Events
  var query = `*[_type == "event"]{"url": "/event/" + slug.current, ...}`
  var events = await Sanity.fetch(query, {})

  return {data: events}
}

export default Calendar
