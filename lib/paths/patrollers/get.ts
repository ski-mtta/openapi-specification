import { parameter } from "../../components/schemas/properties/patroller_id";

export default {
    tags: ["Patrollers"],
    summary: "Get Patroller",
    description:
        "Get patroller",
    operationId: "getPatroller",
    parameters: [
        parameter
    ],
    "x-swagger-router-controller": "controllers/patrollers",
    responses: {
        200: {
            description: "Successfully created a new ski patroller",
            content: {
                "application/json": {
                    schema: {
                        $ref:
                            "#/components/schemas/patrollers_get_response"
                    }
                }
            }
        }
    }
}