import React from 'react';

import CostItem from './CostItem';
import './CostList.css';
import './Costs.css';

const CostList = (props) => {

  if (props.costs.length === 0) {
    return <p className="cost-list__fallback">No costs found.</p>;
  }

  return (
    <li className="cost-list">
      {props.costs.map((cost, index) =>
        <CostItem
          key={index}
          date={cost.date}
          description={cost.description}
          amount={cost.amount}/>,
      )}
    </li>
  );
};

export default CostList;
