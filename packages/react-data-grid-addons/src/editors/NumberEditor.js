import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const propTypes = {
  onBlur: PropTypes.func.isRequired,
  column: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
};

class NumberEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isShowTipMessage: false,
      tipMessage: 'Please enter a number.',
      value: props.value,
    }
  }

  onChange = (event) => {
    let value = event.target.value.trim();
    if (value === this.state.value) {
      return;
    }
    this.setState({value: parseInt(value)});
  }

  onKeyDown = (event) => {
    let keyCode = event.keyCode;
    if ((keyCode <= 57 && keyCode >= 48) || (keyCode <= 105 && keyCode >= 96) || (keyCode == 8)){
      return true;
     } else {
      return false;
     }
  }

  getValue = () => {
    const updated = {};
    updated[this.props.column.key] = this.getInputNode().value;
    return updated;
  }

  getInputNode = () => {
    const domNode = ReactDOM.findDOMNode(this);
    if (domNode.tagName === 'INPUT') {
      return domNode;
    }

    return domNode.querySelector('input:not([type=hidden])');
  }

  setInputRef = (input) => {
    this.input = input;
  };

  render() {
    return (
      <input
        ref={this.setInputRef}
        type="text"
        className="form-control"
        value={this.state.value}
        onBlur={this.props.onBlur}
        onKeyDown={this.onKeyDown}
        onChange={this.onChange}
      />
    );
  }
}

NumberEditor.propTypes = propTypes;

export default NumberEditor;
