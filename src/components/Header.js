import React from "react"
import { Link } from "gatsby"
import logo from "../../static/logo-07.svg"
import 'bootstrap/dist/css/bootstrap.css'

import Dropdown from "react-bootstrap/Dropdown"

import "../styles/headerstyle.sass"

import SEO from "./SEO.js"

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
        <SEO/>
        <img src={logo}/>
        <ul id="Navigator">
          <Link to="/"><li style={NavStyle("Home")}>Home</li></Link>
          <Link to="/projects"><li style={NavStyle("Projects")}>Projects</li></Link>
          <Link to="/calendar"><li style={NavStyle("Calendar")}>Calendar</li></Link>
          <Link to="/blog"><li style={NavStyle("Blog")}>Blog</li></Link>
          <Link to="/contributors"><li style={NavStyle("Contributors")}>Contributors</li></Link>
          <Link to="/about"><li style={NavStyle("About")}>About</li></Link>
          <Link to="/contact"><li style={NavStyle("Contact")}>Contact</li></Link>
        </ul>
        <Dropdown id="MobileNavigator">
          <Dropdown.Toggle id="MobileNavigatorToggle">
            {CurrentPage}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item><Link to="/"><div className="MobileNavigatorInnerItem">Home</div></Link></Dropdown.Item>
            <Dropdown.Item><Link to="/projects"><div className="MobileNavigatorInnerItem">Projects</div></Link></Dropdown.Item>
            <Dropdown.Item><Link to="/calendar"><div className="MobileNavigatorInnerItem">Calendar</div></Link></Dropdown.Item>
            <Dropdown.Item><Link to="/blog"><div className="MobileNavigatorInnerItem">Blog</div></Link></Dropdown.Item>
            <Dropdown.Item><Link to="/contributors"><div className="MobileNavigatorInnerItem">Contributors</div></Link></Dropdown.Item>
            <Dropdown.Item><Link to="/about"><div className="MobileNavigatorInnerItem">About</div></Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
  }
}

export default Header
