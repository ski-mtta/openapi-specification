#!/usr/bin/env node

// const { SchemaValidator } = require('@smartrecruiters/openapi-schemas-validator')
const { validate } = require('openapi-schema-validation');
const jsonfile = require('jsonfile');

const OUTPUT_DIRECTORY = `${__dirname}/../dist`;
const SPEC = require(`${OUTPUT_DIRECTORY}/index.js`).default;

const FILE_NAME = 'openapi.json';
const FILE_PATH = `${OUTPUT_DIRECTORY}/${FILE_NAME}`;

// const { validator } = new SchemaValidator(SPEC)
const result = validate(SPEC, 3);

if (result.errors.length) {
    console.error("Specification is invalid");
    result.errors.map((error) => {
        console.log('error', JSON.stringify(error, null, 2));
    })
} else {
    jsonfile.writeFile(FILE_PATH, SPEC).then(() => {
        console.log(`Wrote file to ${FILE_PATH}`);
    }).catch((error) => {
        console.error(error);
    })
}


