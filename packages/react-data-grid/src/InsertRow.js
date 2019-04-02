import React from 'react';
import PropTypes from 'prop-types';
import joinClasses from 'classnames';

require('../../../themes/react-data-grid-row.css');

class InsertRow extends React.Component {

  static propTypes = {
    width: PropTypes.number.isRequired,
    iconWidth: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
    height: PropTypes.number.isRequired,
    onInsertRow: PropTypes.func,
  }

  onInsertRow = () => {
    if (this.props.onInsertRow) {
      this.props.onInsertRow();
    }
  }

  render() {

    const className = joinClasses('react-grid-row');

    let style = {
      width: this.props.width,
      height: this.props.height,
      overflow: 'hidden',
    };

    let iconStyle = {
      width: this.props.iconWidth,
      height: this.props.height,
      fontSize: '24px',
      textAlign: 'center',
      display: 'table-cell',
      verticalAlign: 'middle'
    };

    return (
      <div className={className} style={style} onClick={this.onInsertRow}>
        <div className="react-grid-add-row-icon" style={iconStyle} title="Add Row">+</div>
        <div className="react-grid-add-row-item"></div>
      </div>
    );
  }
}

export default InsertRow;
