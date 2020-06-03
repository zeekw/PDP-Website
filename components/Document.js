import React from "react"
import Link from "next/link"
import autoBind from 'react-autobind'
import Head from 'next/head'
// import "../styles/document.sass"
import Sanity from '../sanity-client.js'
import { SanityImageUrl } from '../helperFunctions.js'
import File from "./File.js"
const BlockContent = require('@sanity/block-content-to-react')

class Document extends React.Component {
  constructor(){
    super()
  }

  state = {
    data: []
  }

  componentDidMount(){
    var data = this.props.data
    data[null] = ''
    this.setState({data: this.props.data})
  }
  render() {
    var imageKey = this.props.image
    var headlineKey = this.props.headline
    var primaryDetailKey = this.props.primaryDetail
    var secondaryDetailKey = this.props.secondaryDetail
    var tertiaryDetailKey = this.props.tertiaryDetail
    var bodyKey = this.props.body
    const BlockRenderer = props => {
      const {style = 'normal'} = props.node;
      if (/^h\d/.test(style)) {
        const level = style.replace(/[^\d]/g, '')
        return React.createElement(style, { className: `heading-${level}`}, props.children)
      }
      
      if (style === 'blockquote') {
        return <blockquote>- {props.children}</blockquote>
      }

      if (style === 'caption') {
        return <caption>{props.children}</caption>
      }
      
      // Fall back to default handling
      return BlockContent.defaultSerializers.types.block(props)
    }
    const serializers = {
      types: {
        block: BlockRenderer,
        code: props => (
          <pre data-language={props.node.language}>
            <code>{props.node.code}</code>
          </pre>
        ),
        file: props => {
          var _ref = props.node.asset._ref
          var splitRef = _ref.split('-')
          var reassembledFilename = splitRef[1] + '.' + splitRef[2]
          var url = 'https://cdn.sanity.io/files/ocpl5ulk/pdp-data/' + reassembledFilename
          var Element = <File src={url}/>
          return Element
        },
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
        console.log("imageKey == null")
        return ''
      }
      else if(!(imageKey in item)){
        console.log("!(imageKey in item)")
        return ''
      }
      else if(!("asset" in item[imageKey])){
        console.log('!("asset" in item[imageKey])')
        return ''
      }
      else {
        return <img id="DocumentImage" src={SanityImageUrl(item[imageKey], {w:800,h:400,fp:findFocalPoint(item[imageKey])})}/>
      }
    }
    return (
      <div id="DocumentContainer">
        { (returnImg(this.props.data) != '') ? <div id="ImageContainer"> {returnImg(this.props.data)} </div> : null }
        <div id="DocumentText">
          <h3>{this.props.data[headlineKey]}</h3>
          <h6 style={{display: (primaryDetailKey != null || typeof primaryDetailKey !== 'undefined' ? 'inline' : 'none')}}>
            <span id="PrimaryDetail">{this.props.data[primaryDetailKey]}</span>
            <span id="DetailDivider" style={{display: ((secondaryDetailKey != null || typeof secondaryDetailKey !== 'undefined') && this.props.data[secondaryDetailKey] != '' ? 'inline' : 'none')}}>|</span>
            <span id="SecondaryDetail">{this.props.data[secondaryDetailKey]}</span>
            <span id="DetailDivider" style={{display: ((tertiaryDetailKey != null || typeof tertiaryDetailKey !== 'undefined') && this.props.data[tertiaryDetailKey] != '' ? 'inline' : 'none')}}>|</span>
            <span id="tertiaryDetail" dangerouslySetInnerHTML={{ __html: this.props.data[tertiaryDetailKey] }}></span>
          </h6>
          <BlockContent id="DocumentDescription" blocks={this.props.data[bodyKey]} serializers={serializers} projectId="ocpl5ulk" dataset="pdp-data" />
        </div>
        <style jsx global>{`
          #body {
          transition: opacity 0.2s;
          }

          #DocumentContainer {
          margin: 0 auto;
          max-width: 60%;
          min-width: 800px;
          min-height: 300px;
          background-color: #222;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          margin-bottom: 50px;
          }
          #DocumentContainer #ImageContainer {
          width: 100%;
          padding-bottom: 50%;
          background-color: #eee;
          position: relative;
          }
          #DocumentContainer #ImageContainer #DocumentImage {
          width: 100%;
          min-width: 50px;
          align-self: center;
          position: absolute;
          }
          #DocumentContainer #DocumentText {
          color: white;
          padding: 30px;
          width: 100%;
          }
          #DocumentContainer #DocumentText div figure {
          text-align: center;
          width: 100%;
          }
          #DocumentContainer #DocumentText div figure img {
          max-width: 100%;
          }
          #DocumentContainer #DocumentText h3 {
          font-weight: 700;
          }
          #DocumentContainer #DocumentText h6 {
          color: #ccc;
          font-weight: 700;
          font-size: 16px;
          }
          #DocumentContainer #DocumentText h6 span {
          margin-right: 10px;
          }
          #DocumentContainer #DocumentText h6 #DetailDivider {
          font-size: 20px;
          font-weight: 500;
          }
          #DocumentContainer #DocumentText h6 #SecondaryDetail {
          color: #f17267;
          }
          #DocumentContainer #DocumentText p {
          padding-top: 5px;
          }
          #DocumentContainer #DocumentText blockquote {
            text-align: center;
            margin: 0 auto;
            font-style: italic;
            font-size: 20px;
            width: calc(100% - 100px);
          }
          #DocumentContainer #DocumentText caption {
            display: block;
            margin-bottom: 20px;
            color: white;
            opacity: 0.6;
            font-style: italic;
            font-size: 15px;
            text-align: center;
          }
          .embed {
            text-align: center;
            margin: 30px auto;
          }
          @media (max-width: 800px) {
          #DocumentContainer {
            width: 100%;
            max-width: auto;
            min-width: 100%;
          }
          }
        `}</style>
      </div>
    )
  }
}

export default Document
