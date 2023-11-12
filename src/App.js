import { useState } from 'react';

import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2023, 2, 1),
    description: 'Fridge',
    amount: 999.99,
  },

  {
    id: 'c2',
    date: new Date(2023, 3, 3),
    description: 'Phone',
    amount: 799.99,
  },
  {
    id: 'c3',
    date: new Date(2023, 4, 4),
    description: 'Car',
    amount: 5999.99,
  },
];

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts(
      (prevCosts) => {
        return [cost, ...prevCosts];
      },
    );
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </div>)
  ;
}

export default App;
