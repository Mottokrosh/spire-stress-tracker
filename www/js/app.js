/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(7);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  typeof document.createElement -> undefined
 */
function isStandardBrowserEnv() {
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined' &&
    typeof document.createElement === 'function'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    clone: function clone(obj) {
      return JSON.parse(JSON.stringify(obj));
    },
    slugify: function slugify(value) {
      value = value.replace(/^\s+|\s+$/g, ''); // trim
      value = value.toLowerCase();

      // remove accents, swap ñ for n, etc
      var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
      var to = "aaaaaeeeeeiiiiooooouuuunc------";
      for (var i = 0, l = from.length; i < l; i++) {
        value = value.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
      }

      value = value.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes

      return value;
    }
  }
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ActivityIcon */
/* unused harmony export AirplayIcon */
/* unused harmony export AlertCircleIcon */
/* unused harmony export AlertOctagonIcon */
/* unused harmony export AlertTriangleIcon */
/* unused harmony export AlignCenterIcon */
/* unused harmony export AlignJustifyIcon */
/* unused harmony export AlignLeftIcon */
/* unused harmony export AlignRightIcon */
/* unused harmony export AnchorIcon */
/* unused harmony export ApertureIcon */
/* unused harmony export ArrowDownLeftIcon */
/* unused harmony export ArrowDownRightIcon */
/* unused harmony export ArrowDownIcon */
/* unused harmony export ArrowLeftIcon */
/* unused harmony export ArrowRightIcon */
/* unused harmony export ArrowUpLeftIcon */
/* unused harmony export ArrowUpRightIcon */
/* unused harmony export ArrowUpIcon */
/* unused harmony export AtSignIcon */
/* unused harmony export AwardIcon */
/* unused harmony export BarChart2Icon */
/* unused harmony export BarChartIcon */
/* unused harmony export BatteryChargingIcon */
/* unused harmony export BatteryIcon */
/* unused harmony export BellOffIcon */
/* unused harmony export BellIcon */
/* unused harmony export BluetoothIcon */
/* unused harmony export BoldIcon */
/* unused harmony export BookIcon */
/* unused harmony export BookmarkIcon */
/* unused harmony export BoxIcon */
/* unused harmony export BriefcaseIcon */
/* unused harmony export CalendarIcon */
/* unused harmony export CameraOffIcon */
/* unused harmony export CameraIcon */
/* unused harmony export CastIcon */
/* unused harmony export CheckCircleIcon */
/* unused harmony export CheckSquareIcon */
/* unused harmony export CheckIcon */
/* unused harmony export ChevronDownIcon */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChevronLeftIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ChevronRightIcon; });
/* unused harmony export ChevronUpIcon */
/* unused harmony export ChevronsDownIcon */
/* unused harmony export ChevronsLeftIcon */
/* unused harmony export ChevronsRightIcon */
/* unused harmony export ChevronsUpIcon */
/* unused harmony export ChromeIcon */
/* unused harmony export CircleIcon */
/* unused harmony export ClipboardIcon */
/* unused harmony export ClockIcon */
/* unused harmony export CloudDrizzleIcon */
/* unused harmony export CloudLightningIcon */
/* unused harmony export CloudOffIcon */
/* unused harmony export CloudRainIcon */
/* unused harmony export CloudSnowIcon */
/* unused harmony export CloudIcon */
/* unused harmony export CodepenIcon */
/* unused harmony export CommandIcon */
/* unused harmony export CompassIcon */
/* unused harmony export CopyIcon */
/* unused harmony export CornerDownLeftIcon */
/* unused harmony export CornerDownRightIcon */
/* unused harmony export CornerLeftDownIcon */
/* unused harmony export CornerLeftUpIcon */
/* unused harmony export CornerRightDownIcon */
/* unused harmony export CornerRightUpIcon */
/* unused harmony export CornerUpLeftIcon */
/* unused harmony export CornerUpRightIcon */
/* unused harmony export CpuIcon */
/* unused harmony export CreditCardIcon */
/* unused harmony export CropIcon */
/* unused harmony export CrosshairIcon */
/* unused harmony export DeleteIcon */
/* unused harmony export DiscIcon */
/* unused harmony export DownloadCloudIcon */
/* unused harmony export DownloadIcon */
/* unused harmony export DropletIcon */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Edit2Icon; });
/* unused harmony export Edit3Icon */
/* unused harmony export EditIcon */
/* unused harmony export ExternalLinkIcon */
/* unused harmony export EyeOffIcon */
/* unused harmony export EyeIcon */
/* unused harmony export FacebookIcon */
/* unused harmony export FastForwardIcon */
/* unused harmony export FeatherIcon */
/* unused harmony export FileMinusIcon */
/* unused harmony export FilePlusIcon */
/* unused harmony export FileTextIcon */
/* unused harmony export FileIcon */
/* unused harmony export FilmIcon */
/* unused harmony export FilterIcon */
/* unused harmony export FlagIcon */
/* unused harmony export FolderIcon */
/* unused harmony export GithubIcon */
/* unused harmony export GitlabIcon */
/* unused harmony export GlobeIcon */
/* unused harmony export GridIcon */
/* unused harmony export HashIcon */
/* unused harmony export HeadphonesIcon */
/* unused harmony export HeartIcon */
/* unused harmony export HelpCircleIcon */
/* unused harmony export HomeIcon */
/* unused harmony export ImageIcon */
/* unused harmony export InboxIcon */
/* unused harmony export InfoIcon */
/* unused harmony export InstagramIcon */
/* unused harmony export ItalicIcon */
/* unused harmony export LayersIcon */
/* unused harmony export LayoutIcon */
/* unused harmony export LifeBuoyIcon */
/* unused harmony export Link2Icon */
/* unused harmony export LinkIcon */
/* unused harmony export ListIcon */
/* unused harmony export LoaderIcon */
/* unused harmony export LockIcon */
/* unused harmony export LogInIcon */
/* unused harmony export LogOutIcon */
/* unused harmony export MailIcon */
/* unused harmony export MapPinIcon */
/* unused harmony export MapIcon */
/* unused harmony export Maximize2Icon */
/* unused harmony export MaximizeIcon */
/* unused harmony export MenuIcon */
/* unused harmony export MessageCircleIcon */
/* unused harmony export MessageSquareIcon */
/* unused harmony export MicOffIcon */
/* unused harmony export MicIcon */
/* unused harmony export Minimize2Icon */
/* unused harmony export MinimizeIcon */
/* unused harmony export MinusCircleIcon */
/* unused harmony export MinusSquareIcon */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MinusIcon; });
/* unused harmony export MonitorIcon */
/* unused harmony export MoonIcon */
/* unused harmony export MoreHorizontalIcon */
/* unused harmony export MoreVerticalIcon */
/* unused harmony export MoveIcon */
/* unused harmony export MusicIcon */
/* unused harmony export Navigation2Icon */
/* unused harmony export NavigationIcon */
/* unused harmony export OctagonIcon */
/* unused harmony export PackageIcon */
/* unused harmony export PaperclipIcon */
/* unused harmony export PauseCircleIcon */
/* unused harmony export PauseIcon */
/* unused harmony export PercentIcon */
/* unused harmony export PhoneCallIcon */
/* unused harmony export PhoneForwardedIcon */
/* unused harmony export PhoneIncomingIcon */
/* unused harmony export PhoneMissedIcon */
/* unused harmony export PhoneOffIcon */
/* unused harmony export PhoneOutgoingIcon */
/* unused harmony export PhoneIcon */
/* unused harmony export PieChartIcon */
/* unused harmony export PlayCircleIcon */
/* unused harmony export PlayIcon */
/* unused harmony export PlusCircleIcon */
/* unused harmony export PlusSquareIcon */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PlusIcon; });
/* unused harmony export PocketIcon */
/* unused harmony export PowerIcon */
/* unused harmony export PrinterIcon */
/* unused harmony export RadioIcon */
/* unused harmony export RefreshCcwIcon */
/* unused harmony export RefreshCwIcon */
/* unused harmony export RepeatIcon */
/* unused harmony export RewindIcon */
/* unused harmony export RotateCcwIcon */
/* unused harmony export RotateCwIcon */
/* unused harmony export SaveIcon */
/* unused harmony export ScissorsIcon */
/* unused harmony export SearchIcon */
/* unused harmony export ServerIcon */
/* unused harmony export SettingsIcon */
/* unused harmony export Share2Icon */
/* unused harmony export ShareIcon */
/* unused harmony export ShieldIcon */
/* unused harmony export ShoppingCartIcon */
/* unused harmony export ShuffleIcon */
/* unused harmony export SidebarIcon */
/* unused harmony export SkipBackIcon */
/* unused harmony export SkipForwardIcon */
/* unused harmony export SlackIcon */
/* unused harmony export SlashIcon */
/* unused harmony export SlidersIcon */
/* unused harmony export SmartphoneIcon */
/* unused harmony export SpeakerIcon */
/* unused harmony export SquareIcon */
/* unused harmony export StarIcon */
/* unused harmony export StopCircleIcon */
/* unused harmony export SunIcon */
/* unused harmony export SunriseIcon */
/* unused harmony export SunsetIcon */
/* unused harmony export TabletIcon */
/* unused harmony export TagIcon */
/* unused harmony export TargetIcon */
/* unused harmony export ThermometerIcon */
/* unused harmony export ThumbsDownIcon */
/* unused harmony export ThumbsUpIcon */
/* unused harmony export ToggleLeftIcon */
/* unused harmony export ToggleRightIcon */
/* unused harmony export Trash2Icon */
/* unused harmony export TrashIcon */
/* unused harmony export TrendingDownIcon */
/* unused harmony export TrendingUpIcon */
/* unused harmony export TriangleIcon */
/* unused harmony export TvIcon */
/* unused harmony export TwitterIcon */
/* unused harmony export TypeIcon */
/* unused harmony export UmbrellaIcon */
/* unused harmony export UnderlineIcon */
/* unused harmony export UnlockIcon */
/* unused harmony export UploadCloudIcon */
/* unused harmony export UploadIcon */
/* unused harmony export UserCheckIcon */
/* unused harmony export UserMinusIcon */
/* unused harmony export UserPlusIcon */
/* unused harmony export UserXIcon */
/* unused harmony export UserIcon */
/* unused harmony export UsersIcon */
/* unused harmony export VideoOffIcon */
/* unused harmony export VideoIcon */
/* unused harmony export VoicemailIcon */
/* unused harmony export Volume1Icon */
/* unused harmony export Volume2Icon */
/* unused harmony export VolumeXIcon */
/* unused harmony export VolumeIcon */
/* unused harmony export WatchIcon */
/* unused harmony export WifiOffIcon */
/* unused harmony export WifiIcon */
/* unused harmony export WindIcon */
/* unused harmony export XCircleIcon */
/* unused harmony export XSquareIcon */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return XIcon; });
/* unused harmony export ZapIcon */
/* unused harmony export ZoomInIcon */
/* unused harmony export ZoomOutIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props__);


var ActivityIcon = {
  name: 'activity-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-activity" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "22 12 18 12 15 21 9 3 6 12 2 12" }
        },
        []
      )]
    );
  }
};

var AirplayIcon = {
  name: 'airplay-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-airplay" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" }
        },
        []
      ), h(
        "polygon",
        {
          attrs: { points: "12 15 17 21 7 21 12 15" }
        },
        []
      )]
    );
  }
};

var AlertCircleIcon = {
  name: 'alert-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-alert-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "8", x2: "12", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "16", x2: "12", y2: "16" }
        },
        []
      )]
    );
  }
};

var AlertOctagonIcon = {
  name: 'alert-octagon-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-alert-octagon" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "8", x2: "12", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "16", x2: "12", y2: "16" }
        },
        []
      )]
    );
  }
};

var AlertTriangleIcon = {
  name: 'alert-triangle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-alert-triangle" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "9", x2: "12", y2: "13" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "17", x2: "12", y2: "17" }
        },
        []
      )]
    );
  }
};

var AlignCenterIcon = {
  name: 'align-center-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-align-center" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "18", y1: "10", x2: "6", y2: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "6", x2: "3", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "14", x2: "3", y2: "14" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "18", y1: "18", x2: "6", y2: "18" }
        },
        []
      )]
    );
  }
};

var AlignJustifyIcon = {
  name: 'align-justify-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-align-justify" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "21", y1: "10", x2: "3", y2: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "6", x2: "3", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "14", x2: "3", y2: "14" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "18", x2: "3", y2: "18" }
        },
        []
      )]
    );
  }
};

var AlignLeftIcon = {
  name: 'align-left-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-align-left" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "17", y1: "10", x2: "3", y2: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "6", x2: "3", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "14", x2: "3", y2: "14" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "17", y1: "18", x2: "3", y2: "18" }
        },
        []
      )]
    );
  }
};

var AlignRightIcon = {
  name: 'align-right-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-align-right" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "21", y1: "10", x2: "7", y2: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "6", x2: "3", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "14", x2: "3", y2: "14" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "18", x2: "7", y2: "18" }
        },
        []
      )]
    );
  }
};

var AnchorIcon = {
  name: 'anchor-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-anchor" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "5", r: "3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "22", x2: "12", y2: "8" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M5 12H2a10 10 0 0 0 20 0h-3" }
        },
        []
      )]
    );
  }
};

var ApertureIcon = {
  name: 'aperture-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-aperture" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "14.31", y1: "8", x2: "20.05", y2: "17.94" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9.69", y1: "8", x2: "21.17", y2: "8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "7.38", y1: "12", x2: "13.12", y2: "2.06" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9.69", y1: "16", x2: "3.95", y2: "6.06" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "14.31", y1: "16", x2: "2.83", y2: "16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16.62", y1: "12", x2: "10.88", y2: "21.94" }
        },
        []
      )]
    );
  }
};

var ArrowDownLeftIcon = {
  name: 'arrow-down-left-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-down-left" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "18", y1: "6", x2: "6", y2: "18" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "15 18 6 18 6 9" }
        },
        []
      )]
    );
  }
};

var ArrowDownRightIcon = {
  name: 'arrow-down-right-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-down-right" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "6", y1: "6", x2: "18", y2: "18" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "9 18 18 18 18 9" }
        },
        []
      )]
    );
  }
};

var ArrowDownIcon = {
  name: 'arrow-down-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-down" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "12", y1: "4", x2: "12", y2: "20" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "18 14 12 20 6 14" }
        },
        []
      )]
    );
  }
};

var ArrowLeftIcon = {
  name: 'arrow-left-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-left" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "20", y1: "12", x2: "4", y2: "12" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "10 18 4 12 10 6" }
        },
        []
      )]
    );
  }
};

var ArrowRightIcon = {
  name: 'arrow-right-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-right" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "4", y1: "12", x2: "20", y2: "12" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "14 6 20 12 14 18" }
        },
        []
      )]
    );
  }
};

var ArrowUpLeftIcon = {
  name: 'arrow-up-left-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-up-left" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "18", y1: "18", x2: "6", y2: "6" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "15 6 6 6 6 15" }
        },
        []
      )]
    );
  }
};

var ArrowUpRightIcon = {
  name: 'arrow-up-right-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-up-right" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "6", y1: "18", x2: "18", y2: "6" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "9 6 18 6 18 15" }
        },
        []
      )]
    );
  }
};

var ArrowUpIcon = {
  name: 'arrow-up-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-up" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "12", y1: "20", x2: "12", y2: "4" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "6 10 12 4 18 10" }
        },
        []
      )]
    );
  }
};

var AtSignIcon = {
  name: 'at-sign-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-at-sign" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "4" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M16 12v1a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" }
        },
        []
      )]
    );
  }
};

var AwardIcon = {
  name: 'award-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-award" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "8", r: "7" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88" }
        },
        []
      )]
    );
  }
};

var BarChart2Icon = {
  name: 'bar-chart2-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-bar-chart-2" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "10", y: "3", width: "4", height: "18" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "18", y: "8", width: "4", height: "13" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "2", y: "13", width: "4", height: "8" }
        },
        []
      )]
    );
  }
};

var BarChartIcon = {
  name: 'bar-chart-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-bar-chart" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "18", y: "3", width: "4", height: "18" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "10", y: "8", width: "4", height: "13" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "2", y: "13", width: "4", height: "8" }
        },
        []
      )]
    );
  }
};

var BatteryChargingIcon = {
  name: 'battery-charging-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-battery-charging" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "23", y1: "13", x2: "23", y2: "11" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "11 6 7 12 13 12 9 18" }
        },
        []
      )]
    );
  }
};

var BatteryIcon = {
  name: 'battery-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-battery" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "1", y: "6", width: "18", height: "12", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "23", y1: "13", x2: "23", y2: "11" }
        },
        []
      )]
    );
  }
};

var BellOffIcon = {
  name: 'bell-off-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-bell-off" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M8.56 2.9A7 7 0 0 1 19 9v4m-2 4H2a3 3 0 0 0 3-3V9a7 7 0 0 1 .78-3.22M13.73 21a2 2 0 0 1-3.46 0" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "1", x2: "23", y2: "23" }
        },
        []
      )]
    );
  }
};

var BellIcon = {
  name: 'bell-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-bell" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0" }
        },
        []
      )]
    );
  }
};

var BluetoothIcon = {
  name: 'bluetooth-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-bluetooth" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5" }
        },
        []
      )]
    );
  }
};

var BoldIcon = {
  name: 'bold-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-bold" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }
        },
        []
      )]
    );
  }
};

var BookIcon = {
  name: 'book-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-book" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" }
        },
        []
      )]
    );
  }
};

var BookmarkIcon = {
  name: 'bookmark-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-bookmark" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" }
        },
        []
      )]
    );
  }
};

var BoxIcon = {
  name: 'box-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-box" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "2.32 6.16 12 11 21.68 6.16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "22.76", x2: "12", y2: "11" }
        },
        []
      )]
    );
  }
};

var BriefcaseIcon = {
  name: 'briefcase-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-briefcase" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "2", y: "7", width: "20", height: "14", rx: "2", ry: "2" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" }
        },
        []
      )]
    );
  }
};

var CalendarIcon = {
  name: 'calendar-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-calendar" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "2", x2: "16", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "2", x2: "8", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "10", x2: "21", y2: "10" }
        },
        []
      )]
    );
  }
};

var CameraOffIcon = {
  name: 'camera-off-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-camera-off" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "1", y1: "1", x2: "23", y2: "23" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56" }
        },
        []
      )]
    );
  }
};

var CameraIcon = {
  name: 'camera-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-camera" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "13", r: "4" }
        },
        []
      )]
    );
  }
};

var CastIcon = {
  name: 'cast-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-cast" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "2", y1: "20", x2: "2", y2: "20" }
        },
        []
      )]
    );
  }
};

var CheckCircleIcon = {
  name: 'check-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-check-circle" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M22 11.07V12a10 10 0 1 1-5.93-9.14" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "23 3 12 14 9 11" }
        },
        []
      )]
    );
  }
};

var CheckSquareIcon = {
  name: 'check-square-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-check-square" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "9 11 12 14 23 3" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" }
        },
        []
      )]
    );
  }
};

var CheckIcon = {
  name: 'check-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-check" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "20 6 9 17 4 12" }
        },
        []
      )]
    );
  }
};

var ChevronDownIcon = {
  name: 'chevron-down-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-chevron-down" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "6 9 12 15 18 9" }
        },
        []
      )]
    );
  }
};

var ChevronLeftIcon = {
  name: 'chevron-left-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-chevron-left" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "15 18 9 12 15 6" }
        },
        []
      )]
    );
  }
};

var ChevronRightIcon = {
  name: 'chevron-right-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-chevron-right" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "9 18 15 12 9 6" }
        },
        []
      )]
    );
  }
};

var ChevronUpIcon = {
  name: 'chevron-up-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-chevron-up" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "18 15 12 9 6 15" }
        },
        []
      )]
    );
  }
};

var ChevronsDownIcon = {
  name: 'chevrons-down-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-chevrons-down" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "7 13 12 18 17 13" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "7 6 12 11 17 6" }
        },
        []
      )]
    );
  }
};

var ChevronsLeftIcon = {
  name: 'chevrons-left-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-chevrons-left" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "11 17 6 12 11 7" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "18 17 13 12 18 7" }
        },
        []
      )]
    );
  }
};

var ChevronsRightIcon = {
  name: 'chevrons-right-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-chevrons-right" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "13 17 18 12 13 7" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "6 17 11 12 6 7" }
        },
        []
      )]
    );
  }
};

var ChevronsUpIcon = {
  name: 'chevrons-up-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-chevrons-up" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "17 11 12 6 7 11" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "17 18 12 13 7 18" }
        },
        []
      )]
    );
  }
};

var ChromeIcon = {
  name: 'chrome-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-chrome" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21.17", y1: "8", x2: "12", y2: "8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3.95", y1: "6.06", x2: "8.54", y2: "14" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "10.88", y1: "21.94", x2: "15.46", y2: "14" }
        },
        []
      )]
    );
  }
};

var CircleIcon = {
  name: 'circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      )]
    );
  }
};

var ClipboardIcon = {
  name: 'clipboard-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-clipboard" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "8", y: "2", width: "8", height: "4", rx: "1", ry: "1" }
        },
        []
      )]
    );
  }
};

var ClockIcon = {
  name: 'clock-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-clock" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "12 6 12 12 15 15" }
        },
        []
      )]
    );
  }
};

var CloudDrizzleIcon = {
  name: 'cloud-drizzle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-cloud-drizzle" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "8", y1: "19", x2: "8", y2: "21" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "13", x2: "8", y2: "15" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "19", x2: "16", y2: "21" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "13", x2: "16", y2: "15" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "21", x2: "12", y2: "23" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "15", x2: "12", y2: "17" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" }
        },
        []
      )]
    );
  }
};

var CloudLightningIcon = {
  name: 'cloud-lightning-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-cloud-lightning" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "13 11 9 17 15 17 11 23" }
        },
        []
      )]
    );
  }
};

var CloudOffIcon = {
  name: 'cloud-off-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-cloud-off" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "1", x2: "23", y2: "23" }
        },
        []
      )]
    );
  }
};

var CloudRainIcon = {
  name: 'cloud-rain-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-cloud-rain" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "16", y1: "13", x2: "16", y2: "21" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "13", x2: "8", y2: "21" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "15", x2: "12", y2: "23" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" }
        },
        []
      )]
    );
  }
};

var CloudSnowIcon = {
  name: 'cloud-snow-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-cloud-snow" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "16", x2: "8", y2: "16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "20", x2: "8", y2: "20" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "18", x2: "12", y2: "18" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "22", x2: "12", y2: "22" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "16", x2: "16", y2: "16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "20", x2: "16", y2: "20" }
        },
        []
      )]
    );
  }
};

var CloudIcon = {
  name: 'cloud-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-cloud" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" }
        },
        []
      )]
    );
  }
};

var CodepenIcon = {
  name: 'codepen-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-codepen" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "22", x2: "12", y2: "15.5" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "22 8.5 12 15.5 2 8.5" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "2 15.5 12 8.5 22 15.5" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "2", x2: "12", y2: "8.5" }
        },
        []
      )]
    );
  }
};

var CommandIcon = {
  name: 'command-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-command" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" }
        },
        []
      )]
    );
  }
};

var CompassIcon = {
  name: 'compass-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-compass" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "polygon",
        {
          attrs: { points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" }
        },
        []
      )]
    );
  }
};

var CopyIcon = {
  name: 'copy-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-copy" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" }
        },
        []
      )]
    );
  }
};

var CornerDownLeftIcon = {
  name: 'corner-down-left-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-corner-down-left" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "9 10 4 15 9 20" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M20 4v7a4 4 0 0 1-4 4H4" }
        },
        []
      )]
    );
  }
};

var CornerDownRightIcon = {
  name: 'corner-down-right-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-corner-down-right" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "15 10 20 15 15 20" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M4 4v7a4 4 0 0 0 4 4h12" }
        },
        []
      )]
    );
  }
};

var CornerLeftDownIcon = {
  name: 'corner-left-down-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-corner-left-down" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "14 15 9 20 4 15" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M20 4h-7a4 4 0 0 0-4 4v12" }
        },
        []
      )]
    );
  }
};

var CornerLeftUpIcon = {
  name: 'corner-left-up-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-corner-left-up" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "14 9 9 4 4 9" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M20 20h-7a4 4 0 0 1-4-4V4" }
        },
        []
      )]
    );
  }
};

var CornerRightDownIcon = {
  name: 'corner-right-down-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-corner-right-down" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "10 15 15 20 20 15" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M4 4h7a4 4 0 0 1 4 4v12" }
        },
        []
      )]
    );
  }
};

var CornerRightUpIcon = {
  name: 'corner-right-up-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-corner-right-up" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "10 9 15 4 20 9" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M4 20h7a4 4 0 0 0 4-4V4" }
        },
        []
      )]
    );
  }
};

var CornerUpLeftIcon = {
  name: 'corner-up-left-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-corner-up-left" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "9 14 4 9 9 4" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M20 20v-7a4 4 0 0 0-4-4H4" }
        },
        []
      )]
    );
  }
};

var CornerUpRightIcon = {
  name: 'corner-up-right-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-corner-up-right" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "15 14 20 9 15 4" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M4 20v-7a4 4 0 0 1 4-4h12" }
        },
        []
      )]
    );
  }
};

var CpuIcon = {
  name: 'cpu-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-cpu" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "4", y: "4", width: "16", height: "16", rx: "2", ry: "2" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "9", y: "9", width: "6", height: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "1", x2: "9", y2: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "15", y1: "1", x2: "15", y2: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "20", x2: "9", y2: "23" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "15", y1: "20", x2: "15", y2: "23" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "20", y1: "9", x2: "23", y2: "9" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "20", y1: "14", x2: "23", y2: "14" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "9", x2: "4", y2: "9" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "14", x2: "4", y2: "14" }
        },
        []
      )]
    );
  }
};

var CreditCardIcon = {
  name: 'credit-card-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-credit-card" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "1", y: "4", width: "22", height: "16", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "10", x2: "23", y2: "10" }
        },
        []
      )]
    );
  }
};

var CropIcon = {
  name: 'crop-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-crop" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M6.13 1L6 16a2 2 0 0 0 2 2h15" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M1 6.13L16 6a2 2 0 0 1 2 2v15" }
        },
        []
      )]
    );
  }
};

var CrosshairIcon = {
  name: 'crosshair-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-crosshair" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "22", y1: "12", x2: "18", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "6", y1: "12", x2: "2", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "6", x2: "12", y2: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "22", x2: "12", y2: "18" }
        },
        []
      )]
    );
  }
};

var DeleteIcon = {
  name: 'delete-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-delete" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "18", y1: "9", x2: "12", y2: "15" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "9", x2: "18", y2: "15" }
        },
        []
      )]
    );
  }
};

var DiscIcon = {
  name: 'disc-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-disc" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "3" }
        },
        []
      )]
    );
  }
};

var DownloadCloudIcon = {
  name: 'download-cloud-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-download-cloud" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "8 17 12 21 16 17" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "12", x2: "12", y2: "21" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" }
        },
        []
      )]
    );
  }
};

var DownloadIcon = {
  name: 'download-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-download" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M3 17v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "8 12 12 16 16 12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "2", x2: "12", y2: "16" }
        },
        []
      )]
    );
  }
};

var DropletIcon = {
  name: 'droplet-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-droplet" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" }
        },
        []
      )]
    );
  }
};

var Edit2Icon = {
  name: 'edit2-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-edit-2" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "16 3 21 8 8 21 3 21 3 16 16 3" }
        },
        []
      )]
    );
  }
};

var Edit3Icon = {
  name: 'edit3-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-edit-3" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "14 2 18 6 7 17 3 17 3 13 14 2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "22", x2: "21", y2: "22" }
        },
        []
      )]
    );
  }
};

var EditIcon = {
  name: 'edit-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-edit" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" }
        },
        []
      ), h(
        "polygon",
        {
          attrs: { points: "18 2 22 6 12 16 8 16 8 12 18 2" }
        },
        []
      )]
    );
  }
};

var ExternalLinkIcon = {
  name: 'external-link-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-external-link" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "15 3 21 3 21 9" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "10", y1: "14", x2: "21", y2: "3" }
        },
        []
      )]
    );
  }
};

var EyeOffIcon = {
  name: 'eye-off-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-eye-off" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "1", x2: "23", y2: "23" }
        },
        []
      )]
    );
  }
};

var EyeIcon = {
  name: 'eye-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-eye" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "3" }
        },
        []
      )]
    );
  }
};

var FacebookIcon = {
  name: 'facebook-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-facebook" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" }
        },
        []
      )]
    );
  }
};

var FastForwardIcon = {
  name: 'fast-forward-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-fast-forward" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "13 19 22 12 13 5 13 19" }
        },
        []
      ), h(
        "polygon",
        {
          attrs: { points: "2 19 11 12 2 5 2 19" }
        },
        []
      )]
    );
  }
};

var FeatherIcon = {
  name: 'feather-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-feather" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "8", x2: "2", y2: "22" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "17", y1: "15", x2: "9", y2: "15" }
        },
        []
      )]
    );
  }
};

var FileMinusIcon = {
  name: 'file-minus-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-file-minus" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "14 2 14 8 20 8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "15", x2: "15", y2: "15" }
        },
        []
      )]
    );
  }
};

var FilePlusIcon = {
  name: 'file-plus-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-file-plus" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "14 2 14 8 20 8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "18", x2: "12", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "15", x2: "15", y2: "15" }
        },
        []
      )]
    );
  }
};

var FileTextIcon = {
  name: 'file-text-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-file-text" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "14 2 14 8 20 8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "13", x2: "8", y2: "13" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "17", x2: "8", y2: "17" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "10 9 9 9 8 9" }
        },
        []
      )]
    );
  }
};

var FileIcon = {
  name: 'file-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-file" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "13 2 13 9 20 9" }
        },
        []
      )]
    );
  }
};

var FilmIcon = {
  name: 'film-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-film" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "2", y: "2", width: "20", height: "20", rx: "2.18", ry: "2.18" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "7", y1: "2", x2: "7", y2: "22" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "17", y1: "2", x2: "17", y2: "22" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "2", y1: "12", x2: "22", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "2", y1: "7", x2: "7", y2: "7" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "2", y1: "17", x2: "7", y2: "17" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "17", y1: "17", x2: "22", y2: "17" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "17", y1: "7", x2: "22", y2: "7" }
        },
        []
      )]
    );
  }
};

var FilterIcon = {
  name: 'filter-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-filter" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" }
        },
        []
      )]
    );
  }
};

var FlagIcon = {
  name: 'flag-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-flag" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4", y1: "22", x2: "4", y2: "15" }
        },
        []
      )]
    );
  }
};

var FolderIcon = {
  name: 'folder-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-folder" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" }
        },
        []
      )]
    );
  }
};

var GithubIcon = {
  name: 'github-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-github" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" }
        },
        []
      )]
    );
  }
};

var GitlabIcon = {
  name: 'gitlab-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-gitlab" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" }
        },
        []
      )]
    );
  }
};

var GlobeIcon = {
  name: 'globe-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-globe" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "2", y1: "12", x2: "22", y2: "12" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" }
        },
        []
      )]
    );
  }
};

var GridIcon = {
  name: 'grid-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-grid" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "3", width: "7", height: "7" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "14", y: "3", width: "7", height: "7" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "14", y: "14", width: "7", height: "7" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "3", y: "14", width: "7", height: "7" }
        },
        []
      )]
    );
  }
};

var HashIcon = {
  name: 'hash-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-hash" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "4", y1: "9", x2: "20", y2: "9" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4", y1: "15", x2: "20", y2: "15" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "10", y1: "3", x2: "8", y2: "21" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "3", x2: "14", y2: "21" }
        },
        []
      )]
    );
  }
};

var HeadphonesIcon = {
  name: 'headphones-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-headphones" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M3 18v-6a9 9 0 0 1 18 0v6" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" }
        },
        []
      )]
    );
  }
};

var HeartIcon = {
  name: 'heart-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-heart" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }
        },
        []
      )]
    );
  }
};

var HelpCircleIcon = {
  name: 'help-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-help-circle" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "17", x2: "12", y2: "17" }
        },
        []
      )]
    );
  }
};

var HomeIcon = {
  name: 'home-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-home" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "9 22 9 12 15 12 15 22" }
        },
        []
      )]
    );
  }
};

var ImageIcon = {
  name: 'image-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-image" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "8.5", cy: "8.5", r: "1.5" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "21 15 16 10 5 21" }
        },
        []
      )]
    );
  }
};

var InboxIcon = {
  name: 'inbox-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-inbox" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "22 13 16 13 14 16 10 16 8 13 2 13" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M5.47 5.19L2 13v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5l-3.47-7.81A2 2 0 0 0 16.7 4H7.3a2 2 0 0 0-1.83 1.19z" }
        },
        []
      )]
    );
  }
};

var InfoIcon = {
  name: 'info-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-info" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "16", x2: "12", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "8", x2: "12", y2: "8" }
        },
        []
      )]
    );
  }
};

var InstagramIcon = {
  name: 'instagram-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-instagram" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "2", y: "2", width: "20", height: "20", rx: "5", ry: "5" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "17.5", y1: "6.5", x2: "17.5", y2: "6.5" }
        },
        []
      )]
    );
  }
};

var ItalicIcon = {
  name: 'italic-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-italic" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "19", y1: "4", x2: "10", y2: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "14", y1: "20", x2: "5", y2: "20" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "15", y1: "4", x2: "9", y2: "20" }
        },
        []
      )]
    );
  }
};

var LayersIcon = {
  name: 'layers-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-layers" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "12 2 2 7 12 12 22 7 12 2" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "2 17 12 22 22 17" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "2 12 12 17 22 12" }
        },
        []
      )]
    );
  }
};

var LayoutIcon = {
  name: 'layout-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-layout" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "9", x2: "21", y2: "9" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "21", x2: "9", y2: "9" }
        },
        []
      )]
    );
  }
};

var LifeBuoyIcon = {
  name: 'life-buoy-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-life-buoy" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4.93", y1: "4.93", x2: "9.17", y2: "9.17" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "14.83", y1: "14.83", x2: "19.07", y2: "19.07" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "14.83", y1: "9.17", x2: "19.07", y2: "4.93" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "14.83", y1: "9.17", x2: "18.36", y2: "5.64" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4.93", y1: "19.07", x2: "9.17", y2: "14.83" }
        },
        []
      )]
    );
  }
};

var Link2Icon = {
  name: 'link2-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-link-2" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "12", x2: "16", y2: "12" }
        },
        []
      )]
    );
  }
};

var LinkIcon = {
  name: 'link-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-link" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" }
        },
        []
      )]
    );
  }
};

var ListIcon = {
  name: 'list-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-list" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "8", y1: "6", x2: "21", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "12", x2: "21", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "18", x2: "21", y2: "18" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "6", x2: "3", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "12", x2: "3", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "18", x2: "3", y2: "18" }
        },
        []
      )]
    );
  }
};

var LoaderIcon = {
  name: 'loader-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-loader" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "12", y1: "2", x2: "12", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "18", x2: "12", y2: "22" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4.93", y1: "4.93", x2: "7.76", y2: "7.76" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16.24", y1: "16.24", x2: "19.07", y2: "19.07" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "2", y1: "12", x2: "6", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "18", y1: "12", x2: "22", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4.93", y1: "19.07", x2: "7.76", y2: "16.24" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16.24", y1: "7.76", x2: "19.07", y2: "4.93" }
        },
        []
      )]
    );
  }
};

var LockIcon = {
  name: 'lock-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-lock" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M7 11V7a5 5 0 0 1 10 0v4" }
        },
        []
      )]
    );
  }
};

var LogInIcon = {
  name: 'log-in-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-log-in" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M14 22h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-5" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "11 16 15 12 11 8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "15", y1: "12", x2: "3", y2: "12" }
        },
        []
      )]
    );
  }
};

var LogOutIcon = {
  name: 'log-out-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-log-out" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M10 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "17 16 21 12 17 8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "12", x2: "9", y2: "12" }
        },
        []
      )]
    );
  }
};

var MailIcon = {
  name: 'mail-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-mail" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "22,6 12,13 2,6" }
        },
        []
      )]
    );
  }
};

var MapPinIcon = {
  name: 'map-pin-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-map-pin" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "10", r: "3" }
        },
        []
      )]
    );
  }
};

var MapIcon = {
  name: 'map-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-map" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "2", x2: "8", y2: "18" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "6", x2: "16", y2: "22" }
        },
        []
      )]
    );
  }
};

var Maximize2Icon = {
  name: 'maximize2-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-maximize-2" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "15 3 21 3 21 9" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "9 21 3 21 3 15" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "3", x2: "14", y2: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "21", x2: "10", y2: "14" }
        },
        []
      )]
    );
  }
};

var MaximizeIcon = {
  name: 'maximize-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-maximize" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" }
        },
        []
      )]
    );
  }
};

var MenuIcon = {
  name: 'menu-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-menu" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "3", y1: "12", x2: "21", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "6", x2: "21", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "18", x2: "21", y2: "18" }
        },
        []
      )]
    );
  }
};

var MessageCircleIcon = {
  name: 'message-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-message-circle" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" }
        },
        []
      )]
    );
  }
};

var MessageSquareIcon = {
  name: 'message-square-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-message-square" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }
        },
        []
      )]
    );
  }
};

var MicOffIcon = {
  name: 'mic-off-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-mic-off" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "1", y1: "1", x2: "23", y2: "23" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "19", x2: "12", y2: "23" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "23", x2: "16", y2: "23" }
        },
        []
      )]
    );
  }
};

var MicIcon = {
  name: 'mic-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-mic" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M19 10v2a7 7 0 0 1-14 0v-2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "19", x2: "12", y2: "23" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "23", x2: "16", y2: "23" }
        },
        []
      )]
    );
  }
};

var Minimize2Icon = {
  name: 'minimize2-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-minimize-2" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "4 14 10 14 10 20" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "20 10 14 10 14 4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "14", y1: "10", x2: "21", y2: "3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "21", x2: "10", y2: "14" }
        },
        []
      )]
    );
  }
};

var MinimizeIcon = {
  name: 'minimize-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-minimize" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" }
        },
        []
      )]
    );
  }
};

var MinusCircleIcon = {
  name: 'minus-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-minus-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "12", x2: "16", y2: "12" }
        },
        []
      )]
    );
  }
};

var MinusSquareIcon = {
  name: 'minus-square-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-minus-square" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "12", x2: "16", y2: "12" }
        },
        []
      )]
    );
  }
};

var MinusIcon = {
  name: 'minus-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-minus" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "5", y1: "12", x2: "19", y2: "12" }
        },
        []
      )]
    );
  }
};

var MonitorIcon = {
  name: 'monitor-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-monitor" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "2", y: "3", width: "20", height: "14", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "21", x2: "16", y2: "21" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "17", x2: "12", y2: "21" }
        },
        []
      )]
    );
  }
};

var MoonIcon = {
  name: 'moon-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-moon" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }
        },
        []
      )]
    );
  }
};

var MoreHorizontalIcon = {
  name: 'more-horizontal-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-more-horizontal" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "2" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "20", cy: "12", r: "2" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "4", cy: "12", r: "2" }
        },
        []
      )]
    );
  }
};

var MoreVerticalIcon = {
  name: 'more-vertical-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-more-vertical" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "2" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "4", r: "2" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "20", r: "2" }
        },
        []
      )]
    );
  }
};

var MoveIcon = {
  name: 'move-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-move" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "5 9 2 12 5 15" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "9 5 12 2 15 5" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "15 19 12 22 9 19" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "19 9 22 12 19 15" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "2", y1: "12", x2: "22", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "2", x2: "12", y2: "22" }
        },
        []
      )]
    );
  }
};

var MusicIcon = {
  name: 'music-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-music" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M9 17H5a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm12-2h-4a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "9 17 9 5 21 3 21 15" }
        },
        []
      )]
    );
  }
};

var Navigation2Icon = {
  name: 'navigation2-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-navigation-2" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "12 2 19 21 12 17 5 21 12 2" }
        },
        []
      )]
    );
  }
};

var NavigationIcon = {
  name: 'navigation-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-navigation" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "3 11 22 2 13 21 11 13 3 11" }
        },
        []
      )]
    );
  }
};

var OctagonIcon = {
  name: 'octagon-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-octagon" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" }
        },
        []
      )]
    );
  }
};

var PackageIcon = {
  name: 'package-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-package" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "2.32 6.16 12 11 21.68 6.16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "22.76", x2: "12", y2: "11" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "7", y1: "3.5", x2: "17", y2: "8.5" }
        },
        []
      )]
    );
  }
};

var PaperclipIcon = {
  name: 'paperclip-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-paperclip" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" }
        },
        []
      )]
    );
  }
};

var PauseCircleIcon = {
  name: 'pause-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-pause-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "10", y1: "15", x2: "10", y2: "9" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "14", y1: "15", x2: "14", y2: "9" }
        },
        []
      )]
    );
  }
};

var PauseIcon = {
  name: 'pause-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-pause" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "6", y: "4", width: "4", height: "16" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "14", y: "4", width: "4", height: "16" }
        },
        []
      )]
    );
  }
};

var PercentIcon = {
  name: 'percent-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-percent" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "19", y1: "5", x2: "5", y2: "19" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "6.5", cy: "6.5", r: "2.5" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "17.5", cy: "17.5", r: "2.5" }
        },
        []
      )]
    );
  }
};

var PhoneCallIcon = {
  name: 'phone-call-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-phone-call" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }
        },
        []
      )]
    );
  }
};

var PhoneForwardedIcon = {
  name: 'phone-forwarded-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-phone-forwarded" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "19 1 23 5 19 9" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "15", y1: "5", x2: "23", y2: "5" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }
        },
        []
      )]
    );
  }
};

var PhoneIncomingIcon = {
  name: 'phone-incoming-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-phone-incoming" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "16 2 16 8 22 8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "23", y1: "1", x2: "16", y2: "8" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }
        },
        []
      )]
    );
  }
};

var PhoneMissedIcon = {
  name: 'phone-missed-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-phone-missed" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "23", y1: "1", x2: "17", y2: "7" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "17", y1: "1", x2: "23", y2: "7" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }
        },
        []
      )]
    );
  }
};

var PhoneOffIcon = {
  name: 'phone-off-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-phone-off" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "23", y1: "1", x2: "1", y2: "23" }
        },
        []
      )]
    );
  }
};

var PhoneOutgoingIcon = {
  name: 'phone-outgoing-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-phone-outgoing" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "23 7 23 1 17 1" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "8", x2: "23", y2: "1" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }
        },
        []
      )]
    );
  }
};

var PhoneIcon = {
  name: 'phone-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-phone" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }
        },
        []
      )]
    );
  }
};

var PieChartIcon = {
  name: 'pie-chart-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-pie-chart" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M21.21 15.89A10 10 0 1 1 8 2.83" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M22 12A10 10 0 0 0 12 2v10z" }
        },
        []
      )]
    );
  }
};

var PlayCircleIcon = {
  name: 'play-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-play-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "polygon",
        {
          attrs: { points: "10 8 16 12 10 16 10 8" }
        },
        []
      )]
    );
  }
};

var PlayIcon = {
  name: 'play-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-play" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "5 3 19 12 5 21 5 3" }
        },
        []
      )]
    );
  }
};

var PlusCircleIcon = {
  name: 'plus-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-plus-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "8", x2: "12", y2: "16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "12", x2: "16", y2: "12" }
        },
        []
      )]
    );
  }
};

var PlusSquareIcon = {
  name: 'plus-square-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-plus-square" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "8", x2: "12", y2: "16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "12", x2: "16", y2: "12" }
        },
        []
      )]
    );
  }
};

var PlusIcon = {
  name: 'plus-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-plus" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "12", y1: "5", x2: "12", y2: "19" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "5", y1: "12", x2: "19", y2: "12" }
        },
        []
      )]
    );
  }
};

var PocketIcon = {
  name: 'pocket-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-pocket" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "8 10 12 14 16 10" }
        },
        []
      )]
    );
  }
};

var PowerIcon = {
  name: 'power-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-power" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M18.36 6.64a9 9 0 1 1-12.73 0" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "2", x2: "12", y2: "12" }
        },
        []
      )]
    );
  }
};

var PrinterIcon = {
  name: 'printer-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-printer" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "6 9 6 2 18 2 18 9" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "6", y: "14", width: "12", height: "8" }
        },
        []
      )]
    );
  }
};

var RadioIcon = {
  name: 'radio-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-radio" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "2" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" }
        },
        []
      )]
    );
  }
};

var RefreshCcwIcon = {
  name: 'refresh-ccw-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-refresh-ccw" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "1 4 1 10 7 10" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "23 20 23 14 17 14" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" }
        },
        []
      )]
    );
  }
};

var RefreshCwIcon = {
  name: 'refresh-cw-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-refresh-cw" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "23 4 23 10 17 10" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "1 20 1 14 7 14" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" }
        },
        []
      )]
    );
  }
};

var RepeatIcon = {
  name: 'repeat-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-repeat" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "17 1 21 5 17 9" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M3 11V9a4 4 0 0 1 4-4h14" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "7 23 3 19 7 15" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M21 13v2a4 4 0 0 1-4 4H3" }
        },
        []
      )]
    );
  }
};

var RewindIcon = {
  name: 'rewind-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-rewind" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "11 19 2 12 11 5 11 19" }
        },
        []
      ), h(
        "polygon",
        {
          attrs: { points: "22 19 13 12 22 5 22 19" }
        },
        []
      )]
    );
  }
};

var RotateCcwIcon = {
  name: 'rotate-ccw-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-rotate-ccw" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "1 4 1 10 7 10" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10" }
        },
        []
      )]
    );
  }
};

var RotateCwIcon = {
  name: 'rotate-cw-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-rotate-cw" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "23 4 23 10 17 10" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10" }
        },
        []
      )]
    );
  }
};

var SaveIcon = {
  name: 'save-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-save" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "17 21 17 13 7 13 7 21" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "7 3 7 8 15 8" }
        },
        []
      )]
    );
  }
};

var ScissorsIcon = {
  name: 'scissors-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-scissors" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "6", cy: "6", r: "3" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "6", cy: "18", r: "3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "20", y1: "4", x2: "8.12", y2: "15.88" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "14.47", y1: "14.48", x2: "20", y2: "20" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8.12", y1: "8.12", x2: "12", y2: "12" }
        },
        []
      )]
    );
  }
};

var SearchIcon = {
  name: 'search-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-search" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "10.5", cy: "10.5", r: "7.5" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "21", x2: "15.8", y2: "15.8" }
        },
        []
      )]
    );
  }
};

var ServerIcon = {
  name: 'server-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-server" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "2", y: "2", width: "20", height: "8", rx: "2", ry: "2" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "2", y: "14", width: "20", height: "8", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "6", y1: "6", x2: "6", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "6", y1: "18", x2: "6", y2: "18" }
        },
        []
      )]
    );
  }
};

var SettingsIcon = {
  name: 'settings-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-settings" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "3" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" }
        },
        []
      )]
    );
  }
};

var Share2Icon = {
  name: 'share2-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-share-2" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "18", cy: "5", r: "3" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "6", cy: "12", r: "3" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "18", cy: "19", r: "3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8.59", y1: "13.51", x2: "15.42", y2: "17.49" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "15.41", y1: "6.51", x2: "8.59", y2: "10.49" }
        },
        []
      )]
    );
  }
};

var ShareIcon = {
  name: 'share-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-share" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "16 6 12 2 8 6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "2", x2: "12", y2: "15" }
        },
        []
      )]
    );
  }
};

var ShieldIcon = {
  name: 'shield-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-shield" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M12 22s8-4 8-10V4l-8-2-8 2v8c0 6 8 10 8 10z" }
        },
        []
      )]
    );
  }
};

var ShoppingCartIcon = {
  name: 'shopping-cart-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-shopping-cart" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "8", cy: "21", r: "2" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "20", cy: "21", r: "2" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M5.67 6H23l-1.68 8.39a2 2 0 0 1-2 1.61H8.75a2 2 0 0 1-2-1.74L5.23 2.74A2 2 0 0 0 3.25 1H1" }
        },
        []
      )]
    );
  }
};

var ShuffleIcon = {
  name: 'shuffle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-shuffle" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "16 3 21 3 21 8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4", y1: "20", x2: "21", y2: "3" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "21 16 21 21 16 21" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "15", y1: "15", x2: "21", y2: "21" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4", y1: "4", x2: "9", y2: "9" }
        },
        []
      )]
    );
  }
};

var SidebarIcon = {
  name: 'sidebar-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-sidebar" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "3", x2: "9", y2: "21" }
        },
        []
      )]
    );
  }
};

var SkipBackIcon = {
  name: 'skip-back-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-skip-back" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "19 20 9 12 19 4 19 20" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "5", y1: "19", x2: "5", y2: "5" }
        },
        []
      )]
    );
  }
};

var SkipForwardIcon = {
  name: 'skip-forward-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-skip-forward" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "5 4 15 12 5 20 5 4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "19", y1: "5", x2: "19", y2: "19" }
        },
        []
      )]
    );
  }
};

var SlackIcon = {
  name: 'slack-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-slack" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M22.08 9C19.81 1.41 16.54-.35 9 1.92S-.35 7.46 1.92 15 7.46 24.35 15 22.08 24.35 16.54 22.08 9z" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12.57", y1: "5.99", x2: "16.15", y2: "16.39" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "7.85", y1: "7.61", x2: "11.43", y2: "18.01" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16.39", y1: "7.85", x2: "5.99", y2: "11.43" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "18.01", y1: "12.57", x2: "7.61", y2: "16.15" }
        },
        []
      )]
    );
  }
};

var SlashIcon = {
  name: 'slash-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-slash" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4.93", y1: "4.93", x2: "19.07", y2: "19.07" }
        },
        []
      )]
    );
  }
};

var SlidersIcon = {
  name: 'sliders-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-sliders" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "4", y1: "21", x2: "4", y2: "14" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4", y1: "10", x2: "4", y2: "3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "21", x2: "12", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "8", x2: "12", y2: "3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "20", y1: "21", x2: "20", y2: "16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "20", y1: "12", x2: "20", y2: "3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "14", x2: "7", y2: "14" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "8", x2: "15", y2: "8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "17", y1: "16", x2: "23", y2: "16" }
        },
        []
      )]
    );
  }
};

var SmartphoneIcon = {
  name: 'smartphone-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-smartphone" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "5", y: "2", width: "14", height: "20", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "18", x2: "12", y2: "18" }
        },
        []
      )]
    );
  }
};

var SpeakerIcon = {
  name: 'speaker-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-speaker" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "4", y: "2", width: "16", height: "20", rx: "2", ry: "2" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "14", r: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "6", x2: "12", y2: "6" }
        },
        []
      )]
    );
  }
};

var SquareIcon = {
  name: 'square-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-square" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }
        },
        []
      )]
    );
  }
};

var StarIcon = {
  name: 'star-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-star" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }
        },
        []
      )]
    );
  }
};

var StopCircleIcon = {
  name: 'stop-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-stop-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "9", y: "9", width: "6", height: "6" }
        },
        []
      )]
    );
  }
};

var SunIcon = {
  name: 'sun-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-sun" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "5" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "1", x2: "12", y2: "3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "21", x2: "12", y2: "23" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "12", x2: "3", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "12", x2: "23", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" }
        },
        []
      )]
    );
  }
};

var SunriseIcon = {
  name: 'sunrise-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-sunrise" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M17 18a5 5 0 0 0-10 0" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "2", x2: "12", y2: "9" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4.22", y1: "10.22", x2: "5.64", y2: "11.64" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "18", x2: "3", y2: "18" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "18", x2: "23", y2: "18" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "18.36", y1: "11.64", x2: "19.78", y2: "10.22" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "23", y1: "22", x2: "1", y2: "22" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "8 6 12 2 16 6" }
        },
        []
      )]
    );
  }
};

var SunsetIcon = {
  name: 'sunset-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-sunset" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M17 18a5 5 0 0 0-10 0" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "9", x2: "12", y2: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4.22", y1: "10.22", x2: "5.64", y2: "11.64" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "18", x2: "3", y2: "18" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "18", x2: "23", y2: "18" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "18.36", y1: "11.64", x2: "19.78", y2: "10.22" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "23", y1: "22", x2: "1", y2: "22" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "16 5 12 9 8 5" }
        },
        []
      )]
    );
  }
};

var TabletIcon = {
  name: 'tablet-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-tablet" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "4", y: "2", width: "16", height: "20", rx: "2", ry: "2", transform: "rotate(180 12 12)" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "18", x2: "12", y2: "18" }
        },
        []
      )]
    );
  }
};

var TagIcon = {
  name: 'tag-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-tag" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "7", y1: "7", x2: "7", y2: "7" }
        },
        []
      )]
    );
  }
};

var TargetIcon = {
  name: 'target-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-target" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "6" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "2" }
        },
        []
      )]
    );
  }
};

var ThermometerIcon = {
  name: 'thermometer-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-thermometer" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" }
        },
        []
      )]
    );
  }
};

var ThumbsDownIcon = {
  name: 'thumbs-down-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-thumbs-down" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" }
        },
        []
      )]
    );
  }
};

var ThumbsUpIcon = {
  name: 'thumbs-up-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-thumbs-up" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" }
        },
        []
      )]
    );
  }
};

var ToggleLeftIcon = {
  name: 'toggle-left-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-toggle-left" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "1", y: "5", width: "22", height: "14", rx: "7", ry: "7" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "8", cy: "12", r: "3" }
        },
        []
      )]
    );
  }
};

var ToggleRightIcon = {
  name: 'toggle-right-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-toggle-right" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "1", y: "5", width: "22", height: "14", rx: "7", ry: "7" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "16", cy: "12", r: "3" }
        },
        []
      )]
    );
  }
};

var Trash2Icon = {
  name: 'trash2-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-trash-2" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "3 6 5 6 21 6" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "10", y1: "11", x2: "10", y2: "17" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "14", y1: "11", x2: "14", y2: "17" }
        },
        []
      )]
    );
  }
};

var TrashIcon = {
  name: 'trash-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-trash" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "3 6 5 6 21 6" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }
        },
        []
      )]
    );
  }
};

var TrendingDownIcon = {
  name: 'trending-down-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-trending-down" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "23 18 13.5 8.5 8.5 13.5 1 6" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "17 18 23 18 23 12" }
        },
        []
      )]
    );
  }
};

var TrendingUpIcon = {
  name: 'trending-up-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-trending-up" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "23 6 13.5 15.5 8.5 10.5 1 18" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "17 6 23 6 23 12" }
        },
        []
      )]
    );
  }
};

var TriangleIcon = {
  name: 'triangle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-triangle" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }
        },
        []
      )]
    );
  }
};

var TvIcon = {
  name: 'tv-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-tv" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "2", y: "7", width: "20", height: "15", rx: "2", ry: "2" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "17 2 12 7 7 2" }
        },
        []
      )]
    );
  }
};

var TwitterIcon = {
  name: 'twitter-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-twitter" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" }
        },
        []
      )]
    );
  }
};

var TypeIcon = {
  name: 'type-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-type" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "4 7 4 4 20 4 20 7" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "20", x2: "15", y2: "20" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "4", x2: "12", y2: "20" }
        },
        []
      )]
    );
  }
};

var UmbrellaIcon = {
  name: 'umbrella-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-umbrella" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7" }
        },
        []
      )]
    );
  }
};

var UnderlineIcon = {
  name: 'underline-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-underline" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4", y1: "21", x2: "20", y2: "21" }
        },
        []
      )]
    );
  }
};

var UnlockIcon = {
  name: 'unlock-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-unlock" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M7 11V7a5 5 0 0 1 9.9-1" }
        },
        []
      )]
    );
  }
};

var UploadCloudIcon = {
  name: 'upload-cloud-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-upload-cloud" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "16 16 12 12 8 16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "12", x2: "12", y2: "21" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "16 16 12 12 8 16" }
        },
        []
      )]
    );
  }
};

var UploadIcon = {
  name: 'upload-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-upload" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M3 17v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "16 6 12 2 8 6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "2", x2: "12", y2: "16" }
        },
        []
      )]
    );
  }
};

var UserCheckIcon = {
  name: 'user-check-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-user-check" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "8.5", cy: "7", r: "4" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "17 11 19 13 23 9" }
        },
        []
      )]
    );
  }
};

var UserMinusIcon = {
  name: 'user-minus-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-user-minus" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "8.5", cy: "7", r: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "23", y1: "11", x2: "17", y2: "11" }
        },
        []
      )]
    );
  }
};

var UserPlusIcon = {
  name: 'user-plus-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-user-plus" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "8.5", cy: "7", r: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "20", y1: "8", x2: "20", y2: "14" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "23", y1: "11", x2: "17", y2: "11" }
        },
        []
      )]
    );
  }
};

var UserXIcon = {
  name: 'user-x-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-user-x" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "8.5", cy: "7", r: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "18", y1: "8", x2: "23", y2: "13" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "23", y1: "8", x2: "18", y2: "13" }
        },
        []
      )]
    );
  }
};

var UserIcon = {
  name: 'user-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-user" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "7", r: "4" }
        },
        []
      )]
    );
  }
};

var UsersIcon = {
  name: 'users-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-users" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "9", cy: "7", r: "4" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M23 21v-2a4 4 0 0 0-3-3.87" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M16 3.13a4 4 0 0 1 0 7.75" }
        },
        []
      )]
    );
  }
};

var VideoOffIcon = {
  name: 'video-off-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-video-off" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "1", x2: "23", y2: "23" }
        },
        []
      )]
    );
  }
};

var VideoIcon = {
  name: 'video-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-video" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "23 7 16 12 23 17 23 7" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "1", y: "5", width: "15", height: "14", rx: "2", ry: "2" }
        },
        []
      )]
    );
  }
};

var VoicemailIcon = {
  name: 'voicemail-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-voicemail" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "5.5", cy: "11.5", r: "4.5" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "18.5", cy: "11.5", r: "4.5" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "5.5", y1: "16", x2: "18.5", y2: "16" }
        },
        []
      )]
    );
  }
};

var Volume1Icon = {
  name: 'volume1-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-volume-1" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }
        },
        []
      )]
    );
  }
};

var Volume2Icon = {
  name: 'volume2-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-volume-2" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" }
        },
        []
      )]
    );
  }
};

var VolumeXIcon = {
  name: 'volume-x-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-volume-x" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "23", y1: "9", x2: "17", y2: "15" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "17", y1: "9", x2: "23", y2: "15" }
        },
        []
      )]
    );
  }
};

var VolumeIcon = {
  name: 'volume-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-volume" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }
        },
        []
      )]
    );
  }
};

var WatchIcon = {
  name: 'watch-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-watch" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "7" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "12 9 12 12 13.5 13.5" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83" }
        },
        []
      )]
    );
  }
};

var WifiOffIcon = {
  name: 'wifi-off-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-wifi-off" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "1", y1: "1", x2: "23", y2: "23" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M16.72 11.06A10.94 10.94 0 0 1 19 12.55" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M5 12.55a10.94 10.94 0 0 1 5.17-2.39" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M10.71 5.05A16 16 0 0 1 22.58 9" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M1.42 9a15.91 15.91 0 0 1 4.7-2.88" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M8.53 16.11a6 6 0 0 1 6.95 0" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "20", x2: "12", y2: "20" }
        },
        []
      )]
    );
  }
};

var WifiIcon = {
  name: 'wifi-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-wifi" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M5 12.55a11 11 0 0 1 14.08 0" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M1.42 9a16 16 0 0 1 21.16 0" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M8.53 16.11a6 6 0 0 1 6.95 0" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "20", x2: "12", y2: "20" }
        },
        []
      )]
    );
  }
};

var WindIcon = {
  name: 'wind-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-wind" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" }
        },
        []
      )]
    );
  }
};

var XCircleIcon = {
  name: 'x-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-x-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "15", y1: "9", x2: "9", y2: "15" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "9", x2: "15", y2: "15" }
        },
        []
      )]
    );
  }
};

var XSquareIcon = {
  name: 'x-square-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-x-square" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "9", x2: "15", y2: "15" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "15", y1: "9", x2: "9", y2: "15" }
        },
        []
      )]
    );
  }
};

var XIcon = {
  name: 'x-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-x" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "18", y1: "6", x2: "6", y2: "18" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "6", y1: "6", x2: "18", y2: "18" }
        },
        []
      )]
    );
  }
};

var ZapIcon = {
  name: 'zap-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-zap" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" }
        },
        []
      )]
    );
  }
};

var ZoomInIcon = {
  name: 'zoom-in-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-zoom-in" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "11", cy: "11", r: "8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "11", y1: "8", x2: "11", y2: "14" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "11", x2: "14", y2: "11" }
        },
        []
      )]
    );
  }
};

var ZoomOutIcon = {
  name: 'zoom-out-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-zoom-out" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "11", cy: "11", r: "8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "11", x2: "14", y2: "11" }
        },
        []
      )]
    );
  }
};




/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(24);

var PROTECTION_PREFIX = /^\)\]\}',?\n/;
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(8);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(8);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      data = data.replace(PROTECTION_PREFIX, '');
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)))

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var store = {
  json: '{"characters":[{"name":"Nadege","blood":{"freeSlots":2,"stress":3},"mind":{"freeSlots":1,"stress":4},"shadow":{"freeSlots":0,"stress":0},"silver":{"freeSlots":0,"stress":7},"reputation":{"freeSlots":1,"stress":0}}]}', // some dummy starting data
  data: {},

  load: function load() {
    var d = localStorage.getItem('estresso') || this.json;
    this.data = JSON.parse(d);

    return this.data;
  },
  save: function save() {
    this.json = JSON.stringify(this.data);
    localStorage.setItem('estresso', this.json);

    return this.data;
  },


  resistances: ['blood', 'mind', 'shadow', 'silver', 'reputation']
};

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(46),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/mottokrosh/Projects/spire-stress-tracker/src/components/btn.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] btn.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c3bd25c", Component.options)
  } else {
    hotAPI.reload("data-v-7c3bd25c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(25);
var buildURL = __webpack_require__(27);
var parseHeaders = __webpack_require__(28);
var isURLSameOrigin = __webpack_require__(29);
var createError = __webpack_require__(9);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(30);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(31);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        if (request.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(26);

/**
 * Create an Error with the specified message, config, error code, and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, response);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * vue-motion v0.2.0
 * (c) 2017 Eduardo San Martin Morote
 * Released under the MIT License.
 */

