import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import Sanity from '../../sanity-client.js'
import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js'
import Document from '../../components/Document.js'
import Favicon from 'react-favicon'

class Post extends React.Component {
  state = {
    data: {}
  }
  componentDidMount(){
    var data = this.props.data
    data.readableDate = (new Date(data._createdAt)).toLocaleString([], {year:'numeric', month: '2-digit', day:'numeric', hour: '2-digit', minute:'2-digit'})
    this.setState({data: data})
  }
  render(){
    return(
      <div>
        <title>{this.props.data.title}</title>
        <Favicon url={"../../static/favicon.ico"}/>
        <Header CurrentPage="Post"/>
        <Document data={this.props.data} image={"image"} headline={"title"} body={"body"} primaryDetail={"readableDate"}/>
        <Footer/>
      </div>
    )
  }
}

Post.getInitialProps = async function(context){
  // Get slug from URL
  var slug = context.query.slug
  // Get event data
  const query = `*[_type == "news" && slug.current == "${slug}"]`
  var data = await Sanity.fetch(query, {})
  data = data[0]
  return {data: data}
}

export default Post;
