import React from "react"
import Link from "next/link"
import autoBind from 'react-autobind'
import Head from 'next/head'
import LinesEllipsis from 'react-lines-ellipsis'
import Truncate from 'react-truncate';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
import { Textfit } from 'react-textfit';
import innerText from 'react-innertext';
import "../styles/DocumentListStyle.sass"
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
        var assetID = item[imageKey].asset._ref
        return <img class="DocumentListItemImage" src={SanityImageUrl(assetID, {w:730,h:730})}/>
      }
    }

    var Items = data.slice(0,this.props.limit).map(function(itemData) {
      return <Link href={"/" + itemData._type + "/[slug]"} as={"/" + itemData._type + "/" + itemData.slug.current}>
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
                    <Truncate lines={3} ellipsis={"..."} className="DocumentListItemDescription">
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
      </ul>
    )
  }
}
