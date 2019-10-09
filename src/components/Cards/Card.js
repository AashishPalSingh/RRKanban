import React, { Component } from 'react';
import CardAssignmentContainer from '../../containers/Cards/CardAssignmentContainer';
import MoveCardToListContainer from '../../containers/Cards/MoveCardToListContainer';

class Card extends Component {
  state = { showOptions: false };

  toggleOptions = () => {
    this.setState(prevState => {
      return { ...prevState, showOptions: !prevState.showOptions };
    });
  };

  handleChange = event => {
    // const newListId = event.target.value;
    // const { card } = this.props;
    // this.props.onListChange(card, newListId);
  };

  render() {
    const {
      card = {},
      lists = [],
      listId = '',
      onRemoveCard = () => {},
      onAddCard = () => {},
    } = this.props;
    const { showOptions } = this.state;
    const removeCard = () => onRemoveCard(listId, card);
    const addCard = event => {
      const newListId = document.querySelector('.Card-move').value;
      return onAddCard(newListId, card);
    };
    const isInBacklog = listId === '1558167577543';
    const objectId=card.id;
    const link="javascript:App.routing.open(\""+ objectId +"\")";
    return (
      <article className="Card">
        <h3><a href={link}>{card.title}</a></h3>
        <div className="Card-description">{card.description}</div>
        {showOptions && (
          <div className="Card-options">
            <MoveCardToListContainer
              key={listId}
              listId={listId}
              cardId={card.id}
            />
            {isInBacklog && (
              <button onClick={addCard} className="Card-remove goahead">
                Add Card
              </button>
            )}
            {!isInBacklog && (
              <button onClick={removeCard} className="Card-remove danger">
                Remove Card
              </button>
            )}
          </div>
        )}
        <button className="Card-toggle" onClick={this.toggleOptions}>
          Toggle Options
        </button>
      </article>
    );
  }
}

export default Card;
