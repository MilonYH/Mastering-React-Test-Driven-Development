const today = new Date();

const at = hours => today.setHours(hours, 0);

export const sampleAppointments = [
    {
        startsAt: at(9),
        customer: {
            firstname: 'Charlie',
            phoneNumber: "(554) 338-1814",
            stylist: "Maggie",
            service: "Beard trim",
            notes: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod " +
                "tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
        }
    },
    {
        startsAt: at(10),
        customer: {
            firstname: 'Frankie',
            phoneNumber: "(554) 338-1814",
            stylist: "Maggie",
            service: "Beard trim",
            notes: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod " +
                "tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
        }
    },
    {
        startsAt: at(11),
        customer: {
            firstname: 'Casey',
            phoneNumber: "(554) 338-1814",
            stylist: "Maggie",
            service: "Beard trim",
            notes: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod " +
                "tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
        }
    },
    {
        startsAt: at(12),
        customer: {
            firstname: 'Ashley',
            phoneNumber: "(554) 338-1814",
            stylist: "Maggie",
            service: "Beard trim",
            notes: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod " +
                "tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
        }
    },
    {
        startsAt: at(13),
        customer: {
            firstname: 'Jordan',
            phoneNumber: "(554) 338-1814",
            stylist: "Maggie",
            service: "Beard trim",
            notes: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod " +
                "tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
        }
    },
    {
        startsAt: at(14),
        customer: {
            firstname: 'Jay',
            phoneNumber: "(554) 338-1814",
            stylist: "Maggie",
            service: "Beard trim",
            notes: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod " +
                "tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
        }
    },
    {
        startsAt: at(15),
        customer: {
            firstname: 'Alex',
            phoneNumber: "(554) 338-1814",
            stylist: "Maggie",
            service: "Beard trim",
            notes: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod " +
                "tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
        }
    },
    {
        startsAt: at(16),
        customer: {
            firstname: 'Jules',
            phoneNumber: "(554) 338-1814",
            stylist: "Maggie",
            service: "Beard trim",
            notes: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod " +
                "tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
        }
    },
    {
        startsAt: at(17),
        customer: {
            firstname: 'Stevie',
            phoneNumber: "(554) 338-1814",
            stylist: "Maggie",
            service: "Beard trim",
            notes: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod " +
                "tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
        }
    }
];