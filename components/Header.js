import React from "react"
import Link from "next/link"
import Head from 'next/head'

import Dropdown from "react-bootstrap/Dropdown"

import "../styles/headerstyle.sass"

class Header extends React.Component {
  render() {
    const props = this.props
    const CurrentPage = props.CurrentPage
    var NavStyle = function(Navigator){
      if(Navigator == CurrentPage){
        return {borderBottomWidth: 2, borderBottomStyle: 'solid', borderBottomColor: 'black !important'}
      }
      else {
        return {}
      }
    }
    return (
      <div id="Header">
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="../static/bootstrap.min.css" />
        </Head>
        <img src="../static/logo.svg"/>
        <ul id="Navigator">
          <Link href="/"><li style={NavStyle("Home")}>Home</li></Link>
          <Link href="/projects"><li style={NavStyle("Projects")}>Projects</li></Link>
          <Link href="/press"><li style={NavStyle("Press")}>Press</li></Link>
          <Link href="/contributors"><li style={NavStyle("Contributors")}>Contributors</li></Link>
          <Link href="/about"><li style={NavStyle("About")}>About</li></Link>
          <Link href="/calendar"><li style={NavStyle("Calendar")}>Calendar</li></Link>
          <Link href="/announcements"><li style={NavStyle("Announcements")}>Announcements</li></Link>
          <Link href="/contact"><li style={NavStyle("Contact")}>Contact</li></Link>
        </ul>
        <Dropdown id="MobileNavigator">
          <Dropdown.Toggle id="MobileNavigatorToggle">
            {CurrentPage}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item><Link href="/"><div className="MobileNavigatorInnerItem">Home</div></Link></Dropdown.Item>
            <Dropdown.Item><Link href="/projects"><div className="MobileNavigatorInnerItem">Projects</div></Link></Dropdown.Item>
            <Dropdown.Item><Link href="/press"><div className="MobileNavigatorInnerItem">Press</div></Link></Dropdown.Item>
            <Dropdown.Item><Link href="/contributors"><div className="MobileNavigatorInnerItem">Contributors</div></Link></Dropdown.Item>
            <Dropdown.Item><Link href="/about"><div className="MobileNavigatorInnerItem">About</div></Link></Dropdown.Item>
            <Dropdown.Item><Link href="/calendar"><div className="MobileNavigatorInnerItem">Calendar</div></Link></Dropdown.Item>
            <Dropdown.Item><Link href="/announcements"><div className="MobileNavigatorInnerItem">Announcements</div></Link></Dropdown.Item>
            <Dropdown.Item><Link href="/contact"><div className="MobileNavigatorInnerItem">Contact</div></Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
  }
}

export default Header
