import React from "react"
import Link from "next/link"
import autoBind from 'react-autobind'
import Head from 'next/head'
import LinesEllipsis from 'react-lines-ellipsis'
import Truncate from 'react-truncate';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
import { Textfit } from 'react-textfit';
import innerText from 'react-innertext';
// import "../styles/DocumentListStyle.sass"
import Sanity from '../sanity-client.js'
import { SanityImageUrl } from '../helperFunctions.js'

const BlockContent = require('@sanity/block-content-to-react')
const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)

export default class DocumentList extends React.Component {
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
    var data = this.state.data
    if("maxLength" in this.props){
      data = data.slice(0,3)
    }
    var headlineKey = this.props.headline
    var imageKey = this.props.image
    var primaryDetailKey = this.props.primaryDetail
    var secondaryDetailKey = this.props.secondaryDetail
    var bodyKey = this.props.body
    const serializers = {
      types: {
        code: props => (
          <pre data-language={props.node.language}>
            <code>{props.node.code}</code>
          </pre>
        ),
        file: props => (
          <div></div>
        ),
        embed: props => (
          <div></div>
        )
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
        return <img className="DocumentListItemImage" src={SanityImageUrl(item[imageKey], {w:730,h:730})}/>
      }
    }

    var Items = data.slice(0,this.props.limit).map(function(itemData) {
      return <Link key={itemData._id} href={"/" + itemData._type + "/[slug]"} as={"/" + itemData._type + "/" + itemData.slug.current}>
              <li className="DocumentListItem" key={itemData._id}>
                <div className="DocumentListItemBody">
                  { returnImg(itemData) }
                  <div className="DocumentListItemText">
                    <Textfit max={32} mode="single" className="DocumentListItemName">{itemData[headlineKey]}</Textfit>
                    <h2 className="DocumentListItemName-Mobile">{itemData[headlineKey]}</h2>
                    <Textfit max={14} mode="single" className="DocumentListItemInfo">
                      <span className="DocumentListItemDate">{itemData[primaryDetailKey]}</span>&nbsp;
                      <span className="DocumentListItemInfoDivider" style={{opacity: (secondaryDetailKey == null || itemData[secondaryDetailKey] == '') ? '0' : '1'}}> | </span>
                      <span className="DocumentListItemPrice" style={{display: (itemData[secondaryDetailKey] == '') ? 'none' : 'inline'}}>{itemData[secondaryDetailKey]}</span>
                    </Textfit>
                    <Truncate lines={4} ellipsis={"..."} className="DocumentListItemDescription">
                      <BlockContent blocks={itemData[bodyKey]} serializers={serializers} projectId="ocpl5ulk" dataset="pdp-data"></BlockContent>
                    </Truncate>
                  </div>
                </div>
              </li>
            </Link>
    }
    )
    return (
      <ul id="DocumentList">
        {Items}
        <style jsx global>{`
          #DocumentList {
          list-style: none;
          padding-left: 0px;
          }
          #DocumentList .DocumentListItem {
          margin: 25px 0px;
          cursor: pointer;
          }
          #DocumentList .DocumentListItem .DocumentListItemBody {
          width: 100%;
          max-height: 250px;
          background-color: white;
          box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.1);
          padding: 20px;
          overflow: hidden;
          }
          #DocumentList .DocumentListItem .DocumentListItemBody .DocumentListItemImage {
          height: 100%;
          width: 210px;
          float: left;
          }
          #DocumentList .DocumentListItem .DocumentListItemBody .DocumentListItemText {
          float: left;
          padding-left: 25px;
          width: calc(100% - 215px);
          color: black;
          }
          #DocumentList .DocumentListItem .DocumentListItemBody .DocumentListItemText .DocumentListItemName {
          font-weight: 700;
          color: black;
          }
          #DocumentList .DocumentListItem .DocumentListItemBody .DocumentListItemText .DocumentListItemName-Mobile {
          display: none;
          }
          #DocumentList .DocumentListItem .DocumentListItemBody .DocumentListItemText .DocumentListItemInfo {
          text-transform: uppercase;
          font-weight: 700;
          color: #777;
          font-size: 14px;
          padding-left: 2px;
          margin-top: -10px;
          }
          #DocumentList .DocumentListItem .DocumentListItemBody .DocumentListItemText .DocumentListItemInfo .DocumentListItemInfoDivider {
          font-size: 20px;
          font-weight: 300;
          }
          #DocumentList .DocumentListItem .DocumentListItemBody .DocumentListItemText .DocumentListItemInfo .DocumentListItemPrice {
          color: #f17267;
          }
          #DocumentList .DocumentListItem .DocumentListItemBody .DocumentListItemText .DocumentListItemDescription {
          font-size: 14px;
          max-height: 147px;
          overflow: hidden;
          }
          #DocumentList .DocumentListItem .DocumentListItemBody .DocumentListItemText .DocumentListItemDescription br {
          content: " ";
          }
          #DocumentList .DocumentListItem .DocumentListItemBody .DocumentListItemText .DocumentListItemDescription br:after {
          content: " ";
          }

          @media (max-width: 800px) {
          .DocumentListItemName {
            display: none;
          }

          .DocumentListItemName-Mobile {
            display: block !important;
            margin-top: 10px;
            font-weight: 700;
          }

          .DocumentListItem .DocumentListItemBody {
            width: 100%;
            max-height: none !important;
          }
          .DocumentListItem .DocumentListItemBody .DocumentListItemImage {
            float: none !important;
            width: 100% !important;
          }
          .DocumentListItem .DocumentListItemBody .DocumentListItemText {
            float: none !important;
            width: 100% !important;
            padding-left: 0px !important;
          }
          .DocumentListItem .DocumentListItemBody .DocumentListItemText .DocumentListItemDescription {
            padding-left: 3px;
            margin-bottom: 0px !important;
          }
          }
        `}</style>
      </ul>
    )
  }
}
