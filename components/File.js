import React from "react"
import Link from "next/link"

// import "../styles/filestyle.sass"

class File extends React.Component {
  render() {
    return (
      <a href={this.props.src} className="File">
        {/*<iframe src={this.props.src} height="260" width="200"></iframe>*/}
        <div className="cover"></div>
        <div className="info">{this.props.src.split('/')[6]}</div>
        <style jsx global>{`
          .File {
          display: block;
          padding: 15px;
          background-color: #555;
          width: 300px;
          margin: 20px 0px;
          position: relative;
          border-radius: 5px;
          }
          .File iframe {
          transform: scale(0.3);
          overflow: hidden;
          position: absolute;
          top: -80px;
          left: -60px;
          }
          .File .cover {
          z-index: 3;
          height: 100px;
          width: 300px;
          position: absolute;
          top: 0px;
          left: 0px;
          }
          .File .info {
          position: relative;
          word-wrap: break-word;
          color: white !important;
          }
        `}</style>
      </a>
    )
  }
}

export default File
