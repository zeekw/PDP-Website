import React from "react"
import { Link, graphql, navigate } from "gatsby"
import axios from "axios"
import Img from 'react-image'

import "../styles/blogpost.sass"

import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import File from "../components/File.js"

import imageUrlBuilder from '@sanity/image-url'

const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'ocpl5ulk',
  dataset: 'pdp-data',
  token: process.env.SANITY_TOKEN, // or leave blank to be anonymous user
})
const BlockContent = require('@sanity/block-content-to-react')
const UrlBuilder = imageUrlBuilder(client)

class AdditionalPage extends React.Component {

  constructor(props){
    super()
  }

  state = {
    loading: false,
    error: false,
    opacity: 0,
    page: {
      title: "",
      body: "",
      heroImage: {
        asset: {
          url: ""
        }
      },
    },
  }

  componentDidMount() {
    if (this.props.location.search.substring(1) !== '') {
      this.fetchPost(this.props.location.search.substring(1))
    } else {
      navigate("/")
    }
  }

  fetchPost = (slug) => {
    var url = 'https://ocpl5ulk.api.sanity.io/v1/data/query/pdp-data?query=*%5B%20_type%20%3D%3D%20%22additionalpage%22%20%26%26%20slug.current%20%3D%3D%20%24slug%20%5D&%24slug=%22' + slug + '%22'
    this.setState({ loading: true })
    axios.get(url).then(page => {
      if(page.data.result.length >= 1){
        this.setState({
          loading: false,
          opacity: 1,
          page: page.data.result[0],
        })
        console.log(page.data.result[0])
      }
    }).catch(error => {
        this.setState({ loading: false, opacity: 1, error })
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
      return url
    } else {
      return ''
    }
  }

  FileRefToElement(props){
    var _ref = props.node.asset._ref
    var splitRef = _ref.split('-')
    var reassembledFilename = splitRef[1] + '.' + splitRef[2]
    var url = 'https://cdn.sanity.io/files/ocpl5ulk/pdp-data/' + reassembledFilename
    var Element = <File src={url}/>
    return Element
  }

  render() {
    var FileRefToElement = this.FileRefToElement
    const serializers = {
      types: {
        code: props => (
          <pre data-language={props.node.language}>
            <code>{props.node.code}</code>
          </pre>
        ),
        file: props => (FileRefToElement(props)),
        embed: props => (
          <div className="embed" dangerouslySetInnerHTML={{__html:
        props.node.code}}></div>
        )
      }
    }
    return (
      <div id="body" style={{opacity: this.state.opacity}}>
        <title>{this.state.page.title}</title>
        <Header CurrentPage="Page"/>
        <div id="PostContainer">
          {(this.state.page.heroImage != null) ?
            <div id="ImageContainer">
              <Img id="PostImage" src={(this.state.page.heroImage != null) ? this.ImageRefToUrl(this.state.page.heroImage.asset._ref, [800,400], this.state.page.heroImage.hotspot) : null}/>
            </div> : null }
          <div id="PostText">
            <h3 style={{textAlign: 'center'}}>{this.state.page.title}</h3>
            <BlockContent id="PostBody" blocks={this.state.page.body} serializers={serializers} projectId="ocpl5ulk" dataset="pdp-data" />
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default AdditionalPage
