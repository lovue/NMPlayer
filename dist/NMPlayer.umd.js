(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["NMPlayer"] = factory();
	else
		root["NMPlayer"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "07e3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "0a49":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("9b43");
var IObject = __webpack_require__("626a");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var asc = __webpack_require__("cd1c");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "0fc9":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "1169":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("2d95");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "1173":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "1654":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("71c1")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("30f1")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "1691":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "1bc3":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("f772");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "1ec9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
var document = __webpack_require__("e53d").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "20d6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__("5ca1");
var $find = __webpack_require__("0a49")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("9c6c")(KEY);


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "241e":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "24c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("b8e3");
var global = __webpack_require__("e53d");
var ctx = __webpack_require__("d864");
var classof = __webpack_require__("40c3");
var $export = __webpack_require__("63b6");
var isObject = __webpack_require__("f772");
var aFunction = __webpack_require__("79aa");
var anInstance = __webpack_require__("1173");
var forOf = __webpack_require__("a22a");
var speciesConstructor = __webpack_require__("f201");
var task = __webpack_require__("4178").set;
var microtask = __webpack_require__("aba2")();
var newPromiseCapabilityModule = __webpack_require__("656e");
var perform = __webpack_require__("4439");
var userAgent = __webpack_require__("bc13");
var promiseResolve = __webpack_require__("cd78");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("5168")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("5c95")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("45f2")($Promise, PROMISE);
__webpack_require__("4c95")(PROMISE);
Wrapper = __webpack_require__("584a")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("4ee1")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "25eb":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "294c":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "3024":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "30f1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("b8e3");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var $iterCreate = __webpack_require__("8f60");
var setToStringTag = __webpack_require__("45f2");
var getPrototypeOf = __webpack_require__("53e2");
var ITERATOR = __webpack_require__("5168")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "32fc":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("e53d").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "335c":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("6b4c");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "35e8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");
module.exports = __webpack_require__("8e60") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "36c3":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("335c");
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "3702":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("481b");
var ITERATOR = __webpack_require__("5168")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "38b8":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("e770");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("6d2c0758", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "3a38":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "3c11":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__("63b6");
var core = __webpack_require__("584a");
var global = __webpack_require__("e53d");
var speciesConstructor = __webpack_require__("f201");
var promiseResolve = __webpack_require__("cd78");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "40c3":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("6b4c");
var TAG = __webpack_require__("5168")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "4178":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("d864");
var invoke = __webpack_require__("3024");
var html = __webpack_require__("32fc");
var cel = __webpack_require__("1ec9");
var global = __webpack_require__("e53d");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("6b4c")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "43fc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__("63b6");
var newPromiseCapability = __webpack_require__("656e");
var perform = __webpack_require__("4439");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "4439":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "454f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("46a7");
var $Object = __webpack_require__("584a").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "45f2":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("d9f6").f;
var has = __webpack_require__("07e3");
var TAG = __webpack_require__("5168")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "46a7":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("63b6");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("8e60"), 'Object', { defineProperty: __webpack_require__("d9f6").f });


/***/ }),

/***/ "481b":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "4c95":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var dP = __webpack_require__("d9f6");
var DESCRIPTORS = __webpack_require__("8e60");
var SPECIES = __webpack_require__("5168")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "4ee1":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("5168")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "50ed":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "5168":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("dbdb")('wks');
var uid = __webpack_require__("62a0");
var Symbol = __webpack_require__("e53d").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "53e2":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("07e3");
var toObject = __webpack_require__("241e");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5559":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("dbdb")('keys');
var uid = __webpack_require__("62a0");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "584a":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "5b4e":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("36c3");
var toLength = __webpack_require__("b447");
var toAbsoluteIndex = __webpack_require__("0fc9");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "5c95":
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__("35e8");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "62a0":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "63b6":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var ctx = __webpack_require__("d864");
var hide = __webpack_require__("35e8");
var has = __webpack_require__("07e3");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "656e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("79aa");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "696e":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("c207");
__webpack_require__("1654");
__webpack_require__("6c1c");
__webpack_require__("24c5");
__webpack_require__("3c11");
__webpack_require__("43fc");
module.exports = __webpack_require__("584a").Promise;


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6b4c":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6c1c":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("c367");
var global = __webpack_require__("e53d");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var TO_STRING_TAG = __webpack_require__("5168")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "71c1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var defined = __webpack_require__("25eb");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "7333":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("0d58");
var gOPS = __webpack_require__("2621");
var pIE = __webpack_require__("52a7");
var toObject = __webpack_require__("4bf8");
var IObject = __webpack_require__("626a");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("79e5")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "794b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("8e60") && !__webpack_require__("294c")(function () {
  return Object.defineProperty(__webpack_require__("1ec9")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "795b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("696e");

/***/ }),

/***/ "79aa":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7cd6":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("40c3");
var ITERATOR = __webpack_require__("5168")('iterator');
var Iterators = __webpack_require__("481b");
module.exports = __webpack_require__("584a").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "7e90":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var anObject = __webpack_require__("e4ae");
var getKeys = __webpack_require__("c3a1");

module.exports = __webpack_require__("8e60") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "8436":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "84b4":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__("5ca1");

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});


/***/ }),

/***/ "85f2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("454f");

/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "8e60":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("294c")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "8f60":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("a159");
var descriptor = __webpack_require__("aebd");
var setToStringTag = __webpack_require__("45f2");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("35e8")(IteratorPrototype, __webpack_require__("5168")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "9138":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("35e8");


/***/ }),

