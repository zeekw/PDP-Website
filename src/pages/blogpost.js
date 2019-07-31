import React from "react"
import { Link, graphql, navigate } from "gatsby"
import axios from "axios"
import Img from 'react-image'
import VisibilitySensor from 'react-visibility-sensor'

import "../styles/blogpost.sass"

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

class BlogPost extends React.Component {

  constructor(props){
    super()
  }

  state = {
    loading: false,
    error: false,
    opacity: 0,
    post: {
      title: "",
      body: "",
      author: "",
      _createdAt: "",
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
    var url = 'https://ocpl5ulk.api.sanity.io/v1/data/query/pdp-data?query=*%5B_type%20%3D%3D%20%22blogpost%22%20%26%26%20slug.current%20%3D%3D%20%22' + slug + '%22%5D'
    this.setState({ loading: true })
    axios.get(url).then(post => {
      if(post.data.result.length >= 1){
        this.setState({
          loading: false,
          opacity: 1,
          post: post.data.result[0],
        })
        console.log(post.data.result[0])
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
        ),
        embed: props => (
          <div className="embed" dangerouslySetInnerHTML={{__html:
        props.node.code}}></div>
        )
      }
    }
    return (
      <div id="body" style={{opacity: this.state.opacity}}>
        <title>{this.state.post.title}</title>
        <Header CurrentPage="BlogPost"/>
        <div id="PostContainer">
          {(this.state.post.heroImage != null) ?
            <div id="ImageContainer">
              <Img id="PostImage" src={(this.state.post.heroImage != null) ? this.ImageRefToUrl(this.state.post.heroImage.asset._ref, [800,400], this.state.post.heroImage.hotspot) : null}/>
            </div> : null }
          <div id="PostText">
            <h3>{this.state.post.title}</h3>
            <h5>{this.state.post.author}</h5>
            <h6>{(new Date(this.state.post._createdAt)).toLocaleString([], {year:'2-digit', month: 'numeric', day:'numeric', hour: '2-digit', minute:'2-digit'})}</h6>
            <BlockContent id="PostBody" blocks={this.state.post.body} serializers={serializers} projectId="ocpl5ulk" dataset="pdp-data" />
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default BlogPost
