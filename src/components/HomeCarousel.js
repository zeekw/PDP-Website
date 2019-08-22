import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from "react-bootstrap/Carousel"

import "../styles/carouselstyle.sass"

import imageUrlBuilder from '@sanity/image-url'

const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'ocpl5ulk',
  dataset: 'pdp-data',
  token: process.env.SANITY_TOKEN, // or leave blank to be anonymous user
  useCdn: true // `false` if you want to ensure fresh data
})

const UrlBuilder = imageUrlBuilder(client)

class HomeCarousel extends React.Component {
  render() {
    const props = this.props
    const data = props.data
    for(var i=0; i<data.length; i++){
      if(data[i].image == null){
        data[i].image = data[i].heroImage
      }
    }
    var Items = data.map((itemData) =>
      <Carousel.Item key={itemData.id}>
        <Link to={'/' + itemData._type + '?' + itemData.slug.current}>
          <img className="d-block w-100" src={UrlBuilder.image(itemData.image).width(1200).height(600).fit('crop').quality(70)} />
          <div className="CarouselCaption">{itemData.title}</div>
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
