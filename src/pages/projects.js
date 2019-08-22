import React from "react"
import { Link } from "gatsby"

import "../styles/projects.sass"

import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

class Projects extends React.Component {

  ImageRefToUrl(_ref, size, hotspot){
    if(typeof _ref !== 'undefined'){
      var splitRef = _ref.split('-')
      var reassembledFilename = splitRef[1] + '-' + splitRef[2] + '.' + splitRef[3]
      var focalpointValues = function(){
        if(hotspot != null){
          return '&fp-x=' + hotspot.x + '&fp-y=' + hotspot.y
        }
        else {
          return ''
        }
      }
      var url = 'https://cdn.sanity.io/images/ocpl5ulk/pdp-data/' + reassembledFilename + '?w=' + size[0] + '&h=' + size[1] + '&fit=crop&crop=focalpoint&quality=70' + focalpointValues()
      return url
    } else {
      return ''
    }
  }

  SortProjects(raw){
    var sorted = []
    var prioritized = []
    var nonPrioritized = []
    for(var i=0; i<raw.length; i++){
      if(raw[i].node.order > 0){
        prioritized.push(raw[i])
      }
      else {
        nonPrioritized.push(raw[i])
      }
    }
    nonPrioritized.sort(function(a, b) {
      return Date.parse(b.node._updatedAt) - Date.parse(a.node._updatedAt)
    })
    sorted = nonPrioritized
    for(var i=0; i<prioritized.length; i++){
      sorted.splice((prioritized[i].node.order - 1), 0, prioritized[i])
    }
    return sorted
  }

  render() {
    var SortedProjects = this.SortProjects(this.props.data.allSanityProject.edges)
    console.log(SortedProjects)
    var Projects = SortedProjects.map((itemData) =>
      <Link to={'/project?' + itemData.node.slug.current}>
        <li>
          <div className="Project">
            <img src={this.ImageRefToUrl(itemData.node.image.asset._id, [1500, 500], itemData.node.image.hotspot)}/>
            <div className="ProjectTitle">
              <h1>{itemData.node.title}</h1>
              <div className="Stripe"></div>
            </div>
          </div>
        </li>
      </Link>
    )
    return (
      <div id="body">
        <title>PDP - Projects</title>
        <Header CurrentPage="Projects"/>
        <div id="ProjectsDescription">
          <p>
             Philadelphia Dance Projects supports contemporary dance through projects that encourage artists and audiences to more fully participate and engage in the experience and pursuit of dance as an evolving form. PDP achieves its mission by presenting stimulating performances, workshops, classes, a film series, and dialogs and forums for artists, aspiring artists, students and a broad-based audience. PDP constantly surveys the contemporary dance world, keeping a close eye on current trends in content and style, while actively engaging in and appreciating the depth of work being created today which plumbs dance precursors’ traditions.
          </p>
        </div>
        <div id="Projects">
          <ul>
            {Projects}
          </ul>
        </div>
        <Footer/>
      </div>
    )
  }
}

export const query = graphql`{
  allSanityProject {
    edges {
      node {
        title
        _id
        _updatedAt
        order
        slug {
          current
        }
        image {
          _key
          _type
          asset {
            _id
          }
          hotspot {
            x
            y
          }
        }
      }
    }
  }
}`

export default Projects
