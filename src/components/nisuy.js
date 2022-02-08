import React from 'react';
import { Tab,Row,Col,Nav } from 'react-bootstrap';

export default function SideBar(props) {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">דואר נכנס</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">דואר יוצא</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                        <p>2222222222222</p>  

                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <p>111111111111</p>  
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
};