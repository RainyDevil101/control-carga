const validateFields = require('./validate-fields');
const validateJWT = require('./validate-jwt');
const role = require('./validate-roles');

module.exports = {
    ...validateFields,
    ...validateJWT,
    ...role,
}