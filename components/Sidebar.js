import React from "react"
import Link from "next/link"
import autoBind from 'react-autobind';
import ReactSidebar from "react-sidebar";
// import "../styles/sidebar.sass"

class Sidebar extends React.Component {
  constructor() {
    super();
    autoBind(this);
  }
  state = {
    sidebarOpen: false
  }
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  render() {
    return (
      <div id="SidebarContainer">
        <ReactSidebar rootId="Sidebar" rootClassName={this.state.sidebarOpen ? "" : "hidden"} sidebar={<div id="SidebarContent"><div id="SidebarHeader"><h1>{this.props.headline}</h1><h2 onClick={() => this.onSetSidebarOpen(false)}>&#x2716;</h2></div><ul id="SidebarList">{this.props.children}</ul></div>} pullRight={true} open={this.state.sidebarOpen} onSetOpen={this.onSetSidebarOpen} styles={{ sidebar: { background: "white" } }}></ReactSidebar>
        <button id="OpenSidebarButton" className={this.state.sidebarOpen ? "hiddenButton" : ""} onClick={() => this.onSetSidebarOpen(true)}>{this.props.headline}</button>
        <style jsx global>{`
          #Sidebar {
            z-index: 10;
          }

          #Sidebar.hidden {
            z-index: -10;
          }

          #SidebarContent {
            padding: 30px;
          }

          #SidebarContent #SidebarHeader {
            height: 60px;
          }

          #SidebarContent #SidebarHeader h1 {
            float: left;
          }

          #SidebarContent #SidebarHeader h2 {
            float: right;
            cursor: pointer;
          }

          #SidebarContent #SidebarList {
            display: block;
            list-style: none;
            width: 400px;
            max-width: 100%;
            padding: 0px;
          }

          #SidebarContent #SidebarList li {
            margin: 7px 0px;
            line-height: 20px;
            cursor: pointer;
            color: blue;
          }

          #SidebarContent #SidebarList li:hover {
            text-decoration: underline;
          }

          #OpenSidebarButton {
            background-color: #f17267;
            color: white;
            font-weight: 500;
            font-size: 18px;
            border-style: none;
            transform: rotate(-90deg);
            position: fixed;
            height: 40px;
            top: 40%;
            right: -20px;
            opacity: 1;
            transition: 0.3s ease-out 0s;
          }

          #OpenSidebarButton:focus {
            outline: 0;
          }

          #OpenSidebarButton.hiddenButton {
            right: 440px;
          }

        `}</style>
      </div>
    )
  }
}

export default Sidebar
