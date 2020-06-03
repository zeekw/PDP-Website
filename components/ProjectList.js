import React from "react"
import Link from "next/link"
import autoBind from 'react-autobind'
import Head from 'next/head'
import { Textfit } from 'react-textfit';
// import "../styles/projectList.sass"
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
        <li key={itemData._id}>
          <Link href={'/project/' + itemData.slug.current}>
            <div className="Project">
              <img src={SanityImageUrl(itemData.image, {w: 1500, h:500})}/>
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
          <style jsx global>{`
            #ProjectList {
              width: 100%;
              max-width: 920px;
              margin: 0 auto;
              list-style: none;
              padding-left: 0px;
            }
            #ProjectList li {
              margin: 40px 0px;
            }
            #ProjectList li .Project {
              width: 100%;
              position: relative;
              cursor: pointer;
              overflow: hidden;
            }
            #ProjectList li .Project img {
              width: 100%;
              display: block;
              transform: scale(1);
              transition: all 3s;
            }
            #ProjectList li .Project img:hover {
              transform: scale(1.02);
            }
            #ProjectList li .Project .ProjectTitle {
              background-color: #00000099;
              position: absolute;
              bottom: 20px;
              left: 20px;
              border-bottom: solid 5px #f17267;
              padding: 0px 10px;
              padding-top: 10px;
              padding-bottom: 5px;
              max-width: 80%;
            }
            #ProjectList li .Project .ProjectTitle h1 {
              color: white;
              font-weight: 600;
              line-height: 35px;
            }

            @media (max-width: 375px) {
              .ProjectTitle {
                width: 100%;
                max-width: none !important;
                height: 100%;
                bottom: 0px !important;
                left: 0px !important;
              }
              .ProjectTitle h1 {
                line-height: 35px !important;
                font-size: 30px
              }
            }
        `}</style>
        </ul>
    )
  }
}
