const description = "Ski Patrol Number";

const schema = {
    title: "Ski Patrol Number",
    type: "integer",
    format: "int32",
    example: 59,
    description
}

export const parameter = {
    name: "sp_number",
    in: "path",
    required: true,
    description,
    schema
}

export default schema;