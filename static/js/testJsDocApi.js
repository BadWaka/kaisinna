// https://github.com/jsdoc2md/jsdoc-api
let jsdoc = require('jsdoc-api');

let result = jsdoc.explainSync({
    source: '/** example doclet */ \n var example = true'
});

console.log('result', result);