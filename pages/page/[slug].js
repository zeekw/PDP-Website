import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import Sanity from '../../sanity-client.js'
import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js'
import Document from '../../components/Document.js'

class Page extends React.Component {
  state = {
    data: {}
  }
  componentDidMount(){
    var data = this.props.data
    this.setState({data: data})
  }
  render(){
    return(
      <div>
        <title>{this.props.data.title}</title>
        <Header CurrentPage="Page"/>
        <Document data={this.props.data} image={"heroImage"} headline={"title"} body={"body"}/>
        <Footer/>
      </div>
    )
  }
}

Page.getInitialProps = async function(context){
  // Get slug from URL
  var slug = context.query.slug
  // Get page data
  const query = `*[_type == "additionalpage" && slug.current == "${slug}"]`
  var data = await Sanity.fetch(query, {})
  data = data[0]
  return {data: data}
}

export default Page;
