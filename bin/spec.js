#!/usr/bin/env node

const { SchemaValidator } = require('@smartrecruiters/openapi-schemas-validator')
const jsonfile = require('jsonfile');

const OUTPUT_DIRECTORY = `${__dirname}/../dist`;
const SPEC = require(`${OUTPUT_DIRECTORY}/index.js`).default;

const FILE_NAME = 'openapi.json';
const FILE_PATH = `${OUTPUT_DIRECTORY}/${FILE_NAME}`;

const { validator } = new SchemaValidator(SPEC)

if (!validator.valid) {
    console.log('validator', validator);
    console.error("Specification is invalid");
} else {
    jsonfile.writeFile(FILE_PATH, SPEC).then(() => {
        console.log(`Wrote file to ${FILE_PATH}`);
    }).catch((error) => {
        console.error(error);
    })
}


