import { parameter } from "../../components/schemas/properties/sp_number";

export default {
    tags: ["Patrollers"],
    summary: "Get Patroller Schedule",
    description:
        "Get patroller schedule",
    operationId: "getPatrollerSchedule",
    parameters: [
        parameter
    ],
    security: [
        { "bearerAuth": [] }
    ],
    "x-swagger-router-controller": "controllers/patrollers",
    responses: {
        200: {
            description: "Successfully returned patroller schedule",
            content: {
                "application/json": {
                    schema: {
                        $ref:
                            "#/components/schemas/schedule_get_response"
                    }
                }
            }
        }
    }
}