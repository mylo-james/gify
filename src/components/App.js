import React from 'react';
import GifsList from './GifsList';
import SearchBar from './SearchBar';

const App = (props) => {
  const { gifs, fetchGifs } = props;

  const urls = gifs.map((gif) => gif.images.fixed_height.url);
  return (
    <>
      <SearchBar fetchGifs={fetchGifs} />
      <GifsList urls={urls} />
    </>
  );
};

export default App;
