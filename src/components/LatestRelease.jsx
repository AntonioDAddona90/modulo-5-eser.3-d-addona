import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Singlecard from 'Singlecard';
import data from './data/data';

class latestrelease extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <Container>
                <Row>
                    <Col className='d-flex flex-wrap gap-3'>
                        {data.map((data) => {
                            return(
                                <Singlecard
                                    key={data.asin}
                                    img={data.img}
                                    title={data.title}
                                    price={data.price}
                                />
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default latestrelease;