import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import flow from 'lodash/flow';

const style = {
	border: '1px dashed gray',
	padding: '0.5rem 1rem',
	margin: '.5rem',
	backgroundColor: 'white',
	cursor: 'move'
};

class Card extends Component {
	render() {
    const { card, isDragging, connectDragSource, connectDropTarget } = this.props;
		const opacity = isDragging ? 0.4 : 1;

		return connectDragSource(connectDropTarget(
			<div style={{ ...style, opacity }}>
				{card.text}
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
 };

 const cardTarget = {
  hover(props, monitor, component ) {

    const sourceId = monitor.getItem().listId;
    const targetId = props.listId;
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    const sourceObj = monitor.getItem();
    if ( sourceId !== targetId ) {
      props.moveCard(dragIndex, hoverIndex, sourceObj.card, true);
    }
  }
 };

//  export default	DragSource("CARD", cardSource, (connect, monitor) => ({
// 		connectDragSource: connect.dragSource(),
// 		isDragging: monitor.isDragging()
// 	}))(Card);

  export default flow(
    DropTarget("CARD", cardTarget, connect => ({
      connectDropTarget: connect.dropTarget()
    })),
    DragSource("CARD", cardSource, (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging()
    }))
  )(Card);
