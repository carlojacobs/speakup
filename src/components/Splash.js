import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

// css
import '../stylesheets/splash.css';

export default class Splash extends Component {

  constructor() {
    super();
    this.state = {
      showModal: false,
      inputData: {
        name: null,
        email: null
      }
    }
    // Bind methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      ...this.state,
      showModal: !this.state.showModal
    });
  }

  handleSubmit(e) {
		e.preventDefault();
		const url = "http://speakupforunity-api.herokuapp.com/add";
    const { name, email } = this.state.inputData;
		// Perform request
		axios.post(url, {
			email: email,
			name: name
		}).then((res) => {
      const message = res.data.message;
      const success = res.data.success;
      if (success) {
        this.props.history.push('/share');
      }
      console.log(message);
		});
	}

  handleChange(e) {
    const target = e.target;
    const value = target.value;
		const name = target.name;
    // Update the state
		this.setState({
      ...this.state,
      inputData: {
        ...this.state.inputData,
        [name]: value
      }
		});
  }

  render() {
    const modal = (
      <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>Speak up.</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label>Name</Label>
              <Input onChange={this.handleChange} type="text" name="name" placeholder="Full Name" />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input onChange={this.handleChange} type="email" name="email" placeholder="Email" />
            </FormGroup>
            <Button id="submitButton">Submit</Button>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );

    return(
      <div className="splash">
        <h1 className="splashH1">Speak up for unity.</h1>
        <h3 className="splashH3">The world is full of good, together we can help make it stand out.</h3>
        <button id="button" onClick={this.toggleModal}>Speak up and share!</button>
        {modal}
      </div>
    );
  }
}
