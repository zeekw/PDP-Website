import React from "react"
import { Link } from "gatsby"

import "../styles/donatestyle.sass"

class DonateButton extends React.Component {
  render() {
    return (
      <div id="DonateButton">
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_donations" />
          <input type="hidden" name="business" value="isaacrwasserman@gmail.com" />
          <input type="hidden" name="currency_code" value="USD" />
          <input id="DonateButtonImage" type="submit" value="DONATE" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" />
          <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
    )
  }
}

export default DonateButton
