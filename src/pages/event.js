import React from "react"
import { Link, graphql, navigate } from "gatsby"
import axios from "axios"
import Img from 'react-image'
import VisibilitySensor from 'react-visibility-sensor'

import "../styles/event.sass"

import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

import imageUrlBuilder from '@sanity/image-url'

const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'ocpl5ulk',
  dataset: 'pdp-data',
  token: process.env.SANITY_TOKEN, // or leave blank to be anonymous user
})
const BlockContent = require('@sanity/block-content-to-react')
const UrlBuilder = imageUrlBuilder(client)

class Event extends React.Component {

  constructor(props){
    super()
  }

  state = {
    loading: false,
    error: false,
    event: {
      title: "",
      date: "",
      description: "",
      image: {
        asset: {
          url: ""
        }
      },
    },
  }

  componentDidMount() {
    if (this.props.location.search.substring(1) !== '') {
      this.fetchEvent(this.props.location.search.substring(1))
    } else {
      navigate("/")
    }
  }

  fetchEvent = (slug) => {
    var url = 'https://ocpl5ulk.api.sanity.io/v1/data/query/pdp-data?query=*%5B_type%20%3D%3D%20%22event%22%20%26%26%20slug.current%20%3D%3D%20%22' + slug + '%22%5D'
    this.setState({ loading: true })
    axios.get(url).then(event => {
      if(event.data.result.length >= 1){
        this.setState({
          loading: false,
          event: event.data.result[0]
        })
      }
    }).catch(error => {
        this.setState({ loading: false, error })
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

  FormatPrice(raw){
    var price = raw;
    if(raw == 0){
      price = 'FREE'
    } else {
      price = '$' + price
    }
    return price
  }

  render() {
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
      <div id="body">
        <title>{this.state.event.title}</title>
        <Header CurrentPage="Event"/>
        <div id="EventContainer">
          <VisibilitySensor>
            <Img id="EventImage" src={(this.state.event.image != null) ? this.ImageRefToUrl(this.state.event.image.asset._ref, [800,400], this.state.event.image.hotspot) : null}/>
          </VisibilitySensor>
          <div id="EventText">
            <h3>{this.state.event.title}</h3>
            <h6>{(new Date(this.state.event.date)).toLocaleString([], {year:'2-digit', month: 'numeric', day:'numeric', hour: '2-digit', minute:'2-digit'})}&nbsp; – &nbsp;<span id="EventPrice">{this.FormatPrice(this.state.event.price)}</span></h6>
            <BlockContent id="EventDescription" blocks={this.state.event.Description} serializers={serializers} />
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Event