(function (global, factory) {
	 true ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.VueMotion = global.VueMotion || {})));
}(this, (function (exports) { 'use strict';

/* @flow */

// stepper is used a lot. Saves allocation to return the same array wrapper.
// This is fine and danger-free against mutations because the callsite
// immediately destructures it and gets the numbers inside without passing the
// array reference around.
var reusedTuple = [0, 0];
function stepper (
  secondPerFrame,
  x,
  v,
  destX,
  k,
  b,
  precision
) {
  // Spring stiffness, in kg / s^2

  // for animations, destX is really spring length (spring at rest). initial
  // position is considered as the stretched/compressed position of a spring
  var Fspring = -k * (x - destX);

  // Damping, in kg / s
  var Fdamper = -b * v;

  // usually we put mass here, but for animation purposes, specifying mass is a
  // bit redundant. you could simply adjust k and b accordingly
  // let a = (Fspring + Fdamper) / mass
  var a = Fspring + Fdamper;

  var newV = v + a * secondPerFrame;
  var newX = x + newV * secondPerFrame;

  if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
    reusedTuple[0] = destX;
    reusedTuple[1] = 0;
    return reusedTuple
  }

  reusedTuple[0] = newX;
  reusedTuple[1] = newV;
  return reusedTuple
}

/* @flow */
var presets = {
  noWobble: { stiffness: 170, damping: 26, precision: 0.01 }, // the default, if nothing provided
  gentle: { stiffness: 120, damping: 14, precision: 0.01 },
  wobbly: { stiffness: 180, damping: 12, precision: 0.01 },
  stiff: { stiffness: 210, damping: 20, precision: 0.01 },
};

var raf = window.requestAnimationFrame.bind(window);
var now = performance.now.bind(performance);
var isArray = Array.isArray.bind(Array);
var isObject = function (value) { return value !== null && typeof value === 'object'; };

var msPerFrame = 1000 / 60;

var Motion = {
  data: function data () {
    return {
      currentValues: null,
      currentVelocities: null,
    }
  },

  props: {
    value: Number,
    values: [Object, Array],
    tag: {
      type: String,
      default: 'span',
    },
    spring: {
      type: [Object, String],
      default: 'noWobble',
    },
  },

  computed: {
    springConfig: function springConfig () {
      return typeof this.spring === 'string'
        ? presets[this.spring]
        : this.spring
    },
    realValues: function realValues () {
      return this.value != null
        ? { value: this.value }
        : this.values
    },
  },

  render: function render (h) {
    return h(this.tag, [
      this.$scopedSlots.default(this.currentValues) ])
  },

  watch: {
    realValues: function realValues (current, old) {
      if (old !== current && !this.wasAnimating) {
        this.prevTime = now();
        this.accumulatedTime = 0;
        this.animate();
      }
    },
  },

  created: function created () {
    var current = this.defineInitialValues(this.realValues, null);

    this.currentValues = current.values;
    this.currentVelocities = current.velocities;
  },

  mounted: function mounted () {
    this.prevTime = now();
    this.accumulatedTime = 0;

    var ideal = this.defineInitialValues(this.currentValues, this.currentVelocities);

    this.idealValues = ideal.values;
    this.idealVelocities = ideal.velocities;

    this.animate();
  },

  methods: {
    defineInitialValues: function defineInitialValues (values, velocities) {
      var newValues = {};
      var newVelocities = {};

      this.defineValues(values, velocities, newValues, newVelocities);

      return { values: newValues, velocities: newVelocities }
    },

    defineValues: function defineValues (values, velocities, newValues, newVelocities) {
      var this$1 = this;

      for (var key in values) {
        // istanbul ignore if
        if (!Object.prototype.hasOwnProperty.call(values, key)) { continue }

        if (isArray(values[key]) || isObject(values[key])) {
          newValues[key] = {};
          newVelocities[key] = {};

          this$1.defineValues(
            values[key],
            velocities && velocities[key],
            newValues[key],
            newVelocities[key]
          );

          continue
        }

        newValues[key] = values[key];
        newVelocities[key] = velocities ? velocities[key] : 0;
      }
    },

    animate: function animate () {
      var this$1 = this;

      this.animationId = raf(function () {
        if (shouldStopAnimation(
          this$1.currentValues,
          this$1.realValues,
          this$1.currentVelocities
        )) {
          if (this$1.wasAnimating) { this$1.$emit('motion-end'); }

          // reset everything for next animation
          this$1.animationId = null;
          this$1.wasAnimating = false;
          return
        }

        if (!this$1.wasAnimating) { this$1.$emit('motion-start'); }
        this$1.wasAnimating = true;

        // get time from last frame
        var currentTime = now();
        var timeDelta = currentTime - this$1.prevTime;
        this$1.prevTime = currentTime;
        this$1.accumulatedTime += timeDelta;

        // more than 10 frames? prolly switched browser tab. Restart
        if (this$1.accumulatedTime > msPerFrame * 10) {
          this$1.accumulatedTime = 0;
        }

        if (this$1.accumulatedTime === 0) {
          // no need to cancel animationID here; shouldn't have any in flight
          this$1.animationID = null;
          this$1.$emit('motion-restart');
          this$1.animate();
          return
        }

        var currentFrameCompletion =
          (this$1.accumulatedTime - Math.floor(this$1.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
        var framesToCatchUp = Math.floor(this$1.accumulatedTime / msPerFrame);
        var springConfig = this$1.springConfig;

        this$1.animateValues({
          framesToCatchUp: framesToCatchUp,
          currentFrameCompletion: currentFrameCompletion,
          springConfig: springConfig,
          realValues: this$1.realValues,
          currentValues: this$1.currentValues,
          currentVelocities: this$1.currentVelocities,
          idealValues: this$1.idealValues,
          idealVelocities: this$1.idealVelocities,
        });

        // out of the update loop
        this$1.animationID = null;
        // the amount we're looped over above
        this$1.accumulatedTime -= framesToCatchUp * msPerFrame;

        // keep going!
        this$1.animate();
      });
    },

    animateValues: function animateValues (ref) {
      var this$1 = this;
      var framesToCatchUp = ref.framesToCatchUp;
      var currentFrameCompletion = ref.currentFrameCompletion;
      var springConfig = ref.springConfig;
      var realValues = ref.realValues;
      var currentValues = ref.currentValues;
      var currentVelocities = ref.currentVelocities;
      var idealValues = ref.idealValues;
      var idealVelocities = ref.idealVelocities;

      for (var key in realValues) {
        // istanbul ignore if
        if (!Object.prototype.hasOwnProperty.call(realValues, key)) { continue }

        if (isArray(realValues[key]) || isObject(realValues[key])) {
          this$1.animateValues({
            framesToCatchUp: framesToCatchUp,
            currentFrameCompletion: currentFrameCompletion,
            springConfig: springConfig,
            realValues: realValues[key],
            currentValues: currentValues[key],
            currentVelocities: currentVelocities[key],
            idealValues: idealValues[key],
            idealVelocities: idealVelocities[key],
          });

          // nothing to animate
          continue
        }

        var newIdealValue = idealValues[key];
        var newIdealVelocity = idealVelocities[key];
        var value = realValues[key];

        // iterate as if the animation took place
        for (var i = 0; i < framesToCatchUp; i++) {
          var assign;
          (assign = stepper(
            msPerFrame / 1000,
            newIdealValue,
            newIdealVelocity,
            value,
            springConfig.stiffness,
            springConfig.damping,
            springConfig.precision
          ), newIdealValue = assign[0], newIdealVelocity = assign[1]);
        }

        var ref$1 = stepper(
          msPerFrame / 1000,
          newIdealValue,
          newIdealVelocity,
          value,
          springConfig.stiffness,
          springConfig.damping,
          springConfig.precision
        );
        var nextIdealValue = ref$1[0];
        var nextIdealVelocity = ref$1[1];

        currentValues[key] =
          newIdealValue +
          (nextIdealValue - newIdealValue) * currentFrameCompletion;
        currentVelocities[key] =
          newIdealVelocity +
          (nextIdealVelocity - newIdealVelocity) * currentFrameCompletion;
        idealValues[key] = newIdealValue;
        idealVelocities[key] = newIdealVelocity;
      }
    },
  },
};

function shouldStopAnimation (currentValues, values, currentVelocities) {
  for (var key in values) {
    // istanbul ignore if
    if (!Object.prototype.hasOwnProperty.call(values, key)) { continue }

    if (isArray(values[key]) || isObject(values[key])) {
      if (!shouldStopAnimation(
        currentValues[key],
        values[key],
        currentVelocities[key])) {
        return false
      }
      // skip the other checks
      continue
    }

    if (currentVelocities[key] !== 0) { return false }

    // stepper will have already taken care of rounding precision errors, so
    // won't have such thing as 0.9999 !=== 1
    if (currentValues[key] !== values[key]) { return false }
  }

  return true
}

function plugin (Vue) {
  Vue.component('Motion', Motion);
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

// Allow doing VueMotion.presets.custom = ...
plugin.presets = presets;

var version = '0.2.0';

exports['default'] = plugin;
exports.Motion = Motion;
exports.version = version;
exports.presets = presets;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(54),
  /* template */
  __webpack_require__(55),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/mottokrosh/Projects/spire-stress-tracker/src/components/icon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] icon.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-594ddb1a", Component.options)
  } else {
    hotAPI.reload("data-v-594ddb1a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_estresso_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_estresso_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_estresso_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_btn_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_btn_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_btn_vue__);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('btn', __WEBPACK_IMPORTED_MODULE_2__components_btn_vue___default.a);

Array.prototype.shuffle = function () {
  var x = this.slice(),
      y = [];
  while (x.length) {
    y.push(x.splice(Math.floor(Math.random() * x.length), 1)[0]);
  }
  return y;
};

var app = {
  isWebView: function isWebView() {
    return document.location.protocol === 'file:';
  },
  initialize: function initialize() {
    if (this.isWebView()) {
      document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    } else {
      this.onDeviceReady();
    }
  },
  onDeviceReady: function onDeviceReady() {
    new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
      el: '#app',

      components: {
        Estresso: __WEBPACK_IMPORTED_MODULE_1__components_estresso_vue___default.a
      }
    });
  }
};

app.initialize();

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.4.2
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */


/*  */

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

var _toString = Object.prototype.toString;

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(val);
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

var warn = noop;
var tip = noop;
var formatComponentName = (null); // work around flow check

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var name = typeof vm === 'string'
      ? vm
      : typeof vm === 'function' && vm.options
        ? vm.options.name
        : vm._isVue
          ? vm.$options.name || vm.$options._componentTag
          : vm.name;

    var file = vm._isVue && vm.$options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  var generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

function handleError (err, vm, info) {
  if (config.errorHandler) {
    config.errorHandler.call(null, err, vm, info);
  } else {
    if (true) {
      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    }
    /* istanbul ignore else */
    if (inBrowser && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }
}

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefix has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function (err) { console.error(err); };
    timerFunc = function () {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  } else if (typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve, reject) {
        _resolve = resolve;
      })
    }
  }
})();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (hasOwn(target, key)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this) : parentVal
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn.call(this, parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal
    ? extend(res, childVal)
    : res
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (parentVal, childVal) {
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options) {
  var inject = options.inject;
  if (Array.isArray(inject)) {
    var normalized = options.inject = {};
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = inject[i];
    }
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child);
  normalizeInject(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (true) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      'Invalid prop: type check failed for prop "' + name + '".' +
      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    valid = typeof value === expectedType.toLowerCase();
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      "referenced during render. Make sure to declare reactive data " +
      "properties in the data option.",
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: {} };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.isCloned = true;
  return cloned
}

