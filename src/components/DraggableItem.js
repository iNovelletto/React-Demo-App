import React from 'react';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';
import flow from 'lodash/flow';
import Chip from 'material-ui/Chip';

const style = {
	border: '1px dashed gray',
	padding: '0.5rem 1rem',
	margin: '.5rem',
	backgroundColor: 'white',
	cursor: 'move'
};

const DraggableItem = props => {
  const { item, isDragging, connectDragSource, connectDropTarget, isExternalDrag } = props;
  const opacity = isDragging || isExternalDrag ? 0.4 : 1;
  const inputProps = {
    label: item.text,
    onRequestDelete: props.onDraggableItemDelete ? () => props.onDraggableItemDelete(item) : false
  };
  return connectDragSource(connectDropTarget(
    <div style={{ ...style, opacity }}>
      <Chip
        {...inputProps}
      />
    </div>
  ));
};

const draggableItemSource = {
  beginDrag(props) {
    return {
      index: props.index,
      parentId: props.parentId,
      item: props.item
    };
  },
  endDrag(props, monitor) {
    if(!monitor.didDrop() || !props.droppable)
      props.onCompleteInvalidDrag();
  }
 };

 const draggableItemTarget = {
  hover(props, monitor) {
    if(!props.droppable)
      return;

    let item = monitor.getItem();
    let sourceId = item.parentId;
    let targetId = props.parentId;
    let dragIndex = item.index;
    let hoverIndex = props.index;

    props.onTargetHover(dragIndex, hoverIndex, item.item, sourceId !== targetId);
  }
 };

 DraggableItem.propTypes = {
  item: PropTypes.object.isRequired,
  isDragging: PropTypes.bool,
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired
};

export default flow(
  DropTarget("DRAG", draggableItemTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  })),
  DragSource("DRAG", draggableItemSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }))
)(DraggableItem);
