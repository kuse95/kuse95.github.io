var THREE = {REVISION: "69"};
"object" == typeof module && (module.exports = THREE), void 0 === Math.sign && (Math.sign = function (a) {
    return 0 > a ? -1 : a > 0 ? 1 : 0
}), THREE.MOUSE = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2
}, THREE.CullFaceNone = 0, THREE.CullFaceBack = 1, THREE.CullFaceFront = 2, THREE.CullFaceFrontBack = 3, THREE.FrontFaceDirectionCW = 0, THREE.FrontFaceDirectionCCW = 1, THREE.BasicShadowMap = 0, THREE.PCFShadowMap = 1, THREE.PCFSoftShadowMap = 2, THREE.FrontSide = 0, THREE.BackSide = 1, THREE.DoubleSide = 2, THREE.NoShading = 0, THREE.FlatShading = 1, THREE.SmoothShading = 2, THREE.NoColors = 0, THREE.FaceColors = 1, THREE.VertexColors = 2, THREE.NoBlending = 0, THREE.NormalBlending = 1, THREE.AdditiveBlending = 2, THREE.SubtractiveBlending = 3, THREE.MultiplyBlending = 4, THREE.CustomBlending = 5, THREE.AddEquation = 100, THREE.SubtractEquation = 101, THREE.ReverseSubtractEquation = 102, THREE.MinEquation = 103, THREE.MaxEquation = 104, THREE.ZeroFactor = 200, THREE.OneFactor = 201, THREE.SrcColorFactor = 202, THREE.OneMinusSrcColorFactor = 203, THREE.SrcAlphaFactor = 204, THREE.OneMinusSrcAlphaFactor = 205, THREE.DstAlphaFactor = 206, THREE.OneMinusDstAlphaFactor = 207, THREE.DstColorFactor = 208, THREE.OneMinusDstColorFactor = 209, THREE.SrcAlphaSaturateFactor = 210, THREE.MultiplyOperation = 0, THREE.MixOperation = 1, THREE.AddOperation = 2, THREE.UVMapping = function () {
}, THREE.CubeReflectionMapping = function () {
}, THREE.CubeRefractionMapping = function () {
}, THREE.SphericalReflectionMapping = function () {
}, THREE.SphericalRefractionMapping = function () {
}, THREE.RepeatWrapping = 1e3, THREE.ClampToEdgeWrapping = 1001, THREE.MirroredRepeatWrapping = 1002, THREE.NearestFilter = 1003, THREE.NearestMipMapNearestFilter = 1004, THREE.NearestMipMapLinearFilter = 1005, THREE.LinearFilter = 1006, THREE.LinearMipMapNearestFilter = 1007, THREE.LinearMipMapLinearFilter = 1008, THREE.UnsignedByteType = 1009, THREE.ByteType = 1010, THREE.ShortType = 1011, THREE.UnsignedShortType = 1012, THREE.IntType = 1013, THREE.UnsignedIntType = 1014, THREE.FloatType = 1015, THREE.UnsignedShort4444Type = 1016, THREE.UnsignedShort5551Type = 1017, THREE.UnsignedShort565Type = 1018, THREE.AlphaFormat = 1019, THREE.RGBFormat = 1020, THREE.RGBAFormat = 1021, THREE.LuminanceFormat = 1022, THREE.LuminanceAlphaFormat = 1023, THREE.RGB_S3TC_DXT1_Format = 2001, THREE.RGBA_S3TC_DXT1_Format = 2002, THREE.RGBA_S3TC_DXT3_Format = 2003, THREE.RGBA_S3TC_DXT5_Format = 2004, THREE.RGB_PVRTC_4BPPV1_Format = 2100, THREE.RGB_PVRTC_2BPPV1_Format = 2101, THREE.RGBA_PVRTC_4BPPV1_Format = 2102, THREE.RGBA_PVRTC_2BPPV1_Format = 2103, THREE.Color = function (a) {
    return 3 === arguments.length ? this.setRGB(arguments[0], arguments[1], arguments[2]) : this.set(a)
}, THREE.Color.prototype = {
    constructor: THREE.Color, r: 1, g: 1, b: 1, set: function (a) {
        return a instanceof THREE.Color ? this.copy(a) : "number" == typeof a ? this.setHex(a) : "string" == typeof a && this.setStyle(a), this
    }, setHex: function (a) {
        return a = Math.floor(a), this.r = (a >> 16 & 255) / 255, this.g = (a >> 8 & 255) / 255, this.b = (255 & a) / 255, this
    }, setRGB: function (a, b, c) {
        return this.r = a, this.g = b, this.b = c, this
    }, setHSL: function (a, b, c) {
        if (0 === b)this.r = this.g = this.b = c; else {
            var d = function (a, b, c) {
                return 0 > c && (c += 1), c > 1 && (c -= 1), 1 / 6 > c ? a + 6 * (b - a) * c : .5 > c ? b : 2 / 3 > c ? a + 6 * (b - a) * (2 / 3 - c) : a
            }, e = .5 >= c ? c * (1 + b) : c + b - c * b, f = 2 * c - e;
            this.r = d(f, e, a + 1 / 3), this.g = d(f, e, a), this.b = d(f, e, a - 1 / 3)
        }
        return this
    }, setStyle: function (a) {
        if (/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.test(a)) {
            var b = /^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec(a);
            return this.r = Math.min(255, parseInt(b[1], 10)) / 255, this.g = Math.min(255, parseInt(b[2], 10)) / 255, this.b = Math.min(255, parseInt(b[3], 10)) / 255, this
        }
        if (/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.test(a)) {
            var b = /^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec(a);
            return this.r = Math.min(100, parseInt(b[1], 10)) / 100, this.g = Math.min(100, parseInt(b[2], 10)) / 100, this.b = Math.min(100, parseInt(b[3], 10)) / 100, this
        }
        if (/^\#([0-9a-f]{6})$/i.test(a)) {
            var b = /^\#([0-9a-f]{6})$/i.exec(a);
            return this.setHex(parseInt(b[1], 16)), this
        }
        if (/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(a)) {
            var b = /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a);
            return this.setHex(parseInt(b[1] + b[1] + b[2] + b[2] + b[3] + b[3], 16)), this
        }
        return /^(\w+)$/i.test(a) ? (this.setHex(THREE.ColorKeywords[a]), this) : void 0
    }, copy: function (a) {
        return this.r = a.r, this.g = a.g, this.b = a.b, this
    }, copyGammaToLinear: function (a) {
        return this.r = a.r * a.r, this.g = a.g * a.g, this.b = a.b * a.b, this
    }, copyLinearToGamma: function (a) {
        return this.r = Math.sqrt(a.r), this.g = Math.sqrt(a.g), this.b = Math.sqrt(a.b), this
    }, convertGammaToLinear: function () {
        var a = this.r, b = this.g, c = this.b;
        return this.r = a * a, this.g = b * b, this.b = c * c, this
    }, convertLinearToGamma: function () {
        return this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b), this
    }, getHex: function () {
        return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
    }, getHexString: function () {
        return ("000000" + this.getHex().toString(16)).slice(-6)
    }, getHSL: function (a) {
        var b, c, d = a || {
                h: 0,
                s: 0,
                l: 0
            }, e = this.r, f = this.g, g = this.b, h = Math.max(e, f, g), i = Math.min(e, f, g), j = (i + h) / 2;
        if (i === h)b = 0, c = 0; else {
            var k = h - i;
            switch (c = .5 >= j ? k / (h + i) : k / (2 - h - i), h) {
                case e:
                    b = (f - g) / k + (g > f ? 6 : 0);
                    break;
                case f:
                    b = (g - e) / k + 2;
                    break;
                case g:
                    b = (e - f) / k + 4
            }
            b /= 6
        }
        return d.h = b, d.s = c, d.l = j, d
    }, getStyle: function () {
        return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
    }, offsetHSL: function (a, b, c) {
        var d = this.getHSL();
        return d.h += a, d.s += b, d.l += c, this.setHSL(d.h, d.s, d.l), this
    }, add: function (a) {
        return this.r += a.r, this.g += a.g, this.b += a.b, this
    }, addColors: function (a, b) {
        return this.r = a.r + b.r, this.g = a.g + b.g, this.b = a.b + b.b, this
    }, addScalar: function (a) {
        return this.r += a, this.g += a, this.b += a, this
    }, multiply: function (a) {
        return this.r *= a.r, this.g *= a.g, this.b *= a.b, this
    }, multiplyScalar: function (a) {
        return this.r *= a, this.g *= a, this.b *= a, this
    }, lerp: function (a, b) {
        return this.r += (a.r - this.r) * b, this.g += (a.g - this.g) * b, this.b += (a.b - this.b) * b, this
    }, equals: function (a) {
        return a.r === this.r && a.g === this.g && a.b === this.b
    }, fromArray: function (a) {
        return this.r = a[0], this.g = a[1], this.b = a[2], this
    }, toArray: function () {
        return [this.r, this.g, this.b]
    }, clone: function () {
        return (new THREE.Color).setRGB(this.r, this.g, this.b)
    }
}, THREE.ColorKeywords = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
}, THREE.Quaternion = function (a, b, c, d) {
    this._x = a || 0, this._y = b || 0, this._z = c || 0, this._w = void 0 !== d ? d : 1
}, THREE.Quaternion.prototype = {
    constructor: THREE.Quaternion, _x: 0, _y: 0, _z: 0, _w: 0, get x() {
        return this._x
    }, set x(a) {
        this._x = a, this.onChangeCallback()
    }, get y() {
        return this._y
    }, set y(a) {
        this._y = a, this.onChangeCallback()
    }, get z() {
        return this._z
    }, set z(a) {
        this._z = a, this.onChangeCallback()
    }, get w() {
        return this._w
    }, set w(a) {
        this._w = a, this.onChangeCallback()
    }, set: function (a, b, c, d) {
        return this._x = a, this._y = b, this._z = c, this._w = d, this.onChangeCallback(), this
    }, copy: function (a) {
        return this._x = a.x, this._y = a.y, this._z = a.z, this._w = a.w, this.onChangeCallback(), this
    }, setFromEuler: function (a, b) {
        if (a instanceof THREE.Euler == !1)throw new Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        var c = Math.cos(a._x / 2), d = Math.cos(a._y / 2), e = Math.cos(a._z / 2), f = Math.sin(a._x / 2), g = Math.sin(a._y / 2), h = Math.sin(a._z / 2);
        return "XYZ" === a.order ? (this._x = f * d * e + c * g * h, this._y = c * g * e - f * d * h, this._z = c * d * h + f * g * e, this._w = c * d * e - f * g * h) : "YXZ" === a.order ? (this._x = f * d * e + c * g * h, this._y = c * g * e - f * d * h, this._z = c * d * h - f * g * e, this._w = c * d * e + f * g * h) : "ZXY" === a.order ? (this._x = f * d * e - c * g * h, this._y = c * g * e + f * d * h, this._z = c * d * h + f * g * e, this._w = c * d * e - f * g * h) : "ZYX" === a.order ? (this._x = f * d * e - c * g * h, this._y = c * g * e + f * d * h, this._z = c * d * h - f * g * e, this._w = c * d * e + f * g * h) : "YZX" === a.order ? (this._x = f * d * e + c * g * h, this._y = c * g * e + f * d * h, this._z = c * d * h - f * g * e, this._w = c * d * e - f * g * h) : "XZY" === a.order && (this._x = f * d * e - c * g * h, this._y = c * g * e - f * d * h, this._z = c * d * h + f * g * e, this._w = c * d * e + f * g * h), b !== !1 && this.onChangeCallback(), this
    }, setFromAxisAngle: function (a, b) {
        var c = b / 2, d = Math.sin(c);
        return this._x = a.x * d, this._y = a.y * d, this._z = a.z * d, this._w = Math.cos(c), this.onChangeCallback(), this
    }, setFromRotationMatrix: function (a) {
        var b, c = a.elements, d = c[0], e = c[4], f = c[8], g = c[1], h = c[5], i = c[9], j = c[2], k = c[6], l = c[10], m = d + h + l;
        return m > 0 ? (b = .5 / Math.sqrt(m + 1), this._w = .25 / b, this._x = (k - i) * b, this._y = (f - j) * b, this._z = (g - e) * b) : d > h && d > l ? (b = 2 * Math.sqrt(1 + d - h - l), this._w = (k - i) / b, this._x = .25 * b, this._y = (e + g) / b, this._z = (f + j) / b) : h > l ? (b = 2 * Math.sqrt(1 + h - d - l), this._w = (f - j) / b, this._x = (e + g) / b, this._y = .25 * b, this._z = (i + k) / b) : (b = 2 * Math.sqrt(1 + l - d - h), this._w = (g - e) / b, this._x = (f + j) / b, this._y = (i + k) / b, this._z = .25 * b), this.onChangeCallback(), this
    }, setFromUnitVectors: function () {
        var a, b, c = 1e-6;
        return function (d, e) {
            return void 0 === a && (a = new THREE.Vector3), b = d.dot(e) + 1, c > b ? (b = 0, Math.abs(d.x) > Math.abs(d.z) ? a.set(-d.y, d.x, 0) : a.set(0, -d.z, d.y)) : a.crossVectors(d, e), this._x = a.x, this._y = a.y, this._z = a.z, this._w = b, this.normalize(), this
        }
    }(), inverse: function () {
        return this.conjugate().normalize(), this
    }, conjugate: function () {
        return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
    }, dot: function (a) {
        return this._x * a._x + this._y * a._y + this._z * a._z + this._w * a._w
    }, lengthSq: function () {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    }, length: function () {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    }, normalize: function () {
        var a = this.length();
        return 0 === a ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (a = 1 / a, this._x = this._x * a, this._y = this._y * a, this._z = this._z * a, this._w = this._w * a), this.onChangeCallback(), this
    }, multiply: function (a, b) {
        return void 0 !== b ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(a, b)) : this.multiplyQuaternions(this, a)
    }, multiplyQuaternions: function (a, b) {
        var c = a._x, d = a._y, e = a._z, f = a._w, g = b._x, h = b._y, i = b._z, j = b._w;
        return this._x = c * j + f * g + d * i - e * h, this._y = d * j + f * h + e * g - c * i, this._z = e * j + f * i + c * h - d * g, this._w = f * j - c * g - d * h - e * i, this.onChangeCallback(), this
    }, multiplyVector3: function (a) {
        return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), a.applyQuaternion(this)
    }, slerp: function (a, b) {
        if (0 === b)return this;
        if (1 === b)return this.copy(a);
        var c = this._x, d = this._y, e = this._z, f = this._w, g = f * a._w + c * a._x + d * a._y + e * a._z;
        if (0 > g ? (this._w = -a._w, this._x = -a._x, this._y = -a._y, this._z = -a._z, g = -g) : this.copy(a), g >= 1)return this._w = f, this._x = c, this._y = d, this._z = e, this;
        var h = Math.acos(g), i = Math.sqrt(1 - g * g);
        if (Math.abs(i) < .001)return this._w = .5 * (f + this._w), this._x = .5 * (c + this._x), this._y = .5 * (d + this._y), this._z = .5 * (e + this._z), this;
        var j = Math.sin((1 - b) * h) / i, k = Math.sin(b * h) / i;
        return this._w = f * j + this._w * k, this._x = c * j + this._x * k, this._y = d * j + this._y * k, this._z = e * j + this._z * k, this.onChangeCallback(), this
    }, equals: function (a) {
        return a._x === this._x && a._y === this._y && a._z === this._z && a._w === this._w
    }, fromArray: function (a, b) {
        return void 0 === b && (b = 0), this._x = a[b], this._y = a[b + 1], this._z = a[b + 2], this._w = a[b + 3], this.onChangeCallback(), this
    }, toArray: function (a, b) {
        return void 0 === a && (a = []), void 0 === b && (b = 0), a[b] = this._x, a[b + 1] = this._y, a[b + 2] = this._z, a[b + 3] = this._w, a
    }, onChange: function (a) {
        return this.onChangeCallback = a, this
    }, onChangeCallback: function () {
    }, clone: function () {
        return new THREE.Quaternion(this._x, this._y, this._z, this._w)
    }
}, THREE.Quaternion.slerp = function (a, b, c, d) {
    return c.copy(a).slerp(b, d)
}, THREE.Vector2 = function (a, b) {
    this.x = a || 0, this.y = b || 0
}, THREE.Vector2.prototype = {
    constructor: THREE.Vector2, set: function (a, b) {
        return this.x = a, this.y = b, this
    }, setX: function (a) {
        return this.x = a, this
    }, setY: function (a) {
        return this.y = a, this
    }, setComponent: function (a, b) {
        switch (a) {
            case 0:
                this.x = b;
                break;
            case 1:
                this.y = b;
                break;
            default:
                throw new Error("index is out of range: " + a)
        }
    }, getComponent: function (a) {
        switch (a) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw new Error("index is out of range: " + a)
        }
    }, copy: function (a) {
        return this.x = a.x, this.y = a.y, this
    }, add: function (a, b) {
        return void 0 !== b ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b)) : (this.x += a.x, this.y += a.y, this)
    }, addVectors: function (a, b) {
        return this.x = a.x + b.x, this.y = a.y + b.y, this
    }, addScalar: function (a) {
        return this.x += a, this.y += a, this
    }, sub: function (a, b) {
        return void 0 !== b ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b)) : (this.x -= a.x, this.y -= a.y, this)
    }, subVectors: function (a, b) {
        return this.x = a.x - b.x, this.y = a.y - b.y, this
    }, multiply: function (a) {
        return this.x *= a.x, this.y *= a.y, this
    }, multiplyScalar: function (a) {
        return this.x *= a, this.y *= a, this
    }, divide: function (a) {
        return this.x /= a.x, this.y /= a.y, this
    }, divideScalar: function (a) {
        if (0 !== a) {
            var b = 1 / a;
            this.x *= b, this.y *= b
        } else this.x = 0, this.y = 0;
        return this
    }, min: function (a) {
        return this.x > a.x && (this.x = a.x), this.y > a.y && (this.y = a.y), this
    }, max: function (a) {
        return this.x < a.x && (this.x = a.x), this.y < a.y && (this.y = a.y), this
    }, clamp: function (a, b) {
        return this.x < a.x ? this.x = a.x : this.x > b.x && (this.x = b.x), this.y < a.y ? this.y = a.y : this.y > b.y && (this.y = b.y), this
    }, clampScalar: function () {
        var a, b;
        return function (c, d) {
            return void 0 === a && (a = new THREE.Vector2, b = new THREE.Vector2), a.set(c, c), b.set(d, d), this.clamp(a, b)
        }
    }(), floor: function () {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
    }, ceil: function () {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
    }, round: function () {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this
    }, roundToZero: function () {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
    }, negate: function () {
        return this.x = -this.x, this.y = -this.y, this
    }, dot: function (a) {
        return this.x * a.x + this.y * a.y
    }, lengthSq: function () {
        return this.x * this.x + this.y * this.y
    }, length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }, normalize: function () {
        return this.divideScalar(this.length())
    }, distanceTo: function (a) {
        return Math.sqrt(this.distanceToSquared(a))
    }, distanceToSquared: function (a) {
        var b = this.x - a.x, c = this.y - a.y;
        return b * b + c * c
    }, setLength: function (a) {
        var b = this.length();
        return 0 !== b && a !== b && this.multiplyScalar(a / b), this
    }, lerp: function (a, b) {
        return this.x += (a.x - this.x) * b, this.y += (a.y - this.y) * b, this
    }, equals: function (a) {
        return a.x === this.x && a.y === this.y
    }, fromArray: function (a, b) {
        return void 0 === b && (b = 0), this.x = a[b], this.y = a[b + 1], this
    }, toArray: function (a, b) {
        return void 0 === a && (a = []), void 0 === b && (b = 0), a[b] = this.x, a[b + 1] = this.y, a
    }, clone: function () {
        return new THREE.Vector2(this.x, this.y)
    }
}, THREE.Vector3 = function (a, b, c) {
    this.x = a || 0, this.y = b || 0, this.z = c || 0
}, THREE.Vector3.prototype = {
    constructor: THREE.Vector3, set: function (a, b, c) {
        return this.x = a, this.y = b, this.z = c, this
    }, setX: function (a) {
        return this.x = a, this
    }, setY: function (a) {
        return this.y = a, this
    }, setZ: function (a) {
        return this.z = a, this
    }, setComponent: function (a, b) {
        switch (a) {
            case 0:
                this.x = b;
                break;
            case 1:
                this.y = b;
                break;
            case 2:
                this.z = b;
                break;
            default:
                throw new Error("index is out of range: " + a)
        }
    }, getComponent: function (a) {
        switch (a) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw new Error("index is out of range: " + a)
        }
    }, copy: function (a) {
        return this.x = a.x, this.y = a.y, this.z = a.z, this
    }, add: function (a, b) {
        return void 0 !== b ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b)) : (this.x += a.x, this.y += a.y, this.z += a.z, this)
    }, addScalar: function (a) {
        return this.x += a, this.y += a, this.z += a, this
    }, addVectors: function (a, b) {
        return this.x = a.x + b.x, this.y = a.y + b.y, this.z = a.z + b.z, this
    }, sub: function (a, b) {
        return void 0 !== b ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b)) : (this.x -= a.x, this.y -= a.y, this.z -= a.z, this)
    }, subVectors: function (a, b) {
        return this.x = a.x - b.x, this.y = a.y - b.y, this.z = a.z - b.z, this
    }, multiply: function (a, b) {
        return void 0 !== b ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(a, b)) : (this.x *= a.x, this.y *= a.y, this.z *= a.z, this)
    }, multiplyScalar: function (a) {
        return this.x *= a, this.y *= a, this.z *= a, this
    }, multiplyVectors: function (a, b) {
        return this.x = a.x * b.x, this.y = a.y * b.y, this.z = a.z * b.z, this
    }, applyEuler: function () {
        var a;
        return function (b) {
            return b instanceof THREE.Euler == !1 && console.error("THREE.Vector3: .applyEuler() now expects a Euler rotation rather than a Vector3 and order."), void 0 === a && (a = new THREE.Quaternion), this.applyQuaternion(a.setFromEuler(b)), this
        }
    }(), applyAxisAngle: function () {
        var a;
        return function (b, c) {
            return void 0 === a && (a = new THREE.Quaternion), this.applyQuaternion(a.setFromAxisAngle(b, c)), this
        }
    }(), applyMatrix3: function (a) {
        var b = this.x, c = this.y, d = this.z, e = a.elements;
        return this.x = e[0] * b + e[3] * c + e[6] * d, this.y = e[1] * b + e[4] * c + e[7] * d, this.z = e[2] * b + e[5] * c + e[8] * d, this
    }, applyMatrix4: function (a) {
        var b = this.x, c = this.y, d = this.z, e = a.elements;
        return this.x = e[0] * b + e[4] * c + e[8] * d + e[12], this.y = e[1] * b + e[5] * c + e[9] * d + e[13], this.z = e[2] * b + e[6] * c + e[10] * d + e[14], this
    }, applyProjection: function (a) {
        var b = this.x, c = this.y, d = this.z, e = a.elements, f = 1 / (e[3] * b + e[7] * c + e[11] * d + e[15]);
        return this.x = (e[0] * b + e[4] * c + e[8] * d + e[12]) * f, this.y = (e[1] * b + e[5] * c + e[9] * d + e[13]) * f, this.z = (e[2] * b + e[6] * c + e[10] * d + e[14]) * f, this
    }, applyQuaternion: function (a) {
        var b = this.x, c = this.y, d = this.z, e = a.x, f = a.y, g = a.z, h = a.w, i = h * b + f * d - g * c, j = h * c + g * b - e * d, k = h * d + e * c - f * b, l = -e * b - f * c - g * d;
        return this.x = i * h + l * -e + j * -g - k * -f, this.y = j * h + l * -f + k * -e - i * -g, this.z = k * h + l * -g + i * -f - j * -e, this
    }, project: function () {
        var a;
        return function (b) {
            return void 0 === a && (a = new THREE.Matrix4), a.multiplyMatrices(b.projectionMatrix, a.getInverse(b.matrixWorld)), this.applyProjection(a)
        }
    }(), unproject: function () {
        var a;
        return function (b) {
            return void 0 === a && (a = new THREE.Matrix4), a.multiplyMatrices(b.matrixWorld, a.getInverse(b.projectionMatrix)), this.applyProjection(a)
        }
    }(), transformDirection: function (a) {
        var b = this.x, c = this.y, d = this.z, e = a.elements;
        return this.x = e[0] * b + e[4] * c + e[8] * d, this.y = e[1] * b + e[5] * c + e[9] * d, this.z = e[2] * b + e[6] * c + e[10] * d, this.normalize(), this
    }, divide: function (a) {
        return this.x /= a.x, this.y /= a.y, this.z /= a.z, this
    }, divideScalar: function (a) {
        if (0 !== a) {
            var b = 1 / a;
            this.x *= b, this.y *= b, this.z *= b
        } else this.x = 0, this.y = 0, this.z = 0;
        return this
    }, min: function (a) {
        return this.x > a.x && (this.x = a.x), this.y > a.y && (this.y = a.y), this.z > a.z && (this.z = a.z), this
    }, max: function (a) {
        return this.x < a.x && (this.x = a.x), this.y < a.y && (this.y = a.y), this.z < a.z && (this.z = a.z), this
    }, clamp: function (a, b) {
        return this.x < a.x ? this.x = a.x : this.x > b.x && (this.x = b.x), this.y < a.y ? this.y = a.y : this.y > b.y && (this.y = b.y), this.z < a.z ? this.z = a.z : this.z > b.z && (this.z = b.z), this
    }, clampScalar: function () {
        var a, b;
        return function (c, d) {
            return void 0 === a && (a = new THREE.Vector3, b = new THREE.Vector3), a.set(c, c, c), b.set(d, d, d), this.clamp(a, b)
        }
    }(), floor: function () {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
    }, ceil: function () {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
    }, round: function () {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
    }, roundToZero: function () {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
    }, negate: function () {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
    }, dot: function (a) {
        return this.x * a.x + this.y * a.y + this.z * a.z
    }, lengthSq: function () {
        return this.x * this.x + this.y * this.y + this.z * this.z
    }, length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }, lengthManhattan: function () {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    }, normalize: function () {
        return this.divideScalar(this.length())
    }, setLength: function (a) {
        var b = this.length();
        return 0 !== b && a !== b && this.multiplyScalar(a / b), this
    }, lerp: function (a, b) {
        return this.x += (a.x - this.x) * b, this.y += (a.y - this.y) * b, this.z += (a.z - this.z) * b, this
    }, cross: function (a, b) {
        if (void 0 !== b)return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(a, b);
        var c = this.x, d = this.y, e = this.z;
        return this.x = d * a.z - e * a.y, this.y = e * a.x - c * a.z, this.z = c * a.y - d * a.x, this
    }, crossVectors: function (a, b) {
        var c = a.x, d = a.y, e = a.z, f = b.x, g = b.y, h = b.z;
        return this.x = d * h - e * g, this.y = e * f - c * h, this.z = c * g - d * f, this
    }, projectOnVector: function () {
        var a, b;
        return function (c) {
            return void 0 === a && (a = new THREE.Vector3), a.copy(c).normalize(), b = this.dot(a), this.copy(a).multiplyScalar(b)
        }
    }(), projectOnPlane: function () {
        var a;
        return function (b) {
            return void 0 === a && (a = new THREE.Vector3), a.copy(this).projectOnVector(b), this.sub(a)
        }
    }(), reflect: function () {
        var a;
        return function (b) {
            return void 0 === a && (a = new THREE.Vector3), this.sub(a.copy(b).multiplyScalar(2 * this.dot(b)))
        }
    }(), angleTo: function (a) {
        var b = this.dot(a) / (this.length() * a.length());
        return Math.acos(THREE.Math.clamp(b, -1, 1))
    }, distanceTo: function (a) {
        return Math.sqrt(this.distanceToSquared(a))
    }, distanceToSquared: function (a) {
        var b = this.x - a.x, c = this.y - a.y, d = this.z - a.z;
        return b * b + c * c + d * d
    }, setEulerFromRotationMatrix: function () {
        console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
    }, setEulerFromQuaternion: function () {
        console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
    }, getPositionFromMatrix: function (a) {
        return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(a)
    }, getScaleFromMatrix: function (a) {
        return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(a)
    }, getColumnFromMatrix: function (a, b) {
        return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(a, b)
    }, setFromMatrixPosition: function (a) {
        return this.x = a.elements[12], this.y = a.elements[13], this.z = a.elements[14], this
    }, setFromMatrixScale: function (a) {
        var b = this.set(a.elements[0], a.elements[1], a.elements[2]).length(), c = this.set(a.elements[4], a.elements[5], a.elements[6]).length(), d = this.set(a.elements[8], a.elements[9], a.elements[10]).length();
        return this.x = b, this.y = c, this.z = d, this
    }, setFromMatrixColumn: function (a, b) {
        var c = 4 * a, d = b.elements;
        return this.x = d[c], this.y = d[c + 1], this.z = d[c + 2], this
    }, equals: function (a) {
        return a.x === this.x && a.y === this.y && a.z === this.z
    }, fromArray: function (a, b) {
        return void 0 === b && (b = 0), this.x = a[b], this.y = a[b + 1], this.z = a[b + 2], this
    }, toArray: function (a, b) {
        return void 0 === a && (a = []), void 0 === b && (b = 0), a[b] = this.x, a[b + 1] = this.y, a[b + 2] = this.z, a
    }, clone: function () {
        return new THREE.Vector3(this.x, this.y, this.z)
    }
}, THREE.Vector4 = function (a, b, c, d) {
    this.x = a || 0, this.y = b || 0, this.z = c || 0, this.w = void 0 !== d ? d : 1
}, THREE.Vector4.prototype = {
    constructor: THREE.Vector4, set: function (a, b, c, d) {
        return this.x = a, this.y = b, this.z = c, this.w = d, this
    }, setX: function (a) {
        return this.x = a, this
    }, setY: function (a) {
        return this.y = a, this
    }, setZ: function (a) {
        return this.z = a, this
    }, setW: function (a) {
        return this.w = a, this
    }, setComponent: function (a, b) {
        switch (a) {
            case 0:
                this.x = b;
                break;
            case 1:
                this.y = b;
                break;
            case 2:
                this.z = b;
                break;
            case 3:
                this.w = b;
                break;
            default:
                throw new Error("index is out of range: " + a)
        }
    }, getComponent: function (a) {
        switch (a) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw new Error("index is out of range: " + a)
        }
    }, copy: function (a) {
        return this.x = a.x, this.y = a.y, this.z = a.z, this.w = void 0 !== a.w ? a.w : 1, this
    }, add: function (a, b) {
        return void 0 !== b ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b)) : (this.x += a.x, this.y += a.y, this.z += a.z, this.w += a.w, this)
    }, addScalar: function (a) {
        return this.x += a, this.y += a, this.z += a, this.w += a, this
    }, addVectors: function (a, b) {
        return this.x = a.x + b.x, this.y = a.y + b.y, this.z = a.z + b.z, this.w = a.w + b.w, this
    }, sub: function (a, b) {
        return void 0 !== b ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b)) : (this.x -= a.x, this.y -= a.y, this.z -= a.z, this.w -= a.w, this)
    }, subVectors: function (a, b) {
        return this.x = a.x - b.x, this.y = a.y - b.y, this.z = a.z - b.z, this.w = a.w - b.w, this
    }, multiplyScalar: function (a) {
        return this.x *= a, this.y *= a, this.z *= a, this.w *= a, this
    }, applyMatrix4: function (a) {
        var b = this.x, c = this.y, d = this.z, e = this.w, f = a.elements;
        return this.x = f[0] * b + f[4] * c + f[8] * d + f[12] * e, this.y = f[1] * b + f[5] * c + f[9] * d + f[13] * e, this.z = f[2] * b + f[6] * c + f[10] * d + f[14] * e, this.w = f[3] * b + f[7] * c + f[11] * d + f[15] * e, this
    }, divideScalar: function (a) {
        if (0 !== a) {
            var b = 1 / a;
            this.x *= b, this.y *= b, this.z *= b, this.w *= b
        } else this.x = 0, this.y = 0, this.z = 0, this.w = 1;
        return this
    }, setAxisAngleFromQuaternion: function (a) {
        this.w = 2 * Math.acos(a.w);
        var b = Math.sqrt(1 - a.w * a.w);
        return 1e-4 > b ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = a.x / b, this.y = a.y / b, this.z = a.z / b), this
    }, setAxisAngleFromRotationMatrix: function (a) {
        var b, c, d, e, f = .01, g = .1, h = a.elements, i = h[0], j = h[4], k = h[8], l = h[1], m = h[5], n = h[9], o = h[2], p = h[6], q = h[10];
        if (Math.abs(j - l) < f && Math.abs(k - o) < f && Math.abs(n - p) < f) {
            if (Math.abs(j + l) < g && Math.abs(k + o) < g && Math.abs(n + p) < g && Math.abs(i + m + q - 3) < g)return this.set(1, 0, 0, 0), this;
            b = Math.PI;
            var r = (i + 1) / 2, s = (m + 1) / 2, t = (q + 1) / 2, u = (j + l) / 4, v = (k + o) / 4, w = (n + p) / 4;
            return r > s && r > t ? f > r ? (c = 0, d = .707106781, e = .707106781) : (c = Math.sqrt(r), d = u / c, e = v / c) : s > t ? f > s ? (c = .707106781, d = 0, e = .707106781) : (d = Math.sqrt(s), c = u / d, e = w / d) : f > t ? (c = .707106781, d = .707106781, e = 0) : (e = Math.sqrt(t), c = v / e, d = w / e), this.set(c, d, e, b), this
        }
        var x = Math.sqrt((p - n) * (p - n) + (k - o) * (k - o) + (l - j) * (l - j));
        return Math.abs(x) < .001 && (x = 1), this.x = (p - n) / x, this.y = (k - o) / x, this.z = (l - j) / x, this.w = Math.acos((i + m + q - 1) / 2), this
    }, min: function (a) {
        return this.x > a.x && (this.x = a.x), this.y > a.y && (this.y = a.y), this.z > a.z && (this.z = a.z), this.w > a.w && (this.w = a.w), this
    }, max: function (a) {
        return this.x < a.x && (this.x = a.x), this.y < a.y && (this.y = a.y), this.z < a.z && (this.z = a.z), this.w < a.w && (this.w = a.w), this
    }, clamp: function (a, b) {
        return this.x < a.x ? this.x = a.x : this.x > b.x && (this.x = b.x), this.y < a.y ? this.y = a.y : this.y > b.y && (this.y = b.y), this.z < a.z ? this.z = a.z : this.z > b.z && (this.z = b.z), this.w < a.w ? this.w = a.w : this.w > b.w && (this.w = b.w), this
    }, clampScalar: function () {
        var a, b;
        return function (c, d) {
            return void 0 === a && (a = new THREE.Vector4, b = new THREE.Vector4), a.set(c, c, c, c), b.set(d, d, d, d), this.clamp(a, b)
        }
    }(), floor: function () {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
    }, ceil: function () {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
    }, round: function () {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
    }, roundToZero: function () {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
    }, negate: function () {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
    }, dot: function (a) {
        return this.x * a.x + this.y * a.y + this.z * a.z + this.w * a.w
    }, lengthSq: function () {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    }, length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    }, lengthManhattan: function () {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    }, normalize: function () {
        return this.divideScalar(this.length())
    }, setLength: function (a) {
        var b = this.length();
        return 0 !== b && a !== b && this.multiplyScalar(a / b), this
    }, lerp: function (a, b) {
        return this.x += (a.x - this.x) * b, this.y += (a.y - this.y) * b, this.z += (a.z - this.z) * b, this.w += (a.w - this.w) * b, this
    }, equals: function (a) {
        return a.x === this.x && a.y === this.y && a.z === this.z && a.w === this.w
    }, fromArray: function (a, b) {
        return void 0 === b && (b = 0), this.x = a[b], this.y = a[b + 1], this.z = a[b + 2], this.w = a[b + 3], this
    }, toArray: function (a, b) {
        return void 0 === a && (a = []), void 0 === b && (b = 0), a[b] = this.x, a[b + 1] = this.y, a[b + 2] = this.z, a[b + 3] = this.w, a
    }, clone: function () {
        return new THREE.Vector4(this.x, this.y, this.z, this.w)
    }
}, THREE.Euler = function (a, b, c, d) {
    this._x = a || 0, this._y = b || 0, this._z = c || 0, this._order = d || THREE.Euler.DefaultOrder
}, THREE.Euler.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], THREE.Euler.DefaultOrder = "XYZ", THREE.Euler.prototype = {
    constructor: THREE.Euler, _x: 0, _y: 0, _z: 0, _order: THREE.Euler.DefaultOrder, get x() {
        return this._x
    }, set x(a) {
        this._x = a, this.onChangeCallback()
    }, get y() {
        return this._y
    }, set y(a) {
        this._y = a, this.onChangeCallback()
    }, get z() {
        return this._z
    }, set z(a) {
        this._z = a, this.onChangeCallback()
    }, get order() {
        return this._order
    }, set order(a) {
        this._order = a, this.onChangeCallback()
    }, set: function (a, b, c, d) {
        return this._x = a, this._y = b, this._z = c, this._order = d || this._order, this.onChangeCallback(), this
    }, copy: function (a) {
        return this._x = a._x, this._y = a._y, this._z = a._z, this._order = a._order, this.onChangeCallback(), this
    }, setFromRotationMatrix: function (a, b) {
        var c = THREE.Math.clamp, d = a.elements, e = d[0], f = d[4], g = d[8], h = d[1], i = d[5], j = d[9], k = d[2], l = d[6], m = d[10];
        return b = b || this._order, "XYZ" === b ? (this._y = Math.asin(c(g, -1, 1)), Math.abs(g) < .99999 ? (this._x = Math.atan2(-j, m), this._z = Math.atan2(-f, e)) : (this._x = Math.atan2(l, i), this._z = 0)) : "YXZ" === b ? (this._x = Math.asin(-c(j, -1, 1)), Math.abs(j) < .99999 ? (this._y = Math.atan2(g, m), this._z = Math.atan2(h, i)) : (this._y = Math.atan2(-k, e), this._z = 0)) : "ZXY" === b ? (this._x = Math.asin(c(l, -1, 1)), Math.abs(l) < .99999 ? (this._y = Math.atan2(-k, m), this._z = Math.atan2(-f, i)) : (this._y = 0, this._z = Math.atan2(h, e))) : "ZYX" === b ? (this._y = Math.asin(-c(k, -1, 1)), Math.abs(k) < .99999 ? (this._x = Math.atan2(l, m), this._z = Math.atan2(h, e)) : (this._x = 0, this._z = Math.atan2(-f, i))) : "YZX" === b ? (this._z = Math.asin(c(h, -1, 1)), Math.abs(h) < .99999 ? (this._x = Math.atan2(-j, i), this._y = Math.atan2(-k, e)) : (this._x = 0, this._y = Math.atan2(g, m))) : "XZY" === b ? (this._z = Math.asin(-c(f, -1, 1)), Math.abs(f) < .99999 ? (this._x = Math.atan2(l, i), this._y = Math.atan2(g, e)) : (this._x = Math.atan2(-j, m), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + b), this._order = b, this.onChangeCallback(), this
    }, setFromQuaternion: function (a, b, c) {
        var d = THREE.Math.clamp, e = a.x * a.x, f = a.y * a.y, g = a.z * a.z, h = a.w * a.w;
        return b = b || this._order, "XYZ" === b ? (this._x = Math.atan2(2 * (a.x * a.w - a.y * a.z), h - e - f + g), this._y = Math.asin(d(2 * (a.x * a.z + a.y * a.w), -1, 1)), this._z = Math.atan2(2 * (a.z * a.w - a.x * a.y), h + e - f - g)) : "YXZ" === b ? (this._x = Math.asin(d(2 * (a.x * a.w - a.y * a.z), -1, 1)), this._y = Math.atan2(2 * (a.x * a.z + a.y * a.w), h - e - f + g), this._z = Math.atan2(2 * (a.x * a.y + a.z * a.w), h - e + f - g)) : "ZXY" === b ? (this._x = Math.asin(d(2 * (a.x * a.w + a.y * a.z), -1, 1)), this._y = Math.atan2(2 * (a.y * a.w - a.z * a.x), h - e - f + g), this._z = Math.atan2(2 * (a.z * a.w - a.x * a.y), h - e + f - g)) : "ZYX" === b ? (this._x = Math.atan2(2 * (a.x * a.w + a.z * a.y), h - e - f + g), this._y = Math.asin(d(2 * (a.y * a.w - a.x * a.z), -1, 1)), this._z = Math.atan2(2 * (a.x * a.y + a.z * a.w), h + e - f - g)) : "YZX" === b ? (this._x = Math.atan2(2 * (a.x * a.w - a.z * a.y), h - e + f - g), this._y = Math.atan2(2 * (a.y * a.w - a.x * a.z), h + e - f - g), this._z = Math.asin(d(2 * (a.x * a.y + a.z * a.w), -1, 1))) : "XZY" === b ? (this._x = Math.atan2(2 * (a.x * a.w + a.y * a.z), h - e + f - g), this._y = Math.atan2(2 * (a.x * a.z + a.y * a.w), h + e - f - g), this._z = Math.asin(d(2 * (a.z * a.w - a.x * a.y), -1, 1))) : console.warn("THREE.Euler: .setFromQuaternion() given unsupported order: " + b), this._order = b, c !== !1 && this.onChangeCallback(), this
    }, reorder: function () {
        var a = new THREE.Quaternion;
        return function (b) {
            a.setFromEuler(this), this.setFromQuaternion(a, b)
        }
    }(), equals: function (a) {
        return a._x === this._x && a._y === this._y && a._z === this._z && a._order === this._order
    }, fromArray: function (a) {
        return this._x = a[0], this._y = a[1], this._z = a[2], void 0 !== a[3] && (this._order = a[3]), this.onChangeCallback(), this
    }, toArray: function () {
        return [this._x, this._y, this._z, this._order]
    }, onChange: function (a) {
        return this.onChangeCallback = a, this
    }, onChangeCallback: function () {
    }, clone: function () {
        return new THREE.Euler(this._x, this._y, this._z, this._order)
    }
}, THREE.Line3 = function (a, b) {
    this.start = void 0 !== a ? a : new THREE.Vector3, this.end = void 0 !== b ? b : new THREE.Vector3
}, THREE.Line3.prototype = {
    constructor: THREE.Line3, set: function (a, b) {
        return this.start.copy(a), this.end.copy(b), this
    }, copy: function (a) {
        return this.start.copy(a.start), this.end.copy(a.end), this
    }, center: function (a) {
        var b = a || new THREE.Vector3;
        return b.addVectors(this.start, this.end).multiplyScalar(.5)
    }, delta: function (a) {
        var b = a || new THREE.Vector3;
        return b.subVectors(this.end, this.start)
    }, distanceSq: function () {
        return this.start.distanceToSquared(this.end)
    }, distance: function () {
        return this.start.distanceTo(this.end)
    }, at: function (a, b) {
        var c = b || new THREE.Vector3;
        return this.delta(c).multiplyScalar(a).add(this.start)
    }, closestPointToPointParameter: function () {
        var a = new THREE.Vector3, b = new THREE.Vector3;
        return function (c, d) {
            a.subVectors(c, this.start), b.subVectors(this.end, this.start);
            var e = b.dot(b), f = b.dot(a), g = f / e;
            return d && (g = THREE.Math.clamp(g, 0, 1)), g
        }
    }(), closestPointToPoint: function (a, b, c) {
        var d = this.closestPointToPointParameter(a, b), e = c || new THREE.Vector3;
        return this.delta(e).multiplyScalar(d).add(this.start)
    }, applyMatrix4: function (a) {
        return this.start.applyMatrix4(a), this.end.applyMatrix4(a), this
    }, equals: function (a) {
        return a.start.equals(this.start) && a.end.equals(this.end)
    }, clone: function () {
        return (new THREE.Line3).copy(this)
    }
},THREE.Box2 = function (a, b) {
    this.min = void 0 !== a ? a : new THREE.Vector2(1 / 0, 1 / 0), this.max = void 0 !== b ? b : new THREE.Vector2(-1 / 0, -1 / 0)
},THREE.Box2.prototype = {
    constructor: THREE.Box2, set: function (a, b) {
        return this.min.copy(a), this.max.copy(b), this
    }, setFromPoints: function (a) {
        this.makeEmpty();
        for (var b = 0, c = a.length; c > b; b++)this.expandByPoint(a[b]);
        return this
    }, setFromCenterAndSize: function () {
        var a = new THREE.Vector2;
        return function (b, c) {
            var d = a.copy(c).multiplyScalar(.5);
            return this.min.copy(b).sub(d), this.max.copy(b).add(d), this
        }
    }(), copy: function (a) {
        return this.min.copy(a.min), this.max.copy(a.max), this
    }, makeEmpty: function () {
        return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
    }, empty: function () {
        return this.max.x < this.min.x || this.max.y < this.min.y
    }, center: function (a) {
        var b = a || new THREE.Vector2;
        return b.addVectors(this.min, this.max).multiplyScalar(.5)
    }, size: function (a) {
        var b = a || new THREE.Vector2;
        return b.subVectors(this.max, this.min)
    }, expandByPoint: function (a) {
        return this.min.min(a), this.max.max(a), this
    }, expandByVector: function (a) {
        return this.min.sub(a), this.max.add(a), this
    }, expandByScalar: function (a) {
        return this.min.addScalar(-a), this.max.addScalar(a), this
    }, containsPoint: function (a) {
        return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y ? !1 : !0
    }, containsBox: function (a) {
        return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y ? !0 : !1
    }, getParameter: function (a, b) {
        var c = b || new THREE.Vector2;
        return c.set((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y))
    }, isIntersectionBox: function (a) {
        return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y ? !1 : !0
    }, clampPoint: function (a, b) {
        var c = b || new THREE.Vector2;
        return c.copy(a).clamp(this.min, this.max)
    }, distanceToPoint: function () {
        var a = new THREE.Vector2;
        return function (b) {
            var c = a.copy(b).clamp(this.min, this.max);
            return c.sub(b).length()
        }
    }(), intersect: function (a) {
        return this.min.max(a.min), this.max.min(a.max), this
    }, union: function (a) {
        return this.min.min(a.min), this.max.max(a.max), this
    }, translate: function (a) {
        return this.min.add(a), this.max.add(a), this
    }, equals: function (a) {
        return a.min.equals(this.min) && a.max.equals(this.max)
    }, clone: function () {
        return (new THREE.Box2).copy(this)
    }
},THREE.Box3 = function (a, b) {
    this.min = void 0 !== a ? a : new THREE.Vector3(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== b ? b : new THREE.Vector3(-1 / 0, -1 / 0, -1 / 0)
},THREE.Box3.prototype = {
    constructor: THREE.Box3, set: function (a, b) {
        return this.min.copy(a), this.max.copy(b), this
    }, setFromPoints: function (a) {
        this.makeEmpty();
        for (var b = 0, c = a.length; c > b; b++)this.expandByPoint(a[b]);
        return this
    }, setFromCenterAndSize: function () {
        var a = new THREE.Vector3;
        return function (b, c) {
            var d = a.copy(c).multiplyScalar(.5);
            return this.min.copy(b).sub(d), this.max.copy(b).add(d), this
        }
    }(), setFromObject: function () {
        var a = new THREE.Vector3;
        return function (b) {
            var c = this;
            return b.updateMatrixWorld(!0), this.makeEmpty(), b.traverse(function (b) {
                var d = b.geometry;
                if (void 0 !== d)if (d instanceof THREE.Geometry)for (var e = d.vertices, f = 0, g = e.length; g > f; f++)a.copy(e[f]), a.applyMatrix4(b.matrixWorld), c.expandByPoint(a); else if (d instanceof THREE.BufferGeometry && void 0 !== d.attributes.position)for (var h = d.attributes.position.array, f = 0, g = h.length; g > f; f += 3)a.set(h[f], h[f + 1], h[f + 2]), a.applyMatrix4(b.matrixWorld), c.expandByPoint(a)
            }), this
        }
    }(), copy: function (a) {
        return this.min.copy(a.min), this.max.copy(a.max), this
    }, makeEmpty: function () {
        return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
    }, empty: function () {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    }, center: function (a) {
        var b = a || new THREE.Vector3;
        return b.addVectors(this.min, this.max).multiplyScalar(.5)
    }, size: function (a) {
        var b = a || new THREE.Vector3;
        return b.subVectors(this.max, this.min)
    }, expandByPoint: function (a) {
        return this.min.min(a), this.max.max(a), this
    }, expandByVector: function (a) {
        return this.min.sub(a), this.max.add(a), this
    }, expandByScalar: function (a) {
        return this.min.addScalar(-a), this.max.addScalar(a), this
    }, containsPoint: function (a) {
        return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y || a.z < this.min.z || a.z > this.max.z ? !1 : !0
    }, containsBox: function (a) {
        return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y && this.min.z <= a.min.z && a.max.z <= this.max.z ? !0 : !1
    }, getParameter: function (a, b) {
        var c = b || new THREE.Vector3;
        return c.set((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y), (a.z - this.min.z) / (this.max.z - this.min.z))
    }, isIntersectionBox: function (a) {
        return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y || a.max.z < this.min.z || a.min.z > this.max.z ? !1 : !0
    }, clampPoint: function (a, b) {
        var c = b || new THREE.Vector3;
        return c.copy(a).clamp(this.min, this.max)
    }, distanceToPoint: function () {
        var a = new THREE.Vector3;
        return function (b) {
            var c = a.copy(b).clamp(this.min, this.max);
            return c.sub(b).length()
        }
    }(), getBoundingSphere: function () {
        var a = new THREE.Vector3;
        return function (b) {
            var c = b || new THREE.Sphere;
            return c.center = this.center(), c.radius = .5 * this.size(a).length(), c
        }
    }(), intersect: function (a) {
        return this.min.max(a.min), this.max.min(a.max), this
    }, union: function (a) {
        return this.min.min(a.min), this.max.max(a.max), this
    }, applyMatrix4: function () {
        var a = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
        return function (b) {
            return a[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(b), a[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(b), a[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(b), a[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(b), a[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(b), a[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(b), a[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(b), a[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(b), this.makeEmpty(), this.setFromPoints(a), this
        }
    }(), translate: function (a) {
        return this.min.add(a), this.max.add(a), this
    }, equals: function (a) {
        return a.min.equals(this.min) && a.max.equals(this.max)
    }, clone: function () {
        return (new THREE.Box3).copy(this)
    }
},THREE.Matrix3 = function () {
    this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]), arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
},THREE.Matrix3.prototype = {
    constructor: THREE.Matrix3, set: function (a, b, c, d, e, f, g, h, i) {
        var j = this.elements;
        return j[0] = a, j[3] = b, j[6] = c, j[1] = d, j[4] = e, j[7] = f, j[2] = g, j[5] = h, j[8] = i, this
    }, identity: function () {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
    }, copy: function (a) {
        var b = a.elements;
        return this.set(b[0], b[3], b[6], b[1], b[4], b[7], b[2], b[5], b[8]), this
    }, multiplyVector3: function (a) {
        return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), a.applyMatrix3(this)
    }, multiplyVector3Array: function (a) {
        return console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(a)
    }, applyToVector3Array: function () {
        var a = new THREE.Vector3;
        return function (b, c, d) {
            void 0 === c && (c = 0), void 0 === d && (d = b.length);
            for (var e = 0, f = c; d > e; e += 3, f += 3)a.x = b[f], a.y = b[f + 1], a.z = b[f + 2], a.applyMatrix3(this), b[f] = a.x, b[f + 1] = a.y, b[f + 2] = a.z;
            return b
        }
    }(), multiplyScalar: function (a) {
        var b = this.elements;
        return b[0] *= a, b[3] *= a, b[6] *= a, b[1] *= a, b[4] *= a, b[7] *= a, b[2] *= a, b[5] *= a, b[8] *= a, this
    }, determinant: function () {
        var a = this.elements, b = a[0], c = a[1], d = a[2], e = a[3], f = a[4], g = a[5], h = a[6], i = a[7], j = a[8];
        return b * f * j - b * g * i - c * e * j + c * g * h + d * e * i - d * f * h
    }, getInverse: function (a, b) {
        var c = a.elements, d = this.elements;
        d[0] = c[10] * c[5] - c[6] * c[9], d[1] = -c[10] * c[1] + c[2] * c[9], d[2] = c[6] * c[1] - c[2] * c[5], d[3] = -c[10] * c[4] + c[6] * c[8], d[4] = c[10] * c[0] - c[2] * c[8], d[5] = -c[6] * c[0] + c[2] * c[4], d[6] = c[9] * c[4] - c[5] * c[8], d[7] = -c[9] * c[0] + c[1] * c[8], d[8] = c[5] * c[0] - c[1] * c[4];
        var e = c[0] * d[0] + c[1] * d[3] + c[2] * d[6];
        if (0 === e) {
            var f = "Matrix3.getInverse(): can't invert matrix, determinant is 0";
            if (b)throw new Error(f);
            return console.warn(f), this.identity(), this
        }
        return this.multiplyScalar(1 / e), this
    }, transpose: function () {
        var a, b = this.elements;
        return a = b[1], b[1] = b[3], b[3] = a, a = b[2], b[2] = b[6], b[6] = a, a = b[5], b[5] = b[7], b[7] = a, this
    }, flattenToArrayOffset: function (a, b) {
        var c = this.elements;
        return a[b] = c[0], a[b + 1] = c[1], a[b + 2] = c[2], a[b + 3] = c[3], a[b + 4] = c[4], a[b + 5] = c[5], a[b + 6] = c[6], a[b + 7] = c[7], a[b + 8] = c[8], a
    }, getNormalMatrix: function (a) {
        return this.getInverse(a).transpose(), this
    }, transposeIntoArray: function (a) {
        var b = this.elements;
        return a[0] = b[0], a[1] = b[3], a[2] = b[6], a[3] = b[1], a[4] = b[4], a[5] = b[7], a[6] = b[2], a[7] = b[5], a[8] = b[8], this
    }, fromArray: function (a) {
        return this.elements.set(a), this
    }, toArray: function () {
        var a = this.elements;
        return [a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]]
    }, clone: function () {
        return (new THREE.Matrix3).fromArray(this.elements)
    }
},THREE.Matrix4 = function () {
    this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
},THREE.Matrix4.prototype = {
    constructor: THREE.Matrix4,
    set: function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
        var q = this.elements;
        return q[0] = a, q[4] = b, q[8] = c, q[12] = d, q[1] = e, q[5] = f, q[9] = g, q[13] = h, q[2] = i, q[6] = j, q[10] = k, q[14] = l, q[3] = m, q[7] = n, q[11] = o, q[15] = p, this
    },
    identity: function () {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    },
    copy: function (a) {
        return this.elements.set(a.elements), this
    },
    extractPosition: function (a) {
        return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(a)
    },
    copyPosition: function (a) {
        var b = this.elements, c = a.elements;
        return b[12] = c[12], b[13] = c[13], b[14] = c[14], this
    },
    extractRotation: function () {
        var a = new THREE.Vector3;
        return function (b) {
            var c = this.elements, d = b.elements, e = 1 / a.set(d[0], d[1], d[2]).length(), f = 1 / a.set(d[4], d[5], d[6]).length(), g = 1 / a.set(d[8], d[9], d[10]).length();
            return c[0] = d[0] * e, c[1] = d[1] * e, c[2] = d[2] * e, c[4] = d[4] * f, c[5] = d[5] * f, c[6] = d[6] * f, c[8] = d[8] * g, c[9] = d[9] * g, c[10] = d[10] * g, this
        }
    }(),
    makeRotationFromEuler: function (a) {
        a instanceof THREE.Euler == !1 && console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        var b = this.elements, c = a.x, d = a.y, e = a.z, f = Math.cos(c), g = Math.sin(c), h = Math.cos(d), i = Math.sin(d), j = Math.cos(e), k = Math.sin(e);
        if ("XYZ" === a.order) {
            var l = f * j, m = f * k, n = g * j, o = g * k;
            b[0] = h * j, b[4] = -h * k, b[8] = i, b[1] = m + n * i, b[5] = l - o * i, b[9] = -g * h, b[2] = o - l * i, b[6] = n + m * i, b[10] = f * h
        } else if ("YXZ" === a.order) {
            var p = h * j, q = h * k, r = i * j, s = i * k;
            b[0] = p + s * g, b[4] = r * g - q, b[8] = f * i, b[1] = f * k, b[5] = f * j, b[9] = -g, b[2] = q * g - r, b[6] = s + p * g, b[10] = f * h
        } else if ("ZXY" === a.order) {
            var p = h * j, q = h * k, r = i * j, s = i * k;
            b[0] = p - s * g, b[4] = -f * k, b[8] = r + q * g, b[1] = q + r * g, b[5] = f * j, b[9] = s - p * g, b[2] = -f * i, b[6] = g, b[10] = f * h
        } else if ("ZYX" === a.order) {
            var l = f * j, m = f * k, n = g * j, o = g * k;
            b[0] = h * j, b[4] = n * i - m, b[8] = l * i + o, b[1] = h * k, b[5] = o * i + l, b[9] = m * i - n, b[2] = -i, b[6] = g * h, b[10] = f * h
        } else if ("YZX" === a.order) {
            var t = f * h, u = f * i, v = g * h, w = g * i;
            b[0] = h * j, b[4] = w - t * k, b[8] = v * k + u, b[1] = k, b[5] = f * j, b[9] = -g * j, b[2] = -i * j, b[6] = u * k + v, b[10] = t - w * k
        } else if ("XZY" === a.order) {
            var t = f * h, u = f * i, v = g * h, w = g * i;
            b[0] = h * j, b[4] = -k, b[8] = i * j, b[1] = t * k + w, b[5] = f * j, b[9] = u * k - v, b[2] = v * k - u, b[6] = g * j, b[10] = w * k + t
        }
        return b[3] = 0, b[7] = 0, b[11] = 0, b[12] = 0, b[13] = 0, b[14] = 0, b[15] = 1, this
    },
    setRotationFromQuaternion: function (a) {
        return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(a)
    },
    makeRotationFromQuaternion: function (a) {
        var b = this.elements, c = a.x, d = a.y, e = a.z, f = a.w, g = c + c, h = d + d, i = e + e, j = c * g, k = c * h, l = c * i, m = d * h, n = d * i, o = e * i, p = f * g, q = f * h, r = f * i;
        return b[0] = 1 - (m + o), b[4] = k - r, b[8] = l + q, b[1] = k + r, b[5] = 1 - (j + o), b[9] = n - p, b[2] = l - q, b[6] = n + p, b[10] = 1 - (j + m), b[3] = 0, b[7] = 0, b[11] = 0, b[12] = 0, b[13] = 0, b[14] = 0, b[15] = 1, this
    },
    lookAt: function () {
        var a = new THREE.Vector3, b = new THREE.Vector3, c = new THREE.Vector3;
        return function (d, e, f) {
            var g = this.elements;
            return c.subVectors(d, e).normalize(), 0 === c.length() && (c.z = 1), a.crossVectors(f, c).normalize(), 0 === a.length() && (c.x += 1e-4, a.crossVectors(f, c).normalize()), b.crossVectors(c, a), g[0] = a.x, g[4] = b.x, g[8] = c.x, g[1] = a.y, g[5] = b.y, g[9] = c.y, g[2] = a.z, g[6] = b.z, g[10] = c.z, this
        }
    }(),
    multiply: function (a, b) {
        return void 0 !== b ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(a, b)) : this.multiplyMatrices(this, a)
    },
    multiplyMatrices: function (a, b) {
        var c = a.elements, d = b.elements, e = this.elements, f = c[0], g = c[4], h = c[8], i = c[12], j = c[1], k = c[5], l = c[9], m = c[13], n = c[2], o = c[6], p = c[10], q = c[14], r = c[3], s = c[7], t = c[11], u = c[15], v = d[0], w = d[4], x = d[8], y = d[12], z = d[1], A = d[5], B = d[9], C = d[13], D = d[2], E = d[6], F = d[10], G = d[14], H = d[3], I = d[7], J = d[11], K = d[15];
        return e[0] = f * v + g * z + h * D + i * H, e[4] = f * w + g * A + h * E + i * I, e[8] = f * x + g * B + h * F + i * J, e[12] = f * y + g * C + h * G + i * K, e[1] = j * v + k * z + l * D + m * H, e[5] = j * w + k * A + l * E + m * I, e[9] = j * x + k * B + l * F + m * J, e[13] = j * y + k * C + l * G + m * K, e[2] = n * v + o * z + p * D + q * H, e[6] = n * w + o * A + p * E + q * I, e[10] = n * x + o * B + p * F + q * J, e[14] = n * y + o * C + p * G + q * K, e[3] = r * v + s * z + t * D + u * H, e[7] = r * w + s * A + t * E + u * I, e[11] = r * x + s * B + t * F + u * J, e[15] = r * y + s * C + t * G + u * K, this
    },
    multiplyToArray: function (a, b, c) {
        var d = this.elements;
        return this.multiplyMatrices(a, b), c[0] = d[0], c[1] = d[1], c[2] = d[2], c[3] = d[3], c[4] = d[4], c[5] = d[5], c[6] = d[6], c[7] = d[7], c[8] = d[8], c[9] = d[9], c[10] = d[10], c[11] = d[11], c[12] = d[12], c[13] = d[13], c[14] = d[14], c[15] = d[15], this
    },
    multiplyScalar: function (a) {
        var b = this.elements;
        return b[0] *= a, b[4] *= a, b[8] *= a, b[12] *= a, b[1] *= a, b[5] *= a, b[9] *= a, b[13] *= a, b[2] *= a, b[6] *= a, b[10] *= a, b[14] *= a, b[3] *= a, b[7] *= a, b[11] *= a, b[15] *= a, this
    },
    multiplyVector3: function (a) {
        return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead."), a.applyProjection(this)
    },
    multiplyVector4: function (a) {
        return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), a.applyMatrix4(this)
    },
    multiplyVector3Array: function (a) {
        return console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(a)
    },
    applyToVector3Array: function () {
        var a = new THREE.Vector3;
        return function (b, c, d) {
            void 0 === c && (c = 0), void 0 === d && (d = b.length);
            for (var e = 0, f = c; d > e; e += 3, f += 3)a.x = b[f], a.y = b[f + 1], a.z = b[f + 2], a.applyMatrix4(this), b[f] = a.x, b[f + 1] = a.y, b[f + 2] = a.z;
            return b
        }
    }(),
    rotateAxis: function (a) {
        console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), a.transformDirection(this)
    },
    crossVector: function (a) {
        return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), a.applyMatrix4(this)
    },
    determinant: function () {
        var a = this.elements, b = a[0], c = a[4], d = a[8], e = a[12], f = a[1], g = a[5], h = a[9], i = a[13], j = a[2], k = a[6], l = a[10], m = a[14], n = a[3], o = a[7], p = a[11], q = a[15];
        return n * (+e * h * k - d * i * k - e * g * l + c * i * l + d * g * m - c * h * m) + o * (+b * h * m - b * i * l + e * f * l - d * f * m + d * i * j - e * h * j) + p * (+b * i * k - b * g * m - e * f * k + c * f * m + e * g * j - c * i * j) + q * (-d * g * j - b * h * k + b * g * l + d * f * k - c * f * l + c * h * j)
    },
    transpose: function () {
        var a, b = this.elements;
        return a = b[1], b[1] = b[4], b[4] = a, a = b[2], b[2] = b[8], b[8] = a, a = b[6], b[6] = b[9], b[9] = a, a = b[3], b[3] = b[12], b[12] = a, a = b[7], b[7] = b[13], b[13] = a, a = b[11], b[11] = b[14], b[14] = a, this
    },
    flattenToArrayOffset: function (a, b) {
        var c = this.elements;
        return a[b] = c[0], a[b + 1] = c[1], a[b + 2] = c[2], a[b + 3] = c[3], a[b + 4] = c[4], a[b + 5] = c[5], a[b + 6] = c[6], a[b + 7] = c[7], a[b + 8] = c[8], a[b + 9] = c[9], a[b + 10] = c[10], a[b + 11] = c[11], a[b + 12] = c[12], a[b + 13] = c[13], a[b + 14] = c[14], a[b + 15] = c[15], a
    },
    getPosition: function () {
        var a = new THREE.Vector3;
        return function () {
            console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
            var b = this.elements;
            return a.set(b[12], b[13], b[14])
        }
    }(),
    setPosition: function (a) {
        var b = this.elements;
        return b[12] = a.x, b[13] = a.y, b[14] = a.z, this
    },
    getInverse: function (a, b) {
        var c = this.elements, d = a.elements, e = d[0], f = d[4], g = d[8], h = d[12], i = d[1], j = d[5], k = d[9], l = d[13], m = d[2], n = d[6], o = d[10], p = d[14], q = d[3], r = d[7], s = d[11], t = d[15];
        c[0] = k * p * r - l * o * r + l * n * s - j * p * s - k * n * t + j * o * t, c[4] = h * o * r - g * p * r - h * n * s + f * p * s + g * n * t - f * o * t, c[8] = g * l * r - h * k * r + h * j * s - f * l * s - g * j * t + f * k * t, c[12] = h * k * n - g * l * n - h * j * o + f * l * o + g * j * p - f * k * p, c[1] = l * o * q - k * p * q - l * m * s + i * p * s + k * m * t - i * o * t, c[5] = g * p * q - h * o * q + h * m * s - e * p * s - g * m * t + e * o * t, c[9] = h * k * q - g * l * q - h * i * s + e * l * s + g * i * t - e * k * t, c[13] = g * l * m - h * k * m + h * i * o - e * l * o - g * i * p + e * k * p, c[2] = j * p * q - l * n * q + l * m * r - i * p * r - j * m * t + i * n * t, c[6] = h * n * q - f * p * q - h * m * r + e * p * r + f * m * t - e * n * t, c[10] = f * l * q - h * j * q + h * i * r - e * l * r - f * i * t + e * j * t, c[14] = h * j * m - f * l * m - h * i * n + e * l * n + f * i * p - e * j * p, c[3] = k * n * q - j * o * q - k * m * r + i * o * r + j * m * s - i * n * s, c[7] = f * o * q - g * n * q + g * m * r - e * o * r - f * m * s + e * n * s, c[11] = g * j * q - f * k * q - g * i * r + e * k * r + f * i * s - e * j * s, c[15] = f * k * m - g * j * m + g * i * n - e * k * n - f * i * o + e * j * o;
        var u = e * c[0] + i * c[4] + m * c[8] + q * c[12];
        if (0 == u) {
            var v = "Matrix4.getInverse(): can't invert matrix, determinant is 0";
            if (b)throw new Error(v);
            return console.warn(v), this.identity(), this
        }
        return this.multiplyScalar(1 / u), this
    },
    translate: function () {
        console.warn("THREE.Matrix4: .translate() has been removed.")
    },
    rotateX: function () {
        console.warn("THREE.Matrix4: .rotateX() has been removed.")
    },
    rotateY: function () {
        console.warn("THREE.Matrix4: .rotateY() has been removed.")
    },
    rotateZ: function () {
        console.warn("THREE.Matrix4: .rotateZ() has been removed.")
    },
    rotateByAxis: function () {
        console.warn("THREE.Matrix4: .rotateByAxis() has been removed.")
    },
    scale: function (a) {
        var b = this.elements, c = a.x, d = a.y, e = a.z;
        return b[0] *= c, b[4] *= d, b[8] *= e, b[1] *= c, b[5] *= d, b[9] *= e, b[2] *= c, b[6] *= d, b[10] *= e, b[3] *= c, b[7] *= d, b[11] *= e, this
    },
    getMaxScaleOnAxis: function () {
        var a = this.elements, b = a[0] * a[0] + a[1] * a[1] + a[2] * a[2], c = a[4] * a[4] + a[5] * a[5] + a[6] * a[6], d = a[8] * a[8] + a[9] * a[9] + a[10] * a[10];
        return Math.sqrt(Math.max(b, Math.max(c, d)))
    },
    makeTranslation: function (a, b, c) {
        return this.set(1, 0, 0, a, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1), this
    },
    makeRotationX: function (a) {
        var b = Math.cos(a), c = Math.sin(a);
        return this.set(1, 0, 0, 0, 0, b, -c, 0, 0, c, b, 0, 0, 0, 0, 1), this
    },
    makeRotationY: function (a) {
        var b = Math.cos(a), c = Math.sin(a);
        return this.set(b, 0, c, 0, 0, 1, 0, 0, -c, 0, b, 0, 0, 0, 0, 1), this
    },
    makeRotationZ: function (a) {
        var b = Math.cos(a), c = Math.sin(a);
        return this.set(b, -c, 0, 0, c, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    },
    makeRotationAxis: function (a, b) {
        var c = Math.cos(b), d = Math.sin(b), e = 1 - c, f = a.x, g = a.y, h = a.z, i = e * f, j = e * g;
        return this.set(i * f + c, i * g - d * h, i * h + d * g, 0, i * g + d * h, j * g + c, j * h - d * f, 0, i * h - d * g, j * h + d * f, e * h * h + c, 0, 0, 0, 0, 1), this
    },
    makeScale: function (a, b, c) {
        return this.set(a, 0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1), this
    },
    compose: function (a, b, c) {
        return this.makeRotationFromQuaternion(b), this.scale(c), this.setPosition(a), this
    },
    decompose: function () {
        var a = new THREE.Vector3, b = new THREE.Matrix4;
        return function (c, d, e) {
            var f = this.elements, g = a.set(f[0], f[1], f[2]).length(), h = a.set(f[4], f[5], f[6]).length(), i = a.set(f[8], f[9], f[10]).length(), j = this.determinant();
            0 > j && (g = -g), c.x = f[12], c.y = f[13], c.z = f[14], b.elements.set(this.elements);
            var k = 1 / g, l = 1 / h, m = 1 / i;
            return b.elements[0] *= k, b.elements[1] *= k, b.elements[2] *= k, b.elements[4] *= l, b.elements[5] *= l, b.elements[6] *= l, b.elements[8] *= m, b.elements[9] *= m, b.elements[10] *= m, d.setFromRotationMatrix(b), e.x = g, e.y = h, e.z = i, this
        }
    }(),
    makeFrustum: function (a, b, c, d, e, f) {
        var g = this.elements, h = 2 * e / (b - a), i = 2 * e / (d - c), j = (b + a) / (b - a), k = (d + c) / (d - c), l = -(f + e) / (f - e), m = -2 * f * e / (f - e);
        return g[0] = h, g[4] = 0, g[8] = j, g[12] = 0, g[1] = 0, g[5] = i, g[9] = k, g[13] = 0, g[2] = 0, g[6] = 0, g[10] = l, g[14] = m, g[3] = 0, g[7] = 0, g[11] = -1, g[15] = 0, this
    },
    makePerspective: function (a, b, c, d) {
        var e = c * Math.tan(THREE.Math.degToRad(.5 * a)), f = -e, g = f * b, h = e * b;
        return this.makeFrustum(g, h, f, e, c, d)
    },
    makeOrthographic: function (a, b, c, d, e, f) {
        var g = this.elements, h = b - a, i = c - d, j = f - e, k = (b + a) / h, l = (c + d) / i, m = (f + e) / j;
        return g[0] = 2 / h, g[4] = 0, g[8] = 0, g[12] = -k, g[1] = 0, g[5] = 2 / i, g[9] = 0, g[13] = -l, g[2] = 0, g[6] = 0, g[10] = -2 / j, g[14] = -m, g[3] = 0, g[7] = 0, g[11] = 0, g[15] = 1, this
    },
    fromArray: function (a) {
        return this.elements.set(a), this
    },
    toArray: function () {
        var a = this.elements;
        return [a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]]
    },
    clone: function () {
        return (new THREE.Matrix4).fromArray(this.elements)
    }
},THREE.Ray = function (a, b) {
    this.origin = void 0 !== a ? a : new THREE.Vector3, this.direction = void 0 !== b ? b : new THREE.Vector3
},THREE.Ray.prototype = {
    constructor: THREE.Ray, set: function (a, b) {
        return this.origin.copy(a), this.direction.copy(b), this
    }, copy: function (a) {
        return this.origin.copy(a.origin), this.direction.copy(a.direction), this
    }, at: function (a, b) {
        var c = b || new THREE.Vector3;
        return c.copy(this.direction).multiplyScalar(a).add(this.origin)
    }, recast: function () {
        var a = new THREE.Vector3;
        return function (b) {
            return this.origin.copy(this.at(b, a)), this
        }
    }(), closestPointToPoint: function (a, b) {
        var c = b || new THREE.Vector3;
        c.subVectors(a, this.origin);
        var d = c.dot(this.direction);
        return 0 > d ? c.copy(this.origin) : c.copy(this.direction).multiplyScalar(d).add(this.origin)
    }, distanceToPoint: function () {
        var a = new THREE.Vector3;
        return function (b) {
            var c = a.subVectors(b, this.origin).dot(this.direction);
            return 0 > c ? this.origin.distanceTo(b) : (a.copy(this.direction).multiplyScalar(c).add(this.origin), a.distanceTo(b))
        }
    }(), distanceSqToSegment: function (a, b, c, d) {
        var e, f, g, h, i = a.clone().add(b).multiplyScalar(.5), j = b.clone().sub(a).normalize(), k = .5 * a.distanceTo(b), l = this.origin.clone().sub(i), m = -this.direction.dot(j), n = l.dot(this.direction), o = -l.dot(j), p = l.lengthSq(), q = Math.abs(1 - m * m);
        if (q >= 0)if (e = m * o - n, f = m * n - o, h = k * q, e >= 0)if (f >= -h)if (h >= f) {
            var r = 1 / q;
            e *= r, f *= r, g = e * (e + m * f + 2 * n) + f * (m * e + f + 2 * o) + p
        } else f = k, e = Math.max(0, -(m * f + n)), g = -e * e + f * (f + 2 * o) + p; else f = -k, e = Math.max(0, -(m * f + n)), g = -e * e + f * (f + 2 * o) + p; else-h >= f ? (e = Math.max(0, -(-m * k + n)), f = e > 0 ? -k : Math.min(Math.max(-k, -o), k), g = -e * e + f * (f + 2 * o) + p) : h >= f ? (e = 0, f = Math.min(Math.max(-k, -o), k), g = f * (f + 2 * o) + p) : (e = Math.max(0, -(m * k + n)), f = e > 0 ? k : Math.min(Math.max(-k, -o), k), g = -e * e + f * (f + 2 * o) + p); else f = m > 0 ? -k : k, e = Math.max(0, -(m * f + n)), g = -e * e + f * (f + 2 * o) + p;
        return c && c.copy(this.direction.clone().multiplyScalar(e).add(this.origin)), d && d.copy(j.clone().multiplyScalar(f).add(i)), g
    }, isIntersectionSphere: function (a) {
        return this.distanceToPoint(a.center) <= a.radius
    }, intersectSphere: function () {
        var a = new THREE.Vector3;
        return function (b, c) {
            a.subVectors(b.center, this.origin);
            var d = a.dot(this.direction), e = a.dot(a) - d * d, f = b.radius * b.radius;
            if (e > f)return null;
            var g = Math.sqrt(f - e), h = d - g, i = d + g;
            return 0 > h && 0 > i ? null : 0 > h ? this.at(i, c) : this.at(h, c)
        }
    }(), isIntersectionPlane: function (a) {
        var b = a.distanceToPoint(this.origin);
        if (0 === b)return !0;
        var c = a.normal.dot(this.direction);
        return 0 > c * b ? !0 : !1
    }, distanceToPlane: function (a) {
        var b = a.normal.dot(this.direction);
        if (0 == b)return 0 == a.distanceToPoint(this.origin) ? 0 : null;
        var c = -(this.origin.dot(a.normal) + a.constant) / b;
        return c >= 0 ? c : null
    }, intersectPlane: function (a, b) {
        var c = this.distanceToPlane(a);
        return null === c ? null : this.at(c, b)
    }, isIntersectionBox: function () {
        var a = new THREE.Vector3;
        return function (b) {
            return null !== this.intersectBox(b, a)
        }
    }(), intersectBox: function (a, b) {
        var c, d, e, f, g, h, i = 1 / this.direction.x, j = 1 / this.direction.y, k = 1 / this.direction.z, l = this.origin;
        return i >= 0 ? (c = (a.min.x - l.x) * i, d = (a.max.x - l.x) * i) : (c = (a.max.x - l.x) * i, d = (a.min.x - l.x) * i), j >= 0 ? (e = (a.min.y - l.y) * j, f = (a.max.y - l.y) * j) : (e = (a.max.y - l.y) * j, f = (a.min.y - l.y) * j), c > f || e > d ? null : ((e > c || c !== c) && (c = e), (d > f || d !== d) && (d = f), k >= 0 ? (g = (a.min.z - l.z) * k, h = (a.max.z - l.z) * k) : (g = (a.max.z - l.z) * k, h = (a.min.z - l.z) * k), c > h || g > d ? null : ((g > c || c !== c) && (c = g), (d > h || d !== d) && (d = h), 0 > d ? null : this.at(c >= 0 ? c : d, b)))
    }, intersectTriangle: function () {
        var a = new THREE.Vector3, b = new THREE.Vector3, c = new THREE.Vector3, d = new THREE.Vector3;
        return function (e, f, g, h, i) {
            b.subVectors(f, e), c.subVectors(g, e), d.crossVectors(b, c);
            var j, k = this.direction.dot(d);
            if (k > 0) {
                if (h)return null;
                j = 1
            } else {
                if (!(0 > k))return null;
                j = -1, k = -k
            }
            a.subVectors(this.origin, e);
            var l = j * this.direction.dot(c.crossVectors(a, c));
            if (0 > l)return null;
            var m = j * this.direction.dot(b.cross(a));
            if (0 > m)return null;
            if (l + m > k)return null;
            var n = -j * a.dot(d);
            return 0 > n ? null : this.at(n / k, i)
        }
    }(), applyMatrix4: function (a) {
        return this.direction.add(this.origin).applyMatrix4(a), this.origin.applyMatrix4(a), this.direction.sub(this.origin), this.direction.normalize(), this
    }, equals: function (a) {
        return a.origin.equals(this.origin) && a.direction.equals(this.direction)
    }, clone: function () {
        return (new THREE.Ray).copy(this)
    }
},THREE.Sphere = function (a, b) {
    this.center = void 0 !== a ? a : new THREE.Vector3, this.radius = void 0 !== b ? b : 0
},THREE.Sphere.prototype = {
    constructor: THREE.Sphere, set: function (a, b) {
        return this.center.copy(a), this.radius = b, this
    }, setFromPoints: function () {
        var a = new THREE.Box3;
        return function (b, c) {
            var d = this.center;
            void 0 !== c ? d.copy(c) : a.setFromPoints(b).center(d);
            for (var e = 0, f = 0, g = b.length; g > f; f++)e = Math.max(e, d.distanceToSquared(b[f]));
            return this.radius = Math.sqrt(e), this
        }
    }(), copy: function (a) {
        return this.center.copy(a.center), this.radius = a.radius, this
    }, empty: function () {
        return this.radius <= 0
    }, containsPoint: function (a) {
        return a.distanceToSquared(this.center) <= this.radius * this.radius
    }, distanceToPoint: function (a) {
        return a.distanceTo(this.center) - this.radius
    }, intersectsSphere: function (a) {
        var b = this.radius + a.radius;
        return a.center.distanceToSquared(this.center) <= b * b
    }, clampPoint: function (a, b) {
        var c = this.center.distanceToSquared(a), d = b || new THREE.Vector3;
        return d.copy(a), c > this.radius * this.radius && (d.sub(this.center).normalize(), d.multiplyScalar(this.radius).add(this.center)), d
    }, getBoundingBox: function (a) {
        var b = a || new THREE.Box3;
        return b.set(this.center, this.center), b.expandByScalar(this.radius), b
    }, applyMatrix4: function (a) {
        return this.center.applyMatrix4(a), this.radius = this.radius * a.getMaxScaleOnAxis(), this
    }, translate: function (a) {
        return this.center.add(a), this
    }, equals: function (a) {
        return a.center.equals(this.center) && a.radius === this.radius
    }, clone: function () {
        return (new THREE.Sphere).copy(this)
    }
},THREE.Frustum = function (a, b, c, d, e, f) {
    this.planes = [void 0 !== a ? a : new THREE.Plane, void 0 !== b ? b : new THREE.Plane, void 0 !== c ? c : new THREE.Plane, void 0 !== d ? d : new THREE.Plane, void 0 !== e ? e : new THREE.Plane, void 0 !== f ? f : new THREE.Plane]
},THREE.Frustum.prototype = {
    constructor: THREE.Frustum, set: function (a, b, c, d, e, f) {
        var g = this.planes;
        return g[0].copy(a), g[1].copy(b), g[2].copy(c), g[3].copy(d), g[4].copy(e), g[5].copy(f), this
    }, copy: function (a) {
        for (var b = this.planes, c = 0; 6 > c; c++)b[c].copy(a.planes[c]);
        return this
    }, setFromMatrix: function (a) {
        var b = this.planes, c = a.elements, d = c[0], e = c[1], f = c[2], g = c[3], h = c[4], i = c[5], j = c[6], k = c[7], l = c[8], m = c[9], n = c[10], o = c[11], p = c[12], q = c[13], r = c[14], s = c[15];
        return b[0].setComponents(g - d, k - h, o - l, s - p).normalize(), b[1].setComponents(g + d, k + h, o + l, s + p).normalize(), b[2].setComponents(g + e, k + i, o + m, s + q).normalize(), b[3].setComponents(g - e, k - i, o - m, s - q).normalize(), b[4].setComponents(g - f, k - j, o - n, s - r).normalize(), b[5].setComponents(g + f, k + j, o + n, s + r).normalize(), this
    }, intersectsObject: function () {
        var a = new THREE.Sphere;
        return function (b) {
            var c = b.geometry;
            return null === c.boundingSphere && c.computeBoundingSphere(), a.copy(c.boundingSphere), a.applyMatrix4(b.matrixWorld), this.intersectsSphere(a)
        }
    }(), intersectsSphere: function (a) {
        for (var b = this.planes, c = a.center, d = -a.radius, e = 0; 6 > e; e++) {
            var f = b[e].distanceToPoint(c);
            if (d > f)return !1
        }
        return !0
    }, intersectsBox: function () {
        var a = new THREE.Vector3, b = new THREE.Vector3;
        return function (c) {
            for (var d = this.planes, e = 0; 6 > e; e++) {
                var f = d[e];
                a.x = f.normal.x > 0 ? c.min.x : c.max.x, b.x = f.normal.x > 0 ? c.max.x : c.min.x, a.y = f.normal.y > 0 ? c.min.y : c.max.y, b.y = f.normal.y > 0 ? c.max.y : c.min.y, a.z = f.normal.z > 0 ? c.min.z : c.max.z, b.z = f.normal.z > 0 ? c.max.z : c.min.z;
                var g = f.distanceToPoint(a), h = f.distanceToPoint(b);
                if (0 > g && 0 > h)return !1
            }
            return !0
        }
    }(), containsPoint: function (a) {
        for (var b = this.planes, c = 0; 6 > c; c++)if (b[c].distanceToPoint(a) < 0)return !1;
        return !0
    }, clone: function () {
        return (new THREE.Frustum).copy(this)
    }
},THREE.Plane = function (a, b) {
    this.normal = void 0 !== a ? a : new THREE.Vector3(1, 0, 0), this.constant = void 0 !== b ? b : 0
},THREE.Plane.prototype = {
    constructor: THREE.Plane, set: function (a, b) {
        return this.normal.copy(a), this.constant = b, this
    }, setComponents: function (a, b, c, d) {
        return this.normal.set(a, b, c), this.constant = d, this
    }, setFromNormalAndCoplanarPoint: function (a, b) {
        return this.normal.copy(a), this.constant = -b.dot(this.normal), this
    }, setFromCoplanarPoints: function () {
        var a = new THREE.Vector3, b = new THREE.Vector3;
        return function (c, d, e) {
            var f = a.subVectors(e, d).cross(b.subVectors(c, d)).normalize();
            return this.setFromNormalAndCoplanarPoint(f, c), this
        }
    }(), copy: function (a) {
        return this.normal.copy(a.normal), this.constant = a.constant, this
    }, normalize: function () {
        var a = 1 / this.normal.length();
        return this.normal.multiplyScalar(a), this.constant *= a, this
    }, negate: function () {
        return this.constant *= -1, this.normal.negate(), this
    }, distanceToPoint: function (a) {
        return this.normal.dot(a) + this.constant
    }, distanceToSphere: function (a) {
        return this.distanceToPoint(a.center) - a.radius
    }, projectPoint: function (a, b) {
        return this.orthoPoint(a, b).sub(a).negate()
    }, orthoPoint: function (a, b) {
        var c = this.distanceToPoint(a), d = b || new THREE.Vector3;
        return d.copy(this.normal).multiplyScalar(c)
    }, isIntersectionLine: function (a) {
        var b = this.distanceToPoint(a.start), c = this.distanceToPoint(a.end);
        return 0 > b && c > 0 || 0 > c && b > 0
    }, intersectLine: function () {
        var a = new THREE.Vector3;
        return function (b, c) {
            var d = c || new THREE.Vector3, e = b.delta(a), f = this.normal.dot(e);
            if (0 == f)return 0 == this.distanceToPoint(b.start) ? d.copy(b.start) : void 0;
            var g = -(b.start.dot(this.normal) + this.constant) / f;
            return 0 > g || g > 1 ? void 0 : d.copy(e).multiplyScalar(g).add(b.start)
        }
    }(), coplanarPoint: function (a) {
        var b = a || new THREE.Vector3;
        return b.copy(this.normal).multiplyScalar(-this.constant)
    }, applyMatrix4: function () {
        var a = new THREE.Vector3, b = new THREE.Vector3, c = new THREE.Matrix3;
        return function (d, e) {
            var f = e || c.getNormalMatrix(d), g = a.copy(this.normal).applyMatrix3(f), h = this.coplanarPoint(b);
            return h.applyMatrix4(d), this.setFromNormalAndCoplanarPoint(g, h), this
        }
    }(), translate: function (a) {
        return this.constant = this.constant - a.dot(this.normal), this
    }, equals: function (a) {
        return a.normal.equals(this.normal) && a.constant == this.constant
    }, clone: function () {
        return (new THREE.Plane).copy(this)
    }
},THREE.Math = {
    generateUUID: function () {
        var a, b = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), c = new Array(36), d = 0;
        return function () {
            for (var e = 0; 36 > e; e++)8 == e || 13 == e || 18 == e || 23 == e ? c[e] = "-" : 14 == e ? c[e] = "4" : (2 >= d && (d = 33554432 + 16777216 * Math.random() | 0), a = 15 & d, d >>= 4, c[e] = b[19 == e ? 3 & a | 8 : a]);
            return c.join("")
        }
    }(), clamp: function (a, b, c) {
        return b > a ? b : a > c ? c : a
    }, clampBottom: function (a, b) {
        return b > a ? b : a
    }, mapLinear: function (a, b, c, d, e) {
        return d + (a - b) * (e - d) / (c - b)
    }, smoothstep: function (a, b, c) {
        return b >= a ? 0 : a >= c ? 1 : (a = (a - b) / (c - b), a * a * (3 - 2 * a))
    }, smootherstep: function (a, b, c) {
        return b >= a ? 0 : a >= c ? 1 : (a = (a - b) / (c - b), a * a * a * (a * (6 * a - 15) + 10))
    }, random16: function () {
        return (65280 * Math.random() + 255 * Math.random()) / 65535
    }, randInt: function (a, b) {
        return a + Math.floor(Math.random() * (b - a + 1))
    }, randFloat: function (a, b) {
        return a + Math.random() * (b - a)
    }, randFloatSpread: function (a) {
        return a * (.5 - Math.random())
    }, degToRad: function () {
        var a = Math.PI / 180;
        return function (b) {
            return b * a
        }
    }(), radToDeg: function () {
        var a = 180 / Math.PI;
        return function (b) {
            return b * a
        }
    }(), isPowerOfTwo: function (a) {
        return 0 === (a & a - 1) && 0 !== a
    }
},THREE.Spline = function (a) {
    function b(a, b, c, d, e, f, g) {
        var h = .5 * (c - a), i = .5 * (d - b);
        return (2 * (b - c) + h + i) * g + (-3 * (b - c) - 2 * h - i) * f + h * e + b
    }

    this.points = a;
    var c, d, e, f, g, h, i, j, k, l = [], m = {x: 0, y: 0, z: 0};
    this.initFromArray = function (a) {
        this.points = [];
        for (var b = 0; b < a.length; b++)this.points[b] = {x: a[b][0], y: a[b][1], z: a[b][2]}
    }, this.getPoint = function (a) {
        return c = (this.points.length - 1) * a, d = Math.floor(c), e = c - d, l[0] = 0 === d ? d : d - 1, l[1] = d, l[2] = d > this.points.length - 2 ? this.points.length - 1 : d + 1, l[3] = d > this.points.length - 3 ? this.points.length - 1 : d + 2, h = this.points[l[0]], i = this.points[l[1]], j = this.points[l[2]], k = this.points[l[3]], f = e * e, g = e * f, m.x = b(h.x, i.x, j.x, k.x, e, f, g), m.y = b(h.y, i.y, j.y, k.y, e, f, g), m.z = b(h.z, i.z, j.z, k.z, e, f, g), m
    }, this.getControlPointsArray = function () {
        var a, b, c = this.points.length, d = [];
        for (a = 0; c > a; a++)b = this.points[a], d[a] = [b.x, b.y, b.z];
        return d
    }, this.getLength = function (a) {
        var b, c, d, e, f = 0, g = 0, h = 0, i = new THREE.Vector3, j = new THREE.Vector3, k = [], l = 0;
        for (k[0] = 0, a || (a = 100), d = this.points.length * a, i.copy(this.points[0]), b = 1; d > b; b++)c = b / d, e = this.getPoint(c), j.copy(e), l += j.distanceTo(i), i.copy(e), f = (this.points.length - 1) * c, g = Math.floor(f), g != h && (k[g] = l, h = g);
        return k[k.length] = l, {chunks: k, total: l}
    }, this.reparametrizeByArcLength = function (a) {
        var b, c, d, e, f, g, h, i, j = [], k = new THREE.Vector3, l = this.getLength();
        for (j.push(k.copy(this.points[0]).clone()), b = 1; b < this.points.length; b++) {
            for (g = l.chunks[b] - l.chunks[b - 1], h = Math.ceil(a * g / l.total), e = (b - 1) / (this.points.length - 1), f = b / (this.points.length - 1), c = 1; h - 1 > c; c++)d = e + c * (1 / h) * (f - e), i = this.getPoint(d), j.push(k.copy(i).clone());
            j.push(k.copy(this.points[b]).clone())
        }
        this.points = j
    }
},THREE.Triangle = function (a, b, c) {
    this.a = void 0 !== a ? a : new THREE.Vector3, this.b = void 0 !== b ? b : new THREE.Vector3, this.c = void 0 !== c ? c : new THREE.Vector3
},THREE.Triangle.normal = function () {
    var a = new THREE.Vector3;
    return function (b, c, d, e) {
        var f = e || new THREE.Vector3;
        f.subVectors(d, c), a.subVectors(b, c), f.cross(a);
        var g = f.lengthSq();
        return g > 0 ? f.multiplyScalar(1 / Math.sqrt(g)) : f.set(0, 0, 0)
    }
}(),THREE.Triangle.barycoordFromPoint = function () {
    var a = new THREE.Vector3, b = new THREE.Vector3, c = new THREE.Vector3;
    return function (d, e, f, g, h) {
        a.subVectors(g, e), b.subVectors(f, e), c.subVectors(d, e);
        var i = a.dot(a), j = a.dot(b), k = a.dot(c), l = b.dot(b), m = b.dot(c), n = i * l - j * j, o = h || new THREE.Vector3;
        if (0 == n)return o.set(-2, -1, -1);
        var p = 1 / n, q = (l * k - j * m) * p, r = (i * m - j * k) * p;
        return o.set(1 - q - r, r, q)
    }
}(),THREE.Triangle.containsPoint = function () {
    var a = new THREE.Vector3;
    return function (b, c, d, e) {
        var f = THREE.Triangle.barycoordFromPoint(b, c, d, e, a);
        return f.x >= 0 && f.y >= 0 && f.x + f.y <= 1
    }
}(),THREE.Triangle.prototype = {
    constructor: THREE.Triangle, set: function (a, b, c) {
        return this.a.copy(a), this.b.copy(b), this.c.copy(c), this
    }, setFromPointsAndIndices: function (a, b, c, d) {
        return this.a.copy(a[b]), this.b.copy(a[c]), this.c.copy(a[d]), this
    }, copy: function (a) {
        return this.a.copy(a.a), this.b.copy(a.b), this.c.copy(a.c), this
    }, area: function () {
        var a = new THREE.Vector3, b = new THREE.Vector3;
        return function () {
            return a.subVectors(this.c, this.b), b.subVectors(this.a, this.b), .5 * a.cross(b).length()
        }
    }(), midpoint: function (a) {
        var b = a || new THREE.Vector3;
        return b.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    }, normal: function (a) {
        return THREE.Triangle.normal(this.a, this.b, this.c, a)
    }, plane: function (a) {
        var b = a || new THREE.Plane;
        return b.setFromCoplanarPoints(this.a, this.b, this.c)
    }, barycoordFromPoint: function (a, b) {
        return THREE.Triangle.barycoordFromPoint(a, this.a, this.b, this.c, b)
    }, containsPoint: function (a) {
        return THREE.Triangle.containsPoint(a, this.a, this.b, this.c)
    }, equals: function (a) {
        return a.a.equals(this.a) && a.b.equals(this.b) && a.c.equals(this.c)
    }, clone: function () {
        return (new THREE.Triangle).copy(this)
    }
},THREE.Clock = function (a) {
    this.autoStart = void 0 !== a ? a : !0, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
},THREE.Clock.prototype = {
    constructor: THREE.Clock, start: function () {
        this.startTime = void 0 !== self.performance && void 0 !== self.performance.now ? self.performance.now() : Date.now(), this.oldTime = this.startTime, this.running = !0
    }, stop: function () {
        this.getElapsedTime(), this.running = !1
    }, getElapsedTime: function () {
        return this.getDelta(), this.elapsedTime
    }, getDelta: function () {
        var a = 0;
        if (this.autoStart && !this.running && this.start(), this.running) {
            var b = void 0 !== self.performance && void 0 !== self.performance.now ? self.performance.now() : Date.now();
            a = .001 * (b - this.oldTime), this.oldTime = b, this.elapsedTime += a
        }
        return a
    }
},THREE.EventDispatcher = function () {
},THREE.EventDispatcher.prototype = {
    constructor: THREE.EventDispatcher, apply: function (a) {
        a.addEventListener = THREE.EventDispatcher.prototype.addEventListener, a.hasEventListener = THREE.EventDispatcher.prototype.hasEventListener, a.removeEventListener = THREE.EventDispatcher.prototype.removeEventListener, a.dispatchEvent = THREE.EventDispatcher.prototype.dispatchEvent
    }, addEventListener: function (a, b) {
        void 0 === this._listeners && (this._listeners = {});
        var c = this._listeners;
        void 0 === c[a] && (c[a] = []), -1 === c[a].indexOf(b) && c[a].push(b)
    }, hasEventListener: function (a, b) {
        if (void 0 === this._listeners)return !1;
        var c = this._listeners;
        return void 0 !== c[a] && -1 !== c[a].indexOf(b) ? !0 : !1
    }, removeEventListener: function (a, b) {
        if (void 0 !== this._listeners) {
            var c = this._listeners, d = c[a];
            if (void 0 !== d) {
                var e = d.indexOf(b);
                -1 !== e && d.splice(e, 1)
            }
        }
    }, dispatchEvent: function (a) {
        if (void 0 !== this._listeners) {
            var b = this._listeners, c = b[a.type];
            if (void 0 !== c) {
                a.target = this;
                for (var d = [], e = c.length, f = 0; e > f; f++)d[f] = c[f];
                for (var f = 0; e > f; f++)d[f].call(this, a)
            }
        }
    }
},function (a) {
    a.Raycaster = function (b, c, d, e) {
        this.ray = new a.Ray(b, c), this.near = d || 0, this.far = e || 1 / 0, this.params = {
            Sprite: {},
            Mesh: {},
            PointCloud: {threshold: 1},
            LOD: {},
            Line: {}
        }
    };
    var b = function (a, b) {
        return a.distance - b.distance
    }, c = function (a, b, d, e) {
        if (a.raycast(b, d), e === !0)for (var f = a.children, g = 0, h = f.length; h > g; g++)c(f[g], b, d, !0)
    };
    a.Raycaster.prototype = {
        constructor: a.Raycaster, precision: 1e-4, linePrecision: 1, set: function (a, b) {
            this.ray.set(a, b)
        }, intersectObject: function (a, d) {
            var e = [];
            return c(a, this, e, d), e.sort(b), e
        }, intersectObjects: function (a, d) {
            var e = [];
            if (a instanceof Array == !1)return console.log("THREE.Raycaster.intersectObjects: objects is not an Array."), e;
            for (var f = 0, g = a.length; g > f; f++)c(a[f], this, e, d);
            return e.sort(b), e
        }
    }
}(THREE),THREE.Object3D = function () {
    Object.defineProperty(this, "id", {value: THREE.Object3DIdCount++}), this.uuid = THREE.Math.generateUUID(), this.name = "", this.type = "Object3D", this.parent = void 0, this.children = [], this.up = THREE.Object3D.DefaultUp.clone();
    var a = new THREE.Vector3, b = new THREE.Euler, c = new THREE.Quaternion, d = new THREE.Vector3(1, 1, 1), e = function () {
        c.setFromEuler(b, !1)
    }, f = function () {
        b.setFromQuaternion(c, void 0, !1)
    };
    b.onChange(e), c.onChange(f), Object.defineProperties(this, {
        position: {enumerable: !0, value: a},
        rotation: {enumerable: !0, value: b},
        quaternion: {enumerable: !0, value: c},
        scale: {enumerable: !0, value: d}
    }), this.renderDepth = null, this.rotationAutoUpdate = !0, this.matrix = new THREE.Matrix4, this.matrixWorld = new THREE.Matrix4, this.matrixAutoUpdate = !0, this.matrixWorldNeedsUpdate = !1, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.userData = {}
},THREE.Object3D.DefaultUp = new THREE.Vector3(0, 1, 0),THREE.Object3D.prototype = {
    constructor: THREE.Object3D,
    get eulerOrder() {
        return console.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order."), this.rotation.order
    },
    set eulerOrder(a) {
        console.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order."), this.rotation.order = a
    },
    get useQuaternion() {
        console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
    },
    set useQuaternion(a) {
        console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
    },
    applyMatrix: function (a) {
        this.matrix.multiplyMatrices(a, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
    },
    setRotationFromAxisAngle: function (a, b) {
        this.quaternion.setFromAxisAngle(a, b)
    },
    setRotationFromEuler: function (a) {
        this.quaternion.setFromEuler(a, !0)
    },
    setRotationFromMatrix: function (a) {
        this.quaternion.setFromRotationMatrix(a)
    },
    setRotationFromQuaternion: function (a) {
        this.quaternion.copy(a)
    },
    rotateOnAxis: function () {
        var a = new THREE.Quaternion;
        return function (b, c) {
            return a.setFromAxisAngle(b, c), this.quaternion.multiply(a), this
        }
    }(),
    rotateX: function () {
        var a = new THREE.Vector3(1, 0, 0);
        return function (b) {
            return this.rotateOnAxis(a, b)
        }
    }(),
    rotateY: function () {
        var a = new THREE.Vector3(0, 1, 0);
        return function (b) {
            return this.rotateOnAxis(a, b)
        }
    }(),
    rotateZ: function () {
        var a = new THREE.Vector3(0, 0, 1);
        return function (b) {
            return this.rotateOnAxis(a, b)
        }
    }(),
    translateOnAxis: function () {
        var a = new THREE.Vector3;
        return function (b, c) {
            return a.copy(b).applyQuaternion(this.quaternion), this.position.add(a.multiplyScalar(c)), this
        }
    }(),
    translate: function (a, b) {
        return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(b, a)
    },
    translateX: function () {
        var a = new THREE.Vector3(1, 0, 0);
        return function (b) {
            return this.translateOnAxis(a, b)
        }
    }(),
    translateY: function () {
        var a = new THREE.Vector3(0, 1, 0);
        return function (b) {
            return this.translateOnAxis(a, b)
        }
    }(),
    translateZ: function () {
        var a = new THREE.Vector3(0, 0, 1);
        return function (b) {
            return this.translateOnAxis(a, b)
        }
    }(),
    localToWorld: function (a) {
        return a.applyMatrix4(this.matrixWorld)
    },
    worldToLocal: function () {
        var a = new THREE.Matrix4;
        return function (b) {
            return b.applyMatrix4(a.getInverse(this.matrixWorld))
        }
    }(),
    lookAt: function () {
        var a = new THREE.Matrix4;
        return function (b) {
            a.lookAt(b, this.position, this.up), this.quaternion.setFromRotationMatrix(a)
        }
    }(),
    add: function (a) {
        if (arguments.length > 1) {
            for (var b = 0; b < arguments.length; b++)this.add(arguments[b]);
            return this
        }
        return a === this ? (console.error("THREE.Object3D.add:", a, "can't be added as a child of itself."), this) : (a instanceof THREE.Object3D ? (void 0 !== a.parent && a.parent.remove(a), a.parent = this, a.dispatchEvent({type: "added"}), this.children.push(a)) : console.error("THREE.Object3D.add:", a, "is not an instance of THREE.Object3D."), this)
    },
    remove: function (a) {
        if (arguments.length > 1)for (var b = 0; b < arguments.length; b++)this.remove(arguments[b]);
        var c = this.children.indexOf(a);
        -1 !== c && (a.parent = void 0, a.dispatchEvent({type: "removed"}), this.children.splice(c, 1))
    },
    getChildByName: function (a, b) {
        return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(a, b)
    },
    getObjectById: function (a, b) {
        if (this.id === a)return this;
        for (var c = 0, d = this.children.length; d > c; c++) {
            var e = this.children[c], f = e.getObjectById(a, b);
            if (void 0 !== f)return f
        }
        return void 0
    },
    getObjectByName: function (a, b) {
        if (this.name === a)return this;
        for (var c = 0, d = this.children.length; d > c; c++) {
            var e = this.children[c], f = e.getObjectByName(a, b);
            if (void 0 !== f)return f
        }
        return void 0
    },
    getWorldPosition: function (a) {
        var b = a || new THREE.Vector3;
        return this.updateMatrixWorld(!0), b.setFromMatrixPosition(this.matrixWorld)
    },
    getWorldQuaternion: function () {
        var a = new THREE.Vector3, b = new THREE.Vector3;
        return function (c) {
            var d = c || new THREE.Quaternion;
            return this.updateMatrixWorld(!0), this.matrixWorld.decompose(a, d, b), d
        }
    }(),
    getWorldRotation: function () {
        var a = new THREE.Quaternion;
        return function (b) {
            var c = b || new THREE.Euler;
            return this.getWorldQuaternion(a), c.setFromQuaternion(a, this.rotation.order, !1)
        }
    }(),
    getWorldScale: function () {
        var a = new THREE.Vector3, b = new THREE.Quaternion;
        return function (c) {
            var d = c || new THREE.Vector3;
            return this.updateMatrixWorld(!0), this.matrixWorld.decompose(a, b, d), d
        }
    }(),
    getWorldDirection: function () {
        var a = new THREE.Quaternion;
        return function (b) {
            var c = b || new THREE.Vector3;
            return this.getWorldQuaternion(a), c.set(0, 0, 1).applyQuaternion(a)
        }
    }(),
    raycast: function () {
    },
    traverse: function (a) {
        a(this);
        for (var b = 0, c = this.children.length; c > b; b++)this.children[b].traverse(a)
    },
    traverseVisible: function (a) {
        if (this.visible !== !1) {
            a(this);
            for (var b = 0, c = this.children.length; c > b; b++)this.children[b].traverseVisible(a)
        }
    },
    updateMatrix: function () {
        this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
    },
    updateMatrixWorld: function (a) {
        this.matrixAutoUpdate === !0 && this.updateMatrix(), (this.matrixWorldNeedsUpdate === !0 || a === !0) && (void 0 === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, a = !0);
        for (var b = 0, c = this.children.length; c > b; b++)this.children[b].updateMatrixWorld(a)
    },
    toJSON: function () {
        var a = {metadata: {version: 4.3, type: "Object", generator: "ObjectExporter"}}, b = {}, c = function (c) {
            if (void 0 === a.geometries && (a.geometries = []), void 0 === b[c.uuid]) {
                var d = c.toJSON();
                delete d.metadata, b[c.uuid] = d, a.geometries.push(d)
            }
            return c.uuid
        }, d = {}, e = function (b) {
            if (void 0 === a.materials && (a.materials = []), void 0 === d[b.uuid]) {
                var c = b.toJSON();
                delete c.metadata, d[b.uuid] = c, a.materials.push(c)
            }
            return b.uuid
        }, f = function (a) {
            var b = {};
            if (b.uuid = a.uuid, b.type = a.type, "" !== a.name && (b.name = a.name), "{}" !== JSON.stringify(a.userData) && (b.userData = a.userData), a.visible !== !0 && (b.visible = a.visible), a instanceof THREE.PerspectiveCamera ? (b.fov = a.fov, b.aspect = a.aspect, b.near = a.near, b.far = a.far) : a instanceof THREE.OrthographicCamera ? (b.left = a.left, b.right = a.right, b.top = a.top, b.bottom = a.bottom, b.near = a.near, b.far = a.far) : a instanceof THREE.AmbientLight ? b.color = a.color.getHex() : a instanceof THREE.DirectionalLight ? (b.color = a.color.getHex(), b.intensity = a.intensity) : a instanceof THREE.PointLight ? (b.color = a.color.getHex(), b.intensity = a.intensity, b.distance = a.distance) : a instanceof THREE.SpotLight ? (b.color = a.color.getHex(), b.intensity = a.intensity, b.distance = a.distance, b.angle = a.angle, b.exponent = a.exponent) : a instanceof THREE.HemisphereLight ? (b.color = a.color.getHex(), b.groundColor = a.groundColor.getHex()) : a instanceof THREE.Mesh ? (b.geometry = c(a.geometry), b.material = e(a.material)) : a instanceof THREE.Line ? (b.geometry = c(a.geometry), b.material = e(a.material)) : a instanceof THREE.Sprite && (b.material = e(a.material)), b.matrix = a.matrix.toArray(), a.children.length > 0) {
                b.children = [];
                for (var d = 0; d < a.children.length; d++)b.children.push(f(a.children[d]))
            }
            return b
        };
        return a.object = f(this), a
    },
    clone: function (a, b) {
        if (void 0 === a && (a = new THREE.Object3D), void 0 === b && (b = !0), a.name = this.name, a.up.copy(this.up), a.position.copy(this.position), a.quaternion.copy(this.quaternion), a.scale.copy(this.scale), a.renderDepth = this.renderDepth, a.rotationAutoUpdate = this.rotationAutoUpdate, a.matrix.copy(this.matrix), a.matrixWorld.copy(this.matrixWorld), a.matrixAutoUpdate = this.matrixAutoUpdate, a.matrixWorldNeedsUpdate = this.matrixWorldNeedsUpdate, a.visible = this.visible, a.castShadow = this.castShadow, a.receiveShadow = this.receiveShadow, a.frustumCulled = this.frustumCulled, a.userData = JSON.parse(JSON.stringify(this.userData)), b === !0)for (var c = 0; c < this.children.length; c++) {
            var d = this.children[c];
            a.add(d.clone())
        }
        return a
    }
},THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype),THREE.Object3DIdCount = 0,THREE.Projector = function () {
    console.warn("THREE.Projector has been moved to /examples/renderers/Projector.js."), this.projectVector = function (a, b) {
        console.warn("THREE.Projector: .projectVector() is now vector.project()."), a.project(b)
    }, this.unprojectVector = function (a, b) {
        console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."), a.unproject(b)
    }, this.pickingRay = function () {
        console.error("THREE.Projector: .pickingRay() has been removed.")
    }
},THREE.Face3 = function (a, b, c, d, e, f) {
    this.a = a, this.b = b, this.c = c, this.normal = d instanceof THREE.Vector3 ? d : new THREE.Vector3, this.vertexNormals = d instanceof Array ? d : [], this.color = e instanceof THREE.Color ? e : new THREE.Color, this.vertexColors = e instanceof Array ? e : [], this.vertexTangents = [], this.materialIndex = void 0 !== f ? f : 0
},THREE.Face3.prototype = {
    constructor: THREE.Face3, clone: function () {
        var a = new THREE.Face3(this.a, this.b, this.c);
        a.normal.copy(this.normal), a.color.copy(this.color), a.materialIndex = this.materialIndex;
        for (var b = 0, c = this.vertexNormals.length; c > b; b++)a.vertexNormals[b] = this.vertexNormals[b].clone();
        for (var b = 0, c = this.vertexColors.length; c > b; b++)a.vertexColors[b] = this.vertexColors[b].clone();
        for (var b = 0, c = this.vertexTangents.length; c > b; b++)a.vertexTangents[b] = this.vertexTangents[b].clone();
        return a
    }
},THREE.Face4 = function (a, b, c, d, e, f, g) {
    return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."), new THREE.Face3(a, b, c, e, f, g)
},THREE.BufferAttribute = function (a, b) {
    this.array = a, this.itemSize = b, this.needsUpdate = !1
},THREE.BufferAttribute.prototype = {
    constructor: THREE.BufferAttribute, get length() {
        return this.array.length
    }, copyAt: function (a, b, c) {
        a *= this.itemSize, c *= b.itemSize;
        for (var d = 0, e = this.itemSize; e > d; d++)this.array[a + d] = b.array[c + d]
    }, set: function (a) {
        return this.array.set(a), this
    }, setX: function (a, b) {
        return this.array[a * this.itemSize] = b, this
    }, setY: function (a, b) {
        return this.array[a * this.itemSize + 1] = b, this
    }, setZ: function (a, b) {
        return this.array[a * this.itemSize + 2] = b, this
    }, setXY: function (a, b, c) {
        return a *= this.itemSize, this.array[a] = b, this.array[a + 1] = c, this
    }, setXYZ: function (a, b, c, d) {
        return a *= this.itemSize, this.array[a] = b, this.array[a + 1] = c, this.array[a + 2] = d, this
    }, setXYZW: function (a, b, c, d, e) {
        return a *= this.itemSize, this.array[a] = b, this.array[a + 1] = c, this.array[a + 2] = d, this.array[a + 3] = e, this
    }, clone: function () {
        return new THREE.BufferAttribute(new this.array.constructor(this.array), this.itemSize)
    }
},THREE.Int8Attribute = function (a, b) {
    return console.warn("THREE.Int8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new THREE.BufferAttribute(a, b)
},THREE.Uint8Attribute = function (a, b) {
    return console.warn("THREE.Uint8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new THREE.BufferAttribute(a, b)
},THREE.Uint8ClampedAttribute = function (a, b) {
    return console.warn("THREE.Uint8ClampedAttribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new THREE.BufferAttribute(a, b)
},THREE.Int16Attribute = function (a, b) {
    return console.warn("THREE.Int16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new THREE.BufferAttribute(a, b)
},THREE.Uint16Attribute = function (a, b) {
    return console.warn("THREE.Uint16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new THREE.BufferAttribute(a, b)
},THREE.Int32Attribute = function (a, b) {
    return console.warn("THREE.Int32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new THREE.BufferAttribute(a, b)
},THREE.Uint32Attribute = function (a, b) {
    return console.warn("THREE.Uint32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new THREE.BufferAttribute(a, b)
},THREE.Float32Attribute = function (a, b) {
    return console.warn("THREE.Float32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new THREE.BufferAttribute(a, b)
},THREE.Float64Attribute = function (a, b) {
    return console.warn("THREE.Float64Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new THREE.BufferAttribute(a, b)
},THREE.BufferGeometry = function () {
    Object.defineProperty(this, "id", {value: THREE.GeometryIdCount++}), this.uuid = THREE.Math.generateUUID(), this.name = "", this.type = "BufferGeometry", this.attributes = {}, this.attributesKeys = [], this.drawcalls = [], this.offsets = this.drawcalls, this.boundingBox = null, this.boundingSphere = null, this.interleaved = !1
},THREE.BufferGeometry.prototype = {
    constructor: THREE.BufferGeometry, addAttribute: function (a, b) {
        return b instanceof THREE.BufferAttribute == !1 ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), void(this.attributes[a] = {
            array: arguments[1],
            itemSize: arguments[2]
        })) : (this.attributes[a] = b, void(this.attributesKeys = Object.keys(this.attributes)))
    }, getAttribute: function (a) {
        return this.attributes[a]
    }, addDrawCall: function (a, b, c) {
        this.drawcalls.push({start: a, count: b, index: void 0 !== c ? c : 0})
    }, applyMatrix: function (a) {
        var b = this.attributes.position;
        void 0 !== b && (a.applyToVector3Array(b.array), b.needsUpdate = !0);
        var c = this.attributes.normal;
        if (void 0 !== c) {
            var d = (new THREE.Matrix3).getNormalMatrix(a);
            d.applyToVector3Array(c.array), c.needsUpdate = !0
        }
    }, center: function () {
    }, fromGeometry: function (a, b) {
        b = b || {vertexColors: THREE.NoColors};
        var c = a.vertices, d = a.faces, e = a.faceVertexUvs, f = b.vertexColors, g = e[0].length > 0, h = 3 == d[0].vertexNormals.length, i = new Float32Array(3 * d.length * 3);
        this.addAttribute("position", new THREE.BufferAttribute(i, 3));
        var j = new Float32Array(3 * d.length * 3);
        if (this.addAttribute("normal", new THREE.BufferAttribute(j, 3)), f !== THREE.NoColors) {
            var k = new Float32Array(3 * d.length * 3);
            this.addAttribute("color", new THREE.BufferAttribute(k, 3))
        }
        if (g === !0) {
            var l = new Float32Array(3 * d.length * 2);
            this.addAttribute("uv", new THREE.BufferAttribute(l, 2))
        }
        for (var m = 0, n = 0, o = 0; m < d.length; m++, n += 6, o += 9) {
            var p = d[m], q = c[p.a], r = c[p.b], s = c[p.c];
            if (i[o] = q.x, i[o + 1] = q.y, i[o + 2] = q.z, i[o + 3] = r.x, i[o + 4] = r.y, i[o + 5] = r.z, i[o + 6] = s.x, i[o + 7] = s.y, i[o + 8] = s.z, h === !0) {
                var t = p.vertexNormals[0], u = p.vertexNormals[1], v = p.vertexNormals[2];
                j[o] = t.x, j[o + 1] = t.y, j[o + 2] = t.z, j[o + 3] = u.x, j[o + 4] = u.y, j[o + 5] = u.z, j[o + 6] = v.x, j[o + 7] = v.y, j[o + 8] = v.z
            } else {
                var w = p.normal;
                j[o] = w.x, j[o + 1] = w.y, j[o + 2] = w.z, j[o + 3] = w.x, j[o + 4] = w.y, j[o + 5] = w.z, j[o + 6] = w.x, j[o + 7] = w.y, j[o + 8] = w.z
            }
            if (f === THREE.FaceColors) {
                var x = p.color;
                k[o] = x.r, k[o + 1] = x.g, k[o + 2] = x.b, k[o + 3] = x.r, k[o + 4] = x.g, k[o + 5] = x.b, k[o + 6] = x.r, k[o + 7] = x.g, k[o + 8] = x.b
            } else if (f === THREE.VertexColors) {
                var y = p.vertexColors[0], z = p.vertexColors[1], A = p.vertexColors[2];
                k[o] = y.r, k[o + 1] = y.g, k[o + 2] = y.b, k[o + 3] = z.r, k[o + 4] = z.g, k[o + 5] = z.b, k[o + 6] = A.r, k[o + 7] = A.g, k[o + 8] = A.b
            }
            if (g === !0) {
                var B = e[0][m][0], C = e[0][m][1], D = e[0][m][2];
                l[n] = B.x, l[n + 1] = B.y, l[n + 2] = C.x, l[n + 3] = C.y, l[n + 4] = D.x, l[n + 5] = D.y
            }
        }
        return this.computeBoundingSphere(), this
    }, computeBoundingBox: function () {
        var a = new THREE.Vector3;
        return function () {
            null === this.boundingBox && (this.boundingBox = new THREE.Box3);
            var b = this.attributes.position.array;
            if (b) {
                var c = this.boundingBox;
                c.makeEmpty();
                for (var d = 0, e = b.length; e > d; d += 3)a.set(b[d], b[d + 1], b[d + 2]), c.expandByPoint(a)
            }
            (void 0 === b || 0 === b.length) && (this.boundingBox.min.set(0, 0, 0), this.boundingBox.max.set(0, 0, 0)), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.')
        }
    }(), computeBoundingSphere: function () {
        var a = new THREE.Box3, b = new THREE.Vector3;
        return function () {
            null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere);
            var c = this.attributes.position.array;
            if (c) {
                a.makeEmpty();
                for (var d = this.boundingSphere.center, e = 0, f = c.length; f > e; e += 3)b.set(c[e], c[e + 1], c[e + 2]), a.expandByPoint(b);
                a.center(d);
                for (var g = 0, e = 0, f = c.length; f > e; e += 3)b.set(c[e], c[e + 1], c[e + 2]), g = Math.max(g, d.distanceToSquared(b));
                this.boundingSphere.radius = Math.sqrt(g), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.')
            }
        }
    }(), computeFaceNormals: function () {
    }, computeVertexNormals: function () {
        var a = this.attributes;
        if (a.position) {
            var b = a.position.array;
            if (void 0 === a.normal)this.addAttribute("normal", new THREE.BufferAttribute(new Float32Array(b.length), 3)); else for (var c = a.normal.array, d = 0, e = c.length; e > d; d++)c[d] = 0;
            var f, g, h, c = a.normal.array, i = new THREE.Vector3, j = new THREE.Vector3, k = new THREE.Vector3, l = new THREE.Vector3, m = new THREE.Vector3;
            if (a.index)for (var n = a.index.array, o = this.offsets.length > 0 ? this.offsets : [{
                start: 0,
                count: n.length,
                index: 0
            }], p = 0, q = o.length; q > p; ++p)for (var r = o[p].start, s = o[p].count, t = o[p].index, d = r, e = r + s; e > d; d += 3)f = 3 * (t + n[d]), g = 3 * (t + n[d + 1]), h = 3 * (t + n[d + 2]), i.fromArray(b, f), j.fromArray(b, g), k.fromArray(b, h), l.subVectors(k, j), m.subVectors(i, j), l.cross(m), c[f] += l.x, c[f + 1] += l.y, c[f + 2] += l.z, c[g] += l.x, c[g + 1] += l.y, c[g + 2] += l.z, c[h] += l.x, c[h + 1] += l.y, c[h + 2] += l.z; else for (var d = 0, e = b.length; e > d; d += 9)i.fromArray(b, d), j.fromArray(b, d + 3), k.fromArray(b, d + 6), l.subVectors(k, j), m.subVectors(i, j), l.cross(m), c[d] = l.x, c[d + 1] = l.y, c[d + 2] = l.z, c[d + 3] = l.x, c[d + 4] = l.y, c[d + 5] = l.z, c[d + 6] = l.x, c[d + 7] = l.y, c[d + 8] = l.z;
            this.normalizeNormals(), a.normal.needsUpdate = !0
        }
    }, computeTangents: function () {
        function a(a, b, c) {
            D.fromArray(d, 3 * a), E.fromArray(d, 3 * b), F.fromArray(d, 3 * c), G.fromArray(f, 2 * a), H.fromArray(f, 2 * b), I.fromArray(f, 2 * c), l = E.x - D.x, m = F.x - D.x, n = E.y - D.y, o = F.y - D.y, p = E.z - D.z, q = F.z - D.z, r = H.x - G.x, s = I.x - G.x, t = H.y - G.y, u = I.y - G.y, v = 1 / (r * u - s * t), J.set((u * l - t * m) * v, (u * n - t * o) * v, (u * p - t * q) * v), K.set((r * m - s * l) * v, (r * o - s * n) * v, (r * q - s * p) * v), i[a].add(J), i[b].add(J), i[c].add(J), j[a].add(K), j[b].add(K), j[c].add(K)
        }

        function b(a) {
            U.fromArray(e, 3 * a), V.copy(U), Q = i[a], S.copy(Q), S.sub(U.multiplyScalar(U.dot(Q))).normalize(), T.crossVectors(V, Q), R = T.dot(j[a]), P = 0 > R ? -1 : 1, h[4 * a] = S.x, h[4 * a + 1] = S.y, h[4 * a + 2] = S.z, h[4 * a + 3] = P
        }

        if (void 0 === this.attributes.index || void 0 === this.attributes.position || void 0 === this.attributes.normal || void 0 === this.attributes.uv)return void console.warn("Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()");
        var c = this.attributes.index.array, d = this.attributes.position.array, e = this.attributes.normal.array, f = this.attributes.uv.array, g = d.length / 3;
        void 0 === this.attributes.tangent && this.addAttribute("tangent", new THREE.BufferAttribute(new Float32Array(4 * g), 4));
        for (var h = this.attributes.tangent.array, i = [], j = [], k = 0; g > k; k++)i[k] = new THREE.Vector3, j[k] = new THREE.Vector3;
        var l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D = new THREE.Vector3, E = new THREE.Vector3, F = new THREE.Vector3, G = new THREE.Vector2, H = new THREE.Vector2, I = new THREE.Vector2, J = new THREE.Vector3, K = new THREE.Vector3;
        0 === this.drawcalls.length && this.addDrawCall(0, c.length, 0);
        var L = this.drawcalls;
        for (y = 0, z = L.length; z > y; ++y) {
            var M = L[y].start, N = L[y].count, O = L[y].index;
            for (w = M, x = M + N; x > w; w += 3)A = O + c[w], B = O + c[w + 1], C = O + c[w + 2], a(A, B, C)
        }
        var P, Q, R, S = new THREE.Vector3, T = new THREE.Vector3, U = new THREE.Vector3, V = new THREE.Vector3;
        for (y = 0, z = L.length; z > y; ++y) {
            var M = L[y].start, N = L[y].count, O = L[y].index;
            for (w = M, x = M + N; x > w; w += 3)A = O + c[w], B = O + c[w + 1], C = O + c[w + 2], b(A), b(B), b(C)
        }
    }, computeOffsets: function (a) {
        var b = a;
        void 0 === a && (b = 65535);
        for (var c = (Date.now(), this.attributes.index.array), d = this.attributes.position.array, e = (d.length / 3, c.length / 3), f = new Uint16Array(c.length), g = 0, h = 0, i = [{
            start: 0,
            count: 0,
            index: 0
        }], j = i[0], k = 0, l = 0, m = new Int32Array(6), n = new Int32Array(d.length), o = new Int32Array(d.length), p = 0; p < d.length; p++)n[p] = -1, o[p] = -1;
        for (var q = 0; e > q; q++) {
            l = 0;
            for (var r = 0; 3 > r; r++) {
                var s = c[3 * q + r];
                -1 == n[s] ? (m[2 * r] = s, m[2 * r + 1] = -1, l++) : n[s] < j.index ? (m[2 * r] = s, m[2 * r + 1] = -1, k++) : (m[2 * r] = s, m[2 * r + 1] = n[s])
            }
            var t = h + l;
            if (t > j.index + b) {
                var u = {start: g, count: 0, index: h};
                i.push(u), j = u;
                for (var v = 0; 6 > v; v += 2) {
                    var w = m[v + 1];
                    w > -1 && w < j.index && (m[v + 1] = -1)
                }
            }
            for (var v = 0; 6 > v; v += 2) {
                var s = m[v], w = m[v + 1];
                -1 === w && (w = h++), n[s] = w, o[w] = s, f[g++] = w - j.index, j.count++
            }
        }
        return this.reorderBuffers(f, o, h), this.offsets = i, i
    }, merge: function () {
        console.log("BufferGeometry.merge(): TODO")
    }, normalizeNormals: function () {
        for (var a, b, c, d, e = this.attributes.normal.array, f = 0, g = e.length; g > f; f += 3)a = e[f], b = e[f + 1], c = e[f + 2], d = 1 / Math.sqrt(a * a + b * b + c * c), e[f] *= d, e[f + 1] *= d, e[f + 2] *= d
    }, reorderBuffers: function (a, b, c) {
        var d = {};
        for (var e in this.attributes)if ("index" != e) {
            var f = this.attributes[e].array;
            d[e] = new f.constructor(this.attributes[e].itemSize * c)
        }
        for (var g = 0; c > g; g++) {
            var h = b[g];
            for (var e in this.attributes)if ("index" != e)for (var i = this.attributes[e].array, j = this.attributes[e].itemSize, k = d[e], l = 0; j > l; l++)k[g * j + l] = i[h * j + l]
        }
        this.attributes.index.array = a;
        for (var e in this.attributes)"index" != e && (this.attributes[e].array = d[e], this.attributes[e].numItems = this.attributes[e].itemSize * c)
    }, toJSON: function () {
        var a = {
            metadata: {version: 4, type: "BufferGeometry", generator: "BufferGeometryExporter"},
            uuid: this.uuid,
            type: this.type,
            data: {attributes: {}}
        }, b = this.attributes, c = this.offsets, d = this.boundingSphere;
        for (var e in b) {
            for (var f = b[e], g = [], h = f.array, i = 0, j = h.length; j > i; i++)g[i] = h[i];
            a.data.attributes[e] = {itemSize: f.itemSize, type: f.array.constructor.name, array: g}
        }
        return c.length > 0 && (a.data.offsets = JSON.parse(JSON.stringify(c))), null !== d && (a.data.boundingSphere = {
            center: d.center.toArray(),
            radius: d.radius
        }), a
    }, clone: function () {
        var a = new THREE.BufferGeometry;
        for (var b in this.attributes) {
            var c = this.attributes[b];
            a.addAttribute(b, c.clone())
        }
        for (var d = 0, e = this.offsets.length; e > d; d++) {
            var f = this.offsets[d];
            a.offsets.push({start: f.start, index: f.index, count: f.count})
        }
        return a
    }, dispose: function () {
        this.dispatchEvent({type: "dispose"})
    }
},THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype),THREE.Geometry = function () {
    Object.defineProperty(this, "id", {value: THREE.GeometryIdCount++}), this.uuid = THREE.Math.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [[]], this.morphTargets = [], this.morphColors = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.hasTangents = !1, this.dynamic = !0, this.verticesNeedUpdate = !1, this.elementsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.tangentsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
},THREE.Geometry.prototype = {
    constructor: THREE.Geometry, applyMatrix: function (a) {
        for (var b = (new THREE.Matrix3).getNormalMatrix(a), c = 0, d = this.vertices.length; d > c; c++) {
            var e = this.vertices[c];
            e.applyMatrix4(a)
        }
        for (var c = 0, d = this.faces.length; d > c; c++) {
            var f = this.faces[c];
            f.normal.applyMatrix3(b).normalize();
            for (var g = 0, h = f.vertexNormals.length; h > g; g++)f.vertexNormals[g].applyMatrix3(b).normalize()
        }
        this.boundingBox instanceof THREE.Box3 && this.computeBoundingBox(), this.boundingSphere instanceof THREE.Sphere && this.computeBoundingSphere()
    }, fromBufferGeometry: function (a) {
        for (var b = this, c = a.attributes, d = c.position.array, e = void 0 !== c.index ? c.index.array : void 0, f = void 0 !== c.normal ? c.normal.array : void 0, g = void 0 !== c.color ? c.color.array : void 0, h = void 0 !== c.uv ? c.uv.array : void 0, i = [], j = [], k = 0, l = 0; k < d.length; k += 3, l += 2)b.vertices.push(new THREE.Vector3(d[k], d[k + 1], d[k + 2])), void 0 !== f && i.push(new THREE.Vector3(f[k], f[k + 1], f[k + 2])), void 0 !== g && b.colors.push(new THREE.Color(g[k], g[k + 1], g[k + 2])), void 0 !== h && j.push(new THREE.Vector2(h[l], h[l + 1]));
        var m = function (a, c, d) {
            var e = void 0 !== f ? [i[a].clone(), i[c].clone(), i[d].clone()] : [], h = void 0 !== g ? [b.colors[a].clone(), b.colors[c].clone(), b.colors[d].clone()] : [];
            b.faces.push(new THREE.Face3(a, c, d, e, h)), b.faceVertexUvs[0].push([j[a], j[c], j[d]])
        };
        if (void 0 !== e)for (var k = 0; k < e.length; k += 3)m(e[k], e[k + 1], e[k + 2]); else for (var k = 0; k < d.length / 3; k += 3)m(k, k + 1, k + 2);
        return this.computeFaceNormals(), null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone()), null !== a.boundingSphere && (this.boundingSphere = a.boundingSphere.clone()), this
    }, center: function () {
        this.computeBoundingBox();
        var a = new THREE.Vector3;
        return a.addVectors(this.boundingBox.min, this.boundingBox.max), a.multiplyScalar(-.5), this.applyMatrix((new THREE.Matrix4).makeTranslation(a.x, a.y, a.z)), this.computeBoundingBox(), a
    }, computeFaceNormals: function () {
        for (var a = new THREE.Vector3, b = new THREE.Vector3, c = 0, d = this.faces.length; d > c; c++) {
            var e = this.faces[c], f = this.vertices[e.a], g = this.vertices[e.b], h = this.vertices[e.c];
            a.subVectors(h, g), b.subVectors(f, g), a.cross(b), a.normalize(), e.normal.copy(a)
        }
    }, computeVertexNormals: function (a) {
        var b, c, d, e, f, g;
        for (g = new Array(this.vertices.length), b = 0, c = this.vertices.length; c > b; b++)g[b] = new THREE.Vector3;
        if (a) {
            {
                var h, i, j, k = new THREE.Vector3, l = new THREE.Vector3;
                new THREE.Vector3, new THREE.Vector3, new THREE.Vector3
            }
            for (d = 0, e = this.faces.length; e > d; d++)f = this.faces[d], h = this.vertices[f.a], i = this.vertices[f.b], j = this.vertices[f.c], k.subVectors(j, i), l.subVectors(h, i), k.cross(l), g[f.a].add(k), g[f.b].add(k), g[f.c].add(k)
        } else for (d = 0, e = this.faces.length; e > d; d++)f = this.faces[d], g[f.a].add(f.normal), g[f.b].add(f.normal), g[f.c].add(f.normal);
        for (b = 0, c = this.vertices.length; c > b; b++)g[b].normalize();
        for (d = 0, e = this.faces.length; e > d; d++)f = this.faces[d], f.vertexNormals[0] = g[f.a].clone(), f.vertexNormals[1] = g[f.b].clone(), f.vertexNormals[2] = g[f.c].clone()
    }, computeMorphNormals: function () {
        var a, b, c, d, e;
        for (c = 0, d = this.faces.length; d > c; c++)for (e = this.faces[c], e.__originalFaceNormal ? e.__originalFaceNormal.copy(e.normal) : e.__originalFaceNormal = e.normal.clone(), e.__originalVertexNormals || (e.__originalVertexNormals = []), a = 0, b = e.vertexNormals.length; b > a; a++)e.__originalVertexNormals[a] ? e.__originalVertexNormals[a].copy(e.vertexNormals[a]) : e.__originalVertexNormals[a] = e.vertexNormals[a].clone();
        var f = new THREE.Geometry;
        for (f.faces = this.faces, a = 0, b = this.morphTargets.length; b > a; a++) {
            if (!this.morphNormals[a]) {
                this.morphNormals[a] = {}, this.morphNormals[a].faceNormals = [], this.morphNormals[a].vertexNormals = [];
                var g, h, i = this.morphNormals[a].faceNormals, j = this.morphNormals[a].vertexNormals;
                for (c = 0, d = this.faces.length; d > c; c++)g = new THREE.Vector3, h = {
                    a: new THREE.Vector3,
                    b: new THREE.Vector3,
                    c: new THREE.Vector3
                }, i.push(g), j.push(h)
            }
            var k = this.morphNormals[a];
            f.vertices = this.morphTargets[a].vertices, f.computeFaceNormals(), f.computeVertexNormals();
            var g, h;
            for (c = 0, d = this.faces.length; d > c; c++)e = this.faces[c], g = k.faceNormals[c], h = k.vertexNormals[c], g.copy(e.normal), h.a.copy(e.vertexNormals[0]), h.b.copy(e.vertexNormals[1]), h.c.copy(e.vertexNormals[2])
        }
        for (c = 0, d = this.faces.length; d > c; c++)e = this.faces[c], e.normal = e.__originalFaceNormal, e.vertexNormals = e.__originalVertexNormals
    }, computeTangents: function () {
        function a(a, b, c, d, e, f, g) {
            j = a.vertices[b], k = a.vertices[c], l = a.vertices[d], m = i[e], n = i[f], o = i[g], p = k.x - j.x, q = l.x - j.x, r = k.y - j.y, s = l.y - j.y, t = k.z - j.z, u = l.z - j.z, v = n.x - m.x, w = o.x - m.x, x = n.y - m.y, y = o.y - m.y, z = 1 / (v * y - w * x), F.set((y * p - x * q) * z, (y * r - x * s) * z, (y * t - x * u) * z), G.set((v * q - w * p) * z, (v * s - w * r) * z, (v * u - w * t) * z), D[b].add(F), D[c].add(F), D[d].add(F), E[b].add(G), E[c].add(G), E[d].add(G)
        }

        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D = [], E = [], F = new THREE.Vector3, G = new THREE.Vector3, H = new THREE.Vector3, I = new THREE.Vector3, J = new THREE.Vector3;
        for (d = 0, e = this.vertices.length; e > d; d++)D[d] = new THREE.Vector3, E[d] = new THREE.Vector3;
        for (b = 0, c = this.faces.length; c > b; b++)h = this.faces[b], i = this.faceVertexUvs[0][b], a(this, h.a, h.b, h.c, 0, 1, 2);
        var K = ["a", "b", "c", "d"];
        for (b = 0, c = this.faces.length; c > b; b++)for (h = this.faces[b], f = 0; f < Math.min(h.vertexNormals.length, 3); f++)J.copy(h.vertexNormals[f]), g = h[K[f]], A = D[g], H.copy(A), H.sub(J.multiplyScalar(J.dot(A))).normalize(), I.crossVectors(h.vertexNormals[f], A), B = I.dot(E[g]), C = 0 > B ? -1 : 1, h.vertexTangents[f] = new THREE.Vector4(H.x, H.y, H.z, C);
        this.hasTangents = !0
    }, computeLineDistances: function () {
        for (var a = 0, b = this.vertices, c = 0, d = b.length; d > c; c++)c > 0 && (a += b[c].distanceTo(b[c - 1])), this.lineDistances[c] = a
    }, computeBoundingBox: function () {
        null === this.boundingBox && (this.boundingBox = new THREE.Box3), this.boundingBox.setFromPoints(this.vertices)
    }, computeBoundingSphere: function () {
        null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere), this.boundingSphere.setFromPoints(this.vertices)
    }, merge: function (a, b, c) {
        if (a instanceof THREE.Geometry == !1)return void console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", a);
        var d, e = this.vertices.length, f = this.vertices, g = a.vertices, h = this.faces, i = a.faces, j = this.faceVertexUvs[0], k = a.faceVertexUvs[0];
        void 0 === c && (c = 0), void 0 !== b && (d = (new THREE.Matrix3).getNormalMatrix(b));
        for (var l = 0, m = g.length; m > l; l++) {
            var n = g[l], o = n.clone();
            void 0 !== b && o.applyMatrix4(b), f.push(o)
        }
        for (l = 0, m = i.length; m > l; l++) {
            var p, q, r, s = i[l], t = s.vertexNormals, u = s.vertexColors;
            p = new THREE.Face3(s.a + e, s.b + e, s.c + e), p.normal.copy(s.normal), void 0 !== d && p.normal.applyMatrix3(d).normalize();
            for (var v = 0, w = t.length; w > v; v++)q = t[v].clone(), void 0 !== d && q.applyMatrix3(d).normalize(), p.vertexNormals.push(q);
            p.color.copy(s.color);
            for (var v = 0, w = u.length; w > v; v++)r = u[v], p.vertexColors.push(r.clone());
            p.materialIndex = s.materialIndex + c, h.push(p)
        }
        for (l = 0, m = k.length; m > l; l++) {
            var x = k[l], y = [];
            if (void 0 !== x) {
                for (var v = 0, w = x.length; w > v; v++)y.push(new THREE.Vector2(x[v].x, x[v].y));
                j.push(y)
            }
        }
    }, mergeVertices: function () {
        var a, b, c, d, e, f, g, h, i = {}, j = [], k = [], l = 4, m = Math.pow(10, l);
        for (c = 0, d = this.vertices.length; d > c; c++)a = this.vertices[c], b = Math.round(a.x * m) + "_" + Math.round(a.y * m) + "_" + Math.round(a.z * m), void 0 === i[b] ? (i[b] = c, j.push(this.vertices[c]), k[c] = j.length - 1) : k[c] = k[i[b]];
        var n = [];
        for (c = 0, d = this.faces.length; d > c; c++) {
            e = this.faces[c], e.a = k[e.a], e.b = k[e.b], e.c = k[e.c], f = [e.a, e.b, e.c];
            for (var o = -1, p = 0; 3 > p; p++)if (f[p] == f[(p + 1) % 3]) {
                o = p, n.push(c);
                break
            }
        }
        for (c = n.length - 1; c >= 0; c--) {
            var q = n[c];
            for (this.faces.splice(q, 1), g = 0, h = this.faceVertexUvs.length; h > g; g++)this.faceVertexUvs[g].splice(q, 1)
        }
        var r = this.vertices.length - j.length;
        return this.vertices = j, r
    }, toJSON: function () {
        function a(a, b, c) {
            return c ? a | 1 << b : a & ~(1 << b)
        }

        function b(a) {
            var b = a.x.toString() + a.y.toString() + a.z.toString();
            return void 0 !== m[b] ? m[b] : (m[b] = l.length / 3, l.push(a.x, a.y, a.z), m[b])
        }

        function c(a) {
            var b = a.r.toString() + a.g.toString() + a.b.toString();
            return void 0 !== o[b] ? o[b] : (o[b] = n.length, n.push(a.getHex()), o[b])
        }

        function d(a) {
            var b = a.x.toString() + a.y.toString();
            return void 0 !== q[b] ? q[b] : (q[b] = p.length / 2, p.push(a.x, a.y), q[b])
        }

        var e = {
            metadata: {version: 4, type: "BufferGeometry", generator: "BufferGeometryExporter"},
            uuid: this.uuid,
            type: this.type
        };
        if ("" !== this.name && (e.name = this.name), void 0 !== this.parameters) {
            var f = this.parameters;
            for (var g in f)void 0 !== f[g] && (e[g] = f[g]);
            return e
        }
        for (var h = [], i = 0; i < this.vertices.length; i++) {
            var j = this.vertices[i];
            h.push(j.x, j.y, j.z)
        }
        for (var k = [], l = [], m = {}, n = [], o = {}, p = [], q = {}, i = 0; i < this.faces.length; i++) {
            var r = this.faces[i], s = !1, t = !1, u = void 0 !== this.faceVertexUvs[0][i], v = r.normal.length() > 0, w = r.vertexNormals.length > 0, x = 1 !== r.color.r || 1 !== r.color.g || 1 !== r.color.b, y = r.vertexColors.length > 0, z = 0;
            if (z = a(z, 0, 0), z = a(z, 1, s), z = a(z, 2, t), z = a(z, 3, u), z = a(z, 4, v), z = a(z, 5, w), z = a(z, 6, x), z = a(z, 7, y), k.push(z), k.push(r.a, r.b, r.c), u) {
                var A = this.faceVertexUvs[0][i];
                k.push(d(A[0]), d(A[1]), d(A[2]))
            }
            if (v && k.push(b(r.normal)), w) {
                var B = r.vertexNormals;
                k.push(b(B[0]), b(B[1]), b(B[2]))
            }
            if (x && k.push(c(r.color)), y) {
                var C = r.vertexColors;
                k.push(c(C[0]), c(C[1]), c(C[2]))
            }
        }
        return e.data = {}, e.data.vertices = h, e.data.normals = l, n.length > 0 && (e.data.colors = n), p.length > 0 && (e.data.uvs = [p]), e.data.faces = k, e
    }, clone: function () {
        for (var a = new THREE.Geometry, b = this.vertices, c = 0, d = b.length; d > c; c++)a.vertices.push(b[c].clone());
        for (var e = this.faces, c = 0, d = e.length; d > c; c++)a.faces.push(e[c].clone());
        for (var f = this.faceVertexUvs[0], c = 0, d = f.length; d > c; c++) {
            for (var g = f[c], h = [], i = 0, j = g.length; j > i; i++)h.push(new THREE.Vector2(g[i].x, g[i].y));
            a.faceVertexUvs[0].push(h)
        }
        return a
    }, dispose: function () {
        this.dispatchEvent({type: "dispose"})
    }
},THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype),THREE.GeometryIdCount = 0,THREE.Camera = function () {
    THREE.Object3D.call(this), this.type = "Camera", this.matrixWorldInverse = new THREE.Matrix4, this.projectionMatrix = new THREE.Matrix4
},THREE.Camera.prototype = Object.create(THREE.Object3D.prototype),THREE.Camera.prototype.getWorldDirection = function () {
    var a = new THREE.Quaternion;
    return function (b) {
        var c = b || new THREE.Vector3;
        return this.getWorldQuaternion(a), c.set(0, 0, -1).applyQuaternion(a)
    }
}(),THREE.Camera.prototype.lookAt = function () {
    var a = new THREE.Matrix4;
    return function (b) {
        a.lookAt(this.position, b, this.up), this.quaternion.setFromRotationMatrix(a)
    }
}(),THREE.Camera.prototype.clone = function (a) {
    return void 0 === a && (a = new THREE.Camera), THREE.Object3D.prototype.clone.call(this, a), a.matrixWorldInverse.copy(this.matrixWorldInverse), a.projectionMatrix.copy(this.projectionMatrix), a
},THREE.CubeCamera = function (a, b, c) {
    THREE.Object3D.call(this), this.type = "CubeCamera";
    var d = 90, e = 1, f = new THREE.PerspectiveCamera(d, e, a, b);
    f.up.set(0, -1, 0), f.lookAt(new THREE.Vector3(1, 0, 0)), this.add(f);
    var g = new THREE.PerspectiveCamera(d, e, a, b);
    g.up.set(0, -1, 0), g.lookAt(new THREE.Vector3(-1, 0, 0)), this.add(g);
    var h = new THREE.PerspectiveCamera(d, e, a, b);
    h.up.set(0, 0, 1), h.lookAt(new THREE.Vector3(0, 1, 0)), this.add(h);
    var i = new THREE.PerspectiveCamera(d, e, a, b);
    i.up.set(0, 0, -1), i.lookAt(new THREE.Vector3(0, -1, 0)), this.add(i);
    var j = new THREE.PerspectiveCamera(d, e, a, b);
    j.up.set(0, -1, 0), j.lookAt(new THREE.Vector3(0, 0, 1)), this.add(j);
    var k = new THREE.PerspectiveCamera(d, e, a, b);
    k.up.set(0, -1, 0), k.lookAt(new THREE.Vector3(0, 0, -1)), this.add(k), this.renderTarget = new THREE.WebGLRenderTargetCube(c, c, {
        format: THREE.RGBFormat,
        magFilter: THREE.LinearFilter,
        minFilter: THREE.LinearFilter
    }), this.updateCubeMap = function (a, b) {
        var c = this.renderTarget, d = c.generateMipmaps;
        c.generateMipmaps = !1, c.activeCubeFace = 0, a.render(b, f, c), c.activeCubeFace = 1, a.render(b, g, c), c.activeCubeFace = 2, a.render(b, h, c), c.activeCubeFace = 3, a.render(b, i, c), c.activeCubeFace = 4, a.render(b, j, c), c.generateMipmaps = d, c.activeCubeFace = 5, a.render(b, k, c)
    }
},THREE.CubeCamera.prototype = Object.create(THREE.Object3D.prototype),THREE.OrthographicCamera = function (a, b, c, d, e, f) {
    THREE.Camera.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.left = a, this.right = b, this.top = c, this.bottom = d, this.near = void 0 !== e ? e : .1, this.far = void 0 !== f ? f : 2e3, this.updateProjectionMatrix()
},THREE.OrthographicCamera.prototype = Object.create(THREE.Camera.prototype),THREE.OrthographicCamera.prototype.updateProjectionMatrix = function () {
    var a = (this.right - this.left) / (2 * this.zoom), b = (this.top - this.bottom) / (2 * this.zoom), c = (this.right + this.left) / 2, d = (this.top + this.bottom) / 2;
    this.projectionMatrix.makeOrthographic(c - a, c + a, d + b, d - b, this.near, this.far)
},THREE.OrthographicCamera.prototype.clone = function () {
    var a = new THREE.OrthographicCamera;
    return THREE.Camera.prototype.clone.call(this, a), a.zoom = this.zoom, a.left = this.left, a.right = this.right, a.top = this.top, a.bottom = this.bottom, a.near = this.near, a.far = this.far, a.projectionMatrix.copy(this.projectionMatrix), a
},THREE.PerspectiveCamera = function (a, b, c, d) {
    THREE.Camera.call(this), this.type = "PerspectiveCamera", this.zoom = 1, this.fov = void 0 !== a ? a : 50, this.aspect = void 0 !== b ? b : 1, this.near = void 0 !== c ? c : .1, this.far = void 0 !== d ? d : 2e3, this.updateProjectionMatrix()
},THREE.PerspectiveCamera.prototype = Object.create(THREE.Camera.prototype),THREE.PerspectiveCamera.prototype.setLens = function (a, b) {
    void 0 === b && (b = 24), this.fov = 2 * THREE.Math.radToDeg(Math.atan(b / (2 * a))), this.updateProjectionMatrix()
},THREE.PerspectiveCamera.prototype.setViewOffset = function (a, b, c, d, e, f) {
    this.fullWidth = a, this.fullHeight = b, this.x = c, this.y = d, this.width = e, this.height = f, this.updateProjectionMatrix()
},THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function () {
    var a = THREE.Math.radToDeg(2 * Math.atan(Math.tan(.5 * THREE.Math.degToRad(this.fov)) / this.zoom));
    if (this.fullWidth) {
        var b = this.fullWidth / this.fullHeight, c = Math.tan(THREE.Math.degToRad(.5 * a)) * this.near, d = -c, e = b * d, f = b * c, g = Math.abs(f - e), h = Math.abs(c - d);
        this.projectionMatrix.makeFrustum(e + this.x * g / this.fullWidth, e + (this.x + this.width) * g / this.fullWidth, c - (this.y + this.height) * h / this.fullHeight, c - this.y * h / this.fullHeight, this.near, this.far)
    } else this.projectionMatrix.makePerspective(a, this.aspect, this.near, this.far)
},THREE.PerspectiveCamera.prototype.clone = function () {
    var a = new THREE.PerspectiveCamera;
    return THREE.Camera.prototype.clone.call(this, a), a.zoom = this.zoom, a.fov = this.fov, a.aspect = this.aspect, a.near = this.near, a.far = this.far, a.projectionMatrix.copy(this.projectionMatrix), a
},THREE.Light = function (a) {
    THREE.Object3D.call(this), this.type = "Light", this.color = new THREE.Color(a)
},THREE.Light.prototype = Object.create(THREE.Object3D.prototype),THREE.Light.prototype.clone = function (a) {
    return void 0 === a && (a = new THREE.Light), THREE.Object3D.prototype.clone.call(this, a), a.color.copy(this.color), a
},THREE.AmbientLight = function (a) {
    THREE.Light.call(this, a), this.type = "AmbientLight"
},THREE.AmbientLight.prototype = Object.create(THREE.Light.prototype),THREE.AmbientLight.prototype.clone = function () {
    var a = new THREE.AmbientLight;
    return THREE.Light.prototype.clone.call(this, a), a
},THREE.AreaLight = function (a, b) {
    THREE.Light.call(this, a), this.type = "AreaLight", this.normal = new THREE.Vector3(0, -1, 0), this.right = new THREE.Vector3(1, 0, 0), this.intensity = void 0 !== b ? b : 1, this.width = 1, this.height = 1, this.constantAttenuation = 1.5, this.linearAttenuation = .5, this.quadraticAttenuation = .1
},THREE.AreaLight.prototype = Object.create(THREE.Light.prototype),THREE.DirectionalLight = function (a, b) {
    THREE.Light.call(this, a), this.type = "DirectionalLight", this.position.set(0, 1, 0), this.target = new THREE.Object3D, this.intensity = void 0 !== b ? b : 1, this.castShadow = !1, this.onlyShadow = !1, this.shadowCameraNear = 50, this.shadowCameraFar = 5e3, this.shadowCameraLeft = -500, this.shadowCameraRight = 500, this.shadowCameraTop = 500, this.shadowCameraBottom = -500, this.shadowCameraVisible = !1, this.shadowBias = 0, this.shadowDarkness = .5, this.shadowMapWidth = 512, this.shadowMapHeight = 512, this.shadowCascade = !1, this.shadowCascadeOffset = new THREE.Vector3(0, 0, -1e3), this.shadowCascadeCount = 2, this.shadowCascadeBias = [0, 0, 0], this.shadowCascadeWidth = [512, 512, 512], this.shadowCascadeHeight = [512, 512, 512], this.shadowCascadeNearZ = [-1, .99, .998], this.shadowCascadeFarZ = [.99, .998, 1], this.shadowCascadeArray = [], this.shadowMap = null, this.shadowMapSize = null, this.shadowCamera = null, this.shadowMatrix = null
},THREE.DirectionalLight.prototype = Object.create(THREE.Light.prototype),THREE.DirectionalLight.prototype.clone = function () {
    var a = new THREE.DirectionalLight;
    return THREE.Light.prototype.clone.call(this, a), a.target = this.target.clone(), a.intensity = this.intensity, a.castShadow = this.castShadow, a.onlyShadow = this.onlyShadow, a.shadowCameraNear = this.shadowCameraNear, a.shadowCameraFar = this.shadowCameraFar, a.shadowCameraLeft = this.shadowCameraLeft, a.shadowCameraRight = this.shadowCameraRight, a.shadowCameraTop = this.shadowCameraTop, a.shadowCameraBottom = this.shadowCameraBottom, a.shadowCameraVisible = this.shadowCameraVisible, a.shadowBias = this.shadowBias, a.shadowDarkness = this.shadowDarkness, a.shadowMapWidth = this.shadowMapWidth, a.shadowMapHeight = this.shadowMapHeight, a.shadowCascade = this.shadowCascade, a.shadowCascadeOffset.copy(this.shadowCascadeOffset), a.shadowCascadeCount = this.shadowCascadeCount, a.shadowCascadeBias = this.shadowCascadeBias.slice(0), a.shadowCascadeWidth = this.shadowCascadeWidth.slice(0), a.shadowCascadeHeight = this.shadowCascadeHeight.slice(0), a.shadowCascadeNearZ = this.shadowCascadeNearZ.slice(0), a.shadowCascadeFarZ = this.shadowCascadeFarZ.slice(0), a
},THREE.HemisphereLight = function (a, b, c) {
    THREE.Light.call(this, a), this.type = "HemisphereLight", this.position.set(0, 100, 0), this.groundColor = new THREE.Color(b), this.intensity = void 0 !== c ? c : 1
},THREE.HemisphereLight.prototype = Object.create(THREE.Light.prototype),THREE.HemisphereLight.prototype.clone = function () {
    var a = new THREE.HemisphereLight;
    return THREE.Light.prototype.clone.call(this, a), a.groundColor.copy(this.groundColor), a.intensity = this.intensity, a
},THREE.PointLight = function (a, b, c) {
    THREE.Light.call(this, a), this.type = "PointLight", this.intensity = void 0 !== b ? b : 1, this.distance = void 0 !== c ? c : 0
},THREE.PointLight.prototype = Object.create(THREE.Light.prototype),THREE.PointLight.prototype.clone = function () {
    var a = new THREE.PointLight;
    return THREE.Light.prototype.clone.call(this, a), a.intensity = this.intensity, a.distance = this.distance, a
},THREE.SpotLight = function (a, b, c, d, e) {
    THREE.Light.call(this, a), this.type = "SpotLight", this.position.set(0, 1, 0), this.target = new THREE.Object3D, this.intensity = void 0 !== b ? b : 1, this.distance = void 0 !== c ? c : 0, this.angle = void 0 !== d ? d : Math.PI / 3, this.exponent = void 0 !== e ? e : 10, this.castShadow = !1, this.onlyShadow = !1, this.shadowCameraNear = 50, this.shadowCameraFar = 5e3, this.shadowCameraFov = 50, this.shadowCameraVisible = !1, this.shadowBias = 0, this.shadowDarkness = .5, this.shadowMapWidth = 512, this.shadowMapHeight = 512, this.shadowMap = null, this.shadowMapSize = null, this.shadowCamera = null, this.shadowMatrix = null
},THREE.SpotLight.prototype = Object.create(THREE.Light.prototype),THREE.SpotLight.prototype.clone = function () {
    var a = new THREE.SpotLight;
    return THREE.Light.prototype.clone.call(this, a), a.target = this.target.clone(), a.intensity = this.intensity, a.distance = this.distance, a.angle = this.angle, a.exponent = this.exponent, a.castShadow = this.castShadow, a.onlyShadow = this.onlyShadow, a.shadowCameraNear = this.shadowCameraNear, a.shadowCameraFar = this.shadowCameraFar, a.shadowCameraFov = this.shadowCameraFov, a.shadowCameraVisible = this.shadowCameraVisible, a.shadowBias = this.shadowBias, a.shadowDarkness = this.shadowDarkness, a.shadowMapWidth = this.shadowMapWidth, a.shadowMapHeight = this.shadowMapHeight, a
},THREE.Cache = function () {
    this.files = {}
},THREE.Cache.prototype = {
    constructor: THREE.Cache, add: function (a, b) {
        this.files[a] = b
    }, get: function (a) {
        return this.files[a]
    }, remove: function (a) {
        delete this.files[a]
    }, clear: function () {
        this.files = {}
    }
},THREE.Loader = function (a) {
    this.showStatus = a, this.statusDomElement = a ? THREE.Loader.prototype.addStatusElement() : null, this.imageLoader = new THREE.ImageLoader, this.onLoadStart = function () {
    }, this.onLoadProgress = function () {
    }, this.onLoadComplete = function () {
    }
},THREE.Loader.prototype = {
    constructor: THREE.Loader, crossOrigin: void 0, addStatusElement: function () {
        var a = document.createElement("div");
        return a.style.position = "absolute", a.style.right = "0px", a.style.top = "0px", a.style.fontSize = "0.8em", a.style.textAlign = "left", a.style.background = "rgba(0,0,0,0.25)", a.style.color = "#fff", a.style.width = "120px", a.style.padding = "0.5em 0.5em 0.5em 0.5em", a.style.zIndex = 1e3, a.innerHTML = "Loading ...", a
    }, updateProgress: function (a) {
        var b = "Loaded ";
        b += a.total ? (100 * a.loaded / a.total).toFixed(0) + "%" : (a.loaded / 1024).toFixed(2) + " KB", this.statusDomElement.innerHTML = b
    }, extractUrlBase: function (a) {
        var b = a.split("/");
        return 1 === b.length ? "./" : (b.pop(), b.join("/") + "/")
    }, initMaterials: function (a, b) {
        for (var c = [], d = 0; d < a.length; ++d)c[d] = this.createMaterial(a[d], b);
        return c
    }, needsTangents: function (a) {
        for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b];
            if (d instanceof THREE.ShaderMaterial)return !0
        }
        return !1
    }, createMaterial: function (a, b) {
        function c(a) {
            var b = Math.log(a) / Math.LN2;
            return Math.pow(2, Math.round(b))
        }

        function d(a, d, e, g, h, i, j) {
            var k, l = b + e, m = THREE.Loader.Handlers.get(l);
            if (null !== m ? k = m.load(l) : (k = new THREE.Texture, m = f.imageLoader, m.crossOrigin = f.crossOrigin, m.load(l, function (a) {
                    if (THREE.Math.isPowerOfTwo(a.width) === !1 || THREE.Math.isPowerOfTwo(a.height) === !1) {
                        var b = c(a.width), d = c(a.height), e = document.createElement("canvas");
                        e.width = b, e.height = d;
                        var f = e.getContext("2d");
                        f.drawImage(a, 0, 0, b, d), k.image = e
                    } else k.image = a;
                    k.needsUpdate = !0
                })), k.sourceFile = e, g && (k.repeat.set(g[0], g[1]), 1 !== g[0] && (k.wrapS = THREE.RepeatWrapping), 1 !== g[1] && (k.wrapT = THREE.RepeatWrapping)), h && k.offset.set(h[0], h[1]), i) {
                var n = {repeat: THREE.RepeatWrapping, mirror: THREE.MirroredRepeatWrapping};
                void 0 !== n[i[0]] && (k.wrapS = n[i[0]]), void 0 !== n[i[1]] && (k.wrapT = n[i[1]])
            }
            j && (k.anisotropy = j), a[d] = k
        }

        function e(a) {
            return (255 * a[0] << 16) + (255 * a[1] << 8) + 255 * a[2]
        }

        var f = this, g = "MeshLambertMaterial", h = {
            color: 15658734,
            opacity: 1,
            map: null,
            lightMap: null,
            normalMap: null,
            bumpMap: null,
            wireframe: !1
        };
        if (a.shading) {
            var i = a.shading.toLowerCase();
            "phong" === i ? g = "MeshPhongMaterial" : "basic" === i && (g = "MeshBasicMaterial")
        }
        if (void 0 !== a.blending && void 0 !== THREE[a.blending] && (h.blending = THREE[a.blending]), (void 0 !== a.transparent || a.opacity < 1) && (h.transparent = a.transparent), void 0 !== a.depthTest && (h.depthTest = a.depthTest), void 0 !== a.depthWrite && (h.depthWrite = a.depthWrite), void 0 !== a.visible && (h.visible = a.visible), void 0 !== a.flipSided && (h.side = THREE.BackSide), void 0 !== a.doubleSided && (h.side = THREE.DoubleSide), void 0 !== a.wireframe && (h.wireframe = a.wireframe), void 0 !== a.vertexColors && ("face" === a.vertexColors ? h.vertexColors = THREE.FaceColors : a.vertexColors && (h.vertexColors = THREE.VertexColors)), a.colorDiffuse ? h.color = e(a.colorDiffuse) : a.DbgColor && (h.color = a.DbgColor), a.colorSpecular && (h.specular = e(a.colorSpecular)), a.colorAmbient && (h.ambient = e(a.colorAmbient)), a.colorEmissive && (h.emissive = e(a.colorEmissive)), a.transparency && (h.opacity = a.transparency), a.specularCoef && (h.shininess = a.specularCoef), a.mapDiffuse && b && d(h, "map", a.mapDiffuse, a.mapDiffuseRepeat, a.mapDiffuseOffset, a.mapDiffuseWrap, a.mapDiffuseAnisotropy), a.mapLight && b && d(h, "lightMap", a.mapLight, a.mapLightRepeat, a.mapLightOffset, a.mapLightWrap, a.mapLightAnisotropy), a.mapBump && b && d(h, "bumpMap", a.mapBump, a.mapBumpRepeat, a.mapBumpOffset, a.mapBumpWrap, a.mapBumpAnisotropy), a.mapNormal && b && d(h, "normalMap", a.mapNormal, a.mapNormalRepeat, a.mapNormalOffset, a.mapNormalWrap, a.mapNormalAnisotropy), a.mapSpecular && b && d(h, "specularMap", a.mapSpecular, a.mapSpecularRepeat, a.mapSpecularOffset, a.mapSpecularWrap, a.mapSpecularAnisotropy), a.mapAlpha && b && d(h, "alphaMap", a.mapAlpha, a.mapAlphaRepeat, a.mapAlphaOffset, a.mapAlphaWrap, a.mapAlphaAnisotropy), a.mapBumpScale && (h.bumpScale = a.mapBumpScale), a.mapNormal) {
            var j = THREE.ShaderLib.normalmap, k = THREE.UniformsUtils.clone(j.uniforms);
            k.tNormal.value = h.normalMap, a.mapNormalFactor && k.uNormalScale.value.set(a.mapNormalFactor, a.mapNormalFactor), h.map && (k.tDiffuse.value = h.map, k.enableDiffuse.value = !0), h.specularMap && (k.tSpecular.value = h.specularMap, k.enableSpecular.value = !0), h.lightMap && (k.tAO.value = h.lightMap, k.enableAO.value = !0), k.diffuse.value.setHex(h.color), k.specular.value.setHex(h.specular), k.ambient.value.setHex(h.ambient), k.shininess.value = h.shininess, void 0 !== h.opacity && (k.opacity.value = h.opacity);
            var l = {
                fragmentShader: j.fragmentShader,
                vertexShader: j.vertexShader,
                uniforms: k,
                lights: !0,
                fog: !0
            }, m = new THREE.ShaderMaterial(l);
            h.transparent && (m.transparent = !0)
        } else var m = new THREE[g](h);
        return void 0 !== a.DbgName && (m.name = a.DbgName), m
    }
},THREE.Loader.Handlers = {
    handlers: [], add: function (a, b) {
        this.handlers.push(a, b)
    }, get: function (a) {
        for (var b = 0, c = this.handlers.length; c > b; b += 2) {
            var d = this.handlers[b], e = this.handlers[b + 1];
            if (d.test(a))return e
        }
        return null
    }
},THREE.XHRLoader = function (a) {
    this.cache = new THREE.Cache, this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
},THREE.XHRLoader.prototype = {
    constructor: THREE.XHRLoader, load: function (a, b, c, d) {
        var e = this, f = e.cache.get(a);
        if (void 0 !== f)return void(b && b(f));
        var g = new XMLHttpRequest;
        g.open("GET", a, !0), g.addEventListener("load", function () {
            e.cache.add(a, this.response), b && b(this.response), e.manager.itemEnd(a)
        }, !1), void 0 !== c && g.addEventListener("progress", function (a) {
            c(a)
        }, !1), void 0 !== d && g.addEventListener("error", function (a) {
            d(a)
        }, !1), void 0 !== this.crossOrigin && (g.crossOrigin = this.crossOrigin), void 0 !== this.responseType && (g.responseType = this.responseType), g.send(null), e.manager.itemStart(a)
    }, setResponseType: function (a) {
        this.responseType = a
    }, setCrossOrigin: function (a) {
        this.crossOrigin = a
    }
},THREE.ImageLoader = function (a) {
    this.cache = new THREE.Cache, this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
},THREE.ImageLoader.prototype = {
    constructor: THREE.ImageLoader, load: function (a, b, c, d) {
        var e = this, f = e.cache.get(a);
        if (void 0 !== f)return void b(f);
        var g = document.createElement("img");
        return void 0 !== b && g.addEventListener("load", function () {
            e.cache.add(a, this), b(this), e.manager.itemEnd(a)
        }, !1), void 0 !== c && g.addEventListener("progress", function (a) {
            c(a)
        }, !1), void 0 !== d && g.addEventListener("error", function (a) {
            d(a)
        }, !1), void 0 !== this.crossOrigin && (g.crossOrigin = this.crossOrigin), g.src = a, e.manager.itemStart(a), g
    }, setCrossOrigin: function (a) {
        this.crossOrigin = a
    }
},THREE.JSONLoader = function (a) {
    THREE.Loader.call(this, a), this.withCredentials = !1
},THREE.JSONLoader.prototype = Object.create(THREE.Loader.prototype),THREE.JSONLoader.prototype.load = function (a, b, c) {
    c = c && "string" == typeof c ? c : this.extractUrlBase(a), this.onLoadStart(), this.loadAjaxJSON(this, a, b, c)
},THREE.JSONLoader.prototype.loadAjaxJSON = function (a, b, c, d, e) {
    var f = new XMLHttpRequest, g = 0;
    f.onreadystatechange = function () {
        if (f.readyState === f.DONE)if (200 === f.status || 0 === f.status) {
            if (f.responseText) {
                var h = JSON.parse(f.responseText);
                if (void 0 !== h.metadata && "scene" === h.metadata.type)return void console.error('THREE.JSONLoader: "' + b + '" seems to be a Scene. Use THREE.SceneLoader instead.');
                var i = a.parse(h, d);
                c(i.geometry, i.materials)
            } else console.error('THREE.JSONLoader: "' + b + '" seems to be unreachable or the file is empty.');
            a.onLoadComplete()
        } else console.error("THREE.JSONLoader: Couldn't load \"" + b + '" (' + f.status + ")"); else f.readyState === f.LOADING ? e && (0 === g && (g = f.getResponseHeader("Content-Length")), e({
            total: g,
            loaded: f.responseText.length
        })) : f.readyState === f.HEADERS_RECEIVED && void 0 !== e && (g = f.getResponseHeader("Content-Length"))
    }, f.open("GET", b, !0), f.withCredentials = this.withCredentials, f.send(null)
},THREE.JSONLoader.prototype.parse = function (a, b) {
    function c(b) {
        function c(a, b) {
            return a & 1 << b
        }

        var d, e, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F = a.faces, G = a.vertices, H = a.normals, I = a.colors, J = 0;
        if (void 0 !== a.uvs) {
            for (d = 0; d < a.uvs.length; d++)a.uvs[d].length && J++;
            for (d = 0; J > d; d++)f.faceVertexUvs[d] = []
        }
        for (h = 0, i = G.length; i > h;)v = new THREE.Vector3, v.x = G[h++] * b, v.y = G[h++] * b, v.z = G[h++] * b, f.vertices.push(v);
        for (h = 0, i = F.length; i > h;)if (n = F[h++], o = c(n, 0), p = c(n, 1), q = c(n, 3), r = c(n, 4), s = c(n, 5), t = c(n, 6), u = c(n, 7), o) {
            if (x = new THREE.Face3, x.a = F[h], x.b = F[h + 1], x.c = F[h + 3], y = new THREE.Face3, y.a = F[h + 1], y.b = F[h + 2], y.c = F[h + 3], h += 4, p && (m = F[h++], x.materialIndex = m, y.materialIndex = m), g = f.faces.length, q)for (d = 0; J > d; d++)for (B = a.uvs[d], f.faceVertexUvs[d][g] = [], f.faceVertexUvs[d][g + 1] = [], e = 0; 4 > e; e++)l = F[h++], D = B[2 * l], E = B[2 * l + 1], C = new THREE.Vector2(D, E), 2 !== e && f.faceVertexUvs[d][g].push(C), 0 !== e && f.faceVertexUvs[d][g + 1].push(C);
            if (r && (k = 3 * F[h++], x.normal.set(H[k++], H[k++], H[k]), y.normal.copy(x.normal)), s)for (d = 0; 4 > d; d++)k = 3 * F[h++], A = new THREE.Vector3(H[k++], H[k++], H[k]), 2 !== d && x.vertexNormals.push(A), 0 !== d && y.vertexNormals.push(A);
            if (t && (j = F[h++], z = I[j], x.color.setHex(z), y.color.setHex(z)), u)for (d = 0; 4 > d; d++)j = F[h++], z = I[j], 2 !== d && x.vertexColors.push(new THREE.Color(z)), 0 !== d && y.vertexColors.push(new THREE.Color(z));
            f.faces.push(x), f.faces.push(y)
        } else {
            if (w = new THREE.Face3, w.a = F[h++], w.b = F[h++], w.c = F[h++], p && (m = F[h++], w.materialIndex = m), g = f.faces.length, q)for (d = 0; J > d; d++)for (B = a.uvs[d], f.faceVertexUvs[d][g] = [], e = 0; 3 > e; e++)l = F[h++], D = B[2 * l], E = B[2 * l + 1], C = new THREE.Vector2(D, E), f.faceVertexUvs[d][g].push(C);
            if (r && (k = 3 * F[h++], w.normal.set(H[k++], H[k++], H[k])), s)for (d = 0; 3 > d; d++)k = 3 * F[h++], A = new THREE.Vector3(H[k++], H[k++], H[k]), w.vertexNormals.push(A);
            if (t && (j = F[h++], w.color.setHex(I[j])), u)for (d = 0; 3 > d; d++)j = F[h++], w.vertexColors.push(new THREE.Color(I[j]));
            f.faces.push(w)
        }
    }

    function d() {
        var b = void 0 !== a.influencesPerVertex ? a.influencesPerVertex : 2;
        if (a.skinWeights)for (var c = 0, d = a.skinWeights.length; d > c; c += b) {
            var e = a.skinWeights[c], g = b > 1 ? a.skinWeights[c + 1] : 0, h = b > 2 ? a.skinWeights[c + 2] : 0, i = b > 3 ? a.skinWeights[c + 3] : 0;
            f.skinWeights.push(new THREE.Vector4(e, g, h, i))
        }
        if (a.skinIndices)for (var c = 0, d = a.skinIndices.length; d > c; c += b) {
            var j = a.skinIndices[c], k = b > 1 ? a.skinIndices[c + 1] : 0, l = b > 2 ? a.skinIndices[c + 2] : 0, m = b > 3 ? a.skinIndices[c + 3] : 0;
            f.skinIndices.push(new THREE.Vector4(j, k, l, m))
        }
        f.bones = a.bones, f.bones && f.bones.length > 0 && (f.skinWeights.length !== f.skinIndices.length || f.skinIndices.length !== f.vertices.length) && console.warn("When skinning, number of vertices (" + f.vertices.length + "), skinIndices (" + f.skinIndices.length + "), and skinWeights (" + f.skinWeights.length + ") should match."), f.animation = a.animation, f.animations = a.animations
    }

    function e(b) {
        if (void 0 !== a.morphTargets) {
            var c, d, e, g, h, i;
            for (c = 0, d = a.morphTargets.length; d > c; c++)for (f.morphTargets[c] = {}, f.morphTargets[c].name = a.morphTargets[c].name, f.morphTargets[c].vertices = [], h = f.morphTargets[c].vertices, i = a.morphTargets[c].vertices, e = 0, g = i.length; g > e; e += 3) {
                var j = new THREE.Vector3;
                j.x = i[e] * b, j.y = i[e + 1] * b, j.z = i[e + 2] * b, h.push(j)
            }
        }
        if (void 0 !== a.morphColors) {
            var c, d, k, l, m, n, o;
            for (c = 0, d = a.morphColors.length; d > c; c++)for (f.morphColors[c] = {}, f.morphColors[c].name = a.morphColors[c].name, f.morphColors[c].colors = [], m = f.morphColors[c].colors, n = a.morphColors[c].colors, k = 0, l = n.length; l > k; k += 3)o = new THREE.Color(16755200), o.setRGB(n[k], n[k + 1], n[k + 2]), m.push(o)
        }
    }

    var f = new THREE.Geometry, g = void 0 !== a.scale ? 1 / a.scale : 1;
    if (c(g), d(), e(g), f.computeFaceNormals(), f.computeBoundingSphere(), void 0 === a.materials || 0 === a.materials.length)return {geometry: f};
    var h = this.initMaterials(a.materials, b);
    return this.needsTangents(h) && f.computeTangents(), {geometry: f, materials: h}
},THREE.LoadingManager = function (a, b, c) {
    var d = this, e = 0, f = 0;
    this.onLoad = a, this.onProgress = b, this.onError = c, this.itemStart = function () {
        f++
    }, this.itemEnd = function (a) {
        e++, void 0 !== d.onProgress && d.onProgress(a, e, f), e === f && void 0 !== d.onLoad && d.onLoad()
    }
},THREE.DefaultLoadingManager = new THREE.LoadingManager,THREE.BufferGeometryLoader = function (a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
},THREE.BufferGeometryLoader.prototype = {
    constructor: THREE.BufferGeometryLoader, load: function (a, b, c, d) {
        var e = this, f = new THREE.XHRLoader;
        f.setCrossOrigin(this.crossOrigin), f.load(a, function (a) {
            b(e.parse(JSON.parse(a)))
        }, c, d)
    }, setCrossOrigin: function (a) {
        this.crossOrigin = a
    }, parse: function (a) {
        var b = new THREE.BufferGeometry, c = a.attributes;
        for (var d in c) {
            var e = c[d], f = new self[e.type](e.array);
            b.addAttribute(d, new THREE.BufferAttribute(f, e.itemSize))
        }
        var g = a.offsets;
        void 0 !== g && (b.offsets = JSON.parse(JSON.stringify(g)));
        var h = a.boundingSphere;
        if (void 0 !== h) {
            var i = new THREE.Vector3;
            void 0 !== h.center && i.fromArray(h.center), b.boundingSphere = new THREE.Sphere(i, h.radius)
        }
        return b
    }
},THREE.MaterialLoader = function (a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
},THREE.MaterialLoader.prototype = {
    constructor: THREE.MaterialLoader, load: function (a, b, c, d) {
        var e = this, f = new THREE.XHRLoader;
        f.setCrossOrigin(this.crossOrigin), f.load(a, function (a) {
            b(e.parse(JSON.parse(a)))
        }, c, d)
    }, setCrossOrigin: function (a) {
        this.crossOrigin = a
    }, parse: function (a) {
        var b = new THREE[a.type];
        if (void 0 !== a.color && b.color.setHex(a.color), void 0 !== a.ambient && b.ambient.setHex(a.ambient), void 0 !== a.emissive && b.emissive.setHex(a.emissive), void 0 !== a.specular && b.specular.setHex(a.specular), void 0 !== a.shininess && (b.shininess = a.shininess), void 0 !== a.uniforms && (b.uniforms = a.uniforms), void 0 !== a.vertexShader && (b.vertexShader = a.vertexShader), void 0 !== a.fragmentShader && (b.fragmentShader = a.fragmentShader), void 0 !== a.vertexColors && (b.vertexColors = a.vertexColors), void 0 !== a.shading && (b.shading = a.shading), void 0 !== a.blending && (b.blending = a.blending), void 0 !== a.side && (b.side = a.side), void 0 !== a.opacity && (b.opacity = a.opacity), void 0 !== a.transparent && (b.transparent = a.transparent), void 0 !== a.wireframe && (b.wireframe = a.wireframe), void 0 !== a.materials)for (var c = 0, d = a.materials.length; d > c; c++)b.materials.push(this.parse(a.materials[c]));
        return b
    }
},THREE.ObjectLoader = function (a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
},THREE.ObjectLoader.prototype = {
    constructor: THREE.ObjectLoader, load: function (a, b, c, d) {
        var e = this, f = new THREE.XHRLoader(e.manager);
        f.setCrossOrigin(this.crossOrigin), f.load(a, function (a) {
            b(e.parse(JSON.parse(a)))
        }, c, d)
    }, setCrossOrigin: function (a) {
        this.crossOrigin = a
    }, parse: function (a) {
        var b = this.parseGeometries(a.geometries), c = this.parseMaterials(a.materials), d = this.parseObject(a.object, b, c);
        return d
    }, parseGeometries: function (a) {
        var b = {};
        if (void 0 !== a)for (var c = new THREE.JSONLoader, d = new THREE.BufferGeometryLoader, e = 0, f = a.length; f > e; e++) {
            var g, h = a[e];
            switch (h.type) {
                case"PlaneGeometry":
                    g = new THREE.PlaneGeometry(h.width, h.height, h.widthSegments, h.heightSegments);
                    break;
                case"BoxGeometry":
                case"CubeGeometry":
                    g = new THREE.BoxGeometry(h.width, h.height, h.depth, h.widthSegments, h.heightSegments, h.depthSegments);
                    break;
                case"CircleGeometry":
                    g = new THREE.CircleGeometry(h.radius, h.segments);
                    break;
                case"CylinderGeometry":
                    g = new THREE.CylinderGeometry(h.radiusTop, h.radiusBottom, h.height, h.radialSegments, h.heightSegments, h.openEnded);
                    break;
                case"SphereGeometry":
                    g = new THREE.SphereGeometry(h.radius, h.widthSegments, h.heightSegments, h.phiStart, h.phiLength, h.thetaStart, h.thetaLength);
                    break;
                case"IcosahedronGeometry":
                    g = new THREE.IcosahedronGeometry(h.radius, h.detail);
                    break;
                case"TorusGeometry":
                    g = new THREE.TorusGeometry(h.radius, h.tube, h.radialSegments, h.tubularSegments, h.arc);
                    break;
                case"TorusKnotGeometry":
                    g = new THREE.TorusKnotGeometry(h.radius, h.tube, h.radialSegments, h.tubularSegments, h.p, h.q, h.heightScale);
                    break;
                case"BufferGeometry":
                    g = d.parse(h.data);
                    break;
                case"Geometry":
                    g = c.parse(h.data).geometry
            }
            g.uuid = h.uuid, void 0 !== h.name && (g.name = h.name), b[h.uuid] = g
        }
        return b
    }, parseMaterials: function (a) {
        var b = {};
        if (void 0 !== a)for (var c = new THREE.MaterialLoader, d = 0, e = a.length; e > d; d++) {
            var f = a[d], g = c.parse(f);
            g.uuid = f.uuid, void 0 !== f.name && (g.name = f.name), b[f.uuid] = g
        }
        return b
    }, parseObject: function () {
        var a = new THREE.Matrix4;
        return function (b, c, d) {
            var e;
            switch (b.type) {
                case"Scene":
                    e = new THREE.Scene;
                    break;
                case"PerspectiveCamera":
                    e = new THREE.PerspectiveCamera(b.fov, b.aspect, b.near, b.far);
                    break;
                case"OrthographicCamera":
                    e = new THREE.OrthographicCamera(b.left, b.right, b.top, b.bottom, b.near, b.far);
                    break;
                case"AmbientLight":
                    e = new THREE.AmbientLight(b.color);
                    break;
                case"DirectionalLight":
                    e = new THREE.DirectionalLight(b.color, b.intensity);
                    break;
                case"PointLight":
                    e = new THREE.PointLight(b.color, b.intensity, b.distance);
                    break;
                case"SpotLight":
                    e = new THREE.SpotLight(b.color, b.intensity, b.distance, b.angle, b.exponent);
                    break;
                case"HemisphereLight":
                    e = new THREE.HemisphereLight(b.color, b.groundColor, b.intensity);
                    break;
                case"Mesh":
                    var f = c[b.geometry], g = d[b.material];
                    void 0 === f && console.warn("THREE.ObjectLoader: Undefined geometry", b.geometry), void 0 === g && console.warn("THREE.ObjectLoader: Undefined material", b.material), e = new THREE.Mesh(f, g);
                    break;
                case"Line":
                    var f = c[b.geometry], g = d[b.material];
                    void 0 === f && console.warn("THREE.ObjectLoader: Undefined geometry", b.geometry), void 0 === g && console.warn("THREE.ObjectLoader: Undefined material", b.material), e = new THREE.Line(f, g);
                    break;
                case"Sprite":
                    var g = d[b.material];
                    void 0 === g && console.warn("THREE.ObjectLoader: Undefined material", b.material), e = new THREE.Sprite(g);
                    break;
                case"Group":
                    e = new THREE.Group;
                    break;
                default:
                    e = new THREE.Object3D
            }
            if (e.uuid = b.uuid, void 0 !== b.name && (e.name = b.name), void 0 !== b.matrix ? (a.fromArray(b.matrix), a.decompose(e.position, e.quaternion, e.scale)) : (void 0 !== b.position && e.position.fromArray(b.position), void 0 !== b.rotation && e.rotation.fromArray(b.rotation), void 0 !== b.scale && e.scale.fromArray(b.scale)), void 0 !== b.visible && (e.visible = b.visible), void 0 !== b.userData && (e.userData = b.userData), void 0 !== b.children)for (var h in b.children)e.add(this.parseObject(b.children[h], c, d));
            return e
        }
    }()
},THREE.TextureLoader = function (a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
},THREE.TextureLoader.prototype = {
    constructor: THREE.TextureLoader, load: function (a, b, c, d) {
        var e = this, f = new THREE.ImageLoader(e.manager);
        f.setCrossOrigin(this.crossOrigin), f.load(a, function (a) {
            var c = new THREE.Texture(a);
            c.needsUpdate = !0, void 0 !== b && b(c)
        }, c, d)
    }, setCrossOrigin: function (a) {
        this.crossOrigin = a
    }
},THREE.CompressedTextureLoader = function () {
    this._parser = null
},THREE.CompressedTextureLoader.prototype = {
    constructor: THREE.CompressedTextureLoader, load: function (a, b) {
        var c = this, d = [], e = new THREE.CompressedTexture;
        e.image = d;
        var f = new THREE.XHRLoader;
        if (f.setResponseType("arraybuffer"), a instanceof Array)for (var g = 0, h = function (h) {
            f.load(a[h], function (a) {
                var f = c._parser(a, !0);
                d[h] = {
                    width: f.width,
                    height: f.height,
                    format: f.format,
                    mipmaps: f.mipmaps
                }, g += 1, 6 === g && (1 == f.mipmapCount && (e.minFilter = THREE.LinearFilter), e.format = f.format, e.needsUpdate = !0, b && b(e))
            })
        }, i = 0, j = a.length; j > i; ++i)h(i); else f.load(a, function (a) {
            var f = c._parser(a, !0);
            if (f.isCubemap)for (var g = f.mipmaps.length / f.mipmapCount, h = 0; g > h; h++) {
                d[h] = {mipmaps: []};
                for (var i = 0; i < f.mipmapCount; i++)d[h].mipmaps.push(f.mipmaps[h * f.mipmapCount + i]), d[h].format = f.format, d[h].width = f.width, d[h].height = f.height
            } else e.image.width = f.width, e.image.height = f.height, e.mipmaps = f.mipmaps;
            1 === f.mipmapCount && (e.minFilter = THREE.LinearFilter), e.format = f.format, e.needsUpdate = !0, b && b(e)
        });
        return e
    }
},THREE.Material = function () {
    Object.defineProperty(this, "id", {value: THREE.MaterialIdCount++}), this.uuid = THREE.Math.generateUUID(), this.name = "", this.type = "Material", this.side = THREE.FrontSide, this.opacity = 1, this.transparent = !1, this.blending = THREE.NormalBlending, this.blendSrc = THREE.SrcAlphaFactor, this.blendDst = THREE.OneMinusSrcAlphaFactor, this.blendEquation = THREE.AddEquation, this.depthTest = !0, this.depthWrite = !0, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.alphaTest = 0, this.overdraw = 0, this.visible = !0, this.needsUpdate = !0
},THREE.Material.prototype = {
    constructor: THREE.Material, setValues: function (a) {
        if (void 0 !== a)for (var b in a) {
            var c = a[b];
            if (void 0 !== c) {
                if (b in this) {
                    var d = this[b];
                    d instanceof THREE.Color ? d.set(c) : d instanceof THREE.Vector3 && c instanceof THREE.Vector3 ? d.copy(c) : this[b] = "overdraw" == b ? Number(c) : c
                }
            } else console.warn("THREE.Material: '" + b + "' parameter is undefined.")
        }
    }, toJSON: function () {
        var a = {
            metadata: {version: 4.2, type: "material", generator: "MaterialExporter"},
            uuid: this.uuid,
            type: this.type
        };
        return "" !== this.name && (a.name = this.name), this instanceof THREE.MeshBasicMaterial ? (a.color = this.color.getHex(), this.vertexColors !== THREE.NoColors && (a.vertexColors = this.vertexColors), this.blending !== THREE.NormalBlending && (a.blending = this.blending), this.side !== THREE.FrontSide && (a.side = this.side)) : this instanceof THREE.MeshLambertMaterial ? (a.color = this.color.getHex(), a.ambient = this.ambient.getHex(), a.emissive = this.emissive.getHex(), this.vertexColors !== THREE.NoColors && (a.vertexColors = this.vertexColors), this.blending !== THREE.NormalBlending && (a.blending = this.blending), this.side !== THREE.FrontSide && (a.side = this.side)) : this instanceof THREE.MeshPhongMaterial ? (a.color = this.color.getHex(), a.ambient = this.ambient.getHex(), a.emissive = this.emissive.getHex(), a.specular = this.specular.getHex(), a.shininess = this.shininess, this.vertexColors !== THREE.NoColors && (a.vertexColors = this.vertexColors), this.blending !== THREE.NormalBlending && (a.blending = this.blending), this.side !== THREE.FrontSide && (a.side = this.side)) : this instanceof THREE.MeshNormalMaterial ? (this.shading !== THREE.FlatShading && (a.shading = this.shading), this.blending !== THREE.NormalBlending && (a.blending = this.blending), this.side !== THREE.FrontSide && (a.side = this.side)) : this instanceof THREE.MeshDepthMaterial ? (this.blending !== THREE.NormalBlending && (a.blending = this.blending), this.side !== THREE.FrontSide && (a.side = this.side)) : this instanceof THREE.ShaderMaterial ? (a.uniforms = this.uniforms, a.vertexShader = this.vertexShader, a.fragmentShader = this.fragmentShader) : this instanceof THREE.SpriteMaterial && (a.color = this.color.getHex()), this.opacity < 1 && (a.opacity = this.opacity), this.transparent !== !1 && (a.transparent = this.transparent), this.wireframe !== !1 && (a.wireframe = this.wireframe), a
    }, clone: function (a) {
        return void 0 === a && (a = new THREE.Material), a.name = this.name, a.side = this.side, a.opacity = this.opacity, a.transparent = this.transparent, a.blending = this.blending, a.blendSrc = this.blendSrc, a.blendDst = this.blendDst, a.blendEquation = this.blendEquation, a.depthTest = this.depthTest, a.depthWrite = this.depthWrite, a.polygonOffset = this.polygonOffset, a.polygonOffsetFactor = this.polygonOffsetFactor, a.polygonOffsetUnits = this.polygonOffsetUnits, a.alphaTest = this.alphaTest, a.overdraw = this.overdraw, a.visible = this.visible, a
    }, dispose: function () {
        this.dispatchEvent({type: "dispose"})
    }
},THREE.EventDispatcher.prototype.apply(THREE.Material.prototype),THREE.MaterialIdCount = 0,THREE.LineBasicMaterial = function (a) {
    THREE.Material.call(this), this.type = "LineBasicMaterial", this.color = new THREE.Color(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.vertexColors = THREE.NoColors, this.fog = !0, this.setValues(a)
},THREE.LineBasicMaterial.prototype = Object.create(THREE.Material.prototype),THREE.LineBasicMaterial.prototype.clone = function () {
    var a = new THREE.LineBasicMaterial;
    return THREE.Material.prototype.clone.call(this, a), a.color.copy(this.color), a.linewidth = this.linewidth, a.linecap = this.linecap, a.linejoin = this.linejoin, a.vertexColors = this.vertexColors, a.fog = this.fog, a
},THREE.LineDashedMaterial = function (a) {
    THREE.Material.call(this), this.type = "LineDashedMaterial", this.color = new THREE.Color(16777215), this.linewidth = 1, this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.vertexColors = !1, this.fog = !0, this.setValues(a)
},THREE.LineDashedMaterial.prototype = Object.create(THREE.Material.prototype),THREE.LineDashedMaterial.prototype.clone = function () {
    var a = new THREE.LineDashedMaterial;
    return THREE.Material.prototype.clone.call(this, a), a.color.copy(this.color), a.linewidth = this.linewidth, a.scale = this.scale, a.dashSize = this.dashSize, a.gapSize = this.gapSize, a.vertexColors = this.vertexColors, a.fog = this.fog, a
},THREE.MeshBasicMaterial = function (a) {
    THREE.Material.call(this), this.type = "MeshBasicMaterial", this.color = new THREE.Color(16777215), this.map = null, this.lightMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = THREE.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = THREE.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = THREE.NoColors, this.skinning = !1, this.morphTargets = !1, this.setValues(a)
},THREE.MeshBasicMaterial.prototype = Object.create(THREE.Material.prototype),THREE.MeshBasicMaterial.prototype.clone = function () {
    var a = new THREE.MeshBasicMaterial;
    return THREE.Material.prototype.clone.call(this, a), a.color.copy(this.color), a.map = this.map, a.lightMap = this.lightMap, a.specularMap = this.specularMap, a.alphaMap = this.alphaMap, a.envMap = this.envMap, a.combine = this.combine, a.reflectivity = this.reflectivity, a.refractionRatio = this.refractionRatio, a.fog = this.fog, a.shading = this.shading, a.wireframe = this.wireframe, a.wireframeLinewidth = this.wireframeLinewidth, a.wireframeLinecap = this.wireframeLinecap, a.wireframeLinejoin = this.wireframeLinejoin, a.vertexColors = this.vertexColors, a.skinning = this.skinning, a.morphTargets = this.morphTargets, a
},THREE.MeshLambertMaterial = function (a) {
    THREE.Material.call(this), this.type = "MeshLambertMaterial", this.color = new THREE.Color(16777215), this.ambient = new THREE.Color(16777215), this.emissive = new THREE.Color(0), this.wrapAround = !1, this.wrapRGB = new THREE.Vector3(1, 1, 1), this.map = null, this.lightMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = THREE.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = THREE.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = THREE.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(a)
},THREE.MeshLambertMaterial.prototype = Object.create(THREE.Material.prototype),THREE.MeshLambertMaterial.prototype.clone = function () {
    var a = new THREE.MeshLambertMaterial;
    return THREE.Material.prototype.clone.call(this, a), a.color.copy(this.color), a.ambient.copy(this.ambient), a.emissive.copy(this.emissive), a.wrapAround = this.wrapAround, a.wrapRGB.copy(this.wrapRGB), a.map = this.map, a.lightMap = this.lightMap, a.specularMap = this.specularMap, a.alphaMap = this.alphaMap, a.envMap = this.envMap, a.combine = this.combine, a.reflectivity = this.reflectivity, a.refractionRatio = this.refractionRatio, a.fog = this.fog, a.shading = this.shading, a.wireframe = this.wireframe, a.wireframeLinewidth = this.wireframeLinewidth, a.wireframeLinecap = this.wireframeLinecap, a.wireframeLinejoin = this.wireframeLinejoin, a.vertexColors = this.vertexColors, a.skinning = this.skinning, a.morphTargets = this.morphTargets, a.morphNormals = this.morphNormals, a
},THREE.MeshPhongMaterial = function (a) {
    THREE.Material.call(this), this.type = "MeshPhongMaterial", this.color = new THREE.Color(16777215), this.ambient = new THREE.Color(16777215), this.emissive = new THREE.Color(0), this.specular = new THREE.Color(1118481), this.shininess = 30, this.metal = !1, this.wrapAround = !1, this.wrapRGB = new THREE.Vector3(1, 1, 1), this.map = null, this.lightMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new THREE.Vector2(1, 1), this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = THREE.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = THREE.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = THREE.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(a)
},THREE.MeshPhongMaterial.prototype = Object.create(THREE.Material.prototype),THREE.MeshPhongMaterial.prototype.clone = function () {
    var a = new THREE.MeshPhongMaterial;
    return THREE.Material.prototype.clone.call(this, a), a.color.copy(this.color), a.ambient.copy(this.ambient), a.emissive.copy(this.emissive), a.specular.copy(this.specular), a.shininess = this.shininess, a.metal = this.metal, a.wrapAround = this.wrapAround, a.wrapRGB.copy(this.wrapRGB), a.map = this.map, a.lightMap = this.lightMap, a.bumpMap = this.bumpMap, a.bumpScale = this.bumpScale, a.normalMap = this.normalMap, a.normalScale.copy(this.normalScale), a.specularMap = this.specularMap, a.alphaMap = this.alphaMap, a.envMap = this.envMap, a.combine = this.combine, a.reflectivity = this.reflectivity, a.refractionRatio = this.refractionRatio, a.fog = this.fog, a.shading = this.shading, a.wireframe = this.wireframe, a.wireframeLinewidth = this.wireframeLinewidth, a.wireframeLinecap = this.wireframeLinecap, a.wireframeLinejoin = this.wireframeLinejoin, a.vertexColors = this.vertexColors, a.skinning = this.skinning, a.morphTargets = this.morphTargets, a.morphNormals = this.morphNormals, a
},THREE.MeshDepthMaterial = function (a) {
    THREE.Material.call(this), this.type = "MeshDepthMaterial", this.morphTargets = !1, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(a)
},THREE.MeshDepthMaterial.prototype = Object.create(THREE.Material.prototype),THREE.MeshDepthMaterial.prototype.clone = function () {
    var a = new THREE.MeshDepthMaterial;
    return THREE.Material.prototype.clone.call(this, a), a.wireframe = this.wireframe, a.wireframeLinewidth = this.wireframeLinewidth, a
},THREE.MeshNormalMaterial = function (a) {
    THREE.Material.call(this, a), this.type = "MeshNormalMaterial", this.shading = THREE.FlatShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.morphTargets = !1, this.setValues(a)
},THREE.MeshNormalMaterial.prototype = Object.create(THREE.Material.prototype),THREE.MeshNormalMaterial.prototype.clone = function () {
    var a = new THREE.MeshNormalMaterial;
    return THREE.Material.prototype.clone.call(this, a), a.shading = this.shading, a.wireframe = this.wireframe, a.wireframeLinewidth = this.wireframeLinewidth, a
},THREE.MeshFaceMaterial = function (a) {
    this.uuid = THREE.Math.generateUUID(), this.type = "MeshFaceMaterial", this.materials = a instanceof Array ? a : []
},THREE.MeshFaceMaterial.prototype = {
    constructor: THREE.MeshFaceMaterial, toJSON: function () {
        for (var a = {
            metadata: {version: 4.2, type: "material", generator: "MaterialExporter"},
            uuid: this.uuid,
            type: this.type,
            materials: []
        }, b = 0, c = this.materials.length; c > b; b++)a.materials.push(this.materials[b].toJSON());
        return a
    }, clone: function () {
        for (var a = new THREE.MeshFaceMaterial, b = 0; b < this.materials.length; b++)a.materials.push(this.materials[b].clone());
        return a
    }
},THREE.PointCloudMaterial = function (a) {
    THREE.Material.call(this), this.type = "PointCloudMaterial", this.color = new THREE.Color(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.vertexColors = THREE.NoColors, this.fog = !0, this.setValues(a)
},THREE.PointCloudMaterial.prototype = Object.create(THREE.Material.prototype),THREE.PointCloudMaterial.prototype.clone = function () {
    var a = new THREE.PointCloudMaterial;
    return THREE.Material.prototype.clone.call(this, a), a.color.copy(this.color), a.map = this.map, a.size = this.size, a.sizeAttenuation = this.sizeAttenuation, a.vertexColors = this.vertexColors, a.fog = this.fog, a
},THREE.ParticleBasicMaterial = function (a) {
    return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointCloudMaterial."), new THREE.PointCloudMaterial(a)
},THREE.ParticleSystemMaterial = function (a) {
    return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointCloudMaterial."), new THREE.PointCloudMaterial(a)
},THREE.ShaderMaterial = function (a) {
    THREE.Material.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.attributes = null, this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.shading = THREE.SmoothShading, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.vertexColors = THREE.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0]
    }, this.index0AttributeName = void 0, this.setValues(a)
},THREE.ShaderMaterial.prototype = Object.create(THREE.Material.prototype),THREE.ShaderMaterial.prototype.clone = function () {
    var a = new THREE.ShaderMaterial;
    return THREE.Material.prototype.clone.call(this, a), a.fragmentShader = this.fragmentShader, a.vertexShader = this.vertexShader, a.uniforms = THREE.UniformsUtils.clone(this.uniforms), a.attributes = this.attributes, a.defines = this.defines, a.shading = this.shading, a.wireframe = this.wireframe, a.wireframeLinewidth = this.wireframeLinewidth, a.fog = this.fog, a.lights = this.lights, a.vertexColors = this.vertexColors, a.skinning = this.skinning, a.morphTargets = this.morphTargets, a.morphNormals = this.morphNormals, a
},THREE.RawShaderMaterial = function (a) {
    THREE.ShaderMaterial.call(this, a), this.type = "RawShaderMaterial"
},THREE.RawShaderMaterial.prototype = Object.create(THREE.ShaderMaterial.prototype),THREE.RawShaderMaterial.prototype.clone = function () {
    var a = new THREE.RawShaderMaterial;
    return THREE.ShaderMaterial.prototype.clone.call(this, a), a
},THREE.SpriteMaterial = function (a) {
    THREE.Material.call(this), this.type = "SpriteMaterial", this.color = new THREE.Color(16777215), this.map = null, this.rotation = 0, this.fog = !1, this.setValues(a)
},THREE.SpriteMaterial.prototype = Object.create(THREE.Material.prototype),THREE.SpriteMaterial.prototype.clone = function () {
    var a = new THREE.SpriteMaterial;
    return THREE.Material.prototype.clone.call(this, a), a.color.copy(this.color), a.map = this.map, a.rotation = this.rotation, a.fog = this.fog, a
},THREE.Texture = function (a, b, c, d, e, f, g, h, i) {
    Object.defineProperty(this, "id", {value: THREE.TextureIdCount++}), this.uuid = THREE.Math.generateUUID(), this.name = "", this.image = void 0 !== a ? a : THREE.Texture.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== b ? b : THREE.Texture.DEFAULT_MAPPING, this.wrapS = void 0 !== c ? c : THREE.ClampToEdgeWrapping, this.wrapT = void 0 !== d ? d : THREE.ClampToEdgeWrapping, this.magFilter = void 0 !== e ? e : THREE.LinearFilter, this.minFilter = void 0 !== f ? f : THREE.LinearMipMapLinearFilter, this.anisotropy = void 0 !== i ? i : 1, this.format = void 0 !== g ? g : THREE.RGBAFormat, this.type = void 0 !== h ? h : THREE.UnsignedByteType, this.offset = new THREE.Vector2(0, 0), this.repeat = new THREE.Vector2(1, 1), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this._needsUpdate = !1, this.onUpdate = null
},THREE.Texture.DEFAULT_IMAGE = void 0,THREE.Texture.DEFAULT_MAPPING = new THREE.UVMapping,THREE.Texture.prototype = {
    constructor: THREE.Texture,
    get needsUpdate() {
        return this._needsUpdate
    },
    set needsUpdate(a) {
        a === !0 && this.update(), this._needsUpdate = a
    },
    clone: function (a) {
        return void 0 === a && (a = new THREE.Texture), a.image = this.image, a.mipmaps = this.mipmaps.slice(0), a.mapping = this.mapping, a.wrapS = this.wrapS, a.wrapT = this.wrapT, a.magFilter = this.magFilter, a.minFilter = this.minFilter, a.anisotropy = this.anisotropy, a.format = this.format, a.type = this.type, a.offset.copy(this.offset), a.repeat.copy(this.repeat), a.generateMipmaps = this.generateMipmaps, a.premultiplyAlpha = this.premultiplyAlpha, a.flipY = this.flipY, a.unpackAlignment = this.unpackAlignment, a
    },
    update: function () {
        this.dispatchEvent({type: "update"})
    },
    dispose: function () {
        this.dispatchEvent({type: "dispose"})
    }
},THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype),THREE.TextureIdCount = 0,THREE.CubeTexture = function (a, b, c, d, e, f, g, h, i) {
    THREE.Texture.call(this, a, b, c, d, e, f, g, h, i), this.images = a
},THREE.CubeTexture.prototype = Object.create(THREE.Texture.prototype),THREE.CubeTexture.clone = function (a) {
    return void 0 === a && (a = new THREE.CubeTexture), THREE.Texture.prototype.clone.call(this, a), a.images = this.images, a
},THREE.CompressedTexture = function (a, b, c, d, e, f, g, h, i, j, k) {
    THREE.Texture.call(this, null, f, g, h, i, j, d, e, k), this.image = {
        width: b,
        height: c
    }, this.mipmaps = a, this.flipY = !1, this.generateMipmaps = !1
},THREE.CompressedTexture.prototype = Object.create(THREE.Texture.prototype),THREE.CompressedTexture.prototype.clone = function () {
    var a = new THREE.CompressedTexture;
    return THREE.Texture.prototype.clone.call(this, a), a
},THREE.DataTexture = function (a, b, c, d, e, f, g, h, i, j, k) {
    THREE.Texture.call(this, null, f, g, h, i, j, d, e, k), this.image = {data: a, width: b, height: c}
},THREE.DataTexture.prototype = Object.create(THREE.Texture.prototype),THREE.DataTexture.prototype.clone = function () {
    var a = new THREE.DataTexture;
    return THREE.Texture.prototype.clone.call(this, a), a
},THREE.VideoTexture = function (a, b, c, d, e, f, g, h, i) {
    THREE.Texture.call(this, a, b, c, d, e, f, g, h, i), this.generateMipmaps = !1;
    var j = this, k = function () {
        requestAnimationFrame(k), a.readyState === a.HAVE_ENOUGH_DATA && (j.needsUpdate = !0)
    };
    k()
},THREE.VideoTexture.prototype = Object.create(THREE.Texture.prototype),THREE.Group = function () {
    THREE.Object3D.call(this), this.type = "Group"
},THREE.Group.prototype = Object.create(THREE.Object3D.prototype),THREE.PointCloud = function (a, b) {
    THREE.Object3D.call(this), this.type = "PointCloud", this.geometry = void 0 !== a ? a : new THREE.Geometry, this.material = void 0 !== b ? b : new THREE.PointCloudMaterial({color: 16777215 * Math.random()}), this.sortParticles = !1
},THREE.PointCloud.prototype = Object.create(THREE.Object3D.prototype),THREE.PointCloud.prototype.raycast = function () {
    var a = new THREE.Matrix4, b = new THREE.Ray;
    return function (c, d) {
        var e = this, f = e.geometry, g = c.params.PointCloud.threshold;
        if (a.getInverse(this.matrixWorld), b.copy(c.ray).applyMatrix4(a), null === f.boundingBox || b.isIntersectionBox(f.boundingBox) !== !1) {
            var h = g / ((this.scale.x + this.scale.y + this.scale.z) / 3), i = new THREE.Vector3, j = function (a, f) {
                var g = b.distanceToPoint(a);
                if (h > g) {
                    var i = b.closestPointToPoint(a);
                    i.applyMatrix4(e.matrixWorld);
                    var j = c.ray.origin.distanceTo(i);
                    d.push({distance: j, distanceToRay: g, point: i.clone(), index: f, face: null, object: e})
                }
            };
            if (f instanceof THREE.BufferGeometry) {
                var k = f.attributes, l = k.position.array;
                if (void 0 !== k.index) {
                    var m = k.index.array, n = f.offsets;
                    if (0 === n.length) {
                        var o = {start: 0, count: m.length, index: 0};
                        n = [o]
                    }
                    for (var p = 0, q = n.length; q > p; ++p)for (var r = n[p].start, s = n[p].count, t = n[p].index, u = r, v = r + s; v > u; u++) {
                        var w = t + m[u];
                        i.fromArray(l, 3 * w), j(i, w)
                    }
                } else for (var x = l.length / 3, u = 0; x > u; u++)i.set(l[3 * u], l[3 * u + 1], l[3 * u + 2]), j(i, u)
            } else for (var y = this.geometry.vertices, u = 0; u < y.length; u++)j(y[u], u)
        }
    }
}(),THREE.PointCloud.prototype.clone = function (a) {
    return void 0 === a && (a = new THREE.PointCloud(this.geometry, this.material)), a.sortParticles = this.sortParticles, THREE.Object3D.prototype.clone.call(this, a), a
},THREE.ParticleSystem = function (a, b) {
    return console.warn("THREE.ParticleSystem has been renamed to THREE.PointCloud."), new THREE.PointCloud(a, b)
},THREE.Line = function (a, b, c) {
    THREE.Object3D.call(this), this.type = "Line", this.geometry = void 0 !== a ? a : new THREE.Geometry, this.material = void 0 !== b ? b : new THREE.LineBasicMaterial({color: 16777215 * Math.random()}), this.mode = void 0 !== c ? c : THREE.LineStrip
},THREE.LineStrip = 0,THREE.LinePieces = 1,THREE.Line.prototype = Object.create(THREE.Object3D.prototype),THREE.Line.prototype.raycast = function () {
    var a = new THREE.Matrix4, b = new THREE.Ray, c = new THREE.Sphere;
    return function (d, e) {
        var f = d.linePrecision, g = f * f, h = this.geometry;
        if (null === h.boundingSphere && h.computeBoundingSphere(), c.copy(h.boundingSphere), c.applyMatrix4(this.matrixWorld), d.ray.isIntersectionSphere(c) !== !1 && (a.getInverse(this.matrixWorld), b.copy(d.ray).applyMatrix4(a), h instanceof THREE.Geometry))for (var i = h.vertices, j = i.length, k = new THREE.Vector3, l = new THREE.Vector3, m = this.mode === THREE.LineStrip ? 1 : 2, n = 0; j - 1 > n; n += m) {
            var o = b.distanceSqToSegment(i[n], i[n + 1], l, k);
            if (!(o > g)) {
                var p = b.origin.distanceTo(l);
                p < d.near || p > d.far || e.push({
                    distance: p,
                    point: k.clone().applyMatrix4(this.matrixWorld),
                    face: null,
                    faceIndex: null,
                    object: this
                })
            }
        }
    }
}(),THREE.Line.prototype.clone = function (a) {
    return void 0 === a && (a = new THREE.Line(this.geometry, this.material, this.mode)), THREE.Object3D.prototype.clone.call(this, a), a
},THREE.Mesh = function (a, b) {
    THREE.Object3D.call(this), this.type = "Mesh", this.geometry = void 0 !== a ? a : new THREE.Geometry, this.material = void 0 !== b ? b : new THREE.MeshBasicMaterial({color: 16777215 * Math.random()}), this.updateMorphTargets()
},THREE.Mesh.prototype = Object.create(THREE.Object3D.prototype),THREE.Mesh.prototype.updateMorphTargets = function () {
    if (void 0 !== this.geometry.morphTargets && this.geometry.morphTargets.length > 0) {
        this.morphTargetBase = -1, this.morphTargetForcedOrder = [], this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (var a = 0, b = this.geometry.morphTargets.length; b > a; a++)this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[a].name] = a
    }
},THREE.Mesh.prototype.getMorphTargetIndexByName = function (a) {
    return void 0 !== this.morphTargetDictionary[a] ? this.morphTargetDictionary[a] : (console.log("THREE.Mesh.getMorphTargetIndexByName: morph target " + a + " does not exist. Returning 0."), 0)
},THREE.Mesh.prototype.raycast = function () {
    var a = new THREE.Matrix4, b = new THREE.Ray, c = new THREE.Sphere, d = new THREE.Vector3, e = new THREE.Vector3, f = new THREE.Vector3;
    return function (g, h) {
        var i = this.geometry;
        if (null === i.boundingSphere && i.computeBoundingSphere(), c.copy(i.boundingSphere), c.applyMatrix4(this.matrixWorld), g.ray.isIntersectionSphere(c) !== !1 && (a.getInverse(this.matrixWorld), b.copy(g.ray).applyMatrix4(a), null === i.boundingBox || b.isIntersectionBox(i.boundingBox) !== !1))if (i instanceof THREE.BufferGeometry) {
            var j = this.material;
            if (void 0 === j)return;
            var k, l, m, n = i.attributes, o = g.precision;
            if (void 0 !== n.index) {
                var p = n.index.array, q = n.position.array, r = i.offsets;
                0 === r.length && (r = [{start: 0, count: p.length, index: 0}]);
                for (var s = 0, t = r.length; t > s; ++s)for (var u = r[s].start, v = r[s].count, w = r[s].index, x = u, y = u + v; y > x; x += 3) {
                    if (k = w + p[x], l = w + p[x + 1], m = w + p[x + 2], d.fromArray(q, 3 * k), e.fromArray(q, 3 * l), f.fromArray(q, 3 * m), j.side === THREE.BackSide)var z = b.intersectTriangle(f, e, d, !0); else var z = b.intersectTriangle(d, e, f, j.side !== THREE.DoubleSide);
                    if (null !== z) {
                        z.applyMatrix4(this.matrixWorld);
                        var A = g.ray.origin.distanceTo(z);
                        o > A || A < g.near || A > g.far || h.push({
                            distance: A,
                            point: z,
                            face: new THREE.Face3(k, l, m, THREE.Triangle.normal(d, e, f)),
                            faceIndex: null,
                            object: this
                        })
                    }
                }
            } else for (var q = n.position.array, x = 0, B = 0, y = q.length; y > x; x += 3, B += 9) {
                if (k = x, l = x + 1, m = x + 2, d.fromArray(q, B), e.fromArray(q, B + 3), f.fromArray(q, B + 6), j.side === THREE.BackSide)var z = b.intersectTriangle(f, e, d, !0); else var z = b.intersectTriangle(d, e, f, j.side !== THREE.DoubleSide);
                if (null !== z) {
                    z.applyMatrix4(this.matrixWorld);
                    var A = g.ray.origin.distanceTo(z);
                    o > A || A < g.near || A > g.far || h.push({
                        distance: A,
                        point: z,
                        face: new THREE.Face3(k, l, m, THREE.Triangle.normal(d, e, f)),
                        faceIndex: null,
                        object: this
                    })
                }
            }
        } else if (i instanceof THREE.Geometry)for (var k, l, m, C = this.material instanceof THREE.MeshFaceMaterial, D = C === !0 ? this.material.materials : null, o = g.precision, E = i.vertices, F = 0, G = i.faces.length; G > F; F++) {
            var H = i.faces[F], j = C === !0 ? D[H.materialIndex] : this.material;
            if (void 0 !== j) {
                if (k = E[H.a], l = E[H.b], m = E[H.c], j.morphTargets === !0) {
                    var I = i.morphTargets, J = this.morphTargetInfluences;
                    d.set(0, 0, 0), e.set(0, 0, 0), f.set(0, 0, 0);
                    for (var K = 0, L = I.length; L > K; K++) {
                        var M = J[K];
                        if (0 !== M) {
                            var N = I[K].vertices;
                            d.x += (N[H.a].x - k.x) * M, d.y += (N[H.a].y - k.y) * M, d.z += (N[H.a].z - k.z) * M, e.x += (N[H.b].x - l.x) * M, e.y += (N[H.b].y - l.y) * M, e.z += (N[H.b].z - l.z) * M, f.x += (N[H.c].x - m.x) * M, f.y += (N[H.c].y - m.y) * M, f.z += (N[H.c].z - m.z) * M
                        }
                    }
                    d.add(k), e.add(l), f.add(m), k = d, l = e, m = f
                }
                if (j.side === THREE.BackSide)var z = b.intersectTriangle(m, l, k, !0); else var z = b.intersectTriangle(k, l, m, j.side !== THREE.DoubleSide);
                if (null !== z) {
                    z.applyMatrix4(this.matrixWorld);
                    var A = g.ray.origin.distanceTo(z);
                    o > A || A < g.near || A > g.far || h.push({
                        distance: A,
                        point: z,
                        face: H,
                        faceIndex: F,
                        object: this
                    })
                }
            }
        }
    }
}(),THREE.Mesh.prototype.clone = function (a, b) {
    return void 0 === a && (a = new THREE.Mesh(this.geometry, this.material)), THREE.Object3D.prototype.clone.call(this, a, b), a
},THREE.Bone = function (a) {
    THREE.Object3D.call(this), this.skin = a
},THREE.Bone.prototype = Object.create(THREE.Object3D.prototype),THREE.Skeleton = function (a, b, c) {
    if (this.useVertexTexture = void 0 !== c ? c : !0, this.identityMatrix = new THREE.Matrix4, a = a || [], this.bones = a.slice(0), this.useVertexTexture) {
        var d;
        d = this.bones.length > 256 ? 64 : this.bones.length > 64 ? 32 : this.bones.length > 16 ? 16 : 8, this.boneTextureWidth = d, this.boneTextureHeight = d, this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4), this.boneTexture = new THREE.DataTexture(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, THREE.RGBAFormat, THREE.FloatType), this.boneTexture.minFilter = THREE.NearestFilter, this.boneTexture.magFilter = THREE.NearestFilter, this.boneTexture.generateMipmaps = !1, this.boneTexture.flipY = !1
    } else this.boneMatrices = new Float32Array(16 * this.bones.length);
    if (void 0 === b)this.calculateInverses(); else if (this.bones.length === b.length)this.boneInverses = b.slice(0); else {
        console.warn("THREE.Skeleton bonInverses is the wrong length."), this.boneInverses = [];
        for (var e = 0, f = this.bones.length; f > e; e++)this.boneInverses.push(new THREE.Matrix4)
    }
},THREE.Skeleton.prototype.calculateInverses = function () {
    this.boneInverses = [];
    for (var a = 0, b = this.bones.length; b > a; a++) {
        var c = new THREE.Matrix4;
        this.bones[a] && c.getInverse(this.bones[a].matrixWorld), this.boneInverses.push(c)
    }
},THREE.Skeleton.prototype.pose = function () {
    for (var a, b = 0, c = this.bones.length; c > b; b++)a = this.bones[b], a && a.matrixWorld.getInverse(this.boneInverses[b]);
    for (var b = 0, c = this.bones.length; c > b; b++)a = this.bones[b], a && (a.parent ? (a.matrix.getInverse(a.parent.matrixWorld), a.matrix.multiply(a.matrixWorld)) : a.matrix.copy(a.matrixWorld), a.matrix.decompose(a.position, a.quaternion, a.scale))
},THREE.Skeleton.prototype.update = function () {
    var a = new THREE.Matrix4;
    return function () {
        for (var b = 0, c = this.bones.length; c > b; b++) {
            var d = this.bones[b] ? this.bones[b].matrixWorld : this.identityMatrix;
            a.multiplyMatrices(d, this.boneInverses[b]), a.flattenToArrayOffset(this.boneMatrices, 16 * b)
        }
        this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
    }
}(),THREE.SkinnedMesh = function (a, b, c) {
    THREE.Mesh.call(this, a, b), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new THREE.Matrix4, this.bindMatrixInverse = new THREE.Matrix4;
    var d = [];
    if (this.geometry && void 0 !== this.geometry.bones) {
        for (var e, f, g, h, i, j = 0, k = this.geometry.bones.length; k > j; ++j)f = this.geometry.bones[j], g = f.pos, h = f.rotq, i = f.scl, e = new THREE.Bone(this), d.push(e), e.name = f.name, e.position.set(g[0], g[1], g[2]), e.quaternion.set(h[0], h[1], h[2], h[3]), void 0 !== i ? e.scale.set(i[0], i[1], i[2]) : e.scale.set(1, 1, 1);
        for (var j = 0, k = this.geometry.bones.length; k > j; ++j)f = this.geometry.bones[j], -1 !== f.parent ? d[f.parent].add(d[j]) : this.add(d[j])
    }
    this.normalizeSkinWeights(), this.updateMatrixWorld(!0), this.bind(new THREE.Skeleton(d, void 0, c))
},THREE.SkinnedMesh.prototype = Object.create(THREE.Mesh.prototype),THREE.SkinnedMesh.prototype.bind = function (a, b) {
    this.skeleton = a, void 0 === b && (this.updateMatrixWorld(!0), b = this.matrixWorld), this.bindMatrix.copy(b), this.bindMatrixInverse.getInverse(b)
},THREE.SkinnedMesh.prototype.pose = function () {
    this.skeleton.pose()
},THREE.SkinnedMesh.prototype.normalizeSkinWeights = function () {
    if (this.geometry instanceof THREE.Geometry)for (var a = 0; a < this.geometry.skinIndices.length; a++) {
        var b = this.geometry.skinWeights[a], c = 1 / b.lengthManhattan();
        1 / 0 !== c ? b.multiplyScalar(c) : b.set(1)
    }
},THREE.SkinnedMesh.prototype.updateMatrixWorld = function () {
    THREE.Mesh.prototype.updateMatrixWorld.call(this, !0), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh unreckognized bindMode: " + this.bindMode)
},THREE.SkinnedMesh.prototype.clone = function (a) {
    return void 0 === a && (a = new THREE.SkinnedMesh(this.geometry, this.material, this.useVertexTexture)), THREE.Mesh.prototype.clone.call(this, a), a
},THREE.MorphAnimMesh = function (a, b) {
    THREE.Mesh.call(this, a, b), this.type = "MorphAnimMesh", this.duration = 1e3, this.mirroredLoop = !1, this.time = 0, this.lastKeyframe = 0, this.currentKeyframe = 0, this.direction = 1, this.directionBackwards = !1, this.setFrameRange(0, this.geometry.morphTargets.length - 1)
},THREE.MorphAnimMesh.prototype = Object.create(THREE.Mesh.prototype),THREE.MorphAnimMesh.prototype.setFrameRange = function (a, b) {
    this.startKeyframe = a, this.endKeyframe = b, this.length = this.endKeyframe - this.startKeyframe + 1
},THREE.MorphAnimMesh.prototype.setDirectionForward = function () {
    this.direction = 1, this.directionBackwards = !1
},THREE.MorphAnimMesh.prototype.setDirectionBackward = function () {
    this.direction = -1, this.directionBackwards = !0
},THREE.MorphAnimMesh.prototype.parseAnimations = function () {
    var a = this.geometry;
    a.animations || (a.animations = {});
    for (var b, c = a.animations, d = /([a-z]+)_?(\d+)/, e = 0, f = a.morphTargets.length; f > e; e++) {
        var g = a.morphTargets[e], h = g.name.match(d);
        if (h && h.length > 1) {
            {
                var i = h[1];
                h[2]
            }
            c[i] || (c[i] = {start: 1 / 0, end: -1 / 0});
            var j = c[i];
            e < j.start && (j.start = e), e > j.end && (j.end = e), b || (b = i)
        }
    }
    a.firstAnimation = b
},THREE.MorphAnimMesh.prototype.setAnimationLabel = function (a, b, c) {
    this.geometry.animations || (this.geometry.animations = {}), this.geometry.animations[a] = {start: b, end: c}
},THREE.MorphAnimMesh.prototype.playAnimation = function (a, b) {
    var c = this.geometry.animations[a];
    c ? (this.setFrameRange(c.start, c.end), this.duration = 1e3 * ((c.end - c.start) / b), this.time = 0) : console.warn("animation[" + a + "] undefined")
},THREE.MorphAnimMesh.prototype.updateAnimation = function (a) {
    var b = this.duration / this.length;
    this.time += this.direction * a, this.mirroredLoop ? (this.time > this.duration || this.time < 0) && (this.direction *= -1, this.time > this.duration && (this.time = this.duration, this.directionBackwards = !0), this.time < 0 && (this.time = 0, this.directionBackwards = !1)) : (this.time = this.time % this.duration, this.time < 0 && (this.time += this.duration));
    var c = this.startKeyframe + THREE.Math.clamp(Math.floor(this.time / b), 0, this.length - 1);
    c !== this.currentKeyframe && (this.morphTargetInfluences[this.lastKeyframe] = 0, this.morphTargetInfluences[this.currentKeyframe] = 1, this.morphTargetInfluences[c] = 0, this.lastKeyframe = this.currentKeyframe, this.currentKeyframe = c);
    var d = this.time % b / b;
    this.directionBackwards && (d = 1 - d), this.morphTargetInfluences[this.currentKeyframe] = d, this.morphTargetInfluences[this.lastKeyframe] = 1 - d
},THREE.MorphAnimMesh.prototype.interpolateTargets = function (a, b, c) {
    for (var d = this.morphTargetInfluences, e = 0, f = d.length; f > e; e++)d[e] = 0;
    a > -1 && (d[a] = 1 - c), b > -1 && (d[b] = c)
},THREE.MorphAnimMesh.prototype.clone = function (a) {
    return void 0 === a && (a = new THREE.MorphAnimMesh(this.geometry, this.material)), a.duration = this.duration, a.mirroredLoop = this.mirroredLoop, a.time = this.time, a.lastKeyframe = this.lastKeyframe, a.currentKeyframe = this.currentKeyframe, a.direction = this.direction, a.directionBackwards = this.directionBackwards, THREE.Mesh.prototype.clone.call(this, a), a
},THREE.LOD = function () {
    THREE.Object3D.call(this), this.objects = []
},THREE.LOD.prototype = Object.create(THREE.Object3D.prototype),THREE.LOD.prototype.addLevel = function (a, b) {
    void 0 === b && (b = 0), b = Math.abs(b);
    for (var c = 0; c < this.objects.length && !(b < this.objects[c].distance); c++);
    this.objects.splice(c, 0, {distance: b, object: a}), this.add(a)
},THREE.LOD.prototype.getObjectForDistance = function (a) {
    for (var b = 1, c = this.objects.length; c > b && !(a < this.objects[b].distance); b++);
    return this.objects[b - 1].object
},THREE.LOD.prototype.raycast = function () {
    var a = new THREE.Vector3;
    return function (b, c) {
        a.setFromMatrixPosition(this.matrixWorld);
        var d = b.ray.origin.distanceTo(a);
        this.getObjectForDistance(d).raycast(b, c)
    }
}(),THREE.LOD.prototype.update = function () {
    var a = new THREE.Vector3, b = new THREE.Vector3;
    return function (c) {
        if (this.objects.length > 1) {
            a.setFromMatrixPosition(c.matrixWorld), b.setFromMatrixPosition(this.matrixWorld);
            var d = a.distanceTo(b);
            this.objects[0].object.visible = !0;
            for (var e = 1, f = this.objects.length; f > e && d >= this.objects[e].distance; e++)this.objects[e - 1].object.visible = !1, this.objects[e].object.visible = !0;
            for (; f > e; e++)this.objects[e].object.visible = !1
        }
    }
}(),THREE.LOD.prototype.clone = function (a) {
    void 0 === a && (a = new THREE.LOD), THREE.Object3D.prototype.clone.call(this, a);
    for (var b = 0, c = this.objects.length; c > b; b++) {
        var d = this.objects[b].object.clone();
        d.visible = 0 === b, a.addLevel(d, this.objects[b].distance)
    }
    return a
},THREE.Sprite = function () {
    var a = new Uint16Array([0, 1, 2, 0, 2, 3]), b = new Float32Array([-.5, -.5, 0, .5, -.5, 0, .5, .5, 0, -.5, .5, 0]), c = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), d = new THREE.BufferGeometry;
    return d.addAttribute("index", new THREE.BufferAttribute(a, 1)), d.addAttribute("position", new THREE.BufferAttribute(b, 3)), d.addAttribute("uv", new THREE.BufferAttribute(c, 2)), function (a) {
        THREE.Object3D.call(this), this.type = "Sprite", this.geometry = d, this.material = void 0 !== a ? a : new THREE.SpriteMaterial
    }
}(),THREE.Sprite.prototype = Object.create(THREE.Object3D.prototype),THREE.Sprite.prototype.raycast = function () {
    var a = new THREE.Vector3;
    return function (b, c) {
        a.setFromMatrixPosition(this.matrixWorld);
        var d = b.ray.distanceToPoint(a);
        d > this.scale.x || c.push({distance: d, point: this.position, face: null, object: this})
    }
}(),THREE.Sprite.prototype.clone = function (a) {
    return void 0 === a && (a = new THREE.Sprite(this.material)), THREE.Object3D.prototype.clone.call(this, a), a
},THREE.Particle = THREE.Sprite,THREE.LensFlare = function (a, b, c, d, e) {
    THREE.Object3D.call(this), this.lensFlares = [], this.positionScreen = new THREE.Vector3, this.customUpdateCallback = void 0, void 0 !== a && this.add(a, b, c, d, e)
},THREE.LensFlare.prototype = Object.create(THREE.Object3D.prototype),THREE.LensFlare.prototype.add = function (a, b, c, d, e, f) {
    void 0 === b && (b = -1), void 0 === c && (c = 0), void 0 === f && (f = 1), void 0 === e && (e = new THREE.Color(16777215)), void 0 === d && (d = THREE.NormalBlending), c = Math.min(c, Math.max(0, c)), this.lensFlares.push({
        texture: a,
        size: b,
        distance: c,
        x: 0,
        y: 0,
        z: 0,
        scale: 1,
        rotation: 1,
        opacity: f,
        color: e,
        blending: d
    })
},THREE.LensFlare.prototype.updateLensFlares = function () {
    var a, b, c = this.lensFlares.length, d = 2 * -this.positionScreen.x, e = 2 * -this.positionScreen.y;
    for (a = 0; c > a; a++)b = this.lensFlares[a], b.x = this.positionScreen.x + d * b.distance, b.y = this.positionScreen.y + e * b.distance, b.wantedRotation = b.x * Math.PI * .25, b.rotation += .25 * (b.wantedRotation - b.rotation)
},THREE.Scene = function () {
    THREE.Object3D.call(this), this.type = "Scene", this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0
},THREE.Scene.prototype = Object.create(THREE.Object3D.prototype),THREE.Scene.prototype.clone = function (a) {
    return void 0 === a && (a = new THREE.Scene), THREE.Object3D.prototype.clone.call(this, a), null !== this.fog && (a.fog = this.fog.clone()), null !== this.overrideMaterial && (a.overrideMaterial = this.overrideMaterial.clone()), a.autoUpdate = this.autoUpdate, a.matrixAutoUpdate = this.matrixAutoUpdate, a
},THREE.Fog = function (a, b, c) {
    this.name = "", this.color = new THREE.Color(a), this.near = void 0 !== b ? b : 1, this.far = void 0 !== c ? c : 1e3
},THREE.Fog.prototype.clone = function () {
    return new THREE.Fog(this.color.getHex(), this.near, this.far)
},THREE.FogExp2 = function (a, b) {
    this.name = "", this.color = new THREE.Color(a), this.density = void 0 !== b ? b : 25e-5
},THREE.FogExp2.prototype.clone = function () {
    return new THREE.FogExp2(this.color.getHex(), this.density)
},THREE.ShaderChunk = {},THREE.ShaderChunk.alphatest_fragment = "#ifdef ALPHATEST\n\n	if ( gl_FragColor.a < ALPHATEST ) discard;\n\n#endif\n",THREE.ShaderChunk.lights_lambert_vertex = "vLightFront = vec3( 0.0 );\n\n#ifdef DOUBLE_SIDED\n\n	vLightBack = vec3( 0.0 );\n\n#endif\n\ntransformedNormal = normalize( transformedNormal );\n\n#if MAX_DIR_LIGHTS > 0\n\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n	vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\n	vec3 dirVector = normalize( lDirection.xyz );\n\n	float dotProduct = dot( transformedNormal, dirVector );\n	vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n	#ifdef DOUBLE_SIDED\n\n		vec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n		#ifdef WRAP_AROUND\n\n			vec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n		#endif\n\n	#endif\n\n	#ifdef WRAP_AROUND\n\n		vec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n		directionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );\n\n		#ifdef DOUBLE_SIDED\n\n			directionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );\n\n		#endif\n\n	#endif\n\n	vLightFront += directionalLightColor[ i ] * directionalLightWeighting;\n\n	#ifdef DOUBLE_SIDED\n\n		vLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;\n\n	#endif\n\n}\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n	for( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n		vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n		vec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n		float lDistance = 1.0;\n		if ( pointLightDistance[ i ] > 0.0 )\n			lDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\n\n		lVector = normalize( lVector );\n		float dotProduct = dot( transformedNormal, lVector );\n\n		vec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n		#ifdef DOUBLE_SIDED\n\n			vec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n			#ifdef WRAP_AROUND\n\n				vec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n			#endif\n\n		#endif\n\n		#ifdef WRAP_AROUND\n\n			vec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n			pointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );\n\n			#ifdef DOUBLE_SIDED\n\n				pointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );\n\n			#endif\n\n		#endif\n\n		vLightFront += pointLightColor[ i ] * pointLightWeighting * lDistance;\n\n		#ifdef DOUBLE_SIDED\n\n			vLightBack += pointLightColor[ i ] * pointLightWeightingBack * lDistance;\n\n		#endif\n\n	}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	for( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n		vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n		vec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n		float spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );\n\n		if ( spotEffect > spotLightAngleCos[ i ] ) {\n\n			spotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n			float lDistance = 1.0;\n			if ( spotLightDistance[ i ] > 0.0 )\n				lDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\n\n			lVector = normalize( lVector );\n\n			float dotProduct = dot( transformedNormal, lVector );\n			vec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n			#ifdef DOUBLE_SIDED\n\n				vec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n				#ifdef WRAP_AROUND\n\n					vec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n				#endif\n\n			#endif\n\n			#ifdef WRAP_AROUND\n\n				vec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n				spotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );\n\n				#ifdef DOUBLE_SIDED\n\n					spotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );\n\n				#endif\n\n			#endif\n\n			vLightFront += spotLightColor[ i ] * spotLightWeighting * lDistance * spotEffect;\n\n			#ifdef DOUBLE_SIDED\n\n				vLightBack += spotLightColor[ i ] * spotLightWeightingBack * lDistance * spotEffect;\n\n			#endif\n\n		}\n\n	}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n		vec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\n		vec3 lVector = normalize( lDirection.xyz );\n\n		float dotProduct = dot( transformedNormal, lVector );\n\n		float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n		float hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;\n\n		vLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n		#ifdef DOUBLE_SIDED\n\n			vLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n\n		#endif\n\n	}\n\n#endif\n\nvLightFront = vLightFront * diffuse + ambient * ambientLightColor + emissive;\n\n#ifdef DOUBLE_SIDED\n\n	vLightBack = vLightBack * diffuse + ambient * ambientLightColor + emissive;\n\n#endif",THREE.ShaderChunk.map_particle_pars_fragment = "#ifdef USE_MAP\n\n	uniform sampler2D map;\n\n#endif",THREE.ShaderChunk.default_vertex = "vec4 mvPosition;\n\n#ifdef USE_SKINNING\n\n	mvPosition = modelViewMatrix * skinned;\n\n#endif\n\n#if !defined( USE_SKINNING ) && defined( USE_MORPHTARGETS )\n\n	mvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n\n#endif\n\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHTARGETS )\n\n	mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;",THREE.ShaderChunk.map_pars_fragment = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n	varying vec2 vUv;\n\n#endif\n\n#ifdef USE_MAP\n\n	uniform sampler2D map;\n\n#endif",THREE.ShaderChunk.skinnormal_vertex = "#ifdef USE_SKINNING\n\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n	#ifdef USE_MORPHNORMALS\n\n	vec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n\n	#else\n\n	vec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n\n	#endif\n\n#endif\n",THREE.ShaderChunk.logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		varying float vFragDepth;\n\n	#endif\n\n	uniform float logDepthBufFC;\n\n#endif",THREE.ShaderChunk.lightmap_pars_vertex = "#ifdef USE_LIGHTMAP\n\n	varying vec2 vUv2;\n\n#endif",THREE.ShaderChunk.lights_phong_fragment = "vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\n\n#ifdef DOUBLE_SIDED\n\n	normal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\n#endif\n\n#ifdef USE_NORMALMAP\n\n	normal = perturbNormal2Arb( -vViewPosition, normal );\n\n#elif defined( USE_BUMPMAP )\n\n	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n	vec3 pointDiffuse = vec3( 0.0 );\n	vec3 pointSpecular = vec3( 0.0 );\n\n	for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n		vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n		vec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n		float lDistance = 1.0;\n		if ( pointLightDistance[ i ] > 0.0 )\n			lDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\n\n		lVector = normalize( lVector );\n\n				// diffuse\n\n		float dotProduct = dot( normal, lVector );\n\n		#ifdef WRAP_AROUND\n\n			float pointDiffuseWeightFull = max( dotProduct, 0.0 );\n			float pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n			vec3 pointDiffuseWeight = mix( vec3( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n\n		#else\n\n			float pointDiffuseWeight = max( dotProduct, 0.0 );\n\n		#endif\n\n		pointDiffuse += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;\n\n				// specular\n\n		vec3 pointHalfVector = normalize( lVector + viewPosition );\n		float pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\n		float pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n\n		float specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n		vec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, pointHalfVector ), 0.0 ), 5.0 );\n		pointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;\n\n	}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	vec3 spotDiffuse = vec3( 0.0 );\n	vec3 spotSpecular = vec3( 0.0 );\n\n	for ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n		vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n		vec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n		float lDistance = 1.0;\n		if ( spotLightDistance[ i ] > 0.0 )\n			lDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\n\n		lVector = normalize( lVector );\n\n		float spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\n\n		if ( spotEffect > spotLightAngleCos[ i ] ) {\n\n			spotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n					// diffuse\n\n			float dotProduct = dot( normal, lVector );\n\n			#ifdef WRAP_AROUND\n\n				float spotDiffuseWeightFull = max( dotProduct, 0.0 );\n				float spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n				vec3 spotDiffuseWeight = mix( vec3( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n\n			#else\n\n				float spotDiffuseWeight = max( dotProduct, 0.0 );\n\n			#endif\n\n			spotDiffuse += diffuse * spotLightColor[ i ] * spotDiffuseWeight * lDistance * spotEffect;\n\n					// specular\n\n			vec3 spotHalfVector = normalize( lVector + viewPosition );\n			float spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\n			float spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n\n			float specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n			vec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, spotHalfVector ), 0.0 ), 5.0 );\n			spotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;\n\n		}\n\n	}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n	vec3 dirDiffuse = vec3( 0.0 );\n	vec3 dirSpecular = vec3( 0.0 );\n\n	for( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n		vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\n		vec3 dirVector = normalize( lDirection.xyz );\n\n				// diffuse\n\n		float dotProduct = dot( normal, dirVector );\n\n		#ifdef WRAP_AROUND\n\n			float dirDiffuseWeightFull = max( dotProduct, 0.0 );\n			float dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n			vec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n\n		#else\n\n			float dirDiffuseWeight = max( dotProduct, 0.0 );\n\n		#endif\n\n		dirDiffuse += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\n\n		// specular\n\n		vec3 dirHalfVector = normalize( dirVector + viewPosition );\n		float dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\n		float dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n\n		/*\n		// fresnel term from skin shader\n		const float F0 = 0.128;\n\n		float base = 1.0 - dot( viewPosition, dirHalfVector );\n		float exponential = pow( base, 5.0 );\n\n		float fresnel = exponential + F0 * ( 1.0 - exponential );\n		*/\n\n		/*\n		// fresnel term from fresnel shader\n		const float mFresnelBias = 0.08;\n		const float mFresnelScale = 0.3;\n		const float mFresnelPower = 5.0;\n\n		float fresnel = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( -viewPosition ), normal ), mFresnelPower );\n		*/\n\n		float specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n		// 		dirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization * fresnel;\n\n		vec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( dirVector, dirHalfVector ), 0.0 ), 5.0 );\n		dirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n\n\n	}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	vec3 hemiDiffuse = vec3( 0.0 );\n	vec3 hemiSpecular = vec3( 0.0 );\n\n	for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n		vec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\n		vec3 lVector = normalize( lDirection.xyz );\n\n		// diffuse\n\n		float dotProduct = dot( normal, lVector );\n		float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n		vec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n		hemiDiffuse += diffuse * hemiColor;\n\n		// specular (sky light)\n\n		vec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\n		float hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\n		float hemiSpecularWeightSky = specularStrength * max( pow( max( hemiDotNormalHalfSky, 0.0 ), shininess ), 0.0 );\n\n		// specular (ground light)\n\n		vec3 lVectorGround = -lVector;\n\n		vec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\n		float hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\n		float hemiSpecularWeightGround = specularStrength * max( pow( max( hemiDotNormalHalfGround, 0.0 ), shininess ), 0.0 );\n\n		float dotProductGround = dot( normal, lVectorGround );\n\n		float specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n		vec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, hemiHalfVectorSky ), 0.0 ), 5.0 );\n		vec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 0.0 ), 5.0 );\n		hemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n\n	}\n\n#endif\n\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n\n#if MAX_DIR_LIGHTS > 0\n\n	totalDiffuse += dirDiffuse;\n	totalSpecular += dirSpecular;\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	totalDiffuse += hemiDiffuse;\n	totalSpecular += hemiSpecular;\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n	totalDiffuse += pointDiffuse;\n	totalSpecular += pointSpecular;\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	totalDiffuse += spotDiffuse;\n	totalSpecular += spotSpecular;\n\n#endif\n\n#ifdef METAL\n\n	gl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient + totalSpecular );\n\n#else\n\n	gl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n\n#endif",THREE.ShaderChunk.fog_pars_fragment = "#ifdef USE_FOG\n\n	uniform vec3 fogColor;\n\n	#ifdef FOG_EXP2\n\n		uniform float fogDensity;\n\n	#else\n\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n\n#endif",THREE.ShaderChunk.morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n\n	vec3 morphedNormal = vec3( 0.0 );\n\n	morphedNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n	morphedNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n	morphedNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n	morphedNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n	morphedNormal += normal;\n\n#endif",THREE.ShaderChunk.envmap_pars_fragment = "#ifdef USE_ENVMAP\n\n	uniform float reflectivity;\n	uniform samplerCube envMap;\n	uniform float flipEnvMap;\n	uniform int combine;\n\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n		uniform bool useRefract;\n		uniform float refractionRatio;\n\n	#else\n\n		varying vec3 vReflect;\n\n	#endif\n\n#endif",THREE.ShaderChunk.logdepthbuf_fragment = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n	gl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif",THREE.ShaderChunk.normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n\n			// Per-Pixel Tangent Space Normal Mapping\n			// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n\n		vec3 S = normalize( q0 * st1.t - q1 * st0.t );\n		vec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n		vec3 N = normalize( surf_norm );\n\n		vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n		mapN.xy = normalScale * mapN.xy;\n		mat3 tsn = mat3( S, T, N );\n		return normalize( tsn * mapN );\n\n	}\n\n#endif\n",THREE.ShaderChunk.lights_phong_pars_vertex = "#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n	varying vec3 vWorldPosition;\n\n#endif\n",THREE.ShaderChunk.lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n\n	varying vec2 vUv2;\n	uniform sampler2D lightMap;\n\n#endif",THREE.ShaderChunk.shadowmap_vertex = "#ifdef USE_SHADOWMAP\n\n	for( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n		vShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\n	}\n\n#endif",THREE.ShaderChunk.lights_phong_vertex = "#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n	vWorldPosition = worldPosition.xyz;\n\n#endif",THREE.ShaderChunk.map_fragment = "#ifdef USE_MAP\n\n	vec4 texelColor = texture2D( map, vUv );\n\n	#ifdef GAMMA_INPUT\n\n		texelColor.xyz *= texelColor.xyz;\n\n	#endif\n\n	gl_FragColor = gl_FragColor * texelColor;\n\n#endif",THREE.ShaderChunk.lightmap_vertex = "#ifdef USE_LIGHTMAP\n\n	vUv2 = uv2;\n\n#endif",THREE.ShaderChunk.map_particle_fragment = "#ifdef USE_MAP\n\n	gl_FragColor = gl_FragColor * texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) );\n\n#endif",THREE.ShaderChunk.color_pars_fragment = "#ifdef USE_COLOR\n\n	varying vec3 vColor;\n\n#endif\n",THREE.ShaderChunk.color_vertex = "#ifdef USE_COLOR\n\n	#ifdef GAMMA_INPUT\n\n		vColor = color * color;\n\n	#else\n\n		vColor = color;\n\n	#endif\n\n#endif",THREE.ShaderChunk.skinning_vertex = "#ifdef USE_SKINNING\n\n	#ifdef USE_MORPHTARGETS\n\n	vec4 skinVertex = bindMatrix * vec4( morphed, 1.0 );\n\n	#else\n\n	vec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\n	#endif\n\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	skinned  = bindMatrixInverse * skinned;\n\n#endif\n",THREE.ShaderChunk.envmap_pars_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n	varying vec3 vReflect;\n\n	uniform float refractionRatio;\n	uniform bool useRefract;\n\n#endif\n",THREE.ShaderChunk.linear_to_gamma_fragment = "#ifdef GAMMA_OUTPUT\n\n	gl_FragColor.xyz = sqrt( gl_FragColor.xyz );\n\n#endif",THREE.ShaderChunk.color_pars_vertex = "#ifdef USE_COLOR\n\n	varying vec3 vColor;\n\n#endif",THREE.ShaderChunk.lights_lambert_pars_vertex = "uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 emissive;\n\nuniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n	uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n	uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n	uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n	uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n	uniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#ifdef WRAP_AROUND\n\n	uniform vec3 wrapRGB;\n\n#endif\n",THREE.ShaderChunk.map_pars_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n	varying vec2 vUv;\n	uniform vec4 offsetRepeat;\n\n#endif\n",THREE.ShaderChunk.envmap_fragment = "#ifdef USE_ENVMAP\n\n	vec3 reflectVec;\n\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n		vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n		// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\n		// Transforming Normal Vectors with the Inverse Transformation\n\n		vec3 worldNormal = normalize( vec3( vec4( normal, 0.0 ) * viewMatrix ) );\n\n		if ( useRefract ) {\n\n			reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n		} else { \n\n			reflectVec = reflect( cameraToVertex, worldNormal );\n\n		}\n\n	#else\n\n		reflectVec = vReflect;\n\n	#endif\n\n	#ifdef DOUBLE_SIDED\n\n		float flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n		vec4 cubeColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n	#else\n\n		vec4 cubeColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n	#endif\n\n	#ifdef GAMMA_INPUT\n\n		cubeColor.xyz *= cubeColor.xyz;\n\n	#endif\n\n	if ( combine == 1 ) {\n\n		gl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularStrength * reflectivity );\n\n	} else if ( combine == 2 ) {\n\n		gl_FragColor.xyz += cubeColor.xyz * specularStrength * reflectivity;\n\n	} else {\n\n		gl_FragColor.xyz = mix( gl_FragColor.xyz, gl_FragColor.xyz * cubeColor.xyz, specularStrength * reflectivity );\n\n	}\n\n#endif",THREE.ShaderChunk.specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n\n	uniform sampler2D specularMap;\n\n#endif",THREE.ShaderChunk.logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n\n	gl_Position.z = log2(max(1e-6, gl_Position.w + 1.0)) * logDepthBufFC;\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		vFragDepth = 1.0 + gl_Position.w;\n\n#else\n\n		gl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n	#endif\n\n#endif",THREE.ShaderChunk.morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n\n	#ifndef USE_MORPHNORMALS\n\n	uniform float morphTargetInfluences[ 8 ];\n\n	#else\n\n	uniform float morphTargetInfluences[ 4 ];\n\n	#endif\n\n#endif",THREE.ShaderChunk.specularmap_fragment = "float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n\n#else\n\n	specularStrength = 1.0;\n\n#endif",THREE.ShaderChunk.fog_fragment = "#ifdef USE_FOG\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		float depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n	#else\n\n		float depth = gl_FragCoord.z / gl_FragCoord.w;\n\n	#endif\n\n	#ifdef FOG_EXP2\n\n		const float LOG2 = 1.442695;\n		float fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n		fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n	#else\n\n		float fogFactor = smoothstep( fogNear, fogFar, depth );\n\n	#endif\n	\n	gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n#endif",THREE.ShaderChunk.bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n\n			// Derivative maps - bump mapping unparametrized surfaces by Morten Mikkelsen\n			//	http://mmikkelsen3d.blogspot.sk/2011/07/derivative-maps.html\n\n			// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n	vec2 dHdxy_fwd() {\n\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n		return vec2( dBx, dBy );\n\n	}\n\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n		vec3 vSigmaX = dFdx( surf_pos );\n		vec3 vSigmaY = dFdy( surf_pos );\n		vec3 vN = surf_norm;		// normalized\n\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n\n		float fDet = dot( vSigmaX, R1 );\n\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n\n	}\n\n#endif",THREE.ShaderChunk.defaultnormal_vertex = "vec3 objectNormal;\n\n#ifdef USE_SKINNING\n\n	objectNormal = skinnedNormal.xyz;\n\n#endif\n\n#if !defined( USE_SKINNING ) && defined( USE_MORPHNORMALS )\n\n	objectNormal = morphedNormal;\n\n#endif\n\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHNORMALS )\n\n	objectNormal = normal;\n\n#endif\n\n#ifdef FLIP_SIDED\n\n	objectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;",THREE.ShaderChunk.lights_phong_pars_fragment = "uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n	uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n	uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n	uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\n	uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n	uniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\n	uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n	varying vec3 vWorldPosition;\n\n#endif\n\n#ifdef WRAP_AROUND\n\n	uniform vec3 wrapRGB;\n\n#endif\n\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",THREE.ShaderChunk.skinbase_vertex = "#ifdef USE_SKINNING\n\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif",THREE.ShaderChunk.map_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n	vUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif",THREE.ShaderChunk.lightmap_fragment = "#ifdef USE_LIGHTMAP\n\n	gl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n\n#endif",THREE.ShaderChunk.shadowmap_pars_vertex = "#ifdef USE_SHADOWMAP\n\n	varying vec4 vShadowCoord[ MAX_SHADOWS ];\n	uniform mat4 shadowMatrix[ MAX_SHADOWS ];\n\n#endif",THREE.ShaderChunk.color_fragment = "#ifdef USE_COLOR\n\n	gl_FragColor = gl_FragColor * vec4( vColor, 1.0 );\n\n#endif",THREE.ShaderChunk.morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n\n	vec3 morphed = vec3( 0.0 );\n	morphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n	morphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n	morphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n	morphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n	#ifndef USE_MORPHNORMALS\n\n	morphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n	morphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n	morphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n	morphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n	#endif\n\n	morphed += position;\n\n#endif",THREE.ShaderChunk.envmap_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n	vec3 worldNormal = mat3( modelMatrix[ 0 ].xyz, modelMatrix[ 1 ].xyz, modelMatrix[ 2 ].xyz ) * objectNormal;\n	worldNormal = normalize( worldNormal );\n\n	vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n	if ( useRefract ) {\n\n		vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n	} else {\n\n		vReflect = reflect( cameraToVertex, worldNormal );\n\n	}\n\n#endif",THREE.ShaderChunk.shadowmap_fragment = "#ifdef USE_SHADOWMAP\n\n	#ifdef SHADOWMAP_DEBUG\n\n		vec3 frustumColors[3];\n		frustumColors[0] = vec3( 1.0, 0.5, 0.0 );\n		frustumColors[1] = vec3( 0.0, 1.0, 0.8 );\n		frustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n\n	#endif\n\n	#ifdef SHADOWMAP_CASCADE\n\n		int inFrustumCount = 0;\n\n	#endif\n\n	float fDepth;\n	vec3 shadowColor = vec3( 1.0 );\n\n	for( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n		vec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\n\n				// if ( something && something ) breaks ATI OpenGL shader compiler\n				// if ( all( something, something ) ) using this instead\n\n		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n		bool inFrustum = all( inFrustumVec );\n\n				// don't shadow pixels outside of light frustum\n				// use just first frustum (for cascades)\n				// don't shadow pixels behind far plane of light frustum\n\n		#ifdef SHADOWMAP_CASCADE\n\n			inFrustumCount += int( inFrustum );\n			bvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n\n		#else\n\n			bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n		#endif\n\n		bool frustumTest = all( frustumTestVec );\n\n		if ( frustumTest ) {\n\n			shadowCoord.z += shadowBias[ i ];\n\n			#if defined( SHADOWMAP_TYPE_PCF )\n\n						// Percentage-close filtering\n						// (9 pixel kernel)\n						// http://fabiensanglard.net/shadowmappingPCF/\n\n				float shadow = 0.0;\n\n		/*\n						// nested loops breaks shader compiler / validator on some ATI cards when using OpenGL\n						// must enroll loop manually\n\n				for ( float y = -1.25; y <= 1.25; y += 1.25 )\n					for ( float x = -1.25; x <= 1.25; x += 1.25 ) {\n\n						vec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );\n\n								// doesn't seem to produce any noticeable visual difference compared to simple texture2D lookup\n								//vec4 rgbaDepth = texture2DProj( shadowMap[ i ], vec4( vShadowCoord[ i ].w * ( vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy ), 0.05, vShadowCoord[ i ].w ) );\n\n						float fDepth = unpackDepth( rgbaDepth );\n\n						if ( fDepth < shadowCoord.z )\n							shadow += 1.0;\n\n				}\n\n				shadow /= 9.0;\n\n		*/\n\n				const float shadowDelta = 1.0 / 9.0;\n\n				float xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n				float yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n				float dx0 = -1.25 * xPixelOffset;\n				float dy0 = -1.25 * yPixelOffset;\n				float dx1 = 1.25 * xPixelOffset;\n				float dy1 = 1.25 * yPixelOffset;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				shadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n			#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n						// Percentage-close filtering\n						// (9 pixel kernel)\n						// http://fabiensanglard.net/shadowmappingPCF/\n\n				float shadow = 0.0;\n\n				float xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n				float yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n				float dx0 = -1.0 * xPixelOffset;\n				float dy0 = -1.0 * yPixelOffset;\n				float dx1 = 1.0 * xPixelOffset;\n				float dy1 = 1.0 * yPixelOffset;\n\n				mat3 shadowKernel;\n				mat3 depthKernel;\n\n				depthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n				depthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n				depthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n				depthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n				depthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n				depthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n				depthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n				depthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n				depthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\n				vec3 shadowZ = vec3( shadowCoord.z );\n				shadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));\n				shadowKernel[0] *= vec3(0.25);\n\n				shadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));\n				shadowKernel[1] *= vec3(0.25);\n\n				shadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));\n				shadowKernel[2] *= vec3(0.25);\n\n				vec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\n\n				shadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\n				shadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\n\n				vec4 shadowValues;\n				shadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\n				shadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\n				shadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\n				shadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\n\n				shadow = dot( shadowValues, vec4( 1.0 ) );\n\n				shadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n			#else\n\n				vec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\n				float fDepth = unpackDepth( rgbaDepth );\n\n				if ( fDepth < shadowCoord.z )\n\n		// spot with multiple shadows is darker\n\n					shadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n\n		// spot with multiple shadows has the same color as single shadow spot\n\n		// 					shadowColor = min( shadowColor, vec3( shadowDarkness[ i ] ) );\n\n			#endif\n\n		}\n\n\n		#ifdef SHADOWMAP_DEBUG\n\n			#ifdef SHADOWMAP_CASCADE\n\n				if ( inFrustum && inFrustumCount == 1 ) gl_FragColor.xyz *= frustumColors[ i ];\n\n			#else\n\n				if ( inFrustum ) gl_FragColor.xyz *= frustumColors[ i ];\n\n			#endif\n\n		#endif\n\n	}\n\n	#ifdef GAMMA_OUTPUT\n\n		shadowColor *= shadowColor;\n\n	#endif\n\n	gl_FragColor.xyz = gl_FragColor.xyz * shadowColor;\n\n#endif\n",THREE.ShaderChunk.worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n	#ifdef USE_SKINNING\n\n		vec4 worldPosition = modelMatrix * skinned;\n\n	#endif\n\n	#if defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\n\n		vec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );\n\n	#endif\n\n	#if ! defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\n\n		vec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\n	#endif\n\n#endif",THREE.ShaderChunk.shadowmap_pars_fragment = "#ifdef USE_SHADOWMAP\n\n	uniform sampler2D shadowMap[ MAX_SHADOWS ];\n	uniform vec2 shadowMapSize[ MAX_SHADOWS ];\n\n	uniform float shadowDarkness[ MAX_SHADOWS ];\n	uniform float shadowBias[ MAX_SHADOWS ];\n\n	varying vec4 vShadowCoord[ MAX_SHADOWS ];\n\n	float unpackDepth( const in vec4 rgba_depth ) {\n\n		const vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n		float depth = dot( rgba_depth, bit_shift );\n		return depth;\n\n	}\n\n#endif",THREE.ShaderChunk.skinning_pars_vertex = "#ifdef USE_SKINNING\n\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n\n	#ifdef BONE_TEXTURE\n\n		uniform sampler2D boneTexture;\n		uniform int boneTextureWidth;\n		uniform int boneTextureHeight;\n\n		mat4 getBoneMatrix( const in float i ) {\n\n			float j = i * 4.0;\n			float x = mod( j, float( boneTextureWidth ) );\n			float y = floor( j / float( boneTextureWidth ) );\n\n			float dx = 1.0 / float( boneTextureWidth );\n			float dy = 1.0 / float( boneTextureHeight );\n\n			y = dy * ( y + 0.5 );\n\n			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n			mat4 bone = mat4( v1, v2, v3, v4 );\n\n			return bone;\n\n		}\n\n	#else\n\n		uniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\n		mat4 getBoneMatrix( const in float i ) {\n\n			mat4 bone = boneGlobalMatrices[ int(i) ];\n			return bone;\n\n		}\n\n	#endif\n\n#endif\n",THREE.ShaderChunk.logdepthbuf_pars_fragment = "#ifdef USE_LOGDEPTHBUF\n\n	uniform float logDepthBufFC;\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		#extension GL_EXT_frag_depth : enable\n		varying float vFragDepth;\n\n	#endif\n\n#endif",THREE.ShaderChunk.alphamap_fragment = "#ifdef USE_ALPHAMAP\n\n	gl_FragColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n",THREE.ShaderChunk.alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n\n	uniform sampler2D alphaMap;\n\n#endif\n",THREE.UniformsUtils = {
    merge: function (a) {
        for (var b = {}, c = 0; c < a.length; c++) {
            var d = this.clone(a[c]);
            for (var e in d)b[e] = d[e]
        }
        return b
    }, clone: function (a) {
        var b = {};
        for (var c in a) {
            b[c] = {};
            for (var d in a[c]) {
                var e = a[c][d];
                b[c][d] = e instanceof THREE.Color || e instanceof THREE.Vector2 || e instanceof THREE.Vector3 || e instanceof THREE.Vector4 || e instanceof THREE.Matrix4 || e instanceof THREE.Texture ? e.clone() : e instanceof Array ? e.slice() : e
            }
        }
        return b
    }
},THREE.UniformsLib = {
    common: {
        diffuse: {type: "c", value: new THREE.Color(15658734)},
        opacity: {type: "f", value: 1},
        map: {type: "t", value: null},
        offsetRepeat: {type: "v4", value: new THREE.Vector4(0, 0, 1, 1)},
        lightMap: {type: "t", value: null},
        specularMap: {type: "t", value: null},
        alphaMap: {type: "t", value: null},
        envMap: {type: "t", value: null},
        flipEnvMap: {type: "f", value: -1},
        useRefract: {type: "i", value: 0},
        reflectivity: {type: "f", value: 1},
        refractionRatio: {type: "f", value: .98},
        combine: {type: "i", value: 0},
        morphTargetInfluences: {type: "f", value: 0}
    },
    bump: {bumpMap: {type: "t", value: null}, bumpScale: {type: "f", value: 1}},
    normalmap: {normalMap: {type: "t", value: null}, normalScale: {type: "v2", value: new THREE.Vector2(1, 1)}},
    fog: {
        fogDensity: {type: "f", value: 25e-5},
        fogNear: {type: "f", value: 1},
        fogFar: {type: "f", value: 2e3},
        fogColor: {type: "c", value: new THREE.Color(16777215)}
    },
    lights: {
        ambientLightColor: {type: "fv", value: []},
        directionalLightDirection: {type: "fv", value: []},
        directionalLightColor: {type: "fv", value: []},
        hemisphereLightDirection: {type: "fv", value: []},
        hemisphereLightSkyColor: {type: "fv", value: []},
        hemisphereLightGroundColor: {type: "fv", value: []},
        pointLightColor: {type: "fv", value: []},
        pointLightPosition: {type: "fv", value: []},
        pointLightDistance: {type: "fv1", value: []},
        spotLightColor: {type: "fv", value: []},
        spotLightPosition: {type: "fv", value: []},
        spotLightDirection: {type: "fv", value: []},
        spotLightDistance: {type: "fv1", value: []},
        spotLightAngleCos: {type: "fv1", value: []},
        spotLightExponent: {type: "fv1", value: []}
    },
    particle: {
        psColor: {type: "c", value: new THREE.Color(15658734)},
        opacity: {type: "f", value: 1},
        size: {type: "f", value: 1},
        scale: {type: "f", value: 1},
        map: {type: "t", value: null},
        fogDensity: {type: "f", value: 25e-5},
        fogNear: {type: "f", value: 1},
        fogFar: {type: "f", value: 2e3},
        fogColor: {type: "c", value: new THREE.Color(16777215)}
    },
    shadowmap: {
        shadowMap: {type: "tv", value: []},
        shadowMapSize: {type: "v2v", value: []},
        shadowBias: {type: "fv1", value: []},
        shadowDarkness: {type: "fv1", value: []},
        shadowMatrix: {type: "m4v", value: []}
    }
},THREE.ShaderLib = {
    basic: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.shadowmap]),
        vertexShader: [THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.skinbase_vertex, "	#ifdef USE_ENVMAP", THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, "	#endif", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
        fragmentShader: ["uniform vec3 diffuse;", "uniform float opacity;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.alphamap_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	gl_FragColor = vec4( diffuse, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphamap_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")
    },
    lambert: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
            ambient: {
                type: "c",
                value: new THREE.Color(16777215)
            },
            emissive: {type: "c", value: new THREE.Color(0)},
            wrapRGB: {type: "v3", value: new THREE.Vector3(1, 1, 1)}
        }]),
        vertexShader: ["#define LAMBERT", "varying vec3 vLightFront;", "#ifdef DOUBLE_SIDED", "	varying vec3 vLightBack;", "#endif", THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_lambert_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.lights_lambert_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
        fragmentShader: ["uniform float opacity;", "varying vec3 vLightFront;", "#ifdef DOUBLE_SIDED", "	varying vec3 vLightBack;", "#endif", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.alphamap_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	gl_FragColor = vec4( vec3( 1.0 ), opacity );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphamap_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, "	#ifdef DOUBLE_SIDED", "		if ( gl_FrontFacing )", "			gl_FragColor.xyz *= vLightFront;", "		else", "			gl_FragColor.xyz *= vLightBack;", "	#else", "		gl_FragColor.xyz *= vLightFront;", "	#endif", THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")
    },
    phong: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.bump, THREE.UniformsLib.normalmap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
            ambient: {
                type: "c",
                value: new THREE.Color(16777215)
            },
            emissive: {type: "c", value: new THREE.Color(0)},
            specular: {type: "c", value: new THREE.Color(1118481)},
            shininess: {type: "f", value: 30},
            wrapRGB: {type: "v3", value: new THREE.Vector3(1, 1, 1)}
        }]),
        vertexShader: ["#define PHONG", "varying vec3 vViewPosition;", "varying vec3 vNormal;", THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_phong_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, "	vNormal = normalize( transformedNormal );", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "	vViewPosition = -mvPosition.xyz;", THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.lights_phong_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
        fragmentShader: ["#define PHONG", "uniform vec3 diffuse;", "uniform float opacity;", "uniform vec3 ambient;", "uniform vec3 emissive;", "uniform vec3 specular;", "uniform float shininess;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.alphamap_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.lights_phong_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.bumpmap_pars_fragment, THREE.ShaderChunk.normalmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	gl_FragColor = vec4( vec3( 1.0 ), opacity );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphamap_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, THREE.ShaderChunk.lights_phong_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")
    },
    particle_basic: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.particle, THREE.UniformsLib.shadowmap]),
        vertexShader: ["uniform float size;", "uniform float scale;", THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", "	#ifdef USE_SIZEATTENUATION", "		gl_PointSize = size * ( scale / length( mvPosition.xyz ) );", "	#else", "		gl_PointSize = size;", "	#endif", "	gl_Position = projectionMatrix * mvPosition;", THREE.ShaderChunk.logdepthbuf_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
        fragmentShader: ["uniform vec3 psColor;", "uniform float opacity;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_particle_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	gl_FragColor = vec4( psColor, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.map_particle_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")
    },
    dashed: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, {
            scale: {
                type: "f",
                value: 1
            }, dashSize: {type: "f", value: 1}, totalSize: {type: "f", value: 2}
        }]),
        vertexShader: ["uniform float scale;", "attribute float lineDistance;", "varying float vLineDistance;", THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "	vLineDistance = scale * lineDistance;", "	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", "	gl_Position = projectionMatrix * mvPosition;", THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
        fragmentShader: ["uniform vec3 diffuse;", "uniform float opacity;", "uniform float dashSize;", "uniform float totalSize;", "varying float vLineDistance;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	if ( mod( vLineDistance, totalSize ) > dashSize ) {", "		discard;", "	}", "	gl_FragColor = vec4( diffuse, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")
    },
    depth: {
        uniforms: {mNear: {type: "f", value: 1}, mFar: {type: "f", value: 2e3}, opacity: {type: "f", value: 1}},
        vertexShader: [THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
        fragmentShader: ["uniform float mNear;", "uniform float mFar;", "uniform float opacity;", THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", THREE.ShaderChunk.logdepthbuf_fragment, "	#ifdef USE_LOGDEPTHBUF_EXT", "		float depth = gl_FragDepthEXT / gl_FragCoord.w;", "	#else", "		float depth = gl_FragCoord.z / gl_FragCoord.w;", "	#endif", "	float color = 1.0 - smoothstep( mNear, mFar, depth );", "	gl_FragColor = vec4( vec3( color ), opacity );", "}"].join("\n")
    },
    normal: {
        uniforms: {opacity: {type: "f", value: 1}},
        vertexShader: ["varying vec3 vNormal;", THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", "	vNormal = normalize( normalMatrix * normal );", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
        fragmentShader: ["uniform float opacity;", "varying vec3 vNormal;", THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	gl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
    },
    normalmap: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
            enableAO: {
                type: "i",
                value: 0
            },
            enableDiffuse: {type: "i", value: 0},
            enableSpecular: {type: "i", value: 0},
            enableReflection: {type: "i", value: 0},
            enableDisplacement: {type: "i", value: 0},
            tDisplacement: {type: "t", value: null},
            tDiffuse: {type: "t", value: null},
            tCube: {type: "t", value: null},
            tNormal: {type: "t", value: null},
            tSpecular: {type: "t", value: null},
            tAO: {type: "t", value: null},
            uNormalScale: {type: "v2", value: new THREE.Vector2(1, 1)},
            uDisplacementBias: {type: "f", value: 0},
            uDisplacementScale: {type: "f", value: 1},
            diffuse: {type: "c", value: new THREE.Color(16777215)},
            specular: {type: "c", value: new THREE.Color(1118481)},
            ambient: {type: "c", value: new THREE.Color(16777215)},
            shininess: {type: "f", value: 30},
            opacity: {type: "f", value: 1},
            useRefract: {type: "i", value: 0},
            refractionRatio: {type: "f", value: .98},
            reflectivity: {type: "f", value: .5},
            uOffset: {type: "v2", value: new THREE.Vector2(0, 0)},
            uRepeat: {type: "v2", value: new THREE.Vector2(1, 1)},
            wrapRGB: {type: "v3", value: new THREE.Vector3(1, 1, 1)}
        }]),
        fragmentShader: ["uniform vec3 ambient;", "uniform vec3 diffuse;", "uniform vec3 specular;", "uniform float shininess;", "uniform float opacity;", "uniform bool enableDiffuse;", "uniform bool enableSpecular;", "uniform bool enableAO;", "uniform bool enableReflection;", "uniform sampler2D tDiffuse;", "uniform sampler2D tNormal;", "uniform sampler2D tSpecular;", "uniform sampler2D tAO;", "uniform samplerCube tCube;", "uniform vec2 uNormalScale;", "uniform bool useRefract;", "uniform float refractionRatio;", "uniform float reflectivity;", "varying vec3 vTangent;", "varying vec3 vBinormal;", "varying vec3 vNormal;", "varying vec2 vUv;", "uniform vec3 ambientLightColor;", "#if MAX_DIR_LIGHTS > 0", "	uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];", "	uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];", "#endif", "#if MAX_HEMI_LIGHTS > 0", "	uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];", "	uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];", "	uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];", "#endif", "#if MAX_POINT_LIGHTS > 0", "	uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];", "	uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];", "	uniform float pointLightDistance[ MAX_POINT_LIGHTS ];", "#endif", "#if MAX_SPOT_LIGHTS > 0", "	uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];", "	uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];", "	uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];", "	uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];", "	uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];", "	uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];", "#endif", "#ifdef WRAP_AROUND", "	uniform vec3 wrapRGB;", "#endif", "varying vec3 vWorldPosition;", "varying vec3 vViewPosition;", THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", THREE.ShaderChunk.logdepthbuf_fragment, "	gl_FragColor = vec4( vec3( 1.0 ), opacity );", "	vec3 specularTex = vec3( 1.0 );", "	vec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;", "	normalTex.xy *= uNormalScale;", "	normalTex = normalize( normalTex );", "	if( enableDiffuse ) {", "		#ifdef GAMMA_INPUT", "			vec4 texelColor = texture2D( tDiffuse, vUv );", "			texelColor.xyz *= texelColor.xyz;", "			gl_FragColor = gl_FragColor * texelColor;", "		#else", "			gl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );", "		#endif", "	}", "	if( enableAO ) {", "		#ifdef GAMMA_INPUT", "			vec4 aoColor = texture2D( tAO, vUv );", "			aoColor.xyz *= aoColor.xyz;", "			gl_FragColor.xyz = gl_FragColor.xyz * aoColor.xyz;", "		#else", "			gl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;", "		#endif", "	}", THREE.ShaderChunk.alphatest_fragment, "	if( enableSpecular )", "		specularTex = texture2D( tSpecular, vUv ).xyz;", "	mat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normalize( vNormal ) );", "	vec3 finalNormal = tsb * normalTex;", "	#ifdef FLIP_SIDED", "		finalNormal = -finalNormal;", "	#endif", "	vec3 normal = normalize( finalNormal );", "	vec3 viewPosition = normalize( vViewPosition );", "	#if MAX_POINT_LIGHTS > 0", "		vec3 pointDiffuse = vec3( 0.0 );", "		vec3 pointSpecular = vec3( 0.0 );", "		for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {", "			vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );", "			vec3 pointVector = lPosition.xyz + vViewPosition.xyz;", "			float pointDistance = 1.0;", "			if ( pointLightDistance[ i ] > 0.0 )", "				pointDistance = 1.0 - min( ( length( pointVector ) / pointLightDistance[ i ] ), 1.0 );", "			pointVector = normalize( pointVector );", "			#ifdef WRAP_AROUND", "				float pointDiffuseWeightFull = max( dot( normal, pointVector ), 0.0 );", "				float pointDiffuseWeightHalf = max( 0.5 * dot( normal, pointVector ) + 0.5, 0.0 );", "				vec3 pointDiffuseWeight = mix( vec3( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );", "			#else", "				float pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );", "			#endif", "			pointDiffuse += pointDistance * pointLightColor[ i ] * diffuse * pointDiffuseWeight;", "			vec3 pointHalfVector = normalize( pointVector + viewPosition );", "			float pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );", "			float pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, shininess ), 0.0 );", "			float specularNormalization = ( shininess + 2.0 ) / 8.0;", "			vec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( pointVector, pointHalfVector ), 0.0 ), 5.0 );", "			pointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance * specularNormalization;", "		}", "	#endif", "	#if MAX_SPOT_LIGHTS > 0", "		vec3 spotDiffuse = vec3( 0.0 );", "		vec3 spotSpecular = vec3( 0.0 );", "		for ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {", "			vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );", "			vec3 spotVector = lPosition.xyz + vViewPosition.xyz;", "			float spotDistance = 1.0;", "			if ( spotLightDistance[ i ] > 0.0 )", "				spotDistance = 1.0 - min( ( length( spotVector ) / spotLightDistance[ i ] ), 1.0 );", "			spotVector = normalize( spotVector );", "			float spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );", "			if ( spotEffect > spotLightAngleCos[ i ] ) {", "				spotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );", "				#ifdef WRAP_AROUND", "					float spotDiffuseWeightFull = max( dot( normal, spotVector ), 0.0 );", "					float spotDiffuseWeightHalf = max( 0.5 * dot( normal, spotVector ) + 0.5, 0.0 );", "					vec3 spotDiffuseWeight = mix( vec3( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );", "				#else", "					float spotDiffuseWeight = max( dot( normal, spotVector ), 0.0 );", "				#endif", "				spotDiffuse += spotDistance * spotLightColor[ i ] * diffuse * spotDiffuseWeight * spotEffect;", "				vec3 spotHalfVector = normalize( spotVector + viewPosition );", "				float spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );", "				float spotSpecularWeight = specularTex.r * max( pow( spotDotNormalHalf, shininess ), 0.0 );", "				float specularNormalization = ( shininess + 2.0 ) / 8.0;", "				vec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( spotVector, spotHalfVector ), 0.0 ), 5.0 );", "				spotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * spotDistance * specularNormalization * spotEffect;", "			}", "		}", "	#endif", "	#if MAX_DIR_LIGHTS > 0", "		vec3 dirDiffuse = vec3( 0.0 );", "		vec3 dirSpecular = vec3( 0.0 );", "		for( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {", "			vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );", "			vec3 dirVector = normalize( lDirection.xyz );", "			#ifdef WRAP_AROUND", "				float directionalLightWeightingFull = max( dot( normal, dirVector ), 0.0 );", "				float directionalLightWeightingHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );", "				vec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), wrapRGB );", "			#else", "				float dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );", "			#endif", "			dirDiffuse += directionalLightColor[ i ] * diffuse * dirDiffuseWeight;", "			vec3 dirHalfVector = normalize( dirVector + viewPosition );", "			float dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );", "			float dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, shininess ), 0.0 );", "			float specularNormalization = ( shininess + 2.0 ) / 8.0;", "			vec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( dirVector, dirHalfVector ), 0.0 ), 5.0 );", "			dirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;", "		}", "	#endif", "	#if MAX_HEMI_LIGHTS > 0", "		vec3 hemiDiffuse = vec3( 0.0 );", "		vec3 hemiSpecular = vec3( 0.0 );", "		for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {", "			vec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );", "			vec3 lVector = normalize( lDirection.xyz );", "			float dotProduct = dot( normal, lVector );", "			float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;", "			vec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );", "			hemiDiffuse += diffuse * hemiColor;", "			vec3 hemiHalfVectorSky = normalize( lVector + viewPosition );", "			float hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;", "			float hemiSpecularWeightSky = specularTex.r * max( pow( max( hemiDotNormalHalfSky, 0.0 ), shininess ), 0.0 );", "			vec3 lVectorGround = -lVector;", "			vec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );", "			float hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;", "			float hemiSpecularWeightGround = specularTex.r * max( pow( max( hemiDotNormalHalfGround, 0.0 ), shininess ), 0.0 );", "			float dotProductGround = dot( normal, lVectorGround );", "			float specularNormalization = ( shininess + 2.0 ) / 8.0;", "			vec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, hemiHalfVectorSky ), 0.0 ), 5.0 );", "			vec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 0.0 ), 5.0 );", "			hemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );", "		}", "	#endif", "	vec3 totalDiffuse = vec3( 0.0 );", "	vec3 totalSpecular = vec3( 0.0 );", "	#if MAX_DIR_LIGHTS > 0", "		totalDiffuse += dirDiffuse;", "		totalSpecular += dirSpecular;", "	#endif", "	#if MAX_HEMI_LIGHTS > 0", "		totalDiffuse += hemiDiffuse;", "		totalSpecular += hemiSpecular;", "	#endif", "	#if MAX_POINT_LIGHTS > 0", "		totalDiffuse += pointDiffuse;", "		totalSpecular += pointSpecular;", "	#endif", "	#if MAX_SPOT_LIGHTS > 0", "		totalDiffuse += spotDiffuse;", "		totalSpecular += spotSpecular;", "	#endif", "	#ifdef METAL", "		gl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * ambient + totalSpecular );", "	#else", "		gl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * ambient ) + totalSpecular;", "	#endif", "	if ( enableReflection ) {", "		vec3 vReflect;", "		vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );", "		if ( useRefract ) {", "			vReflect = refract( cameraToVertex, normal, refractionRatio );", "		} else {", "			vReflect = reflect( cameraToVertex, normal );", "		}", "		vec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );", "		#ifdef GAMMA_INPUT", "			cubeColor.xyz *= cubeColor.xyz;", "		#endif", "		gl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularTex.r * reflectivity );", "	}", THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n"),
        vertexShader: ["attribute vec4 tangent;", "uniform vec2 uOffset;", "uniform vec2 uRepeat;", "uniform bool enableDisplacement;", "#ifdef VERTEX_TEXTURES", "	uniform sampler2D tDisplacement;", "	uniform float uDisplacementScale;", "	uniform float uDisplacementBias;", "#endif", "varying vec3 vTangent;", "varying vec3 vBinormal;", "varying vec3 vNormal;", "varying vec2 vUv;", "varying vec3 vWorldPosition;", "varying vec3 vViewPosition;", THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, "	#ifdef USE_SKINNING", "		vNormal = normalize( normalMatrix * skinnedNormal.xyz );", "		vec4 skinnedTangent = skinMatrix * vec4( tangent.xyz, 0.0 );", "		vTangent = normalize( normalMatrix * skinnedTangent.xyz );", "	#else", "		vNormal = normalize( normalMatrix * normal );", "		vTangent = normalize( normalMatrix * tangent.xyz );", "	#endif", "	vBinormal = normalize( cross( vNormal, vTangent ) * tangent.w );", "	vUv = uv * uRepeat + uOffset;", "	vec3 displacedPosition;", "	#ifdef VERTEX_TEXTURES", "		if ( enableDisplacement ) {", "			vec3 dv = texture2D( tDisplacement, uv ).xyz;", "			float df = uDisplacementScale * dv.x + uDisplacementBias;", "			displacedPosition = position + normalize( normal ) * df;", "		} else {", "			#ifdef USE_SKINNING", "				vec4 skinVertex = bindMatrix * vec4( position, 1.0 );", "				vec4 skinned = vec4( 0.0 );", "				skinned += boneMatX * skinVertex * skinWeight.x;", "				skinned += boneMatY * skinVertex * skinWeight.y;", "				skinned += boneMatZ * skinVertex * skinWeight.z;", "				skinned += boneMatW * skinVertex * skinWeight.w;", "				skinned  = bindMatrixInverse * skinned;", "				displacedPosition = skinned.xyz;", "			#else", "				displacedPosition = position;", "			#endif", "		}", "	#else", "		#ifdef USE_SKINNING", "			vec4 skinVertex = bindMatrix * vec4( position, 1.0 );", "			vec4 skinned = vec4( 0.0 );", "			skinned += boneMatX * skinVertex * skinWeight.x;", "			skinned += boneMatY * skinVertex * skinWeight.y;", "			skinned += boneMatZ * skinVertex * skinWeight.z;", "			skinned += boneMatW * skinVertex * skinWeight.w;", "			skinned  = bindMatrixInverse * skinned;", "			displacedPosition = skinned.xyz;", "		#else", "			displacedPosition = position;", "		#endif", "	#endif", "	vec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );", "	vec4 worldPosition = modelMatrix * vec4( displacedPosition, 1.0 );", "	gl_Position = projectionMatrix * mvPosition;", THREE.ShaderChunk.logdepthbuf_vertex, "	vWorldPosition = worldPosition.xyz;", "	vViewPosition = -mvPosition.xyz;", "	#ifdef USE_SHADOWMAP", "		for( int i = 0; i < MAX_SHADOWS; i ++ ) {", "			vShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;", "		}", "	#endif", "}"].join("\n")
    },
    cube: {
        uniforms: {tCube: {type: "t", value: null}, tFlip: {type: "f", value: -1}},
        vertexShader: ["varying vec3 vWorldPosition;", THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", "	vec4 worldPosition = modelMatrix * vec4( position, 1.0 );", "	vWorldPosition = worldPosition.xyz;", "	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
        fragmentShader: ["uniform samplerCube tCube;", "uniform float tFlip;", "varying vec3 vWorldPosition;", THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );", THREE.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
    },
    depthRGBA: {
        uniforms: {},
        vertexShader: [THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
        fragmentShader: [THREE.ShaderChunk.logdepthbuf_pars_fragment, "vec4 pack_depth( const in float depth ) {", "	const vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );", "	const vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );", "	vec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );", "	res -= res.xxyz * bit_mask;", "	return res;", "}", "void main() {", THREE.ShaderChunk.logdepthbuf_fragment, "	#ifdef USE_LOGDEPTHBUF_EXT", "		gl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );", "	#else", "		gl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );", "	#endif", "}"].join("\n")
    }
},THREE.WebGLRenderer = function (a) {
    function b() {
        Kb.clearColor(0, 0, 0, 1), Kb.clearDepth(1), Kb.clearStencil(0), Kb.enable(Kb.DEPTH_TEST), Kb.depthFunc(Kb.LEQUAL), Kb.frontFace(Kb.CCW), Kb.cullFace(Kb.BACK), Kb.enable(Kb.CULL_FACE), Kb.enable(Kb.BLEND), Kb.blendEquation(Kb.FUNC_ADD), Kb.blendFunc(Kb.SRC_ALPHA, Kb.ONE_MINUS_SRC_ALPHA), Kb.viewport(dc, ec, fc, gc), Kb.clearColor(Bb.r, Bb.g, Bb.b, Cb)
    }

    function c(a) {
        a.__webglVertexBuffer = Kb.createBuffer(), a.__webglColorBuffer = Kb.createBuffer(), Lb.info.memory.geometries++
    }

    function d(a) {
        a.__webglVertexBuffer = Kb.createBuffer(), a.__webglColorBuffer = Kb.createBuffer(), a.__webglLineDistanceBuffer = Kb.createBuffer(), Lb.info.memory.geometries++
    }

    function e(a) {
        a.__webglVertexBuffer = Kb.createBuffer(), a.__webglNormalBuffer = Kb.createBuffer(), a.__webglTangentBuffer = Kb.createBuffer(), a.__webglColorBuffer = Kb.createBuffer(), a.__webglUVBuffer = Kb.createBuffer(), a.__webglUV2Buffer = Kb.createBuffer(), a.__webglSkinIndicesBuffer = Kb.createBuffer(), a.__webglSkinWeightsBuffer = Kb.createBuffer(), a.__webglFaceBuffer = Kb.createBuffer(), a.__webglLineBuffer = Kb.createBuffer();
        var b, c;
        if (a.numMorphTargets)for (a.__webglMorphTargetsBuffers = [], b = 0, c = a.numMorphTargets; c > b; b++)a.__webglMorphTargetsBuffers.push(Kb.createBuffer());
        if (a.numMorphNormals)for (a.__webglMorphNormalsBuffers = [], b = 0, c = a.numMorphNormals; c > b; b++)a.__webglMorphNormalsBuffers.push(Kb.createBuffer());
        Lb.info.memory.geometries++
    }

    function f(a) {
        var b = a.geometry, c = a.material, d = b.vertices.length;
        if (c.attributes) {
            void 0 === b.__webglCustomAttributesList && (b.__webglCustomAttributesList = []);
            for (var e in c.attributes) {
                var f = c.attributes[e];
                if (!f.__webglInitialized || f.createUniqueBuffers) {
                    f.__webglInitialized = !0;
                    var g = 1;
                    "v2" === f.type ? g = 2 : "v3" === f.type ? g = 3 : "v4" === f.type ? g = 4 : "c" === f.type && (g = 3), f.size = g, f.array = new Float32Array(d * g), f.buffer = Kb.createBuffer(), f.buffer.belongsToAttribute = e, f.needsUpdate = !0
                }
                b.__webglCustomAttributesList.push(f)
            }
        }
    }

    function g(a, b) {
        var c = a.vertices.length;
        a.__vertexArray = new Float32Array(3 * c), a.__colorArray = new Float32Array(3 * c), a.__sortArray = [], a.__webglParticleCount = c, f(b)
    }

    function h(a, b) {
        var c = a.vertices.length;
        a.__vertexArray = new Float32Array(3 * c), a.__colorArray = new Float32Array(3 * c), a.__lineDistanceArray = new Float32Array(1 * c), a.__webglLineCount = c, f(b)
    }

    function i(a, b) {
        var c = b.geometry, d = a.faces3, e = 3 * d.length, f = 1 * d.length, g = 3 * d.length, h = j(b, a);
        a.__vertexArray = new Float32Array(3 * e), a.__normalArray = new Float32Array(3 * e), a.__colorArray = new Float32Array(3 * e), a.__uvArray = new Float32Array(2 * e), c.faceVertexUvs.length > 1 && (a.__uv2Array = new Float32Array(2 * e)), c.hasTangents && (a.__tangentArray = new Float32Array(4 * e)), b.geometry.skinWeights.length && b.geometry.skinIndices.length && (a.__skinIndexArray = new Float32Array(4 * e), a.__skinWeightArray = new Float32Array(4 * e));
        var i = null !== uc.get("OES_element_index_uint") && f > 21845 ? Uint32Array : Uint16Array;
        a.__typeArray = i, a.__faceArray = new i(3 * f), a.__lineArray = new i(2 * g);
        var k, l;
        if (a.numMorphTargets)for (a.__morphTargetsArrays = [], k = 0, l = a.numMorphTargets; l > k; k++)a.__morphTargetsArrays.push(new Float32Array(3 * e));
        if (a.numMorphNormals)for (a.__morphNormalsArrays = [], k = 0, l = a.numMorphNormals; l > k; k++)a.__morphNormalsArrays.push(new Float32Array(3 * e));
        if (a.__webglFaceCount = 3 * f, a.__webglLineCount = 2 * g, h.attributes) {
            void 0 === a.__webglCustomAttributesList && (a.__webglCustomAttributesList = []);
            for (var m in h.attributes) {
                var n = h.attributes[m], o = {};
                for (var p in n)o[p] = n[p];
                if (!o.__webglInitialized || o.createUniqueBuffers) {
                    o.__webglInitialized = !0;
                    var q = 1;
                    "v2" === o.type ? q = 2 : "v3" === o.type ? q = 3 : "v4" === o.type ? q = 4 : "c" === o.type && (q = 3), o.size = q, o.array = new Float32Array(e * q), o.buffer = Kb.createBuffer(), o.buffer.belongsToAttribute = m, n.needsUpdate = !0, o.__original = n
                }
                a.__webglCustomAttributesList.push(o)
            }
        }
        a.__inittedArrays = !0
    }

    function j(a, b) {
        return a.material instanceof THREE.MeshFaceMaterial ? a.material.materials[b.materialIndex] : a.material
    }

    function k(a) {
        return a && void 0 !== a.shading && a.shading === THREE.SmoothShading
    }

    function l(a, b, c) {
        var d, e, f, g, h, i, j, k, l, m, n, o, p = a.vertices, q = p.length, r = a.colors, s = r.length, t = a.__vertexArray, u = a.__colorArray, v = a.__sortArray, x = a.verticesNeedUpdate, y = (a.elementsNeedUpdate, a.colorsNeedUpdate), z = a.__webglCustomAttributesList;
        if (c.sortParticles) {
            for (nc.copy(mc), nc.multiply(c.matrixWorld), d = 0; q > d; d++)f = p[d], oc.copy(f), oc.applyProjection(nc), v[d] = [oc.z, d];
            for (v.sort(w), d = 0; q > d; d++)f = p[v[d][1]], g = 3 * d, t[g] = f.x, t[g + 1] = f.y, t[g + 2] = f.z;
            for (e = 0; s > e; e++)g = 3 * e, i = r[v[e][1]], u[g] = i.r, u[g + 1] = i.g, u[g + 2] = i.b;
            if (z)for (j = 0, k = z.length; k > j; j++)if (o = z[j], void 0 === o.boundTo || "vertices" === o.boundTo)if (g = 0, m = o.value.length, 1 === o.size)for (l = 0; m > l; l++)h = v[l][1], o.array[l] = o.value[h]; else if (2 === o.size)for (l = 0; m > l; l++)h = v[l][1], n = o.value[h], o.array[g] = n.x, o.array[g + 1] = n.y, g += 2; else if (3 === o.size)if ("c" === o.type)for (l = 0; m > l; l++)h = v[l][1], n = o.value[h], o.array[g] = n.r, o.array[g + 1] = n.g, o.array[g + 2] = n.b, g += 3; else for (l = 0; m > l; l++)h = v[l][1], n = o.value[h], o.array[g] = n.x, o.array[g + 1] = n.y, o.array[g + 2] = n.z, g += 3; else if (4 === o.size)for (l = 0; m > l; l++)h = v[l][1], n = o.value[h], o.array[g] = n.x, o.array[g + 1] = n.y, o.array[g + 2] = n.z, o.array[g + 3] = n.w, g += 4
        } else {
            if (x)for (d = 0; q > d; d++)f = p[d], g = 3 * d, t[g] = f.x, t[g + 1] = f.y, t[g + 2] = f.z;
            if (y)for (e = 0; s > e; e++)i = r[e], g = 3 * e, u[g] = i.r, u[g + 1] = i.g, u[g + 2] = i.b;
            if (z)for (j = 0, k = z.length; k > j; j++)if (o = z[j], o.needsUpdate && (void 0 === o.boundTo || "vertices" === o.boundTo))if (m = o.value.length, g = 0, 1 === o.size)for (l = 0; m > l; l++)o.array[l] = o.value[l]; else if (2 === o.size)for (l = 0; m > l; l++)n = o.value[l], o.array[g] = n.x, o.array[g + 1] = n.y, g += 2; else if (3 === o.size)if ("c" === o.type)for (l = 0; m > l; l++)n = o.value[l], o.array[g] = n.r, o.array[g + 1] = n.g, o.array[g + 2] = n.b, g += 3; else for (l = 0; m > l; l++)n = o.value[l], o.array[g] = n.x, o.array[g + 1] = n.y, o.array[g + 2] = n.z, g += 3; else if (4 === o.size)for (l = 0; m > l; l++)n = o.value[l], o.array[g] = n.x, o.array[g + 1] = n.y, o.array[g + 2] = n.z, o.array[g + 3] = n.w, g += 4
        }
        if ((x || c.sortParticles) && (Kb.bindBuffer(Kb.ARRAY_BUFFER, a.__webglVertexBuffer), Kb.bufferData(Kb.ARRAY_BUFFER, t, b)), (y || c.sortParticles) && (Kb.bindBuffer(Kb.ARRAY_BUFFER, a.__webglColorBuffer), Kb.bufferData(Kb.ARRAY_BUFFER, u, b)), z)for (j = 0, k = z.length; k > j; j++)o = z[j], (o.needsUpdate || c.sortParticles) && (Kb.bindBuffer(Kb.ARRAY_BUFFER, o.buffer), Kb.bufferData(Kb.ARRAY_BUFFER, o.array, b))
    }

    function m(a, b) {
        var c, d, e, f, g, h, i, j, k, l, m, n, o = a.vertices, p = a.colors, q = a.lineDistances, r = o.length, s = p.length, t = q.length, u = a.__vertexArray, v = a.__colorArray, w = a.__lineDistanceArray, x = a.verticesNeedUpdate, y = a.colorsNeedUpdate, z = a.lineDistancesNeedUpdate, A = a.__webglCustomAttributesList;
        if (x) {
            for (c = 0; r > c; c++)f = o[c], g = 3 * c, u[g] = f.x, u[g + 1] = f.y, u[g + 2] = f.z;
            Kb.bindBuffer(Kb.ARRAY_BUFFER, a.__webglVertexBuffer), Kb.bufferData(Kb.ARRAY_BUFFER, u, b)
        }
        if (y) {
            for (d = 0; s > d; d++)h = p[d], g = 3 * d, v[g] = h.r, v[g + 1] = h.g, v[g + 2] = h.b;
            Kb.bindBuffer(Kb.ARRAY_BUFFER, a.__webglColorBuffer), Kb.bufferData(Kb.ARRAY_BUFFER, v, b)
        }
        if (z) {
            for (e = 0; t > e; e++)w[e] = q[e];
            Kb.bindBuffer(Kb.ARRAY_BUFFER, a.__webglLineDistanceBuffer), Kb.bufferData(Kb.ARRAY_BUFFER, w, b)
        }
        if (A)for (i = 0, j = A.length; j > i; i++)if (n = A[i], n.needsUpdate && (void 0 === n.boundTo || "vertices" === n.boundTo)) {
            if (g = 0, l = n.value.length, 1 === n.size)for (k = 0; l > k; k++)n.array[k] = n.value[k]; else if (2 === n.size)for (k = 0; l > k; k++)m = n.value[k], n.array[g] = m.x, n.array[g + 1] = m.y, g += 2; else if (3 === n.size)if ("c" === n.type)for (k = 0; l > k; k++)m = n.value[k], n.array[g] = m.r, n.array[g + 1] = m.g, n.array[g + 2] = m.b, g += 3; else for (k = 0; l > k; k++)m = n.value[k], n.array[g] = m.x, n.array[g + 1] = m.y, n.array[g + 2] = m.z, g += 3; else if (4 === n.size)for (k = 0; l > k; k++)m = n.value[k], n.array[g] = m.x, n.array[g + 1] = m.y, n.array[g + 2] = m.z, n.array[g + 3] = m.w, g += 4;
            Kb.bindBuffer(Kb.ARRAY_BUFFER, n.buffer), Kb.bufferData(Kb.ARRAY_BUFFER, n.array, b)
        }
    }

    function n(a, b, c, d, e) {
        if (a.__inittedArrays) {
            var f, g, h, i, j, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W = k(e), X = 0, Y = 0, Z = 0, $ = 0, _ = 0, ab = 0, bb = 0, cb = 0, db = 0, eb = 0, fb = 0, gb = 0, hb = 0, ib = a.__vertexArray, jb = a.__uvArray, kb = a.__uv2Array, lb = a.__normalArray, mb = a.__tangentArray, nb = a.__colorArray, ob = a.__skinIndexArray, pb = a.__skinWeightArray, qb = a.__morphTargetsArrays, rb = a.__morphNormalsArrays, sb = a.__webglCustomAttributesList, tb = a.__faceArray, ub = a.__lineArray, vb = b.geometry, wb = vb.verticesNeedUpdate, xb = vb.elementsNeedUpdate, yb = vb.uvsNeedUpdate, zb = vb.normalsNeedUpdate, Ab = vb.tangentsNeedUpdate, Bb = vb.colorsNeedUpdate, Cb = vb.morphTargetsNeedUpdate, Db = vb.vertices, Eb = a.faces3, Fb = vb.faces, Gb = vb.faceVertexUvs[0], Hb = vb.faceVertexUvs[1], Ib = (vb.colors, vb.skinIndices), Jb = vb.skinWeights, Lb = vb.morphTargets, Mb = vb.morphNormals;
            if (wb) {
                for (f = 0, g = Eb.length; g > f; f++)i = Fb[Eb[f]], r = Db[i.a], s = Db[i.b], t = Db[i.c], ib[Y] = r.x, ib[Y + 1] = r.y, ib[Y + 2] = r.z, ib[Y + 3] = s.x, ib[Y + 4] = s.y, ib[Y + 5] = s.z, ib[Y + 6] = t.x, ib[Y + 7] = t.y, ib[Y + 8] = t.z, Y += 9;
                Kb.bindBuffer(Kb.ARRAY_BUFFER, a.__webglVertexBuffer), Kb.bufferData(Kb.ARRAY_BUFFER, ib, c)
            }
            if (Cb)for (O = 0, P = Lb.length; P > O; O++) {
                for (fb = 0, f = 0, g = Eb.length; g > f; f++)S = Eb[f], i = Fb[S], r = Lb[O].vertices[i.a], s = Lb[O].vertices[i.b], t = Lb[O].vertices[i.c], Q = qb[O], Q[fb] = r.x, Q[fb + 1] = r.y, Q[fb + 2] = r.z, Q[fb + 3] = s.x, Q[fb + 4] = s.y, Q[fb + 5] = s.z, Q[fb + 6] = t.x, Q[fb + 7] = t.y, Q[fb + 8] = t.z, e.morphNormals && (W ? (T = Mb[O].vertexNormals[S], x = T.a, y = T.b, z = T.c) : (x = Mb[O].faceNormals[S], y = x, z = x), R = rb[O], R[fb] = x.x, R[fb + 1] = x.y, R[fb + 2] = x.z, R[fb + 3] = y.x, R[fb + 4] = y.y, R[fb + 5] = y.z, R[fb + 6] = z.x, R[fb + 7] = z.y, R[fb + 8] = z.z), fb += 9;
                Kb.bindBuffer(Kb.ARRAY_BUFFER, a.__webglMorphTargetsBuffers[O]), Kb.bufferData(Kb.ARRAY_BUFFER, qb[O], c), e.morphNormals && (Kb.bindBuffer(Kb.ARRAY_BUFFER, a.__webglMorphNormalsBuffers[O]), Kb.bufferData(Kb.ARRAY_BUFFER, rb[O], c))
            }
            if (Jb.length) {
                for (f = 0, g = Eb.length; g > f; f++)i = Fb[Eb[f]], D = Jb[i.a], E = Jb[i.b], F = Jb[i.c], pb[eb] = D.x, pb[eb + 1] = D.y, pb[eb + 2] = D.z, pb[eb + 3] = D.w, pb[eb + 4] = E.x, pb[eb + 5] = E.y, pb[eb + 6] = E.z, pb[eb + 7] = E.w, pb[eb + 8] = F.x, pb[eb + 9] = F.y, pb[eb + 10] = F.z, pb[eb + 11] = F.w, G = Ib[i.a], H = Ib[i.b], I = Ib[i.c], ob[eb] = G.x, ob[eb + 1] = G.y, ob[eb + 2] = G.z, ob[eb + 3] = G.w, ob[eb + 4] = H.x, ob[eb + 5] = H.y, ob[eb + 6] = H.z, ob[eb + 7] = H.w, ob[eb + 8] = I.x, ob[eb + 9] = I.y, ob[eb + 10] = I.z, ob[eb + 11] = I.w, eb += 12;
                eb > 0 && (Kb.bindBuffer(Kb.ARRAY_BUFFER, a.__webglSkinIndicesBuffer), Kb.bufferData(Kb.ARRAY_BUFFER, ob, c), Kb.bindBuffer(Kb.ARRAY_BUFFER, a.__webglSkinWeightsBuffer), Kb.bufferData(Kb.ARRAY_BUFFER, pb, c))
            }
            if (Bb) {
                for (f = 0, g = Eb.length; g > f; f++)i = Fb[Eb[f]], m = i.vertexColors, n = i.color, 3 === m.length && e.vertexColors === THREE.VertexColors ? (A = m[0], B = m[1], C = m[2]) : (A = n, B = n, C = n), nb[db] = A.r, nb[db + 1] = A.g, nb[db + 2] = A.b, nb[db + 3] = B.r, nb[db + 4] = B.g, nb[db + 5] = B.b, nb[db + 6] = C.r, nb[db + 7] = C.g, nb[db + 8] = C.b, db += 9;
                db > 0 && (Kb.bindBuffer(Kb.ARRAY_BUFFER, a.__webglColorBuffer), Kb.bufferData(Kb.ARRAY_BUFFER, nb, c))
            }
            if (Ab && vb.hasTangents) {
                for (f = 0, g = Eb.length; g > f; f++)i = Fb[Eb[f]], o = i.vertexTangents, u = o[0], v = o[1], w = o[2], mb[bb] = u.x, mb[bb + 1] = u.y, mb[bb + 2] = u.z, mb[bb + 3] = u.w, mb[bb + 4] = v.x, mb[bb + 5] = v.y, mb[bb + 6] = v.z, mb[bb + 7] = v.w, mb[bb + 8] = w.x, mb[bb + 9] = w.y, mb[bb + 10] = w.z, mb[bb + 11] = w.w, bb += 12;
                Kb.bindBuffer(Kb.ARRAY_BUFFER, a.__webglTangentBuffer), Kb.bufferData(Kb.ARRAY_BUFFER, mb, c)
            }
            if (zb) {
                for (f = 0, g = Eb.length; g > f; f++)if (i = Fb[Eb[f]], j = i.vertexNormals, l = i.normal, 3 === j.length && W)for (J = 0; 3 > J; J++)L = j[J], lb[ab] = L.x, lb[ab + 1] = L.y, lb[ab + 2] = L.z, ab += 3; else for (J = 0; 3 > J; J++)lb[ab] = l.x, lb[ab + 1] = l.y, lb[ab + 2] = l.z, ab += 3;
                Kb.bindBuffer(Kb.ARRAY_BUFFER, a.__webglNormalBuffer), Kb.bufferData(Kb.ARRAY_BUFFER, lb, c)
            }
            if (yb && Gb) {
                for (f = 0, g = Eb.length; g > f; f++)if (h = Eb[f], p = Gb[h], void 0 !== p)for (J = 0; 3 > J; J++)M = p[J], jb[Z] = M.x, jb[Z + 1] = M.y, Z += 2;
                Z > 0 && (Kb.bindBuffer(Kb.ARRAY_BUFFER, a.__webglUVBuffer), Kb.bufferData(Kb.ARRAY_BUFFER, jb, c))
            }
            if (yb && Hb) {
                for (f = 0, g = Eb.length; g > f; f++)if (h = Eb[f], q = Hb[h], void 0 !== q)for (J = 0; 3 > J; J++)N = q[J], kb[$] = N.x, kb[$ + 1] = N.y, $ += 2;
                $ > 0 && (Kb.bindBuffer(Kb.ARRAY_BUFFER, a.__webglUV2Buffer), Kb.bufferData(Kb.ARRAY_BUFFER, kb, c))
            }
            if (xb) {
                for (f = 0, g = Eb.length; g > f; f++)tb[_] = X, tb[_ + 1] = X + 1, tb[_ + 2] = X + 2, _ += 3, ub[cb] = X, ub[cb + 1] = X + 1, ub[cb + 2] = X, ub[cb + 3] = X + 2, ub[cb + 4] = X + 1, ub[cb + 5] = X + 2, cb += 6, X += 3;
                Kb.bindBuffer(Kb.ELEMENT_ARRAY_BUFFER, a.__webglFaceBuffer), Kb.bufferData(Kb.ELEMENT_ARRAY_BUFFER, tb, c), Kb.bindBuffer(Kb.ELEMENT_ARRAY_BUFFER, a.__webglLineBuffer), Kb.bufferData(Kb.ELEMENT_ARRAY_BUFFER, ub, c)
            }
            if (sb)for (J = 0, K = sb.length; K > J; J++)if (V = sb[J], V.__original.needsUpdate) {
                if (gb = 0, hb = 0, 1 === V.size) {
                    if (void 0 === V.boundTo || "vertices" === V.boundTo)for (f = 0, g = Eb.length; g > f; f++)i = Fb[Eb[f]], V.array[gb] = V.value[i.a], V.array[gb + 1] = V.value[i.b], V.array[gb + 2] = V.value[i.c], gb += 3; else if ("faces" === V.boundTo)for (f = 0, g = Eb.length; g > f; f++)U = V.value[Eb[f]], V.array[gb] = U, V.array[gb + 1] = U, V.array[gb + 2] = U, gb += 3
                } else if (2 === V.size) {
                    if (void 0 === V.boundTo || "vertices" === V.boundTo)for (f = 0, g = Eb.length; g > f; f++)i = Fb[Eb[f]], r = V.value[i.a], s = V.value[i.b], t = V.value[i.c], V.array[gb] = r.x, V.array[gb + 1] = r.y, V.array[gb + 2] = s.x, V.array[gb + 3] = s.y, V.array[gb + 4] = t.x, V.array[gb + 5] = t.y, gb += 6; else if ("faces" === V.boundTo)for (f = 0, g = Eb.length; g > f; f++)U = V.value[Eb[f]], r = U, s = U, t = U, V.array[gb] = r.x, V.array[gb + 1] = r.y, V.array[gb + 2] = s.x, V.array[gb + 3] = s.y, V.array[gb + 4] = t.x, V.array[gb + 5] = t.y, gb += 6
                } else if (3 === V.size) {
                    var Nb;
                    if (Nb = "c" === V.type ? ["r", "g", "b"] : ["x", "y", "z"], void 0 === V.boundTo || "vertices" === V.boundTo)for (f = 0, g = Eb.length; g > f; f++)i = Fb[Eb[f]], r = V.value[i.a], s = V.value[i.b], t = V.value[i.c], V.array[gb] = r[Nb[0]], V.array[gb + 1] = r[Nb[1]], V.array[gb + 2] = r[Nb[2]], V.array[gb + 3] = s[Nb[0]], V.array[gb + 4] = s[Nb[1]], V.array[gb + 5] = s[Nb[2]], V.array[gb + 6] = t[Nb[0]], V.array[gb + 7] = t[Nb[1]], V.array[gb + 8] = t[Nb[2]], gb += 9; else if ("faces" === V.boundTo)for (f = 0, g = Eb.length; g > f; f++)U = V.value[Eb[f]], r = U, s = U, t = U, V.array[gb] = r[Nb[0]], V.array[gb + 1] = r[Nb[1]], V.array[gb + 2] = r[Nb[2]], V.array[gb + 3] = s[Nb[0]], V.array[gb + 4] = s[Nb[1]], V.array[gb + 5] = s[Nb[2]], V.array[gb + 6] = t[Nb[0]], V.array[gb + 7] = t[Nb[1]], V.array[gb + 8] = t[Nb[2]], gb += 9; else if ("faceVertices" === V.boundTo)for (f = 0, g = Eb.length; g > f; f++)U = V.value[Eb[f]], r = U[0], s = U[1], t = U[2], V.array[gb] = r[Nb[0]], V.array[gb + 1] = r[Nb[1]], V.array[gb + 2] = r[Nb[2]], V.array[gb + 3] = s[Nb[0]], V.array[gb + 4] = s[Nb[1]], V.array[gb + 5] = s[Nb[2]], V.array[gb + 6] = t[Nb[0]], V.array[gb + 7] = t[Nb[1]], V.array[gb + 8] = t[Nb[2]], gb += 9
                } else if (4 === V.size)if (void 0 === V.boundTo || "vertices" === V.boundTo)for (f = 0, g = Eb.length; g > f; f++)i = Fb[Eb[f]], r = V.value[i.a], s = V.value[i.b], t = V.value[i.c], V.array[gb] = r.x, V.array[gb + 1] = r.y, V.array[gb + 2] = r.z, V.array[gb + 3] = r.w, V.array[gb + 4] = s.x, V.array[gb + 5] = s.y, V.array[gb + 6] = s.z, V.array[gb + 7] = s.w, V.array[gb + 8] = t.x, V.array[gb + 9] = t.y, V.array[gb + 10] = t.z, V.array[gb + 11] = t.w, gb += 12; else if ("faces" === V.boundTo)for (f = 0, g = Eb.length; g > f; f++)U = V.value[Eb[f]], r = U, s = U, t = U, V.array[gb] = r.x, V.array[gb + 1] = r.y, V.array[gb + 2] = r.z, V.array[gb + 3] = r.w, V.array[gb + 4] = s.x, V.array[gb + 5] = s.y, V.array[gb + 6] = s.z, V.array[gb + 7] = s.w, V.array[gb + 8] = t.x, V.array[gb + 9] = t.y, V.array[gb + 10] = t.z, V.array[gb + 11] = t.w, gb += 12; else if ("faceVertices" === V.boundTo)for (f = 0, g = Eb.length; g > f; f++)U = V.value[Eb[f]], r = U[0], s = U[1], t = U[2], V.array[gb] = r.x, V.array[gb + 1] = r.y, V.array[gb + 2] = r.z, V.array[gb + 3] = r.w, V.array[gb + 4] = s.x, V.array[gb + 5] = s.y, V.array[gb + 6] = s.z, V.array[gb + 7] = s.w, V.array[gb + 8] = t.x, V.array[gb + 9] = t.y, V.array[gb + 10] = t.z, V.array[gb + 11] = t.w, gb += 12;
                Kb.bindBuffer(Kb.ARRAY_BUFFER, V.buffer), Kb.bufferData(Kb.ARRAY_BUFFER, V.array, c)
            }
            d && (delete a.__inittedArrays, delete a.__colorArray, delete a.__normalArray, delete a.__tangentArray, delete a.__uvArray, delete a.__uv2Array, delete a.__faceArray, delete a.__vertexArray, delete a.__lineArray, delete a.__skinIndexArray, delete a.__skinWeightArray)
        }
    }

    function o(a) {
        if (a.interleaved) {
            var b, c;
            for (b = 0, c = a.buffers.length; c > b; b++) {
                var d = a.buffers[b];
                if (void 0 === d.___glBuffer) {
                    d.___glBuffer = Kb.createBuffer();
                    var e = d.isIndex ? Kb.ELEMENT_ARRAY_BUFFER : Kb.ARRAY_BUFFER;
                    Kb.bindBuffer(e, d.___glBuffer), Kb.bufferData(e, d.data, Kb.STATIC_DRAW)
                }
            }
        } else for (var f = a.attributes, g = a.attributesKeys, b = 0, h = g.length; h > b; b++) {
            var i = g[b], j = f[i];
            if (void 0 === j.buffer && (j.buffer = Kb.createBuffer(), j.needsUpdate = !0), j.needsUpdate === !0) {
                var k = "index" === i ? Kb.ELEMENT_ARRAY_BUFFER : Kb.ARRAY_BUFFER;
                Kb.bindBuffer(k, j.buffer), Kb.bufferData(k, j.array, Kb.STATIC_DRAW), j.needsUpdate = !1
            }
        }
    }

    function p(a, b, c, d) {
        for (var e = c.attributes, f = b.attributes, g = b.attributesKeys, h = 0, i = g.length; i > h; h++) {
            var j = g[h], k = f[j];
            if (k >= 0) {
                var l = e[j];
                if (void 0 !== l)if (c.interleaved === !0) {
                    var m = l.buffer, n = l.infos.len;
                    Kb.bindBuffer(Kb.ARRAY_BUFFER, m.___glBuffer), r(k), Kb.vertexAttribPointer(k, n, Kb.FLOAT, !1, m.strideBytes, d * m.strideBytes + l.infos.offsetBytes)
                } else {
                    var n = l.itemSize;
                    Kb.bindBuffer(Kb.ARRAY_BUFFER, l.buffer), r(k), Kb.vertexAttribPointer(k, n, Kb.FLOAT, !1, 0, d * n * 4)
                } else void 0 !== a.defaultAttributeValues && (2 === a.defaultAttributeValues[j].length ? Kb.vertexAttrib2fv(k, a.defaultAttributeValues[j]) : 3 === a.defaultAttributeValues[j].length && Kb.vertexAttrib3fv(k, a.defaultAttributeValues[j]))
            }
        }
        s()
    }

    function q() {
        for (var a = 0, b = jc.length; b > a; a++)jc[a] = 0
    }

    function r(a) {
        jc[a] = 1, 0 === kc[a] && (Kb.enableVertexAttribArray(a), kc[a] = 1)
    }

    function s() {
        for (var a = 0, b = kc.length; b > a; a++)kc[a] !== jc[a] && (Kb.disableVertexAttribArray(a), kc[a] = 0)
    }

    function t(a, b, c) {
        var d = a.program.attributes;
        if (-1 !== c.morphTargetBase && d.position >= 0 ? (Kb.bindBuffer(Kb.ARRAY_BUFFER, b.__webglMorphTargetsBuffers[c.morphTargetBase]), r(d.position), Kb.vertexAttribPointer(d.position, 3, Kb.FLOAT, !1, 0, 0)) : d.position >= 0 && (Kb.bindBuffer(Kb.ARRAY_BUFFER, b.__webglVertexBuffer), r(d.position), Kb.vertexAttribPointer(d.position, 3, Kb.FLOAT, !1, 0, 0)), c.morphTargetForcedOrder.length)for (var e = 0, f = c.morphTargetForcedOrder, g = c.morphTargetInfluences; e < a.numSupportedMorphTargets && e < f.length;)d["morphTarget" + e] >= 0 && (Kb.bindBuffer(Kb.ARRAY_BUFFER, b.__webglMorphTargetsBuffers[f[e]]), r(d["morphTarget" + e]), Kb.vertexAttribPointer(d["morphTarget" + e], 3, Kb.FLOAT, !1, 0, 0)), d["morphNormal" + e] >= 0 && a.morphNormals && (Kb.bindBuffer(Kb.ARRAY_BUFFER, b.__webglMorphNormalsBuffers[f[e]]), r(d["morphNormal" + e]), Kb.vertexAttribPointer(d["morphNormal" + e], 3, Kb.FLOAT, !1, 0, 0)), c.__webglMorphTargetInfluences[e] = g[f[e]], e++; else {
            var h, i, j = [], g = c.morphTargetInfluences, k = g.length;
            for (i = 0; k > i; i++)h = g[i], h > 0 && j.push([h, i]);
            j.length > a.numSupportedMorphTargets ? (j.sort(w), j.length = a.numSupportedMorphTargets) : j.length > a.numSupportedMorphNormals ? j.sort(w) : 0 === j.length && j.push([0, 0]);
            for (var l, e = 0; e < a.numSupportedMorphTargets;)j[e] ? (l = j[e][1], d["morphTarget" + e] >= 0 && (Kb.bindBuffer(Kb.ARRAY_BUFFER, b.__webglMorphTargetsBuffers[l]), r(d["morphTarget" + e]), Kb.vertexAttribPointer(d["morphTarget" + e], 3, Kb.FLOAT, !1, 0, 0)), d["morphNormal" + e] >= 0 && a.morphNormals && (Kb.bindBuffer(Kb.ARRAY_BUFFER, b.__webglMorphNormalsBuffers[l]), r(d["morphNormal" + e]), Kb.vertexAttribPointer(d["morphNormal" + e], 3, Kb.FLOAT, !1, 0, 0)), c.__webglMorphTargetInfluences[e] = g[l]) : c.__webglMorphTargetInfluences[e] = 0, e++
        }
        null !== a.program.uniforms.morphTargetInfluences && Kb.uniform1fv(a.program.uniforms.morphTargetInfluences, c.__webglMorphTargetInfluences)
    }

    function u(a, b) {
        return a.material.id !== b.material.id ? b.material.id - a.material.id : a.z !== b.z ? b.z - a.z : a.id - b.id
    }

    function v(a, b) {
        return a.z !== b.z ? a.z - b.z : a.id - b.id
    }

    function w(a, b) {
        return b[0] - a[0]
    }

    function x(a, b) {
        if (b.visible !== !1) {
            if (b instanceof THREE.Scene || b instanceof THREE.Group); else if (C(b, a), b instanceof THREE.Light)Db.push(b); else if (b instanceof THREE.Sprite)Ib.push(b); else if (b instanceof THREE.LensFlare)Jb.push(b); else {
                var c = Eb[b.id];
                if (c && (b.frustumCulled === !1 || lc.intersectsObject(b) === !0)) {
                    H(b, a);
                    for (var d = 0, e = c.length; e > d; d++) {
                        var f = c[d];
                        B(f), f.render = !0, Lb.sortObjects === !0 && (null !== b.renderDepth ? f.z = b.renderDepth : (oc.setFromMatrixPosition(b.matrixWorld), oc.applyProjection(mc), f.z = oc.z))
                    }
                }
            }
            for (var d = 0, e = b.children.length; e > d; d++)x(a, b.children[d])
        }
    }

    function y(a, b, c, d, e, f) {
        for (var g, h = a.length - 1; -1 !== h; h--) {
            var i = a[h], j = i.object, k = i.buffer;
            if (_(j, b), f)g = f; else {
                if (g = i.material, !g)continue;
                e && Lb.setBlending(g.blending, g.blendEquation, g.blendSrc, g.blendDst), Lb.setDepthTest(g.depthTest), Lb.setDepthWrite(g.depthWrite), eb(g.polygonOffset, g.polygonOffsetFactor, g.polygonOffsetUnits)
            }
            Lb.setMaterialFaces(g), k instanceof THREE.BufferGeometry ? Lb.renderBufferDirect(b, c, d, g, k, j) : Lb.renderBuffer(b, c, d, g, k, j)
        }
    }

    function z(a, b, c, d, e, f, g) {
        for (var h, i = 0, j = a.length; j > i; i++) {
            var k = a[i], l = k.object;
            if (l.visible) {
                if (g)h = g; else {
                    if (h = k[b], !h)continue;
                    f && Lb.setBlending(h.blending, h.blendEquation, h.blendSrc, h.blendDst), Lb.setDepthTest(h.depthTest), Lb.setDepthWrite(h.depthWrite), eb(h.polygonOffset, h.polygonOffsetFactor, h.polygonOffsetUnits)
                }
                Lb.renderImmediateObject(c, d, e, h, l)
            }
        }
    }

    function A(a) {
        var b = a.object, c = b.material;
        c.transparent ? (a.transparent = c, a.opaque = null) : (a.opaque = c, a.transparent = null)
    }

    function B(a) {
        var b = a.object, c = a.buffer, d = b.geometry, e = b.material;
        if (e instanceof THREE.MeshFaceMaterial) {
            var f = d instanceof THREE.BufferGeometry ? 0 : c.materialIndex;
            e = e.materials[f], a.material = e, e.transparent ? Hb.push(a) : Gb.push(a)
        } else e && (a.material = e, e.transparent ? Hb.push(a) : Gb.push(a))
    }

    function C(a, b) {
        void 0 === a.__webglInit && (a.__webglInit = !0, a._modelViewMatrix = new THREE.Matrix4, a._normalMatrix = new THREE.Matrix3, a.addEventListener("removed", Lc));
        var e = a.geometry;
        if (void 0 === e || void 0 === e.__webglInit && (e.__webglInit = !0, e.addEventListener("dispose", Mc), e instanceof THREE.BufferGeometry || (a instanceof THREE.Mesh ? E(b, a, e) : a instanceof THREE.Line ? void 0 === e.__webglVertexBuffer && (d(e), h(e, a), e.verticesNeedUpdate = !0, e.colorsNeedUpdate = !0, e.lineDistancesNeedUpdate = !0) : a instanceof THREE.PointCloud && void 0 === e.__webglVertexBuffer && (c(e), g(e, a), e.verticesNeedUpdate = !0, e.colorsNeedUpdate = !0))), void 0 === a.__webglActive)if (a.__webglActive = !0, a instanceof THREE.Mesh) {
            if (e instanceof THREE.BufferGeometry)F(Eb, e, a); else if (e instanceof THREE.Geometry)for (var f = Vc[e.id], i = 0, j = f.length; j > i; i++)F(Eb, f[i], a)
        } else a instanceof THREE.Line || a instanceof THREE.PointCloud ? F(Eb, e, a) : (a instanceof THREE.ImmediateRenderObject || a.immediateRenderCallback) && G(Fb, a)
    }

    function D(a, b) {
        for (var c, d, e = uc.get("OES_element_index_uint") ? 4294967296 : 65535, f = {}, g = a.morphTargets.length, h = a.morphNormals.length, i = {}, j = [], k = 0, l = a.faces.length; l > k; k++) {
            var m = a.faces[k], n = b ? m.materialIndex : 0;
            n in f || (f[n] = {hash: n, counter: 0}), c = f[n].hash + "_" + f[n].counter, c in i || (d = {
                id: Wc++,
                faces3: [],
                materialIndex: n,
                vertices: 0,
                numMorphTargets: g,
                numMorphNormals: h
            }, i[c] = d, j.push(d)), i[c].vertices + 3 > e && (f[n].counter += 1, c = f[n].hash + "_" + f[n].counter, c in i || (d = {
                id: Wc++,
                faces3: [],
                materialIndex: n,
                vertices: 0,
                numMorphTargets: g,
                numMorphNormals: h
            }, i[c] = d, j.push(d))), i[c].faces3.push(k), i[c].vertices += 3
        }
        return j
    }

    function E(a, b, c) {
        var d = b.material, f = !1;
        (void 0 === Vc[c.id] || c.groupsNeedUpdate === !0) && (delete Eb[b.id], Vc[c.id] = D(c, d instanceof THREE.MeshFaceMaterial), c.groupsNeedUpdate = !1);
        for (var g = Vc[c.id], h = 0, j = g.length; j > h; h++) {
            var k = g[h];
            void 0 === k.__webglVertexBuffer ? (e(k), i(k, b), c.verticesNeedUpdate = !0, c.morphTargetsNeedUpdate = !0, c.elementsNeedUpdate = !0, c.uvsNeedUpdate = !0, c.normalsNeedUpdate = !0, c.tangentsNeedUpdate = !0, c.colorsNeedUpdate = !0, f = !0) : f = !1, (f || void 0 === b.__webglActive) && F(Eb, k, b)
        }
        b.__webglActive = !0
    }

    function F(a, b, c) {
        var d = c.id;
        a[d] = a[d] || [], a[d].push({id: d, buffer: b, object: c, material: null, z: 0})
    }

    function G(a, b) {
        a.push({id: null, object: b, opaque: null, transparent: null, z: 0})
    }

    function H(a, b) {
        var c, d, e = a.geometry;
        if (e instanceof THREE.BufferGeometry)o(e); else if (a instanceof THREE.Mesh) {
            e.groupsNeedUpdate === !0 && E(b, a, e);
            for (var f = Vc[e.id], g = 0, h = f.length; h > g; g++) {
                var k = f[g];
                d = j(a, k), e.groupsNeedUpdate === !0 && i(k, a), c = d.attributes && I(d), (e.verticesNeedUpdate || e.morphTargetsNeedUpdate || e.elementsNeedUpdate || e.uvsNeedUpdate || e.normalsNeedUpdate || e.colorsNeedUpdate || e.tangentsNeedUpdate || c) && n(k, a, Kb.DYNAMIC_DRAW, !e.dynamic, d)
            }
            e.verticesNeedUpdate = !1, e.morphTargetsNeedUpdate = !1, e.elementsNeedUpdate = !1, e.uvsNeedUpdate = !1, e.normalsNeedUpdate = !1, e.colorsNeedUpdate = !1, e.tangentsNeedUpdate = !1, d.attributes && J(d)
        } else a instanceof THREE.Line ? (d = j(a, e), c = d.attributes && I(d), (e.verticesNeedUpdate || e.colorsNeedUpdate || e.lineDistancesNeedUpdate || c) && m(e, Kb.DYNAMIC_DRAW), e.verticesNeedUpdate = !1, e.colorsNeedUpdate = !1, e.lineDistancesNeedUpdate = !1, d.attributes && J(d)) : a instanceof THREE.PointCloud && (d = j(a, e), c = d.attributes && I(d), (e.verticesNeedUpdate || e.colorsNeedUpdate || a.sortParticles || c) && l(e, Kb.DYNAMIC_DRAW, a), e.verticesNeedUpdate = !1, e.colorsNeedUpdate = !1, d.attributes && J(d))
    }

    function I(a) {
        for (var b in a.attributes)if (a.attributes[b].needsUpdate)return !0;
        return !1
    }

    function J(a) {
        for (var b in a.attributes)a.attributes[b].needsUpdate = !1
    }

    function K(a) {
        a instanceof THREE.Mesh || a instanceof THREE.PointCloud || a instanceof THREE.Line ? delete Eb[a.id] : (a instanceof THREE.ImmediateRenderObject || a.immediateRenderCallback) && L(Fb, a), delete a.__webglInit, delete a._modelViewMatrix, delete a._normalMatrix, delete a.__webglActive
    }

    function L(a, b) {
        for (var c = a.length - 1; c >= 0; c--)a[c].object === b && a.splice(c, 1)
    }

    function M(a, b, c, d) {
        a.addEventListener("dispose", Pc);
        var e;
        if (a instanceof THREE.MeshDepthMaterial ? e = "depth" : a instanceof THREE.MeshNormalMaterial ? e = "normal" : a instanceof THREE.MeshBasicMaterial ? e = "basic" : a instanceof THREE.MeshLambertMaterial ? e = "lambert" : a instanceof THREE.MeshPhongMaterial ? e = "phong" : a instanceof THREE.LineBasicMaterial ? e = "basic" : a instanceof THREE.LineDashedMaterial ? e = "dashed" : a instanceof THREE.PointCloudMaterial && (e = "particle_basic"), e) {
            var f = THREE.ShaderLib[e];
            a.__webglShader = {
                uniforms: THREE.UniformsUtils.clone(f.uniforms),
                vertexShader: f.vertexShader,
                fragmentShader: f.fragmentShader
            }
        } else a.__webglShader = {uniforms: a.uniforms, vertexShader: a.vertexShader, fragmentShader: a.fragmentShader};
        var g = pb(b), h = qb(b), i = ob(d), j = {
            precision: tb,
            supportsVertexTextures: zc,
            map: !!a.map,
            envMap: !!a.envMap,
            lightMap: !!a.lightMap,
            bumpMap: !!a.bumpMap,
            normalMap: !!a.normalMap,
            specularMap: !!a.specularMap,
            alphaMap: !!a.alphaMap,
            vertexColors: a.vertexColors,
            fog: c,
            useFog: a.fog,
            fogExp: c instanceof THREE.FogExp2,
            sizeAttenuation: a.sizeAttenuation,
            logarithmicDepthBuffer: Ab,
            skinning: a.skinning,
            maxBones: i,
            useVertexTexture: Ac && d && d.skeleton && d.skeleton.useVertexTexture,
            morphTargets: a.morphTargets,
            morphNormals: a.morphNormals,
            maxMorphTargets: Lb.maxMorphTargets,
            maxMorphNormals: Lb.maxMorphNormals,
            maxDirLights: g.directional,
            maxPointLights: g.point,
            maxSpotLights: g.spot,
            maxHemiLights: g.hemi,
            maxShadows: h,
            shadowMapEnabled: Lb.shadowMapEnabled && d.receiveShadow && h > 0,
            shadowMapType: Lb.shadowMapType,
            shadowMapDebug: Lb.shadowMapDebug,
            shadowMapCascade: Lb.shadowMapCascade,
            alphaTest: a.alphaTest,
            metal: a.metal,
            wrapAround: a.wrapAround,
            doubleSided: a.side === THREE.DoubleSide,
            flipSided: a.side === THREE.BackSide
        }, k = [];
        if (e ? k.push(e) : (k.push(a.fragmentShader), k.push(a.vertexShader)), void 0 !== a.defines)for (var l in a.defines)k.push(l), k.push(a.defines[l]);
        for (var l in j)k.push(l), k.push(j[l]);
        for (var m, n = k.join(), o = 0, p = Mb.length; p > o; o++) {
            var q = Mb[o];
            if (q.code === n) {
                m = q, m.usedTimes++;
                break
            }
        }
        void 0 === m && (m = new THREE.WebGLProgram(Lb, n, a, j), Mb.push(m), Lb.info.memory.programs = Mb.length), a.program = m;
        var r = m.attributes;
        if (a.morphTargets) {
            a.numSupportedMorphTargets = 0;
            for (var s, t = "morphTarget", u = 0; u < Lb.maxMorphTargets; u++)s = t + u, r[s] >= 0 && a.numSupportedMorphTargets++
        }
        if (a.morphNormals) {
            a.numSupportedMorphNormals = 0;
            var s, t = "morphNormal";
            for (u = 0; u < Lb.maxMorphNormals; u++)s = t + u, r[s] >= 0 && a.numSupportedMorphNormals++
        }
        a.uniformsList = [];
        for (var v in a.__webglShader.uniforms) {
            var w = a.program.uniforms[v];
            w && a.uniformsList.push([a.__webglShader.uniforms[v], w])
        }
    }

    function N(a, b, c, d, e) {
        Sb = 0, d.needsUpdate && (d.program && Uc(d), M(d, b, c, e), d.needsUpdate = !1), d.morphTargets && (e.__webglMorphTargetInfluences || (e.__webglMorphTargetInfluences = new Float32Array(Lb.maxMorphTargets)));
        var f = !1, g = !1, h = !1, i = d.program, j = i.uniforms, k = d.__webglShader.uniforms;
        if (i.id !== Nb && (Kb.useProgram(i.program), Nb = i.id, f = !0, g = !0, h = !0), d.id !== Pb && (-1 === Pb && (h = !0), Pb = d.id, g = !0), (f || a !== Rb) && (Kb.uniformMatrix4fv(j.projectionMatrix, !1, a.projectionMatrix.elements), Ab && Kb.uniform1f(j.logDepthBufFC, 2 / (Math.log(a.far + 1) / Math.LN2)), a !== Rb && (Rb = a), (d instanceof THREE.ShaderMaterial || d instanceof THREE.MeshPhongMaterial || d.envMap) && null !== j.cameraPosition && (oc.setFromMatrixPosition(a.matrixWorld), Kb.uniform3f(j.cameraPosition, oc.x, oc.y, oc.z)), (d instanceof THREE.MeshPhongMaterial || d instanceof THREE.MeshLambertMaterial || d instanceof THREE.ShaderMaterial || d.skinning) && null !== j.viewMatrix && Kb.uniformMatrix4fv(j.viewMatrix, !1, a.matrixWorldInverse.elements)), d.skinning)if (e.bindMatrix && null !== j.bindMatrix && Kb.uniformMatrix4fv(j.bindMatrix, !1, e.bindMatrix.elements), e.bindMatrixInverse && null !== j.bindMatrixInverse && Kb.uniformMatrix4fv(j.bindMatrixInverse, !1, e.bindMatrixInverse.elements), Ac && e.skeleton && e.skeleton.useVertexTexture) {
            if (null !== j.boneTexture) {
                var l = Z();
                Kb.uniform1i(j.boneTexture, l), Lb.setTexture(e.skeleton.boneTexture, l)
            }
            null !== j.boneTextureWidth && Kb.uniform1i(j.boneTextureWidth, e.skeleton.boneTextureWidth), null !== j.boneTextureHeight && Kb.uniform1i(j.boneTextureHeight, e.skeleton.boneTextureHeight)
        } else e.skeleton && e.skeleton.boneMatrices && null !== j.boneGlobalMatrices && Kb.uniformMatrix4fv(j.boneGlobalMatrices, !1, e.skeleton.boneMatrices);
        return g && (c && d.fog && S(k, c), (d instanceof THREE.MeshPhongMaterial || d instanceof THREE.MeshLambertMaterial || d.lights) && (qc && (h = !0, cb(b), qc = !1), h ? (V(k, rc), W(k, !0)) : W(k, !1)), (d instanceof THREE.MeshBasicMaterial || d instanceof THREE.MeshLambertMaterial || d instanceof THREE.MeshPhongMaterial) && O(k, d), d instanceof THREE.LineBasicMaterial ? P(k, d) : d instanceof THREE.LineDashedMaterial ? (P(k, d), Q(k, d)) : d instanceof THREE.PointCloudMaterial ? R(k, d) : d instanceof THREE.MeshPhongMaterial ? T(k, d) : d instanceof THREE.MeshLambertMaterial ? U(k, d) : d instanceof THREE.MeshDepthMaterial ? (k.mNear.value = a.near, k.mFar.value = a.far, k.opacity.value = d.opacity) : d instanceof THREE.MeshNormalMaterial && (k.opacity.value = d.opacity), e.receiveShadow && !d._shadowPass && X(k, b), $(d.uniformsList)), Y(j, e), null !== j.modelMatrix && Kb.uniformMatrix4fv(j.modelMatrix, !1, e.matrixWorld.elements), i
    }

    function O(a, b) {
        a.opacity.value = b.opacity, Lb.gammaInput ? a.diffuse.value.copyGammaToLinear(b.color) : a.diffuse.value = b.color, a.map.value = b.map, a.lightMap.value = b.lightMap, a.specularMap.value = b.specularMap, a.alphaMap.value = b.alphaMap, b.bumpMap && (a.bumpMap.value = b.bumpMap, a.bumpScale.value = b.bumpScale), b.normalMap && (a.normalMap.value = b.normalMap, a.normalScale.value.copy(b.normalScale));
        var c;
        if (b.map ? c = b.map : b.specularMap ? c = b.specularMap : b.normalMap ? c = b.normalMap : b.bumpMap ? c = b.bumpMap : b.alphaMap && (c = b.alphaMap), void 0 !== c) {
            var d = c.offset, e = c.repeat;
            a.offsetRepeat.value.set(d.x, d.y, e.x, e.y)
        }
        a.envMap.value = b.envMap, a.flipEnvMap.value = b.envMap instanceof THREE.WebGLRenderTargetCube ? 1 : -1, a.reflectivity.value = Lb.gammaInput ? b.reflectivity : b.reflectivity, a.refractionRatio.value = b.refractionRatio, a.combine.value = b.combine, a.useRefract.value = b.envMap && b.envMap.mapping instanceof THREE.CubeRefractionMapping
    }

    function P(a, b) {
        a.diffuse.value = b.color, a.opacity.value = b.opacity
    }

    function Q(a, b) {
        a.dashSize.value = b.dashSize, a.totalSize.value = b.dashSize + b.gapSize, a.scale.value = b.scale
    }

    function R(a, b) {
        a.psColor.value = b.color, a.opacity.value = b.opacity, a.size.value = b.size, a.scale.value = rb.height / 2, a.map.value = b.map
    }

    function S(a, b) {
        a.fogColor.value = b.color, b instanceof THREE.Fog ? (a.fogNear.value = b.near, a.fogFar.value = b.far) : b instanceof THREE.FogExp2 && (a.fogDensity.value = b.density)
    }

    function T(a, b) {
        a.shininess.value = b.shininess, Lb.gammaInput ? (a.ambient.value.copyGammaToLinear(b.ambient), a.emissive.value.copyGammaToLinear(b.emissive), a.specular.value.copyGammaToLinear(b.specular)) : (a.ambient.value = b.ambient, a.emissive.value = b.emissive, a.specular.value = b.specular), b.wrapAround && a.wrapRGB.value.copy(b.wrapRGB)
    }

    function U(a, b) {
        Lb.gammaInput ? (a.ambient.value.copyGammaToLinear(b.ambient), a.emissive.value.copyGammaToLinear(b.emissive)) : (a.ambient.value = b.ambient, a.emissive.value = b.emissive), b.wrapAround && a.wrapRGB.value.copy(b.wrapRGB)
    }

    function V(a, b) {
        a.ambientLightColor.value = b.ambient, a.directionalLightColor.value = b.directional.colors, a.directionalLightDirection.value = b.directional.positions, a.pointLightColor.value = b.point.colors, a.pointLightPosition.value = b.point.positions, a.pointLightDistance.value = b.point.distances, a.spotLightColor.value = b.spot.colors, a.spotLightPosition.value = b.spot.positions, a.spotLightDistance.value = b.spot.distances, a.spotLightDirection.value = b.spot.directions, a.spotLightAngleCos.value = b.spot.anglesCos, a.spotLightExponent.value = b.spot.exponents, a.hemisphereLightSkyColor.value = b.hemi.skyColors, a.hemisphereLightGroundColor.value = b.hemi.groundColors, a.hemisphereLightDirection.value = b.hemi.positions
    }

    function W(a, b) {
        a.ambientLightColor.needsUpdate = b, a.directionalLightColor.needsUpdate = b, a.directionalLightDirection.needsUpdate = b, a.pointLightColor.needsUpdate = b, a.pointLightPosition.needsUpdate = b, a.pointLightDistance.needsUpdate = b, a.spotLightColor.needsUpdate = b, a.spotLightPosition.needsUpdate = b, a.spotLightDistance.needsUpdate = b, a.spotLightDirection.needsUpdate = b, a.spotLightAngleCos.needsUpdate = b, a.spotLightExponent.needsUpdate = b, a.hemisphereLightSkyColor.needsUpdate = b, a.hemisphereLightGroundColor.needsUpdate = b, a.hemisphereLightDirection.needsUpdate = b
    }

    function X(a, b) {
        if (a.shadowMatrix)for (var c = 0, d = 0, e = b.length; e > d; d++) {
            var f = b[d];
            f.castShadow && (f instanceof THREE.SpotLight || f instanceof THREE.DirectionalLight && !f.shadowCascade) && (a.shadowMap.value[c] = f.shadowMap, a.shadowMapSize.value[c] = f.shadowMapSize, a.shadowMatrix.value[c] = f.shadowMatrix, a.shadowDarkness.value[c] = f.shadowDarkness, a.shadowBias.value[c] = f.shadowBias, c++)
        }
    }

    function Y(a, b) {
        Kb.uniformMatrix4fv(a.modelViewMatrix, !1, b._modelViewMatrix.elements), a.normalMatrix && Kb.uniformMatrix3fv(a.normalMatrix, !1, b._normalMatrix.elements)
    }

    function Z() {
        var a = Sb;
        return a >= vc && console.warn("WebGLRenderer: trying to use " + a + " texture units while this GPU supports only " + vc), Sb += 1, a
    }

    function $(a) {
        for (var b, c, d, e = 0, f = a.length; f > e; e++) {
            var g = a[e][0];
            if (g.needsUpdate !== !1) {
                var h = g.type, i = g.value, j = a[e][1];
                switch (h) {
                    case"1i":
                        Kb.uniform1i(j, i);
                        break;
                    case"1f":
                        Kb.uniform1f(j, i);
                        break;
                    case"2f":
                        Kb.uniform2f(j, i[0], i[1]);
                        break;
                    case"3f":
                        Kb.uniform3f(j, i[0], i[1], i[2]);
                        break;
                    case"4f":
                        Kb.uniform4f(j, i[0], i[1], i[2], i[3]);
                        break;
                    case"1iv":
                        Kb.uniform1iv(j, i);
                        break;
                    case"3iv":
                        Kb.uniform3iv(j, i);
                        break;
                    case"1fv":
                        Kb.uniform1fv(j, i);
                        break;
                    case"2fv":
                        Kb.uniform2fv(j, i);
                        break;
                    case"3fv":
                        Kb.uniform3fv(j, i);
                        break;
                    case"4fv":
                        Kb.uniform4fv(j, i);
                        break;
                    case"Matrix3fv":
                        Kb.uniformMatrix3fv(j, !1, i);
                        break;
                    case"Matrix4fv":
                        Kb.uniformMatrix4fv(j, !1, i);
                        break;
                    case"i":
                        Kb.uniform1i(j, i);
                        break;
                    case"f":
                        Kb.uniform1f(j, i);
                        break;
                    case"v2":
                        Kb.uniform2f(j, i.x, i.y);
                        break;
                    case"v3":
                        Kb.uniform3f(j, i.x, i.y, i.z);
                        break;
                    case"v4":
                        Kb.uniform4f(j, i.x, i.y, i.z, i.w);
                        break;
                    case"c":
                        Kb.uniform3f(j, i.r, i.g, i.b);
                        break;
                    case"iv1":
                        Kb.uniform1iv(j, i);
                        break;
                    case"iv":
                        Kb.uniform3iv(j, i);
                        break;
                    case"fv1":
                        Kb.uniform1fv(j, i);
                        break;
                    case"fv":
                        Kb.uniform3fv(j, i);
                        break;
                    case"v2v":
                        void 0 === g._array && (g._array = new Float32Array(2 * i.length));
                        for (var k = 0, l = i.length; l > k; k++)d = 2 * k, g._array[d] = i[k].x, g._array[d + 1] = i[k].y;
                        Kb.uniform2fv(j, g._array);
                        break;
                    case"v3v":
                        void 0 === g._array && (g._array = new Float32Array(3 * i.length));
                        for (var k = 0, l = i.length; l > k; k++)d = 3 * k, g._array[d] = i[k].x, g._array[d + 1] = i[k].y, g._array[d + 2] = i[k].z;
                        Kb.uniform3fv(j, g._array);
                        break;
                    case"v4v":
                        void 0 === g._array && (g._array = new Float32Array(4 * i.length));
                        for (var k = 0, l = i.length; l > k; k++)d = 4 * k, g._array[d] = i[k].x, g._array[d + 1] = i[k].y, g._array[d + 2] = i[k].z, g._array[d + 3] = i[k].w;
                        Kb.uniform4fv(j, g._array);
                        break;
                    case"m3":
                        Kb.uniformMatrix3fv(j, !1, i.elements);
                        break;
                    case"m3v":
                        void 0 === g._array && (g._array = new Float32Array(9 * i.length));
                        for (var k = 0, l = i.length; l > k; k++)i[k].flattenToArrayOffset(g._array, 9 * k);
                        Kb.uniformMatrix3fv(j, !1, g._array);
                        break;
                    case"m4":
                        Kb.uniformMatrix4fv(j, !1, i.elements);
                        break;
                    case"m4v":
                        void 0 === g._array && (g._array = new Float32Array(16 * i.length));
                        for (var k = 0, l = i.length; l > k; k++)i[k].flattenToArrayOffset(g._array, 16 * k);
                        Kb.uniformMatrix4fv(j, !1, g._array);
                        break;
                    case"t":
                        if (b = i, c = Z(), Kb.uniform1i(j, c), !b)continue;
                        b instanceof THREE.CubeTexture || b.image instanceof Array && 6 === b.image.length ? hb(b, c) : b instanceof THREE.WebGLRenderTargetCube ? ib(b, c) : Lb.setTexture(b, c);
                        break;
                    case"tv":
                        void 0 === g._array && (g._array = []);
                        for (var k = 0, l = g.value.length; l > k; k++)g._array[k] = Z();
                        Kb.uniform1iv(j, g._array);
                        for (var k = 0, l = g.value.length; l > k; k++)b = g.value[k], c = g._array[k], b && Lb.setTexture(b, c);
                        break;
                    default:
                        console.warn("THREE.WebGLRenderer: Unknown uniform type: " + h)
                }
            }
        }
    }

    function _(a, b) {
        a._modelViewMatrix.multiplyMatrices(b.matrixWorldInverse, a.matrixWorld), a._normalMatrix.getNormalMatrix(a._modelViewMatrix)
    }

    function ab(a, b, c, d) {
        a[b] = c.r * c.r * d, a[b + 1] = c.g * c.g * d, a[b + 2] = c.b * c.b * d
    }

    function bb(a, b, c, d) {
        a[b] = c.r * d, a[b + 1] = c.g * d, a[b + 2] = c.b * d
    }

    function cb(a) {
        var b, c, d, e, f, g, h, i, j, k = 0, l = 0, m = 0, n = rc, o = n.directional.colors, p = n.directional.positions, q = n.point.colors, r = n.point.positions, s = n.point.distances, t = n.spot.colors, u = n.spot.positions, v = n.spot.distances, w = n.spot.directions, x = n.spot.anglesCos, y = n.spot.exponents, z = n.hemi.skyColors, A = n.hemi.groundColors, B = n.hemi.positions, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0;
        for (b = 0, c = a.length; c > b; b++)if (d = a[b], !d.onlyShadow)if (e = d.color, h = d.intensity, j = d.distance, d instanceof THREE.AmbientLight) {
            if (!d.visible)continue;
            Lb.gammaInput ? (k += e.r * e.r, l += e.g * e.g, m += e.b * e.b) : (k += e.r, l += e.g, m += e.b)
        } else if (d instanceof THREE.DirectionalLight) {
            if (G += 1, !d.visible)continue;
            pc.setFromMatrixPosition(d.matrixWorld), oc.setFromMatrixPosition(d.target.matrixWorld), pc.sub(oc), pc.normalize(), K = 3 * C, p[K] = pc.x, p[K + 1] = pc.y, p[K + 2] = pc.z, Lb.gammaInput ? ab(o, K, e, h * h) : bb(o, K, e, h), C += 1
        } else if (d instanceof THREE.PointLight) {
            if (H += 1, !d.visible)continue;
            L = 3 * D, Lb.gammaInput ? ab(q, L, e, h * h) : bb(q, L, e, h), oc.setFromMatrixPosition(d.matrixWorld), r[L] = oc.x, r[L + 1] = oc.y, r[L + 2] = oc.z, s[D] = j, D += 1
        } else if (d instanceof THREE.SpotLight) {
            if (I += 1, !d.visible)continue;
            M = 3 * E, Lb.gammaInput ? ab(t, M, e, h * h) : bb(t, M, e, h), pc.setFromMatrixPosition(d.matrixWorld), u[M] = pc.x, u[M + 1] = pc.y, u[M + 2] = pc.z, v[E] = j, oc.setFromMatrixPosition(d.target.matrixWorld), pc.sub(oc), pc.normalize(), w[M] = pc.x, w[M + 1] = pc.y, w[M + 2] = pc.z, x[E] = Math.cos(d.angle), y[E] = d.exponent, E += 1
        } else if (d instanceof THREE.HemisphereLight) {
            if (J += 1, !d.visible)continue;
            pc.setFromMatrixPosition(d.matrixWorld), pc.normalize(), N = 3 * F, B[N] = pc.x, B[N + 1] = pc.y, B[N + 2] = pc.z, f = d.color, g = d.groundColor, Lb.gammaInput ? (i = h * h, ab(z, N, f, i), ab(A, N, g, i)) : (bb(z, N, f, h), bb(A, N, g, h)), F += 1
        }
        for (b = 3 * C, c = Math.max(o.length, 3 * G); c > b; b++)o[b] = 0;
        for (b = 3 * D, c = Math.max(q.length, 3 * H); c > b; b++)q[b] = 0;
        for (b = 3 * E, c = Math.max(t.length, 3 * I); c > b; b++)t[b] = 0;
        for (b = 3 * F, c = Math.max(z.length, 3 * J); c > b; b++)z[b] = 0;
        for (b = 3 * F, c = Math.max(A.length, 3 * J); c > b; b++)A[b] = 0;
        n.directional.length = C, n.point.length = D, n.spot.length = E, n.hemi.length = F, n.ambient[0] = k, n.ambient[1] = l, n.ambient[2] = m
    }

    function db(a) {
        a !== cc && (Kb.lineWidth(a), cc = a)
    }

    function eb(a, b, c) {
        _b !== a && (a ? Kb.enable(Kb.POLYGON_OFFSET_FILL) : Kb.disable(Kb.POLYGON_OFFSET_FILL), _b = a), !a || ac === b && bc === c || (Kb.polygonOffset(b, c), ac = b, bc = c)
    }

    function fb(a, b, c) {
        var d;
        c ? (Kb.texParameteri(a, Kb.TEXTURE_WRAP_S, nb(b.wrapS)), Kb.texParameteri(a, Kb.TEXTURE_WRAP_T, nb(b.wrapT)), Kb.texParameteri(a, Kb.TEXTURE_MAG_FILTER, nb(b.magFilter)), Kb.texParameteri(a, Kb.TEXTURE_MIN_FILTER, nb(b.minFilter))) : (Kb.texParameteri(a, Kb.TEXTURE_WRAP_S, Kb.CLAMP_TO_EDGE), Kb.texParameteri(a, Kb.TEXTURE_WRAP_T, Kb.CLAMP_TO_EDGE), Kb.texParameteri(a, Kb.TEXTURE_MAG_FILTER, mb(b.magFilter)), Kb.texParameteri(a, Kb.TEXTURE_MIN_FILTER, mb(b.minFilter))), d = uc.get("EXT_texture_filter_anisotropic"), d && b.type !== THREE.FloatType && (b.anisotropy > 1 || b.__oldAnisotropy) && (Kb.texParameterf(a, d.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(b.anisotropy, Lb.getMaxAnisotropy())), b.__oldAnisotropy = b.anisotropy)
    }

    function gb(a, b) {
        if (a.width > b || a.height > b) {
            var c = b / Math.max(a.width, a.height), d = document.createElement("canvas");
            d.width = Math.floor(a.width * c), d.height = Math.floor(a.height * c);
            var e = d.getContext("2d");
            return e.drawImage(a, 0, 0, a.width, a.height, 0, 0, d.width, d.height), console.log("THREE.WebGLRenderer:", a, "is too big (" + a.width + "x" + a.height + "). Resized to " + d.width + "x" + d.height + "."), d
        }
        return a
    }

    function hb(a, b) {
        if (6 === a.image.length)if (a.needsUpdate) {
            a.image.__webglTextureCube || (a.addEventListener("dispose", Nc), a.image.__webglTextureCube = Kb.createTexture(), Lb.info.memory.textures++), Kb.activeTexture(Kb.TEXTURE0 + b), Kb.bindTexture(Kb.TEXTURE_CUBE_MAP, a.image.__webglTextureCube), Kb.pixelStorei(Kb.UNPACK_FLIP_Y_WEBGL, a.flipY);
            for (var c = a instanceof THREE.CompressedTexture, d = a.image[0] instanceof THREE.DataTexture, e = [], f = 0; 6 > f; f++)e[f] = !Lb.autoScaleCubemaps || c || d ? d ? a.image[f].image : a.image[f] : gb(a.image[f], yc);
            var g = e[0], h = THREE.Math.isPowerOfTwo(g.width) && THREE.Math.isPowerOfTwo(g.height), i = nb(a.format), j = nb(a.type);
            fb(Kb.TEXTURE_CUBE_MAP, a, h);
            for (var f = 0; 6 > f; f++)if (c)for (var k, l = e[f].mipmaps, m = 0, n = l.length; n > m; m++)k = l[m], a.format !== THREE.RGBAFormat && a.format !== THREE.RGBFormat ? Fc().indexOf(i) > -1 ? Kb.compressedTexImage2D(Kb.TEXTURE_CUBE_MAP_POSITIVE_X + f, m, i, k.width, k.height, 0, k.data) : console.warn("Attempt to load unsupported compressed texture format") : Kb.texImage2D(Kb.TEXTURE_CUBE_MAP_POSITIVE_X + f, m, i, k.width, k.height, 0, i, j, k.data); else d ? Kb.texImage2D(Kb.TEXTURE_CUBE_MAP_POSITIVE_X + f, 0, i, e[f].width, e[f].height, 0, i, j, e[f].data) : Kb.texImage2D(Kb.TEXTURE_CUBE_MAP_POSITIVE_X + f, 0, i, i, j, e[f]);
            a.generateMipmaps && h && Kb.generateMipmap(Kb.TEXTURE_CUBE_MAP), a.needsUpdate = !1, a.onUpdate && a.onUpdate()
        } else Kb.activeTexture(Kb.TEXTURE0 + b), Kb.bindTexture(Kb.TEXTURE_CUBE_MAP, a.image.__webglTextureCube)
    }

    function ib(a, b) {
        Kb.activeTexture(Kb.TEXTURE0 + b), Kb.bindTexture(Kb.TEXTURE_CUBE_MAP, a.__webglTexture)
    }

    function jb(a, b, c) {
        Kb.bindFramebuffer(Kb.FRAMEBUFFER, a), Kb.framebufferTexture2D(Kb.FRAMEBUFFER, Kb.COLOR_ATTACHMENT0, c, b.__webglTexture, 0)
    }

    function kb(a, b) {
        Kb.bindRenderbuffer(Kb.RENDERBUFFER, a), b.depthBuffer && !b.stencilBuffer ? (Kb.renderbufferStorage(Kb.RENDERBUFFER, Kb.DEPTH_COMPONENT16, b.width, b.height), Kb.framebufferRenderbuffer(Kb.FRAMEBUFFER, Kb.DEPTH_ATTACHMENT, Kb.RENDERBUFFER, a)) : b.depthBuffer && b.stencilBuffer ? (Kb.renderbufferStorage(Kb.RENDERBUFFER, Kb.DEPTH_STENCIL, b.width, b.height), Kb.framebufferRenderbuffer(Kb.FRAMEBUFFER, Kb.DEPTH_STENCIL_ATTACHMENT, Kb.RENDERBUFFER, a)) : Kb.renderbufferStorage(Kb.RENDERBUFFER, Kb.RGBA4, b.width, b.height)
    }

    function lb(a) {
        a instanceof THREE.WebGLRenderTargetCube ? (Kb.bindTexture(Kb.TEXTURE_CUBE_MAP, a.__webglTexture), Kb.generateMipmap(Kb.TEXTURE_CUBE_MAP), Kb.bindTexture(Kb.TEXTURE_CUBE_MAP, null)) : (Kb.bindTexture(Kb.TEXTURE_2D, a.__webglTexture), Kb.generateMipmap(Kb.TEXTURE_2D), Kb.bindTexture(Kb.TEXTURE_2D, null))
    }

    function mb(a) {
        return a === THREE.NearestFilter || a === THREE.NearestMipMapNearestFilter || a === THREE.NearestMipMapLinearFilter ? Kb.NEAREST : Kb.LINEAR
    }

    function nb(a) {
        var b;
        if (a === THREE.RepeatWrapping)return Kb.REPEAT;
        if (a === THREE.ClampToEdgeWrapping)return Kb.CLAMP_TO_EDGE;
        if (a === THREE.MirroredRepeatWrapping)return Kb.MIRRORED_REPEAT;
        if (a === THREE.NearestFilter)return Kb.NEAREST;
        if (a === THREE.NearestMipMapNearestFilter)return Kb.NEAREST_MIPMAP_NEAREST;
        if (a === THREE.NearestMipMapLinearFilter)return Kb.NEAREST_MIPMAP_LINEAR;
        if (a === THREE.LinearFilter)return Kb.LINEAR;
        if (a === THREE.LinearMipMapNearestFilter)return Kb.LINEAR_MIPMAP_NEAREST;
        if (a === THREE.LinearMipMapLinearFilter)return Kb.LINEAR_MIPMAP_LINEAR;
        if (a === THREE.UnsignedByteType)return Kb.UNSIGNED_BYTE;
        if (a === THREE.UnsignedShort4444Type)return Kb.UNSIGNED_SHORT_4_4_4_4;
        if (a === THREE.UnsignedShort5551Type)return Kb.UNSIGNED_SHORT_5_5_5_1;
        if (a === THREE.UnsignedShort565Type)return Kb.UNSIGNED_SHORT_5_6_5;
        if (a === THREE.ByteType)return Kb.BYTE;
        if (a === THREE.ShortType)return Kb.SHORT;
        if (a === THREE.UnsignedShortType)return Kb.UNSIGNED_SHORT;
        if (a === THREE.IntType)return Kb.INT;
        if (a === THREE.UnsignedIntType)return Kb.UNSIGNED_INT;
        if (a === THREE.FloatType)return Kb.FLOAT;
        if (a === THREE.AlphaFormat)return Kb.ALPHA;
        if (a === THREE.RGBFormat)return Kb.RGB;
        if (a === THREE.RGBAFormat)return Kb.RGBA;
        if (a === THREE.LuminanceFormat)return Kb.LUMINANCE;
        if (a === THREE.LuminanceAlphaFormat)return Kb.LUMINANCE_ALPHA;
        if (a === THREE.AddEquation)return Kb.FUNC_ADD;
        if (a === THREE.SubtractEquation)return Kb.FUNC_SUBTRACT;
        if (a === THREE.ReverseSubtractEquation)return Kb.FUNC_REVERSE_SUBTRACT;
        if (a === THREE.ZeroFactor)return Kb.ZERO;
        if (a === THREE.OneFactor)return Kb.ONE;
        if (a === THREE.SrcColorFactor)return Kb.SRC_COLOR;
        if (a === THREE.OneMinusSrcColorFactor)return Kb.ONE_MINUS_SRC_COLOR;
        if (a === THREE.SrcAlphaFactor)return Kb.SRC_ALPHA;
        if (a === THREE.OneMinusSrcAlphaFactor)return Kb.ONE_MINUS_SRC_ALPHA;
        if (a === THREE.DstAlphaFactor)return Kb.DST_ALPHA;
        if (a === THREE.OneMinusDstAlphaFactor)return Kb.ONE_MINUS_DST_ALPHA;
        if (a === THREE.DstColorFactor)return Kb.DST_COLOR;
        if (a === THREE.OneMinusDstColorFactor)return Kb.ONE_MINUS_DST_COLOR;
        if (a === THREE.SrcAlphaSaturateFactor)return Kb.SRC_ALPHA_SATURATE;
        if (b = uc.get("WEBGL_compressed_texture_s3tc"), null !== b) {
            if (a === THREE.RGB_S3TC_DXT1_Format)return b.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (a === THREE.RGBA_S3TC_DXT1_Format)return b.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (a === THREE.RGBA_S3TC_DXT3_Format)return b.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (a === THREE.RGBA_S3TC_DXT5_Format)return b.COMPRESSED_RGBA_S3TC_DXT5_EXT
        }
        if (b = uc.get("WEBGL_compressed_texture_pvrtc"), null !== b) {
            if (a === THREE.RGB_PVRTC_4BPPV1_Format)return b.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
            if (a === THREE.RGB_PVRTC_2BPPV1_Format)return b.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
            if (a === THREE.RGBA_PVRTC_4BPPV1_Format)return b.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
            if (a === THREE.RGBA_PVRTC_2BPPV1_Format)return b.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
        }
        if (b = uc.get("EXT_blend_minmax"), null !== b) {
            if (a === THREE.MinEquation)return b.MIN_EXT;
            if (a === THREE.MaxEquation)return b.MAX_EXT
        }
        return 0
    }

    function ob(a) {
        if (Ac && a && a.skeleton && a.skeleton.useVertexTexture)return 1024;
        var b = Kb.getParameter(Kb.MAX_VERTEX_UNIFORM_VECTORS), c = Math.floor((b - 20) / 4), d = c;
        return void 0 !== a && a instanceof THREE.SkinnedMesh && (d = Math.min(a.skeleton.bones.length, d), d < a.skeleton.bones.length && console.warn("WebGLRenderer: too many bones - " + a.skeleton.bones.length + ", this GPU supports just " + d + " (try OpenGL instead of ANGLE)")), d
    }

    function pb(a) {
        for (var b = 0, c = 0, d = 0, e = 0, f = 0, g = a.length; g > f; f++) {
            var h = a[f];
            h.onlyShadow || h.visible === !1 || (h instanceof THREE.DirectionalLight && b++, h instanceof THREE.PointLight && c++, h instanceof THREE.SpotLight && d++, h instanceof THREE.HemisphereLight && e++)
        }
        return {directional: b, point: c, spot: d, hemi: e}
    }

    function qb(a) {
        for (var b = 0, c = 0, d = a.length; d > c; c++) {
            var e = a[c];
            e.castShadow && (e instanceof THREE.SpotLight && b++, e instanceof THREE.DirectionalLight && !e.shadowCascade && b++)
        }
        return b
    }

    console.log("THREE.WebGLRenderer", THREE.REVISION), a = a || {};
    var rb = void 0 !== a.canvas ? a.canvas : document.createElement("canvas"), sb = void 0 !== a.context ? a.context : null, tb = void 0 !== a.precision ? a.precision : "highp", ub = void 0 !== a.alpha ? a.alpha : !1, vb = void 0 !== a.depth ? a.depth : !0, wb = void 0 !== a.stencil ? a.stencil : !0, xb = void 0 !== a.antialias ? a.antialias : !1, yb = void 0 !== a.premultipliedAlpha ? a.premultipliedAlpha : !0, zb = void 0 !== a.preserveDrawingBuffer ? a.preserveDrawingBuffer : !1, Ab = void 0 !== a.logarithmicDepthBuffer ? a.logarithmicDepthBuffer : !1, Bb = new THREE.Color(0), Cb = 0, Db = [], Eb = {}, Fb = [], Gb = [], Hb = [], Ib = [], Jb = [];
    this.domElement = rb, this.context = null, this.devicePixelRatio = void 0 !== a.devicePixelRatio ? a.devicePixelRatio : void 0 !== self.devicePixelRatio ? self.devicePixelRatio : 1, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.gammaInput = !1, this.gammaOutput = !1, this.shadowMapEnabled = !1, this.shadowMapType = THREE.PCFShadowMap, this.shadowMapCullFace = THREE.CullFaceFront, this.shadowMapDebug = !1, this.shadowMapCascade = !1, this.maxMorphTargets = 8, this.maxMorphNormals = 4, this.autoScaleCubemaps = !0, this.info = {
        memory: {
            programs: 0,
            geometries: 0,
            textures: 0
        }, render: {calls: 0, vertices: 0, faces: 0, points: 0}
    };
    var Kb, Lb = this, Mb = [], Nb = null, Ob = null, Pb = -1, Qb = -1, Rb = null, Sb = 0, Tb = -1, Ub = -1, Vb = -1, Wb = -1, Xb = -1, Yb = -1, Zb = -1, $b = -1, _b = null, ac = null, bc = null, cc = null, dc = 0, ec = 0, fc = rb.width, gc = rb.height, hc = 0, ic = 0, jc = new Uint8Array(16), kc = new Uint8Array(16), lc = new THREE.Frustum, mc = new THREE.Matrix4, nc = new THREE.Matrix4, oc = new THREE.Vector3, pc = new THREE.Vector3, qc = !0, rc = {
        ambient: [0, 0, 0],
        directional: {length: 0, colors: [], positions: []},
        point: {length: 0, colors: [], positions: [], distances: []},
        spot: {length: 0, colors: [], positions: [], distances: [], directions: [], anglesCos: [], exponents: []},
        hemi: {length: 0, skyColors: [], groundColors: [], positions: []}
    };
    try {
        var sc = {alpha: ub, depth: vb, stencil: wb, antialias: xb, premultipliedAlpha: yb, preserveDrawingBuffer: zb};
        if (Kb = sb || rb.getContext("webgl", sc) || rb.getContext("experimental-webgl", sc), null === Kb)throw null !== rb.getContext("webgl") ? "Error creating WebGL context with your selected attributes." : "Error creating WebGL context."
    } catch (tc) {
        console.error(tc)
    }
    void 0 === Kb.getShaderPrecisionFormat && (Kb.getShaderPrecisionFormat = function () {
        return {rangeMin: 1, rangeMax: 1, precision: 1}
    });
    var uc = new THREE.WebGLExtensions(Kb);
    uc.get("OES_texture_float"), uc.get("OES_texture_float_linear"), uc.get("OES_standard_derivatives"), Ab && uc.get("EXT_frag_depth"), b(), this.context = Kb;
    var vc = Kb.getParameter(Kb.MAX_TEXTURE_IMAGE_UNITS), wc = Kb.getParameter(Kb.MAX_VERTEX_TEXTURE_IMAGE_UNITS), xc = Kb.getParameter(Kb.MAX_TEXTURE_SIZE), yc = Kb.getParameter(Kb.MAX_CUBE_MAP_TEXTURE_SIZE), zc = wc > 0, Ac = zc && uc.get("OES_texture_float"), Bc = Kb.getShaderPrecisionFormat(Kb.VERTEX_SHADER, Kb.HIGH_FLOAT), Cc = Kb.getShaderPrecisionFormat(Kb.VERTEX_SHADER, Kb.MEDIUM_FLOAT), Dc = (Kb.getShaderPrecisionFormat(Kb.VERTEX_SHADER, Kb.LOW_FLOAT), Kb.getShaderPrecisionFormat(Kb.FRAGMENT_SHADER, Kb.HIGH_FLOAT)), Ec = Kb.getShaderPrecisionFormat(Kb.FRAGMENT_SHADER, Kb.MEDIUM_FLOAT), Fc = (Kb.getShaderPrecisionFormat(Kb.FRAGMENT_SHADER, Kb.LOW_FLOAT), function () {
        var a;
        return function () {
            if (void 0 !== a)return a;
            if (a = [], uc.get("WEBGL_compressed_texture_pvrtc") || uc.get("WEBGL_compressed_texture_s3tc"))for (var b = Kb.getParameter(Kb.COMPRESSED_TEXTURE_FORMATS), c = 0; c < b.length; c++)a.push(b[c]);
            return a
        }
    }()), Gc = Bc.precision > 0 && Dc.precision > 0, Hc = Cc.precision > 0 && Ec.precision > 0;
    "highp" !== tb || Gc || (Hc ? (tb = "mediump", console.warn("THREE.WebGLRenderer: highp not supported, using mediump.")) : (tb = "lowp", console.warn("THREE.WebGLRenderer: highp and mediump not supported, using lowp."))), "mediump" !== tb || Hc || (tb = "lowp", console.warn("THREE.WebGLRenderer: mediump not supported, using lowp."));
    var Ic = new THREE.ShadowMapPlugin(this, Db, Eb, Fb), Jc = new THREE.SpritePlugin(this, Ib), Kc = new THREE.LensFlarePlugin(this, Jb);
    this.getContext = function () {
        return Kb
    }, this.supportsVertexTextures = function () {
        return zc
    }, this.supportsFloatTextures = function () {
        return uc.get("OES_texture_float")
    }, this.supportsStandardDerivatives = function () {
        return uc.get("OES_standard_derivatives")
    }, this.supportsCompressedTextureS3TC = function () {
        return uc.get("WEBGL_compressed_texture_s3tc")
    }, this.supportsCompressedTexturePVRTC = function () {
        return uc.get("WEBGL_compressed_texture_pvrtc")
    }, this.supportsBlendMinMax = function () {
        return uc.get("EXT_blend_minmax")
    }, this.getMaxAnisotropy = function () {
        var a;
        return function () {
            if (void 0 !== a)return a;
            var b = uc.get("EXT_texture_filter_anisotropic");
            return a = null !== b ? Kb.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
        }
    }(), this.getPrecision = function () {
        return tb
    }, this.setSize = function (a, b, c) {
        rb.width = a * this.devicePixelRatio, rb.height = b * this.devicePixelRatio, c !== !1 && (rb.style.width = a + "px", rb.style.height = b + "px"), this.setViewport(0, 0, a, b)
    }, this.setViewport = function (a, b, c, d) {
        dc = a * this.devicePixelRatio, ec = b * this.devicePixelRatio, fc = c * this.devicePixelRatio, gc = d * this.devicePixelRatio, Kb.viewport(dc, ec, fc, gc)
    }, this.setScissor = function (a, b, c, d) {
        Kb.scissor(a * this.devicePixelRatio, b * this.devicePixelRatio, c * this.devicePixelRatio, d * this.devicePixelRatio)
    }, this.enableScissorTest = function (a) {
        a ? Kb.enable(Kb.SCISSOR_TEST) : Kb.disable(Kb.SCISSOR_TEST)
    }, this.setClearColor = function (a, b) {
        Bb.set(a), Cb = void 0 !== b ? b : 1, Kb.clearColor(Bb.r, Bb.g, Bb.b, Cb)
    }, this.setClearColorHex = function (a, b) {
        console.warn("THREE.WebGLRenderer: .setClearColorHex() is being removed. Use .setClearColor() instead."), this.setClearColor(a, b)
    }, this.getClearColor = function () {
        return Bb
    }, this.getClearAlpha = function () {
        return Cb
    }, this.clear = function (a, b, c) {
        var d = 0;
        (void 0 === a || a) && (d |= Kb.COLOR_BUFFER_BIT), (void 0 === b || b) && (d |= Kb.DEPTH_BUFFER_BIT), (void 0 === c || c) && (d |= Kb.STENCIL_BUFFER_BIT), Kb.clear(d)
    }, this.clearColor = function () {
        Kb.clear(Kb.COLOR_BUFFER_BIT)
    }, this.clearDepth = function () {
        Kb.clear(Kb.DEPTH_BUFFER_BIT)
    }, this.clearStencil = function () {
        Kb.clear(Kb.STENCIL_BUFFER_BIT)
    }, this.clearTarget = function (a, b, c, d) {
        this.setRenderTarget(a), this.clear(b, c, d)
    }, this.resetGLState = function () {
        Nb = null, Rb = null, Vb = -1, Zb = -1, $b = -1, Tb = -1, Ub = -1, Qb = -1, Pb = -1, qc = !0
    };
    var Lc = function (a) {
        var b = a.target;
        b.traverse(function (a) {
            a.removeEventListener("remove", Lc), K(a)
        })
    }, Mc = function (a) {
        var b = a.target;
        b.removeEventListener("dispose", Mc), Rc(b)
    }, Nc = function (a) {
        var b = a.target;
        b.removeEventListener("dispose", Nc), Sc(b), Lb.info.memory.textures--
    }, Oc = function (a) {
        var b = a.target;
        b.removeEventListener("dispose", Oc), Tc(b), Lb.info.memory.textures--
    }, Pc = function (a) {
        var b = a.target;
        b.removeEventListener("dispose", Pc), Uc(b)
    }, Qc = function (a) {
        for (var b = ["__webglVertexBuffer", "__webglNormalBuffer", "__webglTangentBuffer", "__webglColorBuffer", "__webglUVBuffer", "__webglUV2Buffer", "__webglSkinIndicesBuffer", "__webglSkinWeightsBuffer", "__webglFaceBuffer", "__webglLineBuffer", "__webglLineDistanceBuffer"], c = 0, d = b.length; d > c; c++) {
            var e = b[c];
            void 0 !== a[e] && (Kb.deleteBuffer(a[e]), delete a[e])
        }
        if (void 0 !== a.__webglCustomAttributesList) {
            for (var e in a.__webglCustomAttributesList)Kb.deleteBuffer(a.__webglCustomAttributesList[e].buffer);
            delete a.__webglCustomAttributesList
        }
        Lb.info.memory.geometries--
    }, Rc = function (a) {
        if (delete a.__webglInit, a instanceof THREE.BufferGeometry) {
            if (a.interleaved)for (var b = 0, c = a.buffers.length; c > b; b++)void 0 !== a.buffers[b].___glBuffer && Kb.deleteBuffer(a.buffers[b].___glBuffer); else for (var d in a.attributes) {
                var e = a.attributes[d];
                void 0 !== e.buffer && (Kb.deleteBuffer(e.buffer), delete e.buffer)
            }
            Lb.info.memory.geometries--
        } else {
            var f = Vc[a.id];
            if (void 0 !== f) {
                for (var b = 0, c = f.length; c > b; b++) {
                    var g = f[b];
                    if (void 0 !== g.numMorphTargets) {
                        for (var h = 0, i = g.numMorphTargets; i > h; h++)Kb.deleteBuffer(g.__webglMorphTargetsBuffers[h]);
                        delete g.__webglMorphTargetsBuffers
                    }
                    if (void 0 !== g.numMorphNormals) {
                        for (var h = 0, i = g.numMorphNormals; i > h; h++)Kb.deleteBuffer(g.__webglMorphNormalsBuffers[h]);
                        delete g.__webglMorphNormalsBuffers
                    }
                    Qc(g)
                }
                delete Vc[a.id]
            } else Qc(a)
        }
        Qb = -1
    }, Sc = function (a) {
        if (a.image && a.image.__webglTextureCube)Kb.deleteTexture(a.image.__webglTextureCube), delete a.image.__webglTextureCube; else {
            if (void 0 === a.__webglInit)return;
            Kb.deleteTexture(a.__webglTexture), delete a.__webglTexture, delete a.__webglInit
        }
    }, Tc = function (a) {
        if (a && void 0 !== a.__webglTexture) {
            if (Kb.deleteTexture(a.__webglTexture), delete a.__webglTexture, a instanceof THREE.WebGLRenderTargetCube)for (var b = 0; 6 > b; b++)Kb.deleteFramebuffer(a.__webglFramebuffer[b]), Kb.deleteRenderbuffer(a.__webglRenderbuffer[b]); else Kb.deleteFramebuffer(a.__webglFramebuffer), Kb.deleteRenderbuffer(a.__webglRenderbuffer);
            delete a.__webglFramebuffer, delete a.__webglRenderbuffer
        }
    }, Uc = function (a) {
        var b = a.program.program;
        if (void 0 !== b) {
            a.program = void 0;
            var c, d, e, f = !1;
            for (c = 0, d = Mb.length; d > c; c++)if (e = Mb[c], e.program === b) {
                e.usedTimes--, 0 === e.usedTimes && (f = !0);
                break
            }
            if (f === !0) {
                var g = [];
                for (c = 0, d = Mb.length; d > c; c++)e = Mb[c], e.program !== b && g.push(e);
                Mb = g, Kb.deleteProgram(b), Lb.info.memory.programs--
            }
        }
    };
    this.renderBufferImmediate = function (a, b, c) {
        if (q(), a.hasPositions && !a.__webglVertexBuffer && (a.__webglVertexBuffer = Kb.createBuffer()), a.hasNormals && !a.__webglNormalBuffer && (a.__webglNormalBuffer = Kb.createBuffer()), a.hasUvs && !a.__webglUvBuffer && (a.__webglUvBuffer = Kb.createBuffer()), a.hasColors && !a.__webglColorBuffer && (a.__webglColorBuffer = Kb.createBuffer()), a.hasPositions && (Kb.bindBuffer(Kb.ARRAY_BUFFER, a.__webglVertexBuffer), Kb.bufferData(Kb.ARRAY_BUFFER, a.positionArray, Kb.DYNAMIC_DRAW), r(b.attributes.position), Kb.vertexAttribPointer(b.attributes.position, 3, Kb.FLOAT, !1, 0, 0)), a.hasNormals) {
            if (Kb.bindBuffer(Kb.ARRAY_BUFFER, a.__webglNormalBuffer), c.shading === THREE.FlatShading) {
                var d, e, f, g, h, i, j, k, l, m, n, o, p, t, u = 3 * a.count;
                for (t = 0; u > t; t += 9)p = a.normalArray, g = p[t], j = p[t + 1], m = p[t + 2], h = p[t + 3], k = p[t + 4], n = p[t + 5], i = p[t + 6], l = p[t + 7], o = p[t + 8], d = (g + h + i) / 3, e = (j + k + l) / 3, f = (m + n + o) / 3, p[t] = d, p[t + 1] = e, p[t + 2] = f, p[t + 3] = d, p[t + 4] = e, p[t + 5] = f, p[t + 6] = d, p[t + 7] = e, p[t + 8] = f
            }
            Kb.bufferData(Kb.ARRAY_BUFFER, a.normalArray, Kb.DYNAMIC_DRAW), r(b.attributes.normal), Kb.vertexAttribPointer(b.attributes.normal, 3, Kb.FLOAT, !1, 0, 0)
        }
        a.hasUvs && c.map && (Kb.bindBuffer(Kb.ARRAY_BUFFER, a.__webglUvBuffer), Kb.bufferData(Kb.ARRAY_BUFFER, a.uvArray, Kb.DYNAMIC_DRAW), r(b.attributes.uv), Kb.vertexAttribPointer(b.attributes.uv, 2, Kb.FLOAT, !1, 0, 0)), a.hasColors && c.vertexColors !== THREE.NoColors && (Kb.bindBuffer(Kb.ARRAY_BUFFER, a.__webglColorBuffer), Kb.bufferData(Kb.ARRAY_BUFFER, a.colorArray, Kb.DYNAMIC_DRAW), r(b.attributes.color), Kb.vertexAttribPointer(b.attributes.color, 3, Kb.FLOAT, !1, 0, 0)), s(), Kb.drawArrays(Kb.TRIANGLES, 0, a.count), a.count = 0
    }, this.renderBufferDirect = function (a, b, c, d, e, f) {
        if (d.visible !== !1) {
            var g = N(a, b, c, d, f), h = !1, i = d.wireframe ? 1 : 0, j = 16777215 * e.id + 2 * g.id + i;
            if (j !== Qb && (Qb = j, h = !0), h && q(), f instanceof THREE.Mesh) {
                var k = d.wireframe === !0 ? Kb.LINES : Kb.TRIANGLES, l = e.attributes.index;
                if (l) {
                    var m, n;
                    l.array instanceof Uint32Array && uc.get("OES_element_index_uint") ? (m = Kb.UNSIGNED_INT, n = 4) : (m = Kb.UNSIGNED_SHORT, n = 2);
                    var o = e.offsets;
                    if (0 === o.length)h && (p(d, g, e, 0), Kb.bindBuffer(Kb.ELEMENT_ARRAY_BUFFER, e.interleaved ? l.buffer.___glBuffer : l.buffer)), Kb.drawElements(k, l.array.length, m, 0), Lb.info.render.calls++, Lb.info.render.vertices += l.array.length, Lb.info.render.faces += l.array.length / 3; else {
                        h = !0;
                        for (var r = 0, s = o.length; s > r; r++) {
                            var t = o[r].index;
                            h && (p(d, g, e, t), Kb.bindBuffer(Kb.ELEMENT_ARRAY_BUFFER, e.interleaved ? l.buffer.___glBuffer : l.buffer)), Kb.drawElements(k, o[r].count, m, o[r].start * n), Lb.info.render.calls++, Lb.info.render.vertices += o[r].count, Lb.info.render.faces += o[r].count / 3
                        }
                    }
                } else {
                    h && p(d, g, e, 0);
                    var u = e.attributes.position;
                    Kb.drawArrays(k, 0, u.array.length / 3), Lb.info.render.calls++, Lb.info.render.vertices += u.array.length / 3, Lb.info.render.faces += u.array.length / 9
                }
            } else if (f instanceof THREE.PointCloud) {
                h && p(d, g, e, 0);
                var u = e.attributes.position;
                Kb.drawArrays(Kb.POINTS, 0, u.array.length / 3), Lb.info.render.calls++, Lb.info.render.points += u.array.length / 3
            } else if (f instanceof THREE.Line) {
                var k = f.mode === THREE.LineStrip ? Kb.LINE_STRIP : Kb.LINES;
                db(d.linewidth);
                var l = e.attributes.index;
                if (l) {
                    var m, n;
                    l.array instanceof Uint32Array ? (m = Kb.UNSIGNED_INT, n = 4) : (m = Kb.UNSIGNED_SHORT, n = 2);
                    var o = e.offsets;
                    if (0 === o.length)h && (p(d, g, e, 0), Kb.bindBuffer(Kb.ELEMENT_ARRAY_BUFFER, l.buffer)), Kb.drawElements(k, l.array.length, m, 0), Lb.info.render.calls++, Lb.info.render.vertices += l.array.length; else {
                        o.length > 1 && (h = !0);
                        for (var r = 0, s = o.length; s > r; r++) {
                            var t = o[r].index;
                            h && (p(d, g, e, t), Kb.bindBuffer(Kb.ELEMENT_ARRAY_BUFFER, l.buffer)), Kb.drawElements(k, o[r].count, m, o[r].start * n), Lb.info.render.calls++, Lb.info.render.vertices += o[r].count
                        }
                    }
                } else {
                    h && p(d, g, e, 0);
                    var u = e.attributes.position;
                    Kb.drawArrays(k, 0, u.array.length / 3), Lb.info.render.calls++, Lb.info.render.points += u.array.length / 3
                }
            }
        }
    }, this.renderBuffer = function (a, b, c, d, e, f) {
        if (d.visible !== !1) {
            var g = N(a, b, c, d, f), h = g.attributes, i = !1, j = d.wireframe ? 1 : 0, k = 16777215 * e.id + 2 * g.id + j;
            if (k !== Qb && (Qb = k, i = !0), i && q(), !d.morphTargets && h.position >= 0 ? i && (Kb.bindBuffer(Kb.ARRAY_BUFFER, e.__webglVertexBuffer), r(h.position), Kb.vertexAttribPointer(h.position, 3, Kb.FLOAT, !1, 0, 0)) : f.morphTargetBase && t(d, e, f), i) {
                if (e.__webglCustomAttributesList)for (var l = 0, m = e.__webglCustomAttributesList.length; m > l; l++) {
                    var n = e.__webglCustomAttributesList[l];
                    h[n.buffer.belongsToAttribute] >= 0 && (Kb.bindBuffer(Kb.ARRAY_BUFFER, n.buffer), r(h[n.buffer.belongsToAttribute]), Kb.vertexAttribPointer(h[n.buffer.belongsToAttribute], n.size, Kb.FLOAT, !1, 0, 0))
                }
                h.color >= 0 && (f.geometry.colors.length > 0 || f.geometry.faces.length > 0 ? (Kb.bindBuffer(Kb.ARRAY_BUFFER, e.__webglColorBuffer), r(h.color), Kb.vertexAttribPointer(h.color, 3, Kb.FLOAT, !1, 0, 0)) : void 0 !== d.defaultAttributeValues && Kb.vertexAttrib3fv(h.color, d.defaultAttributeValues.color)), h.normal >= 0 && (Kb.bindBuffer(Kb.ARRAY_BUFFER, e.__webglNormalBuffer), r(h.normal), Kb.vertexAttribPointer(h.normal, 3, Kb.FLOAT, !1, 0, 0)), h.tangent >= 0 && (Kb.bindBuffer(Kb.ARRAY_BUFFER, e.__webglTangentBuffer), r(h.tangent), Kb.vertexAttribPointer(h.tangent, 4, Kb.FLOAT, !1, 0, 0)), h.uv >= 0 && (f.geometry.faceVertexUvs[0] ? (Kb.bindBuffer(Kb.ARRAY_BUFFER, e.__webglUVBuffer), r(h.uv), Kb.vertexAttribPointer(h.uv, 2, Kb.FLOAT, !1, 0, 0)) : void 0 !== d.defaultAttributeValues && Kb.vertexAttrib2fv(h.uv, d.defaultAttributeValues.uv)), h.uv2 >= 0 && (f.geometry.faceVertexUvs[1] ? (Kb.bindBuffer(Kb.ARRAY_BUFFER, e.__webglUV2Buffer), r(h.uv2), Kb.vertexAttribPointer(h.uv2, 2, Kb.FLOAT, !1, 0, 0)) : void 0 !== d.defaultAttributeValues && Kb.vertexAttrib2fv(h.uv2, d.defaultAttributeValues.uv2)), d.skinning && h.skinIndex >= 0 && h.skinWeight >= 0 && (Kb.bindBuffer(Kb.ARRAY_BUFFER, e.__webglSkinIndicesBuffer), r(h.skinIndex), Kb.vertexAttribPointer(h.skinIndex, 4, Kb.FLOAT, !1, 0, 0), Kb.bindBuffer(Kb.ARRAY_BUFFER, e.__webglSkinWeightsBuffer), r(h.skinWeight), Kb.vertexAttribPointer(h.skinWeight, 4, Kb.FLOAT, !1, 0, 0)), h.lineDistance >= 0 && (Kb.bindBuffer(Kb.ARRAY_BUFFER, e.__webglLineDistanceBuffer), r(h.lineDistance), Kb.vertexAttribPointer(h.lineDistance, 1, Kb.FLOAT, !1, 0, 0))
            }
            if (s(), f instanceof THREE.Mesh) {
                var o = e.__typeArray === Uint32Array ? Kb.UNSIGNED_INT : Kb.UNSIGNED_SHORT;
                d.wireframe ? (db(d.wireframeLinewidth), i && Kb.bindBuffer(Kb.ELEMENT_ARRAY_BUFFER, e.__webglLineBuffer), Kb.drawElements(Kb.LINES, e.__webglLineCount, o, 0)) : (i && Kb.bindBuffer(Kb.ELEMENT_ARRAY_BUFFER, e.__webglFaceBuffer), Kb.drawElements(Kb.TRIANGLES, e.__webglFaceCount, o, 0)), Lb.info.render.calls++, Lb.info.render.vertices += e.__webglFaceCount, Lb.info.render.faces += e.__webglFaceCount / 3
            } else if (f instanceof THREE.Line) {
                var p = f.mode === THREE.LineStrip ? Kb.LINE_STRIP : Kb.LINES;
                db(d.linewidth), Kb.drawArrays(p, 0, e.__webglLineCount), Lb.info.render.calls++
            } else f instanceof THREE.PointCloud && (Kb.drawArrays(Kb.POINTS, 0, e.__webglParticleCount), Lb.info.render.calls++, Lb.info.render.points += e.__webglParticleCount)
        }
    }, this.render = function (a, b, c, d) {
        if (b instanceof THREE.Camera == !1)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        var e = a.fog;
        Qb = -1, Pb = -1, Rb = null, qc = !0, a.autoUpdate === !0 && a.updateMatrixWorld(), void 0 === b.parent && b.updateMatrixWorld(), a.traverse(function (a) {
            a instanceof THREE.SkinnedMesh && a.skeleton.update()
        }), b.matrixWorldInverse.getInverse(b.matrixWorld), mc.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse), lc.setFromMatrix(mc), Db.length = 0, Gb.length = 0, Hb.length = 0, Ib.length = 0, Jb.length = 0, x(a, a), Lb.sortObjects === !0 && (Gb.sort(u), Hb.sort(v)), Ic.render(a, b), Lb.info.render.calls = 0, Lb.info.render.vertices = 0, Lb.info.render.faces = 0, Lb.info.render.points = 0, this.setRenderTarget(c), (this.autoClear || d) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil);
        for (var f = 0, g = Fb.length; g > f; f++) {
            var h = Fb[f], i = h.object;
            i.visible && (_(i, b), A(h))
        }
        if (a.overrideMaterial) {
            var j = a.overrideMaterial;
            this.setBlending(j.blending, j.blendEquation, j.blendSrc, j.blendDst), this.setDepthTest(j.depthTest), this.setDepthWrite(j.depthWrite), eb(j.polygonOffset, j.polygonOffsetFactor, j.polygonOffsetUnits), y(Gb, b, Db, e, !0, j), y(Hb, b, Db, e, !0, j), z(Fb, "", b, Db, e, !1, j)
        } else {
            var j = null;
            this.setBlending(THREE.NoBlending), y(Gb, b, Db, e, !1, j), z(Fb, "opaque", b, Db, e, !1, j), y(Hb, b, Db, e, !0, j), z(Fb, "transparent", b, Db, e, !0, j)
        }
        Jc.render(a, b), Kc.render(a, b, hc, ic), c && c.generateMipmaps && c.minFilter !== THREE.NearestFilter && c.minFilter !== THREE.LinearFilter && lb(c), this.setDepthTest(!0), this.setDepthWrite(!0)
    }, this.renderImmediateObject = function (a, b, c, d, e) {
        var f = N(a, b, c, d, e);
        Qb = -1, Lb.setMaterialFaces(d), e.immediateRenderCallback ? e.immediateRenderCallback(f, Kb, lc) : e.render(function (a) {
            Lb.renderBufferImmediate(a, f, d)
        })
    };
    var Vc = {}, Wc = 0;
    this.setFaceCulling = function (a, b) {
        a === THREE.CullFaceNone ? Kb.disable(Kb.CULL_FACE) : (Kb.frontFace(b === THREE.FrontFaceDirectionCW ? Kb.CW : Kb.CCW), Kb.cullFace(a === THREE.CullFaceBack ? Kb.BACK : a === THREE.CullFaceFront ? Kb.FRONT : Kb.FRONT_AND_BACK), Kb.enable(Kb.CULL_FACE))
    }, this.setMaterialFaces = function (a) {
        var b = a.side === THREE.DoubleSide, c = a.side === THREE.BackSide;
        Tb !== b && (b ? Kb.disable(Kb.CULL_FACE) : Kb.enable(Kb.CULL_FACE), Tb = b), Ub !== c && (Kb.frontFace(c ? Kb.CW : Kb.CCW), Ub = c)
    }, this.setDepthTest = function (a) {
        Zb !== a && (a ? Kb.enable(Kb.DEPTH_TEST) : Kb.disable(Kb.DEPTH_TEST), Zb = a)
    }, this.setDepthWrite = function (a) {
        $b !== a && (Kb.depthMask(a), $b = a)
    }, this.setBlending = function (a, b, c, d) {
        a !== Vb && (a === THREE.NoBlending ? Kb.disable(Kb.BLEND) : a === THREE.AdditiveBlending ? (Kb.enable(Kb.BLEND), Kb.blendEquation(Kb.FUNC_ADD), Kb.blendFunc(Kb.SRC_ALPHA, Kb.ONE)) : a === THREE.SubtractiveBlending ? (Kb.enable(Kb.BLEND), Kb.blendEquation(Kb.FUNC_ADD), Kb.blendFunc(Kb.ZERO, Kb.ONE_MINUS_SRC_COLOR)) : a === THREE.MultiplyBlending ? (Kb.enable(Kb.BLEND), Kb.blendEquation(Kb.FUNC_ADD), Kb.blendFunc(Kb.ZERO, Kb.SRC_COLOR)) : a === THREE.CustomBlending ? Kb.enable(Kb.BLEND) : (Kb.enable(Kb.BLEND), Kb.blendEquationSeparate(Kb.FUNC_ADD, Kb.FUNC_ADD), Kb.blendFuncSeparate(Kb.SRC_ALPHA, Kb.ONE_MINUS_SRC_ALPHA, Kb.ONE, Kb.ONE_MINUS_SRC_ALPHA)), Vb = a), a === THREE.CustomBlending ? (b !== Wb && (Kb.blendEquation(nb(b)), Wb = b), (c !== Xb || d !== Yb) && (Kb.blendFunc(nb(c), nb(d)), Xb = c, Yb = d)) : (Wb = null, Xb = null, Yb = null)
    }, this.uploadTexture = function (a) {
        void 0 === a.__webglInit && (a.__webglInit = !0, a.addEventListener("dispose", Nc), a.__webglTexture = Kb.createTexture(), Lb.info.memory.textures++), Kb.bindTexture(Kb.TEXTURE_2D, a.__webglTexture), Kb.pixelStorei(Kb.UNPACK_FLIP_Y_WEBGL, a.flipY), Kb.pixelStorei(Kb.UNPACK_PREMULTIPLY_ALPHA_WEBGL, a.premultiplyAlpha), Kb.pixelStorei(Kb.UNPACK_ALIGNMENT, a.unpackAlignment), a.image = gb(a.image, xc);
        var b = a.image, c = THREE.Math.isPowerOfTwo(b.width) && THREE.Math.isPowerOfTwo(b.height), d = nb(a.format), e = nb(a.type);
        fb(Kb.TEXTURE_2D, a, c);
        var f, g = a.mipmaps;
        if (a instanceof THREE.DataTexture)if (g.length > 0 && c) {
            for (var h = 0, i = g.length; i > h; h++)f = g[h], Kb.texImage2D(Kb.TEXTURE_2D, h, d, f.width, f.height, 0, d, e, f.data);
            a.generateMipmaps = !1
        } else Kb.texImage2D(Kb.TEXTURE_2D, 0, d, b.width, b.height, 0, d, e, b.data); else if (a instanceof THREE.CompressedTexture)for (var h = 0, i = g.length; i > h; h++)f = g[h], a.format !== THREE.RGBAFormat && a.format !== THREE.RGBFormat ? Fc().indexOf(d) > -1 ? Kb.compressedTexImage2D(Kb.TEXTURE_2D, h, d, f.width, f.height, 0, f.data) : console.warn("Attempt to load unsupported compressed texture format") : Kb.texImage2D(Kb.TEXTURE_2D, h, d, f.width, f.height, 0, d, e, f.data); else if (g.length > 0 && c) {
            for (var h = 0, i = g.length; i > h; h++)f = g[h], Kb.texImage2D(Kb.TEXTURE_2D, h, d, d, e, f);
            a.generateMipmaps = !1
        } else Kb.texImage2D(Kb.TEXTURE_2D, 0, d, d, e, a.image);
        a.generateMipmaps && c && Kb.generateMipmap(Kb.TEXTURE_2D), a.needsUpdate = !1, a.onUpdate && a.onUpdate()
    }, this.setTexture = function (a, b) {
        Kb.activeTexture(Kb.TEXTURE0 + b), a.needsUpdate ? Lb.uploadTexture(a) : Kb.bindTexture(Kb.TEXTURE_2D, a.__webglTexture)
    }, this.setRenderTarget = function (a) {
        var b = a instanceof THREE.WebGLRenderTargetCube;
        if (a && void 0 === a.__webglFramebuffer) {
            void 0 === a.depthBuffer && (a.depthBuffer = !0), void 0 === a.stencilBuffer && (a.stencilBuffer = !0), a.addEventListener("dispose", Oc), a.__webglTexture = Kb.createTexture(), Lb.info.memory.textures++;
            var c = THREE.Math.isPowerOfTwo(a.width) && THREE.Math.isPowerOfTwo(a.height), d = nb(a.format), e = nb(a.type);
            if (b) {
                a.__webglFramebuffer = [], a.__webglRenderbuffer = [], Kb.bindTexture(Kb.TEXTURE_CUBE_MAP, a.__webglTexture), fb(Kb.TEXTURE_CUBE_MAP, a, c);
                for (var f = 0; 6 > f; f++)a.__webglFramebuffer[f] = Kb.createFramebuffer(), a.__webglRenderbuffer[f] = Kb.createRenderbuffer(), Kb.texImage2D(Kb.TEXTURE_CUBE_MAP_POSITIVE_X + f, 0, d, a.width, a.height, 0, d, e, null), jb(a.__webglFramebuffer[f], a, Kb.TEXTURE_CUBE_MAP_POSITIVE_X + f), kb(a.__webglRenderbuffer[f], a);
                c && Kb.generateMipmap(Kb.TEXTURE_CUBE_MAP)
            } else a.__webglFramebuffer = Kb.createFramebuffer(), a.__webglRenderbuffer = a.shareDepthFrom ? a.shareDepthFrom.__webglRenderbuffer : Kb.createRenderbuffer(), Kb.bindTexture(Kb.TEXTURE_2D, a.__webglTexture), fb(Kb.TEXTURE_2D, a, c), Kb.texImage2D(Kb.TEXTURE_2D, 0, d, a.width, a.height, 0, d, e, null), jb(a.__webglFramebuffer, a, Kb.TEXTURE_2D), a.shareDepthFrom ? a.depthBuffer && !a.stencilBuffer ? Kb.framebufferRenderbuffer(Kb.FRAMEBUFFER, Kb.DEPTH_ATTACHMENT, Kb.RENDERBUFFER, a.__webglRenderbuffer) : a.depthBuffer && a.stencilBuffer && Kb.framebufferRenderbuffer(Kb.FRAMEBUFFER, Kb.DEPTH_STENCIL_ATTACHMENT, Kb.RENDERBUFFER, a.__webglRenderbuffer) : kb(a.__webglRenderbuffer, a), c && Kb.generateMipmap(Kb.TEXTURE_2D);
            b ? Kb.bindTexture(Kb.TEXTURE_CUBE_MAP, null) : Kb.bindTexture(Kb.TEXTURE_2D, null), Kb.bindRenderbuffer(Kb.RENDERBUFFER, null), Kb.bindFramebuffer(Kb.FRAMEBUFFER, null)
        }
        var g, h, i, j, k;
        a ? (g = b ? a.__webglFramebuffer[a.activeCubeFace] : a.__webglFramebuffer, h = a.width, i = a.height, j = 0, k = 0) : (g = null, h = fc, i = gc, j = dc, k = ec), g !== Ob && (Kb.bindFramebuffer(Kb.FRAMEBUFFER, g), Kb.viewport(j, k, h, i), Ob = g), hc = h, ic = i
    }, this.initMaterial = function () {
        console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
    }, this.addPrePlugin = function () {
        console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
    }, this.addPostPlugin = function () {
        console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
    }, this.updateShadowMap = function () {
        console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
    }
},THREE.WebGLRenderTarget = function (a, b, c) {
    this.width = a, this.height = b, c = c || {}, this.wrapS = void 0 !== c.wrapS ? c.wrapS : THREE.ClampToEdgeWrapping, this.wrapT = void 0 !== c.wrapT ? c.wrapT : THREE.ClampToEdgeWrapping, this.magFilter = void 0 !== c.magFilter ? c.magFilter : THREE.LinearFilter, this.minFilter = void 0 !== c.minFilter ? c.minFilter : THREE.LinearMipMapLinearFilter, this.anisotropy = void 0 !== c.anisotropy ? c.anisotropy : 1, this.offset = new THREE.Vector2(0, 0), this.repeat = new THREE.Vector2(1, 1), this.format = void 0 !== c.format ? c.format : THREE.RGBAFormat, this.type = void 0 !== c.type ? c.type : THREE.UnsignedByteType, this.depthBuffer = void 0 !== c.depthBuffer ? c.depthBuffer : !0, this.stencilBuffer = void 0 !== c.stencilBuffer ? c.stencilBuffer : !0, this.generateMipmaps = !0, this.shareDepthFrom = null
},THREE.WebGLRenderTarget.prototype = {
    constructor: THREE.WebGLRenderTarget, setSize: function (a, b) {
        this.width = a, this.height = b
    }, clone: function () {
        var a = new THREE.WebGLRenderTarget(this.width, this.height);
        return a.wrapS = this.wrapS, a.wrapT = this.wrapT, a.magFilter = this.magFilter, a.minFilter = this.minFilter, a.anisotropy = this.anisotropy, a.offset.copy(this.offset), a.repeat.copy(this.repeat), a.format = this.format, a.type = this.type, a.depthBuffer = this.depthBuffer, a.stencilBuffer = this.stencilBuffer, a.generateMipmaps = this.generateMipmaps, a.shareDepthFrom = this.shareDepthFrom, a
    }, dispose: function () {
        this.dispatchEvent({type: "dispose"})
    }
},THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype),THREE.WebGLRenderTargetCube = function (a, b, c) {
    THREE.WebGLRenderTarget.call(this, a, b, c), this.activeCubeFace = 0
},THREE.WebGLRenderTargetCube.prototype = Object.create(THREE.WebGLRenderTarget.prototype),THREE.WebGLExtensions = function (a) {
    var b = {};
    this.get = function (c) {
        if (void 0 !== b[c])return b[c];
        var d;
        switch (c) {
            case"OES_texture_float":
                d = a.getExtension("OES_texture_float");
                break;
            case"OES_texture_float_linear":
                d = a.getExtension("OES_texture_float_linear");
                break;
            case"OES_standard_derivatives":
                d = a.getExtension("OES_standard_derivatives");
                break;
            case"EXT_texture_filter_anisotropic":
                d = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                break;
            case"WEBGL_compressed_texture_s3tc":
                d = a.getExtension("WEBGL_compressed_texture_s3tc") || a.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                break;
            case"WEBGL_compressed_texture_pvrtc":
                d = a.getExtension("WEBGL_compressed_texture_pvrtc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                break;
            case"OES_element_index_uint":
                d = a.getExtension("OES_element_index_uint");
                break;
            case"EXT_blend_minmax":
                d = a.getExtension("EXT_blend_minmax");
                break;
            case"EXT_frag_depth":
                d = a.getExtension("EXT_frag_depth")
        }
        return null === d && console.log("THREE.WebGLRenderer: " + c + " extension not supported."), b[c] = d, d
    }
},THREE.WebGLProgram = function () {
    var a = 0, b = function (a) {
        var b, c, d = [];
        for (var e in a)b = a[e], b !== !1 && (c = "#define " + e + " " + b, d.push(c));
        return d.join("\n")
    }, c = function (a, b, c) {
        for (var d = {}, e = 0, f = c.length; f > e; e++) {
            var g = c[e];
            d[g] = a.getUniformLocation(b, g)
        }
        return d
    }, d = function (a, b, c) {
        for (var d = {}, e = 0, f = c.length; f > e; e++) {
            var g = c[e];
            d[g] = a.getAttribLocation(b, g)
        }
        return d
    };
    return function (e, f, g, h) {
        var i = e, j = i.context, k = g.defines, l = g.__webglShader.uniforms, m = g.attributes, n = g.__webglShader.vertexShader, o = g.__webglShader.fragmentShader, p = g.index0AttributeName;
        void 0 === p && h.morphTargets === !0 && (p = "position");
        var q = "SHADOWMAP_TYPE_BASIC";
        h.shadowMapType === THREE.PCFShadowMap ? q = "SHADOWMAP_TYPE_PCF" : h.shadowMapType === THREE.PCFSoftShadowMap && (q = "SHADOWMAP_TYPE_PCF_SOFT");
        var r, s, t = b(k), u = j.createProgram();
        g instanceof THREE.RawShaderMaterial ? (r = "", s = "") : (r = ["precision " + h.precision + " float;", "precision " + h.precision + " int;", t, h.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", i.gammaInput ? "#define GAMMA_INPUT" : "", i.gammaOutput ? "#define GAMMA_OUTPUT" : "", "#define MAX_DIR_LIGHTS " + h.maxDirLights, "#define MAX_POINT_LIGHTS " + h.maxPointLights, "#define MAX_SPOT_LIGHTS " + h.maxSpotLights, "#define MAX_HEMI_LIGHTS " + h.maxHemiLights, "#define MAX_SHADOWS " + h.maxShadows, "#define MAX_BONES " + h.maxBones, h.map ? "#define USE_MAP" : "", h.envMap ? "#define USE_ENVMAP" : "", h.lightMap ? "#define USE_LIGHTMAP" : "", h.bumpMap ? "#define USE_BUMPMAP" : "", h.normalMap ? "#define USE_NORMALMAP" : "", h.specularMap ? "#define USE_SPECULARMAP" : "", h.alphaMap ? "#define USE_ALPHAMAP" : "", h.vertexColors ? "#define USE_COLOR" : "", h.skinning ? "#define USE_SKINNING" : "", h.useVertexTexture ? "#define BONE_TEXTURE" : "", h.morphTargets ? "#define USE_MORPHTARGETS" : "", h.morphNormals ? "#define USE_MORPHNORMALS" : "", h.wrapAround ? "#define WRAP_AROUND" : "", h.doubleSided ? "#define DOUBLE_SIDED" : "", h.flipSided ? "#define FLIP_SIDED" : "", h.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", h.shadowMapEnabled ? "#define " + q : "", h.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", h.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "", h.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", h.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "attribute vec2 uv2;", "#ifdef USE_COLOR", "	attribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", ""].join("\n"), s = ["precision " + h.precision + " float;", "precision " + h.precision + " int;", h.bumpMap || h.normalMap ? "#extension GL_OES_standard_derivatives : enable" : "", t, "#define MAX_DIR_LIGHTS " + h.maxDirLights, "#define MAX_POINT_LIGHTS " + h.maxPointLights, "#define MAX_SPOT_LIGHTS " + h.maxSpotLights, "#define MAX_HEMI_LIGHTS " + h.maxHemiLights, "#define MAX_SHADOWS " + h.maxShadows, h.alphaTest ? "#define ALPHATEST " + h.alphaTest : "", i.gammaInput ? "#define GAMMA_INPUT" : "", i.gammaOutput ? "#define GAMMA_OUTPUT" : "", h.useFog && h.fog ? "#define USE_FOG" : "", h.useFog && h.fogExp ? "#define FOG_EXP2" : "", h.map ? "#define USE_MAP" : "", h.envMap ? "#define USE_ENVMAP" : "", h.lightMap ? "#define USE_LIGHTMAP" : "", h.bumpMap ? "#define USE_BUMPMAP" : "", h.normalMap ? "#define USE_NORMALMAP" : "", h.specularMap ? "#define USE_SPECULARMAP" : "", h.alphaMap ? "#define USE_ALPHAMAP" : "", h.vertexColors ? "#define USE_COLOR" : "", h.metal ? "#define METAL" : "", h.wrapAround ? "#define WRAP_AROUND" : "", h.doubleSided ? "#define DOUBLE_SIDED" : "", h.flipSided ? "#define FLIP_SIDED" : "", h.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", h.shadowMapEnabled ? "#define " + q : "", h.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", h.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "", h.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", ""].join("\n"));
        var v = new THREE.WebGLShader(j, j.VERTEX_SHADER, r + n), w = new THREE.WebGLShader(j, j.FRAGMENT_SHADER, s + o);
        j.attachShader(u, v), j.attachShader(u, w), void 0 !== p && j.bindAttribLocation(u, 0, p), j.linkProgram(u), j.getProgramParameter(u, j.LINK_STATUS) === !1 && (console.error("THREE.WebGLProgram: Could not initialise shader."), console.error("gl.VALIDATE_STATUS", j.getProgramParameter(u, j.VALIDATE_STATUS)), console.error("gl.getError()", j.getError())), "" !== j.getProgramInfoLog(u) && console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", j.getProgramInfoLog(u)), j.deleteShader(v), j.deleteShader(w);
        var x = ["viewMatrix", "modelViewMatrix", "projectionMatrix", "normalMatrix", "modelMatrix", "cameraPosition", "morphTargetInfluences", "bindMatrix", "bindMatrixInverse"];
        h.useVertexTexture ? (x.push("boneTexture"), x.push("boneTextureWidth"), x.push("boneTextureHeight")) : x.push("boneGlobalMatrices"), h.logarithmicDepthBuffer && x.push("logDepthBufFC");
        for (var y in l)x.push(y);
        this.uniforms = c(j, u, x), x = ["position", "normal", "uv", "uv2", "tangent", "color", "skinIndex", "skinWeight", "lineDistance"];
        for (var z = 0; z < h.maxMorphTargets; z++)x.push("morphTarget" + z);
        for (var z = 0; z < h.maxMorphNormals; z++)x.push("morphNormal" + z);
        for (var A in m)x.push(A);
        return this.attributes = d(j, u, x), this.attributesKeys = Object.keys(this.attributes), this.id = a++, this.code = f, this.usedTimes = 1, this.program = u, this.vertexShader = v, this.fragmentShader = w, this
    }
}(),THREE.WebGLShader = function () {
    var a = function (a) {
        for (var b = a.split("\n"), c = 0; c < b.length; c++)b[c] = c + 1 + ": " + b[c];
        return b.join("\n")
    };
    return function (b, c, d) {
        var e = b.createShader(c);
        return b.shaderSource(e, d), b.compileShader(e), b.getShaderParameter(e, b.COMPILE_STATUS) === !1 && console.error("THREE.WebGLShader: Shader couldn't compile."), "" !== b.getShaderInfoLog(e) && (console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", b.getShaderInfoLog(e)), console.warn(a(d))), e
    }
}(),THREE.LensFlarePlugin = function (a, b) {
    function c(b) {
        var c = l.createProgram(), d = l.createShader(l.FRAGMENT_SHADER), e = l.createShader(l.VERTEX_SHADER), f = "precision " + a.getPrecision() + " float;\n";
        return l.shaderSource(d, f + b.fragmentShader), l.shaderSource(e, f + b.vertexShader), l.compileShader(d), l.compileShader(e), l.attachShader(c, d), l.attachShader(c, e), l.linkProgram(c), c
    }

    var d, e, f, g, h, i, j, k, l = a.context, m = function () {
        var a = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]), b = new Uint16Array([0, 1, 2, 0, 2, 3]);
        d = l.createBuffer(), e = l.createBuffer(), l.bindBuffer(l.ARRAY_BUFFER, d), l.bufferData(l.ARRAY_BUFFER, a, l.STATIC_DRAW), l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, e), l.bufferData(l.ELEMENT_ARRAY_BUFFER, b, l.STATIC_DRAW), j = l.createTexture(), k = l.createTexture(), l.bindTexture(l.TEXTURE_2D, j), l.texImage2D(l.TEXTURE_2D, 0, l.RGB, 16, 16, 0, l.RGB, l.UNSIGNED_BYTE, null), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.CLAMP_TO_EDGE), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.CLAMP_TO_EDGE), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MAG_FILTER, l.NEAREST), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.NEAREST), l.bindTexture(l.TEXTURE_2D, k), l.texImage2D(l.TEXTURE_2D, 0, l.RGBA, 16, 16, 0, l.RGBA, l.UNSIGNED_BYTE, null), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.CLAMP_TO_EDGE), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.CLAMP_TO_EDGE), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MAG_FILTER, l.NEAREST), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.NEAREST), i = l.getParameter(l.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0;
        var m;
        m = i ? {
            vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "uniform sampler2D occlusionMap;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if( renderType == 2 ) {", "vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );", "vVisibility =        visibility.r / 9.0;", "vVisibility *= 1.0 - visibility.g / 9.0;", "vVisibility *=       visibility.b / 9.0;", "vVisibility *= 1.0 - visibility.a / 9.0;", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
            fragmentShader: ["uniform lowp int renderType;", "uniform sampler2D map;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "if( renderType == 0 ) {", "gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );", "} else if( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * vVisibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
        } : {
            vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if( renderType == 2 ) {", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
            fragmentShader: ["precision mediump float;", "uniform lowp int renderType;", "uniform sampler2D map;", "uniform sampler2D occlusionMap;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "void main() {", "if( renderType == 0 ) {", "gl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );", "} else if( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "float visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;", "visibility = ( 1.0 - visibility / 4.0 );", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * visibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
        }, f = c(m), g = {
            vertex: l.getAttribLocation(f, "position"),
            uv: l.getAttribLocation(f, "uv")
        }, h = {
            renderType: l.getUniformLocation(f, "renderType"),
            map: l.getUniformLocation(f, "map"),
            occlusionMap: l.getUniformLocation(f, "occlusionMap"),
            opacity: l.getUniformLocation(f, "opacity"),
            color: l.getUniformLocation(f, "color"),
            scale: l.getUniformLocation(f, "scale"),
            rotation: l.getUniformLocation(f, "rotation"),
            screenPosition: l.getUniformLocation(f, "screenPosition")
        }
    };
    this.render = function (c, n, o, p) {
        if (0 !== b.length) {
            var q = new THREE.Vector3, r = p / o, s = .5 * o, t = .5 * p, u = 16 / p, v = new THREE.Vector2(u * r, u), w = new THREE.Vector3(1, 1, 0), x = new THREE.Vector2(1, 1);
            void 0 === f && m(), l.useProgram(f), l.enableVertexAttribArray(g.vertex), l.enableVertexAttribArray(g.uv), l.uniform1i(h.occlusionMap, 0), l.uniform1i(h.map, 1), l.bindBuffer(l.ARRAY_BUFFER, d), l.vertexAttribPointer(g.vertex, 2, l.FLOAT, !1, 16, 0), l.vertexAttribPointer(g.uv, 2, l.FLOAT, !1, 16, 8), l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, e), l.disable(l.CULL_FACE), l.depthMask(!1);
            for (var y = 0, z = b.length; z > y; y++) {
                u = 16 / p, v.set(u * r, u);
                var A = b[y];
                if (q.set(A.matrixWorld.elements[12], A.matrixWorld.elements[13], A.matrixWorld.elements[14]), q.applyMatrix4(n.matrixWorldInverse), q.applyProjection(n.projectionMatrix), w.copy(q), x.x = w.x * s + s, x.y = w.y * t + t, i || x.x > 0 && x.x < o && x.y > 0 && x.y < p) {
                    l.activeTexture(l.TEXTURE1), l.bindTexture(l.TEXTURE_2D, j), l.copyTexImage2D(l.TEXTURE_2D, 0, l.RGB, x.x - 8, x.y - 8, 16, 16, 0), l.uniform1i(h.renderType, 0), l.uniform2f(h.scale, v.x, v.y), l.uniform3f(h.screenPosition, w.x, w.y, w.z), l.disable(l.BLEND), l.enable(l.DEPTH_TEST), l.drawElements(l.TRIANGLES, 6, l.UNSIGNED_SHORT, 0), l.activeTexture(l.TEXTURE0), l.bindTexture(l.TEXTURE_2D, k), l.copyTexImage2D(l.TEXTURE_2D, 0, l.RGBA, x.x - 8, x.y - 8, 16, 16, 0), l.uniform1i(h.renderType, 1), l.disable(l.DEPTH_TEST), l.activeTexture(l.TEXTURE1), l.bindTexture(l.TEXTURE_2D, j), l.drawElements(l.TRIANGLES, 6, l.UNSIGNED_SHORT, 0), A.positionScreen.copy(w), A.customUpdateCallback ? A.customUpdateCallback(A) : A.updateLensFlares(), l.uniform1i(h.renderType, 2), l.enable(l.BLEND);
                    for (var B = 0, C = A.lensFlares.length; C > B; B++) {
                        var D = A.lensFlares[B];
                        D.opacity > .001 && D.scale > .001 && (w.x = D.x, w.y = D.y, w.z = D.z, u = D.size * D.scale / p, v.x = u * r, v.y = u, l.uniform3f(h.screenPosition, w.x, w.y, w.z), l.uniform2f(h.scale, v.x, v.y), l.uniform1f(h.rotation, D.rotation), l.uniform1f(h.opacity, D.opacity), l.uniform3f(h.color, D.color.r, D.color.g, D.color.b), a.setBlending(D.blending, D.blendEquation, D.blendSrc, D.blendDst), a.setTexture(D.texture, 1), l.drawElements(l.TRIANGLES, 6, l.UNSIGNED_SHORT, 0))
                    }
                }
            }
            l.enable(l.CULL_FACE), l.enable(l.DEPTH_TEST), l.depthMask(!0), a.resetGLState()
        }
    }
},THREE.ShadowMapPlugin = function (a, b, c, d) {
    function e(a, b, d) {
        if (b.visible) {
            var f = c[b.id];
            if (f && b.castShadow && (b.frustumCulled === !1 || o.intersectsObject(b) === !0))for (var g = 0, h = f.length; h > g; g++) {
                var i = f[g];
                b._modelViewMatrix.multiplyMatrices(d.matrixWorldInverse, b.matrixWorld), t.push(i)
            }
            for (var g = 0, h = b.children.length; h > g; g++)e(a, b.children[g], d)
        }
    }

    function f(a, b) {
        var c = new THREE.DirectionalLight;
        c.isVirtual = !0, c.onlyShadow = !0, c.castShadow = !0, c.shadowCameraNear = a.shadowCameraNear, c.shadowCameraFar = a.shadowCameraFar, c.shadowCameraLeft = a.shadowCameraLeft, c.shadowCameraRight = a.shadowCameraRight, c.shadowCameraBottom = a.shadowCameraBottom, c.shadowCameraTop = a.shadowCameraTop, c.shadowCameraVisible = a.shadowCameraVisible, c.shadowDarkness = a.shadowDarkness, c.shadowBias = a.shadowCascadeBias[b], c.shadowMapWidth = a.shadowCascadeWidth[b], c.shadowMapHeight = a.shadowCascadeHeight[b], c.pointsWorld = [], c.pointsFrustum = [];
        for (var d = c.pointsWorld, e = c.pointsFrustum, f = 0; 8 > f; f++)d[f] = new THREE.Vector3, e[f] = new THREE.Vector3;
        var g = a.shadowCascadeNearZ[b], h = a.shadowCascadeFarZ[b];
        return e[0].set(-1, -1, g), e[1].set(1, -1, g), e[2].set(-1, 1, g), e[3].set(1, 1, g), e[4].set(-1, -1, h), e[5].set(1, -1, h), e[6].set(-1, 1, h), e[7].set(1, 1, h), c
    }

    function g(a, b) {
        var c = a.shadowCascadeArray[b];
        c.position.copy(a.position), c.target.position.copy(a.target.position), c.lookAt(c.target), c.shadowCameraVisible = a.shadowCameraVisible, c.shadowDarkness = a.shadowDarkness, c.shadowBias = a.shadowCascadeBias[b];
        var d = a.shadowCascadeNearZ[b], e = a.shadowCascadeFarZ[b], f = c.pointsFrustum;
        f[0].z = d, f[1].z = d, f[2].z = d, f[3].z = d, f[4].z = e, f[5].z = e, f[6].z = e, f[7].z = e
    }

    function h(a, b) {
        var c = b.shadowCamera, d = b.pointsFrustum, e = b.pointsWorld;
        q.set(1 / 0, 1 / 0, 1 / 0), r.set(-1 / 0, -1 / 0, -1 / 0);
        for (var f = 0; 8 > f; f++) {
            var g = e[f];
            g.copy(d[f]), g.unproject(a), g.applyMatrix4(c.matrixWorldInverse), g.x < q.x && (q.x = g.x), g.x > r.x && (r.x = g.x), g.y < q.y && (q.y = g.y), g.y > r.y && (r.y = g.y), g.z < q.z && (q.z = g.z), g.z > r.z && (r.z = g.z)
        }
        c.left = q.x, c.right = r.x, c.top = r.y, c.bottom = q.y, c.updateProjectionMatrix()
    }

    function i(a) {
        return a.material instanceof THREE.MeshFaceMaterial ? a.material.materials[0] : a.material
    }

    var j, k, l, m, n = a.context, o = new THREE.Frustum, p = new THREE.Matrix4, q = new THREE.Vector3, r = new THREE.Vector3, s = new THREE.Vector3, t = [], u = THREE.ShaderLib.depthRGBA, v = THREE.UniformsUtils.clone(u.uniforms);
    j = new THREE.ShaderMaterial({
        uniforms: v,
        vertexShader: u.vertexShader,
        fragmentShader: u.fragmentShader
    }), k = new THREE.ShaderMaterial({
        uniforms: v,
        vertexShader: u.vertexShader,
        fragmentShader: u.fragmentShader,
        morphTargets: !0
    }), l = new THREE.ShaderMaterial({
        uniforms: v,
        vertexShader: u.vertexShader,
        fragmentShader: u.fragmentShader,
        skinning: !0
    }), m = new THREE.ShaderMaterial({
        uniforms: v,
        vertexShader: u.vertexShader,
        fragmentShader: u.fragmentShader,
        morphTargets: !0,
        skinning: !0
    }), j._shadowPass = !0, k._shadowPass = !0, l._shadowPass = !0, m._shadowPass = !0, this.render = function (c, q) {
        if (a.shadowMapEnabled !== !1) {
            var r, u, v, w, x, y, z, A, B, C, D, E, F, G = [], H = 0, I = null;
            for (n.clearColor(1, 1, 1, 1), n.disable(n.BLEND), n.enable(n.CULL_FACE), n.frontFace(n.CCW), n.cullFace(a.shadowMapCullFace === THREE.CullFaceFront ? n.FRONT : n.BACK), a.setDepthTest(!0), r = 0, u = b.length; u > r; r++)if (F = b[r], F.castShadow)if (F instanceof THREE.DirectionalLight && F.shadowCascade)for (x = 0; x < F.shadowCascadeCount; x++) {
                var J;
                if (F.shadowCascadeArray[x])J = F.shadowCascadeArray[x]; else {
                    J = f(F, x), J.originalCamera = q;
                    var K = new THREE.Gyroscope;
                    K.position.copy(F.shadowCascadeOffset), K.add(J), K.add(J.target), q.add(K), F.shadowCascadeArray[x] = J, console.log("Created virtualLight", J)
                }
                g(F, x), G[H] = J, H++
            } else G[H] = F, H++;
            for (r = 0, u = G.length; u > r; r++) {
                if (F = G[r], !F.shadowMap) {
                    var L = THREE.LinearFilter;
                    a.shadowMapType === THREE.PCFSoftShadowMap && (L = THREE.NearestFilter);
                    var M = {minFilter: L, magFilter: L, format: THREE.RGBAFormat};
                    F.shadowMap = new THREE.WebGLRenderTarget(F.shadowMapWidth, F.shadowMapHeight, M), F.shadowMapSize = new THREE.Vector2(F.shadowMapWidth, F.shadowMapHeight), F.shadowMatrix = new THREE.Matrix4
                }
                if (!F.shadowCamera) {
                    if (F instanceof THREE.SpotLight)F.shadowCamera = new THREE.PerspectiveCamera(F.shadowCameraFov, F.shadowMapWidth / F.shadowMapHeight, F.shadowCameraNear, F.shadowCameraFar); else {
                        if (!(F instanceof THREE.DirectionalLight)) {
                            console.error("Unsupported light type for shadow");
                            continue
                        }
                        F.shadowCamera = new THREE.OrthographicCamera(F.shadowCameraLeft, F.shadowCameraRight, F.shadowCameraTop, F.shadowCameraBottom, F.shadowCameraNear, F.shadowCameraFar)
                    }
                    c.add(F.shadowCamera), c.autoUpdate === !0 && c.updateMatrixWorld()
                }
                F.shadowCameraVisible && !F.cameraHelper && (F.cameraHelper = new THREE.CameraHelper(F.shadowCamera), c.add(F.cameraHelper)), F.isVirtual && J.originalCamera == q && h(q, F), y = F.shadowMap, z = F.shadowMatrix, A = F.shadowCamera, A.position.setFromMatrixPosition(F.matrixWorld), s.setFromMatrixPosition(F.target.matrixWorld), A.lookAt(s), A.updateMatrixWorld(), A.matrixWorldInverse.getInverse(A.matrixWorld), F.cameraHelper && (F.cameraHelper.visible = F.shadowCameraVisible), F.shadowCameraVisible && F.cameraHelper.update(), z.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), z.multiply(A.projectionMatrix), z.multiply(A.matrixWorldInverse), p.multiplyMatrices(A.projectionMatrix, A.matrixWorldInverse), o.setFromMatrix(p), a.setRenderTarget(y), a.clear(), t.length = 0, e(c, c, A);
                var N, O, P;
                for (v = 0, w = t.length; w > v; v++)D = t[v], E = D.object, B = D.buffer, N = i(E), O = void 0 !== E.geometry.morphTargets && E.geometry.morphTargets.length > 0 && N.morphTargets, P = E instanceof THREE.SkinnedMesh && N.skinning, C = E.customDepthMaterial ? E.customDepthMaterial : P ? O ? m : l : O ? k : j, a.setMaterialFaces(N), B instanceof THREE.BufferGeometry ? a.renderBufferDirect(A, b, I, C, B, E) : a.renderBuffer(A, b, I, C, B, E);
                for (v = 0, w = d.length; w > v; v++)D = d[v], E = D.object, E.visible && E.castShadow && (E._modelViewMatrix.multiplyMatrices(A.matrixWorldInverse, E.matrixWorld), a.renderImmediateObject(A, b, I, j, E))
            }
            var Q = a.getClearColor(), R = a.getClearAlpha();
            n.clearColor(Q.r, Q.g, Q.b, R), n.enable(n.BLEND), a.shadowMapCullFace === THREE.CullFaceFront && n.cullFace(n.BACK), a.resetGLState()
        }
    }
},THREE.SpritePlugin = function (a, b) {
    function c() {
        var b = k.createProgram(), c = k.createShader(k.VERTEX_SHADER), d = k.createShader(k.FRAGMENT_SHADER);
        return k.shaderSource(c, ["precision " + a.getPrecision() + " float;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform float rotation;", "uniform vec2 scale;", "uniform vec2 uvOffset;", "uniform vec2 uvScale;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uvOffset + uv * uvScale;", "vec2 alignedPosition = position * scale;", "vec2 rotatedPosition;", "rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;", "rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;", "vec4 finalPosition;", "finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );", "finalPosition.xy += rotatedPosition;", "finalPosition = projectionMatrix * finalPosition;", "gl_Position = finalPosition;", "}"].join("\n")), k.shaderSource(d, ["precision " + a.getPrecision() + " float;", "uniform vec3 color;", "uniform sampler2D map;", "uniform float opacity;", "uniform int fogType;", "uniform vec3 fogColor;", "uniform float fogDensity;", "uniform float fogNear;", "uniform float fogFar;", "uniform float alphaTest;", "varying vec2 vUV;", "void main() {", "vec4 texture = texture2D( map, vUV );", "if ( texture.a < alphaTest ) discard;", "gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );", "if ( fogType > 0 ) {", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "float fogFactor = 0.0;", "if ( fogType == 1 ) {", "fogFactor = smoothstep( fogNear, fogFar, depth );", "} else {", "const float LOG2 = 1.442695;", "float fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );", "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "}", "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "}", "}"].join("\n")), k.compileShader(c), k.compileShader(d), k.attachShader(b, c), k.attachShader(b, d), k.linkProgram(b), b
    }

    function d(a, b) {
        return a.z !== b.z ? b.z - a.z : b.id - a.id
    }

    var e, f, g, h, i, j, k = a.context, l = function () {
        var a = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]), b = new Uint16Array([0, 1, 2, 0, 2, 3]);
        e = k.createBuffer(), f = k.createBuffer(), k.bindBuffer(k.ARRAY_BUFFER, e), k.bufferData(k.ARRAY_BUFFER, a, k.STATIC_DRAW), k.bindBuffer(k.ELEMENT_ARRAY_BUFFER, f), k.bufferData(k.ELEMENT_ARRAY_BUFFER, b, k.STATIC_DRAW), g = c(), h = {
            position: k.getAttribLocation(g, "position"),
            uv: k.getAttribLocation(g, "uv")
        }, i = {
            uvOffset: k.getUniformLocation(g, "uvOffset"),
            uvScale: k.getUniformLocation(g, "uvScale"),
            rotation: k.getUniformLocation(g, "rotation"),
            scale: k.getUniformLocation(g, "scale"),
            color: k.getUniformLocation(g, "color"),
            map: k.getUniformLocation(g, "map"),
            opacity: k.getUniformLocation(g, "opacity"),
            modelViewMatrix: k.getUniformLocation(g, "modelViewMatrix"),
            projectionMatrix: k.getUniformLocation(g, "projectionMatrix"),
            fogType: k.getUniformLocation(g, "fogType"),
            fogDensity: k.getUniformLocation(g, "fogDensity"),
            fogNear: k.getUniformLocation(g, "fogNear"),
            fogFar: k.getUniformLocation(g, "fogFar"),
            fogColor: k.getUniformLocation(g, "fogColor"),
            alphaTest: k.getUniformLocation(g, "alphaTest")
        };
        var d = document.createElement("canvas");
        d.width = 8, d.height = 8;
        var l = d.getContext("2d");
        l.fillStyle = "white", l.fillRect(0, 0, 8, 8), j = new THREE.Texture(d), j.needsUpdate = !0
    };
    this.render = function (c, m) {
        if (0 !== b.length) {
            void 0 === g && l(), k.useProgram(g), k.enableVertexAttribArray(h.position), k.enableVertexAttribArray(h.uv), k.disable(k.CULL_FACE), k.enable(k.BLEND), k.bindBuffer(k.ARRAY_BUFFER, e), k.vertexAttribPointer(h.position, 2, k.FLOAT, !1, 16, 0), k.vertexAttribPointer(h.uv, 2, k.FLOAT, !1, 16, 8), k.bindBuffer(k.ELEMENT_ARRAY_BUFFER, f), k.uniformMatrix4fv(i.projectionMatrix, !1, m.projectionMatrix.elements), k.activeTexture(k.TEXTURE0), k.uniform1i(i.map, 0);
            var n = 0, o = 0, p = c.fog;
            p ? (k.uniform3f(i.fogColor, p.color.r, p.color.g, p.color.b), p instanceof THREE.Fog ? (k.uniform1f(i.fogNear, p.near), k.uniform1f(i.fogFar, p.far), k.uniform1i(i.fogType, 1), n = 1, o = 1) : p instanceof THREE.FogExp2 && (k.uniform1f(i.fogDensity, p.density), k.uniform1i(i.fogType, 2), n = 2, o = 2)) : (k.uniform1i(i.fogType, 0), n = 0, o = 0);
            for (var q = 0, r = b.length; r > q; q++) {
                var s = b[q];
                s._modelViewMatrix.multiplyMatrices(m.matrixWorldInverse, s.matrixWorld), s.z = null === s.renderDepth ? -s._modelViewMatrix.elements[14] : s.renderDepth
            }
            b.sort(d);
            for (var t = [], q = 0, r = b.length; r > q; q++) {
                var s = b[q], u = s.material;
                k.uniform1f(i.alphaTest, u.alphaTest), k.uniformMatrix4fv(i.modelViewMatrix, !1, s._modelViewMatrix.elements), t[0] = s.scale.x, t[1] = s.scale.y;
                var v = 0;
                c.fog && u.fog && (v = o), n !== v && (k.uniform1i(i.fogType, v), n = v), null !== u.map ? (k.uniform2f(i.uvOffset, u.map.offset.x, u.map.offset.y), k.uniform2f(i.uvScale, u.map.repeat.x, u.map.repeat.y)) : (k.uniform2f(i.uvOffset, 0, 0), k.uniform2f(i.uvScale, 1, 1)), k.uniform1f(i.opacity, u.opacity), k.uniform3f(i.color, u.color.r, u.color.g, u.color.b), k.uniform1f(i.rotation, u.rotation), k.uniform2fv(i.scale, t), a.setBlending(u.blending, u.blendEquation, u.blendSrc, u.blendDst), a.setDepthTest(u.depthTest), a.setDepthWrite(u.depthWrite), u.map && u.map.image && u.map.image.width ? a.setTexture(u.map, 0) : a.setTexture(j, 0), k.drawElements(k.TRIANGLES, 6, k.UNSIGNED_SHORT, 0)
            }
            k.enable(k.CULL_FACE), a.resetGLState()
        }
    }
},THREE.GeometryUtils = {
    merge: function (a, b, c) {
        console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
        var d;
        b instanceof THREE.Mesh && (b.matrixAutoUpdate && b.updateMatrix(), d = b.matrix, b = b.geometry), a.merge(b, d, c)
    }, center: function (a) {
        return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."), a.center()
    }
},THREE.ImageUtils = {
    crossOrigin: void 0, loadTexture: function (a, b, c, d) {
        var e = new THREE.ImageLoader;
        e.crossOrigin = this.crossOrigin;
        var f = new THREE.Texture(void 0, b);
        return e.load(a, function (a) {
            f.image = a, f.needsUpdate = !0, c && c(f)
        }, void 0, function (a) {
            d && d(a)
        }), f.sourceFile = a, f
    }, loadTextureCube: function (a, b, c) {
        var d = [], e = new THREE.ImageLoader;
        e.crossOrigin = this.crossOrigin;
        var f = new THREE.CubeTexture(d, b);
        f.flipY = !1;
        for (var g = 0, h = function (b) {
            e.load(a[b], function (a) {
                f.images[b] = a, g += 1, 6 === g && (f.needsUpdate = !0, c && c(f))
            })
        }, i = 0, j = a.length; j > i; ++i)h(i);
        return f
    }, loadCompressedTexture: function () {
        console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
    }, loadCompressedTextureCube: function () {
        console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
    }, getNormalMap: function (a, b) {
        var c = function (a, b) {
            return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
        }, d = function (a, b) {
            return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]
        }, e = function (a) {
            var b = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
            return [a[0] / b, a[1] / b, a[2] / b]
        };
        b = 1 | b;
        var f = a.width, g = a.height, h = document.createElement("canvas");
        h.width = f, h.height = g;
        var i = h.getContext("2d");
        i.drawImage(a, 0, 0);
        for (var j = i.getImageData(0, 0, f, g).data, k = i.createImageData(f, g), l = k.data, m = 0; f > m; m++)for (var n = 0; g > n; n++) {
            var o = 0 > n - 1 ? 0 : n - 1, p = n + 1 > g - 1 ? g - 1 : n + 1, q = 0 > m - 1 ? 0 : m - 1, r = m + 1 > f - 1 ? f - 1 : m + 1, s = [], t = [0, 0, j[4 * (n * f + m)] / 255 * b];
            s.push([-1, 0, j[4 * (n * f + q)] / 255 * b]), s.push([-1, -1, j[4 * (o * f + q)] / 255 * b]), s.push([0, -1, j[4 * (o * f + m)] / 255 * b]), s.push([1, -1, j[4 * (o * f + r)] / 255 * b]), s.push([1, 0, j[4 * (n * f + r)] / 255 * b]), s.push([1, 1, j[4 * (p * f + r)] / 255 * b]), s.push([0, 1, j[4 * (p * f + m)] / 255 * b]), s.push([-1, 1, j[4 * (p * f + q)] / 255 * b]);
            for (var u = [], v = s.length, w = 0; v > w; w++) {
                var x = s[w], y = s[(w + 1) % v];
                x = d(x, t), y = d(y, t), u.push(e(c(x, y)))
            }
            for (var z = [0, 0, 0], w = 0; w < u.length; w++)z[0] += u[w][0], z[1] += u[w][1], z[2] += u[w][2];
            z[0] /= u.length, z[1] /= u.length, z[2] /= u.length;
            var A = 4 * (n * f + m);
            l[A] = (z[0] + 1) / 2 * 255 | 0, l[A + 1] = (z[1] + 1) / 2 * 255 | 0, l[A + 2] = 255 * z[2] | 0, l[A + 3] = 255
        }
        return i.putImageData(k, 0, 0), h
    }, generateDataTexture: function (a, b, c) {
        for (var d = a * b, e = new Uint8Array(3 * d), f = Math.floor(255 * c.r), g = Math.floor(255 * c.g), h = Math.floor(255 * c.b), i = 0; d > i; i++)e[3 * i] = f, e[3 * i + 1] = g, e[3 * i + 2] = h;
        var j = new THREE.DataTexture(e, a, b, THREE.RGBFormat);
        return j.needsUpdate = !0, j
    }
},THREE.SceneUtils = {
    createMultiMaterialObject: function (a, b) {
        for (var c = new THREE.Object3D, d = 0, e = b.length; e > d; d++)c.add(new THREE.Mesh(a, b[d]));
        return c
    }, detach: function (a, b, c) {
        a.applyMatrix(b.matrixWorld), b.remove(a), c.add(a)
    }, attach: function (a, b, c) {
        var d = new THREE.Matrix4;
        d.getInverse(c.matrixWorld), a.applyMatrix(d), b.remove(a), c.add(a)
    }
},THREE.FontUtils = {
    faces: {}, face: "helvetiker", weight: "normal", style: "normal", size: 150, divisions: 10, getFace: function () {
        try {
            return this.faces[this.face][this.weight][this.style]
        } catch (a) {
            throw"The font " + this.face + " with " + this.weight + " weight and " + this.style + " style is missing."
        }
    }, loadFace: function (a) {
        var b = a.familyName.toLowerCase(), c = this;
        c.faces[b] = c.faces[b] || {}, c.faces[b][a.cssFontWeight] = c.faces[b][a.cssFontWeight] || {}, c.faces[b][a.cssFontWeight][a.cssFontStyle] = a;
        c.faces[b][a.cssFontWeight][a.cssFontStyle] = a;
        return a
    }, drawText: function (a) {
        var b, c = this.getFace(), d = this.size / c.resolution, e = 0, f = String(a).split(""), g = f.length, h = [];
        for (b = 0; g > b; b++) {
            var i = new THREE.Path, j = this.extractGlyphPoints(f[b], c, d, e, i);
            e += j.offset, h.push(j.path)
        }
        var k = e / 2;
        return {paths: h, offset: k}
    }, extractGlyphPoints: function (a, b, c, d, e) {
        var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = [], z = b.glyphs[a] || b.glyphs["?"];
        if (z) {
            if (z.o)for (i = z._cachedOutline || (z._cachedOutline = z.o.split(" ")), k = i.length, l = c, m = c, f = 0; k > f;)switch (j = i[f++]) {
                case"m":
                    n = i[f++] * l + d, o = i[f++] * m, e.moveTo(n, o);
                    break;
                case"l":
                    n = i[f++] * l + d, o = i[f++] * m, e.lineTo(n, o);
                    break;
                case"q":
                    if (p = i[f++] * l + d, q = i[f++] * m, t = i[f++] * l + d, u = i[f++] * m, e.quadraticCurveTo(t, u, p, q), x = y[y.length - 1])for (r = x.x, s = x.y, g = 1, h = this.divisions; h >= g; g++) {
                        var A = g / h;
                        THREE.Shape.Utils.b2(A, r, t, p), THREE.Shape.Utils.b2(A, s, u, q)
                    }
                    break;
                case"b":
                    if (p = i[f++] * l + d, q = i[f++] * m, t = i[f++] * l + d, u = i[f++] * m, v = i[f++] * l + d, w = i[f++] * m, e.bezierCurveTo(t, u, v, w, p, q), x = y[y.length - 1])for (r = x.x, s = x.y, g = 1, h = this.divisions; h >= g; g++) {
                        var A = g / h;
                        THREE.Shape.Utils.b3(A, r, t, v, p), THREE.Shape.Utils.b3(A, s, u, w, q)
                    }
            }
            return {offset: z.ha * c, path: e}
        }
    }
},THREE.FontUtils.generateShapes = function (a, b) {
    b = b || {};
    var c = void 0 !== b.size ? b.size : 100, d = void 0 !== b.curveSegments ? b.curveSegments : 4, e = void 0 !== b.font ? b.font : "helvetiker", f = void 0 !== b.weight ? b.weight : "normal", g = void 0 !== b.style ? b.style : "normal";
    THREE.FontUtils.size = c, THREE.FontUtils.divisions = d, THREE.FontUtils.face = e, THREE.FontUtils.weight = f, THREE.FontUtils.style = g;
    for (var h = THREE.FontUtils.drawText(a), i = h.paths, j = [], k = 0, l = i.length; l > k; k++)Array.prototype.push.apply(j, i[k].toShapes());
    return j
},function (a) {
    var b = 1e-10, c = function (a, b) {
        var c = a.length;
        if (3 > c)return null;
        var f, g, h, i = [], j = [], k = [];
        if (d(a) > 0)for (g = 0; c > g; g++)j[g] = g; else for (g = 0; c > g; g++)j[g] = c - 1 - g;
        var l = c, m = 2 * l;
        for (g = l - 1; l > 2;) {
            if (m-- <= 0)return console.log("Warning, unable to triangulate polygon!"), b ? k : i;
            if (f = g, f >= l && (f = 0), g = f + 1, g >= l && (g = 0), h = g + 1, h >= l && (h = 0), e(a, f, g, h, l, j)) {
                var n, o, p, q, r;
                for (n = j[f], o = j[g], p = j[h], i.push([a[n], a[o], a[p]]), k.push([j[f], j[g], j[h]]), q = g, r = g + 1; l > r; q++, r++)j[q] = j[r];
                l--, m = 2 * l
            }
        }
        return b ? k : i
    }, d = function (a) {
        for (var b = a.length, c = 0, d = b - 1, e = 0; b > e; d = e++)c += a[d].x * a[e].y - a[e].x * a[d].y;
        return .5 * c
    }, e = function (a, c, d, e, f, g) {
        var h, i, j, k, l, m, n, o, p;
        if (i = a[g[c]].x, j = a[g[c]].y, k = a[g[d]].x, l = a[g[d]].y, m = a[g[e]].x, n = a[g[e]].y, b > (k - i) * (n - j) - (l - j) * (m - i))return !1;
        var q, r, s, t, u, v, w, x, y, z, A, B, C, D, E;
        for (q = m - k, r = n - l, s = i - m, t = j - n, u = k - i, v = l - j, h = 0; f > h; h++)if (o = a[g[h]].x, p = a[g[h]].y, !(o === i && p === j || o === k && p === l || o === m && p === n) && (w = o - i, x = p - j, y = o - k, z = p - l, A = o - m, B = p - n, E = q * z - r * y, C = u * x - v * w, D = s * B - t * A, E >= -b && D >= -b && C >= -b))return !1;
        return !0
    };
    return a.Triangulate = c, a.Triangulate.area = d, a
}(THREE.FontUtils),self._typeface_js = {
    faces: THREE.FontUtils.faces,
    loadFace: THREE.FontUtils.loadFace
},THREE.typeface_js = self._typeface_js,THREE.Audio = function (a) {
    THREE.Object3D.call(this), this.type = "Audio", this.context = a.context, this.source = this.context.createBufferSource(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.panner = this.context.createPanner(), this.panner.connect(this.gain)
},THREE.Audio.prototype = Object.create(THREE.Object3D.prototype),THREE.Audio.prototype.load = function (a) {
    var b = this, c = new XMLHttpRequest;
    return c.open("GET", a, !0), c.responseType = "arraybuffer", c.onload = function () {
        b.context.decodeAudioData(this.response, function (a) {
            b.source.buffer = a, b.source.connect(b.panner), b.source.start(0)
        })
    }, c.send(), this
},THREE.Audio.prototype.setLoop = function (a) {
    this.source.loop = a
},THREE.Audio.prototype.setRefDistance = function (a) {
    this.panner.refDistance = a
},THREE.Audio.prototype.setRolloffFactor = function (a) {
    this.panner.rolloffFactor = a
},THREE.Audio.prototype.updateMatrixWorld = function () {
    var a = new THREE.Vector3;
    return function (b) {
        THREE.Object3D.prototype.updateMatrixWorld.call(this, b), a.setFromMatrixPosition(this.matrixWorld), this.panner.setPosition(a.x, a.y, a.z)
    }
}(),THREE.AudioListener = function () {
    THREE.Object3D.call(this), this.type = "AudioListener", this.context = new (window.AudioContext || window.webkitAudioContext)
},THREE.AudioListener.prototype = Object.create(THREE.Object3D.prototype),THREE.AudioListener.prototype.updateMatrixWorld = function () {
    var a = new THREE.Vector3, b = new THREE.Quaternion, c = new THREE.Vector3, d = new THREE.Vector3, e = new THREE.Vector3, f = new THREE.Vector3;
    return function (g) {
        THREE.Object3D.prototype.updateMatrixWorld.call(this, g);
        var h = this.context.listener;
        this.matrixWorld.decompose(a, b, c), d.set(0, 0, -1).applyQuaternion(b), e.subVectors(a, f), h.setPosition(a.x, a.y, a.z), h.setOrientation(d.x, d.y, d.z, this.up.x, this.up.y, this.up.z), h.setVelocity(e.x, e.y, e.z), f.copy(a)
    }
}(),THREE.Curve = function () {
},THREE.Curve.prototype.getPoint = function () {
    return console.log("Warning, getPoint() not implemented!"), null
},THREE.Curve.prototype.getPointAt = function (a) {
    var b = this.getUtoTmapping(a);
    return this.getPoint(b)
},THREE.Curve.prototype.getPoints = function (a) {
    a || (a = 5);
    var b, c = [];
    for (b = 0; a >= b; b++)c.push(this.getPoint(b / a));
    return c
},THREE.Curve.prototype.getSpacedPoints = function (a) {
    a || (a = 5);
    var b, c = [];
    for (b = 0; a >= b; b++)c.push(this.getPointAt(b / a));
    return c
},THREE.Curve.prototype.getLength = function () {
    var a = this.getLengths();
    return a[a.length - 1]
},THREE.Curve.prototype.getLengths = function (a) {
    if (a || (a = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200), this.cacheArcLengths && this.cacheArcLengths.length == a + 1 && !this.needsUpdate)return this.cacheArcLengths;
    this.needsUpdate = !1;
    var b, c, d = [], e = this.getPoint(0), f = 0;
    for (d.push(0), c = 1; a >= c; c++)b = this.getPoint(c / a), f += b.distanceTo(e), d.push(f), e = b;
    return this.cacheArcLengths = d, d
},THREE.Curve.prototype.updateArcLengths = function () {
    this.needsUpdate = !0, this.getLengths()
},THREE.Curve.prototype.getUtoTmapping = function (a, b) {
    var c, d = this.getLengths(), e = 0, f = d.length;
    c = b ? b : a * d[f - 1];
    for (var g, h = 0, i = f - 1; i >= h;)if (e = Math.floor(h + (i - h) / 2), g = d[e] - c, 0 > g)h = e + 1; else {
        if (!(g > 0)) {
            i = e;
            break
        }
        i = e - 1
    }
    if (e = i, d[e] == c) {
        var j = e / (f - 1);
        return j
    }
    var k = d[e], l = d[e + 1], m = l - k, n = (c - k) / m, j = (e + n) / (f - 1);
    return j
},THREE.Curve.prototype.getTangent = function (a) {
    var b = 1e-4, c = a - b, d = a + b;
    0 > c && (c = 0), d > 1 && (d = 1);
    var e = this.getPoint(c), f = this.getPoint(d), g = f.clone().sub(e);
    return g.normalize()
},THREE.Curve.prototype.getTangentAt = function (a) {
    var b = this.getUtoTmapping(a);
    return this.getTangent(b)
},THREE.Curve.Utils = {
    tangentQuadraticBezier: function (a, b, c, d) {
        return 2 * (1 - a) * (c - b) + 2 * a * (d - c)
    }, tangentCubicBezier: function (a, b, c, d, e) {
        return -3 * b * (1 - a) * (1 - a) + 3 * c * (1 - a) * (1 - a) - 6 * a * c * (1 - a) + 6 * a * d * (1 - a) - 3 * a * a * d + 3 * a * a * e
    }, tangentSpline: function (a) {
        var b = 6 * a * a - 6 * a, c = 3 * a * a - 4 * a + 1, d = -6 * a * a + 6 * a, e = 3 * a * a - 2 * a;
        return b + c + d + e
    }, interpolate: function (a, b, c, d, e) {
        var f = .5 * (c - a), g = .5 * (d - b), h = e * e, i = e * h;
        return (2 * b - 2 * c + f + g) * i + (-3 * b + 3 * c - 2 * f - g) * h + f * e + b
    }
},THREE.Curve.create = function (a, b) {
    return a.prototype = Object.create(THREE.Curve.prototype), a.prototype.getPoint = b, a
},THREE.CurvePath = function () {
    this.curves = [], this.bends = [], this.autoClose = !1
},THREE.CurvePath.prototype = Object.create(THREE.Curve.prototype),THREE.CurvePath.prototype.add = function (a) {
    this.curves.push(a)
},THREE.CurvePath.prototype.checkConnection = function () {
},THREE.CurvePath.prototype.closePath = function () {
    var a = this.curves[0].getPoint(0), b = this.curves[this.curves.length - 1].getPoint(1);
    a.equals(b) || this.curves.push(new THREE.LineCurve(b, a))
},THREE.CurvePath.prototype.getPoint = function (a) {
    for (var b, c, d = a * this.getLength(), e = this.getCurveLengths(), f = 0; f < e.length;) {
        if (e[f] >= d) {
            b = e[f] - d, c = this.curves[f];
            var g = 1 - b / c.getLength();
            return c.getPointAt(g)
        }
        f++
    }
    return null
},THREE.CurvePath.prototype.getLength = function () {
    var a = this.getCurveLengths();
    return a[a.length - 1]
},THREE.CurvePath.prototype.getCurveLengths = function () {
    if (this.cacheLengths && this.cacheLengths.length == this.curves.length)return this.cacheLengths;
    var a, b = [], c = 0, d = this.curves.length;
    for (a = 0; d > a; a++)c += this.curves[a].getLength(), b.push(c);
    return this.cacheLengths = b, b
},THREE.CurvePath.prototype.getBoundingBox = function () {
    var a, b, c, d, e, f, g = this.getPoints();
    a = b = Number.NEGATIVE_INFINITY, d = e = Number.POSITIVE_INFINITY;
    var h, i, j, k, l = g[0] instanceof THREE.Vector3;
    for (k = l ? new THREE.Vector3 : new THREE.Vector2, i = 0, j = g.length; j > i; i++)h = g[i], h.x > a ? a = h.x : h.x < d && (d = h.x), h.y > b ? b = h.y : h.y < e && (e = h.y), l && (h.z > c ? c = h.z : h.z < f && (f = h.z)), k.add(h);
    var m = {minX: d, minY: e, maxX: a, maxY: b};
    return l && (m.maxZ = c, m.minZ = f), m
},THREE.CurvePath.prototype.createPointsGeometry = function (a) {
    var b = this.getPoints(a, !0);
    return this.createGeometry(b)
},THREE.CurvePath.prototype.createSpacedPointsGeometry = function (a) {
    var b = this.getSpacedPoints(a, !0);
    return this.createGeometry(b)
},THREE.CurvePath.prototype.createGeometry = function (a) {
    for (var b = new THREE.Geometry, c = 0; c < a.length; c++)b.vertices.push(new THREE.Vector3(a[c].x, a[c].y, a[c].z || 0));
    return b
},THREE.CurvePath.prototype.addWrapPath = function (a) {
    this.bends.push(a)
},THREE.CurvePath.prototype.getTransformedPoints = function (a, b) {
    var c, d, e = this.getPoints(a);
    for (b || (b = this.bends), c = 0, d = b.length; d > c; c++)e = this.getWrapPoints(e, b[c]);
    return e
},THREE.CurvePath.prototype.getTransformedSpacedPoints = function (a, b) {
    var c, d, e = this.getSpacedPoints(a);
    for (b || (b = this.bends), c = 0, d = b.length; d > c; c++)e = this.getWrapPoints(e, b[c]);
    return e
},THREE.CurvePath.prototype.getWrapPoints = function (a, b) {
    var c, d, e, f, g, h, i = this.getBoundingBox();
    for (c = 0, d = a.length; d > c; c++) {
        e = a[c], f = e.x, g = e.y, h = f / i.maxX, h = b.getUtoTmapping(h, f);
        var j = b.getPoint(h), k = b.getTangent(h);
        k.set(-k.y, k.x).multiplyScalar(g), e.x = j.x + k.x, e.y = j.y + k.y
    }
    return a
},THREE.Gyroscope = function () {
    THREE.Object3D.call(this)
},THREE.Gyroscope.prototype = Object.create(THREE.Object3D.prototype),THREE.Gyroscope.prototype.updateMatrixWorld = function () {
    var a = new THREE.Vector3, b = new THREE.Quaternion, c = new THREE.Vector3, d = new THREE.Vector3, e = new THREE.Quaternion, f = new THREE.Vector3;
    return function (g) {
        this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || g) && (this.parent ? (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorld.decompose(d, e, f), this.matrix.decompose(a, b, c), this.matrixWorld.compose(d, b, f)) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, g = !0);
        for (var h = 0, i = this.children.length; i > h; h++)this.children[h].updateMatrixWorld(g)
    }
}(),THREE.Path = function (a) {
    THREE.CurvePath.call(this), this.actions = [], a && this.fromPoints(a)
},THREE.Path.prototype = Object.create(THREE.CurvePath.prototype),THREE.PathActions = {
    MOVE_TO: "moveTo",
    LINE_TO: "lineTo",
    QUADRATIC_CURVE_TO: "quadraticCurveTo",
    BEZIER_CURVE_TO: "bezierCurveTo",
    CSPLINE_THRU: "splineThru",
    ARC: "arc",
    ELLIPSE: "ellipse"
},THREE.Path.prototype.fromPoints = function (a) {
    this.moveTo(a[0].x, a[0].y);
    for (var b = 1, c = a.length; c > b; b++)this.lineTo(a[b].x, a[b].y)
},THREE.Path.prototype.moveTo = function () {
    var a = Array.prototype.slice.call(arguments);
    this.actions.push({action: THREE.PathActions.MOVE_TO, args: a})
},THREE.Path.prototype.lineTo = function (a, b) {
    var c = Array.prototype.slice.call(arguments), d = this.actions[this.actions.length - 1].args, e = d[d.length - 2], f = d[d.length - 1], g = new THREE.LineCurve(new THREE.Vector2(e, f), new THREE.Vector2(a, b));
    this.curves.push(g), this.actions.push({action: THREE.PathActions.LINE_TO, args: c})
},THREE.Path.prototype.quadraticCurveTo = function (a, b, c, d) {
    var e = Array.prototype.slice.call(arguments), f = this.actions[this.actions.length - 1].args, g = f[f.length - 2], h = f[f.length - 1], i = new THREE.QuadraticBezierCurve(new THREE.Vector2(g, h), new THREE.Vector2(a, b), new THREE.Vector2(c, d));
    this.curves.push(i), this.actions.push({action: THREE.PathActions.QUADRATIC_CURVE_TO, args: e})
},THREE.Path.prototype.bezierCurveTo = function (a, b, c, d, e, f) {
    var g = Array.prototype.slice.call(arguments), h = this.actions[this.actions.length - 1].args, i = h[h.length - 2], j = h[h.length - 1], k = new THREE.CubicBezierCurve(new THREE.Vector2(i, j), new THREE.Vector2(a, b), new THREE.Vector2(c, d), new THREE.Vector2(e, f));
    this.curves.push(k), this.actions.push({action: THREE.PathActions.BEZIER_CURVE_TO, args: g})
},THREE.Path.prototype.splineThru = function (a) {
    var b = Array.prototype.slice.call(arguments), c = this.actions[this.actions.length - 1].args, d = c[c.length - 2], e = c[c.length - 1], f = [new THREE.Vector2(d, e)];
    Array.prototype.push.apply(f, a);
    var g = new THREE.SplineCurve(f);
    this.curves.push(g), this.actions.push({action: THREE.PathActions.CSPLINE_THRU, args: b})
},THREE.Path.prototype.arc = function (a, b, c, d, e, f) {
    var g = this.actions[this.actions.length - 1].args, h = g[g.length - 2], i = g[g.length - 1];
    this.absarc(a + h, b + i, c, d, e, f)
},THREE.Path.prototype.absarc = function (a, b, c, d, e, f) {
    this.absellipse(a, b, c, c, d, e, f)
},THREE.Path.prototype.ellipse = function (a, b, c, d, e, f, g) {
    var h = this.actions[this.actions.length - 1].args, i = h[h.length - 2], j = h[h.length - 1];
    this.absellipse(a + i, b + j, c, d, e, f, g)
},THREE.Path.prototype.absellipse = function (a, b, c, d, e, f, g) {
    var h = Array.prototype.slice.call(arguments), i = new THREE.EllipseCurve(a, b, c, d, e, f, g);
    this.curves.push(i);
    var j = i.getPoint(1);
    h.push(j.x), h.push(j.y), this.actions.push({action: THREE.PathActions.ELLIPSE, args: h})
},THREE.Path.prototype.getSpacedPoints = function (a) {
    a || (a = 40);
    for (var b = [], c = 0; a > c; c++)b.push(this.getPoint(c / a));
    return b
},THREE.Path.prototype.getPoints = function (a, b) {
    if (this.useSpacedPoints)return console.log("tata"), this.getSpacedPoints(a, b);
    a = a || 12;
    var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = [];
    for (c = 0, d = this.actions.length; d > c; c++)switch (e = this.actions[c], f = e.action, g = e.args, f) {
        case THREE.PathActions.MOVE_TO:
            u.push(new THREE.Vector2(g[0], g[1]));
            break;
        case THREE.PathActions.LINE_TO:
            u.push(new THREE.Vector2(g[0], g[1]));
            break;
        case THREE.PathActions.QUADRATIC_CURVE_TO:
            for (h = g[2], i = g[3], l = g[0], m = g[1], u.length > 0 ? (p = u[u.length - 1], n = p.x, o = p.y) : (p = this.actions[c - 1].args, n = p[p.length - 2], o = p[p.length - 1]), q = 1; a >= q; q++)r = q / a, s = THREE.Shape.Utils.b2(r, n, l, h), t = THREE.Shape.Utils.b2(r, o, m, i), u.push(new THREE.Vector2(s, t));
            break;
        case THREE.PathActions.BEZIER_CURVE_TO:
            for (h = g[4], i = g[5], l = g[0], m = g[1], j = g[2], k = g[3], u.length > 0 ? (p = u[u.length - 1], n = p.x, o = p.y) : (p = this.actions[c - 1].args, n = p[p.length - 2], o = p[p.length - 1]), q = 1; a >= q; q++)r = q / a, s = THREE.Shape.Utils.b3(r, n, l, j, h), t = THREE.Shape.Utils.b3(r, o, m, k, i), u.push(new THREE.Vector2(s, t));
            break;
        case THREE.PathActions.CSPLINE_THRU:
            p = this.actions[c - 1].args;
            var v = new THREE.Vector2(p[p.length - 2], p[p.length - 1]), w = [v], x = a * g[0].length;
            w = w.concat(g[0]);
            var y = new THREE.SplineCurve(w);
            for (q = 1; x >= q; q++)u.push(y.getPointAt(q / x));
            break;
        case THREE.PathActions.ARC:
            var z, A = g[0], B = g[1], C = g[2], D = g[3], E = g[4], F = !!g[5], G = E - D, H = 2 * a;
            for (q = 1; H >= q; q++)r = q / H, F || (r = 1 - r), z = D + r * G, s = A + C * Math.cos(z), t = B + C * Math.sin(z), u.push(new THREE.Vector2(s, t));
            break;
        case THREE.PathActions.ELLIPSE:
            var z, A = g[0], B = g[1], I = g[2], J = g[3], D = g[4], E = g[5], F = !!g[6], G = E - D, H = 2 * a;
            for (q = 1; H >= q; q++)r = q / H, F || (r = 1 - r), z = D + r * G, s = A + I * Math.cos(z), t = B + J * Math.sin(z), u.push(new THREE.Vector2(s, t))
    }
    var K = u[u.length - 1], L = 1e-10;
    return Math.abs(K.x - u[0].x) < L && Math.abs(K.y - u[0].y) < L && u.splice(u.length - 1, 1), b && u.push(u[0]), u
},THREE.Path.prototype.toShapes = function (a, b) {
    function c(a) {
        var b, c, d, e, f, g = [], h = new THREE.Path;
        for (b = 0, c = a.length; c > b; b++)d = a[b], f = d.args, e = d.action, e == THREE.PathActions.MOVE_TO && 0 != h.actions.length && (g.push(h), h = new THREE.Path), h[e].apply(h, f);
        return 0 != h.actions.length && g.push(h), g
    }

    function d(a) {
        for (var b = [], c = 0, d = a.length; d > c; c++) {
            var e = a[c], f = new THREE.Shape;
            f.actions = e.actions, f.curves = e.curves, b.push(f)
        }
        return b
    }

    function e(a, b) {
        for (var c = 1e-10, d = b.length, e = !1, f = d - 1, g = 0; d > g; f = g++) {
            var h = b[f], i = b[g], j = i.x - h.x, k = i.y - h.y;
            if (Math.abs(k) > c) {
                if (0 > k && (h = b[g], j = -j, i = b[f], k = -k), a.y < h.y || a.y > i.y)continue;
                if (a.y == h.y) {
                    if (a.x == h.x)return !0
                } else {
                    var l = k * (a.x - h.x) - j * (a.y - h.y);
                    if (0 == l)return !0;
                    if (0 > l)continue;
                    e = !e
                }
            } else {
                if (a.y != h.y)continue;
                if (i.x <= a.x && a.x <= h.x || h.x <= a.x && a.x <= i.x)return !0
            }
        }
        return e
    }

    var f = c(this.actions);
    if (0 == f.length)return [];
    if (b === !0)return d(f);
    var g, h, i, j = [];
    if (1 == f.length)return h = f[0], i = new THREE.Shape, i.actions = h.actions, i.curves = h.curves, j.push(i), j;
    var k = !THREE.Shape.Utils.isClockWise(f[0].getPoints());
    k = a ? !k : k;
    var l, m = [], n = [], o = [], p = 0;
    n[p] = void 0, o[p] = [];
    var q, r;
    for (q = 0, r = f.length; r > q; q++)h = f[q], l = h.getPoints(), g = THREE.Shape.Utils.isClockWise(l), g = a ? !g : g, g ? (!k && n[p] && p++, n[p] = {
        s: new THREE.Shape,
        p: l
    }, n[p].s.actions = h.actions, n[p].s.curves = h.curves, k && p++, o[p] = []) : o[p].push({h: h, p: l[0]});
    if (!n[0])return d(f);
    if (n.length > 1) {
        for (var s = !1, t = [], u = 0, v = n.length; v > u; u++)m[u] = [];
        for (var u = 0, v = n.length; v > u; u++)for (var w = (n[u], o[u]), x = 0; x < w.length; x++) {
            for (var y = w[x], z = !0, A = 0; A < n.length; A++)e(y.p, n[A].p) && (u != A && t.push({
                froms: u,
                tos: A,
                hole: x
            }), z ? (z = !1, m[A].push(y)) : s = !0);
            z && m[u].push(y)
        }
        t.length > 0 && (s || (o = m))
    }
    var B, C, D;
    for (q = 0, r = n.length; r > q; q++)for (i = n[q].s, j.push(i), B = o[q], C = 0, D = B.length; D > C; C++)i.holes.push(B[C].h);
    return j
},THREE.Shape = function () {
    THREE.Path.apply(this, arguments), this.holes = []
},THREE.Shape.prototype = Object.create(THREE.Path.prototype),THREE.Shape.prototype.extrude = function (a) {
    var b = new THREE.ExtrudeGeometry(this, a);
    return b
},THREE.Shape.prototype.makeGeometry = function (a) {
    var b = new THREE.ShapeGeometry(this, a);
    return b
},THREE.Shape.prototype.getPointsHoles = function (a) {
    var b, c = this.holes.length, d = [];
    for (b = 0; c > b; b++)d[b] = this.holes[b].getTransformedPoints(a, this.bends);
    return d
},THREE.Shape.prototype.getSpacedPointsHoles = function (a) {
    var b, c = this.holes.length, d = [];
    for (b = 0; c > b; b++)d[b] = this.holes[b].getTransformedSpacedPoints(a, this.bends);
    return d
},THREE.Shape.prototype.extractAllPoints = function (a) {
    return {shape: this.getTransformedPoints(a), holes: this.getPointsHoles(a)}
},THREE.Shape.prototype.extractPoints = function (a) {
    return this.useSpacedPoints ? this.extractAllSpacedPoints(a) : this.extractAllPoints(a)
},THREE.Shape.prototype.extractAllSpacedPoints = function (a) {
    return {shape: this.getTransformedSpacedPoints(a), holes: this.getSpacedPointsHoles(a)}
},THREE.Shape.Utils = {
    triangulateShape: function (a, b) {
        function c(a, b, c) {
            return a.x != b.x ? a.x < b.x ? a.x <= c.x && c.x <= b.x : b.x <= c.x && c.x <= a.x : a.y < b.y ? a.y <= c.y && c.y <= b.y : b.y <= c.y && c.y <= a.y
        }

        function d(a, b, d, e, f) {
            var g = 1e-10, h = b.x - a.x, i = b.y - a.y, j = e.x - d.x, k = e.y - d.y, l = a.x - d.x, m = a.y - d.y, n = i * j - h * k, o = i * l - h * m;
            if (Math.abs(n) > g) {
                var p;
                if (n > 0) {
                    if (0 > o || o > n)return [];
                    if (p = k * l - j * m, 0 > p || p > n)return []
                } else {
                    if (o > 0 || n > o)return [];
                    if (p = k * l - j * m, p > 0 || n > p)return []
                }
                if (0 == p)return !f || 0 != o && o != n ? [a] : [];
                if (p == n)return !f || 0 != o && o != n ? [b] : [];
                if (0 == o)return [d];
                if (o == n)return [e];
                var q = p / n;
                return [{x: a.x + q * h, y: a.y + q * i}]
            }
            if (0 != o || k * l != j * m)return [];
            var r = 0 == h && 0 == i, s = 0 == j && 0 == k;
            if (r && s)return a.x != d.x || a.y != d.y ? [] : [a];
            if (r)return c(d, e, a) ? [a] : [];
            if (s)return c(a, b, d) ? [d] : [];
            var t, u, v, w, x, y, z, A;
            return 0 != h ? (a.x < b.x ? (t = a, v = a.x, u = b, w = b.x) : (t = b, v = b.x, u = a, w = a.x), d.x < e.x ? (x = d, z = d.x, y = e, A = e.x) : (x = e, z = e.x, y = d, A = d.x)) : (a.y < b.y ? (t = a, v = a.y, u = b, w = b.y) : (t = b, v = b.y, u = a, w = a.y), d.y < e.y ? (x = d, z = d.y, y = e, A = e.y) : (x = e, z = e.y, y = d, A = d.y)), z >= v ? z > w ? [] : w == z ? f ? [] : [x] : A >= w ? [x, u] : [x, y] : v > A ? [] : v == A ? f ? [] : [t] : A >= w ? [t, u] : [t, y]
        }

        function e(a, b, c, d) {
            var e = 1e-10, f = b.x - a.x, g = b.y - a.y, h = c.x - a.x, i = c.y - a.y, j = d.x - a.x, k = d.y - a.y, l = f * i - g * h, m = f * k - g * j;
            if (Math.abs(l) > e) {
                var n = j * i - k * h;
                return l > 0 ? m >= 0 && n >= 0 : m >= 0 || n >= 0
            }
            return m > 0
        }

        function f(a, b) {
            function c(a, b) {
                var c = s.length - 1, d = a - 1;
                0 > d && (d = c);
                var f = a + 1;
                f > c && (f = 0);
                var g = e(s[a], s[d], s[f], h[b]);
                if (!g)return !1;
                var i = h.length - 1, j = b - 1;
                0 > j && (j = i);
                var k = b + 1;
                return k > i && (k = 0), g = e(h[b], h[j], h[k], s[a]), g ? !0 : !1
            }

            function f(a, b) {
                var c, e, f;
                for (c = 0; c < s.length; c++)if (e = c + 1, e %= s.length, f = d(a, b, s[c], s[e], !0), f.length > 0)return !0;
                return !1
            }

            function g(a, c) {
                var e, f, g, h, i;
                for (e = 0; e < t.length; e++)for (f = b[t[e]], g = 0; g < f.length; g++)if (h = g + 1, h %= f.length, i = d(a, c, f[g], f[h], !0), i.length > 0)return !0;
                return !1
            }

            for (var h, i, j, k, l, m, n, o, p, q, r, s = a.concat(), t = [], u = [], v = 0, w = b.length; w > v; v++)t.push(v);
            for (var x = 0, y = 2 * t.length; t.length > 0;) {
                if (y--, 0 > y) {
                    console.log("Infinite Loop! Holes left:" + t.length + ", Probably Hole outside Shape!");
                    break
                }
                for (j = x; j < s.length; j++) {
                    k = s[j], i = -1;
                    for (var v = 0; v < t.length; v++)if (m = t[v], n = k.x + ":" + k.y + ":" + m, void 0 === u[n]) {
                        h = b[m];
                        for (var z = 0; z < h.length; z++)if (l = h[z], c(j, z) && !f(k, l) && !g(k, l)) {
                            i = z, t.splice(v, 1), o = s.slice(0, j + 1), p = s.slice(j), q = h.slice(i), r = h.slice(0, i + 1), s = o.concat(q).concat(r).concat(p), x = j;
                            break
                        }
                        if (i >= 0)break;
                        u[n] = !0
                    }
                    if (i >= 0)break
                }
            }
            return s
        }

        for (var g, h, i, j, k, l, m = {}, n = a.concat(), o = 0, p = b.length; p > o; o++)Array.prototype.push.apply(n, b[o]);
        for (g = 0, h = n.length; h > g; g++)k = n[g].x + ":" + n[g].y, void 0 !== m[k] && console.log("Duplicate point", k), m[k] = g;
        var q = f(a, b), r = THREE.FontUtils.Triangulate(q, !1);
        for (g = 0, h = r.length; h > g; g++)for (j = r[g], i = 0; 3 > i; i++)k = j[i].x + ":" + j[i].y, l = m[k], void 0 !== l && (j[i] = l);
        return r.concat()
    }, isClockWise: function (a) {
        return THREE.FontUtils.Triangulate.area(a) < 0
    }, b2p0: function (a, b) {
        var c = 1 - a;
        return c * c * b
    }, b2p1: function (a, b) {
        return 2 * (1 - a) * a * b
    }, b2p2: function (a, b) {
        return a * a * b
    }, b2: function (a, b, c, d) {
        return this.b2p0(a, b) + this.b2p1(a, c) + this.b2p2(a, d)
    }, b3p0: function (a, b) {
        var c = 1 - a;
        return c * c * c * b
    }, b3p1: function (a, b) {
        var c = 1 - a;
        return 3 * c * c * a * b
    }, b3p2: function (a, b) {
        var c = 1 - a;
        return 3 * c * a * a * b
    }, b3p3: function (a, b) {
        return a * a * a * b
    }, b3: function (a, b, c, d, e) {
        return this.b3p0(a, b) + this.b3p1(a, c) + this.b3p2(a, d) + this.b3p3(a, e)
    }
},THREE.LineCurve = function (a, b) {
    this.v1 = a, this.v2 = b
},THREE.LineCurve.prototype = Object.create(THREE.Curve.prototype),THREE.LineCurve.prototype.getPoint = function (a) {
    var b = this.v2.clone().sub(this.v1);
    return b.multiplyScalar(a).add(this.v1), b
},THREE.LineCurve.prototype.getPointAt = function (a) {
    return this.getPoint(a)
},THREE.LineCurve.prototype.getTangent = function () {
    var a = this.v2.clone().sub(this.v1);
    return a.normalize()
},THREE.QuadraticBezierCurve = function (a, b, c) {
    this.v0 = a, this.v1 = b, this.v2 = c
},THREE.QuadraticBezierCurve.prototype = Object.create(THREE.Curve.prototype),THREE.QuadraticBezierCurve.prototype.getPoint = function (a) {
    var b = new THREE.Vector2;
    return b.x = THREE.Shape.Utils.b2(a, this.v0.x, this.v1.x, this.v2.x), b.y = THREE.Shape.Utils.b2(a, this.v0.y, this.v1.y, this.v2.y), b
},THREE.QuadraticBezierCurve.prototype.getTangent = function (a) {
    var b = new THREE.Vector2;
    return b.x = THREE.Curve.Utils.tangentQuadraticBezier(a, this.v0.x, this.v1.x, this.v2.x), b.y = THREE.Curve.Utils.tangentQuadraticBezier(a, this.v0.y, this.v1.y, this.v2.y), b.normalize()
},THREE.CubicBezierCurve = function (a, b, c, d) {
    this.v0 = a, this.v1 = b, this.v2 = c, this.v3 = d
},THREE.CubicBezierCurve.prototype = Object.create(THREE.Curve.prototype),THREE.CubicBezierCurve.prototype.getPoint = function (a) {
    var b, c;
    return b = THREE.Shape.Utils.b3(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x), c = THREE.Shape.Utils.b3(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y), new THREE.Vector2(b, c)
},THREE.CubicBezierCurve.prototype.getTangent = function (a) {
    var b, c;
    b = THREE.Curve.Utils.tangentCubicBezier(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x), c = THREE.Curve.Utils.tangentCubicBezier(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
    var d = new THREE.Vector2(b, c);
    return d.normalize(), d
},THREE.SplineCurve = function (a) {
    this.points = void 0 == a ? [] : a
},THREE.SplineCurve.prototype = Object.create(THREE.Curve.prototype),THREE.SplineCurve.prototype.getPoint = function (a) {
    var b = this.points, c = (b.length - 1) * a, d = Math.floor(c), e = c - d, f = b[0 == d ? d : d - 1], g = b[d], h = b[d > b.length - 2 ? b.length - 1 : d + 1], i = b[d > b.length - 3 ? b.length - 1 : d + 2], j = new THREE.Vector2;
    return j.x = THREE.Curve.Utils.interpolate(f.x, g.x, h.x, i.x, e), j.y = THREE.Curve.Utils.interpolate(f.y, g.y, h.y, i.y, e), j
},THREE.EllipseCurve = function (a, b, c, d, e, f, g) {
    this.aX = a, this.aY = b, this.xRadius = c, this.yRadius = d, this.aStartAngle = e, this.aEndAngle = f, this.aClockwise = g
},THREE.EllipseCurve.prototype = Object.create(THREE.Curve.prototype),THREE.EllipseCurve.prototype.getPoint = function (a) {
    var b = this.aEndAngle - this.aStartAngle;
    0 > b && (b += 2 * Math.PI), b > 2 * Math.PI && (b -= 2 * Math.PI);
    var c;
    c = this.aClockwise === !0 ? this.aEndAngle + (1 - a) * (2 * Math.PI - b) : this.aStartAngle + a * b;
    var d = new THREE.Vector2;
    return d.x = this.aX + this.xRadius * Math.cos(c), d.y = this.aY + this.yRadius * Math.sin(c), d
},THREE.ArcCurve = function (a, b, c, d, e, f) {
    THREE.EllipseCurve.call(this, a, b, c, c, d, e, f)
},THREE.ArcCurve.prototype = Object.create(THREE.EllipseCurve.prototype),THREE.LineCurve3 = THREE.Curve.create(function (a, b) {
    this.v1 = a, this.v2 = b
}, function (a) {
    var b = new THREE.Vector3;
    return b.subVectors(this.v2, this.v1), b.multiplyScalar(a), b.add(this.v1), b
}),THREE.QuadraticBezierCurve3 = THREE.Curve.create(function (a, b, c) {
    this.v0 = a, this.v1 = b, this.v2 = c
}, function (a) {
    var b = new THREE.Vector3;
    return b.x = THREE.Shape.Utils.b2(a, this.v0.x, this.v1.x, this.v2.x), b.y = THREE.Shape.Utils.b2(a, this.v0.y, this.v1.y, this.v2.y), b.z = THREE.Shape.Utils.b2(a, this.v0.z, this.v1.z, this.v2.z), b
}),THREE.CubicBezierCurve3 = THREE.Curve.create(function (a, b, c, d) {
    this.v0 = a, this.v1 = b, this.v2 = c, this.v3 = d
}, function (a) {
    var b = new THREE.Vector3;
    return b.x = THREE.Shape.Utils.b3(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x), b.y = THREE.Shape.Utils.b3(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y), b.z = THREE.Shape.Utils.b3(a, this.v0.z, this.v1.z, this.v2.z, this.v3.z), b
}),THREE.SplineCurve3 = THREE.Curve.create(function (a) {
    this.points = void 0 == a ? [] : a
}, function (a) {
    var b = this.points, c = (b.length - 1) * a, d = Math.floor(c), e = c - d, f = b[0 == d ? d : d - 1], g = b[d], h = b[d > b.length - 2 ? b.length - 1 : d + 1], i = b[d > b.length - 3 ? b.length - 1 : d + 2], j = new THREE.Vector3;
    return j.x = THREE.Curve.Utils.interpolate(f.x, g.x, h.x, i.x, e), j.y = THREE.Curve.Utils.interpolate(f.y, g.y, h.y, i.y, e), j.z = THREE.Curve.Utils.interpolate(f.z, g.z, h.z, i.z, e), j
}),THREE.ClosedSplineCurve3 = THREE.Curve.create(function (a) {
    this.points = void 0 == a ? [] : a
}, function (a) {
    var b = this.points, c = (b.length - 0) * a, d = Math.floor(c), e = c - d;
    d += d > 0 ? 0 : (Math.floor(Math.abs(d) / b.length) + 1) * b.length;
    var f = b[(d - 1) % b.length], g = b[d % b.length], h = b[(d + 1) % b.length], i = b[(d + 2) % b.length], j = new THREE.Vector3;
    return j.x = THREE.Curve.Utils.interpolate(f.x, g.x, h.x, i.x, e), j.y = THREE.Curve.Utils.interpolate(f.y, g.y, h.y, i.y, e), j.z = THREE.Curve.Utils.interpolate(f.z, g.z, h.z, i.z, e), j
}),THREE.AnimationHandler = {
    LINEAR: 0, CATMULLROM: 1, CATMULLROM_FORWARD: 2, add: function () {
        console.warn("THREE.AnimationHandler.add() has been deprecated.")
    }, get: function () {
        console.warn("THREE.AnimationHandler.get() has been deprecated.")
    }, remove: function () {
        console.warn("THREE.AnimationHandler.remove() has been deprecated.")
    }, animations: [], init: function (a) {
        if (a.initialized !== !0) {
            for (var b = 0; b < a.hierarchy.length; b++) {
                for (var c = 0; c < a.hierarchy[b].keys.length; c++)if (a.hierarchy[b].keys[c].time < 0 && (a.hierarchy[b].keys[c].time = 0), void 0 !== a.hierarchy[b].keys[c].rot && !(a.hierarchy[b].keys[c].rot instanceof THREE.Quaternion)) {
                    var d = a.hierarchy[b].keys[c].rot;
                    a.hierarchy[b].keys[c].rot = (new THREE.Quaternion).fromArray(d)
                }
                if (a.hierarchy[b].keys.length && void 0 !== a.hierarchy[b].keys[0].morphTargets) {
                    for (var e = {}, c = 0; c < a.hierarchy[b].keys.length; c++)for (var f = 0; f < a.hierarchy[b].keys[c].morphTargets.length; f++) {
                        var g = a.hierarchy[b].keys[c].morphTargets[f];
                        e[g] = -1
                    }
                    a.hierarchy[b].usedMorphTargets = e;
                    for (var c = 0; c < a.hierarchy[b].keys.length; c++) {
                        var h = {};
                        for (var g in e) {
                            for (var f = 0; f < a.hierarchy[b].keys[c].morphTargets.length; f++)if (a.hierarchy[b].keys[c].morphTargets[f] === g) {
                                h[g] = a.hierarchy[b].keys[c].morphTargetsInfluences[f];
                                break
                            }
                            f === a.hierarchy[b].keys[c].morphTargets.length && (h[g] = 0)
                        }
                        a.hierarchy[b].keys[c].morphTargetsInfluences = h
                    }
                }
                for (var c = 1; c < a.hierarchy[b].keys.length; c++)a.hierarchy[b].keys[c].time === a.hierarchy[b].keys[c - 1].time && (a.hierarchy[b].keys.splice(c, 1), c--);
                for (var c = 0; c < a.hierarchy[b].keys.length; c++)a.hierarchy[b].keys[c].index = c
            }
            return a.initialized = !0, a
        }
    }, parse: function (a) {
        var b = function (a, c) {
            c.push(a);
            for (var d = 0; d < a.children.length; d++)b(a.children[d], c)
        }, c = [];
        if (a instanceof THREE.SkinnedMesh)for (var d = 0; d < a.skeleton.bones.length; d++)c.push(a.skeleton.bones[d]); else b(a, c);
        return c
    }, play: function (a) {
        -1 === this.animations.indexOf(a) && this.animations.push(a)
    }, stop: function (a) {
        var b = this.animations.indexOf(a);
        -1 !== b && this.animations.splice(b, 1)
    }, update: function (a) {
        for (var b = 0; b < this.animations.length; b++)this.animations[b].resetBlendWeights();
        for (var b = 0; b < this.animations.length; b++)this.animations[b].update(a)
    }
},THREE.Animation = function (a, b) {
    this.root = a, this.data = THREE.AnimationHandler.init(b), this.hierarchy = THREE.AnimationHandler.parse(a), this.currentTime = 0, this.timeScale = 1, this.isPlaying = !1, this.loop = !0, this.weight = 0, this.interpolationType = THREE.AnimationHandler.LINEAR
},THREE.Animation.prototype.keyTypes = ["pos", "rot", "scl"],THREE.Animation.prototype.play = function (a, b) {
    this.currentTime = void 0 !== a ? a : 0, this.weight = void 0 !== b ? b : 1, this.isPlaying = !0, this.reset(), THREE.AnimationHandler.play(this)
},THREE.Animation.prototype.stop = function () {
    this.isPlaying = !1, THREE.AnimationHandler.stop(this)
},THREE.Animation.prototype.reset = function () {
    for (var a = 0, b = this.hierarchy.length; b > a; a++) {
        var c = this.hierarchy[a];
        c.matrixAutoUpdate = !0, void 0 === c.animationCache && (c.animationCache = {
            animations: {},
            blending: {positionWeight: 0, quaternionWeight: 0, scaleWeight: 0}
        }), void 0 === c.animationCache.animations[this.data.name] && (c.animationCache.animations[this.data.name] = {}, c.animationCache.animations[this.data.name].prevKey = {
            pos: 0,
            rot: 0,
            scl: 0
        }, c.animationCache.animations[this.data.name].nextKey = {
            pos: 0,
            rot: 0,
            scl: 0
        }, c.animationCache.animations[this.data.name].originalMatrix = c.matrix);
        for (var d = c.animationCache.animations[this.data.name], e = 0; 3 > e; e++) {
            for (var f = this.keyTypes[e], g = this.data.hierarchy[a].keys[0], h = this.getNextKeyWith(f, a, 1); h.time < this.currentTime && h.index > g.index;)g = h, h = this.getNextKeyWith(f, a, h.index + 1);
            d.prevKey[f] = g, d.nextKey[f] = h
        }
    }
},THREE.Animation.prototype.resetBlendWeights = function () {
    for (var a = 0, b = this.hierarchy.length; b > a; a++) {
        var c = this.hierarchy[a];
        void 0 !== c.animationCache && (c.animationCache.blending.positionWeight = 0, c.animationCache.blending.quaternionWeight = 0, c.animationCache.blending.scaleWeight = 0)
    }
},THREE.Animation.prototype.update = function () {
    var a = [], b = new THREE.Vector3, c = new THREE.Vector3, d = new THREE.Quaternion, e = function (a, b) {
        var c, d, e, g, h, i, j, k, l, m = [], n = [];
        return c = (a.length - 1) * b, d = Math.floor(c), e = c - d, m[0] = 0 === d ? d : d - 1, m[1] = d, m[2] = d > a.length - 2 ? d : d + 1, m[3] = d > a.length - 3 ? d : d + 2, i = a[m[0]], j = a[m[1]], k = a[m[2]], l = a[m[3]], g = e * e, h = e * g, n[0] = f(i[0], j[0], k[0], l[0], e, g, h), n[1] = f(i[1], j[1], k[1], l[1], e, g, h), n[2] = f(i[2], j[2], k[2], l[2], e, g, h), n
    }, f = function (a, b, c, d, e, f, g) {
        var h = .5 * (c - a), i = .5 * (d - b);
        return (2 * (b - c) + h + i) * g + (-3 * (b - c) - 2 * h - i) * f + h * e + b
    };
    return function (f) {
        if (this.isPlaying !== !1 && (this.currentTime += f * this.timeScale, 0 !== this.weight)) {
            var g = this.data.length;
            if (this.currentTime > g || this.currentTime < 0) {
                if (!this.loop)return void this.stop();
                this.currentTime %= g, this.currentTime < 0 && (this.currentTime += g), this.reset()
            }
            for (var h = 0, i = this.hierarchy.length; i > h; h++)for (var j = this.hierarchy[h], k = j.animationCache.animations[this.data.name], l = j.animationCache.blending, m = 0; 3 > m; m++) {
                var n = this.keyTypes[m], o = k.prevKey[n], p = k.nextKey[n];
                if (this.timeScale > 0 && p.time <= this.currentTime || this.timeScale < 0 && o.time >= this.currentTime) {
                    for (o = this.data.hierarchy[h].keys[0], p = this.getNextKeyWith(n, h, 1); p.time < this.currentTime && p.index > o.index;)o = p, p = this.getNextKeyWith(n, h, p.index + 1);
                    k.prevKey[n] = o, k.nextKey[n] = p
                }
                j.matrixAutoUpdate = !0, j.matrixWorldNeedsUpdate = !0;
                var q = (this.currentTime - o.time) / (p.time - o.time), r = o[n], s = p[n];
                if (0 > q && (q = 0), q > 1 && (q = 1), "pos" === n) {
                    if (this.interpolationType === THREE.AnimationHandler.LINEAR) {
                        c.x = r[0] + (s[0] - r[0]) * q, c.y = r[1] + (s[1] - r[1]) * q, c.z = r[2] + (s[2] - r[2]) * q;
                        var t = this.weight / (this.weight + l.positionWeight);
                        j.position.lerp(c, t), l.positionWeight += this.weight
                    } else if (this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD) {
                        a[0] = this.getPrevKeyWith("pos", h, o.index - 1).pos, a[1] = r, a[2] = s, a[3] = this.getNextKeyWith("pos", h, p.index + 1).pos, q = .33 * q + .33;
                        var u = e(a, q), t = this.weight / (this.weight + l.positionWeight);
                        l.positionWeight += this.weight;
                        var v = j.position;
                        if (v.x = v.x + (u[0] - v.x) * t, v.y = v.y + (u[1] - v.y) * t, v.z = v.z + (u[2] - v.z) * t, this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD) {
                            var w = e(a, 1.01 * q);
                            b.set(w[0], w[1], w[2]), b.sub(v), b.y = 0, b.normalize();
                            var x = Math.atan2(b.x, b.z);
                            j.rotation.set(0, x, 0)
                        }
                    }
                } else if ("rot" === n)if (THREE.Quaternion.slerp(r, s, d, q), 0 === l.quaternionWeight)j.quaternion.copy(d), l.quaternionWeight = this.weight; else {
                    var t = this.weight / (this.weight + l.quaternionWeight);
                    THREE.Quaternion.slerp(j.quaternion, d, j.quaternion, t), l.quaternionWeight += this.weight
                } else if ("scl" === n) {
                    c.x = r[0] + (s[0] - r[0]) * q, c.y = r[1] + (s[1] - r[1]) * q, c.z = r[2] + (s[2] - r[2]) * q;
                    var t = this.weight / (this.weight + l.scaleWeight);
                    j.scale.lerp(c, t), l.scaleWeight += this.weight
                }
            }
            return !0
        }
    }
}(),THREE.Animation.prototype.getNextKeyWith = function (a, b, c) {
    var d = this.data.hierarchy[b].keys;
    for (this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? c = c < d.length - 1 ? c : d.length - 1 : c %= d.length; c < d.length; c++)if (void 0 !== d[c][a])return d[c];
    return this.data.hierarchy[b].keys[0]
},THREE.Animation.prototype.getPrevKeyWith = function (a, b, c) {
    var d = this.data.hierarchy[b].keys;
    for (c = this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? c > 0 ? c : 0 : c >= 0 ? c : c + d.length; c >= 0; c--)if (void 0 !== d[c][a])return d[c];
    return this.data.hierarchy[b].keys[d.length - 1]
},THREE.KeyFrameAnimation = function (a) {
    this.root = a.node, this.data = THREE.AnimationHandler.init(a), this.hierarchy = THREE.AnimationHandler.parse(this.root), this.currentTime = 0, this.timeScale = .001, this.isPlaying = !1, this.isPaused = !0, this.loop = !0;
    for (var b = 0, c = this.hierarchy.length; c > b; b++) {
        var d = this.data.hierarchy[b].keys, e = this.data.hierarchy[b].sids, f = this.hierarchy[b];
        if (d.length && e) {
            for (var g = 0; g < e.length; g++) {
                var h = e[g], i = this.getNextKeyWith(h, b, 0);
                i && i.apply(h)
            }
            f.matrixAutoUpdate = !1, this.data.hierarchy[b].node.updateMatrix(), f.matrixWorldNeedsUpdate = !0
        }
    }
},THREE.KeyFrameAnimation.prototype.play = function (a) {
    if (this.currentTime = void 0 !== a ? a : 0, this.isPlaying === !1) {
        this.isPlaying = !0;
        var b, c, d, e = this.hierarchy.length;
        for (b = 0; e > b; b++) {
            c = this.hierarchy[b], d = this.data.hierarchy[b], void 0 === d.animationCache && (d.animationCache = {}, d.animationCache.prevKey = null, d.animationCache.nextKey = null, d.animationCache.originalMatrix = c.matrix);
            var f = this.data.hierarchy[b].keys;
            f.length && (d.animationCache.prevKey = f[0], d.animationCache.nextKey = f[1], this.startTime = Math.min(f[0].time, this.startTime), this.endTime = Math.max(f[f.length - 1].time, this.endTime))
        }
        this.update(0)
    }
    this.isPaused = !1, THREE.AnimationHandler.play(this)
},THREE.KeyFrameAnimation.prototype.stop = function () {
    this.isPlaying = !1, this.isPaused = !1, THREE.AnimationHandler.stop(this);
    for (var a = 0; a < this.data.hierarchy.length; a++) {
        var b = this.hierarchy[a], c = this.data.hierarchy[a];
        if (void 0 !== c.animationCache) {
            var d = c.animationCache.originalMatrix;
            d.copy(b.matrix), b.matrix = d, delete c.animationCache
        }
    }
},THREE.KeyFrameAnimation.prototype.update = function (a) {
    if (this.isPlaying !== !1) {
        this.currentTime += a * this.timeScale;
        var b = this.data.length;
        this.loop === !0 && this.currentTime > b && (this.currentTime %= b), this.currentTime = Math.min(this.currentTime, b);
        for (var c = 0, d = this.hierarchy.length; d > c; c++) {
            var e = this.hierarchy[c], f = this.data.hierarchy[c], g = f.keys, h = f.animationCache;
            if (g.length) {
                var i = h.prevKey, j = h.nextKey;
                if (j.time <= this.currentTime) {
                    for (; j.time < this.currentTime && j.index > i.index;)i = j, j = g[i.index + 1];
                    h.prevKey = i, h.nextKey = j
                }
                j.time >= this.currentTime ? i.interpolate(j, this.currentTime) : i.interpolate(j, j.time), this.data.hierarchy[c].node.updateMatrix(), e.matrixWorldNeedsUpdate = !0
            }
        }
    }
},THREE.KeyFrameAnimation.prototype.getNextKeyWith = function (a, b, c) {
    var d = this.data.hierarchy[b].keys;
    for (c %= d.length; c < d.length; c++)if (d[c].hasTarget(a))return d[c];
    return d[0]
},THREE.KeyFrameAnimation.prototype.getPrevKeyWith = function (a, b, c) {
    var d = this.data.hierarchy[b].keys;
    for (c = c >= 0 ? c : c + d.length; c >= 0; c--)if (d[c].hasTarget(a))return d[c];
    return d[d.length - 1]
},THREE.MorphAnimation = function (a) {
    this.mesh = a, this.frames = a.morphTargetInfluences.length, this.currentTime = 0, this.duration = 1e3, this.loop = !0, this.isPlaying = !1
},THREE.MorphAnimation.prototype = {
    play: function () {
        this.isPlaying = !0
    }, pause: function () {
        this.isPlaying = !1
    }, update: function () {
        var a = 0, b = 0;
        return function (c) {
            if (this.isPlaying !== !1) {
                this.currentTime += c, this.loop === !0 && this.currentTime > this.duration && (this.currentTime %= this.duration), this.currentTime = Math.min(this.currentTime, this.duration);
                var d = this.duration / this.frames, e = Math.floor(this.currentTime / d);
                e != b && (this.mesh.morphTargetInfluences[a] = 0, this.mesh.morphTargetInfluences[b] = 1, this.mesh.morphTargetInfluences[e] = 0, a = b, b = e), this.mesh.morphTargetInfluences[e] = this.currentTime % d / d, this.mesh.morphTargetInfluences[a] = 1 - this.mesh.morphTargetInfluences[e]
            }
        }
    }()
},THREE.BoxGeometry = function (a, b, c, d, e, f) {
    function g(a, b, c, d, e, f, g, i) {
        var j, k, l, m = h.widthSegments, n = h.heightSegments, o = e / 2, p = f / 2, q = h.vertices.length;
        "x" === a && "y" === b || "y" === a && "x" === b ? j = "z" : "x" === a && "z" === b || "z" === a && "x" === b ? (j = "y", n = h.depthSegments) : ("z" === a && "y" === b || "y" === a && "z" === b) && (j = "x", m = h.depthSegments);
        var r = m + 1, s = n + 1, t = e / m, u = f / n, v = new THREE.Vector3;
        for (v[j] = g > 0 ? 1 : -1, l = 0; s > l; l++)for (k = 0; r > k; k++) {
            var w = new THREE.Vector3;
            w[a] = (k * t - o) * c, w[b] = (l * u - p) * d, w[j] = g, h.vertices.push(w)
        }
        for (l = 0; n > l; l++)for (k = 0; m > k; k++) {
            var x = k + r * l, y = k + r * (l + 1), z = k + 1 + r * (l + 1), A = k + 1 + r * l, B = new THREE.Vector2(k / m, 1 - l / n), C = new THREE.Vector2(k / m, 1 - (l + 1) / n), D = new THREE.Vector2((k + 1) / m, 1 - (l + 1) / n), E = new THREE.Vector2((k + 1) / m, 1 - l / n), F = new THREE.Face3(x + q, y + q, A + q);
            F.normal.copy(v), F.vertexNormals.push(v.clone(), v.clone(), v.clone()), F.materialIndex = i, h.faces.push(F), h.faceVertexUvs[0].push([B, C, E]), F = new THREE.Face3(y + q, z + q, A + q), F.normal.copy(v), F.vertexNormals.push(v.clone(), v.clone(), v.clone()), F.materialIndex = i, h.faces.push(F), h.faceVertexUvs[0].push([C.clone(), D, E.clone()])
        }
    }

    THREE.Geometry.call(this), this.type = "BoxGeometry", this.parameters = {
        width: a,
        height: b,
        depth: c,
        widthSegments: d,
        heightSegments: e,
        depthSegments: f
    }, this.widthSegments = d || 1, this.heightSegments = e || 1, this.depthSegments = f || 1;
    var h = this, i = a / 2, j = b / 2, k = c / 2;
    g("z", "y", -1, -1, c, b, i, 0), g("z", "y", 1, -1, c, b, -i, 1), g("x", "z", 1, 1, a, c, j, 2), g("x", "z", 1, -1, a, c, -j, 3), g("x", "y", 1, -1, a, b, k, 4), g("x", "y", -1, -1, a, b, -k, 5), this.mergeVertices()
},THREE.BoxGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.CircleGeometry = function (a, b, c, d) {
    THREE.Geometry.call(this), this.type = "CircleGeometry", this.parameters = {
        radius: a,
        segments: b,
        thetaStart: c,
        thetaLength: d
    }, a = a || 50, b = void 0 !== b ? Math.max(3, b) : 8, c = void 0 !== c ? c : 0, d = void 0 !== d ? d : 2 * Math.PI;
    var e, f = [], g = new THREE.Vector3, h = new THREE.Vector2(.5, .5);
    for (this.vertices.push(g), f.push(h), e = 0; b >= e; e++) {
        var i = new THREE.Vector3, j = c + e / b * d;
        i.x = a * Math.cos(j), i.y = a * Math.sin(j), this.vertices.push(i), f.push(new THREE.Vector2((i.x / a + 1) / 2, (i.y / a + 1) / 2))
    }
    var k = new THREE.Vector3(0, 0, 1);
    for (e = 1; b >= e; e++)this.faces.push(new THREE.Face3(e, e + 1, 0, [k.clone(), k.clone(), k.clone()])), this.faceVertexUvs[0].push([f[e].clone(), f[e + 1].clone(), h.clone()]);
    this.computeFaceNormals(), this.boundingSphere = new THREE.Sphere(new THREE.Vector3, a)
},THREE.CircleGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.CubeGeometry = function (a, b, c, d, e, f) {
    return console.warn("THREE.CubeGeometry has been renamed to THREE.BoxGeometry."), new THREE.BoxGeometry(a, b, c, d, e, f)
},THREE.CylinderGeometry = function (a, b, c, d, e, f) {
    THREE.Geometry.call(this), this.type = "CylinderGeometry", this.parameters = {
        radiusTop: a,
        radiusBottom: b,
        height: c,
        radialSegments: d,
        heightSegments: e,
        openEnded: f
    }, a = void 0 !== a ? a : 20, b = void 0 !== b ? b : 20, c = void 0 !== c ? c : 100, d = d || 8, e = e || 1, f = void 0 !== f ? f : !1;
    var g, h, i = c / 2, j = [], k = [];
    for (h = 0; e >= h; h++) {
        var l = [], m = [], n = h / e, o = n * (b - a) + a;
        for (g = 0; d >= g; g++) {
            var p = g / d, q = new THREE.Vector3;
            q.x = o * Math.sin(p * Math.PI * 2), q.y = -n * c + i, q.z = o * Math.cos(p * Math.PI * 2), this.vertices.push(q), l.push(this.vertices.length - 1), m.push(new THREE.Vector2(p, 1 - n))
        }
        j.push(l), k.push(m)
    }
    var r, s, t = (b - a) / c;
    for (g = 0; d > g; g++)for (0 !== a ? (r = this.vertices[j[0][g]].clone(), s = this.vertices[j[0][g + 1]].clone()) : (r = this.vertices[j[1][g]].clone(), s = this.vertices[j[1][g + 1]].clone()), r.setY(Math.sqrt(r.x * r.x + r.z * r.z) * t).normalize(), s.setY(Math.sqrt(s.x * s.x + s.z * s.z) * t).normalize(), h = 0; e > h; h++) {
        var u = j[h][g], v = j[h + 1][g], w = j[h + 1][g + 1], x = j[h][g + 1], y = r.clone(), z = r.clone(), A = s.clone(), B = s.clone(), C = k[h][g].clone(), D = k[h + 1][g].clone(), E = k[h + 1][g + 1].clone(), F = k[h][g + 1].clone();
        this.faces.push(new THREE.Face3(u, v, x, [y, z, B])), this.faceVertexUvs[0].push([C, D, F]), this.faces.push(new THREE.Face3(v, w, x, [z.clone(), A, B.clone()])), this.faceVertexUvs[0].push([D.clone(), E, F.clone()])
    }
    if (f === !1 && a > 0)for (this.vertices.push(new THREE.Vector3(0, i, 0)), g = 0; d > g; g++) {
        var u = j[0][g], v = j[0][g + 1], w = this.vertices.length - 1, y = new THREE.Vector3(0, 1, 0), z = new THREE.Vector3(0, 1, 0), A = new THREE.Vector3(0, 1, 0), C = k[0][g].clone(), D = k[0][g + 1].clone(), E = new THREE.Vector2(D.x, 0);
        this.faces.push(new THREE.Face3(u, v, w, [y, z, A])), this.faceVertexUvs[0].push([C, D, E])
    }
    if (f === !1 && b > 0)for (this.vertices.push(new THREE.Vector3(0, -i, 0)), g = 0; d > g; g++) {
        var u = j[h][g + 1], v = j[h][g], w = this.vertices.length - 1, y = new THREE.Vector3(0, -1, 0), z = new THREE.Vector3(0, -1, 0), A = new THREE.Vector3(0, -1, 0), C = k[h][g + 1].clone(), D = k[h][g].clone(), E = new THREE.Vector2(D.x, 1);
        this.faces.push(new THREE.Face3(u, v, w, [y, z, A])), this.faceVertexUvs[0].push([C, D, E])
    }
    this.computeFaceNormals()
},THREE.CylinderGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.ExtrudeGeometry = function (a, b) {
    return "undefined" == typeof a ? void(a = []) : (THREE.Geometry.call(this), this.type = "ExtrudeGeometry", a = a instanceof Array ? a : [a], this.addShapeList(a, b), void this.computeFaceNormals())
},THREE.ExtrudeGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.ExtrudeGeometry.prototype.addShapeList = function (a, b) {
    for (var c = a.length, d = 0; c > d; d++) {
        var e = a[d];
        this.addShape(e, b)
    }
},THREE.ExtrudeGeometry.prototype.addShape = function (a, b) {
    function c(a, b, c) {
        return b || console.log("die"), b.clone().multiplyScalar(c).add(a)
    }

    function d(a, b, c) {
        var d, e, f = 1e-10, g = 1, h = a.x - b.x, i = a.y - b.y, j = c.x - a.x, k = c.y - a.y, l = h * h + i * i, m = h * k - i * j;
        if (Math.abs(m) > f) {
            var n = Math.sqrt(l), o = Math.sqrt(j * j + k * k), p = b.x - i / n, q = b.y + h / n, r = c.x - k / o, s = c.y + j / o, t = ((r - p) * k - (s - q) * j) / (h * k - i * j);
            d = p + h * t - a.x, e = q + i * t - a.y;
            var u = d * d + e * e;
            if (2 >= u)return new THREE.Vector2(d, e);
            g = Math.sqrt(u / 2)
        } else {
            var v = !1;
            h > f ? j > f && (v = !0) : -f > h ? -f > j && (v = !0) : Math.sign(i) == Math.sign(k) && (v = !0), v ? (d = -i, e = h, g = Math.sqrt(l)) : (d = h, e = i, g = Math.sqrt(l / 2))
        }
        return new THREE.Vector2(d / g, e / g)
    }

    function e() {
        if (t) {
            var a = 0, b = S * a;
            for (V = 0; T > V; V++)R = K[V], i(R[2] + b, R[1] + b, R[0] + b);
            for (a = v + 2 * s, b = S * a, V = 0; T > V; V++)R = K[V], i(R[0] + b, R[1] + b, R[2] + b)
        } else {
            for (V = 0; T > V; V++)R = K[V], i(R[2], R[1], R[0]);
            for (V = 0; T > V; V++)R = K[V], i(R[0] + S * v, R[1] + S * v, R[2] + S * v)
        }
    }

    function f() {
        var a = 0;
        for (g(L, a), a += L.length, C = 0, D = I.length; D > C; C++)B = I[C], g(B, a), a += B.length
    }

    function g(a, b) {
        var c, d;
        for (V = a.length; --V >= 0;) {
            c = V, d = V - 1, 0 > d && (d = a.length - 1);
            var e = 0, f = v + 2 * s;
            for (e = 0; f > e; e++) {
                var g = S * e, h = S * (e + 1), i = b + c + g, k = b + d + g, l = b + d + h, m = b + c + h;
                j(i, k, l, m, a, e, f, c, d)
            }
        }
    }

    function h(a, b, c) {
        E.vertices.push(new THREE.Vector3(a, b, c))
    }

    function i(a, b, c) {
        a += F, b += F, c += F, E.faces.push(new THREE.Face3(a, b, c, null, null, y));
        var d = A.generateTopUV(E, a, b, c);
        E.faceVertexUvs[0].push(d)
    }

    function j(a, b, c, d) {
        a += F, b += F, c += F, d += F, E.faces.push(new THREE.Face3(a, b, d, null, null, z)), E.faces.push(new THREE.Face3(b, c, d, null, null, z));
        var e = A.generateSideWallUV(E, a, b, c, d);
        E.faceVertexUvs[0].push([e[0], e[1], e[3]]), E.faceVertexUvs[0].push([e[1], e[2], e[3]])
    }

    var k, l, m, n, o, p = void 0 !== b.amount ? b.amount : 100, q = void 0 !== b.bevelThickness ? b.bevelThickness : 6, r = void 0 !== b.bevelSize ? b.bevelSize : q - 2, s = void 0 !== b.bevelSegments ? b.bevelSegments : 3, t = void 0 !== b.bevelEnabled ? b.bevelEnabled : !0, u = void 0 !== b.curveSegments ? b.curveSegments : 12, v = void 0 !== b.steps ? b.steps : 1, w = b.extrudePath, x = !1, y = b.material, z = b.extrudeMaterial, A = void 0 !== b.UVGenerator ? b.UVGenerator : THREE.ExtrudeGeometry.WorldUVGenerator;
    w && (k = w.getSpacedPoints(v), x = !0, t = !1, l = void 0 !== b.frames ? b.frames : new THREE.TubeGeometry.FrenetFrames(w, v, !1), m = new THREE.Vector3, n = new THREE.Vector3, o = new THREE.Vector3), t || (s = 0, q = 0, r = 0);
    var B, C, D, E = this, F = this.vertices.length, G = a.extractPoints(u), H = G.shape, I = G.holes, J = !THREE.Shape.Utils.isClockWise(H);
    if (J) {
        for (H = H.reverse(), C = 0, D = I.length; D > C; C++)B = I[C], THREE.Shape.Utils.isClockWise(B) && (I[C] = B.reverse());
        J = !1
    }
    var K = THREE.Shape.Utils.triangulateShape(H, I), L = H;
    for (C = 0, D = I.length; D > C; C++)B = I[C], H = H.concat(B);
    for (var M, N, O, P, Q, R, S = H.length, T = K.length, U = (L.length, 180 / Math.PI, []), V = 0, W = L.length, X = W - 1, Y = V + 1; W > V; V++, X++, Y++) {
        X === W && (X = 0), Y === W && (Y = 0);
        {
            L[V], L[X], L[Y]
        }
        U[V] = d(L[V], L[X], L[Y])
    }
    var Z, $ = [], _ = U.concat();
    for (C = 0, D = I.length; D > C; C++) {
        for (B = I[C], Z = [], V = 0, W = B.length, X = W - 1, Y = V + 1; W > V; V++, X++, Y++)X === W && (X = 0), Y === W && (Y = 0), Z[V] = d(B[V], B[X], B[Y]);
        $.push(Z), _ = _.concat(Z)
    }
    for (M = 0; s > M; M++) {
        for (O = M / s, P = q * (1 - O), N = r * Math.sin(O * Math.PI / 2), V = 0, W = L.length; W > V; V++)Q = c(L[V], U[V], N), h(Q.x, Q.y, -P);
        for (C = 0, D = I.length; D > C; C++)for (B = I[C], Z = $[C], V = 0, W = B.length; W > V; V++)Q = c(B[V], Z[V], N), h(Q.x, Q.y, -P)
    }
    for (N = r, V = 0; S > V; V++)Q = t ? c(H[V], _[V], N) : H[V], x ? (n.copy(l.normals[0]).multiplyScalar(Q.x), m.copy(l.binormals[0]).multiplyScalar(Q.y), o.copy(k[0]).add(n).add(m), h(o.x, o.y, o.z)) : h(Q.x, Q.y, 0);
    var ab;
    for (ab = 1; v >= ab; ab++)for (V = 0; S > V; V++)Q = t ? c(H[V], _[V], N) : H[V], x ? (n.copy(l.normals[ab]).multiplyScalar(Q.x), m.copy(l.binormals[ab]).multiplyScalar(Q.y), o.copy(k[ab]).add(n).add(m), h(o.x, o.y, o.z)) : h(Q.x, Q.y, p / v * ab);
    for (M = s - 1; M >= 0; M--) {
        for (O = M / s, P = q * (1 - O), N = r * Math.sin(O * Math.PI / 2), V = 0, W = L.length; W > V; V++)Q = c(L[V], U[V], N), h(Q.x, Q.y, p + P);
        for (C = 0, D = I.length; D > C; C++)for (B = I[C], Z = $[C], V = 0, W = B.length; W > V; V++)Q = c(B[V], Z[V], N), x ? h(Q.x, Q.y + k[v - 1].y, k[v - 1].x + P) : h(Q.x, Q.y, p + P)
    }
    e(), f()
},THREE.ExtrudeGeometry.WorldUVGenerator = {
    generateTopUV: function (a, b, c, d) {
        var e = a.vertices, f = e[b], g = e[c], h = e[d];
        return [new THREE.Vector2(f.x, f.y), new THREE.Vector2(g.x, g.y), new THREE.Vector2(h.x, h.y)]
    }, generateSideWallUV: function (a, b, c, d, e) {
        var f = a.vertices, g = f[b], h = f[c], i = f[d], j = f[e];
        return Math.abs(g.y - h.y) < .01 ? [new THREE.Vector2(g.x, 1 - g.z), new THREE.Vector2(h.x, 1 - h.z), new THREE.Vector2(i.x, 1 - i.z), new THREE.Vector2(j.x, 1 - j.z)] : [new THREE.Vector2(g.y, 1 - g.z), new THREE.Vector2(h.y, 1 - h.z), new THREE.Vector2(i.y, 1 - i.z), new THREE.Vector2(j.y, 1 - j.z)]
    }
},THREE.ShapeGeometry = function (a, b) {
    THREE.Geometry.call(this), this.type = "ShapeGeometry", a instanceof Array == !1 && (a = [a]), this.addShapeList(a, b), this.computeFaceNormals()
},THREE.ShapeGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.ShapeGeometry.prototype.addShapeList = function (a, b) {
    for (var c = 0, d = a.length; d > c; c++)this.addShape(a[c], b);
    return this
},THREE.ShapeGeometry.prototype.addShape = function (a, b) {
    void 0 === b && (b = {});
    var c, d, e, f = void 0 !== b.curveSegments ? b.curveSegments : 12, g = b.material, h = void 0 === b.UVGenerator ? THREE.ExtrudeGeometry.WorldUVGenerator : b.UVGenerator, i = this.vertices.length, j = a.extractPoints(f), k = j.shape, l = j.holes, m = !THREE.Shape.Utils.isClockWise(k);
    if (m) {
        for (k = k.reverse(), c = 0, d = l.length; d > c; c++)e = l[c], THREE.Shape.Utils.isClockWise(e) && (l[c] = e.reverse());
        m = !1
    }
    var n = THREE.Shape.Utils.triangulateShape(k, l), o = k;
    for (c = 0, d = l.length; d > c; c++)e = l[c], k = k.concat(e);
    {
        var p, q, r = k.length, s = n.length;
        o.length
    }
    for (c = 0; r > c; c++)p = k[c], this.vertices.push(new THREE.Vector3(p.x, p.y, 0));
    for (c = 0; s > c; c++) {
        q = n[c];
        var t = q[0] + i, u = q[1] + i, v = q[2] + i;
        this.faces.push(new THREE.Face3(t, u, v, null, null, g)), this.faceVertexUvs[0].push(h.generateTopUV(this, t, u, v))
    }
},THREE.LatheGeometry = function (a, b, c, d) {
    THREE.Geometry.call(this), this.type = "LatheGeometry", this.parameters = {
        points: a,
        segments: b,
        phiStart: c,
        phiLength: d
    }, b = b || 12, c = c || 0, d = d || 2 * Math.PI;
    for (var e = 1 / (a.length - 1), f = 1 / b, g = 0, h = b; h >= g; g++)for (var i = c + g * f * d, j = Math.cos(i), k = Math.sin(i), l = 0, m = a.length; m > l; l++) {
        var n = a[l], o = new THREE.Vector3;
        o.x = j * n.x - k * n.y, o.y = k * n.x + j * n.y, o.z = n.z, this.vertices.push(o)
    }
    for (var p = a.length, g = 0, h = b; h > g; g++)for (var l = 0, m = a.length - 1; m > l; l++) {
        var q = l + p * g, r = q, s = q + p, j = q + 1 + p, t = q + 1, u = g * f, v = l * e, w = u + f, x = v + e;
        this.faces.push(new THREE.Face3(r, s, t)), this.faceVertexUvs[0].push([new THREE.Vector2(u, v), new THREE.Vector2(w, v), new THREE.Vector2(u, x)]), this.faces.push(new THREE.Face3(s, j, t)), this.faceVertexUvs[0].push([new THREE.Vector2(w, v), new THREE.Vector2(w, x), new THREE.Vector2(u, x)])
    }
    this.mergeVertices(), this.computeFaceNormals(), this.computeVertexNormals()
},THREE.LatheGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.PlaneGeometry = function (a, b, c, d) {
    console.info("THREE.PlaneGeometry: Consider using THREE.PlaneBufferGeometry for lower memory footprint."), THREE.Geometry.call(this), this.type = "PlaneGeometry", this.parameters = {
        width: a,
        height: b,
        widthSegments: c,
        heightSegments: d
    }, this.fromBufferGeometry(new THREE.PlaneBufferGeometry(a, b, c, d))
},THREE.PlaneGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.PlaneBufferGeometry = function (a, b, c, d) {
    THREE.BufferGeometry.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
        width: a,
        height: b,
        widthSegments: c,
        heightSegments: d
    };
    for (var e = a / 2, f = b / 2, g = c || 1, h = d || 1, i = g + 1, j = h + 1, k = a / g, l = b / h, m = new Float32Array(i * j * 3), n = new Float32Array(i * j * 3), o = new Float32Array(i * j * 2), p = 0, q = 0, r = 0; j > r; r++)for (var s = r * l - f, t = 0; i > t; t++) {
        var u = t * k - e;
        m[p] = u, m[p + 1] = -s, n[p + 2] = 1, o[q] = t / g, o[q + 1] = 1 - r / h, p += 3, q += 2
    }
    p = 0;
    for (var v = new (m.length / 3 > 65535 ? Uint32Array : Uint16Array)(g * h * 6), r = 0; h > r; r++)for (var t = 0; g > t; t++) {
        var w = t + i * r, x = t + i * (r + 1), y = t + 1 + i * (r + 1), z = t + 1 + i * r;
        v[p] = w, v[p + 1] = x, v[p + 2] = z, v[p + 3] = x, v[p + 4] = y, v[p + 5] = z, p += 6
    }
    this.addAttribute("index", new THREE.BufferAttribute(v, 1)), this.addAttribute("position", new THREE.BufferAttribute(m, 3)), this.addAttribute("normal", new THREE.BufferAttribute(n, 3)), this.addAttribute("uv", new THREE.BufferAttribute(o, 2))
},THREE.PlaneBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),THREE.RingGeometry = function (a, b, c, d, e, f) {
    THREE.Geometry.call(this), this.type = "RingGeometry", this.parameters = {
        innerRadius: a,
        outerRadius: b,
        thetaSegments: c,
        phiSegments: d,
        thetaStart: e,
        thetaLength: f
    }, a = a || 0, b = b || 50, e = void 0 !== e ? e : 0, f = void 0 !== f ? f : 2 * Math.PI, c = void 0 !== c ? Math.max(3, c) : 8, d = void 0 !== d ? Math.max(1, d) : 8;
    var g, h, i = [], j = a, k = (b - a) / d;
    for (g = 0; d + 1 > g; g++) {
        for (h = 0; c + 1 > h; h++) {
            var l = new THREE.Vector3, m = e + h / c * f;
            l.x = j * Math.cos(m), l.y = j * Math.sin(m), this.vertices.push(l), i.push(new THREE.Vector2((l.x / b + 1) / 2, (l.y / b + 1) / 2))
        }
        j += k
    }
    var n = new THREE.Vector3(0, 0, 1);
    for (g = 0; d > g; g++) {
        var o = g * (c + 1);
        for (h = 0; c > h; h++) {
            var m = h + o, p = m, q = m + c + 1, r = m + c + 2;
            this.faces.push(new THREE.Face3(p, q, r, [n.clone(), n.clone(), n.clone()])), this.faceVertexUvs[0].push([i[p].clone(), i[q].clone(), i[r].clone()]), p = m, q = m + c + 2, r = m + 1, this.faces.push(new THREE.Face3(p, q, r, [n.clone(), n.clone(), n.clone()])), this.faceVertexUvs[0].push([i[p].clone(), i[q].clone(), i[r].clone()])
        }
    }
    this.computeFaceNormals(), this.boundingSphere = new THREE.Sphere(new THREE.Vector3, j)
},THREE.RingGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.SphereGeometry = function (a, b, c, d, e, f, g) {
    THREE.Geometry.call(this), this.type = "SphereGeometry", this.parameters = {
        radius: a,
        widthSegments: b,
        heightSegments: c,
        phiStart: d,
        phiLength: e,
        thetaStart: f,
        thetaLength: g
    }, a = a || 50, b = Math.max(3, Math.floor(b) || 8), c = Math.max(2, Math.floor(c) || 6), d = void 0 !== d ? d : 0, e = void 0 !== e ? e : 2 * Math.PI, f = void 0 !== f ? f : 0, g = void 0 !== g ? g : Math.PI;
    var h, i, j = [], k = [];
    for (i = 0; c >= i; i++) {
        var l = [], m = [];
        for (h = 0; b >= h; h++) {
            var n = h / b, o = i / c, p = new THREE.Vector3;
            p.x = -a * Math.cos(d + n * e) * Math.sin(f + o * g), p.y = a * Math.cos(f + o * g), p.z = a * Math.sin(d + n * e) * Math.sin(f + o * g), this.vertices.push(p), l.push(this.vertices.length - 1), m.push(new THREE.Vector2(n, 1 - o))
        }
        j.push(l), k.push(m)
    }
    for (i = 0; c > i; i++)for (h = 0; b > h; h++) {
        var q = j[i][h + 1], r = j[i][h], s = j[i + 1][h], t = j[i + 1][h + 1], u = this.vertices[q].clone().normalize(), v = this.vertices[r].clone().normalize(), w = this.vertices[s].clone().normalize(), x = this.vertices[t].clone().normalize(), y = k[i][h + 1].clone(), z = k[i][h].clone(), A = k[i + 1][h].clone(), B = k[i + 1][h + 1].clone();
        Math.abs(this.vertices[q].y) === a ? (y.x = (y.x + z.x) / 2, this.faces.push(new THREE.Face3(q, s, t, [u, w, x])), this.faceVertexUvs[0].push([y, A, B])) : Math.abs(this.vertices[s].y) === a ? (A.x = (A.x + B.x) / 2, this.faces.push(new THREE.Face3(q, r, s, [u, v, w])), this.faceVertexUvs[0].push([y, z, A])) : (this.faces.push(new THREE.Face3(q, r, t, [u, v, x])), this.faceVertexUvs[0].push([y, z, B]), this.faces.push(new THREE.Face3(r, s, t, [v.clone(), w, x.clone()])), this.faceVertexUvs[0].push([z.clone(), A, B.clone()]))
    }
    this.computeFaceNormals(), this.boundingSphere = new THREE.Sphere(new THREE.Vector3, a)
},THREE.SphereGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.TextGeometry = function (a, b) {
    b = b || {};
    var c = THREE.FontUtils.generateShapes(a, b);
    b.amount = void 0 !== b.height ? b.height : 50, void 0 === b.bevelThickness && (b.bevelThickness = 10), void 0 === b.bevelSize && (b.bevelSize = 8), void 0 === b.bevelEnabled && (b.bevelEnabled = !1), THREE.ExtrudeGeometry.call(this, c, b), this.type = "TextGeometry"
},THREE.TextGeometry.prototype = Object.create(THREE.ExtrudeGeometry.prototype),THREE.TorusGeometry = function (a, b, c, d, e) {
    THREE.Geometry.call(this), this.type = "TorusGeometry", this.parameters = {
        radius: a,
        tube: b,
        radialSegments: c,
        tubularSegments: d,
        arc: e
    }, a = a || 100, b = b || 40, c = c || 8, d = d || 6, e = e || 2 * Math.PI;
    for (var f = new THREE.Vector3, g = [], h = [], i = 0; c >= i; i++)for (var j = 0; d >= j; j++) {
        var k = j / d * e, l = i / c * Math.PI * 2;
        f.x = a * Math.cos(k), f.y = a * Math.sin(k);
        var m = new THREE.Vector3;
        m.x = (a + b * Math.cos(l)) * Math.cos(k), m.y = (a + b * Math.cos(l)) * Math.sin(k), m.z = b * Math.sin(l), this.vertices.push(m), g.push(new THREE.Vector2(j / d, i / c)), h.push(m.clone().sub(f).normalize())
    }
    for (var i = 1; c >= i; i++)for (var j = 1; d >= j; j++) {
        var n = (d + 1) * i + j - 1, o = (d + 1) * (i - 1) + j - 1, p = (d + 1) * (i - 1) + j, q = (d + 1) * i + j, r = new THREE.Face3(n, o, q, [h[n].clone(), h[o].clone(), h[q].clone()]);
        this.faces.push(r), this.faceVertexUvs[0].push([g[n].clone(), g[o].clone(), g[q].clone()]), r = new THREE.Face3(o, p, q, [h[o].clone(), h[p].clone(), h[q].clone()]), this.faces.push(r), this.faceVertexUvs[0].push([g[o].clone(), g[p].clone(), g[q].clone()])
    }
    this.computeFaceNormals()
},THREE.TorusGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.TorusKnotGeometry = function (a, b, c, d, e, f, g) {
    function h(a, b, c, d, e) {
        var f = Math.cos(a), g = Math.sin(a), h = b / c * a, i = Math.cos(h), j = d * (2 + i) * .5 * f, k = d * (2 + i) * g * .5, l = e * d * Math.sin(h) * .5;
        return new THREE.Vector3(j, k, l)
    }

    THREE.Geometry.call(this), this.type = "TorusKnotGeometry", this.parameters = {
        radius: a,
        tube: b,
        radialSegments: c,
        tubularSegments: d,
        p: e,
        q: f,
        heightScale: g
    }, a = a || 100, b = b || 40, c = c || 64, d = d || 8, e = e || 2, f = f || 3, g = g || 1;
    for (var i = new Array(c), j = new THREE.Vector3, k = new THREE.Vector3, l = new THREE.Vector3, m = 0; c > m; ++m) {
        i[m] = new Array(d);
        var n = m / c * 2 * e * Math.PI, o = h(n, f, e, a, g), p = h(n + .01, f, e, a, g);
        j.subVectors(p, o), k.addVectors(p, o), l.crossVectors(j, k), k.crossVectors(l, j), l.normalize(), k.normalize();
        for (var q = 0; d > q; ++q) {
            var r = q / d * 2 * Math.PI, s = -b * Math.cos(r), t = b * Math.sin(r), u = new THREE.Vector3;
            u.x = o.x + s * k.x + t * l.x, u.y = o.y + s * k.y + t * l.y, u.z = o.z + s * k.z + t * l.z, i[m][q] = this.vertices.push(u) - 1
        }
    }
    for (var m = 0; c > m; ++m)for (var q = 0; d > q; ++q) {
        var v = (m + 1) % c, w = (q + 1) % d, x = i[m][q], y = i[v][q], z = i[v][w], A = i[m][w], B = new THREE.Vector2(m / c, q / d), C = new THREE.Vector2((m + 1) / c, q / d), D = new THREE.Vector2((m + 1) / c, (q + 1) / d), E = new THREE.Vector2(m / c, (q + 1) / d);
        this.faces.push(new THREE.Face3(x, y, A)), this.faceVertexUvs[0].push([B, C, E]), this.faces.push(new THREE.Face3(y, z, A)), this.faceVertexUvs[0].push([C.clone(), D, E.clone()])
    }
    this.computeFaceNormals(), this.computeVertexNormals()
},THREE.TorusKnotGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.TubeGeometry = function (a, b, c, d, e) {
    function f(a, b, c) {
        return B.vertices.push(new THREE.Vector3(a, b, c)) - 1
    }

    THREE.Geometry.call(this), this.type = "TubeGeometry", this.parameters = {
        path: a,
        segments: b,
        radius: c,
        radialSegments: d,
        closed: e
    }, b = b || 64, c = c || 1, d = d || 8, e = e || !1;
    var g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A = [], B = this, C = b + 1, D = new THREE.Vector3, E = new THREE.TubeGeometry.FrenetFrames(a, b, e), F = E.tangents, G = E.normals, H = E.binormals;
    for (this.tangents = F, this.normals = G, this.binormals = H, o = 0; C > o; o++)for (A[o] = [], j = o / (C - 1), n = a.getPointAt(j), g = F[o], h = G[o], i = H[o], p = 0; d > p; p++)k = p / d * 2 * Math.PI, l = -c * Math.cos(k), m = c * Math.sin(k), D.copy(n), D.x += l * h.x + m * i.x, D.y += l * h.y + m * i.y, D.z += l * h.z + m * i.z, A[o][p] = f(D.x, D.y, D.z);
    for (o = 0; b > o; o++)for (p = 0; d > p; p++)q = e ? (o + 1) % b : o + 1, r = (p + 1) % d, s = A[o][p], t = A[q][p], u = A[q][r], v = A[o][r], w = new THREE.Vector2(o / b, p / d), x = new THREE.Vector2((o + 1) / b, p / d), y = new THREE.Vector2((o + 1) / b, (p + 1) / d), z = new THREE.Vector2(o / b, (p + 1) / d), this.faces.push(new THREE.Face3(s, t, v)), this.faceVertexUvs[0].push([w, x, z]), this.faces.push(new THREE.Face3(t, u, v)), this.faceVertexUvs[0].push([x.clone(), y, z.clone()]);
    this.computeFaceNormals(), this.computeVertexNormals()
},THREE.TubeGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.TubeGeometry.FrenetFrames = function (a, b, c) {
    function d() {
        n[0] = new THREE.Vector3, o[0] = new THREE.Vector3, f = Number.MAX_VALUE, g = Math.abs(m[0].x), h = Math.abs(m[0].y), i = Math.abs(m[0].z), f >= g && (f = g, l.set(1, 0, 0)), f >= h && (f = h, l.set(0, 1, 0)), f >= i && l.set(0, 0, 1), p.crossVectors(m[0], l).normalize(), n[0].crossVectors(m[0], p), o[0].crossVectors(m[0], n[0])
    }

    var e, f, g, h, i, j, k, l = (new THREE.Vector3, new THREE.Vector3), m = (new THREE.Vector3, []), n = [], o = [], p = new THREE.Vector3, q = new THREE.Matrix4, r = b + 1, s = 1e-4;
    for (this.tangents = m, this.normals = n, this.binormals = o, j = 0; r > j; j++)k = j / (r - 1), m[j] = a.getTangentAt(k), m[j].normalize();
    for (d(), j = 1; r > j; j++)n[j] = n[j - 1].clone(), o[j] = o[j - 1].clone(), p.crossVectors(m[j - 1], m[j]), p.length() > s && (p.normalize(), e = Math.acos(THREE.Math.clamp(m[j - 1].dot(m[j]), -1, 1)), n[j].applyMatrix4(q.makeRotationAxis(p, e))), o[j].crossVectors(m[j], n[j]);
    if (c)for (e = Math.acos(THREE.Math.clamp(n[0].dot(n[r - 1]), -1, 1)), e /= r - 1, m[0].dot(p.crossVectors(n[0], n[r - 1])) > 0 && (e = -e), j = 1; r > j; j++)n[j].applyMatrix4(q.makeRotationAxis(m[j], e * j)), o[j].crossVectors(m[j], n[j])
},THREE.PolyhedronGeometry = function (a, b, c, d) {
    function e(a) {
        var b = a.normalize().clone();
        b.index = k.vertices.push(b) - 1;
        var c = h(a) / 2 / Math.PI + .5, d = i(a) / Math.PI + .5;
        return b.uv = new THREE.Vector2(c, 1 - d), b
    }

    function f(a, b, c) {
        var d = new THREE.Face3(a.index, b.index, c.index, [a.clone(), b.clone(), c.clone()]);
        k.faces.push(d), t.copy(a).add(b).add(c).divideScalar(3);
        var e = h(t);
        k.faceVertexUvs[0].push([j(a.uv, a, e), j(b.uv, b, e), j(c.uv, c, e)])
    }

    function g(a, b) {
        for (var c = Math.pow(2, b), d = (Math.pow(4, b), e(k.vertices[a.a])), g = e(k.vertices[a.b]), h = e(k.vertices[a.c]), i = [], j = 0; c >= j; j++) {
            i[j] = [];
            for (var l = e(d.clone().lerp(h, j / c)), m = e(g.clone().lerp(h, j / c)), n = c - j, o = 0; n >= o; o++)i[j][o] = 0 == o && j == c ? l : e(l.clone().lerp(m, o / n))
        }
        for (var j = 0; c > j; j++)for (var o = 0; 2 * (c - j) - 1 > o; o++) {
            var p = Math.floor(o / 2);
            o % 2 == 0 ? f(i[j][p + 1], i[j + 1][p], i[j][p]) : f(i[j][p + 1], i[j + 1][p + 1], i[j + 1][p])
        }
    }

    function h(a) {
        return Math.atan2(a.z, -a.x)
    }

    function i(a) {
        return Math.atan2(-a.y, Math.sqrt(a.x * a.x + a.z * a.z))
    }

    function j(a, b, c) {
        return 0 > c && 1 === a.x && (a = new THREE.Vector2(a.x - 1, a.y)), 0 === b.x && 0 === b.z && (a = new THREE.Vector2(c / 2 / Math.PI + .5, a.y)), a.clone()
    }

    THREE.Geometry.call(this), this.type = "PolyhedronGeometry", this.parameters = {
        vertices: a,
        indices: b,
        radius: c,
        detail: d
    }, c = c || 1, d = d || 0;
    for (var k = this, l = 0, m = a.length; m > l; l += 3)e(new THREE.Vector3(a[l], a[l + 1], a[l + 2]));
    for (var n = this.vertices, o = [], l = 0, p = 0, m = b.length; m > l; l += 3, p++) {
        var q = n[b[l]], r = n[b[l + 1]], s = n[b[l + 2]];
        o[p] = new THREE.Face3(q.index, r.index, s.index, [q.clone(), r.clone(), s.clone()])
    }
    for (var t = new THREE.Vector3, l = 0, m = o.length; m > l; l++)g(o[l], d);
    for (var l = 0, m = this.faceVertexUvs[0].length; m > l; l++) {
        var u = this.faceVertexUvs[0][l], v = u[0].x, w = u[1].x, x = u[2].x, y = Math.max(v, Math.max(w, x)), z = Math.min(v, Math.min(w, x));
        y > .9 && .1 > z && (.2 > v && (u[0].x += 1), .2 > w && (u[1].x += 1), .2 > x && (u[2].x += 1))
    }
    for (var l = 0, m = this.vertices.length; m > l; l++)this.vertices[l].multiplyScalar(c);
    this.mergeVertices(), this.computeFaceNormals(), this.boundingSphere = new THREE.Sphere(new THREE.Vector3, c)
},THREE.PolyhedronGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.DodecahedronGeometry = function (a, b) {
    this.parameters = {radius: a, detail: b};
    var c = (1 + Math.sqrt(5)) / 2, d = 1 / c, e = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -d, -c, 0, -d, c, 0, d, -c, 0, d, c, -d, -c, 0, -d, c, 0, d, -c, 0, d, c, 0, -c, 0, -d, c, 0, -d, -c, 0, d, c, 0, d], f = [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9];
    THREE.PolyhedronGeometry.call(this, e, f, a, b)
},THREE.DodecahedronGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.IcosahedronGeometry = function (a, b) {
    var c = (1 + Math.sqrt(5)) / 2, d = [-1, c, 0, 1, c, 0, -1, -c, 0, 1, -c, 0, 0, -1, c, 0, 1, c, 0, -1, -c, 0, 1, -c, c, 0, -1, c, 0, 1, -c, 0, -1, -c, 0, 1], e = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1];
    THREE.PolyhedronGeometry.call(this, d, e, a, b), this.type = "IcosahedronGeometry", this.parameters = {
        radius: a,
        detail: b
    }
},THREE.IcosahedronGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.OctahedronGeometry = function (a, b) {
    this.parameters = {radius: a, detail: b};
    var c = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], d = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
    THREE.PolyhedronGeometry.call(this, c, d, a, b), this.type = "OctahedronGeometry", this.parameters = {
        radius: a,
        detail: b
    }
},THREE.OctahedronGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.TetrahedronGeometry = function (a, b) {
    var c = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], d = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
    THREE.PolyhedronGeometry.call(this, c, d, a, b), this.type = "TetrahedronGeometry", this.parameters = {
        radius: a,
        detail: b
    }
},THREE.TetrahedronGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.ParametricGeometry = function (a, b, c) {
    THREE.Geometry.call(this), this.type = "ParametricGeometry", this.parameters = {func: a, slices: b, stacks: c};
    var d, e, f, g, h, i = this.vertices, j = this.faces, k = this.faceVertexUvs[0], l = b + 1;
    for (d = 0; c >= d; d++)for (h = d / c, e = 0; b >= e; e++)g = e / b, f = a(g, h), i.push(f);
    var m, n, o, p, q, r, s, t;
    for (d = 0; c > d; d++)for (e = 0; b > e; e++)m = d * l + e, n = d * l + e + 1, o = (d + 1) * l + e + 1, p = (d + 1) * l + e, q = new THREE.Vector2(e / b, d / c), r = new THREE.Vector2((e + 1) / b, d / c), s = new THREE.Vector2((e + 1) / b, (d + 1) / c), t = new THREE.Vector2(e / b, (d + 1) / c), j.push(new THREE.Face3(m, n, p)), k.push([q, r, t]), j.push(new THREE.Face3(n, o, p)), k.push([r.clone(), s, t.clone()]);
    this.computeFaceNormals(), this.computeVertexNormals()
},THREE.ParametricGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.AxisHelper = function (a) {
    a = a || 1;
    var b = new Float32Array([0, 0, 0, a, 0, 0, 0, 0, 0, 0, a, 0, 0, 0, 0, 0, 0, a]), c = new Float32Array([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1]), d = new THREE.BufferGeometry;
    d.addAttribute("position", new THREE.BufferAttribute(b, 3)), d.addAttribute("color", new THREE.BufferAttribute(c, 3));
    var e = new THREE.LineBasicMaterial({vertexColors: THREE.VertexColors});
    THREE.Line.call(this, d, e, THREE.LinePieces)
},THREE.AxisHelper.prototype = Object.create(THREE.Line.prototype),THREE.ArrowHelper = function () {
    var a = new THREE.Geometry;
    a.vertices.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0));
    var b = new THREE.CylinderGeometry(0, .5, 1, 5, 1);
    return b.applyMatrix((new THREE.Matrix4).makeTranslation(0, -.5, 0)), function (c, d, e, f, g, h) {
        THREE.Object3D.call(this), void 0 === f && (f = 16776960), void 0 === e && (e = 1), void 0 === g && (g = .2 * e), void 0 === h && (h = .2 * g), this.position.copy(d), this.line = new THREE.Line(a, new THREE.LineBasicMaterial({color: f})), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new THREE.Mesh(b, new THREE.MeshBasicMaterial({color: f})), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(c), this.setLength(e, g, h)
    }
}(),THREE.ArrowHelper.prototype = Object.create(THREE.Object3D.prototype),THREE.ArrowHelper.prototype.setDirection = function () {
    var a, b = new THREE.Vector3;
    return function (c) {
        c.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : c.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (b.set(c.z, 0, -c.x).normalize(), a = Math.acos(c.y), this.quaternion.setFromAxisAngle(b, a))
    }
}(),THREE.ArrowHelper.prototype.setLength = function (a, b, c) {
    void 0 === b && (b = .2 * a), void 0 === c && (c = .2 * b), this.line.scale.set(1, a, 1), this.line.updateMatrix(), this.cone.scale.set(c, b, c), this.cone.position.y = a, this.cone.updateMatrix()
},THREE.ArrowHelper.prototype.setColor = function (a) {
    this.line.material.color.set(a), this.cone.material.color.set(a)
},THREE.BoxHelper = function (a) {
    var b = new THREE.BufferGeometry;
    b.addAttribute("position", new THREE.BufferAttribute(new Float32Array(72), 3)), THREE.Line.call(this, b, new THREE.LineBasicMaterial({color: 16776960}), THREE.LinePieces), void 0 !== a && this.update(a)
},THREE.BoxHelper.prototype = Object.create(THREE.Line.prototype),THREE.BoxHelper.prototype.update = function (a) {
    var b = a.geometry;
    null === b.boundingBox && b.computeBoundingBox();
    var c = b.boundingBox.min, d = b.boundingBox.max, e = this.geometry.attributes.position.array;
    e[0] = d.x, e[1] = d.y, e[2] = d.z, e[3] = c.x, e[4] = d.y, e[5] = d.z, e[6] = c.x, e[7] = d.y, e[8] = d.z, e[9] = c.x, e[10] = c.y, e[11] = d.z, e[12] = c.x, e[13] = c.y, e[14] = d.z, e[15] = d.x, e[16] = c.y, e[17] = d.z, e[18] = d.x, e[19] = c.y, e[20] = d.z, e[21] = d.x, e[22] = d.y, e[23] = d.z, e[24] = d.x, e[25] = d.y, e[26] = c.z, e[27] = c.x, e[28] = d.y, e[29] = c.z, e[30] = c.x, e[31] = d.y, e[32] = c.z, e[33] = c.x, e[34] = c.y, e[35] = c.z, e[36] = c.x, e[37] = c.y, e[38] = c.z, e[39] = d.x, e[40] = c.y, e[41] = c.z, e[42] = d.x, e[43] = c.y, e[44] = c.z, e[45] = d.x, e[46] = d.y, e[47] = c.z, e[48] = d.x, e[49] = d.y, e[50] = d.z, e[51] = d.x, e[52] = d.y, e[53] = c.z, e[54] = c.x, e[55] = d.y, e[56] = d.z, e[57] = c.x, e[58] = d.y, e[59] = c.z, e[60] = c.x, e[61] = c.y, e[62] = d.z, e[63] = c.x, e[64] = c.y, e[65] = c.z, e[66] = d.x, e[67] = c.y, e[68] = d.z, e[69] = d.x, e[70] = c.y, e[71] = c.z, this.geometry.attributes.position.needsUpdate = !0, this.geometry.computeBoundingSphere(), this.matrix = a.matrixWorld, this.matrixAutoUpdate = !1
},THREE.BoundingBoxHelper = function (a, b) {
    var c = void 0 !== b ? b : 8947848;
    this.object = a, this.box = new THREE.Box3, THREE.Mesh.call(this, new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({
        color: c,
        wireframe: !0
    }))
},THREE.BoundingBoxHelper.prototype = Object.create(THREE.Mesh.prototype),THREE.BoundingBoxHelper.prototype.update = function () {
    this.box.setFromObject(this.object), this.box.size(this.scale), this.box.center(this.position)
},THREE.CameraHelper = function (a) {
    function b(a, b, d) {
        c(a, d), c(b, d)
    }

    function c(a, b) {
        d.vertices.push(new THREE.Vector3), d.colors.push(new THREE.Color(b)), void 0 === f[a] && (f[a] = []), f[a].push(d.vertices.length - 1)
    }

    var d = new THREE.Geometry, e = new THREE.LineBasicMaterial({
        color: 16777215,
        vertexColors: THREE.FaceColors
    }), f = {}, g = 16755200, h = 16711680, i = 43775, j = 16777215, k = 3355443;
    b("n1", "n2", g), b("n2", "n4", g), b("n4", "n3", g), b("n3", "n1", g), b("f1", "f2", g), b("f2", "f4", g), b("f4", "f3", g), b("f3", "f1", g), b("n1", "f1", g), b("n2", "f2", g), b("n3", "f3", g), b("n4", "f4", g), b("p", "n1", h), b("p", "n2", h), b("p", "n3", h), b("p", "n4", h), b("u1", "u2", i), b("u2", "u3", i), b("u3", "u1", i), b("c", "t", j), b("p", "c", k), b("cn1", "cn2", k), b("cn3", "cn4", k), b("cf1", "cf2", k), b("cf3", "cf4", k), THREE.Line.call(this, d, e, THREE.LinePieces), this.camera = a, this.matrix = a.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = f, this.update()
},THREE.CameraHelper.prototype = Object.create(THREE.Line.prototype),THREE.CameraHelper.prototype.update = function () {
    var a, b, c = new THREE.Vector3, d = new THREE.Camera, e = function (e, f, g, h) {
        c.set(f, g, h).unproject(d);
        var i = b[e];
        if (void 0 !== i)for (var j = 0, k = i.length; k > j; j++)a.vertices[i[j]].copy(c)
    };
    return function () {
        a = this.geometry, b = this.pointMap;
        var c = 1, f = 1;
        d.projectionMatrix.copy(this.camera.projectionMatrix), e("c", 0, 0, -1), e("t", 0, 0, 1), e("n1", -c, -f, -1), e("n2", c, -f, -1), e("n3", -c, f, -1), e("n4", c, f, -1), e("f1", -c, -f, 1), e("f2", c, -f, 1), e("f3", -c, f, 1), e("f4", c, f, 1), e("u1", .7 * c, 1.1 * f, -1), e("u2", .7 * -c, 1.1 * f, -1), e("u3", 0, 2 * f, -1), e("cf1", -c, 0, 1), e("cf2", c, 0, 1), e("cf3", 0, -f, 1), e("cf4", 0, f, 1), e("cn1", -c, 0, -1), e("cn2", c, 0, -1), e("cn3", 0, -f, -1), e("cn4", 0, f, -1), a.verticesNeedUpdate = !0
    }
}(),THREE.DirectionalLightHelper = function (a, b) {
    THREE.Object3D.call(this), this.light = a, this.light.updateMatrixWorld(), this.matrix = a.matrixWorld, this.matrixAutoUpdate = !1, b = b || 1;
    var c = new THREE.Geometry;
    c.vertices.push(new THREE.Vector3(-b, b, 0), new THREE.Vector3(b, b, 0), new THREE.Vector3(b, -b, 0), new THREE.Vector3(-b, -b, 0), new THREE.Vector3(-b, b, 0));
    var d = new THREE.LineBasicMaterial({fog: !1});
    d.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.lightPlane = new THREE.Line(c, d), this.add(this.lightPlane), c = new THREE.Geometry, c.vertices.push(new THREE.Vector3, new THREE.Vector3), d = new THREE.LineBasicMaterial({fog: !1}), d.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.targetLine = new THREE.Line(c, d), this.add(this.targetLine), this.update()
},THREE.DirectionalLightHelper.prototype = Object.create(THREE.Object3D.prototype),THREE.DirectionalLightHelper.prototype.dispose = function () {
    this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
},THREE.DirectionalLightHelper.prototype.update = function () {
    var a = new THREE.Vector3, b = new THREE.Vector3, c = new THREE.Vector3;
    return function () {
        a.setFromMatrixPosition(this.light.matrixWorld), b.setFromMatrixPosition(this.light.target.matrixWorld), c.subVectors(b, a), this.lightPlane.lookAt(c), this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.targetLine.geometry.vertices[1].copy(c), this.targetLine.geometry.verticesNeedUpdate = !0, this.targetLine.material.color.copy(this.lightPlane.material.color)
    }
}(),THREE.EdgesHelper = function (a, b) {
    var c = void 0 !== b ? b : 16777215, d = [0, 0], e = {}, f = function (a, b) {
        return a - b
    }, g = ["a", "b", "c"], h = new THREE.BufferGeometry, i = a.geometry.clone();
    i.mergeVertices(), i.computeFaceNormals();
    for (var j = i.vertices, k = i.faces, l = 0, m = 0, n = k.length; n > m; m++)for (var o = k[m], p = 0; 3 > p; p++) {
        d[0] = o[g[p]], d[1] = o[g[(p + 1) % 3]], d.sort(f);
        var q = d.toString();
        void 0 === e[q] ? (e[q] = {vert1: d[0], vert2: d[1], face1: m, face2: void 0}, l++) : e[q].face2 = m
    }
    var r = new Float32Array(2 * l * 3), s = 0;
    for (var q in e) {
        var t = e[q];
        if (void 0 === t.face2 || k[t.face1].normal.dot(k[t.face2].normal) < .9999) {
            var u = j[t.vert1];
            r[s++] = u.x, r[s++] = u.y, r[s++] = u.z, u = j[t.vert2], r[s++] = u.x, r[s++] = u.y, r[s++] = u.z
        }
    }
    h.addAttribute("position", new THREE.BufferAttribute(r, 3)), THREE.Line.call(this, h, new THREE.LineBasicMaterial({color: c}), THREE.LinePieces), this.matrix = a.matrixWorld, this.matrixAutoUpdate = !1
},THREE.EdgesHelper.prototype = Object.create(THREE.Line.prototype),THREE.FaceNormalsHelper = function (a, b, c, d) {
    this.object = a, this.size = void 0 !== b ? b : 1;
    for (var e = void 0 !== c ? c : 16776960, f = void 0 !== d ? d : 1, g = new THREE.Geometry, h = this.object.geometry.faces, i = 0, j = h.length; j > i; i++)g.vertices.push(new THREE.Vector3, new THREE.Vector3);
    THREE.Line.call(this, g, new THREE.LineBasicMaterial({
        color: e,
        linewidth: f
    }), THREE.LinePieces), this.matrixAutoUpdate = !1, this.normalMatrix = new THREE.Matrix3, this.update()
},THREE.FaceNormalsHelper.prototype = Object.create(THREE.Line.prototype),THREE.FaceNormalsHelper.prototype.update = function () {
    var a = this.geometry.vertices, b = this.object, c = b.geometry.vertices, d = b.geometry.faces, e = b.matrixWorld;
    b.updateMatrixWorld(!0), this.normalMatrix.getNormalMatrix(e);
    for (var f = 0, g = 0, h = d.length; h > f; f++, g += 2) {
        var i = d[f];
        a[g].copy(c[i.a]).add(c[i.b]).add(c[i.c]).divideScalar(3).applyMatrix4(e), a[g + 1].copy(i.normal).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size).add(a[g])
    }
    return this.geometry.verticesNeedUpdate = !0, this
},THREE.GridHelper = function (a, b) {
    var c = new THREE.Geometry, d = new THREE.LineBasicMaterial({vertexColors: THREE.VertexColors});
    this.color1 = new THREE.Color(4473924), this.color2 = new THREE.Color(8947848);
    for (var e = -a; a >= e; e += b) {
        c.vertices.push(new THREE.Vector3(-a, 0, e), new THREE.Vector3(a, 0, e), new THREE.Vector3(e, 0, -a), new THREE.Vector3(e, 0, a));
        var f = 0 === e ? this.color1 : this.color2;
        c.colors.push(f, f, f, f)
    }
    THREE.Line.call(this, c, d, THREE.LinePieces)
},THREE.GridHelper.prototype = Object.create(THREE.Line.prototype),THREE.GridHelper.prototype.setColors = function (a, b) {
    this.color1.set(a), this.color2.set(b), this.geometry.colorsNeedUpdate = !0
},THREE.HemisphereLightHelper = function (a, b) {
    THREE.Object3D.call(this), this.light = a, this.light.updateMatrixWorld(), this.matrix = a.matrixWorld, this.matrixAutoUpdate = !1, this.colors = [new THREE.Color, new THREE.Color];
    var c = new THREE.SphereGeometry(b, 4, 2);
    c.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI / 2));
    for (var d = 0, e = 8; e > d; d++)c.faces[d].color = this.colors[4 > d ? 0 : 1];
    var f = new THREE.MeshBasicMaterial({vertexColors: THREE.FaceColors, wireframe: !0});
    this.lightSphere = new THREE.Mesh(c, f), this.add(this.lightSphere), this.update()
},THREE.HemisphereLightHelper.prototype = Object.create(THREE.Object3D.prototype),THREE.HemisphereLightHelper.prototype.dispose = function () {
    this.lightSphere.geometry.dispose(), this.lightSphere.material.dispose()
},THREE.HemisphereLightHelper.prototype.update = function () {
    var a = new THREE.Vector3;
    return function () {
        this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity), this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity), this.lightSphere.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate()), this.lightSphere.geometry.colorsNeedUpdate = !0
    }
}(),THREE.PointLightHelper = function (a, b) {
    this.light = a, this.light.updateMatrixWorld();
    var c = new THREE.SphereGeometry(b, 4, 2), d = new THREE.MeshBasicMaterial({wireframe: !0, fog: !1});
    d.color.copy(this.light.color).multiplyScalar(this.light.intensity), THREE.Mesh.call(this, c, d), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1
},THREE.PointLightHelper.prototype = Object.create(THREE.Mesh.prototype),THREE.PointLightHelper.prototype.dispose = function () {
    this.geometry.dispose(), this.material.dispose()
},THREE.PointLightHelper.prototype.update = function () {
    this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
},THREE.SkeletonHelper = function (a) {
    this.bones = this.getBoneList(a);
    for (var b = new THREE.Geometry, c = 0; c < this.bones.length; c++) {
        var d = this.bones[c];
        d.parent instanceof THREE.Bone && (b.vertices.push(new THREE.Vector3), b.vertices.push(new THREE.Vector3), b.colors.push(new THREE.Color(0, 0, 1)), b.colors.push(new THREE.Color(0, 1, 0)))
    }
    var e = new THREE.LineBasicMaterial({
        vertexColors: THREE.VertexColors,
        depthTest: !1,
        depthWrite: !1,
        transparent: !0
    });
    THREE.Line.call(this, b, e, THREE.LinePieces), this.root = a, this.matrix = a.matrixWorld, this.matrixAutoUpdate = !1, this.update()
},THREE.SkeletonHelper.prototype = Object.create(THREE.Line.prototype),THREE.SkeletonHelper.prototype.getBoneList = function (a) {
    var b = [];
    a instanceof THREE.Bone && b.push(a);
    for (var c = 0; c < a.children.length; c++)b.push.apply(b, this.getBoneList(a.children[c]));
    return b
},THREE.SkeletonHelper.prototype.update = function () {
    for (var a = this.geometry, b = (new THREE.Matrix4).getInverse(this.root.matrixWorld), c = new THREE.Matrix4, d = 0, e = 0; e < this.bones.length; e++) {
        var f = this.bones[e];
        f.parent instanceof THREE.Bone && (c.multiplyMatrices(b, f.matrixWorld), a.vertices[d].setFromMatrixPosition(c), c.multiplyMatrices(b, f.parent.matrixWorld), a.vertices[d + 1].setFromMatrixPosition(c), d += 2)
    }
    a.verticesNeedUpdate = !0, a.computeBoundingSphere()
},THREE.SpotLightHelper = function (a) {
    THREE.Object3D.call(this), this.light = a, this.light.updateMatrixWorld(), this.matrix = a.matrixWorld, this.matrixAutoUpdate = !1;
    var b = new THREE.CylinderGeometry(0, 1, 1, 8, 1, !0);
    b.applyMatrix((new THREE.Matrix4).makeTranslation(0, -.5, 0)), b.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI / 2));
    var c = new THREE.MeshBasicMaterial({wireframe: !0, fog: !1});
    this.cone = new THREE.Mesh(b, c), this.add(this.cone), this.update()
},THREE.SpotLightHelper.prototype = Object.create(THREE.Object3D.prototype),THREE.SpotLightHelper.prototype.dispose = function () {
    this.cone.geometry.dispose(), this.cone.material.dispose()
},THREE.SpotLightHelper.prototype.update = function () {
    var a = new THREE.Vector3, b = new THREE.Vector3;
    return function () {
        var c = this.light.distance ? this.light.distance : 1e4, d = c * Math.tan(this.light.angle);
        this.cone.scale.set(d, d, c), a.setFromMatrixPosition(this.light.matrixWorld), b.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(b.sub(a)), this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
    }
}(),THREE.VertexNormalsHelper = function (a, b, c, d) {
    this.object = a, this.size = void 0 !== b ? b : 1;
    for (var e = void 0 !== c ? c : 16711680, f = void 0 !== d ? d : 1, g = new THREE.Geometry, h = (a.geometry.vertices, a.geometry.faces), i = 0, j = h.length; j > i; i++)for (var k = h[i], l = 0, m = k.vertexNormals.length; m > l; l++)g.vertices.push(new THREE.Vector3, new THREE.Vector3);
    THREE.Line.call(this, g, new THREE.LineBasicMaterial({
        color: e,
        linewidth: f
    }), THREE.LinePieces), this.matrixAutoUpdate = !1, this.normalMatrix = new THREE.Matrix3, this.update()
},THREE.VertexNormalsHelper.prototype = Object.create(THREE.Line.prototype),THREE.VertexNormalsHelper.prototype.update = function () {
    var a = new THREE.Vector3;
    return function () {
        var b = ["a", "b", "c", "d"];
        this.object.updateMatrixWorld(!0), this.normalMatrix.getNormalMatrix(this.object.matrixWorld);
        for (var c = this.geometry.vertices, d = this.object.geometry.vertices, e = this.object.geometry.faces, f = this.object.matrixWorld, g = 0, h = 0, i = e.length; i > h; h++)for (var j = e[h], k = 0, l = j.vertexNormals.length; l > k; k++) {
            var m = j[b[k]], n = d[m], o = j.vertexNormals[k];
            c[g].copy(n).applyMatrix4(f), a.copy(o).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size), a.add(c[g]), g += 1, c[g].copy(a), g += 1
        }
        return this.geometry.verticesNeedUpdate = !0, this
    }
}(),THREE.VertexTangentsHelper = function (a, b, c, d) {
    this.object = a, this.size = void 0 !== b ? b : 1;
    for (var e = void 0 !== c ? c : 255, f = void 0 !== d ? d : 1, g = new THREE.Geometry, h = (a.geometry.vertices, a.geometry.faces), i = 0, j = h.length; j > i; i++)for (var k = h[i], l = 0, m = k.vertexTangents.length; m > l; l++)g.vertices.push(new THREE.Vector3), g.vertices.push(new THREE.Vector3);
    THREE.Line.call(this, g, new THREE.LineBasicMaterial({
        color: e,
        linewidth: f
    }), THREE.LinePieces), this.matrixAutoUpdate = !1, this.update()
},THREE.VertexTangentsHelper.prototype = Object.create(THREE.Line.prototype),THREE.VertexTangentsHelper.prototype.update = function () {
    var a = new THREE.Vector3;
    return function () {
        var b = ["a", "b", "c", "d"];
        this.object.updateMatrixWorld(!0);
        for (var c = this.geometry.vertices, d = this.object.geometry.vertices, e = this.object.geometry.faces, f = this.object.matrixWorld, g = 0, h = 0, i = e.length; i > h; h++)for (var j = e[h], k = 0, l = j.vertexTangents.length; l > k; k++) {
            var m = j[b[k]], n = d[m], o = j.vertexTangents[k];
            c[g].copy(n).applyMatrix4(f), a.copy(o).transformDirection(f).multiplyScalar(this.size), a.add(c[g]), g += 1, c[g].copy(a), g += 1
        }
        return this.geometry.verticesNeedUpdate = !0, this
    }
}(),THREE.WireframeHelper = function (a, b) {
    var c = void 0 !== b ? b : 16777215, d = [0, 0], e = {}, f = function (a, b) {
        return a - b
    }, g = ["a", "b", "c"], h = new THREE.BufferGeometry;
    if (a.geometry instanceof THREE.Geometry) {
        for (var i = a.geometry.vertices, j = a.geometry.faces, k = 0, l = new Uint32Array(6 * j.length), m = 0, n = j.length; n > m; m++)for (var o = j[m], p = 0; 3 > p; p++) {
            d[0] = o[g[p]], d[1] = o[g[(p + 1) % 3]], d.sort(f);
            var q = d.toString();
            void 0 === e[q] && (l[2 * k] = d[0], l[2 * k + 1] = d[1], e[q] = !0, k++)
        }
        for (var r = new Float32Array(2 * k * 3), m = 0, n = k; n > m; m++)for (var p = 0; 2 > p; p++) {
            var s = i[l[2 * m + p]], t = 6 * m + 3 * p;
            r[t + 0] = s.x, r[t + 1] = s.y, r[t + 2] = s.z
        }
        h.addAttribute("position", new THREE.BufferAttribute(r, 3))
    } else if (a.geometry instanceof THREE.BufferGeometry)if (void 0 !== a.geometry.attributes.index) {
        var i = a.geometry.attributes.position.array, u = a.geometry.attributes.index.array, v = a.geometry.drawcalls, k = 0;
        0 === v.length && (v = [{count: u.length, index: 0, start: 0}]);
        for (var l = new Uint32Array(2 * u.length), w = 0, x = v.length; x > w; ++w)for (var y = v[w].start, z = v[w].count, t = v[w].index, m = y, A = y + z; A > m; m += 3)for (var p = 0; 3 > p; p++) {
            d[0] = t + u[m + p], d[1] = t + u[m + (p + 1) % 3], d.sort(f);
            var q = d.toString();
            void 0 === e[q] && (l[2 * k] = d[0], l[2 * k + 1] = d[1], e[q] = !0, k++)
        }
        for (var r = new Float32Array(2 * k * 3), m = 0, n = k; n > m; m++)for (var p = 0; 2 > p; p++) {
            var t = 6 * m + 3 * p, B = 3 * l[2 * m + p];
            r[t + 0] = i[B], r[t + 1] = i[B + 1], r[t + 2] = i[B + 2]
        }
        h.addAttribute("position", new THREE.BufferAttribute(r, 3))
    } else {
        for (var i = a.geometry.attributes.position.array, k = i.length / 3, C = k / 3, r = new Float32Array(2 * k * 3), m = 0, n = C; n > m; m++)for (var p = 0; 3 > p; p++) {
            var t = 18 * m + 6 * p, D = 9 * m + 3 * p;
            r[t + 0] = i[D], r[t + 1] = i[D + 1], r[t + 2] = i[D + 2];
            var B = 9 * m + 3 * ((p + 1) % 3);
            r[t + 3] = i[B], r[t + 4] = i[B + 1], r[t + 5] = i[B + 2]
        }
        h.addAttribute("position", new THREE.BufferAttribute(r, 3))
    }
    THREE.Line.call(this, h, new THREE.LineBasicMaterial({color: c}), THREE.LinePieces), this.matrix = a.matrixWorld, this.matrixAutoUpdate = !1
},THREE.WireframeHelper.prototype = Object.create(THREE.Line.prototype),THREE.ImmediateRenderObject = function () {
    THREE.Object3D.call(this), this.render = function () {
    }
},THREE.ImmediateRenderObject.prototype = Object.create(THREE.Object3D.prototype),THREE.MorphBlendMesh = function (a, b) {
    THREE.Mesh.call(this, a, b), this.animationsMap = {}, this.animationsList = [];
    var c = this.geometry.morphTargets.length, d = "__default", e = 0, f = c - 1, g = c / 1;
    this.createAnimation(d, e, f, g), this.setAnimationWeight(d, 1)
},THREE.MorphBlendMesh.prototype = Object.create(THREE.Mesh.prototype),THREE.MorphBlendMesh.prototype.createAnimation = function (a, b, c, d) {
    var e = {
        startFrame: b,
        endFrame: c,
        length: c - b + 1,
        fps: d,
        duration: (c - b) / d,
        lastFrame: 0,
        currentFrame: 0,
        active: !1,
        time: 0,
        direction: 1,
        weight: 1,
        directionBackwards: !1,
        mirroredLoop: !1
    };
    this.animationsMap[a] = e, this.animationsList.push(e)
},THREE.MorphBlendMesh.prototype.autoCreateAnimations = function (a) {
    for (var b, c = /([a-z]+)_?(\d+)/, d = {}, e = this.geometry, f = 0, g = e.morphTargets.length; g > f; f++) {
        var h = e.morphTargets[f], i = h.name.match(c);
        if (i && i.length > 1) {
            {
                var j = i[1];
                i[2]
            }
            d[j] || (d[j] = {start: 1 / 0, end: -1 / 0});
            var k = d[j];
            f < k.start && (k.start = f), f > k.end && (k.end = f), b || (b = j)
        }
    }
    for (var j in d) {
        var k = d[j];
        this.createAnimation(j, k.start, k.end, a)
    }
    this.firstAnimation = b
},THREE.MorphBlendMesh.prototype.setAnimationDirectionForward = function (a) {
    var b = this.animationsMap[a];
    b && (b.direction = 1, b.directionBackwards = !1)
},THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward = function (a) {
    var b = this.animationsMap[a];
    b && (b.direction = -1, b.directionBackwards = !0)
},THREE.MorphBlendMesh.prototype.setAnimationFPS = function (a, b) {
    var c = this.animationsMap[a];
    c && (c.fps = b, c.duration = (c.end - c.start) / c.fps)
},THREE.MorphBlendMesh.prototype.setAnimationDuration = function (a, b) {
    var c = this.animationsMap[a];
    c && (c.duration = b, c.fps = (c.end - c.start) / c.duration)
},THREE.MorphBlendMesh.prototype.setAnimationWeight = function (a, b) {
    var c = this.animationsMap[a];
    c && (c.weight = b)
},THREE.MorphBlendMesh.prototype.setAnimationTime = function (a, b) {
    var c = this.animationsMap[a];
    c && (c.time = b)
},THREE.MorphBlendMesh.prototype.getAnimationTime = function (a) {
    var b = 0, c = this.animationsMap[a];
    return c && (b = c.time), b
},THREE.MorphBlendMesh.prototype.getAnimationDuration = function (a) {
    var b = -1, c = this.animationsMap[a];
    return c && (b = c.duration), b
},THREE.MorphBlendMesh.prototype.playAnimation = function (a) {
    var b = this.animationsMap[a];
    b ? (b.time = 0, b.active = !0) : console.warn("animation[" + a + "] undefined")
},THREE.MorphBlendMesh.prototype.stopAnimation = function (a) {
    var b = this.animationsMap[a];
    b && (b.active = !1)
},THREE.MorphBlendMesh.prototype.update = function (a) {
    for (var b = 0, c = this.animationsList.length; c > b; b++) {
        var d = this.animationsList[b];
        if (d.active) {
            var e = d.duration / d.length;
            d.time += d.direction * a, d.mirroredLoop ? (d.time > d.duration || d.time < 0) && (d.direction *= -1, d.time > d.duration && (d.time = d.duration, d.directionBackwards = !0), d.time < 0 && (d.time = 0, d.directionBackwards = !1)) : (d.time = d.time % d.duration, d.time < 0 && (d.time += d.duration));
            var f = d.startFrame + THREE.Math.clamp(Math.floor(d.time / e), 0, d.length - 1), g = d.weight;
            f !== d.currentFrame && (this.morphTargetInfluences[d.lastFrame] = 0, this.morphTargetInfluences[d.currentFrame] = 1 * g, this.morphTargetInfluences[f] = 0, d.lastFrame = d.currentFrame, d.currentFrame = f);
            var h = d.time % e / e;
            d.directionBackwards && (h = 1 - h), this.morphTargetInfluences[d.currentFrame] = h * g, this.morphTargetInfluences[d.lastFrame] = (1 - h) * g
        }
    }
},THREE.DDSLoader = function () {
    this._parser = THREE.DDSLoader.parse
},THREE.DDSLoader.prototype = Object.create(THREE.CompressedTextureLoader.prototype),THREE.DDSLoader.parse = function (a, b) {
    function c(a) {
        return a.charCodeAt(0) + (a.charCodeAt(1) << 8) + (a.charCodeAt(2) << 16) + (a.charCodeAt(3) << 24)
    }

    function d(a) {
        return String.fromCharCode(255 & a, a >> 8 & 255, a >> 16 & 255, a >> 24 & 255)
    }

    function e(a, b, c, d) {
        for (var e = c * d * 4, f = new Uint8Array(a, b, e), g = new Uint8Array(e), h = 0, i = 0, j = 0; d > j; j++)for (var k = 0; c > k; k++) {
            var l = f[i];
            i++;
            var m = f[i];
            i++;
            var n = f[i];
            i++;
            var o = f[i];
            i++, g[h] = n, h++, g[h] = m, h++, g[h] = l, h++, g[h] = o, h++
        }
        return g
    }

    var f = {
        mipmaps: [],
        width: 0,
        height: 0,
        format: null,
        mipmapCount: 1
    }, g = 542327876, h = 131072, i = 512, j = 4, k = c("DXT1"), l = c("DXT3"), m = c("DXT5"), n = 31, o = 0, p = 1, q = 2, r = 3, s = 4, t = 7, u = 20, v = 21, w = 22, x = 23, y = 24, z = 25, A = 26, B = 28, C = new Int32Array(a, 0, n);
    if (C[o] !== g)return console.error("THREE.DDSLoader.parse: Invalid magic number in DDS header."), f;
    if (!C[u] & j)return console.error("THREE.DDSLoader.parse: Unsupported format, must contain a FourCC code."), f;
    var D, E = C[v], F = !1;
    switch (E) {
        case k:
            D = 8, f.format = THREE.RGB_S3TC_DXT1_Format;
            break;
        case l:
            D = 16, f.format = THREE.RGBA_S3TC_DXT3_Format;
            break;
        case m:
            D = 16, f.format = THREE.RGBA_S3TC_DXT5_Format;
            break;
        default:
            if (!(32 == C[w] && 16711680 & C[x] && 65280 & C[y] && 255 & C[z] && 4278190080 & C[A]))return console.error("THREE.DDSLoader.parse: Unsupported FourCC code ", d(E)), f;
            F = !0, D = 64, f.format = THREE.RGBAFormat
    }
    f.mipmapCount = 1, C[q] & h && b !== !1 && (f.mipmapCount = Math.max(1, C[t])), f.isCubemap = C[B] & i ? !0 : !1, f.width = C[s], f.height = C[r];
    for (var G = C[p] + 4, H = f.width, I = f.height, J = f.isCubemap ? 6 : 1, K = 0; J > K; K++) {
        for (var L = 0; L < f.mipmapCount; L++) {
            if (F)var M = e(a, G, H, I), N = M.length; else var N = Math.max(4, H) / 4 * Math.max(4, I) / 4 * D, M = new Uint8Array(a, G, N);
            var O = {data: M, width: H, height: I};
            f.mipmaps.push(O), G += N, H = Math.max(.5 * H, 1), I = Math.max(.5 * I, 1)
        }
        H = f.width, I = f.height
    }
    return f
},THREE.PVRLoader = function () {
    this._parser = THREE.PVRLoader.parse
},THREE.PVRLoader.prototype = Object.create(THREE.CompressedTextureLoader.prototype),THREE.PVRLoader.parse = function (a, b) {
    var c = 13, d = new Uint32Array(a, 0, c), e = {buffer: a, header: d, loadMipmaps: b};
    if (55727696 === d[0])return THREE.PVRLoader._parseV3(e);
    if (559044176 === d[11])return THREE.PVRLoader._parseV2(e);
    throw new Error("[THREE.PVRLoader] Unknown PVR format")
},THREE.PVRLoader._parseV3 = function (a) {
    var b, c, d = a.header, e = d[12], f = d[2], g = d[6], h = d[7], i = (d[9], d[10]), j = d[11];
    switch (f) {
        case 0:
            b = 2, c = THREE.RGB_PVRTC_2BPPV1_Format;
            break;
        case 1:
            b = 2, c = THREE.RGBA_PVRTC_2BPPV1_Format;
            break;
        case 2:
            b = 4, c = THREE.RGB_PVRTC_4BPPV1_Format;
            break;
        case 3:
            b = 4, c = THREE.RGBA_PVRTC_4BPPV1_Format;
            break;
        default:
            throw new Error("pvrtc - unsupported PVR format " + f)
    }
    return a.dataPtr = 52 + e, a.bpp = b, a.format = c, a.width = h, a.height = g, a.numSurfaces = i, a.numMipmaps = j, a.isCubemap = 6 === i, THREE.PVRLoader._extract(a)
},THREE.PVRLoader._parseV2 = function (a) {
    var b, c = a.header, d = c[0], e = c[1], f = c[2], g = c[3], h = c[4], i = (c[5], c[6]), j = (c[7], c[8], c[9], c[10]), k = (c[11], c[12]), l = 255, m = 24, n = 25, o = h & l, p = j > 0;
    if (o === n)b = p ? THREE.RGBA_PVRTC_4BPPV1_Format : THREE.RGB_PVRTC_4BPPV1_Format, i = 4; else {
        if (o !== m)throw new Error("pvrtc - unknown format " + o);
        b = p ? THREE.RGBA_PVRTC_2BPPV1_Format : THREE.RGB_PVRTC_2BPPV1_Format, i = 2
    }
    return a.dataPtr = d, a.bpp = i, a.format = b, a.width = f, a.height = e, a.numSurfaces = k, a.numMipmaps = g + 1, a.isCubemap = 6 === k, THREE.PVRLoader._extract(a)
},THREE.PVRLoader._extract = function (a) {
    var b = {
        mipmaps: [],
        width: a.width,
        height: a.height,
        format: a.format,
        mipmapCount: a.numMipmaps,
        isCubemap: a.isCubemap
    }, c = a.buffer, d = a.dataPtr, e = a.bpp, f = a.numSurfaces, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
    2 === e ? (i = 8, j = 4) : (i = 4, j = 4), h = i * j * e / 8, b.mipmaps.length = a.numMipmaps * f;
    for (var m = 0; m < a.numMipmaps;) {
        var n = a.width >> m, o = a.height >> m;
        k = n / i, l = o / j, 2 > k && (k = 2), 2 > l && (l = 2), g = k * l * h;
        for (var p = 0; f > p; p++) {
            var q = new Uint8Array(c, d, g), r = {data: q, width: n, height: o};
            b.mipmaps[p * a.numMipmaps + m] = r, d += g
        }
        m++
    }
    return b
},define("three", function (a) {
    return function () {
        var b;
        return b || a.THREE
    }
}(this)),function (a) {
    "use strict";
    var b = a.GreenSockGlobals || a;
    if (!b.TweenLite) {
        var c, d, e, f, g, h = function (a) {
            var c, d = a.split("."), e = b;
            for (c = 0; d.length > c; c++)e[d[c]] = e = e[d[c]] || {};
            return e
        }, i = h("com.greensock"), j = 1e-10, k = [].slice, l = function () {
        }, m = function () {
            var a = Object.prototype.toString, b = a.call([]);
            return function (c) {
                return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
            }
        }(), n = {}, o = function (c, d, e, f) {
            this.sc = n[c] ? n[c].sc : [], n[c] = this, this.gsClass = null, this.func = e;
            var g = [];
            this.check = function (i) {
                for (var j, k, l, m, p = d.length, q = p; --p > -1;)(j = n[d[p]] || new o(d[p], [])).gsClass ? (g[p] = j.gsClass, q--) : i && j.sc.push(this);
                if (0 === q && e)for (k = ("com.greensock." + c).split("."), l = k.pop(), m = h(k.join("."))[l] = this.gsClass = e.apply(e, g), f && (b[l] = m, "function" == typeof define && define.amd ? define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + c.split(".").join("/"), [], function () {
                    return m
                }) : "undefined" != typeof module && module.exports && (module.exports = m)), p = 0; this.sc.length > p; p++)this.sc[p].check()
            }, this.check(!0)
        }, p = a._gsDefine = function (a, b, c, d) {
            return new o(a, b, c, d)
        }, q = i._class = function (a, b, c) {
            return b = b || function () {
                }, p(a, [], function () {
                return b
            }, c), b
        };
        p.globals = b;
        var r = [0, 0, 1, 1], s = [], t = q("easing.Ease", function (a, b, c, d) {
            this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? r.concat(b) : r
        }, !0), u = t.map = {}, v = t.register = function (a, b, c, d) {
            for (var e, f, g, h, j = b.split(","), k = j.length, l = (c || "easeIn,easeOut,easeInOut").split(","); --k > -1;)for (f = j[k], e = d ? q("easing." + f, null, !0) : i.easing[f] || {}, g = l.length; --g > -1;)h = l[g], u[f + "." + h] = u[h + f] = e[h] = a.getRatio ? a : a[h] || new a
        };
        for (e = t.prototype, e._calcEnd = !1, e.getRatio = function (a) {
            if (this._func)return this._params[0] = a, this._func.apply(null, this._params);
            var b = this._type, c = this._power, d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
            return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
        }, c = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], d = c.length; --d > -1;)e = c[d] + ",Power" + d, v(new t(null, null, 1, d), e, "easeOut", !0), v(new t(null, null, 2, d), e, "easeIn" + (0 === d ? ",easeNone" : "")), v(new t(null, null, 3, d), e, "easeInOut");
        u.linear = i.easing.Linear.easeIn, u.swing = i.easing.Quad.easeInOut;
        var w = q("events.EventDispatcher", function (a) {
            this._listeners = {}, this._eventTarget = a || this
        });
        e = w.prototype, e.addEventListener = function (a, b, c, d, e) {
            e = e || 0;
            var h, i, j = this._listeners[a], k = 0;
            for (null == j && (this._listeners[a] = j = []), i = j.length; --i > -1;)h = j[i], h.c === b && h.s === c ? j.splice(i, 1) : 0 === k && e > h.pr && (k = i + 1);
            j.splice(k, 0, {c: b, s: c, up: d, pr: e}), this !== f || g || f.wake()
        }, e.removeEventListener = function (a, b) {
            var c, d = this._listeners[a];
            if (d)for (c = d.length; --c > -1;)if (d[c].c === b)return void d.splice(c, 1)
        }, e.dispatchEvent = function (a) {
            var b, c, d, e = this._listeners[a];
            if (e)for (b = e.length, c = this._eventTarget; --b > -1;)d = e[b], d.up ? d.c.call(d.s || c, {
                type: a,
                target: c
            }) : d.c.call(d.s || c)
        };
        var x = a.requestAnimationFrame, y = a.cancelAnimationFrame, z = Date.now || function () {
                return (new Date).getTime()
            }, A = z();
        for (c = ["ms", "moz", "webkit", "o"], d = c.length; --d > -1 && !x;)x = a[c[d] + "RequestAnimationFrame"], y = a[c[d] + "CancelAnimationFrame"] || a[c[d] + "CancelRequestAnimationFrame"];
        q("Ticker", function (a, b) {
            var c, d, e, h, i, j = this, k = z(), m = b !== !1 && x, n = function (a) {
                A = z(), j.time = (A - k) / 1e3;
                var b, f = j.time - i;
                (!c || f > 0 || a === !0) && (j.frame++, i += f + (f >= h ? .004 : h - f), b = !0), a !== !0 && (e = d(n)), b && j.dispatchEvent("tick")
            };
            w.call(j), j.time = j.frame = 0, j.tick = function () {
                n(!0)
            }, j.sleep = function () {
                null != e && (m && y ? y(e) : clearTimeout(e), d = l, e = null, j === f && (g = !1))
            }, j.wake = function () {
                null !== e && j.sleep(), d = 0 === c ? l : m && x ? x : function (a) {
                    return setTimeout(a, 0 | 1e3 * (i - j.time) + 1)
                }, j === f && (g = !0), n(2)
            }, j.fps = function (a) {
                return arguments.length ? (c = a, h = 1 / (c || 60), i = this.time + h, void j.wake()) : c
            }, j.useRAF = function (a) {
                return arguments.length ? (j.sleep(), m = a, void j.fps(c)) : m
            }, j.fps(a), setTimeout(function () {
                m && (!e || 5 > j.frame) && j.useRAF(!1)
            }, 1500)
        }), e = i.Ticker.prototype = new i.events.EventDispatcher, e.constructor = i.Ticker;
        var B = q("core.Animation", function (a, b) {
            if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = b.immediateRender === !0, this.data = b.data, this._reversed = b.reversed === !0, O) {
                g || f.wake();
                var c = this.vars.useFrames ? N : O;
                c.add(this, c._time), this.vars.paused && this.paused(!0)
            }
        });
        f = B.ticker = new i.Ticker, e = B.prototype, e._dirty = e._gc = e._initted = e._paused = !1, e._totalTime = e._time = 0, e._rawPrevTime = -1, e._next = e._last = e._onUpdate = e._timeline = e.timeline = null, e._paused = !1;
        var C = function () {
            g && z() - A > 2e3 && f.wake(), setTimeout(C, 2e3)
        };
        C(), e.play = function (a, b) {
            return arguments.length && this.seek(a, b), this.reversed(!1).paused(!1)
        }, e.pause = function (a, b) {
            return arguments.length && this.seek(a, b), this.paused(!0)
        }, e.resume = function (a, b) {
            return arguments.length && this.seek(a, b), this.paused(!1)
        }, e.seek = function (a, b) {
            return this.totalTime(Number(a), b !== !1)
        }, e.restart = function (a, b) {
            return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
        }, e.reverse = function (a, b) {
            return arguments.length && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
        }, e.render = function () {
        }, e.invalidate = function () {
            return this
        }, e.isActive = function () {
            var a, b = this._timeline, c = this._startTime;
            return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= c && c + this.totalDuration() / this._timeScale > a
        }, e._enabled = function (a, b) {
            return g || f.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
        }, e._kill = function () {
            return this._enabled(!1, !1)
        }, e.kill = function (a, b) {
            return this._kill(a, b), this
        }, e._uncache = function (a) {
            for (var b = a ? this : this.timeline; b;)b._dirty = !0, b = b.timeline;
            return this
        }, e._swapSelfInParams = function (a) {
            for (var b = a.length, c = a.concat(); --b > -1;)"{self}" === a[b] && (c[b] = this);
            return c
        }, e.eventCallback = function (a, b, c, d) {
            if ("on" === (a || "").substr(0, 2)) {
                var e = this.vars;
                if (1 === arguments.length)return e[a];
                null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = m(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b)
            }
            return this
        }, e.delay = function (a) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
        }, e.duration = function (a) {
            return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, e.totalDuration = function (a) {
            return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
        }, e.time = function (a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
        }, e.totalTime = function (a, b, c) {
            if (g || f.wake(), !arguments.length)return this._totalTime;
            if (this._timeline) {
                if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var d = this._totalDuration, e = this._timeline;
                    if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline)for (; e._timeline;)e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && this.render(a, b, !1)
            }
            return this
        }, e.progress = e.totalProgress = function (a, b) {
            return arguments.length ? this.totalTime(this.duration() * a, b) : this._time / this.duration()
        }, e.startTime = function (a) {
            return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
        }, e.timeScale = function (a) {
            if (!arguments.length)return this._timeScale;
            if (a = a || j, this._timeline && this._timeline.smoothChildTiming) {
                var b = this._pauseTime, c = b || 0 === b ? b : this._timeline.totalTime();
                this._startTime = c - (c - this._startTime) * this._timeScale / a
            }
            return this._timeScale = a, this._uncache(!1)
        }, e.reversed = function (a) {
            return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, e.paused = function (a) {
            if (!arguments.length)return this._paused;
            if (a != this._paused && this._timeline) {
                g || a || f.wake();
                var b = this._timeline, c = b.rawTime(), d = c - this._pauseTime;
                !a && b.smoothChildTiming && (this._startTime += d, this._uncache(!1)), this._pauseTime = a ? c : null, this._paused = a, this._active = this.isActive(), !a && 0 !== d && this._initted && this.duration() && this.render(b.smoothChildTiming ? this._totalTime : (c - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !a && this._enabled(!0, !1), this
        };
        var D = q("core.SimpleTimeline", function (a) {
            B.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        e = D.prototype = new B, e.constructor = D, e.kill()._gc = !1, e._first = e._last = null, e._sortChildren = !1, e.add = e.insert = function (a, b) {
            var c, d;
            if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), c = this._last, this._sortChildren)for (d = a._startTime; c && c._startTime > d;)c = c._prev;
            return c ? (a._next = c._next, c._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = c, this._timeline && this._uncache(!0), this
        }, e._remove = function (a, b) {
            return a.timeline === this && (b || a._enabled(!1, !0), a.timeline = null, a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), this._timeline && this._uncache(!0)), this
        }, e.render = function (a, b, c) {
            var d, e = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = a; e;)d = e._next, (e._active || a >= e._startTime && !e._paused) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d
        }, e.rawTime = function () {
            return g || f.wake(), this._totalTime
        };
        var E = q("TweenLite", function (b, c, d) {
            if (B.call(this, c, d), this.render = E.prototype.render, null == b)throw"Cannot tween a null target.";
            this.target = b = "string" != typeof b ? b : E.selector(b) || b;
            var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType), i = this.vars.overwrite;
            if (this._overwrite = i = null == i ? M[E.defaultOverwrite] : "number" == typeof i ? i >> 0 : M[i], (h || b instanceof Array || b.push && m(b)) && "number" != typeof b[0])for (this._targets = g = k.call(b, 0), this._propLookup = [], this._siblings = [], e = 0; g.length > e; e++)f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(k.call(f, 0))) : (this._siblings[e] = P(f, this, !1), 1 === i && this._siblings[e].length > 1 && Q(f, this, null, 1, this._siblings[e])) : (f = g[e--] = E.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
            else this._propLookup = {}, this._siblings = P(b, this, !1), 1 === i && this._siblings.length > 1 && Q(b, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
        }, !0), F = function (b) {
            return b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
        }, G = function (a, b) {
            var c, d = {};
            for (c in a)L[c] || c in b && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!I[c] || I[c] && I[c]._autoCSS) || (d[c] = a[c], delete a[c]);
            a.css = d
        };
        e = E.prototype = new B, e.constructor = E, e.kill()._gc = !1, e.ratio = 0, e._firstPT = e._targets = e._overwrittenProps = e._startAt = null, e._notifyPluginsOfEnabled = !1, E.version = "1.11.4", E.defaultEase = e._ease = new t(null, null, 1, 1), E.defaultOverwrite = "auto", E.ticker = f, E.autoSleep = !0, E.selector = a.$ || a.jQuery || function (b) {
                return a.$ ? (E.selector = a.$, a.$(b)) : a.document ? a.document.getElementById("#" === b.charAt(0) ? b.substr(1) : b) : b
            };
        var H = E._internals = {
            isArray: m,
            isSelector: F
        }, I = E._plugins = {}, J = E._tweenLookup = {}, K = 0, L = H.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1
        }, M = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        }, N = B._rootFramesTimeline = new D, O = B._rootTimeline = new D;
        O._startTime = f.time, N._startTime = f.frame, O._active = N._active = !0, B._updateRoot = function () {
            if (O.render((f.time - O._startTime) * O._timeScale, !1, !1), N.render((f.frame - N._startTime) * N._timeScale, !1, !1), !(f.frame % 120)) {
                var a, b, c;
                for (c in J) {
                    for (b = J[c].tweens, a = b.length; --a > -1;)b[a]._gc && b.splice(a, 1);
                    0 === b.length && delete J[c]
                }
                if (c = O._first, (!c || c._paused) && E.autoSleep && !N._first && 1 === f._listeners.tick.length) {
                    for (; c && c._paused;)c = c._next;
                    c || f.sleep()
                }
            }
        }, f.addEventListener("tick", B._updateRoot);
        var P = function (a, b, c) {
            var d, e, f = a._gsTweenID;
            if (J[f || (a._gsTweenID = f = "t" + K++)] || (J[f] = {
                    target: a,
                    tweens: []
                }), b && (d = J[f].tweens, d[e = d.length] = b, c))for (; --e > -1;)d[e] === b && d.splice(e, 1);
            return J[f].tweens
        }, Q = function (a, b, c, d, e) {
            var f, g, h, i;
            if (1 === d || d >= 4) {
                for (i = e.length, f = 0; i > f; f++)if ((h = e[f]) !== b)h._gc || h._enabled(!1, !1) && (g = !0); else if (5 === d)break;
                return g
            }
            var k, l = b._startTime + j, m = [], n = 0, o = 0 === b._duration;
            for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (k = k || R(b, 0, o), 0 === R(h, k, o) && (m[n++] = h)) : l >= h._startTime && h._startTime + h.totalDuration() / h._timeScale > l && ((o || !h._initted) && 2e-10 >= l - h._startTime || (m[n++] = h)));
            for (f = n; --f > -1;)h = m[f], 2 === d && h._kill(c, a) && (g = !0), (2 !== d || !h._firstPT && h._initted) && h._enabled(!1, !1) && (g = !0);
            return g
        }, R = function (a, b, c) {
            for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
                if (f += d._startTime, e *= d._timeScale, d._paused)return -100;
                d = d._timeline
            }
            return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * j > f - b ? j : (f += a.totalDuration() / a._timeScale / e) > b + j ? 0 : f - b - j
        };
        e._init = function () {
            var a, b, c, d, e = this.vars, f = this._overwrittenProps, g = this._duration, h = e.immediateRender, i = e.ease;
            if (e.startAt) {
                if (this._startAt && this._startAt.render(-1, !0), e.startAt.overwrite = 0, e.startAt.immediateRender = !0, this._startAt = E.to(this.target, 0, e.startAt), h)if (this._time > 0)this._startAt = null; else if (0 !== g)return
            } else if (e.runBackwards && 0 !== g)if (this._startAt)this._startAt.render(-1, !0), this._startAt = null; else {
                c = {};
                for (d in e)L[d] && "autoCSS" !== d || (c[d] = e[d]);
                if (c.overwrite = 0, c.data = "isFromStart", this._startAt = E.to(this.target, 0, c), e.immediateRender) {
                    if (0 === this._time)return
                } else this._startAt.render(-1, !0)
            }
            if (this._ease = i ? i instanceof t ? e.easeParams instanceof Array ? i.config.apply(i, e.easeParams) : i : "function" == typeof i ? new t(i, e.easeParams) : u[i] || E.defaultEase : E.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)for (a = this._targets.length; --a > -1;)this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], f ? f[a] : null) && (b = !0); else b = this._initProps(this.target, this._propLookup, this._siblings, f);
            if (b && E._onPluginEvent("_onInitAllProps", this), f && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), e.runBackwards)for (c = this._firstPT; c;)c.s += c.c, c.c = -c.c, c = c._next;
            this._onUpdate = e.onUpdate, this._initted = !0
        }, e._initProps = function (b, c, d, e) {
            var f, g, h, i, j, k;
            if (null == b)return !1;
            this.vars.css || b.style && b !== a && b.nodeType && I.css && this.vars.autoCSS !== !1 && G(this.vars, b);
            for (f in this.vars) {
                if (k = this.vars[f], L[f])k && (k instanceof Array || k.push && m(k)) && -1 !== k.join("").indexOf("{self}") && (this.vars[f] = k = this._swapSelfInParams(k, this)); else if (I[f] && (i = new I[f])._onInitTween(b, this.vars[f], this)) {
                    for (this._firstPT = j = {
                        _next: this._firstPT,
                        t: i,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: !0,
                        n: f,
                        pg: !0,
                        pr: i._priority
                    }, g = i._overwriteProps.length; --g > -1;)c[i._overwriteProps[g]] = this._firstPT;
                    (i._priority || i._onInitAllProps) && (h = !0), (i._onDisable || i._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = c[f] = j = {
                    _next: this._firstPT,
                    t: b,
                    p: f,
                    f: "function" == typeof b[f],
                    n: f,
                    pg: !1,
                    pr: 0
                }, j.s = j.f ? b[f.indexOf("set") || "function" != typeof b["get" + f.substr(3)] ? f : "get" + f.substr(3)]() : parseFloat(b[f]), j.c = "string" == typeof k && "=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * Number(k.substr(2)) : Number(k) - j.s || 0;
                j && j._next && (j._next._prev = j)
            }
            return e && this._kill(e, b) ? this._initProps(b, c, d, e) : this._overwrite > 1 && this._firstPT && d.length > 1 && Q(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e)) : h
        }, e.render = function (a, b, c) {
            var d, e, f, g, h = this._time, i = this._duration;
            if (a >= i)this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete"), 0 === i && (g = this._rawPrevTime, (0 === a || 0 > g || g === j) && g !== a && (c = !0, g > j && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || 0 === g ? a : j); else if (1e-7 > a)this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && this._rawPrevTime > j) && (e = "onReverseComplete", d = this._reversed), 0 > a ? (this._active = !1, 0 === i && (this._rawPrevTime >= 0 && (c = !0), this._rawPrevTime = g = !b || a || 0 === this._rawPrevTime ? a : j)) : this._initted || (c = !0); else if (this._totalTime = this._time = a, this._easeType) {
                var k = a / i, l = this._easeType, m = this._easePower;
                (1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === m ? k *= k : 2 === m ? k *= k * k : 3 === m ? k *= k * k * k : 4 === m && (k *= k * k * k * k), this.ratio = 1 === l ? 1 - k : 2 === l ? k : .5 > a / i ? k / 2 : 1 - k / 2
            } else this.ratio = this._ease.getRatio(a / i);
            if (this._time !== h || c) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc)return;
                    this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || s))), f = this._firstPT; f;)f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
                this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, b, c), b || (this._time !== h || d) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)), e && (this._gc || (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this.vars[e].apply(this.vars[e + "Scope"] || this, this.vars[e + "Params"] || s), 0 === i && this._rawPrevTime === j && g !== j && (this._rawPrevTime = 0)))
            }
        }, e._kill = function (a, b) {
            if ("all" === a && (a = null), null == a && (null == b || b === this.target))return this._enabled(!1, !1);
            b = "string" != typeof b ? b || this._targets || this.target : E.selector(b) || b;
            var c, d, e, f, g, h, i, j;
            if ((m(b) || F(b)) && "number" != typeof b[0])for (c = b.length; --c > -1;)this._kill(a, b[c]) && (h = !0); else {
                if (this._targets) {
                    for (c = this._targets.length; --c > -1;)if (b === this._targets[c]) {
                        g = this._propLookup[c] || {}, this._overwrittenProps = this._overwrittenProps || [], d = this._overwrittenProps[c] = a ? this._overwrittenProps[c] || {} : "all";
                        break
                    }
                } else {
                    if (b !== this.target)return !1;
                    g = this._propLookup, d = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                }
                if (g) {
                    i = a || g, j = a !== d && "all" !== d && a !== g && ("object" != typeof a || !a._tempKill);
                    for (e in i)(f = g[e]) && (f.pg && f.t._kill(i) && (h = !0), f.pg && 0 !== f.t._overwriteProps.length || (f._prev ? f._prev._next = f._next : f === this._firstPT && (this._firstPT = f._next), f._next && (f._next._prev = f._prev), f._next = f._prev = null), delete g[e]), j && (d[e] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return h
        }, e.invalidate = function () {
            return this._notifyPluginsOfEnabled && E._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
        }, e._enabled = function (a, b) {
            if (g || f.wake(), a && this._gc) {
                var c, d = this._targets;
                if (d)for (c = d.length; --c > -1;)this._siblings[c] = P(d[c], this, !0); else this._siblings = P(this.target, this, !0)
            }
            return B.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? E._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
        }, E.to = function (a, b, c) {
            return new E(a, b, c)
        }, E.from = function (a, b, c) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new E(a, b, c)
        }, E.fromTo = function (a, b, c, d) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new E(a, b, d)
        }, E.delayedCall = function (a, b, c, d, e) {
            return new E(b, 0, {
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                onCompleteScope: d,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                onReverseCompleteScope: d,
                immediateRender: !1,
                useFrames: e,
                overwrite: 0
            })
        }, E.set = function (a, b) {
            return new E(a, 0, b)
        }, E.getTweensOf = function (a, b) {
            if (null == a)return [];
            a = "string" != typeof a ? a : E.selector(a) || a;
            var c, d, e, f;
            if ((m(a) || F(a)) && "number" != typeof a[0]) {
                for (c = a.length, d = []; --c > -1;)d = d.concat(E.getTweensOf(a[c], b));
                for (c = d.length; --c > -1;)for (f = d[c], e = c; --e > -1;)f === d[e] && d.splice(c, 1)
            } else for (d = P(a).concat(), c = d.length; --c > -1;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
            return d
        }, E.killTweensOf = E.killDelayedCallsTo = function (a, b, c) {
            "object" == typeof b && (c = b, b = !1);
            for (var d = E.getTweensOf(a, b), e = d.length; --e > -1;)d[e]._kill(c, a)
        };
        var S = q("plugins.TweenPlugin", function (a, b) {
            this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = S.prototype
        }, !0);
        if (e = S.prototype, S.version = "1.10.1", S.API = 2, e._firstPT = null, e._addTween = function (a, b, c, d, e, f) {
                var g, h;
                return null != d && (g = "number" == typeof d || "=" !== d.charAt(1) ? Number(d) - c : parseInt(d.charAt(0) + "1", 10) * Number(d.substr(2))) ? (this._firstPT = h = {
                    _next: this._firstPT,
                    t: a,
                    p: b,
                    s: c,
                    c: g,
                    f: "function" == typeof a[b],
                    n: e || b,
                    r: f
                }, h._next && (h._next._prev = h), h) : void 0
            }, e.setRatio = function (a) {
                for (var b, c = this._firstPT, d = 1e-6; c;)b = c.c * a + c.s, c.r ? b = 0 | b + (b > 0 ? .5 : -.5) : d > b && b > -d && (b = 0), c.f ? c.t[c.p](b) : c.t[c.p] = b, c = c._next
            }, e._kill = function (a) {
                var b, c = this._overwriteProps, d = this._firstPT;
                if (null != a[this._propName])this._overwriteProps = []; else for (b = c.length; --b > -1;)null != a[c[b]] && c.splice(b, 1);
                for (; d;)null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
                return !1
            }, e._roundProps = function (a, b) {
                for (var c = this._firstPT; c;)(a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && (c.r = b), c = c._next
            }, E._onPluginEvent = function (a, b) {
                var c, d, e, f, g, h = b._firstPT;
                if ("_onInitAllProps" === a) {
                    for (; h;) {
                        for (g = h._next, d = e; d && d.pr > h.pr;)d = d._next;
                        (h._prev = d ? d._prev : f) ? h._prev._next = h : e = h, (h._next = d) ? d._prev = h : f = h, h = g
                    }
                    h = b._firstPT = e
                }
                for (; h;)h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
                return c
            }, S.activate = function (a) {
                for (var b = a.length; --b > -1;)a[b].API === S.API && (I[(new a[b])._propName] = a[b]);
                return !0
            }, p.plugin = function (a) {
                if (!(a && a.propName && a.init && a.API))throw"illegal plugin definition.";
                var b, c = a.propName, d = a.priority || 0, e = a.overwriteProps, f = {
                    init: "_onInitTween",
                    set: "setRatio",
                    kill: "_kill",
                    round: "_roundProps",
                    initAll: "_onInitAllProps"
                }, g = q("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function () {
                    S.call(this, c, d), this._overwriteProps = e || []
                }, a.global === !0), h = g.prototype = new S(c);
                h.constructor = g, g.API = a.API;
                for (b in f)"function" == typeof a[b] && (h[f[b]] = a[b]);
                return g.version = a.version, S.activate([g]), g
            }, c = a._gsQueue) {
            for (d = 0; c.length > d; d++)c[d]();
            for (e in n)n[e].func || a.console.log("GSAP encountered missing dependency: com.greensock." + e)
        }
        g = !1
    }
}(window),define("TweenLite", function () {
});
var __hasProp = {}.hasOwnProperty, __extends = function (a, b) {
    function c() {
        this.constructor = a
    }

    for (var d in b)__hasProp.call(b, d) && (a[d] = b[d]);
    return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
}, __bind = function (a, b) {
    return function () {
        return a.apply(b, arguments)
    }
};
define("engine/gestureController", ["underscore", "lib/emitter"], function (a, b) {
    var c, d, e, f, g, h, i, j, k, l, m;
    return f = "__gest", m = 33, j = 0, k = 1, i = 2, d = 1, c = 2, g = function () {
        function b(a) {
            this.ctrl = a, this.mode = j, this.active = !1, this.pts = a._pointers, this.enqueueChange = this.commitChange
        }

        return b.prototype.activate = function (a) {
            return this.active !== a ? (this.reset(), this.active = a) : void 0
        }, b.prototype.reset = function () {
        }, b.prototype.throttle = function (b) {
            return this.enqueueChange = 0 === b ? this.commitChange : a.throttle(this.commitChange, b)
        }, b.prototype.serialize = function () {
        }, b.prototype.deserialize = function () {
        }, b.prototype.commitChange = function (a) {
            return this.active ? this.ctrl.sendData(a) : void 0
        }, b
    }(), l = function (a) {
        function b(a) {
            b.__super__.constructor.call(this, a), this.mode = k, this.currentId = 0, this.ix = 0, this.iy = 0, this.dx = 0, this.dy = 0
        }

        return __extends(b, a), b.prototype.reset = function () {
            return this.currentId = 0
        }, b.prototype.update = function () {
            var a, b;
            if (this.active)return a = this.ctrl._ids[0], b = this.pts[a], a !== this.currentId ? (this.currentId = a, this.ix = b.x, this.iy = b.y, this.dx = 0, this.dy = 0, this.ctrl.sendData({
                action: d,
                mode: this.mode
            })) : (this.dx = b.x - this.ix, this.dy = b.y - this.iy, this.enqueueChange({
                action: c,
                mode: this.mode,
                dx: this.dx,
                dy: this.dy
            }))
        }, b
    }(g), e = function (a) {
        function b(a) {
            b.__super__.constructor.call(this, a), this.mode = i, this.id1 = 0, this.id2 = 0, this.scale = 1, this.rot = 0, this.lastrot = 0, this.dx = 0, this.dy = 0, this.ix1 = 0, this.iy1 = 0, this.ix2 = 0, this.iy2 = 0, this.imx = 0, this.imy = 0, this.idist = 0
        }

        return __extends(b, a), b.prototype.reset = function () {
            return this.id1 = 0, this.id2 = 0
        }, b.prototype.update = function () {
            var a, b, e, f, g, h, i, j, k, l, m;
            if (this.active) {
                if (g = this.ctrl._ids[0], h = this.ctrl._ids[1], i = this.pts[g], j = this.pts[h], g !== this.id1 || h !== this.id2)return this.id1 = g, this.id2 = h, this.ix1 = i.x, this.iy1 = i.y, this.ix2 = j.x, this.iy2 = j.y, this.imx = (this.ix1 + this.ix2) / 2, this.imy = (this.iy1 + this.iy2) / 2, this.dx = 0, this.dy = 0, l = this.ix1 - this.ix2, m = this.iy1 - this.iy2, this.idist = Math.sqrt(l * l + m * m), this.iangle = Math.atan2(l, m), this.rot = 0, this.ctrl.sendData({
                    action: d,
                    mode: this.mode
                });
                for (e = (i.x + j.x) / 2, f = (i.y + j.y) / 2, l = i.x - j.x, m = i.y - j.y, b = Math.sqrt(l * l + m * m), a = Math.atan2(l, m), this.dx = e - this.imx, this.dy = f - this.imy, this.scale = b / this.idist, k = a - this.iangle; k - this.rot > .5;)k -= Math.PI;
                for (; k - this.rot < -.5;)k += Math.PI;
                return this.rot = k, console.log("[gestureController.update]", this.rot), this.enqueueChange({
                    action: c,
                    mode: this.mode,
                    dx: this.dx,
                    dy: this.dy,
                    scale: this.scale,
                    rot: this.rot
                })
            }
        }, b
    }(g), h = function () {
        function a() {
            this.onInputData = __bind(this.onInputData, this), this.onPointerUp = __bind(this.onPointerUp, this), this.onPointerMove = __bind(this.onPointerMove, this), this.onPointerDown = __bind(this.onPointerDown, this), this._numPointers = 0, this._pointers = {}, this._ids = [], this.mode = j, this.panProcess = new l(this), this.cpxProcess = new e(this), this._emitting = !1, this._output = !1, this._input = !1, this.input_cnx = null, this.output_cnx = null, this._enqueues = {}, this.uiScale = 2
        }

        return a.ACTION_START = d, a.ACTION_CHANGE = c, a.MODE_PAN = k, a.MODE_GEST = i, a.prototype.throttle = function () {
            return this.panProcess.throttle(m), this.cpxProcess.throttle(m)
        }, a.prototype.emitEvents = function (a) {
            return this._emitting = a
        }, a.prototype.initialize = function () {
            var a;
            return this.el = a = window.document.body, a.setAttribute("touch-action", "none"), a.addEventListener("pointerdown", this.onPointerDown, !1), a.addEventListener("pointermove", this.onPointerMove, !1), a.addEventListener("pointerup", this.onPointerUp, !1), a.addEventListener("pointercancel", this.onPointerUp, !1)
        }, a.prototype.dispose = function () {
            return this.el.removeEventListener("pointerdown", this.onPointerDown, !1), this.el.removeEventListener("pointermove", this.onPointerMove, !1), this.el.removeEventListener("pointerup", this.onPointerUp, !1), this.el.removeEventListener("pointercancel", this.onPointerUp, !1), this.el = null
        }, a.prototype.onPointerDown = function (a) {
            return this.addPointer(a), this.updateProcess()
        }, a.prototype.onPointerMove = function (a) {
            var b;
            return b = this._pointers[a.pointerId], b && (b.x = a.clientX * this.uiScale, b.y = a.clientY * this.uiScale), this.updateProcess()
        }, a.prototype.onPointerUp = function (a) {
            return this.removePointer(a), this.updateProcess()
        }, a.prototype.addPointer = function (a) {
            var b;
            if (this._numPointers++, b = a.pointerId, null != this._pointers[b])throw new Error("[gestureController.addPointer] error already exist id");
            return this._pointers[b] = {
                x: a.clientX * this.uiScale,
                y: a.clientY * this.uiScale,
                type: a.pointerType,
                id: b
            }, this._ids.push(b), this.switchProcess()
        }, a.prototype.removePointer = function (a) {
            var b;
            if (this._numPointers--, b = a.pointerId, null == this._pointers[b])throw new Error("[gestureController.removePointer] error don t exist id");
            return delete this._pointers[b], this._ids.splice(this._ids.indexOf(b), 1), this.switchProcess()
        }, a.prototype.switchProcess = function () {
            return this.panProcess.activate(1 === this._numPointers), this.cpxProcess.activate(this._numPointers > 1)
        }, a.prototype.updateProcess = function () {
            return this.panProcess.update(), this.cpxProcess.update()
        }, a.prototype.sendData = function (a) {
            return this._emitting && this.emit(f, a), this._output ? this.output_cnx.send(a) : void 0
        }, a.prototype.connectOutput = function (a) {
            return this.output_cnx = a, this._output = !0
        }, a.prototype.disconnectOutput = function () {
            return this._output = !1, this.output_cnx = null
        }, a.prototype.connectIntput = function (a) {
            return this.input_cnx = a, this._intput = !0, this.input_cnx.on("message", this.onInputData)
        }, a.prototype.disconnectInput = function () {
            return this._intput = !1, this.input_cnx.off("message", this.onInputData), this.input_cnx = null
        }, a.prototype.onInputData = function (a) {
            return this.sendData(a)
        }, a.prototype.bind = function (a) {
            return this.on(f, a)
        }, a
    }(), b(h.prototype), h
}), define("engine/cam/OrbitControls", ["three"], function (a) {
    return OrbitControls = function (b, c) {
        function d() {
            return 2 * Math.PI / 60 / 60 * p.autoRotateSpeed
        }

        function e() {
            return Math.pow(.95, p.zoomSpeed)
        }

        function f(a) {
            if (p.enabled !== !1) {
                if (a.preventDefault(), a.button === p.mouseButtons.ORBIT) {
                    if (p.noRotate === !0)return;
                    J = I.ROTATE, r.set(a.clientX, a.clientY)
                } else if (a.button === p.mouseButtons.ZOOM) {
                    if (p.noZoom === !0)return;
                    J = I.DOLLY, z.set(a.clientX, a.clientY)
                } else if (a.button === p.mouseButtons.PAN) {
                    if (p.noPan === !0)return;
                    J = I.PAN, u.set(a.clientX, a.clientY)
                }
                document.addEventListener("mousemove", g, !1), document.addEventListener("mouseup", h, !1), p.dispatchEvent(N)
            }
        }

        function g(a) {
            if (p.enabled !== !1) {
                a.preventDefault();
                var b = p.domElement === document ? p.domElement.body : p.domElement;
                if (J === I.ROTATE) {
                    if (p.noRotate === !0)return;
                    s.set(a.clientX, a.clientY), t.subVectors(s, r), p.rotateLeft(2 * Math.PI * t.x / b.clientWidth * p.rotateSpeed), p.rotateUp(2 * Math.PI * t.y / b.clientHeight * p.rotateSpeed), r.copy(s)
                } else if (J === I.DOLLY) {
                    if (p.noZoom === !0)return;
                    A.set(a.clientX, a.clientY), B.subVectors(A, z), B.y > 0 ? p.dollyIn() : p.dollyOut(), z.copy(A)
                } else if (J === I.PAN) {
                    if (p.noPan === !0)return;
                    v.set(a.clientX, a.clientY), w.subVectors(v, u), p.pan(w.x, w.y), u.copy(v)
                }
                p.update()
            }
        }

        function h() {
            p.enabled !== !1 && (document.removeEventListener("mousemove", g, !1), document.removeEventListener("mouseup", h, !1), p.dispatchEvent(O), J = I.NONE)
        }

        function i(a) {
            if (p.enabled !== !1 && p.noZoom !== !0) {
                a.preventDefault(), a.stopPropagation();
                var b = 0;
                void 0 !== a.wheelDelta ? b = a.wheelDelta : void 0 !== a.detail && (b = -a.detail), b > 0 ? p.dollyOut() : p.dollyIn(), p.update(), p.dispatchEvent(N), p.dispatchEvent(O)
            }
        }

        function j(a) {
            if (p.enabled !== !1 && p.noKeys !== !0 && p.noPan !== !0)switch (a.keyCode) {
                case p.keys.UP:
                    p.pan(0, p.keyPanSpeed), p.update();
                    break;
                case p.keys.BOTTOM:
                    p.pan(0, -p.keyPanSpeed), p.update();
                    break;
                case p.keys.LEFT:
                    p.pan(p.keyPanSpeed, 0), p.update();
                    break;
                case p.keys.RIGHT:
                    p.pan(-p.keyPanSpeed, 0), p.update()
            }
        }

        function k(a) {
            if (p.enabled !== !1) {
                switch (a.touches.length) {
                    case 1:
                        if (p.noRotate === !0)return;
                        J = I.TOUCH_ROTATE, r.set(a.touches[0].pageX, a.touches[0].pageY);
                        break;
                    case 2:
                        if (p.noZoom === !0)return;
                        J = I.TOUCH_DOLLY;
                        var b = a.touches[0].pageX - a.touches[1].pageX, c = a.touches[0].pageY - a.touches[1].pageY, d = Math.sqrt(b * b + c * c);
                        z.set(0, d);
                        break;
                    case 3:
                        if (p.noPan === !0)return;
                        J = I.TOUCH_PAN, u.set(a.touches[0].pageX, a.touches[0].pageY);
                        break;
                    default:
                        J = I.NONE
                }
                p.dispatchEvent(N)
            }
        }

        function l(a) {
            if (p.enabled !== !1) {
                a.preventDefault(), a.stopPropagation();
                var b = p.domElement === document ? p.domElement.body : p.domElement;
                switch (a.touches.length) {
                    case 1:
                        if (p.noRotate === !0)return;
                        if (J !== I.TOUCH_ROTATE)return;
                        s.set(a.touches[0].pageX, a.touches[0].pageY), t.subVectors(s, r), p.rotateLeft(2 * Math.PI * t.x / b.clientWidth * p.rotateSpeed), p.rotateUp(2 * Math.PI * t.y / b.clientHeight * p.rotateSpeed), r.copy(s), p.update();
                        break;
                    case 2:
                        if (p.noZoom === !0)return;
                        if (J !== I.TOUCH_DOLLY)return;
                        var c = a.touches[0].pageX - a.touches[1].pageX, d = a.touches[0].pageY - a.touches[1].pageY, e = Math.sqrt(c * c + d * d);
                        A.set(0, e), B.subVectors(A, z), B.y > 0 ? p.dollyOut() : p.dollyIn(), z.copy(A), p.update();
                        break;
                    case 3:
                        if (p.noPan === !0)return;
                        if (J !== I.TOUCH_PAN)return;
                        v.set(a.touches[0].pageX, a.touches[0].pageY), w.subVectors(v, u), p.pan(w.x, w.y), u.copy(v), p.update();
                        break;
                    default:
                        J = I.NONE
                }
            }
        }

        function m() {
            p.enabled !== !1 && (p.dispatchEvent(O), J = I.NONE)
        }

        this.object = b, this.domElement = void 0 !== c ? c : document, this.enabled = !0, this.target = new a.Vector3, this.center = this.target, this.noZoom = !1, this.zoomSpeed = 1, this.minDistance = 0, this.maxDistance = 1 / 0, this.noRotate = !1, this.rotateSpeed = 1, this.noPan = !1, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.noKeys = !1, this.keys = {
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            BOTTOM: 40
        }, this.mouseButtons = {ORBIT: a.MOUSE.LEFT, ZOOM: a.MOUSE.MIDDLE, PAN: a.MOUSE.RIGHT};
        var n, o, p = this, q = 1e-6, r = new a.Vector2, s = new a.Vector2, t = new a.Vector2, u = new a.Vector2, v = new a.Vector2, w = new a.Vector2, x = new a.Vector3, y = new a.Vector3, z = new a.Vector2, A = new a.Vector2, B = new a.Vector2, C = 0, D = 0, E = 1, F = new a.Vector3, G = new a.Vector3, H = new a.Quaternion, I = {
            NONE: -1,
            ROTATE: 0,
            DOLLY: 1,
            PAN: 2,
            TOUCH_ROTATE: 3,
            TOUCH_DOLLY: 4,
            TOUCH_PAN: 5
        }, J = I.NONE;
        this.target0 = this.target.clone(), this.position0 = this.object.position.clone();
        var K = (new a.Quaternion).setFromUnitVectors(b.up, new a.Vector3(0, 1, 0)), L = K.clone().inverse(), M = {type: "change"}, N = {type: "start"}, O = {type: "end"};
        this.rotateLeft = function (a) {
            void 0 === a && (a = d()), D -= a
        }, this.rotateUp = function (a) {
            void 0 === a && (a = d()), C -= a
        }, this.panLeft = function (a) {
            var b = this.object.matrix.elements;
            x.set(b[0], b[1], b[2]), x.multiplyScalar(-a), F.add(x)
        }, this.panUp = function (a) {
            var b = this.object.matrix.elements;
            x.set(b[4], b[5], b[6]), x.multiplyScalar(a), F.add(x)
        }, this.pan = function (a, b) {
            var c = p.domElement === document ? p.domElement.body : p.domElement;
            if (void 0 !== p.object.fov) {
                var d = p.object.position, e = d.clone().sub(p.target), f = e.length();
                f *= Math.tan(p.object.fov / 2 * Math.PI / 180), p.panLeft(2 * a * f / c.clientHeight), p.panUp(2 * b * f / c.clientHeight)
            } else void 0 !== p.object.top ? (p.panLeft(a * (p.object.right - p.object.left) / c.clientWidth), p.panUp(b * (p.object.top - p.object.bottom) / c.clientHeight)) : console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.")
        }, this.dollyIn = function (a) {
            void 0 === a && (a = e()), E /= a
        }, this.dollyOut = function (a) {
            void 0 === a && (a = e()), E *= a
        }, this.update = function () {
            var a = this.object.position;
            y.copy(a).sub(this.target), y.applyQuaternion(K), n = Math.atan2(y.x, y.z), o = Math.atan2(Math.sqrt(y.x * y.x + y.z * y.z), y.y), this.autoRotate && this.rotateLeft(d()), n += D, o += C, n = Math.max(this.minAzimuthAngle, Math.min(this.maxAzimuthAngle, n)), o = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, o)), o = Math.max(q, Math.min(Math.PI - q, o));
            var b = y.length() * E;
            b = Math.max(this.minDistance, Math.min(this.maxDistance, b)), this.target.add(F), y.x = b * Math.sin(o) * Math.sin(n), y.y = b * Math.cos(o), y.z = b * Math.sin(o) * Math.cos(n), y.applyQuaternion(L), a.copy(this.target).add(y), this.object.lookAt(this.target), D = 0, C = 0, E = 1, F.set(0, 0, 0), (G.distanceToSquared(this.object.position) > q || 8 * (1 - H.dot(this.object.quaternion)) > q) && (this.dispatchEvent(M), G.copy(this.object.position), H.copy(this.object.quaternion))
        }, this.reset = function () {
            J = I.NONE, this.target.copy(this.target0), this.object.position.copy(this.position0), this.update()
        }, this.getPolarAngle = function () {
            return o
        }, this.getAzimuthalAngle = function () {
            return n
        }, this.domElement.addEventListener("contextmenu", function (a) {
            a.preventDefault()
        }, !1), this.domElement.addEventListener("mousedown", f, !1), this.domElement.addEventListener("mousewheel", i, !1), this.domElement.addEventListener("DOMMouseScroll", i, !1), this.domElement.addEventListener("touchstart", k, !1), this.domElement.addEventListener("touchend", m, !1), this.domElement.addEventListener("touchmove", l, !1), window.addEventListener("keydown", j, !1), this.update()
    }, OrbitControls.prototype = Object.create(a.EventDispatcher.prototype), OrbitControls
}), define("engine/cam/DeviceOrientationControls", ["three", "engine/consts"], function (a, b) {
    var c = b(), d = new a.Matrix4, e = new a.Matrix4, f = (new a.Euler(0, 0, 0, "XYZ"), new a.Matrix4, new a.Vector3), g = new a.Vector3, h = 25, i = function (a) {
        return (a *= 2) < 1 ? .5 * a * a : -.5 * (--a * (a - 2) - 1)
    };
    return DeviceOrientationControls = function (b, j) {
        this.orientation = j, this.center = new a.Vector3(c.focusCenter[0], c.focusCenter[1], c.focusCenter[2]);
        var k = this;
        this.initialPos = new a.Vector3, this.initialPos.copy(b.position), this.radius = (new a.Vector3).subVectors(this.initialPos, this.center).length(), this.sPoint = new a.Vector3, this.sPoint.copy(b.position);
        var l = b.matrix.elements;
        f.set(l[2], l[6], l[10]), f.multiplyScalar(h), this.sPointR = Math.sqrt(this.sPoint.x * this.sPoint.x + this.sPoint.z * this.sPoint.z), this.object = b, this.p = 0, this.freeze = !0;
        var m = function () {
            return Math.atan2(k.sPoint.x, k.sPoint.z)
        };
        this.touchX = -1, this.touchAngle = m(), this.initialAngle = this.touchAngle, this.currentAngle = this.touchAngle, this.rot = this.touchAngle;
        var n = function (a) {
            k.touchX = a.touches[0].pageX, k.touchAngle = m()
        }, o = function (a) {
            for (var b = k.touchX - a.touches[0].pageX, c = b / 320, d = k.touchAngle + c; d - k.currentAngle > 1.5;)d -= Math.PI;
            for (; d - k.currentAngle < -1.5;)d += Math.PI;
            k.currentAngle = d, a.preventDefault()
        };
        this.connect = function () {
            this.orientation.connect(), document.addEventListener("touchstart", n, !1), document.addEventListener("touchmove", o, !1), k.freeze = !1
        }, this.disconnect = function () {
            this.orientation.disconnect(), k.freeze = !0, document.removeEventListener("touchstart", n, !1), document.removeEventListener("touchmove", o, !1)
        }, this.update = function (a) {
            if (!k.freeze && this.orientation.ready()) {
                this.p += a / 3, this.p > 1 && (this.p = 1);
                var b = i(this.p);
                this.orientation.setupMatrix(d);
                var c = d.elements;
                c[6] = Math.max(Math.min(c[6], .5), -.6), f.set(c[2], c[6], c[10]), f.normalize(), this.rot += .1 * (this.currentAngle - this.rot), e.makeRotationY(this.rot - this.initialAngle), f.applyMatrix4(e), g.copy(f), f.multiplyScalar(h * b), this.sPoint.x = this.sPointR * Math.sin(this.rot), this.sPoint.z = this.sPointR * Math.cos(this.rot), f.add(this.sPoint), k.object.position.copy(f), f.add(g), k.object.lookAt(f), k.object.rotateZ(this.orientation.getTilt())
            }
        }, this.connect()
    }
}), define("engine/cam/Orientation", ["three"], function (a) {
    return function () {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r;
        return b = new a.Matrix4, c = new a.Euler(0, 0, 0, "XYZ"), g = {
            alpha: 0,
            beta: 90,
            gamma: 0
        }, p = 0, d = -1, o = -1, l = 90, q = !1, r = !0, j = function (a) {
            return null !== a.alpha && (g = a), q = !0
        }, k = function () {
            return l = window.orientation || 0
        }, e = function () {
            return r = !0, q = !1
        }, f = function () {
            return k(), window.addEventListener("orientationchange", k, !1), window.addEventListener("deviceorientation", j, !1)
        }, h = function () {
            return window.removeEventListener("orientationchange", k, !1), window.removeEventListener("deviceorientation", j, !1)
        }, n = function (d) {
            var e, f, h, i;
            return e = a.Math.degToRad(g.alpha), f = a.Math.degToRad(g.beta), h = a.Math.degToRad(g.gamma), i = a.Math.degToRad(l), r && q ? (p = m(c, e, f, h, i, !0), b.makeRotationY(-c.y), r = !1) : p = m(c, e, f, h, i, !1), d.makeRotationFromEuler(c), d.multiply(b)
        }, i = function () {
            return p
        }, m = function () {
            var b, c, e, f, g, h;
            return h = new a.Vector3(0, 0, 1), f = new a.Quaternion, g = new a.Quaternion, b = new a.Euler(0, 0, 0, "ZXY"), c = new a.Quaternion, e = new a.Quaternion(-Math.sqrt(.5), 0, 0, Math.sqrt(.5)), function (a, i, j, k, l, m) {
                return a.set(j, i, -k, "YXZ"), f.setFromEuler(a), f.multiply(e), f.multiply(c.setFromAxisAngle(h, -l)), f._y *= -1, g.slerp(f, .1), m ? g.copy(f) : g.slerp(f, .3), a.setFromQuaternion(g), b.setFromQuaternion(g), d > -1 && (o += .01 * (d - o), a.reorder("XZY"), a.x = Math.min(o, Math.max(-o, a.x))), Math.abs(k) < .01 && (b.z = 0), b.z
            }
        }(), {
            connect: f, disconnect: h, setupMatrix: n, getTilt: i, calibrate: e, setAngleLock: function (a) {
                return -1 === d && (o = a), d = a
            }, ready: function () {
                return q
            }
        }
    }
});
var __bind = function (a, b) {
    return function () {
        return a.apply(b, arguments)
    }
}, __hasProp = {}.hasOwnProperty, __extends = function (a, b) {
    function c() {
        this.constructor = a
    }

    for (var d in b)__hasProp.call(b, d) && (a[d] = b[d]);
    return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
};
define("engine/camera", ["three", "when", "TweenLite", "lib/gui", "lib/emitter", "engine/consts", "core/notifications", "./gestureController", "./cam/OrbitControls", "./cam/DeviceOrientationControls", "./cam/Orientation"], function (a, b, c, d, e, f, g, h, i, j, k) {
    var l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q;
    return I = d("camera"), B = f(), t = 65, p = 95, q = 325, v = 900, z = function (b, c, d) {
        return new a.Vector3(b, c, d)
    }, u = function () {
        return new a.Matrix4
    }, L = u(), N = z(), m = function () {
        function d(b) {
            this.engine = b, this.device_cam = __bind(this.device_cam, this), this.free_cam = __bind(this.free_cam, this), this.onControlerComplete = __bind(this.onControlerComplete, this), this.ctx = b.ctx, this._previousXform = u(), this.speed = z(), this.forwardSpeed = 0, this.destFov = 0, this.reqFov = 0, this.camera = new a.PerspectiveCamera(65, 1, 5, 7e3), this.camera.position.z = -1600, this.camera.position.y = 0, this.camera.lookAt(z()), this.camera.updateMatrix(), this.camera.speed = this.speed, this.camera.forwardSpeed = 0, this.extCamera = this.camera.clone(), this.extCamera.fov = 65, this.extCamera.far = 7e3, this.extCamera.matrixAutoUpdate = !1, this.inGlobe = !1, this.setCtrl(new r), I(this, "fieldOfView", 30, 160), I(this, "free_cam"), I(this, "citySight"), I(this, "exitCitySight"), I(this, "log_xform")
        }

        return Object.defineProperty(d.prototype, "fieldOfView", {
            get: function () {
                return this.camera.fov
            }, set: function (a) {
                return this.camera.fov = a, this.camera.updateProjectionMatrix()
            }
        }), d.prototype.intro = function () {
            var a;
            return a = new s(B.introDuration, 0), this.setCtrl(a).then(function () {
                return g.send("intro-complete")
            })
        }, d.prototype.citySight = function () {
            var b, c, d, e, f;
            for (c = B.citysight, e = new a.Matrix4, d = f = 0; 16 > f; d = ++f)e.elements[d] = c[d];
            return b = new n(e, 5), this.setCtrl(b).then(function () {
                return g.send("citysight-complete")
            })
        }, d.prototype.exitCitySight = function () {
            var a;
            return a = new s(5, 4, .1), this.setCtrl(a)
        }, d.prototype.setCtrl = function (a) {
            var c;
            if (a !== this.controls)return null != this.controls && (this.controls.dispose(), this.controls = null), c = b.defer(), a.once("complete", function (a) {
                return function (b) {
                    return c.resolve(), a.onControlerComplete(b)
                }
            }(this)), a.run(this.camera, this.engine), a.handleResize(this.engine.viewport), this.controls = a, c.promise
        }, d.prototype.onControlerComplete = function (a) {
            return null != a ? this.setCtrl(a) : void 0
        }, d.prototype.log_xform = function () {
            var a;
            return a = this.camera.position, console.log(this.camera.matrix.elements)
        }, d.prototype.free_cam = function () {
            return this.setCtrl(new x)
        }, d.prototype.device_cam = function () {
            return this.setCtrl(new o)
        }, d.prototype.mem_cam = function () {
            return this.setCtrl(new MemTestController)
        }, d.prototype.fixed_cam = function () {
            var a, b, c, d, e;
            return a = function () {
                var a, b, d, e;
                for (d = this.camera.matrix.elements, e = [], a = 0, b = d.length; b > a; a++)c = d[a], e.push(c.toFixed(3));
                return e
            }.call(this), d = "cam=" + a.join(","), b = location.href, e = new RegExp("cam=[^&]+", "g"), e.test(b) ? b = b.replace(e, d) : b += "&" + d, location.href = b
        }, d.prototype.setXform = function (a) {
            return this.camera.setMatrix(a)
        }, d.prototype.moveTo = function (a, b) {
            var c;
            return c = new w(a, b), c.setNext(new TestCtrl), this.setCtrl(c)
        }, d.prototype.outro = function (b) {
            var c;
            return L.copy(this.camera.matrix), c = new a.Euler, c.order = "YXZ", c.setFromRotationMatrix(L), c.x = Math.PI / 4, L.makeRotationFromEuler(c), L.setPosition(this.camera.position), this.moveTo(L, b)
        }, d.prototype.update = function (a) {
            var b, c, d, e, f, g, h;
            return this._previousXform.copy(this.camera.matrix), this.controls.update(a), this.camera.updateMatrixWorld(), this.camera.updateProjectionMatrix(), e = this._previousXform.elements, c = this.camera.matrix.elements, f = (c[12] - e[12]) / a, g = (c[13] - e[13]) / a, h = (c[14] - e[14]) / a, this.speed.set(f, g, h), this.camera.forwardSpeed = this.forwardSpeed = -f * c[8] + -g * c[9] + -h * c[10], b = c[12] * c[12] + c[13] * c[13] + c[14] * c[14], b = Math.sqrt(b), d = 250 > b, this.inGlobe !== d && (this.inGlobe = d, this.changeFov(d ? 1 : 0)), this.camera.near = this.extCamera.near = 3 + 40 * (1 - this.destFov), this.extCamera.fov = this.destFov * p + (1 - this.destFov) * t, this.camera.updateProjectionMatrix(), this.extCamera.updateProjectionMatrix(), this.extCamera.matrix.copy(this.camera.matrix), this.extCamera.matrixWorld.copy(this.camera.matrixWorld), this.extCamera.matrixWorld.elements[13] += 20 * this.destFov
        }, d.prototype.changeFov = function (a) {
            var b;
            if (this.reqFov !== a)return null != (b = this.fovTween) && b.kill(), this.reqFov = a, this.fovTween = c.to(this, 1.3, {
                destFov: a,
                ease: Quad.easeInOut
            })
        }, d.prototype.setViewport = function (a) {
            return this.camera.aspect = this.extCamera.aspect = a.w / a.h, this.camera.updateProjectionMatrix(), this.extCamera.updateProjectionMatrix(), this.controls.handleResize(a)
        }, d
    }(), l = function () {
        function a() {
        }

        return a.prototype.run = function () {
        }, a.prototype.dispose = function () {
        }, a.prototype.handleResize = function () {
        }, a.prototype.update = function () {
        }, a.prototype.complete = function (a) {
            return this.emit("complete", a)
        }, a
    }(), e(l.prototype), r = function (a) {
        function b() {
        }

        return __extends(b, a), b
    }(l), M = new a.Vector2, y = function (a) {
        function b() {
        }

        return __extends(b, a), b.prototype.run = function (a) {
            this.cam = a
        }, b.prototype.update = function () {
        }, b
    }(l), x = function (a) {
        function b() {
            this.tctrl = null, b.__super__.constructor.apply(this, arguments)
        }

        return __extends(b, a), b.prototype.run = function (a, c) {
            var d;
            return b.__super__.run.call(this, a, c), d = c.ctx.getWrapper(), this.tctrl = new i(a, d), this.tctrl.zoomSpeed = .3, this.tctrl.target.set(B.focusCenter[0], B.focusCenter[1], B.focusCenter[2])
        }, b.prototype.update = function (a) {
            return this.tctrl.update(), b.__super__.update.call(this, a)
        }, b
    }(y), o = function (a) {
        function b(a) {
            this.orientation = a, b.__super__.constructor.apply(this, arguments), this.tctrl = null
        }

        return __extends(b, a), b.prototype.run = function (a, c) {
            return this.cam = a, b.__super__.run.call(this, a, c), this.orientation.setAngleLock(.8), this.tctrl = new j(a, this.orientation), this.tctrl.center.y = B.focusHeights[c.ctx.options.city]
        }, b.prototype.update = function (a) {
            return this.tctrl.update(a), b.__super__.update.call(this, a)
        }, b.prototype.dispose = function () {
            return this.tctrl.disconnect()
        }, b
    }(y), C = function (a) {
        return a
    }, A = function (a, b) {
        return a = (a - b) / (1 - b), 0 > a ? 0 : (a *= 2) < 1 ? .5 * a * a : -.5 * (--a * (a - 2) - 1)
    }, s = function (b) {
        function c(b, c, d) {
            this.time = b, this.otime = null != c ? c : 0, this.angleOffset = null != d ? d : .4, this.orientation = new k, this.object = null, this.p = 0, this.angle = 0, this.endRadius = 175, this.initAlt = 0, this.mat4 = new a.Matrix4, this.rmat = new a.Matrix4, this.vec3 = new a.Vector3, this.UP = new a.Vector3(0, 1, 0), this.orientMult = 0
        }

        return __extends(c, b), c.prototype.run = function (b, c) {
            var d, e, f, g, h;
            return this.cam = b, this.engine = c, this.orientation.connect(), d = B.focusHeights[c.ctx.options.city], this.initAlt = this.cam.position.y, this.destAlt = d, this.target = new a.Vector3(0, d, 0), this.p = 0, h = b.position, f = h.x, g = h.z, this.radius = Math.sqrt(f * f + g * g), e = b.matrix.elements, this.startTarget = new a.Vector3(e[8], e[9], e[10]), this.startTarget.normalize(), this.startTarget.multiplyScalar(-this.radius), this.startTarget.add(b.position)
        }, c.prototype.update = function (a) {
            var b, c, d, e, f, g, h;
            return this.p += a / this.time, this.orientMult = 0 === this.otime ? 1 : this.p * this.time / this.otime, this.p > 1 && (this.p = 1), this.orientMult > 1 && (this.orientMult = 1), g = E(this.p), e = 1 - g, c = this.radius - this.endRadius, h = this.endRadius + c * C(e), this.orientation.setAngleLock(.4 * e + .7 * g), b = 2 * Math.PI * A(this.p, this.angleOffset), this.cam.position.set(h * Math.sin(b), this.initAlt * e + this.destAlt * g, -h * Math.cos(b)), this.orientation.setupMatrix(this.mat4), d = this.mat4.elements, d[6] = Math.max(Math.min(d[6], .5), -.6), this.vec3.set(e * this.startTarget.x + g * this.target.x, e * this.startTarget.y + g * this.target.y, e * this.startTarget.z + g * this.target.z), this.rmat.lookAt(this.vec3, this.cam.position, this.UP), this.rmat.elements[12] = 0, this.rmat.elements[13] = 0, this.rmat.elements[14] = 0, this.vec3.set(d[2] * this.orientMult, d[6] * this.orientMult, d[10] * this.orientMult + 1 - this.orientMult), this.vec3.normalize(), this.vec3.applyMatrix4(this.rmat), this.vec3.add(this.cam.position), this.cam.lookAt(this.vec3), this.cam.rotateZ(this.orientation.getTilt() * this.orientMult), 1 === this.p ? (f = new o(this.orientation), this.complete(f)) : void 0
        }, c.prototype.dispose = function () {
        }, c
    }(l), n = function (b) {
        function c(b, c) {
            this.dest = b, this.time = null != c ? c : 2, this.target = new a.Vector3, this.startTarget = new a.Vector3, this.destTarget = new a.Vector3, this.startUp = new a.Vector3, this.destUp = new a.Vector3(0, 1, 0), this.alt = 0, this.initAlt = 0, this.rad = 0, this.initRad = 0, this.angle = 0, this.initAngle = 0, this.initTilt = 0, this.p = 0
        }

        return __extends(c, b), c.prototype.run = function (a, b) {
            var c, d;
            return this.cam = a, this.engine = b, d = a.matrix.elements, this.initRad = Math.sqrt(d[12] * d[12] + d[14] * d[14]), this.initAlt = d[13], this.initAngle = Math.atan2(d[12], d[14]), c = a.position.length(), this.startTarget.set(d[8], d[9], d[10]), this.startUp.set(d[4], d[5], d[6]), this.startTarget.normalize(), this.startTarget.multiplyScalar(-c), this.startTarget.add(a.position), this.initTilt = a.rotation.z, d = this.dest.elements, this.rad = Math.sqrt(d[12] * d[12] + d[14] * d[14]), this.alt = d[13], this.angle = Math.atan2(d[12], d[14]), this.target.set(d[12], d[13], d[14]), c = this.target.length(), this.destTarget.set(d[8], d[9], d[10]), this.destTarget.normalize(), this.destTarget.multiplyScalar(-c), this.destTarget.add(this.target), this.target.copy(this.startTarget)
        }, c.prototype.update = function (a) {
            var b, c, d, e, f;
            return this.p += a / this.time, this.p >= 1 ? (this.cam.position.setFromMatrixPosition(this.dest), this.cam.quaternion.setFromRotationMatrix(this.dest), void this.complete(this.next)) : (e = E(this.p), d = 1 - e, c = d * this.initAngle + e * this.angle, b = d * this.initAlt + e * this.alt, f = d * this.initRad + e * this.rad, this.target.set(d * this.startTarget.x + e * this.destTarget.x, d * this.startTarget.y + e * this.destTarget.y, d * this.startTarget.z + e * this.destTarget.z), this.cam.up.set(d * this.startUp.x, d * this.startUp.y + e, d * this.startUp.z), this.cam.position.set(f * Math.sin(c), b, f * Math.cos(c)), this.cam.lookAt(this.target))
        }, c
    }(l), E = function (a) {
        return (a *= 2) < 1 ? .5 * a * a : -.5 * (--a * (a - 2) - 1)
    }, D = E, w = function (b) {
        function c(b, c) {
            this.time = c, this.next = null, this.sc = z(1, 1, 1), this.sPos = z(), this.sRot = new a.Quaternion, this.ePos = z(), this.eRot = new a.Quaternion, this.wPos = z(), this.wRot = new a.Quaternion, this.cam = null, this.p = 0, this.dest = u(), null != b && this.setDest(b)
        }

        return __extends(c, b), c.prototype.setDest = function (a) {
            return this.dest.copy(a), L.extractRotation(this.dest), this.eRot.setFromRotationMatrix(L), this.ePos.setFromMatrixPosition(this.dest)
        }, c.prototype.setNext = function (a) {
            return this.next = a
        }, c.prototype.update = function (a) {
            return this.p += a / this.time, this.p >= 1 ? (this.sRot.setFromRotationMatrix(this.dest), this.sPos.setFromMatrixPosition(this.dest), this.cam.position.copy(this.wPos), this.cam.quaternion.copy(this.wRot), void this.complete(this.next)) : (this.wPos.copy(this.sPos), this.wRot.copy(this.sRot), this.wPos.lerp(this.ePos, D(this.p)), this.wRot.slerp(this.eRot, E(this.p)), L.compose(this.wPos, this.wRot, this.sc), this.cam.position.copy(this.wPos), this.cam.quaternion.copy(this.wRot))
        }, c.prototype.run = function (a) {
            var b;
            return this.cam = a, b = a.matrix, L.extractRotation(b), this.sRot.setFromRotationMatrix(L), this.sPos.setFromMatrixPosition(b)
        }, c
    }(l), J = function () {
        return {x: 0, y: 0}
    }, K = function (a, b) {
        return b.x = a.pageX, b.y = a.pageY
    }, Q = z(), O = u(), G = function () {
        return {projectionMatrix: u(), matrixWorld: u(), position: z()}
    }, F = function (a, b) {
        return b.projectionMatrix.copy(a.projectionMatrix), b.matrixWorld.copy(a.matrixWorld), b.position.copy(a.position)
    }, P = function (a, b) {
        return O.getInverse(b.projectionMatrix), L.multiplyMatrices(b.matrixWorld, O), a.applyProjection(L)
    }, H = function (a, b, c) {
        var d, e;
        return d = b.position, Q.set(a.x, -a.y, .5), P(Q, b), Q.sub(d), Q.divideScalar(Q.length()), e = (d.y - c.y) / -Q.y, isNaN(e) ? void 0 : (c.x = d.x + e * Q.x, c.z = d.z + e * Q.z)
    }, m
}), define("lib/shake", [], function () {
    !function (a, b) {
        function c() {
            if (this.hasDeviceMotion = "ondevicemotion" in a, this.threshold = 6, this.lastTime = new Date, this.lastX = null, this.lastY = null, this.lastZ = null, "function" == typeof b.CustomEvent)this.event = new b.CustomEvent("shake", {
                bubbles: !0,
                cancelable: !0
            }); else {
                if ("function" != typeof b.createEvent)return !1;
                this.event = b.createEvent("Event"), this.event.initEvent("shake", !0, !0)
            }
        }

        c.prototype.reset = function () {
            this.lastTime = new Date, this.lastX = null, this.lastY = null, this.lastZ = null
        }, c.prototype.start = function () {
            this.reset(), this.hasDeviceMotion && a.addEventListener("devicemotion", this, !1)
        }, c.prototype.stop = function () {
            this.hasDeviceMotion && a.removeEventListener("devicemotion", this, !1), this.reset()
        }, c.prototype.devicemotion = function (b) {
            var c, d, e = b.accelerationIncludingGravity, f = 0, g = 0, h = 0;
            return null === this.lastX && null === this.lastY && null === this.lastZ ? (this.lastX = e.x, this.lastY = e.y, void(this.lastZ = e.z)) : (f = Math.abs(this.lastX - e.x), g = Math.abs(this.lastY - e.y), h = Math.abs(this.lastZ - e.z), (f > this.threshold && g > this.threshold || f > this.threshold && h > this.threshold || g > this.threshold && h > this.threshold) && (c = new Date, d = c.getTime() - this.lastTime.getTime(), d > 1e3 && (a.dispatchEvent(this.event), this.lastTime = new Date)), this.lastX = e.x, this.lastY = e.y, void(this.lastZ = e.z))
        }, c.prototype.handleEvent = function (a) {
            return "function" == typeof this[a.type] ? this[a.type](a) : void 0
        };
        var d = new c;
        d && d.start()
    }(window, document)
}), define("engine/particles/processor/sphereContraint", [], function () {
    function a(a, b, c) {
        var d = Math.random(), e = Math.random(), f = Math.random();
        f = Math.pow(f, .33) * a;
        var g = 2 * Math.PI * d, h = Math.acos(2 * e - 1), i = f * Math.sin(h);
        b[c + 0] = i * Math.cos(g), b[c + 1] = i * Math.sin(g) * .35, b[c + 2] = f * Math.cos(h)
    }

    function b(a, b, c) {
        var d = 6.3 * Math.random(), e = Math.random();
        e = Math.pow(e, .5) * a * .5, b[c + 0] = e * Math.sin(d), b[c + 1] = GROUND + 10, b[c + 2] = e * Math.cos(d)
    }

    function c(a) {
        this.radius = a
    }

    return GROUND = -150, c.prototype = {
        spread: function () {
            var c, d = this.pEngine, e = d.vPos, f = d.vAlp, g = d.numParticles, h = Math.round(g / 2);
            for (c = 0; h > c; c++)a(this.radius, e, 3 * c), f[c] = 1;
            for (; g > c; c++)b(this.radius, e, 3 * c), f[c] = 1
        }, added: function (a) {
            this.pEngine = a, this.spread()
        }, removed: function () {
        }, update: function () {
            var a, b, c, d, e, f, g, h = this.pEngine, i = h.vPos, j = h.vAlp, k = h.vVel, l = h.vFce, m = h.numParticles, n = this.radius, o = n - .1, p = n * n;
            for (f = 0; m > f; f++)g = 3 * f, a = i[g], b = i[g + 1], c = i[g + 2], GROUND > b ? (l[g] = 0, l[g + 1] = 0, l[g + 2] = 0, k[g] = 0, k[g + 1] = 0, k[g + 2] = 0) : p < (d = a * a + b * b + c * c) ? (d = Math.sqrt(d), a /= d, b /= d, c /= d, e = -1.5 * (a * k[g] + b * k[g + 1] + c * k[g + 2]), k[g] += e * a, k[g + 1] += e * b, k[g + 2] += e * c, i[g] = a * o, i[g + 1] = b * o, i[g + 2] = c * o) : j[f] += .05 * (1 - j[f])
        }
    }, c
}), define("engine/particles/processor/newton", ["lib/gui"], function (a) {
    function b() {
        this.damping = d, this.pEngine = null, c.newton(this, "damping", .95, 1)
    }

    var c = {newton: a("newton")}, d = .95;
    return b.prototype = {
        update: function (a) {
            a = +a;
            for (var b, c, d, e = a / .016, f = this.pEngine, g = f.vPos, h = f.vVel, i = f.vFce, j = 3 * f.numParticles, k = 0, l = this.damping, m = Math.pow(l, e); j > k; k += 3)b = h[k] + i[k] * a * 2, c = h[k + 1] + i[k + 1] * a * 2, d = h[k + 2] + i[k + 2] * a * 2, b *= m, c *= m, d *= m, h[k] = b, h[k + 1] = c, h[k + 2] = d, g[k] += b * a, g[k + 1] += c * a, g[k + 2] += d * a
        }, added: function (a) {
            this.pEngine = a
        }, removed: function () {
        }
    }, b
}), define("engine/particles/processor/chaos", ["lib/gui"], function (a) {
    function b() {
        this.pEngine = null, this.amp = 10, this.limit = 20, c.newton(this, "amp", 0, 10), c.newton(this, "limit", 0, 20)
    }

    var c = {newton: a("chaos")};
    return b.prototype = {
        update: function (a) {
            a = +a;
            for (var b, c, d, e, f = this.limit, g = this.amp, h = this.pEngine, i = h.vFce, j = h.numParticles, k = this.forces, l = 0; j > l; l++)e = 3 * l, b = k[e], c = k[e + 1], d = k[e + 2], b += (Math.random() - .5) * g, c += (Math.random() - .5) * g, d += (Math.random() - .5) * g, b > f && (b = f), -f > b && (b = -f), c > f && (c = f), -f > c && (c = -f), d > f && (d = f), -f > d && (d = -f), k[e] = b, k[e + 1] = c, k[e + 2] = d, i[e] += b, i[e + 1] += c, i[e + 2] += d
        }, added: function (a) {
            this.pEngine = a;
            var b = a.numParticles;
            this.forces = new Float64Array(3 * b)
        }, removed: function () {
        }
    }, b
}), define("engine/particles/processor/gravity", ["lib/gui"], function (a) {
    function b() {
        this.pEngine = null, this.vector = {x: 0, y: -13, z: 0}, c.newton(this.vector, "y", -30, 30)
    }

    var c = {newton: a("gravity")};
    return b.prototype = {
        update: function (a) {
            a = +a;
            for (var b = this.pEngine, c = b.vFce, d = 3 * b.numParticles, e = this.vector.x, f = this.vector.y, g = this.vector.z, h = 0; d > h; h += 3)c[h] += e, c[h + 1] += f, c[h + 2] += g
        }, added: function (a) {
            this.pEngine = a
        }, removed: function () {
        }
    }, b
}), define("engine/particles/processor/swirl", ["three", "lib/gui"], function (a, b) {
    function c() {
        this.pEngine = null, this.axis = new a.Vector3(1, .2, 0), this.axis.normalize(), this.amp = 0, this.grab = 1.66, this.orbits = null, this.aa = 0, this.alt = 160, e(this, "amp", 0, 500), e(this, "grab", 0, 10), e(this, "impulse")
    }

    var d = 2, e = b("swirl");
    return c.prototype = {
        impulse: function () {
            this.amp > 250 || (this.amp = 500)
        }, update: function (a) {
            a = +a;
            var b = this.amp, c = this.grab;
            if (this.axis.set(Math.cos(this.aa), .2, Math.sin(this.aa)), !(1 > b)) {
                this.aa += .5 * a, this.amp -= 50 * a;
                for (var e, f, g, h, i, j, k, l, m, n = this.pEngine, o = n.vFce, p = n.vPos, q = n.numParticles, r = this.orbits, s = this.axis.x, t = this.axis.y, u = this.axis.z, v = this.alt, w = 0; q > w; w++)i = 3 * w, j = w * d, e = p[i], f = p[i + 1], g = p[i + 2], h = Math.sqrt(e * e + f * f + g * g), h = Math.max(.001, h), e /= h, f /= h, g /= h, s = Math.cos(this.aa + 2 * r[j + 1]), u = Math.sin(this.aa + 2 * r[j + 1]), k = f * u - g * t, l = g * s - e * u, m = e * t - f * s, k *= b, l *= b, m *= b, h = (h - r[j]) * c, k -= e * h, l -= f * h, m -= g * h, f = p[i + 1], l += -120 > f ? v - f : .3 * (v - f), o[i] += k * r[j + 1], o[i + 1] += l * r[j + 1], o[i + 2] += m * r[j + 1]
            }
        }, added: function (a) {
            this.pEngine = a;
            var b = this.pEngine.numParticles, c = a.radius, e = 1 / b, f = new Float64Array(b * d);
            this.orbits = f;
            var g, h;
            for (g = 0; b > g; g++)h = g * d, f[h] = Math.pow(e * g, .33) * c, f[h + 1] = 1.5 * Math.random() + .3
        }, removed: function () {
            this.orbits = null
        }
    }, c
}), define("engine/particles/pEngine", ["lib/gui", "lib/shake", "./processor/sphereContraint", "./processor/newton", "./processor/chaos", "./processor/gravity", "./processor/swirl"], function (a, b, c, d, e, f, g) {
    function h() {
        this.vPos = null, this.vVel = null, this.vFce = null, this.numParticles = 0;
        var a = this;
        this.onShake = function () {
            a.swirl.impulse()
        }, window.addEventListener("shake", this.onShake, !1)
    }

    var i = 235;
    return h.prototype = {
        allocate: function (a) {
            this.radius = i, this.numParticles = a, this.vPos = new Float64Array(3 * a), this.vVel = new Float64Array(3 * a), this.vFce = new Float64Array(3 * a), this.vAlp = new Float64Array(a), this._processors = [], this.chaos = new e, this.addProcessor(this.chaos), this.gravity = new f, this.addProcessor(this.gravity), this.sphereConstraint = new c(i), this.addProcessor(this.sphereConstraint), this.swirl = new g, this.addProcessor(this.swirl), this.newton = new d, this.addProcessor(this.newton)
        }, addProcessor: function (a) {
            -1 === this._processors.indexOf(a) && (this._processors.push(a), a.added(this))
        }, removeProcessor: function (a) {
            var b = this._processors.indexOf(a);
            b > -1 && (this._processors.splice(b, 1), a.removed())
        }, update: function (a) {
            var b, c, d = this.vFce;
            for (c = 3 * this.numParticles, b = 0; c > b; b += 3)d[b] = 0, d[b + 1] = 0, d[b + 2] = 0;
            for (b = 0, c = this._processors.length; c > b; b++) {
                var e = this._processors[b];
                e.update(a)
            }
        }
    }, h
}), define("text", ["module"], function (a) {
    "use strict";
    var b, c, d, e, f, g = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"], h = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, i = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im, j = "undefined" != typeof location && location.href, k = j && location.protocol && location.protocol.replace(/\:/, ""), l = j && location.hostname, m = j && (location.port || void 0), n = {}, o = a.config && a.config() || {};
    return b = {
        version: "2.0.12", strip: function (a) {
            if (a) {
                a = a.replace(h, "");
                var b = a.match(i);
                b && (a = b[1])
            } else a = "";
            return a
        }, jsEscape: function (a) {
            return a.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
        }, createXhr: o.createXhr || function () {
            var a, b, c;
            if ("undefined" != typeof XMLHttpRequest)return new XMLHttpRequest;
            if ("undefined" != typeof ActiveXObject)for (b = 0; 3 > b; b += 1) {
                c = g[b];
                try {
                    a = new ActiveXObject(c)
                } catch (d) {
                }
                if (a) {
                    g = [c];
                    break
                }
            }
            return a
        }, parseName: function (a) {
            var b, c, d, e = !1, f = a.indexOf("."), g = 0 === a.indexOf("./") || 0 === a.indexOf("../");
            return -1 !== f && (!g || f > 1) ? (b = a.substring(0, f), c = a.substring(f + 1, a.length)) : b = a, d = c || b, f = d.indexOf("!"), -1 !== f && (e = "strip" === d.substring(f + 1), d = d.substring(0, f), c ? c = d : b = d), {
                moduleName: b,
                ext: c,
                strip: e
            }
        }, xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/, useXhr: function (a, c, d, e) {
            var f, g, h, i = b.xdRegExp.exec(a);
            return i ? (f = i[2], g = i[3], g = g.split(":"), h = g[1], g = g[0], !(f && f !== c || g && g.toLowerCase() !== d.toLowerCase() || (h || g) && h !== e)) : !0
        }, finishLoad: function (a, c, d, e) {
            d = c ? b.strip(d) : d, o.isBuild && (n[a] = d), e(d)
        }, load: function (a, c, d, e) {
            if (e && e.isBuild && !e.inlineText)return void d();
            o.isBuild = e && e.isBuild;
            var f = b.parseName(a), g = f.moduleName + (f.ext ? "." + f.ext : ""), h = c.toUrl(g), i = o.useXhr || b.useXhr;
            return 0 === h.indexOf("empty:") ? void d() : void(!j || i(h, k, l, m) ? b.get(h, function (c) {
                b.finishLoad(a, f.strip, c, d)
            }, function (a) {
                d.error && d.error(a)
            }) : c([g], function (a) {
                b.finishLoad(f.moduleName + "." + f.ext, f.strip, a, d)
            }))
        }, write: function (a, c, d) {
            if (n.hasOwnProperty(c)) {
                var e = b.jsEscape(n[c]);
                d.asModule(a + "!" + c, "define(function () { return '" + e + "';});\n")
            }
        }, writeFile: function (a, c, d, e, f) {
            var g = b.parseName(c), h = g.ext ? "." + g.ext : "", i = g.moduleName + h, j = d.toUrl(g.moduleName + h) + ".js";
            b.load(i, d, function () {
                var c = function (a) {
                    return e(j, a)
                };
                c.asModule = function (a, b) {
                    return e.asModule(a, j, b)
                }, b.write(a, i, c, f)
            }, f)
        }
    }, "node" === o.env || !o.env && "undefined" != typeof process && process.versions && process.versions.node && !process.versions["node-webkit"] ? (c = require.nodeRequire("fs"), b.get = function (a, b, d) {
        try {
            var e = c.readFileSync(a, "utf8");
            0 === e.indexOf("﻿") && (e = e.substring(1)), b(e)
        } catch (f) {
            d && d(f)
        }
    }) : "xhr" === o.env || !o.env && b.createXhr() ? b.get = function (a, c, d, e) {
        var f, g = b.createXhr();
        if (g.open("GET", a, !0), e)for (f in e)e.hasOwnProperty(f) && g.setRequestHeader(f.toLowerCase(), e[f]);
        o.onXhr && o.onXhr(g, a), g.onreadystatechange = function () {
            var b, e;
            4 === g.readyState && (b = g.status || 0, b > 399 && 600 > b ? (e = new Error(a + " HTTP status: " + b), e.xhr = g, d && d(e)) : c(g.responseText), o.onXhrComplete && o.onXhrComplete(g, a))
        }, g.send(null)
    } : "rhino" === o.env || !o.env && "undefined" != typeof Packages && "undefined" != typeof java ? b.get = function (a, b) {
        var c, d, e = "utf-8", f = new java.io.File(a), g = java.lang.System.getProperty("line.separator"), h = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(f), e)), i = "";
        try {
            for (c = new java.lang.StringBuffer, d = h.readLine(), d && d.length() && 65279 === d.charAt(0) && (d = d.substring(1)), null !== d && c.append(d); null !== (d = h.readLine());)c.append(g), c.append(d);
            i = String(c.toString())
        } finally {
            h.close()
        }
        b(i)
    } : ("xpconnect" === o.env || !o.env && "undefined" != typeof Components && Components.classes && Components.interfaces) && (d = Components.classes, e = Components.interfaces, Components.utils["import"]("resource://gre/modules/FileUtils.jsm"), f = "@mozilla.org/windows-registry-key;1" in d, b.get = function (a, b) {
        var c, g, h, i = {};
        f && (a = a.replace(/\//g, "\\")), h = new FileUtils.File(a);
        try {
            c = d["@mozilla.org/network/file-input-stream;1"].createInstance(e.nsIFileInputStream), c.init(h, 1, 0, !1), g = d["@mozilla.org/intl/converter-input-stream;1"].createInstance(e.nsIConverterInputStream), g.init(c, "utf-8", c.available(), e.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER), g.readString(c.available(), i), g.close(), c.close(), b(i.value)
        } catch (j) {
            throw new Error((h && h.path || "") + ": " + j)
        }
    }), b
}), define("text!engine/particles/gl.frag", [], function () {
    return "#version 100\n#define GAMMA 1.0/2.2\nprecision mediump float;\nuniform sampler2D uSampler;\nvarying float vOpacity;\nvoid main(void) {\n  gl_FragColor = texture2D( uSampler, gl_PointCoord );\n  gl_FragColor.a *= vOpacity;\n}"
}), define("text!engine/particles/gl.vert", [], function () {
    return "#version 100\nprecision mediump float;\n\nattribute vec3 aVertexPosition;\nattribute float aAlpha;\n\nuniform float uScale;\nuniform mat4 uProjection;\n\nvarying float vOpacity;\n\nvoid main( void ) {\n    gl_Position = uProjection * vec4(aVertexPosition, 1.0);\n    gl_PointSize = uScale / gl_Position.w;\n    vOpacity = aAlpha;\n}"
});
var __bind = function (a, b) {
    return function () {
        return a.apply(b, arguments)
    }
};
define("engine/particles/renderer", ["three", "when", "lib/gui", "text!./gl.frag", "text!./gl.vert"], function (a, b, c, d, e) {
    var f, g, h, i, j, k;
    return k = function (a) {
        var c;
        return c = b.defer(), a.complete ? c.resolve() : a.onload = c.resolve, c.promise
    }, j = c("particles"), f = new a.Matrix4, g = new a.Matrix4, i = 4, h = function () {
        function c(b, c, d) {
            this.ctx = b, this.pEngine = c, this.gl = d, this.initBuffers = __bind(this.initBuffers, this), this.initTexture = __bind(this.initTexture, this), this.initShaders = __bind(this.initShaders, this), this.createPrograms = __bind(this.createPrograms, this), this.checkDispose = __bind(this.checkDispose, this), this.init = __bind(this.init, this), this.isReady = !1, this.pSize = 4.2, this.plSize = 1.8, this.position = new a.Vector3(0, 0, 0), j(this, "pSize", 1, 10), this.t = 0
        }

        return c.prototype.dispose = function () {
            return this.ctx = null, this.gl = null
        }, c.prototype.init = function () {
            return this.loadMips().then(this.initTexture).then(this.createPrograms).then(this.initShaders).then(this.initBuffers).then(function (a) {
                return function () {
                    return a.isReady = !0
                }
            }(this)).otherwise(function (a) {
                return console.log("[renderer]", a)
            })
        }, c.prototype.checkDispose = function () {
            return this.ctx || b.reject(), b(!0)
        }, c.prototype.loadMips = function () {
            var a, c;
            return a = function () {
                var a, b;
                for (b = [], c = a = 0; 8 > a; c = ++a)b.push(this.ctx.loadImage("snowflake" + c + ".png"));
                return b
            }.call(this), b.all(a)
        }, c.prototype.createPrograms = function () {
            return this.program = this.createProgram(e, d)
        }, c.prototype.createProgram = function (a, c) {
            var d, e, f;
            return d = this.gl.createShader(this.gl.FRAGMENT_SHADER), this.gl.shaderSource(d, c), this.gl.compileShader(d), this.gl.getShaderParameter(d, this.gl.COMPILE_STATUS) ? (f = this.gl.createShader(this.gl.VERTEX_SHADER), this.gl.shaderSource(f, a), this.gl.compileShader(f), this.gl.getShaderParameter(f, this.gl.COMPILE_STATUS) ? (e = this.gl.createProgram(), this.gl.attachShader(e, f), this.gl.attachShader(e, d), this.gl.linkProgram(e), this.gl.getProgramParameter(e, this.gl.LINK_STATUS) ? e : b.reject()) : b.reject()) : b.reject()
        }, c.prototype.initShaders = function () {
            return this.gl.useProgram(this.program), this.posLocation = this.gl.getAttribLocation(this.program, "aVertexPosition"), this.alpLocation = this.gl.getAttribLocation(this.program, "aAlpha"), this.sampler = this.gl.getUniformLocation(this.program, "uSampler"), this.uScale = this.gl.getUniformLocation(this.program, "uScale"), this.uProjection = this.gl.getUniformLocation(this.program, "uProjection")
        }, c.prototype.initTexture = function (a) {
            var b, c, d;
            for (b = this.gl, this.texture = this.gl.createTexture(), b.bindTexture(b.TEXTURE_2D, this.texture), b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), c = d = 0; 8 > d; c = ++d)b.texImage2D(b.TEXTURE_2D, c, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, a[c]);
            return b.activeTexture(b.TEXTURE0), this.gl.useProgram(this.program), b.uniform1i(this.sampler, 0)
        }, c.prototype.setSize = function (a, b) {
            this.w = a, this.h = b
        }, c.prototype.initBuffers = function () {
            var a;
            this.vertexBuffer = this.gl.createBuffer(), a = this.pEngine.numParticles, this.bufferData = new Float32Array(a * i)
        }, c.prototype.updateBuffers = function () {
            var a, b, c, d, e, f, g, h;
            for (a = this.bufferData, e = this.pEngine.numParticles, g = this.pEngine.vPos, f = this.pEngine.vAlp, b = h = 0; e > h; b = h += 1)d = b * i, c = 3 * b, a[d] = g[c], a[d + 1] = g[c + 1], a[d + 2] = g[c + 2], a[d + 3] = f[b];
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuffer), this.gl.bufferData(this.gl.ARRAY_BUFFER, a, this.gl.STATIC_DRAW)
        }, c.prototype.render = function (a, b) {
            var c, d, e, h, j;
            if (this.isReady)return this.updateBuffers(), d = this.gl, d.disable(d.CULL_FACE), d.enable(d.BLEND), d.blendFunc(d.ONE, d.ONE_MINUS_SRC_ALPHA), d.depthMask(!1), d.useProgram(this.program), d.activeTexture(d.TEXTURE0), d.bindTexture(d.TEXTURE_2D, this.texture), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, d.LINEAR), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, d.LINEAR_MIPMAP_LINEAR), g.copy(b.matrixWorld), e = g.elements, e[12] -= this.position.x, e[13] -= this.position.y, e[14] -= this.position.z, c = e[12] * e[12] + e[13] * e[13] + e[14] * e[14], c = Math.sqrt(c), j = (c - 200) / 300, j = Math.min(1, Math.max(0, j)), h = this.plSize + (this.pSize - this.plSize) * j, b.matrixWorldInverse.getInverse(g), f.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse), d.uniformMatrix4fv(this.uProjection, !1, f.elements), d.uniform1i(this.sampler, 0), d.uniform1f(this.uScale, h * this.h * this.ctx.devicePixelRatio()), d.bindBuffer(d.ARRAY_BUFFER, this.vertexBuffer), d.enableVertexAttribArray(this.posLocation), d.enableVertexAttribArray(this.alpLocation), d.vertexAttribPointer(this.posLocation, 3, d.FLOAT, !1, 4 * i, 0), d.vertexAttribPointer(this.alpLocation, 1, d.FLOAT, !1, 4 * i, 12), d.drawArrays(d.POINTS, 0, this.bufferData.length / i), d.bindTexture(d.TEXTURE_2D, null)
        }, c.prototype.dispose = function () {
        }, c
    }()
}), define("lib/awdLoader", ["three", "./log"], function (a, b) {
    var c = b("awd"), d = b("awd:debug"), e = !0, f = function (b) {
        a.Loader.call(this, b), this.trunk = new a.Object3D, this.materialFactory = void 0, this._data, this._ptr = 0, this._version = [], this._streaming = !1, this._optimized_for_accuracy = !1, this._compression = 0, this._bodylen = 4294967295, this._cur_block_id = 0, this._blocks = new Array, this._blocks[0] = new AWDBlock, this._blocks[0].data = null, this._accuracyMatrix = !1, this._accuracyGeo = !1, this._accuracyProps = !1
    };
    f.prototype = new a.Loader, f.prototype.constructor = f, f.prototype.load = function (a, b) {
        var d = this, e = new XMLHttpRequest;
        e.open("GET", a, !0), e.setRequestHeader("Accept", "*/*"), e.responseType = "arraybuffer", e.addEventListener("load", function () {
            c("AWDloader loaded, now parsing " + a);
            var f = Date.now();
            d.parse(e.response), f = Date.now() - f, c("AWDloader parsed in ", f), b(d.trunk)
        }), e.send(null)
    }, f.prototype.parse = function (a) {
        this._data = new DataView(a);
        var b = a.byteLength;
        for (this._ptr = 0, this._parseHeader(), 0 != this._compression && console.error("compressed AWD nor supported"), this._streaming || this._bodylen == a.byteLength - this._ptr || console.error("AWDLoader: body len does not match file length", this._bodylen, b - this._ptr); this._ptr < b;)this.parseNextBlock();
        this.logHeadInfos()
    }, f.prototype.parseNextBlock = function () {
        var a, b, e, f;
        this._cur_block_id = this.readU32(), b = this.readU8(), e = this.readU8(), flags = this.readU8(), f = this.readU32(), d("AWDloader.js in block type - len : ", e, f, this._cur_block_id);
        var g = this._ptr + f;
        if (33 === b)switch (e) {
            case 1:
                a = this.parseInterleavedData(f)
        } else switch (e) {
            case 1:
                a = this.parseMeshData(f);
                break;
            case 22:
                a = this.parseContainer(f);
                break;
            case 23:
                a = this.parseMeshInstance(f);
                break;
            case 81:
                a = this.parseMaterial(f);
                break;
            case 101:
                a = this.parseSkeleton(f);
                break;
            case 112:
                a = this.parseMeshPoseAnimation(f, !1);
                break;
            case 113:
                a = this.parseVertexAnimationSet(f);
                break;
            case 102:
                a = this.parseSkeletonPose(f);
                break;
            case 103:
                a = this.parseSkeletonAnimation(f);
                break;
            case 122:
                a = this.parseAnimatorSet(f);
                break;
            default:
                d("Ignoring block!", e, f), this._ptr += f
        }
        this._ptr != g && c("AWDloader.js in block parsed - unexpected position : ", this._ptr, "expected ", g, b, e), this._blocks[this._cur_block_id] = new AWDBlock, this._blocks[this._cur_block_id].data = a, this._blocks[this._cur_block_id].id = this._cur_block_id
    }, f.prototype.logHeadInfos = function () {
        c("HEADER:"), c("version:", this._major + "." + this._minor), c("streaming?", this._streaming), c("accurate?", this._optimized_for_accuracy), c("compression:", this._compression), c("bodylen:", this._bodylen)
    }, f.prototype._parseHeader = function () {
        var a = this._data.getUint8(this._ptr++) << 16 | this._data.getUint8(this._ptr++, e) << 8 | this._data.getUint8(this._ptr++, e);
        4282180 != a && console.error("AWDLoader bas magic"), this._version[0] = this.readU8(), this._version[1] = this.readU8();
        var b = this.readU16();
        this._streaming = 1 == (1 & b), 2 == this._version[0] && 1 == this._version[1] && (this._accuracyMatrix = 2 == (2 & b), this._accuracyGeo = 4 == (4 & b), this._accuracyProps = 8 == (8 & b)), this._geoNrType = FLOAT32, this._accuracyGeo && (this._geoNrType = FLOAT64), this._matrixNrType = FLOAT32, this._accuracyMatrix && (this._matrixNrType = FLOAT64), this._propsNrType = FLOAT32, this._accuracyProps && (this._propsNrType = FLOAT64), this._optimized_for_accuracy = 2 == (2 & b), this._compression = this.readU8(), this._bodylen = this.readU32(), c("Import AWDFile of version = " + this._version[0] + " - " + this._version[1]), c("Global Settings = Compression = " + this._compression + " | Streaming = " + this._streaming + " | Matrix-Precision = " + this._accuracyMatrix + " | Geometry-Precision = " + this._accuracyGeo + " | Properties-Precision = " + this._accuracyProps)
    }, f.prototype.parseContainer = function () {
        var b, c, d, e;
        return d = new a.Object3D, b = this.readU32(), c = this.parseMatrix4(), d.name = this.readUTF(), d.applyMatrix(c), e = this._blocks[b].data || this.trunk, void 0 == e.add && (e = this.trunk), e.add(d), this.parseProperties({
            1: this._matrixNrType,
            2: this._matrixNrType,
            3: this._matrixNrType,
            4: UINT8
        }), d.extra = this.parseUserAttributes(), d
    }, f.prototype.parseMeshInstance = function () {
        var b, e, f, g, h, i, j, k, l, m, n;
        for (g = this.readU32(), i = this.parseMatrix4(), b = this.readUTF(), d("awd mesh : " + b), h = this.readU32(), f = this._blocks[h].data, j = [], k = this.readU16(), d("mesh num mats : " + k), l = 0; k > l;) {
            var o, p;
            o = this.readU32(), p = this._blocks[o].data, j.push(p), l++
        }
        var q = f.length, r = [];
        if (q > 1)for (e = new a.Object3D, n = 0; q > n; n++) {
            var s = new a.Mesh(f[n]);
            r.push(s), e.add(s)
        } else e = new a.Mesh(f[0]), r.push(e);
        e.applyMatrix(i), e.name = b, m = this._blocks[g].data || this.trunk, void 0 == m.add && (m = this.trunk), m.add(e), c(j);
        var t = j.length, u = Math.max(q, t);
        for (n = 0; u > n; n++)r[n % q].material = new a.MeshBasicMaterial({side: a.DoubleSide, color: 8421504});
        return d("xxx ptr : " + this._ptr), this.parseProperties(null), d("bbb ptr : " + this._ptr), e.extra = this.parseUserAttributes(), d("yyy ptr : " + this._ptr), e
    }, f.prototype.parseMaterial = function () {
        var b, c, d, e, f, g, h;
        for (b = this.readUTF(), c = this.readU8(), g = this.readU8(), d = this.parseProperties({
            1: AWD_FIELD_INT32,
            2: AWD_FIELD_BADDR,
            11: AWD_FIELD_BOOL,
            12: AWD_FIELD_FLOAT32,
            13: AWD_FIELD_BOOL
        }), h = 0; g > h;) {
            var i;
            i = this.readU16(), this.parseProperties(null), this.parseUserAttributes(), h++
        }
        return f = this.parseUserAttributes(), void 0 !== this.materialFactory && (e = this.materialFactory(b)) ? e : (1 == c ? (e = new a.MeshBasicMaterial, e.color = new a.Color(d.get(1, 13421772))) : 2 == c && (e = new a.MeshBasicMaterial), e.extra = f, e.alphaThreshold = d.get(12, 0), e.repeat = d.get(13, !1), e)
    }, f.prototype.parseSkeleton = function () {
        var b, c, e, f;
        for (b = this.readUTF(), c = this.readU16(), f = [], this.parseProperties(null), e = 0, d("parse Skeleton " + c + " joints"); c > e;) {
            var g, h;
            this.readU16(), g = new a.Bone, g.parent = this.readU16() - 1, g.name = this.readUTF(), h = this.parseMatrix4(), g.skinMatrix = h, this.parseProperties(null), this.parseUserAttributes(), f.push(g), e++
        }
        return this.parseUserAttributes(), f
    }, f.prototype.parseSkeletonPose = function () {
        var b = (this.readUTF(), this.readU16());
        this.parseProperties(null), d("parse Skeleton Pose. joints : " + b);
        for (var c = [], e = 0; b > e;) {
            var f, g;
            f = this.readU8(), g = 1 === f ? this.parseMatrix4() : new a.Matrix4, c[e] = g, e++
        }
        return this.parseUserAttributes(), c
    }, f.prototype.parseSkeletonAnimation = function () {
        var a, b, c, e = (this.readUTF(), []), f = this.readU16();
        this.parseProperties(null);
        var g = 0;
        for (d("parse Skeleton Animation. frames : " + f); f > g;)b = this.readU32(), a = this.readU16(), c = this._blocks[b].data, d("pose address ", c[2].elements[12], c[2].elements[13], c[2].elements[14]), e.push({
            pose: c,
            duration: a
        }), g++;
        return 0 == e.length ? void d("Could not this SkeletonClipNode, because no Frames where set.") : (this.parseUserAttributes(), e)
    }, f.prototype.parseVertexAnimationSet = function () {
        var a, b = (this.readUTF(), this.readU16()), c = (this.parseProperties({1: UINT16}), 0), e = [];
        for (d("parseVertexAnimationSet num_frames: " + b); b > c;)a = this.readU32(), e.push(this._blocks[a].data), c++;
        return this.parseUserAttributes(), e
    }, f.prototype.parseAnimatorSet = function () {
        var a, b, c = this.readUTF(), e = this.readU16(), f = this.parseProperties({1: BADDR});
        a = this.readU32();
        for (var g = this.readU16(), h = [], i = 0; g > i; i++)h.push(this.readU32());
        this.readU16(), Boolean(this.readU8());
        this.parseUserAttributes(), this.parseUserAttributes();
        var j = [];
        for (i = 0; i < h.length; i++)j.push(this._blocks[h[i]].data);
        b = this._blocks[a].data;
        var k;
        for (1 == e ? k = {
            animationSet: b,
            skeleton: this._blocks[f.get(1, 0)].data
        } : 2 == e && d("vertex Anim???"), i = 0; i < j.length; i++)j[i].animator = k;
        return d("Parsed a Animator: Name = " + c), k
    }, f.prototype.parseInterleavedData = function () {
        var b, c, d, e, f;
        b = this.readUTF(), d = this.readU16(), f = this.parseProperties({1: this._geoNrType, 2: this._geoNrType});
        var g = [];
        for (e = 0; d > e;) {
            var h, i;
            c = new a.BufferGeometry, c.name = b, c.interleaved = !0, g.push(c);
            var j = [];
            c.buffers = j, h = this.readU32(), i = this._ptr + h;
            var f = this.parseProperties({
                1: this._geoNrType,
                2: this._geoNrType,
                10: this._geoNrType,
                11: this._geoNrType,
                12: this._geoNrType,
                13: this._geoNrType,
                14: this._geoNrType,
                15: this._geoNrType
            });
            for (c.boundingBox = new a.Box3, c.boundingBox.min.set(f.get(10, 0), f.get(11, 0), f.get(12, 0)), c.boundingBox.max.set(f.get(13, 0), f.get(14, 0), f.get(15, 0)), c.boundingSphere = c.boundingBox.getBoundingSphere(); this._ptr < i;)j.push(this.parseInterleavedBuffer());
            var k, l;
            for (k = 0, l = j.length; l > k; k++) {
                var m = j[k];
                m.isIndex && c.offsets.push({start: 0, index: 0, count: m.data.length});
                var n, o, p = m.attribs;
                for (n = 0, o = p.length; o > n; n++)c.attributes[p[n].name] = {infos: p[n], buffer: m};
                c.attributesKeys = Object.keys(c.attributes)
            }
            this.parseUserAttributes(), e++
        }
        return this.parseUserAttributes(), g
    };
    var g = function (a) {
        switch (a) {
            case 1:
                return "position";
            case 2:
                return "index";
            case 3:
                return "uv";
            case 4:
                return "normal";
            case 5:
                return "tangent";
            case 6:
                return "join_index";
            case 7:
                return "join_weight"
        }
        throw new Error("unknown stream type")
    };
    return f.prototype.parseInterleavedBuffer = function () {
        var a = this.readU8(), b = this.readU8(), c = [], d = {attribs: c};
        d.ftype = b;
        var e = 7 === b ? 4 : 2, f = 0;
        d.isIndex = !1;
        for (var h = 0, i = 0; a > i; i++) {
            var j = this.readU8(), k = this.readU8();
            2 === j && (a > 1 && console.warn("interleaved index buffer is not alone"), d.isIndex = !0), f += k, c.push({
                type: j,
                len: k,
                offset: h,
                offsetBytes: h * e,
                name: g(j)
            }), h += k
        }
        d.stride = h, d.strideBytes = h * e;
        var l = this.readU8();
        this._ptr += l;
        var m = this.readU32(), n = this._ptr + m, o = 7 === b ? Float32Array : Uint16Array, p = m / e;
        return d.numVertices = p / f, d.data = new o(this._data.buffer, this._ptr, m / e), this._ptr = n, d
    }, f.prototype.parseMeshData = function () {
        var b, e, f, g, h, i, j, k;
        b = this.readUTF(), f = this.readU16(), h = this.parseProperties({1: this._geoNrType, 2: this._geoNrType});
        var l = [];
        for (g = 0; f > g;) {
            var m, n;
            e = new a.BufferGeometry, e.name = b, l.push(e), m = this.readU32(), n = this._ptr + m, this.parseProperties({
                1: this._geoNrType,
                2: this._geoNrType
            });
            for (var o = 0; this._ptr < n;) {
                var p, q, r, s, t = 0;
                if (p = this.readU8(), q = this.readU8(), r = this.readU32(), s = r + this._ptr, d("geom stream type : " + p), 1 == p)for (e.addAttribute("position", Float32Array, r / 12, 3), i = e.attributes.position.array, t = 0; this._ptr < s;)i[t] = -this.readF32(), i[t + 1] = this.readF32(), i[t + 2] = this.readF32(), t += 3; else if (2 == p)for (e.addAttribute("index", Uint16Array, r / 2, 1), e.offsets.push({
                    start: 0,
                    index: 0,
                    count: r / 2
                }), i = e.attributes.index.array, t = 0; this._ptr < s;)i[t + 1] = this.readU16(), i[t] = this.readU16(), i[t + 2] = this.readU16(), t += 3; else if (3 == p)for (o++, o > 1 ? (console.log("multiple UVS !! "), e.addAttribute("uv2", Float32Array, r / 8, 2), i = e.attributes.uv2.array) : (e.addAttribute("uv", Float32Array, r / 8, 2), i = e.attributes.uv.array), t = 0; this._ptr < s;)i[t] = this.readF32(), i[t + 1] = 1 - this.readF32(), t += 2; else if (30 == p)for (e.addAttribute("uv2", Float32Array, r / 8, 2), i = e.attributes.uv2.array, t = 0; this._ptr < s;)i[t] = this.readF32(), i[t + 1] = 1 - this.readF32(), t += 2; else if (4 == p)for (e.addAttribute("normal", Float32Array, r / 12, 3), i = e.attributes.normal.array, t = 0; this._ptr < s;)i[t] = -this.readF32(), i[t + 1] = this.readF32(), i[t + 2] = this.readF32(), t += 3; else if (6 == p)for (k = new Float32Array(r >> 1), c("parse skin indices"), t = 0; this._ptr < s;)k[t] = this.readU16(), t++; else if (7 == p)for (j = new Float32Array(r >> 2), c("parse skin weights"), t = 0; this._ptr < s;)j[t] = this.readF32(), t++; else this._ptr = s
            }
            if (void 0 !== k) {
                i = e.attributes.position.array;
                var u = i.length / 3, v = j.length / u;
                d("jointsPerVertex " + v), 4 !== v && console.error("jointsPerVertex must be 4", v), e.addAttribute("skinIndex", Float32Array, u, 4), i = e.attributes.skinIndex.array, i.set(k), e.addAttribute("skinWeight", Float32Array, u, 4), i = e.attributes.skinWeight.array, i.set(j)
            }
            this.parseUserAttributes(), e.computeBoundingBox(), g++
        }
        return this.parseUserAttributes(), l
    }, f.prototype.parseMeshPoseAnimation = function (a, b) {
        var e, f, g, h, i, j, k, l, m, n = 1, o = 0, p = {}, q = [], r = (this.readUTF(), this.readU32()), s = this._blocks[r].data;
        if (null == s)return void c("parseMeshPoseAnimation target mesh not found at:", r);
        var t = s.geometry;
        for (t.morphTargets = [], b || (n = this.readU16()), e = this.readU16(), k = this.readU16(), d("VA num_frames : ", n), d("VA num_submeshes : ", e), d("VA numstreams : ", k), l = 0; k > l;)q.push(this.readU16()), l++;
        for (m = this.parseProperties({
            1: BOOL,
            2: BOOL
        }), p.looping = m.get(1, !0), p.stitchFinalFrame = m.get(2, !1), f = 0; n > f;) {
            for (h = this.readU16(), g = 0; e > g;)for (l = 0, i = this.readU32(), j = this._ptr + i; k > l;) {
                if (1 == q[l]) {
                    for (tmparray = new Float32Array(i / 4), t.morphTargets.push({array: tmparray}), o = 0; this._ptr < j;)tmparray[o] = this.readF32(), tmparray[o + 1] = this.readF32(), tmparray[o + 2] = this.readF32(), o += 3;
                    g++
                } else this._ptr = j;
                l++
            }
            f++
        }
        return this.parseUserAttributes(), null
    }, f.prototype.parseMatrix4 = function () {
        var b = new a.Matrix4, c = b.elements;
        return c[0] = this.readF32(), c[1] = this.readF32(), c[2] = this.readF32(), c[3] = 0, c[4] = this.readF32(), c[5] = this.readF32(), c[6] = this.readF32(), c[7] = 0, c[8] = this.readF32(), c[9] = this.readF32(), c[10] = this.readF32(), c[11] = 0, c[12] = -this.readF32(), c[13] = this.readF32(), c[14] = this.readF32(), c[15] = 1, b
    }, f.prototype.parseProperties = function (a) {
        var b = this.readU32(), c = this._ptr + b, d = new AWDProperties;
        if (a)for (; this._ptr < c;) {
            var e, f = this.readU16(), g = this.readU32();
            a.hasOwnProperty(f) ? (e = a[f], d.set(f, this.parseAttrValue(e, g))) : this._ptr += g
        }
        return this._ptr = c, d
    }, f.prototype.parseUserAttributes = function () {
        return this._ptr = this.readU32() + this._ptr, null
    }, f.prototype.parseAttrValue = function (a, b) {
        var c, d;
        switch (a) {
            case AWD_FIELD_INT8:
                c = 1, d = this.readI8;
                break;
            case AWD_FIELD_INT16:
                c = 2, d = this.readI16;
                break;
            case AWD_FIELD_INT32:
                c = 4, d = this.readI32;
                break;
            case AWD_FIELD_BOOL:
            case AWD_FIELD_UINT8:
                c = 1, d = this.readU8;
                break;
            case AWD_FIELD_UINT16:
                c = 2, d = this.readU16;
                break;
            case AWD_FIELD_UINT32:
            case AWD_FIELD_BADDR:
                c = 4, d = this.readU32;
                break;
            case AWD_FIELD_FLOAT32:
                c = 4, d = this.readF32;
                break;
            case AWD_FIELD_FLOAT64:
                c = 8, d = this.readF64;
                break;
            case AWD_FIELD_VECTOR2x1:
            case AWD_FIELD_VECTOR3x1:
            case AWD_FIELD_VECTOR4x1:
            case AWD_FIELD_MTX3x2:
            case AWD_FIELD_MTX3x3:
            case AWD_FIELD_MTX4x3:
            case AWD_FIELD_MTX4x4:
                c = 8, d = this.readF64
        }
        if (b > c) {
            var e, f, g;
            for (e = [], f = 0, g = b / c; g > f;)e.push(d.call(this)), f++;
            return e
        }
        return d.call(this)
    }, f.prototype.readU8 = function () {
        return this._data.getUint8(this._ptr++, e)
    }, f.prototype.readI8 = function () {
        return this._data.getInt8(this._ptr++, e)
    }, f.prototype.readU16 = function () {
        var a = this._data.getUint16(this._ptr, e);
        return this._ptr += 2, a
    }, f.prototype.readI16 = function () {
        var a = this._data.getInt16(this._ptr, e);
        return this._ptr += 2, a
    }, f.prototype.readU32 = function () {
        var a = this._data.getUint32(this._ptr, e);
        return this._ptr += 4, a
    }, f.prototype.readI32 = function () {
        var a = this._data.getInt32(this._ptr, e);
        return this._ptr += 4, a
    }, f.prototype.readF32 = function () {
        var a = this._data.getFloat32(this._ptr, e);
        return this._ptr += 4, a
    }, f.prototype.readF64 = function () {
        var a = this._data.getFloat64(this._ptr, e);
        return this._ptr += 8, a
    }, f.prototype.readBytes = function (a) {
        var b = new ArrayBuffer(a);
        return new Uint8Array(b).set(new Uint8Array(this._data.buffer, this._ptr, a)), this._ptr += a, b
    }, f.prototype.readUTF = function () {
        for (var a = this.readU16(), b = [], c = 0; b.length < a;) {
            var d = this._data.getUint8(this._ptr++, e);
            if (128 > d)b[c++] = String.fromCharCode(d); else if (d > 191 && 224 > d) {
                var f = this._data.getUint8(this._ptr++, e);
                b[c++] = String.fromCharCode((31 & d) << 6 | 63 & f)
            } else {
                var f = this._data.getUint8(this._ptr++, e), g = this._data.getUint8(this._ptr++, e);
                b[c++] = String.fromCharCode((15 & d) << 12 | (63 & f) << 6 | 63 & g)
            }
        }
        return 0 == b[b.length - 1].charCodeAt(0) && b.pop(), b.join("")
    }, UNCOMPRESSED = 0, DEFLATE = 1, LZMA = 2, AWD_FIELD_INT8 = 1, AWD_FIELD_INT16 = 2, AWD_FIELD_INT32 = 3, AWD_FIELD_UINT8 = 4, AWD_FIELD_UINT16 = 5, AWD_FIELD_UINT32 = 6, AWD_FIELD_FLOAT32 = 7, AWD_FIELD_FLOAT64 = 8, AWD_FIELD_BOOL = 21, AWD_FIELD_COLOR = 22, AWD_FIELD_BADDR = 23, AWD_FIELD_STRING = 31, AWD_FIELD_BYTEARRAY = 32, AWD_FIELD_VECTOR2x1 = 41, AWD_FIELD_VECTOR3x1 = 42, AWD_FIELD_VECTOR4x1 = 43, AWD_FIELD_MTX3x2 = 44, AWD_FIELD_MTX3x3 = 45, AWD_FIELD_MTX4x3 = 46, AWD_FIELD_MTX4x4 = 47, BOOL = 21, COLOR = 22, BADDR = 23, INT8 = 1, INT16 = 2, INT32 = 3, UINT8 = 4, UINT16 = 5, UINT32 = 6, FLOAT32 = 7, FLOAT64 = 8, AWDBlock = function () {
    }, AWDBlock.prototype.constructor = AWDBlock, AWDProperties = function () {
    }, AWDProperties.prototype = {
        set: function (a, b) {
            this[a] = b
        }, get: function (a, b) {
            return this.hasOwnProperty(a) ? this[a] : b
        }
    }, f
}), define("text!engine/sky/sky.vert", [], function () {
    return "varying vec3 vWorldPosition;\nvoid main() {\nvWorldPosition = position.xyz;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"
}), define("text!engine/sky/sky.frag", [], function () {
    return "uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\nvoid main() {\n  gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n}"
});
var __bind = function (a, b) {
    return function () {
        return a.apply(b, arguments)
    }
};
define("engine/sky/sky", ["three", "text!./sky.vert", "text!./sky.frag"], function (a, b, c) {
    var d, e;
    return d = function () {
        function d(d) {
            var f;
            this.context = d, this.setCubeMap = __bind(this.setCubeMap, this), this.uniforms = a.UniformsUtils.clone(e), this.skyBoxMaterial = new a.ShaderMaterial({
                fragmentShader: c,
                vertexShader: b,
                uniforms: this.uniforms,
                depthWrite: !1,
                side: a.BackSide
            }), f = new a.BoxGeometry(4e3, 4e3, 4e3), this.skybox = new a.Mesh(f, this.skyBoxMaterial)
        }

        return d.prototype.render = function (a) {
            return this.skybox.position.copy(a.camCtrl.camera.position)
        }, d.prototype.setCubeMap = function (a) {
            return this.uniforms.tCube.value = a
        }, d
    }(), e = {tCube: {type: "t", value: null}, tFlip: {type: "f", value: -1}}, d
}), define("text!engine/snowglobe/snowglobe.frag", [], function () {
    return "uniform samplerCube tCube;\nuniform float intensity;\nvarying vec3 vReflect;\nvarying float vReflectionFactor;\n\n#ifdef EMISSIVE\n  uniform float emissive;\n#endif\n\nvoid main() {\n	vec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\n		#ifdef EMISSIVE\n  	  reflectedColor.rgb += emissive;\n  	#endif\n	gl_FragColor = intensity * reflectedColor * clamp( vReflectionFactor, 0.0, 1.0 ) ;\n}"
}), define("text!engine/snowglobe/snowglobe.vert", [], function () {
    return "uniform float mRefractionRatio;\nuniform float mFresnelBias;\nuniform float mFresnelScale;\nuniform float mFresnelPower;\n\nvarying vec3 vReflect;\nvarying float vReflectionFactor;\n\nvoid main() {\n\n	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n	vec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\n	vec3 worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\n\n	#ifdef BACKFACE\n	  worldNormal = -worldNormal;\n	#endif\n\n	vec3 I = worldPosition.xyz - cameraPosition;\n\n	vReflect = reflect( I, worldNormal );\n	vReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 - abs(dot( normalize( I ), worldNormal ) ), mFresnelPower );\n\n\n	gl_Position = projectionMatrix * mvPosition;\n}"
}), define("engine/snowglobe/snowglobe", ["three", "text!./snowglobe.frag", "text!./snowglobe.vert", "lib/gui", "TweenLite"], function (a, b, c, d, e) {
    var f, g, h, i;
    return h = d("globe_in"), g = d("globe_ext"), f = function () {
        function d(d) {
            this.context = d, this.isInside = !1, this.pTweens = null, this.uniforms = a.UniformsUtils.clone(i), this.iuniforms = a.UniformsUtils.clone(i), this.glassMaterial = new a.ShaderMaterial({
                fragmentShader: b,
                vertexShader: c,
                uniforms: this.uniforms,
                transparent: !0,
                defines: {EMISSIVE: !0}
            }), this.glassMaterial.blendSrc = a.OneFactor, this.glassMaterial.blendDst = a.OneFactor, this.glassMaterial.blending = a.AdditiveBlending, this.glassMaterial.depthWrite = !1, this.glassIn = new a.ShaderMaterial({
                fragmentShader: b,
                vertexShader: c,
                uniforms: this.iuniforms,
                defines: {BACKFACE: !0, EMISSIVE: !0},
                transparent: !0
            }), this.glassIn.blendSrc = a.OneFactor, this.glassIn.blendDst = a.OneFactor, this.glassIn.blending = a.AdditiveBlending, this.glassIn.depthWrite = !1, this.glassIn.side = a.BackSide, this.iuniforms.mFresnelBias.value = .14, this.iuniforms.mFresnelPower.value = 2.1, this.iuniforms.mFresnelScale.value = 4.5, this.iuniforms.intensity.value = 1.1, this.iuniforms.emissive.value = .12, this.uniforms.emissive.value = 2, h.u(this.iuniforms, "mFresnelBias", -.5, .5), h.u(this.iuniforms, "mFresnelPower", .1, 5), h.u(this.iuniforms, "mFresnelScale", 0, 8), h.u(this.iuniforms, "intensity", 0, 8), h.u(this.iuniforms, "emissive", 0, .9), g.u(this.uniforms, "mFresnelBias", -.5, .5), g.u(this.uniforms, "mFresnelPower", .1, 5), g.u(this.uniforms, "mFresnelScale", 0, 8), g.u(this.uniforms, "intensity", 0, 8), g.u(this.uniforms, "emissive", 0, 1)
        }

        return d.prototype.insideMode = function (a) {
            var b, c, d, f, g;
            if (this.isInside !== a) {
                if (this.isInside = a, this.pTweens)for (g = this.pTweens, d = 0, f = g.length; f > d; d++)c = g[d], c.kill();
                return this.pTweens = [], b = .3, c = e.to(this.iuniforms.mFresnelBias, b, {value: a ? .21 : .14}), this.pTweens.push(c), c = e.to(this.iuniforms.emissive, b, {value: a ? .9 : .12}), this.pTweens.push(c), c = e.to(this.iuniforms.intensity, b, {value: a ? .9 : 1.1}), this.pTweens.push(c), c = e.to(this.iuniforms.mFresnelPower, b, {value: a ? 1.3 : 2.1}), this.pTweens.push(c)
            }
        }, d.prototype.setEnvMap = function (a) {
            return this.uniforms.tCube.value = a, this.iuniforms.tCube.value = a
        }, d
    }(), i = {
        mRefractionRatio: {type: "f", value: 1.02},
        mFresnelBias: {type: "f", value: .1},
        mFresnelPower: {type: "f", value: 2},
        mFresnelScale: {type: "f", value: 1},
        tCube: {type: "t", value: null},
        tFlip: {type: "f", value: -1},
        intensity: {type: "f", value: 1},
        emissive: {type: "f", value: .1}
    }, f
}), define("text!engine/env/flare.frag", [], function () {
    return "uniform float mult;\nuniform sampler2D tex;\nvarying vec2 vUvs;\n\nvoid main() {\n  gl_FragColor = mult * texture2D( tex, vUvs );\n}"
}), define("text!engine/env/flare.vert", [], function () {
    return "varying vec2 vUvs;\nvoid main() {\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n  vUvs = uv;\n}"
}), define("engine/env/Lensflares", ["three", "text!./flare.frag", "text!./flare.vert"], function (a, b, c) {
    var d, e, f, g, h;
    return f = function (b, c, d) {
        return new a.Vector3(b, c, d)
    }, e = function () {
        function a() {
            this.flareTex = null, this.flares = []
        }

        return a.prototype.build = function (a, b) {
            var c, e, f, g, h;
            for (h = [], f = 0, g = b.length; g > f; f++)e = b[f], c = new d(this.flareTex), this.flares.push(c), c.mesh.position.copy(e), h.push(a.add(c.mesh));
            return h
        }, a.prototype.load = function (a) {
            return a.loadTexture("env/lensflare.jpg").then(function (a) {
                return function (b) {
                    a.flareTex = b
                }
            }(this))
        }, a.prototype.update = function (a, b) {
            var c, d, e, f, g;
            for (f = this.flares, g = [], d = 0, e = f.length; e > d; d++)c = f[d], g.push(c.update(a, b));
            return g
        }, a
    }(), h = new a.PlaneBufferGeometry(5, 5), d = function () {
        function d(d) {
            var e;
            this.t = 0, this.ampDest = 1, this.amp = 1, this.uniforms = a.UniformsUtils.clone(g), this.uniforms.tex.value = d, this.mat = new a.ShaderMaterial({
                fragmentShader: b,
                vertexShader: c,
                uniforms: this.uniforms,
                transparent: !0
            }), this.mat.blendSrc = a.OneFactor, this.mat.blendDst = a.OneFactor, this.mat.blending = a.AdditiveBlending, this.mat.depthWrite = !1, this.mat.depthTest = !1, this.mesh = new a.Mesh(h, this.mat), e = 30, this.mesh.scale.set(e, e, e)
        }

        return d.prototype.update = function (a, b) {
            return this.t += b, this.t > .1 && (this.t = 0, this.ampDest = 1 + .15 * Math.random()), this.amp += .3 * (this.ampDest - this.amp), this.uniforms.mult.value = this.amp, this.mesh.quaternion.copy(a.quaternion)
        }, d
    }(), g = {mult: {type: "f", value: 1}, tex: {type: "t", value: null}}, e
});
var __bind = function (a, b) {
    return function () {
        return a.apply(b, arguments)
    }
};
define("engine/env/Env", ["when", "lib/awdLoader", "engine/consts", "../sky/sky", "../snowglobe/snowglobe", "./Lensflares"], function (a, b, c, d, e, f) {
    var g, h;
    return h = c(), g = function () {
        function c(a, b, c) {
            this.ctx = a, this.scene = b, this.inScene = c, this.run = __bind(this.run, this), this.flares = new f
        }

        return c.prototype.load = function () {
            var b;
            return b = [], b.push(this.loadModel("env/scene.awd").then(function (a) {
                return function (b) {
                    a.model = b
                }
            }(this))), b.push(this.ctx.loadCube("env/env_cross.jpg").then(function (a) {
                return function (b) {
                    a.envMap = b
                }
            }(this))), b.push(this.ctx.loadTexture("env/Background.jpg").then(function (a) {
                return function (b) {
                    a.bgTex = b
                }
            }(this))), b.push(this.ctx.loadTexture("env/Desk.jpg").then(function (a) {
                return function (b) {
                    a.deskTex = b
                }
            }(this))), b.push(this.ctx.loadTexture("env/flame.png").then(function (a) {
                return function (b) {
                    a.flameTex = b
                }
            }(this))), b.push(this.ctx.loadTexture("env/Room.png").then(function (a) {
                return function (b) {
                    a.roomTex = b
                }
            }(this))), b.push(this.ctx.loadTexture("env/vol_light.jpg").then(function (a) {
                return function (b) {
                    a.lightvolTex = b
                }
            }(this))), b.push(this.flares.load(this.ctx)), a.all(b).then(this.run)
        }, c.prototype.loadModel = function (c) {
            var d, e;
            return e = this.ctx.resolveQAsset(c), d = a.defer(), (new b).load(e, d.resolve), d.promise
        }, c.prototype.run = function () {
            var a, b, c, d, f, g, i, j, k;
            for (g = h.gScale, i = h.gTranslate, this.model.scale.set(g, g, g), this.model.position.set(i[0], i[1], i[2]), this.model.updateMatrixWorld(), this.desk = this.model.getObjectByName("Desk", !0), this.room = this.model.getObjectByName("Room", !0), this.flames = this.model.getObjectByName("Flames", !0), this.bg = this.model.getObjectByName("Background", !0), this.lv = this.model.getObjectByName("Lightvol", !0), this.deskMat = new THREE.MeshBasicMaterial({map: this.deskTex}), this.desk.material = this.deskMat, this.roomMat = new THREE.MeshBasicMaterial({
                map: this.roomTex,
                transparent: !0
            }), this.room.renderDepth = 1e3, this.room.material = this.roomMat, this.bgMat = new THREE.MeshBasicMaterial({map: this.bgTex}), this.bg.material = this.bgMat, this.flamesMat = new THREE.MeshBasicMaterial({
                map: this.flameTex,
                transparent: !0
            }), this.flamesMat.blendSrc = THREE.OneFactor, this.flamesMat.blendDst = THREE.OneFactor, this.flamesMat.blending = THREE.AdditiveBlending, this.flamesMat.depthWrite = !1, this.flames.material = this.flamesMat, this.lvMat = new THREE.MeshBasicMaterial({
                map: this.lightvolTex,
                transparent: !0,
                opacity: .5
            }), this.lvMat.blendSrc = THREE.OneFactor, this.lvMat.blendDst = THREE.OneFactor, this.lvMat.blending = THREE.AdditiveBlending, this.lvMat.depthWrite = !1, this.lv.material = this.lvMat, a = [], c = k = 0; 6 > k; c = ++k)b = this.model.getObjectByName("flare00" + c, !0), b.updateMatrixWorld(), j = b.getWorldPosition(), a.push(j), b.parent.remove(b);
            return this.flares.build(this.scene, a), this.scene.add(this.model), this.snowglob = new e(this.ctx), this.snowglob.setEnvMap(this.envMap), d = this.model.getObjectByName("Globe", !0), d.material = this.snowglob.glassMaterial, f = d.clone(), f.material = this.snowglob.glassIn, d.position.copy(d.getWorldPosition()), d.rotation.copy(d.getWorldRotation()), d.scale.copy(d.getWorldScale()), f.position.copy(d.position), f.rotation.copy(d.rotation), f.scale.copy(d.scale), this.inScene.add(d), this.inScene.add(f)
        }, c.prototype.render = function (a, b) {
            var c;
            return this.flares.update(a.camCtrl.camera, b), this.snowglob.insideMode(a.camCtrl.inGlobe), null != (c = this.sky) ? c.render(a) : void 0
        }, c
    }()
}), define("engine/content/SignMaterial", ["three"], function (a) {
    var b, c, d, e, f, g, h;
    return e = 512, b = 512, f = 260, g = 330, c = 385, h = function (a, b, c, d, e, f) {
        var g, h, i, j, k, l, m, n, o, p;
        for (m = b.split(" "), g = "", j = 0, h = []; j < m.length;)k = g + m[j] + " ", i = a.measureText(k), l = i.width, l > e && j > 0 ? (h.push(g), g = m[j] + " ", n += f) : g = k, j++;
        for (h.push(g), n = d - h.length * f / 2, o = 0, p = h.length; p > o; o++)g = h[o], a.fillText(g, c, n), n += f
    }, d = function () {
        function d(c) {
            this.ctx = c, this.txt = "", this.baseImg = null, this.canvas = document.createElement("canvas"), this.canvas.width = e, this.canvas.height = b, this.cvsCtx = this.canvas.getContext("2d"), this.textTex = new a.Texture(this.canvas), this.material = new a.MeshBasicMaterial, this.material.map = this.textTex
        }

        return d.prototype.load = function (a) {
            return this.ctx.loadImage("" + a + "/sign.jpg").then(function (a) {
                return function (b) {
                    return a.baseImg = b, a._update()
                }
            }(this))
        }, d.prototype.updateMessage = function () {
            return this._update()
        }, d.prototype._update = function () {
            var a;
            if (null != this.baseImg)return this.cvsCtx.drawImage(this.baseImg, 0, 0, e, b), a = this.ctx.options.message, "" !== a.text && (this.cvsCtx.font = a.font, this.cvsCtx.fillStyle = a.color, this.cvsCtx.textAlign = "center", h(this.cvsCtx, a.text, f, g + a.lineHeight / 2 + 10, c, a.lineHeight)), this.textTex._needsUpdate = !0
        }, d
    }()
});
var __bind = function (a, b) {
    return function () {
        return a.apply(b, arguments)
    }
};
define("engine/content/Content", ["three", "when", "lib/awdLoader", "engine/consts"], function (a, b, c, d) {
    var e, f;
    return f = d(), e = function () {
        function d(b, c, d) {
            this.ctx = b, this.name = c, this.signMat = d, this.run = __bind(this.run, this), this.disposed = !1, this.signPosition = new a.Vector3
        }

        return d.prototype.loadModel = function (a) {
            var d, e;
            return e = this.ctx.resolveQAsset(a), d = b.defer(), (new c).load(e, d.resolve), d.promise
        }, d.prototype.load = function () {
            var c;
            return c = [], this.signMat.load(this.name), c.push(this.loadModel("" + this.name + "/scene.awd").then(function (a) {
                return function (b) {
                    a.model = b
                }
            }(this))), c.push(this.ctx.loadTexture("" + this.name + "/tex.jpg").then(function (b) {
                return function (c) {
                    return b.tex = c, b.tex.magFilter = a.LinearFilter, b.tex.minFilter = a.LinearFilter
                }
            }(this))), b.all(c).then(this.run)
        }, d.prototype.run = function () {
            var b, c;
            return this.disposed ? void this.dispose() : (b = f.gScale, c = f.gTranslate, this.model.scale.set(b, b, b), this.model.position.set(c[0], c[1], c[2]), this.main = this.model.getObjectByName("Main", !0), this.sign = this.model.getObjectByName("Sign", !0), this.mainMat = new a.MeshBasicMaterial({map: this.tex}), this.main.material = this.mainMat, this.sign.material = this.signMat.material, this.signPosition.copy(this.sign.position), this.signPosition.multiplyScalar(b), this.signPosition.add(this.model.position), this.signPosition.y += 10)
        }, d.prototype.dispose = function () {
            var a, b, c, d;
            return this.disposed = !0, null != (a = this.model) && null != (b = a.parent) && b.remove(this.model), null != (c = this.tex) && c.dispose(), null != (d = this.main) ? d.geometry.dispose() : void 0
        }, d
    }()
}), define("text!engine/overlay/gl.frag", [], function () {
    return "#version 100\n#define GAMMA 1.0/2.2\nprecision mediump float;\nuniform float uOpacity;\nvoid main(void) {\n  gl_FragColor = vec4(.0, .0, .0, uOpacity );\n}"
}), define("text!engine/overlay/gl.vert", [], function () {
    return "#version 100\nprecision mediump float;\n\nattribute vec2 aVertexPosition;\n\nvoid main( void ) {\n    gl_Position = vec4(aVertexPosition, 1.0, 1.0);\n}"
}), define("engine/overlay/Overlay", ["text!./gl.frag", "text!./gl.vert"], function (a, b) {
    var c;
    return c = function () {
        function c(c) {
            var d, e, f;
            this.gl = c, this.opacity = 1, this.vertexBuffer = this.gl.createBuffer(), d = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuffer), this.gl.bufferData(this.gl.ARRAY_BUFFER, d, this.gl.STATIC_DRAW), e = this.gl.createShader(this.gl.FRAGMENT_SHADER), this.gl.shaderSource(e, a), this.gl.compileShader(e), f = this.gl.createShader(this.gl.VERTEX_SHADER), this.gl.shaderSource(f, b), this.gl.compileShader(f), this.program = this.gl.createProgram(), this.gl.attachShader(this.program, f), this.gl.attachShader(this.program, e), this.gl.linkProgram(this.program), this.gl.useProgram(this.program), this.posLocation = this.gl.getAttribLocation(this.program, "aVertexPosition"), this.uOpacity = this.gl.getUniformLocation(this.program, "uOpacity")
        }

        return c.prototype.render = function (a) {
            var b;
            if (0 !== this.opacity)return this.opacity -= .2 * a, this.opacity < 0 && (this.opacity = 0), b = this.gl, b.disable(b.CULL_FACE), b.disable(b.DEPTH_TEST), b.enable(b.BLEND), b.blendFunc(b.ONE, b.ONE_MINUS_SRC_ALPHA), b.depthMask(!1), b.useProgram(this.program), b.bindBuffer(b.ARRAY_BUFFER, this.vertexBuffer), b.enableVertexAttribArray(this.posLocation), b.vertexAttribPointer(this.posLocation, 2, b.FLOAT, !1, 8, 0), b.uniform1f(this.uOpacity, this.opacity), b.drawArrays(b.TRIANGLE_STRIP, 0, 4)
        }, c
    }()
});
var __bind = function (a, b) {
    return function () {
        return a.apply(b, arguments)
    }
};
define("engine/entry", ["three", "core/notifications", "core/quality", "./camera", "./consts", "./particles/pEngine", "./particles/renderer", "./env/Env", "./content/SignMaterial", "./content/Content", "./overlay/Overlay", "lib/gui"], function (a, b, c, d, e, f, g, h, i, j, k, l) {
    var m, n, o, p, q, r, s;
    return q = l("city"), n = 3e3, s = new a.Vector3, r = e(), m = function () {
        function a() {
            this._render = __bind(this._render, this), this.stop = __bind(this.stop, this), this.play = __bind(this.play, this), this.loadCity = __bind(this.loadCity, this), this.updateMsg = __bind(this.updateMsg, this), this._running = !1, this.signAligned = !1
        }

        return a.prototype.initialize = function (a) {
            var b, c, e;
            this.ctx = a, this.viewport = new p(this.ctx.halfDpi()), this.scene = new o(this.ctx), this.camCtrl = new d(this), this.pEngine = new f, this.pEngine.allocate(n), this.pRenderer = new g(a, this.pEngine, this.scene.renderer.context), this.pRenderer.init(), this.overlay = new k(this.scene.renderer.context), this.env = new h(this.ctx, this.scene.extScene, this.scene.globeScene), this.env.load(), this.signMat = new i(a), this.ctx.on("city-change", this.loadCity), this.ctx.on("message-change", this.updateMsg), this.loadCity(), this.registerResize(), b = {city: this.ctx.options.city}, c = [];
            for (e in r.focusHeights)c.push(e);
            return q(b, "city", c).onChange(function () {
                return a.setCity(b.city)
            })
        }, a.prototype.updateMsg = function () {
            return this.signMat.updateMessage()
        }, a.prototype.loadCity = function () {
            var a, c;
            return null != (c = this.oldContent) && c.dispose(), this.oldContent = this.content, a = this.ctx.options.city, this.content = new j(this.ctx, a, this.signMat), this.content.load().then(function (a) {
                return function () {
                    var c;
                    return b.send("city-ready"), null != (c = a.oldContent) && c.dispose(), a.oldContent = null, a.scene.inScene.add(a.content.model)
                }
            }(this))
        }, a.prototype.intro = function () {
            return this.camCtrl.intro()
        }, a.prototype.citySight = function (a) {
            return a ? this.camCtrl.citySight() : this.camCtrl.exitCitySight()
        }, a.prototype.play = function () {
            return this._running ? void 0 : (this._running = !0, this.ctx.requestAnimationFrame(this._render))
        }, a.prototype.stop = function () {
            return this._running ? (this._running = !1, this.ctx.cancelAnimationFrame(this._render)) : void 0
        }, a.prototype.registerResize = function () {
            var a, b;
            return a = this.ctx.getWrapper(), b = function (b) {
                return function () {
                    return b.setViewport(0, 0, a.clientWidth, a.clientHeight)
                }
            }(this), window.addEventListener("resize", b), _.defer(b)
        }, a.prototype.setViewport = function (a, b, c, d) {
            return this.ctx.halfDpi() && (c *= .5, d *= .5), this.viewport.set(a, b, c, d) ? (this.camCtrl.setViewport(this.viewport), this.scene.setSize(c, d), this.pRenderer.setSize(c, d)) : void 0
        }, a.prototype._render = function () {
            var a;
            if (this._running)return a = this.ctx.dt, a > 0 && (this.camCtrl.update(a), this.checkSignAlign(), this.env.render(this, a), this.pEngine.update(a), this.scene.render(this.camCtrl.camera, this.camCtrl.extCamera), this.pRenderer.render(this.scene.inScene, this.camCtrl.camera), this.overlay.render(a)), this.ctx.requestAnimationFrame(this._render)
        }, a.prototype.checkSignAlign = function () {
            var a, c, d, e, f, g, h, i;
            return this.content && (c = this.camCtrl.camera, s.copy(this.content.signPosition), s.project(c), g = s.x, h = s.y, d = Math.sqrt(g * g + h * h), e = -200 < (i = c.position.z) && i < this.content.signPosition.z, f = c.position.length() < 200, a = .8 > d && e && f, this.signAligned !== a) ? (this.signAligned = a, b.send("sign-aligned", a)) : void 0
        }, a
    }(), m.THREE = a, o = function () {
        function b(b) {
            this.canvas = document.createElement("canvas"), b.getWrapper().appendChild(this.canvas), this.inScene = new a.Scene, this.extScene = new a.Scene, this.globeScene = new a.Scene, this.renderer = new a.WebGLRenderer({
                antialias: !1,
                precision: c.param("glsl_precision"),
                stencil: !1,
                depth: !0,
                canvas: this.canvas,
                premultipliedAlpha: !0
            }), b._supportS3TC = this.renderer.supportsCompressedTextureS3TC(), b._supportPVRTC = this.renderer.supportsCompressedTexturePVRTC(), this.renderer.setClearColor(0, 1)
        }

        return b.prototype.setSize = function (a, b) {
            return this.renderer.setSize(a, b)
        }, b.prototype.render = function (a, b) {
            return this.renderer.render(this.inScene, a), this.renderer.autoClear = !1, this.renderer.render(this.extScene, b), this.renderer.render(this.globeScene, a), this.renderer.autoClear = !0, this.renderer.resetGLState()
        }, b
    }(), p = function () {
        function a(a) {
            this.hdpi = a, this.x = this.y = 0, this.w = this.h = 100
        }

        return a.prototype.set = function (a, b, c, d) {
            return this.x === a && this.y === b && this.w === c && this.h === d ? !1 : (this.x = a, this.y = b, this.w = c, this.h = d, this.hdpi ? (this.rw = 2 * c, this.rh = 2 * d) : (this.rw = c, this.rh = d), !0)
        }, a
    }(), m
}), define("engine", ["./engine/entry"], function (a) {
    return a
});
