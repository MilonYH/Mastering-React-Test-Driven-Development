import React from 'react';

export const AppointmentForm = ({selectableServices, service}) => {
    return (
        <form id="appointment">
            <label htmlFor="service">Services</label>
            <select
                id="service"
                name="service"
                value={service}
                readOnly
            >
                <option/>
                {selectableServices.map((service, index) => (
                    <option key={index}>{service}</option>
                ))}
            </select>
            <button type={"submit"}>Submit</button>
        </form>
    );
}

AppointmentForm.defaultProps = {
    selectableServices: [
        'Cut',
        'Blow-dry',
        'Cut & color',
        'Beard trim',
        'Cut & beard trim',
        'Extensions'],
    service: 'Cut & Blow-dry'
};
