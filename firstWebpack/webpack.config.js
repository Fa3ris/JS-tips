const path = require('path');

module.exports = {

/**
 * --watch option
 */
watch: true,

/**
 *  production | development | none 
 * 
 *  default is production
 */
mode: 'development',


/**
 * default behavior
 */
output : {
    path : path.resolve('./dist'),
    filename: 'main.js'
}

}