function cloneVNodes (vnodes) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    last = res[res.length - 1];
    //  nested
    if (Array.isArray(c)) {
      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        (last).text += String(c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[res.length - 1] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (comp.__esModule && comp.default) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && isDef(c.componentOptions)) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once$$1) {
  if (once$$1) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        this$1.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  var defaultSlot = [];
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
      child.data && child.data.slot != null
    ) {
      var name = child.data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore whitespace
  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }
  return slots
}

function isWhitespace (node) {
  return node.isComment || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure((name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure((name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listensers hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data && parentVnode.data.attrs;
  vm.$listeners = listeners;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function checkOptionType (vm, name) {
  var option = vm.$options[name];
  if (!isPlainObject(option)) {
    warn(
      ("component option \"" + name + "\" should be an object."),
      vm
    );
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      if (isReservedAttribute(key) || config.isReservedAttr(key)) {
        warn(
          ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  "development" !== 'production' && checkOptionType(vm, 'computed');
  var watchers = vm._computedWatchers = Object.create(null);

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }
    // create internal watcher for the computed property.
    watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (target, key, userDef) {
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(key);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  "development" !== 'production' && checkOptionType(vm, 'methods');
  var props = vm.$options.props;
  for (var key in methods) {
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    if (true) {
      if (methods[key] == null) {
        warn(
          "method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
    }
  }
}

function initWatch (vm, watch) {
  "development" !== 'production' && checkOptionType(vm, 'watch');
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  keyOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(keyOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    observerState.shouldConvert = true;
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key];
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if ("development" !== 'production' && !source) {
        warn(("Injection \"" + key + "\" not found"), vm);
      }
    }
    return result
  }
}

/*  */

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  context,
  children
) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || {});
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var _context = Object.create(context);
  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
  var vnode = Ctor.options.render.call(null, h, {
    data: data,
    props: props,
    children: children,
    parent: context,
    listeners: data.on || {},
    injections: resolveInject(Ctor.options.inject, context),
    slots: function () { return resolveSlots(children, context); }
  });
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    vnode.functionalOptions = Ctor.options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    warn(
      'Avoid using non-primitive value as key, ' +
      'use string/number value instead.',
      context
    );
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    return
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && isUndef(child.ns)) {
        applyNS(child, ns);
      }
    }
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      props = extend(extend({}, bindObject), props);
    }
    return scopedSlotFn(props) || fallback
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && "development" !== 'production') {
      slotNodes._rendered && warn(
        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
        "- this will likely cause render errors.",
        this
      );
      slotNodes._rendered = true;
    }
    return slotNodes || fallback
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (Array.isArray(keyCodes)) {
    return keyCodes.indexOf(eventKeyCode) === -1
  } else {
    return keyCodes !== eventKeyCode
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var tree = this._staticTrees[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = this._staticTrees[index] =
    this.$options.staticRenderFns[index].call(this._renderProxy);
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(ours, existing) : ours;
      }
    }
  }
  return data
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  var parentVnode = vm.$vnode = vm.$options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;
  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', vm.$options._parentListeners, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs, null, true);
    defineReactive$$1(vm, '$listeners', vm.$options._parentListeners, null, true);
  }
}

