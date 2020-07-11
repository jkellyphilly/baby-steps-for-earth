import React from 'react';

const Tags = (props) => {
  const reducer = (acc, curr) => acc + ' #' + curr.content;
  return (
    <p>{props.tags.reduce(reducer, "")}</p>
  )
}

export default Tags;
