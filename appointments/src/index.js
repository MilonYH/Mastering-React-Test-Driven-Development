import React from 'react';
import ReactDom from 'react-dom';
import {AppointmentsDayView} from "./components/appointmentsDayView.jsx";
import {CustomerForm} from "./components/CustomerForm.jsx";
import {sampleAppointments} from "./sampleData";

ReactDom.render(
    <CustomerForm/>,
    document.getElementById('root')
);