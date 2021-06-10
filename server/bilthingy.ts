import * as request from "superagent";
import { Car, PrismaClient } from "@prisma/client";
import fs from "fs";

const cars = ["BNF713", "LWY634", "JLF197", "NZB630"];

export const carScanner = async (carId: string) => {
  let response1, response2, response3, response4, response5;

  response1 = await request.get(`https://bilskatt.nu/${carId}`);
  fs.writeFileSync("response1.txt", response1.text);
  response2 = await request.get(
    `https://www.compricer.se/ajax/vehicle-data/?registernumber=${carId}`
  );
  fs.writeFileSync("response2.txt", response2.text);
  response3 = await request.get(`https://bilskatt.nu/autocomplete/${carId}`);
  fs.writeFileSync("response3.txt", response3.text);
  response4 = await request.get(`https://biluppgifter.se/fordon/${carId}`);
  fs.writeFileSync("response4.txt", response4.text);
  response5 = await request.get(
    `https://api.bytbil.com/blocket-basedata-api/v2/vehicles/${carId}/blocket-ai-base-data`
  );
  fs.writeFileSync("response5.txt", response5.text);

  const carAttr = JSON.parse(response5.text).data.attributes;
  const carName = carAttr.blocket_heading; // `Model: ${JSON.parse(response2.text).Data.Result.Model} (${carId})`;
  const fuel = carAttr.fuel;
  const modelYear = carAttr.model_year;
  const gearBox = carAttr.gearbox;
  const distanceInKm = parseInt(carAttr.predicted_mileage ?? 0, 10);
  const carValue = Math.floor(
    carAttr.private_valuation
      ? (carAttr.private_valuation + carAttr.company_valuation) / 2
      : 0
  );
  const ensurance = parseBilskattDotNu(response1.text);
  const {fuelConsumption, cost} = parseBiluppgifterDotSe(response4.text);
  

  const car: Omit<Car, "id"> = {
    car_id: carId,
    ensurance,
    fuel,
    gearbox: gearBox,
    manufacturer: JSON.parse(response2.text).Data.Result?.Model || "",
    milage: distanceInKm,
    name: carName,
    tax: parseInt(JSON.parse(response3.text)[0].skatt, 10),
    value: carValue,
    year: modelYear,
    fuel_consumption: fuelConsumption,
    cost: cost,
  };

  console.log(car);

  return car;
};

// const runBatchScan = () => {
//   cars.forEach(async car => {
//     const response1 = await request.get(`https://bilskatt.nu/${car}`)
//     const response2 = await request.get(`https://www.compricer.se/ajax/vehicle-data/?registernumber=${car}`)
//     const response3 = await request.get(`https://bilskatt.nu/autocomplete/${car}`)
//     //const response4 = await superagent.get(`https://biluppgifter.se/fordon/${car}`)
//     const response5 = await request.get(`https://api.bytbil.com/blocket-basedata-api/v2/vehicles/${car}/blocket-ai-base-data`)

//     const carAttr = JSON.parse(response5.text).data.attributes;
//     const carName = carAttr.blocket_heading // `Model: ${JSON.parse(response2.text).Data.Result.Model} (${car})`;
//     const fuel = carAttr.fuel;
//     const modelYear = carAttr.model_year;
//     const gearBox = carAttr.gearbox;
//     const distanceInKm = parseInt(carAttr.predicted_milage ?? 0, 10);
//     const carValue = Math.floor(carAttr.private_valuation ? (carAttr.private_valuation + carAttr.company_valuation) / 2 : 0);

//     const ensurance = parseBilskattDotNu(response1.text);
//     //const bilUppg = await parseBiluppgifterDotSe(response4.text);

//     const prisma = new PrismaClient();

//     const c1 = await prisma.car.findMany();
//     if (!c1.some(c => c.car_id == car)) {
//       const newCar = await prisma.car.create({
//         data: {
//           car_id: car,
//           ensurance: [ensurance],
//           fuel,
//           gearbox: gearBox,
//           manufacturer: JSON.parse(response2.text).Data.Result.Model,
//           milage: distanceInKm,
//           name: carName,
//           tax: parseInt(JSON.parse(response3.text)[0].skatt, 10),
//           value: carValue,
//           year: modelYear,
//         }
//       });
//     }

//     prisma.$disconnect().then(() => { console.log('Disconnected.') })
//   })
// };

const parseBilskattDotNu = (responseText: string) => {
  // const splitstr = responseText.match(/<th>.*försäkring..*\n.*\n.*\n.*/g);
  // const fullHalfTrafficMinMaxAvg = splitstr?.map(str => str.match(/(?<=<td>).*(?=\skr<\/td>)/g) ?? '');
  // const fullHalfTraffic = fullHalfTrafficMinMaxAvg?.map(str => str?.[2]);

  const fullHalfTrafficMinMaxAvg = responseText.match(
    /(?<=<td>).*(?=\skr<\/td>)/g
  );
  const fullHalfTraffic = fullHalfTrafficMinMaxAvg?.filter((x, i) =>
    (i + 1) % 3 === 0 ? x : null
  );
  return fullHalfTraffic ?? [];
};

const parseBiluppgifterDotSe = (responseText: string) => {
  // const url = 'https://biluppgifter.se/api/v1/valuation/valuate';
  // console.log(responseText)
  const textString =
    responseText.match(/(\d+\.+?\d+).(?:liter\/100km)/g)?.[0].split(" ")[0] ??
    "";
  return { fuelConsumption: parseInt(textString, 10) || 10, cost: 0 };
};
