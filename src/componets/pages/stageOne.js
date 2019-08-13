import React from 'react';
import { Button, Container, Row, Col, Form ,DropdownButton,Dropdown} from 'react-bootstrap';

class StageOne extends React.Component {
    handleSubmit =(event)=>{
        event.preventDefault();
        let {selectedValue,addedBy,addedDate,fruitDescription}=this.props;
        let newobj ={
            selectedValue:selectedValue,
            addedBy:addedBy,
            dateAdded:addedDate,
            fruitDescription:fruitDescription
        }
        this.props.handlestageOne(newobj);
    }
    render() {
        const {dropDownData,selectedValue,addedBy,handeInputChange,handleSelect}=this.props;
        let selected;
        let defaultselectedFruit = 'select fruit name';
        if(selectedValue){
            selected=selectedValue
        }else {
            selected =defaultselectedFruit
        }

        return (
                <Row className="spacing">
                    <Col md={4} className="left-section">
                    <label>Fruit Name</label>
                    <Dropdown>
                    <Dropdown.Toggle className="dropdown-button" id="dropdown-basic">
                       {selected}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-main">
                    {dropDownData  && dropDownData.map(item =>{
                                return (<Dropdown.Item 
                                    className="dropdown-items"
                                    key={item}
                                    active={selected === item }
                                    onClick={() => handleSelect(item)}
                                    >{item}</Dropdown.Item>)
                            })}
                    </Dropdown.Menu>
                    </Dropdown>
                    <hr/>
                    <Form.Group >
                    <Form.Label>Fruit Description</Form.Label>
                    <Form.Control as="textarea" rows="3" name="fruitDescription" onChange={(event) => handeInputChange(event)}/>
                </Form.Group>
                    </Col>
                    <Col className="right-section" md={{span:6 ,offset:2}}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group as={Row} controlId="formHorizontalselectedFruit">
                                <Form.Label column sm={4} md={3} >
                                    Selected Fruit
                                    </Form.Label>
                                <Col sm={8} md={8} className="custom-input">
                                    <Form.Control type="text" placeholder="selected Fruit shown here" disabled value={selectedValue} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontaladdedby">
                                <Form.Label column sm={4} md={3}>
                                    Added By
                                 </Form.Label>
                                <Col sm={8} md={8} className="custom-input">
                                    <Form.Control 
                                    type="text" 
                                    name="addedBy"
                                    placeholder="here you enter name" 
                                    value={addedBy}  
                                    autoComplete="off" 
                                    onChange={(event) => handeInputChange(event)}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                <Form.Label column sm={4} md={3} >
                                    Date Added
                                 </Form.Label>
                                <Col xs={8} md={8} lg={8} className="custom-input">
                                    <Form.Control type="date" onChange={(event) => handeInputChange(event)} name="addedDate"/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Col xs ={12}sm={12} md={{ span: 3, offset: 8 }} lg={{span: 3, offset: 9 }}>
                                    <Button className="submit-button" type="submit">submit</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
        )
    }
}
export default StageOne;