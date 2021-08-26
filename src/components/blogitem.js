import React from 'react';
import {Card} from "react-bootstrap";
import sampleImage from '../images/image_002.jpg'
import {Link} from "gatsby";

function Blogitem(props) {
    return (
        <div>
            <Card className="mt-4">
                <Card.Img variant="top" src={sampleImage} />
                <Card.Body>
                    <Card.Title>ブログタイトル</Card.Title>
                    <Card.Text>
                        2020/04/11
                    </Card.Text>
                    <Link to=''>see more</Link>

                </Card.Body>
            </Card>

        </div>
    );
}

export default Blogitem;