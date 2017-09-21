'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function createCustomUnitPropType(isRequired) {
    return function (props, propName, componentName) {
        var prop = props[propName];
        if (prop == null) {
            if (isRequired) {
                throw new Error();
            }
        } else {
            if (!/(pt|px|em|rem|vw|vh|%)$/.test(props[propName])) {
                return new Error('Invalid prop `' + propName + '` supplied to' + ' `' + componentName + '`. Validation failed. It needs to be a size unit like pt, px, em, rem, vw, %');
            }
        }
    };
}

var unit = createCustomUnitPropType(false);
unit.isRequired = createCustomUnitPropType(true);

exports.unit = unit;