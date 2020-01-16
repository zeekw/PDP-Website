import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import Sanity from '../../sanity-client.js'
import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js'
import Document from '../../components/Document.js'

class Announcement extends React.Component {
  render(){
    return(
      <div>
        <title>PDP</title>
        <Header CurrentPage="Announcement"/>
        <Document data={this.props.data} image={"heroImage"} headline={"title"} body={"body"}/>
        <Footer/>
      </div>
    )
  }
}

Announcement.getInitialProps = async function(context){
  // Get slug from URL
  var slug = context.query.slug
  // Get event data
  const query = `*[_type == "announcement" && slug.current == "${slug}"]`
  var data = await Sanity.fetch(query, {})
  data = data[0]
  return {data: data}
}

export default Announcement;
