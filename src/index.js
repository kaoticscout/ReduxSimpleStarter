import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

YTSearch({key: process.env.YT_APIKEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

// create a component
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// take a component and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));