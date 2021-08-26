import * as React from "react"

import Layout from "../components/layout"
import Kv from "../components/kv";
import {Col, Container, Row} from "react-bootstrap";
import Blogitem from "../components/blogitem";

const IndexPage = () => (
    <Layout>
        {/*<h1>テストで作っています</h1>*/}
        <Kv/>
        <Container>
            <Row>
                <Col sm={4}>
                    <Blogitem/>
                </Col>
                <Col sm={4}>
                    <Blogitem/>
                </Col>
                <Col sm={4}>
                    <Blogitem/>
                </Col>
                <Col sm={4}>
                    <Blogitem/>
                </Col>


            </Row>
        </Container>
    </Layout>
)

export default IndexPage
