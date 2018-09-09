import React, { Component } from 'react';

export default class Message extends Component {
  render() {
    return(
      <div className="jumbotron message">
        <div className="container">
          <h1 className="speakupH1">This is what you'll be sharing.</h1>
          <p id="messageP">"I hereby declare that I will always respect my fellow man, regardless of religion, color or beliefs and I will never impose my own religion or beliefs on others, not with words nor violence in whatever way. Where others do, I will never remain silent but speak out loud. This is my contribution to a better world."
          </p>
        </div>
      </div>
    );
  }
}
