import { apiKey } from '../config';

// TODO: Define and export a `fetchGifs` function to fetch from the Giphy API
export const fetchGifs = async (searchTerm) => {
  try {
    const res = fetch(
      `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=3`
    );
    return res;
  } catch (e) {
    console.error(e);
  }
};
