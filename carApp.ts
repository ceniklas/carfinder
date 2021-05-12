import { PrismaClient } from '@prisma/client';
import * as bodyParser from 'body-parser';
import * as express from 'express';

const app = express();
const port = 4000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('content-type', 'application/json');
  console.log('Bod: ', req.body);
  next();
});

app.get('/api/cars', async (req, res) => {
  const prisma = new PrismaClient();
  const cars = await prisma.car.findMany();
  res.send(cars);
  await prisma.$disconnect();
})

app.post('/api/car/create', async (req, res) => {
  console.log('Hi.')
  console.log(req.body)
  //req.
  const prisma = new PrismaClient();
  const cars = await prisma.car.findMany();
  //res.send(req);
  //res.json(req);
  
  await prisma.$disconnect();

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

