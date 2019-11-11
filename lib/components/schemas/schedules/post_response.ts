export default {
    type: "object",
    required: [
        "attendees"
    ],
    properties: {
        attendees: {
            $ref: "#/components/schemas/attendees"
        }
    }
};
