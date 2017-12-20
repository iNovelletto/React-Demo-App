import React, { Component } from 'react';
import Card from './Card';
import { DropTarget } from 'react-dnd';

const Container = props => {
		//const { cards } = this.state;
		const { canDrop, isOver, connectDropTarget, artifacts } = props;
		const isActive = canDrop && isOver;
		const style = {
			width: "200px",
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
              onTargetHover={props.onTargetHover.bind(this)}
              onCompleteDrag={props.onCompleteDrag.bind(this)} />
					);
				})}
			</div>
		);
}

// class Container extends Component {
// 	// constructor(props) {
// 	// 	super(props);
// 	// 	this.state = { cards: props.list };
//   // }

//   // removeCard() {
//   //   debugger;
//   //   this.setState({ cards: this.state.cardsAux.filter(item => !item.isDrag) });
//   // }

// 	// pushCard(card) {
//   //   let cards = [...this.state.cards];
//   //   let dragCards = cards.filter(item => item.isDrag);
//   //   let index = cards.indexOf(dragCards[0]);

//   //   let newObj = Object.assign({}, card, { isDrag: false });

// 	// 	this.setState({ cards: [...cards.slice(0, index), newObj, ...cards.slice(index + 1)] });
// 	// }

// 	// moveCard(dragIndex, hoverIndex, card, isNew) {
//   //   let cards = [...this.state.cards];
//   //   let dragCards = cards.filter(item => item.isDrag);

//   //   if(dragCards.length > 0) {
//   //     let oldIndex = cards.indexOf(dragCards[0]);
//   //     if(oldIndex == hoverIndex)
//   //       return;
//   //     else
//   //       dragIndex = oldIndex;

//   //     isNew = false;
//   //   }

//   //   if(isNew){
//   //     this.setState({ cards:
//   //       [...cards.slice(0, hoverIndex),
//   //         Object.assign({}, card, { isDrag: true }),
//   //         ...cards.slice(hoverIndex)] });
//   //   }
//   //   else
//   //     this.setState({ cards:
//   //       cards.map((item, index) => index === dragIndex
//   //         ? cards[hoverIndex]
//   //         : index === hoverIndex
//   //         ? cards[dragIndex]
//   //         : item) });
// 	// }

// 	render() {
// 		//const { cards } = this.state;
// 		const { canDrop, isOver, connectDropTarget, artifacts } = this.props;
// 		const isActive = canDrop && isOver;
// 		const style = {
// 			width: "200px",
// 			height: "360px",
// 			border: '1px dashed gray'
// 		};

// 		const backgroundColor = isActive ? 'lightgreen' : '#FFF';

// 		return connectDropTarget(
// 			<div style={{...style, backgroundColor}}>
// 				{artifacts.map((item, i) => {
// 					return (
// 						<Card
// 							key={item.identifier}
// 							index={i}
// 							listId={this.props.id}
// 							card={item}
//               onTargetHover={this.props.onTargetHover}
//               onCompleteDrag={this.props.onCompleteDrag} />
// 					);
// 				})}
// 			</div>
// 		);
//   }
// }

const cardTarget = {
	drop(props, monitor, component ) {
		const { id } = props;
    const sourceObj = monitor.getItem();

		if ( id !== sourceObj.listId ) {
      props.onCompleteDrag(sourceObj.card);
    }
		return {
			listId: id
		};
  }
}

export default DropTarget("CARD", cardTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop()
}))(Container);
