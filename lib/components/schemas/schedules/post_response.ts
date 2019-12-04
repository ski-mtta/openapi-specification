export default {
    type: "object",
    required: [
        "start_date",
        "end_date",
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
