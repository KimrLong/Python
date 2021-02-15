import React from 'react';
import {Form, Button, Col} from 'react-bootstrap';

const ContactForm = (props) => {


    return <>

        <Form>
        <Form.Row>
            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
            </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
        </Form.Group>


        <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>California</option>
                <option>Georgia</option>
                <option>Texas</option>
                <option>Mississippi</option>
                <option>Tennesse</option>
                <option>New York</option>
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Enter phone number" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
        </Form.Row>
{/* 
        <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}

        <Button variant="info" type="submit">
            Submit
        </Button>
        </Form>
        
    </>




}

export default ContactForm;