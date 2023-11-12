import React, { useState } from 'react';

import Card from '../UI/Card';

import CostList from './CostList';
import './Costs.css';
import CostsDiagram from './CostsDiagram';
import CostsFilter from './CostsFilter';

function Costs(props) {
  const [year, setYear] = useState('2022');
  const yearHandler = (year) => {
    setYear(year);
  };

  const filteredYear = props.costs.filter(y => {
    return y.date.getFullYear().toString() === year;
  });

  return (
    <ul>
      <Card className="costs">
        <CostsFilter year={year} onChangeYear={yearHandler}/>
        <CostsDiagram costs={filteredYear}/>
        <CostList costs={filteredYear}/>
      </Card>
    </ul>
  );
}

export default Costs;
