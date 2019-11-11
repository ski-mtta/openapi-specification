import { parameter } from "../../components/schemas/properties/sp_number";

export default {
    tags: ["Patrollers"],
    summary: "Get Patroller",
    description:
        "Get patroller",
    operationId: "getPatroller",
    parameters: [
        parameter
    ],
    security: [
        { "bearerAuth": [] }
    ],
    "x-swagger-router-controller": "controllers/patrollers",
    responses: {
        200: {
            description: "Successfully returned patroller",
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