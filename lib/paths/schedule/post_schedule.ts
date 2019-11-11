import { parameter } from "../../components/schemas/properties/sp_number";

export default {
    tags: ["Patrollers"],
    summary: "Post Patroller Schedule",
    description:
        "Post patroller schedule",
    operationId: "postPatrollerSchedule",
    requestBody: {
        description: "Ski Patroller Schedule Information",
        required: true,
        content: {
            "application/json": {
                schema: {
                    $ref:
                        "#/components/schemas/schedule_post_request"
                }
            }
        }
    },
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
                            "#/components/schemas/schedule_post_response"
                    }
                }
            }
        }
    }
}