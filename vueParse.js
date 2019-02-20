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
    let jsObj = eval(sfcObj.script.content);
    console.log('jsObj', jsObj);
    // console.log('sfcObj', sfcObj);
};

module.exports = {
    parseVue
};

let test = './test.vue';
parseVue(test);

