import React from "react"
import { Link, graphql } from "gatsby"
import autoBind from 'react-autobind'

import LinesEllipsis from 'react-lines-ellipsis'
import Truncate from 'react-truncate';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
import { Textfit } from 'react-textfit';
import innerText from 'react-innertext';
import Img from 'gatsby-image'

import "../styles/UpcomingListStyle.sass"

import imageUrlBuilder from '@sanity/image-url'

const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'ocpl5ulk',
  dataset: 'pdp-data',
  token: process.env.SANITY_TOKEN, // or leave blank to be anonymous user
  useCdn: true // `false` if you want to ensure fresh data
})

const BlockContent = require('@sanity/block-content-to-react')

const UrlBuilder = imageUrlBuilder(client)

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)

class UpcomingList extends React.Component {
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
    const serializers = {
      types: {
        code: props => (
          <pre data-language={props.node.language}>
            <code>{props.node.code}</code>
          </pre>
        )
      }
    }
    var data = this.state.data
    var path = 'event'
    if(typeof this.props.overridePath !== 'undefined'){
      path = this.props.overridePath
    }
    var image = 'image'
    if(typeof this.props.overrideImage == 'string'){
      image = this.props.overrideImage
    }

    var Items = data.slice(0,this.props.limit).map(function(itemData) {
      console.log(itemData[image].asset)
      return <Link to={"/" + path + "?" + itemData.slug.current}>
              <li className="UpcomingListItem" key={itemData._id}>
                <div className="UpcomingListItemBody">
                  <Img className="UpcomingListItemImage" fluid={itemData[image].asset.fluid} />
                  <div className="UpcomingListItemText">
                    <Textfit max={32} mode="single" className="UpcomingListItemName">{itemData.title}</Textfit>
                    <h2 className="UpcomingListItemName-Mobile">{itemData.title}</h2>
                    <Textfit max={14} mode="single" className="UpcomingListItemInfo">
                      <span className="UpcomingListItemDate">{(new Date(itemData.date)).toLocaleString([], {year:'numeric', month: '2-digit', day:'numeric', hour: '2-digit', minute:'2-digit'})}</span>&nbsp;
                      <span className="UpcomingListItemInfoDivider" style={{opacity: (itemData.price == 'FREE' || itemData.price == '0') ? '0' : '1'}}> | </span>
                      <span className="UpcomingListItemPrice" style={{display: (itemData.price == 'FREE' || itemData.price == '0') ? 'none' : 'inline'}}>{'$' + itemData.price}</span>
                    </Textfit>
                    <Truncate lines={3} ellipsis={"..."} className="UpcomingListItemDescription">
                      <BlockContent blocks={itemData._rawDescription} serializers={serializers} projectId="ocpl5ulk" dataset="pdp-data"></BlockContent>
                    </Truncate>
                  </div>
                </div>
              </li>
            </Link>
    }
    )
    return (
      <ul id="UpcomingList">
        {Items}
      </ul>
    )
  }
}

export default UpcomingList
