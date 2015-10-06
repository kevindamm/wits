var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var colors;
(function (colors) {
    var Color = (function () {
        function Color(r, g, b) {
            this.r = r;
            this.g = g;
            this.b = b;
        }
        Color.scale = function (k, c) {
            return new Color(k * c.r, k * c.g, k * c.b);
        };
        Color.plus = function (c1, c2) {
            return new Color(c1.r + c2.r, c1.g + c2.g, c1.b + c2.b);
        };
        Color.times = function (c1, c2) {
            return new Color(c1.r * c2.r, c1.g * c2.g, c1.b * c2.b);
        };
        return Color;
    })();
    colors.Color = Color;
    var ColorRGBA = (function (_super) {
        __extends(ColorRGBA, _super);
        function ColorRGBA(r, g, b, a) {
            _super.call(this, r, g, b);
            this.r = r;
            this.g = g;
            this.b = b;
            this.a = a;
        }
        ColorRGBA.scale = function (k, c) {
            return new ColorRGBA(k * c.r, k * c.g, k * c.b, k * c.a);
        };
        return ColorRGBA;
    })(Color);
    colors.ColorRGBA = ColorRGBA;
    var WHITE = new Color(255, 255, 255); // #FFFFFF
    var BLACK = new Color(0, 0, 0); // #000000
    var GREY = [
        new Color(250, 250, 250),
        new Color(245, 245, 245),
        new Color(238, 238, 238),
        new Color(224, 224, 224),
        new Color(189, 189, 189),
        new Color(158, 158, 158),
        new Color(117, 117, 117),
        new Color(97, 97, 97),
        new Color(66, 66, 66),
        new Color(33, 33, 33),
    ];
    var RED = [
        new Color(255, 235, 238),
        new Color(255, 205, 210),
        new Color(239, 154, 154),
        new Color(229, 115, 115),
        new Color(239, 83, 80),
        new Color(244, 67, 54),
        new Color(229, 57, 53),
        new Color(211, 47, 47),
        new Color(198, 40, 40),
        new Color(183, 28, 28),
    ];
    var BLUE = [
        new Color(227, 242, 253),
        new Color(187, 222, 251),
        new Color(144, 202, 249),
        new Color(100, 181, 246),
        new Color(66, 165, 245),
        new Color(33, 150, 243),
        new Color(30, 136, 229),
        new Color(25, 118, 210),
        new Color(21, 101, 192),
        new Color(13, 71, 161),
    ];
    var GREEN = [
        new Color(232, 245, 233),
        new Color(200, 230, 201),
        new Color(165, 214, 167),
        new Color(129, 199, 132),
        new Color(102, 187, 106),
        new Color(76, 175, 80),
        new Color(67, 160, 71),
        new Color(56, 142, 60),
        new Color(46, 125, 50),
        new Color(27, 94, 32),
    ];
    var BROWN = [
        new Color(239, 235, 233),
        new Color(215, 204, 200),
        new Color(188, 170, 164),
        new Color(161, 136, 127),
        new Color(141, 110, 99),
        new Color(121, 85, 72),
        new Color(109, 76, 65),
        new Color(93, 64, 55),
        new Color(78, 52, 46),
        new Color(62, 39, 35),
    ];
})(colors || (colors = {})); // module colors
