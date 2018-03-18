import React, { Component } from 'react';
import axios from 'axios';

// css
import '../stylesheets/counter.css';

export default class Counter extends Component {

  constructor() {
    super();
    this.state = {
      num: null
    }
    this.getNum = this.getNum.bind(this);
  }

  getNum() {
    axios.get('http://speakupforunity-api.com/num').then((res) => {
      const number = res.data.num;
      this.setState({
        ...this.state,
        num: number
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  componentWillMount() {
    this.getNum();
  }

  render() {
    const number = this.state.num;
    return(
      <div className="counterDiv">
        <h1 className="counterH1 badge badge-light">{number}</h1>
        <h3 className="counterH3">That's the number of people that have joinded thusfar. And we're still counting.</h3>
      </div>
    );
  }
}
