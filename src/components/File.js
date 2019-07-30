import React from "react"
import { Link } from "gatsby"

import "../styles/filestyle.sass"

class File extends React.Component {
  render() {
    return (
      <a href={this.props.src} className="File">
        <iframe src={this.props.src} height="260" width="200"></iframe>
        <div className="cover"></div>
        <div className="info">{this.props.src.split('/')[6]}</div>
      </a>
    )
  }
}

export default File
