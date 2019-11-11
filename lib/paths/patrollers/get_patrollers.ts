export default {
    tags: ["Patrollers"],
    summary: "Get All Patroller",
    operationId: "getPatrollers",
    "x-swagger-router-controller": "controllers/patrollers",
    responses: {
        200: {
            description: "Successfully returned patrollers",
            content: {
                "application/json": {
                    schema: {
                        $ref:
                            "#/components/schemas/patrollers_get_all_response"
                    }
                }
            }
        }
    }
}