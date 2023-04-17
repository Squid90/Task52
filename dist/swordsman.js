Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
const _game = _interopRequireDefault(require('./game'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class Swordsman extends _game.default {
  constructor(name) {
    const type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Swordsman';
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}
exports.default = Swordsman;
