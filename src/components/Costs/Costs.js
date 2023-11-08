import React from 'react';
import Card from '../UI/Card';
import CostItem from './CostItem';
import './Costs.css';

function Costs(props) {
  return (<Card className="costs">
      {
        props.costs.map((cost, index) =>
          <CostItem
            key={index}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}/>)
      }
    </Card>
  );
}

export default Costs;
