import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import Sanity from '../../sanity-client.js'
import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js'
import Document from '../../components/Document.js'

// import '../../styles/document.sass'

class Event extends React.Component {
  render(){
    return(
      <div>
        <title>PDP</title>
        <Header CurrentPage="Event"/>
        <Document data={this.props.data} image={"image"} headline={"title"} body={"Description"}/>
        <Footer/>
      </div>
    )
  }
}

Event.getInitialProps = async function(context){
  // Get slug from URL
  var slug = context.query.slug
  // Get event data
  const query = `*[_type == "event" && slug.current == "${slug}"]`
  var data = await Sanity.fetch(query, {})
  data = data[0]
  return {data: data}
}

export default Event;
