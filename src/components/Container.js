import React, { Component } from 'react';
import Card from './Card';
import { DropTarget } from 'react-dnd';

class Container extends Component {
	constructor(props) {
		super(props);
		this.state = { cards: props.list };
	}

	pushCard(card) {
    let cards = [...this.state.cards];
    let dragCards = cards.filter(item => item.isDrag);
    let index = cards.indexOf(dragCards[0]);

    let newObj = Object.assign({}, card, { isDrag: false });

		this.setState({ cards: [...cards.slice(0, index), newObj, ...cards.slice(index + 1)] });
	}

	moveCard(dragIndex, hoverIndex, card, isNew) {
    let newCard = Object.assign({}, card, { isDrag: true });
    let cardsCopy = [...this.state.cards];
    let dragCards = this.state.cards.filter(item => item.isDrag);

    if(dragCards.length > 0){
      dragIndex = cardsCopy.indexOf(dragCards[0]);
      isNew = false;
    }
    let immutableItems = isNew ?
      [...cardsCopy.slice(0, hoverIndex), newCard, ...cardsCopy.slice(hoverIndex)] :
      cardsCopy.map((item, index) => index === dragIndex
        ? cardsCopy[hoverIndex]
        : index === hoverIndex
        ? cardsCopy[dragIndex]
        : item);

		this.setState({ cards: immutableItems });
	}

	render() {
		const { cards } = this.state;
		const { canDrop, isOver, connectDropTarget } = this.props;
		const isActive = canDrop && isOver;
		const style = {
			width: "200px",
			height: "360px",
			border: '1px dashed gray'
		};

		const backgroundColor = isActive ? 'lightgreen' : '#FFF';

		return connectDropTarget(
			<div style={{...style, backgroundColor}}>
				{cards.map((card, i) => {
					return (
						<Card
							key={card.id}
							index={i}
							listId={this.props.id}
							card={card}
              moveCard={this.moveCard.bind(this)} />
					);
				})}
			</div>
		);
  }
}

const cardTarget = {
	drop(props, monitor, component ) {
		const { id } = props;
		const sourceObj = monitor.getItem();
		if ( id !== sourceObj.listId ) {
      component.pushCard(sourceObj.card);
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
