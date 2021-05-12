import { Car } from '@prisma/client';

const prefered = {
    tax: 1500,
    fuel: 'Diesel',
    gear: 'Auto',
}

export const CarCard = ({ car }: { car: Car }) => {

    return (
        <div style={{
            backgroundColor: '#656972',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            margin: '1rem 0'
        }}>
            <div style={{fontWeight: 'bold'}}>{car.car_id} - {car.name} ({car.year})</div>
            <div style={{ fontSize: '1rem' }}>
                <div>Bränsle: <span style={{ color: car.fuel === prefered.fuel ? '#98e988' : '#f07878' }}>{car.fuel}</span></div>
                <div>Växellåda: <span style={{ color: car.gearbox.includes(prefered.gear) ? '#98e988' : '#f07878' }}>{car.gearbox}</span></div>
                <div>Försäkring: {car.ensurance}</div>
                <div>Tillverkare: {car.manufacturer}</div>
                <div>Distans: {car.milage}km</div>
                <div>Skatt: <span style={{ color: car.tax <= prefered.tax ? '#98e988' : '#f07878' }}>{car.tax}kr/år</span></div>
                <div>Värde: ~{car.value}kr</div>
            </div>
        </div>
    );
}
