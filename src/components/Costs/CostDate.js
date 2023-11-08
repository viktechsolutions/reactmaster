import React from 'react';
import Card from '../UI/Card';
import './CostDate.css';

const CostDate = (props) => {
  const day = props.date.toLocaleString("ru-Ru", {
    day: "2-digit"
  });
  const month = props.date.toLocaleString("ru-Ru", {
    month: "long"
  });
  const year = props.date.getFullYear();

  return (
    <Card className="cost-date">
      <div className="cost-date__day">{day}</div>
      <div className="cost-date__month">{month}</div>
      <div className="cost-date__year">{year}</div>
    </Card>
  );
};

export default CostDate;
