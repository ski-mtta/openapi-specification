import first_name from '../properties/first_name';
import last_name from '../properties/last_name';
import sp_number from '../properties/sp_number';
import password from '../properties/password';
import email from '../properties/email';

export default {
    type: "object",
    required: [
        "first_name",
        "last_name",
        "sp_number",
        "password",
        "email",
        "primary_phone",
        "physical_address",
    ],
    properties: {
        first_name,
        last_name,
        sp_number,
        password,
        email,
        primary_phone: {
            $ref: "#/components/schemas/phone_number"
        },
        secondary_phone: {
            $ref: "#/components/schemas/phone_number"
        },
        physical_address: {
            $ref: "#/components/schemas/physical_address"
        }
    }
};