/***/ "96cf":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a159":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("e4ae");
var dPs = __webpack_require__("7e90");
var enumBugKeys = __webpack_require__("1691");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("1ec9")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("32fc").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "a22a":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("d864");
var call = __webpack_require__("b0dc");
var isArrayIter = __webpack_require__("3702");
var anObject = __webpack_require__("e4ae");
var toLength = __webpack_require__("b447");
var getIterFn = __webpack_require__("7cd6");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "aba2":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var macrotask = __webpack_require__("4178").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("6b4c")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "aebd":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "b0dc":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("e4ae");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "b240":
/***/ (function(module, exports) {

!function (s) {
  var c,
      o = '<svg><symbol id="icon-spinner" viewBox="0 0 1024 1024"><path d="M512 62c-244.996875 0-444.2625 195.778125-449.859375 439.425 5.203125-212.56875 166.8375-383.175 365.484375-383.175 201.9375 0 365.625 176.2875 365.625 393.75 0 46.603125 37.771875 84.375 84.375 84.375s84.375-37.771875 84.375-84.375c0-248.540625-201.459375-450-450-450zM512 962c244.996875 0 444.2625-195.778125 449.859375-439.425-5.203125 212.56875-166.8375 383.175-365.484375 383.175-201.9375 0-365.625-176.2875-365.625-393.75 0-46.603125-37.771875-84.375-84.375-84.375s-84.375 37.771875-84.375 84.375c0 248.540625 201.459375 450 450 450z"  ></path></symbol><symbol id="icon-play" viewBox="0 0 1024 1024"><path d="M838.22364445 467.98569836L237.55788683 95.15867614c-33.65799466-20.71261275-77.6722963 5.17815349-77.6722963 44.01430164v745.65404444c0 38.83614815 44.01430164 64.72691317 77.6722963 44.01430164l598.07668148-372.82702222c36.24707201-18.12353539 36.24707201-69.90506667 2.58907614-88.02860328z"  ></path></symbol><symbol id="icon-jingyin" viewBox="0 0 1024 1024"><path d="M958.708971 630.01995L840.671625 511.997953l118.021997-118.0353-36.420491-36.419467-118.020974 118.036323-118.036323-118.018927-36.419468 36.419468 118.037347 118.020973-118.020974 118.0353 36.420491 36.420491 118.018927-118.037346 118.039393 118.018927 36.417421-36.418445zM552.664142 118.689193c-18.745946-7.91425-41.48074-4.417613-56.591903 8.658193L267.476891 324.980559h-129.60173c-40.022529 0-72.585155 31.089066-72.585156 69.300343v235.329726c0 38.210253 32.562627 69.292156 72.585156 69.292156H267.475867l228.595349 197.624986c9.677407 8.370645 22.183232 12.979616 35.262108 12.979616a54.481845 54.481845 0 0 0 21.328771-4.313236c19.014052-8.032954 31.290657-26.046213 31.290657-45.88505V164.574243c0.002047-19.821441-12.274558-37.826514-31.28861-45.88505zM531.790742 860.132862l-0.454348 0.207731-244.004293-210.604602H137.876184c-11.618619 0-21.074991-9.026584-21.074991-20.126386v-235.329727c0-11.099802 9.457396-20.133549 21.074991-20.133549h149.455917L530.649755 163.789367l1.793856 0.783852-0.652869 695.559643z" fill="" ></path></symbol><symbol id="icon-fangda" viewBox="0 0 1024 1024"><path d="M548.9 472.1c13.6 13.6 35.9 13.6 49.6 0l290.4-289v220.1c0 19.2 15.8 34.9 35.1 34.9s35.1-15.7 35.1-34.9V99.4c0-9.7-4.1-18.6-10.6-24.9-6.3-6.5-15.3-10.5-25-10.5H617.9c-19.3 0-35.1 15.7-35.1 34.9s15.8 34.9 35.1 34.9H839l-290.2 289c-13.6 13.6-13.6 35.7 0.1 49.3zM76.6 945.5c6.3 6.5 15.3 10.5 25 10.5h305.5c19.3 0 35.1-15.7 35.1-34.9s-15.8-34.9-35.1-34.9H185.9l290.4-288.6c13.6-13.6 13.6-35.7 0-49.3-13.6-13.6-35.9-13.6-49.6 0L136.2 837.1V616.8c0-19.2-15.8-34.9-35.1-34.9S66 597.6 66 616.8v303.8c0.2 9.7 4.1 18.6 10.6 24.9z"  ></path></symbol><symbol id="icon-close" viewBox="0 0 1024 1024"><path d="M573.02251141 510.54364445l358.01709984-356.1590329c16.93013333-16.842752 17.01508741-44.13606875 0.17233542-61.06620207-16.88644267-16.97261037-44.13606875-17.01508741-61.06620208-0.1723354L512.04247703 449.34879763 157.04852859 93.27593245c-16.79906133-16.842752-44.13606875-16.93013333-61.06620207-0.08738134-16.88644267 16.84396563-16.9289197 44.18097303-0.08738134 61.10989274l354.910208 355.98791112L92.95796148 866.23057541c-16.93013333 16.842752-17.01508741 44.13606875-0.1723354 61.06620207a43.09962903 43.09962903 0 0 0 30.61987555 12.73947022c11.01126163 0 22.02495052-4.18944948 30.44632652-12.56713481l357.93093215-356.03038814L870.01709985 930.75076741c8.421376 8.46506667 19.4763283 12.69820682 30.57497126 12.69820681a43.10812445 43.10812445 0 0 0 30.49123081-12.60961185c16.88644267-16.84396563 16.93013333-44.13728237 0.08616771-61.0674157L573.02251141 510.54485808z" fill="" ></path></symbol><symbol id="icon-delete" viewBox="0 0 1024 1024"><path d="M910.52612247 216.25754873a25.71673536 25.71673536 0 1 0-1e-8-51.43346982H113.43592373a25.71673536 25.71673536 0 1 0 0 51.43346982H910.52612247zM653.40163497 113.43346982a25.71673536 25.71673536 0 1 0-1e-8-51.43346982H370.56041123a25.71673536 25.71673536 0 1 0 0 51.43346982h282.84122373zM396.27714658 781.93999443a25.71673536 25.71673536 0 1 0 51.43346983 0V344.84122286a25.71673536 25.71673536 0 1 0-51.43346983 0V781.93999443z m179.97428321 0a25.71673536 25.71673536 0 1 0 51.43346982 0V344.84122286a25.71673536 25.71673536 0 1 0-51.43346982 0V781.93999443zM216.30286338 293.40775302a25.71673536 25.71673536 0 0 0-25.71673536 25.71673536V884.80693408a77.15020518 77.15020518 0 0 0 77.15020518 77.1502043H756.26857461a77.15020518 77.15020518 0 0 0 77.1502043-77.1502043V319.08162676a25.71673536 25.71673536 0 1 0-51.43346983 0V859.04733799c0 28.37413125-23.05933857 51.43346982-51.43346982 51.43346982H293.45306768c-28.37413125 0-51.43346982-23.05933857-51.43346983-51.43346982V319.12448838a25.71673536 25.71673536 0 0 0-25.71673447-25.71673535z m0 0" fill="" ></path></symbol><symbol id="icon-heart-o" viewBox="0 0 1025 1024"><path d="M940.99414063 279.88085937c-13.62304688-32.78320313-33.046875-62.05078125-57.74414063-86.92382812-47.8125-48.1640625-110.56640625-74.70703125-176.66015625-74.70703125-75.32226563 0-145.8984375 34.27734375-194.58984375 94.39453125C463.30859375 152.52734375 392.73242187 118.25 317.41015625 118.25c-66.00585938 0-128.75976563 26.71875-176.74804688 75.234375-24.78515625 25.04882813-44.296875 54.40429688-57.83203124 87.27539063-14.0625 34.1015625-21.09375 70.22460938-20.7421875 107.40234374 0.61523438 80.59570313 35.24414063 155.7421875 95.00976562 206.36718751 2.72460938 2.28515625 5.2734375 4.48242188 7.82226563 6.85546874 13.09570313 11.77734375 50.9765625 46.40625 98.96484374 90.26367188 82.17773438 75.14648438 184.48242188 168.66210938 226.31835938 205.83984375 6.15234375 5.36132813 13.88671875 8.34960938 21.88476563 8.34960938 8.0859375 0 15.90820313-2.98828125 21.88476562-8.34960938 30.32226563-26.98242188 92.98828125-84.28710938 159.43359375-145.01953125 65.21484375-59.58984375 132.62695313-121.2890625 172.08984375-156.62109375 61.08398438-50.88867188 96.328125-126.9140625 96.59179688-208.56445313 0.08789063-37.35351563-7.03125-73.4765625-21.09375001-107.40234374z m-379.95117188-20.65429687c35.94726563-46.7578125 88.9453125-73.56445313 145.546875-73.56445313 48.1640625 0 93.95507813 19.51171875 129.0234375 54.84375001 18.36914063 18.45703125 32.95898438 40.34179688 43.2421875 65.12695312 10.546875 25.57617188 15.90820313 52.91015625 15.90820313 81.12304688-0.08789063 31.20117188-6.76757813 61.171875-19.95117188 89.03320312-12.56835938 26.27929688-30.67382813 49.83398438-52.47070313 68.11523438l-1.58203125 1.40624999c-34.18945313 30.67382813-92.63671875 83.84765625-173.58398437 158.02734376-63.28125 57.91992188-106.43554688 97.29492188-135.08789063 123.22265624-43.68164063-39.46289063-114.87304688-104.4140625-177.80273437-161.89453124l-41.57226563-37.96875001c-39.7265625-36.38671875-71.10351563-65.0390625-82.79296874-75.49804687-0.703125-0.61523438-1.40625-1.23046875-2.109375-1.93359375-2.28515625-2.02148438-4.65820313-4.13085938-7.20703125-6.24023438-44.82421875-38.05664063-70.75195313-94.65820313-71.19140625-155.30273437-0.17578125-28.125 5.09765625-55.37109375 15.64453125-81.03515625 10.37109375-24.9609375 24.9609375-47.02148438 43.41796875-65.56640625 35.33203125-35.68359375 81.2109375-55.28320313 129.02343749-55.28320313 56.51367188 0 109.59960938 26.71875 145.54687501 73.38867188 11.68945313 15.1171875 29.97070313 24.08203125 49.04296874 24.08203125 18.984375 0.08789063 37.35351563-8.96484375 48.95507813-24.08203125z"  ></path></symbol><symbol id="icon-menu-fold" viewBox="0 0 1024 1024"><path d="M112 224h800c26.5 0 48-21.5 48-48s-21.5-48-48-48H112c-26.5 0-48 21.5-48 48s21.5 48 48 48z m0 336h480c26.5 0 48-21.5 48-48s-21.5-48-48-48H112c-26.5 0-48 21.5-48 48s21.5 48 48 48z m669.3-204.4c-1.5-1.3-3.3-2-5.3-2-4.4 0-8 3.6-8 8v300.3c0 1.9 0.7 3.8 2 5.3 2.9 3.3 8 3.7 11.3 0.8l165.1-144c0.5-0.5 1.1-1 1.5-1.5 5.8-6.7 5.1-16.8-1.5-22.6L781.3 355.6zM912 800H112c-26.5 0-48 21.5-48 48s21.5 48 48 48h800c26.5 0 48-21.5 48-48s-21.5-48-48-48z"  ></path></symbol><symbol id="icon-plus" viewBox="0 0 1024 1024"><path d="M915.34222222 471.04H552.96V117.76c0-22.64177778-18.31822222-40.96-40.96-40.96s-40.96 18.31822222-40.96 40.96V471.04H116.62222222c-22.64177778 0-40.96 18.31822222-40.96 40.96s18.31822222 40.96 40.96 40.96H471.04v354.41777778c0 22.64177778 18.31822222 40.96 40.96 40.96s40.96-18.31822222 40.96-40.96V552.96h362.38222222c22.64177778 0 40.96-18.31822222 40.96-40.96s-18.31822222-40.96-40.96-40.96z"  ></path></symbol><symbol id="icon-more-h" viewBox="0 0 1024 1024"><path d="M265.1 509.8c-0.1 45.5-36.8 82.2-82.4 82.1-45.4-0.1-82.3-37-82.2-82.5 0-45.3 37.1-82.2 82.6-82.1 45.4 0.1 82 36.9 82 82.5zM842.1 427.4c45.5 0 82.5 36.8 82.5 82.2 0.1 45.4-36.8 82.4-82.3 82.4-45.6 0-82.4-36.6-82.4-82.2s36.6-82.4 82.2-82.4zM512.4 592c-45.4 0-82.6-37.3-82.4-82.4 0.3-45.5 37.1-82.2 82.6-82.2 45.4 0 82.5 37.1 82.3 82.4-0.1 45.4-37 82.2-82.5 82.2z"  ></path></symbol><symbol id="icon-zanting" viewBox="0 0 1024 1024"><path d="M298.666667 131.413333c0-34.986667 28.16-63.573333 62.72-63.573333S424.106667 96 424.106667 131.413333v760.746667c0 34.986667-28.16 63.573333-62.72 63.573333S298.666667 927.146667 298.666667 892.16V131.413333z m301.226666 760.746667c0 34.986667 28.16 63.573333 62.72 63.573333s62.72-28.16 62.72-63.573333V131.413333c0-34.986667-28.16-63.573333-62.72-63.573333S599.893333 96 599.893333 131.413333v760.746667z" fill="" ></path></symbol><symbol id="icon-download" viewBox="0 0 1024 1024"><path d="M752 319.33333334a210 210 0 0 1 0 420h-30a30 30 0 0 1 0-60h30a150 150 0 0 0 0-300 138 138 0 0 0-26.1 2.4 30 30 0 0 1-35.7-25.8 180 180 0 0 0-356.4 0 30 30 0 0 1-35.7 25.8A138 138 0 0 0 272 379.33333334a150 150 0 0 0 0 300h30a30 30 0 0 1 0 60h-30a210 210 0 0 1 0-420h7.8a240 240 0 0 1 464.4 0z"  ></path><path d="M482 559.33333334a30 30 0 0 1 60 0v270a30 30 0 0 1-60 0z"  ></path><path d="M594.5 689.53333334a30 30 0 0 1 45 39.6l-105 120a30 30 0 0 1-45 0l-105-120a30 30 0 1 1 45-39.6l82.5 94.2z"  ></path></symbol><symbol id="icon-suoxiao" viewBox="0 0 1024 1024"><path d="M73.2 949.8c13.6 13.6 35.8 13.6 49.5 0l289.7-290v220.9c0 19.3 15.7 35 35 35s35-15.7 35-35V575.8c0-9.7-4.1-18.6-10.5-25-6.3-6.5-15.2-10.5-25-10.5H142.1c-19.3 0-35 15.7-35 35s15.7 35 35 35h220.7l-289.6 290c-13.6 13.6-13.6 35.9 0 49.5z m476.7-477c6.3 6.5 15.2 10.5 25 10.5h304.8c19.3 0 35-15.7 35-35s-15.7-35-35-35H659l289.7-289.6c13.6-13.6 13.6-35.8 0-49.5-13.6-13.6-35.8-13.6-49.5 0L609.4 364V143c0-19.3-15.7-35-35-35s-35 15.7-35 35v304.9c0.1 9.7 4 18.6 10.5 24.9z"  ></path></symbol><symbol id="icon-play-next" viewBox="0 0 1024 1024"><path d="M805.323 166.36c27.65 0 50.274 22.624 50.274 50.275v590.73c0 27.651-22.623 50.275-50.274 50.275s-50.275-22.624-50.275-50.275v-590.73c0-27.651 22.623-50.275 50.275-50.275zM668.638 476.65L236.43 174.06c-13.197-9.27-30.48-10.37-44.776-2.986-14.297 7.542-23.252 22.153-23.252 38.335V814.75c0 16.182 8.955 30.95 23.252 38.335 14.297 7.227 31.579 6.284 44.776-2.985l432.364-302.592c11.469-8.17 18.382-21.367 18.382-35.507 0-14.14-6.913-27.337-18.54-35.35z"  ></path></symbol><symbol id="icon-xiaoyuanhuan-hong" viewBox="0 0 1024 1024"><path d="M512.5 703.4c-105.8 0-191.8-86-191.8-191.8s86-191.8 191.8-191.8c105.8 0 191.8 86 191.8 191.8s-86.1 191.8-191.8 191.8z m0-264.7c-40.2 0-72.9 32.7-72.9 72.9s32.7 72.9 72.9 72.9 72.9-32.7 72.9-72.9-32.7-72.9-72.9-72.9z"  ></path></symbol><symbol id="icon-play-random" viewBox="0 0 1024 1024"><path d="M814.072 318.062h103.766c27.185 0 41.263-32.525 22.573-52.307L853.03 172.79c-11.772-12.5-31.433-13.108-43.933-1.335-12.5 11.772-13.108 31.433-1.335 43.933l38.108 40.535H813.95c-110.198 0-181.923 61.167-328.65 238.478l-10.68 12.865c-123.791 149.398-187.628 203.04-265.543 203.04H105.92c-17.113 0-31.07 13.957-31.07 31.069s13.957 31.069 31.07 31.069h103.158c104.615 0 176.705-60.682 313.48-225.614l10.68-12.864c133.621-161.292 197.58-215.905 280.834-215.905z"  ></path><path d="M917.96 707.88H814.193c-64.565 0-127.067-40.778-205.346-126.582-10.802-11.772-29.127-12.621-41.021-1.82-11.772 10.801-12.622 29.127-1.82 41.02 88.352 96.727 162.99 145.515 248.187 145.515h37.865l-42.841 46.724c-10.801 11.773-10.073 30.098 1.699 41.021 11.772 10.801 30.098 10.073 41.02-1.699l87.503-95.27c16.87-18.933 3.763-48.91-21.48-48.91zM106.04 313.572H209.2c62.501 0 123.668 41.384 203.04 129.737 11.408 12.743 31.069 13.835 43.812 2.427s13.835-31.07 2.427-43.812c-90.173-100.489-163.961-150.369-249.28-150.369H106.041c-17.112 0-31.069 13.957-31.069 31.069s13.835 30.948 31.069 30.948z"  ></path></symbol><symbol id="icon-play-circle-single" viewBox="0 0 1024 1024"><path d="M953.536 334.336C902.72 241.6 805.568 184 699.904 184H355.456c-77.184 0-149.76 30.08-204.352 84.608C96.512 323.2 66.496 395.776 66.496 472.96s30.08 149.696 84.608 204.352c54.592 54.592 127.168 84.608 204.352 84.608h333.376v57.984c0 18.56 12.736 25.472 28.288 15.424l139.648-90.176c15.552-9.984 15.36-26.24-0.32-36.032L717.44 623.104c-15.744-9.792-28.608-2.624-28.608 15.936v57.728H355.456c-123.392 0-223.808-100.416-223.808-223.872 0-123.456 100.416-223.808 223.808-223.808h344.512c81.792 0 157.12 44.608 196.416 116.416 8.704 15.808 28.416 21.568 44.224 12.992 15.808-8.576 21.568-28.352 12.928-44.16zM507.328 649.792c15.296 0 22.912-6.336 22.912-19.008V314.496c0-8.896-4.48-12.736-13.376-11.456 0 0-64.64 21.568-75.2 24.448-10.56 2.944-20.352 9.728-20.352 22.08s7.488 17.856 19.392 14.464c13.696-3.904 45.76-12.48 45.76-12.48v279.232c0 12.736 6.912 19.008 20.864 19.008z"  ></path></symbol><symbol id="icon-play-circle-list" viewBox="0 0 1024 1024"><path d="M953.536 334.336C902.72 241.6 805.568 184 699.904 184H355.456c-77.184 0-149.76 30.08-204.352 84.608C96.512 323.2 66.496 395.776 66.496 472.96s30.08 149.696 84.608 204.352c54.592 54.592 127.168 84.608 204.352 84.608h333.376v57.984c0 18.56 12.736 25.472 28.288 15.424l139.648-90.176c15.552-9.984 15.36-26.24-0.32-36.032L717.44 623.104c-15.744-9.792-28.608-2.624-28.608 15.936v57.728H355.456c-123.392 0-223.808-100.416-223.808-223.872 0-123.456 100.416-223.808 223.808-223.808h344.512c81.792 0 157.12 44.608 196.416 116.416 8.704 15.808 28.416 21.568 44.224 12.992 15.808-8.576 21.568-28.352 12.928-44.16z"  ></path></symbol><symbol id="icon-speaker-mute" viewBox="0 0 1103 1024"><path d="M568.027 81.886c-11.205-6.034-24.997-4.31-35.34 4.31-0.862 0-49.131 40.511-103.434 81.023-94.815 70.68-122.398 82.747-127.57 84.471H106.02c-15.515 0-27.582 12.93-27.582 28.445v447.353c0 15.515 12.067 28.445 27.582 28.445h217.212c5.172 1.724 31.03 14.653 114.64 83.61 48.27 40.51 92.229 80.16 92.229 80.16 6.034 6.034 13.791 8.62 22.41 8.62 4.31 0 9.482-0.862 13.792-2.586 12.067-5.171 19.825-18.1 19.825-31.03V112.916c0-12.93-6.896-24.997-18.101-31.03z m-36.202 757.656c-14.653-12.93-31.03-26.72-48.27-40.512-111.191-92.229-138.774-99.986-157.737-99.986H156.876c-18.964 0-23.273-5.172-23.273-24.997v-343.92c0-13.79 1.724-21.548 17.239-21.548h151.703c18.101 0 46.546-7.757 168.081-99.124a67857.38 67857.38 0 0 0 61.199-46.546v676.633zM1024 621.468L905.912 503.38 1024 385.293c10.343-11.205 10.343-28.445 0-38.788s-28.444-10.343-38.788 0L867.125 464.593 749.037 346.505c-10.343-10.343-28.444-10.343-38.788 0-10.343 11.205-10.343 28.444 0 38.788L827.475 503.38 710.249 621.468c-10.343 11.205-10.343 28.444 0 38.788 10.344 10.343 28.445 10.343 38.788 0l118.088-118.088 118.087 118.088c11.206 10.343 28.445 10.343 38.788 0 10.343-10.344 10.343-28.445 0-38.788z"  ></path></symbol><symbol id="icon-speaker" viewBox="0 0 1103 1024"><path d="M567.443 82.155c-11.553-5.682-25.262-4.13-35.334 4.031-0.471 0.396-49.446 40.14-103.508 80.776-94.043 70.733-121.427 82.527-126.985 84.41h-133.25c-0.674 0-1.313 0.1-1.987 0.1H106.22c-15.157 0-27.452 12.553-27.452 28.048v447.654c0 15.494 12.295 28.048 27.452 28.048h217.188c5.457 2.015 31.326 14.24 114.758 83.716 48.538 40.405 92.124 79.884 92.561 80.28 6.232 5.65 14.181 8.624 22.198 8.624a32.75 32.75 0 0 0 13.675-3.007c11.991-5.517 19.705-17.675 19.705-31.12V112.88c0.033-13.116-7.31-25.042-18.863-30.725z m-35.67 757.18c-14.787-12.752-31.292-26.793-48.2-40.735-111.424-92.14-138.977-99.871-157.671-99.871-0.37 0-0.708 0.099-1.078 0.099-0.37 0-0.707-0.1-1.078-0.1H157.015c-19.233 0-23.68-5.55-23.68-25.273V329.901c0-13.38 1.55-21.771 17.348-21.771h151.775c18.19 0 46.146-7.632 168.011-98.781 21.726-16.255 42.946-32.575 61.304-46.913v676.899z m328.275-336.22c0-86.954-46.18-162.807-114.826-203.608-3.099-1.685-10.475-4.922-15.595-4.922-15.225 0-27.586 12.62-27.586 28.18 0 10.44 5.456 19.757 13.709 24.613 53.05 30.79 88.89 88.97 88.89 155.737 0 67.958-37.052 127.028-91.686 157.39-7.95 4.955-13.204 13.941-13.204 24.15 0 15.56 12.362 28.18 27.586 28.18 6.468 0.067 14.147-3.832 14.147-3.832 70.735-40.272 118.565-117.348 118.565-205.888z m-31.83-346.89c-5.12-3.139-10.24-5.683-16.438-5.683-15.157 0-27.452 12.555-27.452 28.049 0 11.167 6.501 20.12 15.663 25.24 100.813 60.062 168.617 171.563 168.617 299.35 0 127.69-67.703 239.124-168.415 299.218-8.825 4.89-16.437 14.173-16.437 25.637 0 15.495 12.294 28.049 27.451 28.049 6.097 0 10.947-2.379 16.236-5.517 116.98-69.709 195.664-199.116 195.664-347.387 0-148.006-78.346-277.149-194.89-346.956z"  ></path></symbol></svg>',
      t = (c = document.getElementsByTagName("script"))[c.length - 1].getAttribute("data-injectcss");

  if (t && !s.__iconfont__svg__cssinject__) {
    s.__iconfont__svg__cssinject__ = !0;

    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (c) {
      console && console.log(c);
    }
  }

  !function (c) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(c, 0);else {
        var t = function t() {
          document.removeEventListener("DOMContentLoaded", t, !1), c();
        };

        document.addEventListener("DOMContentLoaded", t, !1);
      }
    } else document.attachEvent && (o = c, e = s.document, a = !1, l = function l() {
      a || (a = !0, o());
    }, (_i = function i() {
      try {
        e.documentElement.doScroll("left");
      } catch (c) {
        return void setTimeout(_i, 50);
      }

      l();
    })(), e.onreadystatechange = function () {
      "complete" == e.readyState && (e.onreadystatechange = null, l());
    });

    var o, e, a, l, _i;
  }(function () {
    var c, t;
    (c = document.createElement("div")).innerHTML = o, o = null, (t = c.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", function (c, t) {
      t.firstChild ? function (c, t) {
        t.parentNode.insertBefore(c, t);
      }(c, t.firstChild) : t.appendChild(c);
    }(t, document.body));
  });
}(window);

