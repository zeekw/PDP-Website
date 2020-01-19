import React from "react"
import Link from "next/link"
import Head from 'next/head'
import ImageUrlBuilder from '@sanity/image-url'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from "react-bootstrap/Carousel"
import "../styles/carousel.sass"
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
        <Carousel.Item key={itemData.id}>
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
      </div>
    )
  }
}

export default HomeCarousel
