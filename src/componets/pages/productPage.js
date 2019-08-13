import React from 'react';
import { Button, Container, Row, Col, Navbar } from 'react-bootstrap';
import StageOne from './stageOne';
import StageTwo from './stageTwo';
import { dropDownData } from '../../utility/data';

class ProductPage extends React.Component {
    state = {
        stegeOne: true,
        stageTwo: false,
        stageOneValidation: false,
        selectedValue: '',
        addedBy: '',
        addedDate: '',
        fruitDescription: '',
        listproducts: []
    }
    handeInputChange = (event) => {
        let currentState = this.state;
        let field = event.target.name;
        currentState[field] = event.target.value;
        this.setState({ ...currentState })
    }
    handleSelect = (item) => {
        this.setState({ selectedValue: item })
    }
    handleStages = (stage) => {
        if (stage === 'stageOne') {
            this.setState({ stegeOne: true, stageTwo: false })
        }
        else if (stage === 'stageTwo') {
            this.setState({ stageTwo: true, stegeOne: false })
        }
    }
    handlestageOne = (formValues) => {
        if (formValues.selectedValue && formValues.addedBy && formValues.dateAdded) {
            this.setState({ stageTwo: true, stegeOne: false, stageOneValidation: true })
        }
        this.state.listproducts.push(formValues);
        console.log('formvalues', formValues);
    }
    render() {
        const { stegeOne, stageTwo, stageOneValidation, selectedValue, addedBy, addedDate, listproducts,fruitDescription } = this.state;
        return (
            <section>
                <>
                    <Navbar variant="dark" className="navigation-main">
                        <Container>
                            <Navbar.Brand href="/" className="navigation-section">My Fruit Store</Navbar.Brand>
                        </Container>
                    </Navbar>
                </>
                <Container fluid={true} className="secondary-header">
                    <Row >
                       <Button className="stageOne-button"onClick={() => this.handleStages('stageOne')}>Page One</Button>
                       <Button className="stageTwo-button"disabled={!(stageOneValidation)} onClick={() => this.handleStages('stageTwo')}>Page Two</Button>
                    </Row>
                </Container>
                <Container>
                    {
                        stegeOne && (
                            <StageOne
                                dropDownData={dropDownData}
                                handlestageOne={this.handlestageOne}
                                selectedValue={selectedValue}
                                addedBy={addedBy}
                                handeInputChange={this.handeInputChange}
                                handleSelect={this.handleSelect}
                                addedDate={addedDate}
                                fruitDescription={fruitDescription}
                            />
                        )
                    }
                    {
                        stageTwo && (
                            <StageTwo
                                listproducts={listproducts}
                            />
                        )
                    }
                </Container>
            </section>
        )
    }
}
export default ProductPage;