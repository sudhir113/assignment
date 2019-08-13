import React from 'react';
import { Button, Container, Row, Col, Table } from 'react-bootstrap';

class StageTwo extends React.Component {
    render() {
        const {listproducts}=this.props;
        return (
            <Row>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Selected Fruit</th>
                            <th>Fruit Description</th>
                            <th>Added By</th>
                            <th>Date Added</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listproducts.map((item,index) =>{
                            return (
                                <tr key={Math.random()}>
                                    <td>{index+1}</td>
                                    <td>{item.selectedValue}</td>
                                    <td>{item.fruitDescription}</td>
                                    <td>{item.addedBy}</td>
                                    <td>{item.dateAdded}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Row>
        )
    }
}
export default StageTwo;