/***/ }),

/***/ "b447":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("3a38");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "b8e3":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "bc13":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c207":
/***/ (function(module, exports) {



/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c367":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("8436");
var step = __webpack_require__("50ed");
var Iterators = __webpack_require__("481b");
var toIObject = __webpack_require__("36c3");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("30f1")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "c3a1":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("e6f3");
var enumBugKeys = __webpack_require__("1691");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "cd1c":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("e853");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "cd78":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var isObject = __webpack_require__("f772");
var newPromiseCapability = __webpack_require__("656e");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d864":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("79aa");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "d9f6":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var toPrimitive = __webpack_require__("1bc3");
var dP = Object.defineProperty;

exports.f = __webpack_require__("8e60") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "dbdb":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("584a");
var global = __webpack_require__("e53d");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("b8e3") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e4ae":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "e53d":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "e6f3":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("07e3");
var toIObject = __webpack_require__("36c3");
var arrayIndexOf = __webpack_require__("5b4e")(false);
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "e770":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "svg{color:inherit;vertical-align:middle;fill:currentColor;overflow:hidden}.v-nm-player{--main-color:#222;--theme-color:#df3b3b;--second-color:#919191;--bg-color:#f5f5f5;--border-color:#e9e9e9;--border-radius:4px;--white:#fff;--unit:8px;--2unit:16px;--3unit:24px;--4unit:32px;--5unit:40px;position:fixed;bottom:0;width:100%;height:60px;display:flex;align-items:center;border-top:1px solid var(--border-color)}.v-nm-player .nm-cover{position:relative;width:60px;height:100%;background-color:var(--bg-color);background-size:cover;margin-right:var(--3unit)}.v-nm-player .nm-cover .icon-wrap{display:none;width:60px;height:60px;background-color:rgba(0,0,0,.5);padding:12px}.v-nm-player .nm-cover .icon-wrap .icon-fangda{color:var(--white)}.v-nm-player .nm-cover:hover .icon-wrap{display:block;position:absolute}.v-nm-player .nm-act{display:flex;align-items:center;margin-right:var(--3unit)}.v-nm-player .nm-act .icon{color:var(--white)}.v-nm-player .nm-act .a-next,.v-nm-player .nm-act .a-play,.v-nm-player .nm-act .a-prev{background-color:var(--theme-color);border-radius:50%;padding:6px}.v-nm-player .nm-act .a-prev .icon-play-next{transform:rotateY(180deg)}.v-nm-player .nm-act .a-play{padding:8px;margin:0 var(--3unit)}.v-nm-player .nm-act .p-play{padding-left:9px;padding-right:7px}.v-nm-player .nm-content{flex:1;margin-right:var(--3unit)}.v-nm-player .nm-content .nm-info{display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--unit);font-size:1.2rem}.v-nm-player .nm-content .nm-info .i-author{color:var(--second-color)}.v-nm-player .nm-content .nm-progress{padding:4px 0}.v-nm-player .nm-tools{display:flex;align-items:center;padding-right:var(--3unit)}.v-nm-player .nm-tools .t-volume{position:relative;margin-left:var(--3unit)}.v-nm-player .nm-tools .t-volume .volume-wrap{position:absolute;top:-70px;right:0;user-select:none;display:flex;align-items:center;padding:var(--2unit);background-color:var(--white);border:1px solid var(--border-color)}.v-nm-player .nm-tools .t-volume .volume-wrap .nm-progress{width:200px;padding:4px 0;margin-left:var(--unit)}.v-nm-player .nm-tools .t-sheet{margin-left:var(--3unit);display:flex;align-items:center;cursor:default}.v-nm-player .nm-tools .t-sheet .t-count{padding:2px 6px;background-color:var(--second-color);color:var(--white);font-size:1.2rem;margin-left:4px;border-radius:8px}.v-nm-player .icon-refresh.loading{animation:rotate-reverse 2s linear infinite}.v-nm-player .nm-progress .p-line{position:relative;height:2px;border-radius:var(--border-radius)}.v-nm-player .nm-progress .layer-1{background-color:var(--bg-color);width:100%;height:100%}.v-nm-player .nm-progress .layer-2,.v-nm-player .nm-progress .layer-3{transition:width .2s;position:absolute;top:0;width:0;height:100%;border-radius:var(--border-radius) 0 0 var(--border-radius)}.v-nm-player .nm-progress .layer-2{background-color:#d9d9d9}.v-nm-player .nm-progress .layer-3{background-color:var(--theme-color)}.v-nm-player .nm-progress .p-ring{position:absolute;left:-8px;top:-7px;width:16px;height:16px;background-color:var(--white);border-radius:50%;border:1px solid var(--border-color);display:flex}.v-nm-player .nm-progress .p-ring .r-center{width:4px;height:4px;background-color:var(--theme-color);border-radius:50%;margin:auto}.v-nm-player .nm-sheet{position:absolute;right:0;bottom:50px;background-color:var(--white);border:1px solid var(--border-color);border-right:none}.v-nm-player .nm-sheet .s-head{height:40px;display:flex;align-items:center;justify-content:space-between;font-size:1.4rem;border-bottom:1px solid var(--border-color);padding:0 var(--2unit) 0 calc(var(--unit) + 24px)}.v-nm-player .nm-sheet .s-body .s-row{height:40px;display:flex;align-items:center;padding:0 var(--2unit) 0 var(--unit)}.v-nm-player .nm-sheet .s-body .s-row.focus{color:var(--theme-color)}.v-nm-player .nm-sheet .s-body .s-row:nth-child(2n){background-color:var(--bg-color)}.v-nm-player .nm-sheet .s-body .s-cell:first-child{width:24px}.v-nm-player .nm-sheet .s-body .s-cell:nth-child(2){width:200px}.v-nm-player .nm-sheet .s-body .s-cell:nth-child(3){width:100px}.v-nm-player .nm-sheet .s-body .s-cell.cell-name{font-size:1.4rem}.v-nm-player.pos-top{top:0;bottom:unset;border-top:none;border-bottom:1px solid var(--border-color)}.v-nm-player.pos-top .nm-tools .t-volume .volume-wrap{top:18px}.v-nm-player.pos-top .nm-sheet{bottom:unset;top:40px}", ""]);

