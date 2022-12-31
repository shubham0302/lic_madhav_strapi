'use strict';

/**
 * clia service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::clia.clia');
