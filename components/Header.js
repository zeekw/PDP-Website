import React from "react"
import Link from "next/link"
import Head from 'next/head'

import Dropdown from "react-bootstrap/Dropdown"

// import "../styles/headerstyle.sass"

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
        <style jsx global>{`
          #Header {
            width: 928px;
            height: 100px;
            margin: 0 auto;
            margin-top: 30px;
            margin-bottom: 20px;
          }

          #Header img {
            width: 500px;
            display: block;
            margin: 0 auto;
          }

          #Header #Navigator {
            list-style: none;
            padding: 0px;
            display: block;
            margin: 15px auto;
            margin-bottom: 0px;
          }

          #Header #Navigator li {
            font-weight: 600;
            font-size: 18px;
            display: inline-block;
            margin: 0 20px;
            cursor: pointer;
            color: black;
          }

          #Header #Navigator li:hover {
            border-bottom-color: grey;
            border-bottom-width: 2px;
            border-bottom-style: solid;
          }

          #Header #MobileNavigator {
            display: none;
            margin-top: 15px;
          }

          #Header #MobileNavigator .dropdown-toggle {
            background-color: white;
            color: black;
            border-color: black;
            border-width: 3px;
            font-weight: 600;
            margin: 0 auto;
            display: block;
            width: 160px;
          }

          #Header #MobileNavigator .dropdown-toggle:focus {
            box-shadow: none;
          }

          #Header #MobileNavigator .dropdown-item {
            padding: 0px;
          }

          #Header #MobileNavigator .dropdown-item .MobileNavigatorInnerItem {
            height: 100%;
            width: 100%;
            padding: 0.25rem 1.5rem;
            color: black !important;
          }

          @media (max-width: 928px) {
            #Header {
                width: 100% !important;
                padding: 0 25px;
            }
          }

          @media (max-width: 928px) and (min-width: 650px) {
            #Header {
                margin-bottom: 40px;
            }
          }

          @media (max-width: 928px) {
            #Header img {
                width: 500px !important;
                max-width: 100%;
            }
            #Header #MobileNavigator {
                display: block !important;
            }
            #Header #Navigator {
                display: none !important;
            }
          }

        `}</style>
      </div>
    )
  }
}

export default Header
