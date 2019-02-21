const getDocObj = (jsObj, jsdocObj) => {
    // console.log('getProps jsObj', jsObj, 'jsdocObj', jsdocObj);

    let docObj = {
        props: {},
        slots: {},
        events: {},
        methods: {}
    };

    jsdocObj.forEach((commentItem, commentIndex) => {
        // console.log('commentItem', commentItem);
        // console.log('commentItem.memberof', commentItem.memberof);

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
                console.log('属性的类型', commentItem.longname);
                let type = commentItem.meta.code.value;
                let propName = commentItem.longname.replace('module.exports.props.', '').replace('.type', '');
                console.log('propName', propName);
                docObj.props[propName].type = type;
            }
        }

        // methods；注释必须存在，没有注释则认为是私有方法，不暴露
        else if (commentItem.memberof === 'module.exports.methods' && commentItem.comment) {
            let methodObj = {
                name: commentItem.name,
                description: commentItem.description,
                params: commentItem.params,
                returns: commentItem.returns,
                comment: commentItem.comment
            };
            docObj.methods[commentItem.name] = methodObj;
        }

        // events
        else if (commentItem.kind === 'event') {

        }
    });

    return docObj;
};

module.exports = {
    getDocObj
};