'use client';
import { useAppContext } from '../appcontext';
import { bank, atm, wallet, money, card, paid, sell, receipt, receiptlong, store, cart, trend, trendup, trenddown, barchart, chart, work, business, calendar, android, apartment, bakery, baseball, basketball, bed, bolt, burger, call, car, cards, casino, child, coffee, controller, crib, dentist, electricbolt, face, fastfood, fitness, football, gamepad, golf, grocery, group, groups, happy, home, hotel, icecream, joystick, library, liquor, medinformation, medservice, movie, network, nightlife, note, pawn, pediatrics, person, pets, petsupplies, phonering, pill, pizza, plane, pokerchip, pot, prescriptions, ramen, resturant, school, shopping, smartphone, soccer, solar, stethoscope, stroller, tenis, theater, transportation, tv, vaccines, volleyball, whistle, wifi, wind } from '../iconlibrary';

export default function addwindow() {
    const {
        openIconWindowObject: { openIconWindow, setOpenIconWindow },
    } = useAppContext();

    return (
        <div
            className={`${
                openIconWindow ? 'scale-100' : 'scale-0'
            }
            transition-all duration-75 w-[48%] max-sm:w-[82%] z-100 p-10 flex flex-col left-1/2 top-[47%] -translate-y-1/2 -translate-x-1/2 absolute gap-3 bg-neutral-50 border-neutral-100 rounded-md shadow-md`}
        >
            <Header />
            
            <IconsArea />

            <Actions />
        </div>
    );
}

function Header() {
    const {
        openIconWindowObject: { setOpenIconWindow },
    } = useAppContext();

    return (
        <div className='flex justify-between items-center'>
            <span className='flex items-center p-2 gap-3'>
                <svg className='fill-neutral-50 w-fit h-fit p-3 bg-yellow-400 rounded-lg' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160ZM240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z"/></svg>
                <h1 className='font-bold text-2xl'>All Icons</h1>
            </span>

            {/* <span
                onClick={() => setOpenIconWindow(false)}
            >
            X
            </span> */}
        </div>
    );
}

function IconsArea() {
    return (
        <div className='flex w-full p-5 bg-neutral-100 rounded-lg'>
            <AllIcons />
        </div>
    );
}

function AllIcons() {
    const iconLibrary = [
        bank,
        atm,
        wallet,
        money,
        card,
        paid,
        sell,
        receipt,
        receiptlong,
        store,
        cart,
        trend,
        trendup,
        trenddown,
        barchart,
        chart,
        work,
        business,
        calendar,
        home,
        bed,
        apartment,
        resturant,
        burger,
        fastfood,
        coffee,
        pizza,
        ramen,
        icecream,
        bakery,
        pot,
        liquor,
        grocery,
        bolt,
        electricbolt,
        solar,
        wind,
        smartphone,
        android,
        phonering,
        call,
        network,
        wifi,
        movie,
        theater,
        tv,
        note,
        nightlife,
        shopping,
        casino,
        cards,
        pokerchip,
        pawn,
        golf,
        football,
        baseball,
        soccer,
        basketball,
        tenis,
        volleyball,
        whistle,
        controller,
        joystick,
        gamepad,
        person,
        face,
        happy,
        fitness,
        group,
        groups,
        child,
        stroller,
        crib,
        pets,
        petsupplies,
        stethoscope,
        pill,
        pediatrics,
        vaccines,
        medservice,
        medinformation,
        dentist,
        prescriptions,
        car,
        plane,
        transportation,
        hotel,
        school,
        library
    ]

    return (
        <div className='flex flex-wrap gap-2 w-full'>
                {iconLibrary.map((icon, index) => (
                    <img 
                        key={index} 
                        src={icon} 
                        className='flex justify-center items-center w-fit h-fit p-2 bg-neutral-300 rounded-lg shadow-md opacity-65 cursor-pointer hover:bg-yellow-400 hover:opacity-100 transition-all duration-150'
                    />
                ))}
        </div>
    );
}



function Actions() {
    const {
        openIconWindowObject: { openIconWindow, setOpenIconWindow },
    } = useAppContext();

    return (
        <div className='flex justify-end gap-3'>
            <button 
                onClick={() => setOpenIconWindow(false)}
                className='p-3 border border-neutral-200 rounded-lg text-neutral-500 cursor-pointer hover:shadow-md transition-all duration-150'>
                Cancel
            </button>
            <button className='p-3 bg-yellow-400 rounded-lg text-neutral-50 cursor-pointer hover:shadow-md transition-all duration-150'>Save</button>
        </div>
    );
}