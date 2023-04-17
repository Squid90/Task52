Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
const _game = _interopRequireDefault(require('./game'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class Magician extends _game.default {
  constructor(name) {
    const type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Magician';
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
exports.default = Magician;
