import * as React from "react"
import {graphql, useStaticQuery} from "gatsby";
import Layout from "../components/layout"
import Kv from "../components/kv";
import {Col, Container, Row} from "react-bootstrap";
import Blogitem from "../components/blogitem";

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query{
            allContentfulBlogPost(sort:{
                fields:createdDate,
                order:DESC
            }){
                edges{
                    node{
                        title
                        slug
                        createdDate(formatString:"YYYY/MM/DD")
                        thumbnail{
                            fluid{
                                src
                            }
                        }
                    }
                }
            }
        }
    `)
    console.log(data)
    return (
        <Layout>
            <h1>テストで作っています</h1>
            <Kv/>
            <Container>
                <Row>
                    {
                        data.allContentfulBlogPost.edges.map((edge, index) => (
                            <Col sm={4} key={index}>
                                <Blogitem
                                    title={edge.node.title}
                                    date={edge.node.createDate}
                                    src={edge.node.thumbnail.fluid.src}
                                    link={`/blog/${edge.node.slug}`}
                                />
                            </Col>

                        ))
                    }

                </Row>

            </Container>
        </Layout>)
}


export default IndexPage
