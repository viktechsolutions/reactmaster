import { Card } from 'primereact/card';
import React from 'react';

import CostDate from './CostDate';
import './CostItem.css';

const CostItem = (props) => {
  const costDate = props.date;
  const constDescription = props.description;
  const constAmount = props.amount;

  return (
    <Card className="cost-item">
      <CostDate date={costDate}/>
      <div className="cost-item__description">
        <h2>{constDescription}</h2>
        <div className="cost-item__price">$ {constAmount}</div>
      </div>
    </Card>);
};

export default CostItem;

