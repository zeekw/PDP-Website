import React from 'react'
import Link from 'next/link'
import Sanity from '../sanity-client.js'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import ProjectList from '../components/ProjectList.js'
import Favicon from 'react-favicon'

// import '../styles/projects.sass'

const getData = async function(){
  // Get projects to display on page
  const query = '*[_type == "project"] | order(order asc, title asc)'
  var data = await Sanity.fetch(query, {})
  return {data: data}
}

class Projects extends React.Component {
  render(){
    return(
      <div>
        <title>PDP - Projects</title>
        <Favicon url={"../static/favicon.ico"}/>
        <Header CurrentPage="Projects"/>
        <div id="ProjectsDescription">
          <p>
             Philadelphia Dance Projects supports contemporary dance through projects that encourage artists and audiences to more fully participate and engage in the experience and pursuit of dance as an evolving form. PDP achieves its mission by presenting stimulating performances, workshops, classes, a film series, and dialogs and forums for artists, aspiring artists, students and a broad-based audience. PDP constantly surveys the contemporary dance world, keeping a close eye on current trends in content and style, while actively engaging in and appreciating the depth of work being created today which plumbs dance precursors’ traditions.
          </p>
        </div>
        <ProjectList data={this.props.data}/>
        <Footer/>
        <style jsx>{`
          #ProjectsDescription {
            background-color: #eee;
            width: 100%;
            max-width: 920px;
            margin: 30px auto;
            color: #333;
            text-align: center;
            padding: 20px 15px;
            padding-bottom: 3px;
          }
          #ProjectsDescription p {
            line-height: 22px;
            font-weight: 400;
            font-size: 18px;
          }
      `}</style>
      </div>
    )
  }
}

Projects.getInitialProps = getData

export default Projects;
