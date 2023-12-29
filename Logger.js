/**
 * Copyright (c) 2023 AceLikesGhosts
 * This codei s licensed under the MIT license (see LICENSE for details)
 */

if(!Array.prototype.includes) {
    Array.prototype.includes = function(search) {
        return !!~this.indexOf(search);
    };
}

const format =
    typeof require === 'function' &&
        typeof process === 'object' &&
        typeof process.versions === 'object' &&
        typeof process.versions.node === 'string' ?
        require('util').format
        : function() { return [...arguments].join(' '); };

const DefaultColors = Object.freeze({
    prefix: 'purple; text-weight: 800;',
    debug: 'white',
    trace: 'white',
    log: 'white',
    warn: 'white',
    error: 'red'
});

const validTypes = ['debug', 'trace', 'log', 'warn', 'error'];

/**
 * Prints out data to stdout using the data passed along.
 * @param {{
 *  type: 'log' | 'warn' | 'error' | 'debug' | 'trace';
 *  prefix: string;
 *  message: string;
 *  oParams: unknown[]
 * }} param0 
 */
function print({ type, prefix, message, oParams }) {
    const color = this.colors[type] || 'white';
    if(!validTypes.includes(type)) throw new Error('invalid argument "type", expected the type to equal one of these values "' + validTypes.join(', ') + '" but recieved "' + type + '".');
    console[type](
        `%c[${prefix}] %c%s`,
        `color: ${this.colors['prefix']}`,
        `color: ${color}`,
        format(message, oParams)
    );
}

class Logger {
    /**
     * Creates a new Logger instance with the least amount of abstraction.
     * @param {string} prefix - The string to display before each log, indicating where the log orginates from.
     * @param {Record<string, unknown>} colors - The color scheme to use within this Logger instance
     * @param {?string | undefined} type - A prefix for the prefix, indicating what is using the Logger; outside of the module which created the Logger.
     */
    constructor(prefix, colors, type) {
        if(prefix) {
            if(type && typeof type === 'string') this.prefix = type.concat(':').concat(prefix);
            else this.prefix = prefix;
        }
        else this.prefix = 'Unknown';

        this.colors = {
            ...DefaultColors,
            ...colors
        };
    }
}

for(let i = 0; i < validTypes.length; i++) {
    const type = validTypes[i];
    Logger.prototype[type] = function(message, optionalParameters) {
        print.bind(this)({
            type,
            message,
            oParams: optionalParameters,
            prefix: this.prefix
        });
    };
}

const aliases = [
    {
        orig: 'log',
        alias: 'info'
    },
    {
        orig: 'error',
        alias: 'critical'
    }
];

for(let i = 0; i < aliases.length; i++) {
    const alias = aliases[i];
    Logger.prototype[alias.alias] = function() {
        Logger.prototype[alias.orig](arguments);
    };
}

module.exports = Logger;
module.exports.default = Logger;