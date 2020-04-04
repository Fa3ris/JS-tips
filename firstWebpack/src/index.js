/**
 * 
 * init a NPM project == create file package.json
 *      npm init
 * 
 * install a dependency
 *      npm install [--save-dev] package_name
 * 
 * ex: npm install --save-dev webpack
 * 
 * 
 * RUN webpack to build
 * 
 *  ./node_modules/webpack/bin/webpack.js <entry file> [--watch]
 * 
 * ex: ./node_modules/webpack/bin/webpack.js app.js
 * 
 * 
 * npm run webpack
 * 
 * npx webpack
 */

/**
 * import named exports
 */
import {foo, bar} from './log'
import foobar from './log'

/**
 * import default export
 */
import f from './log'

const label = 'foo'

console.time(label);
foo()
bar()
foobar()

console.log(f)
f()

console.timeEnd(label);