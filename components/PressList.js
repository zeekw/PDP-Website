import React from "react"
import Link from "next/link"
import Truncate from 'react-truncate';
import { Textfit } from 'react-textfit';
import { SanityImageUrl } from '../helperFunctions.js'

export default class PressList extends React.Component {
  constructor(){
    super()
  }

  render() {
    var data = this.props.data
    console.log(data)

    var Items = data.slice(0,this.props.limit).map(function(itemData) {
      return <Link key={itemData._id} href={"/" + itemData._type + "/[slug]"} as={"/" + itemData._type + "/" + itemData.slug.current}>
              <li className="PressListItem">
                <div className="PressClipThumbnail" style={{background: `url(${SanityImageUrl(itemData.image, {w: 1500, h:500, blur:50})})`}}>
                  <div className="ClipTitle">
                    <h1>{itemData.title}</h1>
                    <h3>{itemData.primaryDetail}</h3>
                    <div className="Stripe"></div>
                  </div>
                </div>
              </li>
            </Link>
    }
    )
    return (
      <ul id="PressList">
        {Items}
        <style jsx global>{`
            #PressList {
              width: 100%;
              max-width: 920px;
              margin: 0 auto;
              list-style: none;
              padding-left: 0px;
            }
            #PressList li {
              margin: 40px 0px;
            }
            #PressList li .PressClipThumbnail {
              width: 100%;
              position: relative;
              cursor: pointer;
              overflow: hidden;
            }
            #PressList li .PressClipThumbnail .ClipTitle {
              background-color: #00000099;
              height: 100%;
              width: 100%;
              border-bottom: solid 5px #f17267;
              padding: 30px;
            }
            #PressList li .PressClipThumbnail .ClipTitle h1 {
              color: white;
              font-weight: 700;
              line-height: 40px;
            }
            #PressList li .PressClipThumbnail .ClipTitle h3 {
              font-size: 14px;
              color: #ccc;
              margin-bottom: 5px;
              margin-top: 10px;
            }
            @media (max-width: 375px) {
              .ClipTitle {
                width: 100%;
                max-width: none !important;
                height: 100%;
                bottom: 0px !important;
                left: 0px !important;
              }
              .ClipTitle h1 {
                line-height: 35px !important;
                font-size: 30px
              }
            }
        `}</style>
      </ul>
    )
  }
}
