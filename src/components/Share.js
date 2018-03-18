import React, { Component } from 'react';

// css
import '../stylesheets/share.css';

export default class Share extends Component {
  render() {
    return(
      <div className="container-fluid share">
        <h1 id="shareH1">Thank you!</h1>
        <h2 id="shareH2">You are now able to share this.</h2>
        <p id="shareP">" I hereby declare that I will always respect my fellow man, regardless of religion, color, beliefs or way of life and I will never impose my own religion, beliefs or way of life on others, not with words nor violence in whatever way. Where others do, I will never remain silent but speak out loud. This is my contribution to a better world. "</p>
      </div>
    );
  }
}