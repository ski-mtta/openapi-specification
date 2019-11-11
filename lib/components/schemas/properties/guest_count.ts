const description = "Patroller overnight guest count, in addition to patroller.";

const schema = {
    title: "Patroller Overnight Guest Count",
    type: "integer",
    format: "int32",
    example: 1,
    description
}

export const parameter = {
    name: "guest_count",
    in: "path",
    required: true,
    description,
    schema
}

export default schema;