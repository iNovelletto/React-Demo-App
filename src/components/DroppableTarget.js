import React from 'react';
import DraggableItem from './DraggableItem';
import { DropTarget } from 'react-dnd';

const DroppableTarget = props => {
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
						<DraggableItem
							key={item.identifier}
							index={i}
							parentId={props.id}
              item={item}
              isExternalDrag={item.isDrag}
              onTargetHover={props.onTargetHover.bind(this)}
              onCompleteDrag={props.onCompleteDrag.bind(this)}
              onCompleteInvalidDrag={props.onCompleteInvalidDrag.bind(this)}
              onDraggableItemDelete={props.onDraggableItemDelete}
              droppable={props.droppable} />
					);
				})}
			</div>
		);
};

const dropTarget = {
	drop(props, monitor) {
		const { id } = props;
    const sourceObj = monitor.getItem();

		if ( id !== sourceObj.parentId ) {
      props.onCompleteDrag(sourceObj.item);
    }
		return {
			parentId: id
		};
  },
  canDrop(props){
    return props.droppable;
  },
  //This hover is used when there are no elements in the drop target
  hover(props, monitor) {
    if(!props.droppable)
      return;

    if(props.artifacts.length === 0)
      props.onTargetHover(-1, props.artifacts.length > 0 ? props.artifacts.length - 1 : 0, monitor.getItem().item, true);
  }
};

export default DropTarget("DRAG", dropTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop()
}))(DroppableTarget);
