(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["extension"] = factory();
	else
		root["extension"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var STYLE_PROPS = {
    FONT_FAMILY: "font-family",
    FONT_SIZE: "font-size",
    FONT_WEIGHT: "font-weight",
    FONT_STYLE: "font-style",
    FONT_STRETCH: "font-stretch",
    LINE_HEIGHT: "line-height",
    LETTER_SPACING: "letter-spacing",
    TEXT_ALIGN: "text-align",
    COLOR: "color",
    WIDTH: "width",
    HEIGHT: "height",
    OBJECT_FIT: "object-fit",
    TRANSFORM: "transform",
    OPACITY: "opacity",
    BLEND_MODE: "mix-blend-mode",
    BORDER_RADIUS: "border-radius",
    BACKGROUND_BLEND_MODE: "background-blend-mode",
    BACKGROUND_IMAGE: "background-image",
    BACKGROUND_COLOR: "background-color",
    TEXT_SHADOW: "text-shadow",
    BOX_SHADOW: "box-shadow",
    BORDER: "border",
    BACKGROUND_ORIGIN: "background-origin",
    BACKGROUND_CLIP: "background-clip",
    TEXT_STROKE: "text-stroke",
    BORDER_STYLE: "border-style",
    BORDER_WIDTH: "border-width",
    BORDER_IMAGE_SOURCE: "border-image-source",
    BORDER_IMAGE_SLICE: "border-image-slice",
    BACKDROP_FILTER: "backdrop-filter",
    FILTER: "filter",
    TEXT_FILL_COLOR: "text-fill-color",
    FONT_COLOR: "color"
};

var OPTION_NAMES = {
    COLOR_FORMAT: "colorFormat",
    SHOW_DEFAULT_VALUES: "showDefaultValues",
    SHOW_DIMENSIONS: "showDimensions",
    UNITLESS_LINE_HEIGHT: "unitlessLineHeight",
    MIXIN: "mixin"
};

exports.OPTION_NAMES = OPTION_NAMES;
exports.STYLE_PROPS = STYLE_PROPS;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extensionModel = __webpack_require__(5);

var _gradient = __webpack_require__(6);

var _gradient2 = _interopRequireDefault(_gradient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MAX_RGB_VALUE = 255;
var MAX_PERCENT = 100;
var MAX_ANGLE = 360;
var HEX_BASE = 16;

var alphaFormatter = new Intl.NumberFormat("en-US", {
    useGrouping: false,
    maximumFractionDigits: 2
});

function toHex(num) {
    var hexNum = Math.trunc(num + num / MAX_RGB_VALUE);
    hexNum = Math.max(0, Math.min(hexNum, MAX_RGB_VALUE));

    return (hexNum < HEX_BASE ? "0" : "") + hexNum.toString(HEX_BASE);
}

function toHexString(color) {
    var hexCode = color.hexBase();

    if (color.a < 1) {
        hexCode += toHex(color.a * MAX_RGB_VALUE);
    }

    return `#${hexCode}`;
}

function toRGBAString(color) {
    var rgb = `${Math.round(color.r)}, ${Math.round(color.g)}, ${Math.round(color.b)}`;

    return color.a < 1 ? `rgba(${rgb}, ${alphaFormatter.format(color.a)})` : `rgb(${rgb})`;
}

function toHSLString(color) {
    var hslColor = color.toHSL();
    var hsl = `${Math.round(hslColor.h * MAX_ANGLE)}, ${Math.round(hslColor.s * MAX_PERCENT)}%, ${Math.round(hslColor.l * MAX_PERCENT)}%`;

    return color.a < 1 ? `hsla(${hsl}, ${alphaFormatter.format(color.a)})` : `hsl(${hsl})`;
}

function getColorStringByFormat(color, colorFormat) {
    if (!("r" in color && "g" in color && "b" in color && "a" in color)) {
        return "";
    }

    switch (colorFormat) {
        case "hex":
            return toHexString(color);

        case "rgb":
            return toRGBAString(color);

        case "hsl":
            return toHSLString(color);

        default:
            return color.a < 1 ? toRGBAString(color) : toHexString(color);
    }
}

var Color = function () {
    function Color(colorObject) {
        _classCallCheck(this, Color);

        this.object = colorObject;
    }

    _createClass(Color, [{
        key: "valueOf",
        value: function valueOf() {
            var _object = this.object,
                r = _object.r,
                g = _object.g,
                b = _object.b,
                a = _object.a;


            return `color::r:${r}:g:${g}:b:${b}:a:${a}`;
        }
    }, {
        key: "equals",
        value: function equals(other) {
            return this.object.equals(other.object);
        }
    }, {
        key: "toGradient",
        value: function toGradient() {
            var _object2 = this.object,
                r = _object2.r,
                g = _object2.g,
                b = _object2.b,
                a = _object2.a;


            return _gradient2.default.fromRGBA({ r, g, b, a });
        }
    }, {
        key: "toStyleValue",
        value: function toStyleValue(_ref, variables) {
            var colorFormat = _ref.colorFormat;

            var value = this.valueOf();

            if (variables && value in variables) {
                return variables[value];
            }

            return getColorStringByFormat(this.object, colorFormat);
        }
    }], [{
        key: "fromRGBA",
        value: function fromRGBA(_ref2) {
            var r = _ref2.r,
                g = _ref2.g,
                b = _ref2.b,
                _ref2$a = _ref2.a,
                a = _ref2$a === undefined ? 1 : _ref2$a;

            return new Color(new _extensionModel.Color({ r, g, b, a }));
        }
    }]);

    return Color;
}();

exports.default = Color;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _scalar = __webpack_require__(3);

var _scalar2 = _interopRequireDefault(_scalar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Length = function () {
    function Length(value) {
        var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "px";

        _classCallCheck(this, Length);

        this.value = value;
        this.unit = unit;
    }

    _createClass(Length, [{
        key: "valueOf",
        value: function valueOf() {
            var value = this.value,
                unit = this.unit;


            return `length::v:${value}:u:${unit}`;
        }
    }, {
        key: "equals",
        value: function equals(other) {
            return this.value === other.value && this.unit === other.unit;
        }
    }, {
        key: "toStyleValue",
        value: function toStyleValue(_ref) {
            var densityDivisor = _ref.densityDivisor;

            return this.value === 0 ? "0" : `${new _scalar2.default(this.value / densityDivisor, 1).toStyleValue()}${this.unit}`;
        }
    }]);

    return Length;
}();

exports.default = Length;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function round(number, precision) {
    var formattedNumber = Number(number).toLocaleString("en-US", {
        useGrouping: false,
        maximumFractionDigits: precision
    });

    return Number(formattedNumber);
}

var DEFAULT_PRECISION = 2;

var Scalar = function () {
    function Scalar(value) {
        var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_PRECISION;

        _classCallCheck(this, Scalar);

        this.value = value;
        this.precision = precision;
    }

    _createClass(Scalar, [{
        key: "valueOf",
        value: function valueOf() {
            var value = this.value,
                precision = this.precision;


            return `scalar::v:${value}:p:${precision}`;
        }
    }, {
        key: "equals",
        value: function equals(other) {
            return this.value === other.value;
        }
    }, {
        key: "toStyleValue",
        value: function toStyleValue() {
            return `${round(this.value, this.precision)}`;
        }
    }]);

    return Scalar;
}();

exports.default = Scalar;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.webkit = exports.selectorize = exports.isDeclarationInherited = exports.isHtmlTag = exports.getUniqueLayerTextStyles = exports.getDeclarationValue = exports.blendColors = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _css = __webpack_require__(27);

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HTML_TAGS = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "math", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "source", "span", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"];

function isHtmlTag(str) {
    return HTML_TAGS.includes(str.toLowerCase());
}

var NOT_INHERITED_PROPS = ["-webkit-background-clip", "background-clip", "-webkit-text-fill-color"];

function isDeclarationInherited(declaration) {
    return !NOT_INHERITED_PROPS.includes(declaration);
}

function blendColors(colors) {
    return colors.reduce(function (blendedColor, color) {
        return blendedColor.blend(color);
    });
}

function escape(str) {
    var escapedStr = str.trim().replace(/[^\s\w-]/g, "").replace(/^(-?\d+)+/, "").replace(/\s+/g, "-");

    if (_css2.default) {
        escapedStr = (0, _css2.default)(escapedStr);
    }

    return escapedStr;
}

function selectorize(str) {
    if (!str) {
        return "";
    }

    var selectorizedStr = str.trim();

    if (isHtmlTag(selectorizedStr)) {
        return selectorizedStr.toLowerCase();
    }

    if (/^[#.]/.test(selectorizedStr)) {
        var name = escape(selectorizedStr.substr(1));

        if (name) {
            return selectorizedStr[0] + name;
        }
    }

    selectorizedStr = escape(selectorizedStr);
    return selectorizedStr && `.${selectorizedStr}`;
}

function webkit(Declaration) {
    return function () {
        function _class() {
            _classCallCheck(this, _class);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            this.instance = new (Function.prototype.bind.apply(Declaration, [null].concat(args)))();
        }

        _createClass(_class, [{
            key: "equals",
            value: function equals(other) {
                return this.instance.equals(other.instance || other);
            }
        }, {
            key: "getValue",
            value: function getValue(params) {
                return this.instance.getValue(params);
            }
        }, {
            key: "name",
            get: function get() {
                return `-webkit-${this.instance.name}`;
            }
        }]);

        return _class;
    }();
}

function getDeclarationValue(value, variables, params) {
    var styleValue = value.toStyleValue(params);

    if (!variables) {
        return styleValue;
    }

    var varName = Object.keys(variables).find(function (name) {
        return styleValue === variables[name].toStyleValue(params);
    });

    return varName ? varName : styleValue;
}

function getUniqueLayerTextStyles(layer) {
    var uniqueTextStyles = [];

    layer.textStyles.forEach(function (_ref) {
        var textStyle = _ref.textStyle;

        var found = uniqueTextStyles.some(textStyle.equals, textStyle);

        if (found) {
            return;
        }

        uniqueTextStyles.push(textStyle);
    });

    return uniqueTextStyles;
}

exports.blendColors = blendColors;
exports.getDeclarationValue = getDeclarationValue;
exports.getUniqueLayerTextStyles = getUniqueLayerTextStyles;
exports.isHtmlTag = isHtmlTag;
exports.isDeclarationInherited = isDeclarationInherited;
exports.selectorize = selectorize;
exports.webkit = webkit;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){if(true)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=11)}([function(t,e,r){"use strict";e.a=class{static get ALLOWED_FIELDS(){}_cloneProps(t){var e=this;Object.keys(t).filter(function(t){return e.constructor.ALLOWED_FIELDS.includes(t)}).forEach(function(r){Object.defineProperty(e,r,{enumerable:!0,value:t[r]})})}}},function(t,e,r){"use strict";var n=r(0),o={name:"transparent",r:0,g:0,b:0,a:0},a=new Intl.NumberFormat("en-US",{useGrouping:!1,maximumFractionDigits:2});function s(t){var e=Math.trunc(t+t/255);return Math.max(0,Math.min(e,255))}function i(t,e,r,n){return e||n?(t*e+r*n*(1-e))/(e+n*(1-e)):0}function c(t){return(t<16?"0":"")+t.toString(16)}class Color extends n.a{static get ALLOWED_FIELDS(){return["name","r","g","b","a"]}constructor(t){if(t instanceof Color)return t;super(),this._cloneProps({r:s(t.r),g:s(t.g),b:s(t.b),a:function(t){return Math.max(0,Math.min(t,1))}(t.a),name:t.name})}static fromJSON(t){var e=JSON.parse(t),r=e._id||e.id;return delete e._id,e.id=r,e.a="a"in e?e.a:1,new Color(e)}equals(t){var e=new Color(t);return this.r===e.r&&this.g===e.g&&this.b===e.b&&a.format(this.a)===a.format(e.a)}blend(t){var e=new Color(t);return new Color({r:i(this.r,this.a,e.r,e.a),g:i(this.g,this.a,e.g,e.a),b:i(this.b,this.a,e.b,e.a),a:this.a+e.a*(1-this.a)})}static blendAll(t){for(var e=new Color(o),r=0;r<t.length&&(!t[r].a||1!==(e=e.blend(t[r])).a);r++);return e}hexBase(){return c(this.r)+c(this.g)+c(this.b)}toHex(){return{r:c(this.r),g:c(this.g),b:c(this.b),a:c(Math.trunc(255*this.a))}}toHSL(){var t,e,r=this.r/255,n=this.g/255,o=this.b/255,a=Math.max(r,n,o),s=Math.min(r,n,o),i=(a+s)/2;if(a===s)t=e=0;else{var c=a-s;switch(e=i>.5?c/(2-a-s):c/(a+s),a){case r:t=(n-o)/c+(n<o?6:0);break;case n:t=(o-r)/c+2;break;case o:t=(r-n)/c+4}t/=6}return{h:t,s:e,l:i}}}e.a=Color},function(t,e,r){"use strict";var n=r(0),o=r(1),a=r(6),s=Object.freeze({COLOR:"color",GRADIENT:"gradient"}),i=Object.freeze({NORMAL:"normal",DARKEN:"darken",MULTIPLY:"multiply",COLOR_BURN:"color-burn",LIGHTEN:"lighten",SCREEN:"screen",COLOR_DODGE:"color-dodge",OVERLAY:"overlay",SOFT_LIGHT:"soft-light",HARD_LIGHT:"hard-light",DIFFERENCE:"difference",EXCLUSION:"exclusion",HUE:"hue",SATURATION:"saturation",COLOR:"color",LUMINOSITY:"luminosity",SOURCE_IN:"source-in",SOURCE_OUT:"source-out",SOURCE_ATOP:"source-atop",DESTINATION_OVER:"destination-over",DESTINATION_IN:"destination-in",DESTINATION_OUT:"destination-out",DESTINATION_ATOP:"destination-atop",DISSOLVE:"dissolve",LINEAR_BURN:"linear-burn",LINEAR_DODGE:"linear-dodge",DARKER_COLOR:"darker-color",LIGHTER_COLOR:"lighter-color",VIVID_LIGHT:"vivid-light",LINEAR_LIGHT:"linear-light",PIN_LIGHT:"pin-light",HARD_MIX:"hard-mix",SUBTRACT:"subtract",DIVIDE:"divide"});class Fill extends n.a{static get TYPE(){return s}static get BLEND_MODE(){return i}static get ALLOWED_FIELDS(){return["type","color","gradient","opacity","blendMode","fill"]}constructor(t,e,r){super();var n=Object.assign({},t);n.type===Fill.TYPE.COLOR?n.color=new o.a(n.color):n.type===Fill.TYPE.GRADIENT&&(n.gradient=new a.a(n.gradient,e,r),delete n.color),this._cloneProps(n)}static fromJSON(t){return new Fill(JSON.parse(t))}}e.a=Fill},function(t,e,r){"use strict";var n=r(0),o=r(1);function a(t,e){var r=t.lastIndexOf(e);return t.substring(0,r)+t.substr(r+e.length)}var s=/(thin|hairline|([ds]emi|(ex|ul)tra)?(light|bold)|normal|regular|book|medium|heavy|black|[1-9]00$)/gi,i=/(italic|oblique)/gi,c=/((?:(ultra|extra|semi)[\s-]?)?(?:condensed|expanded))/gi;function u(t){var e=t.match(s);e?(t=a(t,e=e[e.length-1]),e=e.toLowerCase()):e="regular";var r=t.match(i);r?(t=a(t,r=r[r.length-1]),r=r.toLowerCase()):r="normal";var n=t.match(c);n?(t=a(t,n=n[n.length-1]),n=n.toLowerCase()):n="normal";var o=t.replace(/--/,"-").replace(/-$/,"").trim();return{fontFamily:o.match(/^Arial-?MT$/)?"Arial":o,fontStyle:r,weightText:e,fontStretch:function(t){return/(ultra(\s|-)?)+condensed/i.test(t)?"ultra-condensed":/(extra(\s|-)?)+condensed/i.test(t)?"extra-condensed":/(semi(\s|-)?)+condensed/i.test(t)?"semi-condensed":/condensed/i.test(t)?"condensed":/(ultra(\s|-)?)+expanded/i.test(t)?"ultra-expanded":/(extra(\s|-)?)+expanded/i.test(t)?"extra-expanded":/(semi(\s|-)?)+expanded/i.test(t)?"semi-expanded":/expanded/i.test(t)?"expanded":"normal"}(n)}}var l=Object.freeze({THIN:100,HAIRLINE:100,EXTRA_LIGHT:200,ULTRA_LIGHT:200,LIGHT:300,NORMAL:400,MEDIUM:500,DEMI_BOLD:600,SEMI_BOLD:600,BOLD:700,EXTRA_BOLD:800,ULTRA_BOLD:800,BLACK:900,HEAVY:900});class TextStyle extends n.a{static get WEIGHT(){return l}static get ALLOWED_FIELDS(){return["name","fontFace","fontSize","fontWeight","fontStyle","fontFamily","fontStretch","lineHeight","textAlign","letterSpacing","color","weightText"]}constructor(t){super();var e=Object.assign({},t);Object.assign(e,u(e.fontFace)),"color"in e&&(e.color=new o.a(e.color)),this._cloneProps(e)}static fromJSON(t){var e=JSON.parse(t),r=e._id||e.id;return delete e._id,Object.assign(e,u(e.fontFace),{id:r}),new TextStyle(e)}get fontWeight(){return function(t){return/black|heavy|900/gi.test(t)?900:/((ex|ul)tra)\s?bold|800/gi.test(t)?800:/([ds]emi)\s?bold|600/gi.test(t)?600:/bold|700/gi.test(t)?700:/medium|500/gi.test(t)?500:/((ex|ul)tra)\s?light|200/gi.test(t)?200:/light|300/gi.test(t)?300:/thin|hairline|100/gi.test(t)?100:400}(this.weightText)}equals(t){return this.fontFamily===t.fontFamily&&this.fontStyle===t.fontStyle&&this.fontStretch===t.fontStretch&&this.fontWeight===t.fontWeight&&this.fontSize===t.fontSize&&this.lineHeight===t.lineHeight&&this.textAlign===t.textAlign&&this.letterSpacing===t.letterSpacing&&(!this.color||!t.color||this.color.equals(t.color))}}e.a=TextStyle},function(t,e,r){"use strict";var n=r(0),o=Object.freeze({BACKGROUND:"background",GAUSSIAN:"gaussian"});class Blur extends n.a{static get TYPE(){return o}static get ALLOWED_FIELDS(){return["type","radius"]}constructor(t){super(),this._cloneProps(t)}static fromJSON(t){return new Blur(JSON.parse(t))}}e.a=Blur},function(t,e,r){"use strict";var n=r(0),o=r(2);class Border extends n.a{static get ALLOWED_FIELDS(){return["position","thickness","fill"]}constructor(t,e,r){super();var n=Object.assign({},t);n.fill=new o.a({type:n.fill.type,color:n.fill.color,gradient:n.fill.gradient,opacity:n.fill.opacity,blendMode:n.fill.blendMode},e,r),this._cloneProps(n)}static fromJSON(t){return new Border(JSON.parse(t))}}e.a=Border},function(t,e,r){"use strict";var n=r(0),o=r(1),a=r(7),s=Object.freeze({LINEAR:"linear",RADIAL:"radial",ANGULAR:"angular"});class Gradient extends n.a{static get TYPE(){return s}static get ALLOWED_FIELDS(){return["type","from","to","angle","scale","colorStops"]}constructor(t,e,r){super();var n=Object.assign({},t);if("color"in n&&(n.color=new o.a(n.color)),n.colorStops=n.colorStops.map(function(t){return new a.a(t)}),"angle"in n){var s=Math.cos(n.angle*Math.PI/180),i=Math.sin(n.angle*Math.PI/180);n.angle=(360+Math.round(180*Math.atan2(s,i)/Math.PI))%360}else{var c=(n.from.x-n.to.x)*e,u=(n.from.y-n.to.y)*r;n.angle=(360-Math.round(180*Math.atan2(c,u)/Math.PI))%360}this._cloneProps(n)}static fromJSON(t){return new Gradient(JSON.parse(t))}}e.a=Gradient},function(t,e,r){"use strict";var n=r(0),o=r(1);class ColorStop extends n.a{static get ALLOWED_FIELDS(){return["color","position"]}constructor(t){super();var e=Object.assign({},t);"color"in e&&(e.color=new o.a(e.color)),this._cloneProps(e)}static fromJSON(t){return new ColorStop(JSON.parse(t))}}e.a=ColorStop},function(t,e,r){"use strict";var n=r(0),o=r(1),a=r(3),s=Object.freeze({ANDROID:"android",IOS:"ios",MACOS:"osx",WEB:"web"});function i(t,e){return t.fontSize>e.fontSize?-1:t.fontSize===e.fontSize?t.fontWeight>e.fontWeight?-1:t.fontWeight===e.fontWeight?t.color&&e.color?t.fontFace<=e.fontFace?-1:1:t.color?-1:e.color?1:t.fontFace<=e.fontFace?-1:1:1:1}function c(t,e){var r,n;if("unknown"===t)r="px",n="px";else switch(e){case"android":r="dp",n="sp";break;case"ios":case"osx":r="pt",n="pt";break;case"web":default:r="px",n="px"}return{textDimensionSuffix:n,dimensionSuffix:r}}function u(t){var e;switch(t){case"mdpi":case"1x":case"web":case"unknown":default:e=1;break;case"hdpi":e=1.5;break;case"xhdpi":case"2x":e=2;break;case"xxhdpi":case"3x":e=3;break;case"xxxhdpi":case"4x":e=4}return e}class Project extends n.a{static get TYPE(){return s}static get ALLOWED_FIELDS(){return["type","name","textStyles","colors","density","densityDivisor","lengthUnit","textLengthUnit"]}constructor(t){super();var e=Object.assign({},t);e.textStyles=e.textStyles.map(function(t){return new a.a(t)}),e.textStyles.sort(i),function(t,e){if(t.length){var r=t[0].fontSize/e,n=t[t.length-1].fontSize/e;if(r<=36&&n>=14)t.forEach(function(t){t.scaledFontSize=t.fontSize/e});else{var o,a;r<14?(o=24,a=14):n>36?(o=36,a=24):(o=Math.min(36,r),a=Math.max(14,n));var s=r===n?0:(o-a)/(r-n);t[0].scaledFontSize=Math.round(o);for(var i=1;i<t.length;i++){var c=t[i-1].fontSize/e,u=t[i].fontSize/e;t[i].scaledFontSize=Math.round(t[i-1].scaledFontSize-(c-u)*s)}}}}(e.textStyles,u(e.density)),e.densityDivisor=u(e.density),e.lengthUnit=c(e.density,e.type).dimensionSuffix,e.textLengthUnit=c(e.density,e.type).textDimensionSuffix,e.colors=e.colors.map(function(t){return new o.a(t)}),this._cloneProps(e)}static fromJSON(t){var e=JSON.parse(t);return new Project(e)}findTextStyleByName(t){return this.textStyles.find(function(e){return e.name===t})}findTextStyleEqual(t){return this.textStyles.find(function(e){return t.equals(e)})}findColorByName(t){return this.colors.find(function(e){return e.name===t})}findColorEqual(t){return this.colors.find(function(e){return t.equals(e)})}findColorByHexAndAlpha(t){return this.colors.find(function(e){var r=void 0===t.alpha||e.a===t.alpha;return(void 0===t.hex||e.hexBase()===t.hex.toLowerCase())&&r})}}e.a=Project},function(t,e,r){"use strict";var n=r(0),o=r(4),a=r(5),s=r(2),i=r(3),c=r(10),u=Object.freeze({TEXT:"text",SHAPE:"shape",GROUP:"group"});class Layer extends n.a{static get TYPE(){return u}static get ALLOWED_FIELDS(){return["borders","fills","shadows","textStyles","type","name","exportable","rotation","opacity","blendMode","borderRadius","blur","rect","content","assets","layers"]}constructor(t){super();var e,r,n,u,l,d,f=Object.assign({},t),h=f.blendMode||"normal",p=f.borderRadius||0,g=f.rotation||0;f.blur&&(l=new o.a(f.blur)),e=(f.borders||[]).map(function(t){return new a.a(t,f.rect.width,f.rect.height)}),r=(f.fills||[]).map(function(t){return new s.a(t,f.rect.width,f.rect.height)}).reverse(),n=(f.shadows||[]).map(function(t){return new c.a(t)}),u=(f.textStyles||[]).map(function(t){var e=parseInt(t.range.location,10);return{range:{start:e,end:e+parseInt(t.range.length,10)},textStyle:new i.a(t.style)}}),d=(f.layers||[]).map(function(t){return new Layer(t)}),Object.assign(f,{blendMode:h,blur:l,borderRadius:p,borders:e,fills:r,rotation:g,shadows:n,textStyles:u,layers:d}),this._cloneProps(f)}static fromJSON(t){var e=JSON.parse(t);return new Layer(e)}get defaultTextStyle(){if(this.type===Layer.TYPE.TEXT&&this.textStyles.length){var t,e=[],r=0;return this.textStyles.forEach(function(n){var o=e.find(function(t){return t.font.equals(n.textStyle)}),a=n.range.end-n.range.start;o||(o={font:n.textStyle,totalLength:0},e.push(o)),o.totalLength+=a,o.totalLength>r&&(r=o.totalLength,t=o)}),t&&t.font}}}e.a=Layer},function(t,e,r){"use strict";var n=r(0),o=r(1),a=Object.freeze({OUTER:"outer",INNER:"inner"});class Shadow extends n.a{static get TYPE(){return a}static get ALLOWED_FIELDS(){return["type","offsetX","offsetY","blurRadius","spread","color"]}constructor(t){super();var e=Object.assign({},t);e.color=new o.a(e.color),this._cloneProps(e)}static fromJSON(t){return new Shadow(JSON.parse(t))}}e.a=Shadow},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(4),o=r(5),a=r(1),s=r(7),i=r(12),c=r(13),u=r(14),l=r(2),d=r(6),f=r(9),h=r(8),p=r(10),g=r(15),S=r(3),O=r(16);r.d(e,"Blur",function(){return n.a}),r.d(e,"Border",function(){return o.a}),r.d(e,"Color",function(){return a.a}),r.d(e,"ColorStop",function(){return s.a}),r.d(e,"Component",function(){return i.a}),r.d(e,"Context",function(){return c.a}),r.d(e,"Extension",function(){return u.a}),r.d(e,"Fill",function(){return l.a}),r.d(e,"Gradient",function(){return d.a}),r.d(e,"Layer",function(){return f.a}),r.d(e,"Project",function(){return h.a}),r.d(e,"Screen",function(){return g.a}),r.d(e,"Shadow",function(){return p.a}),r.d(e,"TextStyle",function(){return S.a}),r.d(e,"Version",function(){return O.a})},function(t,e,r){"use strict";var n=r(0);class Component extends n.a{static get ALLOWED_FIELDS(){return["name","description"]}constructor(t){super();var e=Object.assign({},t);this._cloneProps(e)}static fromJSON(t){return new Component(JSON.parse(t))}}e.a=Component},function(t,e,r){"use strict";var n=r(0),o=r(8);class Context extends n.a{constructor(t){super(),this._options=t.options,this._project=new o.a(t.project)}getOption(t){return this._options[t]}get project(){return this._project}static fromJSON(t){return new Context(JSON.parse(t))}}e.a=Context},function(t,e,r){"use strict";e.a=class{styleguideColors(t,e){}styleguideTextStyles(t,e){}layer(t,e){}component(t,e,r){}screen(t,e,r){}comment(t,e){throw new Error("Method not implemented")}exportStyleguideColors(t,e){throw new Error("Method not implemented")}exportStyleguideTextStyles(t,e){throw new Error("Method not implemented")}}},function(t,e,r){"use strict";var n=r(0);class Screen extends n.a{static get ALLOWED_FIELDS(){return["name","description","tags"]}constructor(t){super();var e=Object.assign({},t);this._cloneProps(e)}static fromJSON(t){return new Screen(JSON.parse(t))}}e.a=Screen},function(t,e,r){"use strict";var n=r(0),o=r(1),a=r(9),s=Object.freeze({BITMAP:"bitmap",SKETCH:"sketch",PS:"psd",FIGMA:"figma",XD:"xd"});class Version extends n.a{static get SOURCES(){return s}static get ALLOWED_FIELDS(){return["image","source","componentNames","backgroundColor","links","grid","layers"]}constructor(t){super();var e=t.snapshot,r=e.backgroundColor||{r:255,g:255,b:255,a:1},n=e.links||[],s=e.layers||[],i={image:{url:e.url,width:e.width,height:e.height},source:e.source,componentNames:e.componentNames||[],backgroundColor:new o.a(r),layers:s.map(function(t){return new a.a(t)}),links:n};this._cloneProps(i)}static fromJSON(t){return new Version(JSON.parse(t))}}e.a=Version}])});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extensionModel = __webpack_require__(5);

var _color = __webpack_require__(1);

var _color2 = _interopRequireDefault(_color);

var _percent = __webpack_require__(12);

