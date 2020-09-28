import React from 'react';
import ReactDOM from 'react-dom';
import {Appointment, AppointmentsDayView} from "../src/components/appointment";
import {beforeEach, describe, it} from "@jest/globals";
import ReactTestUtils from 'react-dom/test-utils';


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
        render(<AppointmentsDayView appointments={appointments}/>);
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

    });

    it('initially shows a message saying there are no appointments today', () => {
        render(<AppointmentsDayView appointments={[]}/>);
        expect(container.textContent).toMatch(
            'There are no appointments scheduled for today.'
        );
    });

    it('selects the first appointment by default', () => {
       render(<AppointmentsDayView appointments={appointments}/>);
       expect(container.textContent).toMatch('Ashley');
    });

    it('has a button element in each li', () => {
        render(<AppointmentsDayView appointments={appointments}/>);
        expect(container.querySelectorAll('li > button')).toHaveLength(appointments.length);
        expect(container.querySelectorAll('li > button')[0].type).toEqual('button');
    });

    it('renders another appointment when selected', () => {
        render(<AppointmentsDayView appointments={appointments}/>);
        const button = container.querySelectorAll('button')[1];
        ReactTestUtils.Simulate.click(button);
        expect(container.textContent).toMatch('Jordan');
    });
});

