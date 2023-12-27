/**
 * Copyright (c) 2023 AceLikesGhosts
 * This codei s licensed under the MIT license (see LICENSE for details)
 */

/**
 * Map of console printing types to the text color.
 */
declare type Colors = {
    prefix: string;
    debug: string;
    trace: string;
    log: string;
    warn: string;
    error: string;
};

/**
 * A simplistic wrapper around `console`, providing easy support for colors (css `%c`), prefixes, and sub-prefixes.
 * @example ```js
 * const Logger = require('@acelikesghosts/logger');
 * 
 *                      // default colors 👇
 * const logger = new Logger('Prefix', void 0, 'SubPrefix');
 * console.log(logger['prefix']); // "Prefix"
 * console.log(logger['colors']); // DefaultColors
 * 
 * logger.log('hello!'); // [SubPrefix:Prefix] hello!
 * ```
 * @see {console}
 */
declare class Logger {
    /**
     * The prefix which was passed to the constructor.
     */
    private readonly prefix: string;
    /**
     * The colors which were passed to the constructor.
     */
    private readonly colors: Colors;

    /**
     * Creates a new Logger instance with the least amount of abstraction.
     * @param {string} prefix - The string to display before each log, indicating where the log orginates from.
     * @param {Record<string, unknown>} colors - The color scheme to use within this Logger instance
     * @param {?string | undefined} type - A prefix for the prefix, indicating what is using the Logger; outside of the module which created the Logger.
     */
    public constructor(prefix: string, colors: Colors, type?: string | undefined);

    /**
     * Invokes the respective `console` function.
     * If possible this will attempt to invoke `util.format` with message and optional parameters.
     * @see {console}
     * @see {util}
     */
    public debug<M, P>(message: M, ...optionalParameters: P[]): void;
    /**
     * Invokes the respective `console` function.
     * If possible this will attempt to invoke `util.format` with message and optional parameters.
     * @see {console}
     * @see {util}
     */
    public trace<M, P>(message: M, ...optionalParameters: P[]): void;
    /**
     * Invokes the respective `console` function.
     * If possible this will attempt to invoke `util.format` with message and optional parameters.
     * @see {console}
     * @see {util}
     */
    public log<M, P>(message: M, ...optionalParameters: P[]): void;
    /**
     * Invokes the respective `console` function.
     * If possible this will attempt to invoke `util.format` with message and optional parameters.
     * @see {console}
     * @see {util}
     */
    public warn<M, P>(message: M, ...optionalParameters: P[]): void;
    /**
     * Invokes the  respective `console` function.
     * If possible this will attempt to invoke `util.format` with message and optional parameters.
     * @see {console}
     * @see {util}
     */
    public error<M, P>(message: M, ...optionalParameters: P[]): void;
}

export default Logger;
export type { Colors };