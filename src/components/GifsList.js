import React from 'react';

// TODO: Take in an destructure the `urls` prop
const GifsList = (props) => {
  return (
    <>
      {props.urls.map((url) => {
        return <img alt="random gif" key={url} src={url} />;
      })}
    </>
  );
};
// TODO: Render a `<div>` as the parent element of your `GifsList` component.
// TODO: Map over your `urls` array to render an `<img>` for each `url`.

export default GifsList;
