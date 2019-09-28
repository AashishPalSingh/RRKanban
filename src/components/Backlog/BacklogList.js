import React from 'react';

import BacklogCardsContainer from '../../containers/Backlog/BacklogCardsContainer';

const BacklogList = ({ backloglist = {}, removeList }) => {
  return (
    <section className="backlog">
      <h2>{backloglist.title}</h2>
      <BacklogCardsContainer listId={backloglist.id} key={backloglist.id} />
    </section>
  );
};

export default BacklogList;
