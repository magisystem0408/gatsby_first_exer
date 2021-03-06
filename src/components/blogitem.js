import React from 'react';
import {Card} from "react-bootstrap";
import {Link} from "gatsby";

function Blogitem({title, date, src, link}) {
    return (
        <div>
            <Card className="mt-4">
                <Card.Img variant="top" src={src}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {date}
                    </Card.Text>
                    <Link to={`${link}`}>see more</Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Blogitem;