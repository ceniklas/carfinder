import * as request from 'superagent';
import { Car, PrismaClient } from '@prisma/client'


const cars = [
    'BNF713',
    'LWY634',
    'JLF197',
    'NZB630',
];

console.log('------------ Cars ------------');
cars.forEach(async car => {
    const response1 = await request.get(`https://bilskatt.nu/${car}`)
    const response2 = await request.get(`https://www.compricer.se/ajax/vehicle-data/?registernumber=${car}`)
    const response3 = await request.get(`https://bilskatt.nu/autocomplete/${car}`)
    //const response4 = await superagent.get(`https://biluppgifter.se/fordon/${car}`)
    const response5 = await request.get(`https://api.bytbil.com/blocket-basedata-api/v2/vehicles/${car}/blocket-ai-base-data`)

    const carAttr = JSON.parse(response5.text).data.attributes;
    console.log(carAttr)
    const carName = carAttr.blocket_heading // `Model: ${JSON.parse(response2.text).Data.Result.Model} (${car})`;
    const fuel = carAttr.fuel;
    const modelYear = carAttr.model_year;
    const gearBox = carAttr.gearbox;
    const distanceInKm = parseInt(carAttr.predicted_milage ?? 0, 10);
    const carValue = Math.floor(carAttr.private_valuation ? (carAttr.private_valuation + carAttr.company_valuation) / 2 : 0);

    const ensurance = parseBilskattDotNu(response1.text);
    //const bilUppg = await parseBiluppgifterDotSe(response4.text);
    console.log(`${car}`)
    console.log(`${carName} (${modelYear})`)
    console.log(`Bränsle: (${fuel}) Växellåda: ${gearBox}`)
    console.log(`Kmtal: ${distanceInKm}`)
    console.log(`Skatt: ${JSON.parse(response3.text)[0].skatt}`)
    console.log(`Värde: ${carValue}`);
    console.log(ensurance);
    console.log();

    const prisma = new PrismaClient();

    const c1 = await prisma.car.findMany();
    if (!c1.some(c => c.car_id == car)) {
        const newCar = await prisma.car.create({
            data: {
                car_id: car,
                ensurance: [ensurance],
                fuel,
                gearbox: gearBox,
                manufacturer: JSON.parse(response2.text).Data.Result.Model,
                milage: distanceInKm,
                name: carName,
                tax: parseInt(JSON.parse(response3.text)[0].skatt, 10),
                value: carValue,
                year: modelYear,
            }
        });
    }

    console.log(JSON.stringify(c1))
    prisma.$disconnect().then(() => { console.log('Disconnected.') })
})

const parseBilskattDotNu = (responseText: string) => {
    const subString = responseText.substring(responseText.lastIndexOf('<th>Helförsäkring'), responseText.lastIndexOf("</table>"));
    const splitstr = subString.split('</tr>')
    let ensurance = 'Försäkring: \n'
    splitstr.forEach(str1 => {
        if (str1.includes('<td>') && str1.includes('försäkring')) {
            const str2 = str1.split('<td>');
            const res1 = str2[0].slice(str2[0].search('<th>') + 4, str2[0].search('</th>') - 2);
            const minCost = str2[1].slice(0, str2[1].search('</td>'));
            const maxCost = str2[2].slice(0, str2[2].search('</td>'));
            const avgCost = str2[3].slice(0, str2[3].search('</td>'));
            ensurance += `${res1}: ${avgCost} (${minCost} - ${maxCost})\n`
        }
    })
    return ensurance;
}

const parseBiluppgifterDotSe = async (responseText: string) => {
    return '';
    const url = 'https://biluppgifter.se/api/v1/valuation/valuate';
    const textString = responseText.match(/{?id: '.+}?/g)[0].split('\'')
    const param = { id: textString[1] };
    console.log(param)
    const res = await request.post(url).send(param);
    return '';
}