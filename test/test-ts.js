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
})(ns_neoguo || (ns_neoguo = {}));
//# sourceMappingURL=test-ts.js.map
