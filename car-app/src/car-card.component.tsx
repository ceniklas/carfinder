import { Car } from '../../server/node_modules/@prisma/client'

const staticValues = {
  dPrice: 15.69,
  bPrice: 15.39,
  distancePerYear: 10000,
  costReductionPerYear: 0.10,
  years: 5,
};

const prefered = {
  tax: 1500,
  fuel: "Diesel",
  gear: "Auto",
};

export const CarCard = ({ car, onClick }: { car: Car; onClick: () => any }) => {
  const calcu = () => {
    const ensPerYear =
      12 *
      parseInt(
        (
          car.ensurance?.[0]?.match(/(?:(Halvförsäkring:.))(\d+)/g)?.[0] ?? ""
        ).split(" ")?.[1],
        10
      );
    const ensPerKm = ensPerYear / staticValues.distancePerYear;
    const fuelCost =
      car.fuel === "Bensin" ? staticValues.bPrice : staticValues.dPrice;
    const fuelCostPerYear =
      (fuelCost * staticValues.distancePerYear) * (car.fuel_consumption / 100);
    const valueAfterYears =
      car.cost *
      Math.pow(1 - staticValues.costReductionPerYear, staticValues.years);
    const valueReductionPerKm =
      (car.cost - valueAfterYears) /
      (staticValues.distancePerYear * staticValues.years);
    const valueReductionPerKmPerYear =
      valueReductionPerKm * staticValues.distancePerYear;

    return {
      yearly: {
        fuel: fuelCostPerYear,
        ensurance: ensPerYear,
        tax: car.tax,
        valueReduction: valueReductionPerKmPerYear,
        total:
          fuelCostPerYear + ensPerYear + car.tax + valueReductionPerKmPerYear,
      },
      perKm: {
        fuel: (fuelCost * car.fuel_consumption) / 100,
        ensurance: ensPerKm,
        tax: car.tax / staticValues.distancePerYear,
        valueReduction: valueReductionPerKm,
        total:
          (fuelCost * car.fuel_consumption) / 100 +
          ensPerKm +
          car.tax / staticValues.distancePerYear +
          valueReductionPerKm,
      },
    };
  };
  console.log(calcu())
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: "#656972",
        padding: "1.5rem",
        borderRadius: "0.5rem",
        margin: "1rem 0",
      }}
    >
      <div style={{ fontWeight: "bold" }}>
        {car.id} - {car.car_id} - {car.name} ({car.year})
      </div>
      <div style={{ fontSize: "1rem" }}>
        <div>
          Bränsle:{" "}
          <span
            style={{
              color: car.fuel === prefered.fuel ? "#98e988" : "#f07878",
            }}
          >
            {car.fuel}
          </span>
        </div>
        <div>
          Växellåda:{" "}
          <span
            style={{
              color: car.gearbox.includes(prefered.gear)
                ? "#98e988"
                : "#f07878",
            }}
          >
            {car.gearbox}
          </span>
        </div>
        <div>Försäkring: {car.ensurance[0]}</div>
        <div>Tillverkare: {car.manufacturer}</div>
        <div>Distans: {car.milage}km</div>
        <div>
          Skatt:{" "}
          <span
            style={{ color: car.tax <= prefered.tax ? "#98e988" : "#f07878" }}
          >
            {car.tax}kr/år
          </span>
        </div>
        <div>Värde: ~{car.value}kr</div>
        <div>Förbrukning: {car.fuel_consumption} liter/100km</div>
        <div>Kostnad: {car.cost}kr</div>
        <div>TL;DR: <pre>{calcu().yearly.total}</pre></div>
      </div>
    </div>
  );
};
