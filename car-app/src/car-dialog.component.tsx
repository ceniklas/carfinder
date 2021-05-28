import { useState } from 'react';
import './App.css';
import { Car } from '@prisma/client';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const CarDialog = ({ open, car: orgCar, handleClose }: { open: boolean, car: Car, handleClose: (car?: Car) => void }) => {

  const [car, setCar] = useState<Car>(orgCar);

  const handleTextFieldChange = (e: any) => {
    switch (e.target.id) {
      case 'form-car-id':
        setCar({ ...car, car_id: e.target.value });
        break;
      case "form-car-name":
        setCar({ ...car, name: e.target.value });
        break;
      case "form-car-year":
        setCar({ ...car, year: e.target.value });
        break;
      case "form-car-fuel":
        setCar({ ...car, fuel: e.target.value });
        break;
      case "form-car-gearbox":
        setCar({ ...car, gearbox: e.target.value });
        break;
      case "form-car-ensurance":
        setCar({ ...car, ensurance: e.target.value });
        break;
      case "form-car-manufacturer":
        setCar({ ...car, manufacturer: e.target.value });
        break;
      case "form-car-milage":
        setCar({ ...car, milage: e.target.value });
        break;
      case "form-car-tax":
        setCar({ ...car, tax: e.target.value });
        break;
      case "form-car-value":
        setCar({ ...car, value: e.target.value });
        break;
      case "form-car-fuel-consumption":
        setCar({ ...car, fuel_consumption: e.target.value });
        break;
      case "form-car-cost":
        setCar({ ...car, cost: e.target.value });
        break;
      default:
        break;
    }
  };

  return <Dialog open={open} onClose={() => handleClose()} aria-labelledby="form-dialog-title" onEnter={() => setCar(orgCar)}>
    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
    <DialogContent>
      <DialogContentText>
        To subscribe to this website, please enter your email address here. We will send updates occasionally.
        </DialogContentText>

      <TextField
        id="form-car-id"
        margin="dense"
        label="Registreringsnummer"
        fullWidth
        value={car.car_id}
        onChange={handleTextFieldChange}
      />
      <TextField
        id="form-car-name"
        margin="dense"
        label="Namn"
        fullWidth
        value={car.name}
        onChange={handleTextFieldChange}
      />
      <TextField
        id="form-car-year"
        margin="dense"
        label="Årsmodell"
        fullWidth
        value={car.year}
        onChange={handleTextFieldChange}
      />
      <TextField
        id="form-car-fuel"
        margin="dense"
        label="Bränsle"
        fullWidth
        value={car.fuel}
        onChange={handleTextFieldChange}
      />
      <TextField
        id="form-car-gearbox"
        margin="dense"
        label="Växellåda"
        fullWidth
        value={car.gearbox}
        onChange={handleTextFieldChange}
      />
      <TextField
        id="form-car-ensurance"
        margin="dense"
        label="Försäkring"
        fullWidth
        value={car.ensurance}
        onChange={handleTextFieldChange}
      />
      <TextField
        id="form-car-manufacturer"
        margin="dense"
        label="Tillverkare"
        fullWidth
        value={car.manufacturer}
        onChange={handleTextFieldChange}
      />
      <TextField
        id="form-car-milage"
        margin="dense"
        label="Distans"
        fullWidth
        value={car.milage}
        onChange={handleTextFieldChange}
      />
      <TextField
        id="form-car-tax"
        margin="dense"
        label="Skatt"
        fullWidth
        value={car.tax}
        onChange={handleTextFieldChange}
      />
      <TextField
        id="form-car-value"
        margin="dense"
        label="Värde"
        fullWidth
        value={car.value}
        onChange={handleTextFieldChange}
      />
      <TextField
        id="form-car-fuel-consumption"
        margin="dense"
        label="Förbrukning"
        fullWidth
        value={car.fuel_consumption}
        onChange={handleTextFieldChange}
      />
      <TextField
        id="form-car-cost"
        margin="dense"
        label="Kostnad"
        fullWidth
        value={car.cost}
        onChange={handleTextFieldChange}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={() => handleClose()} color="default" variant="outlined">
        Cancel
        </Button>
      <Button onClick={() => handleClose(car)} color="primary" variant="contained">
        Save
        </Button>
    </DialogActions>
  </Dialog>
}