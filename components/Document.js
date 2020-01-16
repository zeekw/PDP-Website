import React from "react"
import Link from "next/link"
import autoBind from 'react-autobind'
import Head from 'next/head'
import "../styles/document.sass"
import Sanity from '../sanity-client.js'
import { SanityImageUrl } from '../helperFunctions.js'
const BlockContent = require('@sanity/block-content-to-react')

class Document extends React.Component {
  constructor(){
    super()
  }

  state = {
    data: []
  }

  componentDidMount(){
    this.setState({data: this.props.data})
  }
  render() {
    var imageKey = this.props.image
    var headlineKey = this.props.headline
    var bodyKey = this.props.body
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
    function findFocalPoint(image){
      if("hotspot" in image){
        var x = image.hotspot.x
        var y = image.hotspot.y
        return {x: x, y: y}
      }
      else {
        return {x: 0.5, y: 0.5}
      }
    }
    var returnImg = function(item){
      if(imageKey == null){
        return ''
      }
      else if(!(imageKey in item)){
        return ''
      }
      else if(!("asset" in item[imageKey])){
        return ''
      }
      else {
        var assetID = item[imageKey].asset._ref
        return <img id="DocumentImage" src={SanityImageUrl(assetID, {w:800,h:400,fp:findFocalPoint(item[imageKey])})}/>
      }
    }
    return (
      <div id="DocumentContainer">
        { (returnImg(this.props.data) != '') ? <div id="ImageContainer"> {returnImg(this.props.data)} </div> : null }
        <div id="DocumentText">
          <h3>{this.props.data[headlineKey]}</h3>
          <BlockContent id="DocumentDescription" blocks={this.props.data[bodyKey]} serializers={serializers} projectId="ocpl5ulk" dataset="pdp-data" />
        </div>
      </div>
    )
  }
}

export default Document
