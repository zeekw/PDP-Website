import React from "react"
import Link from "next/link"
import Head from 'next/head'
import ImageUrlBuilder from '@sanity/image-url'
import Carousel from "react-bootstrap/Carousel"
import Sanity from '../sanity-client'
import { SanityImageUrl } from '../helperFunctions.js'

class HomeCarousel extends React.Component {
  render() {
    const props = this.props
    const data = props.data

    var itemsWithImages = []
    for(var item of data){
      if(typeof item.image != "undefined"){
        itemsWithImages.push(item)
      }
    }

    var Items = itemsWithImages.map((itemData) =>
        <Carousel.Item key={itemData._id}>
            <Link href={'/' + itemData._type + '/[slug]'} as={'/' + itemData._type + '/' + itemData.slug.current}>
              <div>
                <img className="d-block w-100" src={SanityImageUrl(itemData.image, {w:"1200", h:"600"})} />
                <div className="CarouselCaption">{itemData.title}</div>
              </div>
            </Link>
        </Carousel.Item>
    )
    return (
      <div id="CarouselContainer">
        <Carousel>
          {Items}
        </Carousel>
        <style jsx global>{`
          #CarouselContainer {
            max-width: 60%;
            min-width: 800px;
            margin: 0 auto;
            margin-bottom: 50px;
            }
            #CarouselContainer .carousel {
            cursor: pointer;
            overflow: hidden;
            }
            #CarouselContainer .carousel .CarouselImage {
            height: 500px;
            background-color: red;
            }
            #CarouselContainer .carousel ol.carousel-indicators {
            display: none !important;
            margin-bottom: -30px;
            }
            #CarouselContainer .carousel ol.carousel-indicators li {
            background-color: black;
            }
            #CarouselContainer .carousel .CarouselCaption {
            color: white;
            font-size: 36px;
            font-weight: 700;
            background-color: rgba(0, 0, 0, 0.7);
            position: absolute;
            bottom: 0px;
            left: 0px;
            margin: 30px;
            padding: 0px 10px;
            border-bottom: solid 5px #f17267;
            max-width: calc(100% - 60px);
            }

            @media (max-width: 600px) {
            .CarouselCaption {
              font-size: 22px !important;
              border-bottom-width: 3px !important;
            }
            }
        `}</style>
      </div>
    )
  }
}

export default HomeCarousel
