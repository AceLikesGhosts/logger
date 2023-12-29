# Logger

a simplistic logger for general purposes, wrapper around `console`

## Examples

CJS:
```js
const Logger = require('@AceLikesGhosts/Logger');

const logger = new Logger('prefix', void 0 /** default colors */, 'sub:prefix' /** optional */);
// prefix = "sub:prefix:prefix"
logger.info('hello!'); // same as `logger.log('hello!');`
logger.warn('uh oh!');
logger.trace('im here!');
```

Typescript:
```ts
import Logger from '@AceLikesGhosts/Logger';
import type { Colors } from '@AceLikesGhosts/Logger';

const colors = {
    // prefix: 'purple' -> or hex
    // etc,,,
} satisfies Colors;

const logger = new Logger('prefix', colors /** or `void 0` for defaults */, 'sub:prefix' /** optional */);
logger.info('hello!'); // same as `logger.log('hello!');`
logger.warn('uh oh!');
logger.trace('im here!');
```