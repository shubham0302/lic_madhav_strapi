'use strict';

/**
 * experience-counter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::experience-counter.experience-counter');