// exports


/***/ }),

/***/ "e853":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var isArray = __webpack_require__("1169");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "f201":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("e4ae");
var aFunction = __webpack_require__("79aa");
var SPECIES = __webpack_require__("5168")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "f751":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("5ca1");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("7333") });


/***/ }),

/***/ "f772":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (false) {}

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"750797f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=6887f78d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"v-nm-player",class:("pos-" + _vm.pos)},[_c('div',{staticClass:"nm-cover",style:(("background-image: url(" + (_vm.currentAudio.cover || _vm.defaultCover) + ")"))}),_c('div',{staticClass:"nm-act"},[_c('div',{staticClass:"a-prev",on:{"click":_vm.prev}},[_c('nm-icon',{attrs:{"icon":"play-next","size":"16"}})],1),(_vm.paused)?_c('div',{staticClass:"a-play p-play",on:{"click":_vm.play}},[_c('nm-icon',{attrs:{"icon":"play","size":"16"}})],1):_c('div',{staticClass:"a-play",on:{"click":_vm.pause}},[_c('nm-icon',{attrs:{"icon":"zanting","size":"16"}})],1),_c('div',{staticClass:"a-next",on:{"click":_vm.next}},[_c('nm-icon',{attrs:{"icon":"play-next","size":"16"}})],1)]),_c('div',{staticClass:"nm-content"},[_c('div',{staticClass:"nm-info"},[_c('div',{staticClass:"i-l"},[_c('span',{staticClass:"i-name"},[_vm._v(_vm._s(_vm.currentAudio.name))]),_vm._v(" - "),_c('span',{staticClass:"i-author"},[_vm._v(_vm._s(_vm.currentAudio.author))])]),_c('div',{staticClass:"i-r"},[_c('span',{staticClass:"i-played"},[_vm._v(_vm._s(_vm.playedTime))]),_vm._v(" / "),_c('span',{staticClass:"i-length"},[_vm._v(_vm._s(_vm.duration))])])]),_c('div',{staticClass:"nm-audio"},[_c('audio',{attrs:{"src":_vm.currentAudio.url,"preload":_vm.preload}}),_c('nm-progress',{attrs:{"played":_vm.playedRatio,"loaded":_vm.loadedRatio,"decimal":"","transition":""},on:{"click-bar":_vm.clickAudioBar}})],1)]),_c('div',{staticClass:"nm-tools"},[_c('div',{staticClass:"t-play-mode"},[_c('nm-icon',{attrs:{"icon":_vm.playModeIcon,"size":"16"},on:{"click":_vm.changePlayMode}})],1),_c('div',{staticClass:"t-volume"},[_c('nm-icon',{attrs:{"icon":"speaker","size":"16"},nativeOn:{"click":function($event){$event.stopPropagation();return _vm.toggleShowVolume($event)}}}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowVolumeSlider),expression:"isShowVolumeSlider"}],staticClass:"volume-wrap",on:{"click":function($event){$event.stopPropagation();}}},[_c('nm-icon',{attrs:{"icon":_vm.speakerIcon,"size":"16"},on:{"click":_vm.toggleMute}}),_c('nm-progress',{attrs:{"played":_vm.volume,"loaded":0,"width":200,"decimal":"","draggable":""},on:{"click-bar":_vm.clickVolumeBar,"drag-bar":_vm.clickVolumeBar}})],1)],1),(_vm.audios.length > 1)?_c('div',{staticClass:"t-sheet",on:{"click":function($event){$event.stopPropagation();return _vm.toggleShowSheet($event)}}},[_c('nm-icon',{attrs:{"icon":"menu-fold","size":"16"}}),_c('span',{staticClass:"t-count"},[_vm._v(_vm._s(_vm.audios.length))])],1):_vm._e()]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowSheet),expression:"isShowSheet"}],staticClass:"nm-sheet",on:{"click":function($event){$event.stopPropagation();}}},[_c('div',{staticClass:"s-head"},[_c('span',[_vm._v("播放列表")]),_c('nm-icon',{attrs:{"icon":"close","size":"14"},on:{"click":function($event){_vm.isShowSheet = false}}})],1),_c('div',{staticClass:"s-body"},_vm._l((_vm.audios),function(audio,i){return _c('div',{staticClass:"s-row",class:{focus: _vm.currentIndex === i},on:{"dblclick":function($event){_vm.currentIndex = i}}},[_c('div',{staticClass:"s-cell"},[(_vm.currentIndex === i)?_c('nm-icon',{attrs:{"icon":"play","size":"14"}}):_vm._e()],1),_c('div',{staticClass:"s-cell cell-name"},[_c('span',[_vm._v(_vm._s(audio.name))])]),_c('div',{staticClass:"s-cell"},[_vm._v(_vm._s(audio.author))]),_c('div',{staticClass:"s-cell"},[_c('nm-icon',{attrs:{"icon":"delete","size":"14"},on:{"click":function($event){return _vm.remove(i)}}})],1)])}),0)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=6887f78d&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find-index.js
var es6_array_find_index = __webpack_require__("20d6");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/promise.js
var core_js_promise = __webpack_require__("795b");
var promise_default = /*#__PURE__*/__webpack_require__.n(core_js_promise);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    promise_default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new promise_default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("85f2");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/lovue/dist/utils.esm.js
const adjustImgShape = (container, ratio) => {
  const imgs = document.querySelectorAll(container + ' .img-wrap img');
  imgs.forEach(img => {
    img.onload = () => {
      img.parentNode.classList.add(img.naturalWidth / img.naturalHeight >= ratio ? 'img-w' : 'img-h');
    };
  });
};

