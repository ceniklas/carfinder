import { Car, PrismaClient } from '@prisma/client';
import express from 'express';
import { carScanner } from './bilthingy';

const app = express();
const port = process.env.SERVER_PORT;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(express.json());

app.get('/api/cars', async (req, res) => {
  const prisma = new PrismaClient();
  const cars = await prisma.car.findMany({ orderBy: { id: 'asc' } });
  res.send(cars);
  await prisma.$disconnect();
});

app.post('/api/car/create', async (req, res) => {
  const carId: Pick<Car, 'car_id'> = {
    car_id: req.body.car_id,
  };

  const prisma = new PrismaClient();
  const carInfo = await carScanner(carId.car_id)
  //console.log(carInfo);
  const newCar = await prisma.car.create({ data: { ...carInfo } });
  await prisma.$disconnect();
  res.end(JSON.stringify(newCar));
});

app.post('/api/car/update', async (req, res) => {
  const car: Car = {
    id: parseInt(req.body.id, 10),
    car_id: req.body.car_id,
    ensurance: req.body.ensurance,
    fuel: req.body.fuel,
    gearbox: req.body.gearbox,
    manufacturer: req.body.manufacturer,
    milage: parseInt(req.body.milage, 10),
    name: req.body.name,
    tax: parseInt(req.body.tax, 10),
    value: parseInt(req.body.value, 10),
    year: parseInt(req.body.year, 10),
    fuel_consumption: parseInt(req.body.fuel_consumption, 10),
    cost: parseInt(req.body.cost, 10),
  }
  const prisma = new PrismaClient();
  const updatedCar = await prisma.car.update({ where: { id: car.id }, data: { ...car } });
  await prisma.$disconnect();
  res.end(JSON.stringify(updatedCar));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

