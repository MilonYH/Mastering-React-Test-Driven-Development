import React from 'react';

const appointmentTimeOfDay = startsAt => {
    const [h,m] = new Date(startsAt).toTimeString().split(':');
    return `${h}:${m}`;
}

export const Appointment = ({customer}) => {
    return (
        <div>
            {customer.firstname}
        </div>
    );
}

export const AppointmentsDayView = ({appointments}) => {
    return (
        <div id="appointmentsDayView">
            <ol>
                {appointments.map((item, index) => {
                    return <li key={index}>
                        {appointmentTimeOfDay(item.startsAt)}
                    </li>
                })}
            </ol>
            {appointments.length === 0 ? (
                <p>There are no appointments scheduled for today.</p>
            ): (
                <Appointment {...appointments[0]}/>
            )}
        </div>
    );
};