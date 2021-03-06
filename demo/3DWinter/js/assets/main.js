var requirejs, require, define;
!function (global) {
    function isFunction(a) {
        return "[object Function]" === ostring.call(a)
    }

    function isArray(a) {
        return "[object Array]" === ostring.call(a)
    }

    function each(a, b) {
        if (a) {
            var c;
            for (c = 0; c < a.length && (!a[c] || !b(a[c], c, a)); c += 1);
        }
    }

    function eachReverse(a, b) {
        if (a) {
            var c;
            for (c = a.length - 1; c > -1 && (!a[c] || !b(a[c], c, a)); c -= 1);
        }
    }

    function hasProp(a, b) {
        return hasOwn.call(a, b)
    }

    function getOwn(a, b) {
        return hasProp(a, b) && a[b]
    }

    function eachProp(a, b) {
        var c;
        for (c in a)if (hasProp(a, c) && b(a[c], c))break
    }

    function mixin(a, b, c, d) {
        return b && eachProp(b, function (b, e) {
            (c || !hasProp(a, e)) && (!d || "object" != typeof b || !b || isArray(b) || isFunction(b) || b instanceof RegExp ? a[e] = b : (a[e] || (a[e] = {}), mixin(a[e], b, c, d)))
        }), a
    }

    function bind(a, b) {
        return function () {
            return b.apply(a, arguments)
        }
    }

    function scripts() {
        return document.getElementsByTagName("script")
    }

    function defaultOnError(a) {
        throw a
    }

    function getGlobal(a) {
        if (!a)return a;
        var b = global;
        return each(a.split("."), function (a) {
            b = b[a]
        }), b
    }

    function makeError(a, b, c, d) {
        var e = new Error(b + "\nhttp://requirejs.org/docs/errors.html#" + a);
        return e.requireType = a, e.requireModules = d, c && (e.originalError = c), e
    }

    function newContext(a) {
        function b(a) {
            var b, c;
            for (b = 0; b < a.length; b++)if (c = a[b], "." === c)a.splice(b, 1), b -= 1; else if (".." === c) {
                if (0 === b || 1 == b && ".." === a[2] || ".." === a[b - 1])continue;
                b > 0 && (a.splice(b - 1, 2), b -= 2)
            }
        }

        function c(a, c, d) {
            var e, f, g, h, i, j, k, l, m, n, o, p, q = c && c.split("/"), r = x.map, s = r && r["*"];
            if (a && (a = a.split("/"), k = a.length - 1, x.nodeIdCompat && jsSuffixRegExp.test(a[k]) && (a[k] = a[k].replace(jsSuffixRegExp, "")), "." === a[0].charAt(0) && q && (p = q.slice(0, q.length - 1), a = p.concat(a)), b(a), a = a.join("/")), d && r && (q || s)) {
                g = a.split("/");
                a:for (h = g.length; h > 0; h -= 1) {
                    if (j = g.slice(0, h).join("/"), q)for (i = q.length; i > 0; i -= 1)if (f = getOwn(r, q.slice(0, i).join("/")), f && (f = getOwn(f, j))) {
                        l = f, m = h;
                        break a
                    }
                    !n && s && getOwn(s, j) && (n = getOwn(s, j), o = h)
                }
                !l && n && (l = n, m = o), l && (g.splice(0, m, l), a = g.join("/"))
            }
            return e = getOwn(x.pkgs, a), e ? e : a
        }

        function d(a) {
            isBrowser && each(scripts(), function (b) {
                return b.getAttribute("data-requiremodule") === a && b.getAttribute("data-requirecontext") === u.contextName ? (b.parentNode.removeChild(b), !0) : void 0
            })
        }

        function e(a) {
            var b = getOwn(x.paths, a);
            return b && isArray(b) && b.length > 1 ? (b.shift(), u.require.undef(a), u.makeRequire(null, {skipMap: !0})([a]), !0) : void 0
        }

        function f(a) {
            var b, c = a ? a.indexOf("!") : -1;
            return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a]
        }

        function g(a, b, d, e) {
            var g, h, i, j, k = null, l = b ? b.name : null, m = a, n = !0, o = "";
            return a || (n = !1, a = "_@r" + (F += 1)), j = f(a), k = j[0], a = j[1], k && (k = c(k, l, e), h = getOwn(C, k)), a && (k ? o = h && h.normalize ? h.normalize(a, function (a) {
                return c(a, l, e)
            }) : -1 === a.indexOf("!") ? c(a, l, e) : a : (o = c(a, l, e), j = f(o), k = j[0], o = j[1], d = !0, g = u.nameToUrl(o))), i = !k || h || d ? "" : "_unnormalized" + (G += 1), {
                prefix: k,
                name: o,
                parentMap: b,
                unnormalized: !!i,
                url: g,
                originalName: m,
                isDefine: n,
                id: (k ? k + "!" + o : o) + i
            }
        }

        function h(a) {
            var b = a.id, c = getOwn(y, b);
            return c || (c = y[b] = new u.Module(a)), c
        }

        function i(a, b, c) {
            var d = a.id, e = getOwn(y, d);
            !hasProp(C, d) || e && !e.defineEmitComplete ? (e = h(a), e.error && "error" === b ? c(e.error) : e.on(b, c)) : "defined" === b && c(C[d])
        }

        function j(a, b) {
            var c = a.requireModules, d = !1;
            b ? b(a) : (each(c, function (b) {
                var c = getOwn(y, b);
                c && (c.error = a, c.events.error && (d = !0, c.emit("error", a)))
            }), d || req.onError(a))
        }

        function k() {
            globalDefQueue.length && (apsp.apply(B, [B.length, 0].concat(globalDefQueue)), globalDefQueue = [])
        }

        function l(a) {
            delete y[a], delete z[a]
        }

        function m(a, b, c) {
            var d = a.map.id;
            a.error ? a.emit("error", a.error) : (b[d] = !0, each(a.depMaps, function (d, e) {
                var f = d.id, g = getOwn(y, f);
                !g || a.depMatched[e] || c[f] || (getOwn(b, f) ? (a.defineDep(e, C[f]), a.check()) : m(g, b, c))
            }), c[d] = !0)
        }

        function n() {
            var a, b, c = 1e3 * x.waitSeconds, f = c && u.startTime + c < (new Date).getTime(), g = [], h = [], i = !1, k = !0;
            if (!s) {
                if (s = !0, eachProp(z, function (a) {
                        var c = a.map, j = c.id;
                        if (a.enabled && (c.isDefine || h.push(a), !a.error))if (!a.inited && f)e(j) ? (b = !0, i = !0) : (g.push(j), d(j)); else if (!a.inited && a.fetched && c.isDefine && (i = !0, !c.prefix))return k = !1
                    }), f && g.length)return a = makeError("timeout", "Load timeout for modules: " + g, null, g), a.contextName = u.contextName, j(a);
                k && each(h, function (a) {
                    m(a, {}, {})
                }), f && !b || !i || !isBrowser && !isWebWorker || w || (w = setTimeout(function () {
                    w = 0, n()
                }, 50)), s = !1
            }
        }

        function o(a) {
            hasProp(C, a[0]) || h(g(a[0], null, !0)).init(a[1], a[2])
        }

        function p(a, b, c, d) {
            a.detachEvent && !isOpera ? d && a.detachEvent(d, b) : a.removeEventListener(c, b, !1)
        }

        function q(a) {
            var b = a.currentTarget || a.srcElement;
            return p(b, u.onScriptLoad, "load", "onreadystatechange"), p(b, u.onScriptError, "error"), {
                node: b,
                id: b && b.getAttribute("data-requiremodule")
            }
        }

        function r() {
            var a;
            for (k(); B.length;) {
                if (a = B.shift(), null === a[0])return j(makeError("mismatch", "Mismatched anonymous define() module: " + a[a.length - 1]));
                o(a)
            }
        }

        var s, t, u, v, w, x = {
            waitSeconds: 7,
            baseUrl: "./",
            paths: {},
            bundles: {},
            pkgs: {},
            shim: {},
            config: {}
        }, y = {}, z = {}, A = {}, B = [], C = {}, D = {}, E = {}, F = 1, G = 1;
        return v = {
            require: function (a) {
                return a.require ? a.require : a.require = u.makeRequire(a.map)
            }, exports: function (a) {
                return a.usingExports = !0, a.map.isDefine ? a.exports ? C[a.map.id] = a.exports : a.exports = C[a.map.id] = {} : void 0
            }, module: function (a) {
                return a.module ? a.module : a.module = {
                    id: a.map.id, uri: a.map.url, config: function () {
                        return getOwn(x.config, a.map.id) || {}
                    }, exports: a.exports || (a.exports = {})
                }
            }
        }, t = function (a) {
            this.events = getOwn(A, a.id) || {}, this.map = a, this.shim = getOwn(x.shim, a.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
        }, t.prototype = {
            init: function (a, b, c, d) {
                d = d || {}, this.inited || (this.factory = b, c ? this.on("error", c) : this.events.error && (c = bind(this, function (a) {
                    this.emit("error", a)
                })), this.depMaps = a && a.slice(0), this.errback = c, this.inited = !0, this.ignore = d.ignore, d.enabled || this.enabled ? this.enable() : this.check())
            }, defineDep: function (a, b) {
                this.depMatched[a] || (this.depMatched[a] = !0, this.depCount -= 1, this.depExports[a] = b)
            }, fetch: function () {
                if (!this.fetched) {
                    this.fetched = !0, u.startTime = (new Date).getTime();
                    var a = this.map;
                    return this.shim ? void u.makeRequire(this.map, {enableBuildCallback: !0})(this.shim.deps || [], bind(this, function () {
                        return a.prefix ? this.callPlugin() : this.load()
                    })) : a.prefix ? this.callPlugin() : this.load()
                }
            }, load: function () {
                var a = this.map.url;
                D[a] || (D[a] = !0, u.load(this.map.id, a))
            }, check: function () {
                if (this.enabled && !this.enabling) {
                    var a, b, c = this.map.id, d = this.depExports, e = this.exports, f = this.factory;
                    if (this.inited) {
                        if (this.error)this.emit("error", this.error); else if (!this.defining) {
                            if (this.defining = !0, this.depCount < 1 && !this.defined) {
                                if (isFunction(f)) {
                                    if (this.events.error && this.map.isDefine || req.onError !== defaultOnError)try {
                                        e = u.execCb(c, f, d, e)
                                    } catch (g) {
                                        a = g
                                    } else e = u.execCb(c, f, d, e);
                                    if (this.map.isDefine && void 0 === e && (b = this.module, b ? e = b.exports : this.usingExports && (e = this.exports)), a)return a.requireMap = this.map, a.requireModules = this.map.isDefine ? [this.map.id] : null, a.requireType = this.map.isDefine ? "define" : "require", j(this.error = a)
                                } else e = f;
                                this.exports = e, this.map.isDefine && !this.ignore && (C[c] = e, req.onResourceLoad && req.onResourceLoad(u, this.map, this.depMaps)), l(c), this.defined = !0
                            }
                            this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                        }
                    } else this.fetch()
                }
            }, callPlugin: function () {
                var a = this.map, b = a.id, d = g(a.prefix);
                this.depMaps.push(d), i(d, "defined", bind(this, function (d) {
                    var e, f, k, m = getOwn(E, this.map.id), n = this.map.name, o = this.map.parentMap ? this.map.parentMap.name : null, p = u.makeRequire(a.parentMap, {enableBuildCallback: !0});
                    return this.map.unnormalized ? (d.normalize && (n = d.normalize(n, function (a) {
                            return c(a, o, !0)
                        }) || ""), f = g(a.prefix + "!" + n, this.map.parentMap), i(f, "defined", bind(this, function (a) {
                        this.init([], function () {
                            return a
                        }, null, {enabled: !0, ignore: !0})
                    })), k = getOwn(y, f.id), void(k && (this.depMaps.push(f), this.events.error && k.on("error", bind(this, function (a) {
                        this.emit("error", a)
                    })), k.enable()))) : m ? (this.map.url = u.nameToUrl(m), void this.load()) : (e = bind(this, function (a) {
                        this.init([], function () {
                            return a
                        }, null, {enabled: !0})
                    }), e.error = bind(this, function (a) {
                        this.inited = !0, this.error = a, a.requireModules = [b], eachProp(y, function (a) {
                            0 === a.map.id.indexOf(b + "_unnormalized") && l(a.map.id)
                        }), j(a)
                    }), e.fromText = bind(this, function (c, d) {
                        var f = a.name, i = g(f), k = useInteractive;
                        d && (c = d), k && (useInteractive = !1), h(i), hasProp(x.config, b) && (x.config[f] = x.config[b]);
                        try {
                            req.exec(c)
                        } catch (l) {
                            return j(makeError("fromtexteval", "fromText eval for " + b + " failed: " + l, l, [b]))
                        }
                        k && (useInteractive = !0), this.depMaps.push(i), u.completeLoad(f), p([f], e)
                    }), void d.load(a.name, p, e, x))
                })), u.enable(d, this), this.pluginMaps[d.id] = d
            }, enable: function () {
                z[this.map.id] = this, this.enabled = !0, this.enabling = !0, each(this.depMaps, bind(this, function (a, b) {
                    var c, d, e;
                    if ("string" == typeof a) {
                        if (a = g(a, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[b] = a, e = getOwn(v, a.id))return void(this.depExports[b] = e(this));
                        this.depCount += 1, i(a, "defined", bind(this, function (a) {
                            this.defineDep(b, a), this.check()
                        })), this.errback && i(a, "error", bind(this, this.errback))
                    }
                    c = a.id, d = y[c], hasProp(v, c) || !d || d.enabled || u.enable(a, this)
                })), eachProp(this.pluginMaps, bind(this, function (a) {
                    var b = getOwn(y, a.id);
                    b && !b.enabled && u.enable(a, this)
                })), this.enabling = !1, this.check()
            }, on: function (a, b) {
                var c = this.events[a];
                c || (c = this.events[a] = []), c.push(b)
            }, emit: function (a, b) {
                each(this.events[a], function (a) {
                    a(b)
                }), "error" === a && delete this.events[a]
            }
        }, u = {
            config: x,
            contextName: a,
            registry: y,
            defined: C,
            urlFetched: D,
            defQueue: B,
            Module: t,
            makeModuleMap: g,
            nextTick: req.nextTick,
            onError: j,
            configure: function (a) {
                a.baseUrl && "/" !== a.baseUrl.charAt(a.baseUrl.length - 1) && (a.baseUrl += "/");
                var b = x.shim, c = {paths: !0, bundles: !0, config: !0, map: !0};
                eachProp(a, function (a, b) {
                    c[b] ? (x[b] || (x[b] = {}), mixin(x[b], a, !0, !0)) : x[b] = a
                }), a.bundles && eachProp(a.bundles, function (a, b) {
                    each(a, function (a) {
                        a !== b && (E[a] = b)
                    })
                }), a.shim && (eachProp(a.shim, function (a, c) {
                    isArray(a) && (a = {deps: a}), !a.exports && !a.init || a.exportsFn || (a.exportsFn = u.makeShimExports(a)), b[c] = a
                }), x.shim = b), a.packages && each(a.packages, function (a) {
                    var b, c;
                    a = "string" == typeof a ? {name: a} : a, c = a.name, b = a.location, b && (x.paths[c] = a.location), x.pkgs[c] = a.name + "/" + (a.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                }), eachProp(y, function (a, b) {
                    a.inited || a.map.unnormalized || (a.map = g(b))
                }), (a.deps || a.callback) && u.require(a.deps || [], a.callback)
            },
            makeShimExports: function (a) {
                function b() {
                    var b;
                    return a.init && (b = a.init.apply(global, arguments)), b || a.exports && getGlobal(a.exports)
                }

                return b
            },
            makeRequire: function (b, e) {
                function f(c, d, i) {
                    var k, l, m;
                    return e.enableBuildCallback && d && isFunction(d) && (d.__requireJsBuild = !0), "string" == typeof c ? isFunction(d) ? j(makeError("requireargs", "Invalid require call"), i) : b && hasProp(v, c) ? v[c](y[b.id]) : req.get ? req.get(u, c, b, f) : (l = g(c, b, !1, !0), k = l.id, hasProp(C, k) ? C[k] : j(makeError("notloaded", 'Module name "' + k + '" has not been loaded yet for context: ' + a + (b ? "" : ". Use require([])")))) : (r(), u.nextTick(function () {
                        r(), m = h(g(null, b)), m.skipMap = e.skipMap, m.init(c, d, i, {enabled: !0}), n()
                    }), f)
                }

                return e = e || {}, mixin(f, {
                    isBrowser: isBrowser, toUrl: function (a) {
                        var d, e = a.lastIndexOf("."), f = a.split("/")[0], g = "." === f || ".." === f;
                        return -1 !== e && (!g || e > 1) && (d = a.substring(e, a.length), a = a.substring(0, e)), u.nameToUrl(c(a, b && b.id, !0), d, !0)
                    }, defined: function (a) {
                        return hasProp(C, g(a, b, !1, !0).id)
                    }, specified: function (a) {
                        return a = g(a, b, !1, !0).id, hasProp(C, a) || hasProp(y, a)
                    }
                }), b || (f.undef = function (a) {
                    k();
                    var c = g(a, b, !0), e = getOwn(y, a);
                    d(a), delete C[a], delete D[c.url], delete A[a], eachReverse(B, function (b, c) {
                        b[0] === a && B.splice(c, 1)
                    }), e && (e.events.defined && (A[a] = e.events), l(a))
                }), f
            },
            enable: function (a) {
                var b = getOwn(y, a.id);
                b && h(a).enable()
            },
            completeLoad: function (a) {
                var b, c, d, f = getOwn(x.shim, a) || {}, g = f.exports;
                for (k(); B.length;) {
                    if (c = B.shift(), null === c[0]) {
                        if (c[0] = a, b)break;
                        b = !0
                    } else c[0] === a && (b = !0);
                    o(c)
                }
                if (d = getOwn(y, a), !b && !hasProp(C, a) && d && !d.inited) {
                    if (!(!x.enforceDefine || g && getGlobal(g)))return e(a) ? void 0 : j(makeError("nodefine", "No define call for " + a, null, [a]));
                    o([a, f.deps || [], f.exportsFn])
                }
                n()
            },
            nameToUrl: function (a, b, c) {
                var d, e, f, g, h, i, j, k = getOwn(x.pkgs, a);
                if (k && (a = k), j = getOwn(E, a))return u.nameToUrl(j, b, c);
                if (req.jsExtRegExp.test(a))h = a + (b || ""); else {
                    for (d = x.paths, e = a.split("/"), f = e.length; f > 0; f -= 1)if (g = e.slice(0, f).join("/"), i = getOwn(d, g)) {
                        isArray(i) && (i = i[0]), e.splice(0, f, i);
                        break
                    }
                    h = e.join("/"), h += b || (/^data\:|\?/.test(h) || c ? "" : ".js"), h = ("/" === h.charAt(0) || h.match(/^[\w\+\.\-]+:/) ? "" : x.baseUrl) + h
                }
                return x.urlArgs ? h + ((-1 === h.indexOf("?") ? "?" : "&") + x.urlArgs) : h
            },
            load: function (a, b) {
                req.load(u, a, b)
            },
            execCb: function (a, b, c, d) {
                return b.apply(d, c)
            },
            onScriptLoad: function (a) {
                if ("load" === a.type || readyRegExp.test((a.currentTarget || a.srcElement).readyState)) {
                    interactiveScript = null;
                    var b = q(a);
                    u.completeLoad(b.id)
                }
            },
            onScriptError: function (a) {
                var b = q(a);
                return e(b.id) ? void 0 : j(makeError("scripterror", "Script error for: " + b.id, a, [b.id]))
            }
        }, u.require = u.makeRequire(), u
    }

    function getInteractiveScript() {
        return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function (a) {
            return "interactive" === a.readyState ? interactiveScript = a : void 0
        }), interactiveScript)
    }

    var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.1.15", commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm, cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g, jsSuffixRegExp = /\.js$/, currDirRegExp = /^\.\//, op = Object.prototype, ostring = op.toString, hasOwn = op.hasOwnProperty, ap = Array.prototype, apsp = ap.splice, isBrowser = !("undefined" == typeof window || "undefined" == typeof navigator || !window.document), isWebWorker = !isBrowser && "undefined" != typeof importScripts, readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/, defContextName = "_", isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(), contexts = {}, cfg = {}, globalDefQueue = [], useInteractive = !1;
    if ("undefined" == typeof define) {
        if ("undefined" != typeof requirejs) {
            if (isFunction(requirejs))return;
            cfg = requirejs, requirejs = void 0
        }
        "undefined" == typeof require || isFunction(require) || (cfg = require, require = void 0), req = requirejs = function (a, b, c, d) {
            var e, f, g = defContextName;
            return isArray(a) || "string" == typeof a || (f = a, isArray(b) ? (a = b, b = c, c = d) : a = []), f && f.context && (g = f.context), e = getOwn(contexts, g), e || (e = contexts[g] = req.s.newContext(g)), f && e.configure(f), e.require(a, b, c)
        }, req.config = function (a) {
            return req(a)
        }, req.nextTick = "undefined" != typeof setTimeout ? function (a) {
            setTimeout(a, 4)
        } : function (a) {
            a()
        }, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
            contexts: contexts,
            newContext: newContext
        }, req({}), each(["toUrl", "undef", "defined", "specified"], function (a) {
            req[a] = function () {
                var b = contexts[defContextName];
                return b.require[a].apply(b, arguments)
            }
        }), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0], baseElement && (head = s.head = baseElement.parentNode)), req.onError = defaultOnError, req.createNode = function (a) {
            var b = a.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
            return b.type = a.scriptType || "text/javascript", b.charset = "utf-8", b.async = !0, b
        }, req.load = function (a, b, c) {
            var d, e = a && a.config || {};
            if (isBrowser)return d = req.createNode(e, b, c), d.setAttribute("data-requirecontext", a.contextName), d.setAttribute("data-requiremodule", b), !d.attachEvent || d.attachEvent.toString && d.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (d.addEventListener("load", a.onScriptLoad, !1), d.addEventListener("error", a.onScriptError, !1)) : (useInteractive = !0, d.attachEvent("onreadystatechange", a.onScriptLoad)), d.src = c, currentlyAddingScript = d, baseElement ? head.insertBefore(d, baseElement) : head.appendChild(d), currentlyAddingScript = null, d;
            if (isWebWorker)try {
                importScripts(c), a.completeLoad(b)
            } catch (f) {
                a.onError(makeError("importscripts", "importScripts failed for " + b + " at " + c, f, [b]))
            }
        }, isBrowser && !cfg.skipDataMain && eachReverse(scripts(), function (a) {
            return head || (head = a.parentNode), dataMain = a.getAttribute("data-main"), dataMain ? (mainScript = dataMain, cfg.baseUrl || (src = mainScript.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath), mainScript = mainScript.replace(jsSuffixRegExp, ""), req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript], !0) : void 0
        }), define = function (a, b, c) {
            var d, e;
            "string" != typeof a && (c = b, b = a, a = null), isArray(b) || (c = b, b = null), !b && isFunction(c) && (b = [], c.length && (c.toString().replace(commentRegExp, "").replace(cjsRequireRegExp, function (a, c) {
                b.push(c)
            }), b = (1 === c.length ? ["require"] : ["require", "exports", "module"]).concat(b))), useInteractive && (d = currentlyAddingScript || getInteractiveScript(), d && (a || (a = d.getAttribute("data-requiremodule")), e = contexts[d.getAttribute("data-requirecontext")])), (e ? e.defQueue : globalDefQueue).push([a, b, c])
        }, define.amd = {jQuery: !0}, req.exec = function (text) {
            return eval(text)
        }, req(cfg)
    }
}(this), function (a, b) {
    "use strict";
    a("when", ["require"], function (a) {
        function c(a, b, c, e) {
            return d(a).then(b, c, e)
        }

        function d(a) {
            return a instanceof e ? a : f(a)
        }

        function e(a, b) {
            this._message = a, this.inspect = b
        }

        function f(a) {
            return i(function (b) {
                b(a)
            })
        }

        function g(a) {
            return c(a, m)
        }

        function h() {
            function a(a, e, g) {
                b.resolve = b.resolver.resolve = function (b) {
                    return d ? f(b) : (d = !0, a(b), c)
                }, b.reject = b.resolver.reject = function (a) {
                    return d ? f(m(a)) : (d = !0, e(a), c)
                }, b.notify = b.resolver.notify = function (a) {
                    return g(a), a
                }
            }

            var b, c, d;
            return b = {
                promise: W,
                resolve: W,
                reject: W,
                notify: W,
                resolver: {resolve: W, reject: W, notify: W}
            }, b.promise = c = i(a), b
        }

        function i(a) {
            return j(a, T.PromiseStatus && T.PromiseStatus())
        }

        function j(a, b) {
            function c(a, b, c, d) {
                function e(e) {
                    e._message(a, b, c, d)
                }

                l ? l.push(e) : G(function () {
                    e(j)
                })
            }

            function d() {
                return j ? j.inspect() : F()
            }

            function f(a) {
                if (l) {
                    var c = l;
                    l = W, G(function () {
                        j = p(i, a), b && t(j, b), k(c, j)
                    })
                }
            }

            function g(a) {
                f(m(a))
            }

            function h(a) {
                if (l) {
                    var b = l;
                    G(function () {
                        k(b, o(a))
                    })
                }
            }

            var i, j, l = [];
            i = new e(c, d), i._status = b;
            try {
                a(f, g, h)
            } catch (n) {
                g(n)
            }
            return i
        }

        function k(a, b) {
            for (var c = 0; c < a.length; c++)a[c](b)
        }

        function l(a) {
            return n(new r(a), function () {
                return D(a)
            })
        }

        function m(a) {
            return n(new s(a), function () {
                return E(a)
            })
        }

        function n(a, b) {
            return new e(function (b, c, d) {
                try {
                    d(a[b].apply(a, c))
                } catch (e) {
                    d(m(e))
                }
            }, b)
        }

        function o(a) {
            return new e(function (b, c, d, e) {
                var f = c[2];
                try {
                    e("function" == typeof f ? f(a) : a)
                } catch (g) {
                    e(g)
                }
            })
        }

        function p(a, b) {
            if (b === a)return m(new TypeError);
            if (b instanceof e)return b;
            try {
                var c = b === Object(b) && b.then;
                return "function" == typeof c ? q(c, b) : l(b)
            } catch (d) {
                return m(d)
            }
        }

        function q(a, b) {
            return i(function (c, d) {
                M(a, b, c, d)
            })
        }

        function r(a) {
            this.value = a
        }

        function s(a) {
            this.reason = a
        }

        function t(a, b) {
            function c() {
                b.fulfilled()
            }

            function d(a) {
                b.rejected(a)
            }

            a.then(c, d)
        }

        function u(a) {
            return a && "function" == typeof a.then
        }

        function v(a, b, d, e, f) {
            return c(a, function (a) {
                function g(d, e, f) {
                    function g(a) {
                        n(a)
                    }

                    function h(a) {
                        m(a)
                    }

                    var i, j, k, l, m, n, o, p;
                    if (o = a.length >>> 0, i = Math.max(0, Math.min(b, o)), k = [], j = o - i + 1, l = [], i)for (n = function (a) {
                        l.push(a), --j || (m = n = I, e(l))
                    }, m = function (a) {
                        k.push(a), --i || (m = n = I, d(k))
                    }, p = 0; o > p; ++p)p in a && c(a[p], h, g, f); else d(k)
                }

                return i(g).then(d, e, f)
            })
        }

        function w(a, b, c, d) {
            function e(a) {
                return b ? b(a[0]) : a[0]
            }

            return v(a, 1, e, c, d)
        }

        function x(a, b, c, d) {
            return B(a, I).then(b, c, d)
        }

        function y() {
            return B(arguments, I)
        }

        function z(a) {
            return B(a, D, E)
        }

        function A(a, b) {
            return B(a, b)
        }

        function B(a, b, d) {
            return c(a, function (a) {
                function e(e, f, g) {
                    function h(a, h) {
                        c(a, b, d).then(function (a) {
                            i[h] = a, --k || e(i)
                        }, f, g)
                    }

                    var i, j, k, l;
                    if (k = j = a.length >>> 0, i = [], !k)return void e(i);
                    for (l = 0; j > l; l++)l in a ? h(a[l], l) : --k
                }

                return j(e)
            })
        }

        function C(a, b) {
            var d = M(L, arguments, 1);
            return c(a, function (a) {
                var e;
                return e = a.length, d[0] = function (a, d, f) {
                    return c(a, function (a) {
                        return c(d, function (c) {
                            return b(a, c, f, e)
                        })
                    })
                }, K.apply(a, d)
            })
        }

        function D(a) {
            return {state: "fulfilled", value: a}
        }

        function E(a) {
            return {state: "rejected", reason: a}
        }

        function F() {
            return {state: "pending"}
        }

        function G(a) {
            1 === O.push(a) && N(H)
        }

        function H() {
            k(O), O = []
        }

        function I(a) {
            return a
        }

        function J(a) {
            throw"function" == typeof T.reportUnhandled ? T.reportUnhandled() : G(function () {
                throw a
            }), a
        }

        c.promise = i, c.resolve = f, c.reject = g, c.defer = h, c.join = y, c.all = x, c.map = A, c.reduce = C, c.settle = z, c.any = w, c.some = v, c.isPromise = u, c.isPromiseLike = u, e.prototype = {
            then: function () {
                var a, b;
                return a = arguments, b = this._message, j(function (c, d, e) {
                    b("when", a, c, e)
                }, this._status && this._status.observed())
            }, otherwise: function (a) {
                return this.then(W, a)
            }, ensure: function (a) {
                function b() {
                    return f(a())
                }

                return "function" == typeof a ? this.then(b, b)["yield"](this) : this
            }, done: function (a, b) {
                this.then(a, b).otherwise(J)
            }, "yield": function (a) {
                return this.then(function () {
                    return a
                })
            }, tap: function (a) {
                return this.then(a)["yield"](this)
            }, spread: function (a) {
                return this.then(function (b) {
                    return x(b, function (b) {
                        return a.apply(W, b)
                    })
                })
            }, always: function (a, b) {
                return this.then(a, a, b)
            }
        }, r.prototype.when = function (a) {
            return "function" == typeof a ? a(this.value) : this.value
        }, s.prototype.when = function (a, b) {
            if ("function" == typeof b)return b(this.reason);
            throw this.reason
        };
        var K, L, M, N, O, P, Q, R, S, T, U, V, W;
        if (U = a, O = [], P = b.setTimeout, T = "undefined" != typeof console ? console : c, "object" == typeof process && process.nextTick)N = process.nextTick; else if (V = b.MutationObserver || b.WebKitMutationObserver)N = function (a, b, c) {
            var d = a.createElement("div");
            return new b(c).observe(d, {attributes: !0}), function () {
                d.setAttribute("x", "x")
            }
        }(document, V, H); else try {
            N = U("vertx").runOnLoop || U("vertx").runOnContext
        } catch (X) {
            N = function (a) {
                P(a, 0)
            }
        }
        return Q = Function.prototype, R = Q.call, M = Q.bind ? R.bind(R) : function (a, b) {
            return a.apply(b, L.call(arguments, 2))
        }, S = [], L = S.slice, K = S.reduce || function (a) {
                var b, c, d, e, f;
                if (f = 0, b = Object(this), e = b.length >>> 0, c = arguments, c.length <= 1)for (; ;) {
                    if (f in b) {
                        d = b[f++];
                        break
                    }
                    if (++f >= e)throw new TypeError
                } else d = c[1];
                for (; e > f; ++f)f in b && (d = a(d, b[f], f, b));
                return d
            }, c
    })
}("function" == typeof define && define.amd ? define : function (a) {
    module.exports = a(require)
}, this), function () {
    var a = this, b = a._, c = {}, d = Array.prototype, e = Object.prototype, f = Function.prototype, g = d.push, h = d.slice, i = d.concat, j = e.toString, k = e.hasOwnProperty, l = d.forEach, m = d.map, n = d.reduce, o = d.reduceRight, p = d.filter, q = d.every, r = d.some, s = d.indexOf, t = d.lastIndexOf, u = Array.isArray, v = Object.keys, w = f.bind, x = function (a) {
        return a instanceof x ? a : this instanceof x ? void(this._wrapped = a) : new x(a)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : a._ = x, x.VERSION = "1.5.2";
    var y = x.each = x.forEach = function (a, b, d) {
        if (null != a)if (l && a.forEach === l)a.forEach(b, d); else if (a.length === +a.length) {
            for (var e = 0, f = a.length; f > e; e++)if (b.call(d, a[e], e, a) === c)return
        } else for (var g = x.keys(a), e = 0, f = g.length; f > e; e++)if (b.call(d, a[g[e]], g[e], a) === c)return
    };
    x.map = x.collect = function (a, b, c) {
        var d = [];
        return null == a ? d : m && a.map === m ? a.map(b, c) : (y(a, function (a, e, f) {
            d.push(b.call(c, a, e, f))
        }), d)
    };
    var z = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function (a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []), n && a.reduce === n)return d && (b = x.bind(b, d)), e ? a.reduce(b, c) : a.reduce(b);
        if (y(a, function (a, f, g) {
                e ? c = b.call(d, c, a, f, g) : (c = a, e = !0)
            }), !e)throw new TypeError(z);
        return c
    }, x.reduceRight = x.foldr = function (a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []), o && a.reduceRight === o)return d && (b = x.bind(b, d)), e ? a.reduceRight(b, c) : a.reduceRight(b);
        var f = a.length;
        if (f !== +f) {
            var g = x.keys(a);
            f = g.length
        }
        if (y(a, function (h, i, j) {
                i = g ? g[--f] : --f, e ? c = b.call(d, c, a[i], i, j) : (c = a[i], e = !0)
            }), !e)throw new TypeError(z);
        return c
    }, x.find = x.detect = function (a, b, c) {
        var d;
        return A(a, function (a, e, f) {
            return b.call(c, a, e, f) ? (d = a, !0) : void 0
        }), d
    }, x.filter = x.select = function (a, b, c) {
        var d = [];
        return null == a ? d : p && a.filter === p ? a.filter(b, c) : (y(a, function (a, e, f) {
            b.call(c, a, e, f) && d.push(a)
        }), d)
    }, x.reject = function (a, b, c) {
        return x.filter(a, function (a, d, e) {
            return !b.call(c, a, d, e)
        }, c)
    }, x.every = x.all = function (a, b, d) {
        b || (b = x.identity);
        var e = !0;
        return null == a ? e : q && a.every === q ? a.every(b, d) : (y(a, function (a, f, g) {
            return (e = e && b.call(d, a, f, g)) ? void 0 : c
        }), !!e)
    };
    var A = x.some = x.any = function (a, b, d) {
        b || (b = x.identity);
        var e = !1;
        return null == a ? e : r && a.some === r ? a.some(b, d) : (y(a, function (a, f, g) {
            return e || (e = b.call(d, a, f, g)) ? c : void 0
        }), !!e)
    };
    x.contains = x.include = function (a, b) {
        return null == a ? !1 : s && a.indexOf === s ? -1 != a.indexOf(b) : A(a, function (a) {
            return a === b
        })
    }, x.invoke = function (a, b) {
        var c = h.call(arguments, 2), d = x.isFunction(b);
        return x.map(a, function (a) {
            return (d ? b : a[b]).apply(a, c)
        })
    }, x.pluck = function (a, b) {
        return x.map(a, function (a) {
            return a[b]
        })
    }, x.where = function (a, b, c) {
        return x.isEmpty(b) ? c ? void 0 : [] : x[c ? "find" : "filter"](a, function (a) {
            for (var c in b)if (b[c] !== a[c])return !1;
            return !0
        })
    }, x.findWhere = function (a, b) {
        return x.where(a, b, !0)
    }, x.max = function (a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535)return Math.max.apply(Math, a);
        if (!b && x.isEmpty(a))return -1 / 0;
        var d = {computed: -1 / 0, value: -1 / 0};
        return y(a, function (a, e, f) {
            var g = b ? b.call(c, a, e, f) : a;
            g > d.computed && (d = {value: a, computed: g})
        }), d.value
    }, x.min = function (a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535)return Math.min.apply(Math, a);
        if (!b && x.isEmpty(a))return 1 / 0;
        var d = {computed: 1 / 0, value: 1 / 0};
        return y(a, function (a, e, f) {
            var g = b ? b.call(c, a, e, f) : a;
            g < d.computed && (d = {value: a, computed: g})
        }), d.value
    }, x.shuffle = function (a) {
        var b, c = 0, d = [];
        return y(a, function (a) {
            b = x.random(c++), d[c - 1] = d[b], d[b] = a
        }), d
    }, x.sample = function (a, b, c) {
        return arguments.length < 2 || c ? a[x.random(a.length - 1)] : x.shuffle(a).slice(0, Math.max(0, b))
    };
    var B = function (a) {
        return x.isFunction(a) ? a : function (b) {
            return b[a]
        }
    };
    x.sortBy = function (a, b, c) {
        var d = B(b);
        return x.pluck(x.map(a, function (a, b, e) {
            return {value: a, index: b, criteria: d.call(c, a, b, e)}
        }).sort(function (a, b) {
            var c = a.criteria, d = b.criteria;
            if (c !== d) {
                if (c > d || void 0 === c)return 1;
                if (d > c || void 0 === d)return -1
            }
            return a.index - b.index
        }), "value")
    };
    var C = function (a) {
        return function (b, c, d) {
            var e = {}, f = null == c ? x.identity : B(c);
            return y(b, function (c, g) {
                var h = f.call(d, c, g, b);
                a(e, h, c)
            }), e
        }
    };
    x.groupBy = C(function (a, b, c) {
        (x.has(a, b) ? a[b] : a[b] = []).push(c)
    }), x.indexBy = C(function (a, b, c) {
        a[b] = c
    }), x.countBy = C(function (a, b) {
        x.has(a, b) ? a[b]++ : a[b] = 1
    }), x.sortedIndex = function (a, b, c, d) {
        c = null == c ? x.identity : B(c);
        for (var e = c.call(d, b), f = 0, g = a.length; g > f;) {
            var h = f + g >>> 1;
            c.call(d, a[h]) < e ? f = h + 1 : g = h
        }
        return f
    }, x.toArray = function (a) {
        return a ? x.isArray(a) ? h.call(a) : a.length === +a.length ? x.map(a, x.identity) : x.values(a) : []
    }, x.size = function (a) {
        return null == a ? 0 : a.length === +a.length ? a.length : x.keys(a).length
    }, x.first = x.head = x.take = function (a, b, c) {
        return null == a ? void 0 : null == b || c ? a[0] : h.call(a, 0, b)
    }, x.initial = function (a, b, c) {
        return h.call(a, 0, a.length - (null == b || c ? 1 : b))
    }, x.last = function (a, b, c) {
        return null == a ? void 0 : null == b || c ? a[a.length - 1] : h.call(a, Math.max(a.length - b, 0))
    }, x.rest = x.tail = x.drop = function (a, b, c) {
        return h.call(a, null == b || c ? 1 : b)
    }, x.compact = function (a) {
        return x.filter(a, x.identity)
    };
    var D = function (a, b, c) {
        return b && x.every(a, x.isArray) ? i.apply(c, a) : (y(a, function (a) {
            x.isArray(a) || x.isArguments(a) ? b ? g.apply(c, a) : D(a, b, c) : c.push(a)
        }), c)
    };
    x.flatten = function (a, b) {
        return D(a, b, [])
    }, x.without = function (a) {
        return x.difference(a, h.call(arguments, 1))
    }, x.uniq = x.unique = function (a, b, c, d) {
        x.isFunction(b) && (d = c, c = b, b = !1);
        var e = c ? x.map(a, c, d) : a, f = [], g = [];
        return y(e, function (c, d) {
            (b ? d && g[g.length - 1] === c : x.contains(g, c)) || (g.push(c), f.push(a[d]))
        }), f
    }, x.union = function () {
        return x.uniq(x.flatten(arguments, !0))
    }, x.intersection = function (a) {
        var b = h.call(arguments, 1);
        return x.filter(x.uniq(a), function (a) {
            return x.every(b, function (b) {
                return x.indexOf(b, a) >= 0
            })
        })
    }, x.difference = function (a) {
        var b = i.apply(d, h.call(arguments, 1));
        return x.filter(a, function (a) {
            return !x.contains(b, a)
        })
    }, x.zip = function () {
        for (var a = x.max(x.pluck(arguments, "length").concat(0)), b = new Array(a), c = 0; a > c; c++)b[c] = x.pluck(arguments, "" + c);
        return b
    }, x.object = function (a, b) {
        if (null == a)return {};
        for (var c = {}, d = 0, e = a.length; e > d; d++)b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
        return c
    }, x.indexOf = function (a, b, c) {
        if (null == a)return -1;
        var d = 0, e = a.length;
        if (c) {
            if ("number" != typeof c)return d = x.sortedIndex(a, b), a[d] === b ? d : -1;
            d = 0 > c ? Math.max(0, e + c) : c
        }
        if (s && a.indexOf === s)return a.indexOf(b, c);
        for (; e > d; d++)if (a[d] === b)return d;
        return -1
    }, x.lastIndexOf = function (a, b, c) {
        if (null == a)return -1;
        var d = null != c;
        if (t && a.lastIndexOf === t)return d ? a.lastIndexOf(b, c) : a.lastIndexOf(b);
        for (var e = d ? c : a.length; e--;)if (a[e] === b)return e;
        return -1
    }, x.range = function (a, b, c) {
        arguments.length <= 1 && (b = a || 0, a = 0), c = arguments[2] || 1;
        for (var d = Math.max(Math.ceil((b - a) / c), 0), e = 0, f = new Array(d); d > e;)f[e++] = a, a += c;
        return f
    };
    var E = function () {
    };
    x.bind = function (a, b) {
        var c, d;
        if (w && a.bind === w)return w.apply(a, h.call(arguments, 1));
        if (!x.isFunction(a))throw new TypeError;
        return c = h.call(arguments, 2), d = function () {
            if (!(this instanceof d))return a.apply(b, c.concat(h.call(arguments)));
            E.prototype = a.prototype;
            var e = new E;
            E.prototype = null;
            var f = a.apply(e, c.concat(h.call(arguments)));
            return Object(f) === f ? f : e
        }
    }, x.partial = function (a) {
        var b = h.call(arguments, 1);
        return function () {
            return a.apply(this, b.concat(h.call(arguments)))
        }
    }, x.bindAll = function (a) {
        var b = h.call(arguments, 1);
        if (0 === b.length)throw new Error("bindAll must be passed function names");
        return y(b, function (b) {
            a[b] = x.bind(a[b], a)
        }), a
    }, x.memoize = function (a, b) {
        var c = {};
        return b || (b = x.identity), function () {
            var d = b.apply(this, arguments);
            return x.has(c, d) ? c[d] : c[d] = a.apply(this, arguments)
        }
    }, x.delay = function (a, b) {
        var c = h.call(arguments, 2);
        return setTimeout(function () {
            return a.apply(null, c)
        }, b)
    }, x.defer = function (a) {
        return x.delay.apply(x, [a, 1].concat(h.call(arguments, 1)))
    }, x.throttle = function (a, b, c) {
        var d, e, f, g = null, h = 0;
        c || (c = {});
        var i = function () {
            h = c.leading === !1 ? 0 : new Date, g = null, f = a.apply(d, e)
        };
        return function () {
            var j = new Date;
            h || c.leading !== !1 || (h = j);
            var k = b - (j - h);
            return d = this, e = arguments, 0 >= k ? (clearTimeout(g), g = null, h = j, f = a.apply(d, e)) : g || c.trailing === !1 || (g = setTimeout(i, k)), f
        }
    }, x.debounce = function (a, b, c) {
        var d, e, f, g, h;
        return function () {
            f = this, e = arguments, g = new Date;
            var i = function () {
                var j = new Date - g;
                b > j ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(f, e)))
            }, j = c && !d;
            return d || (d = setTimeout(i, b)), j && (h = a.apply(f, e)), h
        }
    }, x.once = function (a) {
        var b, c = !1;
        return function () {
            return c ? b : (c = !0, b = a.apply(this, arguments), a = null, b)
        }
    }, x.wrap = function (a, b) {
        return function () {
            var c = [a];
            return g.apply(c, arguments), b.apply(this, c)
        }
    }, x.compose = function () {
        var a = arguments;
        return function () {
            for (var b = arguments, c = a.length - 1; c >= 0; c--)b = [a[c].apply(this, b)];
            return b[0]
        }
    }, x.after = function (a, b) {
        return function () {
            return --a < 1 ? b.apply(this, arguments) : void 0
        }
    }, x.keys = v || function (a) {
            if (a !== Object(a))throw new TypeError("Invalid object");
            var b = [];
            for (var c in a)x.has(a, c) && b.push(c);
            return b
        }, x.values = function (a) {
        for (var b = x.keys(a), c = b.length, d = new Array(c), e = 0; c > e; e++)d[e] = a[b[e]];
        return d
    }, x.pairs = function (a) {
        for (var b = x.keys(a), c = b.length, d = new Array(c), e = 0; c > e; e++)d[e] = [b[e], a[b[e]]];
        return d
    }, x.invert = function (a) {
        for (var b = {}, c = x.keys(a), d = 0, e = c.length; e > d; d++)b[a[c[d]]] = c[d];
        return b
    }, x.functions = x.methods = function (a) {
        var b = [];
        for (var c in a)x.isFunction(a[c]) && b.push(c);
        return b.sort()
    }, x.extend = function (a) {
        return y(h.call(arguments, 1), function (b) {
            if (b)for (var c in b)a[c] = b[c]
        }), a
    }, x.pick = function (a) {
        var b = {}, c = i.apply(d, h.call(arguments, 1));
        return y(c, function (c) {
            c in a && (b[c] = a[c])
        }), b
    }, x.omit = function (a) {
        var b = {}, c = i.apply(d, h.call(arguments, 1));
        for (var e in a)x.contains(c, e) || (b[e] = a[e]);
        return b
    }, x.defaults = function (a) {
        return y(h.call(arguments, 1), function (b) {
            if (b)for (var c in b)void 0 === a[c] && (a[c] = b[c])
        }), a
    }, x.clone = function (a) {
        return x.isObject(a) ? x.isArray(a) ? a.slice() : x.extend({}, a) : a
    }, x.tap = function (a, b) {
        return b(a), a
    };
    var F = function (a, b, c, d) {
        if (a === b)return 0 !== a || 1 / a == 1 / b;
        if (null == a || null == b)return a === b;
        a instanceof x && (a = a._wrapped), b instanceof x && (b = b._wrapped);
        var e = j.call(a);
        if (e != j.call(b))return !1;
        switch (e) {
            case"[object String]":
                return a == String(b);
            case"[object Number]":
                return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
            case"[object Date]":
            case"[object Boolean]":
                return +a == +b;
            case"[object RegExp]":
                return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase
        }
        if ("object" != typeof a || "object" != typeof b)return !1;
        for (var f = c.length; f--;)if (c[f] == a)return d[f] == b;
        var g = a.constructor, h = b.constructor;
        if (g !== h && !(x.isFunction(g) && g instanceof g && x.isFunction(h) && h instanceof h))return !1;
        c.push(a), d.push(b);
        var i = 0, k = !0;
        if ("[object Array]" == e) {
            if (i = a.length, k = i == b.length)for (; i-- && (k = F(a[i], b[i], c, d)););
        } else {
            for (var l in a)if (x.has(a, l) && (i++, !(k = x.has(b, l) && F(a[l], b[l], c, d))))break;
            if (k) {
                for (l in b)if (x.has(b, l) && !i--)break;
                k = !i
            }
        }
        return c.pop(), d.pop(), k
    };
    x.isEqual = function (a, b) {
        return F(a, b, [], [])
    }, x.isEmpty = function (a) {
        if (null == a)return !0;
        if (x.isArray(a) || x.isString(a))return 0 === a.length;
        for (var b in a)if (x.has(a, b))return !1;
        return !0
    }, x.isElement = function (a) {
        return !(!a || 1 !== a.nodeType)
    }, x.isArray = u || function (a) {
            return "[object Array]" == j.call(a)
        }, x.isObject = function (a) {
        return a === Object(a)
    }, y(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (a) {
        x["is" + a] = function (b) {
            return j.call(b) == "[object " + a + "]"
        }
    }), x.isArguments(arguments) || (x.isArguments = function (a) {
        return !(!a || !x.has(a, "callee"))
    }), "function" != typeof/./ && (x.isFunction = function (a) {
        return "function" == typeof a
    }), x.isFinite = function (a) {
        return isFinite(a) && !isNaN(parseFloat(a))
    }, x.isNaN = function (a) {
        return x.isNumber(a) && a != +a
    }, x.isBoolean = function (a) {
        return a === !0 || a === !1 || "[object Boolean]" == j.call(a)
    }, x.isNull = function (a) {
        return null === a
    }, x.isUndefined = function (a) {
        return void 0 === a
    }, x.has = function (a, b) {
        return k.call(a, b)
    }, x.noConflict = function () {
        return a._ = b, this
    }, x.identity = function (a) {
        return a
    }, x.times = function (a, b, c) {
        for (var d = Array(Math.max(0, a)), e = 0; a > e; e++)d[e] = b.call(c, e);
        return d
    }, x.random = function (a, b) {
        return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1))
    };
    var G = {escape: {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;"}};
    G.unescape = x.invert(G.escape);
    var H = {
        escape: new RegExp("[" + x.keys(G.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + x.keys(G.unescape).join("|") + ")", "g")
    };
    x.each(["escape", "unescape"], function (a) {
        x[a] = function (b) {
            return null == b ? "" : ("" + b).replace(H[a], function (b) {
                return G[a][b]
            })
        }
    }), x.result = function (a, b) {
        if (null == a)return void 0;
        var c = a[b];
        return x.isFunction(c) ? c.call(a) : c
    }, x.mixin = function (a) {
        y(x.functions(a), function (b) {
            var c = x[b] = a[b];
            x.prototype[b] = function () {
                var a = [this._wrapped];
                return g.apply(a, arguments), M.call(this, c.apply(x, a))
            }
        })
    };
    var I = 0;
    x.uniqueId = function (a) {
        var b = ++I + "";
        return a ? a + b : b
    }, x.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
    var J = /(.)^/, K = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, L = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function (a, b, c) {
        var d;
        c = x.defaults({}, c, x.templateSettings);
        var e = new RegExp([(c.escape || J).source, (c.interpolate || J).source, (c.evaluate || J).source].join("|") + "|$", "g"), f = 0, g = "__p+='";
        a.replace(e, function (b, c, d, e, h) {
            return g += a.slice(f, h).replace(L, function (a) {
                return "\\" + K[a]
            }), c && (g += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'"), d && (g += "'+\n((__t=(" + d + "))==null?'':__t)+\n'"), e && (g += "';\n" + e + "\n__p+='"), f = h + b.length, b
        }), g += "';\n", c.variable || (g = "with(obj||{}){\n" + g + "}\n"), g = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + g + "return __p;\n";
        try {
            d = new Function(c.variable || "obj", "_", g)
        } catch (h) {
            throw h.source = g, h
        }
        if (b)return d(b, x);
        var i = function (a) {
            return d.call(this, a, x)
        };
        return i.source = "function(" + (c.variable || "obj") + "){\n" + g + "}", i
    }, x.chain = function (a) {
        return x(a).chain()
    };
    var M = function (a) {
        return this._chain ? x(a).chain() : a
    };
    x.mixin(x), y(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (a) {
        var b = d[a];
        x.prototype[a] = function () {
            var c = this._wrapped;
            return b.apply(c, arguments), "shift" != a && "splice" != a || 0 !== c.length || delete c[0], M.call(this, c)
        }
    }), y(["concat", "join", "slice"], function (a) {
        var b = d[a];
        x.prototype[a] = function () {
            return M.call(this, b.apply(this._wrapped, arguments))
        }
    }), x.extend(x.prototype, {
        chain: function () {
            return this._chain = !0, this
        }, value: function () {
            return this._wrapped
        }
    }), "function" == typeof define && define.amd && define("underscore", [], function () {
        return x
    })
}.call(this);
var __slice = [].slice;
define("core/errors", [], function () {
    var a, b, c, d;
    return b = function (a, b) {
        return function () {
            var c;
            return c = 1 <= arguments.length ? __slice.call(arguments, 0) : [], "string" == typeof b && (b = new Error(b + " " + c.join(" "))), b.code = a, b
        }
    }, d = function (a) {
        return null != a.code && "number" == typeof a.code ? a : b(500, a)()
    }, c = function (a) {
        var b;
        return b = "string" == typeof a ? a : null != a.stack ? a.stack : void 0, console.log(b)
    }, a = {
        status: {exit: b(0, "exit")},
        config: {
            missing_texture: b(504, "texture/image missing in data"),
            loading_texture: b(505, "texture loading error")
        },
        tasks: {
            forcedFallback: b(101, "forced fallback (_fallback is true in options)"),
            unsupp_renderer: b(110, "No renderer availables"),
            no_webgl: b(111, "Webgl not supported"),
            no_options: b(501, "missing options in App initialize call"),
            no_container: b(502, "App config must have 'container' property."),
            no_assets: b(503, "App config must have 'assetsDir' property."),
            no_city: b(504, "App config must have 'city' property."),
            unknown_city: b(505, "Config 'city' don't match any known cities."),
            no_msg: b(506, "App config must have 'message' property."),
            no_msg_prop: b(507, "'message' config missing property : "),
            capabilities: b(510, "Missing mandatory capability : "),
            unknown_renderer: b(511, "Unknown renderer passed in options "),
            no_hxr: b(512, "No HXR available, check jquery support ajax or you have other hxr lib")
        },
        internal: {"abstract": b(520, "Abstract methods must be overrided.")},
        errorHandler: c,
        normalize: d
    }
}), define("core/quality", [], function () {
    var a, b, c, d, e, f, g, h, i;
    return a = 2, c = 1, b = 0, i = 2, g = function (a) {
        return i = a
    }, e = function (d, e, f) {
        switch (i) {
            case b:
                return d;
            case c:
                return e;
            case a:
                return f
        }
    }, d = function (d, e, f) {
        switch (i) {
            case b:
                d();
                break;
            case c:
                e();
                break;
            case a:
                f()
        }
    }, f = function (a) {
        return h[a][i]
    }, h = {
        half_dpi: [!0, !0, !1],
        assets_path: ["low", "med", "hi"],
        shaderQuality: ["QUALITY_LOW", "QUALITY_MED", "QUALITY_HI"],
        msaa: [!1, !1, !1],
        glsl_precision: ["mediump", "mediump", "highp"],
        shadowCasting: [!1, !0, !0],
        shadowMapSize: [512, 1024, 2048],
        shadowMapMethod: [0, 0, 1],
        skybox_size: [16, 16, 128],
        skybox_steps: [4, 4, 16],
        reflectionMapSize: [[128, 64], [512, 256], [1024, 512]],
        reflectionBlurIter: [4, 8, 16],
        reflactableA: [!0, !0, !0],
        reflactableB: [!1, !1, !0]
    }, {HI: a, MED: c, setQuality: g, get: e, call: d, param: f}
}), define("core/progressor", ["when"], function (a) {
    var b;
    return b = function () {
        function b() {
            this.loadables = []
        }

        return b.prototype.addLoadable = function (a) {
            return this.loadables.push(a)
        }, b.prototype.addLoadables = function (a) {
            var b, c, d, e;
            for (e = [], c = 0, d = a.length; d > c; c++)b = a[c], e.push(this.loadables.push(b));
            return e
        }, b.prototype.reset = function () {
            return this.loadables = []
        }, b.prototype.start = function () {
            var b, c, d, e, f, g, h, i, j;
            for (g = this.loadables.length, e = 0, i = 0, b = a.defer(), a.all(this.loadables, b.resolve, b.reject), d = function () {
                return e++, i = e / g, b.notify({code: "progress", data: i})
            }, j = this.loadables, f = 0, h = j.length; h > f; f++)c = j[f], c.then(d);
            return b.promise
        }, b
    }()
}), define("core/hasDDS", [], function () {
    return {dds: !0, pvr: !0}
}), define("lib/log", [], function () {
    function a(c) {
        return a.enabled(c) ? function (d) {
            d = b(d);
            var e = new Date, f = e - (a[c] || e);
            a[c] = e, d = c + " " + d + " +" + a.humanize(f), window.console && console.log && Function.prototype.apply.call(console.log, console, arguments)
        } : function () {
        }
    }

    function b(a) {
        return a instanceof Error ? a.stack || a.message : a
    }

    return a.names = [], a.skips = [], a.enable = function (b) {
        for (var c = (b || "").split(/[\s,]+/), d = c.length, e = 0; d > e; e++)b = c[e].replace("*", ".*?"), "-" === b[0] ? a.skips.push(new RegExp("^" + b.substr(1) + "$")) : a.names.push(new RegExp("^" + b + "$"))
    }, a.disable = function () {
        a.enable("")
    }, a.humanize = function (a) {
        var b = 1e3, c = 6e4, d = 60 * c;
        return a >= d ? (a / d).toFixed(1) + "h" : a >= c ? (a / c).toFixed(1) + "m" : a >= b ? (a / b | 0) + "s" : a + "ms"
    }, a.enabled = function (b) {
        for (var c = 0, d = a.skips.length; d > c; c++)if (a.skips[c].test(b))return !1;
        for (var c = 0, d = a.names.length; d > c; c++)if (a.names[c].test(b))return !0;
        return !1
    }, a
}), define("lib/indexof", [], function () {
    return function (a, b) {
        if (a.indexOf)return a.indexOf(b);
        for (var c = 0; c < a.length; ++c)if (a[c] === b)return c;
        return -1
    }
}), define("lib/emitter", ["lib/indexof"], function (a) {
    function b(a) {
        return a ? c(a) : void 0
    }

    function c(a) {
        for (var c in b.prototype)a[c] = b.prototype[c];
        return a
    }

    return b.prototype.on = b.prototype.addEventListener = function (a, b) {
        return this._callbacks = this._callbacks || {}, (this._callbacks[a] = this._callbacks[a] || []).push(b), this
    }, b.prototype.once = function (a, b) {
        function c() {
            d.off(a, c), b.apply(this, arguments)
        }

        var d = this;
        return this._callbacks = this._callbacks || {}, b._off = c, this.on(a, c), this
    }, b.prototype.off = b.prototype.removeListener = b.prototype.removeAllListeners = b.prototype.removeEventListener = function (b, c) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length)return this._callbacks = {}, this;
        var d = this._callbacks[b];
        if (!d)return this;
        if (1 == arguments.length)return delete this._callbacks[b], this;
        var e = a(d, c._off || c);
        return ~e && d.splice(e, 1), this
    }, b.prototype.emit = function (a) {
        this._callbacks = this._callbacks || {};
        var b = [].slice.call(arguments, 1), c = this._callbacks[a];
        if (c) {
            c = c.slice(0);
            for (var d = 0, e = c.length; e > d; ++d)c[d].apply(this, b)
        }
        return this
    }, b.prototype.listeners = function (a) {
        return this._callbacks = this._callbacks || {}, this._callbacks[a] || []
    }, b.prototype.hasListeners = function (a) {
        return !!this.listeners(a).length
    }, b
});
var __slice = [].slice;
define("lib/gui", [], function () {
    var a, b, c, d, e;
    return c = function () {
        var a, b, c, d, e, f, g;
        return e = arguments[0], g = arguments[1], d = arguments[2], a = 4 <= arguments.length ? __slice.call(arguments, 3) : [], f = g[d], c = {}, "c" === f.type ? (c[d] = "#" + f.value.getHex().toString(16), b = e.addColor.apply(e, [c, d].concat(__slice.call(a))), b.onChange(function (a) {
            return a = a.replace("#", "0x"), f.value.setHex(a), console.log("[gui]", f.value.getHex().toString(16))
        })) : (c[d] = f.value, b = e.add.apply(e, [c, d].concat(__slice.call(a))), b.onChange(function () {
            return f.value = c[d]
        }))
    }, a = null, e = {
        onChange: function () {
        }
    }, d = function () {
        return e
    }, d.u = function () {
    }, b = function (e) {
        var f, g;
        return b.enabled(e) ? (null == b.datgui && (b.datgui = new a), f = b.folders, f[e] || (f[e] = b.datgui.addFolder(e)), g = f[e], g.open(), function (a) {
            var b;
            return b = function () {
                var b;
                return b = 1 <= arguments.length ? __slice.call(arguments, 0) : [], a.add.apply(a, b)
            }, b.addColor = function () {
                var b;
                return b = 1 <= arguments.length ? __slice.call(arguments, 0) : [], a.addColor.apply(a, b)
            }, b.u = function () {
                var b, d, e;
                return e = arguments[0], d = arguments[1], b = 3 <= arguments.length ? __slice.call(arguments, 2) : [], c.apply(null, [a, e, d].concat(__slice.call(b)))
            }, b
        }(g)) : d
    }, b.setup = function (b) {
        return a = b
    }, b.folders = {}, b.datgui = null, b.names = [], b.skips = [], b.enable = function (a) {
        var c, d, e, f, g;
        for (d = (a || "").split(/[\s,]+/), g = [], e = 0, f = d.length; f > e; e++)c = d[e], a = c.replace("*", ".*?"), g.push("-" === a[0] ? b.skips.push(new RegExp("^" + a.substr(1) + "$")) : b.names.push(new RegExp("^" + a + "$")));
        return g
    }, b.disable = function () {
        return b.enable("")
    }, b.enabled = function (a) {
        var c, d, e, f, g, h, i, j;
        for (i = b.skips, e = 0, g = i.length; g > e; e++)if (d = i[e], d.test(a))return !1;
        for (j = b.names, f = 0, h = j.length; h > f; f++)if (c = j[f], c.test(a))return !0;
        return !1
    }, b
}), define("lib/assembleCube", [], function () {
    return function (a, b) {
        var c, d, e, f, g, h, i, j, k, l, m, n;
        for (k = a[0], i = k.mipmaps, l = k.width, f = k.height, e = k.format, j = i.length, c = new b.CompressedTexture, 1 === j && (c.minFilter = b.LinearFilter), h = c.images = c.image = [], d = m = 0; 6 > m; d = ++m)for (h[d] = {mipmaps: []}, h[d].format = e, h[d].width = l, h[d].height = f, g = n = 0; j > n; g = n += 1)h[d].mipmaps.push(a[d].mipmaps[g]);
        return c.needsUpdate = !0, c.name = "asembled", c.format = e, c.width = l, c.height = f, c
    }
}), define("engine/consts", [], function () {
    return function () {
        return {
            introDuration: 21,
            focusCenter: [0, 0, 0],
            gScale: 10,
            gTranslate: [2.95, -509.04, -1261.66],
            signAlign: [0, 0, -1],
            focusHeights: {
                amsterdam: -30,
                london: -30,
                paris: -10,
                portland: -30,
                sanfransisco: -30,
                tokyo: -30,
                washington: -30,
                generic: -30,
                newyork: -30,
                berlin: -30,
                saopaulo: -30,
                atlanta: -30,
                shangai: -30,
                gurgaon: -30
            },
            citysight: [-1, 0, 0, 0, 0, .7270230650901794, .6866130232810974, 0, 0, .6866130232810974, -.7270230650901794, 0, 0, 601.7, -637.3, 1]
        }
    }
}), define("core/tasks", ["when", "underscore", "./errors", "./quality", "./progressor", "./hasDDS", "lib/log", "lib/emitter", "lib/gui", "lib/assembleCube", "engine/consts"], function (a, b, c, d, e, f, g, h, i, j, k) {
    var l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E;
    return n = k(), E = c.tasks, o = E.forcedFallback, x = E.no_webgl, w = E.no_options, s = E.no_container, r = E.no_city, u = E.no_msg, v = E.no_msg_prop, z = E.unknown_city, m = E.capabilities, A = E.unknown_renderer, t = E.no_hxr, l = null, D = null, p = function (a, b) {
        var c, d;
        return null == b && (b = ""), d = new RegExp("&?" + a + "=([^&]+)", "g"), c = d.exec(location.search), c ? c[1].replace(/%20|\+/g, " ") : b
    }, B = function (a) {
        return null != n.focusHeights[a]
    }, C = function (a, b) {
        return null == a && b.reject(u()), null == a.font && b.reject(v("font")), null == a.color && b.reject(v("color")), null == a.lineHeight ? b.reject(v("lineHeight")) : void 0
    }, q = function (a) {
        var b, c;
        return b = a.substr(0, a.length - 4), c = a.substr(-4), [b + "_05" + c, b + "_03" + c, b + "_01" + c, b + "_07" + c, b + "_04" + c, b + "_10" + c]
    }, y = {
        status: function (b) {
            var c;
            return c = a.defer(), setTimeout(function () {
                return c.notify(b), c.resolve()
            }, 1), c.promise
        }, getQuery: p, defer: function (c) {
            var d;
            return d = a.defer(), b.defer(d.resolve), d.promise["yield"](c)
        }, domReady: function (b) {
            var c, d;
            return c = a.defer(), d = document.readyState, ("complete" === d || "loaded" === d || "interactive" === d) && c.resolve(b), document.addEventListener("DOMContentLoaded", function () {
                return c.resolve(b)
            }), c.promise
        }, initLog: function (b) {
            var c;
            return c = function (a) {
                return null != a ? a : p("log")
            }, g.enable(c(b.options._log)), a(b)
        }, initGui: function (b) {
            var c, d;
            return c = function (a) {
                return null != a ? a : p("gui")
            }, d = c(b.options._gui), "" !== d ? y.loadModule("lib/dat-gui").then(function (a) {
                return i.setup(a), i.enable(d)
            })["yield"](b) : a(b)
        }, setQuality: function (b) {
            var c;
            return c = function (a) {
                return null != a ? a : parseInt(p("quality", 2))
            }, d.setQuality(c(b.options.quality)), a(b)
        }, setDevMode: function (b) {
            var c, d, e;
            return e = parseInt(p("dev", 0)), b.devMode = e ? !0 : !1, c = parseInt(p("noBBC", 0)), d = p("city", ""), 0 !== c && (b.options._noDDS = !0), "" !== d && (b.options.city = d), a(b)
        }, setDirect: function (b) {
            var c, d;
            return d = new RegExp("&?quality=([^&]+)", "g"), c = d.test(location.search), b.isDirect = function () {
                return c
            }, a(b)
        }, validate: function (b) {
            var c, d;
            return c = a.defer(), d = b.options, null == d && c.reject(w()), null == d.container && c.reject(s()), null == d.assetsDir && c.reject(no_assets()), null == d.city && c.reject(r()), B(d.city) || c.reject(z(d.city)), C(d.message, c), c.resolve(b), c.promise
        }, forceFallback: function (b) {
            return b.options._fallback === !0 ? a.reject(o()) : a.resolve(b)
        }, capabilities: function (b) {
            var c, e, g;
            return b._supportS3TC = !1, console.log("DDS: " + f.dds), console.log("PVR: " + f.pvr), c = b.options._pratio || window.devicePixelRatio, null == c && (c = 1), b.devicePixelRatio = function () {
                return c
            }, b.hdpi = function () {
                return c > 1.5
            }, b.halfDpi = function () {
                return b.hdpi && d.param("half_dpi")
            }, b.useDDS = function () {
                return b._supportS3TC && !b.options._noDDS && f.dds
            }, b.usePVR = function () {
                return b._supportPVRTC && !b.options._noDDS && f.pvr
            }, e = document.createElement("canvas"), g = e.getContext("webgl") || e.getContext("experimental-webgl"), null == g ? a.reject(x()) : a(b)
        }, inputFeatures: function (b) {
            return b.inputType = function () {
                return window.navigator.msPointerEnabled ? "msPointer" : "none"
            }(), a(b)
        }, setupAnimator: function (b) {
            return function () {
                var a, c, d;
                return d = [], c = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (a) {
                        return window.setTimeout(a, 1e3 / 60)
                    }, a = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.clearTimeout, b.options._framerate && (c = function (a) {
                    return window.setTimeout(a, 1e3 / b.options._framerate)
                }), b.requestAnimationFrame = function (a) {
                    return c.call(window, a)
                }, b.cancelAnimationFrame = function (b) {
                    return a.call(window, b)
                }
            }(), a(b)
        }, setupFraming: function (b) {
            var c, d, e;
            return d = "undefined" != typeof performance && null !== performance ? function () {
                return performance.now()
            } : function () {
                return Date.now()
            }, e = d(), (c = function () {
                var a, f;
                return f = d(), a = (f - e) / 1e3, b.dt = a > .2 ? 1 / 60 : a, e = f, b.requestAnimationFrame(c)
            })(), a(b)
        }, setupFocus: function (b) {
            var c;
            return c = window.document.hasFocus(), window.addEventListener("focus", function () {
                return c = !0, b.emit("focus", !0), b._checkPause()
            }), window.addEventListener("blur", function () {
                return c = !1, b.emit("focus", !1), b._checkPause()
            }), b.hasFocus = function () {
                return c
            }, a(b)
        }, normalizeAudio: function (b) {
            return window.AudioContext = window.AudioContext || window.webkitAudioContext, a(b)
        }, normalizeFullscreen: function (b) {
            var c;
            return b._isFullScreen = !1, document.exitFullscreen = function () {
                return document.exitFullscreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || function () {
                        return console.log("fullscreen not available")
                    }
            }(), c = document.documentElement, c.requestFullscreen = function () {
                return c.requestFullscreen || c.webkitRequestFullscreen || c.mozRequestFullScreen || function () {
                        return console.log("fullscreen not available")
                    }
            }(), b.enterFs = function () {
                return c.requestFullscreen()
            }, b.exitFs = function () {
                return document.exitFullscreen()
            }, a(b)
        }, configure: function (c) {
            var g, i, j, k, l, m, n, o, p, q, r, t, u;
            return h(c), j = a.defer(), l = c.options, u = l.duration || 60, m = !1, t = !1, k = !1, i = l.crossOrigin || null, n = d.param("assets_path"), o = function (a) {
                return "" + l.assetsDir + "/" + a
            }, r = function (a) {
                return "" + l.assetsDir + "/" + n + "/" + a
            }, q = function (a) {
                return "" + l.city + "/" + a
            }, p = function (a) {
                return c._supportS3TC && f.dds ? a + ".dds" : c._supportPVRTC && f.pvr ? a + ".pvr" : a
            }, c.getLocal = function () {
                return l.local
            }, c.resolveAsset = o, c.resolveQAsset = r, c.resolveCity = q, c.progressor = new e, c.addLoadable = function (a) {
                return c.progressor.addLoadable(a)
            }, c.resolveLocalized = function (a) {
                return "" + l.assetsDir + "/i18n/" + l.local + "/" + a
            }, c.crossOrigin = function () {
                return i
            }, c.toggleSound = function () {
                return k = !k, c.emit("toggleSound", !k)
            }, c.muted = function () {
                return k
            }, c.setCity = function (a) {
                return c.options.city !== a ? (c.options.city = a, c.emit("city-change", a)) : void 0
            }, c.setMessage = function (a) {
                return a = b.defaults(a, c.options.message), c.options.message = a, c.emit("message-change", a)
            }, c.toggleFullscreen = function () {
                return c._isFullScreen ? c.exitFs() : c.enterFs(), c._isFullScreen = !c._isFullScreen
            }, c.xpDuration = function () {
                return 1e3 * u
            }, c._checkPause = function () {
                return !c.hasFocus() || t ? c._pause() : c.hasFocus() || !t ? c._resume() : void 0
            }, c._pause = function () {
                return m ? void 0 : (m = !0, c.emit("pause", !0))
            }, c._resume = function () {
                return m ? (m = !1, c.emit("pause", !1)) : void 0
            }, c.pause = function () {
                return t = !0, c._checkPause()
            }, c.resume = function () {
                return t = !1, c._checkPause()
            }, c.paused = function () {
                return m
            }, c.loadTexture = function (a) {
                return a = r(a), a = p(a), y.loadTexture(c, a)
            }, c.loadCube = function (a) {
                return a = r(a), a = p(a), y.loadCube(c, a)
            }, c.loadImage = function (a) {
                return a = r(a), y.loadImage(c, a)
            }, g = l.container, "string" == typeof g && (g = document.getElementById(g)), null == g && j.reject(s()), c.getWrapper = function () {
                return g
            }, j.resolve(c), j.promise
        }, loadEngine: function (a) {
            var b;
            return b = y.loadModule("engine").then(function (b) {
                return a.engineClass = b, l = b.THREE
            })["yield"](a), a.addLoadable(b), b
        }, finalize: function (b) {
            return a(b)
        }, ajax: function (b) {
            var c, d, e;
            return c = a.defer(), null == D && c.reject(t()), e = b.success, b.success = function (a) {
                return "function" == typeof e && e(a), c.resolve(a)
            }, d = b.error, b.error = function (a, b, e) {
                return "function" == typeof d && d(b, e), c.reject(e)
            }, D(b), c.promise
        }, loadJson: function (a, b) {
            return y.ajax({url: a, dataType: "text"}).then(function (a) {
                return JSON.parse(a, b)
            })
        }, loadBytes: function (b, c) {
            var d, e;
            return null == c && (c = "GET"), d = a.defer(), e = new XMLHttpRequest, e.open(c, b, !0), e.responseType = "arraybuffer", e.onload = function () {
                return d.resolve(e.response)
            }, e.error = function (a) {
                return d.reject(a)
            }, e.send(), d.promise
        }, loadModule: function (b) {
            var c;
            return c = a.defer(), require([b], function (a) {
                return c.resolve(a)
            }, function (a) {
                return c.reject(a)
            }), c.promise
        }, loadImage: function (b, c) {
            var d, e;
            return d = a.defer(), e = document.createElement("img"), e.onload = function () {
                return d.resolve(e)
            }, e.onerror = function (a) {
                return d.reject(a)
            }, e.src = c, b.addLoadable(d.promise), d.promise
        }, loadTexture: function (b, c) {
            var d, e, f;
            return e = c.substr(-3), "dds" === e ? y.loadDDS(b, c) : "pvr" === e ? y.loadPVR(b, c) : (d = a.defer(), f = new l.TextureLoader, f.crossOrigin = b.crossOrigin(), f.load(c, d.resolve, d.notify, d.reject), b.addLoadable(d.promise), d.promise)
        }, loadCube: function (c, d) {
            var e, f, g, h;
            return e = d.substr(-3), "dds" === e || "pvr" === e ? y.loadCompressedCube(c, d) : (h = q(d), f = function (a) {
                return y.loadImage(c, a)
            }, g = b.map(h, f), a.all(g).then(function (a) {
                var b;
                return b = new l.CubeTexture, b.image = a, b.images = a, b.needsUpdate = !0, b.flipY = !1, b
            }))
        }, loadDDS: function (a, b) {
            return y.loadCompressed(a, b, "dds")
        }, loadPVR: function (a, b) {
            return y.loadCompressed(a, b, "pvr")
        }, loadCompressedCube: function (c, d) {
            var e, f, g, h, i;
            return e = d.substr(-3), "dds" === e ? f = function (a) {
                return y.loadDDS(c, a)
            } : "pvr" === e && (f = function (a) {
                return y.loadPVR(c, a)
            }), d = d.substr(0, d.length - 4), i = q(d), console.log("[tasks.loadCompressedCube]", i), i = function () {
                var a, b, c;
                for (c = [], a = 0, b = i.length; b > a; a++)h = i[a], c.push(h + "." + e);
                return c
            }(), g = b.map(i, f), a.all(g).then(function (a) {
                return j(a, l)
            })
        }, loadCompressed: function (b, c, d) {
            var e, f;
            return e = a.defer(), f = "dds" === d ? new l.DDSLoader : new l.PVRLoader, f.load(c, e.resolve, e.reject), b.addLoadable(e.promise), e.promise
        }
    }
}), define("core/bootstrap", ["./tasks", "when", "lib/log"], function (a, b, c) {
    var d, e, f;
    return d = c("bootstrap"), f = function (b) {
        return a.status("bootstrap.complete")["yield"](b)
    }, e = ["defer", "domReady", "initLog", "initGui", "setQuality", "setDevMode", "setDirect", "validate", "forceFallback", "capabilities", "inputFeatures", "setupAnimator", "setupFraming", "setupFocus", "normalizeAudio", "normalizeFullscreen", "configure", "finalize"], function (c) {
        return b.reduce(e, function (b, c) {
            return d(c), a[c](b)
        }, c)
    }
}), define("core/notifications", ["when"], function (a) {
    var b, c, d, e, f;
    return b = null, f = [], c = function () {
        var a, c, d, e;
        for (e = [], c = 0, d = f.length; d > c; c++)a = f[c], e.push(b.notify(a));
        return e
    }, d = function () {
        return null != b && b.reject(), b = a.defer(), setTimeout(c, 1), b.promise
    }, e = function (a, c) {
        return a = {code: a, data: c}, null != b ? b.notify(a) : f.push(a)
    }, {pipe: d, send: e}
});
var __bind = function (a, b) {
    return function () {
        return a.apply(b, arguments)
    }
};
define("app", ["when", "core/bootstrap", "core/tasks", "core/errors", "core/notifications"], function (a, b, c, d, e) {
    var f;
    return f = function () {
        function f() {
            this.recover = __bind(this.recover, this), this.onReady = __bind(this.onReady, this), this.initEngine = __bind(this.initEngine, this), this.run = __bind(this.run, this), this.ctx = null, this.engine = null, this.views = null, this.enginep = null
        }

        return f.prototype.initialize = function (a) {
            return this.ctx = {options: a}, b(this.ctx).then(this.run).then(e.pipe).otherwise(this.recover)
        }, f.prototype.intro = function () {
            return this.engine.intro()
        }, f.prototype.citySight = function (a) {
            return this.engine.citySight(a)
        }, f.prototype.setCity = function (a) {
            return this.ctx.setCity(a)
        }, f.prototype.setMessage = function (a) {
            return this.ctx.setMessage(a)
        }, f.prototype.run = function () {
            return c.loadEngine(this.ctx).then(this.initEngine).then(this.onReady)
        }, f.prototype.initEngine = function () {
            return this.ctx.progressor.reset(), this.engine = new this.ctx.engineClass, this.engine.initialize(this.ctx), this.ctx.progressor.start()
        }, f.prototype.onReady = function () {
            return e.send("ready"), this.engine.play()
        }, f.prototype.dispose = function () {
        }, f.prototype.recover = function (b) {
            return this.dispose(), b = d.normalize(b), console.log(b.stack), b.code >= 500 ? a.reject(b) : a(b)
        }, f
    }()
}), require.config({shim: {three: {exports: "THREE"}}}), require(["app"], function () {
}), define("main", function () {
});
