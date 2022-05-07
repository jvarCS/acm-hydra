import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';

import CalendarPageOne from '../../components/Events/calendarPage1';


const Events = () => {

    const [number, setNumber] = useState(0);

    const increaseNumber = () => {
        setNumber(number + 1)
    }

    return (
        <div>
            <Navigation />
            <button onClick={increaseNumber}>Increase</button>
            <h1>{number}</h1>
            <CalendarPageOne />
            <Footer />
        </div>
    )
}

export default Events