var _percent2 = _interopRequireDefault(_percent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-magic-numbers */
function toCSSAngle(angle) {
    switch (angle) {
        case 0:
            return "to top";

        case 90:
            return "to right";

        case 180:
            return "to bottom";

        case 270:
            return "to left";

        default:
            return `${angle}deg`;
    }
}
/* eslint-enable no-magic-numbers */

function generateColorGradient(_ref) {
    var r = _ref.r,
        g = _ref.g,
        b = _ref.b,
        a = _ref.a;

    return {
        type: "linear",
        from: {
            x: 0.5,
            y: 0
        },
        to: {
            x: 0.5,
            y: 1
        },
        colorStops: [{
            color: { r, g, b, a },
            position: 0
        }, {
            color: { r, g, b, a },
            position: 1
        }]
    };
}

var ColorStop = function () {
    function ColorStop(colorStopObject) {
        _classCallCheck(this, ColorStop);

        this.object = colorStopObject;
    }

    _createClass(ColorStop, [{
        key: "valueOf",
        value: function valueOf() {
            var _object = this.object,
                position = _object.position,
                _object$color = _object.color,
                r = _object$color.r,
                g = _object$color.g,
                b = _object$color.b,
                _object$color$a = _object$color.a,
                a = _object$color$a === undefined ? 1 : _object$color$a;


            return `colorStop::p:${position}:r:${r}:g:${g}:b:${b}:a:${a}`;
        }
    }, {
        key: "equals",
        value: function equals(other) {
            return other.object.position === this.object.position && other.object.color.equals(this.object.color);
        }
    }, {
        key: "toStyleValue",
        value: function toStyleValue(_ref2, variables) {
            var colorFormat = _ref2.colorFormat;
            var _object2 = this.object,
                position = _object2.position,
                color = _object2.color;

            var pos = "";

            if (position !== 1 && position) {
                pos = ` ${new _percent2.default(position).toStyleValue()}`;
            }

            return `${new _color2.default(color).toStyleValue({ colorFormat }, variables)}${pos}`;
        }
    }]);

    return ColorStop;
}();

var Gradient = function () {
    function Gradient(gradientObject) {
        _classCallCheck(this, Gradient);

        this.object = gradientObject;
        this.colorStops = this.object.colorStops.map(function (cs) {
            return new ColorStop(cs);
        });
    }

    _createClass(Gradient, [{
        key: "valueOf",
        value: function valueOf() {
            var _object3 = this.object,
                type = _object3.type,
                angle = _object3.angle;


            return `gradient::t:${type}:a:${angle}:${this.colorStops.map(function (cs) {
                return cs.valueOf();
            }).join(":")}`;
        }
    }, {
        key: "equals",
        value: function equals(other) {
            return this.object.type === other.object.type && this.object.angle === other.object.angle && this.colorStops.length === other.colorStops.length && this.colorStops.every(function (cs, index) {
                return cs.equals(other.colorStops[index]);
            });
        }
    }, {
        key: "toStyleValue",
        value: function toStyleValue(_ref3, variables) {
            var colorFormat = _ref3.colorFormat;
            var gradient = this.object;

            var colorStopStyle = this.colorStops.map(function (cs) {
                return cs.toStyleValue({ colorFormat }, variables);
            }).join(", ");

            switch (gradient.type) {
                case "linear":
                    return `linear-gradient(${toCSSAngle(gradient.angle)}, ${colorStopStyle})`;

                case "radial":
                    return `radial-gradient(circle at ${new _percent2.default(gradient.from.x).toStyleValue()} ${new _percent2.default(gradient.from.y).toStyleValue()}, ${colorStopStyle})`;

                case "angular":
                    return `conic-gradient(${colorStopStyle}, ${this.colorStops[0].toStyleValue({ colorFormat }, variables)})`;

                default:
                    return "";
            }
        }
    }], [{
        key: "fromRGBA",
        value: function fromRGBA(_ref4) {
            var r = _ref4.r,
                g = _ref4.g,
                b = _ref4.b,
                _ref4$a = _ref4.a,
                a = _ref4$a === undefined ? 1 : _ref4$a;

            return new Gradient(new _extensionModel.Gradient(generateColorGradient({ r, g, b, a }), 100, 100 // eslint-disable-line no-magic-numbers
            ));
        }
    }]);

    return Gradient;
}();

exports.default = Gradient;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _color = __webpack_require__(1);

var _color2 = _interopRequireDefault(_color);

var _constants = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FontColor = function () {
    function FontColor(value) {
        _classCallCheck(this, FontColor);

        this.value = value;
    }

    _createClass(FontColor, [{
        key: "hasDefaultValue",
        value: function hasDefaultValue() {
            return this.value.equals(FontColor.DEFAULT_VALUE);
        }
    }, {
        key: "equals",
        value: function equals(other) {
            return this.value.equals(other.value);
        }
    }, {
        key: "getValue",
        value: function getValue(params, variables) {
            return this.value.toStyleValue(params, variables);
        }
    }, {
        key: "name",
        get: function get() {
            return _constants.STYLE_PROPS.FONT_COLOR;
        }
    }], [{
        key: "DEFAULT_VALUE",
        get: function get() {
            return _color2.default.fromRGBA({ r: 0, g: 0, b: 0, a: 1 });
        }
    }]);

    return FontColor;
}();

exports.default = FontColor;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RuleSet = function () {
    function RuleSet(selector, declarations) {
        var _this = this;

        _classCallCheck(this, RuleSet);

        this.selector = selector;
        this.declarationMap = {};

        declarations.forEach(function (declaration) {
            _this.declarationMap[declaration.name] = declaration;
        });
    }

    _createClass(RuleSet, [{
        key: "hasProperty",
        value: function hasProperty(property) {
            return property in this.declarationMap;
        }
    }, {
        key: "addDeclaration",
        value: function addDeclaration(declaration) {
            this.declarationMap[declaration.name] = declaration;
        }
    }, {
        key: "removeDeclaration",
        value: function removeDeclaration(declaration) {
            delete this.declarationMap[declaration.name];
        }
    }, {
        key: "declarations",
        get: function get() {
            var _this2 = this;

            return Object.keys(this.declarationMap).map(function (name) {
                return _this2.declarationMap[name];
            });
        }
    }]);

    return RuleSet;
}();

exports.default = RuleSet;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _layer = __webpack_require__(10);

var _layer2 = _interopRequireDefault(_layer);

var _utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var styles = __webpack_require__(46);

function layer(context, selectedLayer) {
    var l = new _layer2.default(selectedLayer);
    var layerRuleSet = l.style;

    var childrenRuleSet = [];
    var defaultTextStyle = selectedLayer.defaultTextStyle;


    if (selectedLayer.type === "text" && defaultTextStyle) {
        var declarations = l.getLayerTextStyleDeclarations(defaultTextStyle);

        declarations.forEach(function (p) {
            return layerRuleSet.addDeclaration(p);
        });

        (0, _utils.getUniqueLayerTextStyles)(selectedLayer).filter(function (textStyle) {
            return !defaultTextStyle.equals(textStyle);
        }).forEach(function (textStyle, idx) {
            childrenRuleSet.push(new RuleSet(`${selectorize(selectedLayer.name)} ${selectorize(`text-style-${idx + 1}`)}`, l.getLayerTextStyleDeclarations(textStyle)));
        });
    }

    var cssClasses = [];

    var layerRules = layerRuleSet.declarationMap;
    var layerProperties = Object.keys(layerRules);

    var styleSheetRules = styles ? styles.value : [];
    console.log("HERE");
    console.log(JSON.stringify(styleSheetRules));

    styleSheetRules.forEach(function (rule) {
        var ruleMatches = true;

        var declarations = rule.declarations;
        for (var property in declarations) {
            if (!layerProperties.includes(property)) {
                ruleMatches = false;
            }
            if (!styleSheetPropertyValueMatchesLayer(property, declarations, layerRules)) {
                ruleMatches = false;
            }
        }

        if (ruleMatches) {
            cssClasses = [cssClasses].concat(_toConsumableArray(rule.selectors));
        }
    });

    return {
        code: cssClasses.join(' '),
        language: 'css'
    };
}

function styleSheetPropertyValueMatchesLayer(property, styleSheetRule, layerRules) {
    switch (property) {
        case 'font-size':
            if (!layerRules[property] || !layerRules[property].value) {
                return false;
            }
            var layerString = layerRules[property].value.value + layerRules[property].value.unit;
            return layerString === styleSheetRule[property];
        default:
            return false;
    }
}

exports.default = {
    layer
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angle = __webpack_require__(11);

var _angle2 = _interopRequireDefault(_angle);

var _color = __webpack_require__(1);

var _color2 = _interopRequireDefault(_color);

var _gradient = __webpack_require__(6);

var _gradient2 = _interopRequireDefault(_gradient);

var _length = __webpack_require__(2);

var _length2 = _interopRequireDefault(_length);

var _scalar = __webpack_require__(3);

var _scalar2 = _interopRequireDefault(_scalar);

var _border = __webpack_require__(13);

var _border2 = _interopRequireDefault(_border);

var _shadow = __webpack_require__(14);

var _shadow2 = _interopRequireDefault(_shadow);

var _opacity = __webpack_require__(15);

var _opacity2 = _interopRequireDefault(_opacity);

var _width = __webpack_require__(16);

var _width2 = _interopRequireDefault(_width);

var _height = __webpack_require__(17);

var _height2 = _interopRequireDefault(_height);

var _objectFit = __webpack_require__(18);

var _objectFit2 = _interopRequireDefault(_objectFit);

var _transform = __webpack_require__(19);

var _transform2 = _interopRequireDefault(_transform);

var _mixBlendMode = __webpack_require__(20);

var _mixBlendMode2 = _interopRequireDefault(_mixBlendMode);

var _borderRadius = __webpack_require__(21);

var _borderRadius2 = _interopRequireDefault(_borderRadius);

var _bgBlendMode = __webpack_require__(22);

var _bgBlendMode2 = _interopRequireDefault(_bgBlendMode);

var _bgImage = __webpack_require__(23);

var _bgImage2 = _interopRequireDefault(_bgImage);

var _bgColor = __webpack_require__(24);

var _bgColor2 = _interopRequireDefault(_bgColor);

var _bgClip = __webpack_require__(25);

var _bgClip2 = _interopRequireDefault(_bgClip);

var _textFillColor = __webpack_require__(26);

var _textFillColor2 = _interopRequireDefault(_textFillColor);

var _textStroke = __webpack_require__(29);

var _textStroke2 = _interopRequireDefault(_textStroke);

var _borderImageSource = __webpack_require__(30);

var _borderImageSource2 = _interopRequireDefault(_borderImageSource);

var _borderWidth = __webpack_require__(31);

var _borderWidth2 = _interopRequireDefault(_borderWidth);

var _borderStyle = __webpack_require__(32);

var _borderStyle2 = _interopRequireDefault(_borderStyle);

var _borderImageSlice = __webpack_require__(33);

var _borderImageSlice2 = _interopRequireDefault(_borderImageSlice);

var _backdropFilter = __webpack_require__(34);

var _backdropFilter2 = _interopRequireDefault(_backdropFilter);

var _filter = __webpack_require__(35);

var _filter2 = _interopRequireDefault(_filter);

var _fontColor = __webpack_require__(7);

var _fontColor2 = _interopRequireDefault(_fontColor);

var _textStyle = __webpack_require__(36);

var _textStyle2 = _interopRequireDefault(_textStyle);

var _ruleSet = __webpack_require__(8);

var _ruleSet2 = _interopRequireDefault(_ruleSet);

var _utils = __webpack_require__(4);

var _bgOrigin = __webpack_require__(45);

var _bgOrigin2 = _interopRequireDefault(_bgOrigin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Layer = function () {
    function Layer() {
        var layerObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Layer);

        this.object = layerObject;

        this.declarations = this.collectDeclarations();
    }

    _createClass(Layer, [{
        key: "getLayerTextStyleDeclarations",
        value: function getLayerTextStyleDeclarations(textStyle) {
            var layer = this.object;

            var declarations = new _textStyle2.default(textStyle).declarations;

            if (layer.fills.length) {
                declarations = declarations.filter(function (declaration) {
                    return !(declaration instanceof _color2.default);
                });

                if (this.hasGradient) {
                    declarations.push(new ((0, _utils.webkit)(_bgClip2.default))(["text"]));
                    declarations.push(new _bgClip2.default(["text"]));
                    declarations.push(new _textFillColor2.default("transparent"));

                    var bgImages = layer.fills.map(function (fill) {
                        return Layer.fillToGradient(fill);
                    });

                    if (textStyle.color) {
                        bgImages.push(new _color2.default(textStyle.color).toGradient());
                    }

                    declarations.push(new _bgImage2.default(bgImages));
                } else {
                    var blentColor = (0, _utils.blendColors)(layer.fills.map(function (fill) {
                        return fill.color;
                    }));

                    if (textStyle.color) {
                        blentColor = blentColor.blend(textStyle.color);
                    }

                    declarations.push(new _fontColor2.default(new _color2.default(blentColor)));
                }
            }

            return declarations;
        }
    }, {
        key: "generateBorderDeclarations",
        value: function generateBorderDeclarations() {
            var _elementBorder = this.elementBorder,
                fill = _elementBorder.fill,
                thickness = _elementBorder.thickness,
                layer = this.object;


            if (layer.type === "text" && fill.type === "color") {
                return [new ((0, _utils.webkit)(_textStroke2.default))(new _length2.default(thickness), new _color2.default(fill.color))];
            }

            switch (fill.type) {
                case "color":
                    return [new _border2.default({
                        style: "solid",
                        width: new _length2.default(thickness),
                        color: new _color2.default(fill.color)
                    })];

                case "gradient":
                    {
                        return [new _borderStyle2.default("solid"), new _borderWidth2.default(new _length2.default(thickness)), new _borderImageSource2.default(new _gradient2.default(fill.gradient)), new _borderImageSlice2.default(new _scalar2.default(1))];
                    }

                default:
                    return [];
            }
        }
    }, {
        key: "generateBlurDeclarations",
        value: function generateBlurDeclarations() {
            var blur = this.object.blur;

            var filterFns = [{ fn: "blur", args: [new _length2.default(blur.radius)] }];

            if (blur.type === "background") {
                return [new ((0, _utils.webkit)(_backdropFilter2.default))(filterFns), new _backdropFilter2.default(filterFns)];
            }

            return [new ((0, _utils.webkit)(_filter2.default))(filterFns), new _filter2.default(filterFns)];
        }
    }, {
        key: "generateBackgroundDeclarations",
        value: function generateBackgroundDeclarations() {
            var bgImages = this.bgImages,
                elementBorder = this.elementBorder,
                fillColor = this.fillColor,
                layer = this.object;

            var declarations = [];

            if (this.hasFill && this.hasBlendMode) {
                declarations.push(new _bgBlendMode2.default(layer.fills.map(function (fill) {
                    return fill.blendMode;
                })));
            }

            if (bgImages) {
                declarations.push(new _bgImage2.default(bgImages));

                if (layer.borderRadius && elementBorder && elementBorder.fill.type === "gradient") {
                    declarations.push(new _bgOrigin2.default(["border-box"]));
                    declarations.push(new _bgClip2.default([].concat(_toConsumableArray(Array(bgImages.length - 1).fill("content-box")), ["border-box"])));
                }
            } else if (fillColor) {
                declarations.push(new _bgColor2.default(fillColor));
            }

            return declarations;
        }

        /* eslint-disable complexity */

    }, {
        key: "collectDeclarations",
        value: function collectDeclarations() {
            var elementBorder = this.elementBorder,
                layer = this.object;

            var declarations = [new _width2.default(new _length2.default(layer.rect.width)), new _height2.default(new _length2.default(layer.rect.height))];

            if (layer.exportable) {
                declarations.push(new _objectFit2.default("contain"));
            }

            if (layer.rotation) {
                declarations.push(new _transform2.default([{ fn: "rotate", args: [new _angle2.default(-layer.rotation)] }]));
            }

            if (layer.opacity !== 1) {
                declarations.push(new _opacity2.default(new _scalar2.default(layer.opacity)));
            }

            if (layer.blendMode !== "normal") {
                declarations.push(new _mixBlendMode2.default(layer.blendMode));
            }

            if (layer.borderRadius) {
                // TODO: different radii for each corner?
                declarations.push(new _borderRadius2.default(new _length2.default(layer.borderRadius)));
            }

            if (layer.blur && layer.blur.radius) {
                declarations = declarations.concat(this.generateBlurDeclarations());
            }

            if (layer.shadows.length) {
                declarations.push(new _shadow2.default(layer.shadows, layer.type === "text" ? _shadow2.default.TYPES.TEXT : _shadow2.default.TYPES.BOX));
            }

            if (elementBorder) {
                declarations = declarations.concat(this.generateBorderDeclarations());
            }

            declarations = declarations.concat(this.generateBackgroundDeclarations());

            return declarations;
        }
    }, {
        key: "hasBlendMode",
        get: function get() {
            return this.object.fills.some(function (f) {
                return f.blendMode && f.blendMode !== "normal";
            });
        }
    }, {
        key: "hasGradient",
        get: function get() {
            return this.object.fills.some(function (f) {
                return f.type === "gradient";
            });
        }
    }, {
        key: "hasFill",
        get: function get() {
            return this.object.fills.length > 0;
        }
    }, {
        key: "elementBorder",
        get: function get() {
            var borders = this.object.borders;


            return borders.length ? borders[borders.length - 1] : null;
        }
    }, {
        key: "bgImages",
        get: function get() {
            var bgImages = void 0;

            if (!this.hasFill) {
                return null;
            }

            if (this.hasGradient || this.hasBlendMode) {
                bgImages = this.object.fills.map(function (fill) {
                    return Layer.fillToGradient(fill);
                });
            }

            if (this.elementBorder) {
                if (this.object.borderRadius && this.elementBorder.fill.type === "gradient") {
                    var borderFill = new _gradient2.default(this.elementBorder.fill.gradient);

                    if (bgImages) {
                        bgImages.push(borderFill);
                    } else if (this.fillColor) {
                        bgImages = [this.fillColor, borderFill];
                    } else {
                        /*
                            * Actually the background should be transparent if there are no fills,
                            * i.e. what's on the background of this layer should be shown.
                            * But we have no way of knowing the background of parent layer,
                            * and making it transparent will make fake-gradient-border background visible.
                            */
                        var white = _color2.default.fromRGBA({
                            r: 255,
                            g: 255,
                            b: 255,
                            a: 1
                        });

                        bgImages = [white.toGradient(), borderFill];
                    }
                }
            }

            return bgImages;
        }
    }, {
        key: "fillColor",
        get: function get() {
            if (this.hasFill && !this.hasGradient && !this.hasBlendMode) {
                return new _color2.default((0, _utils.blendColors)(this.object.fills.map(function (fill) {
                    return fill.color;
                })));
            }

            return null;
        }
    }, {
        key: "style",
        get: function get() {
            return new _ruleSet2.default((0, _utils.selectorize)(this.object.name), this.declarations);
        }
    }], [{
        key: "fillToGradient",
        value: function fillToGradient(fill) {
            return fill.type === "color" ? new _color2.default(fill.color).toGradient() : new _gradient2.default(fill.gradient);
        }
    }]);

    return Layer;
}();

exports.default = Layer;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _scalar = __webpack_require__(3);

var _scalar2 = _interopRequireDefault(_scalar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Angle = function () {
    function Angle(value) {
        var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "deg";

        _classCallCheck(this, Angle);

        this.value = value;
        this.unit = unit;
    }

    _createClass(Angle, [{
        key: "valueOf",
        value: function valueOf() {
            var value = this.value,
                unit = this.unit;


            return `angle::v:${value}:u:${unit}`;
        }
    }, {
        key: "equals",
        value: function equals(other) {
            return this.value === other.value && this.unit === other.unit;
        }
    }, {
        key: "toStyleValue",
        value: function toStyleValue() {
            return this.value === 0 ? "0" : `${new _scalar2.default(this.value).toStyleValue()}${this.unit}`;
        }
    }]);

    return Angle;
}();

exports.default = Angle;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HUNDRED = 100;

var Percent = function () {
    function Percent(value) {
        _classCallCheck(this, Percent);

        this.value = value;
    }

    _createClass(Percent, [{
        key: "valueOf",
        value: function valueOf() {
            var value = this.value;


            return `percent::v:${value}`;
        }
    }, {
        key: "equals",
        value: function equals(other) {
            return this.value === other.value;
        }
    }, {
        key: "toStyleValue",
        value: function toStyleValue() {
            var value = this.value;


            return value > 0 ? `${Math.round(value * HUNDRED)}%` : "0";
        }
    }]);

    return Percent;
}();

exports.default = Percent;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Border = function () {
    function Border(_ref) {
        var style = _ref.style,
            width = _ref.width,
            color = _ref.color;

        _classCallCheck(this, Border);

        this.style = style;
        this.width = width;
        this.color = color;
    }

    _createClass(Border, [{
        key: "equals",
        value: function equals(other) {
            var style = this.style,
                width = this.width,
                color = this.color;


            return other.style === style && other.width.equals(width) && other.color.equals(color);
        }
    }, {
        key: "getValue",
        value: function getValue(params, variables) {
            var style = this.style,
                width = this.width,
                color = this.color;


            return `${style} ${width.toStyleValue(params)} ${color.toStyleValue(params, variables)}`;
        }
    }, {
        key: "name",
        get: function get() {
            return _constants.STYLE_PROPS.BORDER;
        }
    }]);

    return Border;
}();

exports.default = Border;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _color = __webpack_require__(1);

var _color2 = _interopRequireDefault(_color);

var _length = __webpack_require__(2);

var _length2 = _interopRequireDefault(_length);

var _constants = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function compareShadow(s1, s2) {
    return s1.offsetX === s2.offsetX && s1.offsetY === s2.offsetY && s1.blurRadius === s2.blurRadius && s1.color.equals(s2.color);
}

var Shadow = function () {
    function Shadow(shadowObjects, type) {
        _classCallCheck(this, Shadow);

        this.objects = shadowObjects;
        this.type = type;
    }

    _createClass(Shadow, [{
        key: "equals",
        value: function equals(other) {
            return this.type === other.type && this.objects.length === other.objects.length && this.objects.every(function (s, index) {
                return compareShadow(s, other.objects[index]);
            });
        }
    }, {
        key: "getValue",
        value: function getValue(params, variables) {
            var shadows = this.objects,
                type = this.type;


            if (type === Shadow.TYPES.TEXT) {
                return shadows.map(function (s) {
                    return Shadow.generateTextShadow(s, params, variables);
                }).join(", ");
            }

            return shadows.map(function (s) {
                return Shadow.generateBoxShadow(s, params, variables);
            }).join(", ");
        }
    }, {
        key: "name",
        get: function get() {
            return this.type === Shadow.TYPES.TEXT ? _constants.STYLE_PROPS.TEXT_SHADOW : _constants.STYLE_PROPS.BOX_SHADOW;
        }
    }], [{
        key: "generateTextShadow",
        value: function generateTextShadow(shadow, _ref, variables) {
            var densityDivisor = _ref.densityDivisor,
                colorFormat = _ref.colorFormat;

            return `${new _length2.default(shadow.offsetX).toStyleValue({ densityDivisor }, variables)} ${new _length2.default(shadow.offsetY).toStyleValue({ densityDivisor }, variables)} ${new _length2.default(shadow.blurRadius).toStyleValue({ densityDivisor }, variables)} ${new _color2.default(shadow.color).toStyleValue({ colorFormat }, variables)}`;
        }
    }, {
        key: "generateBoxShadow",
        value: function generateBoxShadow(shadow, _ref2, variables) {
            var densityDivisor = _ref2.densityDivisor,
                colorFormat = _ref2.colorFormat;

            return `${(shadow.type === "inner" ? "inset " : "") + new _length2.default(shadow.offsetX).toStyleValue({ densityDivisor }, variables)} ${new _length2.default(shadow.offsetY).toStyleValue({ densityDivisor }, variables)} ${new _length2.default(shadow.blurRadius).toStyleValue({ densityDivisor }, variables)} ${new _length2.default(shadow.spread).toStyleValue({ densityDivisor }, variables)} ${new _color2.default(shadow.color).toStyleValue({ colorFormat }, variables)}`;
        }
    }]);

    return Shadow;
}();

Shadow.TYPES = Object.freeze({
    TEXT: "text",
    BOX: "box"
});

exports.default = Shadow;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Opacity = function () {
    function Opacity(value) {
        _classCallCheck(this, Opacity);

        this.value = value;
    }

    _createClass(Opacity, [{
        key: "equals",
        value: function equals(other) {
            return this.value.equals(other.value);
        }
    }, {
        key: "getValue",
        value: function getValue(params, variables) {
            return this.value.toStyleValue(params, variables);
        }
    }, {
        key: "name",
        get: function get() {
            return _constants.STYLE_PROPS.OPACITY;
        }
    }]);

    return Opacity;
}();

exports.default = Opacity;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Width = function () {
    function Width(length) {
        _classCallCheck(this, Width);

        this.value = length;
    }

    _createClass(Width, [{
        key: "equals",
        value: function equals(other) {
            return this.value.equals(other.value);
        }
    }, {
        key: "getValue",
        value: function getValue(params, variables) {
            return this.value.toStyleValue(params, variables);
        }
    }, {
        key: "name",
        get: function get() {
            return _constants.STYLE_PROPS.WIDTH;
        }
    }]);

    return Width;
}();

exports.default = Width;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Height = function () {
    function Height(length) {
        _classCallCheck(this, Height);

        this.value = length;
    }

    _createClass(Height, [{
        key: "equals",
        value: function equals(other) {
            return this.value.equals(other.value);
        }
    }, {
        key: "getValue",
        value: function getValue(params, variables) {
            return this.value.toStyleValue(params, variables);
        }
    }, {
        key: "name",
        get: function get() {
            return _constants.STYLE_PROPS.HEIGHT;
        }
    }]);

    return Height;
}();

exports.default = Height;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectFit = function () {
    function ObjectFit(value) {
        _classCallCheck(this, ObjectFit);

        this.value = value;
    }

    _createClass(ObjectFit, [{
        key: "equals",
        value: function equals(other) {
            return this.value === other.value;
        }
    }, {
        key: "getValue",
        value: function getValue() {
            return this.value;
        }
    }, {
        key: "name",
        get: function get() {
            return _constants.STYLE_PROPS.OBJECT_FIT;
        }
    }]);

    return ObjectFit;
}();

exports.default = ObjectFit;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transform = function () {
    function Transform(transforms) {
        _classCallCheck(this, Transform);

        this.transforms = transforms;
    }

    _createClass(Transform, [{
        key: "equals",
        value: function equals(other) {
            return this.transforms.length === other.transforms.length && this.transforms.every(function (fn, index) {
                var f = other.transforms[index];

                return f.args.length === fn.args.length && fn.args.every(function (a, idx) {
                    return a.equals(f.args[idx]);
                });
            });
        }
    }, {
        key: "getValue",
        value: function getValue(params, variables) {
            return this.transforms.map(function (_ref) {
                var fn = _ref.fn,
                    args = _ref.args;
                return `${fn}(${args.map(function (arg) {
                    return arg.toStyleValue(params, variables);
                }).join(" ")})`;
            }).join(" ");
        }
    }, {
        key: "name",
        get: function get() {
            return _constants.STYLE_PROPS.TRANSFORM;
        }
    }]);

    return Transform;
}();

exports.default = Transform;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MixBlendMode = function () {
    function MixBlendMode(value) {
        _classCallCheck(this, MixBlendMode);

        this.value = value;
    }

    _createClass(MixBlendMode, [{
        key: "equals",
        value: function equals(other) {
            return this.value === other.value;
        }
    }, {
        key: "getValue",
        value: function getValue() {
            return this.value;
        }
    }, {
        key: "name",
        get: function get() {
            return _constants.STYLE_PROPS.BLEND_MODE;
        }
    }]);

    return MixBlendMode;
}();

exports.default = MixBlendMode;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BorderRadius = function () {
    function BorderRadius(length) {
        _classCallCheck(this, BorderRadius);

        this.value = length;
    }

    _createClass(BorderRadius, [{
        key: "equals",
        value: function equals(other) {
            return this.value.equals(other.value);
        }
    }, {
        key: "getValue",
        value: function getValue(params, variables) {
            return this.value.toStyleValue(params, variables);
        }
    }, {
        key: "name",
        get: function get() {
            return _constants.STYLE_PROPS.BORDER_RADIUS;
        }
    }]);

    return BorderRadius;
}();

exports.default = BorderRadius;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BgBlendMode = function () {
    function BgBlendMode(values) {
        _classCallCheck(this, BgBlendMode);

        this.values = values;
    }

    _createClass(BgBlendMode, [{
        key: "equals",
        value: function equals(other) {
            return this.values.join(", ") === other.values.join(", ");
        }
    }, {
        key: "getValue",
        value: function getValue() {
            return this.values.join(", ");
        }
    }, {
        key: "name",
        get: function get() {
            return _constants.STYLE_PROPS.BACKGROUND_BLEND_MODE;
        }
    }]);

    return BgBlendMode;
}();

exports.default = BgBlendMode;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BgImage = function () {
    function BgImage(images) {
        _classCallCheck(this, BgImage);

        this.images = images;
    }

    _createClass(BgImage, [{
        key: "equals",
        value: function equals(other) {
            return this.images.length === other.images.length && this.images.every(function (img, index) {
                return img.equals(other.images[index]);
            });
        }
    }, {
        key: "getValue",
        value: function getValue(params, variables) {
            return this.images.map(function (img) {
                return img.toStyleValue(params, variables);
            }).join(", ");
        }
    }, {
        key: "name",
        get: function get() {
            return _constants.STYLE_PROPS.BACKGROUND_IMAGE;
        }
    }]);

    return BgImage;
}();

exports.default = BgImage;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BgColor = function () {
    function BgColor(color) {
        _classCallCheck(this, BgColor);

        this.color = color;
    }

    _createClass(BgColor, [{
        key: "equals",
        value: function equals(other) {
            return this.color.equals(other.color);
        }
    }, {
        key: "getValue",
        value: function getValue(params, variables) {
            return this.color.toStyleValue(params, variables);
        }
    }, {
        key: "name",
        get: function get() {
            return _constants.STYLE_PROPS.BACKGROUND_COLOR;
        }
    }]);

    return BgColor;
}();

exports.default = BgColor;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BgClip = function () {
    function BgClip(values) {
        _classCallCheck(this, BgClip);

        this.values = values;
    }

    _createClass(BgClip, [{
        key: "equals",
        value: function equals(other) {
            return this.values.join(", ") === other.values.join(", ");
        }
    }, {
        key: "getValue",
        value: function getValue() {
            return this.values.join(", ");
        }
    }, {
        key: "name",
        get: function get() {
            return _constants.STYLE_PROPS.BACKGROUND_CLIP;
        }
    }]);

    return BgClip;
}();

exports.default = BgClip;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(4);

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextFillColor = function () {
    function TextFillColor(value) {
        _classCallCheck(this, TextFillColor);

        this.value = value;
    }

    _createClass(TextFillColor, [{
        key: "equals",
        value: function equals(other) {
            return this.value === other.value;
        }
    }, {
        key: "getValue",
        value: function getValue() {
            return this.value;
        }
    }, {
        key: "name",
        get: function get() {
            return _constants.STYLE_PROPS.TEXT_FILL_COLOR;
        }
    }]);

    return TextFillColor;
}();

var webKitTextFillColor = (0, _utils.webkit)(TextFillColor);

exports.default = webKitTextFillColor;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
;(function(root, factory) {
	// https://github.com/umdjs/umd/blob/master/returnExports.js
	if (true) {
		// For Node.js.
		module.exports = factory(root);
	} else if (typeof define == 'function' && define.amd) {
		// For AMD. Register as an anonymous module.
		define([], factory.bind(root, root));
	} else {
		// For browser globals (not exposing the function separately).
		factory(root);
	}
}(typeof global != 'undefined' ? global : this, function(root) {

	if (root.CSS && root.CSS.escape) {
		return root.CSS.escape;
	}

	// https://drafts.csswg.org/cssom/#serialize-an-identifier
	var cssEscape = function(value) {
		if (arguments.length == 0) {
			throw new TypeError('`CSS.escape` requires an argument.');
		}
		var string = String(value);
		var length = string.length;
		var index = -1;
		var codeUnit;
		var result = '';
		var firstCodeUnit = string.charCodeAt(0);
		while (++index < length) {
			codeUnit = string.charCodeAt(index);
			// Note: there’s no need to special-case astral symbols, surrogate
			// pairs, or lone surrogates.

			// If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
			// (U+FFFD).
			if (codeUnit == 0x0000) {
				result += '\uFFFD';
				continue;
			}

			if (
				// If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
				// U+007F, […]
				(codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
				// If the character is the first character and is in the range [0-9]
				// (U+0030 to U+0039), […]
				(index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
				// If the character is the second character and is in the range [0-9]
				// (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
				(
					index == 1 &&
					codeUnit >= 0x0030 && codeUnit <= 0x0039 &&
					firstCodeUnit == 0x002D
				)
			) {
				// https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
				result += '\\' + codeUnit.toString(16) + ' ';
				continue;
			}

			if (
				// If the character is the first character and is a `-` (U+002D), and
				// there is no second character, […]
				index == 0 &&
				length == 1 &&
				codeUnit == 0x002D
			) {
				result += '\\' + string.charAt(index);
				continue;
			}

			// If the character is not handled by one of the above rules and is
			// greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
			// is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
			// U+005A), or [a-z] (U+0061 to U+007A), […]
			if (
				codeUnit >= 0x0080 ||
				codeUnit == 0x002D ||
				codeUnit == 0x005F ||
				codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
				codeUnit >= 0x0041 && codeUnit <= 0x005A ||
				codeUnit >= 0x0061 && codeUnit <= 0x007A
			) {
				// the character itself
				result += string.charAt(index);
				continue;
			}

			// Otherwise, the escaped character.
			// https://drafts.csswg.org/cssom/#escape-a-character
			result += '\\' + string.charAt(index);

		}
		return result;
	};

	if (!root.CSS) {
		root.CSS = {};
	}

	root.CSS.escape = cssEscape;
	return cssEscape;

}));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

/***/ }),
/* 28 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextStroke = function () {
    function TextStroke(length, color) {
        _classCallCheck(this, TextStroke);

        this.length = length;
        this.color = color;
    }

    _createClass(TextStroke, [{
        key: "equals",
        value: function equals(other) {
            return this.length.equals(other.length) && this.color.equals(other.color);
        }
    }, {
        key: "getValue",
        value: function getValue(params, variables) {
            var color = this.color,
                length = this.length;


            return `${length.toStyleValue(params, variables)} ${color.toStyleValue(params, variables)}`;
        }
    }, {
        key: "name",
        get: function get() {
            return _constants.STYLE_PROPS.TEXT_STROKE;
        }
    }]);

    return TextStroke;
}();

exports.default = TextStroke;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BorderImageSource = function () {
    function BorderImageSource(source) {
        _classCallCheck(this, BorderImageSource);

        this.source = source;
    }

    _createClass(BorderImageSource, [{
        key: "equals",
        value: function equals(other) {
            return this.source.equals(other.source);
        }
    }, {
        key: "getValue",
        value: function getValue(params, variables) {
            return this.source.toStyleValue(params, variables);
        }
    }, {
        key: "name",
        get: function get() {
            return _constants.STYLE_PROPS.BORDER_IMAGE_SOURCE;
        }
    }]);

    return BorderImageSource;
}();

exports.default = BorderImageSource;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BorderWidth = function () {
    function BorderWidth(width) {
        _classCallCheck(this, BorderWidth);

        this.width = width;
    }

    _createClass(BorderWidth, [{
        key: "equals",
        value: function equals(other) {
            return this.width.equals(other.width);
        }
    }, {
        key: "getValue",
        value: function getValue(params, variables) {
            return this.width.toStyleValue(params, variables);
        }
    }, {
        key: "name",
        get: function get() {
            return _constants.STYLE_PROPS.BORDER_WIDTH;
        }
    }]);

    return BorderWidth;
}();

exports.default = BorderWidth;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BorderStyle = function () {
    function BorderStyle(value) {
        _classCallCheck(this, BorderStyle);

        this.value = value;
    }

    _createClass(BorderStyle, [{
        key: "equals",
        value: function equals(other) {
            return this.value === other.value;
        }
    }, {
        key: "getValue",
        value: function getValue() {
            return this.value;
        }
    }, {
        key: "name",
        get: function get() {
            return _constants.STYLE_PROPS.BORDER_STYLE;
        }
    }]);

    return BorderStyle;
}();

exports.default = BorderStyle;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BorderImageSlice = function () {
    function BorderImageSlice(value) {
        _classCallCheck(this, BorderImageSlice);

        this.value = value;
    }

    _createClass(BorderImageSlice, [{
        key: "equals",
        value: function equals(other) {
            return this.value.equals(other.value);
        }
    }, {
        key: "getValue",
        value: function getValue(params, variables) {
            return this.value.toStyleValue(params, variables);
        }
    }, {
        key: "name",
        get: function get() {
            return _constants.STYLE_PROPS.BORDER_IMAGE_SLICE;
        }
    }]);

    return BorderImageSlice;
}();

exports.default = BorderImageSlice;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BackdropFilter = function () {
    function BackdropFilter(filters) {
        _classCallCheck(this, BackdropFilter);

        this.filters = filters;
    }

    _createClass(BackdropFilter, [{
        key: "equals",
        value: function equals(other) {
            return this.filters.length === other.filters.length && this.filters.every(function (filter, index) {
                var f = other.filters[index];

                return f.args.length === filter.args.length && filter.args.every(function (a, idx) {
                    return a.equals(f.args[idx]);
                });
            });
        }
    }, {
        key: "getValue",
        value: function getValue(params) {
            return this.filters.map(function (_ref) {
                var fn = _ref.fn,
                    args = _ref.args;
                return `${fn}(${args.map(function (arg) {
                    return arg.toStyleValue(params);
                }).join(" ")})`;
            }).join(" ");
        }
    }, {
        key: "name",
        get: function get() {
            return _constants.STYLE_PROPS.BACKDROP_FILTER;
        }
    }]);

    return BackdropFilter;
}();

exports.default = BackdropFilter;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Filter = function () {
    function Filter(filters) {
        _classCallCheck(this, Filter);

        this.filters = filters;
    }

    _createClass(Filter, [{
        key: "equals",
        value: function equals(other) {
            return this.filters.length === other.filters.length && this.filters.every(function (filter, index) {
                var f = other.filters[index];

                return f.args.length === filter.args.length && filter.args.every(function (a, idx) {
                    return a.equals(f.args[idx]);
                });
            });
        }
    }, {
        key: "getValue",
        value: function getValue(params, variables) {
            return this.filters.map(function (_ref) {
                var fn = _ref.fn,
                    args = _ref.args;
                return `${fn}(${args.map(function (arg) {
                    return arg.toStyleValue(params, variables);
                }).join(" ")})`;
            }).join(" ");
        }
    }, {
        key: "name",
        get: function get() {
            return _constants.STYLE_PROPS.FILTER;
        }
    }]);

    return Filter;
}();

exports.default = Filter;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _length = __webpack_require__(2);

var _length2 = _interopRequireDefault(_length);

var _color = __webpack_require__(1);

var _color2 = _interopRequireDefault(_color);

var _fontFamily = __webpack_require__(37);

var _fontFamily2 = _interopRequireDefault(_fontFamily);

var _fontSize = __webpack_require__(38);

var _fontSize2 = _interopRequireDefault(_fontSize);

var _fontStyle = __webpack_require__(39);

var _fontStyle2 = _interopRequireDefault(_fontStyle);

var _fontStretch = __webpack_require__(40);

var _fontStretch2 = _interopRequireDefault(_fontStretch);

var _fontWeight = __webpack_require__(41);

var _fontWeight2 = _interopRequireDefault(_fontWeight);

var _fontColor = __webpack_require__(7);

var _fontColor2 = _interopRequireDefault(_fontColor);

var _textAlign = __webpack_require__(42);

var _textAlign2 = _interopRequireDefault(_textAlign);

var _lineHeight = __webpack_require__(43);

var _lineHeight2 = _interopRequireDefault(_lineHeight);

var _letterSpacing = __webpack_require__(44);

var _letterSpacing2 = _interopRequireDefault(_letterSpacing);

var _ruleSet = __webpack_require__(8);

var _ruleSet2 = _interopRequireDefault(_ruleSet);

var _utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextStyle = function () {
    function TextStyle(textStyleObject) {
        _classCallCheck(this, TextStyle);

        this.font = textStyleObject;

        this.declarations = this.collectDeclarations();
    }

    _createClass(TextStyle, [{
        key: "collectDeclarations",
        value: function collectDeclarations() {
            var font = this.font;

            var declarations = [new _fontFamily2.default(font.fontFamily), new _fontSize2.default(new _length2.default(font.fontSize))];

            declarations.push(new _fontWeight2.default(font.fontWeight || _fontWeight2.default.DEFAULT_VALUE));
            declarations.push(new _fontStyle2.default(font.fontStyle || _fontStyle2.default.DEFAULT_VALUE));
            declarations.push(new _fontStretch2.default(font.fontStretch || _fontStretch2.default.DEFAULT_VALUE));
            declarations.push(new _lineHeight2.default(font.lineHeight || _lineHeight2.default.DEFAULT_VALUE, font.fontSize));
            declarations.push(new _letterSpacing2.default(font.letterSpacing ? new _length2.default(font.letterSpacing) : _letterSpacing2.default.DEFAULT_VALUE));

            if ("textAlign" in font && font.textAlign) {
                declarations.push(new _textAlign2.default(font.textAlign));
            }

            if ("color" in font) {
                declarations.push(new _fontColor2.default(new _color2.default(font.color)));
            }

            return declarations;
        }
    }, {
        key: "style",
        get: function get() {
            return new _ruleSet2.default((0, _utils.selectorize)(this.font.name), this.declarations);
        }
    }]);

    return TextStyle;
}();

exports.default = TextStyle;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FontFamily = function () {
    function FontFamily(value) {
        _classCallCheck(this, FontFamily);

        this.value = value;
    }

    _createClass(FontFamily, [{
        key: "equals",
        value: function equals(other) {
            return this.value === other.value;
        }
    }, {
        key: "getValue",
        value: function getValue() {
            return this.value;
        }
    }, {
        key: "name",
        get: function get() {
            return _constants.STYLE_PROPS.FONT_FAMILY;
        }
    }]);

    return FontFamily;
}();

exports.default = FontFamily;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FontSize = function () {
    function FontSize(value) {
        _classCallCheck(this, FontSize);

        this.value = value;
    }

    _createClass(FontSize, [{
        key: "hasDefaultValue",
        value: function hasDefaultValue() {
            return this.value === FontSize.DEFAULT_VALUE;
        }
    }, {
        key: "equals",
        value: function equals(other) {
            return this.value.equals(other.value);
        }
    }, {
        key: "getValue",
        value: function getValue(params, variables) {
            if (this.hasDefaultValue()) {
                return FontSize.DEFAULT_VALUE;
            }

            return this.value.toStyleValue(params, variables);
        }
    }, {
        key: "name",
        get: function get() {
            return _constants.STYLE_PROPS.FONT_SIZE;
        }
    }], [{
        key: "DEFAULT_VALUE",
        get: function get() {
            return "normal";
        }
    }]);

    return FontSize;
}();

exports.default = FontSize;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FontStyle = function () {
    function FontStyle(value) {
        _classCallCheck(this, FontStyle);

        this.value = value;
    }

    _createClass(FontStyle, [{
        key: "equals",
        value: function equals(other) {
            return this.value === other.value;
        }
    }, {
        key: "hasDefaultValue",
        value: function hasDefaultValue() {
            return this.value === FontStyle.DEFAULT_VALUE;
        }
    }, {
        key: "getValue",
        value: function getValue() {
            if (this.hasDefaultValue()) {
                return FontStyle.DEFAULT_VALUE;
            }

            return this.value;
        }
    }, {
        key: "name",
        get: function get() {
            return _constants.STYLE_PROPS.FONT_STYLE;
        }
    }], [{
        key: "DEFAULT_VALUE",
        get: function get() {
            return "normal";
        }
    }]);

    return FontStyle;
}();

exports.default = FontStyle;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FontStretch = function () {
    function FontStretch(value) {
        _classCallCheck(this, FontStretch);

        this.value = value;
    }

    _createClass(FontStretch, [{
        key: "equals",
        value: function equals(other) {
            return this.value === other.value;
        }
    }, {
        key: "hasDefaultValue",
        value: function hasDefaultValue() {
            return this.value === FontStretch.DEFAULT_VALUE;
        }
    }, {
        key: "getValue",
        value: function getValue() {
            if (this.hasDefaultValue()) {
                return FontStretch.DEFAULT_VALUE;
            }

            return this.value;
        }
    }, {
        key: "name",
        get: function get() {
            return _constants.STYLE_PROPS.FONT_STRETCH;
        }
    }], [{
        key: "DEFAULT_VALUE",
        get: function get() {
            return "normal";
        }
    }]);

    return FontStretch;
}();

exports.default = FontStretch;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WEIGHT_BOLD = 700;
var WEIGHT_NORMAL = 400;

var FontWeight = function () {
    function FontWeight(value) {
        _classCallCheck(this, FontWeight);

        this.value = value;
    }

    _createClass(FontWeight, [{
        key: "hasDefaultValue",
        value: function hasDefaultValue() {
            return this.value === WEIGHT_NORMAL;
        }
    }, {
        key: "equals",
        value: function equals(other) {
            return this.value === other.value;
        }
    }, {
        key: "getValue",
        value: function getValue() {
            var value = this.value;


            if (value === WEIGHT_BOLD) {
                return "bold";
            } else if (value === WEIGHT_NORMAL) {
                return "normal";
            }

            return value;
        }
    }, {
        key: "name",
        get: function get() {
            return _constants.STYLE_PROPS.FONT_WEIGHT;
        }
    }], [{
        key: "DEFAULT_VALUE",
        get: function get() {
            return WEIGHT_NORMAL;
        }
    }]);

    return FontWeight;
}();

exports.default = FontWeight;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextAlign = function () {
    function TextAlign(value) {
        _classCallCheck(this, TextAlign);

        this.value = value;
    }

    _createClass(TextAlign, [{
        key: "equals",
        value: function equals(other) {
            return this.value === other.value;
        }
    }, {
        key: "getValue",
        value: function getValue() {
            return this.value;
        }
    }, {
        key: "name",
        get: function get() {
            return _constants.STYLE_PROPS.TEXT_ALIGN;
        }
    }]);

    return TextAlign;
}();

exports.default = TextAlign;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

var _scalar = __webpack_require__(3);

var _scalar2 = _interopRequireDefault(_scalar);

var _length = __webpack_require__(2);

var _length2 = _interopRequireDefault(_length);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LineHeight = function () {
    function LineHeight(lineHeight, fontSize) {
        _classCallCheck(this, LineHeight);

        this.lineHeight = lineHeight;
        this.fontSize = fontSize;
    }

    _createClass(LineHeight, [{
        key: "equals",
        value: function equals(other) {
            return this.hasDefaultValue() && other.hasDefaultValue() || this.lineHeight === other.lineHeight;
        }
    }, {
        key: "hasDefaultValue",
        value: function hasDefaultValue() {
            return this.lineHeight === LineHeight.DEFAULT_VALUE;
        }
    }, {
        key: "getValue",
        value: function getValue(params, variables) {
            if (this.hasDefaultValue()) {
                return this.lineHeight;
            }

            var unitlessLineHeight = params.unitlessLineHeight;

            var value = unitlessLineHeight ? new _scalar2.default(this.lineHeight / this.fontSize) : new _length2.default(this.lineHeight);

            return value.toStyleValue(params, variables);
        }
    }, {
        key: "name",
        get: function get() {
            return _constants.STYLE_PROPS.LINE_HEIGHT;
        }
    }], [{
        key: "DEFAULT_VALUE",
        get: function get() {
            return "normal";
        }
    }]);

    return LineHeight;
}();

exports.default = LineHeight;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _length = __webpack_require__(2);

var _length2 = _interopRequireDefault(_length);

var _constants = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LetterSpacing = function () {
    function LetterSpacing(value) {
        _classCallCheck(this, LetterSpacing);

        this.value = value;
    }

    _createClass(LetterSpacing, [{
        key: "hasDefaultValue",
        value: function hasDefaultValue() {
            return this.value.equals(LetterSpacing.DEFAULT_VALUE);
        }
    }, {
        key: "equals",
        value: function equals(other) {
            return this.value.equals(other.value);
        }
    }, {
        key: "getValue",
        value: function getValue(params, variables) {
            if (this.hasDefaultValue()) {
                return "normal";
            }

            return this.value.toStyleValue(params, variables);
        }
    }, {
        key: "name",
        get: function get() {
            return _constants.STYLE_PROPS.LETTER_SPACING;
        }
    }], [{
        key: "DEFAULT_VALUE",
        get: function get() {
            return new _length2.default(0);
        }
    }]);

    return LetterSpacing;
}();

exports.default = LetterSpacing;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BgOrigin = function () {
    function BgOrigin(values) {
        _classCallCheck(this, BgOrigin);

        this.values = values;
    }

    _createClass(BgOrigin, [{
        key: "equals",
        value: function equals(other) {
            return this.values.join(", ") === other.values.join(", ");
        }
    }, {
        key: "getValue",
        value: function getValue() {
            return this.values.join(", ");
        }
    }, {
        key: "name",
        get: function get() {
            return _constants.STYLE_PROPS.BACKGROUND_ORIGIN;
        }
    }]);

    return BgOrigin;
}();

exports.default = BgOrigin;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = {"type":"stylesheet","level":"simple","value":[{"type":"rule","selectors":[".alpha"],"declarations":{"font-size":"36px"}},{"type":"rule","selectors":[".beta"],"declarations":{"font-size":"24px"}},{"type":"rule","selectors":[".gamma"],"declarations":{"font-size":"20px"}},{"type":"rule","selectors":[".delta"],"declarations":{"font-size":"18px"}},{"type":"rule","selectors":[".epsilon"],"declarations":{"font-size":"16px"}},{"type":"rule","selectors":[".font-weight-normal"],"declarations":{"font-weight":"bold"}},{"type":"rule","selectors":[".font-weight-bold"],"declarations":{"font-weight":"bold"}},{"type":"rule","selectors":[".text-color-zetch-orange"],"declarations":{"color":"#E86524"}},{"type":"rule","selectors":[".text-color-zetch-dark-yellow"],"declarations":{"color":"#FBB636"}},{"type":"rule","selectors":[".text-color-zetch-light-yellow"],"declarations":{"color":"#FBCD31"}},{"type":"rule","selectors":[".text-color-white"],"declarations":{"color":"white"}},{"type":"rule","selectors":[".bg-color-zetch-orange"],"declarations":{"background-color":"#E86524"}},{"type":"rule","selectors":[".bg-color-zetch-dark-yellow"],"declarations":{"background-color":"#FBB636"}},{"type":"rule","selectors":[".bg-color-zetch-light-yellow"],"declarations":{"background-color":"#FBCD31"}}]}

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2Y2UxZTkwMmYzZDRmNWNjZjQ0NyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy96ZXBsaW4tZXh0ZW5zaW9uLXN0eWxlLWtpdC92YWx1ZXMvY29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3plcGxpbi1leHRlbnNpb24tc3R5bGUta2l0L3ZhbHVlcy9sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3plcGxpbi1leHRlbnNpb24tc3R5bGUta2l0L3ZhbHVlcy9zY2FsYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3plcGxpbi1leHRlbnNpb24tc3R5bGUta2l0L3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AemVwbGluL2V4dGVuc2lvbi1tb2RlbC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy96ZXBsaW4tZXh0ZW5zaW9uLXN0eWxlLWtpdC92YWx1ZXMvZ3JhZGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3plcGxpbi1leHRlbnNpb24tc3R5bGUta2l0L2RlY2xhcmF0aW9ucy9mb250Q29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3plcGxpbi1leHRlbnNpb24tc3R5bGUta2l0L3J1bGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy96ZXBsaW4tZXh0ZW5zaW9uLXN0eWxlLWtpdC9lbGVtZW50cy9sYXllci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvdmFsdWVzL2FuZ2xlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy96ZXBsaW4tZXh0ZW5zaW9uLXN0eWxlLWtpdC92YWx1ZXMvcGVyY2VudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvZGVjbGFyYXRpb25zL2JvcmRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvZGVjbGFyYXRpb25zL3NoYWRvdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvZGVjbGFyYXRpb25zL29wYWNpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3plcGxpbi1leHRlbnNpb24tc3R5bGUta2l0L2RlY2xhcmF0aW9ucy93aWR0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvZGVjbGFyYXRpb25zL2hlaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvZGVjbGFyYXRpb25zL29iamVjdEZpdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvZGVjbGFyYXRpb25zL3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvZGVjbGFyYXRpb25zL21peEJsZW5kTW9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvZGVjbGFyYXRpb25zL2JvcmRlclJhZGl1cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvZGVjbGFyYXRpb25zL2JnQmxlbmRNb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy96ZXBsaW4tZXh0ZW5zaW9uLXN0eWxlLWtpdC9kZWNsYXJhdGlvbnMvYmdJbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvZGVjbGFyYXRpb25zL2JnQ29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3plcGxpbi1leHRlbnNpb24tc3R5bGUta2l0L2RlY2xhcmF0aW9ucy9iZ0NsaXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3plcGxpbi1leHRlbnNpb24tc3R5bGUta2l0L2RlY2xhcmF0aW9ucy90ZXh0RmlsbENvbG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MuZXNjYXBlL2Nzcy5lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvZGVjbGFyYXRpb25zL3RleHRTdHJva2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3plcGxpbi1leHRlbnNpb24tc3R5bGUta2l0L2RlY2xhcmF0aW9ucy9ib3JkZXJJbWFnZVNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvZGVjbGFyYXRpb25zL2JvcmRlcldpZHRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy96ZXBsaW4tZXh0ZW5zaW9uLXN0eWxlLWtpdC9kZWNsYXJhdGlvbnMvYm9yZGVyU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3plcGxpbi1leHRlbnNpb24tc3R5bGUta2l0L2RlY2xhcmF0aW9ucy9ib3JkZXJJbWFnZVNsaWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy96ZXBsaW4tZXh0ZW5zaW9uLXN0eWxlLWtpdC9kZWNsYXJhdGlvbnMvYmFja2Ryb3BGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3plcGxpbi1leHRlbnNpb24tc3R5bGUta2l0L2RlY2xhcmF0aW9ucy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3plcGxpbi1leHRlbnNpb24tc3R5bGUta2l0L2VsZW1lbnRzL3RleHRTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvZGVjbGFyYXRpb25zL2ZvbnRGYW1pbHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3plcGxpbi1leHRlbnNpb24tc3R5bGUta2l0L2RlY2xhcmF0aW9ucy9mb250U2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvZGVjbGFyYXRpb25zL2ZvbnRTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvZGVjbGFyYXRpb25zL2ZvbnRTdHJldGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy96ZXBsaW4tZXh0ZW5zaW9uLXN0eWxlLWtpdC9kZWNsYXJhdGlvbnMvZm9udFdlaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvZGVjbGFyYXRpb25zL3RleHRBbGlnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvZGVjbGFyYXRpb25zL2xpbmVIZWlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3plcGxpbi1leHRlbnNpb24tc3R5bGUta2l0L2RlY2xhcmF0aW9ucy9sZXR0ZXJTcGFjaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy96ZXBsaW4tZXh0ZW5zaW9uLXN0eWxlLWtpdC9kZWNsYXJhdGlvbnMvYmdPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5qc29uIl0sIm5hbWVzIjpbInN0eWxlcyIsInJlcXVpcmUiLCJsYXllciIsImNvbnRleHQiLCJzZWxlY3RlZExheWVyIiwibCIsIkxheWVyIiwibGF5ZXJSdWxlU2V0Iiwic3R5bGUiLCJjaGlsZHJlblJ1bGVTZXQiLCJkZWZhdWx0VGV4dFN0eWxlIiwidHlwZSIsImRlY2xhcmF0aW9ucyIsImdldExheWVyVGV4dFN0eWxlRGVjbGFyYXRpb25zIiwiZm9yRWFjaCIsImFkZERlY2xhcmF0aW9uIiwicCIsImZpbHRlciIsImVxdWFscyIsInRleHRTdHlsZSIsImlkeCIsInB1c2giLCJSdWxlU2V0Iiwic2VsZWN0b3JpemUiLCJuYW1lIiwiY3NzQ2xhc3NlcyIsImxheWVyUnVsZXMiLCJkZWNsYXJhdGlvbk1hcCIsImxheWVyUHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJzdHlsZVNoZWV0UnVsZXMiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwicnVsZSIsInJ1bGVNYXRjaGVzIiwicHJvcGVydHkiLCJpbmNsdWRlcyIsInN0eWxlU2hlZXRQcm9wZXJ0eVZhbHVlTWF0Y2hlc0xheWVyIiwic2VsZWN0b3JzIiwiY29kZSIsImpvaW4iLCJsYW5ndWFnZSIsInN0eWxlU2hlZXRSdWxlIiwibGF5ZXJTdHJpbmciLCJ1bml0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQzs7Ozs7OztBQ2xEYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxnQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakIsc0JBQXNCLG1CQUFPLENBQUMsQ0FBeUI7O0FBRXZELGdCQUFnQixtQkFBTyxDQUFDLENBQVk7O0FBRXBDOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGVBQWUsUUFBUTtBQUN2Qjs7QUFFQTtBQUNBLGlCQUFpQixvQkFBb0IsSUFBSSxvQkFBb0IsSUFBSSxvQkFBb0I7O0FBRXJGLGlDQUFpQyxJQUFJLElBQUksK0JBQStCLFlBQVksSUFBSTtBQUN4Rjs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLG1DQUFtQyxJQUFJLHFDQUFxQyxLQUFLLHFDQUFxQzs7QUFFdkksaUNBQWlDLElBQUksSUFBSSwrQkFBK0IsWUFBWSxJQUFJO0FBQ3hGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsK0JBQStCLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDdEQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGdEQUFnRCxhQUFhO0FBQzdEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3REFBd0QsYUFBYTtBQUNyRTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVELHdCOzs7Ozs7O0FDL0lhOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixjQUFjLG1CQUFPLENBQUMsQ0FBVTs7QUFFaEM7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsZ0NBQWdDLE1BQU0sS0FBSyxLQUFLO0FBQ2hEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBK0Msb0VBQW9FLEVBQUUsVUFBVTtBQUMvSDtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVELHlCOzs7Ozs7O0FDcERhOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGdDQUFnQyxNQUFNLEtBQUssVUFBVTtBQUNyRDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLGtDQUFrQztBQUN4RDtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVELHlCOzs7Ozs7O0FDdkRhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCLFdBQVcsbUJBQU8sQ0FBQyxFQUFZOztBQUUvQjs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxnQkFBZ0I7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkVBQTJFLGFBQWE7QUFDeEY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGtDQUFrQyxtQkFBbUI7QUFDckQ7QUFDQSxTQUFTOztBQUVUO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Qjs7Ozs7O0FDM0lBLGVBQWUsR0FBRyxJQUFpRCxvQkFBb0IsMkRBQTJELEtBQUssVUFBVSw2REFBNkQsK0NBQStDLG1CQUFtQixTQUFTLGNBQWMsNEJBQTRCLFlBQVkscUJBQXFCLDJEQUEyRCx1Q0FBdUMscUNBQXFDLG9DQUFvQyxFQUFFLGlCQUFpQixpQ0FBaUMsaUJBQWlCLFlBQVksVUFBVSxzQkFBc0IsbUJBQW1CLGlEQUFpRCxrQkFBa0Isa0JBQWtCLGFBQWEsVUFBVSw2QkFBNkIsZUFBZSxXQUFXLGtDQUFrQyxnREFBZ0Qsc0JBQXNCLDJCQUEyQix5QkFBeUIsRUFBRSxJQUFJLGlCQUFpQixhQUFhLGNBQWMsbUNBQW1DLGtDQUFrQyx1Q0FBdUMsRUFBRSxjQUFjLDBCQUEwQixtQ0FBbUMsb0JBQW9CLDBDQUEwQyxjQUFjLG1DQUFtQyx3QkFBd0IsNEJBQTRCLCtCQUErQixlQUFlLCtCQUErQiwwQkFBMEIseUNBQXlDLGlDQUFpQyxrQkFBa0IsRUFBRSxtQkFBbUIsa0NBQWtDLDBEQUEwRCxVQUFVLG1CQUFtQixrRkFBa0YsU0FBUyxtQkFBbUIsa0JBQWtCLHlHQUF5RyxFQUFFLG1CQUFtQiwyQkFBMkIsK0NBQStDLEtBQUssU0FBUyxVQUFVLHFDQUFxQyxRQUFRLE9BQU8saUVBQWlFLFFBQVEsNkZBQTZGLGVBQWUsS0FBSyxVQUFVLG1DQUFtQywyQkFBMkIsTUFBTSxtQkFBbUIsTUFBTSxtQkFBbUIsS0FBSyxPQUFPLGNBQWMsVUFBVSxpQkFBaUIsYUFBYSwwQ0FBMEMsa0NBQWtDLG1CQUFtQiwweEJBQTB4QixFQUFFLHVCQUF1QixrQkFBa0IsU0FBUyx3QkFBd0IsU0FBUyw0QkFBNEIsK0RBQStELG1CQUFtQixRQUFRLHNCQUFzQixJQUFJLHVKQUF1SixtQkFBbUIsZ0NBQWdDLFNBQVMsaUJBQWlCLGFBQWEsa0JBQWtCLGdCQUFnQix1QkFBdUIsNkNBQTZDLCtMQUErTCxjQUFjLGlCQUFpQix5REFBeUQsaUJBQWlCLHdEQUF3RCxpQkFBaUIsd0RBQXdELGtEQUFrRCxPQUFPLDZGQUE2Rix5WUFBeVksS0FBSyxxQkFBcUIsNktBQTZLLEVBQUUsNEJBQTRCLG9CQUFvQixTQUFTLDRCQUE0Qix1SkFBdUosZUFBZSxRQUFRLHNCQUFzQixJQUFJLDJGQUEyRixtQkFBbUIsa0NBQWtDLG1EQUFtRCxLQUFLLG1CQUFtQixpQkFBaUIsbUJBQW1CLGdSQUFnUixrQkFBa0IsVUFBVSw0VEFBNFQsY0FBYyxpQkFBaUIsYUFBYSw0QkFBNEIsNENBQTRDLEVBQUUsdUJBQXVCLGtCQUFrQixTQUFTLDRCQUE0Qix3QkFBd0IsZUFBZSw0QkFBNEIsbUJBQW1CLGdDQUFnQyxTQUFTLGlCQUFpQixhQUFhLGtCQUFrQix5QkFBeUIsNEJBQTRCLHNDQUFzQyxtQkFBbUIsUUFBUSxzQkFBc0IsSUFBSSxnQkFBZ0IsK0dBQStHLDBCQUEwQixtQkFBbUIsa0NBQWtDLFdBQVcsaUJBQWlCLGFBQWEsMENBQTBDLGtEQUFrRCxFQUFFLDJCQUEyQixrQkFBa0IsU0FBUyw0QkFBNEIsd0RBQXdELG1CQUFtQixRQUFRLHNCQUFzQixJQUFJLHFGQUFxRixrQkFBa0IsZUFBZSxvRUFBb0UsMERBQTBELEtBQUssZ0RBQWdELDBEQUEwRCxvQkFBb0IsbUJBQW1CLG9DQUFvQyxhQUFhLGlCQUFpQixhQUFhLGtCQUFrQiw0QkFBNEIsNEJBQTRCLDJCQUEyQixlQUFlLFFBQVEsc0JBQXNCLElBQUksNERBQTRELG1CQUFtQixxQ0FBcUMsY0FBYyxpQkFBaUIsYUFBYSwwQ0FBMEMsa0RBQWtELEVBQUUsZ0JBQWdCLG1OQUFtTixnQkFBZ0IsUUFBUSwrQkFBK0IsZUFBZSw0QkFBNEIsTUFBTSxrQ0FBa0MsTUFBTSxnQ0FBZ0MsT0FBTyx5Q0FBeUMsY0FBYyxNQUFNLFVBQVUsd0RBQXdELE1BQU0saUJBQWlCLE1BQU0seUJBQXlCLE1BQU0sMEJBQTBCLE1BQU0sMkJBQTJCLFNBQVMsMEJBQTBCLGtCQUFrQixTQUFTLDRCQUE0QixxR0FBcUcsZUFBZSxRQUFRLHNCQUFzQixJQUFJLDBDQUEwQyxrQkFBa0IscUNBQXFDLGFBQWEsaURBQWlELHNDQUFzQyw4QkFBOEIsRUFBRSxLQUFLLFFBQVEsc0VBQXNFLDBCQUEwQixrQ0FBa0MsWUFBWSxXQUFXLEtBQUssMENBQTBDLGlFQUFpRSxzTUFBc00sa0JBQWtCLHNCQUFzQixtQkFBbUIsb0JBQW9CLHNCQUFzQix1QkFBdUIsd0NBQXdDLGtCQUFrQixFQUFFLHNCQUFzQix3Q0FBd0MsbUJBQW1CLEVBQUUsbUJBQW1CLG9DQUFvQyxrQkFBa0IsRUFBRSxrQkFBa0Isb0NBQW9DLG1CQUFtQixFQUFFLDBCQUEwQixvQ0FBb0Msc0NBQXNDLDZEQUE2RCxHQUFHLFlBQVksaUJBQWlCLGFBQWEsZ0VBQWdFLHdDQUF3QyxFQUFFLHdCQUF3QixrQkFBa0IsU0FBUyw0QkFBNEIsc0tBQXNLLGVBQWUsUUFBUSxrQ0FBa0MsZ0VBQWdFLDhEQUE4RCw2Q0FBNkMsa0NBQWtDLDZDQUE2Qyw4Q0FBOEMsa0JBQWtCLHVDQUF1QyxvQ0FBb0MsT0FBTyxPQUFPLDBDQUEwQyw2QkFBNkIsbUNBQW1DLG9CQUFvQixtQkFBbUIsK0ZBQStGLHNCQUFzQixtQkFBbUIsb0JBQW9CLG9CQUFvQix1QkFBdUIsd0RBQXdELGVBQWUsMkNBQTJDLHlCQUF5QixrQ0FBa0MsOEJBQThCLE9BQU8sK0JBQStCLG9FQUFvRSxjQUFjLFVBQVUsaUJBQWlCLGFBQWEsbUNBQW1DLDRCQUE0QixFQUFFLHlCQUF5QixrQkFBa0IsU0FBUyw0QkFBNEIsaUVBQWlFLGVBQWUsUUFBUSxzQkFBc0IsSUFBSSw2Q0FBNkMsbUJBQW1CLGtDQUFrQyxXQUFXLGlCQUFpQixhQUFhLHNDQUFzQyxTQUFTLEVBQUUsbUhBQW1ILHdCQUF3QixXQUFXLDRCQUE0QixXQUFXLDJCQUEyQixXQUFXLCtCQUErQixXQUFXLCtCQUErQixXQUFXLDZCQUE2QixXQUFXLCtCQUErQixXQUFXLDBCQUEwQixXQUFXLDhCQUE4QixXQUFXLDJCQUEyQixXQUFXLDZCQUE2QixXQUFXLDRCQUE0QixXQUFXLDRCQUE0QixXQUFXLCtCQUErQixXQUFXLDZCQUE2QixXQUFXLEVBQUUsaUJBQWlCLGFBQWEsV0FBVyw0QkFBNEIsNEJBQTRCLDZCQUE2QixlQUFlLFFBQVEsc0JBQXNCLElBQUksb0JBQW9CLG1CQUFtQixxQ0FBcUMsY0FBYyxpQkFBaUIsYUFBYSxrQkFBa0IsMEJBQTBCLGVBQWUsaUVBQWlFLGFBQWEsd0JBQXdCLGNBQWMscUJBQXFCLG1CQUFtQixtQ0FBbUMsWUFBWSxpQkFBaUIsYUFBYSxVQUFVLHVCQUF1QiwyQkFBMkIsWUFBWSxrQkFBa0IsZUFBZSxhQUFhLDBDQUEwQyw0QkFBNEIsMENBQTBDLGdDQUFnQyw0Q0FBNEMsaUJBQWlCLGFBQWEsV0FBVyx5QkFBeUIsNEJBQTRCLG9DQUFvQyxlQUFlLFFBQVEsc0JBQXNCLElBQUksb0JBQW9CLG1CQUFtQixrQ0FBa0MsV0FBVyxpQkFBaUIsYUFBYSwwQ0FBMEMsK0RBQStELEVBQUUsMEJBQTBCLHFCQUFxQixTQUFTLDRCQUE0QixvRkFBb0YsZUFBZSxRQUFRLHVDQUF1QyxzQkFBc0IsaUNBQWlDLE9BQU8sd0NBQXdDLHlHQUF5RyxrQkFBa0IsV0FBVyxvQkFBb0IsbUJBQW1CLG1DQUFtQyxZQUFZLEdBQUcsRTs7Ozs7OztBQ0F4bWQ7O0FBRWI7QUFDQTtBQUNBLENBQUM7O0FBRUQsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCLHNCQUFzQixtQkFBTyxDQUFDLENBQXlCOztBQUV2RCxhQUFhLG1CQUFPLENBQUMsQ0FBUzs7QUFFOUI7O0FBRUEsZUFBZSxtQkFBTyxDQUFDLEVBQVc7O0FBRWxDOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLE1BQU07QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBLFNBQVM7QUFDVCxvQkFBb0IsYUFBYTtBQUNqQztBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLG1DQUFtQyxTQUFTLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtBQUN4RTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwwQkFBMEIsK0NBQStDO0FBQ3pFOztBQUVBLHNCQUFzQix5Q0FBeUMsY0FBYyxhQUFhLEVBQUUsSUFBSTtBQUNoRztBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxrQ0FBa0MsS0FBSyxLQUFLLE1BQU0sR0FBRztBQUNyRDtBQUNBLGFBQWEsWUFBWTtBQUN6QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QyxjQUFjO0FBQ3RELGFBQWE7O0FBRWI7QUFDQTtBQUNBLDhDQUE4QywyQkFBMkIsSUFBSSxlQUFlOztBQUU1RjtBQUNBLHdEQUF3RCxzREFBc0QsR0FBRyxzREFBc0QsSUFBSSxlQUFlOztBQUUxTDtBQUNBLDZDQUE2QyxlQUFlLElBQUksaUNBQWlDLGNBQWMsYUFBYTs7QUFFNUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0ZBQW9GLGFBQWE7QUFDakc7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVELDJCOzs7Ozs7O0FDM0xhOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixhQUFhLG1CQUFPLENBQUMsQ0FBaUI7O0FBRXRDOztBQUVBLGlCQUFpQixtQkFBTyxDQUFDLENBQWM7O0FBRXZDLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw2Q0FBNkMseUJBQXlCO0FBQ3RFO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLENBQUM7O0FBRUQsNEI7Ozs7Ozs7QUN2RGE7O0FBRWI7QUFDQTtBQUNBLENBQUM7O0FBRUQsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVELDBCOzs7Ozs7Ozs7Ozs7O0FDckRBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUlBLFNBQVNDLG1CQUFPQSxDQUFDLEVBQVIsQ0FBYjs7QUFFQSxTQUFTQyxLQUFULENBQWVDLE9BQWYsRUFBd0JDLGFBQXhCLEVBQXVDO0FBQ25DLFFBQU1DLElBQUksSUFBSUMsZUFBSixDQUFVRixhQUFWLENBQVY7QUFDQSxRQUFNRyxlQUFlRixFQUFFRyxLQUF2Qjs7QUFFQSxRQUFNQyxrQkFBa0IsRUFBeEI7QUFKbUMsUUFLM0JDLGdCQUwyQixHQUtOTixhQUxNLENBSzNCTSxnQkFMMkI7OztBQU9uQyxRQUFJTixjQUFjTyxJQUFkLEtBQXVCLE1BQXZCLElBQWlDRCxnQkFBckMsRUFBdUQ7QUFDbkQsWUFBTUUsZUFBZVAsRUFBRVEsNkJBQUYsQ0FBZ0NILGdCQUFoQyxDQUFyQjs7QUFFQUUscUJBQWFFLE9BQWIsQ0FBcUI7QUFBQSxtQkFBS1AsYUFBYVEsY0FBYixDQUE0QkMsQ0FBNUIsQ0FBTDtBQUFBLFNBQXJCOztBQUVBLDZDQUF5QlosYUFBekIsRUFBd0NhLE1BQXhDLENBQ0k7QUFBQSxtQkFBYSxDQUFDUCxpQkFBaUJRLE1BQWpCLENBQXdCQyxTQUF4QixDQUFkO0FBQUEsU0FESixFQUVFTCxPQUZGLENBRVUsVUFBQ0ssU0FBRCxFQUFZQyxHQUFaLEVBQW9CO0FBQzFCWCw0QkFBZ0JZLElBQWhCLENBQ0ksSUFBSUMsT0FBSixDQUNLLEdBQUVDLFlBQVluQixjQUFjb0IsSUFBMUIsQ0FBZ0MsSUFBR0QsWUFBYSxjQUFhSCxNQUFNLENBQUUsRUFBbEMsQ0FBcUMsRUFEL0UsRUFFSWYsRUFBRVEsNkJBQUYsQ0FBZ0NNLFNBQWhDLENBRkosQ0FESjtBQU1ILFNBVEQ7QUFVSDs7QUFFRCxRQUFJTSxhQUFhLEVBQWpCOztBQUVBLFFBQU1DLGFBQWFuQixhQUFhb0IsY0FBaEM7QUFDQSxRQUFNQyxrQkFBa0JDLE9BQU9DLElBQVAsQ0FBWUosVUFBWixDQUF4Qjs7QUFFQSxRQUFNSyxrQkFBa0IvQixTQUFTQSxPQUFPZ0MsS0FBaEIsR0FBd0IsRUFBaEQ7QUFDQUMsWUFBUUMsR0FBUixDQUFZLE1BQVo7QUFDQUQsWUFBUUMsR0FBUixDQUFZQyxLQUFLQyxTQUFMLENBQWVMLGVBQWYsQ0FBWjs7QUFHQUEsb0JBQWdCakIsT0FBaEIsQ0FBd0IsVUFBU3VCLElBQVQsRUFBZTtBQUNuQyxZQUFJQyxjQUFjLElBQWxCOztBQUVBLFlBQUkxQixlQUFleUIsS0FBS3pCLFlBQXhCO0FBQ0EsYUFBSyxJQUFJMkIsUUFBVCxJQUFxQjNCLFlBQXJCLEVBQW1DO0FBQy9CLGdCQUFJLENBQUNnQixnQkFBZ0JZLFFBQWhCLENBQXlCRCxRQUF6QixDQUFMLEVBQXlDO0FBQ3JDRCw4QkFBYyxLQUFkO0FBQ0g7QUFDRCxnQkFBSSxDQUFDRyxvQ0FBb0NGLFFBQXBDLEVBQThDM0IsWUFBOUMsRUFBNERjLFVBQTVELENBQUwsRUFBOEU7QUFDMUVZLDhCQUFjLEtBQWQ7QUFDSDtBQUNKOztBQUVELFlBQUlBLFdBQUosRUFBaUI7QUFDYmIsMEJBQWNBLFVBQWQsNEJBQTZCWSxLQUFLSyxTQUFsQztBQUNIO0FBQ0osS0FoQkQ7O0FBa0JBLFdBQU87QUFDSEMsY0FBTWxCLFdBQVdtQixJQUFYLENBQWdCLEdBQWhCLENBREg7QUFFSEMsa0JBQVU7QUFGUCxLQUFQO0FBSUg7O0FBRUQsU0FBU0osbUNBQVQsQ0FBNkNGLFFBQTdDLEVBQXVETyxjQUF2RCxFQUF1RXBCLFVBQXZFLEVBQ0E7QUFDSSxZQUFRYSxRQUFSO0FBQ0ksYUFBSyxXQUFMO0FBQ0ksZ0JBQUksQ0FBQ2IsV0FBV2EsUUFBWCxDQUFELElBQXlCLENBQUNiLFdBQVdhLFFBQVgsRUFBcUJQLEtBQW5ELEVBQTBEO0FBQ3RELHVCQUFPLEtBQVA7QUFDSDtBQUNELGdCQUFNZSxjQUFjckIsV0FBV2EsUUFBWCxFQUFxQlAsS0FBckIsQ0FBMkJBLEtBQTNCLEdBQW1DTixXQUFXYSxRQUFYLEVBQXFCUCxLQUFyQixDQUEyQmdCLElBQWxGO0FBQ0EsbUJBQU9ELGdCQUFnQkQsZUFBZVAsUUFBZixDQUF2QjtBQUNKO0FBQ0ksbUJBQU8sS0FBUDtBQVJSO0FBVUg7O2tCQUVjO0FBQ1hyQztBQURXLEM7Ozs7Ozs7QUM3RUY7O0FBRWI7QUFDQTtBQUNBLENBQUM7O0FBRUQsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCLGFBQWEsbUJBQU8sQ0FBQyxFQUFpQjs7QUFFdEM7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLENBQWlCOztBQUV0Qzs7QUFFQSxnQkFBZ0IsbUJBQU8sQ0FBQyxDQUFvQjs7QUFFNUM7O0FBRUEsY0FBYyxtQkFBTyxDQUFDLENBQWtCOztBQUV4Qzs7QUFFQSxjQUFjLG1CQUFPLENBQUMsQ0FBa0I7O0FBRXhDOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyxFQUF3Qjs7QUFFOUM7O0FBRUEsY0FBYyxtQkFBTyxDQUFDLEVBQXdCOztBQUU5Qzs7QUFFQSxlQUFlLG1CQUFPLENBQUMsRUFBeUI7O0FBRWhEOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxFQUF1Qjs7QUFFNUM7O0FBRUEsY0FBYyxtQkFBTyxDQUFDLEVBQXdCOztBQUU5Qzs7QUFFQSxpQkFBaUIsbUJBQU8sQ0FBQyxFQUEyQjs7QUFFcEQ7O0FBRUEsaUJBQWlCLG1CQUFPLENBQUMsRUFBMkI7O0FBRXBEOztBQUVBLG9CQUFvQixtQkFBTyxDQUFDLEVBQThCOztBQUUxRDs7QUFFQSxvQkFBb0IsbUJBQU8sQ0FBQyxFQUE4Qjs7QUFFMUQ7O0FBRUEsbUJBQW1CLG1CQUFPLENBQUMsRUFBNkI7O0FBRXhEOztBQUVBLGVBQWUsbUJBQU8sQ0FBQyxFQUF5Qjs7QUFFaEQ7O0FBRUEsZUFBZSxtQkFBTyxDQUFDLEVBQXlCOztBQUVoRDs7QUFFQSxjQUFjLG1CQUFPLENBQUMsRUFBd0I7O0FBRTlDOztBQUVBLHFCQUFxQixtQkFBTyxDQUFDLEVBQStCOztBQUU1RDs7QUFFQSxrQkFBa0IsbUJBQU8sQ0FBQyxFQUE0Qjs7QUFFdEQ7O0FBRUEseUJBQXlCLG1CQUFPLENBQUMsRUFBbUM7O0FBRXBFOztBQUVBLG1CQUFtQixtQkFBTyxDQUFDLEVBQTZCOztBQUV4RDs7QUFFQSxtQkFBbUIsbUJBQU8sQ0FBQyxFQUE2Qjs7QUFFeEQ7O0FBRUEsd0JBQXdCLG1CQUFPLENBQUMsRUFBa0M7O0FBRWxFOztBQUVBLHNCQUFzQixtQkFBTyxDQUFDLEVBQWdDOztBQUU5RDs7QUFFQSxjQUFjLG1CQUFPLENBQUMsRUFBd0I7O0FBRTlDOztBQUVBLGlCQUFpQixtQkFBTyxDQUFDLENBQTJCOztBQUVwRDs7QUFFQSxpQkFBaUIsbUJBQU8sQ0FBQyxFQUFhOztBQUV0Qzs7QUFFQSxlQUFlLG1CQUFPLENBQUMsQ0FBWTs7QUFFbkM7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLENBQVU7O0FBRS9CLGdCQUFnQixtQkFBTyxDQUFDLEVBQTBCOztBQUVsRDs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Ysa0NBQWtDLDBCQUEwQiwwQ0FBMEMsZ0JBQWdCLE9BQU8sa0JBQWtCLEVBQUUsYUFBYSxFQUFFLE9BQU8sd0JBQXdCLEVBQUU7O0FBRWpNLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsd0RBQXdEOztBQUV0RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0REFBNEQsNkRBQTZEO0FBQ3pIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsQ0FBQzs7QUFFRCx3Qjs7Ozs7OztBQ3JaYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxnQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakIsY0FBYyxtQkFBTyxDQUFDLENBQVU7O0FBRWhDOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLCtCQUErQixNQUFNLEtBQUssS0FBSztBQUMvQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsK0NBQStDLGdEQUFnRCxFQUFFLFVBQVU7QUFDM0c7QUFDQSxLQUFLOztBQUVMO0FBQ0EsQ0FBQzs7QUFFRCx3Qjs7Ozs7OztBQ2xEYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxnQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakIsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGlDQUFpQyxNQUFNO0FBQ3ZDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7O0FBR0Esa0NBQWtDLDRCQUE0QjtBQUM5RDtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVELDBCOzs7Ozs7O0FDN0NhOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixpQkFBaUIsbUJBQU8sQ0FBQyxDQUFjOztBQUV2QyxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxzQkFBc0IsTUFBTSxHQUFHLDJCQUEyQixHQUFHLHNDQUFzQztBQUNuRztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVELHlCOzs7Ozs7O0FDdkRhOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixhQUFhLG1CQUFPLENBQUMsQ0FBaUI7O0FBRXRDOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyxDQUFrQjs7QUFFeEM7O0FBRUEsaUJBQWlCLG1CQUFPLENBQUMsQ0FBYzs7QUFFdkMsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixtREFBbUQsaUJBQWlCLGFBQWEsR0FBRyxtREFBbUQsaUJBQWlCLGFBQWEsR0FBRyxzREFBc0QsaUJBQWlCLGFBQWEsR0FBRyxnREFBZ0QsY0FBYyxhQUFhO0FBQ2hXO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQiwrRkFBK0YsaUJBQWlCLGFBQWEsR0FBRyxtREFBbUQsaUJBQWlCLGFBQWEsR0FBRyxzREFBc0QsaUJBQWlCLGFBQWEsR0FBRyxrREFBa0QsaUJBQWlCLGFBQWEsR0FBRyxnREFBZ0QsY0FBYyxhQUFhO0FBQy9kO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCx5Qjs7Ozs7OztBQ3pGYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxnQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakIsaUJBQWlCLG1CQUFPLENBQUMsQ0FBYzs7QUFFdkMsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVELDBCOzs7Ozs7O0FDdkNhOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixpQkFBaUIsbUJBQU8sQ0FBQyxDQUFjOztBQUV2QyxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLENBQUM7O0FBRUQsd0I7Ozs7Ozs7QUN2Q2E7O0FBRWI7QUFDQTtBQUNBLENBQUM7O0FBRUQsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCLGlCQUFpQixtQkFBTyxDQUFDLENBQWM7O0FBRXZDLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsQ0FBQzs7QUFFRCx5Qjs7Ozs7OztBQ3ZDYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxnQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakIsaUJBQWlCLG1CQUFPLENBQUMsQ0FBYzs7QUFFdkMsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVELDRCOzs7Ozs7O0FDdkNhOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixpQkFBaUIsbUJBQU8sQ0FBQyxDQUFjOztBQUV2QyxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsR0FBRyxHQUFHO0FBQ2hDO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0IsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLENBQUM7O0FBRUQsNEI7Ozs7Ozs7QUNuRGE7O0FBRWI7QUFDQTtBQUNBLENBQUM7O0FBRUQsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCLGlCQUFpQixtQkFBTyxDQUFDLENBQWM7O0FBRXZDLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsQ0FBQzs7QUFFRCwrQjs7Ozs7OztBQ3ZDYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxnQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakIsaUJBQWlCLG1CQUFPLENBQUMsQ0FBYzs7QUFFdkMsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVELCtCOzs7Ozs7O0FDdkNhOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixpQkFBaUIsbUJBQU8sQ0FBQyxDQUFjOztBQUV2QyxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLENBQUM7O0FBRUQsOEI7Ozs7Ozs7QUN2Q2E7O0FBRWI7QUFDQTtBQUNBLENBQUM7O0FBRUQsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCLGlCQUFpQixtQkFBTyxDQUFDLENBQWM7O0FBRXZDLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsQ0FBQzs7QUFFRCwwQjs7Ozs7OztBQzNDYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxnQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakIsaUJBQWlCLG1CQUFPLENBQUMsQ0FBYzs7QUFFdkMsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVELDBCOzs7Ozs7O0FDdkNhOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixpQkFBaUIsbUJBQU8sQ0FBQyxDQUFjOztBQUV2QyxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLENBQUM7O0FBRUQseUI7Ozs7Ozs7QUN2Q2E7O0FBRWI7QUFDQTtBQUNBLENBQUM7O0FBRUQsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCLGFBQWEsbUJBQU8sQ0FBQyxDQUFVOztBQUUvQixpQkFBaUIsbUJBQU8sQ0FBQyxDQUFjOztBQUV2QyxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsc0M7Ozs7OztBQzNDQTtBQUNBLENBQUM7QUFDRDtBQUNBLEtBQUssSUFBMEI7QUFDL0I7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxDQUFDOzs7Ozs7OztBQ3pHRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7QUNwQmE7O0FBRWI7QUFDQTtBQUNBLENBQUM7O0FBRUQsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCLGlCQUFpQixtQkFBTyxDQUFDLENBQWM7O0FBRXZDLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0Esc0JBQXNCLHVDQUF1QyxHQUFHLHNDQUFzQztBQUN0RztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVELDZCOzs7Ozs7O0FDNUNhOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixpQkFBaUIsbUJBQU8sQ0FBQyxDQUFjOztBQUV2QyxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLENBQUM7O0FBRUQsb0M7Ozs7Ozs7QUN2Q2E7O0FBRWI7QUFDQTtBQUNBLENBQUM7O0FBRUQsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCLGlCQUFpQixtQkFBTyxDQUFDLENBQWM7O0FBRXZDLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsQ0FBQzs7QUFFRCw4Qjs7Ozs7OztBQ3ZDYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxnQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakIsaUJBQWlCLG1CQUFPLENBQUMsQ0FBYzs7QUFFdkMsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVELDhCOzs7Ozs7O0FDdkNhOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixpQkFBaUIsbUJBQU8sQ0FBQyxDQUFjOztBQUV2QyxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLENBQUM7O0FBRUQsbUM7Ozs7Ozs7QUN2Q2E7O0FBRWI7QUFDQTtBQUNBLENBQUM7O0FBRUQsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCLGlCQUFpQixtQkFBTyxDQUFDLENBQWM7O0FBRXZDLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixHQUFHLEdBQUc7QUFDaEM7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QixhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsQ0FBQzs7QUFFRCxpQzs7Ozs7OztBQ25EYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxnQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakIsaUJBQWlCLG1CQUFPLENBQUMsQ0FBYzs7QUFFdkMsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLEdBQUcsR0FBRztBQUNoQztBQUNBLGlCQUFpQixZQUFZO0FBQzdCLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVELHlCOzs7Ozs7O0FDbkRhOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixjQUFjLG1CQUFPLENBQUMsQ0FBa0I7O0FBRXhDOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxDQUFpQjs7QUFFdEM7O0FBRUEsa0JBQWtCLG1CQUFPLENBQUMsRUFBNEI7O0FBRXREOztBQUVBLGdCQUFnQixtQkFBTyxDQUFDLEVBQTBCOztBQUVsRDs7QUFFQSxpQkFBaUIsbUJBQU8sQ0FBQyxFQUEyQjs7QUFFcEQ7O0FBRUEsbUJBQW1CLG1CQUFPLENBQUMsRUFBNkI7O0FBRXhEOztBQUVBLGtCQUFrQixtQkFBTyxDQUFDLEVBQTRCOztBQUV0RDs7QUFFQSxpQkFBaUIsbUJBQU8sQ0FBQyxDQUEyQjs7QUFFcEQ7O0FBRUEsaUJBQWlCLG1CQUFPLENBQUMsRUFBMkI7O0FBRXBEOztBQUVBLGtCQUFrQixtQkFBTyxDQUFDLEVBQTRCOztBQUV0RDs7QUFFQSxxQkFBcUIsbUJBQU8sQ0FBQyxFQUErQjs7QUFFNUQ7O0FBRUEsZUFBZSxtQkFBTyxDQUFDLENBQVk7O0FBRW5DOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxDQUFVOztBQUUvQixzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsQ0FBQzs7QUFFRCw0Qjs7Ozs7OztBQ3hHYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxnQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakIsaUJBQWlCLG1CQUFPLENBQUMsQ0FBYzs7QUFFdkMsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVELDZCOzs7Ozs7O0FDdkNhOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixpQkFBaUIsbUJBQU8sQ0FBQyxDQUFjOztBQUV2QyxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVELDJCOzs7Ozs7O0FDckRhOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixpQkFBaUIsbUJBQU8sQ0FBQyxDQUFjOztBQUV2QyxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVELDRCOzs7Ozs7O0FDckRhOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixpQkFBaUIsbUJBQU8sQ0FBQyxDQUFjOztBQUV2QyxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVELDhCOzs7Ozs7O0FDckRhOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixpQkFBaUIsbUJBQU8sQ0FBQyxDQUFjOztBQUV2QyxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVELDZCOzs7Ozs7O0FDN0RhOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixpQkFBaUIsbUJBQU8sQ0FBQyxDQUFjOztBQUV2QyxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLENBQUM7O0FBRUQsNEI7Ozs7Ozs7QUN2Q2E7O0FBRWI7QUFDQTtBQUNBLENBQUM7O0FBRUQsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCLGlCQUFpQixtQkFBTyxDQUFDLENBQWM7O0FBRXZDLGNBQWMsbUJBQU8sQ0FBQyxDQUFrQjs7QUFFeEM7O0FBRUEsY0FBYyxtQkFBTyxDQUFDLENBQWtCOztBQUV4Qzs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVELDZCOzs7Ozs7O0FDcEVhOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixjQUFjLG1CQUFPLENBQUMsQ0FBa0I7O0FBRXhDOztBQUVBLGlCQUFpQixtQkFBTyxDQUFDLENBQWM7O0FBRXZDLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVELGdDOzs7Ozs7O0FDM0RhOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixpQkFBaUIsbUJBQU8sQ0FBQyxDQUFjOztBQUV2QyxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLENBQUM7O0FBRUQsMkI7Ozs7OztBQ3ZDQSxrQkFBa0IsK0NBQStDLHFEQUFxRCxvQkFBb0IsRUFBRSxvREFBb0Qsb0JBQW9CLEVBQUUscURBQXFELG9CQUFvQixFQUFFLHFEQUFxRCxvQkFBb0IsRUFBRSx1REFBdUQsb0JBQW9CLEVBQUUsa0VBQWtFLHNCQUFzQixFQUFFLGdFQUFnRSxzQkFBc0IsRUFBRSx1RUFBdUUsbUJBQW1CLEVBQUUsNEVBQTRFLG1CQUFtQixFQUFFLDZFQUE2RSxtQkFBbUIsRUFBRSxnRUFBZ0UsaUJBQWlCLEVBQUUscUVBQXFFLDhCQUE4QixFQUFFLDBFQUEwRSw4QkFBOEIsRUFBRSwyRUFBMkUsOEJBQThCLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImV4dGVuc2lvblwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJleHRlbnNpb25cIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2Y2UxZTkwMmYzZDRmNWNjZjQ0NyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgU1RZTEVfUFJPUFMgPSB7XG4gICAgRk9OVF9GQU1JTFk6IFwiZm9udC1mYW1pbHlcIixcbiAgICBGT05UX1NJWkU6IFwiZm9udC1zaXplXCIsXG4gICAgRk9OVF9XRUlHSFQ6IFwiZm9udC13ZWlnaHRcIixcbiAgICBGT05UX1NUWUxFOiBcImZvbnQtc3R5bGVcIixcbiAgICBGT05UX1NUUkVUQ0g6IFwiZm9udC1zdHJldGNoXCIsXG4gICAgTElORV9IRUlHSFQ6IFwibGluZS1oZWlnaHRcIixcbiAgICBMRVRURVJfU1BBQ0lORzogXCJsZXR0ZXItc3BhY2luZ1wiLFxuICAgIFRFWFRfQUxJR046IFwidGV4dC1hbGlnblwiLFxuICAgIENPTE9SOiBcImNvbG9yXCIsXG4gICAgV0lEVEg6IFwid2lkdGhcIixcbiAgICBIRUlHSFQ6IFwiaGVpZ2h0XCIsXG4gICAgT0JKRUNUX0ZJVDogXCJvYmplY3QtZml0XCIsXG4gICAgVFJBTlNGT1JNOiBcInRyYW5zZm9ybVwiLFxuICAgIE9QQUNJVFk6IFwib3BhY2l0eVwiLFxuICAgIEJMRU5EX01PREU6IFwibWl4LWJsZW5kLW1vZGVcIixcbiAgICBCT1JERVJfUkFESVVTOiBcImJvcmRlci1yYWRpdXNcIixcbiAgICBCQUNLR1JPVU5EX0JMRU5EX01PREU6IFwiYmFja2dyb3VuZC1ibGVuZC1tb2RlXCIsXG4gICAgQkFDS0dST1VORF9JTUFHRTogXCJiYWNrZ3JvdW5kLWltYWdlXCIsXG4gICAgQkFDS0dST1VORF9DT0xPUjogXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXG4gICAgVEVYVF9TSEFET1c6IFwidGV4dC1zaGFkb3dcIixcbiAgICBCT1hfU0hBRE9XOiBcImJveC1zaGFkb3dcIixcbiAgICBCT1JERVI6IFwiYm9yZGVyXCIsXG4gICAgQkFDS0dST1VORF9PUklHSU46IFwiYmFja2dyb3VuZC1vcmlnaW5cIixcbiAgICBCQUNLR1JPVU5EX0NMSVA6IFwiYmFja2dyb3VuZC1jbGlwXCIsXG4gICAgVEVYVF9TVFJPS0U6IFwidGV4dC1zdHJva2VcIixcbiAgICBCT1JERVJfU1RZTEU6IFwiYm9yZGVyLXN0eWxlXCIsXG4gICAgQk9SREVSX1dJRFRIOiBcImJvcmRlci13aWR0aFwiLFxuICAgIEJPUkRFUl9JTUFHRV9TT1VSQ0U6IFwiYm9yZGVyLWltYWdlLXNvdXJjZVwiLFxuICAgIEJPUkRFUl9JTUFHRV9TTElDRTogXCJib3JkZXItaW1hZ2Utc2xpY2VcIixcbiAgICBCQUNLRFJPUF9GSUxURVI6IFwiYmFja2Ryb3AtZmlsdGVyXCIsXG4gICAgRklMVEVSOiBcImZpbHRlclwiLFxuICAgIFRFWFRfRklMTF9DT0xPUjogXCJ0ZXh0LWZpbGwtY29sb3JcIixcbiAgICBGT05UX0NPTE9SOiBcImNvbG9yXCJcbn07XG5cbnZhciBPUFRJT05fTkFNRVMgPSB7XG4gICAgQ09MT1JfRk9STUFUOiBcImNvbG9yRm9ybWF0XCIsXG4gICAgU0hPV19ERUZBVUxUX1ZBTFVFUzogXCJzaG93RGVmYXVsdFZhbHVlc1wiLFxuICAgIFNIT1dfRElNRU5TSU9OUzogXCJzaG93RGltZW5zaW9uc1wiLFxuICAgIFVOSVRMRVNTX0xJTkVfSEVJR0hUOiBcInVuaXRsZXNzTGluZUhlaWdodFwiLFxuICAgIE1JWElOOiBcIm1peGluXCJcbn07XG5cbmV4cG9ydHMuT1BUSU9OX05BTUVTID0gT1BUSU9OX05BTUVTO1xuZXhwb3J0cy5TVFlMRV9QUk9QUyA9IFNUWUxFX1BST1BTO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3plcGxpbi1leHRlbnNpb24tc3R5bGUta2l0L2NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2V4dGVuc2lvbk1vZGVsID0gcmVxdWlyZShcIkB6ZXBsaW4vZXh0ZW5zaW9uLW1vZGVsXCIpO1xuXG52YXIgX2dyYWRpZW50ID0gcmVxdWlyZShcIi4vZ3JhZGllbnRcIik7XG5cbnZhciBfZ3JhZGllbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ3JhZGllbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgTUFYX1JHQl9WQUxVRSA9IDI1NTtcbnZhciBNQVhfUEVSQ0VOVCA9IDEwMDtcbnZhciBNQVhfQU5HTEUgPSAzNjA7XG52YXIgSEVYX0JBU0UgPSAxNjtcblxudmFyIGFscGhhRm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tVVNcIiwge1xuICAgIHVzZUdyb3VwaW5nOiBmYWxzZSxcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDJcbn0pO1xuXG5mdW5jdGlvbiB0b0hleChudW0pIHtcbiAgICB2YXIgaGV4TnVtID0gTWF0aC50cnVuYyhudW0gKyBudW0gLyBNQVhfUkdCX1ZBTFVFKTtcbiAgICBoZXhOdW0gPSBNYXRoLm1heCgwLCBNYXRoLm1pbihoZXhOdW0sIE1BWF9SR0JfVkFMVUUpKTtcblxuICAgIHJldHVybiAoaGV4TnVtIDwgSEVYX0JBU0UgPyBcIjBcIiA6IFwiXCIpICsgaGV4TnVtLnRvU3RyaW5nKEhFWF9CQVNFKTtcbn1cblxuZnVuY3Rpb24gdG9IZXhTdHJpbmcoY29sb3IpIHtcbiAgICB2YXIgaGV4Q29kZSA9IGNvbG9yLmhleEJhc2UoKTtcblxuICAgIGlmIChjb2xvci5hIDwgMSkge1xuICAgICAgICBoZXhDb2RlICs9IHRvSGV4KGNvbG9yLmEgKiBNQVhfUkdCX1ZBTFVFKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYCMke2hleENvZGV9YDtcbn1cblxuZnVuY3Rpb24gdG9SR0JBU3RyaW5nKGNvbG9yKSB7XG4gICAgdmFyIHJnYiA9IGAke01hdGgucm91bmQoY29sb3Iucil9LCAke01hdGgucm91bmQoY29sb3IuZyl9LCAke01hdGgucm91bmQoY29sb3IuYil9YDtcblxuICAgIHJldHVybiBjb2xvci5hIDwgMSA/IGByZ2JhKCR7cmdifSwgJHthbHBoYUZvcm1hdHRlci5mb3JtYXQoY29sb3IuYSl9KWAgOiBgcmdiKCR7cmdifSlgO1xufVxuXG5mdW5jdGlvbiB0b0hTTFN0cmluZyhjb2xvcikge1xuICAgIHZhciBoc2xDb2xvciA9IGNvbG9yLnRvSFNMKCk7XG4gICAgdmFyIGhzbCA9IGAke01hdGgucm91bmQoaHNsQ29sb3IuaCAqIE1BWF9BTkdMRSl9LCAke01hdGgucm91bmQoaHNsQ29sb3IucyAqIE1BWF9QRVJDRU5UKX0lLCAke01hdGgucm91bmQoaHNsQ29sb3IubCAqIE1BWF9QRVJDRU5UKX0lYDtcblxuICAgIHJldHVybiBjb2xvci5hIDwgMSA/IGBoc2xhKCR7aHNsfSwgJHthbHBoYUZvcm1hdHRlci5mb3JtYXQoY29sb3IuYSl9KWAgOiBgaHNsKCR7aHNsfSlgO1xufVxuXG5mdW5jdGlvbiBnZXRDb2xvclN0cmluZ0J5Rm9ybWF0KGNvbG9yLCBjb2xvckZvcm1hdCkge1xuICAgIGlmICghKFwiclwiIGluIGNvbG9yICYmIFwiZ1wiIGluIGNvbG9yICYmIFwiYlwiIGluIGNvbG9yICYmIFwiYVwiIGluIGNvbG9yKSkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGNvbG9yRm9ybWF0KSB7XG4gICAgICAgIGNhc2UgXCJoZXhcIjpcbiAgICAgICAgICAgIHJldHVybiB0b0hleFN0cmluZyhjb2xvcik7XG5cbiAgICAgICAgY2FzZSBcInJnYlwiOlxuICAgICAgICAgICAgcmV0dXJuIHRvUkdCQVN0cmluZyhjb2xvcik7XG5cbiAgICAgICAgY2FzZSBcImhzbFwiOlxuICAgICAgICAgICAgcmV0dXJuIHRvSFNMU3RyaW5nKGNvbG9yKTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLmEgPCAxID8gdG9SR0JBU3RyaW5nKGNvbG9yKSA6IHRvSGV4U3RyaW5nKGNvbG9yKTtcbiAgICB9XG59XG5cbnZhciBDb2xvciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb2xvcihjb2xvck9iamVjdCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29sb3IpO1xuXG4gICAgICAgIHRoaXMub2JqZWN0ID0gY29sb3JPYmplY3Q7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENvbG9yLCBbe1xuICAgICAgICBrZXk6IFwidmFsdWVPZlwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWVPZigpIHtcbiAgICAgICAgICAgIHZhciBfb2JqZWN0ID0gdGhpcy5vYmplY3QsXG4gICAgICAgICAgICAgICAgciA9IF9vYmplY3QucixcbiAgICAgICAgICAgICAgICBnID0gX29iamVjdC5nLFxuICAgICAgICAgICAgICAgIGIgPSBfb2JqZWN0LmIsXG4gICAgICAgICAgICAgICAgYSA9IF9vYmplY3QuYTtcblxuXG4gICAgICAgICAgICByZXR1cm4gYGNvbG9yOjpyOiR7cn06Zzoke2d9OmI6JHtifTphOiR7YX1gO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiZXF1YWxzXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlcXVhbHMob3RoZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9iamVjdC5lcXVhbHMob3RoZXIub2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInRvR3JhZGllbnRcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRvR3JhZGllbnQoKSB7XG4gICAgICAgICAgICB2YXIgX29iamVjdDIgPSB0aGlzLm9iamVjdCxcbiAgICAgICAgICAgICAgICByID0gX29iamVjdDIucixcbiAgICAgICAgICAgICAgICBnID0gX29iamVjdDIuZyxcbiAgICAgICAgICAgICAgICBiID0gX29iamVjdDIuYixcbiAgICAgICAgICAgICAgICBhID0gX29iamVjdDIuYTtcblxuXG4gICAgICAgICAgICByZXR1cm4gX2dyYWRpZW50Mi5kZWZhdWx0LmZyb21SR0JBKHsgciwgZywgYiwgYSB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInRvU3R5bGVWYWx1ZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHlsZVZhbHVlKF9yZWYsIHZhcmlhYmxlcykge1xuICAgICAgICAgICAgdmFyIGNvbG9yRm9ybWF0ID0gX3JlZi5jb2xvckZvcm1hdDtcblxuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZU9mKCk7XG5cbiAgICAgICAgICAgIGlmICh2YXJpYWJsZXMgJiYgdmFsdWUgaW4gdmFyaWFibGVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhcmlhYmxlc1t2YWx1ZV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBnZXRDb2xvclN0cmluZ0J5Rm9ybWF0KHRoaXMub2JqZWN0LCBjb2xvckZvcm1hdCk7XG4gICAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgICAga2V5OiBcImZyb21SR0JBXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmcm9tUkdCQShfcmVmMikge1xuICAgICAgICAgICAgdmFyIHIgPSBfcmVmMi5yLFxuICAgICAgICAgICAgICAgIGcgPSBfcmVmMi5nLFxuICAgICAgICAgICAgICAgIGIgPSBfcmVmMi5iLFxuICAgICAgICAgICAgICAgIF9yZWYyJGEgPSBfcmVmMi5hLFxuICAgICAgICAgICAgICAgIGEgPSBfcmVmMiRhID09PSB1bmRlZmluZWQgPyAxIDogX3JlZjIkYTtcblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihuZXcgX2V4dGVuc2lvbk1vZGVsLkNvbG9yKHsgciwgZywgYiwgYSB9KSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ29sb3I7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENvbG9yO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3plcGxpbi1leHRlbnNpb24tc3R5bGUta2l0L3ZhbHVlcy9jb2xvci5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3NjYWxhciA9IHJlcXVpcmUoXCIuL3NjYWxhclwiKTtcblxudmFyIF9zY2FsYXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NhbGFyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMZW5ndGgodmFsdWUpIHtcbiAgICAgICAgdmFyIHVuaXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFwicHhcIjtcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGVuZ3RoKTtcblxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudW5pdCA9IHVuaXQ7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKExlbmd0aCwgW3tcbiAgICAgICAga2V5OiBcInZhbHVlT2ZcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlT2YoKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgICAgIHVuaXQgPSB0aGlzLnVuaXQ7XG5cblxuICAgICAgICAgICAgcmV0dXJuIGBsZW5ndGg6OnY6JHt2YWx1ZX06dToke3VuaXR9YDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImVxdWFsc1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gb3RoZXIudmFsdWUgJiYgdGhpcy51bml0ID09PSBvdGhlci51bml0O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwidG9TdHlsZVZhbHVlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0eWxlVmFsdWUoX3JlZikge1xuICAgICAgICAgICAgdmFyIGRlbnNpdHlEaXZpc29yID0gX3JlZi5kZW5zaXR5RGl2aXNvcjtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IDAgPyBcIjBcIiA6IGAke25ldyBfc2NhbGFyMi5kZWZhdWx0KHRoaXMudmFsdWUgLyBkZW5zaXR5RGl2aXNvciwgMSkudG9TdHlsZVZhbHVlKCl9JHt0aGlzLnVuaXR9YDtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBMZW5ndGg7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IExlbmd0aDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy96ZXBsaW4tZXh0ZW5zaW9uLXN0eWxlLWtpdC92YWx1ZXMvbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIHJvdW5kKG51bWJlciwgcHJlY2lzaW9uKSB7XG4gICAgdmFyIGZvcm1hdHRlZE51bWJlciA9IE51bWJlcihudW1iZXIpLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgICAgICB1c2VHcm91cGluZzogZmFsc2UsXG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogcHJlY2lzaW9uXG4gICAgfSk7XG5cbiAgICByZXR1cm4gTnVtYmVyKGZvcm1hdHRlZE51bWJlcik7XG59XG5cbnZhciBERUZBVUxUX1BSRUNJU0lPTiA9IDI7XG5cbnZhciBTY2FsYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2NhbGFyKHZhbHVlKSB7XG4gICAgICAgIHZhciBwcmVjaXNpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IERFRkFVTFRfUFJFQ0lTSU9OO1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTY2FsYXIpO1xuXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5wcmVjaXNpb24gPSBwcmVjaXNpb247XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFNjYWxhciwgW3tcbiAgICAgICAga2V5OiBcInZhbHVlT2ZcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlT2YoKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgICAgIHByZWNpc2lvbiA9IHRoaXMucHJlY2lzaW9uO1xuXG5cbiAgICAgICAgICAgIHJldHVybiBgc2NhbGFyOjp2OiR7dmFsdWV9OnA6JHtwcmVjaXNpb259YDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImVxdWFsc1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gb3RoZXIudmFsdWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJ0b1N0eWxlVmFsdWVcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3R5bGVWYWx1ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHtyb3VuZCh0aGlzLnZhbHVlLCB0aGlzLnByZWNpc2lvbil9YDtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTY2FsYXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFNjYWxhcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy96ZXBsaW4tZXh0ZW5zaW9uLXN0eWxlLWtpdC92YWx1ZXMvc2NhbGFyLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLndlYmtpdCA9IGV4cG9ydHMuc2VsZWN0b3JpemUgPSBleHBvcnRzLmlzRGVjbGFyYXRpb25Jbmhlcml0ZWQgPSBleHBvcnRzLmlzSHRtbFRhZyA9IGV4cG9ydHMuZ2V0VW5pcXVlTGF5ZXJUZXh0U3R5bGVzID0gZXhwb3J0cy5nZXREZWNsYXJhdGlvblZhbHVlID0gZXhwb3J0cy5ibGVuZENvbG9ycyA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9jc3MgPSByZXF1aXJlKFwiY3NzLmVzY2FwZVwiKTtcblxudmFyIF9jc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEhUTUxfVEFHUyA9IFtcImFcIiwgXCJhYmJyXCIsIFwiYWRkcmVzc1wiLCBcImFyZWFcIiwgXCJhcnRpY2xlXCIsIFwiYXNpZGVcIiwgXCJhdWRpb1wiLCBcImJcIiwgXCJiYXNlXCIsIFwiYmRpXCIsIFwiYmRvXCIsIFwiYmxvY2txdW90ZVwiLCBcImJvZHlcIiwgXCJiclwiLCBcImJ1dHRvblwiLCBcImNhbnZhc1wiLCBcImNhcHRpb25cIiwgXCJjaXRlXCIsIFwiY29kZVwiLCBcImNvbFwiLCBcImNvbGdyb3VwXCIsIFwiZGF0YVwiLCBcImRhdGFsaXN0XCIsIFwiZGRcIiwgXCJkZWxcIiwgXCJkZXRhaWxzXCIsIFwiZGZuXCIsIFwiZGlhbG9nXCIsIFwiZGl2XCIsIFwiZGxcIiwgXCJkdFwiLCBcImVtXCIsIFwiZW1iZWRcIiwgXCJmaWVsZHNldFwiLCBcImZpZ2NhcHRpb25cIiwgXCJmaWd1cmVcIiwgXCJmb290ZXJcIiwgXCJmb3JtXCIsIFwiaDFcIiwgXCJoMlwiLCBcImgzXCIsIFwiaDRcIiwgXCJoNVwiLCBcImg2XCIsIFwiaGVhZFwiLCBcImhlYWRlclwiLCBcImhncm91cFwiLCBcImhyXCIsIFwiaHRtbFwiLCBcImlcIiwgXCJpZnJhbWVcIiwgXCJpbWdcIiwgXCJpbnB1dFwiLCBcImluc1wiLCBcImtiZFwiLCBcImtleWdlblwiLCBcImxhYmVsXCIsIFwibGVnZW5kXCIsIFwibGlcIiwgXCJsaW5rXCIsIFwibWFpblwiLCBcIm1hcFwiLCBcIm1hcmtcIiwgXCJtYXRoXCIsIFwibWVudVwiLCBcIm1lbnVpdGVtXCIsIFwibWV0YVwiLCBcIm1ldGVyXCIsIFwibmF2XCIsIFwibm9zY3JpcHRcIiwgXCJvYmplY3RcIiwgXCJvbFwiLCBcIm9wdGdyb3VwXCIsIFwib3B0aW9uXCIsIFwib3V0cHV0XCIsIFwicFwiLCBcInBhcmFtXCIsIFwicGljdHVyZVwiLCBcInByZVwiLCBcInByb2dyZXNzXCIsIFwicVwiLCBcInJwXCIsIFwicnRcIiwgXCJydWJ5XCIsIFwic1wiLCBcInNhbXBcIiwgXCJzY3JpcHRcIiwgXCJzZWN0aW9uXCIsIFwic2VsZWN0XCIsIFwic2xvdFwiLCBcInNtYWxsXCIsIFwic291cmNlXCIsIFwic291cmNlXCIsIFwic3BhblwiLCBcInN0cm9uZ1wiLCBcInN0eWxlXCIsIFwic3ViXCIsIFwic3VtbWFyeVwiLCBcInN1cFwiLCBcInN2Z1wiLCBcInRhYmxlXCIsIFwidGJvZHlcIiwgXCJ0ZFwiLCBcInRlbXBsYXRlXCIsIFwidGV4dGFyZWFcIiwgXCJ0Zm9vdFwiLCBcInRoXCIsIFwidGhlYWRcIiwgXCJ0aW1lXCIsIFwidGl0bGVcIiwgXCJ0clwiLCBcInRyYWNrXCIsIFwidVwiLCBcInVsXCIsIFwidmFyXCIsIFwidmlkZW9cIiwgXCJ3YnJcIl07XG5cbmZ1bmN0aW9uIGlzSHRtbFRhZyhzdHIpIHtcbiAgICByZXR1cm4gSFRNTF9UQUdTLmluY2x1ZGVzKHN0ci50b0xvd2VyQ2FzZSgpKTtcbn1cblxudmFyIE5PVF9JTkhFUklURURfUFJPUFMgPSBbXCItd2Via2l0LWJhY2tncm91bmQtY2xpcFwiLCBcImJhY2tncm91bmQtY2xpcFwiLCBcIi13ZWJraXQtdGV4dC1maWxsLWNvbG9yXCJdO1xuXG5mdW5jdGlvbiBpc0RlY2xhcmF0aW9uSW5oZXJpdGVkKGRlY2xhcmF0aW9uKSB7XG4gICAgcmV0dXJuICFOT1RfSU5IRVJJVEVEX1BST1BTLmluY2x1ZGVzKGRlY2xhcmF0aW9uKTtcbn1cblxuZnVuY3Rpb24gYmxlbmRDb2xvcnMoY29sb3JzKSB7XG4gICAgcmV0dXJuIGNvbG9ycy5yZWR1Y2UoZnVuY3Rpb24gKGJsZW5kZWRDb2xvciwgY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIGJsZW5kZWRDb2xvci5ibGVuZChjb2xvcik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZShzdHIpIHtcbiAgICB2YXIgZXNjYXBlZFN0ciA9IHN0ci50cmltKCkucmVwbGFjZSgvW15cXHNcXHctXS9nLCBcIlwiKS5yZXBsYWNlKC9eKC0/XFxkKykrLywgXCJcIikucmVwbGFjZSgvXFxzKy9nLCBcIi1cIik7XG5cbiAgICBpZiAoX2NzczIuZGVmYXVsdCkge1xuICAgICAgICBlc2NhcGVkU3RyID0gKDAsIF9jc3MyLmRlZmF1bHQpKGVzY2FwZWRTdHIpO1xuICAgIH1cblxuICAgIHJldHVybiBlc2NhcGVkU3RyO1xufVxuXG5mdW5jdGlvbiBzZWxlY3Rvcml6ZShzdHIpIHtcbiAgICBpZiAoIXN0cikge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG5cbiAgICB2YXIgc2VsZWN0b3JpemVkU3RyID0gc3RyLnRyaW0oKTtcblxuICAgIGlmIChpc0h0bWxUYWcoc2VsZWN0b3JpemVkU3RyKSkge1xuICAgICAgICByZXR1cm4gc2VsZWN0b3JpemVkU3RyLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgaWYgKC9eWyMuXS8udGVzdChzZWxlY3Rvcml6ZWRTdHIpKSB7XG4gICAgICAgIHZhciBuYW1lID0gZXNjYXBlKHNlbGVjdG9yaXplZFN0ci5zdWJzdHIoMSkpO1xuXG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0b3JpemVkU3RyWzBdICsgbmFtZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdG9yaXplZFN0ciA9IGVzY2FwZShzZWxlY3Rvcml6ZWRTdHIpO1xuICAgIHJldHVybiBzZWxlY3Rvcml6ZWRTdHIgJiYgYC4ke3NlbGVjdG9yaXplZFN0cn1gO1xufVxuXG5mdW5jdGlvbiB3ZWJraXQoRGVjbGFyYXRpb24pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBfY2xhc3MoKSB7XG4gICAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgX2NsYXNzKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShEZWNsYXJhdGlvbiwgW251bGxdLmNvbmNhdChhcmdzKSkpKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfY3JlYXRlQ2xhc3MoX2NsYXNzLCBbe1xuICAgICAgICAgICAga2V5OiBcImVxdWFsc1wiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVxdWFscyhvdGhlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmVxdWFscyhvdGhlci5pbnN0YW5jZSB8fCBvdGhlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJnZXRWYWx1ZVwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlKHBhcmFtcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmdldFZhbHVlKHBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJuYW1lXCIsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYC13ZWJraXQtJHt0aGlzLmluc3RhbmNlLm5hbWV9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiBfY2xhc3M7XG4gICAgfSgpO1xufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvblZhbHVlKHZhbHVlLCB2YXJpYWJsZXMsIHBhcmFtcykge1xuICAgIHZhciBzdHlsZVZhbHVlID0gdmFsdWUudG9TdHlsZVZhbHVlKHBhcmFtcyk7XG5cbiAgICBpZiAoIXZhcmlhYmxlcykge1xuICAgICAgICByZXR1cm4gc3R5bGVWYWx1ZTtcbiAgICB9XG5cbiAgICB2YXIgdmFyTmFtZSA9IE9iamVjdC5rZXlzKHZhcmlhYmxlcykuZmluZChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gc3R5bGVWYWx1ZSA9PT0gdmFyaWFibGVzW25hbWVdLnRvU3R5bGVWYWx1ZShwYXJhbXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhck5hbWUgPyB2YXJOYW1lIDogc3R5bGVWYWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0VW5pcXVlTGF5ZXJUZXh0U3R5bGVzKGxheWVyKSB7XG4gICAgdmFyIHVuaXF1ZVRleHRTdHlsZXMgPSBbXTtcblxuICAgIGxheWVyLnRleHRTdHlsZXMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICB2YXIgdGV4dFN0eWxlID0gX3JlZi50ZXh0U3R5bGU7XG5cbiAgICAgICAgdmFyIGZvdW5kID0gdW5pcXVlVGV4dFN0eWxlcy5zb21lKHRleHRTdHlsZS5lcXVhbHMsIHRleHRTdHlsZSk7XG5cbiAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB1bmlxdWVUZXh0U3R5bGVzLnB1c2godGV4dFN0eWxlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB1bmlxdWVUZXh0U3R5bGVzO1xufVxuXG5leHBvcnRzLmJsZW5kQ29sb3JzID0gYmxlbmRDb2xvcnM7XG5leHBvcnRzLmdldERlY2xhcmF0aW9uVmFsdWUgPSBnZXREZWNsYXJhdGlvblZhbHVlO1xuZXhwb3J0cy5nZXRVbmlxdWVMYXllclRleHRTdHlsZXMgPSBnZXRVbmlxdWVMYXllclRleHRTdHlsZXM7XG5leHBvcnRzLmlzSHRtbFRhZyA9IGlzSHRtbFRhZztcbmV4cG9ydHMuaXNEZWNsYXJhdGlvbkluaGVyaXRlZCA9IGlzRGVjbGFyYXRpb25Jbmhlcml0ZWQ7XG5leHBvcnRzLnNlbGVjdG9yaXplID0gc2VsZWN0b3JpemU7XG5leHBvcnRzLndlYmtpdCA9IHdlYmtpdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy96ZXBsaW4tZXh0ZW5zaW9uLXN0eWxlLWtpdC91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIhZnVuY3Rpb24odCxlKXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz1lKCk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLGUpO2Vsc2V7dmFyIHI9ZSgpO2Zvcih2YXIgbiBpbiByKShcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzOnQpW25dPXJbbl19fShcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIGU9e307ZnVuY3Rpb24gcihuKXtpZihlW25dKXJldHVybiBlW25dLmV4cG9ydHM7dmFyIG89ZVtuXT17aTpuLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIHRbbl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsciksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gci5tPXQsci5jPWUsci5kPWZ1bmN0aW9uKHQsZSxuKXtyLm8odCxlKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7Y29uZmlndXJhYmxlOiExLGVudW1lcmFibGU6ITAsZ2V0Om59KX0sci5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiByLmQoZSxcImFcIixlKSxlfSxyLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LHIucD1cIlwiLHIoci5zPTExKX0oW2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtlLmE9Y2xhc3N7c3RhdGljIGdldCBBTExPV0VEX0ZJRUxEUygpe31fY2xvbmVQcm9wcyh0KXt2YXIgZT10aGlzO09iamVjdC5rZXlzKHQpLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4gZS5jb25zdHJ1Y3Rvci5BTExPV0VEX0ZJRUxEUy5pbmNsdWRlcyh0KX0pLmZvckVhY2goZnVuY3Rpb24ocil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUscix7ZW51bWVyYWJsZTohMCx2YWx1ZTp0W3JdfSl9KX19fSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49cigwKSxvPXtuYW1lOlwidHJhbnNwYXJlbnRcIixyOjAsZzowLGI6MCxhOjB9LGE9bmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tVVNcIix7dXNlR3JvdXBpbmc6ITEsbWF4aW11bUZyYWN0aW9uRGlnaXRzOjJ9KTtmdW5jdGlvbiBzKHQpe3ZhciBlPU1hdGgudHJ1bmModCt0LzI1NSk7cmV0dXJuIE1hdGgubWF4KDAsTWF0aC5taW4oZSwyNTUpKX1mdW5jdGlvbiBpKHQsZSxyLG4pe3JldHVybiBlfHxuPyh0KmUrcipuKigxLWUpKS8oZStuKigxLWUpKTowfWZ1bmN0aW9uIGModCl7cmV0dXJuKHQ8MTY/XCIwXCI6XCJcIikrdC50b1N0cmluZygxNil9Y2xhc3MgQ29sb3IgZXh0ZW5kcyBuLmF7c3RhdGljIGdldCBBTExPV0VEX0ZJRUxEUygpe3JldHVybltcIm5hbWVcIixcInJcIixcImdcIixcImJcIixcImFcIl19Y29uc3RydWN0b3IodCl7aWYodCBpbnN0YW5jZW9mIENvbG9yKXJldHVybiB0O3N1cGVyKCksdGhpcy5fY2xvbmVQcm9wcyh7cjpzKHQuciksZzpzKHQuZyksYjpzKHQuYiksYTpmdW5jdGlvbih0KXtyZXR1cm4gTWF0aC5tYXgoMCxNYXRoLm1pbih0LDEpKX0odC5hKSxuYW1lOnQubmFtZX0pfXN0YXRpYyBmcm9tSlNPTih0KXt2YXIgZT1KU09OLnBhcnNlKHQpLHI9ZS5faWR8fGUuaWQ7cmV0dXJuIGRlbGV0ZSBlLl9pZCxlLmlkPXIsZS5hPVwiYVwiaW4gZT9lLmE6MSxuZXcgQ29sb3IoZSl9ZXF1YWxzKHQpe3ZhciBlPW5ldyBDb2xvcih0KTtyZXR1cm4gdGhpcy5yPT09ZS5yJiZ0aGlzLmc9PT1lLmcmJnRoaXMuYj09PWUuYiYmYS5mb3JtYXQodGhpcy5hKT09PWEuZm9ybWF0KGUuYSl9YmxlbmQodCl7dmFyIGU9bmV3IENvbG9yKHQpO3JldHVybiBuZXcgQ29sb3Ioe3I6aSh0aGlzLnIsdGhpcy5hLGUucixlLmEpLGc6aSh0aGlzLmcsdGhpcy5hLGUuZyxlLmEpLGI6aSh0aGlzLmIsdGhpcy5hLGUuYixlLmEpLGE6dGhpcy5hK2UuYSooMS10aGlzLmEpfSl9c3RhdGljIGJsZW5kQWxsKHQpe2Zvcih2YXIgZT1uZXcgQ29sb3Iobykscj0wO3I8dC5sZW5ndGgmJighdFtyXS5hfHwxIT09KGU9ZS5ibGVuZCh0W3JdKSkuYSk7cisrKTtyZXR1cm4gZX1oZXhCYXNlKCl7cmV0dXJuIGModGhpcy5yKStjKHRoaXMuZykrYyh0aGlzLmIpfXRvSGV4KCl7cmV0dXJue3I6Yyh0aGlzLnIpLGc6Yyh0aGlzLmcpLGI6Yyh0aGlzLmIpLGE6YyhNYXRoLnRydW5jKDI1NSp0aGlzLmEpKX19dG9IU0woKXt2YXIgdCxlLHI9dGhpcy5yLzI1NSxuPXRoaXMuZy8yNTUsbz10aGlzLmIvMjU1LGE9TWF0aC5tYXgocixuLG8pLHM9TWF0aC5taW4ocixuLG8pLGk9KGErcykvMjtpZihhPT09cyl0PWU9MDtlbHNle3ZhciBjPWEtcztzd2l0Y2goZT1pPi41P2MvKDItYS1zKTpjLyhhK3MpLGEpe2Nhc2Ugcjp0PShuLW8pL2MrKG48bz82OjApO2JyZWFrO2Nhc2Ugbjp0PShvLXIpL2MrMjticmVhaztjYXNlIG86dD0oci1uKS9jKzR9dC89Nn1yZXR1cm57aDp0LHM6ZSxsOml9fX1lLmE9Q29sb3J9LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1yKDApLG89cigxKSxhPXIoNikscz1PYmplY3QuZnJlZXplKHtDT0xPUjpcImNvbG9yXCIsR1JBRElFTlQ6XCJncmFkaWVudFwifSksaT1PYmplY3QuZnJlZXplKHtOT1JNQUw6XCJub3JtYWxcIixEQVJLRU46XCJkYXJrZW5cIixNVUxUSVBMWTpcIm11bHRpcGx5XCIsQ09MT1JfQlVSTjpcImNvbG9yLWJ1cm5cIixMSUdIVEVOOlwibGlnaHRlblwiLFNDUkVFTjpcInNjcmVlblwiLENPTE9SX0RPREdFOlwiY29sb3ItZG9kZ2VcIixPVkVSTEFZOlwib3ZlcmxheVwiLFNPRlRfTElHSFQ6XCJzb2Z0LWxpZ2h0XCIsSEFSRF9MSUdIVDpcImhhcmQtbGlnaHRcIixESUZGRVJFTkNFOlwiZGlmZmVyZW5jZVwiLEVYQ0xVU0lPTjpcImV4Y2x1c2lvblwiLEhVRTpcImh1ZVwiLFNBVFVSQVRJT046XCJzYXR1cmF0aW9uXCIsQ09MT1I6XCJjb2xvclwiLExVTUlOT1NJVFk6XCJsdW1pbm9zaXR5XCIsU09VUkNFX0lOOlwic291cmNlLWluXCIsU09VUkNFX09VVDpcInNvdXJjZS1vdXRcIixTT1VSQ0VfQVRPUDpcInNvdXJjZS1hdG9wXCIsREVTVElOQVRJT05fT1ZFUjpcImRlc3RpbmF0aW9uLW92ZXJcIixERVNUSU5BVElPTl9JTjpcImRlc3RpbmF0aW9uLWluXCIsREVTVElOQVRJT05fT1VUOlwiZGVzdGluYXRpb24tb3V0XCIsREVTVElOQVRJT05fQVRPUDpcImRlc3RpbmF0aW9uLWF0b3BcIixESVNTT0xWRTpcImRpc3NvbHZlXCIsTElORUFSX0JVUk46XCJsaW5lYXItYnVyblwiLExJTkVBUl9ET0RHRTpcImxpbmVhci1kb2RnZVwiLERBUktFUl9DT0xPUjpcImRhcmtlci1jb2xvclwiLExJR0hURVJfQ09MT1I6XCJsaWdodGVyLWNvbG9yXCIsVklWSURfTElHSFQ6XCJ2aXZpZC1saWdodFwiLExJTkVBUl9MSUdIVDpcImxpbmVhci1saWdodFwiLFBJTl9MSUdIVDpcInBpbi1saWdodFwiLEhBUkRfTUlYOlwiaGFyZC1taXhcIixTVUJUUkFDVDpcInN1YnRyYWN0XCIsRElWSURFOlwiZGl2aWRlXCJ9KTtjbGFzcyBGaWxsIGV4dGVuZHMgbi5he3N0YXRpYyBnZXQgVFlQRSgpe3JldHVybiBzfXN0YXRpYyBnZXQgQkxFTkRfTU9ERSgpe3JldHVybiBpfXN0YXRpYyBnZXQgQUxMT1dFRF9GSUVMRFMoKXtyZXR1cm5bXCJ0eXBlXCIsXCJjb2xvclwiLFwiZ3JhZGllbnRcIixcIm9wYWNpdHlcIixcImJsZW5kTW9kZVwiLFwiZmlsbFwiXX1jb25zdHJ1Y3Rvcih0LGUscil7c3VwZXIoKTt2YXIgbj1PYmplY3QuYXNzaWduKHt9LHQpO24udHlwZT09PUZpbGwuVFlQRS5DT0xPUj9uLmNvbG9yPW5ldyBvLmEobi5jb2xvcik6bi50eXBlPT09RmlsbC5UWVBFLkdSQURJRU5UJiYobi5ncmFkaWVudD1uZXcgYS5hKG4uZ3JhZGllbnQsZSxyKSxkZWxldGUgbi5jb2xvciksdGhpcy5fY2xvbmVQcm9wcyhuKX1zdGF0aWMgZnJvbUpTT04odCl7cmV0dXJuIG5ldyBGaWxsKEpTT04ucGFyc2UodCkpfX1lLmE9RmlsbH0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXIoMCksbz1yKDEpO2Z1bmN0aW9uIGEodCxlKXt2YXIgcj10Lmxhc3RJbmRleE9mKGUpO3JldHVybiB0LnN1YnN0cmluZygwLHIpK3Quc3Vic3RyKHIrZS5sZW5ndGgpfXZhciBzPS8odGhpbnxoYWlybGluZXwoW2RzXWVtaXwoZXh8dWwpdHJhKT8obGlnaHR8Ym9sZCl8bm9ybWFsfHJlZ3VsYXJ8Ym9va3xtZWRpdW18aGVhdnl8YmxhY2t8WzEtOV0wMCQpL2dpLGk9LyhpdGFsaWN8b2JsaXF1ZSkvZ2ksYz0vKCg/Oih1bHRyYXxleHRyYXxzZW1pKVtcXHMtXT8pPyg/OmNvbmRlbnNlZHxleHBhbmRlZCkpL2dpO2Z1bmN0aW9uIHUodCl7dmFyIGU9dC5tYXRjaChzKTtlPyh0PWEodCxlPWVbZS5sZW5ndGgtMV0pLGU9ZS50b0xvd2VyQ2FzZSgpKTplPVwicmVndWxhclwiO3ZhciByPXQubWF0Y2goaSk7cj8odD1hKHQscj1yW3IubGVuZ3RoLTFdKSxyPXIudG9Mb3dlckNhc2UoKSk6cj1cIm5vcm1hbFwiO3ZhciBuPXQubWF0Y2goYyk7bj8odD1hKHQsbj1uW24ubGVuZ3RoLTFdKSxuPW4udG9Mb3dlckNhc2UoKSk6bj1cIm5vcm1hbFwiO3ZhciBvPXQucmVwbGFjZSgvLS0vLFwiLVwiKS5yZXBsYWNlKC8tJC8sXCJcIikudHJpbSgpO3JldHVybntmb250RmFtaWx5Om8ubWF0Y2goL15BcmlhbC0/TVQkLyk/XCJBcmlhbFwiOm8sZm9udFN0eWxlOnIsd2VpZ2h0VGV4dDplLGZvbnRTdHJldGNoOmZ1bmN0aW9uKHQpe3JldHVybi8odWx0cmEoXFxzfC0pPykrY29uZGVuc2VkL2kudGVzdCh0KT9cInVsdHJhLWNvbmRlbnNlZFwiOi8oZXh0cmEoXFxzfC0pPykrY29uZGVuc2VkL2kudGVzdCh0KT9cImV4dHJhLWNvbmRlbnNlZFwiOi8oc2VtaShcXHN8LSk/KStjb25kZW5zZWQvaS50ZXN0KHQpP1wic2VtaS1jb25kZW5zZWRcIjovY29uZGVuc2VkL2kudGVzdCh0KT9cImNvbmRlbnNlZFwiOi8odWx0cmEoXFxzfC0pPykrZXhwYW5kZWQvaS50ZXN0KHQpP1widWx0cmEtZXhwYW5kZWRcIjovKGV4dHJhKFxcc3wtKT8pK2V4cGFuZGVkL2kudGVzdCh0KT9cImV4dHJhLWV4cGFuZGVkXCI6LyhzZW1pKFxcc3wtKT8pK2V4cGFuZGVkL2kudGVzdCh0KT9cInNlbWktZXhwYW5kZWRcIjovZXhwYW5kZWQvaS50ZXN0KHQpP1wiZXhwYW5kZWRcIjpcIm5vcm1hbFwifShuKX19dmFyIGw9T2JqZWN0LmZyZWV6ZSh7VEhJTjoxMDAsSEFJUkxJTkU6MTAwLEVYVFJBX0xJR0hUOjIwMCxVTFRSQV9MSUdIVDoyMDAsTElHSFQ6MzAwLE5PUk1BTDo0MDAsTUVESVVNOjUwMCxERU1JX0JPTEQ6NjAwLFNFTUlfQk9MRDo2MDAsQk9MRDo3MDAsRVhUUkFfQk9MRDo4MDAsVUxUUkFfQk9MRDo4MDAsQkxBQ0s6OTAwLEhFQVZZOjkwMH0pO2NsYXNzIFRleHRTdHlsZSBleHRlbmRzIG4uYXtzdGF0aWMgZ2V0IFdFSUdIVCgpe3JldHVybiBsfXN0YXRpYyBnZXQgQUxMT1dFRF9GSUVMRFMoKXtyZXR1cm5bXCJuYW1lXCIsXCJmb250RmFjZVwiLFwiZm9udFNpemVcIixcImZvbnRXZWlnaHRcIixcImZvbnRTdHlsZVwiLFwiZm9udEZhbWlseVwiLFwiZm9udFN0cmV0Y2hcIixcImxpbmVIZWlnaHRcIixcInRleHRBbGlnblwiLFwibGV0dGVyU3BhY2luZ1wiLFwiY29sb3JcIixcIndlaWdodFRleHRcIl19Y29uc3RydWN0b3IodCl7c3VwZXIoKTt2YXIgZT1PYmplY3QuYXNzaWduKHt9LHQpO09iamVjdC5hc3NpZ24oZSx1KGUuZm9udEZhY2UpKSxcImNvbG9yXCJpbiBlJiYoZS5jb2xvcj1uZXcgby5hKGUuY29sb3IpKSx0aGlzLl9jbG9uZVByb3BzKGUpfXN0YXRpYyBmcm9tSlNPTih0KXt2YXIgZT1KU09OLnBhcnNlKHQpLHI9ZS5faWR8fGUuaWQ7cmV0dXJuIGRlbGV0ZSBlLl9pZCxPYmplY3QuYXNzaWduKGUsdShlLmZvbnRGYWNlKSx7aWQ6cn0pLG5ldyBUZXh0U3R5bGUoZSl9Z2V0IGZvbnRXZWlnaHQoKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuL2JsYWNrfGhlYXZ5fDkwMC9naS50ZXN0KHQpPzkwMDovKChleHx1bCl0cmEpXFxzP2JvbGR8ODAwL2dpLnRlc3QodCk/ODAwOi8oW2RzXWVtaSlcXHM/Ym9sZHw2MDAvZ2kudGVzdCh0KT82MDA6L2JvbGR8NzAwL2dpLnRlc3QodCk/NzAwOi9tZWRpdW18NTAwL2dpLnRlc3QodCk/NTAwOi8oKGV4fHVsKXRyYSlcXHM/bGlnaHR8MjAwL2dpLnRlc3QodCk/MjAwOi9saWdodHwzMDAvZ2kudGVzdCh0KT8zMDA6L3RoaW58aGFpcmxpbmV8MTAwL2dpLnRlc3QodCk/MTAwOjQwMH0odGhpcy53ZWlnaHRUZXh0KX1lcXVhbHModCl7cmV0dXJuIHRoaXMuZm9udEZhbWlseT09PXQuZm9udEZhbWlseSYmdGhpcy5mb250U3R5bGU9PT10LmZvbnRTdHlsZSYmdGhpcy5mb250U3RyZXRjaD09PXQuZm9udFN0cmV0Y2gmJnRoaXMuZm9udFdlaWdodD09PXQuZm9udFdlaWdodCYmdGhpcy5mb250U2l6ZT09PXQuZm9udFNpemUmJnRoaXMubGluZUhlaWdodD09PXQubGluZUhlaWdodCYmdGhpcy50ZXh0QWxpZ249PT10LnRleHRBbGlnbiYmdGhpcy5sZXR0ZXJTcGFjaW5nPT09dC5sZXR0ZXJTcGFjaW5nJiYoIXRoaXMuY29sb3J8fCF0LmNvbG9yfHx0aGlzLmNvbG9yLmVxdWFscyh0LmNvbG9yKSl9fWUuYT1UZXh0U3R5bGV9LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1yKDApLG89T2JqZWN0LmZyZWV6ZSh7QkFDS0dST1VORDpcImJhY2tncm91bmRcIixHQVVTU0lBTjpcImdhdXNzaWFuXCJ9KTtjbGFzcyBCbHVyIGV4dGVuZHMgbi5he3N0YXRpYyBnZXQgVFlQRSgpe3JldHVybiBvfXN0YXRpYyBnZXQgQUxMT1dFRF9GSUVMRFMoKXtyZXR1cm5bXCJ0eXBlXCIsXCJyYWRpdXNcIl19Y29uc3RydWN0b3IodCl7c3VwZXIoKSx0aGlzLl9jbG9uZVByb3BzKHQpfXN0YXRpYyBmcm9tSlNPTih0KXtyZXR1cm4gbmV3IEJsdXIoSlNPTi5wYXJzZSh0KSl9fWUuYT1CbHVyfSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49cigwKSxvPXIoMik7Y2xhc3MgQm9yZGVyIGV4dGVuZHMgbi5he3N0YXRpYyBnZXQgQUxMT1dFRF9GSUVMRFMoKXtyZXR1cm5bXCJwb3NpdGlvblwiLFwidGhpY2tuZXNzXCIsXCJmaWxsXCJdfWNvbnN0cnVjdG9yKHQsZSxyKXtzdXBlcigpO3ZhciBuPU9iamVjdC5hc3NpZ24oe30sdCk7bi5maWxsPW5ldyBvLmEoe3R5cGU6bi5maWxsLnR5cGUsY29sb3I6bi5maWxsLmNvbG9yLGdyYWRpZW50Om4uZmlsbC5ncmFkaWVudCxvcGFjaXR5Om4uZmlsbC5vcGFjaXR5LGJsZW5kTW9kZTpuLmZpbGwuYmxlbmRNb2RlfSxlLHIpLHRoaXMuX2Nsb25lUHJvcHMobil9c3RhdGljIGZyb21KU09OKHQpe3JldHVybiBuZXcgQm9yZGVyKEpTT04ucGFyc2UodCkpfX1lLmE9Qm9yZGVyfSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49cigwKSxvPXIoMSksYT1yKDcpLHM9T2JqZWN0LmZyZWV6ZSh7TElORUFSOlwibGluZWFyXCIsUkFESUFMOlwicmFkaWFsXCIsQU5HVUxBUjpcImFuZ3VsYXJcIn0pO2NsYXNzIEdyYWRpZW50IGV4dGVuZHMgbi5he3N0YXRpYyBnZXQgVFlQRSgpe3JldHVybiBzfXN0YXRpYyBnZXQgQUxMT1dFRF9GSUVMRFMoKXtyZXR1cm5bXCJ0eXBlXCIsXCJmcm9tXCIsXCJ0b1wiLFwiYW5nbGVcIixcInNjYWxlXCIsXCJjb2xvclN0b3BzXCJdfWNvbnN0cnVjdG9yKHQsZSxyKXtzdXBlcigpO3ZhciBuPU9iamVjdC5hc3NpZ24oe30sdCk7aWYoXCJjb2xvclwiaW4gbiYmKG4uY29sb3I9bmV3IG8uYShuLmNvbG9yKSksbi5jb2xvclN0b3BzPW4uY29sb3JTdG9wcy5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBhLmEodCl9KSxcImFuZ2xlXCJpbiBuKXt2YXIgcz1NYXRoLmNvcyhuLmFuZ2xlKk1hdGguUEkvMTgwKSxpPU1hdGguc2luKG4uYW5nbGUqTWF0aC5QSS8xODApO24uYW5nbGU9KDM2MCtNYXRoLnJvdW5kKDE4MCpNYXRoLmF0YW4yKHMsaSkvTWF0aC5QSSkpJTM2MH1lbHNle3ZhciBjPShuLmZyb20ueC1uLnRvLngpKmUsdT0obi5mcm9tLnktbi50by55KSpyO24uYW5nbGU9KDM2MC1NYXRoLnJvdW5kKDE4MCpNYXRoLmF0YW4yKGMsdSkvTWF0aC5QSSkpJTM2MH10aGlzLl9jbG9uZVByb3BzKG4pfXN0YXRpYyBmcm9tSlNPTih0KXtyZXR1cm4gbmV3IEdyYWRpZW50KEpTT04ucGFyc2UodCkpfX1lLmE9R3JhZGllbnR9LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1yKDApLG89cigxKTtjbGFzcyBDb2xvclN0b3AgZXh0ZW5kcyBuLmF7c3RhdGljIGdldCBBTExPV0VEX0ZJRUxEUygpe3JldHVybltcImNvbG9yXCIsXCJwb3NpdGlvblwiXX1jb25zdHJ1Y3Rvcih0KXtzdXBlcigpO3ZhciBlPU9iamVjdC5hc3NpZ24oe30sdCk7XCJjb2xvclwiaW4gZSYmKGUuY29sb3I9bmV3IG8uYShlLmNvbG9yKSksdGhpcy5fY2xvbmVQcm9wcyhlKX1zdGF0aWMgZnJvbUpTT04odCl7cmV0dXJuIG5ldyBDb2xvclN0b3AoSlNPTi5wYXJzZSh0KSl9fWUuYT1Db2xvclN0b3B9LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1yKDApLG89cigxKSxhPXIoMykscz1PYmplY3QuZnJlZXplKHtBTkRST0lEOlwiYW5kcm9pZFwiLElPUzpcImlvc1wiLE1BQ09TOlwib3N4XCIsV0VCOlwid2ViXCJ9KTtmdW5jdGlvbiBpKHQsZSl7cmV0dXJuIHQuZm9udFNpemU+ZS5mb250U2l6ZT8tMTp0LmZvbnRTaXplPT09ZS5mb250U2l6ZT90LmZvbnRXZWlnaHQ+ZS5mb250V2VpZ2h0Py0xOnQuZm9udFdlaWdodD09PWUuZm9udFdlaWdodD90LmNvbG9yJiZlLmNvbG9yP3QuZm9udEZhY2U8PWUuZm9udEZhY2U/LTE6MTp0LmNvbG9yPy0xOmUuY29sb3I/MTp0LmZvbnRGYWNlPD1lLmZvbnRGYWNlPy0xOjE6MToxfWZ1bmN0aW9uIGModCxlKXt2YXIgcixuO2lmKFwidW5rbm93blwiPT09dClyPVwicHhcIixuPVwicHhcIjtlbHNlIHN3aXRjaChlKXtjYXNlXCJhbmRyb2lkXCI6cj1cImRwXCIsbj1cInNwXCI7YnJlYWs7Y2FzZVwiaW9zXCI6Y2FzZVwib3N4XCI6cj1cInB0XCIsbj1cInB0XCI7YnJlYWs7Y2FzZVwid2ViXCI6ZGVmYXVsdDpyPVwicHhcIixuPVwicHhcIn1yZXR1cm57dGV4dERpbWVuc2lvblN1ZmZpeDpuLGRpbWVuc2lvblN1ZmZpeDpyfX1mdW5jdGlvbiB1KHQpe3ZhciBlO3N3aXRjaCh0KXtjYXNlXCJtZHBpXCI6Y2FzZVwiMXhcIjpjYXNlXCJ3ZWJcIjpjYXNlXCJ1bmtub3duXCI6ZGVmYXVsdDplPTE7YnJlYWs7Y2FzZVwiaGRwaVwiOmU9MS41O2JyZWFrO2Nhc2VcInhoZHBpXCI6Y2FzZVwiMnhcIjplPTI7YnJlYWs7Y2FzZVwieHhoZHBpXCI6Y2FzZVwiM3hcIjplPTM7YnJlYWs7Y2FzZVwieHh4aGRwaVwiOmNhc2VcIjR4XCI6ZT00fXJldHVybiBlfWNsYXNzIFByb2plY3QgZXh0ZW5kcyBuLmF7c3RhdGljIGdldCBUWVBFKCl7cmV0dXJuIHN9c3RhdGljIGdldCBBTExPV0VEX0ZJRUxEUygpe3JldHVybltcInR5cGVcIixcIm5hbWVcIixcInRleHRTdHlsZXNcIixcImNvbG9yc1wiLFwiZGVuc2l0eVwiLFwiZGVuc2l0eURpdmlzb3JcIixcImxlbmd0aFVuaXRcIixcInRleHRMZW5ndGhVbml0XCJdfWNvbnN0cnVjdG9yKHQpe3N1cGVyKCk7dmFyIGU9T2JqZWN0LmFzc2lnbih7fSx0KTtlLnRleHRTdHlsZXM9ZS50ZXh0U3R5bGVzLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbmV3IGEuYSh0KX0pLGUudGV4dFN0eWxlcy5zb3J0KGkpLGZ1bmN0aW9uKHQsZSl7aWYodC5sZW5ndGgpe3ZhciByPXRbMF0uZm9udFNpemUvZSxuPXRbdC5sZW5ndGgtMV0uZm9udFNpemUvZTtpZihyPD0zNiYmbj49MTQpdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3Quc2NhbGVkRm9udFNpemU9dC5mb250U2l6ZS9lfSk7ZWxzZXt2YXIgbyxhO3I8MTQ/KG89MjQsYT0xNCk6bj4zNj8obz0zNixhPTI0KToobz1NYXRoLm1pbigzNixyKSxhPU1hdGgubWF4KDE0LG4pKTt2YXIgcz1yPT09bj8wOihvLWEpLyhyLW4pO3RbMF0uc2NhbGVkRm9udFNpemU9TWF0aC5yb3VuZChvKTtmb3IodmFyIGk9MTtpPHQubGVuZ3RoO2krKyl7dmFyIGM9dFtpLTFdLmZvbnRTaXplL2UsdT10W2ldLmZvbnRTaXplL2U7dFtpXS5zY2FsZWRGb250U2l6ZT1NYXRoLnJvdW5kKHRbaS0xXS5zY2FsZWRGb250U2l6ZS0oYy11KSpzKX19fX0oZS50ZXh0U3R5bGVzLHUoZS5kZW5zaXR5KSksZS5kZW5zaXR5RGl2aXNvcj11KGUuZGVuc2l0eSksZS5sZW5ndGhVbml0PWMoZS5kZW5zaXR5LGUudHlwZSkuZGltZW5zaW9uU3VmZml4LGUudGV4dExlbmd0aFVuaXQ9YyhlLmRlbnNpdHksZS50eXBlKS50ZXh0RGltZW5zaW9uU3VmZml4LGUuY29sb3JzPWUuY29sb3JzLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbmV3IG8uYSh0KX0pLHRoaXMuX2Nsb25lUHJvcHMoZSl9c3RhdGljIGZyb21KU09OKHQpe3ZhciBlPUpTT04ucGFyc2UodCk7cmV0dXJuIG5ldyBQcm9qZWN0KGUpfWZpbmRUZXh0U3R5bGVCeU5hbWUodCl7cmV0dXJuIHRoaXMudGV4dFN0eWxlcy5maW5kKGZ1bmN0aW9uKGUpe3JldHVybiBlLm5hbWU9PT10fSl9ZmluZFRleHRTdHlsZUVxdWFsKHQpe3JldHVybiB0aGlzLnRleHRTdHlsZXMuZmluZChmdW5jdGlvbihlKXtyZXR1cm4gdC5lcXVhbHMoZSl9KX1maW5kQ29sb3JCeU5hbWUodCl7cmV0dXJuIHRoaXMuY29sb3JzLmZpbmQoZnVuY3Rpb24oZSl7cmV0dXJuIGUubmFtZT09PXR9KX1maW5kQ29sb3JFcXVhbCh0KXtyZXR1cm4gdGhpcy5jb2xvcnMuZmluZChmdW5jdGlvbihlKXtyZXR1cm4gdC5lcXVhbHMoZSl9KX1maW5kQ29sb3JCeUhleEFuZEFscGhhKHQpe3JldHVybiB0aGlzLmNvbG9ycy5maW5kKGZ1bmN0aW9uKGUpe3ZhciByPXZvaWQgMD09PXQuYWxwaGF8fGUuYT09PXQuYWxwaGE7cmV0dXJuKHZvaWQgMD09PXQuaGV4fHxlLmhleEJhc2UoKT09PXQuaGV4LnRvTG93ZXJDYXNlKCkpJiZyfSl9fWUuYT1Qcm9qZWN0fSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49cigwKSxvPXIoNCksYT1yKDUpLHM9cigyKSxpPXIoMyksYz1yKDEwKSx1PU9iamVjdC5mcmVlemUoe1RFWFQ6XCJ0ZXh0XCIsU0hBUEU6XCJzaGFwZVwiLEdST1VQOlwiZ3JvdXBcIn0pO2NsYXNzIExheWVyIGV4dGVuZHMgbi5he3N0YXRpYyBnZXQgVFlQRSgpe3JldHVybiB1fXN0YXRpYyBnZXQgQUxMT1dFRF9GSUVMRFMoKXtyZXR1cm5bXCJib3JkZXJzXCIsXCJmaWxsc1wiLFwic2hhZG93c1wiLFwidGV4dFN0eWxlc1wiLFwidHlwZVwiLFwibmFtZVwiLFwiZXhwb3J0YWJsZVwiLFwicm90YXRpb25cIixcIm9wYWNpdHlcIixcImJsZW5kTW9kZVwiLFwiYm9yZGVyUmFkaXVzXCIsXCJibHVyXCIsXCJyZWN0XCIsXCJjb250ZW50XCIsXCJhc3NldHNcIixcImxheWVyc1wiXX1jb25zdHJ1Y3Rvcih0KXtzdXBlcigpO3ZhciBlLHIsbix1LGwsZCxmPU9iamVjdC5hc3NpZ24oe30sdCksaD1mLmJsZW5kTW9kZXx8XCJub3JtYWxcIixwPWYuYm9yZGVyUmFkaXVzfHwwLGc9Zi5yb3RhdGlvbnx8MDtmLmJsdXImJihsPW5ldyBvLmEoZi5ibHVyKSksZT0oZi5ib3JkZXJzfHxbXSkubWFwKGZ1bmN0aW9uKHQpe3JldHVybiBuZXcgYS5hKHQsZi5yZWN0LndpZHRoLGYucmVjdC5oZWlnaHQpfSkscj0oZi5maWxsc3x8W10pLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbmV3IHMuYSh0LGYucmVjdC53aWR0aCxmLnJlY3QuaGVpZ2h0KX0pLnJldmVyc2UoKSxuPShmLnNoYWRvd3N8fFtdKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBjLmEodCl9KSx1PShmLnRleHRTdHlsZXN8fFtdKS5tYXAoZnVuY3Rpb24odCl7dmFyIGU9cGFyc2VJbnQodC5yYW5nZS5sb2NhdGlvbiwxMCk7cmV0dXJue3JhbmdlOntzdGFydDplLGVuZDplK3BhcnNlSW50KHQucmFuZ2UubGVuZ3RoLDEwKX0sdGV4dFN0eWxlOm5ldyBpLmEodC5zdHlsZSl9fSksZD0oZi5sYXllcnN8fFtdKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBMYXllcih0KX0pLE9iamVjdC5hc3NpZ24oZix7YmxlbmRNb2RlOmgsYmx1cjpsLGJvcmRlclJhZGl1czpwLGJvcmRlcnM6ZSxmaWxsczpyLHJvdGF0aW9uOmcsc2hhZG93czpuLHRleHRTdHlsZXM6dSxsYXllcnM6ZH0pLHRoaXMuX2Nsb25lUHJvcHMoZil9c3RhdGljIGZyb21KU09OKHQpe3ZhciBlPUpTT04ucGFyc2UodCk7cmV0dXJuIG5ldyBMYXllcihlKX1nZXQgZGVmYXVsdFRleHRTdHlsZSgpe2lmKHRoaXMudHlwZT09PUxheWVyLlRZUEUuVEVYVCYmdGhpcy50ZXh0U3R5bGVzLmxlbmd0aCl7dmFyIHQsZT1bXSxyPTA7cmV0dXJuIHRoaXMudGV4dFN0eWxlcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciBvPWUuZmluZChmdW5jdGlvbih0KXtyZXR1cm4gdC5mb250LmVxdWFscyhuLnRleHRTdHlsZSl9KSxhPW4ucmFuZ2UuZW5kLW4ucmFuZ2Uuc3RhcnQ7b3x8KG89e2ZvbnQ6bi50ZXh0U3R5bGUsdG90YWxMZW5ndGg6MH0sZS5wdXNoKG8pKSxvLnRvdGFsTGVuZ3RoKz1hLG8udG90YWxMZW5ndGg+ciYmKHI9by50b3RhbExlbmd0aCx0PW8pfSksdCYmdC5mb250fX19ZS5hPUxheWVyfSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49cigwKSxvPXIoMSksYT1PYmplY3QuZnJlZXplKHtPVVRFUjpcIm91dGVyXCIsSU5ORVI6XCJpbm5lclwifSk7Y2xhc3MgU2hhZG93IGV4dGVuZHMgbi5he3N0YXRpYyBnZXQgVFlQRSgpe3JldHVybiBhfXN0YXRpYyBnZXQgQUxMT1dFRF9GSUVMRFMoKXtyZXR1cm5bXCJ0eXBlXCIsXCJvZmZzZXRYXCIsXCJvZmZzZXRZXCIsXCJibHVyUmFkaXVzXCIsXCJzcHJlYWRcIixcImNvbG9yXCJdfWNvbnN0cnVjdG9yKHQpe3N1cGVyKCk7dmFyIGU9T2JqZWN0LmFzc2lnbih7fSx0KTtlLmNvbG9yPW5ldyBvLmEoZS5jb2xvciksdGhpcy5fY2xvbmVQcm9wcyhlKX1zdGF0aWMgZnJvbUpTT04odCl7cmV0dXJuIG5ldyBTaGFkb3coSlNPTi5wYXJzZSh0KSl9fWUuYT1TaGFkb3d9LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1yKDQpLG89cig1KSxhPXIoMSkscz1yKDcpLGk9cigxMiksYz1yKDEzKSx1PXIoMTQpLGw9cigyKSxkPXIoNiksZj1yKDkpLGg9cig4KSxwPXIoMTApLGc9cigxNSksUz1yKDMpLE89cigxNik7ci5kKGUsXCJCbHVyXCIsZnVuY3Rpb24oKXtyZXR1cm4gbi5hfSksci5kKGUsXCJCb3JkZXJcIixmdW5jdGlvbigpe3JldHVybiBvLmF9KSxyLmQoZSxcIkNvbG9yXCIsZnVuY3Rpb24oKXtyZXR1cm4gYS5hfSksci5kKGUsXCJDb2xvclN0b3BcIixmdW5jdGlvbigpe3JldHVybiBzLmF9KSxyLmQoZSxcIkNvbXBvbmVudFwiLGZ1bmN0aW9uKCl7cmV0dXJuIGkuYX0pLHIuZChlLFwiQ29udGV4dFwiLGZ1bmN0aW9uKCl7cmV0dXJuIGMuYX0pLHIuZChlLFwiRXh0ZW5zaW9uXCIsZnVuY3Rpb24oKXtyZXR1cm4gdS5hfSksci5kKGUsXCJGaWxsXCIsZnVuY3Rpb24oKXtyZXR1cm4gbC5hfSksci5kKGUsXCJHcmFkaWVudFwiLGZ1bmN0aW9uKCl7cmV0dXJuIGQuYX0pLHIuZChlLFwiTGF5ZXJcIixmdW5jdGlvbigpe3JldHVybiBmLmF9KSxyLmQoZSxcIlByb2plY3RcIixmdW5jdGlvbigpe3JldHVybiBoLmF9KSxyLmQoZSxcIlNjcmVlblwiLGZ1bmN0aW9uKCl7cmV0dXJuIGcuYX0pLHIuZChlLFwiU2hhZG93XCIsZnVuY3Rpb24oKXtyZXR1cm4gcC5hfSksci5kKGUsXCJUZXh0U3R5bGVcIixmdW5jdGlvbigpe3JldHVybiBTLmF9KSxyLmQoZSxcIlZlcnNpb25cIixmdW5jdGlvbigpe3JldHVybiBPLmF9KX0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXIoMCk7Y2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgbi5he3N0YXRpYyBnZXQgQUxMT1dFRF9GSUVMRFMoKXtyZXR1cm5bXCJuYW1lXCIsXCJkZXNjcmlwdGlvblwiXX1jb25zdHJ1Y3Rvcih0KXtzdXBlcigpO3ZhciBlPU9iamVjdC5hc3NpZ24oe30sdCk7dGhpcy5fY2xvbmVQcm9wcyhlKX1zdGF0aWMgZnJvbUpTT04odCl7cmV0dXJuIG5ldyBDb21wb25lbnQoSlNPTi5wYXJzZSh0KSl9fWUuYT1Db21wb25lbnR9LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1yKDApLG89cig4KTtjbGFzcyBDb250ZXh0IGV4dGVuZHMgbi5he2NvbnN0cnVjdG9yKHQpe3N1cGVyKCksdGhpcy5fb3B0aW9ucz10Lm9wdGlvbnMsdGhpcy5fcHJvamVjdD1uZXcgby5hKHQucHJvamVjdCl9Z2V0T3B0aW9uKHQpe3JldHVybiB0aGlzLl9vcHRpb25zW3RdfWdldCBwcm9qZWN0KCl7cmV0dXJuIHRoaXMuX3Byb2plY3R9c3RhdGljIGZyb21KU09OKHQpe3JldHVybiBuZXcgQ29udGV4dChKU09OLnBhcnNlKHQpKX19ZS5hPUNvbnRleHR9LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtlLmE9Y2xhc3N7c3R5bGVndWlkZUNvbG9ycyh0LGUpe31zdHlsZWd1aWRlVGV4dFN0eWxlcyh0LGUpe31sYXllcih0LGUpe31jb21wb25lbnQodCxlLHIpe31zY3JlZW4odCxlLHIpe31jb21tZW50KHQsZSl7dGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZFwiKX1leHBvcnRTdHlsZWd1aWRlQ29sb3JzKHQsZSl7dGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZFwiKX1leHBvcnRTdHlsZWd1aWRlVGV4dFN0eWxlcyh0LGUpe3Rocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWRcIil9fX0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXIoMCk7Y2xhc3MgU2NyZWVuIGV4dGVuZHMgbi5he3N0YXRpYyBnZXQgQUxMT1dFRF9GSUVMRFMoKXtyZXR1cm5bXCJuYW1lXCIsXCJkZXNjcmlwdGlvblwiLFwidGFnc1wiXX1jb25zdHJ1Y3Rvcih0KXtzdXBlcigpO3ZhciBlPU9iamVjdC5hc3NpZ24oe30sdCk7dGhpcy5fY2xvbmVQcm9wcyhlKX1zdGF0aWMgZnJvbUpTT04odCl7cmV0dXJuIG5ldyBTY3JlZW4oSlNPTi5wYXJzZSh0KSl9fWUuYT1TY3JlZW59LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1yKDApLG89cigxKSxhPXIoOSkscz1PYmplY3QuZnJlZXplKHtCSVRNQVA6XCJiaXRtYXBcIixTS0VUQ0g6XCJza2V0Y2hcIixQUzpcInBzZFwiLEZJR01BOlwiZmlnbWFcIixYRDpcInhkXCJ9KTtjbGFzcyBWZXJzaW9uIGV4dGVuZHMgbi5he3N0YXRpYyBnZXQgU09VUkNFUygpe3JldHVybiBzfXN0YXRpYyBnZXQgQUxMT1dFRF9GSUVMRFMoKXtyZXR1cm5bXCJpbWFnZVwiLFwic291cmNlXCIsXCJjb21wb25lbnROYW1lc1wiLFwiYmFja2dyb3VuZENvbG9yXCIsXCJsaW5rc1wiLFwiZ3JpZFwiLFwibGF5ZXJzXCJdfWNvbnN0cnVjdG9yKHQpe3N1cGVyKCk7dmFyIGU9dC5zbmFwc2hvdCxyPWUuYmFja2dyb3VuZENvbG9yfHx7cjoyNTUsZzoyNTUsYjoyNTUsYToxfSxuPWUubGlua3N8fFtdLHM9ZS5sYXllcnN8fFtdLGk9e2ltYWdlOnt1cmw6ZS51cmwsd2lkdGg6ZS53aWR0aCxoZWlnaHQ6ZS5oZWlnaHR9LHNvdXJjZTplLnNvdXJjZSxjb21wb25lbnROYW1lczplLmNvbXBvbmVudE5hbWVzfHxbXSxiYWNrZ3JvdW5kQ29sb3I6bmV3IG8uYShyKSxsYXllcnM6cy5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBhLmEodCl9KSxsaW5rczpufTt0aGlzLl9jbG9uZVByb3BzKGkpfXN0YXRpYyBmcm9tSlNPTih0KXtyZXR1cm4gbmV3IFZlcnNpb24oSlNPTi5wYXJzZSh0KSl9fWUuYT1WZXJzaW9ufV0pfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQHplcGxpbi9leHRlbnNpb24tbW9kZWwvZGlzdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2V4dGVuc2lvbk1vZGVsID0gcmVxdWlyZShcIkB6ZXBsaW4vZXh0ZW5zaW9uLW1vZGVsXCIpO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZShcIi4vY29sb3JcIik7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX3BlcmNlbnQgPSByZXF1aXJlKFwiLi9wZXJjZW50XCIpO1xuXG52YXIgX3BlcmNlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGVyY2VudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLW1hZ2ljLW51bWJlcnMgKi9cbmZ1bmN0aW9uIHRvQ1NTQW5nbGUoYW5nbGUpIHtcbiAgICBzd2l0Y2ggKGFuZ2xlKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiBcInRvIHRvcFwiO1xuXG4gICAgICAgIGNhc2UgOTA6XG4gICAgICAgICAgICByZXR1cm4gXCJ0byByaWdodFwiO1xuXG4gICAgICAgIGNhc2UgMTgwOlxuICAgICAgICAgICAgcmV0dXJuIFwidG8gYm90dG9tXCI7XG5cbiAgICAgICAgY2FzZSAyNzA6XG4gICAgICAgICAgICByZXR1cm4gXCJ0byBsZWZ0XCI7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBgJHthbmdsZX1kZWdgO1xuICAgIH1cbn1cbi8qIGVzbGludC1lbmFibGUgbm8tbWFnaWMtbnVtYmVycyAqL1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbG9yR3JhZGllbnQoX3JlZikge1xuICAgIHZhciByID0gX3JlZi5yLFxuICAgICAgICBnID0gX3JlZi5nLFxuICAgICAgICBiID0gX3JlZi5iLFxuICAgICAgICBhID0gX3JlZi5hO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJsaW5lYXJcIixcbiAgICAgICAgZnJvbToge1xuICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9LFxuICAgICAgICB0bzoge1xuICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgeTogMVxuICAgICAgICB9LFxuICAgICAgICBjb2xvclN0b3BzOiBbe1xuICAgICAgICAgICAgY29sb3I6IHsgciwgZywgYiwgYSB9LFxuICAgICAgICAgICAgcG9zaXRpb246IDBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgY29sb3I6IHsgciwgZywgYiwgYSB9LFxuICAgICAgICAgICAgcG9zaXRpb246IDFcbiAgICAgICAgfV1cbiAgICB9O1xufVxuXG52YXIgQ29sb3JTdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbG9yU3RvcChjb2xvclN0b3BPYmplY3QpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbG9yU3RvcCk7XG5cbiAgICAgICAgdGhpcy5vYmplY3QgPSBjb2xvclN0b3BPYmplY3Q7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENvbG9yU3RvcCwgW3tcbiAgICAgICAga2V5OiBcInZhbHVlT2ZcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlT2YoKSB7XG4gICAgICAgICAgICB2YXIgX29iamVjdCA9IHRoaXMub2JqZWN0LFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gX29iamVjdC5wb3NpdGlvbixcbiAgICAgICAgICAgICAgICBfb2JqZWN0JGNvbG9yID0gX29iamVjdC5jb2xvcixcbiAgICAgICAgICAgICAgICByID0gX29iamVjdCRjb2xvci5yLFxuICAgICAgICAgICAgICAgIGcgPSBfb2JqZWN0JGNvbG9yLmcsXG4gICAgICAgICAgICAgICAgYiA9IF9vYmplY3QkY29sb3IuYixcbiAgICAgICAgICAgICAgICBfb2JqZWN0JGNvbG9yJGEgPSBfb2JqZWN0JGNvbG9yLmEsXG4gICAgICAgICAgICAgICAgYSA9IF9vYmplY3QkY29sb3IkYSA9PT0gdW5kZWZpbmVkID8gMSA6IF9vYmplY3QkY29sb3IkYTtcblxuXG4gICAgICAgICAgICByZXR1cm4gYGNvbG9yU3RvcDo6cDoke3Bvc2l0aW9ufTpyOiR7cn06Zzoke2d9OmI6JHtifTphOiR7YX1gO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiZXF1YWxzXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlcXVhbHMob3RoZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBvdGhlci5vYmplY3QucG9zaXRpb24gPT09IHRoaXMub2JqZWN0LnBvc2l0aW9uICYmIG90aGVyLm9iamVjdC5jb2xvci5lcXVhbHModGhpcy5vYmplY3QuY29sb3IpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwidG9TdHlsZVZhbHVlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0eWxlVmFsdWUoX3JlZjIsIHZhcmlhYmxlcykge1xuICAgICAgICAgICAgdmFyIGNvbG9yRm9ybWF0ID0gX3JlZjIuY29sb3JGb3JtYXQ7XG4gICAgICAgICAgICB2YXIgX29iamVjdDIgPSB0aGlzLm9iamVjdCxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IF9vYmplY3QyLnBvc2l0aW9uLFxuICAgICAgICAgICAgICAgIGNvbG9yID0gX29iamVjdDIuY29sb3I7XG5cbiAgICAgICAgICAgIHZhciBwb3MgPSBcIlwiO1xuXG4gICAgICAgICAgICBpZiAocG9zaXRpb24gIT09IDEgJiYgcG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBwb3MgPSBgICR7bmV3IF9wZXJjZW50Mi5kZWZhdWx0KHBvc2l0aW9uKS50b1N0eWxlVmFsdWUoKX1gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYCR7bmV3IF9jb2xvcjIuZGVmYXVsdChjb2xvcikudG9TdHlsZVZhbHVlKHsgY29sb3JGb3JtYXQgfSwgdmFyaWFibGVzKX0ke3Bvc31gO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENvbG9yU3RvcDtcbn0oKTtcblxudmFyIEdyYWRpZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdyYWRpZW50KGdyYWRpZW50T2JqZWN0KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHcmFkaWVudCk7XG5cbiAgICAgICAgdGhpcy5vYmplY3QgPSBncmFkaWVudE9iamVjdDtcbiAgICAgICAgdGhpcy5jb2xvclN0b3BzID0gdGhpcy5vYmplY3QuY29sb3JTdG9wcy5tYXAoZnVuY3Rpb24gKGNzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yU3RvcChjcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhHcmFkaWVudCwgW3tcbiAgICAgICAga2V5OiBcInZhbHVlT2ZcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlT2YoKSB7XG4gICAgICAgICAgICB2YXIgX29iamVjdDMgPSB0aGlzLm9iamVjdCxcbiAgICAgICAgICAgICAgICB0eXBlID0gX29iamVjdDMudHlwZSxcbiAgICAgICAgICAgICAgICBhbmdsZSA9IF9vYmplY3QzLmFuZ2xlO1xuXG5cbiAgICAgICAgICAgIHJldHVybiBgZ3JhZGllbnQ6OnQ6JHt0eXBlfTphOiR7YW5nbGV9OiR7dGhpcy5jb2xvclN0b3BzLm1hcChmdW5jdGlvbiAoY3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3MudmFsdWVPZigpO1xuICAgICAgICAgICAgfSkuam9pbihcIjpcIil9YDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImVxdWFsc1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vYmplY3QudHlwZSA9PT0gb3RoZXIub2JqZWN0LnR5cGUgJiYgdGhpcy5vYmplY3QuYW5nbGUgPT09IG90aGVyLm9iamVjdC5hbmdsZSAmJiB0aGlzLmNvbG9yU3RvcHMubGVuZ3RoID09PSBvdGhlci5jb2xvclN0b3BzLmxlbmd0aCAmJiB0aGlzLmNvbG9yU3RvcHMuZXZlcnkoZnVuY3Rpb24gKGNzLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcy5lcXVhbHMob3RoZXIuY29sb3JTdG9wc1tpbmRleF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJ0b1N0eWxlVmFsdWVcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3R5bGVWYWx1ZShfcmVmMywgdmFyaWFibGVzKSB7XG4gICAgICAgICAgICB2YXIgY29sb3JGb3JtYXQgPSBfcmVmMy5jb2xvckZvcm1hdDtcbiAgICAgICAgICAgIHZhciBncmFkaWVudCA9IHRoaXMub2JqZWN0O1xuXG4gICAgICAgICAgICB2YXIgY29sb3JTdG9wU3R5bGUgPSB0aGlzLmNvbG9yU3RvcHMubWFwKGZ1bmN0aW9uIChjcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcy50b1N0eWxlVmFsdWUoeyBjb2xvckZvcm1hdCB9LCB2YXJpYWJsZXMpO1xuICAgICAgICAgICAgfSkuam9pbihcIiwgXCIpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGdyYWRpZW50LnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwibGluZWFyXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgbGluZWFyLWdyYWRpZW50KCR7dG9DU1NBbmdsZShncmFkaWVudC5hbmdsZSl9LCAke2NvbG9yU3RvcFN0eWxlfSlgO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcInJhZGlhbFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgJHtuZXcgX3BlcmNlbnQyLmRlZmF1bHQoZ3JhZGllbnQuZnJvbS54KS50b1N0eWxlVmFsdWUoKX0gJHtuZXcgX3BlcmNlbnQyLmRlZmF1bHQoZ3JhZGllbnQuZnJvbS55KS50b1N0eWxlVmFsdWUoKX0sICR7Y29sb3JTdG9wU3R5bGV9KWA7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFwiYW5ndWxhclwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYGNvbmljLWdyYWRpZW50KCR7Y29sb3JTdG9wU3R5bGV9LCAke3RoaXMuY29sb3JTdG9wc1swXS50b1N0eWxlVmFsdWUoeyBjb2xvckZvcm1hdCB9LCB2YXJpYWJsZXMpfSlgO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgICAga2V5OiBcImZyb21SR0JBXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmcm9tUkdCQShfcmVmNCkge1xuICAgICAgICAgICAgdmFyIHIgPSBfcmVmNC5yLFxuICAgICAgICAgICAgICAgIGcgPSBfcmVmNC5nLFxuICAgICAgICAgICAgICAgIGIgPSBfcmVmNC5iLFxuICAgICAgICAgICAgICAgIF9yZWY0JGEgPSBfcmVmNC5hLFxuICAgICAgICAgICAgICAgIGEgPSBfcmVmNCRhID09PSB1bmRlZmluZWQgPyAxIDogX3JlZjQkYTtcblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBHcmFkaWVudChuZXcgX2V4dGVuc2lvbk1vZGVsLkdyYWRpZW50KGdlbmVyYXRlQ29sb3JHcmFkaWVudCh7IHIsIGcsIGIsIGEgfSksIDEwMCwgMTAwIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbWFnaWMtbnVtYmVyc1xuICAgICAgICAgICAgKSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gR3JhZGllbnQ7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEdyYWRpZW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3plcGxpbi1leHRlbnNpb24tc3R5bGUta2l0L3ZhbHVlcy9ncmFkaWVudC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZShcIi4uL3ZhbHVlcy9jb2xvclwiKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEZvbnRDb2xvciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGb250Q29sb3IodmFsdWUpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZvbnRDb2xvcik7XG5cbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhGb250Q29sb3IsIFt7XG4gICAgICAgIGtleTogXCJoYXNEZWZhdWx0VmFsdWVcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhc0RlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlLmVxdWFscyhGb250Q29sb3IuREVGQVVMVF9WQUxVRSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJlcXVhbHNcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVxdWFscyhvdGhlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUuZXF1YWxzKG90aGVyLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImdldFZhbHVlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZShwYXJhbXMsIHZhcmlhYmxlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUudG9TdHlsZVZhbHVlKHBhcmFtcywgdmFyaWFibGVzKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcIm5hbWVcIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnN0YW50cy5TVFlMRV9QUk9QUy5GT05UX0NPTE9SO1xuICAgICAgICB9XG4gICAgfV0sIFt7XG4gICAgICAgIGtleTogXCJERUZBVUxUX1ZBTFVFXCIsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jb2xvcjIuZGVmYXVsdC5mcm9tUkdCQSh7IHI6IDAsIGc6IDAsIGI6IDAsIGE6IDEgfSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRm9udENvbG9yO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGb250Q29sb3I7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvZGVjbGFyYXRpb25zL2ZvbnRDb2xvci5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUnVsZVNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSdWxlU2V0KHNlbGVjdG9yLCBkZWNsYXJhdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUnVsZVNldCk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgICAgICB0aGlzLmRlY2xhcmF0aW9uTWFwID0ge307XG5cbiAgICAgICAgZGVjbGFyYXRpb25zLmZvckVhY2goZnVuY3Rpb24gKGRlY2xhcmF0aW9uKSB7XG4gICAgICAgICAgICBfdGhpcy5kZWNsYXJhdGlvbk1hcFtkZWNsYXJhdGlvbi5uYW1lXSA9IGRlY2xhcmF0aW9uO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUnVsZVNldCwgW3tcbiAgICAgICAga2V5OiBcImhhc1Byb3BlcnR5XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNQcm9wZXJ0eShwcm9wZXJ0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3BlcnR5IGluIHRoaXMuZGVjbGFyYXRpb25NYXA7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJhZGREZWNsYXJhdGlvblwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRGVjbGFyYXRpb24oZGVjbGFyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZGVjbGFyYXRpb25NYXBbZGVjbGFyYXRpb24ubmFtZV0gPSBkZWNsYXJhdGlvbjtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInJlbW92ZURlY2xhcmF0aW9uXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVEZWNsYXJhdGlvbihkZWNsYXJhdGlvbikge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZGVjbGFyYXRpb25NYXBbZGVjbGFyYXRpb24ubmFtZV07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJkZWNsYXJhdGlvbnNcIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZGVjbGFyYXRpb25NYXApLm1hcChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIuZGVjbGFyYXRpb25NYXBbbmFtZV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSdWxlU2V0O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSdWxlU2V0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3plcGxpbi1leHRlbnNpb24tc3R5bGUta2l0L3J1bGVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IExheWVyIGZyb20gXCJ6ZXBsaW4tZXh0ZW5zaW9uLXN0eWxlLWtpdC9lbGVtZW50cy9sYXllclwiO1xuaW1wb3J0IHsgZ2V0VW5pcXVlTGF5ZXJUZXh0U3R5bGVzIH0gZnJvbSBcInplcGxpbi1leHRlbnNpb24tc3R5bGUta2l0L3V0aWxzXCI7XG5cbnZhciBzdHlsZXMgPSByZXF1aXJlKCcuL3N0eWxlcy5qc29uJyk7XG5cbmZ1bmN0aW9uIGxheWVyKGNvbnRleHQsIHNlbGVjdGVkTGF5ZXIpIHtcbiAgICBjb25zdCBsID0gbmV3IExheWVyKHNlbGVjdGVkTGF5ZXIpO1xuICAgIGNvbnN0IGxheWVyUnVsZVNldCA9IGwuc3R5bGU7XG5cbiAgICBjb25zdCBjaGlsZHJlblJ1bGVTZXQgPSBbXTtcbiAgICBjb25zdCB7IGRlZmF1bHRUZXh0U3R5bGUgfSA9IHNlbGVjdGVkTGF5ZXI7XG5cbiAgICBpZiAoc2VsZWN0ZWRMYXllci50eXBlID09PSBcInRleHRcIiAmJiBkZWZhdWx0VGV4dFN0eWxlKSB7XG4gICAgICAgIGNvbnN0IGRlY2xhcmF0aW9ucyA9IGwuZ2V0TGF5ZXJUZXh0U3R5bGVEZWNsYXJhdGlvbnMoZGVmYXVsdFRleHRTdHlsZSk7XG5cbiAgICAgICAgZGVjbGFyYXRpb25zLmZvckVhY2gocCA9PiBsYXllclJ1bGVTZXQuYWRkRGVjbGFyYXRpb24ocCkpO1xuXG4gICAgICAgIGdldFVuaXF1ZUxheWVyVGV4dFN0eWxlcyhzZWxlY3RlZExheWVyKS5maWx0ZXIoXG4gICAgICAgICAgICB0ZXh0U3R5bGUgPT4gIWRlZmF1bHRUZXh0U3R5bGUuZXF1YWxzKHRleHRTdHlsZSlcbiAgICAgICAgKS5mb3JFYWNoKCh0ZXh0U3R5bGUsIGlkeCkgPT4ge1xuICAgICAgICAgICAgY2hpbGRyZW5SdWxlU2V0LnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IFJ1bGVTZXQoXG4gICAgICAgICAgICAgICAgICAgIGAke3NlbGVjdG9yaXplKHNlbGVjdGVkTGF5ZXIubmFtZSl9ICR7c2VsZWN0b3JpemUoYHRleHQtc3R5bGUtJHtpZHggKyAxfWApfWAsXG4gICAgICAgICAgICAgICAgICAgIGwuZ2V0TGF5ZXJUZXh0U3R5bGVEZWNsYXJhdGlvbnModGV4dFN0eWxlKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBjc3NDbGFzc2VzID0gW107XG5cbiAgICBjb25zdCBsYXllclJ1bGVzID0gbGF5ZXJSdWxlU2V0LmRlY2xhcmF0aW9uTWFwO1xuICAgIGNvbnN0IGxheWVyUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKGxheWVyUnVsZXMpO1xuXG4gICAgY29uc3Qgc3R5bGVTaGVldFJ1bGVzID0gc3R5bGVzID8gc3R5bGVzLnZhbHVlIDogW107XG4gICAgY29uc29sZS5sb2coXCJIRVJFXCIpO1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHN0eWxlU2hlZXRSdWxlcykpO1xuXG5cbiAgICBzdHlsZVNoZWV0UnVsZXMuZm9yRWFjaChmdW5jdGlvbihydWxlKSB7XG4gICAgICAgIGxldCBydWxlTWF0Y2hlcyA9IHRydWU7XG5cbiAgICAgICAgdmFyIGRlY2xhcmF0aW9ucyA9IHJ1bGUuZGVjbGFyYXRpb25zO1xuICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBkZWNsYXJhdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICghbGF5ZXJQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgIHJ1bGVNYXRjaGVzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0eWxlU2hlZXRQcm9wZXJ0eVZhbHVlTWF0Y2hlc0xheWVyKHByb3BlcnR5LCBkZWNsYXJhdGlvbnMsIGxheWVyUnVsZXMpKSB7XG4gICAgICAgICAgICAgICAgcnVsZU1hdGNoZXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChydWxlTWF0Y2hlcykge1xuICAgICAgICAgICAgY3NzQ2xhc3NlcyA9IFtjc3NDbGFzc2VzLCAuLi5ydWxlLnNlbGVjdG9yc107XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29kZTogY3NzQ2xhc3Nlcy5qb2luKCcgJyksXG4gICAgICAgIGxhbmd1YWdlOiAnY3NzJ1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIHN0eWxlU2hlZXRQcm9wZXJ0eVZhbHVlTWF0Y2hlc0xheWVyKHByb3BlcnR5LCBzdHlsZVNoZWV0UnVsZSwgbGF5ZXJSdWxlcylcbntcbiAgICBzd2l0Y2ggKHByb3BlcnR5KSB7XG4gICAgICAgIGNhc2UgJ2ZvbnQtc2l6ZSc6XG4gICAgICAgICAgICBpZiAoIWxheWVyUnVsZXNbcHJvcGVydHldIHx8ICFsYXllclJ1bGVzW3Byb3BlcnR5XS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxheWVyU3RyaW5nID0gbGF5ZXJSdWxlc1twcm9wZXJ0eV0udmFsdWUudmFsdWUgKyBsYXllclJ1bGVzW3Byb3BlcnR5XS52YWx1ZS51bml0O1xuICAgICAgICAgICAgcmV0dXJuIGxheWVyU3RyaW5nID09PSBzdHlsZVNoZWV0UnVsZVtwcm9wZXJ0eV07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbGF5ZXJcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2FuZ2xlID0gcmVxdWlyZShcIi4uL3ZhbHVlcy9hbmdsZVwiKTtcblxudmFyIF9hbmdsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbmdsZSk7XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKFwiLi4vdmFsdWVzL2NvbG9yXCIpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9ncmFkaWVudCA9IHJlcXVpcmUoXCIuLi92YWx1ZXMvZ3JhZGllbnRcIik7XG5cbnZhciBfZ3JhZGllbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ3JhZGllbnQpO1xuXG52YXIgX2xlbmd0aCA9IHJlcXVpcmUoXCIuLi92YWx1ZXMvbGVuZ3RoXCIpO1xuXG52YXIgX2xlbmd0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sZW5ndGgpO1xuXG52YXIgX3NjYWxhciA9IHJlcXVpcmUoXCIuLi92YWx1ZXMvc2NhbGFyXCIpO1xuXG52YXIgX3NjYWxhcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY2FsYXIpO1xuXG52YXIgX2JvcmRlciA9IHJlcXVpcmUoXCIuLi9kZWNsYXJhdGlvbnMvYm9yZGVyXCIpO1xuXG52YXIgX2JvcmRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ib3JkZXIpO1xuXG52YXIgX3NoYWRvdyA9IHJlcXVpcmUoXCIuLi9kZWNsYXJhdGlvbnMvc2hhZG93XCIpO1xuXG52YXIgX3NoYWRvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFkb3cpO1xuXG52YXIgX29wYWNpdHkgPSByZXF1aXJlKFwiLi4vZGVjbGFyYXRpb25zL29wYWNpdHlcIik7XG5cbnZhciBfb3BhY2l0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vcGFjaXR5KTtcblxudmFyIF93aWR0aCA9IHJlcXVpcmUoXCIuLi9kZWNsYXJhdGlvbnMvd2lkdGhcIik7XG5cbnZhciBfd2lkdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2lkdGgpO1xuXG52YXIgX2hlaWdodCA9IHJlcXVpcmUoXCIuLi9kZWNsYXJhdGlvbnMvaGVpZ2h0XCIpO1xuXG52YXIgX2hlaWdodDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWlnaHQpO1xuXG52YXIgX29iamVjdEZpdCA9IHJlcXVpcmUoXCIuLi9kZWNsYXJhdGlvbnMvb2JqZWN0Rml0XCIpO1xuXG52YXIgX29iamVjdEZpdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RGaXQpO1xuXG52YXIgX3RyYW5zZm9ybSA9IHJlcXVpcmUoXCIuLi9kZWNsYXJhdGlvbnMvdHJhbnNmb3JtXCIpO1xuXG52YXIgX3RyYW5zZm9ybTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm0pO1xuXG52YXIgX21peEJsZW5kTW9kZSA9IHJlcXVpcmUoXCIuLi9kZWNsYXJhdGlvbnMvbWl4QmxlbmRNb2RlXCIpO1xuXG52YXIgX21peEJsZW5kTW9kZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9taXhCbGVuZE1vZGUpO1xuXG52YXIgX2JvcmRlclJhZGl1cyA9IHJlcXVpcmUoXCIuLi9kZWNsYXJhdGlvbnMvYm9yZGVyUmFkaXVzXCIpO1xuXG52YXIgX2JvcmRlclJhZGl1czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ib3JkZXJSYWRpdXMpO1xuXG52YXIgX2JnQmxlbmRNb2RlID0gcmVxdWlyZShcIi4uL2RlY2xhcmF0aW9ucy9iZ0JsZW5kTW9kZVwiKTtcblxudmFyIF9iZ0JsZW5kTW9kZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iZ0JsZW5kTW9kZSk7XG5cbnZhciBfYmdJbWFnZSA9IHJlcXVpcmUoXCIuLi9kZWNsYXJhdGlvbnMvYmdJbWFnZVwiKTtcblxudmFyIF9iZ0ltYWdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JnSW1hZ2UpO1xuXG52YXIgX2JnQ29sb3IgPSByZXF1aXJlKFwiLi4vZGVjbGFyYXRpb25zL2JnQ29sb3JcIik7XG5cbnZhciBfYmdDb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iZ0NvbG9yKTtcblxudmFyIF9iZ0NsaXAgPSByZXF1aXJlKFwiLi4vZGVjbGFyYXRpb25zL2JnQ2xpcFwiKTtcblxudmFyIF9iZ0NsaXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmdDbGlwKTtcblxudmFyIF90ZXh0RmlsbENvbG9yID0gcmVxdWlyZShcIi4uL2RlY2xhcmF0aW9ucy90ZXh0RmlsbENvbG9yXCIpO1xuXG52YXIgX3RleHRGaWxsQ29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGV4dEZpbGxDb2xvcik7XG5cbnZhciBfdGV4dFN0cm9rZSA9IHJlcXVpcmUoXCIuLi9kZWNsYXJhdGlvbnMvdGV4dFN0cm9rZVwiKTtcblxudmFyIF90ZXh0U3Ryb2tlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RleHRTdHJva2UpO1xuXG52YXIgX2JvcmRlckltYWdlU291cmNlID0gcmVxdWlyZShcIi4uL2RlY2xhcmF0aW9ucy9ib3JkZXJJbWFnZVNvdXJjZVwiKTtcblxudmFyIF9ib3JkZXJJbWFnZVNvdXJjZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ib3JkZXJJbWFnZVNvdXJjZSk7XG5cbnZhciBfYm9yZGVyV2lkdGggPSByZXF1aXJlKFwiLi4vZGVjbGFyYXRpb25zL2JvcmRlcldpZHRoXCIpO1xuXG52YXIgX2JvcmRlcldpZHRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JvcmRlcldpZHRoKTtcblxudmFyIF9ib3JkZXJTdHlsZSA9IHJlcXVpcmUoXCIuLi9kZWNsYXJhdGlvbnMvYm9yZGVyU3R5bGVcIik7XG5cbnZhciBfYm9yZGVyU3R5bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYm9yZGVyU3R5bGUpO1xuXG52YXIgX2JvcmRlckltYWdlU2xpY2UgPSByZXF1aXJlKFwiLi4vZGVjbGFyYXRpb25zL2JvcmRlckltYWdlU2xpY2VcIik7XG5cbnZhciBfYm9yZGVySW1hZ2VTbGljZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ib3JkZXJJbWFnZVNsaWNlKTtcblxudmFyIF9iYWNrZHJvcEZpbHRlciA9IHJlcXVpcmUoXCIuLi9kZWNsYXJhdGlvbnMvYmFja2Ryb3BGaWx0ZXJcIik7XG5cbnZhciBfYmFja2Ryb3BGaWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmFja2Ryb3BGaWx0ZXIpO1xuXG52YXIgX2ZpbHRlciA9IHJlcXVpcmUoXCIuLi9kZWNsYXJhdGlvbnMvZmlsdGVyXCIpO1xuXG52YXIgX2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9maWx0ZXIpO1xuXG52YXIgX2ZvbnRDb2xvciA9IHJlcXVpcmUoXCIuLi9kZWNsYXJhdGlvbnMvZm9udENvbG9yXCIpO1xuXG52YXIgX2ZvbnRDb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mb250Q29sb3IpO1xuXG52YXIgX3RleHRTdHlsZSA9IHJlcXVpcmUoXCIuL3RleHRTdHlsZVwiKTtcblxudmFyIF90ZXh0U3R5bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGV4dFN0eWxlKTtcblxudmFyIF9ydWxlU2V0ID0gcmVxdWlyZShcIi4uL3J1bGVTZXRcIik7XG5cbnZhciBfcnVsZVNldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ydWxlU2V0KTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcblxudmFyIF9iZ09yaWdpbiA9IHJlcXVpcmUoXCIuLi9kZWNsYXJhdGlvbnMvYmdPcmlnaW5cIik7XG5cbnZhciBfYmdPcmlnaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmdPcmlnaW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIExheWVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExheWVyKCkge1xuICAgICAgICB2YXIgbGF5ZXJPYmplY3QgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMYXllcik7XG5cbiAgICAgICAgdGhpcy5vYmplY3QgPSBsYXllck9iamVjdDtcblxuICAgICAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IHRoaXMuY29sbGVjdERlY2xhcmF0aW9ucygpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhMYXllciwgW3tcbiAgICAgICAga2V5OiBcImdldExheWVyVGV4dFN0eWxlRGVjbGFyYXRpb25zXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMYXllclRleHRTdHlsZURlY2xhcmF0aW9ucyh0ZXh0U3R5bGUpIHtcbiAgICAgICAgICAgIHZhciBsYXllciA9IHRoaXMub2JqZWN0O1xuXG4gICAgICAgICAgICB2YXIgZGVjbGFyYXRpb25zID0gbmV3IF90ZXh0U3R5bGUyLmRlZmF1bHQodGV4dFN0eWxlKS5kZWNsYXJhdGlvbnM7XG5cbiAgICAgICAgICAgIGlmIChsYXllci5maWxscy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChkZWNsYXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIShkZWNsYXJhdGlvbiBpbnN0YW5jZW9mIF9jb2xvcjIuZGVmYXVsdCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNHcmFkaWVudCkge1xuICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMucHVzaChuZXcgKCgwLCBfdXRpbHMud2Via2l0KShfYmdDbGlwMi5kZWZhdWx0KSkoW1widGV4dFwiXSkpO1xuICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMucHVzaChuZXcgX2JnQ2xpcDIuZGVmYXVsdChbXCJ0ZXh0XCJdKSk7XG4gICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5wdXNoKG5ldyBfdGV4dEZpbGxDb2xvcjIuZGVmYXVsdChcInRyYW5zcGFyZW50XCIpKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgYmdJbWFnZXMgPSBsYXllci5maWxscy5tYXAoZnVuY3Rpb24gKGZpbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBMYXllci5maWxsVG9HcmFkaWVudChmaWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHRTdHlsZS5jb2xvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmdJbWFnZXMucHVzaChuZXcgX2NvbG9yMi5kZWZhdWx0KHRleHRTdHlsZS5jb2xvcikudG9HcmFkaWVudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5wdXNoKG5ldyBfYmdJbWFnZTIuZGVmYXVsdChiZ0ltYWdlcykpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBibGVudENvbG9yID0gKDAsIF91dGlscy5ibGVuZENvbG9ycykobGF5ZXIuZmlsbHMubWFwKGZ1bmN0aW9uIChmaWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlsbC5jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0U3R5bGUuY29sb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsZW50Q29sb3IgPSBibGVudENvbG9yLmJsZW5kKHRleHRTdHlsZS5jb2xvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMucHVzaChuZXcgX2ZvbnRDb2xvcjIuZGVmYXVsdChuZXcgX2NvbG9yMi5kZWZhdWx0KGJsZW50Q29sb3IpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb25zO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiZ2VuZXJhdGVCb3JkZXJEZWNsYXJhdGlvbnNcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdlbmVyYXRlQm9yZGVyRGVjbGFyYXRpb25zKCkge1xuICAgICAgICAgICAgdmFyIF9lbGVtZW50Qm9yZGVyID0gdGhpcy5lbGVtZW50Qm9yZGVyLFxuICAgICAgICAgICAgICAgIGZpbGwgPSBfZWxlbWVudEJvcmRlci5maWxsLFxuICAgICAgICAgICAgICAgIHRoaWNrbmVzcyA9IF9lbGVtZW50Qm9yZGVyLnRoaWNrbmVzcyxcbiAgICAgICAgICAgICAgICBsYXllciA9IHRoaXMub2JqZWN0O1xuXG5cbiAgICAgICAgICAgIGlmIChsYXllci50eXBlID09PSBcInRleHRcIiAmJiBmaWxsLnR5cGUgPT09IFwiY29sb3JcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBbbmV3ICgoMCwgX3V0aWxzLndlYmtpdCkoX3RleHRTdHJva2UyLmRlZmF1bHQpKShuZXcgX2xlbmd0aDIuZGVmYXVsdCh0aGlja25lc3MpLCBuZXcgX2NvbG9yMi5kZWZhdWx0KGZpbGwuY29sb3IpKV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN3aXRjaCAoZmlsbC50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImNvbG9yXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IF9ib3JkZXIyLmRlZmF1bHQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IFwic29saWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBuZXcgX2xlbmd0aDIuZGVmYXVsdCh0aGlja25lc3MpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IG5ldyBfY29sb3IyLmRlZmF1bHQoZmlsbC5jb2xvcilcbiAgICAgICAgICAgICAgICAgICAgfSldO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcImdyYWRpZW50XCI6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IF9ib3JkZXJTdHlsZTIuZGVmYXVsdChcInNvbGlkXCIpLCBuZXcgX2JvcmRlcldpZHRoMi5kZWZhdWx0KG5ldyBfbGVuZ3RoMi5kZWZhdWx0KHRoaWNrbmVzcykpLCBuZXcgX2JvcmRlckltYWdlU291cmNlMi5kZWZhdWx0KG5ldyBfZ3JhZGllbnQyLmRlZmF1bHQoZmlsbC5ncmFkaWVudCkpLCBuZXcgX2JvcmRlckltYWdlU2xpY2UyLmRlZmF1bHQobmV3IF9zY2FsYXIyLmRlZmF1bHQoMSkpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiZ2VuZXJhdGVCbHVyRGVjbGFyYXRpb25zXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZUJsdXJEZWNsYXJhdGlvbnMoKSB7XG4gICAgICAgICAgICB2YXIgYmx1ciA9IHRoaXMub2JqZWN0LmJsdXI7XG5cbiAgICAgICAgICAgIHZhciBmaWx0ZXJGbnMgPSBbeyBmbjogXCJibHVyXCIsIGFyZ3M6IFtuZXcgX2xlbmd0aDIuZGVmYXVsdChibHVyLnJhZGl1cyldIH1dO1xuXG4gICAgICAgICAgICBpZiAoYmx1ci50eXBlID09PSBcImJhY2tncm91bmRcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBbbmV3ICgoMCwgX3V0aWxzLndlYmtpdCkoX2JhY2tkcm9wRmlsdGVyMi5kZWZhdWx0KSkoZmlsdGVyRm5zKSwgbmV3IF9iYWNrZHJvcEZpbHRlcjIuZGVmYXVsdChmaWx0ZXJGbnMpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIFtuZXcgKCgwLCBfdXRpbHMud2Via2l0KShfZmlsdGVyMi5kZWZhdWx0KSkoZmlsdGVyRm5zKSwgbmV3IF9maWx0ZXIyLmRlZmF1bHQoZmlsdGVyRm5zKV07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJnZW5lcmF0ZUJhY2tncm91bmREZWNsYXJhdGlvbnNcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdlbmVyYXRlQmFja2dyb3VuZERlY2xhcmF0aW9ucygpIHtcbiAgICAgICAgICAgIHZhciBiZ0ltYWdlcyA9IHRoaXMuYmdJbWFnZXMsXG4gICAgICAgICAgICAgICAgZWxlbWVudEJvcmRlciA9IHRoaXMuZWxlbWVudEJvcmRlcixcbiAgICAgICAgICAgICAgICBmaWxsQ29sb3IgPSB0aGlzLmZpbGxDb2xvcixcbiAgICAgICAgICAgICAgICBsYXllciA9IHRoaXMub2JqZWN0O1xuXG4gICAgICAgICAgICB2YXIgZGVjbGFyYXRpb25zID0gW107XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0ZpbGwgJiYgdGhpcy5oYXNCbGVuZE1vZGUpIHtcbiAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMucHVzaChuZXcgX2JnQmxlbmRNb2RlMi5kZWZhdWx0KGxheWVyLmZpbGxzLm1hcChmdW5jdGlvbiAoZmlsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlsbC5ibGVuZE1vZGU7XG4gICAgICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJnSW1hZ2VzKSB7XG4gICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zLnB1c2gobmV3IF9iZ0ltYWdlMi5kZWZhdWx0KGJnSW1hZ2VzKSk7XG5cbiAgICAgICAgICAgICAgICBpZiAobGF5ZXIuYm9yZGVyUmFkaXVzICYmIGVsZW1lbnRCb3JkZXIgJiYgZWxlbWVudEJvcmRlci5maWxsLnR5cGUgPT09IFwiZ3JhZGllbnRcIikge1xuICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMucHVzaChuZXcgX2JnT3JpZ2luMi5kZWZhdWx0KFtcImJvcmRlci1ib3hcIl0pKTtcbiAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zLnB1c2gobmV3IF9iZ0NsaXAyLmRlZmF1bHQoW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShBcnJheShiZ0ltYWdlcy5sZW5ndGggLSAxKS5maWxsKFwiY29udGVudC1ib3hcIikpLCBbXCJib3JkZXItYm94XCJdKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZmlsbENvbG9yKSB7XG4gICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zLnB1c2gobmV3IF9iZ0NvbG9yMi5kZWZhdWx0KGZpbGxDb2xvcikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb25zO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgY29tcGxleGl0eSAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiY29sbGVjdERlY2xhcmF0aW9uc1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29sbGVjdERlY2xhcmF0aW9ucygpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50Qm9yZGVyID0gdGhpcy5lbGVtZW50Qm9yZGVyLFxuICAgICAgICAgICAgICAgIGxheWVyID0gdGhpcy5vYmplY3Q7XG5cbiAgICAgICAgICAgIHZhciBkZWNsYXJhdGlvbnMgPSBbbmV3IF93aWR0aDIuZGVmYXVsdChuZXcgX2xlbmd0aDIuZGVmYXVsdChsYXllci5yZWN0LndpZHRoKSksIG5ldyBfaGVpZ2h0Mi5kZWZhdWx0KG5ldyBfbGVuZ3RoMi5kZWZhdWx0KGxheWVyLnJlY3QuaGVpZ2h0KSldO1xuXG4gICAgICAgICAgICBpZiAobGF5ZXIuZXhwb3J0YWJsZSkge1xuICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5wdXNoKG5ldyBfb2JqZWN0Rml0Mi5kZWZhdWx0KFwiY29udGFpblwiKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChsYXllci5yb3RhdGlvbikge1xuICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5wdXNoKG5ldyBfdHJhbnNmb3JtMi5kZWZhdWx0KFt7IGZuOiBcInJvdGF0ZVwiLCBhcmdzOiBbbmV3IF9hbmdsZTIuZGVmYXVsdCgtbGF5ZXIucm90YXRpb24pXSB9XSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobGF5ZXIub3BhY2l0eSAhPT0gMSkge1xuICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5wdXNoKG5ldyBfb3BhY2l0eTIuZGVmYXVsdChuZXcgX3NjYWxhcjIuZGVmYXVsdChsYXllci5vcGFjaXR5KSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobGF5ZXIuYmxlbmRNb2RlICE9PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zLnB1c2gobmV3IF9taXhCbGVuZE1vZGUyLmRlZmF1bHQobGF5ZXIuYmxlbmRNb2RlKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChsYXllci5ib3JkZXJSYWRpdXMpIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBkaWZmZXJlbnQgcmFkaWkgZm9yIGVhY2ggY29ybmVyP1xuICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5wdXNoKG5ldyBfYm9yZGVyUmFkaXVzMi5kZWZhdWx0KG5ldyBfbGVuZ3RoMi5kZWZhdWx0KGxheWVyLmJvcmRlclJhZGl1cykpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGxheWVyLmJsdXIgJiYgbGF5ZXIuYmx1ci5yYWRpdXMpIHtcbiAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnMuY29uY2F0KHRoaXMuZ2VuZXJhdGVCbHVyRGVjbGFyYXRpb25zKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobGF5ZXIuc2hhZG93cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMucHVzaChuZXcgX3NoYWRvdzIuZGVmYXVsdChsYXllci5zaGFkb3dzLCBsYXllci50eXBlID09PSBcInRleHRcIiA/IF9zaGFkb3cyLmRlZmF1bHQuVFlQRVMuVEVYVCA6IF9zaGFkb3cyLmRlZmF1bHQuVFlQRVMuQk9YKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50Qm9yZGVyKSB7XG4gICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zLmNvbmNhdCh0aGlzLmdlbmVyYXRlQm9yZGVyRGVjbGFyYXRpb25zKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnMuY29uY2F0KHRoaXMuZ2VuZXJhdGVCYWNrZ3JvdW5kRGVjbGFyYXRpb25zKCkpO1xuXG4gICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb25zO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiaGFzQmxlbmRNb2RlXCIsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0LmZpbGxzLnNvbWUoZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZi5ibGVuZE1vZGUgJiYgZi5ibGVuZE1vZGUgIT09IFwibm9ybWFsXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImhhc0dyYWRpZW50XCIsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0LmZpbGxzLnNvbWUoZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZi50eXBlID09PSBcImdyYWRpZW50XCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImhhc0ZpbGxcIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vYmplY3QuZmlsbHMubGVuZ3RoID4gMDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImVsZW1lbnRCb3JkZXJcIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICB2YXIgYm9yZGVycyA9IHRoaXMub2JqZWN0LmJvcmRlcnM7XG5cblxuICAgICAgICAgICAgcmV0dXJuIGJvcmRlcnMubGVuZ3RoID8gYm9yZGVyc1tib3JkZXJzLmxlbmd0aCAtIDFdIDogbnVsbDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImJnSW1hZ2VzXCIsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgdmFyIGJnSW1hZ2VzID0gdm9pZCAwO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFzRmlsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNHcmFkaWVudCB8fCB0aGlzLmhhc0JsZW5kTW9kZSkge1xuICAgICAgICAgICAgICAgIGJnSW1hZ2VzID0gdGhpcy5vYmplY3QuZmlsbHMubWFwKGZ1bmN0aW9uIChmaWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBMYXllci5maWxsVG9HcmFkaWVudChmaWxsKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudEJvcmRlcikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iamVjdC5ib3JkZXJSYWRpdXMgJiYgdGhpcy5lbGVtZW50Qm9yZGVyLmZpbGwudHlwZSA9PT0gXCJncmFkaWVudFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBib3JkZXJGaWxsID0gbmV3IF9ncmFkaWVudDIuZGVmYXVsdCh0aGlzLmVsZW1lbnRCb3JkZXIuZmlsbC5ncmFkaWVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJnSW1hZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZ0ltYWdlcy5wdXNoKGJvcmRlckZpbGwpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZmlsbENvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZ0ltYWdlcyA9IFt0aGlzLmZpbGxDb2xvciwgYm9yZGVyRmlsbF07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQWN0dWFsbHkgdGhlIGJhY2tncm91bmQgc2hvdWxkIGJlIHRyYW5zcGFyZW50IGlmIHRoZXJlIGFyZSBubyBmaWxscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGkuZS4gd2hhdCdzIG9uIHRoZSBiYWNrZ3JvdW5kIG9mIHRoaXMgbGF5ZXIgc2hvdWxkIGJlIHNob3duLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQnV0IHdlIGhhdmUgbm8gd2F5IG9mIGtub3dpbmcgdGhlIGJhY2tncm91bmQgb2YgcGFyZW50IGxheWVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICogYW5kIG1ha2luZyBpdCB0cmFuc3BhcmVudCB3aWxsIG1ha2UgZmFrZS1ncmFkaWVudC1ib3JkZXIgYmFja2dyb3VuZCB2aXNpYmxlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgd2hpdGUgPSBfY29sb3IyLmRlZmF1bHQuZnJvbVJHQkEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHI6IDI1NSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnOiAyNTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYjogMjU1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGE6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBiZ0ltYWdlcyA9IFt3aGl0ZS50b0dyYWRpZW50KCksIGJvcmRlckZpbGxdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYmdJbWFnZXM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJmaWxsQ29sb3JcIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNGaWxsICYmICF0aGlzLmhhc0dyYWRpZW50ICYmICF0aGlzLmhhc0JsZW5kTW9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgX2NvbG9yMi5kZWZhdWx0KCgwLCBfdXRpbHMuYmxlbmRDb2xvcnMpKHRoaXMub2JqZWN0LmZpbGxzLm1hcChmdW5jdGlvbiAoZmlsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlsbC5jb2xvcjtcbiAgICAgICAgICAgICAgICB9KSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInN0eWxlXCIsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBfcnVsZVNldDIuZGVmYXVsdCgoMCwgX3V0aWxzLnNlbGVjdG9yaXplKSh0aGlzLm9iamVjdC5uYW1lKSwgdGhpcy5kZWNsYXJhdGlvbnMpO1xuICAgICAgICB9XG4gICAgfV0sIFt7XG4gICAgICAgIGtleTogXCJmaWxsVG9HcmFkaWVudFwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZmlsbFRvR3JhZGllbnQoZmlsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZpbGwudHlwZSA9PT0gXCJjb2xvclwiID8gbmV3IF9jb2xvcjIuZGVmYXVsdChmaWxsLmNvbG9yKS50b0dyYWRpZW50KCkgOiBuZXcgX2dyYWRpZW50Mi5kZWZhdWx0KGZpbGwuZ3JhZGllbnQpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIExheWVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBMYXllcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy96ZXBsaW4tZXh0ZW5zaW9uLXN0eWxlLWtpdC9lbGVtZW50cy9sYXllci5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9zY2FsYXIgPSByZXF1aXJlKFwiLi9zY2FsYXJcIik7XG5cbnZhciBfc2NhbGFyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NjYWxhcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBBbmdsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBbmdsZSh2YWx1ZSkge1xuICAgICAgICB2YXIgdW5pdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogXCJkZWdcIjtcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQW5nbGUpO1xuXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy51bml0ID0gdW5pdDtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQW5nbGUsIFt7XG4gICAgICAgIGtleTogXCJ2YWx1ZU9mXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZU9mKCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZSxcbiAgICAgICAgICAgICAgICB1bml0ID0gdGhpcy51bml0O1xuXG5cbiAgICAgICAgICAgIHJldHVybiBgYW5nbGU6OnY6JHt2YWx1ZX06dToke3VuaXR9YDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImVxdWFsc1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gb3RoZXIudmFsdWUgJiYgdGhpcy51bml0ID09PSBvdGhlci51bml0O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwidG9TdHlsZVZhbHVlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0eWxlVmFsdWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gMCA/IFwiMFwiIDogYCR7bmV3IF9zY2FsYXIyLmRlZmF1bHQodGhpcy52YWx1ZSkudG9TdHlsZVZhbHVlKCl9JHt0aGlzLnVuaXR9YDtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBBbmdsZTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQW5nbGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvdmFsdWVzL2FuZ2xlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgSFVORFJFRCA9IDEwMDtcblxudmFyIFBlcmNlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUGVyY2VudCh2YWx1ZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGVyY2VudCk7XG5cbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhQZXJjZW50LCBbe1xuICAgICAgICBrZXk6IFwidmFsdWVPZlwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWVPZigpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWU7XG5cblxuICAgICAgICAgICAgcmV0dXJuIGBwZXJjZW50Ojp2OiR7dmFsdWV9YDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImVxdWFsc1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gb3RoZXIudmFsdWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJ0b1N0eWxlVmFsdWVcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3R5bGVWYWx1ZSgpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWU7XG5cblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID4gMCA/IGAke01hdGgucm91bmQodmFsdWUgKiBIVU5EUkVEKX0lYCA6IFwiMFwiO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFBlcmNlbnQ7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFBlcmNlbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvdmFsdWVzL3BlcmNlbnQuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEJvcmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCb3JkZXIoX3JlZikge1xuICAgICAgICB2YXIgc3R5bGUgPSBfcmVmLnN0eWxlLFxuICAgICAgICAgICAgd2lkdGggPSBfcmVmLndpZHRoLFxuICAgICAgICAgICAgY29sb3IgPSBfcmVmLmNvbG9yO1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCb3JkZXIpO1xuXG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEJvcmRlciwgW3tcbiAgICAgICAga2V5OiBcImVxdWFsc1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSB0aGlzLnN0eWxlLFxuICAgICAgICAgICAgICAgIHdpZHRoID0gdGhpcy53aWR0aCxcbiAgICAgICAgICAgICAgICBjb2xvciA9IHRoaXMuY29sb3I7XG5cblxuICAgICAgICAgICAgcmV0dXJuIG90aGVyLnN0eWxlID09PSBzdHlsZSAmJiBvdGhlci53aWR0aC5lcXVhbHMod2lkdGgpICYmIG90aGVyLmNvbG9yLmVxdWFscyhjb2xvcik7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJnZXRWYWx1ZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUocGFyYW1zLCB2YXJpYWJsZXMpIHtcbiAgICAgICAgICAgIHZhciBzdHlsZSA9IHRoaXMuc3R5bGUsXG4gICAgICAgICAgICAgICAgd2lkdGggPSB0aGlzLndpZHRoLFxuICAgICAgICAgICAgICAgIGNvbG9yID0gdGhpcy5jb2xvcjtcblxuXG4gICAgICAgICAgICByZXR1cm4gYCR7c3R5bGV9ICR7d2lkdGgudG9TdHlsZVZhbHVlKHBhcmFtcyl9ICR7Y29sb3IudG9TdHlsZVZhbHVlKHBhcmFtcywgdmFyaWFibGVzKX1gO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwibmFtZVwiLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfY29uc3RhbnRzLlNUWUxFX1BST1BTLkJPUkRFUjtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBCb3JkZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEJvcmRlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy96ZXBsaW4tZXh0ZW5zaW9uLXN0eWxlLWtpdC9kZWNsYXJhdGlvbnMvYm9yZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZShcIi4uL3ZhbHVlcy9jb2xvclwiKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfbGVuZ3RoID0gcmVxdWlyZShcIi4uL3ZhbHVlcy9sZW5ndGhcIik7XG5cbnZhciBfbGVuZ3RoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xlbmd0aCk7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gY29tcGFyZVNoYWRvdyhzMSwgczIpIHtcbiAgICByZXR1cm4gczEub2Zmc2V0WCA9PT0gczIub2Zmc2V0WCAmJiBzMS5vZmZzZXRZID09PSBzMi5vZmZzZXRZICYmIHMxLmJsdXJSYWRpdXMgPT09IHMyLmJsdXJSYWRpdXMgJiYgczEuY29sb3IuZXF1YWxzKHMyLmNvbG9yKTtcbn1cblxudmFyIFNoYWRvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTaGFkb3coc2hhZG93T2JqZWN0cywgdHlwZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2hhZG93KTtcblxuICAgICAgICB0aGlzLm9iamVjdHMgPSBzaGFkb3dPYmplY3RzO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhTaGFkb3csIFt7XG4gICAgICAgIGtleTogXCJlcXVhbHNcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVxdWFscyhvdGhlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gb3RoZXIudHlwZSAmJiB0aGlzLm9iamVjdHMubGVuZ3RoID09PSBvdGhlci5vYmplY3RzLmxlbmd0aCAmJiB0aGlzLm9iamVjdHMuZXZlcnkoZnVuY3Rpb24gKHMsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmVTaGFkb3cocywgb3RoZXIub2JqZWN0c1tpbmRleF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJnZXRWYWx1ZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUocGFyYW1zLCB2YXJpYWJsZXMpIHtcbiAgICAgICAgICAgIHZhciBzaGFkb3dzID0gdGhpcy5vYmplY3RzLFxuICAgICAgICAgICAgICAgIHR5cGUgPSB0aGlzLnR5cGU7XG5cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFNoYWRvdy5UWVBFUy5URVhUKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNoYWRvd3MubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTaGFkb3cuZ2VuZXJhdGVUZXh0U2hhZG93KHMsIHBhcmFtcywgdmFyaWFibGVzKTtcbiAgICAgICAgICAgICAgICB9KS5qb2luKFwiLCBcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzaGFkb3dzLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgICAgIHJldHVybiBTaGFkb3cuZ2VuZXJhdGVCb3hTaGFkb3cocywgcGFyYW1zLCB2YXJpYWJsZXMpO1xuICAgICAgICAgICAgfSkuam9pbihcIiwgXCIpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwibmFtZVwiLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFNoYWRvdy5UWVBFUy5URVhUID8gX2NvbnN0YW50cy5TVFlMRV9QUk9QUy5URVhUX1NIQURPVyA6IF9jb25zdGFudHMuU1RZTEVfUFJPUFMuQk9YX1NIQURPVztcbiAgICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAgICBrZXk6IFwiZ2VuZXJhdGVUZXh0U2hhZG93XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZVRleHRTaGFkb3coc2hhZG93LCBfcmVmLCB2YXJpYWJsZXMpIHtcbiAgICAgICAgICAgIHZhciBkZW5zaXR5RGl2aXNvciA9IF9yZWYuZGVuc2l0eURpdmlzb3IsXG4gICAgICAgICAgICAgICAgY29sb3JGb3JtYXQgPSBfcmVmLmNvbG9yRm9ybWF0O1xuXG4gICAgICAgICAgICByZXR1cm4gYCR7bmV3IF9sZW5ndGgyLmRlZmF1bHQoc2hhZG93Lm9mZnNldFgpLnRvU3R5bGVWYWx1ZSh7IGRlbnNpdHlEaXZpc29yIH0sIHZhcmlhYmxlcyl9ICR7bmV3IF9sZW5ndGgyLmRlZmF1bHQoc2hhZG93Lm9mZnNldFkpLnRvU3R5bGVWYWx1ZSh7IGRlbnNpdHlEaXZpc29yIH0sIHZhcmlhYmxlcyl9ICR7bmV3IF9sZW5ndGgyLmRlZmF1bHQoc2hhZG93LmJsdXJSYWRpdXMpLnRvU3R5bGVWYWx1ZSh7IGRlbnNpdHlEaXZpc29yIH0sIHZhcmlhYmxlcyl9ICR7bmV3IF9jb2xvcjIuZGVmYXVsdChzaGFkb3cuY29sb3IpLnRvU3R5bGVWYWx1ZSh7IGNvbG9yRm9ybWF0IH0sIHZhcmlhYmxlcyl9YDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImdlbmVyYXRlQm94U2hhZG93XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZUJveFNoYWRvdyhzaGFkb3csIF9yZWYyLCB2YXJpYWJsZXMpIHtcbiAgICAgICAgICAgIHZhciBkZW5zaXR5RGl2aXNvciA9IF9yZWYyLmRlbnNpdHlEaXZpc29yLFxuICAgICAgICAgICAgICAgIGNvbG9yRm9ybWF0ID0gX3JlZjIuY29sb3JGb3JtYXQ7XG5cbiAgICAgICAgICAgIHJldHVybiBgJHsoc2hhZG93LnR5cGUgPT09IFwiaW5uZXJcIiA/IFwiaW5zZXQgXCIgOiBcIlwiKSArIG5ldyBfbGVuZ3RoMi5kZWZhdWx0KHNoYWRvdy5vZmZzZXRYKS50b1N0eWxlVmFsdWUoeyBkZW5zaXR5RGl2aXNvciB9LCB2YXJpYWJsZXMpfSAke25ldyBfbGVuZ3RoMi5kZWZhdWx0KHNoYWRvdy5vZmZzZXRZKS50b1N0eWxlVmFsdWUoeyBkZW5zaXR5RGl2aXNvciB9LCB2YXJpYWJsZXMpfSAke25ldyBfbGVuZ3RoMi5kZWZhdWx0KHNoYWRvdy5ibHVyUmFkaXVzKS50b1N0eWxlVmFsdWUoeyBkZW5zaXR5RGl2aXNvciB9LCB2YXJpYWJsZXMpfSAke25ldyBfbGVuZ3RoMi5kZWZhdWx0KHNoYWRvdy5zcHJlYWQpLnRvU3R5bGVWYWx1ZSh7IGRlbnNpdHlEaXZpc29yIH0sIHZhcmlhYmxlcyl9ICR7bmV3IF9jb2xvcjIuZGVmYXVsdChzaGFkb3cuY29sb3IpLnRvU3R5bGVWYWx1ZSh7IGNvbG9yRm9ybWF0IH0sIHZhcmlhYmxlcyl9YDtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTaGFkb3c7XG59KCk7XG5cblNoYWRvdy5UWVBFUyA9IE9iamVjdC5mcmVlemUoe1xuICAgIFRFWFQ6IFwidGV4dFwiLFxuICAgIEJPWDogXCJib3hcIlxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFNoYWRvdztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy96ZXBsaW4tZXh0ZW5zaW9uLXN0eWxlLWtpdC9kZWNsYXJhdGlvbnMvc2hhZG93LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBPcGFjaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE9wYWNpdHkodmFsdWUpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE9wYWNpdHkpO1xuXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoT3BhY2l0eSwgW3tcbiAgICAgICAga2V5OiBcImVxdWFsc1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5lcXVhbHMob3RoZXIudmFsdWUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiZ2V0VmFsdWVcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlKHBhcmFtcywgdmFyaWFibGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS50b1N0eWxlVmFsdWUocGFyYW1zLCB2YXJpYWJsZXMpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwibmFtZVwiLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfY29uc3RhbnRzLlNUWUxFX1BST1BTLk9QQUNJVFk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gT3BhY2l0eTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gT3BhY2l0eTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy96ZXBsaW4tZXh0ZW5zaW9uLXN0eWxlLWtpdC9kZWNsYXJhdGlvbnMvb3BhY2l0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgV2lkdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gV2lkdGgobGVuZ3RoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXaWR0aCk7XG5cbiAgICAgICAgdGhpcy52YWx1ZSA9IGxlbmd0aDtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoV2lkdGgsIFt7XG4gICAgICAgIGtleTogXCJlcXVhbHNcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVxdWFscyhvdGhlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUuZXF1YWxzKG90aGVyLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImdldFZhbHVlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZShwYXJhbXMsIHZhcmlhYmxlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUudG9TdHlsZVZhbHVlKHBhcmFtcywgdmFyaWFibGVzKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcIm5hbWVcIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnN0YW50cy5TVFlMRV9QUk9QUy5XSURUSDtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBXaWR0aDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gV2lkdGg7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvZGVjbGFyYXRpb25zL3dpZHRoLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSGVpZ2h0KGxlbmd0aCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSGVpZ2h0KTtcblxuICAgICAgICB0aGlzLnZhbHVlID0gbGVuZ3RoO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhIZWlnaHQsIFt7XG4gICAgICAgIGtleTogXCJlcXVhbHNcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVxdWFscyhvdGhlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUuZXF1YWxzKG90aGVyLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImdldFZhbHVlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZShwYXJhbXMsIHZhcmlhYmxlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUudG9TdHlsZVZhbHVlKHBhcmFtcywgdmFyaWFibGVzKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcIm5hbWVcIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnN0YW50cy5TVFlMRV9QUk9QUy5IRUlHSFQ7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gSGVpZ2h0O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBIZWlnaHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvZGVjbGFyYXRpb25zL2hlaWdodC5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgT2JqZWN0Rml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE9iamVjdEZpdCh2YWx1ZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgT2JqZWN0Rml0KTtcblxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE9iamVjdEZpdCwgW3tcbiAgICAgICAga2V5OiBcImVxdWFsc1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gb3RoZXIudmFsdWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJnZXRWYWx1ZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcIm5hbWVcIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnN0YW50cy5TVFlMRV9QUk9QUy5PQkpFQ1RfRklUO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE9iamVjdEZpdDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gT2JqZWN0Rml0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3plcGxpbi1leHRlbnNpb24tc3R5bGUta2l0L2RlY2xhcmF0aW9ucy9vYmplY3RGaXQuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFRyYW5zZm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmFuc2Zvcm0odHJhbnNmb3Jtcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhbnNmb3JtKTtcblxuICAgICAgICB0aGlzLnRyYW5zZm9ybXMgPSB0cmFuc2Zvcm1zO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhUcmFuc2Zvcm0sIFt7XG4gICAgICAgIGtleTogXCJlcXVhbHNcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVxdWFscyhvdGhlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3Jtcy5sZW5ndGggPT09IG90aGVyLnRyYW5zZm9ybXMubGVuZ3RoICYmIHRoaXMudHJhbnNmb3Jtcy5ldmVyeShmdW5jdGlvbiAoZm4sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIGYgPSBvdGhlci50cmFuc2Zvcm1zW2luZGV4XTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBmLmFyZ3MubGVuZ3RoID09PSBmbi5hcmdzLmxlbmd0aCAmJiBmbi5hcmdzLmV2ZXJ5KGZ1bmN0aW9uIChhLCBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuZXF1YWxzKGYuYXJnc1tpZHhdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiZ2V0VmFsdWVcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlKHBhcmFtcywgdmFyaWFibGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1zLm1hcChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgICAgICAgIHZhciBmbiA9IF9yZWYuZm4sXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MgPSBfcmVmLmFyZ3M7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2ZufSgke2FyZ3MubWFwKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyZy50b1N0eWxlVmFsdWUocGFyYW1zLCB2YXJpYWJsZXMpO1xuICAgICAgICAgICAgICAgIH0pLmpvaW4oXCIgXCIpfSlgO1xuICAgICAgICAgICAgfSkuam9pbihcIiBcIik7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJuYW1lXCIsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jb25zdGFudHMuU1RZTEVfUFJPUFMuVFJBTlNGT1JNO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRyYW5zZm9ybTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVHJhbnNmb3JtO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3plcGxpbi1leHRlbnNpb24tc3R5bGUta2l0L2RlY2xhcmF0aW9ucy90cmFuc2Zvcm0uanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIE1peEJsZW5kTW9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNaXhCbGVuZE1vZGUodmFsdWUpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1peEJsZW5kTW9kZSk7XG5cbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhNaXhCbGVuZE1vZGUsIFt7XG4gICAgICAgIGtleTogXCJlcXVhbHNcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVxdWFscyhvdGhlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IG90aGVyLnZhbHVlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiZ2V0VmFsdWVcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJuYW1lXCIsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jb25zdGFudHMuU1RZTEVfUFJPUFMuQkxFTkRfTU9ERTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNaXhCbGVuZE1vZGU7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1peEJsZW5kTW9kZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy96ZXBsaW4tZXh0ZW5zaW9uLXN0eWxlLWtpdC9kZWNsYXJhdGlvbnMvbWl4QmxlbmRNb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBCb3JkZXJSYWRpdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQm9yZGVyUmFkaXVzKGxlbmd0aCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQm9yZGVyUmFkaXVzKTtcblxuICAgICAgICB0aGlzLnZhbHVlID0gbGVuZ3RoO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhCb3JkZXJSYWRpdXMsIFt7XG4gICAgICAgIGtleTogXCJlcXVhbHNcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVxdWFscyhvdGhlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUuZXF1YWxzKG90aGVyLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImdldFZhbHVlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZShwYXJhbXMsIHZhcmlhYmxlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUudG9TdHlsZVZhbHVlKHBhcmFtcywgdmFyaWFibGVzKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcIm5hbWVcIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnN0YW50cy5TVFlMRV9QUk9QUy5CT1JERVJfUkFESVVTO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEJvcmRlclJhZGl1cztcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQm9yZGVyUmFkaXVzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3plcGxpbi1leHRlbnNpb24tc3R5bGUta2l0L2RlY2xhcmF0aW9ucy9ib3JkZXJSYWRpdXMuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEJnQmxlbmRNb2RlID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJnQmxlbmRNb2RlKHZhbHVlcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQmdCbGVuZE1vZGUpO1xuXG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhCZ0JsZW5kTW9kZSwgW3tcbiAgICAgICAga2V5OiBcImVxdWFsc1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMuam9pbihcIiwgXCIpID09PSBvdGhlci52YWx1ZXMuam9pbihcIiwgXCIpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiZ2V0VmFsdWVcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLmpvaW4oXCIsIFwiKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcIm5hbWVcIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnN0YW50cy5TVFlMRV9QUk9QUy5CQUNLR1JPVU5EX0JMRU5EX01PREU7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQmdCbGVuZE1vZGU7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEJnQmxlbmRNb2RlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3plcGxpbi1leHRlbnNpb24tc3R5bGUta2l0L2RlY2xhcmF0aW9ucy9iZ0JsZW5kTW9kZS5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQmdJbWFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCZ0ltYWdlKGltYWdlcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQmdJbWFnZSk7XG5cbiAgICAgICAgdGhpcy5pbWFnZXMgPSBpbWFnZXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEJnSW1hZ2UsIFt7XG4gICAgICAgIGtleTogXCJlcXVhbHNcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVxdWFscyhvdGhlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VzLmxlbmd0aCA9PT0gb3RoZXIuaW1hZ2VzLmxlbmd0aCAmJiB0aGlzLmltYWdlcy5ldmVyeShmdW5jdGlvbiAoaW1nLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbWcuZXF1YWxzKG90aGVyLmltYWdlc1tpbmRleF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJnZXRWYWx1ZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUocGFyYW1zLCB2YXJpYWJsZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmltYWdlcy5tYXAoZnVuY3Rpb24gKGltZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbWcudG9TdHlsZVZhbHVlKHBhcmFtcywgdmFyaWFibGVzKTtcbiAgICAgICAgICAgIH0pLmpvaW4oXCIsIFwiKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcIm5hbWVcIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnN0YW50cy5TVFlMRV9QUk9QUy5CQUNLR1JPVU5EX0lNQUdFO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEJnSW1hZ2U7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEJnSW1hZ2U7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvZGVjbGFyYXRpb25zL2JnSW1hZ2UuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEJnQ29sb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmdDb2xvcihjb2xvcikge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQmdDb2xvcik7XG5cbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhCZ0NvbG9yLCBbe1xuICAgICAgICBrZXk6IFwiZXF1YWxzXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlcXVhbHMob3RoZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yLmVxdWFscyhvdGhlci5jb2xvcik7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJnZXRWYWx1ZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUocGFyYW1zLCB2YXJpYWJsZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yLnRvU3R5bGVWYWx1ZShwYXJhbXMsIHZhcmlhYmxlcyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJuYW1lXCIsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jb25zdGFudHMuU1RZTEVfUFJPUFMuQkFDS0dST1VORF9DT0xPUjtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBCZ0NvbG9yO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBCZ0NvbG9yO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3plcGxpbi1leHRlbnNpb24tc3R5bGUta2l0L2RlY2xhcmF0aW9ucy9iZ0NvbG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBCZ0NsaXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmdDbGlwKHZhbHVlcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQmdDbGlwKTtcblxuICAgICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQmdDbGlwLCBbe1xuICAgICAgICBrZXk6IFwiZXF1YWxzXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlcXVhbHMob3RoZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5qb2luKFwiLCBcIikgPT09IG90aGVyLnZhbHVlcy5qb2luKFwiLCBcIik7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJnZXRWYWx1ZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMuam9pbihcIiwgXCIpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwibmFtZVwiLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfY29uc3RhbnRzLlNUWUxFX1BST1BTLkJBQ0tHUk9VTkRfQ0xJUDtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBCZ0NsaXA7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEJnQ2xpcDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy96ZXBsaW4tZXh0ZW5zaW9uLXN0eWxlLWtpdC9kZWNsYXJhdGlvbnMvYmdDbGlwLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBUZXh0RmlsbENvbG9yID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRleHRGaWxsQ29sb3IodmFsdWUpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRleHRGaWxsQ29sb3IpO1xuXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoVGV4dEZpbGxDb2xvciwgW3tcbiAgICAgICAga2V5OiBcImVxdWFsc1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gb3RoZXIudmFsdWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJnZXRWYWx1ZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcIm5hbWVcIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnN0YW50cy5TVFlMRV9QUk9QUy5URVhUX0ZJTExfQ09MT1I7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVGV4dEZpbGxDb2xvcjtcbn0oKTtcblxudmFyIHdlYktpdFRleHRGaWxsQ29sb3IgPSAoMCwgX3V0aWxzLndlYmtpdCkoVGV4dEZpbGxDb2xvcik7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHdlYktpdFRleHRGaWxsQ29sb3I7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvZGVjbGFyYXRpb25zL3RleHRGaWxsQ29sb3IuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qISBodHRwczovL210aHMuYmUvY3NzZXNjYXBlIHYxLjUuMSBieSBAbWF0aGlhcyB8IE1JVCBsaWNlbnNlICovXG47KGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3VtZGpzL3VtZC9ibG9iL21hc3Rlci9yZXR1cm5FeHBvcnRzLmpzXG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0Jykge1xuXHRcdC8vIEZvciBOb2RlLmpzLlxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyb290KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEZvciBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5LmJpbmQocm9vdCwgcm9vdCkpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIEZvciBicm93c2VyIGdsb2JhbHMgKG5vdCBleHBvc2luZyB0aGUgZnVuY3Rpb24gc2VwYXJhdGVseSkuXG5cdFx0ZmFjdG9yeShyb290KTtcblx0fVxufSh0eXBlb2YgZ2xvYmFsICE9ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdGhpcywgZnVuY3Rpb24ocm9vdCkge1xuXG5cdGlmIChyb290LkNTUyAmJiByb290LkNTUy5lc2NhcGUpIHtcblx0XHRyZXR1cm4gcm9vdC5DU1MuZXNjYXBlO1xuXHR9XG5cblx0Ly8gaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzc29tLyNzZXJpYWxpemUtYW4taWRlbnRpZmllclxuXHR2YXIgY3NzRXNjYXBlID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdgQ1NTLmVzY2FwZWAgcmVxdWlyZXMgYW4gYXJndW1lbnQuJyk7XG5cdFx0fVxuXHRcdHZhciBzdHJpbmcgPSBTdHJpbmcodmFsdWUpO1xuXHRcdHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xuXHRcdHZhciBpbmRleCA9IC0xO1xuXHRcdHZhciBjb2RlVW5pdDtcblx0XHR2YXIgcmVzdWx0ID0gJyc7XG5cdFx0dmFyIGZpcnN0Q29kZVVuaXQgPSBzdHJpbmcuY2hhckNvZGVBdCgwKTtcblx0XHR3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuXHRcdFx0Y29kZVVuaXQgPSBzdHJpbmcuY2hhckNvZGVBdChpbmRleCk7XG5cdFx0XHQvLyBOb3RlOiB0aGVyZeKAmXMgbm8gbmVlZCB0byBzcGVjaWFsLWNhc2UgYXN0cmFsIHN5bWJvbHMsIHN1cnJvZ2F0ZVxuXHRcdFx0Ly8gcGFpcnMsIG9yIGxvbmUgc3Vycm9nYXRlcy5cblxuXHRcdFx0Ly8gSWYgdGhlIGNoYXJhY3RlciBpcyBOVUxMIChVKzAwMDApLCB0aGVuIHRoZSBSRVBMQUNFTUVOVCBDSEFSQUNURVJcblx0XHRcdC8vIChVK0ZGRkQpLlxuXHRcdFx0aWYgKGNvZGVVbml0ID09IDB4MDAwMCkge1xuXHRcdFx0XHRyZXN1bHQgKz0gJ1xcdUZGRkQnO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKFxuXHRcdFx0XHQvLyBJZiB0aGUgY2hhcmFjdGVyIGlzIGluIHRoZSByYW5nZSBbXFwxLVxcMUZdIChVKzAwMDEgdG8gVSswMDFGKSBvciBpc1xuXHRcdFx0XHQvLyBVKzAwN0YsIFvigKZdXG5cdFx0XHRcdChjb2RlVW5pdCA+PSAweDAwMDEgJiYgY29kZVVuaXQgPD0gMHgwMDFGKSB8fCBjb2RlVW5pdCA9PSAweDAwN0YgfHxcblx0XHRcdFx0Ly8gSWYgdGhlIGNoYXJhY3RlciBpcyB0aGUgZmlyc3QgY2hhcmFjdGVyIGFuZCBpcyBpbiB0aGUgcmFuZ2UgWzAtOV1cblx0XHRcdFx0Ly8gKFUrMDAzMCB0byBVKzAwMzkpLCBb4oCmXVxuXHRcdFx0XHQoaW5kZXggPT0gMCAmJiBjb2RlVW5pdCA+PSAweDAwMzAgJiYgY29kZVVuaXQgPD0gMHgwMDM5KSB8fFxuXHRcdFx0XHQvLyBJZiB0aGUgY2hhcmFjdGVyIGlzIHRoZSBzZWNvbmQgY2hhcmFjdGVyIGFuZCBpcyBpbiB0aGUgcmFuZ2UgWzAtOV1cblx0XHRcdFx0Ly8gKFUrMDAzMCB0byBVKzAwMzkpIGFuZCB0aGUgZmlyc3QgY2hhcmFjdGVyIGlzIGEgYC1gIChVKzAwMkQpLCBb4oCmXVxuXHRcdFx0XHQoXG5cdFx0XHRcdFx0aW5kZXggPT0gMSAmJlxuXHRcdFx0XHRcdGNvZGVVbml0ID49IDB4MDAzMCAmJiBjb2RlVW5pdCA8PSAweDAwMzkgJiZcblx0XHRcdFx0XHRmaXJzdENvZGVVbml0ID09IDB4MDAyRFxuXHRcdFx0XHQpXG5cdFx0XHQpIHtcblx0XHRcdFx0Ly8gaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzc29tLyNlc2NhcGUtYS1jaGFyYWN0ZXItYXMtY29kZS1wb2ludFxuXHRcdFx0XHRyZXN1bHQgKz0gJ1xcXFwnICsgY29kZVVuaXQudG9TdHJpbmcoMTYpICsgJyAnO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKFxuXHRcdFx0XHQvLyBJZiB0aGUgY2hhcmFjdGVyIGlzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgYW5kIGlzIGEgYC1gIChVKzAwMkQpLCBhbmRcblx0XHRcdFx0Ly8gdGhlcmUgaXMgbm8gc2Vjb25kIGNoYXJhY3RlciwgW+KApl1cblx0XHRcdFx0aW5kZXggPT0gMCAmJlxuXHRcdFx0XHRsZW5ndGggPT0gMSAmJlxuXHRcdFx0XHRjb2RlVW5pdCA9PSAweDAwMkRcblx0XHRcdCkge1xuXHRcdFx0XHRyZXN1bHQgKz0gJ1xcXFwnICsgc3RyaW5nLmNoYXJBdChpbmRleCk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGUgY2hhcmFjdGVyIGlzIG5vdCBoYW5kbGVkIGJ5IG9uZSBvZiB0aGUgYWJvdmUgcnVsZXMgYW5kIGlzXG5cdFx0XHQvLyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gVSswMDgwLCBpcyBgLWAgKFUrMDAyRCkgb3IgYF9gIChVKzAwNUYpLCBvclxuXHRcdFx0Ly8gaXMgaW4gb25lIG9mIHRoZSByYW5nZXMgWzAtOV0gKFUrMDAzMCB0byBVKzAwMzkpLCBbQS1aXSAoVSswMDQxIHRvXG5cdFx0XHQvLyBVKzAwNUEpLCBvciBbYS16XSAoVSswMDYxIHRvIFUrMDA3QSksIFvigKZdXG5cdFx0XHRpZiAoXG5cdFx0XHRcdGNvZGVVbml0ID49IDB4MDA4MCB8fFxuXHRcdFx0XHRjb2RlVW5pdCA9PSAweDAwMkQgfHxcblx0XHRcdFx0Y29kZVVuaXQgPT0gMHgwMDVGIHx8XG5cdFx0XHRcdGNvZGVVbml0ID49IDB4MDAzMCAmJiBjb2RlVW5pdCA8PSAweDAwMzkgfHxcblx0XHRcdFx0Y29kZVVuaXQgPj0gMHgwMDQxICYmIGNvZGVVbml0IDw9IDB4MDA1QSB8fFxuXHRcdFx0XHRjb2RlVW5pdCA+PSAweDAwNjEgJiYgY29kZVVuaXQgPD0gMHgwMDdBXG5cdFx0XHQpIHtcblx0XHRcdFx0Ly8gdGhlIGNoYXJhY3RlciBpdHNlbGZcblx0XHRcdFx0cmVzdWx0ICs9IHN0cmluZy5jaGFyQXQoaW5kZXgpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gT3RoZXJ3aXNlLCB0aGUgZXNjYXBlZCBjaGFyYWN0ZXIuXG5cdFx0XHQvLyBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3Nzb20vI2VzY2FwZS1hLWNoYXJhY3RlclxuXHRcdFx0cmVzdWx0ICs9ICdcXFxcJyArIHN0cmluZy5jaGFyQXQoaW5kZXgpO1xuXG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cblx0aWYgKCFyb290LkNTUykge1xuXHRcdHJvb3QuQ1NTID0ge307XG5cdH1cblxuXHRyb290LkNTUy5lc2NhcGUgPSBjc3NFc2NhcGU7XG5cdHJldHVybiBjc3NFc2NhcGU7XG5cbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy5lc2NhcGUvY3NzLmVzY2FwZS5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBUZXh0U3Ryb2tlID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRleHRTdHJva2UobGVuZ3RoLCBjb2xvcikge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGV4dFN0cm9rZSk7XG5cbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoVGV4dFN0cm9rZSwgW3tcbiAgICAgICAga2V5OiBcImVxdWFsc1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGguZXF1YWxzKG90aGVyLmxlbmd0aCkgJiYgdGhpcy5jb2xvci5lcXVhbHMob3RoZXIuY29sb3IpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiZ2V0VmFsdWVcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlKHBhcmFtcywgdmFyaWFibGVzKSB7XG4gICAgICAgICAgICB2YXIgY29sb3IgPSB0aGlzLmNvbG9yLFxuICAgICAgICAgICAgICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuXG5cbiAgICAgICAgICAgIHJldHVybiBgJHtsZW5ndGgudG9TdHlsZVZhbHVlKHBhcmFtcywgdmFyaWFibGVzKX0gJHtjb2xvci50b1N0eWxlVmFsdWUocGFyYW1zLCB2YXJpYWJsZXMpfWA7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJuYW1lXCIsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jb25zdGFudHMuU1RZTEVfUFJPUFMuVEVYVF9TVFJPS0U7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVGV4dFN0cm9rZTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGV4dFN0cm9rZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy96ZXBsaW4tZXh0ZW5zaW9uLXN0eWxlLWtpdC9kZWNsYXJhdGlvbnMvdGV4dFN0cm9rZS5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQm9yZGVySW1hZ2VTb3VyY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQm9yZGVySW1hZ2VTb3VyY2Uoc291cmNlKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCb3JkZXJJbWFnZVNvdXJjZSk7XG5cbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEJvcmRlckltYWdlU291cmNlLCBbe1xuICAgICAgICBrZXk6IFwiZXF1YWxzXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlcXVhbHMob3RoZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5lcXVhbHMob3RoZXIuc291cmNlKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImdldFZhbHVlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZShwYXJhbXMsIHZhcmlhYmxlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnRvU3R5bGVWYWx1ZShwYXJhbXMsIHZhcmlhYmxlcyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJuYW1lXCIsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jb25zdGFudHMuU1RZTEVfUFJPUFMuQk9SREVSX0lNQUdFX1NPVVJDRTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBCb3JkZXJJbWFnZVNvdXJjZTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQm9yZGVySW1hZ2VTb3VyY2U7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvZGVjbGFyYXRpb25zL2JvcmRlckltYWdlU291cmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBCb3JkZXJXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCb3JkZXJXaWR0aCh3aWR0aCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQm9yZGVyV2lkdGgpO1xuXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQm9yZGVyV2lkdGgsIFt7XG4gICAgICAgIGtleTogXCJlcXVhbHNcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVxdWFscyhvdGhlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2lkdGguZXF1YWxzKG90aGVyLndpZHRoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImdldFZhbHVlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZShwYXJhbXMsIHZhcmlhYmxlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2lkdGgudG9TdHlsZVZhbHVlKHBhcmFtcywgdmFyaWFibGVzKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcIm5hbWVcIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnN0YW50cy5TVFlMRV9QUk9QUy5CT1JERVJfV0lEVEg7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQm9yZGVyV2lkdGg7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEJvcmRlcldpZHRoO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3plcGxpbi1leHRlbnNpb24tc3R5bGUta2l0L2RlY2xhcmF0aW9ucy9ib3JkZXJXaWR0aC5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQm9yZGVyU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQm9yZGVyU3R5bGUodmFsdWUpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJvcmRlclN0eWxlKTtcblxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEJvcmRlclN0eWxlLCBbe1xuICAgICAgICBrZXk6IFwiZXF1YWxzXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlcXVhbHMob3RoZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlID09PSBvdGhlci52YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImdldFZhbHVlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwibmFtZVwiLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfY29uc3RhbnRzLlNUWUxFX1BST1BTLkJPUkRFUl9TVFlMRTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBCb3JkZXJTdHlsZTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQm9yZGVyU3R5bGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvZGVjbGFyYXRpb25zL2JvcmRlclN0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBCb3JkZXJJbWFnZVNsaWNlID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJvcmRlckltYWdlU2xpY2UodmFsdWUpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJvcmRlckltYWdlU2xpY2UpO1xuXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQm9yZGVySW1hZ2VTbGljZSwgW3tcbiAgICAgICAga2V5OiBcImVxdWFsc1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5lcXVhbHMob3RoZXIudmFsdWUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiZ2V0VmFsdWVcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlKHBhcmFtcywgdmFyaWFibGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS50b1N0eWxlVmFsdWUocGFyYW1zLCB2YXJpYWJsZXMpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwibmFtZVwiLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfY29uc3RhbnRzLlNUWUxFX1BST1BTLkJPUkRFUl9JTUFHRV9TTElDRTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBCb3JkZXJJbWFnZVNsaWNlO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBCb3JkZXJJbWFnZVNsaWNlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3plcGxpbi1leHRlbnNpb24tc3R5bGUta2l0L2RlY2xhcmF0aW9ucy9ib3JkZXJJbWFnZVNsaWNlLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBCYWNrZHJvcEZpbHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCYWNrZHJvcEZpbHRlcihmaWx0ZXJzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCYWNrZHJvcEZpbHRlcik7XG5cbiAgICAgICAgdGhpcy5maWx0ZXJzID0gZmlsdGVycztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQmFja2Ryb3BGaWx0ZXIsIFt7XG4gICAgICAgIGtleTogXCJlcXVhbHNcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVxdWFscyhvdGhlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVycy5sZW5ndGggPT09IG90aGVyLmZpbHRlcnMubGVuZ3RoICYmIHRoaXMuZmlsdGVycy5ldmVyeShmdW5jdGlvbiAoZmlsdGVyLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBmID0gb3RoZXIuZmlsdGVyc1tpbmRleF07XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZi5hcmdzLmxlbmd0aCA9PT0gZmlsdGVyLmFyZ3MubGVuZ3RoICYmIGZpbHRlci5hcmdzLmV2ZXJ5KGZ1bmN0aW9uIChhLCBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuZXF1YWxzKGYuYXJnc1tpZHhdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiZ2V0VmFsdWVcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlKHBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVycy5tYXAoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgICAgICB2YXIgZm4gPSBfcmVmLmZuLFxuICAgICAgICAgICAgICAgICAgICBhcmdzID0gX3JlZi5hcmdzO1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtmbn0oJHthcmdzLm1hcChmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcmcudG9TdHlsZVZhbHVlKHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfSkuam9pbihcIiBcIil9KWA7XG4gICAgICAgICAgICB9KS5qb2luKFwiIFwiKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcIm5hbWVcIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnN0YW50cy5TVFlMRV9QUk9QUy5CQUNLRFJPUF9GSUxURVI7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQmFja2Ryb3BGaWx0ZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEJhY2tkcm9wRmlsdGVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3plcGxpbi1leHRlbnNpb24tc3R5bGUta2l0L2RlY2xhcmF0aW9ucy9iYWNrZHJvcEZpbHRlci5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgRmlsdGVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZpbHRlcihmaWx0ZXJzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGaWx0ZXIpO1xuXG4gICAgICAgIHRoaXMuZmlsdGVycyA9IGZpbHRlcnM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEZpbHRlciwgW3tcbiAgICAgICAga2V5OiBcImVxdWFsc1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJzLmxlbmd0aCA9PT0gb3RoZXIuZmlsdGVycy5sZW5ndGggJiYgdGhpcy5maWx0ZXJzLmV2ZXJ5KGZ1bmN0aW9uIChmaWx0ZXIsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIGYgPSBvdGhlci5maWx0ZXJzW2luZGV4XTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBmLmFyZ3MubGVuZ3RoID09PSBmaWx0ZXIuYXJncy5sZW5ndGggJiYgZmlsdGVyLmFyZ3MuZXZlcnkoZnVuY3Rpb24gKGEsIGlkeCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5lcXVhbHMoZi5hcmdzW2lkeF0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJnZXRWYWx1ZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUocGFyYW1zLCB2YXJpYWJsZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbHRlcnMubWFwKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZuID0gX3JlZi5mbixcbiAgICAgICAgICAgICAgICAgICAgYXJncyA9IF9yZWYuYXJncztcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7Zm59KCR7YXJncy5tYXAoZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJnLnRvU3R5bGVWYWx1ZShwYXJhbXMsIHZhcmlhYmxlcyk7XG4gICAgICAgICAgICAgICAgfSkuam9pbihcIiBcIil9KWA7XG4gICAgICAgICAgICB9KS5qb2luKFwiIFwiKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcIm5hbWVcIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnN0YW50cy5TVFlMRV9QUk9QUy5GSUxURVI7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRmlsdGVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGaWx0ZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvZGVjbGFyYXRpb25zL2ZpbHRlci5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9sZW5ndGggPSByZXF1aXJlKFwiLi4vdmFsdWVzL2xlbmd0aFwiKTtcblxudmFyIF9sZW5ndGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGVuZ3RoKTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoXCIuLi92YWx1ZXMvY29sb3JcIik7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX2ZvbnRGYW1pbHkgPSByZXF1aXJlKFwiLi4vZGVjbGFyYXRpb25zL2ZvbnRGYW1pbHlcIik7XG5cbnZhciBfZm9udEZhbWlseTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mb250RmFtaWx5KTtcblxudmFyIF9mb250U2l6ZSA9IHJlcXVpcmUoXCIuLi9kZWNsYXJhdGlvbnMvZm9udFNpemVcIik7XG5cbnZhciBfZm9udFNpemUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZm9udFNpemUpO1xuXG52YXIgX2ZvbnRTdHlsZSA9IHJlcXVpcmUoXCIuLi9kZWNsYXJhdGlvbnMvZm9udFN0eWxlXCIpO1xuXG52YXIgX2ZvbnRTdHlsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mb250U3R5bGUpO1xuXG52YXIgX2ZvbnRTdHJldGNoID0gcmVxdWlyZShcIi4uL2RlY2xhcmF0aW9ucy9mb250U3RyZXRjaFwiKTtcblxudmFyIF9mb250U3RyZXRjaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mb250U3RyZXRjaCk7XG5cbnZhciBfZm9udFdlaWdodCA9IHJlcXVpcmUoXCIuLi9kZWNsYXJhdGlvbnMvZm9udFdlaWdodFwiKTtcblxudmFyIF9mb250V2VpZ2h0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZvbnRXZWlnaHQpO1xuXG52YXIgX2ZvbnRDb2xvciA9IHJlcXVpcmUoXCIuLi9kZWNsYXJhdGlvbnMvZm9udENvbG9yXCIpO1xuXG52YXIgX2ZvbnRDb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mb250Q29sb3IpO1xuXG52YXIgX3RleHRBbGlnbiA9IHJlcXVpcmUoXCIuLi9kZWNsYXJhdGlvbnMvdGV4dEFsaWduXCIpO1xuXG52YXIgX3RleHRBbGlnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90ZXh0QWxpZ24pO1xuXG52YXIgX2xpbmVIZWlnaHQgPSByZXF1aXJlKFwiLi4vZGVjbGFyYXRpb25zL2xpbmVIZWlnaHRcIik7XG5cbnZhciBfbGluZUhlaWdodDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lSGVpZ2h0KTtcblxudmFyIF9sZXR0ZXJTcGFjaW5nID0gcmVxdWlyZShcIi4uL2RlY2xhcmF0aW9ucy9sZXR0ZXJTcGFjaW5nXCIpO1xuXG52YXIgX2xldHRlclNwYWNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGV0dGVyU3BhY2luZyk7XG5cbnZhciBfcnVsZVNldCA9IHJlcXVpcmUoXCIuLi9ydWxlU2V0XCIpO1xuXG52YXIgX3J1bGVTZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcnVsZVNldCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBUZXh0U3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGV4dFN0eWxlKHRleHRTdHlsZU9iamVjdCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGV4dFN0eWxlKTtcblxuICAgICAgICB0aGlzLmZvbnQgPSB0ZXh0U3R5bGVPYmplY3Q7XG5cbiAgICAgICAgdGhpcy5kZWNsYXJhdGlvbnMgPSB0aGlzLmNvbGxlY3REZWNsYXJhdGlvbnMoKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoVGV4dFN0eWxlLCBbe1xuICAgICAgICBrZXk6IFwiY29sbGVjdERlY2xhcmF0aW9uc1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29sbGVjdERlY2xhcmF0aW9ucygpIHtcbiAgICAgICAgICAgIHZhciBmb250ID0gdGhpcy5mb250O1xuXG4gICAgICAgICAgICB2YXIgZGVjbGFyYXRpb25zID0gW25ldyBfZm9udEZhbWlseTIuZGVmYXVsdChmb250LmZvbnRGYW1pbHkpLCBuZXcgX2ZvbnRTaXplMi5kZWZhdWx0KG5ldyBfbGVuZ3RoMi5kZWZhdWx0KGZvbnQuZm9udFNpemUpKV07XG5cbiAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5wdXNoKG5ldyBfZm9udFdlaWdodDIuZGVmYXVsdChmb250LmZvbnRXZWlnaHQgfHwgX2ZvbnRXZWlnaHQyLmRlZmF1bHQuREVGQVVMVF9WQUxVRSkpO1xuICAgICAgICAgICAgZGVjbGFyYXRpb25zLnB1c2gobmV3IF9mb250U3R5bGUyLmRlZmF1bHQoZm9udC5mb250U3R5bGUgfHwgX2ZvbnRTdHlsZTIuZGVmYXVsdC5ERUZBVUxUX1ZBTFVFKSk7XG4gICAgICAgICAgICBkZWNsYXJhdGlvbnMucHVzaChuZXcgX2ZvbnRTdHJldGNoMi5kZWZhdWx0KGZvbnQuZm9udFN0cmV0Y2ggfHwgX2ZvbnRTdHJldGNoMi5kZWZhdWx0LkRFRkFVTFRfVkFMVUUpKTtcbiAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5wdXNoKG5ldyBfbGluZUhlaWdodDIuZGVmYXVsdChmb250LmxpbmVIZWlnaHQgfHwgX2xpbmVIZWlnaHQyLmRlZmF1bHQuREVGQVVMVF9WQUxVRSwgZm9udC5mb250U2l6ZSkpO1xuICAgICAgICAgICAgZGVjbGFyYXRpb25zLnB1c2gobmV3IF9sZXR0ZXJTcGFjaW5nMi5kZWZhdWx0KGZvbnQubGV0dGVyU3BhY2luZyA/IG5ldyBfbGVuZ3RoMi5kZWZhdWx0KGZvbnQubGV0dGVyU3BhY2luZykgOiBfbGV0dGVyU3BhY2luZzIuZGVmYXVsdC5ERUZBVUxUX1ZBTFVFKSk7XG5cbiAgICAgICAgICAgIGlmIChcInRleHRBbGlnblwiIGluIGZvbnQgJiYgZm9udC50ZXh0QWxpZ24pIHtcbiAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMucHVzaChuZXcgX3RleHRBbGlnbjIuZGVmYXVsdChmb250LnRleHRBbGlnbikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXCJjb2xvclwiIGluIGZvbnQpIHtcbiAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMucHVzaChuZXcgX2ZvbnRDb2xvcjIuZGVmYXVsdChuZXcgX2NvbG9yMi5kZWZhdWx0KGZvbnQuY29sb3IpKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkZWNsYXJhdGlvbnM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJzdHlsZVwiLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgX3J1bGVTZXQyLmRlZmF1bHQoKDAsIF91dGlscy5zZWxlY3Rvcml6ZSkodGhpcy5mb250Lm5hbWUpLCB0aGlzLmRlY2xhcmF0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVGV4dFN0eWxlO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUZXh0U3R5bGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvZWxlbWVudHMvdGV4dFN0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBGb250RmFtaWx5ID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZvbnRGYW1pbHkodmFsdWUpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZvbnRGYW1pbHkpO1xuXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRm9udEZhbWlseSwgW3tcbiAgICAgICAga2V5OiBcImVxdWFsc1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gb3RoZXIudmFsdWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJnZXRWYWx1ZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcIm5hbWVcIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnN0YW50cy5TVFlMRV9QUk9QUy5GT05UX0ZBTUlMWTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBGb250RmFtaWx5O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGb250RmFtaWx5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3plcGxpbi1leHRlbnNpb24tc3R5bGUta2l0L2RlY2xhcmF0aW9ucy9mb250RmFtaWx5LmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBGb250U2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGb250U2l6ZSh2YWx1ZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRm9udFNpemUpO1xuXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRm9udFNpemUsIFt7XG4gICAgICAgIGtleTogXCJoYXNEZWZhdWx0VmFsdWVcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhc0RlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlID09PSBGb250U2l6ZS5ERUZBVUxUX1ZBTFVFO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiZXF1YWxzXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlcXVhbHMob3RoZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlLmVxdWFscyhvdGhlci52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJnZXRWYWx1ZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUocGFyYW1zLCB2YXJpYWJsZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0RlZmF1bHRWYWx1ZSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEZvbnRTaXplLkRFRkFVTFRfVkFMVUU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlLnRvU3R5bGVWYWx1ZShwYXJhbXMsIHZhcmlhYmxlcyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJuYW1lXCIsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jb25zdGFudHMuU1RZTEVfUFJPUFMuRk9OVF9TSVpFO1xuICAgICAgICB9XG4gICAgfV0sIFt7XG4gICAgICAgIGtleTogXCJERUZBVUxUX1ZBTFVFXCIsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIFwibm9ybWFsXCI7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRm9udFNpemU7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEZvbnRTaXplO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3plcGxpbi1leHRlbnNpb24tc3R5bGUta2l0L2RlY2xhcmF0aW9ucy9mb250U2l6ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgRm9udFN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZvbnRTdHlsZSh2YWx1ZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRm9udFN0eWxlKTtcblxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEZvbnRTdHlsZSwgW3tcbiAgICAgICAga2V5OiBcImVxdWFsc1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gb3RoZXIudmFsdWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJoYXNEZWZhdWx0VmFsdWVcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhc0RlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlID09PSBGb250U3R5bGUuREVGQVVMVF9WQUxVRTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImdldFZhbHVlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0RlZmF1bHRWYWx1ZSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEZvbnRTdHlsZS5ERUZBVUxUX1ZBTFVFO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcIm5hbWVcIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnN0YW50cy5TVFlMRV9QUk9QUy5GT05UX1NUWUxFO1xuICAgICAgICB9XG4gICAgfV0sIFt7XG4gICAgICAgIGtleTogXCJERUZBVUxUX1ZBTFVFXCIsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIFwibm9ybWFsXCI7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRm9udFN0eWxlO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGb250U3R5bGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvZGVjbGFyYXRpb25zL2ZvbnRTdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgRm9udFN0cmV0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRm9udFN0cmV0Y2godmFsdWUpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZvbnRTdHJldGNoKTtcblxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEZvbnRTdHJldGNoLCBbe1xuICAgICAgICBrZXk6IFwiZXF1YWxzXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlcXVhbHMob3RoZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlID09PSBvdGhlci52YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImhhc0RlZmF1bHRWYWx1ZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFzRGVmYXVsdFZhbHVlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IEZvbnRTdHJldGNoLkRFRkFVTFRfVkFMVUU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJnZXRWYWx1ZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNEZWZhdWx0VmFsdWUoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBGb250U3RyZXRjaC5ERUZBVUxUX1ZBTFVFO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcIm5hbWVcIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnN0YW50cy5TVFlMRV9QUk9QUy5GT05UX1NUUkVUQ0g7XG4gICAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgICAga2V5OiBcIkRFRkFVTFRfVkFMVUVcIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJub3JtYWxcIjtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBGb250U3RyZXRjaDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRm9udFN0cmV0Y2g7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvemVwbGluLWV4dGVuc2lvbi1zdHlsZS1raXQvZGVjbGFyYXRpb25zL2ZvbnRTdHJldGNoLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBXRUlHSFRfQk9MRCA9IDcwMDtcbnZhciBXRUlHSFRfTk9STUFMID0gNDAwO1xuXG52YXIgRm9udFdlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGb250V2VpZ2h0KHZhbHVlKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGb250V2VpZ2h0KTtcblxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEZvbnRXZWlnaHQsIFt7XG4gICAgICAgIGtleTogXCJoYXNEZWZhdWx0VmFsdWVcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhc0RlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlID09PSBXRUlHSFRfTk9STUFMO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiZXF1YWxzXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlcXVhbHMob3RoZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlID09PSBvdGhlci52YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImdldFZhbHVlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWU7XG5cblxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBXRUlHSFRfQk9MRCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImJvbGRcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFdFSUdIVF9OT1JNQUwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJub3JtYWxcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwibmFtZVwiLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfY29uc3RhbnRzLlNUWUxFX1BST1BTLkZPTlRfV0VJR0hUO1xuICAgICAgICB9XG4gICAgfV0sIFt7XG4gICAgICAgIGtleTogXCJERUZBVUxUX1ZBTFVFXCIsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIFdFSUdIVF9OT1JNQUw7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRm9udFdlaWdodDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRm9udFdlaWdodDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy96ZXBsaW4tZXh0ZW5zaW9uLXN0eWxlLWtpdC9kZWNsYXJhdGlvbnMvZm9udFdlaWdodC5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgVGV4dEFsaWduID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRleHRBbGlnbih2YWx1ZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGV4dEFsaWduKTtcblxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFRleHRBbGlnbiwgW3tcbiAgICAgICAga2V5OiBcImVxdWFsc1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gb3RoZXIudmFsdWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJnZXRWYWx1ZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcIm5hbWVcIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnN0YW50cy5TVFlMRV9QUk9QUy5URVhUX0FMSUdOO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRleHRBbGlnbjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGV4dEFsaWduO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3plcGxpbi1leHRlbnNpb24tc3R5bGUta2l0L2RlY2xhcmF0aW9ucy90ZXh0QWxpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcblxudmFyIF9zY2FsYXIgPSByZXF1aXJlKFwiLi4vdmFsdWVzL3NjYWxhclwiKTtcblxudmFyIF9zY2FsYXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NhbGFyKTtcblxudmFyIF9sZW5ndGggPSByZXF1aXJlKFwiLi4vdmFsdWVzL2xlbmd0aFwiKTtcblxudmFyIF9sZW5ndGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGVuZ3RoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIExpbmVIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTGluZUhlaWdodChsaW5lSGVpZ2h0LCBmb250U2l6ZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGluZUhlaWdodCk7XG5cbiAgICAgICAgdGhpcy5saW5lSGVpZ2h0ID0gbGluZUhlaWdodDtcbiAgICAgICAgdGhpcy5mb250U2l6ZSA9IGZvbnRTaXplO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhMaW5lSGVpZ2h0LCBbe1xuICAgICAgICBrZXk6IFwiZXF1YWxzXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlcXVhbHMob3RoZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhc0RlZmF1bHRWYWx1ZSgpICYmIG90aGVyLmhhc0RlZmF1bHRWYWx1ZSgpIHx8IHRoaXMubGluZUhlaWdodCA9PT0gb3RoZXIubGluZUhlaWdodDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImhhc0RlZmF1bHRWYWx1ZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFzRGVmYXVsdFZhbHVlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGluZUhlaWdodCA9PT0gTGluZUhlaWdodC5ERUZBVUxUX1ZBTFVFO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiZ2V0VmFsdWVcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlKHBhcmFtcywgdmFyaWFibGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNEZWZhdWx0VmFsdWUoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmVIZWlnaHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB1bml0bGVzc0xpbmVIZWlnaHQgPSBwYXJhbXMudW5pdGxlc3NMaW5lSGVpZ2h0O1xuXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB1bml0bGVzc0xpbmVIZWlnaHQgPyBuZXcgX3NjYWxhcjIuZGVmYXVsdCh0aGlzLmxpbmVIZWlnaHQgLyB0aGlzLmZvbnRTaXplKSA6IG5ldyBfbGVuZ3RoMi5kZWZhdWx0KHRoaXMubGluZUhlaWdodCk7XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0eWxlVmFsdWUocGFyYW1zLCB2YXJpYWJsZXMpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwibmFtZVwiLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfY29uc3RhbnRzLlNUWUxFX1BST1BTLkxJTkVfSEVJR0hUO1xuICAgICAgICB9XG4gICAgfV0sIFt7XG4gICAgICAgIGtleTogXCJERUZBVUxUX1ZBTFVFXCIsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIFwibm9ybWFsXCI7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTGluZUhlaWdodDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTGluZUhlaWdodDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy96ZXBsaW4tZXh0ZW5zaW9uLXN0eWxlLWtpdC9kZWNsYXJhdGlvbnMvbGluZUhlaWdodC5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9sZW5ndGggPSByZXF1aXJlKFwiLi4vdmFsdWVzL2xlbmd0aFwiKTtcblxudmFyIF9sZW5ndGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGVuZ3RoKTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgTGV0dGVyU3BhY2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMZXR0ZXJTcGFjaW5nKHZhbHVlKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMZXR0ZXJTcGFjaW5nKTtcblxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKExldHRlclNwYWNpbmcsIFt7XG4gICAgICAgIGtleTogXCJoYXNEZWZhdWx0VmFsdWVcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhc0RlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlLmVxdWFscyhMZXR0ZXJTcGFjaW5nLkRFRkFVTFRfVkFMVUUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiZXF1YWxzXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlcXVhbHMob3RoZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlLmVxdWFscyhvdGhlci52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJnZXRWYWx1ZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUocGFyYW1zLCB2YXJpYWJsZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0RlZmF1bHRWYWx1ZSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibm9ybWFsXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlLnRvU3R5bGVWYWx1ZShwYXJhbXMsIHZhcmlhYmxlcyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJuYW1lXCIsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jb25zdGFudHMuU1RZTEVfUFJPUFMuTEVUVEVSX1NQQUNJTkc7XG4gICAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgICAga2V5OiBcIkRFRkFVTFRfVkFMVUVcIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IF9sZW5ndGgyLmRlZmF1bHQoMCk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTGV0dGVyU3BhY2luZztcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTGV0dGVyU3BhY2luZztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy96ZXBsaW4tZXh0ZW5zaW9uLXN0eWxlLWtpdC9kZWNsYXJhdGlvbnMvbGV0dGVyU3BhY2luZy5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQmdPcmlnaW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmdPcmlnaW4odmFsdWVzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCZ09yaWdpbik7XG5cbiAgICAgICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEJnT3JpZ2luLCBbe1xuICAgICAgICBrZXk6IFwiZXF1YWxzXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlcXVhbHMob3RoZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5qb2luKFwiLCBcIikgPT09IG90aGVyLnZhbHVlcy5qb2luKFwiLCBcIik7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJnZXRWYWx1ZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMuam9pbihcIiwgXCIpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwibmFtZVwiLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfY29uc3RhbnRzLlNUWUxFX1BST1BTLkJBQ0tHUk9VTkRfT1JJR0lOO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEJnT3JpZ2luO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBCZ09yaWdpbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy96ZXBsaW4tZXh0ZW5zaW9uLXN0eWxlLWtpdC9kZWNsYXJhdGlvbnMvYmdPcmlnaW4uanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwibGV2ZWxcIjpcInNpbXBsZVwiLFwidmFsdWVcIjpbe1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmFscGhhXCJdLFwiZGVjbGFyYXRpb25zXCI6e1wiZm9udC1zaXplXCI6XCIzNnB4XCJ9fSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYmV0YVwiXSxcImRlY2xhcmF0aW9uc1wiOntcImZvbnQtc2l6ZVwiOlwiMjRweFwifX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmdhbW1hXCJdLFwiZGVjbGFyYXRpb25zXCI6e1wiZm9udC1zaXplXCI6XCIyMHB4XCJ9fSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZGVsdGFcIl0sXCJkZWNsYXJhdGlvbnNcIjp7XCJmb250LXNpemVcIjpcIjE4cHhcIn19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5lcHNpbG9uXCJdLFwiZGVjbGFyYXRpb25zXCI6e1wiZm9udC1zaXplXCI6XCIxNnB4XCJ9fSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZm9udC13ZWlnaHQtbm9ybWFsXCJdLFwiZGVjbGFyYXRpb25zXCI6e1wiZm9udC13ZWlnaHRcIjpcImJvbGRcIn19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mb250LXdlaWdodC1ib2xkXCJdLFwiZGVjbGFyYXRpb25zXCI6e1wiZm9udC13ZWlnaHRcIjpcImJvbGRcIn19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LWNvbG9yLXpldGNoLW9yYW5nZVwiXSxcImRlY2xhcmF0aW9uc1wiOntcImNvbG9yXCI6XCIjRTg2NTI0XCJ9fSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1jb2xvci16ZXRjaC1kYXJrLXllbGxvd1wiXSxcImRlY2xhcmF0aW9uc1wiOntcImNvbG9yXCI6XCIjRkJCNjM2XCJ9fSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1jb2xvci16ZXRjaC1saWdodC15ZWxsb3dcIl0sXCJkZWNsYXJhdGlvbnNcIjp7XCJjb2xvclwiOlwiI0ZCQ0QzMVwifX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtY29sb3Itd2hpdGVcIl0sXCJkZWNsYXJhdGlvbnNcIjp7XCJjb2xvclwiOlwid2hpdGVcIn19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1jb2xvci16ZXRjaC1vcmFuZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjp7XCJiYWNrZ3JvdW5kLWNvbG9yXCI6XCIjRTg2NTI0XCJ9fSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYmctY29sb3ItemV0Y2gtZGFyay15ZWxsb3dcIl0sXCJkZWNsYXJhdGlvbnNcIjp7XCJiYWNrZ3JvdW5kLWNvbG9yXCI6XCIjRkJCNjM2XCJ9fSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYmctY29sb3ItemV0Y2gtbGlnaHQteWVsbG93XCJdLFwiZGVjbGFyYXRpb25zXCI6e1wiYmFja2dyb3VuZC1jb2xvclwiOlwiI0ZCQ0QzMVwifX1dfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy5qc29uXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9