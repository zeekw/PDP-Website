import React from "react"
// import Link from 'next/link'
// import Sanity from "../sanity-client.js"
// import Favicon from 'react-favicon'

// import Header from "../components/Header.js"
// import Footer from "../components/Footer.js"
// const BlockContent = require('@sanity/block-content-to-react')
import Router from 'next/router'

class About extends React.Component {
    componentDidMount(){
        const {pathname} = Router
        Router.push('/#about')
    }
  render() {
      return null
//     var BoardMembers = this.props.boardMembers.map((itemData) => (
//       <li>{
//         itemData.hasOwnProperty("url") && itemData.url != "" ?
//         <a href={itemData.url}>
//           {(itemData.firstName + " " + itemData.lastName + ((typeof itemData.role !== "undefined" && itemData.role != "") ? (", " + itemData.role) : ("")))}
//         </a>
//         :
//         (itemData.firstName + " " + itemData.lastName + ((typeof itemData.role !== "undefined" && itemData.role != "") ? (", " + itemData.role) : ("")))
//       }</li>
//     ))
//     return (
//       <div id="body">
//         <title>PDP - About Us</title>
//         <Favicon url={"../static/favicon.ico"}/>
//         <Header CurrentPage="About"/>
//         {this.props.aboutBlockContent == null ? "" :
//           <div id="MissionContainer">
//             <div id="MissionStatement">
//               <BlockContent id="BlockContent" blocks={this.props.aboutBlockContent.body} projectId="ocpl5ulk" dataset="pdp-data" />
//             </div>
//           </div>
//         }
//         <div id="BoardMembers">
//           <h3>Board of Directors</h3>
//           <ul>
//             {BoardMembers}
//           </ul>
//         </div>
//         <Footer/>
//         <style jsx global>{`
//           * {
//             -webkit-font-smoothing: antialiased !important;
//           }

//           #MissionContainer {
//             max-width: 100%;
//             width: 800px;
//             margin: 0 auto;
//           }

//           #MissionContainer #MissionStatement {
//             background-color: #eee;
//             width: 100%;
//             max-width: 920px;
//             margin: 30px auto;
//             color: #333;
//             text-align: center;
//             padding: 20px 15px;
//             padding-bottom: 3px;
//           }

//           #MissionStatement img {
//             max-width: 100%;
//           }

//           #BoardMembers {
//             padding: 20px;
//           }

//           #BoardMembers h3 {
//             text-align: center;
//             font-weight: 700;
//             font-size: 24px;
//           }

//           #BoardMembers ul {
//             list-style: none;
//             text-align: center;
//             padding-left: 0px;
//           }

//           #BoardMembers ul li {
//             font-size: 22px;
//             font-weight: 400;
//             line-height: 32px;
//           }

//         `}</style>
//       </div>
//     )
  }
}

// About.getInitialProps = async function(context){
//   // Get BoardMembers
//   var query = `*[_type == "boardmember"] | order(order asc, lastName asc)`
//   var boardMembers = await Sanity.fetch(query, {})

//   // Get Block Content
//   var query = `*[_type == "aboutpage"][0] | order(_updatedAt desc)`
//   var blockContent = await Sanity.fetch(query, {})

//   return {boardMembers: boardMembers, aboutBlockContent: blockContent}
// }

export default About
