import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import Sanity from '../../sanity-client.js'
import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js'
import DocumentList from '../../components/DocumentList.js'
import { SanityImageUrl, findFocalPoint } from "../../helperFunctions.js"
import "../../styles/project.sass"
import { BlockContent, serializers } from "../../sanity-tools.js"

class Project extends React.Component {
  render(){
    return(
      <div>
        <title>{this.props.project.title}</title>
        <Header CurrentPage="Project"/>
        <div id="project-body">
          <div id="hero">
            <div id="ImageContainer">
              <img src={SanityImageUrl(this.props.project.image, {w: 1500, h: 750})}/>
            </div>
            <div id="ProjectTitle">
              <h1>{this.props.project.title}</h1>
              <div id="Stripe"></div>
            </div>
          </div>
          <div id="project-description">
            <BlockContent blocks={this.props.project.description} serializers={serializers} projectId="ocpl5ulk" dataset="pdp-data"/>
          </div>
          <div id="Related">
            <h1 id="RelatedEventsHeader">{this.props.relatedEvents.length > 0 ? 'Related Events:' : ''}</h1>
            <DocumentList data={this.props.relatedEvents} maxLength={3} image={"image"} headline={"title"} primaryDetail={"readableDate"} secondaryDetail={"readablePrice"} body={"Description"}/>
            <h1 id="RelatedPostsHeader">{this.props.relatedPress.length > 0 ? 'Related Press:' : ''}</h1>
            <DocumentList data={this.props.relatedPress} maxLength={3} image={"heroImage"} headline={"title"} primaryDetail={"readableDate"} secondaryDetail={null} body={"body"}/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

Project.getInitialProps = async function(context){
  // Get slug from URL
  var slug = context.query.slug
  // Get project data
  var query = `*[_type == "project" && slug.current == "${slug}"]`
  var projects = await Sanity.fetch(query, {})
  var project = projects[0]
  // Get related events
  var currentDate = (new Date()).toISOString()
  query = `*[_type == "event" && relatedProjects[]._ref == "${project._id}" && date >= "${currentDate}"]`
  var relatedEvents = await Sanity.fetch(query, {})
  for(var event of relatedEvents){
    event.readableDate = (new Date(event.date)).toLocaleString([], {year:'numeric', month: '2-digit', day:'numeric', hour: '2-digit', minute:'2-digit'})
    event.readablePrice = (event.price == 0) ? '' : ("$" + event.price)
  }
  // Get related press
  query = `*[_type == "pressclip" && relatedProjects[]._ref == "${project._id}"]`
  var relatedPress = await Sanity.fetch(query, {})
  for(var clip of relatedPress){
    clip.readableDate = (new Date(clip.date)).toLocaleString([], {year:'numeric', month: '2-digit', day:'numeric', hour: '2-digit', minute:'2-digit'})
  }
  // Send props
  return {project: project, relatedEvents: relatedEvents, relatedPress: relatedPress}
}

export default Project;
