import React from 'react';
import PropTypes from 'prop-types';
import { ContextMenuTrigger } from 'react-contextmenu';

class SimpleHeaderCell extends React.Component {

  static propTypes = {
    headerContextMenu: PropTypes.element,
    column: PropTypes.object.isRequired,
    onHeaderCellClick: PropTypes.func,
    onHeaderContextMenu: PropTypes.func,
  }

  onHeaderCellClick = (event) => {
    if (typeof(this.props.onHeaderCellClick) === 'function') {
      let column = this.props.column;
      this.props.onHeaderCellClick(column);
    }
  }

  onMouseDown = (event) => {
    event.stopPropagation();
    if (event.button === 2) {
      return;
    }
  }

  onContextMenu = (event) => {
    event.preventDefault();
    if (typeof(this.props.onHeaderContextMenu) === 'function') {
      let column = this.props.column;
      this.props.onHeaderContextMenu(column);
    }
  }

  render() {
    let column = this.props.column;
    const headerText = column.rowType === 'header' ? column.name : '';

    let headerContextMenu = this.props.headerContextMenu;
    let isSupportHeaderContextMenu = headerContextMenu ? true : false;


    if (!isSupportHeaderContextMenu) {
      return (
        <div className="widget-HeaderCell__value" onClick={this.onHeaderCellClick}>
          {headerText}
        </div>
      );
    }

    let id = headerContextMenu.props.id;

    return (
      <ContextMenuTrigger id={id}>
        <div className="widget-HeaderCell__value" style={{lineHeight: '24px'}} onClick={this.onHeaderCellClick} onMouseDown={this.onMouseDown} onContextMenu={this.onContextMenu}>
          {headerText}
        </div>
      </ContextMenuTrigger>
    )
  }
}

export default SimpleHeaderCell;
