var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ns_neoguo;
(function (ns_neoguo) {
    var MyGame = (function () {
        function MyGame(nameValue) {
            this.name = "NeoGame";
            this.age = 18;
            this.name = nameValue;
            this.info = this.name + ":" + this.age;
        }
        MyGame.prototype.getInfo = function () {
            return this.info;
        };
        return MyGame;
    })();
    ns_neoguo.MyGame = MyGame;
    var MyGame2 = (function (_super) {
        __extends(MyGame2, _super);
        function MyGame2() {
            _super.apply(this, arguments);
        }
        MyGame2.prototype.getInfo = function () {
            return this.info;
        };
        return MyGame2;
    })(MyGame);
    ns_neoguo.MyGame2 = MyGame2;
})(ns_neoguo || (ns_neoguo = {}));

var game = new ns_neoguo.MyGame("鲁智深");
game.age = 10;
game.getInfo();
//# sourceMappingURL=test-ts.js.map
