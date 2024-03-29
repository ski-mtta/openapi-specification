const PATROLLERS_PATH = `/patrollers`;
const PATROLLERS_ID_PATH = `${PATROLLERS_PATH}/{sp_number}`;

const PATROLLERS_SCHEDULE = `${PATROLLERS_ID_PATH}/schedule`;
const PATROLLERS_SCHEDULE_ID = `${PATROLLERS_SCHEDULE}/{schedule_id}`;

const PATROLLERS_DUTY = `${PATROLLERS_ID_PATH}/duty`;
const PATROLLERS_DUTY_ID = `${PATROLLERS_DUTY}/{duty_id}`;

const PATROLLERS_TIMESHEETS = `${PATROLLERS_ID_PATH}/timesheets`;
const PATROLLERS_TIMESHEETS_ID = `${PATROLLERS_TIMESHEETS}/{timesheet_id}`;

const PATROLLERS_GEAR_CHECKOUT = `${PATROLLERS_ID_PATH}/gear_checkout`;
const PATROLLERS_GEAR_CHECKOUT_ID = `${PATROLLERS_GEAR_CHECKOUT}/{checkout_id}`;

const PATROLLERS_SNOW_MOBILE_CHECKOUT = `${PATROLLERS_ID_PATH}/snow_mobile_checkout`;
const PATROLLERS_SNOW_MOBILE_CHECKOUT_ID = `${PATROLLERS_SNOW_MOBILE_CHECKOUT}/{checkout_id}`;

export default {
    [PATROLLERS_PATH]: {
        summary: "Patroller API Base Url",
        description: "Patroller Web APIs",
        post: require("./post").default,
        get: require('./get_patrollers').default
    },
    [PATROLLERS_ID_PATH]: {
        summary: "Patrollers API Patroller Resources",
        description: "Patroller Web APIs",
        get: require("./get_patroller").default
    },
    [PATROLLERS_SCHEDULE]: {
        summary: "Patrollers API Patroller Schedule Resources",
        description: "Patroller Web APIs",
        get: require("./get_schedule").default,
        post: require("./post_schedule").default
    },
    [PATROLLERS_SCHEDULE_ID]: {},
    [PATROLLERS_DUTY]: {},
    [PATROLLERS_DUTY_ID]: {},
    [PATROLLERS_TIMESHEETS]: {},
    [PATROLLERS_TIMESHEETS_ID]: {},
    [PATROLLERS_GEAR_CHECKOUT]: {},
    [PATROLLERS_GEAR_CHECKOUT_ID]: {},
    [PATROLLERS_SNOW_MOBILE_CHECKOUT]: {},
    [PATROLLERS_SNOW_MOBILE_CHECKOUT_ID]: {}
};
