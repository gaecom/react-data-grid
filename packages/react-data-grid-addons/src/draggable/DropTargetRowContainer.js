import React from 'react';
import ReactDOM from 'react-dom';
import { DropTarget } from 'react-dnd';
import { rowComparer } from 'react-data-grid';

const rowDropTarget = (Row) => class extends React.Component {
  shouldComponentUpdate(nextProps) {
    return rowComparer(nextProps, this.props);
  }

  moveRow() {
    ReactDOM.findDOMNode(this).classList.add('slideUp');
  }

  render() {
    const { connectDropTarget, isOver, canDrop } = this.props;
    const overlayTop = this.props.idx * this.props.height;
    return connectDropTarget(
      <div>
        <Row ref={(node) => this.row = node} {...this.props} />
        {isOver && canDrop && (
          <div
            className="rowDropTarget"
            style={{
              top: overlayTop,
              height: this.props.height
            }}
          />
        )}
      </div>
    );
  }
};

const target = {
  drop(props, monitor, component) {
    // Obtain the dragged item
    component.moveRow();
    const rowSource = monitor.getItem();
    const rowTarget = { idx: props.idx, data: props.row };
    props.onRowDrop({ rowSource, rowTarget });
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    draggedRow: monitor.getItem()
  };
}

export default (Row) => DropTarget('Row', target, collect, { arePropsEqual: (nextProps, currentProps) => !rowComparer(nextProps, currentProps) })(rowDropTarget(Row));
