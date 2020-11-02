import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PeopleSearch from './PeopleSearch';
import PeopleList from './PeopleList';

import effects from './effects';

function People({people, fetchPeople}) {

  useEffect(() => {
    fetchPeople();
  },[fetchPeople]);

  return (
    <React.Fragment>
      <PeopleSearch
       onSearch={fetchPeople}
      />

      <PeopleList 
       people={people}
      />  
    </React.Fragment>
  );
}

export default connect(
  ({people}) => ({
      people
  }), {
    ...effects
  }
)(People);