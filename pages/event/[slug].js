import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import Sanity from '../../sanity-client.js'
import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js'
import Document from '../../components/Document.js'
import Favicon from 'react-favicon'

class Event extends React.Component {
  state = {
    data: {}
  }
  componentDidMount(){
    var data = this.props.data
    data.readableDate = (new Date(data.date)).toLocaleString([], {year:'numeric', month: '2-digit', day:'numeric', hour: '2-digit', minute:'2-digit'})
    data.readablePrice = (data.price == 0) ? '' : ("$" + data.price)
    data.actionElement = (data.action && data.action.url && data.action.text) ? `<a href="${data.action.url}">${data.action.text}</a>` : ''
    this.setState({data: data})
  }
  render(){
    return(
      <div>
        <title>{this.state.data.title}</title>
        <Favicon url={"../../static/favicon.ico"}/>
        <Header CurrentPage="Event"/>
        <Document data={this.state.data} image={"image"} headline={"title"} primaryDetail={"readableDate"} secondaryDetail={"readablePrice"} tertiaryDetail={"actionElement"} body={"Description"}/>
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
