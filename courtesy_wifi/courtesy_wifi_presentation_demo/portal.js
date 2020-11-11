module.exports = function (e) {
    var t = {};
    function r(n) {
        if (t[n])
            return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r),
        o.l = !0,
        o.exports
    }
    return r.m = e,
    r.c = t,
    r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    },
    r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e)
                r.d(n, o, function (t) {
                    return e[t]
                }
                    .bind(null, o));
        return n
    },
    r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        }
         : function () {
            return e
        };
        return r.d(t, "a", t),
        t
    },
    r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    r.p = "./",
    r(r.s = 10)
}
([function (e, t) {
            e.exports = require("util")
        }, function (e, t) {
            e.exports = require("https")
        }, function (e, t) {
            e.exports = require("url")
        }, function (e, t) {
            e.exports = require("http")
        }, function (e, t, r) {
            var n = t,
            o = r(2),
            s = r(0)._extend,
            i = r(18),
            a = /(^|,)\s*upgrade\s*($|,)/i,
            c = /^https|wss/;
            n.isSSL = c,
            n.setupOutgoing = function (e, t, r, u) {
                e.port = t[u || "target"].port || (c.test(t[u || "target"].protocol) ? 443 : 80),
                ["host", "hostname", "socketPath", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "secureProtocol"].forEach((function (r) {
                        e[r] = t[u || "target"][r]
                    })),
                e.method = t.method || r.method,
                e.headers = s({}, r.headers),
                t.headers && s(e.headers, t.headers),
                t.auth && (e.auth = t.auth),
                t.ca && (e.ca = t.ca),
                c.test(t[u || "target"].protocol) && (e.rejectUnauthorized = void 0 === t.secure || t.secure),
                e.agent = t.agent || !1,
                e.localAddress = t.localAddress,
                e.agent || (e.headers = e.headers || {}, "string" == typeof e.headers.connection && a.test(e.headers.connection) || (e.headers.connection = "close"));
                var f = t[u || "target"],
                h = f && !1 !== t.prependPath && f.path || "",
                p = t.toProxy ? r.url : o.parse(r.url).path || "";
                return p = t.ignorePath ? "" : p,
                e.path = n.urlJoin(h, p),
                t.changeOrigin && (e.headers.host = i(e.port, t[u || "target"].protocol) && !~e.host.indexOf(":") ? e.host + ":" + e.port : e.host),
                e
            },
            n.setupSocket = function (e) {
                return e.setTimeout(0),
                e.setNoDelay(!0),
                e.setKeepAlive(!0, 0),
                e
            },
            n.getPort = function (e) {
				console.log("GET PORT &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
                var t = e.headers.host ? e.headers.host.match(/:(\d+)/) : "";
                return t ? t[1] : n.hasEncryptedConnection(e) ? "443" : "80"
            },
            n.hasEncryptedConnection = function (e) {
                return Boolean(e.connection.encrypted || e.connection.pair)
            },
            n.urlJoin = function () {
                var e,
                t = Array.prototype.slice.call(arguments),
                r = t.length - 1,
                n = t[r],
                o = n.split("?");
                return t[r] = o.shift(),
                (e = [t.filter(Boolean).join("/").replace(/\/+/g, "/").replace("http:/", "http://").replace("https:/", "https://")]).push.apply(e, o),
                e.join("?")
            },
            n.rewriteCookieProperty = function e(t, r, n) {
                return Array.isArray(t) ? t.map((function (t) {
                        return e(t, r, n)
                    })) : t.replace(new RegExp("(;\\s*" + n + "=)([^;]+)", "i"), (function (e, t, n) {
                        var o;
                        if (n in r)
                            o = r[n];
                        else {
                            if (!("*" in r))
                                return e;
                            o = r["*"]
                        }
                        return o ? t + o : ""
                    }))
            }
        }, function (e, t, r) {
            r(0);
            e.exports = {
                type: function (e) {
                    return "string" == typeof e ? c(e) : a(e)
                },
                class: function (e) {
                    return "string" == typeof e ? f(e) : u(e)
                },
                type_to_label: a,
                type_to_number: c,
                class_to_label: u,
                class_to_number: f,
                transpose: h,
                mk_type_labels: p
            };
            var n = p(),
            o = function () {
                var e = {
                    0: "reserved",
                    1: "IN",
                    2: null,
                    3: "CH",
                    4: "HS",
                    254: "NONE",
                    255: "*",
                    65535: "reserved"
                };
                [[5, 253], [256, 65279]].forEach((function (t) {
                        for (var r = t[0], n = t[1], o = r; o <= n; o++)
                            e[o] = null
                    }));
                for (var t = 65280; t <= 65534; t++)
                    e[t] = "Private use";
                return e
            }
            (),
            s = h(n),
            i = h(o);
            function a(e) {
                if (isNaN(e) || "number" != typeof e || e < 1 || e > 65535)
                    throw new Error("Invalid record type: " + e);
                return n[e]
            }
            function c(e) {
                if ("string" != typeof e)
                    throw new Error("Type must be string: " + e);
                var t = s[e];
                if (t)
                    return t;
                throw new Error("No such type label: " + e)
            }
            function u(e) {
                if (isNaN(e) || "number" != typeof e || e < 1 || e > 65535)
                    throw new Error("Invalid record class: " + e);
                return o[e]
            }
            function f(e) {
                if ("string" != typeof e)
                    throw new Error("Type must be string: " + e);
                var t = i[e];
                if (t)
                    return t;
                throw new Error("No such clas label: " + e)
            }
            function h(e) {
                var t = {};
                return Object.keys(e).forEach((function (r) {
                        var n = e[r];
                        "string" == typeof n && (t[n] = +r)
                    })),
                t
            }
            function p() {
                var e = {
                    0: null,
                    1: "A",
                    2: "NS",
                    3: "MD",
                    4: "MF",
                    5: "CNAME",
                    6: "SOA",
                    7: "MB",
                    8: "MG",
                    9: "MR",
                    10: "NULL",
                    11: "WKS",
                    12: "PTR",
                    13: "HINFO",
                    14: "MINFO",
                    15: "MX",
                    16: "TXT",
                    17: "RP",
                    18: "AFSDB",
                    19: "X25",
                    20: "ISDN",
                    21: "RT",
                    22: "NSAP",
                    23: "NSAP-PTR",
                    24: "SIG",
                    25: "KEY",
                    26: "PX",
                    27: "GPOS",
                    28: "AAAA",
                    29: "LOC",
                    30: "NXT",
                    31: "EID",
                    32: "NIMLOC",
                    33: "SRV",
                    34: "ATMA",
                    35: "NAPTR",
                    36: "KX",
                    37: "CERT",
                    38: "A6",
                    39: "DNAME",
                    40: "SINK",
                    41: "OPT",
                    42: "APL",
                    43: "DS",
                    44: "SSHFP",
                    45: "IPSECKEY",
                    46: "RRSIG",
                    47: "NSEC",
                    48: "DNSKEY",
                    49: "DHCID",
                    50: "NSEC3",
                    51: "NSEC3PARAM",
                    52: "TLSA",
                    55: "HIP",
                    56: "NINFO",
                    57: "RKEY",
                    58: "TALINK",
                    59: "CDS",
                    99: "SPF",
                    100: "UINFO",
                    101: "UID",
                    102: "GID",
                    103: "UNSPEC",
                    104: "NID",
                    105: "L32",
                    106: "L64",
                    107: "LP",
                    249: "TKEY",
                    250: "TSIG",
                    251: "IXFR",
                    252: "AXFR",
                    253: "MAILB",
                    254: "MAILA",
                    255: "*",
                    256: "URI",
                    257: "CAA",
                    32768: "TA",
                    32769: "DLV",
                    65535: "Reserved"
                };
                [[53, 54], [60, 98], [108, 248], [258, 32767], [32770, 65279]].forEach((function (t) {
                        for (var r = t[0], n = t[1], o = r; o <= n; o++)
                            e[o] = null
                    }));
                for (var t = 65280; t <= 65534; t++)
                    e[t] = "Private use";
                return e
            }
        }, function (e, t, r) {
            e.exports = function (e) {
                function t(e) {
                    let t = 0;
                    for (let r = 0; r < e.length; r++)
                        t = (t << 5) - t + e.charCodeAt(r), t |= 0;
                    return n.colors[Math.abs(t) % n.colors.length]
                }
                function n(e) {
                    let r;
                    function i(...e) {
                        if (!i.enabled)
                            return;
                        const t = i,
                        o = Number(new Date),
                        s = o - (r || o);
                        t.diff = s,
                        t.prev = r,
                        t.curr = o,
                        r = o,
                        e[0] = n.coerce(e[0]),
                        "string" != typeof e[0] && e.unshift("%O");
                        let a = 0;
                        e[0] = e[0].replace(/%([a-zA-Z%])/g, (r, o) => {
                            if ("%%" === r)
                                return r;
                            a++;
                            const s = n.formatters[o];
                            if ("function" == typeof s) {
                                const n = e[a];
                                r = s.call(t, n),
                                e.splice(a, 1),
                                a--
                            }
                            return r
                        }),
                        n.formatArgs.call(t, e);
                        (t.log || n.log).apply(t, e)
                    }
                    return i.namespace = e,
                    i.enabled = n.enabled(e),
                    i.useColors = n.useColors(),
                    i.color = t(e),
                    i.destroy = o,
                    i.extend = s,
                    "function" == typeof n.init && n.init(i),
                    n.instances.push(i),
                    i
                }
                function o() {
                    const e = n.instances.indexOf(this);
                    return -1 !== e && (n.instances.splice(e, 1), !0)
                }
                function s(e, t) {
                    const r = n(this.namespace + (void 0 === t ? ":" : t) + e);
                    return r.log = this.log,
                    r
                }
                function i(e) {
                    return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
                }
                return n.debug = n,
                n.default = n,
                n.coerce = function (e) {
                    if (e instanceof Error)
                        return e.stack || e.message;
                    return e
                },
                n.disable = function () {
                    const e = [...n.names.map(i), ...n.skips.map(i).map(e => "-" + e)].join(",");
                    return n.enable(""),
                    e
                },
                n.enable = function (e) {
                    let t;
                    n.save(e),
                    n.names = [],
                    n.skips = [];
                    const r = ("string" == typeof e ? e : "").split(/[\s,]+/),
                    o = r.length;
                    for (t = 0; t < o; t++)
                        r[t] && ("-" === (e = r[t].replace(/\*/g, ".*?"))[0] ? n.skips.push(new RegExp("^" + e.substr(1) + "$")) : n.names.push(new RegExp("^" + e + "$")));
                    for (t = 0; t < n.instances.length; t++) {
                        const e = n.instances[t];
                        e.enabled = n.enabled(e.namespace)
                    }
                },
                n.enabled = function (e) {
                    if ("*" === e[e.length - 1])
                        return !0;
                    let t,
                    r;
                    for (t = 0, r = n.skips.length; t < r; t++)
                        if (n.skips[t].test(e))
                            return !1;
                    for (t = 0, r = n.names.length; t < r; t++)
                        if (n.names[t].test(e))
                            return !0;
                    return !1
                },
                n.humanize = r(25),
                Object.keys(e).forEach(t => {
                    n[t] = e[t]
                }),
                n.instances = [],
                n.names = [],
                n.skips = [],
                n.formatters = {},
                n.selectColor = t,
                n.enable(n.load()),
                n
            }
        }, function (e, t) {
            e.exports = require("tty")
        }, function (e, t) {
            e.exports = require("os")
        }, function (e, t, r) {
            var n = r(0),
            o = r(31),
            s = r(32),
            i = r(5);
            e.exports = c;
            var a = ["question", "answer", "authority", "additional"];
            function c(e) {
                var t = this;
                if (this.id = null, this.type = null, this.responseCode = null, this.opcode = null, this.authoritative = null, this.truncated = null, this.recursion_desired = null, this.recursion_available = null, this.authenticated = null, this.checking_disabled = null, Buffer.isBuffer(e))
                    this.parse(e);
                else {
                    if ("object" != typeof e)
                        throw new Error("Must provide a buffer or object argument with message contents");
                    Object.keys(e).forEach((function (r) {
                            t[r] = e[r]
                        })),
                    a.forEach((function (e) {
                            t[e] && t[e].forEach((function (r, n) {
                                    t[e][n] = new u(r)
                                }))
                        }))
                }
                a.forEach((function (e) {
                        t[e] && (t[e] = t[e].filter((function (e) {
                                        return !e.edns
                                    })), 0 == t[e].length && delete t[e])
                    }))
            }
            function u(e, t, r, n) {
                var o = this;
                if (this.name = null, this.type = null, this.class = null, Buffer.isBuffer(e))
                    this.parse(e, t, r, n || e);
                else {
                    if ("object" != typeof e)
                        throw new Error("Must provide a buffer or object argument with message contents");
                    Object.keys(e).forEach((function (t) {
                            o[t] = e[t]
                        }))
                }
            }
            function f(e, t) {
                t = "" + t;
                do {
                    var r = e - t.length;
                    r > 0 && (t = " " + t)
                } while (r > 0);
                return t
            }
            c.prototype.parse = function (e) {
                var t = this;
                t.id = o.id(e);
                var r = o.qr(e);
                t.type = 0 == r ? "request" : "response",
                t.responseCode = o.rcode(e);
                var n = o.opcode(e);
                t.opcode = ["query", "iquery", "status", null, "notify", "update"][n] || null,
                t.authoritative = !!o.aa(e),
                t.truncated = !!o.tc(e),
                t.recursion_desired = !!o.rd(e),
                t.recursion_available = !!o.ra(e),
                t.authenticated = !!o.ad(e),
                t.checking_disabled = !!o.cd(e);
                var s = o.sections(e);
                a.forEach((function (r) {
                        var n = o.record_count(e, r);
                        if (n) {
                            t[r] = [];
                            for (var i = 0; i < n; i++)
                                t[r].push(new u(e, r, i, s))
                        }
                    }))
            },
            c.prototype.toBinary = function () {
                var e = JSON.parse(JSON.stringify(this));
                a.forEach((function (t) {
                        "question" != t && (e[t] = e[t] || [], e[t].forEach((function (e) {
                                    "IN" == e.class && ("IN" == e.class && "A" == e.type && (e.data = e.data || "0.0.0.0"), "IN" == e.class && "SOA" == e.type && (e.data.rname = e.data.rname.replace(/@/g, ".")), "TXT" == e.type && "string" == typeof e.data && (e.data = [e.data]))
                                })))
                    }));
                var t = new s.State;
                return t.message(e),
                t.toBinary()
            },
            c.prototype.toString = function () {
                var e = this,
                t = [n.format("ID                 : %d", e.id), n.format("Type               : %s", e.type), n.format("Opcode             : %s", e.opcode), n.format("Authoritative      : %s", e.authoritative), n.format("Truncated          : %s", e.truncated), n.format("Recursion Desired  : %s", e.recursion_desired), n.format("Recursion Available: %s", e.recursion_available), n.format("Response Code      : %d", e.responseCode)];
                return a.forEach((function (r) {
                        e[r] && (t.push(n.format(";; %s SECTION:", r.toUpperCase())), e[r].forEach((function (e) {
                                    t.push(e.toString())
                                })))
                    })),
                t.join("\n")
            },
            u.prototype.parse = function (e, t, r, n) {
                this.name = o.record_name(n, t, r);
                var s = o.record_type(n, t, r);
                if (this.type = i.type_to_label(s), !this.type)
                    throw new Error("Record " + r + ' in section "' + t + '" has unknown type: ' + s);
                if ("additional" != t || "OPT" != this.type || "" != this.name) {
                    var a = o.record_class(n, t, r);
                    if (this.class = i.class_to_label(a), !this.class)
                        throw new Error("Record " + r + ' in section "' + t + '" has unknown class: ' + s);
                    if ("question" == t)
                        return;
                    this.ttl = o.record_ttl(n, t, r)
                } else
                    this.edns = !0, delete this.name, delete this.class;
                var c,
                u = o.record_data(n, t, r);
                switch (this.kind()) {
                case "IN A":
                    if (4 != u.length)
                        throw new Error("Bad IN A data: " + JSON.stringify(this));
                    this.data = (c = u)[0] + "." + c[1] + "." + c[2] + "." + c[3];
                    break;
                case "IN AAAA":
                    if (16 != u.length)
                        throw new Error("Bad IN AAAA data: " + JSON.stringify(this));
                    this.data = function (e) {
                        for (var t = [], r = 0; r < 16; r += 2)
                            t.push(e.slice(r, r + 2).toString("hex"));
                        return t.join(":")
                    }
                    (u);
                    break;
                case "IN NS":
                case "IN CNAME":
                case "IN PTR":
                    this.data = o.uncompress(e, u);
                    break;
                case "IN TXT":
                    this.data = o.txt(e, u),
                    0 === this.data.length ? this.data = "" : 1 === this.data.length && (this.data = this.data[0]);
                    break;
                case "IN MX":
                    this.data = o.mx(e, u);
                    break;
                case "IN SRV":
                    this.data = o.srv(e, u);
                    break;
                case "IN SOA":
                    this.data = o.soa(e, u),
                    this.data.rname = this.data.rname.replace(/\./, "@");
                    break;
                case "IN DS":
                    this.data = {
                        key_tag: u[0] << 8 | u[1],
                        algorithm: u[2],
                        digest_type: u[3],
                        digest: u.slice(4).toJSON()
                    };
                    break;
                case "NONE A":
                    this.data = [];
                    break;
                case "EDNS":
                    this.data = u;
                    break;
                default:
                    throw new Error("Unknown record " + this.kind() + ": " + JSON.stringify(this))
                }
            },
            u.prototype.kind = function () {
                return this.edns ? "EDNS" : this.class + " " + this.type
            },
            u.prototype.toString = function () {
                return [f(23, this.name), f(7, this.ttl || ""), f(7, this.class), f(7, this.type), "MX" == this.type && this.data ? f(3, this.data[0]) + " " + this.data[1] : Buffer.isBuffer(this.data) ? this.data.toString("hex") : this.data || ""].join(" ")
            }
        }, function (e, t, r) {
            var n = r(11);
            const o = r(1),
            s = r(12).createProxyServer({}),
            i = r(30),
            a = r(8),
            c = r(38);
            console.log("**************CHK**************"),
            console.log(Object({
                    NODE_ENV: "development"
                })),
            console.log("https"),
            console.log("https"),
            console.log("true"),
            console.log("**************CHK**************");
            var u = new BSDatagramSocket;
            u.BindLocalPort(5900);
            var f = "brightsign.biz",
            h = "https://" + f.toLowerCase(),
            p = !1;
            function d() {
                let e = {
                    key: c.readFileSync("/storage/sd/node/private.key"),
                    cert: c.readFileSync("/storage/sd/node/certificate.crt")
                };
                o.createServer(e, (function (e, t) {
                        console.log("requested: " + e.headers.host + e.url);
                        var r = e.url.split("/");
                        console.log(r[1]),
                        "admin" === r[1] || "submit" === r[1] || "update" === r[1] || "updatepassword" === r[1] || r[1].includes("deletefile") || "allUploads" === r[1] || "resetdwspassword" === r[1] || "forgotpassword" === r[1] || "ispasswordreset" === r[1] || "static" === r[1] || "uploads" === r[1] ? (console.log(e.url), s.web(e, t, {
                                target: "http://localhost:8000"
                            })) : (s.web(e, t, {
                                target: "http://localhost:8000"
                            }), "SetValues" === r[1] && setTimeout((function () {
                                    console.log("Sending UDP for reboot"),
                                    u.SendTo("127.0.0.1", 5901, "httpserver!!reboot")
                                }), 2e3))
                    })).listen(443, () => {
                    console.log("Waiting for requests...")
                })
            }
            console.log("index.js version: 1.0.7"),
            u.ondatagram = function (e) {
                console.log("ondatagram"),
                console.log(e);
                var t = e.getBytes(),
                r = new Int8Array(t),
                n = String.fromCharCode.apply(null, r);
                console.log("udpMessage: " + n);
                var o = n.split("!!");
                "hostname" === o[0] && (f = o[1].toLowerCase(), h = "https://" + f.toLowerCase(), p = !0, console.log("redirectUrl: " + h), d())
            },
            setTimeout((function () {
                    p || (d(), p = !0, console.log("Failed to receive udp with custom hostname. Starting http server with hostname " + h))
                }), 2e4),
            console.log("rec DNS"),
            i.createServer((function (e, t) {
                    var r = t.question[0],
                    o = r.name,
                    s = Math.floor(3600 * Math.random());
                    r.type;
                    o === f || -1 !== o.indexOf(f) ? (t.answer.push({
                            name: o,
                            type: r.type,
                            data: a.networkInterfaces().wlan0[0].address,
                            ttl: s
                        }), t.end()) : n.lookup(o, (function (e, n) {
                            e ? t.end() : n && (t.answer.push({
                                    name: o,
                                    type: r.type,
                                    data: n,
                                    ttl: s
                                }), t.end())
                        }))
                })).zone("example.com", "ns1.example.com", "us@example.com", "now", "2h", "30m", "2w", "10m").listen(53, "0.0.0.0"),
            console.log("DNS Server running at 0.0.0.0:53")
        }, function (e, t) {
            e.exports = require("dns")
        }, function (e, t, r) {
            /*!
             * Caron dimonio, con occhi di bragia
             * loro accennando, tutte le raccoglie;
             * batte col remo qualunque s’adagia
             *
             * Charon the demon, with the eyes of glede,
             * Beckoning to them, collects them all together,
             * Beats with his oar whoever lags behind
             *
             *          Dante - The Divine Comedy (Canto III)
             */
            e.exports = r(13)
        }, function (e, t, r) {
            var n = r(14).Server;
            function o(e) {
                return new n(e)
            }
            n.createProxyServer = o,
            n.createServer = o,
            n.createProxy = o,
            e.exports = n
        }, function (e, t, r) {
            var n = e.exports,
            o = r(0)._extend,
            s = r(2).parse,
            i = r(15),
            a = r(3),
            c = r(1),
            u = r(16),
            f = r(29);
            function h(e) {
                return function (t) {
                    return function (r, n) {
                        var i,
                        a,
                        c = "ws" === e ? this.wsPasses : this.webPasses,
                        u = [].slice.call(arguments),
                        f = u.length - 1;
                        "function" == typeof u[f] && (a = u[f], f--);
                        var h = t;
                        if (u[f]instanceof Buffer || u[f] === n || (h = o({}, t), o(h, u[f]), f--), u[f]instanceof Buffer && (i = u[f]), ["target", "forward"].forEach((function (e) {
                                    "string" == typeof h[e] && (h[e] = s(h[e]))
                                })), !h.target && !h.forward)
                            return this.emit("error", new Error("Must provide a proper URL as target"));
                        for (var p = 0; p < c.length && !c[p](r, n, h, i, this, a); p++);
                    }
                }
            }
            function p(e) {
                i.call(this),
                (e = e || {}).prependPath = !1 !== e.prependPath,
                this.web = this.proxyRequest = h("web")(e),
                this.ws = this.proxyWebsocketRequest = h("ws")(e),
                this.options = e,
                this.webPasses = Object.keys(u).map((function (e) {
                            return u[e]
                        })),
                this.wsPasses = Object.keys(f).map((function (e) {
                            return f[e]
                        })),
                this.on("error", this.onError, this)
            }
            n.Server = p,
            n.createRightProxy = h,
            r(0).inherits(p, i),
            p.prototype.onError = function (e) {
                if (1 === this.listeners("error").length)
                    throw e
            },
            p.prototype.listen = function (e, t) {
                var r = this,
                n = function (e, t) {
                    r.web(e, t)
                };
                return this._server = this.options.ssl ? c.createServer(this.options.ssl, n) : a.createServer(n),
                this.options.ws && this._server.on("upgrade", (function (e, t, n) {
                        r.ws(e, t, n)
                    })),
                this._server.listen(e, t),
                this
            },
            p.prototype.close = function (e) {
                var t = this;
                this._server && this._server.close((function () {
                        t._server = null,
                        e && e.apply(null, arguments)
                    }))
            },
            p.prototype.before = function (e, t, r) {
                if ("ws" !== e && "web" !== e)
                    throw new Error("type must be `web` or `ws`");
                var n = "ws" === e ? this.wsPasses : this.webPasses,
                o = !1;
                if (n.forEach((function (e, r) {
                            e.name === t && (o = r)
                        })), !1 === o)
                    throw new Error("No such pass");
                n.splice(o, 0, r)
            },
            p.prototype.after = function (e, t, r) {
                if ("ws" !== e && "web" !== e)
                    throw new Error("type must be `web` or `ws`");
                var n = "ws" === e ? this.wsPasses : this.webPasses,
                o = !1;
                if (n.forEach((function (e, r) {
                            e.name === t && (o = r)
                        })), !1 === o)
                    throw new Error("No such pass");
                n.splice(o++, 0, r)
            }
        }, function (e, t, r) {
            "use strict";
            var n = Object.prototype.hasOwnProperty,
            o = "~";
            function s() {}
            function i(e, t, r) {
                this.fn = e,
                this.context = t,
                this.once = r || !1
            }
            function a(e, t, r, n, s) {
                if ("function" != typeof r)
                    throw new TypeError("The listener must be a function");
                var a = new i(r, n || e, s),
                c = o ? o + t : t;
                return e._events[c] ? e._events[c].fn ? e._events[c] = [e._events[c], a] : e._events[c].push(a) : (e._events[c] = a, e._eventsCount++),
                e
            }
            function c(e, t) {
                0 == --e._eventsCount ? e._events = new s : delete e._events[t]
            }
            function u() {
                this._events = new s,
                this._eventsCount = 0
            }
            Object.create && (s.prototype = Object.create(null), (new s).__proto__ || (o = !1)),
            u.prototype.eventNames = function () {
                var e,
                t,
                r = [];
                if (0 === this._eventsCount)
                    return r;
                for (t in e = this._events)
                    n.call(e, t) && r.push(o ? t.slice(1) : t);
                return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r
            },
            u.prototype.listeners = function (e) {
                var t = o ? o + e : e,
                r = this._events[t];
                if (!r)
                    return [];
                if (r.fn)
                    return [r.fn];
                for (var n = 0, s = r.length, i = new Array(s); n < s; n++)
                    i[n] = r[n].fn;
                return i
            },
            u.prototype.listenerCount = function (e) {
                var t = o ? o + e : e,
                r = this._events[t];
                return r ? r.fn ? 1 : r.length : 0
            },
            u.prototype.emit = function (e, t, r, n, s, i) {
                var a = o ? o + e : e;
                if (!this._events[a])
                    return !1;
                var c,
                u,
                f = this._events[a],
                h = arguments.length;
                if (f.fn) {
                    switch (f.once && this.removeListener(e, f.fn, void 0, !0), h) {
                    case 1:
                        return f.fn.call(f.context),
                        !0;
                    case 2:
                        return f.fn.call(f.context, t),
                        !0;
                    case 3:
                        return f.fn.call(f.context, t, r),
                        !0;
                    case 4:
                        return f.fn.call(f.context, t, r, n),
                        !0;
                    case 5:
                        return f.fn.call(f.context, t, r, n, s),
                        !0;
                    case 6:
                        return f.fn.call(f.context, t, r, n, s, i),
                        !0
                    }
                    for (u = 1, c = new Array(h - 1); u < h; u++)
                        c[u - 1] = arguments[u];
                    f.fn.apply(f.context, c)
                } else {
                    var p,
                    d = f.length;
                    for (u = 0; u < d; u++)
                        switch (f[u].once && this.removeListener(e, f[u].fn, void 0, !0), h) {
                        case 1:
                            f[u].fn.call(f[u].context);
                            break;
                        case 2:
                            f[u].fn.call(f[u].context, t);
                            break;
                        case 3:
                            f[u].fn.call(f[u].context, t, r);
                            break;
                        case 4:
                            f[u].fn.call(f[u].context, t, r, n);
                            break;
                        default:
                            if (!c)
                                for (p = 1, c = new Array(h - 1); p < h; p++)
                                    c[p - 1] = arguments[p];
                            f[u].fn.apply(f[u].context, c)
                        }
                }
                return !0
            },
            u.prototype.on = function (e, t, r) {
                return a(this, e, t, r, !1)
            },
            u.prototype.once = function (e, t, r) {
                return a(this, e, t, r, !0)
            },
            u.prototype.removeListener = function (e, t, r, n) {
                var s = o ? o + e : e;
                if (!this._events[s])
                    return this;
                if (!t)
                    return c(this, s), this;
                var i = this._events[s];
                if (i.fn)
                    i.fn !== t || n && !i.once || r && i.context !== r || c(this, s);
                else {
                    for (var a = 0, u = [], f = i.length; a < f; a++)
                        (i[a].fn !== t || n && !i[a].once || r && i[a].context !== r) && u.push(i[a]);
                    u.length ? this._events[s] = 1 === u.length ? u[0] : u : c(this, s)
                }
                return this
            },
            u.prototype.removeAllListeners = function (e) {
                var t;
                return e ? (t = o ? o + e : e, this._events[t] && c(this, t)) : (this._events = new s, this._eventsCount = 0),
                this
            },
            u.prototype.off = u.prototype.removeListener,
            u.prototype.addListener = u.prototype.on,
            u.prefixed = o,
            u.EventEmitter = u,
            e.exports = u
        }, function (e, t, r) {
            var n = r(3),
            o = r(1),
            s = r(17),
            i = r(4),
            a = r(19);
            s = Object.keys(s).map((function (e) {
                        return s[e]
                    }));
            var c = {
                http: n,
                https: o
            };
            /*!
             * Array of passes.
             *
             * A `pass` is just a function that is executed on `req, res, options`
             * so that you can easily add new checks while still keeping the base
             * flexible.
             */
            e.exports = {
                deleteLength: function (e, t, r) {
                    "DELETE" !== e.method && "OPTIONS" !== e.method || e.headers["content-length"] || (e.headers["content-length"] = "0", delete e.headers["transfer-encoding"])
                },
                timeout: function (e, t, r) {
                    r.timeout && e.socket.setTimeout(r.timeout)
                },
                XHeaders: function (e, t, r) {
                    if (r.xfwd) {
                        var n = e.isSpdy || i.hasEncryptedConnection(e),
                        o = {
                            for : e.connection.remoteAddress || e.socket.remoteAddress, port: i.getPort(e) , proto: n ? "https" : "http"
                        };
                        ["for", "port", "proto"].forEach((function (t) {
                                e.headers["x-forwarded-" + t] = (e.headers["x-forwarded-" + t] || "") + (e.headers["x-forwarded-" + t] ? "," : "") + o[t]
                            })),
                        e.headers["x-forwarded-host"] = e.headers["x-forwarded-host"] || e.headers.host || ""
                    }
                },
                stream: function (e, t, r, n, o, u) {
                    o.emit("start", e, t, r.target || r.forward);
                    var f = r.followRedirects ? a : c,
                    h = f.http,
                    p = f.https;
                    if (r.forward) {
                        var d = ("https:" === r.forward.protocol ? p : h).request(i.setupOutgoing(r.ssl || {}, r, e, "forward")),
                        l = g(d, r.forward);
                        if (e.on("error", l), d.on("error", l), (r.buffer || e).pipe(d), !r.target)
                            return t.end()
                    }
                    var m = ("https:" === r.target.protocol ? p : h).request(i.setupOutgoing(r.ssl || {}, r, e));
                    m.on("socket", (function (n) {
                            o && !m.getHeader("expect") && o.emit("proxyReq", m, e, t, r)
                        })),
                    r.proxyTimeout && m.setTimeout(r.proxyTimeout, (function () {
                            m.abort()
                        })),
                    e.on("aborted", (function () {
                            m.abort()
                        }));
                    var y = g(m, r.target);
                    function g(r, n) {
                        return function (s) {
                            if (e.socket.destroyed && "ECONNRESET" === s.code)
                                return o.emit("econnreset", s, e, t, n), r.abort();
                            u ? u(s, e, t, n) : o.emit("error", s, e, t, n)
                        }
                    }
                    e.on("error", y),
                    m.on("error", y),
                    (r.buffer || e).pipe(m),
                    m.on("response", (function (n) {
                            if (o && o.emit("proxyRes", n, e, t), !t.headersSent && !r.selfHandleResponse)
                                for (var i = 0; i < s.length && !s[i](e, t, n, r); i++);
                            t.finished ? o && o.emit("end", e, t, n) : (n.on("end", (function () {
                                        o && o.emit("end", e, t, n)
                                    })), r.selfHandleResponse || n.pipe(t))
                        }))
                }
            }
        }, function (e, t, r) {
            var n = r(2),
            o = r(4),
            s = /^201|30(1|2|7|8)$/;
            /*!
             * Array of passes.
             *
             * A `pass` is just a function that is executed on `req, res, options`
             * so that you can easily add new checks while still keeping the base
             * flexible.
             */
            e.exports = {
                removeChunked: function (e, t, r) {
                    "1.0" === e.httpVersion && delete r.headers["transfer-encoding"]
                },
                setConnection: function (e, t, r) {
                    "1.0" === e.httpVersion ? r.headers.connection = e.headers.connection || "close" : "2.0" === e.httpVersion || r.headers.connection || (r.headers.connection = e.headers.connection || "keep-alive")
                },
                setRedirectHostRewrite: function (e, t, r, o) {
                    if ((o.hostRewrite || o.autoRewrite || o.protocolRewrite) && r.headers.location && s.test(r.statusCode)) {
                        var i = n.parse(o.target),
                        a = n.parse(r.headers.location);
                        if (i.host != a.host)
                            return;
                        o.hostRewrite ? a.host = o.hostRewrite : o.autoRewrite && (a.host = e.headers.host),
                        o.protocolRewrite && (a.protocol = o.protocolRewrite),
                        r.headers.location = a.format()
                    }
                },
                writeHeaders: function (e, t, r, n) {
                    var s,
                    i = n.cookieDomainRewrite,
                    a = n.cookiePathRewrite,
                    c = n.preserveHeaderKeyCase;
                    if ("string" == typeof i && (i = {
                                "*": i
                            }), "string" == typeof a && (a = {
                                "*": a
                            }), c && null != r.rawHeaders) {
                        s = {};
                        for (var u = 0; u < r.rawHeaders.length; u += 2) {
                            var f = r.rawHeaders[u];
                            s[f.toLowerCase()] = f
                        }
                    }
                    Object.keys(r.headers).forEach((function (e) {
                            var n = r.headers[e];
                            c && s && (e = s[e] || e),
                            function (e, r) {
                                null != r && (i && "set-cookie" === e.toLowerCase() && (r = o.rewriteCookieProperty(r, i, "domain")), a && "set-cookie" === e.toLowerCase() && (r = o.rewriteCookieProperty(r, a, "path")), t.setHeader(String(e).trim(), r))
                            }
                            (e, n)
                        }))
                },
                writeStatusCode: function (e, t, r) {
                    r.statusMessage ? (t.statusCode = r.statusCode, t.statusMessage = r.statusMessage) : t.statusCode = r.statusCode
                }
            }
        }, function (e, t, r) {
            "use strict";
            e.exports = function (e, t) {
                if (t = t.split(":")[0], !(e = +e))
                    return !1;
                switch (t) {
                case "http":
                case "ws":
                    return 80 !== e;
                case "https":
                case "wss":
                    return 443 !== e;
                case "ftp":
                    return 21 !== e;
                case "gopher":
                    return 70 !== e;
                case "file":
                    return !1
                }
                return 0 !== e
            }
        }, function (e, t, r) {
            var n = r(2),
            o = n.URL,
            s = r(3),
            i = r(1),
            a = r(20).Writable,
            c = r(21),
            u = r(22),
            f = Object.create(null);
            ["abort", "aborted", "connect", "error", "socket", "timeout"].forEach((function (e) {
                    f[e] = function (t, r, n) {
                        this._redirectable.emit(e, t, r, n)
                    }
                }));
            var h = C("ERR_FR_REDIRECTION_FAILURE", ""),
            p = C("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded"),
            d = C("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit"),
            l = C("ERR_STREAM_WRITE_AFTER_END", "write after end");
            function m(e, t) {
                a.call(this),
                this._sanitizeOptions(e),
                this._options = e,
                this._ended = !1,
                this._ending = !1,
                this._redirectCount = 0,
                this._redirects = [],
                this._requestBodyLength = 0,
                this._requestBodyBuffers = [],
                t && this.on("response", t);
                var r = this;
                this._onNativeResponse = function (e) {
                    r._processResponse(e)
                },
                this._performRequest()
            }
            function y(e, t) {
                clearTimeout(e._timeout),
                e._timeout = setTimeout((function () {
                            e.emit("timeout")
                        }), t)
            }
            function g() {
                clearTimeout(this._timeout)
            }
            function w(e) {
                var t = {
                    maxRedirects: 21,
                    maxBodyLength: 10485760
                },
                r = {};
                return Object.keys(e).forEach((function (s) {
                        var i = s + ":",
                        a = r[i] = e[s],
                        f = t[s] = Object.create(a);
                        f.request = function (e, s, a) {
                            if ("string" == typeof e) {
                                var f = e;
                                try {
                                    e = _(new o(f))
                                } catch (t) {
                                    e = n.parse(f)
                                }
                            } else
                                o && e instanceof o ? e = _(e) : (a = s, s = e, e = {
                                            protocol: i
                                        });
                            return "function" == typeof s && (a = s, s = null),
                            (s = Object.assign({
                                    maxRedirects: t.maxRedirects,
                                    maxBodyLength: t.maxBodyLength
                                }, e, s)).nativeProtocols = r,
                            c.equal(s.protocol, i, "protocol mismatch"),
                            u("options", s),
                            new m(s, a)
                        },
                        f.get = function (e, t, r) {
                            var n = f.request(e, t, r);
                            return n.end(),
                            n
                        }
                    })),
                t
            }
            function v() {}
            function _(e) {
                var t = {
                    protocol: e.protocol,
                    hostname: e.hostname.startsWith("[") ? e.hostname.slice(1, -1) : e.hostname,
                    hash: e.hash,
                    search: e.search,
                    pathname: e.pathname,
                    path: e.pathname + e.search,
                    href: e.href
                };
                return "" !== e.port && (t.port = Number(e.port)),
                t
            }
            function E(e, t) {
                var r;
                for (var n in t)
                    e.test(n) && (r = t[n], delete t[n]);
                return r
            }
            function C(e, t) {
                function r(e) {
                    Error.captureStackTrace(this, this.constructor),
                    this.message = e || t
                }
                return r.prototype = new Error,
                r.prototype.constructor = r,
                r.prototype.name = "Error [" + e + "]",
                r.prototype.code = e,
                r
            }
            m.prototype = Object.create(a.prototype),
            m.prototype.write = function (e, t, r) {
                if (this._ending)
                    throw new l;
                if (!("string" == typeof e || "object" == typeof e && "length" in e))
                    throw new TypeError("data should be a string, Buffer or Uint8Array");
                "function" == typeof t && (r = t, t = null),
                0 !== e.length ? this._requestBodyLength + e.length <= this._options.maxBodyLength ? (this._requestBodyLength += e.length, this._requestBodyBuffers.push({
                        data: e,
                        encoding: t
                    }), this._currentRequest.write(e, t, r)) : (this.emit("error", new d), this.abort()) : r && r()
            },
            m.prototype.end = function (e, t, r) {
                if ("function" == typeof e ? (r = e, e = t = null) : "function" == typeof t && (r = t, t = null), e) {
                    var n = this,
                    o = this._currentRequest;
                    this.write(e, t, (function () {
                            n._ended = !0,
                            o.end(null, null, r)
                        })),
                    this._ending = !0
                } else
                    this._ended = this._ending = !0, this._currentRequest.end(null, null, r)
            },
            m.prototype.setHeader = function (e, t) {
                this._options.headers[e] = t,
                this._currentRequest.setHeader(e, t)
            },
            m.prototype.removeHeader = function (e) {
                delete this._options.headers[e],
                this._currentRequest.removeHeader(e)
            },
            m.prototype.setTimeout = function (e, t) {
                if (t && this.once("timeout", t), this.socket)
                    y(this, e);
                else {
                    var r = this;
                    this._currentRequest.once("socket", (function () {
                            y(r, e)
                        }))
                }
                return this.once("response", g),
                this.once("error", g),
                this
            },
            ["abort", "flushHeaders", "getHeader", "setNoDelay", "setSocketKeepAlive"].forEach((function (e) {
                    m.prototype[e] = function (t, r) {
                        return this._currentRequest[e](t, r)
                    }
                })),
            ["aborted", "connection", "socket"].forEach((function (e) {
                    Object.defineProperty(m.prototype, e, {
                        get: function () {
                            return this._currentRequest[e]
                        }
                    })
                })),
            m.prototype._sanitizeOptions = function (e) {
                if (e.headers || (e.headers = {}), e.host && (e.hostname || (e.hostname = e.host), delete e.host), !e.pathname && e.path) {
                    var t = e.path.indexOf("?");
                    t < 0 ? e.pathname = e.path : (e.pathname = e.path.substring(0, t), e.search = e.path.substring(t))
                }
            },
            m.prototype._performRequest = function () {
                var e = this._options.protocol,
                t = this._options.nativeProtocols[e];
                if (t) {
                    if (this._options.agents) {
                        var r = e.substr(0, e.length - 1);
                        this._options.agent = this._options.agents[r]
                    }
                    var o = this._currentRequest = t.request(this._options, this._onNativeResponse);
                    for (var s in this._currentUrl = n.format(this._options), o._redirectable = this, f)
                        s && o.on(s, f[s]);
                    if (this._isRedirect) {
                        var i = 0,
                        a = this,
                        c = this._requestBodyBuffers;
                        !function e(t) {
                            if (o === a._currentRequest)
                                if (t)
                                    a.emit("error", t);
                                else if (i < c.length) {
                                    var r = c[i++];
                                    o.finished || o.write(r.data, r.encoding, e)
                                } else
                                    a._ended && o.end()
                        }
                        ()
                    }
                } else
                    this.emit("error", new TypeError("Unsupported protocol " + e))
            },
            m.prototype._processResponse = function (e) {
                var t = e.statusCode;
                this._options.trackRedirects && this._redirects.push({
                    url: this._currentUrl,
                    headers: e.headers,
                    statusCode: t
                });
                var r = e.headers.location;
                if (r && !1 !== this._options.followRedirects && t >= 300 && t < 400) {
                    if (this._currentRequest.removeAllListeners(), this._currentRequest.on("error", v), this._currentRequest.abort(), e.destroy(), ++this._redirectCount > this._options.maxRedirects)
                        return void this.emit("error", new p);
                    ((301 === t || 302 === t) && "POST" === this._options.method || 303 === t && !/^(?:GET|HEAD)$/.test(this._options.method)) && (this._options.method = "GET", this._requestBodyBuffers = [], E(/^content-/i, this._options.headers));
                    var o = E(/^host$/i, this._options.headers) || n.parse(this._currentUrl).hostname,
                    s = n.resolve(this._currentUrl, r);
                    u("redirecting to", s),
                    this._isRedirect = !0;
                    var i = n.parse(s);
                    if (Object.assign(this._options, i), i.hostname !== o && E(/^authorization$/i, this._options.headers), "function" == typeof this._options.beforeRedirect) {
                        try {
                            this._options.beforeRedirect.call(null, this._options)
                        } catch (e) {
                            return void this.emit("error", e)
                        }
                        this._sanitizeOptions(this._options)
                    }
                    try {
                        this._performRequest()
                    } catch (e) {
                        var a = new h("Redirected request failed: " + e.message);
                        a.cause = e,
                        this.emit("error", a)
                    }
                } else
                    e.responseUrl = this._currentUrl, e.redirects = this._redirects, this.emit("response", e), this._requestBodyBuffers = []
            },
            e.exports = w({
                http: s,
                https: i
            }),
            e.exports.wrap = w
        }, function (e, t) {
            e.exports = require("stream")
        }, function (e, t) {
            e.exports = require("assert")
        }, function (e, t, r) {
            var n;
            try {
                n = r(23)("follow-redirects")
            } catch (e) {
                n = function () {}
            }
            e.exports = n
        }, function (e, t, r) {
            "undefined" == typeof process || "renderer" === process.type || !0 === process.browser || process.__nwjs ? e.exports = r(24) : e.exports = r(26)
        }, function (e, t, r) {
            t.log = function (...e) {
                return "object" == typeof console && console.log && console.log(...e)
            },
            t.formatArgs = function (t) {
                if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors)
                    return;
                const r = "color: " + this.color;
                t.splice(1, 0, r, "color: inherit");
                let n = 0,
                o = 0;
                t[0].replace(/%[a-zA-Z%]/g, e => {
                    "%%" !== e && (n++, "%c" === e && (o = n))
                }),
                t.splice(o, 0, r)
            },
            t.save = function (e) {
                try {
                    e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
                } catch (e) {}
            },
            t.load = function () {
                let e;
                try {
                    e = t.storage.getItem("debug")
                } catch (e) {}
                !e && "undefined" != typeof process && "env" in process && (e = Object({
                        NODE_ENV: "development"
                    }).DEBUG);
                return e
            },
            t.useColors = function () {
                if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs))
                    return !0;
                if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
                    return !1;
                return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
            },
            t.storage = function () {
                try {
                    return localStorage
                } catch (e) {}
            }
            (),
            t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"],
            e.exports = r(6)(t);
            const {
                formatters: n
            } = e.exports;
            n.j = function (e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return "[UnexpectedJSONParseError]: " + e.message
                }
            }
        }, function (e, t) {
            var r = 1e3,
            n = 6e4,
            o = 60 * n,
            s = 24 * o;
            function i(e, t, r, n) {
                var o = t >= 1.5 * r;
                return Math.round(e / r) + " " + n + (o ? "s" : "")
            }
            e.exports = function (e, t) {
                t = t || {};
                var a = typeof e;
                if ("string" === a && e.length > 0)
                    return function (e) {
                        if ((e = String(e)).length > 100)
                            return;
                        var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                        if (!t)
                            return;
                        var i = parseFloat(t[1]);
                        switch ((t[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return 315576e5 * i;
                        case "weeks":
                        case "week":
                        case "w":
                            return 6048e5 * i;
                        case "days":
                        case "day":
                        case "d":
                            return i * s;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return i * o;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return i * n;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return i * r;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return i;
                        default:
                            return
                        }
                    }
                (e);
                if ("number" === a && isFinite(e))
                    return t.long ? function (e) {
                        var t = Math.abs(e);
                        if (t >= s)
                            return i(e, t, s, "day");
                        if (t >= o)
                            return i(e, t, o, "hour");
                        if (t >= n)
                            return i(e, t, n, "minute");
                        if (t >= r)
                            return i(e, t, r, "second");
                        return e + " ms"
                    }
                (e) : function (e) {
                    var t = Math.abs(e);
                    if (t >= s)
                        return Math.round(e / s) + "d";
                    if (t >= o)
                        return Math.round(e / o) + "h";
                    if (t >= n)
                        return Math.round(e / n) + "m";
                    if (t >= r)
                        return Math.round(e / r) + "s";
                    return e + "ms"
                }
                (e);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
            }
        }, function (e, t, r) {
            const n = r(7),
            o = r(0);
            t.init = function (e) {
                e.inspectOpts = {};
                const r = Object.keys(t.inspectOpts);
                for (let n = 0; n < r.length; n++)
                    e.inspectOpts[r[n]] = t.inspectOpts[r[n]]
            },
            t.log = function (...e) {
                return process.stderr.write(o.format(...e) + "\n")
            },
            t.formatArgs = function (r) {
                const {
                    namespace: n,
                    useColors: o
                } = this;
                if (o) {
                    const t = this.color,
                    o = "[3" + (t < 8 ? t : "8;5;" + t),
                    s = `  ${o};1m${n} [0m`;
                    r[0] = s + r[0].split("\n").join("\n" + s),
                    r.push(o + "m+" + e.exports.humanize(this.diff) + "[0m")
                } else
                    r[0] = function () {
                        if (t.inspectOpts.hideDate)
                            return "";
                        return (new Date).toISOString() + " "
                    }
                () + n + " " + r[0]
            },
            t.save = function (e) {
                e ? Object({
                    NODE_ENV: "development"
                }).DEBUG = e : delete Object({
                    NODE_ENV: "development"
                }).DEBUG
            },
            t.load = function () {
                return Object({
                    NODE_ENV: "development"
                }).DEBUG
            },
            t.useColors = function () {
                return "colors" in t.inspectOpts ? Boolean(t.inspectOpts.colors) : n.isatty(process.stderr.fd)
            },
            t.colors = [6, 2, 3, 4, 5, 1];
            try {
                const e = r(27);
                e && (e.stderr || e).level >= 2 && (t.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221])
            } catch (e) {}
            t.inspectOpts = Object.keys(Object({
                        NODE_ENV: "development"
                    })).filter(e => /^debug_/i.test(e)).reduce((e, t) => {
                const r = t.substring(6).toLowerCase().replace(/_([a-z])/g, (e, t) => t.toUpperCase());
                let n = Object({
                    NODE_ENV: "development"
                })[t];
                return n = !!/^(yes|on|true|enabled)$/i.test(n) || !/^(no|off|false|disabled)$/i.test(n) && ("null" === n ? null : Number(n)),
                e[r] = n,
                e
            }, {}),
            e.exports = r(6)(t);
            const {
                formatters: s
            } = e.exports;
            s.o = function (e) {
                return this.inspectOpts.colors = this.useColors,
                o.inspect(e, this.inspectOpts).replace(/\s*\n\s*/g, " ")
            },
            s.O = function (e) {
                return this.inspectOpts.colors = this.useColors,
                o.inspect(e, this.inspectOpts)
            }
        }, function (e, t, r) {
            "use strict";
            const n = r(8),
            o = r(7),
            s = r(28), {
                env: i
            } = process;
            let a;
            function c(e) {
                return 0 !== e && {
                    level: e,
                    hasBasic: !0,
                    has256: e >= 2,
                    has16m: e >= 3
                }
            }
            function u(e, t) {
                if (0 === a)
                    return 0;
                if (s("color=16m") || s("color=full") || s("color=truecolor"))
                    return 3;
                if (s("color=256"))
                    return 2;
                if (e && !t && void 0 === a)
                    return 0;
                const r = a || 0;
                if ("dumb" === i.TERM)
                    return r;
                if ("win32" === process.platform) {
                    const e = n.release().split(".");
                    return Number(e[0]) >= 10 && Number(e[2]) >= 10586 ? Number(e[2]) >= 14931 ? 3 : 2 : 1
                }
                if ("CI" in i)
                    return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(e => e in i) || "codeship" === i.CI_NAME ? 1 : r;
                if ("TEAMCITY_VERSION" in i)
                    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(i.TEAMCITY_VERSION) ? 1 : 0;
                if ("GITHUB_ACTIONS" in i)
                    return 1;
                if ("truecolor" === i.COLORTERM)
                    return 3;
                if ("TERM_PROGRAM" in i) {
                    const e = parseInt((i.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
                    switch (i.TERM_PROGRAM) {
                    case "iTerm.app":
                        return e >= 3 ? 3 : 2;
                    case "Apple_Terminal":
                        return 2
                    }
                }
                return /-256(color)?$/i.test(i.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(i.TERM) || "COLORTERM" in i ? 1 : r
            }
            s("no-color") || s("no-colors") || s("color=false") || s("color=never") ? a = 0 : (s("color") || s("colors") || s("color=true") || s("color=always")) && (a = 1),
            "FORCE_COLOR" in i && (a = "true" === i.FORCE_COLOR ? 1 : "false" === i.FORCE_COLOR ? 0 : 0 === i.FORCE_COLOR.length ? 1 : Math.min(parseInt(i.FORCE_COLOR, 10), 3)),
            e.exports = {
                supportsColor: function (e) {
                    return c(u(e, e && e.isTTY))
                },
                stdout: c(u(!0, o.isatty(1))),
                stderr: c(u(!0, o.isatty(2)))
            }
        }, function (e, t, r) {
            "use strict";
            e.exports = (e, t = process.argv) => {
                const r = e.startsWith("-") ? "" : 1 === e.length ? "-" : "--",
                n = t.indexOf(r + e),
                o = t.indexOf("--");
                return -1 !== n && (-1 === o || n < o)
            }
        }, function (e, t, r) {
            var n = r(3),
            o = r(1),
            s = r(4);
            /*!
             * Array of passes.
             *
             * A `pass` is just a function that is executed on `req, socket, options`
             * so that you can easily add new checks while still keeping the base
             * flexible.
             */
            e.exports = {
                checkMethodAndHeader: function (e, t) {
                    return "GET" === e.method && e.headers.upgrade ? "websocket" !== e.headers.upgrade.toLowerCase() ? (t.destroy(), !0) : void 0 : (t.destroy(), !0)
                },
                XHeaders: function (e, t, r) {
                    if (r.xfwd) {
                        var n = {
                            for : e.connection.remoteAddress || e.socket.remoteAddress, port: s.getPort(e) , proto: s.hasEncryptedConnection(e) ? "wss" : "ws"
                        };
                        ["for", "port", "proto"].forEach((function (t) {
                                e.headers["x-forwarded-" + t] = (e.headers["x-forwarded-" + t] || "") + (e.headers["x-forwarded-" + t] ? "," : "") + n[t]
                            }))
                    }
                },
                stream: function (e, t, r, i, a, c) {
                    var u = function (e, t) {
                        return Object.keys(t).reduce((function (e, r) {
                                var n = t[r];
                                if (!Array.isArray(n))
                                    return e.push(r + ": " + n), e;
                                for (var o = 0; o < n.length; o++)
                                    e.push(r + ": " + n[o]);
                                return e
                            }), [e]).join("\r\n") + "\r\n\r\n"
                    };
                    s.setupSocket(t),
                    i && i.length && t.unshift(i);
                    var f = (s.isSSL.test(r.target.protocol) ? o : n).request(s.setupOutgoing(r.ssl || {}, r, e));
                    return a && a.emit("proxyReqWs", f, e, t, r, i),
                    f.on("error", h),
                    f.on("response", (function (e) {
                            e.upgrade || (t.write(u("HTTP/" + e.httpVersion + " " + e.statusCode + " " + e.statusMessage, e.headers)), e.pipe(t))
                        })),
                    f.on("upgrade", (function (e, r, n) {
                            r.on("error", h),
                            r.on("end", (function () {
                                    a.emit("close", e, r, n)
                                })),
                            t.on("error", (function () {
                                    r.end()
                                })),
                            s.setupSocket(r),
                            n && n.length && r.unshift(n),
                            t.write(u("HTTP/1.1 101 Switching Protocols", e.headers)),
                            r.pipe(t).pipe(r),
                            a.emit("open", r),
                            a.emit("proxySocket", r)
                        })),
                    f.end();
                    function h(r) {
                        c ? c(r, e, t) : a.emit("error", r, e, t),
                        t.end()
                    }
                }
            }
        }, function (e, t, r) {
            var n = r(9),
            o = r(33);
            function s(e) {
                return e instanceof n || (e = new n(e)),
                e.toBinary()
            }
            e.exports = {
                parse: function (e) {
                    return new n(e)
                },
                binify: s,
                stringify: s,
                createServer: o
            }
        }, function (e, t, r) {
            r(0);
            var n = r(5);
            function o(e, t) {
                if ("question" == t)
                    return e.readUInt16BE(4);
                if ("answer" == t)
                    return e.readUInt16BE(6);
                if ("authority" == t)
                    return e.readUInt16BE(8);
                if ("additional" == t)
                    return e.readUInt16BE(10);
                throw new Error("Unknown section name: " + t)
            }
            function s(e, t, r) {
                if ("number" != typeof r || isNaN(r) || r < 0)
                    throw new Error("Offset must be a natural number");
                var n = (Buffer.isBuffer(e) ? i(e) : e)[t];
                if (!n)
                    throw new Error('No such section: "' + t + '"');
                var o = n[r];
                if (!o)
                    throw new Error('Bad offset for section "' + t + '": ' + r);
                return o
            }
            function i(e) {
                "__parsed" in e && (e.__parsed += 1);
                for (var t = 12, r = {
                        question: [],
                        answer: [],
                        authority: [],
                        additional: []
                    }, s = {
                        question: o(e, "question"),
                        answer: o(e, "answer"),
                        authority: o(e, "authority"),
                        additional: o(e, "additional")
                    }, i = ["question", "answer", "authority", "additional", "done"], a = i.shift(); ; ) {
                    if ("done" == a)
                        return r;
                    if (r[a].length == s[a])
                        a = i.shift();
                    else {
                        if (!a)
                            throw new Error("Unknown parsing state at position " + t + ": " + JSON.stringify(a));
                        u()
                    }
                }
                function u() {
                    var o = {},
                    s = c(e, t);
                    if (o.name = s.parts.join("."), t += s.length, o.type = e.readUInt16BE(t + 0), o.class = e.readUInt16BE(t + 2), t += 4, "question" != a) {
                        o.ttl = e.readUInt32BE(t + 0);
                        var i = e.readUInt16BE(t + 4);
                        if (t += 6, o.data = e.slice(t, t + i), t += i, "OPT" === n.type(o.type)) {
                            if ("" !== o.name)
                                throw new Error("EDNS record option for non-root domain: " + o.name);
                            o.udp_size = o.class,
                            delete o.class,
                            o.extended_rcode = o.ttl >> 24,
                            o.edns_version = o.ttl >> 16 & 255,
                            o.zero = o.ttl >> 8,
                            delete o.ttl,
                            o.data = Array.prototype.slice.call(o.data)
                        }
                    }
                    r[a] = r[a] || [],
                    r[a].push(o)
                }
            }
            function a(e, t) {
                return c(e, t).parts.join(".")
            }
            function c(e, t) {
                if (Buffer.isBuffer(t)) {
                    var r = e;
                    e = t,
                    t = 0
                }
                if ("number" != typeof t || isNaN(t) || t < 0 || t > e.length)
                    throw new Error("Bad offset: " + t);
                for (var n = [], o = 0, s = !1, i = 0; ; ) {
                    if (++i >= 100)
                        throw new Error("Too many iterations uncompressing name");
                    var a = e.readUInt8(t),
                    c = a >> 6,
                    u = 63 & a;
                    if (t += 1, f(1), 3 === c)
                        t = (u << 8) + e.readUInt8(t), f(1), s = !0, e = r || e;
                    else {
                        if (0 == u)
                            return {
                                parts: n,
                                length: o
                            };
                        n.push(e.toString("ascii", t, t + u)),
                        t += u,
                        f(u)
                    }
                }
                function f(e) {
                    s || (o += e)
                }
            }
            e.exports = {
                id: function (e) {
                    return e.readUInt16BE(0)
                },
                qr: function (e) {
                    return e.readUInt8(2) >> 7
                },
                aa: function (e) {
                    return e.readUInt8(2) >> 2 & 1
                },
                tc: function (e) {
                    return e.readUInt8(2) >> 1 & 1
                },
                rd: function (e) {
                    return 1 & e.readUInt8(2)
                },
                ra: function (e) {
                    return e.readUInt8(3) >> 7
                },
                ad: function (e) {
                    return e.readUInt8(3) >> 5 & 1
                },
                cd: function (e) {
                    return e.readUInt8(3) >> 4 & 1
                },
                rcode: function (e) {
                    return 15 & e.readUInt8(3)
                },
                opcode: function (e) {
                    return e.readUInt8(2) >> 3 & 15
                },
                record_count: o,
                record_name: function (e, t, r) {
                    return s(e, t, r).name
                },
                record_class: function (e, t, r) {
                    return s(e, t, r).class
                },
                record_ttl: function (e, t, r) {
                    return s(e, t, r).ttl
                },
                record_type: function (e, t, r) {
                    return s(e, t, r).type
                },
                record_data: function (e, t, r) {
                    return s(e, t, r).data
                },
                uncompress: a,
                sections: i,
                mx: function (e, t) {
                    return [t.readUInt16BE(0), a(e, t.slice(2))]
                },
                srv: function (e, t) {
                    return {
                        priority: t.readUInt16BE(0),
                        weight: t.readUInt16BE(2),
                        port: t.readUInt16BE(4),
                        target: a(e, t.slice(6))
                    }
                },
                soa: function (e, t) {
                    var r = c(e, t),
                    n = r.length,
                    o = r.parts.join("."),
                    s = (r = c(e, t.slice(n))).parts.join(".");
                    return n += r.length, {
                        mname: o,
                        rname: s,
                        serial: t.readUInt32BE(n + 0),
                        refresh: t.readUInt32BE(n + 4),
                        retry: t.readUInt32BE(n + 8),
                        expire: t.readUInt32BE(n + 12),
                        ttl: t.readUInt32BE(n + 16)
                    }
                },
                txt: function (e, t) {
                    var r = [];
                    for (; t.length; ) {
                        var n = t.readUInt8(0);
                        r.push(t.slice(1, 1 + n).toString("ascii")),
                        t = t.slice(1 + n)
                    }
                    return r
                }
            }
        }, function (e, t, r) {
            r(0);
            var n = r(5);
            e.exports = {
                State: s
            };
            var o = ["question", "answer", "authority", "additional"];
            function s() {
                this.header = new Buffer(12),
                this.position = 0,
                this.question = [],
                this.answer = [],
                this.authority = [],
                this.additional = [],
                this.domains = {}
            }
            function i(e) {
                var t = new Buffer(4);
                return t.writeUInt32BE(e, 0),
                t
            }
            function a(e) {
                var t = new Buffer(2);
                return t.writeUInt16BE(e, 0),
                t
            }
            function c(e) {
                return Buffer.isBuffer(e) ? Array.prototype.slice.call(e) : Array.isArray(e) ? e.reduce(u, []) : [e]
            }
            function u(e, t) {
                return Buffer.isBuffer(t) || Array.isArray(t) ? e.concat(c(t)) : e.concat([t])
            }
            function f(e) {
                if (!e.match(/^[0-9a-fA-F]{4}$/))
                    throw new Error("Bad " + record.type + " record data: " + JSON.stringify(record));
                return new Buffer(e, "hex")
            }
            s.prototype.toBinary = function () {
                var e = [this.header];
                return this.question.forEach((function (t) {
                        e.push(t)
                    })),
                this.answer.forEach((function (t) {
                        e.push(t)
                    })),
                this.authority.forEach((function (t) {
                        e.push(t)
                    })),
                this.additional.forEach((function (t) {
                        e.push(t)
                    })),
                Buffer.concat(e)
            },
            s.prototype.message = function (e) {
                var t = this;
                t.header.writeUInt16BE(e.id, 0);
                var r = 0;
                r |= "response" == e.type ? 128 : 0,
                r |= e.authoritative ? 4 : 0,
                r |= e.truncated ? 2 : 0,
                r |= e.recursion_desired ? 1 : 0;
                var n = ["query", "iquery", "status", null, "notify", "update"].indexOf(e.opcode);
                if (-1 == n || "string" != typeof e.opcode)
                    throw new Error("Unknown opcode: " + e.opcode);
                r |= n << 3,
                t.header.writeUInt8(r, 2),
                r = 0,
                r |= e.recursion_available ? 128 : 0,
                r |= e.authenticated ? 32 : 0,
                r |= e.checking_disabled ? 16 : 0,
                r |= 15 & e.responseCode,
                t.header.writeUInt8(r, 3),
                t.position = 12,
                o.forEach((function (r) {
                        (e[r] || []).forEach((function (e) {
                                t.record(r, e)
                            }))
                    })),
                t.header.writeUInt16BE(t.question.length, 4),
                t.header.writeUInt16BE(t.answer.length, 6),
                t.header.writeUInt16BE(t.authority.length, 8),
                t.header.writeUInt16BE(t.additional.length, 10)
            },
            s.prototype.record = function (e, t) {
                var r,
                o = [];
                r = this.encode(t.name),
                o.push(r),
                this.position += r.length;
                var s = n.type_to_number(t.type),
                u = n.class_to_number(t.class);
                if ((r = new Buffer(2)).writeUInt16BE(s, 0), o.push(r), this.position += 2, (r = new Buffer(2)).writeUInt16BE(u, 0), o.push(r), this.position += 2, "question" != e) {
                    var h,
                    p;
                    switch ((r = new Buffer(4)).writeUInt32BE(t.ttl || 0, 0), o.push(r), this.position += 4, t.class + " " + t.type) {
                    case "IN A":
                        if (!(h = (p = t.data || "").match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/)))
                            throw new Error("Bad " + t.type + " record data: " + JSON.stringify(t));
                        p = [+h[1], +h[2], +h[3], +h[4]];
                        break;
                    case "IN AAAA":
						console.log("AAAA +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
                        if (8 != (p = (t.data || "").split(/:/)).length) {
							console.log((t.data || "").split(/:/));
							console.log(t.data);
                            throw new Error("Bad " + t.type + " record data: " + JSON.stringify(t));
						}
                        p = p.map(f);
                        break;
                    case "IN MX":
                        var d = t.data[1];
                        p = [a(t.data[0]), this.encode(d, 4)];
                        break;
                    case "IN SOA":
                        var l = this.encode(t.data.mname, 2);
                        p = [l, this.encode(t.data.rname, 2 + l.length), i(t.data.serial), i(t.data.refresh), i(t.data.retry), i(t.data.expire), i(t.data.ttl)];
                        break;
                    case "IN NS":
                    case "IN PTR":
                    case "IN CNAME":
                        p = this.encode(t.data, 2);
                        break;
                    case "IN TXT":
                        p = t.data.map((function (e) {
                                    return [(e = new Buffer(e)).length, e]
                                }));
                        break;
                    case "IN SRV":
                        p = [a(t.data.priority), a(t.data.weight), a(t.data.port), this.encode(t.data.target, 8, "nocompress")];
						console.log("T.DATA.PORT **********************************************************");
						console.log(t.data.port);
                        break;
                    case "IN DS":
                        p = [a(t.data.key_tag), new Buffer([t.data.algorithm]), new Buffer([t.data.digest_type]), new Buffer(t.data.digest)];
                        break;
                    case "NONE A":
                        p = [];
                        break;
                    default:
                        throw new Error("Unsupported record type: " + JSON.stringify(t))
                    }
                    p = c(p),
                    (r = new Buffer(2)).writeUInt16BE(p.length, 0),
                    o.push(r),
                    this.position += 2,
                    this.position += p.length,
                    p.length > 0 && o.push(new Buffer(p))
                }
                this[e].push(Buffer.concat(o))
            },
            s.prototype.encode = function (e, t, r) {
                var n = e;
                n = n.replace(/\.$/, ""),
                position = this.position + (t || 0);
                for (var o = [], s = 0; ++s < 40; ) {
                    if ("" == n)
                        return o.push(new Buffer([0])), Buffer.concat(o);
                    if (this.domains[n] && "nocompress" !== r)
                        return o.push(new Buffer([192, this.domains[n]])), Buffer.concat(o);
                    this.domains[n] = position;
                    var i = n.split(/\./),
                    a = i[0];
                    n = i.slice(1).join(".");
                    var c = new Buffer(a.length + 1);
                    c.write(a, 1, a.length, "ascii"),
                    c.writeUInt8(a.length, 0),
                    o.push(c),
                    position += c.length
                }
                throw new Error("Too many iterations encoding domain: " + e)
            }
        }, function (e, t, r) {
            var n = r(34),
            o = r(0),
            s = r(35),
            i = r(36),
            a = r(9),
            c = r(37);
            function u(e) {
                var t = this;
                i.EventEmitter.call(t),
                t.log = console,
                t.zones = {},
                e && t.on("request", e),
                t.udp = s.createSocket("udp4"),
                t.tcp = n.createServer(),
                t.udp.on("close", (function () {
                        t.close()
                    })),
                t.tcp.on("close", (function () {
                        t.close()
                    })),
                t.udp.on("error", (function (e) {
                        t.emit("error", e)
                    })),
                t.tcp.on("error", (function (e) {
                        t.emit("error", e)
                    })),
                t.tcp.on("connection", (function (e) {
                        t.on_tcp_connection(e)
                    })),
                t.udp.on("message", (function (e, r) {
                        t.on_udp(e, r)
                    }));
                var r = {
                    tcp: !1,
                    udp: !1
                };
                t.udp.once("listening", (function () {
                        r.udp = !0,
                        r.tcp && t.emit("listening")
                    })),
                t.tcp.once("listening", (function () {
                        r.tcp = !0,
                        r.udp && t.emit("listening")
                    }))
            }
            function f(e, t) {
                a.call(this, e),
                this.connection = t
            }
            function h(e, t) {
                a.call(this, e),
                this.question = this.question || [],
                this.answer = this.answer || [],
                this.authority = this.authority || [],
                this.additional = this.additional || [],
                this.connection = t,
                c.init_response(this)
            }
            e.exports = function (e) {
                return new u(e)
            },
            o.inherits(u, i.EventEmitter),
            u.prototype.zone = function (e, t, r, n, o, s, i, a) {
                var u = e;
                return "object" != typeof u && (u = {
                        class: "IN",
                        type: "SOA",
                        name: e,
                        data: {
                            mname: t,
                            rname: r,
                            serial: c.serial(n),
                            refresh: c.seconds(o),
                            retry: c.seconds(s),
                            expire: c.seconds(i),
                            ttl: c.seconds(a || 0)
                        }
                    }),
                this.zones[u.name] = u,
                this
            },
            u.prototype.listen = function (e, t, r) {
                return "function" == typeof t && (r = t, t = null),
                this.port = e,
                this.ip = t || "0.0.0.0",
                "function" == typeof r && this.on("listening", r),
                this.udp.bind(e, t),
                this.tcp.listen(e, t),
                this
            },
            u.prototype.close = function () {
                var e = this;
                e.udp._receiving && e.udp.close(),
                e.tcp._handle && e.tcp.close((function () {
                        e.emit("close")
                    }))
            },
            u.prototype.unref = function () {
                this.udp.unref(),
                this.tcp.unref()
            },
            u.prototype.ref = function () {
                this.udp.ref(),
                this.tcp.ref()
            },
            u.prototype.on_tcp_connection = function (e) {
                var t = this,
                r = null,
                n = [];
                e.type = "tcp",
                e.server = t,
                e.on("data", (function (o) {
                        n.push(o);
                        var s = n.reduce((function (e, t) {
                                    return e + t.length
                                }), 0);
                        if (null === r && s >= 2) {
                            var i = Buffer.concat(n);
                            r = i.readUInt16BE(0),
                            n = [i.slice(2)]
                        }
                        if (null !== r && s == 2 + r)
                            try {
                                var a = new f(o = Buffer.concat(n), e),
                                c = new h(o, e);
                                t.emit("request", a, c)
                            } catch (r) {
                                t.emit("error", "Error processing request", r, e)
                            }
                    }))
            },
            u.prototype.on_udp = function (e, t) {
                var r = this,
                n = {
                    type: r.udp.type,
                    remoteAddress: t.address,
                    remotePort: t.port,
                    server: r,
                    send: function () {
                        r.udp.send.apply(r.udp, arguments)
                    },
                    destroy: function () {},
                    end: function () {}
                };
				console.log("T.PORT ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
				console.log(t.port);
                try {
                    var o = new f(e, n),
                    s = new h(e, n);
                    r.emit("request", o, s)
                } catch (e) {
                    r.emit("error", "Error processing request", e, n)
                }
            },
            o.inherits(f, a),
            f.prototype.toJSON = function () {
                var e = this,
                t = {};
                return Object.keys(e).forEach((function (r) {
                        "connection" != r && (t[r] = e[r])
                    })),
                t
            },
            o.inherits(h, a),
            h.prototype.toJSON = f.prototype.toJSON,
            h.prototype.end = function (e) {
                var t = this,
                r = c.final_response(t, e).toBinary();
                if ("udp4" == t.connection.type && r.length > 512)
                    return t.emit("error", "UDP responses greater than 512 bytes not yet implemented");
                if ("udp4" == t.connection.type)
                    t.connection.send(r, 0, r.length, t.connection.remotePort, t.connection.remoteAddress, (function (e) {
                            e && t.emit("error", e)
                        }));
                else if ("tcp" == t.connection.type) {
                    var n = r.length;
                    r = Buffer.concat([new Buffer([n >> 8, 255 & n]), r]),
                    t.connection.end(r, (function (e) {
                            e && t.emit("error", e)
                        }))
                } else
                    t.emit("error", new Error("Unknown connection type: " + t.connection.type))
            }
        }, function (e, t) {
            e.exports = require("net")
        }, function (e, t) {
            e.exports = require("dgram")
        }, function (e, t) {
            e.exports = require("events")
        }, function (e, t) {
            function r() {}
            e.exports = {
                init_response: function (e) {
                    e.type = "response"
                },
                final_response: function (e, t) {
                    Array.isArray(t) ? (e.answer = (e.answer || []).concat(t), t = void 0) : "object" == typeof t && (e = new e.constructor(t, t.connection || e.connection), t = void 0);
                    var r = e.question || [],
                    o = e.answer || [],
                    s = e.authority || [],
                    i = e.additional || [];
                    e.recursion_available = !1;
                    var a,
                    c,
                    u = r[0],
                    f = u && u.name && u.name.split(/\./);
                    for (; f && f.length && (a = f.join("."), f.shift(), !(c = e.connection.server.zones[a])); );
                    e.authoritative = !!c,
                    1 == r.length && "IN A" == u.kind() ? "string" == typeof t && 0 == o.length && e.answer.push({
                        class: "IN",
                        type: "A",
                        name: u.name,
                        data: t
                    }) : 1 == r.length && "IN SOA" == u.kind() && 0 == o.length && c && c.name == u.name && e.answer.push(c);
                    c && 1 == r.length && 0 == o.length && 0 == s.length && e.authority.push(c);
                    return o.forEach(h),
                    s.forEach(h),
                    i.forEach(h),
                    e;
                    function h(e) {
                        e.class = e.class || "IN";
                        var t = n;
                        c && (t = c.data.ttl),
                        e.ttl = Math.max(e.ttl || 0, t)
                    }
                },
                seconds: function (e) {
                    if ("string" != typeof e)
                        return e;
                    var t;
                    if (t = e.match(/^(\d+)s$/))
                        return +t[1];
                    if (t = e.match(/^(\d+)m$/))
                        return 60 * +t[1];
                    if (t = e.match(/^(\d+)h$/))
                        return 60 * +t[1] * 60;
                    if (t = e.match(/^(\d+)d$/))
                        return 60 * +t[1] * 60 * 24;
                    if (t = e.match(/^(\d+)w$/))
                        return 60 * +t[1] * 60 * 24 * 7
                },
                serial: function (e) {
                    if ("now" != e)
                        return e;
                    var t = new Date;
                    return Math.floor(t.getTime() / 1e3)
                }
            };
            var n = 3600;
            !0 || (e.exports.init_response = r, e.exports.final_response = r)
        }, function (e, t) {
            e.exports = require("fs")
        }
    ]);
