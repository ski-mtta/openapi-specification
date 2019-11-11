export default {
    type: "object",
    required: [
        "start_date",
        "end_date",
        "attendee",
        "sp_number",
        "location",
        "day",
        "overnight"
    ],
    properties: {
        start_date: {
            $ref: "#/components/schemas/date"
        },
        end_date: {
            $ref: "#/components/schemas/date"
        },
        attendee: {
            $ref: "#/components/schemas/attendee"
        },
        sp_number: {
            $ref: "#/components/schemas/sp_number"
        },
        location: {
            $ref: "#/components/schemas/location"
        },
        day: {
            $ref: "#/components/schemas/is_patrol_type"
        },
        overnight: {
            $ref: "#/components/schemas/is_patrol_type"
        }
    }
};