const connectWS = option => {
  console.log(`Connecting to ${option.uri} ...`);

  const ws = new WebSocket(option.uri);

  ws.onopen = ev => {
    console.log('RTServer Connection Created!');

    option.type && ws.send(JSON.stringify({
      type: option.type,
      data: 'Set Request Type'
    }));

    option.host && ws.send(JSON.stringify({
      type: option.type,
      data: option.host
    }));
  };

  ws.onmessage = ev => {
    option.receive(ev.data);
  };

  ws.onclose = ev => {
    console.log('RTServer Connection Closed!');
  };

  ws.onerror = ev => {
    console.log('RTServer Connection Broken!');
    throw new Error(ev)
  };

  return ws
};

/*
 * 将表格数据转换为csv格式的字符串
 *
 * @access public
 * @param {object} data - 表头：data.headers, head: {title: 'title', prop: 'prop'}；数据：data.rows
 * @returns {string}
 * */

const convertTableDataToString = data => {
  if (!data.headers || !data.rows) {
    throw new ReferenceError('数据源格式不正确')
  }

  let str = '', body = [];

  data.headers.forEach(head => {
    body.push(head.title);
  });
  str += body.join(',') + '\n';
  body = [];

  data.rows.forEach(row => {
    data.headers.forEach(head => {
      let x = '' + row[head.prop];
      body.push(x.includes(',') ? `\"${x}\"` : x);
    });
    str += body.join(',') + '\n';
    body = [];
  });
  return str
};

