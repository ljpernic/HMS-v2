import React from "react"
import EventHeader from "../components/Event/eventHeader"
import EventsContainer from "../components/Event/eventsContainer"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const Event = ({ data }) => {
  console.log("data", data)
  let HeaderPost = data?.allMarkdownRemark?.edges[0]
  let otherPosts = data?.allMarkdownRemark?.edges.slice(1)

  return (
    <Layout>
      <Seo
        title="Event - Ho Minti Society"
        description="Ho Minti Society is an Indigenous community organization that promotes cultural awareness, service, community organizing, and education in ways that respect traditional knowledge and the breadth of our history and heritage."
      ></Seo>
      <EventHeader post={HeaderPost} />
      <EventsContainer data={otherPosts} />
    </Layout>
  )
}

export default Event

export const WorkPageQuery = graphql`
  query IndexPage {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "event-post" } } }
      limit: 30
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD:MM:YYYY hh:mm a")
            title
            description
            featuredimage {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
