import React from "react"
import Link from "next/link"
import autoBind from 'react-autobind'
import Head from 'next/head'
import { Textfit } from 'react-textfit';
import "../styles/projectList.sass"
import Sanity from '../sanity-client.js'
import { SanityImageUrl } from '../helperFunctions.js'

export default class ProjectList extends React.Component {
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
    var Items = data.slice(0,this.props.limit).map(function(itemData) {
      return (
        <li>
          <Link href={'/project/' + itemData.slug.current}>
            <div className="Project">
              <img src={SanityImageUrl(itemData.image.asset._ref, {w: 1500, h:500, fp: findFocalPoint(itemData.image)})}/>
              <div className="ProjectTitle">
                <h1>{itemData.title}</h1>
                <div className="Stripe"></div>
              </div>
            </div>
          </Link>
        </li>
      )
    }
    )
    return (
      <ul id="ProjectList">
        {Items}
      </ul>
    )
  }
}
