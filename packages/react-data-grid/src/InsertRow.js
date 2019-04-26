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

    const className = joinClasses('react-grid-Row', 'react-grid-row-add');

    let style = {
      width: this.props.width,
      height: this.props.height,
      overflow: 'hidden',
      display: 'flex',
    };

    let iconStyle = {
      width: this.props.iconWidth,
      height: this.props.height,
      fontSize: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRight: '1px solid #ddd',
      borderBottom: '1px solid #ddd',
    };

    let itemSytle = {
      flex: '1',
      borderRight: '1px solid #ddd',
      borderBottom: '1px solid #ddd',
    }

    return (
      <div className={className} style={style} onClick={this.onInsertRow}>
        <div className="react-grid-add-row-icon" style={iconStyle} title="Add Row">+</div>
        <div className="react-grid-add-row-item" style={itemSytle}></div>
      </div>
    );
  }
}

export default InsertRow;
