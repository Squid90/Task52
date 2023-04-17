Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
const _game = _interopRequireDefault(require('./game'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class Undead extends _game.default {
  constructor(name) {
    const type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Undead';
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
exports.default = Undead;
