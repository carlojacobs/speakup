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
			},
			emailIsValid: true,
			nameIsValid: true
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
		const url = "https://speakupforunity-api.herokuapp.com/add";
		const { name, email } = this.state.inputData;
		if (name == "") {
			this.setState({
				...this.state,
				nameIsValid: false
			});
		} else {
			// Perform request
			axios.post(url, {
				email: email,
				name: name
			}).then((res) => {
				const message = res.data.message;
				const success = res.data.success;
				if (success) {
					this.props.history.push('/share/' + name);
				} else {
					this.setState({
						...this.state,
						emailIsValid: false
					});
				}
				console.log(message);
			});
		}
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
  //<Input onChange={this.handleChange} type="email" name="email" placeholder="Email" />
  render() {
		var emailInputClass = this.state.emailIsValid ? "form-control" : "form-control is-invalid";
    const modal = (
      <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>Speak up.</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label>Name</Label>
							<input type="text" name="name" placeholder="Full Name" onChange={this.handleChange} className="form-control" required/>
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <input name="email" type="text" onChange={this.handleChange} className={emailInputClass} placeholder="Email" required/>
              <div class="invalid-feedback">
                This email has already been used.
              </div>
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
