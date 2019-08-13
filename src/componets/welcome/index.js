import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

class Welcome extends React.Component {
    goToStageOne=()=>{
        const {history}=this.props;
        history.push('/my-store')
    }
    render() {
        return (
            <Container>
                <Row className="welcome-page">
                    <Col xs={12} md={{ span: 8, offset: 4 }}>
                       <h1>Welcome to My Fruit Store</h1> 
                    </Col>
                </Row>
                <Button className="welcome-button"onClick={this.goToStageOne}>Enter</Button>
            </Container>
        )
    }
}
export default Welcome;