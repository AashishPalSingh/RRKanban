import React from 'react';

import CardContainer from '../../containers/Cards/CardContainer';
import CreateCardContainer from '../../containers/Cards/CreateCardContainer';
import CardsContainer from '../../containers/Cards/CardsContainer';

const List = ({ list = {}, removeList }) => {
  return (
    <article className="List">
      <h2>{list.title}</h2>
      
      <CardsContainer listId={list.id} key={list.id} />
    </article>
  );
};

export default List;
