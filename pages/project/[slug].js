import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import Sanity from '../../sanity-client.js'
import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js'
import DocumentList from '../../components/DocumentList.js'
import { SanityImageUrl, findFocalPoint } from "../../helperFunctions.js"
// import "../../styles/project.sass"
import { BlockContent } from "../../sanity-tools.js"
import Favicon from 'react-favicon'
import File from "../../components/File.js"

class Project extends React.Component {
  render(){
    var serializers = {
      types: {
        code: props => (
          <pre data-language={props.node.language}>
            <code>{props.node.code}</code>
          </pre>
        ),
        file: props => {
          var _ref = props.node.asset._ref
          var splitRef = _ref.split('-')
          var reassembledFilename = splitRef[1] + '.' + splitRef[2]
          var url = 'https://cdn.sanity.io/files/ocpl5ulk/pdp-data/' + reassembledFilename
          var Element = <File src={url}/>
          return Element
        },
        embed: props => (
          <div className="embed" dangerouslySetInnerHTML={{__html:
        props.node.code}}></div>
        )
      }
    }
    return(
      <div>
        <title>{this.props.project.title}</title>
        <Favicon url={"../../static/favicon.ico"}/>
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
        <style jsx global>{`
          #body {
            transition: opacity 0.2s;
          }

          #project-body {
            width: 100%;
            max-width: 920px;
            margin: 0 auto;
          }

          #project-body #hero {
            position: relative;
          }

          #project-body #hero #ImageContainer {
            width: 100%;
            padding-bottom: 50%;
            background-color: #eee;
          }

          #project-body #hero #ImageContainer img {
            width: 100%;
            position: absolute;
          }

          #project-body #hero #ProjectTitle {
            background-color: #00000099;
            position: absolute;
            bottom: 20px;
            left: 20px;
            border-bottom: solid 5px #f17267;
            padding: 0px 10px;
            padding-top: 10px;
            padding-bottom: 5px;
          }

          #project-body #hero #ProjectTitle h1 {
            color: white;
            font-weight: 700;
            line-height: 35px;
          }

          #project-body #project-description {
            padding: 30px 0px;
          }

          #project-body #project-description figure {
            width: 100%;
            // height: 450px;
            max-height: 80vh;
            min-height: 200px;
          }

          #project-body #project-description figure img {
            max-width: 100%;
            max-height: inherit;
            min-height: inherit;
            display: block;
            margin: 0 auto;
          }

          #project-body #project-description .embed {
            text-align: center;
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
            max-width: 100%;
            height: auto;
            margin: 30px;
          }

          #project-body #project-description .embed iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }

          #project-body #Related {
            padding: 0px 30px;
          }

          #project-body #Related #RelatedEventsHeader, #project-body #Related #RelatedPostsHeader {
            font-weight: 700;
            margin-bottom: 20px;
          }

          @media (max-width: 375px) {
            #ProjectTitle {
                width: 100%;
                max-width: none !important;
                height: 100%;
                bottom: 0px !important;
                left: 0px !important;
            }
            #ProjectTitle h1 {
                line-height: 40px !important;
            }
          }

          @media (max-width: 920px) {
            #project-description {
                padding: 30px 20px !important;
            }
          }

          @media (max-width: 800px) {
            #Related {
                width: calc(100% - 30px);
                min-width: auto;
                margin: 15px;
                padding: 0px !important;
            }
            #Related .UpcomingListItem .UpcomingListItemBody {
                width: 100%;
                max-height: none !important;
            }
            #Related .UpcomingListItem .UpcomingListItemBody .UpcomingListItemImage {
                float: none !important;
                width: 100% !important;
            }
            #Related .UpcomingListItem .UpcomingListItemBody .UpcomingListItemText {
                float: none !important;
                width: 100% !important;
                padding-left: 0px !important;
            }
            #Related .UpcomingListItem .UpcomingListItemBody .UpcomingListItemText .UpcomingListItemName-Mobile {
                font-weight: 700;
                margin: 10px 0px;
            }
            #Related .UpcomingListItem .UpcomingListItemBody .UpcomingListItemText .UpcomingListItemDescription {
                padding-left: 3px;
                margin-bottom: 0px !important;
            }
          }

        `}</style>
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
