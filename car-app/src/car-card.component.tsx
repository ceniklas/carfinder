import { Car } from "../../server/node_modules/@prisma/client";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { CostVisulizer } from "./cost-visulizer.component";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

export type CostSummary = {
  fuel: number;
  ensurance: number;
  tax: number;
  valueReduction: number;
  total: number;
};

const prefered = {
  tax: 1500,
  fuel: "Diesel",
  gear: "Auto",
};

export const CarCard = ({
  car,
  onEdit,
  onDelete,
  staticValues,
}: {
  car: Car;
  onEdit: () => any;
  onDelete: () => any;
  staticValues: any;
}) => {
  const calcu = (): { yearly: CostSummary; perKm: CostSummary } => {
    const ensPerYear = 12 * parseInt(car.ensurance[1], 10);
    const ensPerKm = ensPerYear / staticValues.distancePerYear;
    const fuelCost =
      car.fuel === "Bensin" ? staticValues.bPrice : staticValues.dPrice;
    const fuelCostPerYear =
      fuelCost * staticValues.distancePerYear * (car.fuel_consumption / 100);
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

  return (
    <Card
      variant="outlined"
      style={{
        background: "rgb(223 223 223)",
        minWidth: "60rem",
        marginBottom: "1rem",
      }}
    >
      <CardActions style={{ justifyContent: "space-between" }}>
        <div style={{ fontWeight: "bold" }}>
          {car.car_id} - {car.name} ({car.year})
        </div>
        <div>
          <IconButton onClick={onEdit} style={{ marginLeft: "1rem" }}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={onDelete} style={{ marginLeft: "1rem" }}>
            <DeleteIcon />
          </IconButton>
        </div>
      </CardActions>
      <CardContent>
        <Typography
          align="left"
          variant="body1"
          style={{
            color: car.fuel === prefered.fuel ? "rgb(100 164 87)" : "#f07878",
          }}
        >
          Bränsle: {car.fuel}
        </Typography>
        <Typography
          align="left"
          variant="body1"
          style={{
            color: car.gearbox.includes(prefered.gear)
              ? "rgb(100 164 87)"
              : "#f07878",
          }}
        >
          Växellåda: {car.gearbox}
        </Typography>
        <Typography align="left" variant="body1">
          Distans: {car.milage} mil
        </Typography>
        <Typography
          align="left"
          variant="body1"
          style={{
            color: car.tax <= prefered.tax ? "rgb(100 164 87)" : "#f07878",
          }}
        >
          {car.tax}kr/år
        </Typography>
        <Typography align="left" variant="body1">
          Värde: ~{car.value}kr
        </Typography>
        <Typography align="left" variant="body1">
          Förbrukning: {car.fuel_consumption} liter/100km
        </Typography>
        <Typography align="left" variant="body1">
          Kostnad: {car.cost} kr
        </Typography>
        <CostVisulizer data={calcu().yearly} />
      </CardContent>
    </Card>
  );
};
