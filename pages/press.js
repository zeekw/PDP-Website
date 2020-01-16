import React from 'react'
import Sanity from '../sanity-client.js'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Document from '../components/Document.js'
import autoBind from 'react-autobind';
import BottomScrollListener from 'react-bottom-scroll-listener';

class Press extends React.Component {
  constructor() {
    super();
    autoBind(this);
  }

  state = {
    clips: []
  }
  componentDidMount(){
    this.setState({clips: this.props.data})
  }
  async getNextPage(){
    var startIndex = this.state.clips.length
    var endIndex = startIndex + this.props.pageIncrement
    var query = `*[_type == "pressclip"] | order(date desc) [${startIndex}...${endIndex}]`
    var newData = await Sanity.fetch(query, {})
    var oldData = this.state.clips
    this.setState({clips:oldData.concat(newData)})
  }
  render(){
    var clips = this.state.clips.map(itemData => (
      <Document data={itemData} image={"heroImage"} headline={"title"} body={"body"}/>
    ))
    return(
      <div>
        <title>PDP</title>
        <Header CurrentPage="Event"/>
        {clips}
        <BottomScrollListener onBottom={this.getNextPage}/>
        <Footer/>
      </div>
    )
  }
}

Press.getInitialProps = async function(context){
  // Get event data
  const pageIncrement = 2
  var query = `*[_type == "pressclip"] | order(date desc) [0...${pageIncrement}]`
  var data = await Sanity.fetch(query, {})
  return {data: data, pageIncrement: pageIncrement}
}

export default Press;
