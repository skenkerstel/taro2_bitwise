var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PhaserUnit = /** @class */ (function (_super) {
    __extends(PhaserUnit, _super);
    function PhaserUnit(scene, unit) {
        var _this = _super.call(this, scene) || this;
        _this.unit = unit;
        var key = "unit/".concat(unit._stats.type);
        var sprite = _this.sprite = scene.add.sprite(0, 0, key);
        _this.add(sprite);
        scene.add.existing(_this);
        scene.events.on('update', _this.update, _this);
        return _this;
    }
    PhaserUnit.prototype.update = function ( /*time: number, delta: number*/) {
        var unit = this.unit;
        if (unit._destroyed) {
            this.scene.events.off('update', this.update, this);
            this.destroy();
            return;
        }
        var container = unit._pixiContainer;
        var texture = unit._pixiTexture;
        var sprite = this.sprite;
        this.x = container.x;
        this.y = container.y;
        sprite.rotation = texture.rotation;
        sprite.setScale(texture.scale.x, texture.scale.y);
    };
    return PhaserUnit;
}(Phaser.GameObjects.Container));
//# sourceMappingURL=PhaserUnit.js.map