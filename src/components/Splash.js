import React, { Component } from 'react';
import axios from 'axios';

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
		if (name === "") {
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

  render() {
		var emailInputClass = this.state.emailIsValid ? "form-control" : "form-control is-invalid";

    const form = (
      <form onSubmit={this.handleSubmit}>
        <div class="form-group">
          <label>Name</label>
          <input onChange={this.handleChange} type="text" name="name" className="form-control" placeholder="Name" required/>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input onChange={this.handleChange} type="text" name="email" className={"form-control " + emailInputClass} placeholder="Email" required/>
          <div class="invalid-feedback">
            This email has already been used.
          </div>
          <small className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );

    const modal = (
      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Speak up!</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {form}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div>
        <div className="jumbotron splash-jumbo">
          <div className="container">
            <h1 className="speakupH1">Speak up for unity.</h1>
            <h3 className="speakupH3">The world is full of good, together we can help make it stand out.</h3>
            <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#exampleModal">Speak up and share!</button>
          </div>
        </div>
        {modal}
      </div>
    );
  }
}
