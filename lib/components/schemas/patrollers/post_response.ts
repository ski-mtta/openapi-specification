import first_name from '../properties/first_name';
import last_name from '../properties/last_name';
import sp_number from '../properties/sp_number';
import email from '../properties/email';
import access_token from '../properties/access_token';

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
        "access_token"
    ],
    properties: {
        access_token,
        id: {
            $ref: "#/components/schemas/patroller_id"
        },
        first_name,
        last_name,
        sp_number,
        email,
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
