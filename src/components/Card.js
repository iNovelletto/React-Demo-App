import React, { Component } from 'react';
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

class Card extends Component {
	render() {
    const { card, isDragging, connectDragSource, connectDropTarget, isExternalDrag } = this.props;
		const opacity = isDragging || isExternalDrag ? 0.4 : 1;

		return connectDragSource(connectDropTarget(
      <div style={{ ...style, opacity }}>
        <Chip label={card.text} />
      </div>
		));
	}
}

const cardSource = {
  beginDrag(props) {
    return {
      index: props.index,
      listId: props.listId,
      card: props.card
    };
  },
  endDrag(props, monitor) {
    if(!monitor.didDrop())
      props.onCompleteInvalidDrag();
  }
 };

 const cardTarget = {
  hover(props, monitor, component) {
    if(!component.props.droppable)
      return;

    let item = monitor.getItem();
    let sourceId = item.listId;
    let targetId = props.listId;
    let dragIndex = item.index;
    let hoverIndex = props.index;

    props.onTargetHover(dragIndex, hoverIndex, item.card, sourceId !== targetId);
  }
 };

 Card.propTypes = {
  card: PropTypes.object.isRequired,
  isDragging: PropTypes.bool,
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired
};

  export default flow(
    DropTarget("CARD", cardTarget, connect => ({
      connectDropTarget: connect.dropTarget()
    })),
    DragSource("CARD", cardSource, (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging()
    }))
  )(Card);
