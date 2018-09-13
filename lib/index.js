"use strict";

exports.__esModule = true;
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _chalk = _interopRequireDefault(require("chalk"));

var _command = _interopRequireDefault(require("./command"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Wux =
/*#__PURE__*/
function (_Command) {
  _inheritsLoose(Wux, _Command);

  function Wux(rawArgv) {
    var _this;

    _this = _Command.call(this, rawArgv) || this;
    _this.usage = "\u7528\u6CD5: \n  " + _chalk.default.green('$0 <command>') + " [options]";

    _this.load(_path.default.join(__dirname, 'commands'));

    return _this;
  }

  _createClass(Wux, [{
    key: "description",
    get: function get() {
      return '工程化链路';
    }
  }]);

  return Wux;
}(_command.default);

exports.default = Wux;
module.exports = exports.default;