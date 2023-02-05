import './style.css';
import { Component } from 'react';
import methods from './methods';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.input = methods.input.bind(this);
  }

  render() {
    return (
      <div className='button' onClick={this.input}>
        {this.props.text}
      </div>
    );
  }
}

