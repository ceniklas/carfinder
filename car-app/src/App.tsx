import { useEffect, useState } from 'react';
import './App.css';
import { Car } from '@prisma/client';
import { CarCard } from './car-card.component';
import { CarDialog } from './car-dialog.component';
import carImage from './sports-car.svg';
import axios from 'axios';
import Button from '@material-ui/core/Button';

const baseUrl = 'http://localhost:4000/api';

const App = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car>({
    id: 0,
    car_id: '',
    ensurance: [],
    fuel: '',
    gearbox: '',
    manufacturer: '',
    milage: 0,
    name: '',
    tax: 0,
    value: 0,
    year: 0,
    fuel_consumption: 0,
    cost: 0,
  });

  const handleOpen = (car: Car) => {
    setSelectedCar(car);
    setOpen(true);
  };

  const addCar = (carId: Pick<Car, 'car_id'>) => {
    axios.post<Car>(`${baseUrl}/car/create`, carId)
      .then(({ data }) => {
        setCars([...cars, data])
      });
  };

  const handleClose = (car?: Car) => {
    if (car) {
      console.log(car);

      axios.post<Car>(`${baseUrl}/car/update`, car)
        .then(({ data }) => {
          setCars(cars.map(car => car.id === data.id ? data : car))
        });
    }

    setOpen(false);
  };

  useEffect(() => {
    axios.get<Car[]>(`${baseUrl}/cars`)
      .then(({ data }) => setCars(data));
  }, []);

  const tempCar: Pick<Car, 'car_id'> = { car_id: 'WHX998' };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <div></div>
          <div className="App-header-title">
            <h1>Cars</h1>
            <img src={carImage} className="App-logo" alt="logo" />
          </div>
          <Button onClick={() => addCar(tempCar)} color="primary" variant="contained" style={{ marginLeft: '2rem' }}>
            Add Car
          </Button>
        </header>
        <div className="App-body">
          {cars.map(car => <CarCard key={car.id} car={car} onClick={() => handleOpen(car)} />)}
        </div>
      </div>
      <CarDialog car={selectedCar} open={open} handleClose={handleClose} />
    </>
  );
}

export default App;
