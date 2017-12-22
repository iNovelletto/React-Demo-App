import React from 'react';
import Card from './Card';
import { DropTarget } from 'react-dnd';

const Container = props => {
		const { canDrop, isOver, connectDropTarget, artifacts, width } = props;
		const isActive = canDrop && isOver;
		const style = {
			width: width,
			height: "360px",
			border: '1px dashed gray'
		};

		const backgroundColor = isActive ? 'lightgreen' : '#FFF';

		return connectDropTarget(
			<div style={{...style, backgroundColor}}>
				{artifacts.map((item, i) => {
					return (
						<Card
							key={item.identifier}
							index={i}
							listId={props.id}
              card={item}
              isExternalDrag={item.isDrag}
              onTargetHover={props.onTargetHover.bind(this)}
              onCompleteDrag={props.onCompleteDrag.bind(this)}
              onCompleteInvalidDrag={props.onCompleteInvalidDrag.bind(this)}
              droppable={props.droppable} />
					);
				})}
			</div>
		);
};

const cardTarget = {
	drop(props, monitor) {
		const { id } = props;
    const sourceObj = monitor.getItem();

		if ( id !== sourceObj.listId ) {
      props.onCompleteDrag(sourceObj.card);
    }
		return {
			listId: id
		};
  }
};

export default DropTarget("CARD", cardTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop()
}))(Container);