function renderMixin (Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render function");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (true) {
        vnode = vm.$options.renderError
          ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e)
          : vm._vnode;
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };

  // internal render helpers.
  // these are exposed on the instance prototype to reduce generated render
  // code size.
  Vue.prototype._o = markOnce;
  Vue.prototype._n = toNumber;
  Vue.prototype._s = toString;
  Vue.prototype._l = renderList;
  Vue.prototype._t = renderSlot;
  Vue.prototype._q = looseEqual;
  Vue.prototype._i = looseIndexOf;
  Vue.prototype._m = renderStatic;
  Vue.prototype._f = resolveFilter;
  Vue.prototype._k = checkKeyCodes;
  Vue.prototype._b = bindObjectProps;
  Vue.prototype._v = createTextVNode;
  Vue.prototype._e = createEmptyVNode;
  Vue.prototype._u = resolveScopedSlots;
  Vue.prototype._g = bindObjectListeners;
}

/*  */

var uid$1 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$1++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-init:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(((vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue$3)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (true) {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (true) {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

var patternTypes = [String, RegExp, Array];

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (cache, current, filter) {
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        if (cachedNode !== current) {
          pruneCacheEntry(cachedNode);
        }
        cache[key] = null;
      }
    }
  }
}

function pruneCacheEntry (vnode) {
  if (vnode) {
    vnode.componentInstance.$destroy();
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes
  },

  created: function created () {
    this.cache = Object.create(null);
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache[key]);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this.cache, this._vnode, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this.cache, this._vnode, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

Vue$3.version = '2.4.2';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

// Some browsers do not support dynamically changing type for <input>
// so they need to be treated as different nodes
function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          inPre++;
        }
        if (
          !inPre &&
          !vnode.ns &&
          !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        inPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    var ancestor = vnode;
    while (ancestor) {
      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
      ancestor = ancestor.parent;
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if ("development" !== 'production' && !elmToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.elm = elm;
      vnode.isAsyncPlaceholder = true;
      return true
    }
    if (true) {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;
          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
              childrenMatch = false;
              break
            }
            childNode = childNode.nextSibling;
          }
          // if childNode is not null, it means the actual childNodes list is
          // longer than the virtual children list.
          if (!childrenMatch || childNode) {
            if ("development" !== 'production' &&
              typeof console !== 'undefined' &&
              !bailed
            ) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
            }
            return false
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (isDef(vnode.tag)) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  /* istanbul ignore if */
  if (isIE9 && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, key);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers && modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }
  // check capture modifier
  if (modifiers && modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers && modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers && modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }
  var events;
  if (modifiers && modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }
  var newHandler = { value: value, modifiers: modifiers };
  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

function getAndRemoveAttr (el, name) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var modelRs = parseModel(value);
  if (modelRs.idx === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (modelRs.exp) + ", " + (modelRs.idx) + ", " + assignment + ")")
  }
}

