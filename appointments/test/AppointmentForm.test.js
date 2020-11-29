import React from 'react';
import {createContainer} from "./domManipulators";
import {AppointmentForm} from "../src/components/AppointmentForm";
import {beforeEach, describe} from "@jest/globals";
import ReactTestUtils from 'react-dom/test-utils';

describe('AppointmentForm', () => {
    let render, container;

    beforeEach(() => {
        ({render, container} = createContainer());
    });

    const form = id => container.querySelector(`form[id="${id}"]`);
    const field = (formId, name) => form(formId).elements[name];

    it('renders a form', () => {
        render(<AppointmentForm/>);
        expect(form('appointment')).not.toBeNull();
    });

    describe('service field', () => {

        const findOption = (dropdownNode, textContent) => {
            const options = Array.from(dropdownNode.childNodes);
            return options.find(
                option => option.textContent === textContent
            );
        };


        it('renders as a select box', () => {
            render(<AppointmentForm/>);
            expect(field('appointment', 'service')).not.toBeNull();
            expect(field('appointment', 'service').tagName).toEqual('SELECT');
        });
        it('initially has a blank value chosen', () => {
            render(<AppointmentForm/>);
            const firstNode = field('appointment', 'service').childNodes[0];

            expect(firstNode.value).toEqual('');
            expect(firstNode.selected).toBeTruthy();
        });
        it('lists all salon services', () => {
            const selectableServices = ['Cut', 'Blow-dry'];

            render(
                <AppointmentForm
                    selectableServices={selectableServices}
                />
            );

            const optionNodes = Array.from(
                field('appointment', 'service').childNodes
            );

            const renderedServices = optionNodes.map(
                node => node.textContent
            );

            expect(renderedServices).toEqual(
                expect.arrayContaining(selectableServices)
            );
        });

        it('pre-selects the existing value', () => {
            const services = ['Cut', 'Blow-dry'];
            render(
                <AppointmentForm
                    selectableServices={services}
                    service={"Blow-dry"}
                />
            );
            const option = findOption(
                field('appointment', 'service'),
                'Blow-dry'
            );
            expect(option.selected).toBeTruthy();
        });

        it('should render a label', () => {
            render(<AppointmentForm/>);
            const labelForServices = container.querySelector(`label[for=service]`);
            expect(labelForServices).not.toBeNull();
            expect(labelForServices.textContent).toEqual('Services');
        });

        it('should assign an id, that matches the label-id', () => {
            render(<AppointmentForm/>);
            let id = 'service';
            const labelForServices = container.querySelector(`label[for]`);
            const idForSelectBox = container.querySelector(`select[id="${id}"]`)
            expect(labelForServices.attributes['for'].value).toEqual(id);
            expect(idForSelectBox).not.toBeNull();
            expect(idForSelectBox.id).toEqual('service');
        });

        it('should save existing value, when submitted', async () => {
            expect.hasAssertions();
            render(
                <AppointmentForm
                    service={"Blow-dry"}
                    onSubmit={({service}) => {
                        expect(service).toEqual('Blow-dry');
                    }}
                />
            );
            //expect(container.querySelector('button[type=submit]')).not.toBeNull();
            await ReactTestUtils.Simulate.submit(form('appointment'));
        });

        it('should save new value, when submitted', async () => {
            expect.hasAssertions();
            render(
                <AppointmentForm
                    service={"Blow-dry"}
                    onSubmit={ ({ service }) =>
                        expect(service).toEqual('Cut')
                    }
                />
            );
            await ReactTestUtils.Simulate.change(field('appointment', 'service'), {
                target: {name: 'service', value:'Cut'}
            });

            await ReactTestUtils.Simulate.submit(form('appointment'));

        });

    });

})

