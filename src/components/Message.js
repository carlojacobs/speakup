import React, { Component } from 'react';

// css
import '../stylesheets/message.css';

export default class Message extends Component {
  render() {
    return(
      <div className="message">
        <h1 id="messageH1">This is what you'll be sharing.</h1>
        <p id="messageP">" I hereby declare that I will always respect my fellow man, regardless of religion, color, beliefs or way of life and I will never impose my own religion, beliefs or way of life on others, not with words nor violence in whatever way. Where others do, I will never remain silent but speak out loud. This is my contribution to a better world. "
        </p>
      </div>
    );
  }
}