const config = {
  errorMsg: {
    101: '该用户已存在',
    102: '验证码错误',
    103: '验证码已过期',
    104: '用户名或密码错误',
    105: '用户未登录',
    106: '用户已登录，请刷新页面',
    107: '原密码错误',
    108: '无效的邮箱地址',
    109: '无效的手机号',
    110: '无效的用户名',
    111: '邮箱地址未绑定',
    112: '手机号未绑定',
    113: '用户登录失败次数大于4次，已被锁定，请1小时后再试',
    114: '用户权限不足',
    115: '验证失败次数过多，请重新发送验证码',
    116: '邮箱地址已绑定',
    117: '手机号已绑定',
    200: '请求超时',
    201: '请求发送失败',
    202: '后台服务未启动',
    203: '系统错误',
    204: '对象不存在',
    205: '请求过于频繁',
    206: '非法参数',
    207: '必选参数不能为空',
    208: '签名不匹配',
    209: '非开放API',
    210: '数据解析失败',
    211: '要存储的对象超过了大小限制',
    212: 'API请求次数超过限制',
    213: '创建对象失败',
    214: '查询对象失败',
    215: '更新对象失败',
    216: '删除对象失败',
    217: '对象已存在'
  },
  errorStatusMsg: {
    403: '拒绝访问',
    404: 'API不存在',
    405: '请求方法不允许',
    500: '内部服务器发生错误',
    502: '后台服务未启动',
    504: '请求超时，请重试'
  }
};

const wrapFetch = function (request) {
  let status = 200;
  return new Promise((resolve, reject) => {
    fetch(request).then(res => {
      if (res.ok) return res.json()
      status = res.status;
      throw {
        status,
        msg: config.errorStatusMsg[res.status] || res
      }
      // return res.text()
    }).then(body => {
      if (body.code === 0) {
        resolve(body.data);
      } else {
        throw {
          status,
          code: body.code,
          msg: config.errorMsg[body.code] || body.msg || body.error || 'Unknown Error'
        }
      }
    }).catch(reject);
  })
};
let urlPrefix = '/api', CSRFHeader = 'X-CSRFToken', CSRFValue = 'csrf';
const requestUrl = function (url) {
  if (url.startsWith('/') || url.startsWith('http')) return url
  return `${urlPrefix}/${url}`
};

const $fetch = {
  prefix(prefix) {
    urlPrefix = prefix;
  },
  setCSRF(header, value) {
    CSRFHeader = header;
    CSRFValue = value;
  },
  get(url) {
    return wrapFetch(new Request(requestUrl(url), {
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'x-access-token': localStorage.token
      }
    }))
  },
  post(url, params) {
    return wrapFetch(new Request(requestUrl(url), {
      method: 'post',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': localStorage.token,
        [CSRFHeader]: sessionStorage[CSRFValue]
      },
      body: JSON.stringify(params)
    }))
  },
  form(url, params) {
    return wrapFetch(new Request(requestUrl(url), {
      method: 'post',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'x-access-token': localStorage.token,
        [CSRFHeader]: sessionStorage[CSRFValue]
      },
      body: params
    }))
  },
  put(url, params) {
    return wrapFetch(new Request(requestUrl(url), {
      method: 'put',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': localStorage.token,
        [CSRFHeader]: sessionStorage[CSRFValue]
      },
      body: JSON.stringify(params)
    }))
  },
  putForm(url, params) {
    return wrapFetch(new Request(requestUrl(url), {
      method: 'put',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'x-access-token': localStorage.token,
        [CSRFHeader]: sessionStorage[CSRFValue]
      },
      body: params
    }))
  },
  delete(url) {
    return wrapFetch(new Request(requestUrl(url), {
      method: 'delete',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'x-access-token': localStorage.token,
        [CSRFHeader]: sessionStorage[CSRFValue]
      }
    }))
  }
};

const fillDateNumber = value => {
  return value < 10 ? `0${value}` : value
};

const formatDate = (date, type) => {
  let year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    hour = fillDateNumber(date.getHours()),
    minute = fillDateNumber(date.getMinutes()),
    second = fillDateNumber(date.getSeconds());

  if (type === 1) {
    return `${year}-${month}-${day}`
  }
  if (type === 2) {
    month = fillDateNumber(month);
    day = fillDateNumber(day);
    return Number(`${year}${month}${day}`)
  }
  if (type === 3) {
    return `${year}年${month}月${day}日 ${hour}:${minute}:${second}`
  }

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
};

const getAverageRGB = imgEl => {
  let blockSize = 5, // only visit every 5 pixels
    defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
    canvas = document.createElement('canvas'),
    context = canvas.getContext && canvas.getContext('2d'),
    data, width, height,
    i = -4,
    length,
    rgb = { r: 0, g: 0, b: 0 },
    count = 0;
  if (!context) {
    return defaultRGB;
  }
  height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
  width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;
  context.drawImage(imgEl, 0, 0);
  try {
    data = context.getImageData(0, 0, width, height);
  } catch (e) {
    return defaultRGB;
  }
  length = data.data.length;
  while ((i += blockSize * 4) < length) {
    ++count;
    rgb.r += data.data[i];
    rgb.g += data.data[i + 1];
    rgb.b += data.data[i + 2];
    // rgb.a += data.data[i+3];
  }
  // ~~ used to floor values
  rgb.r = ~~(rgb.r / count);
  rgb.g = ~~(rgb.g / count);
  rgb.b = ~~(rgb.b / count);
  // rgb.a = ~~(rgb.a/count);
  return rgb;
};

const getKeyByValue = (obj, value) => {
  for (let key in obj) {
    if (obj[key] === value) return key
  }
};

const getScrollTop = () => {
  if (document.documentElement.scrollTop) {
    return document.documentElement.scrollTop
  }
  return document.body.scrollTop
};

/*
 * get the value of name in a URL search.
 *
 * @access public
 * @function getSearchParam
 * @param {string} name - A string we want to get the value of
 * @returns {string}
 * */

const getSearchParam = name => {
  const searchString = new URL(location).search;
  if ('URLSearchParams' in window) {
    const params = new URLSearchParams(searchString);

    return params.get(name)
  }

  const params = {};
  searchString.substring(1).split('&').forEach(pair => {
    pair = pair.split('=');
    params[pair[0]] = pair[1];
  });
  return params[name]
};

const getTimeDiff = time => {
  const d = new Date();
  let diff = Math.floor(d.getTime() / 1000) - time;

  let thisDate = new Date(time * 1000),
    thisYear = thisDate.getFullYear(),
    thisMonth = thisDate.getMonth() + 1,
    thisDay = thisDate.getDate(),
    thisHour = thisDate.getHours(),
    thisMinute = thisDate.getMinutes();

  thisHour = thisHour === 0 ? '00' : thisHour;
  thisMinute = thisMinute === 0 ? '00' : thisMinute;

  if (diff < 60) {
    return `${diff < 1 ? 1 : diff}秒前`
  }
  if (diff >= 60 && diff < 60 * 60) {
    return `${Math.floor(diff / 60)}分钟前`
  }
  if (thisDate.toDateString() === d.toDateString()) {
    return `今天 ${thisHour}:${thisMinute}`
  }
  if (thisYear === d.getFullYear()) {
    return `${thisMonth}月${thisDay}日 ${thisHour}:${thisMinute}`
  }
  return `${thisYear}-${thisMonth}-${thisDay} ${thisHour}:${thisMinute}`
};

