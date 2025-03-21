const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // const eventPost = path.resolve(`./src/templates/event-post.js`)
  return graphql(
    `
    {
      allMarkdownRemark(limit: 1000, sort: {frontmatter: {date: DESC}}) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              title
              date(formatString: "DD:MM:YYYY hh:mm")

            }
          }
        }
      }
    }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }
    const posts = result.data.allMarkdownRemark.edges
    // Template For event-post
    const eventPost = posts.filter(item => item.node.frontmatter.templateKey === 'event-post')
    eventPost.forEach((post, index) => {
      const previous = index === eventPost.length - 1 ? null : eventPost[index + 1].node
      const next = index === 0 ? null : eventPost[index - 1].node

      createPage({
        // path: post.node.fields.slug.split('/').slice(2, -1).join('/') === '' ? '/' : `/${post.node.fields.slug.split('/').slice(2, -1).join('/')}`,
        path: post.node.fields.slug,
        component: path.resolve(
          `src/templates/event-post.js`
        ),
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })
  
    return null
  })
}
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}