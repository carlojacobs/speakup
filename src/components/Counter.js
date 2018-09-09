import React, { Component } from 'react';
import axios from 'axios';

export default class Counter extends Component {

  constructor() {
    super();
    this.state = {
      num: 0
    }
    this.getNum = this.getNum.bind(this);
  }

  getNum(callback) {
    axios.get('http://speakupforunity-api.herokuapp.com/num').then((res) => {
      const number = res.data.num;
      this.setState({
        ...this.state,
        num: number
			});
			callback(this.state.num);
    }).catch((err) => {
      console.log(err);
    });
  }

  componentDidMount() {
		this.getNum();
  }

  render() {
		const number = this.state.num;
    return(
      <div className="jumbotron counterDiv">
        <div className="container">
          <h1 className="counterH1 badge badge-light" id="numberBadge">{number}</h1>
          <h3 className="speakupH3">That's the number of people that have joinded thusfar. And we're still counting.</h3>
        </div>
      </div>
		);
	}
}
