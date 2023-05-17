'use strict';

/**
 * best-policy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::best-policy.best-policy');
