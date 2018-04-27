(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.urange = factory());
}(this, (function () { 'use strict';

  var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var URangeJS = function () {
    function URangeJS() {
      var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

      _classCallCheck(this, URangeJS);

      this.from = from;
      this.to = to;
      this.diap = [[from, to]];
    }

    _createClass(URangeJS, [{
      key: 'get',
      value: function get() {
        if (this.diap.length === 0) {
          throw new Error('Range riched to the end');
        }

        // debugger
        var index = parseInt(Math.random() * this.diap.length);
        var range = this.diap.splice(index, 1);

        var _range$ = _slicedToArray(range[0], 2),
            from = _range$[0],
            to = _range$[1];

        var randNum = parseInt(Math.random() * (to - from + 1) + from);

        if (from !== randNum) {
          this.diap.push([from, randNum - 1]);
        }

        if (to !== randNum) {
          this.diap.push([randNum + 1, to]);
        }

        return randNum;
      }
    }, {
      key: Symbol.iterator,
      value: function value() {
        var self = this;

        return {
          next: function next() {
            try {
              return {
                value: self.get(),
                done: false
              };
            } catch (e) {
              return {
                value: undefined,
                done: true
              };
            }
          }
        };
      }
    }]);

    return URangeJS;
  }();

  return URangeJS;

})));