/**
 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
 *
 * for loop possible cases:
 *
 * - test
 * - test[idx]
 * - test[test1[idx]]
 * - test["a"][idx]
 * - xxx.test[a[a].test1[idx]]
 * - test.xxx.a["asa"][test1[idx]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;

function parseModel (val) {
  str = val;
  len = str.length;
  index$1 = expressionPos = expressionEndPos = 0;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    return {
      exp: val,
      idx: null
    }
  }

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.substring(0, expressionPos),
    idx: val.substring(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (true) {
    var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (tag === 'input' && dynamicType) {
      warn$1(
        "<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" +
        "v-model does not support dynamic input types. Use v-if branches instead."
      );
    }
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (true) {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
  );
  addHandler(el, CHECKBOX_RADIO_TOKEN,
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + value + "=$$a.concat($$v))}" +
      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, CHECKBOX_RADIO_TOKEN, genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;
  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  var event;
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    // Chrome fires microtasks in between click/change, leads to #4521
    event = isChrome ? 'click' : 'change';
    on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  if (once$$1) {
    var oldHandler = handler;
    var _target = target$1; // save current target element in closure
    handler = function (ev) {
      var res = arguments.length === 1
        ? oldHandler(ev)
        : oldHandler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, handler, capture, _target);
      }
    };
  }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(event, handler, capture);
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, vnode, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (
  elm,
  vnode,
  checkVal
) {
  return (!elm.composing && (
    vnode.tag === 'option' ||
    isDirty(elm, checkVal) ||
    isInputChanged(elm, checkVal)
  ))
}

function isDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isInputChanged (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers) && modifiers.number) {
    return toNumber(value) !== toNumber(newVal)
  }
  if (isDef(modifiers) && modifiers.trim) {
    return value.trim() !== newVal.trim()
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likley wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser && window.requestAnimationFrame
  ? window.requestAnimationFrame.bind(window)
  : setTimeout;

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model$1 = {
  inserted: function inserted (el, binding, vnode) {
    if (vnode.tag === 'select') {
      var cb = function () {
        setSelected(el, binding, vnode.context);
      };
      cb();
      /* istanbul ignore if */
      if (isIE || isEdge) {
        setTimeout(cb, 0);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        trigger(el, 'change');
      }
    }
  }
};

function setSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model$1,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$options._renderChildren;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild && (oldChild.data.transition = extend({}, data));
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    var body = document.body;
    var f = body.offsetHeight; // eslint-disable-line

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if ("development" !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if ("development" !== 'production' &&
    config.productionTip !== false &&
    inBrowser && typeof console !== 'undefined'
  ) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

// check whether current browser encodes a char inside attribute values
function shouldDecode (content, encoded) {
  var div = document.createElement('div');
  div.innerHTML = "<div a=\"" + content + "\"/>";
  return div.innerHTML.indexOf(encoded) > 0
}

// #3663
// IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});

function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push(JSON.stringify(text.slice(lastIndex)));
  }
  return tokens.join('+')
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var expression = parseText(staticClass, options.delimiters);
    if (expression) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (true) {
      var expression = parseText(staticStyle, options.delimiters);
      if (expression) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

var modules$1 = [
  klass$1,
  style$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var singleAttrIdentifier = /([^\s"'<>/=]+)/;
var singleAttrAssign = /(?:=)/;
var singleAttrValues = [
  // attr value double quotes
  /"([^"]*)"+/.source,
  // attr value, single quotes
  /'([^']*)'+/.source,
  // attr value, no quotes
  /([^\s"'=<>`]+)/.source
];
var attribute = new RegExp(
  '^\\s*' + singleAttrIdentifier.source +
  '(?:\\s*(' + singleAttrAssign.source + ')' +
  '\\s*(?:' + singleAttrValues.join('|') + '))?'
);

// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
var startTagOpen = new RegExp('^<' + qnameCapture);
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!--([\s\S]*?)-->/g, '$1')
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      attrs[i] = {
        name: args[1],
        value: decodeAttr(
          value,
          options.shouldDecodeNewlines
        )
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function endPre (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = {
        type: 1,
        tag: tag,
        attrsList: attrs,
        attrsMap: makeAttrsMap(attrs),
        parent: currentParent,
        children: []
      };
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        preTransforms[i](element, options);
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else {
        processFor(element);
        processIf(element);
        processOnce(element);
        processKey(element);

        // determine whether this is a plain element after
        // removing structural attributes
        element.plain = !element.key && !attrs.length;

        processRef(element);
        processSlot(element);
        processComponent(element);
        for (var i$1 = 0; i$1 < transforms.length; i$1++) {
          transforms[i$1](element, options);
        }
        processAttrs(element);
      }

      function checkRootConstraints (el) {
        if (true) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (true) {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        endPre(element);
      }
      // apply post-transforms
      for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
        postTransforms[i$2](element, options);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      endPre(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (true) {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var expression;
        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: expression,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) {
      "development" !== 'production' && warn$2(
        ("Invalid v-for expression: " + exp)
      );
      return
    }
    el.for = inMatch[2].trim();
    var alias = inMatch[1].trim();
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      el.alias = iteratorMatch[1].trim();
      el.iterator1 = iteratorMatch[2].trim();
      if (iteratorMatch[3]) {
        el.iterator2 = iteratorMatch[3].trim();
      }
    } else {
      el.alias = alias;
    }
  }
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (true) {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    }
    if (el.tag === 'template') {
      el.slotScope = getAndRemoveAttr(el, 'scope');
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (true) {
        var expression = parseText(value, delimiters);
        if (expression) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    var handler = events[name];
    // #5330: warn click.right, since right clicks do not actually fire click events.
    if ("development" !== 'production' &&
      name === 'click' &&
      handler && handler.modifiers && handler.modifiers.right
    ) {
      warn(
        "Use \"contextmenu\" instead of \"click.right\" since right clicks " +
        "do not actually fire \"click\" events."
      );
    }
    res += "\"" + name + "\":" + (genHandler(name, handler)) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    return isMethodPath || isFunctionExpression
      ? handler.value
      : ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? handler.value + '($event)'
      : isFunctionExpression
        ? ("(" + (handler.value) + ")($event)")
        : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var alias = keyCodes[key];
  return ("_k($event.keyCode," + (JSON.stringify(key)) + (alias ? ',' + JSON.stringify(alias) : '') + ")")
}

/*  */

function on (el, dir) {
  if ("development" !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + (key ? ("," + key) : "") + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ("development" !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  if (el.slotTarget) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length > 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  return "{key:" + key + ",fn:function(" + (String(el.attrsMap.scope)) + "){" +
    "return " + (el.tag === 'template'
      ? genChildren(el, state) || 'void 0'
      : genElement(el, state)) + "}}"
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// check valid identifier for v-for
var identRE = /[A-Za-z_$][\w$]*/;

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (ident, type, text, errors) {
  if (typeof ident === 'string' && !identRE.test(ident)) {
    errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
      );
    } else {
      errors.push(("invalid expression: " + (text.trim())));
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = options || {};

    /* istanbul ignore if */
    if (true) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (true) {
      if (compiled.errors && compiled.errors.length) {
        warn(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (true) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (true) {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  optimize(ast, options);
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue$3.prototype.$mount;
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (true) {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(((this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue$3.compile = compileToFunctions;

module.exports = Vue$3;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(65),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/mottokrosh/Projects/spire-stress-tracker/src/components/estresso.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] estresso.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78c207b0", Component.options)
  } else {
    hotAPI.reload("data-v-78c207b0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_mixin__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__character_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__character_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__character_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__counter_control_vue__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__counter_control_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__counter_control_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__roller_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__roller_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__roller_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editor_vue__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editor_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__editor_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









var characterSchema = {
  name: '',
  blood: { freeSlots: 0, stress: 0 },
  mind: { freeSlots: 0, stress: 0 },
  shadow: { freeSlots: 0, stress: 0 },
  silver: { freeSlots: 0, stress: 0 },
  reputation: { freeSlots: 0, stress: 0 }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_1__helpers_mixin__["a" /* default */]],

  data: function data() {
    return {
      store: __WEBPACK_IMPORTED_MODULE_6__store__["a" /* default */],
      resistances: __WEBPACK_IMPORTED_MODULE_6__store__["a" /* default */].resistances,
      characters: [],
      rollerOptions: null,
      characterToEdit: null,
      newCharacter: Object.assign({}, characterSchema),
      names: null,
      allFallout: null
    };
  },


  components: {
    Character: __WEBPACK_IMPORTED_MODULE_2__character_vue___default.a,
    CounterControl: __WEBPACK_IMPORTED_MODULE_3__counter_control_vue___default.a,
    Editor: __WEBPACK_IMPORTED_MODULE_5__editor_vue___default.a,
    Roller: __WEBPACK_IMPORTED_MODULE_4__roller_vue___default.a
  },

  methods: {
    addCharacter: function addCharacter() {
      var char = this.clone(this.newCharacter);
      this.resistances.forEach(function (res) {
        if (char[res].freeSlots) {
          char[res].stress -= char[res].freeSlots;
        }
      });
      this.newCharacter = Object.assign({}, characterSchema);
      this.characters.push(char);
      this.store.save();
    },
    deleteCharacter: function deleteCharacter(character) {
      this.characters.splice(this.characters.indexOf(character), 1);
      this.store.save();
    },
    updateCharacter: function updateCharacter(result) {
      var c = this.characters[this.characters.indexOf(result.character)];
      c[result.resistance].stress = result.stress;
      c.fallout = result.fallout;
      this.store.save();
    },
    getRandomInt: function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    },
    randomName: function randomName() {
      if (!this.names) return;
      return this.names[this.getRandomInt(0, this.names.length - 1)];
    },
    addStress: function addStress(options) {
      var character = options.character,
          resistance = options.resistance;

      this.rollerOptions = options;
    },
    editCharacter: function editCharacter(c) {
      this.characterToEdit = c;
    },
    removeFallout: function removeFallout(character, falloutId) {
      var index = character.fallout.indexOf(falloutId);
      if (index !== -1) {
        character.fallout.splice(index, 1);
        this.store.save();
      }
    }
  },

  created: function created() {
    var _this = this;

    this.store.load();
    this.characters = this.store.data.characters;

    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('data/names.json').then(function (response) {
      _this.names = response.data;
    });

    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('data/fallout.json').then(function (response) {
      _this.allFallout = response.data;
    });
  }
});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(7);
var Axios = __webpack_require__(22);
var defaults = __webpack_require__(4);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(11);
axios.CancelToken = __webpack_require__(37);
axios.isCancel = __webpack_require__(10);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(38);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(4);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(32);
var dispatchRequest = __webpack_require__(33);
var isAbsoluteURL = __webpack_require__(35);
var combineURLs = __webpack_require__(36);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(9);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response
    ));
  }
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.response = response;
  return error;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(34);
var isCancel = __webpack_require__(10);
var defaults = __webpack_require__(4);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(11);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(40),
  /* template */
  __webpack_require__(42),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/mottokrosh/Projects/spire-stress-tracker/src/components/character.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] character.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8da772c2", Component.options)
  } else {
    hotAPI.reload("data-v-8da772c2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_feather_icons__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fallout_badge_vue__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fallout_badge_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__fallout_badge_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    c: Object,
    allFallout: Array
  },

  components: {
    Edit2Icon: __WEBPACK_IMPORTED_MODULE_0_vue_feather_icons__["c" /* Edit2Icon */],
    FalloutBadge: __WEBPACK_IMPORTED_MODULE_1__fallout_badge_vue___default.a,
    PlusIcon: __WEBPACK_IMPORTED_MODULE_0_vue_feather_icons__["e" /* PlusIcon */],
    XIcon: __WEBPACK_IMPORTED_MODULE_0_vue_feather_icons__["f" /* XIcon */]
  },

  data: function data() {
    return {
      resistances: __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].resistances
    };
  },


  methods: {
    ucfirst: function ucfirst(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    freeSlots: function freeSlots(resistance) {
      return this.c[resistance].freeSlots || null;
    },
    addStress: function addStress(resistance) {
      this.$emit('stress', { character: this.c, resistance: resistance });
    },
    editCharacter: function editCharacter() {
      this.$emit('edit', this.c);
    },
    deleteCharacter: function deleteCharacter() {
      if (window.confirm('Delete ' + this.c.name + '?')) {
        this.$emit('delete', this.c);
      }
    },
    removeFallout: function removeFallout(falloutId) {
      var fallout = this.allFallout.find(function (f) {
        return f.id === falloutId;
      });
      if (window.confirm('Remove ' + fallout.name + '?')) {
        console.log('emitting');
        this.$emit('remove-fallout', this.c, falloutId);
      }
    }
  }
});

/***/ }),
/* 41 */
/***/ (function(module, exports) {

var nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/

module.exports = function mergeJSXProps (objs) {
  return objs.reduce(function (a, b) {
    var aa, bb, key, nestedKey, temp
    for (key in b) {
      aa = a[key]
      bb = b[key]
      if (aa && nestRE.test(key)) {
        // normalize class
        if (key === 'class') {
          if (typeof aa === 'string') {
            temp = aa
            a[key] = aa = {}
            aa[temp] = true
          }
          if (typeof bb === 'string') {
            temp = bb
            b[key] = bb = {}
            bb[temp] = true
          }
        }
        if (key === 'on' || key === 'nativeOn' || key === 'hook') {
          // merge functions
          for (nestedKey in bb) {
            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey])
          }
        } else if (Array.isArray(aa)) {
          a[key] = aa.concat(bb)
        } else if (Array.isArray(bb)) {
          a[key] = [aa].concat(bb)
        } else {
          for (nestedKey in bb) {
            aa[nestedKey] = bb[nestedKey]
          }
        }
      } else {
        a[key] = b[key]
      }
    }
    return a
  }, {})
}

function mergeFn (a, b) {
  return function () {
    a.apply(this, arguments)
    b.apply(this, arguments)
  }
}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "character"
  }, [_c('header', [_c('h2', [_vm._v(_vm._s(_vm.c.name))]), _vm._v(" "), _c('btn', {
    staticClass: "backgroundless has-icon",
    attrs: {
      "aria-label": "Edit"
    },
    nativeOn: {
      "click": function($event) {
        _vm.editCharacter($event)
      }
    }
  }, [_c('edit-2-icon')], 1), _vm._v(" "), _c('btn', {
    staticClass: "backgroundless has-icon",
    attrs: {
      "aria-label": "Delete"
    },
    nativeOn: {
      "click": function($event) {
        _vm.deleteCharacter($event)
      }
    }
  }, [_c('x-icon')], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "resistances"
  }, _vm._l((_vm.resistances), function(r) {
    return _c('div', {
      staticClass: "resistance"
    }, [_c('div', [_c('h3', [_vm._v(_vm._s(_vm.ucfirst(r))), (_vm.freeSlots(r)) ? _c('small', [_vm._v(" + " + _vm._s(_vm.freeSlots(r)))]) : _vm._e()]), _vm._v(" "), _c('div', [_c('span', [_vm._v("Stress")]), _vm._v(" "), _c('strong', [_vm._v(_vm._s(_vm.c[r].stress))])]), _vm._v(" "), _c('btn', {
      staticClass: "shadowless has-icon",
      nativeOn: {
        "click": function($event) {
          _vm.addStress(r)
        }
      }
    }, [_c('plus-icon')], 1)], 1), _vm._v(" "), _c('div', {
      staticClass: "any-fallout"
    }, _vm._l((_vm.c.fallout), function(falloutId) {
      return _c('fallout-badge', {
        key: falloutId,
        attrs: {
          "all-fallout": _vm.allFallout,
          "fallout-id": falloutId,
          "resistance": r
        },
        on: {
          "remove": function($event) {
            _vm.removeFallout(falloutId)
          }
        }
      })
    }))])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8da772c2", module.exports)
  }
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(44),
  /* template */
  __webpack_require__(47),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/mottokrosh/Projects/spire-stress-tracker/src/components/counter-control.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] counter-control.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-904bf3fc", Component.options)
  } else {
    hotAPI.reload("data-v-904bf3fc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__btn_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__btn_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__btn_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_feather_icons__ = __webpack_require__(3);
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    max: Number,
    value: Number
  },

  data: function data() {
    return {
      localValue: this.value
    };
  },


  components: {
    Btn: __WEBPACK_IMPORTED_MODULE_0__btn_vue___default.a,
    MinusIcon: __WEBPACK_IMPORTED_MODULE_1_vue_feather_icons__["d" /* MinusIcon */],
    PlusIcon: __WEBPACK_IMPORTED_MODULE_1_vue_feather_icons__["e" /* PlusIcon */]
  },

  methods: {
    decrement: function decrement() {
      this.localValue--;

      if (this.localValue < 0) {
        this.localValue = 0;
      }

      this.$emit('update:value', this.localValue);
    },
    increment: function increment() {
      this.localValue++;

      if (this.max && this.localValue > this.max) {
        this.localValue = this.max;
      }

      this.$emit('update:value', this.localValue);
    }
  }
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      type: 'button'
    };
  },


  computed: {
    classes: function classes() {
      return {
        btn: true
      };
    }
  }
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    class: _vm.classes,
    attrs: {
      "type": _vm.type
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7c3bd25c", module.exports)
  }
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "button-group counter-control"
  }, [_c('btn', {
    staticClass: "secondary shadowless has-icon",
    nativeOn: {
      "click": function($event) {
        _vm.decrement($event)
      }
    }
  }, [_c('minus-icon')], 1), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.localValue),
      expression: "localValue"
    }],
    attrs: {
      "type": "text",
      "pattern": "[0-9]"
    },
    domProps: {
      "value": (_vm.localValue)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.localValue = $event.target.value
      }
    }
  }), _vm._v(" "), _c('btn', {
    staticClass: "secondary shadowless has-icon",
    nativeOn: {
      "click": function($event) {
        _vm.increment($event)
      }
    }
  }, [_c('plus-icon')], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-904bf3fc", module.exports)
  }
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(49),
  /* template */
  __webpack_require__(64),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/mottokrosh/Projects/spire-stress-tracker/src/components/roller.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] roller.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b18ab238", Component.options)
  } else {
    hotAPI.reload("data-v-b18ab238", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_motion__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_motion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_motion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_feather_icons__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_thenby__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_thenby___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_thenby__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_mixin__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__brutal_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__brutal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__brutal_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__icon_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__icon_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fallout_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fallout_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__fallout_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modal_vue__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__modal_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//











/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['options', 'fallout'],

  components: {
    Brutal: __WEBPACK_IMPORTED_MODULE_5__brutal_vue___default.a,
    ChevronLeftIcon: __WEBPACK_IMPORTED_MODULE_1_vue_feather_icons__["a" /* ChevronLeftIcon */],
    Fallout: __WEBPACK_IMPORTED_MODULE_7__fallout_vue___default.a,
    Icon: __WEBPACK_IMPORTED_MODULE_6__icon_vue___default.a,
    Modal: __WEBPACK_IMPORTED_MODULE_8__modal_vue___default.a,
    Motion: __WEBPACK_IMPORTED_MODULE_0_vue_motion__["Motion"],
    XIcon: __WEBPACK_IMPORTED_MODULE_1_vue_feather_icons__["f" /* XIcon */]
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_4__helpers_mixin__["a" /* default */]],

  data: function data() {
    return {
      resistances: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */].resistances,
      offset: 100,
      showModal: false,
      falloutOffset: 100,
      d1: { flipped: false, result: null, brutal: 0 },
      d3: { flipped: false, result: null, brutal: 0 },
      d6: { flipped: false, result: null, brutal: 0 },
      d8: { flipped: false, result: null, brutal: 0 },
      result: null,
      falloutRollResult: null,
      falloutOccurred: null,
      falloutLevel: null,
      falloutChoices: null,
      rolling: null,
      totalStress: 0,
      newFallout: [],
      characterCopy: null
    };
  },


  computed: {
    character: function character() {
      if (!this.options) {
        return {};
      }

      if (!this.characterCopy) {
        this.characterCopy = this.clone(this.options.character);
      }

      return this.characterCopy;
    },
    resistance: function resistance() {
      return this.options ? this.options.resistance : '';
    },
    stress: function stress() {
      return this.character && this.character[this.resistance] ? this.character[this.resistance].stress : 0;
    },
    freeSlots: function freeSlots() {
      return this.character && this.character[this.resistance] ? this.character[this.resistance].freeSlots : 0;
    },
    name: function name() {
      return this.character ? this.character.name : '';
    },
    classes: function classes() {
      return {
        roller: true,
        open: this.options
      };
    },
    d1Classes: function d1Classes() {
      return {
        die: true,
        flipped: this.d1.flipped,
        disabled: this.rolling && this.rolling !== 'd1'
      };
    },
    d3Classes: function d3Classes() {
      return {
        die: true,
        flipped: this.d3.flipped,
        disabled: this.rolling && this.rolling !== 'd3'
      };
    },
    d6Classes: function d6Classes() {
      return {
        die: true,
        flipped: this.d6.flipped,
        disabled: this.rolling && this.rolling !== 'd6'
      };
    },
    d8Classes: function d8Classes() {
      return {
        die: true,
        flipped: this.d8.flipped,
        disabled: this.rolling && this.rolling !== 'd8'
      };
    }
  },

  methods: {
    close: function close() {
      setTimeout(this.reset, 250);
      this.$emit('close');
    },
    reset: function reset() {
      this.d1 = { flipped: false, result: null, brutal: 0 };
      this.d3 = { flipped: false, result: null, brutal: 0 };
      this.d6 = { flipped: false, result: null, brutal: 0 };
      this.d8 = { flipped: false, result: null, brutal: 0 };
      this.result = null;
      this.falloutRollResult = null;
      this.falloutOccurred = null;
      this.falloutLevel = null;
      this.falloutChoices = null;
      this.falloutOffset = 100;
      this.rolling = false;
      this.totalStress = 0;
      this.newFallout = this.character.fallout || [];
      this.characterCopy = this.options ? this.clone(this.options.character) : null;
    },
    roll: function roll(die) {
      var _this = this;

      if (this.result) return;

      var name = 'd' + die;

      this[name].flipped = !this[name].flipped;
      this.rolling = name;

      setTimeout(function () {
        var results = [];

        for (var i = 0; i <= _this[name].brutal; i++) {
          var r = _this.getRandomIntInclusive(1, die);
          results.push(r);
        }

        _this[name].result = Math.max.apply(Math, results);
        _this.result = _this[name].result;
      }, 375);

      setTimeout(this.checkForFallout, 750);
    },
    checkForFallout: function checkForFallout() {
      var _this2 = this;

      this.falloutRollResult = this.getRandomIntInclusive(1, 10);

      var stressedResistances = [];

      this.character[this.resistance].stress += this.result;

      this.resistances.forEach(function (res) {
        if (_this2.character[res].stress > 0) {
          _this2.totalStress += _this2.character[res].stress;
          stressedResistances.push(res);
        }
      });

      if (this.falloutRollResult < this.totalStress) {
        document.body.classList.add('shake', 'shake-constant');
        this.falloutOccurred = true;
        this.falloutOffset = 0;

        if (this.totalStress >= 2 && this.totalStress <= 4) {
          this.falloutLevel = 'minor';
          this.falloutChoices = this.fallout.filter(function (f) {
            return f.level === 'minor' && stressedResistances.indexOf(f.resistance) !== -1;
          });
        } else if (this.totalStress >= 5 && this.totalStress <= 8) {
          this.falloutLevel = 'major';
          this.falloutChoices = this.fallout.filter(function (f) {
            return (f.level === 'minor' || f.level === 'major') && stressedResistances.indexOf(f.resistance) !== -1;
          });
        } else if (this.totalStress >= 9) {
          this.falloutLevel = 'severe';
          this.falloutChoices = this.fallout.filter(function (f) {
            return (f.level === 'major' || f.level === 'severe') && stressedResistances.indexOf(f.resistance) !== -1;
          });
        }

        // sort fallout by severity, descending
        this.falloutChoices.sort(__WEBPACK_IMPORTED_MODULE_2_thenby___default()('severity', -1).thenBy('resistance').thenBy('name'));

        // restrict suggestion to this level
        var falloutSuggestions = this.falloutChoices.filter(function (f) {
          return f.level === _this2.falloutLevel && f.resistance === _this2.resistance;
        });

        // pick one
        var falloutSuggestion = falloutSuggestions[this.getRandomIntInclusive(0, falloutSuggestions.length - 1)];
        this.$nextTick(function () {
          document.querySelector('.fallout-id-' + falloutSuggestion.id).classList.add('final-suggestion');
        });

        setTimeout(function () {
          document.body.classList.remove('shake', 'shake-constant');
        }, 900);
      } else {
        this.falloutOccurred = false;
      }
    },
    newFalloutAdd: function newFalloutAdd(f) {
      if (this.newFallout.indexOf(f.id) === -1) {
        this.newFallout.push(f.id);
      }
    },
    newFalloutRemove: function newFalloutRemove(f) {
      var index = this.newFallout.indexOf(f.id);
      if (index !== -1) {
        this.newFallout.splice(index, 1);
      }
    },
    apply: function apply() {
      /*let newStress = this.stress + this.result;
       if (this.falloutOccurred) {
        if (this.falloutLevel === 'minor') {
          newStress = newStress - 3;
        } else if (this.falloutLevel === 'major') {
          newStress = newStress - 5;
        } else if (this.falloutLevel === 'severe') {
          newStress = newStress - 7;
        }
      }*/

      this.$emit('update', {
        character: this.options.character,
        resistance: this.resistance,
        stress: this.stress,
        fallout: this.newFallout
      });

      this.close();
    },
    getRandomIntInclusive: function getRandomIntInclusive(min, max) {
      var randomBuffer = new Uint32Array(1);

      window.crypto.getRandomValues(randomBuffer);

      var randomNumber = randomBuffer[0] / (0xffffffff + 1);

      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(randomNumber * (max - min + 1)) + min;
    }
  },

  created: function created() {
    var _this3 = this;

    this.$watch('character.fallout', function (val) {
      _this3.newFallout = val || [];
    });
  },


  watch: {
    options: function options(value) {
      if (value) {
        document.body.classList.add('roller-open');
        this.offset = 0;
      } else {
        document.body.classList.remove('roller-open');
        this.offset = 100;
      }
    }
  }
});

