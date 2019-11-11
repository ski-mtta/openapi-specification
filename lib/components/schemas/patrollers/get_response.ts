import first_name from '../properties/first_name';
import last_name from '../properties/last_name';
import sp_number from '../properties/sp_number';
import email from '../properties/email';
import phone_number from '../properties/phone_number';

export default {
    type: "object",
    required: [
        "id",
        "first_name",
        "last_name",
        "sp_number",
        "email",
        "primary_phone",
        "physical_address",
    ],
    properties: {
        id: {
            $ref: "#/components/schemas/patroller_id"
        },
        first_name,
        last_name,
        sp_number,
        email,
        phone_number,
        primary_phone: {
            $ref: "#/components/schemas/phone_number"
        },
        secondary_phone: {
            $ref: "#/components/schemas/phone_number"
        },
        physical_address: {
            $ref: "#/components/schemas/physical_address"
        },
    }
};
