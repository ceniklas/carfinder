import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const banana = await prisma.car.upsert({
    where: { car_id: "BNF713" },
    update: {},
    create: {
      car_id: "BNF713",
      name: "Volvo 850 ",
      fuel: "Bensin",
      fuel_consumption: 10,
      gearbox: "Manual",
      manufacturer: "Volvo",
      milage: 34000,
      tax: 3500,
      value: 5000,
      year: 1997,
      ensurance: ["Halvförsäkring: 123"],
      cost: 0,
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
