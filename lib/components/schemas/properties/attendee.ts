import first_name from "./first_name";
import email from "./email";
import comment from "./comment";
import guest_count from "./guest_count";

export default {
    type: "object",
    description: "Patroller Attendee Information",
    required: [
        "email",
    ],
    properties: {
        displayName: first_name,
        email,
        comment,
        additionalGuests: guest_count,
    }
};
