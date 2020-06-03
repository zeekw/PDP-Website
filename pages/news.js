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

class News extends React.Component {
  constructor() {
    super();
    autoBind(this);
  }

  state = {
    news: [],
    sidebarOpen: false
  }
  componentDidMount(){
    var data = this.props.data
    this.setState({news: data})
  }
  async getNextPage(){
    var startIndex = this.state.news.length
    var endIndex = startIndex + this.props.pageIncrement
    var query = `*[_type == "news"] | order(date desc) [${startIndex}...${endIndex}]`
    var newData = await Sanity.fetch(query, {})
    var oldData = this.state.news
    this.setState({news:oldData.concat(newData)})
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  render(){
    var data = this.state.news
    for(var post of data){
      post.readableDate = (new Date(post._createdAt)).toLocaleString([], {year:'numeric', month: '2-digit', day:'numeric', hour: "numeric", minute: "numeric"})
    }
    var news = data.map(itemData => (
      <Document data={itemData} image={"image"} headline={"title"} body={"body"} primaryDetail={"readableDate"}/>
    ))
    var ArchiveItems = this.props.allNews.map(itemData => (
      <Link href={"/news/" + itemData.slug.current} to={"/news/" + itemData.slug.current}><li>{itemData.title}</li></Link>
    ))
    console.log(this.props.allNews)
    return(
      <div>
        <title>PDP - News</title>
        <Favicon url={"../static/favicon.ico"}/>
        <Header CurrentPage="News"/>
        {news}
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

News.getInitialProps = async function(context){
  // Get announcements
  const pageIncrement = 2
  var query = `*[_type == "news"] | order(date desc) [0...${pageIncrement}]`
  var data = await Sanity.fetch(query, {})
  // Get names of ALL announcements
  query = `*[_type == "news"]{ title, slug } | order(date desc)`
  var allNews = await Sanity.fetch(query, {})
  return {data: data, pageIncrement: pageIncrement, allNews: allNews}
}

export default News;
