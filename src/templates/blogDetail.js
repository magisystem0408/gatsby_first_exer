import React from 'react';
import {graphql} from "gatsby";
import Layout from "../components/layout";
import {Container} from "react-bootstrap";

export const query = graphql`
    query($slug: String!){
        contentfulBlogPost(slug:{eq:$slug}){
            title
            createdDate
            body{
                raw
            }
            
        }
    }
`

function BlogDetail(props) {
    return (
        <Layout>
            <Container>
                <div>{props.data.contentfulBlogPost.title}</div>
                <p>{props.data.contentfulBlogPost.createdDate}</p>

                    <div>
                        {/*{renderRichText(props.data.contentfulBlogPost.body.raw)}*/}
                    </div>
            </Container>
        </Layout>
    );
}

export default BlogDetail;