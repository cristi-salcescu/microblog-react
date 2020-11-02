import React from 'react';

import PeopleSearch from './PeopleSearch';
import PeopleList from './PeopleList';

function People({ people }) {
  return (
    <React.Fragment>
      <PeopleSearch
       onSearch={console.log}
      />

      <PeopleList 
       people={people}
      />  
    </React.Fragment>
  );
}

export default People;