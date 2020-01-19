import React from "react"
import Link from "next/link"
import autoBind from 'react-autobind';
import ReactSidebar from "react-sidebar";
import "../styles/sidebar.sass"

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
        <button id="OpenSidebarButton" class={this.state.sidebarOpen ? "hiddenButton" : ""} onClick={() => this.onSetSidebarOpen(true)}>{this.props.headline}</button>
      </div>
    )
  }
}

export default Sidebar
