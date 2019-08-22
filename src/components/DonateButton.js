import React from "react"
import { Link } from "gatsby"

import "../styles/donatestyle.sass"

class DonateButton extends React.Component {
  render() {
    return (
      <div id="DonateButton">
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="4MR4GXLTFHUMU" />
          <input id="DonateButtonImage" type="submit" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" value="DONATE" />
          <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
    )
  }
}

export default DonateButton
