import React, { Component } from 'react';
import ListsContainer from '../containers/Lists/ListsContainer';
import UsersContainer from '../containers/Users/UsersContainer';
import CreateListContainer from '../containers/Lists/CreateListContainer';
import BacklogContainer from '../containers/Backlog/BacklogContainer';

// import defaultState from '../default-state.json';

class Application extends Component {
  render() {
    return (
      <main className="Application">
        <div>{/* Users will go here! */}</div>
        <UsersContainer />
        <section>
          <CreateListContainer />
          <ListsContainer />
        </section>
        <BacklogContainer />
      </main>
    );
  }
}

export default Application;
