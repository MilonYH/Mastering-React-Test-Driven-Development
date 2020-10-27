import React from 'react';
import {createContainer} from "./domManipulators";
import {AppointmentForm} from "../src/components/AppointmentForm";
import {beforeEach, describe} from "@jest/globals";

describe('AppointmentForm', () => {
    let render, container;

    beforeEach(() => {
        ({render, container} = createContainer());
    });

    const form = id => {
        container.querySelector(`form[id="${id}"]`);
    }

    it('renders a form', () => {
        render(<AppointmentForm/>);
        expect(form('appointment')).not.toBeNull();
    });

    describe('Service field', () => {
        it('renders a select box', () => {
            render(<AppointmentForm />);
            console.log(form('appointment'));
            expect(form('appointment').elements.service).not.toBeNull();
        })
    })
})

