const description = "Patroller ID (uuidV4) used when making API requests.";

export const parameter = {
    name: "patroller_id",
    in: "path",
    require: true,
    description
}

export default {
    type: "string",
    description,
};
