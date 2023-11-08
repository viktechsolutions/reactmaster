import Costs from './components/Costs/Costs';

function App() {
  const costs = [
    {
      date: new Date(2023, 2, 1),
      description: 'Fridge',
      amount: 999.99
    },
    {
      date: new Date(2023, 3, 3),
      description: 'Phone',
      amount: 799.99
    },
    {
      date: new Date(2023, 4, 4),
      description: 'Car',
      amount: 5999.99
    }
  ];

  return (
    <div>
      <Costs costs={costs}/>
    </div>)
    ;
}

export default App;
