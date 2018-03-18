import React, { Component } from 'react';

// css
import '../stylesheets/share.css';

export default class Share extends Component {
  render() {
    var name = this.props.match.params.name;
    return(
      <div className="container-fluid share">
        <h1 id="shareH1">Thank you, {name.split(' ')[0]}!</h1>
        <h2 id="shareH2">Share this message to spread the good thoughts.</h2>
        <p id="shareP">"I, {name}, hereby declare that I will always respect my fellow man, regardless of religion, color, beliefs or way of life and I will never impose my own religion, beliefs or way of life on others, not with words nor violence in whatever way. Where others do, I will not remain silent but speak out loud. This is my contribution to a better world. "</p>
      </div>
    );
  }
}