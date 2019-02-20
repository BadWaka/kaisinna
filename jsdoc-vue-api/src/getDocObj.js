const getDocObj = (jsObj, jsdocObj) => {
    // console.log('getProps jsObj', jsObj, 'jsdocObj', jsdocObj);

    let docObj = {};

    jsdocObj.forEach((commentItem, commentIndex) => {
        console.log('commentItem', commentItem);
        // props
        if (commentItem.memberof === 'module.exports.props') {

        }
        // methods
        else if (commentItem.memberof === 'module.exports.methods') {
            
        }
        // events
        else if (commentItem.kind === 'event') {

        }
    });
};

module.exports = {
    getDocObj
};