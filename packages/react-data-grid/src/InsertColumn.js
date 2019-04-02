import React from 'react';
import PropTypes from 'prop-types';
import joinClasses from 'classnames';

class InsertColumn extends React.Component {

  static propTypes = {
    onInsertColumn: PropTypes.func,
  }

  onInsertColumn = () => {
    if (this.props.onInsertColumn) {
      this.props.onInsertColumn();
    }
  }

  render() {
    let className = joinClasses({'react-grid-HeaderCell' : true});

    return (
      <div style={this.props.style} className={className} onClick={this.onInsertColumn} title="Add Column">+</div>
    );
  }
}

export default InsertColumn;
