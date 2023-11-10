'use strict';

/**
 * web-role service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::web-role.web-role');