/*
 * getype returns a string which represents the type of value.
 *
 * @access public
 * @function getype
 * @param {*} value - A thing we want to check the type of
 * @returns {string}
 * */

const getype = value => {
  let type = Object.prototype.toString.call(value);

  if (type === '[object Undefined]') {
    return 'undefined'
  }

  if (type === '[object Null]') {
    return 'null'
  }

  if (type === '[object Number]') {
    return 'number'
  }

  if (type === '[object String]') {
    return 'string'
  }

  if (type === '[object Array]') {
    return 'array'
  }

  if (type === '[object Object]') {
    return 'object'
  }

  if (type === '[object Function]') {
    return 'function'
  }

  if (type === '[object Boolean]') {
    return 'boolean'
  }

  if (type === '[object Date]') {
    return 'date'
  }

  if (type === '[object Error]') {
    return 'error'
  }

  if (type === '[object RegExp]') {
    return 'regexp'
  }
};

const isEmptyObject = obj => {
  if (getype(obj) !== 'object') {
    throw new TypeError(`${obj} 不是对象字面量`)
  }

  return !Object.keys(obj).length
};

const isFirefox = () => {
  return /Firefox/i.test(navigator.userAgent)
};

const isIE = () => {
  return /Trident/i.test(navigator.userAgent)
};

const isMobile = () => {
  return /Mobi/i.test(navigator.userAgent)
};

const isMobileEx = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
};

const isSupportWebGL = () => {
  const canvas = document.createElement('canvas');
  const supports = 'probablySupportsContext' in canvas ? 'probablySupportsContext' : 'supportsContext';

  if (supports in canvas) {
    return canvas[supports]('webgl') || canvas[supports]('experimental-webgl')
  }
  return 'WebGLRenderingContext' in window
};

const isWeixin = () => {
  let userAgent = navigator.userAgent.toLowerCase();
  return userAgent.match(/micromessenger/)
};

const isWeixinInIphone = () => {
  let userAgent = navigator.userAgent.toLowerCase();
  return userAgent.match(/iphone os/) && userAgent.match(/micromessenger/)
};

const reload = () => {
  if (isWeixin()) {
    location.href = location.href + '?v=' + 10000 * Math.random();
  } else {
    location.reload();
  }
};

const saveDataToFile = (data, filename, ext) => {
  let blob = new Blob(['\ufeff' + data], { type: `text/${ext};charset=utf-8` }),
    url = URL.createObjectURL(blob);

  let link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `${filename}.${ext}`);

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const smoothToTop = () => {
  pageYOffset > 500 && scroll(0, 500);
  let y = -pageYOffset / 15,
    t = setInterval(() => {
      pageYOffset !== 0 ? scrollBy(0, y) : clearInterval(t);
    }, 15);
};

const sortObjectArray = (arr, column, dir = 1) => {
  arr.sort((a, b) => {
    if (typeof a[column] === 'number') return dir > 0 ? (a[column] - b[column]) : (b[column] - a[column])

    return new Intl.Collator(/*'zh-Hans-CN', */{
      sensitivity: 'base'
    }).compare(dir > 0 ? a[column] : b[column], dir > 0 ? b[column] : a[column])
  });
  return arr
};

const sleep = (ms = 1000) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(), ms);
	})
};

const browserType = () => {
	const ua = navigator.userAgent;
	let browser = ua.match(/Edge\/([\d.]+)/i);
	if (browser) return 'edge'

	browser = ua.match(/Firefox\/([\d.]+)/i);
	if (browser) return 'firefox'

	browser = ua.match(/Version\/([\d.]+)/i);
	if (browser) return 'safari'

	browser = ua.match(/Chrome\/([\d.]+)/i);
	if (browser) return 'chrome'
};

/*
 * 将数字按国际化格式显示
 *
 * @access public
 * @function intlNumber
 * @param {number} value - 待处理数字
 * @returns {string}
 * */

const intlNumber = (value) => {
	if (typeof Intl === 'undefined') return value
	if (value === undefined) return 0

	return new Intl.NumberFormat(undefined, {maximumFractionDigits: 6}).format(value)
};

/*
 * Generate a string for GET query
 *
 * @access public
 * @function generateQueryString
 * @param {object} obj
 * @returns {string}
 * */

const generateQueryString = obj => {
	let str = '';
	for (let k in obj) {
		str += `&${k}=${obj[k]}`;
	}
	return str.substring(1)
};

const getNumberArray = (min, max) => {
	return new Array(max - min + 1).fill(0).map((v, i) => (min + i))
};

const secondsToDuration = (num, type = 1) => {
  if (num <= 0) return ''

  let days = 0, hours = 0, minutes = 0, seconds = 0;

  minutes = Math.trunc(num / 60);
  if (minutes === 0) {
    seconds = fillDateNumber(num);
    return [`00:00:${seconds}`, `${seconds}s`][type - 1]
  }

  seconds = fillDateNumber(num % 60);
  hours = Math.trunc(minutes / 60);
  if (hours === 0) {
    minutes = fillDateNumber(minutes);
    return [`00:${minutes}:${seconds}`, `${minutes}m${seconds}s`][type - 1]
  }

  minutes = fillDateNumber(minutes % 60);
  days = Math.trunc(hours / 24);
  if (days === 0) {
    hours = fillDateNumber(hours);
    return [`${hours}:${minutes}:${seconds}`, `${hours}h${minutes}m${seconds}s`][type - 1]
  }

  hours = fillDateNumber(hours % 24);
  return [`${days}天 ${hours}:${minutes}:${seconds}`, `${days}day${hours}h${minutes}m${seconds}s`][type - 1]
};

const utils = {
  adjustImgShape,
  connectWS,
  convertTableDataToString,
  fetch: $fetch,
  fillDateNumber,
  formatDate,
  getAverageRGB,
  getKeyByValue,
  getScrollTop,
  getSearchParam,
  getTimeDiff,
  getype,
  isEmptyObject,
  isFirefox,
  isIE,
  isMobile,
  isMobileEx,
  isSupportWebGL,
  isWeixin,
  isWeixinInIphone,
  reload,
  saveDataToFile,
  smoothToTop,
  sortObjectArray,
  sleep,
  browserType,
  intlNumber,
  generateQueryString,
  getNumberArray,
  secondsToDuration
};

/* harmony default export */ var utils_esm = (utils);


// EXTERNAL MODULE: ./src/js/iconfont.js
var iconfont = __webpack_require__("b240");

// EXTERNAL MODULE: ./src/less/style.less
var style = __webpack_require__("38b8");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"750797f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Icon.vue?vue&type=template&id=cc2a0cda&
var Iconvue_type_template_id_cc2a0cda_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{class:("icon icon-" + _vm.icon),attrs:{"width":_vm.size || 20,"height":_vm.size || 20},on:{"click":function($event){return _vm.$emit('click')}}},[_c('use',{attrs:{"xlink:href":("#icon-" + _vm.icon)}})])}
var Iconvue_type_template_id_cc2a0cda_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Icon.vue?vue&type=template&id=cc2a0cda&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Icon.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var Iconvue_type_script_lang_js_ = ({
  name: 'nm-icon',
  props: {
    icon: String,
    size: String
  }
});
// CONCATENATED MODULE: ./src/components/Icon.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Iconvue_type_script_lang_js_ = (Iconvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
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
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/Icon.vue





/* normalize component */

