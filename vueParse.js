const jsdocApi = require('jsdoc-api');
const fs = require('fs');
const path = require('path');
const vueTemplateCompiler = require('vue-template-compiler');

let parseVue = (filePath) => {
    let extname = path.extname(filePath);
    if (extname !== '.vue') {
        console.error('不是 .vue 文件');
    }
    let fileStr = fs.readFileSync(filePath, 'utf8');
    // 使用 vue-template-compiler 编译单文件组件
    let sfcObj = vueTemplateCompiler.parseComponent(fileStr);
    // console.log(babelCore.transform(sfcObj.script.content).code);

    // 先保存为 js 文件，再 require
    // fs.writeFileSync('./script.js', sfcObj.script.content);
    // let a = require('./script.js');
    // console.log('a', a);

    // babelCore.transformSync(sfcObj.script.content, {}, (err, result) => {
    //     let es5Code = result.code;
    //     console.log('es5Code', es5Code);
    // });

    let a = babelCore.transformSync(sfcObj.script.content);
    // let a = eval(babelCore.transformSync(sfcObj.script.content).code);
    console.log('a', a);

    // console.log('sfcObj', sfcObj);
};

module.exports = {
    parseVue
};

let test = './test.vue';
parseVue(test);

