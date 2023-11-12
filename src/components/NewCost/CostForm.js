import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';
import './CostForm.css';

const CostForm = (props) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  function getOnChangeDescription(e) {
    setDescription(e.target.value);
  }

  const getOnChangeAmount = (e) => {
    setAmount(e.target.value);

  };

  const getOnChangeDate = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const costData = {
      description,
      amount,
      date: new Date(date),
    };

    props.onSaveCostData(costData);
    setDescription('');
    setAmount('');
    setDate('');

  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-column justify-content-center m-2">
        <div className="flex flex-column gap-2 m-2">
          <label htmlFor="description">Description</label>
          <InputText id="description" value={description} onChange={getOnChangeDescription}/>
        </div>
        <div className="flex flex-column gap-2 m-2">
          <label htmlFor="amount">Amount</label>
          <InputText id="amount" type="number" min="0.01" step="0.01" value={amount}
            onChange={getOnChangeAmount}/>
        </div>
        <div className="flex flex-column mb-3 m-2 gap-2 ">
          <label htmlFor="date">Date</label>
          <InputText type="date" id="date" value={date} onChange={getOnChangeDate}/>
        </div>
        <div className="flex flex-row justify-content-center mb-3 w-auto gap-2">
          <Button type="submit" label="Add cost"/>
          <Button label="Cancel" onClick={props.onCancel}/>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
