import { useEffect, useState } from 'react';
import './App.css';
import { Car } from '@prisma/client';
import { CarCard } from './car-card.component';
import carImage from './sports-car.svg';

const App = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('http://localhost:4000/api/cars', {})
      .then(response =>
        response.json()
      )
      .then(data => setCars(data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cars</h1>
        <img src={carImage} className="App-logo" alt="logo" />
      </header>
      <div className="App-body">
        {cars.map(car => <CarCard key={car.id} car={car} />)}
      </div>
      <button onClick={() => {

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ car_id: 'BNF713' })
        };

        fetch('http://localhost:4000/api/car/create', requestOptions)
          .then(response => response.json())
          .then(data => { console.log(data) });

      }}>Create</button>
    </div>
  );
}

export default App;
