import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const banana = await prisma.car.upsert({
    where: { carId: "BNF713" },
    update: {},
    create: {
      carId: "BNF713",
      name: "Volvo 850 ",
      fuel: "Bensin",
      fuelConsumption: 10,
      gearbox: "Manual",
      manufacturer: "Volvo",
      milage: 34000,
      taxYearly: 3500,
      estimatedValue: 5000,
      modelYear: 1997,
      ensurance: ["Halvförsäkring: 123"],
      listedPrice: 0,
    },
  });

  console.log({ banana });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
