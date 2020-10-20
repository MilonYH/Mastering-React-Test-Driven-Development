import React from 'react';
import {createContainer} from "./domManipulators";
import {CustomerForm} from "../src/components/CustomerForm";
import {beforeEach, describe, it} from "@jest/globals";
import ReactTestUtils from 'react-dom/test-utils';

describe('CustomerForm', () => {

    let render, container;

    beforeEach(() => {
        ({render, container} = createContainer())
    });

    const form = id => container.querySelector(`form[id="${id}"]`);

    const expectToBeInputFieldOfTypeText = formElement => {
        expect(formElement).not.toBeNull();
        expect(formElement.tagName).toEqual('INPUT');
        expect(formElement.type).toEqual('text');
    }

    const labelFor = formElement => container.querySelector(`label[for=${formElement}]`);

    const field = name => form('customer').elements[name];

    describe('first name field', () => {

        it('renders a form', () => {
            render(<CustomerForm/>);
            expect(form('customer')).not.toBeNull();
        });

        it('renders a text box', () => {
            render(<CustomerForm/>);
            expectToBeInputFieldOfTypeText(field('firstName'));
        });

        it('includes the existing value', () => {
            render(<CustomerForm firstName="Ashley"/>);
            expect(field('firstName').value).toEqual('Ashley');
        });

        it('renders a label', () => {
            render(<CustomerForm/>);
            expect(labelFor('firstName').textContent).toEqual('First name');
        });

        it('assigns an id that matches the label id', () => {
            render(<CustomerForm/>);
            expect(field('firstName').id).toEqual('firstName');
        });

        it('saves existing value when submitted', async() => {
            expect.hasAssertions();
            render(
                <CustomerForm
                    firstName="Ashley"
                    onSubmit={({ firstName }) =>
                        expect(firstName).toEqual('Ashley')
                    }
                />
            );
            await ReactTestUtils.Simulate.submit(form('customer'));
        });
        it('saves changed value when submitted', async() => {
            expect.hasAssertions();
            render(
                <CustomerForm
                    firstName="Jamie"
                    onSubmit={({ firstName }) =>
                        expect(firstName).toEqual('Jamie')
                    }
                />
            );

            await ReactTestUtils.Simulate.change(field('firstName'), { target: {value: 'Jamie'}});
            await ReactTestUtils.Simulate.submit(form('customer'));
        });
    });





});