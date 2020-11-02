import React, { useState } from 'react';

import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

function PeopleSearch({ onSearch }) {

    const [text, setText] = useState('')

    return (
      <form>
        <InputBase 
         placeholder="Search People"
         value={text} 
         onChange={e => setText(e.target.value)}
         autoFocus
        />

        <IconButton onClick={() => onSearch(text)}>
            <SearchIcon />
        </IconButton>
    </form>
  );
}

export default PeopleSearch;
