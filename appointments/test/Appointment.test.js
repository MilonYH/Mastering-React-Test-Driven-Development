import React from 'react';
import ReactDOM from 'react-dom';
import {Appointment, AppointmentsDayView} from "../src/components/appointment";
import {beforeEach, describe, it} from "@jest/globals";


describe('Appointment', () => {
    let customer;
    let container;
    beforeEach(() => {
        container = document.createElement('div');
    });
    const render = component => ReactDOM.render(component, container);

    it('renders the name ashley', () => {
        customer = {firstname: 'Ashley'};
        render(<Appointment customer={customer}/>);
        expect(container.textContent).toMatch('Ashley');
    });
    it('renders the passed first name', () => {
        customer = {firstname: 'Jordan'};
        render(<Appointment customer={customer}/>);

        expect(container.textContent).toMatch('Jordan');
    });
    it('renders the passed first name', () => {
        customer = {firstname: 'Max'};
        render(<Appointment customer={customer}/>);

        expect(container.textContent).toMatch('Max');
    });
});

describe('AppointmentsDayView', () => {
    const today = new Date();
    const appointments = [
        {
            startsAt: today.setHours(12, 0),
            customer: {firstname: 'Ashley'}
        },
        {
            startsAt: today.setHours(13, 0),
            customer: {firstname: 'Jordan'}
        }
    ];

    let container;
    beforeEach(() => {
        container = document.createElement('div')
    });

    const render = component => ReactDOM.render(component, container);

    it('renders a div with the right id', () => {
        render(<AppointmentsDayView appointments={[]}/>);
        expect(container.querySelector('#appointmentsDayView')).not.toBeNull();
    });

    it('renders multiple appointments in an ol element', () => {
        render(<AppointmentsDayView appointments={appointments}/>);
        expect(container.querySelector('ol')).not.toBeNull();
        expect(
            container.querySelector('ol').children
        ).toHaveLength(2);
    });

    it('renders each appointment in an li', () => {

        render(<AppointmentsDayView appointments={appointments}/>);
        expect(container.querySelectorAll('li')).toHaveLength(2);
        expect(container.querySelectorAll('li')[0].textContent).toEqual('12:00');
        expect(container.querySelectorAll('li')[1].textContent).toEqual('13:00');

    })
});


