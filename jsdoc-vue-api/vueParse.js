const jsdocApi = require('jsdoc-api');
const fs = require('fs');
const path = require('path');
const vueTemplateCompiler = require('vue-template-compiler');
const babel = require('@babel/core');

/**
 * 解析 .vue 文件
 * @param {string} filePath 要解析的 .vue 文件路径
 */
let parseVue = (filePath) => {

    // 转换成绝对路径
    filePath = path.resolve(__dirname, filePath);

    // 判断是否 .vue 文件
    let extname = path.extname(filePath);
    if (extname !== '.vue') {
        console.error('不是 .vue 文件');
    }

    // vue 文件内容字符串
    let fileStr = fs.readFileSync(filePath, 'utf8');

    // 使用 vue-template-compiler 编译单文件组件
    let sfcObj = vueTemplateCompiler.parseComponent(fileStr);
    // console.log('sfcObj', sfcObj);

    // 用 jsdoc-api 解析，得到 jsdoc 解析结果对象
    let jsdocObj = jsdocApi.explainSync({
        source: sfcObj.script.content
    });
    console.log('jsdocObj', jsdocObj);

    // 用 eval 执行 js 部分，得到 script 对象
    let scriptObj = eval(babel.transformSync(sfcObj.script.content).code);
    // console.log('scriptObj', scriptObj);

};



module.exports = {
    parseVue
};

let test = './test/test.vue';
parseVue(test);

