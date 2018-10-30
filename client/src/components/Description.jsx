import React from 'react';

const Description = props => (
  <div>
    <h4>{props.products.item_name}</h4>
    <p>{props.products.catchphrase}</p>
    <p>{props.products.description}</p>
  </div>
);

export default Description;
