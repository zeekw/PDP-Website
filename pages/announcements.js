import React from 'react'
import Sanity from '../sanity-client.js'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Document from '../components/Document.js'
import autoBind from 'react-autobind';
import BottomScrollListener from 'react-bottom-scroll-listener';
import Sidebar from "../components/Sidebar.js";
import Link from 'next/link'
import Favicon from 'react-favicon'

import "../styles/sidebar.sass"

class Announcements extends React.Component {
  constructor() {
    super();
    autoBind(this);
  }

  state = {
    announcements: [],
    sidebarOpen: false
  }
  componentDidMount(){
    var data = this.props.data
    this.setState({announcements: data})
  }
  async getNextPage(){
    var startIndex = this.state.announcements.length
    var endIndex = startIndex + this.props.pageIncrement
    var query = `*[_type == "announcement"] | order(date desc) [${startIndex}...${endIndex}]`
    var newData = await Sanity.fetch(query, {})
    var oldData = this.state.announcements
    this.setState({announcements:oldData.concat(newData)})
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  render(){
    var data = this.state.announcements
    for(var announcement of data){
      announcement.readableDate = (new Date(announcement._createdAt)).toLocaleString([], {year:'numeric', month: '2-digit', day:'numeric', hour: "numeric", minute: "numeric"})
    }
    var announcements = data.map(itemData => (
      <Document data={itemData} image={"image"} headline={"title"} body={"body"} primaryDetail={"readableDate"}/>
    ))
    var ArchiveItems = this.props.allAnnouncements.map(itemData => (
      <Link href={"/pressclip/" + itemData.slug.current} to={"/announcement/" + itemData.slug.current}><li>{itemData.title}</li></Link>
    ))
    console.log(this.props.allAnnouncements)
    return(
      <div>
        <title>PDP - Announcements</title>
        <Favicon url={"../static/favicon.ico"}/>
        <Header CurrentPage="Announcements"/>
        {announcements}
        <Sidebar headline="Archive">{ArchiveItems}</Sidebar>
        <BottomScrollListener onBottom={this.getNextPage}/>
        <Footer/>
      </div>
    )
  }
}

Announcements.getInitialProps = async function(context){
  // Get announcements
  const pageIncrement = 2
  var query = `*[_type == "announcement"] | order(date desc) [0...${pageIncrement}]`
  var data = await Sanity.fetch(query, {})
  // Get names of ALL announcements
  query = `*[_type == "announcement"]{ title, slug }`
  var allAnnouncements = await Sanity.fetch(query, {})
  console.log(allAnnouncements)
  return {data: data, pageIncrement: pageIncrement, allAnnouncements: allAnnouncements}
}

export default Announcements;
