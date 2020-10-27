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

    const labelFor = formElement => container.querySelector(`label[for=${formElement}]`);

    const field = name => form('customer').elements[name];

    const expectToBeInputFieldOfTypeText = formElement => {
        expect(formElement).not.toBeNull();
        expect(formElement.tagName).toEqual('INPUT');
        expect(formElement.type).toEqual('text');
    }

    //more abstract testing functions for customer form

    const itRendersAsATextBox = (fieldName) => {
        it('renders a text box', () => {
            render(<CustomerForm/>);
            expectToBeInputFieldOfTypeText(field(fieldName));
        });
    }

    const itIncludesTheExistingValue = (fieldName) => {
        it('includes the existing value', () => {
            render(<CustomerForm {...{[fieldName]: 'value'}}/>);
            expect(field(fieldName).value).toEqual('value');
        });
    }

    const itRendersAForm = () => {
        it('renders a form', () => {
            render(<CustomerForm/>);
            expect(form('customer')).not.toBeNull();
        });
    }

    const itRendersALabel = (fieldName, labelContent) => {
        it('renders a label', () => {
            render(<CustomerForm/>);
            expect(labelFor(fieldName).textContent).toEqual(labelContent);
        });
    }

    const itAssignsAnIdThatMatchesLabelId = (inputId) => {
        it('assigns an id that matches the label id', () => {
            render(<CustomerForm/>);
            expect(field(inputId).id).toEqual(inputId);
        });
    }

    const itSubmitsExistingValueWhenSubmitted = (fieldName, value) => {
        it('saves existing value when submitted', async () => {
            expect.hasAssertions();
            render(
                <CustomerForm
                    {...{ [fieldName]: value }}
                    onSubmit={props =>
                        expect(props[fieldName]).toEqual(value)
                    }
                />
            );
            await ReactTestUtils.Simulate.submit(form('customer'));
        });
    }

    const itSubmitsNewValue = (fieldName, value) => {
        it('saves changed value when submitted', async () => {
            expect.hasAssertions();
            render(
                <CustomerForm
                    {...{[fieldName]: 'existingValue'}}
                    onSubmit={props =>
                        expect(props[fieldName]).toEqual(value)
                    }
                />);

            await ReactTestUtils.Simulate.change(field(fieldName), {
                target: {value:value, name:fieldName}});
            await ReactTestUtils.Simulate.submit(form('customer'));
        });
    }


    describe('first name field', () => {

        itRendersAForm();

        itRendersAsATextBox('firstName');

        itIncludesTheExistingValue('firstName');

        itRendersALabel('firstName', 'First name');

        itAssignsAnIdThatMatchesLabelId('firstName');

        itSubmitsExistingValueWhenSubmitted('firstName', 'Ashley');

        itSubmitsNewValue('firstName', 'Jamie');

    });

    describe('last name field', () => {
        itRendersAsATextBox('lastName');

        itIncludesTheExistingValue('lastName');

        itRendersALabel('lastName', 'Last name');

        itSubmitsExistingValueWhenSubmitted('lastName', 'Michaels');

        itSubmitsNewValue('lastName', 'Bob');
    });

    describe('phone number field', () => {
        itRendersAsATextBox('phoneNumber');

        itIncludesTheExistingValue('phoneNumber');

        itRendersALabel('phoneNumber', 'Phone number');

        itSubmitsExistingValueWhenSubmitted('phoneNumber', '07223/22718');

        itSubmitsNewValue('phoneNumber', '0151/52221371');
    });

    it('has a submit button', () => {
        render(<CustomerForm/>);
        const submitButton = container.querySelector('input[type="submit"]');
        expect(submitButton).not.toBeNull();
    });


});