/***/ }),
/* 50 */
/***/ (function(module, exports) {

/***
   Copyright 2013 Teun Duynstee

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
module.exports = (function() {

    function identity(v){return v;}

    function ignoreCase(v){return typeof(v)==="string" ? v.toLowerCase() : v;}

    function makeCompareFunction(f, opt){
        opt = typeof(opt)==="number" ? {direction:opt} : opt||{};
        if(typeof(f)!="function"){
            var prop = f;
            // make unary function
            f = function(v1){return !!v1[prop] ? v1[prop] : "";}
        }
        if(f.length === 1) {
            // f is a unary function mapping a single item to its sort score
            var uf = f;
            var preprocess = opt.ignoreCase?ignoreCase:identity;
            f = function(v1,v2) {return preprocess(uf(v1)) < preprocess(uf(v2)) ? -1 : preprocess(uf(v1)) > preprocess(uf(v2)) ? 1 : 0;}
        }
        if(opt.direction === -1) return function(v1,v2){return -f(v1,v2)};
        return f;
    }

    /* adds a secondary compare function to the target function (`this` context)
       which is applied in case the first one returns 0 (equal)
       returns a new compare function, which has a `thenBy` method as well */
    function tb(func, opt) {
        var x = typeof(this) == "function" ? this : false;
        var y = makeCompareFunction(func, opt);
        var f = x ? function(a, b) {
                        return x(a,b) || y(a,b);
                    }
                  : y;
        f.thenBy = tb;
        return f;
    }
    return tb;
})();


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(52),
  /* template */
  __webpack_require__(53),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/mottokrosh/Projects/spire-stress-tracker/src/components/brutal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] brutal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-66656054", Component.options)
  } else {
    hotAPI.reload("data-v-66656054", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['value'],

  data: function data() {
    return {
      selected: 0
    };
  },


  watch: {
    selected: function selected(val) {
      this.$emit('input', val);
    }
  }
});

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.selected),
      expression: "selected"
    }],
    staticClass: "brutal",
    attrs: {
      "aria-label": "Brutal"
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.selected = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("× 0")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("× 1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("× 2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("× 3")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "4"
    }
  }, [_vm._v("× 4")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "5"
    }
  }, [_vm._v("× 5")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-66656054", module.exports)
  }
}

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    id: String,
    button: Boolean,
    reversed: Boolean
  },

  computed: {
    iconId: function iconId() {
      return '#icon-' + this.id;
    },
    classes: function classes() {
      var _ref;

      return _ref = {
        'icon': true
      }, _defineProperty(_ref, 'icon-' + this.id, true), _defineProperty(_ref, 'icon-button', this.button), _defineProperty(_ref, 'reversed', this.reversed), _ref;
    }
  }
});

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('svg', {
    class: _vm.classes
  }, [_c('use', {
    attrs: {
      "xlink:href": _vm.iconId
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-594ddb1a", module.exports)
  }
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(57),
  /* template */
  __webpack_require__(58),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/mottokrosh/Projects/spire-stress-tracker/src/components/fallout.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] fallout.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-033437e9", Component.options)
  } else {
    hotAPI.reload("data-v-033437e9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_mixin__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__btn_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__btn_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__btn_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__icon_vue__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    character: Object,
    details: Object
  },

  components: {
    Btn: __WEBPACK_IMPORTED_MODULE_1__btn_vue___default.a,
    Icon: __WEBPACK_IMPORTED_MODULE_2__icon_vue___default.a
  },

  data: function data() {
    return {
      fallout: this.details
    };
  },


  computed: {
    classes: function classes() {
      var _ref;

      return _ref = {
        'fallout-item': true
      }, _defineProperty(_ref, 'fallout-id-' + this.fallout.id, true), _defineProperty(_ref, 'possessed', this.characterHasThis), _ref;
    },
    slug: function slug() {
      return this.slugify(this.fallout.id + '-' + this.fallout.name);
    },
    characterHasThis: function characterHasThis() {
      return this.character.fallout && this.character.fallout.indexOf(this.fallout.id) !== -1;
    }
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_0__helpers_mixin__["a" /* default */]],

  methods: {
    onChange: function onChange($event) {
      if ($event.target.checked) {
        this.$emit('tick');
      } else {
        this.$emit('untick');
      }
    }
  }
});

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classes
  }, [_c('div', {
    staticClass: "details"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": _vm.slug
    },
    domProps: {
      "value": _vm.fallout.id,
      "checked": _vm.characterHasThis
    },
    on: {
      "change": function($event) {
        _vm.onChange($event)
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": _vm.slug
    }
  }, [_vm._v(_vm._s(_vm.fallout.name) + " "), _c('small', [_vm._v(_vm._s(_vm.fallout.resistance))])]), _vm._v(" "), _c('div', {
    staticClass: "severity"
  }, _vm._l((_vm.fallout.severity), function(i) {
    return _c('icon', {
      key: i,
      attrs: {
        "id": "drop"
      }
    })
  }))]), _vm._v(" "), _c('btn', {
    staticClass: "shadowless has-icon",
    nativeOn: {
      "click": function($event) {
        _vm.$emit('show-details')
      }
    }
  }, [_c('icon', {
    attrs: {
      "id": "search"
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-033437e9", module.exports)
  }
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(60),
  /* template */
  __webpack_require__(63),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/mottokrosh/Projects/spire-stress-tracker/src/components/modal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] modal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e9e8323", Component.options)
  } else {
    hotAPI.reload("data-v-6e9e8323", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_focus_trap__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_focus_trap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_focus_trap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_motion__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_motion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_motion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_feather_icons__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_mixin__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    show: {
      required: true
    },
    title: String,
    subTitle: String,
    buttons: Array
  },

  components: {
    Motion: __WEBPACK_IMPORTED_MODULE_1_vue_motion__["Motion"],
    XIcon: __WEBPACK_IMPORTED_MODULE_2_vue_feather_icons__["f" /* XIcon */]
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_3__helpers_mixin__["a" /* default */]],

  data: function data() {
    return {
      offset: -100,
      header: this.$refs.header,
      footer: this.$refs.footer,
      trap: null
    };
  },


  computed: {
    classes: function classes() {
      return {
        'modal': true,
        'modal-open': this.show
      };
    }
  },

  methods: {
    handleScroll: function handleScroll() {
      if (this.footer && this.$el.offsetHeight + this.$el.scrollTop < this.$el.scrollHeight) {
        this.footer.classList.add('footer-shadow');
      } else if (this.footer) {
        this.footer.classList.remove('footer-shadow');
      }

      if (this.header && this.$el.scrollTop > 0) {
        this.header.classList.add('header-shadow');
      } else if (this.header) {
        this.header.classList.remove('header-shadow');
      }
    },
    close: function close() {
      var _this = this;

      document.body.style.overflow = 'auto';
      this.stopFocusTrap();
      this.offset = -100;
      setTimeout(function () {
        _this.$emit('close');
      }, 250);
    },
    onKeyup: function onKeyup($event) {
      if ($event.keyCode === 27 && this.show) {
        this.close();
      }
    },
    startFocusTrap: function startFocusTrap() {
      this.trap = __WEBPACK_IMPORTED_MODULE_0_focus_trap___default()(this.$el, {
        fallbackFocus: this.$refs.closeButton
      });

      this.trap.activate();
    },
    stopFocusTrap: function stopFocusTrap() {
      if (!this.trap) return;

      this.trap.deactivate();
      this.trap = null;
    },
    onButton: function onButton(name) {
      var slugifiedName = this.slugify(name);
      if (slugifiedName === 'close') {
        this.close();
      } else {
        this.$emit(slugifiedName);
      }
    }
  },

  watch: {
    show: {
      handler: function handler(active) {
        var _this2 = this;

        if (active) {
          document.body.style.overflow = 'hidden';

          this.$nextTick(function () {
            if (_this2.$el) {
              _this2.$el.onscroll = _this2.handleScroll;
              _this2.handleScroll();
            }

            _this2.startFocusTrap();
          });

          this.offset = 0;
        } else {
          document.body.style.overflow = 'auto';
        }
      }
    }
  },

  mounted: function mounted() {
    document.addEventListener('keyup', this.onKeyup);
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('keyup', this.onKeyup);
    this.stopFocusTrap();
  }
});

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var tabbable = __webpack_require__(62);

var listeningFocusTrap = null;

function focusTrap(element, userOptions) {
  var tabbableNodes = [];
  var nodeFocusedBeforeActivation = null;
  var active = false;
  var paused = false;

  var container = (typeof element === 'string')
    ? document.querySelector(element)
    : element;

  var config = userOptions || {};
  config.returnFocusOnDeactivate = (userOptions && userOptions.returnFocusOnDeactivate !== undefined)
    ? userOptions.returnFocusOnDeactivate
    : true;
  config.escapeDeactivates = (userOptions && userOptions.escapeDeactivates !== undefined)
    ? userOptions.escapeDeactivates
    : true;

  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause,
  };

  return trap;

  function activate(activateOptions) {
    if (active) return;

    var defaultedActivateOptions = {
      onActivate: (activateOptions && activateOptions.onActivate !== undefined)
        ? activateOptions.onActivate
        : config.onActivate,
    };

    active = true;
    paused = false;
    nodeFocusedBeforeActivation = document.activeElement;

    if (defaultedActivateOptions.onActivate) {
      defaultedActivateOptions.onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!active) return;

    var defaultedDeactivateOptions = {
      returnFocus: (deactivateOptions && deactivateOptions.returnFocus !== undefined)
        ? deactivateOptions.returnFocus
        : config.returnFocusOnDeactivate,
      onDeactivate: (deactivateOptions && deactivateOptions.onDeactivate !== undefined)
        ? deactivateOptions.onDeactivate
        : config.onDeactivate,
    };

    removeListeners();

    if (defaultedDeactivateOptions.onDeactivate) {
      defaultedDeactivateOptions.onDeactivate();
    }

    if (defaultedDeactivateOptions.returnFocus) {
      setTimeout(function () {
        tryFocus(nodeFocusedBeforeActivation);
      }, 0);
    }

    active = false;
    paused = false;
    return this;
  }

  function pause() {
    if (paused || !active) return;
    paused = true;
    removeListeners();
  }

  function unpause() {
    if (!paused || !active) return;
    paused = false;
    addListeners();
  }

  function addListeners() {
    if (!active) return;

    // There can be only one listening focus trap at a time
    if (listeningFocusTrap) {
      listeningFocusTrap.pause();
    }
    listeningFocusTrap = trap;

    updateTabbableNodes();
    tryFocus(firstFocusNode());
    document.addEventListener('focus', checkFocus, true);
    document.addEventListener('click', checkClick, true);
    document.addEventListener('mousedown', checkPointerDown, true);
    document.addEventListener('touchstart', checkPointerDown, true);
    document.addEventListener('keydown', checkKey, true);

    return trap;
  }

  function removeListeners() {
    if (!active || listeningFocusTrap !== trap) return;

    document.removeEventListener('focus', checkFocus, true);
    document.removeEventListener('click', checkClick, true);
    document.removeEventListener('mousedown', checkPointerDown, true);
    document.removeEventListener('touchstart', checkPointerDown, true);
    document.removeEventListener('keydown', checkKey, true);

    listeningFocusTrap = null;

    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;
    if (!optionValue) {
      return null;
    }
    if (typeof optionValue === 'string') {
      node = document.querySelector(optionValue);
      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }
    if (typeof optionValue === 'function') {
      node = optionValue();
      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }
    return node;
  }

  function firstFocusNode() {
    var node;
    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(document.activeElement)) {
      node = document.activeElement;
    } else {
      node = tabbableNodes[0] || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error('You can\'t have a focus-trap without at least one focusable element');
    }

    return node;
  }

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event
  function checkPointerDown(e) {
    if (config.clickOutsideDeactivates && !container.contains(e.target)) {
      deactivate({ returnFocus: false });
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function checkFocus(e) {
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    // Checking for a blur method here resolves a Firefox issue (#15)
    if (typeof e.target.blur === 'function') e.target.blur();
  }

  function checkKey(e) {
    if (e.key === 'Tab' || e.keyCode === 9) {
      handleTab(e);
    }

    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      deactivate();
    }
  }

  function handleTab(e) {
    e.preventDefault();
    updateTabbableNodes();
    var currentFocusIndex = tabbableNodes.indexOf(e.target);
    var lastTabbableNode = tabbableNodes[tabbableNodes.length - 1];
    var firstTabbableNode = tabbableNodes[0];

    if (e.shiftKey) {
      if (e.target === firstTabbableNode || tabbableNodes.indexOf(e.target) === -1) {
        return tryFocus(lastTabbableNode);
      }
      return tryFocus(tabbableNodes[currentFocusIndex - 1]);
    }

    if (e.target === lastTabbableNode) return tryFocus(firstTabbableNode);

    tryFocus(tabbableNodes[currentFocusIndex + 1]);
  }

  function updateTabbableNodes() {
    tabbableNodes = tabbable(container);
  }
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function tryFocus(node) {
  if (!node || !node.focus) return;
  node.focus();
  if (node.tagName.toLowerCase() === 'input') {
    node.select();
  }
}

module.exports = focusTrap;


/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = function(el) {
  var basicTabbables = [];
  var orderedTabbables = [];

  // A node is "available" if
  // - it's computed style
  var isUnavailable = createIsUnavailable();

  var candidateSelectors = [
    'input',
    'select',
    'a[href]',
    'textarea',
    'button',
    '[tabindex]',
  ];

  var candidates = el.querySelectorAll(candidateSelectors);

  var candidate, candidateIndex;
  for (var i = 0, l = candidates.length; i < l; i++) {
    candidate = candidates[i];
    candidateIndex = parseInt(candidate.getAttribute('tabindex'), 10) || candidate.tabIndex;

    if (
      candidateIndex < 0
      || (candidate.tagName === 'INPUT' && candidate.type === 'hidden')
      || candidate.disabled
      || isUnavailable(candidate)
    ) {
      continue;
    }

    if (candidateIndex === 0) {
      basicTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        tabIndex: candidateIndex,
        node: candidate,
      });
    }
  }

  var tabbableNodes = orderedTabbables
    .sort(function(a, b) {
      return a.tabIndex - b.tabIndex;
    })
    .map(function(a) {
      return a.node
    });

  Array.prototype.push.apply(tabbableNodes, basicTabbables);

  return tabbableNodes;
}

