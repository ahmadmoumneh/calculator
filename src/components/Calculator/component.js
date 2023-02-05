import './style.css';

import { Component } from 'react';
import methods from './methods';
import Button from '../Button/component';

export default class Calculator extends Component {
  reinput;

  constructor(props) {
    super(props);
    this.reinput = false;

    this.state = {
      digit: '0',
      operator: null,
      operands: []
    };
    
    this.operate = methods.operate.bind(this);
    this.input = methods.input.bind(this);
    this.clear = methods.clear.bind(this);
    this.backspace = methods.backspace.bind(this);
    this.pi = methods.pi.bind(this);
    this.squareroot = methods.squareroot.bind(this);
    this.evaluate = methods.evaluate.bind(this);
  }

  render() {
    return (
      <div className='calculator'>
        <div className='screen'><span className='operator'>{this.state.operator}</span>
        <span className='digit'>{this.state.digit}</span></div>
        <div className='panel'>
          <Button text='7' action={this.input} />
          <Button text='8' action={this.input} />
          <Button text='9' action={this.input} />
          <Button text='⌫' action={this.backspace} />
          
          <Button text='4' action={this.input} />
          <Button text='5' action={this.input} />
          <Button text='6' action={this.input} />
          <Button text='+' action={this.operate} />
          
  
          <Button text='1' action={this.input} />
          <Button text='2' action={this.input} />
          <Button text='3' action={this.input} />
          <Button text='-' action={this.operate} />
          
          <Button text='.' action={this.input} />
          <Button text='0' action={this.input} />
          <Button text='=' action={this.operate} />
          <Button text='×' action={this.operate} />
          
          <Button text='π' action={this.pi} />
          <Button text='√' action={this.squareroot} />
          <Button text='C' action={this.clear} />
          <Button text='÷' action={this.operate} />
        </div>
      </div>
    );
  }
}