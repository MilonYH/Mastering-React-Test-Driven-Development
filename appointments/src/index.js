import React from 'react';
import ReactDom from 'react-dom';
import {AppointmentsDayView} from "./components/appointment.jsx";
import {sampleAppointments} from "./sampleData";

ReactDom.render(
    <AppointmentsDayView appointments={sampleAppointments}/>,
    document.getElementById('root')
);