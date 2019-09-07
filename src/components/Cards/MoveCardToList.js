import React from 'react';

const MoveCardToList = ({ listId, card, lists, moveCardToList }) => {
  const handleChange = event => {
    //const userId = event.target.value;
    const newListId = event.target.value;
    //const { card } = this.props;
    // this.props.onListChange(card, newListId);
    if (moveCardToList) moveCardToList(card, newListId, listId);
  };
  return (
    <select className="Card-move" onChange={handleChange} value={listId}>
      {lists.map(list => (
        <option value={list.id} key={list.id}>
          {list.title}
        </option>
      ))}
    </select>
  );
};

export default MoveCardToList;
