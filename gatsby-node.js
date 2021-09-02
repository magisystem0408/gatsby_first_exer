/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require('path')

// markdown生成する時に使用する
// module.exports.onCreateNode = ({node, actions}) => {
//     const {createNodeField} = actions
//
//     if (node.internal.type === 'MarkdownRemark') {
//         // console.log(node)
//         const slug = path.basename(node.fileAbsolutePath, '.md')
//         console.log(slug)
//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }
//
// }


module.exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    const blogTemplate = path.resolve('./src/templates/blogDetail.js')
    const res = await graphql(`
  query{
            allContentfulBlogPost{
                edges{
                    node{
                        slug
                    }
                }
            }
        }
    `)
    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,

            // これは使用する
            context: {
                slug: edge.node.slug
            }
        })
    })
}