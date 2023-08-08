import './App.css';
import Checkbox from './components/Checkbox';
import { useCallback, useState } from 'react';

function App() {
  const [foodOn, setFoodOn] = useState(false);
  const [drinkOn, setDrinkOn] = useState(false);
  const [dessertOn, setDessertOn] = useState(false);

  const foodChange = useCallback((e) => setFoodOn(e.target.checked), []);
  const drinkChange = (e) => setDrinkOn(e.target.checked);
  const dessertChange = (e) => setDessertOn(e.target.checked);

  return (
    <div className="App">
      <Checkbox label="food" on={foodOn} onChange={foodChange} />
      <Checkbox label="drink" on={drinkOn} onChange={drinkChange} />
      <Checkbox label="dessert" on={dessertOn} onChange={dessertChange} />
    </div>
  );
}

export default App;
