import React, { Component } from 'react';

export default class Example extends Component {
  hello () {
    alert('hello' + this.toto);
  }
  render() {
    
    return (
      <button ref='toto' value='asdasd' onClick={this.hello.bind(this)}>Click Me</button>
    );
  }
}
