import React from 'react';

import Card from '../UI/Card';

import CostDate from './CostDate';
import './CostItem.css';

const CostItem = (props) => {
  const costDate = props.date;
  const costAmount = props.amount;

  return (
    <>
      <Card className="cost-item">
        <CostDate date={costDate}/>
        <div className="cost-item__description">
          <h2>{props.description}</h2>
          <div className="cost-item__price">$ {costAmount}</div>
        </div>
      </Card>
    </>
  );
};

export default CostItem;
