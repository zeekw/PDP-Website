import React from "react"
import { Link } from "gatsby"
import Img from 'react-image'
import VisibilitySensor from 'react-visibility-sensor'
import Sidebar from "react-sidebar";

import "../styles/blog.sass"

import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import imageUrlBuilder from '@sanity/image-url'

const BlockContent = require('@sanity/block-content-to-react')
const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'ocpl5ulk',
  dataset: 'pdp-data',
  token: process.env.SANITY_TOKEN, // or leave blank to be anonymous user
  useCdn: false // `false` if you want to ensure fresh data
})
const UrlBuilder = imageUrlBuilder(client)

class Blog extends React.Component {

  state = {
    numFetched: 5,
    posts: [],
    pauseScrollTracking: false,
    sidebarOpen: false,
    sidebarClasses: 'hidden',
    modalShadeClasses: 'hidden nodisplay'
  }

  constructor(props){
    super(props)
    this.getNext = this.getNext.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentDidMount(){
    var edges = this.props.data.allSanityBlogpost.edges
    var posts = []
    for(var i=0; i<edges.length; i++){
      posts.push(edges[i].node)
    }
    this.setState({posts: posts})
    console.log("Fetched First:")
    console.log(posts)
    document.addEventListener('scroll', this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  onSetSidebarOpen(open) {
    if(open){
      this.setState({ modalShadeClasses: '', sidebarClasses: '' });
    }
    else {
      this.setState({ modalShadeClasses: 'hidden', sidebarClasses: 'hidden' })
      setTimeout(function(){
        this.setState({modalShadeClasses: 'hidden nodisplay'})
      }.bind(this), 400)
    }
  }

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementById('body');
    if (this.isBottom(wrappedElement) && this.state.pauseScrollTracking == false) {
      this.setState({pauseScrollTracking: true})
      this.getNext()
    }
  };

  getNext(){
    const query = '*[_type == "blogpost"] | { _createdAt, title, author, _rawBody, heroImage, _id } | order(_createdAt desc) | [$nextIndex...$nextPlusFive]'
    const params = {nextIndex: this.state.numFetched, nextPlusFive: this.state.numFetched + 5}

    client.fetch(query, params).then(posts => {
      console.log("Fetched Later:")
      console.log(posts)
      this.setState({numFetched: this.state.numFetched + 5, posts: this.state.posts.concat(posts), pauseScrollTracking: false})
    })
  }

  ImageRefToUrl(_ref, size, hotspot){
    if(typeof _ref !== 'undefined'){
      var splitRef = _ref.split('-')
      var reassembledFilename = splitRef[1] + '-' + splitRef[2] + '.' + splitRef[3]
      var focalpointValues = function(){
        if(hotspot != null){
          return '&fp-x=' + hotspot.x + '&fp-y=' + hotspot.y
        }
        else {
          return ''
        }
      }
      var url = 'https://cdn.sanity.io/images/ocpl5ulk/pdp-data/' + reassembledFilename + '?w=' + size[0] + '&h=' + size[1] + '&fit=crop&crop=focalpoint&quality=70' + focalpointValues()
      console.log(url)
      return url
    } else {
      return ''
    }
  }

  FormatPrice(raw){
    var price = raw;
    if(raw == 0){
      price = 'FREE'
    } else {
      price = '$' + price
    }
    return price
  }

  ImageSource(image){
    if(image == null){
      return null
    } else {
      if(typeof image.asset._id == 'undefined'){
        return this.ImageRefToUrl(image.asset._ref, [800,400], image.hotspot)
      }
      else {
        return this.ImageRefToUrl(image.asset._id, [800,400], image.hotspot)
      }
    }
  }

  render() {
    console.log(this.state.posts)
    const serializers = {
      types: {
        code: props => (
          <pre data-language={props.node.language}>
            <code>{props.node.code}</code>
          </pre>
        )
      }
    }
    var Items = this.state.posts.map((itemData) =>
      <div className="PostContainer" key={itemData._id}>
        <VisibilitySensor>
          <Img className="PostImage" src={this.ImageSource(itemData.heroImage)}/>
        </VisibilitySensor>
        <div className="PostText">
          <h3>{itemData.title}</h3>
          <h5>{itemData.author}</h5>
          <h6>{(new Date(itemData._createdAt)).toLocaleString([], {year:'2-digit', month: 'numeric', day:'numeric', hour: '2-digit', minute:'2-digit'})}</h6>
          <BlockContent className="PostBody" blocks={itemData._rawBody} serializers={serializers} projectId="ocpl5ulk" dataset="pdp-data"/>
        </div>
      </div>
    )
    var ArchiveItems = this.props.data.archive.edges.map((itemData) =>
      <li className="ArchiveItem" key={itemData.node._id}>
        <Link to={'/blogpost?' + itemData.node.slug.current}>{itemData.node.title}</Link>
      </li>
    )
    return (
      <div id="body">
        <title>PDP - Blog</title>
        <Header CurrentPage="Blog"/>
        <div id="Feed">
          {Items}
        </div>
        <div id="ModalShade" className={this.state.modalShadeClasses} onClick={() => this.onSetSidebarOpen(false)}></div>
        <div id="Sidebar" className={this.state.sidebarClasses} open={this.state.sidebarOpen}>
          <ul id="ArchiveList"><h1>Archive</h1><h2 onClick={() => this.onSetSidebarOpen(false)}>x</h2><br/><br/><br/>{ArchiveItems}</ul>
        </div>
        <button id="SidebarOpener" onClick={() => this.onSetSidebarOpen(true)}>Archive</button>
        <Footer/>
      </div>
    )
  }
}


export const query = graphql`{
  allSanityBlogpost(sort: {fields: _createdAt, order: DESC}, limit: 5) {
    edges {
      node {
        _createdAt
        _rawBody
        author
        title
        _id
        heroImage {
          asset {
            url
            _id
          }
        }
      }
    }
  }
  archive: allSanityBlogpost(sort: {fields: _createdAt, order: DESC}) {
    edges {
      node {
        _createdAt
        title
        _id
        slug {
          current
        }
      }
    }
  }
}`

export default Blog
