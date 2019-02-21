const getDocObj = (jsObj, jsdocObj) => {
    // console.log('getProps jsObj', jsObj, 'jsdocObj', jsdocObj);

    let docObj = {
        props: {},
        slots: {},
        events: {},
        methods: {}
    };

    jsdocObj.forEach((commentItem, commentIndex) => {

        // props 相关
        if (commentItem.memberof && commentItem.memberof.indexOf('module.exports.props') !== -1) {

            // props
            if (commentItem.memberof === 'module.exports.props') {
                let metaCodeValue = JSON.parse(commentItem.meta.code.value);
                // 获取默认值
                let defaultValue = metaCodeValue.default;
                // 获取是否必须
                let required = metaCodeValue.required;
                // 获取子属性
                let properties = null;
                if (commentItem.properties) {
                    properties = commentItem.properties.map((propertie, propertieIndex) => {
                        propertie.type = propertie.type.names.join('|');
                        return propertie;
                    });
                }
                let propObj = {
                    name: commentItem.name,
                    description: commentItem.description,
                    defaultValue,
                    comment: commentItem.comment,
                    required,
                    properties,
                    ignore: commentItem.ignore
                };
                docObj.props[commentItem.name] = propObj;
            }

            // 属性的类型
            else if (/^module\.exports\.props\.(\w)*\.type$/.test(commentItem.longname)) {
                // 得到类型
                let type = commentItem.meta.code.value;
                let baseTypeArr = ['String', 'Number', 'Boolean'];
                if (baseTypeArr.indexOf(type) !== -1) {
                    type = type.toLowerCase();
                }
                // 得到属性名
                let propName = commentItem.longname.replace('module.exports.props.', '').replace('.type', '');
                // 把类型赋值给属性
                docObj.props[propName].type = type;
            }
        }

        // methods；注释必须存在，没有注释则认为是私有方法，不暴露
        else if (commentItem.memberof === 'module.exports.methods' && commentItem.comment) {
            // 获得参数
            let params = null;
            if (commentItem.params) {
                params = commentItem.params.map((param, paramIndex) => {
                    param.type = param.type.names.join('|');
                    return param;
                });
            }
            // 获得返回值
            let returns = null;
            if (commentItem.returns) {
                returns = commentItem.returns.map((returnItem, returnIndex) => {
                    returnItem.type = returnItem.type.names.join('|');
                    return returnItem;
                });
            }
            let methodObj = {
                name: commentItem.name,
                description: commentItem.description,
                params,
                returns: commentItem.returns,
                comment: commentItem.comment
            };
            docObj.methods[commentItem.name] = methodObj;
        }

        // events
        else if (commentItem.kind === 'event') {
            // 获取子属性
            let properties = null;
            if (commentItem.properties) {
                properties = commentItem.properties.map((propertie, propertieIndex) => {
                    propertie.type = propertie.type.names.join('|');
                    return propertie;
                });
            }
            let eventObj = {
                name: commentItem.name,
                description: commentItem.description,
                properties,
                comment: commentItem.comment
            };
            docObj.events[commentItem.name] = eventObj;
        }
    });

    return docObj;
};

module.exports = {
    getDocObj
};