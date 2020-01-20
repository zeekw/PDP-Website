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

// import "../styles/sidebar.sass"

class Press extends React.Component {
  constructor() {
    super();
    autoBind(this);
  }

  state = {
    clips: [],
    sidebarOpen: false
  }
  componentDidMount(){
    var data = this.props.data
    this.setState({clips: data})
  }
  async getNextPage(){
    var startIndex = this.state.clips.length
    var endIndex = startIndex + this.props.pageIncrement
    var query = `*[_type == "pressclip"]{ "primaryDetail": author + " for " + organization + " - " + date, ... } | order(date desc) [${startIndex}...${endIndex}]`
    var newData = await Sanity.fetch(query, {})
    // Construct secondaryDetail
    for(var clip of newData){
      if(typeof clip.articleURL !== "undefined"){
        clip.secondaryDetail = <a href={clip.articleURL}>{"Read it on " + clip.organization + " here"}</a>
      }
      else {
        clip.secondaryDetail = ''
      }
    }
    var oldData = this.state.clips
    this.setState({clips:oldData.concat(newData)})
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  render(){
    var data = this.state.clips
    for(var clip of data){
      clip.readableDate = (new Date(clip.date)).toLocaleString([], {year:'numeric', month: '2-digit', day:'numeric'})
    }
    var clips = data.map(itemData => (
      <Document key={itemData._id} data={itemData} image={"heroImage"} headline={"title"} body={"body"} primaryDetail={"primaryDetail"} tertiaryDetail={"tertiaryDetail"}/>
    ))
    var ArchiveItems = this.props.allClips.map(itemData => (
      <Link key={itemData._id} href={"/pressclip/" + itemData.slug.current} as={"/pressclip/" + itemData.slug.current}><li>{itemData.title}</li></Link>
    ))
    return(
      <div>
        <title>PDP - Press</title>
        <Favicon url={"../static/favicon.ico"}/>
        <Header CurrentPage="Press"/>
        {clips}
        <Sidebar headline="Archive">{ArchiveItems}</Sidebar>
        <BottomScrollListener onBottom={this.getNextPage}/>
        <Footer/>
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

Press.getInitialProps = async function(context){
  // Get pressclips
  const pageIncrement = 2
  var query = `*[_type == "pressclip"]{ "primaryDetail": author + " for " + organization + " - " + date, ... } | order(date desc) [0...${pageIncrement}]`
  var data = await Sanity.fetch(query, {})
  // Construct secondaryDetail
  for(var clip of data){
    if(typeof clip.articleURL !== "undefined"){
      clip.tertiaryDetail = `<a href="${clip.articleURL}">Read it on ${clip.organization} here</a>`
    }
    else {
      clip.tertiaryDetail = ''
    }
  }
  // Get names of ALL clips
  query = `*[_type == "pressclip"]{ title, slug }`
  var allClips = await Sanity.fetch(query, {})
  return {data: data, pageIncrement: pageIncrement, allClips: allClips}
}

export default Press;
