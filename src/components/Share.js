import React, { Component } from 'react';

export default class Share extends Component {
  render() {
    var name = this.props.match.params.name;
    return(
      <div className="jumbotron share">
        <div className="container">
          <h1 id="shareH1">Thank you, {name.split(' ')[0]}!</h1>
          <h2 id="shareH2">Share this message to spread the good thoughts.</h2>
          <h3 id="shareH3">"I, {name}, hereby declare that I will always respect my fellow man, regardless of religion, color or beliefs and I will never impose my own religion or beliefs on others, not with words nor violence in whatever way. Where others do, I will not remain silent but speak out loud. This is my contribution to a better world."</h3>
        </div>
      </div>
    );
  }
}
