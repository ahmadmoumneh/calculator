const methods = {
  operate(operator) {
    const digit = this.state.digit.endsWith('.')? this.state.digit.substring(0, this.state.digit.length - 1) : this.state.digit;
    const operands = [...this.state.operands];

    operands.push(digit);

    const result = operands.length === 2? this.evaluate(operator === '='? this.state.operator : operator, operands) : digit;

    this.setState({
      digit: result,
      operands: operator === '='? [] : [result],
      operator: operator === '='? null : operator,
    });

    this.reinput = true;
  },

  input(d) {
    const digit = this.state.digit === '0'? d : this.reinput? d : this.state.digit + d;

    this.setState({
      digit: digit
    });  

    this.reinput = false;
  },

  clear () {
    this.setState({
      operator: null,
      operands: [],
      digit: '0'
    });
  },

  backspace () {
    const digit = this.state.digit.length === 1 || 
      this.state.digit === 'Error'? '0' : 
      this.state.digit.substring(0, this.state.digit.length - 1);

    this.setState({
      digit: digit
    });
  },

  pi () {
    const pi = Math.round(Math.PI * 10000000) / 10000000;

    this.setState({
      digit: pi.toString()
    });
    
    this.reinput = true;
  },

  squareroot () {
    const digit = Math.round(Math.sqrt(this.state.digit) * 10000000) / 10000000;

    this.setState({
      digit: digit.toString()
    });

    this.reinput = true;
  },

  evaluate (operator, operands) {
    let result = 0;

    switch(operator) {
      case '+':
        result = +operands[0] + +operands[1];
        break;

      case '-':
        result = +operands[0] - +operands[1];
        break;

      case '×': 
        result = +operands[0] * +operands[1];
        break;

      case '÷':
        result = +operands[0] / +operands[1];
        break;

      default:
        result = 0;
    }

    result = Math.round(result * 10000000) / 10000000;
    
    result = result === Infinity || isNaN(result)? 'Error' :
      result.toString();

    this.setState({
      digit: result,
      operator: null,
      operands: [result]
    });

    this.reinput = true;

    return result;
  }
}

export default methods;