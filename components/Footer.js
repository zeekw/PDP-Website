import React from "react"
import Link from "next/link"

import "../styles/footerstyle.sass"

import DonateButton from "../components/DonateButton.js"

class Footer extends React.Component {
  render() {
    return (
      <div id="Footer">
        <div id="FooterBody">
          <h6>{'\u00A9 ' + (new Date()).getFullYear() + ' Philadelphia Dance Projects'}</h6>
          <div id="ButtonContainer">
            <DonateButton/>
            <Link href="/contact"><div id="ContactButton">CONTACT</div></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