var component = normalizeComponent(
  components_Iconvue_type_script_lang_js_,
  Iconvue_type_template_id_cc2a0cda_render,
  Iconvue_type_template_id_cc2a0cda_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Icon = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"750797f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Progress.vue?vue&type=template&id=1c97e0f0&
var Progressvue_type_template_id_1c97e0f0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nm-progress",on:{"click":_vm.clickBar}},[_c('div',{staticClass:"p-line"},[_c('div',{staticClass:"layer-1"}),_c('div',{staticClass:"layer-2",style:(("width:" + _vm.loadedPercentage + "%;"))}),_c('div',{staticClass:"layer-3",style:(("width:" + _vm.playedPercentage + "%;"))}),(_vm.draggable)?_c('div',{staticClass:"p-ring",style:(("transform: translateX(" + _vm.offsetX + "px)")),on:{"click":function($event){$event.stopPropagation();},"mousedown":_vm.dragStart}},[_c('div',{staticClass:"r-center"})]):_vm._e()])])}
var Progressvue_type_template_id_1c97e0f0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Progress.vue?vue&type=template&id=1c97e0f0&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.math.trunc.js
var es6_math_trunc = __webpack_require__("84b4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Progress.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Progressvue_type_script_lang_js_ = ({
  name: 'nm-progress',
  data: function data() {
    return {
      fullWidth: 0,
      startX: 0,
      dragFlag: false
    };
  },
  props: {
    played: Number,
    loaded: Number,
    decimal: Boolean,
    type: String,
    transition: Boolean,
    draggable: Boolean,
    width: Number
  },
  computed: {
    playedPercentage: function playedPercentage() {
      if (this.decimal) {
        return Math.trunc(this.played * 10000) / 100;
      } else {
        return this.played * 100 | 0;
      }
    },
    loadedPercentage: function loadedPercentage() {
      if (this.decimal) {
        return Math.trunc(this.loaded * 10000) / 100;
      } else {
        return this.loaded * 100 | 0;
      }
    },
    offsetX: function offsetX() {
      return this.played * this.fullWidth;
    }
  },
  methods: {
    clickBar: function clickBar(ev) {
      this.$emit('click-bar', ev.offsetX / this.fullWidth);
    },
    dragStart: function dragStart(ev) {
      this.startX = ev.pageX;
      this.dragFlag = true;
    },
    dragging: function dragging(ev) {
      if (!this.dragFlag) return;
      var deltaX = ev.pageX - this.startX;
      this.startX = ev.pageX;
      var newOffsetX = this.offsetX + deltaX;
      if (newOffsetX < 0) newOffsetX = 0;
      if (newOffsetX > this.fullWidth) newOffsetX = this.fullWidth;
      this.$emit('drag-bar', newOffsetX / this.fullWidth);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.fullWidth = this.$el.offsetWidth;
    if (this.width) this.fullWidth = this.width;

    if (!this.transition) {
      this.$el.querySelector('.layer-3').style.transition = 'none';
    }

    window.addEventListener('mousemove', this.dragging);
    window.addEventListener('mouseup', function (ev) {
      return _this.dragFlag = false;
    });
  }
});
// CONCATENATED MODULE: ./src/components/Progress.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Progressvue_type_script_lang_js_ = (Progressvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Progress.vue





/* normalize component */

var Progress_component = normalizeComponent(
  components_Progressvue_type_script_lang_js_,
  Progressvue_type_template_id_1c97e0f0_render,
  Progressvue_type_template_id_1c97e0f0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Progress = (Progress_component.exports);
// CONCATENATED MODULE: ./src/js/utils.js


function secondsToReadable(seconds) {
  seconds = Math.trunc(seconds);
  var hours = Math.trunc(seconds / 3600);
  seconds = seconds % 3600;
  var minutes = Math.trunc(seconds / 60);
  seconds = seconds % 60;
  return (hours > 0 ? [hours, minutes, seconds] : [minutes, seconds]).map(fillDateNumber).join(':');
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&






var _components;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'v-nm-player',
  data: function data() {
    return {
      audioElem: {},
      currentAudio: {},
      currentIndex: 0,
      paused: false,
      duration: '00:00',
      playedTime: '00:00',
      playedRatio: 0,
      loadedRatio: 0,
      volume: 0,
      playModes: ['play-circle-list', 'play-circle-single', 'play-random'],
      playMode: 0,
      speakerIcon: 'speaker',
      isShowVolumeSlider: false,
      isShowSheet: false
    };
  },
  props: {
    preload: Boolean,
    audios: Array,
    asyncPlay: Function,
    defaultCover: String,
    pos: String,
    unique: {
      type: String,
      'default': 'id'
    }
  },
  computed: {
    playModeIcon: function playModeIcon() {
      return this.playModes[this.playMode];
    }
  },
  watch: {
    currentIndex: 'updateCurrentAudio'
  },
  components: (_components = {}, _defineProperty(_components, Icon.name, Icon), _defineProperty(_components, Progress.name, Progress), _components),
  methods: {
    init: function init() {
      var _this = this;

      var audio = this.$el.querySelector('audio');
      this.audioElem = audio;
      this.volume = audio.volume;
      /* Bind audio events */

      audio.addEventListener('canplay', this.play);
      audio.addEventListener('canplaythrough', function () {
        _this.loadedRatio = 1;
      });
      audio.addEventListener('durationchange', function () {
        _this.duration = secondsToReadable(audio.duration);
      });
      audio.addEventListener('pause', function () {
        return _this.paused = true;
      });
      audio.addEventListener('play', function () {
        return _this.paused = false;
      });
      audio.addEventListener('ended', this.playEndHandler);
      audio.addEventListener('timeupdate', function () {
        _this.playedTime = secondsToReadable(audio.currentTime);
        _this.playedRatio = audio.currentTime / audio.duration;
      });
      audio.addEventListener('progress', function () {
        _this.loadedRatio = audio.buffered.length ? audio.buffered.end(audio.buffered.length - 1) / audio.duration : 0;
      });
      audio.addEventListener('volumechange', function () {
        _this.volume = audio.volume;
      });
    },
    updateCurrentAudio: function () {
      var _updateCurrentAudio = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(index) {
        var audio;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                audio = this.audios[index];

                if (!(audio === undefined)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", this.paused = true);

              case 3:
                if (!audio.url) {
                  _context.next = 7;
                  break;
                }

                this.currentAudio = audio;
                this.play();
                return _context.abrupt("return");

              case 7:
                if (!this.asyncPlay) {
                  _context.next = 10;
                  break;
                }

                _context.next = 10;
                return this.asyncPlay(index);

              case 10:
                this.currentAudio = audio;
                this.play();

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function updateCurrentAudio(_x) {
        return _updateCurrentAudio.apply(this, arguments);
      }

      return updateCurrentAudio;
    }(),
    playNewAudio: function () {
      var _playNewAudio = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(audio) {
        var unique, index;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                unique = this.unique;

                if (!(audio[unique] === undefined)) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return");

              case 3:
                index = this.audios.findIndex(function ($audio) {
                  return $audio[unique] === audio[unique];
                });

                if (!(index === -1)) {
                  _context2.next = 8;
                  break;
                }

                this.audios.unshift(Object.assign({}, audio));
                this.playIndex(0);
                return _context2.abrupt("return");

              case 8:
                this.playIndex(index);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function playNewAudio(_x2) {
        return _playNewAudio.apply(this, arguments);
      }

      return playNewAudio;
    }(),
    playIndex: function () {
      var _playIndex = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(index) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(this.currentIndex === index)) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 3;
                return this.updateCurrentAudio(index);

              case 3:
                _context3.next = 6;
                break;

              case 5:
                this.currentIndex = index;

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function playIndex(_x3) {
        return _playIndex.apply(this, arguments);
      }

      return playIndex;
    }(),
    play: function play() {
      var _this2 = this;

      if (isEmptyObject(this.currentAudio)) return;
      var promise = this.audioElem.play();

      if (promise) {
        promise.catch(function (e) {
          console.warn(e);
          if (e.name === 'NotAllowedError') _this2.pause();
        });
      }
    },
    pause: function pause() {
      this.audioElem.pause();
    },
    prev: function prev() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.audios.length - 1;
      } else {
        this.currentIndex--;
      }
    },
    next: function next() {
      if (this.currentIndex === this.audios.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    },
    clickAudioBar: function clickAudioBar(ratio) {
      this.audioElem.currentTime = this.audioElem.duration * ratio;
    },
    clickVolumeBar: function clickVolumeBar(ratio) {
      this.audioElem.volume = ratio;
    },
    changePlayMode: function changePlayMode() {
      if (this.playMode === 2) return this.playMode = 0;
      this.playMode++;
    },
    playEndHandler: function playEndHandler() {
      var playMode = this.playMode;
      if (playMode === 0) this.next();
      if (playMode === 1) this.audioElem.load();

      if (playMode === 2) {
        var random = Math.floor(Math.random() * this.audios.length);

        if (random === this.currentIndex) {
          this.next();
        } else {
          this.currentIndex = random;
        }
      }
    },
    toggleMute: function toggleMute() {
      this.audioElem.muted = !this.audioElem.muted;
      this.speakerIcon = this.audioElem.muted ? 'speaker-mute' : 'speaker';
    },
    toggleShowVolume: function toggleShowVolume() {
      this.isShowSheet = false;
      this.isShowVolumeSlider = !this.isShowVolumeSlider;
    },
    toggleShowSheet: function toggleShowSheet() {
      this.isShowSheet = !this.isShowSheet;
      this.isShowVolumeSlider = false;
    },
    remove: function remove(i) {
      if (this.currentIndex === i) this.next();
      this.audios.splice(i, 1);
      if (this.audios.length <= 1) this.isShowSheet = false;
    }
  },
  created: function created() {
    var _this3 = this;

    this.updateCurrentAudio(this.currentIndex);
    window.addEventListener('click', function () {
      _this3.isShowSheet = false;
      _this3.isShowVolumeSlider = false;
    });
  },
  mounted: function mounted() {
    this.init();
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/App.vue





/* normalize component */

var App_component = normalizeComponent(
  src_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (App_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (App);



/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=NMPlayer.umd.js.map