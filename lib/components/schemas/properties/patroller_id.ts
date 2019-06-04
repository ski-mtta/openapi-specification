const description = "Patroller ID (uuidV4) used when making API requests.";
const type = "string";

const schema = {
    type: "string",
    title: "Patroller ID",
    description,
    example: '00000000-0000-0000-0000-000000000000'
};

export const parameter = {
    name: "patroller_id",
    in: "path",
    required: true,
    description,
    schema
}

export default schema;