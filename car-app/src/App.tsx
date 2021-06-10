import { useEffect, useState } from "react";
import "./App.css";
import { Car } from "../../server/node_modules/@prisma/client";
import { CarCard } from "./car-card.component";
import { CarDialog } from "./car-dialog.component";
import carImage from "./sports-car.svg";
import axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const baseUrl = "http://server.ceniklas.se:15432/api";
//const baseUrl = "http://localhost:15432/api";

const App = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car>({
    id: 0,
    car_id: "",
    ensurance: [],
    fuel: "",
    gearbox: "",
    manufacturer: "",
    milage: 0,
    name: "",
    tax: 0,
    value: 0,
    year: 0,
    fuel_consumption: 0,
    cost: 0,
  });
  const [staticValues, setStaticValues] = useState({
    dPrice: 15.69,
    bPrice: 15.39,
    distancePerYear: 10000,
    costReductionPerYear: 0.1,
    years: 5,
  });
  const [newCar, setNewCar] = useState<string>("");

  const handleOpen = (car: Car) => {
    setSelectedCar(car);
    setOpen(true);
  };

  const addCar = (carId: Pick<Car, "car_id">) => {
    axios.post<Car>(`${baseUrl}/car/create`, carId).then(({ data }) => {
      setCars([...cars, data]);
    });
  };

  const handleClose = (car?: Car) => {
    if (car) {
      console.log(car);

      axios.post<Car>(`${baseUrl}/car/update`, car).then(({ data }) => {
        setCars(cars.map((car) => (car.id === data.id ? data : car)));
      });
    }

    setOpen(false);
  };

  const handleDelete = (car?: Car) => {
    if (car) {
      axios.post<Car>(`${baseUrl}/car/delete`, car).then(({ data }) => {
        setCars(cars.filter((car) => car.car_id !== data.car_id));
      });
    }
  };

  const onYearSliderChange = (event: any, value: any) => {
    setStaticValues({...staticValues, years: value});
  };
  const onDistanceSliderChange = (event: any, value: any) => {
    setStaticValues({...staticValues, distancePerYear: value});
  };

  useEffect(() => {
    axios
      .get<Car[]>(`${baseUrl}/cars`)
      .then(({ data }) => setCars(data))
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <div style={{ width: "8rem" }}>
            <Typography id="discrete-slider" gutterBottom>
              Livslängd (år)
            </Typography>
            <Slider
              value={staticValues.years}
              onChange={onYearSliderChange}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              min={1}
              max={15}
            />
            <Typography id="discrete-slider" gutterBottom>
              Distans (km)
            </Typography>
            <Slider
              value={staticValues.distancePerYear}
              onChange={onDistanceSliderChange}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1000}
              min={1}
              max={100000}
            />
          </div>
          <div className="App-header-title">
            <h1>Brum</h1>
            <img src={carImage} className="App-logo" alt="logo" />
          </div>
          <div
            style={{
              background: "white",
              padding: "1rem",
              display: "flex",
              borderRadius: "4px",
            }}
          >
            <TextField
              id="form-car-id"
              margin="none"
              label="Registreringsnummer"
              value={newCar}
              onChange={(e) => setNewCar(e.target.value.toUpperCase())}
              variant="outlined"
            />
            <Button
              onClick={() => addCar({ car_id: newCar })}
              color="primary"
              variant="contained"
              style={{ marginLeft: "1rem" }}
            >
              Add Car
            </Button>
          </div>
        </header>
        <div className="App-body">
          {cars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onEdit={() => handleOpen(car)}
              onDelete={() => handleDelete(car)}
              staticValues={staticValues}
            />
          ))}
        </div>
      </div>
      <CarDialog car={selectedCar} open={open} handleClose={handleClose} />
    </>
  );
};

export default App;
