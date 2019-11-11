import authentication from "./authentication";
import patrollers from "./patrollers";
import directors from "./directors";
import properties from "./properties"
import schedules from "./schedules";

export default {
    ...authentication,
    ...patrollers,
    ...directors,
    ...properties,
    ...schedules
};
