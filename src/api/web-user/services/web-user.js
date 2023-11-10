'use strict';

/**
 * web-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::web-user.web-user');
