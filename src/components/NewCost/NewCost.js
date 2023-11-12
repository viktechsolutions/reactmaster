import { Button } from 'primereact/button';
import React from 'react';

import CostForm from './CostForm';
import './NewCost.css';

const NewCost = (props) => {
  const [isFormVisible, setIsFormVisible] = React.useState(false);
  const saveCostData = (costData) => {
    const costDataObj = {
      ...costData, id: Math.random().toString(),

    };

    props.onAddCost(costDataObj);
    // setIsFormVisible(false);
  };

  const onCancelHandler = () => {
    setIsFormVisible(false);
  };

  const isFormVisibleHandler = () => {
    setIsFormVisible(true);
  };

  return (
    <div className="new-cost">
      {!isFormVisible && <Button onClick={isFormVisibleHandler}>Add New Cost</Button>}
      {isFormVisible && <CostForm onSaveCostData={saveCostData} onCancel={onCancelHandler}/>}
    </div>);
};

export default NewCost;
