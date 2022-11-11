'use strict';

/**
 * mutual-fund service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mutual-fund.mutual-fund');
