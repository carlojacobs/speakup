import React, { Component } from 'react';

// css
import '../stylesheets/body.css';

export default class Body extends Component {
  render() {
    return(
      <div className="body container-fluid">
        <div className="row">
          <div className="col-md-9">
            <h1 className="bodyH1">Why should you care?</h1>
            <h3 className="bodyH3">The world is full of good, love, and other things us humans might perceive as ethically good. However, the opposite is also true. By sharing this message, you help spread it, and contribute to what might become the biggest movement ever.</h3>
          </div>
          <div className="col-md-3">
            <img id="lightsImage" src="https://images.unsplash.com/photo-1494386346843-e12284507169?auto=format&fit=crop&w=400&q=80" alt="together"/>
          </div>
        </div>
      </div>
    );
  }
}
