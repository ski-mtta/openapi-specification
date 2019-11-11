import sp_number from './sp_number';
import first_name from "./first_name";
import email from "./email";
import comment from "./comment";
import guest_count from "./guest_count";

export default {
    type: "array",
    description: "Patroller Attendee Information",
    items: {
        type: "object",
        properties: {
            spNumber: sp_number,
            displayName: first_name,
            email,
            comment,
            additionalGuests: guest_count,
        }
    }
};
