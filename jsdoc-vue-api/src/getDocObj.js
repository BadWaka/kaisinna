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

        // props
        if (commentItem.memberof === 'module.exports.props') {
            let defaultValue = JSON.parse(commentItem.meta.code.value).default;
            console.log('defaultValue', defaultValue);
            let propObj = {
                name: commentItem.name,
                description: commentItem.description,
                defaultValue,
                comment: commentItem.comment
            };
            docObj.props[commentItem.name] = propObj;
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