function createIsUnavailable() {
  // Node cache must be refreshed on every check, in case
  // the content of the element has changed
  var isOffCache = [];

  // "off" means `display: none;`, as opposed to "hidden",
  // which means `visibility: hidden;`. getComputedStyle
  // accurately reflects visiblity in context but not
  // "off" state, so we need to recursively check parents.

  function isOff(node, nodeComputedStyle) {
    if (node === document.documentElement) return false;

    // Find the cached node (Array.prototype.find not available in IE9)
    for (var i = 0, length = isOffCache.length; i < length; i++) {
      if (isOffCache[i][0] === node) return isOffCache[i][1];
    }

    nodeComputedStyle = nodeComputedStyle || window.getComputedStyle(node);

    var result = false;

    if (nodeComputedStyle.display === 'none') {
      result = true;
    } else if (node.parentNode) {
      result = isOff(node.parentNode);
    }

    isOffCache.push([node, result]);

    return result;
  }

  return function isUnavailable(node) {
    if (node === document.documentElement) return false;

    var computedStyle = window.getComputedStyle(node);

    if (isOff(node, computedStyle)) return true;

    return computedStyle.visibility === 'hidden';
  }
}


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classes
  }, [_c('div', {
    staticClass: "modal-backdrop",
    on: {
      "click": function($event) {
        if ($event.target !== $event.currentTarget) { return null; }
        _vm.close($event)
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "modal-content-wrapper"
  }, [_c('motion', {
    attrs: {
      "value": _vm.offset,
      "spring": "wobbly"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(props) {
        return [_c('div', {
          staticClass: "modal-body",
          style: ({
            transform: ("translateY(" + (props.value) + "%)")
          })
        }, [_c('div', {
          staticClass: "modal-content"
        }, [_c('header', {
          ref: "header"
        }, [_c('h2', [_vm._v(_vm._s(_vm.title) + " "), (_vm.subTitle) ? _c('small', [_vm._v(_vm._s(_vm.subTitle))]) : _vm._e()]), _vm._v(" "), _c('btn', {
          ref: "closeButton",
          staticClass: "backgroundless has-icon",
          attrs: {
            "aria-label": "Close modal"
          },
          nativeOn: {
            "click": function($event) {
              _vm.close($event)
            }
          }
        }, [_c('x-icon')], 1)], 1), _vm._v(" "), _c('div', {
          staticClass: "main"
        }, [_vm._t("default", null, {
          body: ""
        })], 2), _vm._v(" "), _c('footer', {
          ref: "footer"
        }, _vm._l((_vm.buttons), function(b, index) {
          return _c('btn', {
            key: index,
            nativeOn: {
              "click": function($event) {
                _vm.onButton(b)
              }
            }
          }, [_vm._v(_vm._s(b))])
        }))])])]
      }
    }])
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6e9e8323", module.exports)
  }
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('motion', {
    attrs: {
      "value": _vm.offset,
      "spring": "wobbly"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(props) {
        return [_c('div', {
          class: _vm.classes,
          style: ({
            transform: ("translateX(" + (props.value) + "%)")
          })
        }, [_c('nav', [_c('btn', {
          staticClass: "close has-icon backgroundless",
          nativeOn: {
            "click": function($event) {
              _vm.close($event)
            }
          }
        }, [_c('chevron-left-icon')], 1)], 1), _vm._v(" "), (_vm.options) ? _c('div', {
          staticClass: "roller-content"
        }, [_c('h2', [_vm._v("Roll " + _vm._s(_vm.resistance) + " Stress "), _c('small', [_vm._v("For " + _vm._s(_vm.name))])]), _vm._v(" "), _c('div', {
          staticClass: "dice"
        }, [_c('div', {
          staticClass: "d1"
        }, [_c('div', {
          staticClass: "brutal-placeholder"
        }), _vm._v(" "), _c('div', {
          class: _vm.d1Classes
        }, [_c('btn', {
          staticClass: "backgroundless",
          attrs: {
            "disabled": _vm.rolling && _vm.rolling !== 'd1'
          },
          nativeOn: {
            "click": function($event) {
              _vm.roll(1)
            }
          }
        }, [_vm._v("\n                " + _vm._s(_vm.d1.result === null ? '1' : _vm.d1.result) + "\n              ")])], 1)]), _vm._v(" "), _c('div', {
          staticClass: "d3"
        }, [_c('brutal', {
          model: {
            value: (_vm.d3.brutal),
            callback: function($$v) {
              _vm.d3.brutal = $$v
            },
            expression: "d3.brutal"
          }
        }), _vm._v(" "), _c('div', {
          class: _vm.d3Classes
        }, [_c('btn', {
          staticClass: "backgroundless",
          attrs: {
            "disabled": _vm.rolling && _vm.rolling !== 'd3'
          },
          nativeOn: {
            "click": function($event) {
              _vm.roll(3)
            }
          }
        }, [_vm._v("\n                " + _vm._s(_vm.d3.result === null ? 'd3' : _vm.d3.result) + "\n              ")])], 1)], 1), _vm._v(" "), _c('div', {
          staticClass: "d6"
        }, [_c('brutal', {
          model: {
            value: (_vm.d6.brutal),
            callback: function($$v) {
              _vm.d6.brutal = $$v
            },
            expression: "d6.brutal"
          }
        }), _vm._v(" "), _c('div', {
          class: _vm.d6Classes
        }, [_c('btn', {
          staticClass: "backgroundless",
          attrs: {
            "disabled": _vm.rolling && _vm.rolling !== 'd6'
          },
          nativeOn: {
            "click": function($event) {
              _vm.roll(6)
            }
          }
        }, [_vm._v("\n                " + _vm._s(_vm.d6.result === null ? 'd6' : _vm.d6.result) + "\n              ")])], 1)], 1), _vm._v(" "), _c('div', {
          staticClass: "d8"
        }, [_c('brutal', {
          model: {
            value: (_vm.d8.brutal),
            callback: function($$v) {
              _vm.d8.brutal = $$v
            },
            expression: "d8.brutal"
          }
        }), _vm._v(" "), _c('div', {
          class: _vm.d8Classes
        }, [_c('btn', {
          staticClass: "backgroundless",
          attrs: {
            "disabled": _vm.rolling && _vm.rolling !== 'd8'
          },
          nativeOn: {
            "click": function($event) {
              _vm.roll(8)
            }
          }
        }, [_vm._v("\n                " + _vm._s(_vm.d8.result === null ? 'd8' : _vm.d8.result) + "\n              ")])], 1)], 1)]), _vm._v(" "), _c('div', {
          class: {
            'fallout-rolling': true, 'show': _vm.falloutRollResult
          }
        }, [_c('span', {
          staticClass: "d10"
        }, [_vm._v(_vm._s(_vm.falloutRollResult))]), _vm._v(" Fallout Roll Result. Total Stress: " + _vm._s(_vm.totalStress) + ".\n        ")]), _vm._v(" "), _c('motion', {
          attrs: {
            "value": _vm.falloutOffset,
            "spring": "wobbly"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function(props) {
              return [_c('div', {
                staticClass: "fallout",
                style: ({
                  transform: ("translateX(" + (props.value) + "%)")
                })
              }, [_c('h3', [_vm._v("Fallout")]), _vm._v(" "), _c('h4', [_vm._v(_vm._s(_vm.falloutLevel))])])]
            }
          }])
        }), _vm._v(" "), (_vm.falloutOccurred) ? _c('div', {
          staticClass: "fallout-items"
        }, _vm._l((_vm.falloutChoices), function(f, index) {
          return _c('fallout', {
            key: index,
            attrs: {
              "details": f,
              "character": _vm.character
            },
            on: {
              "show-details": function($event) {
                _vm.showModal = f
              },
              "tick": function($event) {
                _vm.newFalloutAdd(f)
              },
              "untick": function($event) {
                _vm.newFalloutRemove(f)
              }
            }
          })
        })) : _vm._e(), _vm._v(" "), _c('nav', {
          staticClass: "actions"
        }, [_c('btn', {
          staticClass: "secondary",
          attrs: {
            "disabled": !_vm.result
          },
          nativeOn: {
            "click": function($event) {
              _vm.reset($event)
            }
          }
        }, [_vm._v("Reset")]), _vm._v(" "), _c('btn', {
          attrs: {
            "disabled": !_vm.result
          },
          nativeOn: {
            "click": function($event) {
              _vm.apply($event)
            }
          }
        }, [_vm._v("Apply Results")])], 1)], 1) : _vm._e(), _vm._v(" "), _c('modal', {
          attrs: {
            "show": _vm.showModal,
            "title": _vm.showModal.name,
            "sub-title": _vm.showModal.resistance,
            "buttons": ['Close']
          },
          on: {
            "close": function($event) {
              _vm.showModal = false
            }
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function(body) {
              return [_c('p', [_vm._v(_vm._s(_vm.showModal.description))]), _vm._v(" "), _c('div', {
                staticClass: "fallout-level"
              }, [_vm._l((_vm.showModal.severity), function(i) {
                return _c('icon', {
                  key: i,
                  attrs: {
                    "id": "drop"
                  }
                })
              }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.showModal.level))])], 2)]
            }
          }])
        })], 1)]
      }
    }])
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b18ab238", module.exports)
  }
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "estresso"
  }, [_c('roller', {
    attrs: {
      "options": _vm.rollerOptions,
      "fallout": _vm.allFallout
    },
    on: {
      "close": function($event) {
        _vm.rollerOptions = null
      },
      "update": _vm.updateCharacter
    }
  }), _vm._v(" "), _c('editor', {
    attrs: {
      "character": _vm.characterToEdit
    },
    on: {
      "close": function($event) {
        _vm.characterToEdit = null
      }
    }
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('transition-group', {
    staticClass: "characters",
    attrs: {
      "name": "fade",
      "tag": "ul"
    }
  }, _vm._l((_vm.characters), function(c, index) {
    return _c('li', {
      key: index
    }, [_c('character', {
      attrs: {
        "c": c,
        "all-fallout": _vm.allFallout
      },
      on: {
        "stress": _vm.addStress,
        "edit": _vm.editCharacter,
        "delete": _vm.deleteCharacter,
        "remove-fallout": _vm.removeFallout
      }
    })], 1)
  })), _vm._v(" "), _c('form', {
    staticClass: "new-character"
  }, [_c('div', {
    staticClass: "column"
  }, [_c('h2', [_vm._v("New Character")]), _vm._v(" "), _c('div', {
    staticClass: "input-row"
  }, [_c('label', {
    attrs: {
      "for": "new-character-name"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newCharacter.name),
      expression: "newCharacter.name"
    }],
    staticClass: "new-character-name",
    attrs: {
      "type": "text",
      "name": "new-character-name",
      "id": "new-character-name",
      "placeholder": 'e.g. ' + _vm.randomName()
    },
    domProps: {
      "value": (_vm.newCharacter.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newCharacter.name = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('h3', [_vm._v("Free Slots")]), _vm._v(" "), _c('div', {
    staticClass: "input-row"
  }, [_c('label', {
    attrs: {
      "for": "resistance-blood"
    }
  }, [_vm._v("Blood")]), _vm._v(" "), _c('counter-control', {
    attrs: {
      "id": "resistance-blood",
      "value": _vm.newCharacter.blood.freeSlots
    },
    on: {
      "update:value": function($event) {
        _vm.newCharacter.blood.freeSlots = $event
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "input-row"
  }, [_c('label', {
    attrs: {
      "for": "resistance-mind"
    }
  }, [_vm._v("Mind")]), _vm._v(" "), _c('counter-control', {
    attrs: {
      "id": "resistance-mind",
      "value": _vm.newCharacter.mind.freeSlots
    },
    on: {
      "update:value": function($event) {
        _vm.newCharacter.mind.freeSlots = $event
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "input-row"
  }, [_c('label', {
    attrs: {
      "for": "resistance-shadow"
    }
  }, [_vm._v("Shadow")]), _vm._v(" "), _c('counter-control', {
    attrs: {
      "id": "resistance-shadow",
      "value": _vm.newCharacter.shadow.freeSlots
    },
    on: {
      "update:value": function($event) {
        _vm.newCharacter.shadow.freeSlots = $event
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "input-row"
  }, [_c('label', {
    attrs: {
      "for": "resistance-silver"
    }
  }, [_vm._v("Silver")]), _vm._v(" "), _c('counter-control', {
    attrs: {
      "id": "resistance-silver",
      "value": _vm.newCharacter.silver.freeSlots
    },
    on: {
      "update:value": function($event) {
        _vm.newCharacter.silver.freeSlots = $event
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "input-row"
  }, [_c('label', {
    attrs: {
      "for": "resistance-reputation"
    }
  }, [_vm._v("Reputation")]), _vm._v(" "), _c('counter-control', {
    attrs: {
      "id": "resistance-reputation",
      "value": _vm.newCharacter.reputation.freeSlots
    },
    on: {
      "update:value": function($event) {
        _vm.newCharacter.reputation.freeSlots = $event
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "input-row action-row"
  }, [_c('btn', {
    staticClass: "tilded",
    nativeOn: {
      "click": function($event) {
        _vm.addCharacter($event)
      }
    }
  }, [_vm._v("Add")])], 1)])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', [_c('div', {
    staticClass: "column"
  }, [_c('h1', [_vm._v("Spire Stress Tracker")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-78c207b0", module.exports)
  }
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(67),
  /* template */
  __webpack_require__(68),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/mottokrosh/Projects/spire-stress-tracker/src/components/fallout-badge.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] fallout-badge.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41c42bbf", Component.options)
  } else {
    hotAPI.reload("data-v-41c42bbf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tag_vue__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tag_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tag_vue__);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    allFallout: Array,
    falloutId: Number,
    resistance: String
  },

  components: {
    Tag: __WEBPACK_IMPORTED_MODULE_0__tag_vue___default.a
  },

  data: function data() {
    return {
      //
    };
  },


  computed: {
    fallout: function fallout() {
      var _this = this;

      return this.allFallout && this.allFallout.find(function (f) {
        return f.id === _this.falloutId;
      });
    },
    value: function value() {
      return this.fallout && this.fallout.resistance === this.resistance ? this.fallout.name : null;
    }
  }
});

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.value) ? _c('tag', {
    on: {
      "remove": function($event) {
        _vm.$emit('remove')
      }
    }
  }, [_vm._v(_vm._s(_vm.value))]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-41c42bbf", module.exports)
  }
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(70),
  /* template */
  __webpack_require__(71),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/mottokrosh/Projects/spire-stress-tracker/src/components/tag.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tag.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-59438910", Component.options)
  } else {
    hotAPI.reload("data-v-59438910", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_feather_icons__ = __webpack_require__(3);
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    XIcon: __WEBPACK_IMPORTED_MODULE_0_vue_feather_icons__["f" /* XIcon */]
  },

  computed: {
    classes: function classes() {
      return {
        tag: true
      };
    }
  }
});

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    class: _vm.classes
  }, [_c('span', {
    staticClass: "text"
  }, [_vm._t("default")], 2), _vm._v(" "), _c('btn', {
    staticClass: "backgroundless has-icon",
    attrs: {
      "aria-label": "Remove tag"
    },
    nativeOn: {
      "click": function($event) {
        _vm.$emit('remove')
      }
    }
  }, [_c('x-icon')], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-59438910", module.exports)
  }
}

/***/ }),
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(76),
  /* template */
  __webpack_require__(77),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/mottokrosh/Projects/spire-stress-tracker/src/components/editor.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] editor.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-612dece7", Component.options)
  } else {
    hotAPI.reload("data-v-612dece7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_motion__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_motion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_motion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_feather_icons__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_mixin__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__counter_control_vue__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__counter_control_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__counter_control_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icon_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__icon_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    character: Object
  },

  components: {
    ChevronRightIcon: __WEBPACK_IMPORTED_MODULE_1_vue_feather_icons__["b" /* ChevronRightIcon */],
    CounterControl: __WEBPACK_IMPORTED_MODULE_4__counter_control_vue___default.a,
    Icon: __WEBPACK_IMPORTED_MODULE_5__icon_vue___default.a,
    Motion: __WEBPACK_IMPORTED_MODULE_0_vue_motion__["Motion"],
    XIcon: __WEBPACK_IMPORTED_MODULE_1_vue_feather_icons__["f" /* XIcon */]
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_3__helpers_mixin__["a" /* default */]],

  data: function data() {
    return {
      resistances: __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].resistances,
      offset: -100,
      characterCopy: null
    };
  },


  computed: {
    classes: function classes() {
      return {
        'editor': true
      };
    },
    char: function char() {
      if (!this.character) {
        return null;
      }

      if (!this.characterCopy) {
        this.characterCopy = this.clone(this.character);
      }

      return this.characterCopy;
    }
  },

  methods: {
    close: function close() {
      setTimeout(this.reset, 250);
      this.$emit('close');
    },
    reset: function reset() {
      this.characterCopy = this.clone(this.character);
    },
    getRandomIntInclusive: function getRandomIntInclusive(min, max) {
      var randomBuffer = new Uint32Array(1);

      window.crypto.getRandomValues(randomBuffer);

      var randomNumber = randomBuffer[0] / (0xffffffff + 1);

      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(randomNumber * (max - min + 1)) + min;
    }
  },

  watch: {
    character: function character(value) {
      if (value) {
        document.body.classList.add('editor-open');
        this.offset = 0;
      } else {
        document.body.classList.remove('editor-open');
        this.offset = -100;
      }
    }
  }

});

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('motion', {
    attrs: {
      "value": _vm.offset,
      "spring": "wobbly"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(props) {
        return [_c('div', {
          class: _vm.classes,
          style: ({
            transform: ("translateX(" + (props.value) + "%)")
          })
        }, [(_vm.char) ? _c('div', {
          staticClass: "editor-content"
        }, [_c('header', {
          staticClass: "flex-container"
        }, [_c('h2', [_vm._v("Edit " + _vm._s(_vm.char.name))]), _vm._v(" "), _c('btn', {
          ref: "closeButton",
          staticClass: "backgroundless has-icon",
          attrs: {
            "aria-label": "Close editor"
          },
          nativeOn: {
            "click": function($event) {
              _vm.close($event)
            }
          }
        }, [_c('x-icon')], 1)], 1), _vm._v(" "), _c('form', [_c('div', {
          staticClass: "column"
        }, [_c('div', {
          staticClass: "input-row"
        }, [_c('label', {
          attrs: {
            "for": "character-name"
          }
        }, [_vm._v("Name")]), _vm._v(" "), _c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: (_vm.char.name),
            expression: "char.name"
          }],
          staticClass: "character-name",
          attrs: {
            "type": "text",
            "name": "character-name",
            "id": "character-name"
          },
          domProps: {
            "value": (_vm.char.name)
          },
          on: {
            "input": function($event) {
              if ($event.target.composing) { return; }
              _vm.char.name = $event.target.value
            }
          }
        })]), _vm._v(" "), _c('h3', [_vm._v("Stress & Free Slots")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("Resistance")]), _vm._v(" "), _c('th', [_vm._v("Free Slots")]), _vm._v(" "), _c('th', [_vm._v("Stress")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("Blood")]), _vm._v(" "), _c('td', [_c('counter-control', {
          attrs: {
            "value": _vm.char.blood.freeSlots
          },
          on: {
            "update:value": function($event) {
              _vm.char.blood.freeSlots = $event
            }
          }
        })], 1), _vm._v(" "), _c('td', [_c('counter-control', {
          attrs: {
            "value": _vm.char.blood.stress
          },
          on: {
            "update:value": function($event) {
              _vm.char.blood.stress = $event
            }
          }
        })], 1)]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Mind")]), _vm._v(" "), _c('td', [_c('counter-control', {
          attrs: {
            "value": _vm.char.mind.freeSlots
          },
          on: {
            "update:value": function($event) {
              _vm.char.mind.freeSlots = $event
            }
          }
        })], 1), _vm._v(" "), _c('td', [_c('counter-control', {
          attrs: {
            "value": _vm.char.mind.stress
          },
          on: {
            "update:value": function($event) {
              _vm.char.mind.stress = $event
            }
          }
        })], 1)]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Shadow")]), _vm._v(" "), _c('td', [_c('counter-control', {
          attrs: {
            "value": _vm.char.shadow.freeSlots
          },
          on: {
            "update:value": function($event) {
              _vm.char.shadow.freeSlots = $event
            }
          }
        })], 1), _vm._v(" "), _c('td', [_c('counter-control', {
          attrs: {
            "value": _vm.char.shadow.stress
          },
          on: {
            "update:value": function($event) {
              _vm.char.shadow.stress = $event
            }
          }
        })], 1)]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Silver")]), _vm._v(" "), _c('td', [_c('counter-control', {
          attrs: {
            "value": _vm.char.silver.freeSlots
          },
          on: {
            "update:value": function($event) {
              _vm.char.silver.freeSlots = $event
            }
          }
        })], 1), _vm._v(" "), _c('td', [_c('counter-control', {
          attrs: {
            "value": _vm.char.silver.stress
          },
          on: {
            "update:value": function($event) {
              _vm.char.silver.stress = $event
            }
          }
        })], 1)]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Reputation")]), _vm._v(" "), _c('td', [_c('counter-control', {
          attrs: {
            "value": _vm.char.reputation.freeSlots
          },
          on: {
            "update:value": function($event) {
              _vm.char.reputation.freeSlots = $event
            }
          }
        })], 1), _vm._v(" "), _c('td', [_c('counter-control', {
          attrs: {
            "value": _vm.char.reputation.stress
          },
          on: {
            "update:value": function($event) {
              _vm.char.reputation.stress = $event
            }
          }
        })], 1)])])]), _vm._v(" "), _c('h3', [_vm._v("Fallout")])])]), _vm._v(" "), _c('nav', {
          staticClass: "actions"
        }, [_c('btn', {
          staticClass: "secondary"
        }, [_vm._v("Button")]), _vm._v(" "), _c('btn', [_vm._v("Button")])], 1)]) : _vm._e()])]
      }
    }])
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-612dece7", module.exports)
  }
}

/***/ })
/******/ ]);