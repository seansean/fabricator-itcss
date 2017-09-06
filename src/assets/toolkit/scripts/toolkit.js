/**
 * Toolkit JavaScript
 */
/* global jQuery */
require('custom-event-polyfill'); // Adds CustomEvent support to IE
require('picturefill');
require('wicg-focus-ring');// Polyfill for `:focus-ring`

const boomsvgloader = require('boomsvgloader');
const spriteSheetURL = document.body.getAttribute('data-sprites');

// Load svg spritesheet
if (spriteSheetURL) {
    boomsvgloader.load(spriteSheetURL);
}

require('./modules/btn-menu.js');
