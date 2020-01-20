import React from "react"
import Link from "next/link"

// import "../styles/footerstyle.sass"

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
        <style jsx global>{`
          #Footer {
            width: 100%;
            margin-top: 80px;
            border-top: solid 1px #eee;
            height: 60px;
            padding: 10px;
            text-align: center;
          }

          #Footer #FooterBody {
            display: inline-block;
          }

          #Footer #FooterBody h6 {
            color: #999;
            display: inline-block;
            vertical-align: top;
            margin-bottom: 0px;
            height: 40px;
            padding: 12px;
          }

          #Footer #FooterBody #ButtonContainer {
            display: inline-block;
          }

          #Footer #FooterBody #ButtonContainer #DonateButton {
            display: block;
            float: left;
          }

          #Footer #FooterBody #ButtonContainer #ContactButton {
            display: block;
            float: left;
            height: 40px;
            width: 120px;
            background-color: #57b9f2;
            border: solid 1px #499dcc;
            border-radius: 5px;
            margin: 0px 5px;
            overflow: hidden;
            color: white !important;
            font-weight: 700;
            padding: 7px;
            cursor: pointer;
            text-decoration: none !important;
          }

          #Footer #FooterBody #ButtonContainer #ContactButton:hover {
            opacity: 0.8;
          }

          @media (max-width: 650px) {
            #ButtonContainer {
                margin-bottom: 10px;
            }
          }

        `}</style>
      </div>
    )
  }
}

export default Footer
