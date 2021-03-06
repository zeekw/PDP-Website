import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import Sanity from '../../sanity-client.js'
import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js'
import Document from '../../components/Document.js'
import Favicon from 'react-favicon'

class PressClip extends React.Component {
  state = {
    data: {}
  }
  componentDidMount(){
    var data = this.props.data
    data.readableDate = (new Date(data.date)).toLocaleString([], {year:'numeric', month: '2-digit', day:'numeric'})
    this.setState({data: data})
  }
  render(){
    return(
      <div>
        <title>{this.props.data.title}</title>
        <Favicon url={"../../static/favicon.ico"}/>
        <Header CurrentPage="Press Clip"/>
        <Document data={this.props.data} image={"image"} headline={"title"} body={"body"} primaryDetail={"primaryDetail"} tertiaryDetail={"tertiaryDetail"}/>
        <Footer/>
      </div>
    )
  }
}

PressClip.getInitialProps = async function(context){
  // Get slug from URL
  var slug = context.query.slug
  // Get event data
  const query = `*[_type == "pressclip" && slug.current == "${slug}"]{ "primaryDetail": author + " for " + organization + " - " + date, ... }`
  var data = await Sanity.fetch(query, {})
  data = data[0]
  // Construct secondaryDetail
  if(typeof data.articleURL !== "undefined"){
    data.tertiaryDetail = `<a href="${data.articleURL}">Read it on ${data.organization} here</a>`
  }
  else {
    data.tertiaryDetail = ''
  }
  return {data: data}
}

export default PressClip;
