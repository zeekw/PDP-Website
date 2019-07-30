import React from "react"
import { Link, graphql, navigate } from "gatsby"
import axios from "axios"
import Img from 'react-image'
import VisibilitySensor from 'react-visibility-sensor'

import "../styles/project.sass"

import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import UpcomingList from '../components/UpcomingList.js'

const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'ocpl5ulk',
  dataset: 'pdp-data',
  token: process.env.SANITY_TOKEN, // or leave blank to be anonymous user
})
const BlockContent = require('@sanity/block-content-to-react')

class Event extends React.Component {

  constructor(props){
    super()
  }

  state = {
    loading: false,
    error: false,
    opacity: 0,
    project: {
      description: [],
      image: {
        asset: {
          ref: ''
        }
      },
      title: '',
      relatedEvents: [],
      relatedPosts: []
    }
  }

  componentDidMount() {
    if (this.props.location.search.substring(1) !== '') {
      this.fetchProject(this.props.location.search.substring(1))
    } else {
      navigate("/")
    }
  }

  fetchProject = (slug) => {
    var url = 'https://ocpl5ulk.api.sanity.io/v1/data/query/pdp-data?query=*%5B%20_type%20%3D%3D%20%22project%22%20%26%26%20slug.current%20%3D%3D%20%24slug%5D%7B%0A%20%20...%2C%0A%20%20%22relatedEvents%22%3A%20*%5B%20_type%20%3D%3D%20%22event%22%20%26%26%20references(%5E._id)%20%26%26%20old%20!%3D%20true%5D%2C%0A%09%22relatedPosts%22%3A%20*%5B%20_type%20%3D%3D%20%22blogpost%22%20%26%26%20references(%5E._id)%20%26%26%20old%20!%3D%20true%5D%0A%7D&%24slug=%22' + slug + '%22'
    this.setState({ loading: true })
    axios.get(url).then(project => {
      if(project.data.result.length >= 1){
        this.setState({
          loading: false,
          opacity: 1,
          project: project.data.result[0]
        })
        console.log(project.data.result[0])
      }
    }).catch(error => {
        this.setState({ loading: false, opacity: 1, error })
        console.log(error)
    })
  }

  ImageRefToUrl(_ref, size, hotspot){
    if(typeof hotspot == 'undefined'){
      var hotspotInfo = ''
    }
    else {
      var hotspotInfo = '&fp-x=' + hotspot.x + '&fp-y=' + hotspot.y
    }
    if(typeof _ref !== 'undefined'){
      var splitRef = _ref.split('-')
      var reassembledFilename = splitRef[1] + '-' + splitRef[2] + '.' + splitRef[3]
      var url = 'https://cdn.sanity.io/images/ocpl5ulk/pdp-data/' + reassembledFilename + '?w=' + size[0] + '&h=' + size[1] + '&fit=crop&crop=focalpoint&quality=70' + hotspotInfo
      return url
    } else {
      return ''
    }
  }

  render() {

    var formatEventData = function(data){
      var formattedData = []
      for(var i=0; i<data.length; i++){
        var node = data[i]
        var newNode = node
        newNode._rawDescription = newNode.Description
        formattedData.push(newNode)
      }
      return formattedData
    }

    var formatPostData = function(data){
      var formattedData = []
      for(var i=0; i<data.length; i++){
        var node = data[i]
        var newNode = node
        newNode._rawDescription = newNode.body
        newNode.image = newNode.heroImage
        newNode.price = 'FREE'
        newNode.date = newNode._createdAt
        formattedData.push(newNode)
      }
      return formattedData
    }

    const serializers = {
      types: {
        code: props => (
          <pre data-language={props.node.language}>
            <code>{props.node.code}</code>
          </pre>
        )
      }
    }
    return (
      <div id="body" style={{opacity: this.state.opacity}}>
        <title>{this.state.project.title}</title>
        <Header CurrentPage="Project"/>
        <div id="project-body">
          <div id="hero">
            <div id="ImageContainer">
              <img src={this.ImageRefToUrl(this.state.project.image.asset._ref, [1500, 750], this.state.project.hotspot)}/>
            </div>
            <div id="ProjectTitle">
              <h1>{this.state.project.title}</h1>
              <div id="Stripe"></div>
            </div>
          </div>
          <div id="project-description">
            <BlockContent blocks={this.state.project.description} serializers={serializers}/>
          </div>
          <div id="Related">
            <h1 id="RelatedEventsHeader">{(formatEventData(this.state.project.relatedEvents).length > 0) ? 'Related Events:' : ''}</h1>
            <UpcomingList data={formatEventData(this.state.project.relatedEvents)} limit={5}/>
            <h1 id="RelatedPostsHeader">{(formatEventData(this.state.project.relatedPosts).length > 0) ? 'Related Posts:' : ''}</h1>
            <UpcomingList data={formatPostData(this.state.project.relatedPosts)} limit={5} overridePath="blogpost"/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Event
