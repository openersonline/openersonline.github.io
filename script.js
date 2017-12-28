function navigate(e, t) {
    var i = $(t).find(".eme_slide"),
        n = i.length,
        s = $(t).find(".eme_slide.active"),
        o = $(t).find(".carouselpager.active").index();
    i.removeClass("active"), "undefined" == typeof o ? counter += e : (counter = o + e, o = void 0), e === -1 && counter < 0 && (counter = n - 1), 1 !== e || i[counter] || (counter = 0), s = i[counter], $(s).addClass("active"), updatePager(s, t)
}

function updatePager(e, t) {
    var i = $(t).find($(e)).attr("data-slide"),
        n = $(t).find(".pagers button"),
        s = $(n).filter(function() {
            return $(this).data("pager") == i
        });
    $(t).find($(".pagers button")).removeClass("active"), $(s).addClass("active")
}

function setupSwipe() {
    var e = $("#emelightbox-content").find(".eme_slide"),
        t = $("#emelightbox-content");
    e.each(function(i) {
        function n(e, t) {
            var n, s, o, r, a, l, c, u = e[i],
                h = 25,
                d = 300,
                p = 300,
                f = t || function() {};
            u.addEventListener("touchstart", function(e) {
                var t = e.changedTouches[0];
                n = "none", dist = 0, s = t.pageX, o = t.pageY, c = (new Date).getTime(), e.preventDefault()
            }, !1), u.addEventListener("touchmove", function(e) {
                e.preventDefault()
            }, !1), u.addEventListener("touchend", function(e) {
                var t = e.changedTouches[0];
                r = t.pageX - s, a = t.pageY - o, l = (new Date).getTime() - c, l <= p && (Math.abs(r) >= h && Math.abs(a) <= d ? n = r < 0 ? "left" : "right" : Math.abs(a) >= h && Math.abs(r) <= d && (n = a < 0 ? "up" : "down")), f(n), e.preventDefault()
            }, !1)
        }
        var s = e;
        n(s, function(e) {
            "left" == e ? t.find($(".next")).trigger("click") : "right" == e ? t.find($(".prev")).trigger("click") : "up" == e ? t.find($(".prev")).trigger("click") : "down" == e && t.find($(".next")).trigger("click")
        })
    })
}

function checkAuth() {
    gapi.auth.authorize({
        client_id: OAUTH2_CLIENT_ID,
        scope: OAUTH2_SCOPES,
        immediate: !0
    }, handleAuthResult)
}

function handleAuthResult(e) {
    e && !e.error ? ($(".pre-auth").hide(), $(".post-auth").show(), loadAPIClientInterfaces()) : $("#login-link").click(function() {
        gapi.auth.authorize({
            client_id: OAUTH2_CLIENT_ID,
            scope: OAUTH2_SCOPES,
            immediate: !1
        }, handleAuthResult)
    })
}

function loadAPIClientInterfaces() {
    gapi.client.load("youtube", "v3", function() {
        handleAPILoaded()
    })
}! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function i(e) {
        var t = !!e && "length" in e && e.length,
            i = pe.type(e);
        return "function" !== i && !pe.isWindow(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function n(e, t, i) {
        if (pe.isFunction(t)) return pe.grep(e, function(e, n) {
            return !!t.call(e, n, e) !== i
        });
        if (t.nodeType) return pe.grep(e, function(e) {
            return e === t !== i
        });
        if ("string" == typeof t) {
            if (ke.test(t)) return pe.filter(t, e, i);
            t = pe.filter(t, e)
        }
        return pe.grep(e, function(e) {
            return pe.inArray(e, t) > -1 !== i
        })
    }

    function s(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function o(e) {
        var t = {};
        return pe.each(e.match(Pe) || [], function(e, i) {
            t[i] = !0
        }), t
    }

    function r() {
        ne.addEventListener ? (ne.removeEventListener("DOMContentLoaded", a), e.removeEventListener("load", a)) : (ne.detachEvent("onreadystatechange", a), e.detachEvent("onload", a))
    }

    function a() {
        (ne.addEventListener || "load" === e.event.type || "complete" === ne.readyState) && (r(), pe.ready())
    }

    function l(e, t, i) {
        if (void 0 === i && 1 === e.nodeType) {
            var n = "data-" + t.replace(ze, "-$1").toLowerCase();
            if (i = e.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : Ne.test(i) ? pe.parseJSON(i) : i)
                } catch (e) {}
                pe.data(e, t, i)
            } else i = void 0
        }
        return i
    }

    function c(e) {
        var t;
        for (t in e)
            if (("data" !== t || !pe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function u(e, t, i, n) {
        if (Ie(e)) {
            var s, o, r = pe.expando,
                a = e.nodeType,
                l = a ? pe.cache : e,
                c = a ? e[r] : e[r] && r;
            if (c && l[c] && (n || l[c].data) || void 0 !== i || "string" != typeof t) return c || (c = a ? e[r] = ie.pop() || pe.guid++ : r), l[c] || (l[c] = a ? {} : {
                toJSON: pe.noop
            }), "object" != typeof t && "function" != typeof t || (n ? l[c] = pe.extend(l[c], t) : l[c].data = pe.extend(l[c].data, t)), o = l[c], n || (o.data || (o.data = {}), o = o.data), void 0 !== i && (o[pe.camelCase(t)] = i), "string" == typeof t ? (s = o[t], null == s && (s = o[pe.camelCase(t)])) : s = o, s
        }
    }

    function h(e, t, i) {
        if (Ie(e)) {
            var n, s, o = e.nodeType,
                r = o ? pe.cache : e,
                a = o ? e[pe.expando] : pe.expando;
            if (r[a]) {
                if (t && (n = i ? r[a] : r[a].data)) {
                    pe.isArray(t) ? t = t.concat(pe.map(t, pe.camelCase)) : t in n ? t = [t] : (t = pe.camelCase(t), t = t in n ? [t] : t.split(" ")), s = t.length;
                    for (; s--;) delete n[t[s]];
                    if (i ? !c(n) : !pe.isEmptyObject(n)) return
                }(i || (delete r[a].data, c(r[a]))) && (o ? pe.cleanData([e], !0) : he.deleteExpando || r != r.window ? delete r[a] : r[a] = void 0)
            }
        }
    }

    function d(e, t, i, n) {
        var s, o = 1,
            r = 20,
            a = n ? function() {
                return n.cur()
            } : function() {
                return pe.css(e, t, "")
            },
            l = a(),
            c = i && i[3] || (pe.cssNumber[t] ? "" : "px"),
            u = (pe.cssNumber[t] || "px" !== c && +l) && je.exec(pe.css(e, t));
        if (u && u[3] !== c) {
            c = c || u[3], i = i || [], u = +l || 1;
            do o = o || ".5", u /= o, pe.style(e, t, u + c); while (o !== (o = a() / l) && 1 !== o && --r)
        }
        return i && (u = +u || +l || 0, s = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = u, n.end = s)), s
    }

    function p(e) {
        var t = Be.split("|"),
            i = e.createDocumentFragment();
        if (i.createElement)
            for (; t.length;) i.createElement(t.pop());
        return i
    }

    function f(e, t) {
        var i, n, s = 0,
            o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], i = e.childNodes || e; null != (n = i[s]); s++) !t || pe.nodeName(n, t) ? o.push(n) : pe.merge(o, f(n, t));
        return void 0 === t || t && pe.nodeName(e, t) ? pe.merge([e], o) : o
    }

    function g(e, t) {
        for (var i, n = 0; null != (i = e[n]); n++) pe._data(i, "globalEval", !t || pe._data(t[n], "globalEval"))
    }

    function m(e) {
        Fe.test(e.type) && (e.defaultChecked = e.checked)
    }

    function v(e, t, i, n, s) {
        for (var o, r, a, l, c, u, h, d = e.length, v = p(t), y = [], b = 0; b < d; b++)
            if (r = e[b], r || 0 === r)
                if ("object" === pe.type(r)) pe.merge(y, r.nodeType ? [r] : r);
                else if (Ye.test(r)) {
            for (l = l || v.appendChild(t.createElement("div")), c = (Re.exec(r) || ["", ""])[1].toLowerCase(), h = Ve[c] || Ve._default, l.innerHTML = h[1] + pe.htmlPrefilter(r) + h[2], o = h[0]; o--;) l = l.lastChild;
            if (!he.leadingWhitespace && qe.test(r) && y.push(t.createTextNode(qe.exec(r)[0])), !he.tbody)
                for (r = "table" !== c || Ue.test(r) ? "<table>" !== h[1] || Ue.test(r) ? 0 : l : l.firstChild, o = r && r.childNodes.length; o--;) pe.nodeName(u = r.childNodes[o], "tbody") && !u.childNodes.length && r.removeChild(u);
            for (pe.merge(y, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
            l = v.lastChild
        } else y.push(t.createTextNode(r));
        for (l && v.removeChild(l), he.appendChecked || pe.grep(f(y, "input"), m), b = 0; r = y[b++];)
            if (n && pe.inArray(r, n) > -1) s && s.push(r);
            else if (a = pe.contains(r.ownerDocument, r), l = f(v.appendChild(r), "script"), a && g(l), i)
            for (o = 0; r = l[o++];) We.test(r.type || "") && i.push(r);
        return l = null, v
    }

    function y() {
        return !0
    }

    function b() {
        return !1
    }

    function w() {
        try {
            return ne.activeElement
        } catch (e) {}
    }

    function x(e, t, i, n, s, o) {
        var r, a;
        if ("object" == typeof t) {
            "string" != typeof i && (n = n || i, i = void 0);
            for (a in t) x(e, a, i, n, t[a], o);
            return e
        }
        if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), s === !1) s = b;
        else if (!s) return e;
        return 1 === o && (r = s, s = function(e) {
            return pe().off(e), r.apply(this, arguments)
        }, s.guid = r.guid || (r.guid = pe.guid++)), e.each(function() {
            pe.event.add(this, t, s, n, i)
        })
    }

    function _(e, t) {
        return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function k(e) {
        return e.type = (null !== pe.find.attr(e, "type")) + "/" + e.type, e
    }

    function C(e) {
        var t = st.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function S(e, t) {
        if (1 === t.nodeType && pe.hasData(e)) {
            var i, n, s, o = pe._data(e),
                r = pe._data(t, o),
                a = o.events;
            if (a) {
                delete r.handle, r.events = {};
                for (i in a)
                    for (n = 0, s = a[i].length; n < s; n++) pe.event.add(t, i, a[i][n])
            }
            r.data && (r.data = pe.extend({}, r.data))
        }
    }

    function T(e, t) {
        var i, n, s;
        if (1 === t.nodeType) {
            if (i = t.nodeName.toLowerCase(), !he.noCloneEvent && t[pe.expando]) {
                s = pe._data(t);
                for (n in s.events) pe.removeEvent(t, n, s.handle);
                t.removeAttribute(pe.expando)
            }
            "script" === i && t.text !== e.text ? (k(t).text = e.text, C(t)) : "object" === i ? (t.parentNode && (t.outerHTML = e.outerHTML), he.html5Clone && e.innerHTML && !pe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === i && Fe.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === i ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue)
        }
    }

    function D(e, t, i, n) {
        t = oe.apply([], t);
        var s, o, r, a, l, c, u = 0,
            h = e.length,
            d = h - 1,
            p = t[0],
            g = pe.isFunction(p);
        if (g || h > 1 && "string" == typeof p && !he.checkClone && nt.test(p)) return e.each(function(s) {
            var o = e.eq(s);
            g && (t[0] = p.call(this, s, o.html())), D(o, t, i, n)
        });
        if (h && (c = v(t, e[0].ownerDocument, !1, e, n), s = c.firstChild, 1 === c.childNodes.length && (c = s), s || n)) {
            for (a = pe.map(f(c, "script"), k), r = a.length; u < h; u++) o = c, u !== d && (o = pe.clone(o, !0, !0), r && pe.merge(a, f(o, "script"))), i.call(e[u], o, u);
            if (r)
                for (l = a[a.length - 1].ownerDocument, pe.map(a, C), u = 0; u < r; u++) o = a[u], We.test(o.type || "") && !pe._data(o, "globalEval") && pe.contains(l, o) && (o.src ? pe._evalUrl && pe._evalUrl(o.src) : pe.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ot, "")));
            c = s = null
        }
        return e
    }

    function E(e, t, i) {
        for (var n, s = t ? pe.filter(t, e) : e, o = 0; null != (n = s[o]); o++) i || 1 !== n.nodeType || pe.cleanData(f(n)), n.parentNode && (i && pe.contains(n.ownerDocument, n) && g(f(n, "script")), n.parentNode.removeChild(n));
        return e
    }

    function P(e, t) {
        var i = pe(t.createElement(e)).appendTo(t.body),
            n = pe.css(i[0], "display");
        return i.detach(), n
    }

    function M(e) {
        var t = ne,
            i = ct[e];
        return i || (i = P(e, t), "none" !== i && i || (lt = (lt || pe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (lt[0].contentWindow || lt[0].contentDocument).document, t.write(), t.close(), i = P(e, t), lt.detach()), ct[e] = i), i
    }

    function A(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function I(e) {
        if (e in Ct) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), i = kt.length; i--;)
            if (e = kt[i] + t, e in Ct) return e
    }

    function N(e, t) {
        for (var i, n, s, o = [], r = 0, a = e.length; r < a; r++) n = e[r], n.style && (o[r] = pe._data(n, "olddisplay"), i = n.style.display, t ? (o[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && $e(n) && (o[r] = pe._data(n, "olddisplay", M(n.nodeName)))) : (s = $e(n), (i && "none" !== i || !s) && pe._data(n, "olddisplay", s ? i : pe.css(n, "display"))));
        for (r = 0; r < a; r++) n = e[r], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? o[r] || "" : "none"));
        return e
    }

    function z(e, t, i) {
        var n = wt.exec(t);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
    }

    function O(e, t, i, n, s) {
        for (var o = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; o < 4; o += 2) "margin" === i && (r += pe.css(e, i + He[o], !0, s)), n ? ("content" === i && (r -= pe.css(e, "padding" + He[o], !0, s)), "margin" !== i && (r -= pe.css(e, "border" + He[o] + "Width", !0, s))) : (r += pe.css(e, "padding" + He[o], !0, s), "padding" !== i && (r += pe.css(e, "border" + He[o] + "Width", !0, s)));
        return r
    }

    function j(e, t, i) {
        var n = !0,
            s = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = ft(e),
            r = he.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, o);
        if (s <= 0 || null == s) {
            if (s = gt(e, t, o), (s < 0 || null == s) && (s = e.style[t]), ht.test(s)) return s;
            n = r && (he.boxSizingReliable() || s === e.style[t]), s = parseFloat(s) || 0
        }
        return s + O(e, t, i || (r ? "border" : "content"), n, o) + "px"
    }

    function H(e, t, i, n, s) {
        return new H.prototype.init(e, t, i, n, s)
    }

    function $() {
        return e.setTimeout(function() {
            St = void 0
        }), St = pe.now()
    }

    function L(e, t) {
        var i, n = {
                height: e
            },
            s = 0;
        for (t = t ? 1 : 0; s < 4; s += 2 - t) i = He[s], n["margin" + i] = n["padding" + i] = e;
        return t && (n.opacity = n.width = e), n
    }

    function F(e, t, i) {
        for (var n, s = (q.tweeners[t] || []).concat(q.tweeners["*"]), o = 0, r = s.length; o < r; o++)
            if (n = s[o].call(i, t, e)) return n
    }

    function R(e, t, i) {
        var n, s, o, r, a, l, c, u, h = this,
            d = {},
            p = e.style,
            f = e.nodeType && $e(e),
            g = pe._data(e, "fxshow");
        i.queue || (a = pe._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, h.always(function() {
            h.always(function() {
                a.unqueued--, pe.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], c = pe.css(e, "display"), u = "none" === c ? pe._data(e, "olddisplay") || M(e.nodeName) : c, "inline" === u && "none" === pe.css(e, "float") && (he.inlineBlockNeedsLayout && "inline" !== M(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", he.shrinkWrapBlocks() || h.always(function() {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (n in t)
            if (s = t[n], Dt.exec(s)) {
                if (delete t[n], o = o || "toggle" === s, s === (f ? "hide" : "show")) {
                    if ("show" !== s || !g || void 0 === g[n]) continue;
                    f = !0
                }
                d[n] = g && g[n] || pe.style(e, n)
            } else c = void 0;
        if (pe.isEmptyObject(d)) "inline" === ("none" === c ? M(e.nodeName) : c) && (p.display = c);
        else {
            g ? "hidden" in g && (f = g.hidden) : g = pe._data(e, "fxshow", {}), o && (g.hidden = !f), f ? pe(e).show() : h.done(function() {
                pe(e).hide()
            }), h.done(function() {
                var t;
                pe._removeData(e, "fxshow");
                for (t in d) pe.style(e, t, d[t])
            });
            for (n in d) r = F(f ? g[n] : 0, n, h), n in g || (g[n] = r.start, f && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function W(e, t) {
        var i, n, s, o, r;
        for (i in e)
            if (n = pe.camelCase(i), s = t[n], o = e[i], pe.isArray(o) && (s = o[1], o = e[i] = o[0]), i !== n && (e[n] = o, delete e[i]), r = pe.cssHooks[n], r && "expand" in r) {
                o = r.expand(o), delete e[n];
                for (i in o) i in e || (e[i] = o[i], t[i] = s)
            } else t[n] = s
    }

    function q(e, t, i) {
        var n, s, o = 0,
            r = q.prefilters.length,
            a = pe.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var t = St || $(), i = Math.max(0, c.startTime + c.duration - t), n = i / c.duration || 0, o = 1 - n, r = 0, l = c.tweens.length; r < l; r++) c.tweens[r].run(o);
                return a.notifyWith(e, [c, o, i]), o < 1 && l ? i : (a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: pe.extend({}, t),
                opts: pe.extend(!0, {
                    specialEasing: {},
                    easing: pe.easing._default
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: St || $(),
                duration: i.duration,
                tweens: [],
                createTween: function(t, i) {
                    var n = pe.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(t) {
                    var i = 0,
                        n = t ? c.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; i < n; i++) c.tweens[i].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (W(u, c.opts.specialEasing); o < r; o++)
            if (n = q.prefilters[o].call(c, e, u, c.opts)) return pe.isFunction(n.stop) && (pe._queueHooks(c.elem, c.opts.queue).stop = pe.proxy(n.stop, n)), n;
        return pe.map(u, F, c), pe.isFunction(c.opts.start) && c.opts.start.call(e, c), pe.fx.timer(pe.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function B(e) {
        return pe.attr(e, "class") || ""
    }

    function V(e) {
        return function(t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, s = 0,
                o = t.toLowerCase().match(Pe) || [];
            if (pe.isFunction(i))
                for (; n = o[s++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }

    function Y(e, t, i, n) {
        function s(a) {
            var l;
            return o[a] = !0, pe.each(e[a] || [], function(e, a) {
                var c = a(t, i, n);
                return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
            }), l
        }
        var o = {},
            r = e === Zt;
        return s(t.dataTypes[0]) || !o["*"] && s("*")
    }

    function U(e, t) {
        var i, n, s = pe.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((s[n] ? e : i || (i = {}))[n] = t[n]);
        return i && pe.extend(!0, e, i), e
    }

    function X(e, t, i) {
        for (var n, s, o, r, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === s && (s = e.mimeType || t.getResponseHeader("Content-Type"));
        if (s)
            for (r in a)
                if (a[r] && a[r].test(s)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in i) o = l[0];
        else {
            for (r in i) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                n || (n = r)
            }
            o = o || n
        }
        if (o) return o !== l[0] && l.unshift(o), i[o]
    }

    function G(e, t, i, n) {
        var s, o, r, a, l, c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
        for (o = u.shift(); o;)
            if (e.responseFields[o] && (i[e.responseFields[o]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (r = c[l + " " + o] || c["* " + o], !r)
                for (s in c)
                    if (a = s.split(" "), a[1] === o && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                        r === !0 ? r = c[s] : c[s] !== !0 && (o = a[0], u.unshift(a[1]));
                        break
                    }
            if (r !== !0)
                if (r && e["throws"]) t = r(t);
                else try {
                    t = r(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: r ? e : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function Q(e) {
        return e.style && e.style.display || pe.css(e, "display")
    }

    function K(e) {
        if (!pe.contains(e.ownerDocument || ne, e)) return !0;
        for (; e && 1 === e.nodeType;) {
            if ("none" === Q(e) || "hidden" === e.type) return !0;
            e = e.parentNode
        }
        return !1
    }

    function Z(e, t, i, n) {
        var s;
        if (pe.isArray(t)) pe.each(t, function(t, s) {
            i || ni.test(e) ? n(e, s) : Z(e + "[" + ("object" == typeof s && null != s ? t : "") + "]", s, i, n)
        });
        else if (i || "object" !== pe.type(t)) n(e, t);
        else
            for (s in t) Z(e + "[" + s + "]", t[s], i, n)
    }

    function J() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }

    function ee() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function te(e) {
        return pe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var ie = [],
        ne = e.document,
        se = ie.slice,
        oe = ie.concat,
        re = ie.push,
        ae = ie.indexOf,
        le = {},
        ce = le.toString,
        ue = le.hasOwnProperty,
        he = {},
        de = "1.12.4",
        pe = function(e, t) {
            return new pe.fn.init(e, t)
        },
        fe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ge = /^-ms-/,
        me = /-([\da-z])/gi,
        ve = function(e, t) {
            return t.toUpperCase()
        };
    pe.fn = pe.prototype = {
        jquery: de,
        constructor: pe,
        selector: "",
        length: 0,
        toArray: function() {
            return se.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : se.call(this)
        },
        pushStack: function(e) {
            var t = pe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return pe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(pe.map(this, function(t, i) {
                return e.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(se.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                i = +e + (e < 0 ? t : 0);
            return this.pushStack(i >= 0 && i < t ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: re,
        sort: ie.sort,
        splice: ie.splice
    }, pe.extend = pe.fn.extend = function() {
        var e, t, i, n, s, o, r = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || pe.isFunction(r) || (r = {}), a === l && (r = this, a--); a < l; a++)
            if (null != (s = arguments[a]))
                for (n in s) e = r[n], i = s[n], r !== i && (c && i && (pe.isPlainObject(i) || (t = pe.isArray(i))) ? (t ? (t = !1, o = e && pe.isArray(e) ? e : []) : o = e && pe.isPlainObject(e) ? e : {}, r[n] = pe.extend(c, o, i)) : void 0 !== i && (r[n] = i));
        return r
    }, pe.extend({
        expando: "jQuery" + (de + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === pe.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === pe.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !pe.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== pe.type(e) || e.nodeType || pe.isWindow(e)) return !1;
            try {
                if (e.constructor && !ue.call(e, "constructor") && !ue.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            if (!he.ownFirst)
                for (t in e) return ue.call(e, t);
            for (t in e);
            return void 0 === t || ue.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ce.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && pe.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(ge, "ms-").replace(me, ve)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, s = 0;
            if (i(e))
                for (n = e.length; s < n && t.call(e[s], s, e[s]) !== !1; s++);
            else
                for (s in e)
                    if (t.call(e[s], s, e[s]) === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(fe, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? pe.merge(n, "string" == typeof e ? [e] : e) : re.call(n, e)), n
        },
        inArray: function(e, t, i) {
            var n;
            if (t) {
                if (ae) return ae.call(t, e, i);
                for (n = t.length, i = i ? i < 0 ? Math.max(0, n + i) : i : 0; i < n; i++)
                    if (i in t && t[i] === e) return i
            }
            return -1
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, s = e.length; n < i;) e[s++] = t[n++];
            if (i !== i)
                for (; void 0 !== t[n];) e[s++] = t[n++];
            return e.length = s, e
        },
        grep: function(e, t, i) {
            for (var n, s = [], o = 0, r = e.length, a = !i; o < r; o++) n = !t(e[o], o), n !== a && s.push(e[o]);
            return s
        },
        map: function(e, t, n) {
            var s, o, r = 0,
                a = [];
            if (i(e))
                for (s = e.length; r < s; r++) o = t(e[r], r, n), null != o && a.push(o);
            else
                for (r in e) o = t(e[r], r, n), null != o && a.push(o);
            return oe.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var i, n, s;
            if ("string" == typeof t && (s = e[t], t = e, e = s), pe.isFunction(e)) return i = se.call(arguments, 2), n = function() {
                return e.apply(t || this, i.concat(se.call(arguments)))
            }, n.guid = e.guid = e.guid || pe.guid++, n
        },
        now: function() {
            return +new Date
        },
        support: he
    }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ie[Symbol.iterator]), pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        le["[object " + t + "]"] = t.toLowerCase()
    });
    var ye = function(e) {
        function t(e, t, i, n) {
            var s, o, r, a, l, c, h, p, f = t && t.ownerDocument,
                g = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return i;
            if (!n && ((t ? t.ownerDocument || t : F) !== I && A(t), t = t || I, z)) {
                if (11 !== g && (c = ve.exec(e)))
                    if (s = c[1]) {
                        if (9 === g) {
                            if (!(r = t.getElementById(s))) return i;
                            if (r.id === s) return i.push(r), i
                        } else if (f && (r = f.getElementById(s)) && $(t, r) && r.id === s) return i.push(r), i
                    } else {
                        if (c[2]) return Z.apply(i, t.getElementsByTagName(e)), i;
                        if ((s = c[3]) && x.getElementsByClassName && t.getElementsByClassName) return Z.apply(i, t.getElementsByClassName(s)), i
                    }
                if (x.qsa && !V[e + " "] && (!O || !O.test(e))) {
                    if (1 !== g) f = t, p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(be, "\\$&") : t.setAttribute("id", a = L), h = S(e), o = h.length, l = de.test(a) ? "#" + a : "[id='" + a + "']"; o--;) h[o] = l + " " + d(h[o]);
                        p = h.join(","), f = ye.test(e) && u(t.parentNode) || t
                    }
                    if (p) try {
                        return Z.apply(i, f.querySelectorAll(p)), i
                    } catch (e) {} finally {
                        a === L && t.removeAttribute("id")
                    }
                }
            }
            return D(e.replace(ae, "$1"), t, i, n)
        }

        function i() {
            function e(i, n) {
                return t.push(i + " ") > _.cacheLength && delete e[t.shift()], e[i + " "] = n
            }
            var t = [];
            return e
        }

        function n(e) {
            return e[L] = !0, e
        }

        function s(e) {
            var t = I.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var i = e.split("|"), n = i.length; n--;) _.attrHandle[i[n]] = t
        }

        function r(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }

        function c(e) {
            return n(function(t) {
                return t = +t, n(function(i, n) {
                    for (var s, o = e([], i.length, t), r = o.length; r--;) i[s = o[r]] && (i[s] = !(n[s] = i[s]))
                })
            })
        }

        function u(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function h() {}

        function d(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
            return n
        }

        function p(e, t, i) {
            var n = t.dir,
                s = i && "parentNode" === n,
                o = W++;
            return t.first ? function(t, i, o) {
                for (; t = t[n];)
                    if (1 === t.nodeType || s) return e(t, i, o)
            } : function(t, i, r) {
                var a, l, c, u = [R, o];
                if (r) {
                    for (; t = t[n];)
                        if ((1 === t.nodeType || s) && e(t, i, r)) return !0
                } else
                    for (; t = t[n];)
                        if (1 === t.nodeType || s) {
                            if (c = t[L] || (t[L] = {}), l = c[t.uniqueID] || (c[t.uniqueID] = {}), (a = l[n]) && a[0] === R && a[1] === o) return u[2] = a[2];
                            if (l[n] = u, u[2] = e(t, i, r)) return !0
                        }
            }
        }

        function f(e) {
            return e.length > 1 ? function(t, i, n) {
                for (var s = e.length; s--;)
                    if (!e[s](t, i, n)) return !1;
                return !0
            } : e[0]
        }

        function g(e, i, n) {
            for (var s = 0, o = i.length; s < o; s++) t(e, i[s], n);
            return n
        }

        function m(e, t, i, n, s) {
            for (var o, r = [], a = 0, l = e.length, c = null != t; a < l; a++)(o = e[a]) && (i && !i(o, n, s) || (r.push(o), c && t.push(a)));
            return r
        }

        function v(e, t, i, s, o, r) {
            return s && !s[L] && (s = v(s)), o && !o[L] && (o = v(o, r)), n(function(n, r, a, l) {
                var c, u, h, d = [],
                    p = [],
                    f = r.length,
                    v = n || g(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !n && t ? v : m(v, d, e, a, l),
                    b = i ? o || (n ? e : f || s) ? [] : r : y;
                if (i && i(y, b, a, l), s)
                    for (c = m(b, p), s(c, [], a, l), u = c.length; u--;)(h = c[u]) && (b[p[u]] = !(y[p[u]] = h));
                if (n) {
                    if (o || e) {
                        if (o) {
                            for (c = [], u = b.length; u--;)(h = b[u]) && c.push(y[u] = h);
                            o(null, b = [], c, l)
                        }
                        for (u = b.length; u--;)(h = b[u]) && (c = o ? ee(n, h) : d[u]) > -1 && (n[c] = !(r[c] = h))
                    }
                } else b = m(b === r ? b.splice(f, b.length) : b), o ? o(null, r, b, l) : Z.apply(r, b)
            })
        }

        function y(e) {
            for (var t, i, n, s = e.length, o = _.relative[e[0].type], r = o || _.relative[" "], a = o ? 1 : 0, l = p(function(e) {
                    return e === t
                }, r, !0), c = p(function(e) {
                    return ee(t, e) > -1
                }, r, !0), u = [function(e, i, n) {
                    var s = !o && (n || i !== E) || ((t = i).nodeType ? l(e, i, n) : c(e, i, n));
                    return t = null, s
                }]; a < s; a++)
                if (i = _.relative[e[a].type]) u = [p(f(u), i)];
                else {
                    if (i = _.filter[e[a].type].apply(null, e[a].matches), i[L]) {
                        for (n = ++a; n < s && !_.relative[e[n].type]; n++);
                        return v(a > 1 && f(u), a > 1 && d(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ae, "$1"), i, a < n && y(e.slice(a, n)), n < s && y(e = e.slice(n)), n < s && d(e))
                    }
                    u.push(i)
                }
            return f(u)
        }

        function b(e, i) {
            var s = i.length > 0,
                o = e.length > 0,
                r = function(n, r, a, l, c) {
                    var u, h, d, p = 0,
                        f = "0",
                        g = n && [],
                        v = [],
                        y = E,
                        b = n || o && _.find.TAG("*", c),
                        w = R += null == y ? 1 : Math.random() || .1,
                        x = b.length;
                    for (c && (E = r === I || r || c); f !== x && null != (u = b[f]); f++) {
                        if (o && u) {
                            for (h = 0, r || u.ownerDocument === I || (A(u), a = !z); d = e[h++];)
                                if (d(u, r || I, a)) {
                                    l.push(u);
                                    break
                                }
                            c && (R = w)
                        }
                        s && ((u = !d && u) && p--, n && g.push(u))
                    }
                    if (p += f, s && f !== p) {
                        for (h = 0; d = i[h++];) d(g, v, r, a);
                        if (n) {
                            if (p > 0)
                                for (; f--;) g[f] || v[f] || (v[f] = Q.call(l));
                            v = m(v)
                        }
                        Z.apply(l, v), c && !n && v.length > 0 && p + i.length > 1 && t.uniqueSort(l)
                    }
                    return c && (R = w, E = y), g
                };
            return s ? n(r) : r
        }
        var w, x, _, k, C, S, T, D, E, P, M, A, I, N, z, O, j, H, $, L = "sizzle" + 1 * new Date,
            F = e.document,
            R = 0,
            W = 0,
            q = i(),
            B = i(),
            V = i(),
            Y = function(e, t) {
                return e === t && (M = !0), 0
            },
            U = 1 << 31,
            X = {}.hasOwnProperty,
            G = [],
            Q = G.pop,
            K = G.push,
            Z = G.push,
            J = G.slice,
            ee = function(e, t) {
                for (var i = 0, n = e.length; i < n; i++)
                    if (e[i] === t) return i;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ie = "[\\x20\\t\\r\\n\\f]",
            ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            se = "\\[" + ie + "*(" + ne + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + ie + "*\\]",
            oe = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + se + ")*)|.*)\\)|)",
            re = new RegExp(ie + "+", "g"),
            ae = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
            le = new RegExp("^" + ie + "*," + ie + "*"),
            ce = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
            ue = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
            he = new RegExp(oe),
            de = new RegExp("^" + ne + "$"),
            pe = {
                ID: new RegExp("^#(" + ne + ")"),
                CLASS: new RegExp("^\\.(" + ne + ")"),
                TAG: new RegExp("^(" + ne + "|[*])"),
                ATTR: new RegExp("^" + se),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
            },
            fe = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            me = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            be = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
            xe = function(e, t, i) {
                var n = "0x" + t - 65536;
                return n !== n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            _e = function() {
                A()
            };
        try {
            Z.apply(G = J.call(F.childNodes), F.childNodes), G[F.childNodes.length].nodeType
        } catch (e) {
            Z = {
                apply: G.length ? function(e, t) {
                    K.apply(e, J.call(t))
                } : function(e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }
        x = t.support = {}, C = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, A = t.setDocument = function(e) {
            var t, i, n = e ? e.ownerDocument || e : F;
            return n !== I && 9 === n.nodeType && n.documentElement ? (I = n, N = I.documentElement, z = !C(I), (i = I.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", _e, !1) : i.attachEvent && i.attachEvent("onunload", _e)), x.attributes = s(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = s(function(e) {
                return e.appendChild(I.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = me.test(I.getElementsByClassName), x.getById = s(function(e) {
                return N.appendChild(e).id = L, !I.getElementsByName || !I.getElementsByName(L).length
            }), x.getById ? (_.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && z) {
                    var i = t.getElementById(e);
                    return i ? [i] : []
                }
            }, _.filter.ID = function(e) {
                var t = e.replace(we, xe);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete _.find.ID, _.filter.ID = function(e) {
                var t = e.replace(we, xe);
                return function(e) {
                    var i = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return i && i.value === t
                }
            }), _.find.TAG = x.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var i, n = [],
                    s = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; i = o[s++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return o
            }, _.find.CLASS = x.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && z) return t.getElementsByClassName(e)
            }, j = [], O = [], (x.qsa = me.test(I.querySelectorAll)) && (s(function(e) {
                N.appendChild(e).innerHTML = "<a id='" + L + "'></a><select id='" + L + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ie + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ie + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + L + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + L + "+*").length || O.push(".#.+[+~]")
            }), s(function(e) {
                var t = I.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ie + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
            })), (x.matchesSelector = me.test(H = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && s(function(e) {
                x.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), j.push("!=", oe)
            }), O = O.length && new RegExp(O.join("|")), j = j.length && new RegExp(j.join("|")), t = me.test(N.compareDocumentPosition), $ = t || me.test(N.contains) ? function(e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e,
                    n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, Y = t ? function(e, t) {
                if (e === t) return M = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !x.sortDetached && t.compareDocumentPosition(e) === i ? e === I || e.ownerDocument === F && $(F, e) ? -1 : t === I || t.ownerDocument === F && $(F, t) ? 1 : P ? ee(P, e) - ee(P, t) : 0 : 4 & i ? -1 : 1)
            } : function(e, t) {
                if (e === t) return M = !0, 0;
                var i, n = 0,
                    s = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    l = [t];
                if (!s || !o) return e === I ? -1 : t === I ? 1 : s ? -1 : o ? 1 : P ? ee(P, e) - ee(P, t) : 0;
                if (s === o) return r(e, t);
                for (i = e; i = i.parentNode;) a.unshift(i);
                for (i = t; i = i.parentNode;) l.unshift(i);
                for (; a[n] === l[n];) n++;
                return n ? r(a[n], l[n]) : a[n] === F ? -1 : l[n] === F ? 1 : 0
            }, I) : I
        }, t.matches = function(e, i) {
            return t(e, null, null, i)
        }, t.matchesSelector = function(e, i) {
            if ((e.ownerDocument || e) !== I && A(e), i = i.replace(ue, "='$1']"), x.matchesSelector && z && !V[i + " "] && (!j || !j.test(i)) && (!O || !O.test(i))) try {
                var n = H.call(e, i);
                if (n || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (e) {}
            return t(i, I, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== I && A(e), $(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== I && A(e);
            var i = _.attrHandle[t.toLowerCase()],
                n = i && X.call(_.attrHandle, t.toLowerCase()) ? i(e, t, !z) : void 0;
            return void 0 !== n ? n : x.attributes || !z ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, i = [],
                n = 0,
                s = 0;
            if (M = !x.detectDuplicates, P = !x.sortStable && e.slice(0), e.sort(Y), M) {
                for (; t = e[s++];) t === e[s] && (n = i.push(s));
                for (; n--;) e.splice(i[n], 1)
            }
            return P = null, e
        }, k = t.getText = function(e) {
            var t, i = "",
                n = 0,
                s = e.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) i += k(e)
                } else if (3 === s || 4 === s) return e.nodeValue
            } else
                for (; t = e[n++];) i += k(t);
            return i
        }, _ = t.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(we, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(we, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, i = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && he.test(i) && (t = S(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(we, xe).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = q[e + " "];
                    return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && q(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, i, n) {
                    return function(s) {
                        var o = t.attr(s, e);
                        return null == o ? "!=" === i : !i || (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o.replace(re, " ") + " ").indexOf(n) > -1 : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, i, n, s) {
                    var o = "nth" !== e.slice(0, 3),
                        r = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === n && 0 === s ? function(e) {
                        return !!e.parentNode
                    } : function(t, i, l) {
                        var c, u, h, d, p, f, g = o !== r ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !l && !a,
                            b = !1;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (d = t; d = d[g];)
                                        if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    f = g = "only" === e && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [r ? m.firstChild : m.lastChild], r && y) {
                                for (d = m, h = d[L] || (d[L] = {}), u = h[d.uniqueID] || (h[d.uniqueID] = {}), c = u[e] || [], p = c[0] === R && c[1], b = p && c[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || f.pop();)
                                    if (1 === d.nodeType && ++b && d === t) {
                                        u[e] = [R, p, b];
                                        break
                                    }
                            } else if (y && (d = t, h = d[L] || (d[L] = {}), u = h[d.uniqueID] || (h[d.uniqueID] = {}), c = u[e] || [], p = c[0] === R && c[1], b = p), b === !1)
                                for (;
                                    (d = ++p && d && d[g] || (b = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && (h = d[L] || (d[L] = {}), u = h[d.uniqueID] || (h[d.uniqueID] = {}), u[e] = [R, b]), d !== t)););
                            return b -= s, b === n || b % n === 0 && b / n >= 0
                        }
                    }
                },
                PSEUDO: function(e, i) {
                    var s, o = _.pseudos[e] || _.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[L] ? o(i) : o.length > 1 ? (s = [e, e, "", i], _.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function(e, t) {
                        for (var n, s = o(e, i), r = s.length; r--;) n = ee(e, s[r]), e[n] = !(t[n] = s[r])
                    }) : function(e) {
                        return o(e, 0, s)
                    }) : o
                }
            },
            pseudos: {
                not: n(function(e) {
                    var t = [],
                        i = [],
                        s = T(e.replace(ae, "$1"));
                    return s[L] ? n(function(e, t, i, n) {
                        for (var o, r = s(e, null, n, []), a = e.length; a--;)(o = r[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, n, o) {
                        return t[0] = e, s(t, null, o, i), t[0] = null, !i.pop()
                    }
                }),
                has: n(function(e) {
                    return function(i) {
                        return t(e, i).length > 0
                    }
                }),
                contains: n(function(e) {
                    return e = e.replace(we, xe),
                        function(t) {
                            return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                        }
                }),
                lang: n(function(e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, xe).toLowerCase(),
                        function(t) {
                            var i;
                            do
                                if (i = z ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === e || 0 === i.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var i = e.location && e.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(e) {
                    return e === N
                },
                focus: function(e) {
                    return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !_.pseudos.empty(e)
                },
                header: function(e) {
                    return ge.test(e.nodeName)
                },
                input: function(e) {
                    return fe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, i) {
                    return [i < 0 ? i + t : i]
                }),
                even: c(function(e, t) {
                    for (var i = 0; i < t; i += 2) e.push(i);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var i = 1; i < t; i += 2) e.push(i);
                    return e
                }),
                lt: c(function(e, t, i) {
                    for (var n = i < 0 ? i + t : i; --n >= 0;) e.push(n);
                    return e
                }),
                gt: c(function(e, t, i) {
                    for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
                    return e
                })
            }
        }, _.pseudos.nth = _.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) _.pseudos[w] = a(w);
        for (w in {
                submit: !0,
                reset: !0
            }) _.pseudos[w] = l(w);
        return h.prototype = _.filters = _.pseudos, _.setFilters = new h, S = t.tokenize = function(e, i) {
            var n, s, o, r, a, l, c, u = B[e + " "];
            if (u) return i ? 0 : u.slice(0);
            for (a = e, l = [], c = _.preFilter; a;) {
                n && !(s = le.exec(a)) || (s && (a = a.slice(s[0].length) || a), l.push(o = [])), n = !1, (s = ce.exec(a)) && (n = s.shift(), o.push({
                    value: n,
                    type: s[0].replace(ae, " ")
                }), a = a.slice(n.length));
                for (r in _.filter) !(s = pe[r].exec(a)) || c[r] && !(s = c[r](s)) || (n = s.shift(), o.push({
                    value: n,
                    type: r,
                    matches: s
                }), a = a.slice(n.length));
                if (!n) break
            }
            return i ? a.length : a ? t.error(e) : B(e, l).slice(0)
        }, T = t.compile = function(e, t) {
            var i, n = [],
                s = [],
                o = V[e + " "];
            if (!o) {
                for (t || (t = S(e)), i = t.length; i--;) o = y(t[i]), o[L] ? n.push(o) : s.push(o);
                o = V(e, b(s, n)), o.selector = e
            }
            return o
        }, D = t.select = function(e, t, i, n) {
            var s, o, r, a, l, c = "function" == typeof e && e,
                h = !n && S(e = c.selector || e);
            if (i = i || [], 1 === h.length) {
                if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (r = o[0]).type && x.getById && 9 === t.nodeType && z && _.relative[o[1].type]) {
                    if (t = (_.find.ID(r.matches[0].replace(we, xe), t) || [])[0], !t) return i;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (s = pe.needsContext.test(e) ? 0 : o.length; s-- && (r = o[s], !_.relative[a = r.type]);)
                    if ((l = _.find[a]) && (n = l(r.matches[0].replace(we, xe), ye.test(o[0].type) && u(t.parentNode) || t))) {
                        if (o.splice(s, 1), e = n.length && d(o), !e) return Z.apply(i, n), i;
                        break
                    }
            }
            return (c || T(e, h))(n, t, !z, i, !t || ye.test(e) && u(t.parentNode) || t), i
        }, x.sortStable = L.split("").sort(Y).join("") === L, x.detectDuplicates = !!M, A(), x.sortDetached = s(function(e) {
            return 1 & e.compareDocumentPosition(I.createElement("div"))
        }), s(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, i) {
            if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && s(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, i) {
            if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), s(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function(e, t, i) {
            var n;
            if (!i) return e[t] === !0 ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), t
    }(e);
    pe.find = ye, pe.expr = ye.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = ye.uniqueSort, pe.text = ye.getText, pe.isXMLDoc = ye.isXML, pe.contains = ye.contains;
    var be = function(e, t, i) {
            for (var n = [], s = void 0 !== i;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (s && pe(e).is(i)) break;
                    n.push(e)
                }
            return n
        },
        we = function(e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        },
        xe = pe.expr.match.needsContext,
        _e = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        ke = /^.[^:#\[\.,]*$/;
    pe.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? pe.find.matchesSelector(n, e) ? [n] : [] : pe.find.matches(e, pe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, pe.fn.extend({
        find: function(e) {
            var t, i = [],
                n = this,
                s = n.length;
            if ("string" != typeof e) return this.pushStack(pe(e).filter(function() {
                for (t = 0; t < s; t++)
                    if (pe.contains(n[t], this)) return !0
            }));
            for (t = 0; t < s; t++) pe.find(e, n[t], i);
            return i = this.pushStack(s > 1 ? pe.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function(e) {
            return this.pushStack(n(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(n(this, e || [], !0))
        },
        is: function(e) {
            return !!n(this, "string" == typeof e && xe.test(e) ? pe(e) : e || [], !1).length
        }
    });
    var Ce, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        Te = pe.fn.init = function(e, t, i) {
            var n, s;
            if (!e) return this;
            if (i = i || Ce, "string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Se.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), _e.test(n[1]) && pe.isPlainObject(t))
                        for (n in t) pe.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (s = ne.getElementById(n[2]), s && s.parentNode) {
                    if (s.id !== n[2]) return Ce.find(e);
                    this.length = 1, this[0] = s
                }
                return this.context = ne, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : pe.isFunction(e) ? "undefined" != typeof i.ready ? i.ready(e) : e(pe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), pe.makeArray(e, this))
        };
    Te.prototype = pe.fn, Ce = pe(ne);
    var De = /^(?:parents|prev(?:Until|All))/,
        Ee = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    pe.fn.extend({
        has: function(e) {
            var t, i = pe(e, this),
                n = i.length;
            return this.filter(function() {
                for (t = 0; t < n; t++)
                    if (pe.contains(this, i[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var i, n = 0, s = this.length, o = [], r = xe.test(e) || "string" != typeof e ? pe(e, t || this.context) : 0; n < s; n++)
                for (i = this[n]; i && i !== t; i = i.parentNode)
                    if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && pe.find.matchesSelector(i, e))) {
                        o.push(i);
                        break
                    }
            return this.pushStack(o.length > 1 ? pe.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? pe.inArray(this[0], pe(e)) : pe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), pe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return be(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return be(e, "parentNode", i)
        },
        next: function(e) {
            return s(e, "nextSibling")
        },
        prev: function(e) {
            return s(e, "previousSibling")
        },
        nextAll: function(e) {
            return be(e, "nextSibling")
        },
        prevAll: function(e) {
            return be(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return be(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return be(e, "previousSibling", i)
        },
        siblings: function(e) {
            return we((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return we(e.firstChild)
        },
        contents: function(e) {
            return pe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : pe.merge([], e.childNodes)
        }
    }, function(e, t) {
        pe.fn[e] = function(i, n) {
            var s = pe.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (s = pe.filter(n, s)), this.length > 1 && (Ee[e] || (s = pe.uniqueSort(s)), De.test(e) && (s = s.reverse())), this.pushStack(s)
        }
    });
    var Pe = /\S+/g;
    pe.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) : pe.extend({}, e);
        var t, i, n, s, r = [],
            a = [],
            l = -1,
            c = function() {
                for (s = e.once, n = t = !0; a.length; l = -1)
                    for (i = a.shift(); ++l < r.length;) r[l].apply(i[0], i[1]) === !1 && e.stopOnFalse && (l = r.length, i = !1);
                e.memory || (i = !1), t = !1, s && (r = i ? [] : "")
            },
            u = {
                add: function() {
                    return r && (i && !t && (l = r.length - 1, a.push(i)), function t(i) {
                        pe.each(i, function(i, n) {
                            pe.isFunction(n) ? e.unique && u.has(n) || r.push(n) : n && n.length && "string" !== pe.type(n) && t(n)
                        })
                    }(arguments), i && !t && c()), this
                },
                remove: function() {
                    return pe.each(arguments, function(e, t) {
                        for (var i;
                            (i = pe.inArray(t, r, i)) > -1;) r.splice(i, 1), i <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? pe.inArray(e, r) > -1 : r.length > 0
                },
                empty: function() {
                    return r && (r = []), this
                },
                disable: function() {
                    return s = a = [], r = i = "", this
                },
                disabled: function() {
                    return !r
                },
                lock: function() {
                    return s = !0, i || u.disable(), this
                },
                locked: function() {
                    return !!s
                },
                fireWith: function(e, i) {
                    return s || (i = i || [], i = [e, i.slice ? i.slice() : i], a.push(i), t || c()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return u
    }, pe.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", pe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", pe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", pe.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return pe.Deferred(function(i) {
                            pe.each(t, function(t, o) {
                                var r = pe.isFunction(e[t]) && e[t];
                                s[o[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && pe.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[o[0] + "With"](this === n ? i.promise() : this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? pe.extend(e, n) : n
                    }
                },
                s = {};
            return n.pipe = n.then, pe.each(t, function(e, o) {
                var r = o[2],
                    a = o[3];
                n[o[1]] = r.add, a && r.add(function() {
                    i = a
                }, t[1 ^ e][2].disable, t[2][2].lock), s[o[0]] = function() {
                    return s[o[0] + "With"](this === s ? n : this, arguments), this
                }, s[o[0] + "With"] = r.fireWith
            }), n.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var t, i, n, s = 0,
                o = se.call(arguments),
                r = o.length,
                a = 1 !== r || e && pe.isFunction(e.promise) ? r : 0,
                l = 1 === a ? e : pe.Deferred(),
                c = function(e, i, n) {
                    return function(s) {
                        i[e] = this, n[e] = arguments.length > 1 ? se.call(arguments) : s, n === t ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (r > 1)
                for (t = new Array(r), i = new Array(r), n = new Array(r); s < r; s++) o[s] && pe.isFunction(o[s].promise) ? o[s].promise().progress(c(s, i, t)).done(c(s, n, o)).fail(l.reject) : --a;
            return a || l.resolveWith(n, o), l.promise()
        }
    });
    var Me;
    pe.fn.ready = function(e) {
        return pe.ready.promise().done(e), this
    }, pe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? pe.readyWait++ : pe.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, e !== !0 && --pe.readyWait > 0 || (Me.resolveWith(ne, [pe]), pe.fn.triggerHandler && (pe(ne).triggerHandler("ready"), pe(ne).off("ready"))))
        }
    }), pe.ready.promise = function(t) {
        if (!Me)
            if (Me = pe.Deferred(), "complete" === ne.readyState || "loading" !== ne.readyState && !ne.documentElement.doScroll) e.setTimeout(pe.ready);
            else if (ne.addEventListener) ne.addEventListener("DOMContentLoaded", a), e.addEventListener("load", a);
        else {
            ne.attachEvent("onreadystatechange", a), e.attachEvent("onload", a);
            var i = !1;
            try {
                i = null == e.frameElement && ne.documentElement
            } catch (e) {}
            i && i.doScroll && ! function t() {
                if (!pe.isReady) {
                    try {
                        i.doScroll("left")
                    } catch (i) {
                        return e.setTimeout(t, 50)
                    }
                    r(), pe.ready()
                }
            }()
        }
        return Me.promise(t)
    }, pe.ready.promise();
    var Ae;
    for (Ae in pe(he)) break;
    he.ownFirst = "0" === Ae, he.inlineBlockNeedsLayout = !1, pe(function() {
            var e, t, i, n;
            i = ne.getElementsByTagName("body")[0], i && i.style && (t = ne.createElement("div"), n = ne.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", he.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (i.style.zoom = 1)), i.removeChild(n))
        }),
        function() {
            var e = ne.createElement("div");
            he.deleteExpando = !0;
            try {
                delete e.test
            } catch (e) {
                he.deleteExpando = !1
            }
            e = null
        }();
    var Ie = function(e) {
            var t = pe.noData[(e.nodeName + " ").toLowerCase()],
                i = +e.nodeType || 1;
            return (1 === i || 9 === i) && (!t || t !== !0 && e.getAttribute("classid") === t)
        },
        Ne = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ze = /([A-Z])/g;
    pe.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando], !!e && !c(e)
            },
            data: function(e, t, i) {
                return u(e, t, i)
            },
            removeData: function(e, t) {
                return h(e, t)
            },
            _data: function(e, t, i) {
                return u(e, t, i, !0)
            },
            _removeData: function(e, t) {
                return h(e, t, !0)
            }
        }), pe.fn.extend({
            data: function(e, t) {
                var i, n, s, o = this[0],
                    r = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (s = pe.data(o), 1 === o.nodeType && !pe._data(o, "parsedAttrs"))) {
                        for (i = r.length; i--;) r[i] && (n = r[i].name, 0 === n.indexOf("data-") && (n = pe.camelCase(n.slice(5)), l(o, n, s[n])));
                        pe._data(o, "parsedAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof e ? this.each(function() {
                    pe.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    pe.data(this, e, t)
                }) : o ? l(o, e, pe.data(o, e)) : void 0
            },
            removeData: function(e) {
                return this.each(function() {
                    pe.removeData(this, e)
                })
            }
        }), pe.extend({
            queue: function(e, t, i) {
                var n;
                if (e) return t = (t || "fx") + "queue", n = pe._data(e, t), i && (!n || pe.isArray(i) ? n = pe._data(e, t, pe.makeArray(i)) : n.push(i)), n || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var i = pe.queue(e, t),
                    n = i.length,
                    s = i.shift(),
                    o = pe._queueHooks(e, t),
                    r = function() {
                        pe.dequeue(e, t)
                    };
                "inprogress" === s && (s = i.shift(), n--), s && ("fx" === t && i.unshift("inprogress"), delete o.stop, s.call(e, r, o)), !n && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var i = t + "queueHooks";
                return pe._data(e, i) || pe._data(e, i, {
                    empty: pe.Callbacks("once memory").add(function() {
                        pe._removeData(e, t + "queue"), pe._removeData(e, i)
                    })
                })
            }
        }), pe.fn.extend({
            queue: function(e, t) {
                var i = 2;
                return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? pe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var i = pe.queue(this, e, t);
                    pe._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && pe.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    pe.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var i, n = 1,
                    s = pe.Deferred(),
                    o = this,
                    r = this.length,
                    a = function() {
                        --n || s.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;) i = pe._data(o[r], e + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
                return a(), s.promise(t)
            }
        }),
        function() {
            var e;
            he.shrinkWrapBlocks = function() {
                if (null != e) return e;
                e = !1;
                var t, i, n;
                return i = ne.getElementsByTagName("body")[0], i && i.style ? (t = ne.createElement("div"), n = ne.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ne.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), i.removeChild(n), e) : void 0
            }
        }();
    var Oe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        je = new RegExp("^(?:([+-])=|)(" + Oe + ")([a-z%]*)$", "i"),
        He = ["Top", "Right", "Bottom", "Left"],
        $e = function(e, t) {
            return e = t || e, "none" === pe.css(e, "display") || !pe.contains(e.ownerDocument, e)
        },
        Le = function(e, t, i, n, s, o, r) {
            var a = 0,
                l = e.length,
                c = null == i;
            if ("object" === pe.type(i)) {
                s = !0;
                for (a in i) Le(e, t, a, i[a], !0, o, r)
            } else if (void 0 !== n && (s = !0, pe.isFunction(n) || (r = !0), c && (r ? (t.call(e, n), t = null) : (c = t, t = function(e, t, i) {
                    return c.call(pe(e), i)
                })), t))
                for (; a < l; a++) t(e[a], i, r ? n : n.call(e[a], a, t(e[a], i)));
            return s ? e : c ? t.call(e) : l ? t(e[0], i) : o
        },
        Fe = /^(?:checkbox|radio)$/i,
        Re = /<([\w:-]+)/,
        We = /^$|\/(?:java|ecma)script/i,
        qe = /^\s+/,
        Be = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    ! function() {
        var e = ne.createElement("div"),
            t = ne.createDocumentFragment(),
            i = ne.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", he.leadingWhitespace = 3 === e.firstChild.nodeType, he.tbody = !e.getElementsByTagName("tbody").length, he.htmlSerialize = !!e.getElementsByTagName("link").length, he.html5Clone = "<:nav></:nav>" !== ne.createElement("nav").cloneNode(!0).outerHTML, i.type = "checkbox", i.checked = !0, t.appendChild(i), he.appendChecked = i.checked, e.innerHTML = "<textarea>x</textarea>", he.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), i = ne.createElement("input"), i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), he.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, he.noCloneEvent = !!e.addEventListener, e[pe.expando] = 1, he.attributes = !e.getAttribute(pe.expando)
    }();
    var Ve = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: he.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td;
    var Ye = /<|&#?\w+;/,
        Ue = /<tbody/i;
    ! function() {
        var t, i, n = ne.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) i = "on" + t, (he[t] = i in e) || (n.setAttribute(i, "t"), he[t] = n.attributes[i].expando === !1);
        n = null
    }();
    var Xe = /^(?:input|select|textarea)$/i,
        Ge = /^key/,
        Qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ke = /^(?:focusinfocus|focusoutblur)$/,
        Ze = /^([^.]*)(?:\.(.+)|)/;
    pe.event = {
        global: {},
        add: function(e, t, i, n, s) {
            var o, r, a, l, c, u, h, d, p, f, g, m = pe._data(e);
            if (m) {
                for (i.handler && (l = i, i = l.handler, s = l.selector), i.guid || (i.guid = pe.guid++), (r = m.events) || (r = m.events = {}), (u = m.handle) || (u = m.handle = function(e) {
                        return "undefined" == typeof pe || e && pe.event.triggered === e.type ? void 0 : pe.event.dispatch.apply(u.elem, arguments)
                    }, u.elem = e), t = (t || "").match(Pe) || [""], a = t.length; a--;) o = Ze.exec(t[a]) || [], p = g = o[1], f = (o[2] || "").split(".").sort(), p && (c = pe.event.special[p] || {}, p = (s ? c.delegateType : c.bindType) || p, c = pe.event.special[p] || {}, h = pe.extend({
                    type: p,
                    origType: g,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && pe.expr.match.needsContext.test(s),
                    namespace: f.join(".")
                }, l), (d = r[p]) || (d = r[p] = [], d.delegateCount = 0, c.setup && c.setup.call(e, n, f, u) !== !1 || (e.addEventListener ? e.addEventListener(p, u, !1) : e.attachEvent && e.attachEvent("on" + p, u))), c.add && (c.add.call(e, h), h.handler.guid || (h.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, h) : d.push(h), pe.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, i, n, s) {
            var o, r, a, l, c, u, h, d, p, f, g, m = pe.hasData(e) && pe._data(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(Pe) || [""], c = t.length; c--;)
                    if (a = Ze.exec(t[c]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p) {
                        for (h = pe.event.special[p] || {}, p = (n ? h.delegateType : h.bindType) || p, d = u[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) r = d[o], !s && g !== r.origType || i && i.guid !== r.guid || a && !a.test(r.namespace) || n && n !== r.selector && ("**" !== n || !r.selector) || (d.splice(o, 1), r.selector && d.delegateCount--, h.remove && h.remove.call(e, r));
                        l && !d.length && (h.teardown && h.teardown.call(e, f, m.handle) !== !1 || pe.removeEvent(e, p, m.handle), delete u[p])
                    } else
                        for (p in u) pe.event.remove(e, p + t[c], i, n, !0);
                pe.isEmptyObject(u) && (delete m.handle, pe._removeData(e, "events"))
            }
        },
        trigger: function(t, i, n, s) {
            var o, r, a, l, c, u, h, d = [n || ne],
                p = ue.call(t, "type") ? t.type : t,
                f = ue.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = u = n = n || ne, 3 !== n.nodeType && 8 !== n.nodeType && !Ke.test(p + pe.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), p = f.shift(), f.sort()), r = p.indexOf(":") < 0 && "on" + p, t = t[pe.expando] ? t : new pe.Event(p, "object" == typeof t && t), t.isTrigger = s ? 2 : 3, t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), i = null == i ? [t] : pe.makeArray(i, [t]), c = pe.event.special[p] || {}, s || !c.trigger || c.trigger.apply(n, i) !== !1)) {
                if (!s && !c.noBubble && !pe.isWindow(n)) {
                    for (l = c.delegateType || p, Ke.test(l + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), u = a;
                    u === (n.ownerDocument || ne) && d.push(u.defaultView || u.parentWindow || e)
                }
                for (h = 0;
                    (a = d[h++]) && !t.isPropagationStopped();) t.type = h > 1 ? l : c.bindType || p, o = (pe._data(a, "events") || {})[t.type] && pe._data(a, "handle"), o && o.apply(a, i), o = r && a[r], o && o.apply && Ie(a) && (t.result = o.apply(a, i), t.result === !1 && t.preventDefault());
                if (t.type = p, !s && !t.isDefaultPrevented() && (!c._default || c._default.apply(d.pop(), i) === !1) && Ie(n) && r && n[p] && !pe.isWindow(n)) {
                    u = n[r], u && (n[r] = null), pe.event.triggered = p;
                    try {
                        n[p]()
                    } catch (e) {}
                    pe.event.triggered = void 0, u && (n[r] = u)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = pe.event.fix(e);
            var t, i, n, s, o, r = [],
                a = se.call(arguments),
                l = (pe._data(this, "events") || {})[e.type] || [],
                c = pe.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (r = pe.event.handlers.call(this, e, l), t = 0;
                    (s = r[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = s.elem, i = 0;
                        (o = s.handlers[i++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, n = ((pe.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, a), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var i, n, s, o, r = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (n = [], i = 0; i < a; i++) o = t[i], s = o.selector + " ", void 0 === n[s] && (n[s] = o.needsContext ? pe(s, this).index(l) > -1 : pe.find(s, this, null, [l]).length), n[s] && n.push(o);
                        n.length && r.push({
                            elem: l,
                            handlers: n
                        })
                    }
            return a < t.length && r.push({
                elem: this,
                handlers: t.slice(a)
            }), r
        },
        fix: function(e) {
            if (e[pe.expando]) return e;
            var t, i, n, s = e.type,
                o = e,
                r = this.fixHooks[s];
            for (r || (this.fixHooks[s] = r = Qe.test(s) ? this.mouseHooks : Ge.test(s) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, e = new pe.Event(o), t = n.length; t--;) i = n[t], e[i] = o[i];
            return e.target || (e.target = o.srcElement || ne), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, r.filter ? r.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var i, n, s, o = t.button,
                    r = t.fromElement;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || ne, s = n.documentElement, i = n.body, e.pageX = t.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)), !e.relatedTarget && r && (e.relatedTarget = r === e.target ? t.toElement : r), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== w() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === w() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (pe.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(e) {
                    return pe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, i) {
            var n = pe.extend(new pe.Event, i, {
                type: e,
                isSimulated: !0
            });
            pe.event.trigger(n, null, t), n.isDefaultPrevented() && i.preventDefault()
        }
    }, pe.removeEvent = ne.removeEventListener ? function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    } : function(e, t, i) {
        var n = "on" + t;
        e.detachEvent && ("undefined" == typeof e[n] && (e[n] = null), e.detachEvent(n, i))
    }, pe.Event = function(e, t) {
        return this instanceof pe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? y : b) : this.type = e, t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), void(this[pe.expando] = !0)) : new pe.Event(e, t)
    }, pe.Event.prototype = {
        constructor: pe.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = y, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = y, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = y, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, pe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        pe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var i, n = this,
                    s = e.relatedTarget,
                    o = e.handleObj;
                return s && (s === n || pe.contains(n, s)) || (e.type = o.origType, i = o.handler.apply(this, arguments), e.type = t), i
            }
        }
    }), he.submit || (pe.event.special.submit = {
        setup: function() {
            return !pe.nodeName(this, "form") && void pe.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    i = pe.nodeName(t, "input") || pe.nodeName(t, "button") ? pe.prop(t, "form") : void 0;
                i && !pe._data(i, "submit") && (pe.event.add(i, "submit._submit", function(e) {
                    e._submitBubble = !0
                }), pe._data(i, "submit", !0))
            })
        },
        postDispatch: function(e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && pe.event.simulate("submit", this.parentNode, e))
        },
        teardown: function() {
            return !pe.nodeName(this, "form") && void pe.event.remove(this, "._submit")
        }
    }), he.change || (pe.event.special.change = {
        setup: function() {
            return Xe.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (pe.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), pe.event.add(this, "click._change", function(e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), pe.event.simulate("change", this, e)
            })), !1) : void pe.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Xe.test(t.nodeName) && !pe._data(t, "change") && (pe.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || pe.event.simulate("change", this.parentNode, e)
                }), pe._data(t, "change", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return pe.event.remove(this, "._change"), !Xe.test(this.nodeName)
        }
    }), he.focusin || pe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var i = function(e) {
            pe.event.simulate(t, e.target, pe.event.fix(e))
        };
        pe.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    s = pe._data(n, t);
                s || n.addEventListener(e, i, !0), pe._data(n, t, (s || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    s = pe._data(n, t) - 1;
                s ? pe._data(n, t, s) : (n.removeEventListener(e, i, !0), pe._removeData(n, t))
            }
        }
    }), pe.fn.extend({
        on: function(e, t, i, n) {
            return x(this, e, t, i, n)
        },
        one: function(e, t, i, n) {
            return x(this, e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, s;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, pe(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (s in e) this.off(s, t, e[s]);
                return this
            }
            return t !== !1 && "function" != typeof t || (i = t, t = void 0), i === !1 && (i = b), this.each(function() {
                pe.event.remove(this, e, i, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                pe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            if (i) return pe.event.trigger(e, t, i, !0)
        }
    });
    var Je = / jQuery\d+="(?:null|\d+)"/g,
        et = new RegExp("<(?:" + Be + ")[\\s/>]", "i"),
        tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        it = /<script|<style|<link/i,
        nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        st = /^true\/(.*)/,
        ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        rt = p(ne),
        at = rt.appendChild(ne.createElement("div"));
    pe.extend({
        htmlPrefilter: function(e) {
            return e.replace(tt, "<$1></$2>")
        },
        clone: function(e, t, i) {
            var n, s, o, r, a, l = pe.contains(e.ownerDocument, e);
            if (he.html5Clone || pe.isXMLDoc(e) || !et.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (at.innerHTML = e.outerHTML, at.removeChild(o = at.firstChild)), !(he.noCloneEvent && he.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e)))
                for (n = f(o), a = f(e), r = 0; null != (s = a[r]); ++r) n[r] && T(s, n[r]);
            if (t)
                if (i)
                    for (a = a || f(e), n = n || f(o), r = 0; null != (s = a[r]); r++) S(s, n[r]);
                else S(e, o);
            return n = f(o, "script"), n.length > 0 && g(n, !l && f(e, "script")), n = a = s = null, o
        },
        cleanData: function(e, t) {
            for (var i, n, s, o, r = 0, a = pe.expando, l = pe.cache, c = he.attributes, u = pe.event.special; null != (i = e[r]); r++)
                if ((t || Ie(i)) && (s = i[a], o = s && l[s])) {
                    if (o.events)
                        for (n in o.events) u[n] ? pe.event.remove(i, n) : pe.removeEvent(i, n, o.handle);
                    l[s] && (delete l[s], c || "undefined" == typeof i.removeAttribute ? i[a] = void 0 : i.removeAttribute(a), ie.push(s))
                }
        }
    }), pe.fn.extend({
        domManip: D,
        detach: function(e) {
            return E(this, e, !0)
        },
        remove: function(e) {
            return E(this, e)
        },
        text: function(e) {
            return Le(this, function(e) {
                return void 0 === e ? pe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ne).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return D(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = _(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return D(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = _(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return D(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return D(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && pe.cleanData(f(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && pe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return pe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Le(this, function(e) {
                var t = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Je, "") : void 0;
                if ("string" == typeof e && !it.test(e) && (he.htmlSerialize || !et.test(e)) && (he.leadingWhitespace || !qe.test(e)) && !Ve[(Re.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = pe.htmlPrefilter(e);
                    try {
                        for (; i < n; i++) t = this[i] || {}, 1 === t.nodeType && (pe.cleanData(f(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return D(this, arguments, function(t) {
                var i = this.parentNode;
                pe.inArray(this, e) < 0 && (pe.cleanData(f(this)), i && i.replaceChild(t, this))
            }, e)
        }
    }), pe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        pe.fn[e] = function(e) {
            for (var i, n = 0, s = [], o = pe(e), r = o.length - 1; n <= r; n++) i = n === r ? this : this.clone(!0), pe(o[n])[t](i), re.apply(s, i.get());
            return this.pushStack(s)
        }
    });
    var lt, ct = {
            HTML: "block",
            BODY: "block"
        },
        ut = /^margin/,
        ht = new RegExp("^(" + Oe + ")(?!px)[a-z%]+$", "i"),
        dt = function(e, t, i, n) {
            var s, o, r = {};
            for (o in t) r[o] = e.style[o], e.style[o] = t[o];
            s = i.apply(e, n || []);
            for (o in t) e.style[o] = r[o];
            return s
        },
        pt = ne.documentElement;
    ! function() {
        function t() {
            var t, u, h = ne.documentElement;
            h.appendChild(l), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i = s = a = !1, n = r = !0, e.getComputedStyle && (u = e.getComputedStyle(c), i = "1%" !== (u || {}).top, a = "2px" === (u || {}).marginLeft, s = "4px" === (u || {
                width: "4px"
            }).width, c.style.marginRight = "50%", n = "4px" === (u || {
                marginRight: "4px"
            }).marginRight, t = c.appendChild(ne.createElement("div")), t.style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", c.style.width = "1px", r = !parseFloat((e.getComputedStyle(t) || {}).marginRight), c.removeChild(t)), c.style.display = "none", o = 0 === c.getClientRects().length, o && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c.childNodes[0].style.borderCollapse = "separate", t = c.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === t[0].offsetHeight, o && (t[0].style.display = "", t[1].style.display = "none", o = 0 === t[0].offsetHeight)), h.removeChild(l)
        }
        var i, n, s, o, r, a, l = ne.createElement("div"),
            c = ne.createElement("div");
        c.style && (c.style.cssText = "float:left;opacity:.5", he.opacity = "0.5" === c.style.opacity, he.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", he.clearCloneStyle = "content-box" === c.style.backgroundClip, l = ne.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", l.appendChild(c), he.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, pe.extend(he, {
            reliableHiddenOffsets: function() {
                return null == i && t(), o
            },
            boxSizingReliable: function() {
                return null == i && t(), s
            },
            pixelMarginRight: function() {
                return null == i && t(), n
            },
            pixelPosition: function() {
                return null == i && t(), i
            },
            reliableMarginRight: function() {
                return null == i && t(), r
            },
            reliableMarginLeft: function() {
                return null == i && t(), a
            }
        }))
    }();
    var ft, gt, mt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (ft = function(t) {
        var i = t.ownerDocument.defaultView;
        return i && i.opener || (i = e), i.getComputedStyle(t)
    }, gt = function(e, t, i) {
        var n, s, o, r, a = e.style;
        return i = i || ft(e), r = i ? i.getPropertyValue(t) || i[t] : void 0, "" !== r && void 0 !== r || pe.contains(e.ownerDocument, e) || (r = pe.style(e, t)), i && !he.pixelMarginRight() && ht.test(r) && ut.test(t) && (n = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = s, a.maxWidth = o), void 0 === r ? r : r + ""
    }) : pt.currentStyle && (ft = function(e) {
        return e.currentStyle
    }, gt = function(e, t, i) {
        var n, s, o, r, a = e.style;
        return i = i || ft(e), r = i ? i[t] : void 0, null == r && a && a[t] && (r = a[t]), ht.test(r) && !mt.test(t) && (n = a.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : r, r = a.pixelLeft + "px", a.left = n, o && (s.left = o)), void 0 === r ? r : r + "" || "auto"
    });
    var vt = /alpha\([^)]*\)/i,
        yt = /opacity\s*=\s*([^)]*)/i,
        bt = /^(none|table(?!-c[ea]).+)/,
        wt = new RegExp("^(" + Oe + ")(.*)$", "i"),
        xt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        _t = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        kt = ["Webkit", "O", "Moz", "ms"],
        Ct = ne.createElement("div").style;
    pe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = gt(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": he.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var s, o, r, a = pe.camelCase(t),
                    l = e.style;
                if (t = pe.cssProps[a] || (pe.cssProps[a] = I(a) || a), r = pe.cssHooks[t] || pe.cssHooks[a], void 0 === i) return r && "get" in r && void 0 !== (s = r.get(e, !1, n)) ? s : l[t];
                if (o = typeof i, "string" === o && (s = je.exec(i)) && s[1] && (i = d(e, t, s), o = "number"), null != i && i === i && ("number" === o && (i += s && s[3] || (pe.cssNumber[a] ? "" : "px")), he.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(r && "set" in r && void 0 === (i = r.set(e, i, n))))) try {
                    l[t] = i
                } catch (e) {}
            }
        },
        css: function(e, t, i, n) {
            var s, o, r, a = pe.camelCase(t);
            return t = pe.cssProps[a] || (pe.cssProps[a] = I(a) || a), r = pe.cssHooks[t] || pe.cssHooks[a], r && "get" in r && (o = r.get(e, !0, i)), void 0 === o && (o = gt(e, t, n)), "normal" === o && t in _t && (o = _t[t]), "" === i || i ? (s = parseFloat(o), i === !0 || isFinite(s) ? s || 0 : o) : o
        }
    }), pe.each(["height", "width"], function(e, t) {
        pe.cssHooks[t] = {
            get: function(e, i, n) {
                if (i) return bt.test(pe.css(e, "display")) && 0 === e.offsetWidth ? dt(e, xt, function() {
                    return j(e, t, n)
                }) : j(e, t, n)
            },
            set: function(e, i, n) {
                var s = n && ft(e);
                return z(e, i, n ? O(e, t, n, he.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, s), s) : 0)
            }
        }
    }), he.opacity || (pe.cssHooks.opacity = {
        get: function(e, t) {
            return yt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var i = e.style,
                n = e.currentStyle,
                s = pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = n && n.filter || i.filter || "";
            i.zoom = 1, (t >= 1 || "" === t) && "" === pe.trim(o.replace(vt, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === t || n && !n.filter) || (i.filter = vt.test(o) ? o.replace(vt, s) : o + " " + s)
        }
    }), pe.cssHooks.marginRight = A(he.reliableMarginRight, function(e, t) {
        if (t) return dt(e, {
            display: "inline-block"
        }, gt, [e, "marginRight"])
    }), pe.cssHooks.marginLeft = A(he.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(gt(e, "marginLeft")) || (pe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - dt(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        }) : 0)) + "px"
    }), pe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        pe.cssHooks[e + t] = {
            expand: function(i) {
                for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) s[e + He[n] + t] = o[n] || o[n - 2] || o[0];
                return s
            }
        }, ut.test(e) || (pe.cssHooks[e + t].set = z)
    }), pe.fn.extend({
        css: function(e, t) {
            return Le(this, function(e, t, i) {
                var n, s, o = {},
                    r = 0;
                if (pe.isArray(t)) {
                    for (n = ft(e), s = t.length; r < s; r++) o[t[r]] = pe.css(e, t[r], !1, n);
                    return o
                }
                return void 0 !== i ? pe.style(e, t, i) : pe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return N(this, !0)
        },
        hide: function() {
            return N(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                $e(this) ? pe(this).show() : pe(this).hide()
            })
        }
    }), pe.Tween = H, H.prototype = {
        constructor: H,
        init: function(e, t, i, n, s, o) {
            this.elem = e, this.prop = i, this.easing = s || pe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = o || (pe.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = H.propHooks[this.prop];
            return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, pe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, pe.fx = H.prototype.init, pe.fx.step = {};
    var St, Tt, Dt = /^(?:toggle|show|hide)$/,
        Et = /queueHooks$/;
    pe.Animation = pe.extend(q, {
            tweeners: {
                "*": [function(e, t) {
                    var i = this.createTween(e, t);
                    return d(i.elem, e, je.exec(t), i), i
                }]
            },
            tweener: function(e, t) {
                pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Pe);
                for (var i, n = 0, s = e.length; n < s; n++) i = e[n], q.tweeners[i] = q.tweeners[i] || [], q.tweeners[i].unshift(t)
            },
            prefilters: [R],
            prefilter: function(e, t) {
                t ? q.prefilters.unshift(e) : q.prefilters.push(e)
            }
        }), pe.speed = function(e, t, i) {
            var n = e && "object" == typeof e ? pe.extend({}, e) : {
                complete: i || !i && t || pe.isFunction(e) && e,
                duration: e,
                easing: i && t || t && !pe.isFunction(t) && t
            };
            return n.duration = pe.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in pe.fx.speeds ? pe.fx.speeds[n.duration] : pe.fx.speeds._default, null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                pe.isFunction(n.old) && n.old.call(this), n.queue && pe.dequeue(this, n.queue)
            }, n
        }, pe.fn.extend({
            fadeTo: function(e, t, i, n) {
                return this.filter($e).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, i, n)
            },
            animate: function(e, t, i, n) {
                var s = pe.isEmptyObject(e),
                    o = pe.speed(t, i, n),
                    r = function() {
                        var t = q(this, pe.extend({}, e), o);
                        (s || pe._data(this, "finish")) && t.stop(!0)
                    };
                return r.finish = r, s || o.queue === !1 ? this.each(r) : this.queue(o.queue, r)
            },
            stop: function(e, t, i) {
                var n = function(e) {
                    var t = e.stop;
                    delete e.stop, t(i)
                };
                return "string" != typeof e && (i = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        s = null != e && e + "queueHooks",
                        o = pe.timers,
                        r = pe._data(this);
                    if (s) r[s] && r[s].stop && n(r[s]);
                    else
                        for (s in r) r[s] && r[s].stop && Et.test(s) && n(r[s]);
                    for (s = o.length; s--;) o[s].elem !== this || null != e && o[s].queue !== e || (o[s].anim.stop(i), t = !1, o.splice(s, 1));
                    !t && i || pe.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, i = pe._data(this),
                        n = i[e + "queue"],
                        s = i[e + "queueHooks"],
                        o = pe.timers,
                        r = n ? n.length : 0;
                    for (i.finish = !0, pe.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < r; t++) n[t] && n[t].finish && n[t].finish.call(this);
                    delete i.finish
                })
            }
        }), pe.each(["toggle", "show", "hide"], function(e, t) {
            var i = pe.fn[t];
            pe.fn[t] = function(e, n, s) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(L(t, !0), e, n, s)
            }
        }), pe.each({
            slideDown: L("show"),
            slideUp: L("hide"),
            slideToggle: L("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            pe.fn[e] = function(e, i, n) {
                return this.animate(t, e, i, n)
            }
        }), pe.timers = [], pe.fx.tick = function() {
            var e, t = pe.timers,
                i = 0;
            for (St = pe.now(); i < t.length; i++) e = t[i], e() || t[i] !== e || t.splice(i--, 1);
            t.length || pe.fx.stop(), St = void 0
        }, pe.fx.timer = function(e) {
            pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop()
        }, pe.fx.interval = 13, pe.fx.start = function() {
            Tt || (Tt = e.setInterval(pe.fx.tick, pe.fx.interval))
        }, pe.fx.stop = function() {
            e.clearInterval(Tt), Tt = null
        }, pe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, pe.fn.delay = function(t, i) {
            return t = pe.fx ? pe.fx.speeds[t] || t : t, i = i || "fx", this.queue(i, function(i, n) {
                var s = e.setTimeout(i, t);
                n.stop = function() {
                    e.clearTimeout(s)
                }
            })
        },
        function() {
            var e, t = ne.createElement("input"),
                i = ne.createElement("div"),
                n = ne.createElement("select"),
                s = n.appendChild(ne.createElement("option"));
            i = ne.createElement("div"), i.setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = i.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), i.appendChild(t), e = i.getElementsByTagName("a")[0], e.style.cssText = "top:1px", he.getSetAttribute = "t" !== i.className, he.style = /top/.test(e.getAttribute("style")), he.hrefNormalized = "/a" === e.getAttribute("href"), he.checkOn = !!t.value, he.optSelected = s.selected, he.enctype = !!ne.createElement("form").enctype, n.disabled = !0, he.optDisabled = !s.disabled, t = ne.createElement("input"), t.setAttribute("value", ""), he.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), he.radioValue = "t" === t.value
        }();
    var Pt = /\r/g,
        Mt = /[\x20\t\r\n\f]+/g;
    pe.fn.extend({
        val: function(e) {
            var t, i, n, s = this[0]; {
                if (arguments.length) return n = pe.isFunction(e), this.each(function(i) {
                    var s;
                    1 === this.nodeType && (s = n ? e.call(this, i, pe(this).val()) : e, null == s ? s = "" : "number" == typeof s ? s += "" : pe.isArray(s) && (s = pe.map(s, function(e) {
                        return null == e ? "" : e + ""
                    })), t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, s, "value") || (this.value = s))
                });
                if (s) return t = pe.valHooks[s.type] || pe.valHooks[s.nodeName.toLowerCase()], t && "get" in t && void 0 !== (i = t.get(s, "value")) ? i : (i = s.value, "string" == typeof i ? i.replace(Pt, "") : null == i ? "" : i)
            }
        }
    }), pe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = pe.find.attr(e, "value");
                    return null != t ? t : pe.trim(pe.text(e)).replace(Mt, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, i, n = e.options, s = e.selectedIndex, o = "select-one" === e.type || s < 0, r = o ? null : [], a = o ? s + 1 : n.length, l = s < 0 ? a : o ? s : 0; l < a; l++)
                        if (i = n[l], (i.selected || l === s) && (he.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !pe.nodeName(i.parentNode, "optgroup"))) {
                            if (t = pe(i).val(), o) return t;
                            r.push(t)
                        }
                    return r
                },
                set: function(e, t) {
                    for (var i, n, s = e.options, o = pe.makeArray(t), r = s.length; r--;)
                        if (n = s[r], pe.inArray(pe.valHooks.option.get(n), o) > -1) try {
                            n.selected = i = !0
                        } catch (e) {
                            n.scrollHeight
                        } else n.selected = !1;
                    return i || (e.selectedIndex = -1), s
                }
            }
        }
    }), pe.each(["radio", "checkbox"], function() {
        pe.valHooks[this] = {
            set: function(e, t) {
                if (pe.isArray(t)) return e.checked = pe.inArray(pe(e).val(), t) > -1
            }
        }, he.checkOn || (pe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var At, It, Nt = pe.expr.attrHandle,
        zt = /^(?:checked|selected)$/i,
        Ot = he.getSetAttribute,
        jt = he.input;
    pe.fn.extend({
        attr: function(e, t) {
            return Le(this, pe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                pe.removeAttr(this, e)
            })
        }
    }), pe.extend({
        attr: function(e, t, i) {
            var n, s, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? pe.prop(e, t, i) : (1 === o && pe.isXMLDoc(e) || (t = t.toLowerCase(), s = pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? It : At)), void 0 !== i ? null === i ? void pe.removeAttr(e, t) : s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : s && "get" in s && null !== (n = s.get(e, t)) ? n : (n = pe.find.attr(e, t), null == n ? void 0 : n))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!he.radioValue && "radio" === t && pe.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var i, n, s = 0,
                o = t && t.match(Pe);
            if (o && 1 === e.nodeType)
                for (; i = o[s++];) n = pe.propFix[i] || i, pe.expr.match.bool.test(i) ? jt && Ot || !zt.test(i) ? e[n] = !1 : e[pe.camelCase("default-" + i)] = e[n] = !1 : pe.attr(e, i, ""), e.removeAttribute(Ot ? i : n)
        }
    }), It = {
        set: function(e, t, i) {
            return t === !1 ? pe.removeAttr(e, i) : jt && Ot || !zt.test(i) ? e.setAttribute(!Ot && pe.propFix[i] || i, i) : e[pe.camelCase("default-" + i)] = e[i] = !0, i
        }
    }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var i = Nt[t] || pe.find.attr;
        jt && Ot || !zt.test(t) ? Nt[t] = function(e, t, n) {
            var s, o;
            return n || (o = Nt[t], Nt[t] = s, s = null != i(e, t, n) ? t.toLowerCase() : null, Nt[t] = o), s
        } : Nt[t] = function(e, t, i) {
            if (!i) return e[pe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), jt && Ot || (pe.attrHooks.value = {
        set: function(e, t, i) {
            return pe.nodeName(e, "input") ? void(e.defaultValue = t) : At && At.set(e, t, i)
        }
    }), Ot || (At = {
        set: function(e, t, i) {
            var n = e.getAttributeNode(i);
            if (n || e.setAttributeNode(n = e.ownerDocument.createAttribute(i)), n.value = t += "", "value" === i || t === e.getAttribute(i)) return t
        }
    }, Nt.id = Nt.name = Nt.coords = function(e, t, i) {
        var n;
        if (!i) return (n = e.getAttributeNode(t)) && "" !== n.value ? n.value : null
    }, pe.valHooks.button = {
        get: function(e, t) {
            var i = e.getAttributeNode(t);
            if (i && i.specified) return i.value
        },
        set: At.set
    }, pe.attrHooks.contenteditable = {
        set: function(e, t, i) {
            At.set(e, "" !== t && t, i)
        }
    }, pe.each(["width", "height"], function(e, t) {
        pe.attrHooks[t] = {
            set: function(e, i) {
                if ("" === i) return e.setAttribute(t, "auto"), i
            }
        }
    })), he.style || (pe.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Ht = /^(?:input|select|textarea|button|object)$/i,
        $t = /^(?:a|area)$/i;
    pe.fn.extend({
        prop: function(e, t) {
            return Le(this, pe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = pe.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (e) {}
            })
        }
    }), pe.extend({
        prop: function(e, t, i) {
            var n, s, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, s = pe.propHooks[t]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : e[t] = i : s && "get" in s && null !== (n = s.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = pe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Ht.test(e.nodeName) || $t.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), he.hrefNormalized || pe.each(["href", "src"], function(e, t) {
        pe.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), he.optSelected || (pe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        pe.propFix[this.toLowerCase()] = this
    }), he.enctype || (pe.propFix.enctype = "encoding");
    var Lt = /[\t\r\n\f]/g;
    pe.fn.extend({
        addClass: function(e) {
            var t, i, n, s, o, r, a, l = 0;
            if (pe.isFunction(e)) return this.each(function(t) {
                pe(this).addClass(e.call(this, t, B(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(Pe) || []; i = this[l++];)
                    if (s = B(i), n = 1 === i.nodeType && (" " + s + " ").replace(Lt, " ")) {
                        for (r = 0; o = t[r++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                        a = pe.trim(n), s !== a && pe.attr(i, "class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, i, n, s, o, r, a, l = 0;
            if (pe.isFunction(e)) return this.each(function(t) {
                pe(this).removeClass(e.call(this, t, B(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Pe) || []; i = this[l++];)
                    if (s = B(i), n = 1 === i.nodeType && (" " + s + " ").replace(Lt, " ")) {
                        for (r = 0; o = t[r++];)
                            for (; n.indexOf(" " + o + " ") > -1;) n = n.replace(" " + o + " ", " ");
                        a = pe.trim(n), s !== a && pe.attr(i, "class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var i = typeof e;
            return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function(i) {
                pe(this).toggleClass(e.call(this, i, B(this), t), t)
            }) : this.each(function() {
                var t, n, s, o;
                if ("string" === i)
                    for (n = 0, s = pe(this), o = e.match(Pe) || []; t = o[n++];) s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
                else void 0 !== e && "boolean" !== i || (t = B(this), t && pe._data(this, "__className__", t), pe.attr(this, "class", t || e === !1 ? "" : pe._data(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, i, n = 0;
            for (t = " " + e + " "; i = this[n++];)
                if (1 === i.nodeType && (" " + B(i) + " ").replace(Lt, " ").indexOf(t) > -1) return !0;
            return !1
        }
    }), pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        pe.fn[t] = function(e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    }), pe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var Ft = e.location,
        Rt = pe.now(),
        Wt = /\?/,
        qt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    pe.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var i, n = null,
            s = pe.trim(t + "");
        return s && !pe.trim(s.replace(qt, function(e, t, s, o) {
            return i && t && (n = 0), 0 === n ? e : (i = s || t, n += !o - !s, "")
        })) ? Function("return " + s)() : pe.error("Invalid JSON: " + t)
    }, pe.parseXML = function(t) {
        var i, n;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (n = new e.DOMParser, i = n.parseFromString(t, "text/xml")) : (i = new e.ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(t))
        } catch (e) {
            i = void 0
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), i
    };
    var Bt = /#.*$/,
        Vt = /([?&])_=[^&]*/,
        Yt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ut = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Xt = /^(?:GET|HEAD)$/,
        Gt = /^\/\//,
        Qt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Kt = {},
        Zt = {},
        Jt = "*/".concat("*"),
        ei = Ft.href,
        ti = Qt.exec(ei.toLowerCase()) || [];
    pe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ei,
            type: "GET",
            isLocal: Ut.test(ti[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": pe.parseJSON,
                "text xml": pe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? U(U(e, pe.ajaxSettings), t) : U(pe.ajaxSettings, e)
        },
        ajaxPrefilter: V(Kt),
        ajaxTransport: V(Zt),
        ajax: function(t, i) {
            function n(t, i, n, s) {
                var o, h, y, b, x, k = i;
                2 !== w && (w = 2, l && e.clearTimeout(l), u = void 0, a = s || "", _.readyState = t > 0 ? 4 : 0, o = t >= 200 && t < 300 || 304 === t, n && (b = X(d, _, n)), b = G(d, b, _, o), o ? (d.ifModified && (x = _.getResponseHeader("Last-Modified"), x && (pe.lastModified[r] = x), x = _.getResponseHeader("etag"), x && (pe.etag[r] = x)), 204 === t || "HEAD" === d.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = b.state, h = b.data, y = b.error, o = !y)) : (y = k, !t && k || (k = "error", t < 0 && (t = 0))), _.status = t, _.statusText = (i || k) + "", o ? g.resolveWith(p, [h, k, _]) : g.rejectWith(p, [_, k, y]), _.statusCode(v), v = void 0, c && f.trigger(o ? "ajaxSuccess" : "ajaxError", [_, d, o ? h : y]), m.fireWith(p, [_, k]), c && (f.trigger("ajaxComplete", [_, d]), --pe.active || pe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (i = t, t = void 0), i = i || {};
            var s, o, r, a, l, c, u, h, d = pe.ajaxSetup({}, i),
                p = d.context || d,
                f = d.context && (p.nodeType || p.jquery) ? pe(p) : pe.event,
                g = pe.Deferred(),
                m = pe.Callbacks("once memory"),
                v = d.statusCode || {},
                y = {},
                b = {},
                w = 0,
                x = "canceled",
                _ = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === w) {
                            if (!h)
                                for (h = {}; t = Yt.exec(a);) h[t[1].toLowerCase()] = t[2];
                            t = h[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var i = e.toLowerCase();
                        return w || (e = b[i] = b[i] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return w || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (w < 2)
                                for (t in e) v[t] = [v[t], e[t]];
                            else _.always(e[_.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return u && u.abort(t), n(0, t), this
                    }
                };
            if (g.promise(_).complete = m.add, _.success = _.done, _.error = _.fail, d.url = ((t || d.url || ei) + "").replace(Bt, "").replace(Gt, ti[1] + "//"), d.type = i.method || i.type || d.method || d.type, d.dataTypes = pe.trim(d.dataType || "*").toLowerCase().match(Pe) || [""], null == d.crossDomain && (s = Qt.exec(d.url.toLowerCase()), d.crossDomain = !(!s || s[1] === ti[1] && s[2] === ti[2] && (s[3] || ("http:" === s[1] ? "80" : "443")) === (ti[3] || ("http:" === ti[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = pe.param(d.data, d.traditional)), Y(Kt, d, i, _), 2 === w) return _;
            c = pe.event && d.global, c && 0 === pe.active++ && pe.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Xt.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (Wt.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Vt.test(r) ? r.replace(Vt, "$1_=" + Rt++) : r + (Wt.test(r) ? "&" : "?") + "_=" + Rt++)), d.ifModified && (pe.lastModified[r] && _.setRequestHeader("If-Modified-Since", pe.lastModified[r]), pe.etag[r] && _.setRequestHeader("If-None-Match", pe.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || i.contentType) && _.setRequestHeader("Content-Type", d.contentType), _.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Jt + "; q=0.01" : "") : d.accepts["*"]);
            for (o in d.headers) _.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (d.beforeSend.call(p, _, d) === !1 || 2 === w)) return _.abort();
            x = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) _[o](d[o]);
            if (u = Y(Zt, d, i, _)) {
                if (_.readyState = 1, c && f.trigger("ajaxSend", [_, d]), 2 === w) return _;
                d.async && d.timeout > 0 && (l = e.setTimeout(function() {
                    _.abort("timeout")
                }, d.timeout));
                try {
                    w = 1, u.send(y, n)
                } catch (e) {
                    if (!(w < 2)) throw e;
                    n(-1, e)
                }
            } else n(-1, "No Transport");
            return _
        },
        getJSON: function(e, t, i) {
            return pe.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return pe.get(e, void 0, t, "script")
        }
    }), pe.each(["get", "post"], function(e, t) {
        pe[t] = function(e, i, n, s) {
            return pe.isFunction(i) && (s = s || n, n = i, i = void 0), pe.ajax(pe.extend({
                url: e,
                type: t,
                dataType: s,
                data: i,
                success: n
            }, pe.isPlainObject(e) && e))
        }
    }), pe._evalUrl = function(e) {
        return pe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, pe.fn.extend({
        wrapAll: function(e) {
            if (pe.isFunction(e)) return this.each(function(t) {
                pe(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = pe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return pe.isFunction(e) ? this.each(function(t) {
                pe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = pe(this),
                    i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = pe.isFunction(e);
            return this.each(function(i) {
                pe(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                pe.nodeName(this, "body") || pe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), pe.expr.filters.hidden = function(e) {
        return he.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : K(e)
    }, pe.expr.filters.visible = function(e) {
        return !pe.expr.filters.hidden(e)
    };
    var ii = /%20/g,
        ni = /\[\]$/,
        si = /\r?\n/g,
        oi = /^(?:submit|button|image|reset|file)$/i,
        ri = /^(?:input|select|textarea|keygen)/i;
    pe.param = function(e, t) {
        var i, n = [],
            s = function(e, t) {
                t = pe.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = pe.ajaxSettings && pe.ajaxSettings.traditional), pe.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function() {
            s(this.name, this.value)
        });
        else
            for (i in e) Z(i, e[i], t, s);
        return n.join("&").replace(ii, "+")
    }, pe.fn.extend({
        serialize: function() {
            return pe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = pe.prop(this, "elements");
                return e ? pe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !pe(this).is(":disabled") && ri.test(this.nodeName) && !oi.test(e) && (this.checked || !Fe.test(e))
            }).map(function(e, t) {
                var i = pe(this).val();
                return null == i ? null : pe.isArray(i) ? pe.map(i, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(si, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(si, "\r\n")
                }
            }).get()
        }
    }), pe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return this.isLocal ? ee() : ne.documentMode > 8 ? J() : /^(get|post|head|put|delete|options)$/i.test(this.type) && J() || ee()
    } : J;
    var ai = 0,
        li = {},
        ci = pe.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in li) li[e](void 0, !0)
    }), he.cors = !!ci && "withCredentials" in ci, ci = he.ajax = !!ci, ci && pe.ajaxTransport(function(t) {
        if (!t.crossDomain || he.cors) {
            var i;
            return {
                send: function(n, s) {
                    var o, r = t.xhr(),
                        a = ++ai;
                    if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (o in t.xhrFields) r[o] = t.xhrFields[o];
                    t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (o in n) void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
                    r.send(t.hasContent && t.data || null), i = function(e, n) {
                        var o, l, c;
                        if (i && (n || 4 === r.readyState))
                            if (delete li[a], i = void 0, r.onreadystatechange = pe.noop, n) 4 !== r.readyState && r.abort();
                            else {
                                c = {}, o = r.status, "string" == typeof r.responseText && (c.text = r.responseText);
                                try {
                                    l = r.statusText
                                } catch (e) {
                                    l = ""
                                }
                                o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = c.text ? 200 : 404
                            }
                        c && s(o, l, c, r.getAllResponseHeaders())
                    }, t.async ? 4 === r.readyState ? e.setTimeout(i) : r.onreadystatechange = li[a] = i : i()
                },
                abort: function() {
                    i && i(void 0, !0)
                }
            }
        }
    }), pe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return pe.globalEval(e), e
            }
        }
    }), pe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), pe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, i = ne.head || pe("head")[0] || ne.documentElement;
            return {
                send: function(n, s) {
                    t = ne.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, i) {
                        (i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, i || s(200, "success"))
                    }, i.insertBefore(t, i.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var ui = [],
        hi = /(=)\?(?=&|$)|\?\?/;
    pe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = ui.pop() || pe.expando + "_" + Rt++;
            return this[e] = !0, e
        }
    }), pe.ajaxPrefilter("json jsonp", function(t, i, n) {
        var s, o, r, a = t.jsonp !== !1 && (hi.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && hi.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return s = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(hi, "$1" + s) : t.jsonp !== !1 && (t.url += (Wt.test(t.url) ? "&" : "?") + t.jsonp + "=" + s), t.converters["script json"] = function() {
            return r || pe.error(s + " was not called"), r[0]
        }, t.dataTypes[0] = "json", o = e[s], e[s] = function() {
            r = arguments
        }, n.always(function() {
            void 0 === o ? pe(e).removeProp(s) : e[s] = o, t[s] && (t.jsonpCallback = i.jsonpCallback, ui.push(s)), r && pe.isFunction(o) && o(r[0]), r = o = void 0
        }), "script"
    }), pe.parseHTML = function(e, t, i) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (i = t, t = !1), t = t || ne;
        var n = _e.exec(e),
            s = !i && [];
        return n ? [t.createElement(n[1])] : (n = v([e], t, s), s && s.length && pe(s).remove(), pe.merge([], n.childNodes))
    };
    var di = pe.fn.load;
    pe.fn.load = function(e, t, i) {
        if ("string" != typeof e && di) return di.apply(this, arguments);
        var n, s, o, r = this,
            a = e.indexOf(" ");
        return a > -1 && (n = pe.trim(e.slice(a, e.length)), e = e.slice(0, a)), pe.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (s = "POST"), r.length > 0 && pe.ajax({
            url: e,
            type: s || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, r.html(n ? pe("<div>").append(pe.parseHTML(e)).find(n) : e)
        }).always(i && function(e, t) {
            r.each(function() {
                i.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        pe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), pe.expr.filters.animated = function(e) {
        return pe.grep(pe.timers, function(t) {
            return e === t.elem
        }).length
    }, pe.offset = {
        setOffset: function(e, t, i) {
            var n, s, o, r, a, l, c, u = pe.css(e, "position"),
                h = pe(e),
                d = {};
            "static" === u && (e.style.position = "relative"), a = h.offset(), o = pe.css(e, "top"), l = pe.css(e, "left"), c = ("absolute" === u || "fixed" === u) && pe.inArray("auto", [o, l]) > -1, c ? (n = h.position(), r = n.top, s = n.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0), pe.isFunction(t) && (t = t.call(e, i, pe.extend({}, a))), null != t.top && (d.top = t.top - a.top + r), null != t.left && (d.left = t.left - a.left + s), "using" in t ? t.using.call(e, d) : h.css(d)
        }
    }, pe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                pe.offset.setOffset(this, e, t)
            });
            var t, i, n = {
                    top: 0,
                    left: 0
                },
                s = this[0],
                o = s && s.ownerDocument;
            if (o) return t = o.documentElement, pe.contains(t, s) ? ("undefined" != typeof s.getBoundingClientRect && (n = s.getBoundingClientRect()), i = te(o), {
                top: n.top + (i.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: n.left + (i.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : n
        },
        position: function() {
            if (this[0]) {
                var e, t, i = {
                        top: 0,
                        left: 0
                    },
                    n = this[0];
                return "fixed" === pe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), pe.nodeName(e[0], "html") || (i = e.offset()), i.top += pe.css(e[0], "borderTopWidth", !0), i.left += pe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - pe.css(n, "marginTop", !0),
                    left: t.left - i.left - pe.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && !pe.nodeName(e, "html") && "static" === pe.css(e, "position");) e = e.offsetParent;
                return e || pt
            })
        }
    }), pe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var i = /Y/.test(t);
        pe.fn[e] = function(n) {
            return Le(this, function(e, n, s) {
                var o = te(e);
                return void 0 === s ? o ? t in o ? o[t] : o.document.documentElement[n] : e[n] : void(o ? o.scrollTo(i ? pe(o).scrollLeft() : s, i ? s : pe(o).scrollTop()) : e[n] = s);
            }, e, n, arguments.length, null)
        }
    }), pe.each(["top", "left"], function(e, t) {
        pe.cssHooks[t] = A(he.pixelPosition, function(e, i) {
            if (i) return i = gt(e, t), ht.test(i) ? pe(e).position()[t] + "px" : i
        })
    }), pe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        pe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(i, n) {
            pe.fn[n] = function(n, s) {
                var o = arguments.length && (i || "boolean" != typeof n),
                    r = i || (n === !0 || s === !0 ? "margin" : "border");
                return Le(this, function(t, i, n) {
                    var s;
                    return pe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === n ? pe.css(t, i, r) : pe.style(t, i, n, r)
                }, t, o ? n : void 0, o, null)
            }
        })
    }), pe.fn.extend({
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    }), pe.fn.size = function() {
        return this.length
    }, pe.fn.andSelf = pe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return pe
    });
    var pi = e.jQuery,
        fi = e.$;
    return pe.noConflict = function(t) {
        return e.$ === pe && (e.$ = fi), t && e.jQuery === pe && (e.jQuery = pi), pe
    }, t || (e.jQuery = e.$ = pe), pe
}),
function(e, t) {
    "use strict";
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var i, n = e(document);
    e.rails = i = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function() {
            return e("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function() {
            return e("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function(e) {
            var t = i.csrfToken();
            t && e.setRequestHeader("X-CSRF-Token", t)
        },
        refreshCSRFTokens: function() {
            e('form input[name="' + i.csrfParam() + '"]').val(i.csrfToken())
        },
        fire: function(t, i, n) {
            var s = e.Event(i);
            return t.trigger(s, n), s.result !== !1
        },
        confirm: function(e) {
            return confirm(e)
        },
        ajax: function(t) {
            return e.ajax(t)
        },
        href: function(e) {
            return e[0].href
        },
        isRemote: function(e) {
            return e.data("remote") !== t && e.data("remote") !== !1
        },
        handleRemote: function(n) {
            var s, o, r, a, l, c;
            if (i.fire(n, "ajax:before")) {
                if (a = n.data("with-credentials") || null, l = n.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, n.is("form")) {
                    s = n.data("ujs:submit-button-formmethod") || n.attr("method"), o = n.data("ujs:submit-button-formaction") || n.attr("action"), r = e(n[0]).serializeArray();
                    var u = n.data("ujs:submit-button");
                    u && (r.push(u), n.data("ujs:submit-button", null)), n.data("ujs:submit-button-formmethod", null), n.data("ujs:submit-button-formaction", null)
                } else n.is(i.inputChangeSelector) ? (s = n.data("method"), o = n.data("url"), r = n.serialize(), n.data("params") && (r = r + "&" + n.data("params"))) : n.is(i.buttonClickSelector) ? (s = n.data("method") || "get", o = n.data("url"), r = n.serialize(), n.data("params") && (r = r + "&" + n.data("params"))) : (s = n.data("method"), o = i.href(n), r = n.data("params") || null);
                return c = {
                    type: s || "GET",
                    data: r,
                    dataType: l,
                    beforeSend: function(e, s) {
                        return s.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + s.accepts.script), !!i.fire(n, "ajax:beforeSend", [e, s]) && void n.trigger("ajax:send", e)
                    },
                    success: function(e, t, i) {
                        n.trigger("ajax:success", [e, t, i])
                    },
                    complete: function(e, t) {
                        n.trigger("ajax:complete", [e, t])
                    },
                    error: function(e, t, i) {
                        n.trigger("ajax:error", [e, t, i])
                    },
                    crossDomain: i.isCrossDomain(o)
                }, a && (c.xhrFields = {
                    withCredentials: a
                }), o && (c.url = o), i.ajax(c)
            }
            return !1
        },
        isCrossDomain: function(e) {
            var t = document.createElement("a");
            t.href = location.href;
            var i = document.createElement("a");
            try {
                return i.href = e, i.href = i.href, !((!i.protocol || ":" === i.protocol) && !i.host || t.protocol + "//" + t.host == i.protocol + "//" + i.host)
            } catch (e) {
                return !0
            }
        },
        handleMethod: function(n) {
            var s = i.href(n),
                o = n.data("method"),
                r = n.attr("target"),
                a = i.csrfToken(),
                l = i.csrfParam(),
                c = e('<form method="post" action="' + s + '"></form>'),
                u = '<input name="_method" value="' + o + '" type="hidden" />';
            l === t || a === t || i.isCrossDomain(s) || (u += '<input name="' + l + '" value="' + a + '" type="hidden" />'), r && c.attr("target", r), c.hide().append(u).appendTo("body"), c.submit()
        },
        formElements: function(t, i) {
            return t.is("form") ? e(t[0].elements).filter(i) : t.find(i)
        },
        disableFormElements: function(t) {
            i.formElements(t, i.disableSelector).each(function() {
                i.disableFormElement(e(this))
            })
        },
        disableFormElement: function(e) {
            var i, n;
            i = e.is("button") ? "html" : "val", n = e.data("disable-with"), n !== t && (e.data("ujs:enable-with", e[i]()), e[i](n)), e.prop("disabled", !0), e.data("ujs:disabled", !0)
        },
        enableFormElements: function(t) {
            i.formElements(t, i.enableSelector).each(function() {
                i.enableFormElement(e(this))
            })
        },
        enableFormElement: function(e) {
            var i = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with") !== t && (e[i](e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.prop("disabled", !1), e.removeData("ujs:disabled")
        },
        allowAction: function(e) {
            var t, n = e.data("confirm"),
                s = !1;
            if (!n) return !0;
            if (i.fire(e, "confirm")) {
                try {
                    s = i.confirm(n)
                } catch (e) {
                    (console.error || console.log).call(console, e.stack || e)
                }
                t = i.fire(e, "confirm:complete", [s])
            }
            return s && t
        },
        blankInputs: function(t, i, n) {
            var s, o, r, a, l = e(),
                c = i || "input,textarea",
                u = t.find(c),
                h = {};
            return u.each(function() {
                s = e(this), s.is("input[type=radio]") ? (a = s.attr("name"), h[a] || (0 === t.find('input[type=radio]:checked[name="' + a + '"]').length && (r = t.find('input[type=radio][name="' + a + '"]'), l = l.add(r)), h[a] = a)) : (o = s.is("input[type=checkbox],input[type=radio]") ? s.is(":checked") : !!s.val(), o === n && (l = l.add(s)))
            }), !!l.length && l
        },
        nonBlankInputs: function(e, t) {
            return i.blankInputs(e, t, !0)
        },
        stopEverything: function(t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        disableElement: function(e) {
            var n = e.data("disable-with");
            n !== t && (e.data("ujs:enable-with", e.html()), e.html(n)), e.bind("click.railsDisable", function(e) {
                return i.stopEverything(e)
            }), e.data("ujs:disabled", !0)
        },
        enableElement: function(e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable"), e.removeData("ujs:disabled")
        }
    }, i.fire(n, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, n) {
        e.crossDomain || i.CSRFProtection(n)
    }), e(window).on("pageshow.rails", function() {
        e(e.rails.enableSelector).each(function() {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableFormElement(t)
        }), e(e.rails.linkDisableSelector).each(function() {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableElement(t)
        })
    }), n.on("ajax:complete", i.linkDisableSelector, function() {
        i.enableElement(e(this))
    }), n.on("ajax:complete", i.buttonDisableSelector, function() {
        i.enableFormElement(e(this))
    }), n.on("click.rails", i.linkClickSelector, function(t) {
        var n = e(this),
            s = n.data("method"),
            o = n.data("params"),
            r = t.metaKey || t.ctrlKey;
        if (!i.allowAction(n)) return i.stopEverything(t);
        if (!r && n.is(i.linkDisableSelector) && i.disableElement(n), i.isRemote(n)) {
            if (r && (!s || "GET" === s) && !o) return !0;
            var a = i.handleRemote(n);
            return a === !1 ? i.enableElement(n) : a.fail(function() {
                i.enableElement(n)
            }), !1
        }
        return s ? (i.handleMethod(n), !1) : void 0
    }), n.on("click.rails", i.buttonClickSelector, function(t) {
        var n = e(this);
        if (!i.allowAction(n) || !i.isRemote(n)) return i.stopEverything(t);
        n.is(i.buttonDisableSelector) && i.disableFormElement(n);
        var s = i.handleRemote(n);
        return s === !1 ? i.enableFormElement(n) : s.fail(function() {
            i.enableFormElement(n)
        }), !1
    }), n.on("change.rails", i.inputChangeSelector, function(t) {
        var n = e(this);
        return i.allowAction(n) && i.isRemote(n) ? (i.handleRemote(n), !1) : i.stopEverything(t)
    }), n.on("submit.rails", i.formSubmitSelector, function(n) {
        var s, o, r = e(this),
            a = i.isRemote(r);
        if (!i.allowAction(r)) return i.stopEverything(n);
        if (r.attr("novalidate") === t)
            if (r.data("ujs:formnovalidate-button") === t) {
                if (s = i.blankInputs(r, i.requiredInputSelector, !1), s && i.fire(r, "ajax:aborted:required", [s])) return i.stopEverything(n)
            } else r.data("ujs:formnovalidate-button", t);
        if (a) {
            if (o = i.nonBlankInputs(r, i.fileInputSelector)) {
                setTimeout(function() {
                    i.disableFormElements(r)
                }, 13);
                var l = i.fire(r, "ajax:aborted:file", [o]);
                return l || setTimeout(function() {
                    i.enableFormElements(r)
                }, 13), l
            }
            return i.handleRemote(r), !1
        }
        setTimeout(function() {
            i.disableFormElements(r)
        }, 13)
    }), n.on("click.rails", i.formInputClickSelector, function(t) {
        var n = e(this);
        if (!i.allowAction(n)) return i.stopEverything(t);
        var s = n.attr("name"),
            o = s ? {
                name: s,
                value: n.val()
            } : null,
            r = n.closest("form");
        0 === r.length && (r = e("#" + n.attr("form"))), r.data("ujs:submit-button", o), r.data("ujs:formnovalidate-button", n.attr("formnovalidate")), r.data("ujs:submit-button-formaction", n.attr("formaction")), r.data("ujs:submit-button-formmethod", n.attr("formmethod"))
    }), n.on("ajax:send.rails", i.formSubmitSelector, function(t) {
        this === t.target && i.disableFormElements(e(this))
    }), n.on("ajax:complete.rails", i.formSubmitSelector, function(t) {
        this === t.target && i.enableFormElements(e(this))
    }), e(function() {
        i.refreshCSRFTokens()
    }))
}(jQuery),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function(e) {
    function t(e) {
        return a.raw ? e : encodeURIComponent(e)
    }

    function i(e) {
        return a.raw ? e : decodeURIComponent(e)
    }

    function n(e) {
        return t(a.json ? JSON.stringify(e) : String(e))
    }

    function s(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(r, " ")), a.json ? JSON.parse(e) : e
        } catch (e) {}
    }

    function o(t, i) {
        var n = a.raw ? t : s(t);
        return e.isFunction(i) ? i(n) : n
    }
    var r = /\+/g,
        a = e.cookie = function(s, r, l) {
            if (void 0 !== r && !e.isFunction(r)) {
                if (l = e.extend({}, a.defaults, l), "number" == typeof l.expires) {
                    var c = l.expires,
                        u = l.expires = new Date;
                    u.setTime(+u + 864e5 * c)
                }
                return document.cookie = [t(s), "=", n(r), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
            }
            for (var h = s ? void 0 : {}, d = document.cookie ? document.cookie.split("; ") : [], p = 0, f = d.length; p < f; p++) {
                var g = d[p].split("="),
                    m = i(g.shift()),
                    v = g.join("=");
                if (s && s === m) {
                    h = o(v, r);
                    break
                }
                s || void 0 === (v = o(v)) || (h[m] = v)
            }
            return h
        };
    a.defaults = {}, e.removeCookie = function(t, i) {
        return void 0 !== e.cookie(t) && (e.cookie(t, "", e.extend({}, i, {
            expires: -1
        })), !e.cookie(t))
    }
}), BT = function(e) {
    var t = this;
    res = e.res, uid = e.uid, game = e.game, delay = 250, t.url = (e.url || "https://bt.enmasse.com") + "/cast", null != uid && void 0 != uid && "" != uid && (e.add && (t.add = e.add), t.t = function(e, i) {
        e.res = res, e.uid = uid, e.game = game, $.ajax({
            type: "POST",
            url: t.url,
            data: e,
            success: i,
            crossDomain: !0
        })
    }, $(".bt-submit").on("submit", function(e) {
        var i = $(this).serialize(),
            n = this;
        e.preventDefault();
        var s = function() {
            "number" == typeof submitProcess && (window.clearTimeout(submitProcess), delete submitProcess, n.submit())
        };
        setTimeout(s, delay);
        t.t({
            md: i,
            act: "submit",
            label: $(this).data("bt-label")
        }, s)
    }), $(".bt-click").on("click", function(e) {
        if ("true" != $(this).data("delay")) {
            $(this).data("delay", "true"), e.preventDefault();
            var i = this,
                n = function() {
                    "number" == typeof s && (window.clearTimeout(s), delete s, i.click())
                },
                s = setTimeout(n, delay);
            t.t({
                md: $(this).data("bt-md"),
                act: "click",
                label: $(this).data("bt-label")
            }, n)
        }
    }), $(".bt-load").each(function(e, i) {
        t.t({
            md: $(i).data("bt-md"),
            act: "load",
            label: $(i).data("bt-label")
        })
    }))
}, SSO = {
    logged_in: null,
    accountUrl: null,
    screenName: null,
    emp: null,
    errorMessage: '<span data-tooltip data-width class="has-tip error" title="Unable to retrieve EMP balance.">ERROR</span>',
    binder: function() {
        $("#eme-logout").bind("click", function(e) {
            e.preventDefault(), SSO.logout()
        })
    },
    setup: function(e) {
        SSO.accountUrl = e, $.cookie("screen_name") && "" != $.cookie("screen_name") && (SSO.screenName = $.cookie("screen_name"), SSO.emp = "<span class='loading'></span>", SSO.getEMP(), $("#account").html(SSO.loggedInButtons), SSO.binder()), $("#account").show()
    },
    getEMP: function() {
        $.isNumeric($.cookie("emp")) ? SSO.emp = $.cookie("emp") : $.get("/account/emp", function(e) {
            "error" === e ? SSO.emp = SSO.errorMessage : SSO.emp = e, $("#account").html(SSO.loggedInButtons), SSO.binder()
        }).fail(function() {
            SSO.emp = SSO.errorMessage, $("#account").html(SSO.loggedInButtons), SSO.binder()
        })
    },
    getScreenName: function() {
        return SSO.screenName
    },
    isLoggedIn: function() {
        return !(null === SSO.screenName)
    },
    loggedInButtons: function() {
        return userBar = '<ul class="user"><li class="welcome">' + SSO.screenName + " - EMP: " + SSO.emp + "</li>", userBar += '<li><a href="https://' + SSO.accountUrl + '">Account Settings</a></li>', userBar += '<li><a href="#" id="eme-logout">Sign Out</a></li></ul>', userBar
    },
    logout: function() {
        $.removeCookie("screen_name"), $.removeCookie("screen_name", {
            domain: ".enmasse.com"
        }), $.removeCookie("emp");
        var e = document.createElement("IFRAME");
        e.setAttribute("src", "https://" + SSO.accountUrl + "/signout"), e.setAttribute("onload", "window.location.reload()"), e.style.width = "1px", e.style.height = "1px", document.body.appendChild(e)
    },
    refresh: function() {
        $.get("/refresh-user", function(e) {
            if (e = $.parseJSON(e), !e.loggedIn) return void this.logout();
            if (e.changed) {
                if (e.drastic) return void document.reload(!0);
                var t = $("#game-account-selector");
                if (e.accounts.length > 0) {
                    var i = new RegExp("\\(Elite\\)$");
                    $.each(e.accounts, function(e, n) {
                        var s = t.find("option[value='" + n.id + "']");
                        s.data("elite", n.subscription_active);
                        var o = " (Elite)";
                        n.subscription_active && !i.test(s.text()) ? s.text(s.text() + o) : !n.subscription_active && i.test(s.text()) && s.text(s.text().replace(o, ""))
                    }), modal.message("Your account status may have changed in a way that affects the price of your purchase. Please review your order before continuing.", "warning"), t.change()
                }
            }
        })
    }
};
var LoginBox = {
        box: $("#login-box"),
        address: "https://account.enmasse.com/remote_logins",
        showLoginBox: function(e) {
            e.preventDefault(), $("#login-box iframe").attr("src", LoginBox.address), $("#blackout").show(), $("#login-box").show()
        },
        init: function() {
            $(document).on("click", ".login-popup-link", null, LoginBox.showLoginBox), $("#blackout").click(function() {
                $(this).hide(), $("#login-box").hide()
            });
            var e = window.addEventListener ? "addEventListener" : "attachEvent",
                t = window[e],
                i = "attachEvent" == e ? "onmessage" : "message";
            t(i, function(e) {
                "loggedIn" === e.data && location.reload(!0)
            }, !1)
        }
    },
    GameMenu = {
        wrapper: $("#games"),
        trigger: $("#games .trigger"),
        menu: $("#games ul.eme-menu"),
        open: !1,
        closeGameMenu: function(e) {
            e.stopPropagation(), GameMenu.wrapper.removeClass("open"), GameMenu.menu.hide(), GameMenu.unbindDocument()
        },
        openGameMenu: function(e) {
            e.preventDefault(), e.stopPropagation(), GameMenu.wrapper.addClass("open"), GameMenu.menu.slideDown(300), GameMenu.bindDocument()
        },
        bindDocument: function() {
            GameMenu.trigger.off("click", GameMenu.openGameMenu), $(document).on("click", null, GameMenu.closeGameMenu)
        },
        unbindDocument: function() {
            GameMenu.trigger.on("click", null, GameMenu.openGameMenu), $(document).off("click", GameMenu.closeGameMenu)
        },
        toggleGameMenu: function(e) {
            e.preventDefault()
        },
        init: function() {
            GameMenu.trigger.on("click", null, GameMenu.openGameMenu)
        }
    };
$(function() {
        LoginBox.init(), GameMenu.init()
    }),
    function() {
        var e = [].indexOf || function(e) {
                for (var t = 0, i = this.length; t < i; t++)
                    if (t in this && this[t] === e) return t;
                return -1
            },
            t = [].slice;
        ! function(e, t) {
            return "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function(i) {
                return t(i, e)
            }) : t(e.jQuery, e)
        }(window, function(i, n) {
            var s, o, r, a, l, c, u, h, d, p, f, g, m, v, y, b;
            return s = i(n), h = e.call(n, "ontouchstart") >= 0, a = {
                horizontal: {},
                vertical: {}
            }, l = 1, u = {}, c = "waypoints-context-id", f = "resize.waypoints", g = "scroll.waypoints", m = 1, v = "waypoints-waypoint-ids", y = "waypoint", b = "waypoints", o = function() {
                function e(e) {
                    var t = this;
                    this.$element = e, this.element = e[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + l++, this.oldScroll = {
                        x: e.scrollLeft(),
                        y: e.scrollTop()
                    }, this.waypoints = {
                        horizontal: {},
                        vertical: {}
                    }, this.element[c] = this.id, u[this.id] = this, e.bind(g, function() {
                        var e;
                        if (!t.didScroll && !h) return t.didScroll = !0, e = function() {
                            return t.doScroll(), t.didScroll = !1
                        }, n.setTimeout(e, i[b].settings.scrollThrottle)
                    }), e.bind(f, function() {
                        var e;
                        if (!t.didResize) return t.didResize = !0, e = function() {
                            return i[b]("refresh"), t.didResize = !1
                        }, n.setTimeout(e, i[b].settings.resizeThrottle)
                    })
                }
                return e.prototype.doScroll = function() {
                    var e, t = this;
                    return e = {
                        horizontal: {
                            newScroll: this.$element.scrollLeft(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left"
                        },
                        vertical: {
                            newScroll: this.$element.scrollTop(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up"
                        }
                    }, !h || e.vertical.oldScroll && e.vertical.newScroll || i[b]("refresh"), i.each(e, function(e, n) {
                        var s, o, r;
                        return r = [], o = n.newScroll > n.oldScroll, s = o ? n.forward : n.backward, i.each(t.waypoints[e], function(e, t) {
                            var i, s;
                            return n.oldScroll < (i = t.offset) && i <= n.newScroll ? r.push(t) : n.newScroll < (s = t.offset) && s <= n.oldScroll ? r.push(t) : void 0
                        }), r.sort(function(e, t) {
                            return e.offset - t.offset
                        }), o || r.reverse(), i.each(r, function(e, t) {
                            if (t.options.continuous || e === r.length - 1) return t.trigger([s])
                        })
                    }), this.oldScroll = {
                        x: e.horizontal.newScroll,
                        y: e.vertical.newScroll
                    }
                }, e.prototype.refresh = function() {
                    var e, t, n, s = this;
                    return n = i.isWindow(this.element), t = this.$element.offset(), this.doScroll(), e = {
                        horizontal: {
                            contextOffset: n ? 0 : t.left,
                            contextScroll: n ? 0 : this.oldScroll.x,
                            contextDimension: this.$element.width(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left",
                            offsetProp: "left"
                        },
                        vertical: {
                            contextOffset: n ? 0 : t.top,
                            contextScroll: n ? 0 : this.oldScroll.y,
                            contextDimension: n ? i[b]("viewportHeight") : this.$element.height(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up",
                            offsetProp: "top"
                        }
                    }, i.each(e, function(e, t) {
                        return i.each(s.waypoints[e], function(e, n) {
                            var s, o, r, a, l;
                            if (s = n.options.offset, r = n.offset, o = i.isWindow(n.element) ? 0 : n.$element.offset()[t.offsetProp], i.isFunction(s) ? s = s.apply(n.element) : "string" == typeof s && (s = parseFloat(s), n.options.offset.indexOf("%") > -1 && (s = Math.ceil(t.contextDimension * s / 100))), n.offset = o - t.contextOffset + t.contextScroll - s, (!n.options.onlyOnScroll || null == r) && n.enabled) return null !== r && r < (a = t.oldScroll) && a <= n.offset ? n.trigger([t.backward]) : null !== r && r > (l = t.oldScroll) && l >= n.offset ? n.trigger([t.forward]) : null === r && t.oldScroll >= n.offset ? n.trigger([t.forward]) : void 0
                        })
                    })
                }, e.prototype.checkEmpty = function() {
                    if (i.isEmptyObject(this.waypoints.horizontal) && i.isEmptyObject(this.waypoints.vertical)) return this.$element.unbind([f, g].join(" ")), delete u[this.id]
                }, e
            }(), r = function() {
                function e(e, t, n) {
                    var s, o;
                    "bottom-in-view" === n.offset && (n.offset = function() {
                        var e;
                        return e = i[b]("viewportHeight"), i.isWindow(t.element) || (e = t.$element.height()), e - i(this).outerHeight()
                    }), this.$element = e, this.element = e[0], this.axis = n.horizontal ? "horizontal" : "vertical", this.callback = n.handler, this.context = t, this.enabled = n.enabled, this.id = "waypoints" + m++, this.offset = null, this.options = n, t.waypoints[this.axis][this.id] = this, a[this.axis][this.id] = this, s = null != (o = this.element[v]) ? o : [], s.push(this.id), this.element[v] = s
                }
                return e.prototype.trigger = function(e) {
                    if (this.enabled) return null != this.callback && this.callback.apply(this.element, e), this.options.triggerOnce ? this.destroy() : void 0
                }, e.prototype.disable = function() {
                    return this.enabled = !1
                }, e.prototype.enable = function() {
                    return this.context.refresh(), this.enabled = !0
                }, e.prototype.destroy = function() {
                    return delete a[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
                }, e.getWaypointsByElement = function(e) {
                    var t, n;
                    return (n = e[v]) ? (t = i.extend({}, a.horizontal, a.vertical), i.map(n, function(e) {
                        return t[e]
                    })) : []
                }, e
            }(), p = {
                init: function(e, t) {
                    var n;
                    return t = i.extend({}, i.fn[y].defaults, t), null == (n = t.handler) && (t.handler = e), this.each(function() {
                        var e, n, s, a;
                        return e = i(this), s = null != (a = t.context) ? a : i.fn[y].defaults.context, i.isWindow(s) || (s = e.closest(s)), s = i(s), n = u[s[0][c]], n || (n = new o(s)), new r(e, n, t)
                    }), i[b]("refresh"), this
                },
                disable: function() {
                    return p._invoke.call(this, "disable")
                },
                enable: function() {
                    return p._invoke.call(this, "enable")
                },
                destroy: function() {
                    return p._invoke.call(this, "destroy")
                },
                prev: function(e, t) {
                    return p._traverse.call(this, e, t, function(e, t, i) {
                        if (t > 0) return e.push(i[t - 1])
                    })
                },
                next: function(e, t) {
                    return p._traverse.call(this, e, t, function(e, t, i) {
                        if (t < i.length - 1) return e.push(i[t + 1])
                    })
                },
                _traverse: function(e, t, s) {
                    var o, r;
                    return null == e && (e = "vertical"), null == t && (t = n), r = d.aggregate(t), o = [], this.each(function() {
                        var t;
                        return t = i.inArray(this, r[e]), s(o, t, r[e])
                    }), this.pushStack(o)
                },
                _invoke: function(e) {
                    return this.each(function() {
                        var t;
                        return t = r.getWaypointsByElement(this), i.each(t, function(t, i) {
                            return i[e](), !0
                        })
                    }), this
                }
            }, i.fn[y] = function() {
                var e, n;
                return n = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], p[n] ? p[n].apply(this, e) : i.isFunction(n) ? p.init.apply(this, arguments) : i.isPlainObject(n) ? p.init.apply(this, [null, n]) : n ? i.error("The " + n + " method does not exist in jQuery Waypoints.") : i.error("jQuery Waypoints needs a callback function or handler option.")
            }, i.fn[y].defaults = {
                context: n,
                continuous: !0,
                enabled: !0,
                horizontal: !1,
                offset: 0,
                triggerOnce: !1
            }, d = {
                refresh: function() {
                    return i.each(u, function(e, t) {
                        return t.refresh()
                    })
                },
                viewportHeight: function() {
                    var e;
                    return null != (e = n.innerHeight) ? e : s.height()
                },
                aggregate: function(e) {
                    var t, n, s;
                    return t = a, e && (t = null != (s = u[i(e)[0][c]]) ? s.waypoints : void 0), t ? (n = {
                        horizontal: [],
                        vertical: []
                    }, i.each(n, function(e, s) {
                        return i.each(t[e], function(e, t) {
                            return s.push(t)
                        }), s.sort(function(e, t) {
                            return e.offset - t.offset
                        }), n[e] = i.map(s, function(e) {
                            return e.element
                        }), n[e] = i.unique(n[e])
                    }), n) : []
                },
                above: function(e) {
                    return null == e && (e = n), d._filter(e, "vertical", function(e, t) {
                        return t.offset <= e.oldScroll.y
                    })
                },
                below: function(e) {
                    return null == e && (e = n), d._filter(e, "vertical", function(e, t) {
                        return t.offset > e.oldScroll.y
                    })
                },
                left: function(e) {
                    return null == e && (e = n), d._filter(e, "horizontal", function(e, t) {
                        return t.offset <= e.oldScroll.x
                    })
                },
                right: function(e) {
                    return null == e && (e = n), d._filter(e, "horizontal", function(e, t) {
                        return t.offset > e.oldScroll.x
                    })
                },
                enable: function() {
                    return d._invoke("enable")
                },
                disable: function() {
                    return d._invoke("disable")
                },
                destroy: function() {
                    return d._invoke("destroy")
                },
                extendFn: function(e, t) {
                    return p[e] = t
                },
                _invoke: function(e) {
                    var t;
                    return t = i.extend({}, a.vertical, a.horizontal), i.each(t, function(t, i) {
                        return i[e](), !0
                    })
                },
                _filter: function(e, t, n) {
                    var s, o;
                    return (s = u[i(e)[0][c]]) ? (o = [], i.each(s.waypoints[t], function(e, t) {
                        if (n(s, t)) return o.push(t)
                    }), o.sort(function(e, t) {
                        return e.offset - t.offset
                    }), i.map(o, function(e) {
                        return e.element
                    })) : []
                }
            }, i[b] = function() {
                var e, i;
                return i = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], d[i] ? d[i].apply(null, e) : d.aggregate.call(null, i)
            }, i[b].settings = {
                resizeThrottle: 100,
                scrollThrottle: 30
            }, s.on("load.waypoints", function() {
                return i[b]("refresh")
            })
        })
    }.call(this), ! function(e) {
        function t(e) {
            var t = e.length,
                n = i.type(e);
            return "function" !== n && !i.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
        }
        if (!e.jQuery) {
            var i = function(e, t) {
                return new i.fn.init(e, t)
            };
            i.isWindow = function(e) {
                return null != e && e == e.window
            }, i.type = function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? s[r.call(e)] || "object" : typeof e
            }, i.isArray = Array.isArray || function(e) {
                return "array" === i.type(e)
            }, i.isPlainObject = function(e) {
                var t;
                if (!e || "object" !== i.type(e) || e.nodeType || i.isWindow(e)) return !1;
                try {
                    if (e.constructor && !o.call(e, "constructor") && !o.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                for (t in e);
                return void 0 === t || o.call(e, t)
            }, i.each = function(e, i, n) {
                var s, o = 0,
                    r = e.length,
                    a = t(e);
                if (n) {
                    if (a)
                        for (; r > o && (s = i.apply(e[o], n), s !== !1); o++);
                    else
                        for (o in e)
                            if (s = i.apply(e[o], n), s === !1) break
                } else if (a)
                    for (; r > o && (s = i.call(e[o], o, e[o]), s !== !1); o++);
                else
                    for (o in e)
                        if (s = i.call(e[o], o, e[o]), s === !1) break;
                return e
            }, i.data = function(e, t, s) {
                if (void 0 === s) {
                    var o = e[i.expando],
                        r = o && n[o];
                    if (void 0 === t) return r;
                    if (r && t in r) return r[t]
                } else if (void 0 !== t) {
                    var o = e[i.expando] || (e[i.expando] = ++i.uuid);
                    return n[o] = n[o] || {}, n[o][t] = s, s
                }
            }, i.removeData = function(e, t) {
                var s = e[i.expando],
                    o = s && n[s];
                o && i.each(t, function(e, t) {
                    delete o[t]
                })
            }, i.extend = function() {
                var e, t, n, s, o, r, a = arguments[0] || {},
                    l = 1,
                    c = arguments.length,
                    u = !1;
                for ("boolean" == typeof a && (u = a, a = arguments[l] || {}, l++), "object" != typeof a && "function" !== i.type(a) && (a = {}), l === c && (a = this, l--); c > l; l++)
                    if (null != (o = arguments[l]))
                        for (s in o) e = a[s], n = o[s], a !== n && (u && n && (i.isPlainObject(n) || (t = i.isArray(n))) ? (t ? (t = !1, r = e && i.isArray(e) ? e : []) : r = e && i.isPlainObject(e) ? e : {}, a[s] = i.extend(u, r, n)) : void 0 !== n && (a[s] = n));
                return a
            }, i.queue = function(e, n, s) {
                function o(e, i) {
                    var n = i || [];
                    return null != e && (t(Object(e)) ? ! function(e, t) {
                        for (var i = +t.length, n = 0, s = e.length; i > n;) e[s++] = t[n++];
                        if (i !== i)
                            for (; void 0 !== t[n];) e[s++] = t[n++];
                        return e.length = s, e
                    }(n, "string" == typeof e ? [e] : e) : [].push.call(n, e)), n
                }
                if (e) {
                    n = (n || "fx") + "queue";
                    var r = i.data(e, n);
                    return s ? (!r || i.isArray(s) ? r = i.data(e, n, o(s)) : r.push(s), r) : r || []
                }
            }, i.dequeue = function(e, t) {
                i.each(e.nodeType ? [e] : e, function(e, n) {
                    t = t || "fx";
                    var s = i.queue(n, t),
                        o = s.shift();
                    "inprogress" === o && (o = s.shift()), o && ("fx" === t && s.unshift("inprogress"), o.call(n, function() {
                        i.dequeue(n, t)
                    }))
                })
            }, i.fn = i.prototype = {
                init: function(e) {
                    if (e.nodeType) return this[0] = e, this;
                    throw new Error("Not a DOM node.")
                },
                offset: function() {
                    var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function() {
                    function e() {
                        for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                        return e || document
                    }
                    var t = this[0],
                        e = e.apply(t),
                        n = this.offset(),
                        s = /^(?:body|html)$/i.test(e.nodeName) ? {
                            top: 0,
                            left: 0
                        } : i(e).offset();
                    return n.top -= parseFloat(t.style.marginTop) || 0, n.left -= parseFloat(t.style.marginLeft) || 0, e.style && (s.top += parseFloat(e.style.borderTopWidth) || 0, s.left += parseFloat(e.style.borderLeftWidth) || 0), {
                        top: n.top - s.top,
                        left: n.left - s.left
                    }
                }
            };
            var n = {};
            i.expando = "velocity" + (new Date).getTime(), i.uuid = 0;
            for (var s = {}, o = s.hasOwnProperty, r = s.toString, a = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < a.length; l++) s["[object " + a[l] + "]"] = a[l].toLowerCase();
            i.fn.init.prototype = i.fn, e.Velocity = {
                Utilities: i
            }
        }
    }(window),
    function(e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
    }(function() {
        return function(e, t, i, n) {
            function s(e) {
                for (var t = -1, i = e ? e.length : 0, n = []; ++t < i;) {
                    var s = e[t];
                    s && n.push(s)
                }
                return n
            }

            function o(e) {
                return g.isWrapped(e) ? e = [].slice.call(e) : g.isNode(e) && (e = [e]), e
            }

            function r(e) {
                var t = d.data(e, "velocity");
                return null === t ? n : t
            }

            function a(e) {
                return function(t) {
                    return Math.round(t * e) * (1 / e)
                }
            }

            function l(e, i, n, s) {
                function o(e, t) {
                    return 1 - 3 * t + 3 * e
                }

                function r(e, t) {
                    return 3 * t - 6 * e
                }

                function a(e) {
                    return 3 * e
                }

                function l(e, t, i) {
                    return ((o(t, i) * e + r(t, i)) * e + a(t)) * e
                }

                function c(e, t, i) {
                    return 3 * o(t, i) * e * e + 2 * r(t, i) * e + a(t)
                }

                function u(t, i) {
                    for (var s = 0; g > s; ++s) {
                        var o = c(i, e, n);
                        if (0 === o) return i;
                        var r = l(i, e, n) - t;
                        i -= r / o
                    }
                    return i
                }

                function h() {
                    for (var t = 0; b > t; ++t) k[t] = l(t * w, e, n)
                }

                function d(t, i, s) {
                    var o, r, a = 0;
                    do r = i + (s - i) / 2, o = l(r, e, n) - t, o > 0 ? s = r : i = r; while (Math.abs(o) > v && ++a < y);
                    return r
                }

                function p(t) {
                    for (var i = 0, s = 1, o = b - 1; s != o && k[s] <= t; ++s) i += w;
                    --s;
                    var r = (t - k[s]) / (k[s + 1] - k[s]),
                        a = i + r * w,
                        l = c(a, e, n);
                    return l >= m ? u(t, a) : 0 == l ? a : d(t, i, i + w)
                }

                function f() {
                    C = !0, (e != i || n != s) && h()
                }
                var g = 4,
                    m = .001,
                    v = 1e-7,
                    y = 10,
                    b = 11,
                    w = 1 / (b - 1),
                    x = "Float32Array" in t;
                if (4 !== arguments.length) return !1;
                for (var _ = 0; 4 > _; ++_)
                    if ("number" != typeof arguments[_] || isNaN(arguments[_]) || !isFinite(arguments[_])) return !1;
                e = Math.min(e, 1), n = Math.min(n, 1), e = Math.max(e, 0), n = Math.max(n, 0);
                var k = x ? new Float32Array(b) : new Array(b),
                    C = !1,
                    S = function(t) {
                        return C || f(), e === i && n === s ? t : 0 === t ? 0 : 1 === t ? 1 : l(p(t), i, s)
                    };
                S.getControlPoints = function() {
                    return [{
                        x: e,
                        y: i
                    }, {
                        x: n,
                        y: s
                    }]
                };
                var T = "generateBezier(" + [e, i, n, s] + ")";
                return S.toString = function() {
                    return T
                }, S
            }

            function c(e, t) {
                var i = e;
                return g.isString(e) ? b.Easings[e] || (i = !1) : i = g.isArray(e) && 1 === e.length ? a.apply(null, e) : g.isArray(e) && 2 === e.length ? w.apply(null, e.concat([t])) : !(!g.isArray(e) || 4 !== e.length) && l.apply(null, e), i === !1 && (i = b.Easings[b.defaults.easing] ? b.defaults.easing : y), i
            }

            function u(e) {
                if (e)
                    for (var t = (new Date).getTime(), i = 0, s = b.State.calls.length; s > i; i++)
                        if (b.State.calls[i]) {
                            var o = b.State.calls[i],
                                a = o[0],
                                l = o[2],
                                c = o[3],
                                p = !!c;
                            c || (c = b.State.calls[i][3] = t - 16);
                            for (var f = Math.min((t - c) / l.duration, 1), m = 0, v = a.length; v > m; m++) {
                                var y = a[m],
                                    w = y.element;
                                if (r(w)) {
                                    var _ = !1;
                                    if (l.display !== n && null !== l.display && "none" !== l.display) {
                                        if ("flex" === l.display) {
                                            var C = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            d.each(C, function(e, t) {
                                                x.setPropertyValue(w, "display", t)
                                            })
                                        }
                                        x.setPropertyValue(w, "display", l.display)
                                    }
                                    l.visibility !== n && "hidden" !== l.visibility && x.setPropertyValue(w, "visibility", l.visibility);
                                    for (var S in y)
                                        if ("element" !== S) {
                                            var T, D = y[S],
                                                E = g.isString(D.easing) ? b.Easings[D.easing] : D.easing;
                                            if (1 === f) T = D.endValue;
                                            else if (T = D.startValue + (D.endValue - D.startValue) * E(f), !p && T === D.currentValue) continue;
                                            if (D.currentValue = T, x.Hooks.registered[S]) {
                                                var P = x.Hooks.getRoot(S),
                                                    M = r(w).rootPropertyValueCache[P];
                                                M && (D.rootPropertyValue = M)
                                            }
                                            var A = x.setPropertyValue(w, S, D.currentValue + (0 === parseFloat(T) ? "" : D.unitType), D.rootPropertyValue, D.scrollData);
                                            x.Hooks.registered[S] && (r(w).rootPropertyValueCache[P] = x.Normalizations.registered[P] ? x.Normalizations.registered[P]("extract", null, A[1]) : A[1]), "transform" === A[0] && (_ = !0)
                                        }
                                    l.mobileHA && r(w).transformCache.translate3d === n && (r(w).transformCache.translate3d = "(0px, 0px, 0px)", _ = !0), _ && x.flushTransformCache(w)
                                }
                            }
                            l.display !== n && "none" !== l.display && (b.State.calls[i][2].display = !1), l.visibility !== n && "hidden" !== l.visibility && (b.State.calls[i][2].visibility = !1), l.progress && l.progress.call(o[1], o[1], f, Math.max(0, c + l.duration - t), c), 1 === f && h(i)
                        }
                b.State.isTicking && k(u)
            }

            function h(e, t) {
                if (!b.State.calls[e]) return !1;
                for (var i = b.State.calls[e][0], s = b.State.calls[e][1], o = b.State.calls[e][2], a = b.State.calls[e][4], l = !1, c = 0, u = i.length; u > c; c++) {
                    var h = i[c].element;
                    if (t || o.loop || ("none" === o.display && x.setPropertyValue(h, "display", o.display), "hidden" === o.visibility && x.setPropertyValue(h, "visibility", o.visibility)), o.loop !== !0 && (d.queue(h)[1] === n || !/\.velocityQueueEntryFlag/i.test(d.queue(h)[1])) && r(h)) {
                        r(h).isAnimating = !1, r(h).rootPropertyValueCache = {};
                        var p = !1;
                        d.each(x.Lists.transforms3D, function(e, t) {
                            var i = /^scale/.test(t) ? 1 : 0,
                                s = r(h).transformCache[t];
                            r(h).transformCache[t] !== n && new RegExp("^\\(" + i + "[^.]").test(s) && (p = !0, delete r(h).transformCache[t])
                        }), o.mobileHA && (p = !0, delete r(h).transformCache.translate3d), p && x.flushTransformCache(h), x.Values.removeClass(h, "velocity-animating")
                    }
                    if (!t && o.complete && !o.loop && c === u - 1) try {
                        o.complete.call(s, s)
                    } catch (e) {
                        setTimeout(function() {
                            throw e
                        }, 1)
                    }
                    a && o.loop !== !0 && a(s), o.loop !== !0 || t || (d.each(r(h).tweensContainer, function(e, t) {
                        /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360)
                    }), b(h, "reverse", {
                        loop: !0,
                        delay: o.delay
                    })), o.queue !== !1 && d.dequeue(h, o.queue)
                }
                b.State.calls[e] = !1;
                for (var f = 0, g = b.State.calls.length; g > f; f++)
                    if (b.State.calls[f] !== !1) {
                        l = !0;
                        break
                    }
                l === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = [])
            }
            var d, p = function() {
                    if (i.documentMode) return i.documentMode;
                    for (var e = 7; e > 4; e--) {
                        var t = i.createElement("div");
                        if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
                    }
                    return n
                }(),
                f = function() {
                    var e = 0;
                    return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                        var i, n = (new Date).getTime();
                        return i = Math.max(0, 16 - (n - e)), e = n + i, setTimeout(function() {
                            t(n + i)
                        }, i)
                    }
                }(),
                g = {
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isArray: Array.isArray || function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    isFunction: function(e) {
                        return "[object Function]" === Object.prototype.toString.call(e)
                    },
                    isNode: function(e) {
                        return e && e.nodeType
                    },
                    isNodeList: function(e) {
                        return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== n && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
                    },
                    isWrapped: function(e) {
                        return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e));
                    },
                    isSVG: function(e) {
                        return t.SVGElement && e instanceof t.SVGElement
                    },
                    isEmptyObject: function(e) {
                        for (var t in e) return !1;
                        return !0
                    }
                },
                m = !1;
            if (e.fn && e.fn.jquery ? (d = e, m = !0) : d = t.Velocity.Utilities, 8 >= p && !m) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (7 >= p) return void(jQuery.fn.velocity = jQuery.fn.animate);
            var v = 400,
                y = "swing",
                b = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        isAndroid: /Android/i.test(navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                        isChrome: t.chrome,
                        isFirefox: /Firefox/i.test(navigator.userAgent),
                        prefixElement: i.createElement("div"),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: !1,
                        calls: []
                    },
                    CSS: {},
                    Utilities: d,
                    Redirects: {},
                    Easings: {},
                    Promise: t.Promise,
                    defaults: {
                        queue: "",
                        duration: v,
                        easing: y,
                        begin: n,
                        complete: n,
                        progress: n,
                        display: n,
                        visibility: n,
                        loop: !1,
                        delay: !1,
                        mobileHA: !0,
                        _cacheValues: !0
                    },
                    init: function(e) {
                        d.data(e, "velocity", {
                            isSVG: g.isSVG(e),
                            isAnimating: !1,
                            computedStyle: null,
                            tweensContainer: null,
                            rootPropertyValueCache: {},
                            transformCache: {}
                        })
                    },
                    hook: null,
                    mock: !1,
                    version: {
                        major: 1,
                        minor: 1,
                        patch: 0
                    },
                    debug: !1
                };
            t.pageYOffset !== n ? (b.State.scrollAnchor = t, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
            var w = function() {
                function e(e) {
                    return -e.tension * e.x - e.friction * e.v
                }

                function t(t, i, n) {
                    var s = {
                        x: t.x + n.dx * i,
                        v: t.v + n.dv * i,
                        tension: t.tension,
                        friction: t.friction
                    };
                    return {
                        dx: s.v,
                        dv: e(s)
                    }
                }

                function i(i, n) {
                    var s = {
                            dx: i.v,
                            dv: e(i)
                        },
                        o = t(i, .5 * n, s),
                        r = t(i, .5 * n, o),
                        a = t(i, n, r),
                        l = 1 / 6 * (s.dx + 2 * (o.dx + r.dx) + a.dx),
                        c = 1 / 6 * (s.dv + 2 * (o.dv + r.dv) + a.dv);
                    return i.x = i.x + l * n, i.v = i.v + c * n, i
                }
                return function e(t, n, s) {
                    var o, r, a, l = {
                            x: -1,
                            v: 0,
                            tension: null,
                            friction: null
                        },
                        c = [0],
                        u = 0,
                        h = 1e-4,
                        d = .016;
                    for (t = parseFloat(t) || 500, n = parseFloat(n) || 20, s = s || null, l.tension = t, l.friction = n, o = null !== s, o ? (u = e(t, n), r = u / s * d) : r = d; a = i(a || l, r), c.push(1 + a.x), u += 16, Math.abs(a.x) > h && Math.abs(a.v) > h;);
                    return o ? function(e) {
                        return c[e * (c.length - 1) | 0]
                    } : u
                }
            }();
            b.Easings = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                spring: function(e) {
                    return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                }
            }, d.each([
                ["ease", [.25, .1, .25, 1]],
                ["ease-in", [.42, 0, 1, 1]],
                ["ease-out", [0, 0, .58, 1]],
                ["ease-in-out", [.42, 0, .58, 1]],
                ["easeInSine", [.47, 0, .745, .715]],
                ["easeOutSine", [.39, .575, .565, 1]],
                ["easeInOutSine", [.445, .05, .55, .95]],
                ["easeInQuad", [.55, .085, .68, .53]],
                ["easeOutQuad", [.25, .46, .45, .94]],
                ["easeInOutQuad", [.455, .03, .515, .955]],
                ["easeInCubic", [.55, .055, .675, .19]],
                ["easeOutCubic", [.215, .61, .355, 1]],
                ["easeInOutCubic", [.645, .045, .355, 1]],
                ["easeInQuart", [.895, .03, .685, .22]],
                ["easeOutQuart", [.165, .84, .44, 1]],
                ["easeInOutQuart", [.77, 0, .175, 1]],
                ["easeInQuint", [.755, .05, .855, .06]],
                ["easeOutQuint", [.23, 1, .32, 1]],
                ["easeInOutQuint", [.86, 0, .07, 1]],
                ["easeInExpo", [.95, .05, .795, .035]],
                ["easeOutExpo", [.19, 1, .22, 1]],
                ["easeInOutExpo", [1, 0, 0, 1]],
                ["easeInCirc", [.6, .04, .98, .335]],
                ["easeOutCirc", [.075, .82, .165, 1]],
                ["easeInOutCirc", [.785, .135, .15, .86]]
            ], function(e, t) {
                b.Easings[t[0]] = l.apply(null, t[1])
            });
            var x = b.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function() {
                        for (var e = 0; e < x.Lists.colors.length; e++) {
                            var t = "color" === x.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                            x.Hooks.templates[x.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                        }
                        var i, n, s;
                        if (p)
                            for (i in x.Hooks.templates) {
                                n = x.Hooks.templates[i], s = n[0].split(" ");
                                var o = n[1].match(x.RegEx.valueSplit);
                                "Color" === s[0] && (s.push(s.shift()), o.push(o.shift()), x.Hooks.templates[i] = [s.join(" "), o.join(" ")])
                            }
                        for (i in x.Hooks.templates) {
                            n = x.Hooks.templates[i], s = n[0].split(" ");
                            for (var e in s) {
                                var r = i + s[e],
                                    a = e;
                                x.Hooks.registered[r] = [i, a]
                            }
                        }
                    },
                    getRoot: function(e) {
                        var t = x.Hooks.registered[e];
                        return t ? t[0] : e
                    },
                    cleanRootPropertyValue: function(e, t) {
                        return x.RegEx.valueUnwrap.test(t) && (t = t.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(t) && (t = x.Hooks.templates[e][1]), t
                    },
                    extractValue: function(e, t) {
                        var i = x.Hooks.registered[e];
                        if (i) {
                            var n = i[0],
                                s = i[1];
                            return t = x.Hooks.cleanRootPropertyValue(n, t), t.toString().match(x.RegEx.valueSplit)[s]
                        }
                        return t
                    },
                    injectValue: function(e, t, i) {
                        var n = x.Hooks.registered[e];
                        if (n) {
                            var s, o, r = n[0],
                                a = n[1];
                            return i = x.Hooks.cleanRootPropertyValue(r, i), s = i.toString().match(x.RegEx.valueSplit), s[a] = t, o = s.join(" ")
                        }
                        return i
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function(e, t, i) {
                            switch (e) {
                                case "name":
                                    return "clip";
                                case "extract":
                                    var n;
                                    return x.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : (n = i.toString().match(x.RegEx.valueUnwrap), n = n ? n[1].replace(/,(\s+)?/g, " ") : i), n;
                                case "inject":
                                    return "rect(" + i + ")"
                            }
                        },
                        blur: function(e, t, i) {
                            switch (e) {
                                case "name":
                                    return "-webkit-filter";
                                case "extract":
                                    var n = parseFloat(i);
                                    if (!n && 0 !== n) {
                                        var s = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        n = s ? s[1] : 0
                                    }
                                    return n;
                                case "inject":
                                    return parseFloat(i) ? "blur(" + i + ")" : "none"
                            }
                        },
                        opacity: function(e, t, i) {
                            if (8 >= p) switch (e) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return i = n ? n[1] / 100 : 1;
                                case "inject":
                                    return t.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                            } else switch (e) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                    return i;
                                case "inject":
                                    return i
                            }
                        }
                    },
                    register: function() {
                        9 >= p || b.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                        for (var e = 0; e < x.Lists.transformsBase.length; e++) ! function() {
                            var t = x.Lists.transformsBase[e];
                            x.Normalizations.registered[t] = function(e, i, s) {
                                switch (e) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return r(i) === n || r(i).transformCache[t] === n ? /^scale/i.test(t) ? 1 : 0 : r(i).transformCache[t].replace(/[()]/g, "");
                                    case "inject":
                                        var o = !1;
                                        switch (t.substr(0, t.length - 1)) {
                                            case "translate":
                                                o = !/(%|px|em|rem|vw|vh|\d)$/i.test(s);
                                                break;
                                            case "scal":
                                            case "scale":
                                                b.State.isAndroid && r(i).transformCache[t] === n && 1 > s && (s = 1), o = !/(\d)$/i.test(s);
                                                break;
                                            case "skew":
                                                o = !/(deg|\d)$/i.test(s);
                                                break;
                                            case "rotate":
                                                o = !/(deg|\d)$/i.test(s)
                                        }
                                        return o || (r(i).transformCache[t] = "(" + s + ")"), r(i).transformCache[t]
                                }
                            }
                        }();
                        for (var e = 0; e < x.Lists.colors.length; e++) ! function() {
                            var t = x.Lists.colors[e];
                            x.Normalizations.registered[t] = function(e, i, s) {
                                switch (e) {
                                    case "name":
                                        return t;
                                    case "extract":
                                        var o;
                                        if (x.RegEx.wrappedValueAlreadyExtracted.test(s)) o = s;
                                        else {
                                            var r, a = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            };
                                            /^[A-z]+$/i.test(s) ? r = a[s] !== n ? a[s] : a.black : x.RegEx.isHex.test(s) ? r = "rgb(" + x.Values.hexToRgb(s).join(" ") + ")" : /^rgba?\(/i.test(s) || (r = a.black), o = (r || s).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return 8 >= p || 3 !== o.split(" ").length || (o += " 1"), o;
                                    case "inject":
                                        return 8 >= p ? 4 === s.split(" ").length && (s = s.split(/\s+/).slice(0, 3).join(" ")) : 3 === s.split(" ").length && (s += " 1"), (8 >= p ? "rgb" : "rgba") + "(" + s.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                }
                            }
                        }()
                    }
                },
                Names: {
                    camelCase: function(e) {
                        return e.replace(/-(\w)/g, function(e, t) {
                            return t.toUpperCase()
                        })
                    },
                    SVGAttribute: function(e) {
                        var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (p || b.State.isAndroid && !b.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                    },
                    prefixCheck: function(e) {
                        if (b.State.prefixMatches[e]) return [b.State.prefixMatches[e], !0];
                        for (var t = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = t.length; n > i; i++) {
                            var s;
                            if (s = 0 === i ? e : t[i] + e.replace(/^\w/, function(e) {
                                    return e.toUpperCase()
                                }), g.isString(b.State.prefixElement.style[s])) return b.State.prefixMatches[e] = s, [s, !0]
                        }
                        return [e, !1]
                    }
                },
                Values: {
                    hexToRgb: function(e) {
                        var t, i = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                            n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return e = e.replace(i, function(e, t, i, n) {
                            return t + t + i + i + n + n
                        }), t = n.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function(e) {
                        return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                    },
                    getUnitType: function(e) {
                        return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                    },
                    getDisplayType: function(e) {
                        var t = e && e.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : "block"
                    },
                    addClass: function(e, t) {
                        e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                    },
                    removeClass: function(e, t) {
                        e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                    }
                },
                getPropertyValue: function(e, i, s, o) {
                    function a(e, i) {
                        function s() {
                            c && x.setPropertyValue(e, "display", "none")
                        }
                        var l = 0;
                        if (8 >= p) l = d.css(e, i);
                        else {
                            var c = !1;
                            if (/^(width|height)$/.test(i) && 0 === x.getPropertyValue(e, "display") && (c = !0, x.setPropertyValue(e, "display", x.Values.getDisplayType(e))), !o) {
                                if ("height" === i && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var u = e.offsetHeight - (parseFloat(x.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingBottom")) || 0);
                                    return s(), u
                                }
                                if ("width" === i && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var h = e.offsetWidth - (parseFloat(x.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingRight")) || 0);
                                    return s(), h
                                }
                            }
                            var f;
                            f = r(e) === n ? t.getComputedStyle(e, null) : r(e).computedStyle ? r(e).computedStyle : r(e).computedStyle = t.getComputedStyle(e, null), (p || b.State.isFirefox) && "borderColor" === i && (i = "borderTopColor"), l = 9 === p && "filter" === i ? f.getPropertyValue(i) : f[i], ("" === l || null === l) && (l = e.style[i]), s()
                        }
                        if ("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
                            var g = a(e, "position");
                            ("fixed" === g || "absolute" === g && /top|left/i.test(i)) && (l = d(e).position()[i] + "px")
                        }
                        return l
                    }
                    var l;
                    if (x.Hooks.registered[i]) {
                        var c = i,
                            u = x.Hooks.getRoot(c);
                        s === n && (s = x.getPropertyValue(e, x.Names.prefixCheck(u)[0])), x.Normalizations.registered[u] && (s = x.Normalizations.registered[u]("extract", e, s)), l = x.Hooks.extractValue(c, s)
                    } else if (x.Normalizations.registered[i]) {
                        var h, f;
                        h = x.Normalizations.registered[i]("name", e), "transform" !== h && (f = a(e, x.Names.prefixCheck(h)[0]), x.Values.isCSSNullValue(f) && x.Hooks.templates[i] && (f = x.Hooks.templates[i][1])), l = x.Normalizations.registered[i]("extract", e, f)
                    }
                    return /^[\d-]/.test(l) || (l = r(e) && r(e).isSVG && x.Names.SVGAttribute(i) ? /^(height|width)$/i.test(i) ? e.getBBox()[i] : e.getAttribute(i) : a(e, x.Names.prefixCheck(i)[0])), x.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + i + ": " + l), l
                },
                setPropertyValue: function(e, i, n, s, o) {
                    var a = i;
                    if ("scroll" === i) o.container ? o.container["scroll" + o.direction] = n : "Left" === o.direction ? t.scrollTo(n, o.alternateValue) : t.scrollTo(o.alternateValue, n);
                    else if (x.Normalizations.registered[i] && "transform" === x.Normalizations.registered[i]("name", e)) x.Normalizations.registered[i]("inject", e, n), a = "transform", n = r(e).transformCache[i];
                    else {
                        if (x.Hooks.registered[i]) {
                            var l = i,
                                c = x.Hooks.getRoot(i);
                            s = s || x.getPropertyValue(e, c), n = x.Hooks.injectValue(l, n, s), i = c
                        }
                        if (x.Normalizations.registered[i] && (n = x.Normalizations.registered[i]("inject", e, n), i = x.Normalizations.registered[i]("name", e)), a = x.Names.prefixCheck(i)[0], 8 >= p) try {
                            e.style[a] = n
                        } catch (e) {
                            b.debug && console.log("Browser does not support [" + n + "] for [" + a + "]")
                        } else r(e) && r(e).isSVG && x.Names.SVGAttribute(i) ? e.setAttribute(i, n) : e.style[a] = n;
                        b.debug >= 2 && console.log("Set " + i + " (" + a + "): " + n)
                    }
                    return [a, n]
                },
                flushTransformCache: function(e) {
                    function t(t) {
                        return parseFloat(x.getPropertyValue(e, t))
                    }
                    var i = "";
                    if ((p || b.State.isAndroid && !b.State.isChrome) && r(e).isSVG) {
                        var n = {
                            translate: [t("translateX"), t("translateY")],
                            skewX: [t("skewX")],
                            skewY: [t("skewY")],
                            scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                            rotate: [t("rotateZ"), 0, 0]
                        };
                        d.each(r(e).transformCache, function(e) {
                            /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), n[e] && (i += e + "(" + n[e].join(" ") + ") ", delete n[e])
                        })
                    } else {
                        var s, o;
                        d.each(r(e).transformCache, function(t) {
                            return s = r(e).transformCache[t], "transformPerspective" === t ? (o = s, !0) : (9 === p && "rotateZ" === t && (t = "rotate"), void(i += t + s + " "))
                        }), o && (i = "perspective" + o + " " + i)
                    }
                    x.setPropertyValue(e, "transform", i)
                }
            };
            x.Hooks.register(), x.Normalizations.register(), b.hook = function(e, t, i) {
                var s = n;
                return e = o(e), d.each(e, function(e, o) {
                    if (r(o) === n && b.init(o), i === n) s === n && (s = b.CSS.getPropertyValue(o, t));
                    else {
                        var a = b.CSS.setPropertyValue(o, t, i);
                        "transform" === a[0] && b.CSS.flushTransformCache(o), s = a
                    }
                }), s
            };
            var _ = function() {
                function e() {
                    return l ? E.promise || null : p
                }

                function a() {
                    function e() {
                        function e(e, t) {
                            var i = n,
                                s = n,
                                o = n;
                            return g.isArray(e) ? (i = e[0], !g.isArray(e[1]) && /^[\d-]/.test(e[1]) || g.isFunction(e[1]) || x.RegEx.isHex.test(e[1]) ? o = e[1] : (g.isString(e[1]) && !x.RegEx.isHex.test(e[1]) || g.isArray(e[1])) && (s = t ? e[1] : c(e[1], l.duration), e[2] !== n && (o = e[2]))) : i = e, t || (s = s || l.easing), g.isFunction(i) && (i = i.call(a, S, C)), g.isFunction(o) && (o = o.call(a, S, C)), [i || 0, s, o]
                        }

                        function p(e, t) {
                            var i, n;
                            return n = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                                return i = e, ""
                            }), i || (i = x.Values.getUnitType(e)), [n, i]
                        }

                        function f() {
                            var e = {
                                    myParent: a.parentNode || i.body,
                                    position: x.getPropertyValue(a, "position"),
                                    fontSize: x.getPropertyValue(a, "fontSize")
                                },
                                n = e.position === O.lastPosition && e.myParent === O.lastParent,
                                s = e.fontSize === O.lastFontSize;
                            O.lastParent = e.myParent, O.lastPosition = e.position, O.lastFontSize = e.fontSize;
                            var o = 100,
                                l = {};
                            if (s && n) l.emToPx = O.lastEmToPx, l.percentToPxWidth = O.lastPercentToPxWidth, l.percentToPxHeight = O.lastPercentToPxHeight;
                            else {
                                var c = r(a).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                                b.init(c), e.myParent.appendChild(c), d.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                    b.CSS.setPropertyValue(c, t, "hidden")
                                }), b.CSS.setPropertyValue(c, "position", e.position), b.CSS.setPropertyValue(c, "fontSize", e.fontSize), b.CSS.setPropertyValue(c, "boxSizing", "content-box"), d.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                    b.CSS.setPropertyValue(c, t, o + "%")
                                }), b.CSS.setPropertyValue(c, "paddingLeft", o + "em"), l.percentToPxWidth = O.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(c, "width", null, !0)) || 1) / o, l.percentToPxHeight = O.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(c, "height", null, !0)) || 1) / o, l.emToPx = O.lastEmToPx = (parseFloat(x.getPropertyValue(c, "paddingLeft")) || 1) / o, e.myParent.removeChild(c)
                            }
                            return null === O.remToPx && (O.remToPx = parseFloat(x.getPropertyValue(i.body, "fontSize")) || 16), null === O.vwToPx && (O.vwToPx = parseFloat(t.innerWidth) / 100, O.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = O.remToPx, l.vwToPx = O.vwToPx, l.vhToPx = O.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), a), l
                        }
                        if (l.begin && 0 === S) try {
                            l.begin.call(m, m)
                        } catch (e) {
                            setTimeout(function() {
                                throw e
                            }, 1)
                        }
                        if ("scroll" === P) {
                            var v, _, k, T = /^x$/i.test(l.axis) ? "Left" : "Top",
                                D = parseFloat(l.offset) || 0;
                            l.container ? g.isWrapped(l.container) || g.isNode(l.container) ? (l.container = l.container[0] || l.container, v = l.container["scroll" + T], k = v + d(a).position()[T.toLowerCase()] + D) : l.container = null : (v = b.State.scrollAnchor[b.State["scrollProperty" + T]], _ = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === T ? "Top" : "Left")]], k = d(a).offset()[T.toLowerCase()] + D), h = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: v,
                                    currentValue: v,
                                    endValue: k,
                                    unitType: "",
                                    easing: l.easing,
                                    scrollData: {
                                        container: l.container,
                                        direction: T,
                                        alternateValue: _
                                    }
                                },
                                element: a
                            }, b.debug && console.log("tweensContainer (scroll): ", h.scroll, a)
                        } else if ("reverse" === P) {
                            if (!r(a).tweensContainer) return void d.dequeue(a, l.queue);
                            "none" === r(a).opts.display && (r(a).opts.display = "auto"), "hidden" === r(a).opts.visibility && (r(a).opts.visibility = "visible"), r(a).opts.loop = !1, r(a).opts.begin = null, r(a).opts.complete = null, w.easing || delete l.easing, w.duration || delete l.duration, l = d.extend({}, r(a).opts, l);
                            var M = d.extend(!0, {}, r(a).tweensContainer);
                            for (var A in M)
                                if ("element" !== A) {
                                    var I = M[A].startValue;
                                    M[A].startValue = M[A].currentValue = M[A].endValue, M[A].endValue = I, g.isEmptyObject(w) || (M[A].easing = l.easing), b.debug && console.log("reverse tweensContainer (" + A + "): " + JSON.stringify(M[A]), a)
                                }
                            h = M
                        } else if ("start" === P) {
                            var M;
                            r(a).tweensContainer && r(a).isAnimating === !0 && (M = r(a).tweensContainer), d.each(y, function(t, i) {
                                if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(t)) {
                                    var s = e(i, !0),
                                        o = s[0],
                                        r = s[1],
                                        a = s[2];
                                    if (x.RegEx.isHex.test(o)) {
                                        for (var l = ["Red", "Green", "Blue"], c = x.Values.hexToRgb(o), u = a ? x.Values.hexToRgb(a) : n, h = 0; h < l.length; h++) {
                                            var d = [c[h]];
                                            r && d.push(r), u !== n && d.push(u[h]), y[t + l[h]] = d
                                        }
                                        delete y[t]
                                    }
                                }
                            });
                            for (var N in y) {
                                var z = e(y[N]),
                                    H = z[0],
                                    $ = z[1],
                                    L = z[2];
                                N = x.Names.camelCase(N);
                                var F = x.Hooks.getRoot(N),
                                    R = !1;
                                if (r(a).isSVG || x.Names.prefixCheck(F)[1] !== !1 || x.Normalizations.registered[F] !== n) {
                                    (l.display !== n && null !== l.display && "none" !== l.display || l.visibility !== n && "hidden" !== l.visibility) && /opacity|filter/.test(N) && !L && 0 !== H && (L = 0), l._cacheValues && M && M[N] ? (L === n && (L = M[N].endValue + M[N].unitType), R = r(a).rootPropertyValueCache[F]) : x.Hooks.registered[N] ? L === n ? (R = x.getPropertyValue(a, F), L = x.getPropertyValue(a, N, R)) : R = x.Hooks.templates[F][1] : L === n && (L = x.getPropertyValue(a, N));
                                    var W, q, B, V = !1;
                                    if (W = p(N, L), L = W[0], B = W[1], W = p(N, H), H = W[0].replace(/^([+-\/*])=/, function(e, t) {
                                            return V = t, ""
                                        }), q = W[1], L = parseFloat(L) || 0, H = parseFloat(H) || 0, "%" === q && (/^(fontSize|lineHeight)$/.test(N) ? (H /= 100, q = "em") : /^scale/.test(N) ? (H /= 100, q = "") : /(Red|Green|Blue)$/i.test(N) && (H = H / 100 * 255, q = "")), /[\/*]/.test(V)) q = B;
                                    else if (B !== q && 0 !== L)
                                        if (0 === H) q = B;
                                        else {
                                            o = o || f();
                                            var Y = /margin|padding|left|right|width|text|word|letter/i.test(N) || /X$/.test(N) || "x" === N ? "x" : "y";
                                            switch (B) {
                                                case "%":
                                                    L *= "x" === Y ? o.percentToPxWidth : o.percentToPxHeight;
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    L *= o[B + "ToPx"]
                                            }
                                            switch (q) {
                                                case "%":
                                                    L *= 1 / ("x" === Y ? o.percentToPxWidth : o.percentToPxHeight);
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    L *= 1 / o[q + "ToPx"]
                                            }
                                        }
                                    switch (V) {
                                        case "+":
                                            H = L + H;
                                            break;
                                        case "-":
                                            H = L - H;
                                            break;
                                        case "*":
                                            H *= L;
                                            break;
                                        case "/":
                                            H = L / H
                                    }
                                    h[N] = {
                                        rootPropertyValue: R,
                                        startValue: L,
                                        currentValue: L,
                                        endValue: H,
                                        unitType: q,
                                        easing: $
                                    }, b.debug && console.log("tweensContainer (" + N + "): " + JSON.stringify(h[N]), a)
                                } else b.debug && console.log("Skipping [" + F + "] due to a lack of browser support.")
                            }
                            h.element = a
                        }
                        h.element && (x.Values.addClass(a, "velocity-animating"), j.push(h), "" === l.queue && (r(a).tweensContainer = h, r(a).opts = l), r(a).isAnimating = !0, S === C - 1 ? (b.State.calls.length > 1e4 && (b.State.calls = s(b.State.calls)), b.State.calls.push([j, m, l, null, E.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, u())) : S++)
                    }
                    var o, a = this,
                        l = d.extend({}, b.defaults, w),
                        h = {};
                    switch (r(a) === n && b.init(a), parseFloat(l.delay) && l.queue !== !1 && d.queue(a, l.queue, function(e) {
                        b.velocityQueueEntryFlag = !0, r(a).delayTimer = {
                            setTimeout: setTimeout(e, parseFloat(l.delay)),
                            next: e
                        }
                    }), l.duration.toString().toLowerCase()) {
                        case "fast":
                            l.duration = 200;
                            break;
                        case "normal":
                            l.duration = v;
                            break;
                        case "slow":
                            l.duration = 600;
                            break;
                        default:
                            l.duration = parseFloat(l.duration) || 1
                    }
                    b.mock !== !1 && (b.mock === !0 ? l.duration = l.delay = 1 : (l.duration *= parseFloat(b.mock) || 1, l.delay *= parseFloat(b.mock) || 1)), l.easing = c(l.easing, l.duration), l.begin && !g.isFunction(l.begin) && (l.begin = null), l.progress && !g.isFunction(l.progress) && (l.progress = null), l.complete && !g.isFunction(l.complete) && (l.complete = null), l.display !== n && null !== l.display && (l.display = l.display.toString().toLowerCase(), "auto" === l.display && (l.display = b.CSS.Values.getDisplayType(a))), l.visibility !== n && null !== l.visibility && (l.visibility = l.visibility.toString().toLowerCase()), l.mobileHA = l.mobileHA && b.State.isMobile && !b.State.isGingerbread, l.queue === !1 ? l.delay ? setTimeout(e, l.delay) : e() : d.queue(a, l.queue, function(t, i) {
                        return i === !0 ? (E.promise && E.resolver(m), !0) : (b.velocityQueueEntryFlag = !0, void e(t))
                    }), "" !== l.queue && "fx" !== l.queue || "inprogress" === d.queue(a)[0] || d.dequeue(a)
                }
                var l, p, f, m, y, w, k = arguments[0] && (d.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties));
                if (g.isWrapped(this) ? (l = !1, f = 0, m = this, p = this) : (l = !0, f = 1, m = k ? arguments[0].elements : arguments[0]), m = o(m)) {
                    k ? (y = arguments[0].properties, w = arguments[0].options) : (y = arguments[f], w = arguments[f + 1]);
                    var C = m.length,
                        S = 0;
                    if ("stop" !== y && !d.isPlainObject(w)) {
                        var T = f + 1;
                        w = {};
                        for (var D = T; D < arguments.length; D++) g.isArray(arguments[D]) || !/^(fast|normal|slow)$/i.test(arguments[D]) && !/^\d/.test(arguments[D]) ? g.isString(arguments[D]) || g.isArray(arguments[D]) ? w.easing = arguments[D] : g.isFunction(arguments[D]) && (w.complete = arguments[D]) : w.duration = arguments[D]
                    }
                    var E = {
                        promise: null,
                        resolver: null,
                        rejecter: null
                    };
                    l && b.Promise && (E.promise = new b.Promise(function(e, t) {
                        E.resolver = e, E.rejecter = t
                    }));
                    var P;
                    switch (y) {
                        case "scroll":
                            P = "scroll";
                            break;
                        case "reverse":
                            P = "reverse";
                            break;
                        case "stop":
                            d.each(m, function(e, t) {
                                r(t) && r(t).delayTimer && (clearTimeout(r(t).delayTimer.setTimeout), r(t).delayTimer.next && r(t).delayTimer.next(), delete r(t).delayTimer)
                            });
                            var M = [];
                            return d.each(b.State.calls, function(e, t) {
                                t && d.each(t[1], function(i, s) {
                                    var o = g.isString(w) ? w : "";
                                    return w !== n && t[2].queue !== o || void d.each(m, function(t, i) {
                                        i === s && (w !== n && (d.each(d.queue(i, o), function(e, t) {
                                            g.isFunction(t) && t(null, !0)
                                        }), d.queue(i, o, [])), r(i) && "" === o && d.each(r(i).tweensContainer, function(e, t) {
                                            t.endValue = t.currentValue
                                        }), M.push(e))
                                    })
                                })
                            }), d.each(M, function(e, t) {
                                h(t, !0)
                            }), E.promise && E.resolver(m), e();
                        default:
                            if (!d.isPlainObject(y) || g.isEmptyObject(y)) {
                                if (g.isString(y) && b.Redirects[y]) {
                                    var A = d.extend({}, w),
                                        I = A.duration,
                                        N = A.delay || 0;
                                    return A.backwards === !0 && (m = d.extend(!0, [], m).reverse()), d.each(m, function(e, t) {
                                        parseFloat(A.stagger) ? A.delay = N + parseFloat(A.stagger) * e : g.isFunction(A.stagger) && (A.delay = N + A.stagger.call(t, e, C)), A.drag && (A.duration = parseFloat(I) || (/^(callout|transition)/.test(y) ? 1e3 : v), A.duration = Math.max(A.duration * (A.backwards ? 1 - e / C : (e + 1) / C), .75 * A.duration, 200)), b.Redirects[y].call(t, t, A || {}, e, C, m, E.promise ? E : n)
                                    }), e()
                                }
                                var z = "Velocity: First argument (" + y + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                return E.promise ? E.rejecter(new Error(z)) : console.log(z), e()
                            }
                            P = "start"
                    }
                    var O = {
                            lastParent: null,
                            lastPosition: null,
                            lastFontSize: null,
                            lastPercentToPxWidth: null,
                            lastPercentToPxHeight: null,
                            lastEmToPx: null,
                            remToPx: null,
                            vwToPx: null,
                            vhToPx: null
                        },
                        j = [];
                    d.each(m, function(e, t) {
                        g.isNode(t) && a.call(t)
                    });
                    var H, A = d.extend({}, b.defaults, w);
                    if (A.loop = parseInt(A.loop), H = 2 * A.loop - 1, A.loop)
                        for (var $ = 0; H > $; $++) {
                            var L = {
                                delay: A.delay,
                                progress: A.progress
                            };
                            $ === H - 1 && (L.display = A.display, L.visibility = A.visibility, L.complete = A.complete), _(m, "reverse", L)
                        }
                    return e()
                }
            };
            b = d.extend(_, b), b.animate = _;
            var k = t.requestAnimationFrame || f;
            return b.State.isMobile || i.hidden === n || i.addEventListener("visibilitychange", function() {
                i.hidden ? (k = function(e) {
                    return setTimeout(function() {
                        e(!0)
                    }, 16)
                }, u()) : k = t.requestAnimationFrame || f
            }), e.Velocity = b, e !== t && (e.fn.velocity = _, e.fn.velocity.defaults = b.defaults), d.each(["Down", "Up"], function(e, t) {
                b.Redirects["slide" + t] = function(e, i, s, o, r, a) {
                    var l = d.extend({}, i),
                        c = l.begin,
                        u = l.complete,
                        h = {
                            height: "",
                            marginTop: "",
                            marginBottom: "",
                            paddingTop: "",
                            paddingBottom: ""
                        },
                        p = {};
                    l.display === n && (l.display = "Down" === t ? "inline" === b.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
                        c && c.call(r, r);
                        for (var i in h) {
                            p[i] = e.style[i];
                            var n = b.CSS.getPropertyValue(e, i);
                            h[i] = "Down" === t ? [n, 0] : [0, n]
                        }
                        p.overflow = e.style.overflow, e.style.overflow = "hidden"
                    }, l.complete = function() {
                        for (var t in p) e.style[t] = p[t];
                        u && u.call(r, r), a && a.resolver(r)
                    }, b(e, h, l)
                }
            }), d.each(["In", "Out"], function(e, t) {
                b.Redirects["fade" + t] = function(e, i, s, o, r, a) {
                    var l = d.extend({}, i),
                        c = {
                            opacity: "In" === t ? 1 : 0
                        },
                        u = l.complete;
                    l.complete = s !== o - 1 ? l.begin = null : function() {
                        u && u.call(r, r), a && a.resolver(r)
                    }, l.display === n && (l.display = "In" === t ? "auto" : "none"), b(this, c, l)
                }
            }), b
        }(window.jQuery || window.Zepto || window, window, document)
    }),
    function(e, t) {
        function i(t, i) {
            var s = t.nodeName.toLowerCase();
            return "area" === s ? (i = t.parentNode, s = i.name, !(!t.href || !s || "map" !== i.nodeName.toLowerCase()) && (t = e("img[usemap=#" + s + "]")[0], !!t && n(t))) : (/input|select|textarea|button|object/.test(s) ? !t.disabled : "a" == s ? t.href || i : i) && n(t)
        }

        function n(t) {
            return !e(t).parents().andSelf().filter(function() {
                return "hidden" === e.curCSS(this, "visibility") || e.expr.filters.hidden(this)
            }).length
        }
        e.ui = e.ui || {}, e.ui.version || (e.extend(e.ui, {
            version: "1.8.16",
            keyCode: {
                ALT: 18,
                BACKSPACE: 8,
                CAPS_LOCK: 20,
                COMMA: 188,
                COMMAND: 91,
                COMMAND_LEFT: 91,
                COMMAND_RIGHT: 93,
                CONTROL: 17,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                INSERT: 45,
                LEFT: 37,
                MENU: 93,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SHIFT: 16,
                SPACE: 32,
                TAB: 9,
                UP: 38,
                WINDOWS: 91
            }
        }), e.fn.extend({
            propAttr: e.fn.prop || e.fn.attr,
            _focus: e.fn.focus,
            focus: function(t, i) {
                return "number" == typeof t ? this.each(function() {
                    var n = this;
                    setTimeout(function() {
                        e(n).focus(), i && i.call(n)
                    }, t)
                }) : this._focus.apply(this, arguments)
            },
            scrollParent: function() {
                var t;
                return t = e.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                    return /(relative|absolute|fixed)/.test(e.curCSS(this, "position", 1)) && /(auto|scroll)/.test(e.curCSS(this, "overflow", 1) + e.curCSS(this, "overflow-y", 1) + e.curCSS(this, "overflow-x", 1))
                }).eq(0) : this.parents().filter(function() {
                    return /(auto|scroll)/.test(e.curCSS(this, "overflow", 1) + e.curCSS(this, "overflow-y", 1) + e.curCSS(this, "overflow-x", 1))
                }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
            },
            zIndex: function(i) {
                if (i !== t) return this.css("zIndex", i);
                if (this.length) {
                    i = e(this[0]);
                    for (var n; i.length && i[0] !== document;) {
                        if (n = i.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (n = parseInt(i.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
                        i = i.parent()
                    }
                }
                return 0
            },
            disableSelection: function() {
                return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                    e.preventDefault()
                })
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            }
        }), e.each(["Width", "Height"], function(i, n) {
            function s(t, i, n, s) {
                return e.each(o, function() {
                    i -= parseFloat(e.curCSS(t, "padding" + this, !0)) || 0, n && (i -= parseFloat(e.curCSS(t, "border" + this + "Width", !0)) || 0), s && (i -= parseFloat(e.curCSS(t, "margin" + this, !0)) || 0)
                }), i
            }
            var o = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
                r = n.toLowerCase(),
                a = {
                    innerWidth: e.fn.innerWidth,
                    innerHeight: e.fn.innerHeight,
                    outerWidth: e.fn.outerWidth,
                    outerHeight: e.fn.outerHeight
                };
            e.fn["inner" + n] = function(i) {
                return i === t ? a["inner" + n].call(this) : this.each(function() {
                    e(this).css(r, s(this, i) + "px")
                })
            }, e.fn["outer" + n] = function(t, i) {
                return "number" != typeof t ? a["outer" + n].call(this, t) : this.each(function() {
                    e(this).css(r, s(this, t, !0, i) + "px")
                })
            }
        }), e.extend(e.expr[":"], {
            data: function(t, i, n) {
                return !!e.data(t, n[3])
            },
            focusable: function(t) {
                return i(t, !isNaN(e.attr(t, "tabindex")))
            },
            tabbable: function(t) {
                var n = e.attr(t, "tabindex"),
                    s = isNaN(n);
                return (s || n >= 0) && i(t, !s)
            }
        }), e(function() {
            var t = document.body,
                i = t.appendChild(i = document.createElement("div"));
            e.extend(i.style, {
                minHeight: "100px",
                height: "auto",
                padding: 0,
                borderWidth: 0
            }), e.support.minHeight = 100 === i.offsetHeight, e.support.selectstart = "onselectstart" in i, t.removeChild(i).style.display = "none"
        }), e.extend(e.ui, {
            plugin: {
                add: function(t, i, n) {
                    t = e.ui[t].prototype;
                    for (var s in n) t.plugins[s] = t.plugins[s] || [], t.plugins[s].push([i, n[s]])
                },
                call: function(e, t, i) {
                    if ((t = e.plugins[t]) && e.element[0].parentNode)
                        for (var n = 0; n < t.length; n++) e.options[t[n][0]] && t[n][1].apply(e.element, i)
                }
            },
            contains: function(e, t) {
                return document.compareDocumentPosition ? 16 & e.compareDocumentPosition(t) : e !== t && e.contains(t)
            },
            hasScroll: function(t, i) {
                if ("hidden" === e(t).css("overflow")) return !1;
                i = i && "left" === i ? "scrollLeft" : "scrollTop";
                var n = !1;
                return t[i] > 0 || (t[i] = 1, n = t[i] > 0, t[i] = 0, n)
            },
            isOverAxis: function(e, t, i) {
                return e > t && e < t + i
            },
            isOver: function(t, i, n, s, o, r) {
                return e.ui.isOverAxis(t, n, o) && e.ui.isOverAxis(i, s, r)
            }
        }))
    }(jQuery),
    function(e, t) {
        if (e.cleanData) {
            var i = e.cleanData;
            e.cleanData = function(t) {
                for (var n, s = 0; null != (n = t[s]); s++) try {
                    e(n).triggerHandler("remove")
                } catch (e) {}
                i(t)
            }
        } else {
            var n = e.fn.remove;
            e.fn.remove = function(t, i) {
                return this.each(function() {
                    return i || t && !e.filter(t, [this]).length || e("*", this).add([this]).each(function() {
                        try {
                            e(this).triggerHandler("remove")
                        } catch (e) {}
                    }), n.call(e(this), t, i)
                })
            }
        }
        e.widget = function(t, i, n) {
            var s, o = t.split(".")[0];
            t = t.split(".")[1], s = o + "-" + t, n || (n = i, i = e.Widget), e.expr[":"][s] = function(i) {
                return !!e.data(i, t)
            }, e[o] = e[o] || {}, e[o][t] = function(e, t) {
                arguments.length && this._createWidget(e, t)
            }, i = new i, i.options = e.extend(!0, {}, i.options), e[o][t].prototype = e.extend(!0, i, {
                namespace: o,
                widgetName: t,
                widgetEventPrefix: e[o][t].prototype.widgetEventPrefix || t,
                widgetBaseClass: s
            }, n), e.widget.bridge(t, e[o][t])
        }, e.widget.bridge = function(i, n) {
            e.fn[i] = function(s) {
                var o = "string" == typeof s,
                    r = Array.prototype.slice.call(arguments, 1),
                    a = this;
                return s = !o && r.length ? e.extend.apply(null, [!0, s].concat(r)) : s, o && "_" === s.charAt(0) ? a : (o ? this.each(function() {
                    var n = e.data(this, i),
                        o = n && e.isFunction(n[s]) ? n[s].apply(n, r) : n;
                    if (o !== n && o !== t) return a = o, !1
                }) : this.each(function() {
                    var t = e.data(this, i);
                    t ? t.option(s || {})._init() : e.data(this, i, new n(s, this))
                }), a)
            }
        }, e.Widget = function(e, t) {
            arguments.length && this._createWidget(e, t)
        }, e.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            options: {
                disabled: !1
            },
            _createWidget: function(t, i) {
                e.data(i, this.widgetName, this), this.element = e(i), this.options = e.extend(!0, {}, this.options, this._getCreateOptions(), t);
                var n = this;
                this.element.bind("remove." + this.widgetName, function() {
                    n.destroy()
                }), this._create(), this._trigger("create"), this._init()
            },
            _getCreateOptions: function() {
                return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
            },
            _create: function() {},
            _init: function() {},
            destroy: function() {
                this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
            },
            widget: function() {
                return this.element
            },
            option: function(i, n) {
                var s = i;
                if (0 === arguments.length) return e.extend({}, this.options);
                if ("string" == typeof i) {
                    if (n === t) return this.options[i];
                    s = {}, s[i] = n
                }
                return this._setOptions(s), this
            },
            _setOptions: function(t) {
                var i = this;
                return e.each(t, function(e, t) {
                    i._setOption(e, t)
                }), this
            },
            _setOption: function(e, t) {
                return this.options[e] = t, "disabled" === e && this.widget()[t ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", t), this
            },
            enable: function() {
                return this._setOption("disabled", !1)
            },
            disable: function() {
                return this._setOption("disabled", !0)
            },
            _trigger: function(t, i, n) {
                var s = this.options[t];
                if (i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n = n || {}, i.originalEvent) {
                    t = e.event.props.length;
                    for (var o; t;) o = e.event.props[--t], i[o] = i.originalEvent[o]
                }
                return this.element.trigger(i, n), !(e.isFunction(s) && s.call(this.element[0], i, n) === !1 || i.isDefaultPrevented())
            }
        }
    }(jQuery),
    function(e) {
        var t = !1;
        e(document).mouseup(function() {
            t = !1
        }), e.widget("ui.mouse", {
            options: {
                cancel: ":input,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var t = this;
                this.element.bind("mousedown." + this.widgetName, function(e) {
                    return t._mouseDown(e)
                }).bind("click." + this.widgetName, function(i) {
                    if (!0 === e.data(i.target, t.widgetName + ".preventClickEvent")) return e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1
                }), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.unbind("." + this.widgetName)
            },
            _mouseDown: function(i) {
                if (!t) {
                    this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                    var n = this,
                        s = 1 == i.which,
                        o = !("string" != typeof this.options.cancel || !i.target.nodeName) && e(i.target).closest(this.options.cancel).length;
                    return !(s && !o && this._mouseCapture(i)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        n.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === e.data(i.target, this.widgetName + ".preventClickEvent") && e.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                        return n._mouseMove(e)
                    }, this._mouseUpDelegate = function(e) {
                        return n._mouseUp(e)
                    }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), t = !0))
                }
            },
            _mouseMove: function(t) {
                return !e.browser.msie || document.documentMode >= 9 || t.button ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && ((this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1) ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
            },
            _mouseUp: function(t) {
                return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target == this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
            },
            _mouseDistanceMet: function(e) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        })
    }(jQuery),
    function(e) {
        e.ui = e.ui || {};
        var t = /left|center|right/,
            i = /top|center|bottom/,
            n = e.fn.position,
            s = e.fn.offset;
        e.fn.position = function(s) {
            if (!s || !s.of) return n.apply(this, arguments);
            s = e.extend({}, s);
            var o, r, a, l = e(s.of),
                c = l[0],
                u = (s.collision || "flip").split(" "),
                h = s.offset ? s.offset.split(" ") : [0, 0];
            return 9 === c.nodeType ? (o = l.width(), r = l.height(), a = {
                top: 0,
                left: 0
            }) : c.setTimeout ? (o = l.width(), r = l.height(), a = {
                top: l.scrollTop(),
                left: l.scrollLeft()
            }) : c.preventDefault ? (s.at = "left top", o = r = 0, a = {
                top: s.of.pageY,
                left: s.of.pageX
            }) : (o = l.outerWidth(), r = l.outerHeight(), a = l.offset()), e.each(["my", "at"], function() {
                var e = (s[this] || "").split(" ");
                1 === e.length && (e = t.test(e[0]) ? e.concat(["center"]) : i.test(e[0]) ? ["center"].concat(e) : ["center", "center"]), e[0] = t.test(e[0]) ? e[0] : "center", e[1] = i.test(e[1]) ? e[1] : "center", s[this] = e
            }), 1 === u.length && (u[1] = u[0]), h[0] = parseInt(h[0], 10) || 0, 1 === h.length && (h[1] = h[0]), h[1] = parseInt(h[1], 10) || 0, "right" === s.at[0] ? a.left += o : "center" === s.at[0] && (a.left += o / 2), "bottom" === s.at[1] ? a.top += r : "center" === s.at[1] && (a.top += r / 2), a.left += h[0], a.top += h[1], this.each(function() {
                var t, i = e(this),
                    n = i.outerWidth(),
                    l = i.outerHeight(),
                    c = parseInt(e.curCSS(this, "marginLeft", !0)) || 0,
                    d = parseInt(e.curCSS(this, "marginTop", !0)) || 0,
                    p = n + c + (parseInt(e.curCSS(this, "marginRight", !0)) || 0),
                    f = l + d + (parseInt(e.curCSS(this, "marginBottom", !0)) || 0),
                    g = e.extend({}, a);
                "right" === s.my[0] ? g.left -= n : "center" === s.my[0] && (g.left -= n / 2), "bottom" === s.my[1] ? g.top -= l : "center" === s.my[1] && (g.top -= l / 2), g.left = Math.round(g.left), g.top = Math.round(g.top), t = {
                    left: g.left - c,
                    top: g.top - d
                }, e.each(["left", "top"], function(i, a) {
                    e.ui.position[u[i]] && e.ui.position[u[i]][a](g, {
                        targetWidth: o,
                        targetHeight: r,
                        elemWidth: n,
                        elemHeight: l,
                        collisionPosition: t,
                        collisionWidth: p,
                        collisionHeight: f,
                        offset: h,
                        my: s.my,
                        at: s.at
                    })
                }), e.fn.bgiframe && i.bgiframe(), i.offset(e.extend(g, {
                    using: s.using
                }))
            })
        }, e.ui.position = {
            fit: {
                left: function(t, i) {
                    var n = e(window);
                    n = i.collisionPosition.left + i.collisionWidth - n.width() - n.scrollLeft(), t.left = n > 0 ? t.left - n : Math.max(t.left - i.collisionPosition.left, t.left)
                },
                top: function(t, i) {
                    var n = e(window);
                    n = i.collisionPosition.top + i.collisionHeight - n.height() - n.scrollTop(), t.top = n > 0 ? t.top - n : Math.max(t.top - i.collisionPosition.top, t.top)
                }
            },
            flip: {
                left: function(t, i) {
                    if ("center" !== i.at[0]) {
                        var n = e(window);
                        n = i.collisionPosition.left + i.collisionWidth - n.width() - n.scrollLeft();
                        var s = "left" === i.my[0] ? -i.elemWidth : "right" === i.my[0] ? i.elemWidth : 0,
                            o = "left" === i.at[0] ? i.targetWidth : -i.targetWidth,
                            r = -2 * i.offset[0];
                        t.left += i.collisionPosition.left < 0 ? s + o + r : n > 0 ? s + o + r : 0
                    }
                },
                top: function(t, i) {
                    if ("center" !== i.at[1]) {
                        var n = e(window);
                        n = i.collisionPosition.top + i.collisionHeight - n.height() - n.scrollTop();
                        var s = "top" === i.my[1] ? -i.elemHeight : "bottom" === i.my[1] ? i.elemHeight : 0,
                            o = "top" === i.at[1] ? i.targetHeight : -i.targetHeight,
                            r = -2 * i.offset[1];
                        t.top += i.collisionPosition.top < 0 ? s + o + r : n > 0 ? s + o + r : 0
                    }
                }
            }
        }, e.offset.setOffset || (e.offset.setOffset = function(t, i) {
            /static/.test(e.curCSS(t, "position")) && (t.style.position = "relative");
            var n = e(t),
                s = n.offset(),
                o = parseInt(e.curCSS(t, "top", !0), 10) || 0,
                r = parseInt(e.curCSS(t, "left", !0), 10) || 0;
            s = {
                top: i.top - s.top + o,
                left: i.left - s.left + r
            }, "using" in i ? i.using.call(t, s) : n.css(s)
        }, e.fn.offset = function(t) {
            var i = this[0];
            return i && i.ownerDocument ? t ? this.each(function() {
                e.offset.setOffset(this, t)
            }) : s.call(this) : null
        })
    }(jQuery),
    function(e) {
        e.widget("ui.draggable", e.ui.mouse, {
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1
            },
            _create: function() {
                "original" != this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
            },
            destroy: function() {
                if (this.element.data("draggable")) return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy(), this
            },
            _mouseCapture: function(t) {
                var i = this.options;
                return !(this.helper || i.disabled || e(t.target).is(".ui-resizable-handle")) && (this.handle = this._getHandle(t), !!this.handle && (i.iframeFix && e(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function() {
                    e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                        width: this.offsetWidth + "px",
                        height: this.offsetHeight + "px",
                        position: "absolute",
                        opacity: "0.001",
                        zIndex: 1e3
                    }).css(e(this).offset()).appendTo("body")
                }), !0))
            },
            _mouseStart: function(t) {
                var i = this.options;
                return this.helper = this._createHelper(t), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, e.extend(this.offset, {
                    click: {
                        left: t.pageX - this.offset.left,
                        top: t.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), i.containment && this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.helper.addClass("ui-draggable-dragging"), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
            },
            _mouseDrag: function(t, i) {
                if (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                    if (i = this._uiHash(), this._trigger("drag", t, i) === !1) return this._mouseUp({}), !1;
                    this.position = i.position
                }
                return this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
            },
            _mouseStop: function(t) {
                var i = !1;
                if (e.ui.ddmanager && !this.options.dropBehaviour && (i = e.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1), !(this.element[0] && this.element[0].parentNode || "original" != this.options.helper)) return !1;
                if ("invalid" == this.options.revert && !i || "valid" == this.options.revert && i || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, i)) {
                    var n = this;
                    e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                        n._trigger("stop", t) !== !1 && n._clear()
                    })
                } else this._trigger("stop", t) !== !1 && this._clear();
                return !1
            },
            _mouseUp: function(t) {
                return this.options.iframeFix === !0 && e("div.ui-draggable-iframeFix").each(function() {
                    this.parentNode.removeChild(this)
                }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t)
            },
            cancel: function() {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
            },
            _getHandle: function(t) {
                var i = !this.options.handle || !e(this.options.handle, this.element).length;
                return e(this.options.handle, this.element).find("*").andSelf().each(function() {
                    this == t.target && (i = !0)
                }), i
            },
            _createHelper: function(t) {
                var i = this.options;
                return t = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t])) : "clone" == i.helper ? this.element.clone().removeAttr("id") : this.element, t.parents("body").length || t.appendTo("parent" == i.appendTo ? this.element[0].parentNode : i.appendTo), t[0] != this.element[0] && !/(fixed|absolute)/.test(t.css("position")) && t.css("position", "absolute"), t
            },
            _adjustOffsetFromHelper: function(t) {
                "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                    left: +t[0],
                    top: +t[1] || 0
                }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                this.offsetParent = this.helper.offsetParent();
                var t = this.offsetParent.offset();
                return "absolute" == this.cssPosition && this.scrollParent[0] != document && e.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && e.browser.msie) && (t = {
                    top: 0,
                    left: 0
                }), {
                    top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" == this.cssPosition) {
                    var e = this.element.position();
                    return {
                        top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var t = this.options;
                if ("parent" == t.containment && (t.containment = this.helper[0].parentNode), "document" != t.containment && "window" != t.containment || (this.containment = ["document" == t.containment ? 0 : e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" == t.containment ? 0 : e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" == t.containment ? 0 : e(window).scrollLeft()) + e("document" == t.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" == t.containment ? 0 : e(window).scrollTop()) + (e("document" == t.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(t.containment) || t.containment.constructor == Array) t.containment.constructor == Array && (this.containment = t.containment);
                else {
                    t = e(t.containment);
                    var i = t[0];
                    if (i) {
                        t.offset();
                        var n = "hidden" != e(i).css("overflow");
                        this.containment = [(parseInt(e(i).css("borderLeftWidth"), 10) || 0) + (parseInt(e(i).css("paddingLeft"), 10) || 0), (parseInt(e(i).css("borderTopWidth"), 10) || 0) + (parseInt(e(i).css("paddingTop"), 10) || 0), (n ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(e(i).css("borderLeftWidth"), 10) || 0) - (parseInt(e(i).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (n ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(e(i).css("borderTopWidth"), 10) || 0) - (parseInt(e(i).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = t
                    }
                }
            },
            _convertPositionTo: function(t, i) {
                i || (i = this.position), t = "absolute" == t ? 1 : -1;
                var n = "absolute" != this.cssPosition || this.scrollParent[0] != document && e.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    s = /(html|body)/i.test(n[0].tagName);
                return {
                    top: i.top + this.offset.relative.top * t + this.offset.parent.top * t - (e.browser.safari && e.browser.version < 526 && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : n.scrollTop()) * t),
                    left: i.left + this.offset.relative.left * t + this.offset.parent.left * t - (e.browser.safari && e.browser.version < 526 && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : n.scrollLeft()) * t)
                }
            },
            _generatePosition: function(t) {
                var i = this.options,
                    n = "absolute" != this.cssPosition || this.scrollParent[0] != document && e.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    s = /(html|body)/i.test(n[0].tagName),
                    o = t.pageX,
                    r = t.pageY;
                if (this.originalPosition) {
                    var a;
                    this.containment && (this.relative_container ? (a = this.relative_container.offset(), a = [this.containment[0] + a.left, this.containment[1] + a.top, this.containment[2] + a.left, this.containment[3] + a.top]) : a = this.containment, t.pageX - this.offset.click.left < a[0] && (o = a[0] + this.offset.click.left), t.pageY - this.offset.click.top < a[1] && (r = a[1] + this.offset.click.top), t.pageX - this.offset.click.left > a[2] && (o = a[2] + this.offset.click.left), t.pageY - this.offset.click.top > a[3] && (r = a[3] + this.offset.click.top)), i.grid && (r = i.grid[1] ? this.originalPageY + Math.round((r - this.originalPageY) / i.grid[1]) * i.grid[1] : this.originalPageY, r = a && (r - this.offset.click.top < a[1] || r - this.offset.click.top > a[3]) ? r - this.offset.click.top < a[1] ? r + i.grid[1] : r - i.grid[1] : r, o = i.grid[0] ? this.originalPageX + Math.round((o - this.originalPageX) / i.grid[0]) * i.grid[0] : this.originalPageX, o = a && (o - this.offset.click.left < a[0] || o - this.offset.click.left > a[2]) ? o - this.offset.click.left < a[0] ? o + i.grid[0] : o - i.grid[0] : o)
                }
                return {
                    top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (e.browser.safari && e.browser.version < 526 && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : n.scrollTop()),
                    left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (e.browser.safari && e.browser.version < 526 && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : n.scrollLeft())
                }
            },
            _clear: function() {
                this.helper.removeClass("ui-draggable-dragging"), this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
            },
            _trigger: function(t, i, n) {
                return n = n || this._uiHash(), e.ui.plugin.call(this, t, [i, n]), "drag" == t && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, i, n)
            },
            plugins: {},
            _uiHash: function() {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        }), e.extend(e.ui.draggable, {
            version: "1.8.16"
        }), e.ui.plugin.add("draggable", "connectToSortable", {
            start: function(t, i) {
                var n = e(this).data("draggable"),
                    s = n.options,
                    o = e.extend({}, i, {
                        item: n.element
                    });
                n.sortables = [], e(s.connectToSortable).each(function() {
                    var i = e.data(this, "sortable");
                    i && !i.options.disabled && (n.sortables.push({
                        instance: i,
                        shouldRevert: i.options.revert
                    }), i.refreshPositions(), i._trigger("activate", t, o))
                })
            },
            stop: function(t, i) {
                var n = e(this).data("draggable"),
                    s = e.extend({}, i, {
                        item: n.element
                    });
                e.each(n.sortables, function() {
                    this.instance.isOver ? (this.instance.isOver = 0, n.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" == n.options.helper && this.instance.currentItem.css({
                        top: "auto",
                        left: "auto"
                    })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, s))
                })
            },
            drag: function(t, i) {
                var n = e(this).data("draggable"),
                    s = this;
                e.each(n.sortables, function() {
                    this.instance.positionAbs = n.positionAbs, this.instance.helperProportions = n.helperProportions, this.instance.offset.click = n.offset.click, this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(s).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                        return i.helper[0]
                    }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = n.offset.click.top, this.instance.offset.click.left = n.offset.click.left, this.instance.offset.parent.left -= n.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= n.offset.parent.top - this.instance.offset.parent.top, n._trigger("toSortable", t), n.dropped = this.instance.element, n.currentItem = n.element, this.instance.fromOutside = n), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), n._trigger("fromSortable", t), n.dropped = !1)
                })
            }
        }), e.ui.plugin.add("draggable", "cursor", {
            start: function() {
                var t = e("body"),
                    i = e(this).data("draggable").options;
                t.css("cursor") && (i._cursor = t.css("cursor")), t.css("cursor", i.cursor)
            },
            stop: function() {
                var t = e(this).data("draggable").options;
                t._cursor && e("body").css("cursor", t._cursor)
            }
        }), e.ui.plugin.add("draggable", "opacity", {
            start: function(t, i) {
                t = e(i.helper), i = e(this).data("draggable").options, t.css("opacity") && (i._opacity = t.css("opacity")), t.css("opacity", i.opacity)
            },
            stop: function(t, i) {
                t = e(this).data("draggable").options, t._opacity && e(i.helper).css("opacity", t._opacity)
            }
        }), e.ui.plugin.add("draggable", "scroll", {
            start: function() {
                var t = e(this).data("draggable");
                t.scrollParent[0] != document && "HTML" != t.scrollParent[0].tagName && (t.overflowOffset = t.scrollParent.offset())
            },
            drag: function(t) {
                var i = e(this).data("draggable"),
                    n = i.options,
                    s = !1;
                i.scrollParent[0] != document && "HTML" != i.scrollParent[0].tagName ? (n.axis && "x" == n.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - t.pageY < n.scrollSensitivity ? i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop + n.scrollSpeed : t.pageY - i.overflowOffset.top < n.scrollSensitivity && (i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop - n.scrollSpeed)), n.axis && "y" == n.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - t.pageX < n.scrollSensitivity ? i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft + n.scrollSpeed : t.pageX - i.overflowOffset.left < n.scrollSensitivity && (i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft - n.scrollSpeed))) : (n.axis && "x" == n.axis || (t.pageY - e(document).scrollTop() < n.scrollSensitivity ? s = e(document).scrollTop(e(document).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < n.scrollSensitivity && (s = e(document).scrollTop(e(document).scrollTop() + n.scrollSpeed))), n.axis && "y" == n.axis || (t.pageX - e(document).scrollLeft() < n.scrollSensitivity ? s = e(document).scrollLeft(e(document).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < n.scrollSensitivity && (s = e(document).scrollLeft(e(document).scrollLeft() + n.scrollSpeed)))), s !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(i, t)
            }
        }), e.ui.plugin.add("draggable", "snap", {
            start: function() {
                var t = e(this).data("draggable"),
                    i = t.options;
                t.snapElements = [], e(i.snap.constructor != String ? i.snap.items || ":data(draggable)" : i.snap).each(function() {
                    var i = e(this),
                        n = i.offset();
                    this != t.element[0] && t.snapElements.push({
                        item: this,
                        width: i.outerWidth(),
                        height: i.outerHeight(),
                        top: n.top,
                        left: n.left
                    })
                })
            },
            drag: function(t, i) {
                for (var n = e(this).data("draggable"), s = n.options, o = s.snapTolerance, r = i.offset.left, a = r + n.helperProportions.width, l = i.offset.top, c = l + n.helperProportions.height, u = n.snapElements.length - 1; u >= 0; u--) {
                    var h = n.snapElements[u].left,
                        d = h + n.snapElements[u].width,
                        p = n.snapElements[u].top,
                        f = p + n.snapElements[u].height;
                    if (h - o < r && r < d + o && p - o < l && l < f + o || h - o < r && r < d + o && p - o < c && c < f + o || h - o < a && a < d + o && p - o < l && l < f + o || h - o < a && a < d + o && p - o < c && c < f + o) {
                        if ("inner" != s.snapMode) {
                            var g = Math.abs(p - c) <= o,
                                m = Math.abs(f - l) <= o,
                                v = Math.abs(h - a) <= o,
                                y = Math.abs(d - r) <= o;
                            g && (i.position.top = n._convertPositionTo("relative", {
                                top: p - n.helperProportions.height,
                                left: 0
                            }).top - n.margins.top), m && (i.position.top = n._convertPositionTo("relative", {
                                top: f,
                                left: 0
                            }).top - n.margins.top), v && (i.position.left = n._convertPositionTo("relative", {
                                top: 0,
                                left: h - n.helperProportions.width
                            }).left - n.margins.left), y && (i.position.left = n._convertPositionTo("relative", {
                                top: 0,
                                left: d
                            }).left - n.margins.left)
                        }
                        var b = g || m || v || y;
                        "outer" != s.snapMode && (g = Math.abs(p - l) <= o, m = Math.abs(f - c) <= o, v = Math.abs(h - r) <= o, y = Math.abs(d - a) <= o, g && (i.position.top = n._convertPositionTo("relative", {
                            top: p,
                            left: 0
                        }).top - n.margins.top), m && (i.position.top = n._convertPositionTo("relative", {
                            top: f - n.helperProportions.height,
                            left: 0
                        }).top - n.margins.top), v && (i.position.left = n._convertPositionTo("relative", {
                            top: 0,
                            left: h
                        }).left - n.margins.left), y && (i.position.left = n._convertPositionTo("relative", {
                            top: 0,
                            left: d - n.helperProportions.width
                        }).left - n.margins.left)), !n.snapElements[u].snapping && (g || m || v || y || b) && n.options.snap.snap && n.options.snap.snap.call(n.element, t, e.extend(n._uiHash(), {
                            snapItem: n.snapElements[u].item
                        })), n.snapElements[u].snapping = g || m || v || y || b
                    } else n.snapElements[u].snapping && n.options.snap.release && n.options.snap.release.call(n.element, t, e.extend(n._uiHash(), {
                        snapItem: n.snapElements[u].item
                    })), n.snapElements[u].snapping = !1
                }
            }
        }), e.ui.plugin.add("draggable", "stack", {
            start: function() {
                var t = e(this).data("draggable").options;
                if (t = e.makeArray(e(t.stack)).sort(function(t, i) {
                        return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
                    }), t.length) {
                    var i = parseInt(t[0].style.zIndex) || 0;
                    e(t).each(function(e) {
                        this.style.zIndex = i + e
                    }), this[0].style.zIndex = i + t.length
                }
            }
        }), e.ui.plugin.add("draggable", "zIndex", {
            start: function(t, i) {
                t = e(i.helper), i = e(this).data("draggable").options, t.css("zIndex") && (i._zIndex = t.css("zIndex")), t.css("zIndex", i.zIndex)
            },
            stop: function(t, i) {
                t = e(this).data("draggable").options, t._zIndex && e(i.helper).css("zIndex", t._zIndex)
            }
        })
    }(jQuery),
    function(e) {
        e.widget("ui.droppable", {
            widgetEventPrefix: "drop",
            options: {
                accept: "*",
                activeClass: !1,
                addClasses: !0,
                greedy: !1,
                hoverClass: !1,
                scope: "default",
                tolerance: "intersect"
            },
            _create: function() {
                var t = this.options,
                    i = t.accept;
                this.isover = 0, this.isout = 1, this.accept = e.isFunction(i) ? i : function(e) {
                    return e.is(i)
                }, this.proportions = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }, e.ui.ddmanager.droppables[t.scope] = e.ui.ddmanager.droppables[t.scope] || [], e.ui.ddmanager.droppables[t.scope].push(this), t.addClasses && this.element.addClass("ui-droppable")
            },
            destroy: function() {
                for (var t = e.ui.ddmanager.droppables[this.options.scope], i = 0; i < t.length; i++) t[i] == this && t.splice(i, 1);
                return this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"), this
            },
            _setOption: function(t, i) {
                "accept" == t && (this.accept = e.isFunction(i) ? i : function(e) {
                    return e.is(i)
                }), e.Widget.prototype._setOption.apply(this, arguments)
            },
            _activate: function(t) {
                var i = e.ui.ddmanager.current;
                this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", t, this.ui(i))
            },
            _deactivate: function(t) {
                var i = e.ui.ddmanager.current;
                this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", t, this.ui(i))
            },
            _over: function(t) {
                var i = e.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)))
            },
            _out: function(t) {
                var i = e.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)))
            },
            _drop: function(t, i) {
                var n = i || e.ui.ddmanager.current;
                if (!n || (n.currentItem || n.element)[0] == this.element[0]) return !1;
                var s = !1;
                return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
                    var t = e.data(this, "droppable");
                    if (t.options.greedy && !t.options.disabled && t.options.scope == n.options.scope && t.accept.call(t.element[0], n.currentItem || n.element) && e.ui.intersect(n, e.extend(t, {
                            offset: t.element.offset()
                        }), t.options.tolerance)) return s = !0, !1
                }), !s && (!!this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(n)), this.element))
            },
            ui: function(e) {
                return {
                    draggable: e.currentItem || e.element,
                    helper: e.helper,
                    position: e.position,
                    offset: e.positionAbs
                }
            }
        }), e.extend(e.ui.droppable, {
            version: "1.8.16"
        }), e.ui.intersect = function(t, i, n) {
            if (!i.offset) return !1;
            var s = (t.positionAbs || t.position.absolute).left,
                o = s + t.helperProportions.width,
                r = (t.positionAbs || t.position.absolute).top,
                a = r + t.helperProportions.height,
                l = i.offset.left,
                c = l + i.proportions.width,
                u = i.offset.top,
                h = u + i.proportions.height;
            switch (n) {
                case "fit":
                    return l <= s && o <= c && u <= r && a <= h;
                case "intersect":
                    return l < s + t.helperProportions.width / 2 && o - t.helperProportions.width / 2 < c && u < r + t.helperProportions.height / 2 && a - t.helperProportions.height / 2 < h;
                case "pointer":
                    return e.ui.isOver((t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top, (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left, u, l, i.proportions.height, i.proportions.width);
                case "touch":
                    return (r >= u && r <= h || a >= u && a <= h || r < u && a > h) && (s >= l && s <= c || o >= l && o <= c || s < l && o > c);
                default:
                    return !1
            }
        }, e.ui.ddmanager = {
            current: null,
            droppables: {
                "default": []
            },
            prepareOffsets: function(t, i) {
                var n = e.ui.ddmanager.droppables[t.options.scope] || [],
                    s = i ? i.type : null,
                    o = (t.currentItem || t.element).find(":data(droppable)").andSelf(),
                    r = 0;
                e: for (; r < n.length; r++)
                    if (!(n[r].options.disabled || t && !n[r].accept.call(n[r].element[0], t.currentItem || t.element))) {
                        for (var a = 0; a < o.length; a++)
                            if (o[a] == n[r].element[0]) {
                                n[r].proportions.height = 0;
                                continue e
                            }
                        n[r].visible = "none" != n[r].element.css("display"), n[r].visible && ("mousedown" == s && n[r]._activate.call(n[r], i), n[r].offset = n[r].element.offset(), n[r].proportions = {
                            width: n[r].element[0].offsetWidth,
                            height: n[r].element[0].offsetHeight
                        })
                    }
            },
            drop: function(t, i) {
                var n = !1;
                return e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
                    this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (n = n || this._drop.call(this, i)), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, i)))
                }), n
            },
            dragStart: function(t, i) {
                t.element.parents(":not(body,html)").bind("scroll.droppable", function() {
                    t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
                })
            },
            drag: function(t, i) {
                t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var n = e.ui.intersect(t, this, this.options.tolerance);
                        if (n = n || 1 != this.isover ? n && 0 == this.isover ? "isover" : null : "isout") {
                            var s;
                            if (this.options.greedy) {
                                var o = this.element.parents(":data(droppable):eq(0)");
                                o.length && (s = e.data(o[0], "droppable"), s.greedyChild = "isover" == n ? 1 : 0)
                            }
                            s && "isover" == n && (s.isover = 0, s.isout = 1, s._out.call(s, i)), this[n] = 1, this["isout" == n ? "isover" : "isout"] = 0, this["isover" == n ? "_over" : "_out"].call(this, i), s && "isout" == n && (s.isout = 0, s.isover = 1, s._over.call(s, i))
                        }
                    }
                })
            },
            dragStop: function(t, i) {
                t.element.parents(":not(body,html)").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
            }
        }
    }(jQuery),
    function(e) {
        e.widget("ui.resizable", e.ui.mouse, {
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 1e3
            },
            _create: function() {
                var t = this,
                    i = this.options;
                if (this.element.addClass("ui-resizable"), e.extend(this, {
                        _aspectRatio: !!i.aspectRatio,
                        aspectRatio: i.aspectRatio,
                        originalElement: this.element,
                        _proportionallyResizeElements: [],
                        _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
                    }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (/relative/.test(this.element.css("position")) && e.browser.opera && this.element.css({
                        position: "relative",
                        top: "auto",
                        left: "auto"
                    }), this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
                        marginLeft: this.originalElement.css("marginLeft"),
                        marginTop: this.originalElement.css("marginTop"),
                        marginRight: this.originalElement.css("marginRight"),
                        marginBottom: this.originalElement.css("marginBottom")
                    }), this.originalElement.css({
                        marginLeft: 0,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0
                    }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                        position: "static",
                        zoom: 1,
                        display: "block"
                    })), this.originalElement.css({
                        margin: this.originalElement.css("margin")
                    }), this._proportionallyResize()), this.handles = i.handles || (e(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } : "e,s,se"), this.handles.constructor == String) {
                    "all" == this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw");
                    var n = this.handles.split(",");
                    this.handles = {};
                    for (var s = 0; s < n.length; s++) {
                        var o = e.trim(n[s]),
                            r = e('<div class="ui-resizable-handle ui-resizable-' + o + '"></div>');
                        /sw|se|ne|nw/.test(o) && r.css({
                            zIndex: ++i.zIndex
                        }), "se" == o && r.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[o] = ".ui-resizable-" + o, this.element.append(r)
                    }
                }
                this._renderAxis = function(t) {
                    t = t || this.element;
                    for (var i in this.handles) {
                        if (this.handles[i].constructor == String && (this.handles[i] = e(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                            var n = e(this.handles[i], this.element),
                                s = 0;
                            s = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(n, s), this._proportionallyResize()
                        }
                        e(this.handles[i])
                    }
                }, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                    if (!t.resizing) {
                        if (this.className) var e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                        t.axis = e && e[1] ? e[1] : "se"
                    }
                }), i.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").hover(function() {
                    i.disabled || (e(this).removeClass("ui-resizable-autohide"), t._handles.show())
                }, function() {
                    i.disabled || t.resizing || (e(this).addClass("ui-resizable-autohide"), t._handles.hide())
                })), this._mouseInit()
            },
            destroy: function() {
                this._mouseDestroy();
                var t = function(t) {
                    e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
                if (this.elementIsWrapper) {
                    t(this.element);
                    var i = this.element;
                    i.after(this.originalElement.css({
                        position: i.css("position"),
                        width: i.outerWidth(),
                        height: i.outerHeight(),
                        top: i.css("top"),
                        left: i.css("left")
                    })).remove()
                }
                return this.originalElement.css("resize", this.originalResizeStyle), t(this.originalElement), this
            },
            _mouseCapture: function(t) {
                var i = !1;
                for (var n in this.handles) e(this.handles[n])[0] == t.target && (i = !0);
                return !this.options.disabled && i;
            },
            _mouseStart: function(i) {
                var n = this.options,
                    s = this.element.position(),
                    o = this.element;
                this.resizing = !0, this.documentScroll = {
                    top: e(document).scrollTop(),
                    left: e(document).scrollLeft()
                }, (o.is(".ui-draggable") || /absolute/.test(o.css("position"))) && o.css({
                    position: "absolute",
                    top: s.top,
                    left: s.left
                }), e.browser.opera && /relative/.test(o.css("position")) && o.css({
                    position: "relative",
                    top: "auto",
                    left: "auto"
                }), this._renderProxy(), s = t(this.helper.css("left"));
                var r = t(this.helper.css("top"));
                return n.containment && (s += e(n.containment).scrollLeft() || 0, r += e(n.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: s,
                    top: r
                }, this.size = this._helper ? {
                    width: o.outerWidth(),
                    height: o.outerHeight()
                } : {
                    width: o.width(),
                    height: o.height()
                }, this.originalSize = this._helper ? {
                    width: o.outerWidth(),
                    height: o.outerHeight()
                } : {
                    width: o.width(),
                    height: o.height()
                }, this.originalPosition = {
                    left: s,
                    top: r
                }, this.sizeDiff = {
                    width: o.outerWidth() - o.width(),
                    height: o.outerHeight() - o.height()
                }, this.originalMousePosition = {
                    left: i.pageX,
                    top: i.pageY
                }, this.aspectRatio = "number" == typeof n.aspectRatio ? n.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" == n ? this.axis + "-resize" : n), o.addClass("ui-resizable-resizing"), this._propagate("start", i), !0
            },
            _mouseDrag: function(e) {
                var t = this.helper,
                    i = this.originalMousePosition,
                    n = this._change[this.axis];
                return !!n && (i = n.apply(this, [e, e.pageX - i.left || 0, e.pageY - i.top || 0]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._propagate("resize", e), t.css({
                    top: this.position.top + "px",
                    left: this.position.left + "px",
                    width: this.size.width + "px",
                    height: this.size.height + "px"
                }), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(i), this._trigger("resize", e, this.ui()), !1)
            },
            _mouseStop: function(t) {
                this.resizing = !1;
                var i = this.options,
                    n = this;
                if (this._helper) {
                    var s = this._proportionallyResizeElements,
                        o = s.length && /textarea/i.test(s[0].nodeName);
                    s = o && e.ui.hasScroll(s[0], "left") ? 0 : n.sizeDiff.height, o = o ? 0 : n.sizeDiff.width, o = {
                        width: n.helper.width() - o,
                        height: n.helper.height() - s
                    }, s = parseInt(n.element.css("left"), 10) + (n.position.left - n.originalPosition.left) || null;
                    var r = parseInt(n.element.css("top"), 10) + (n.position.top - n.originalPosition.top) || null;
                    i.animate || this.element.css(e.extend(o, {
                        top: r,
                        left: s
                    })), n.helper.height(n.size.height), n.helper.width(n.size.width), this._helper && !i.animate && this._proportionallyResize()
                }
                return e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
            },
            _updateVirtualBoundaries: function(e) {
                var t, n, s, o = this.options;
                o = {
                    minWidth: i(o.minWidth) ? o.minWidth : 0,
                    maxWidth: i(o.maxWidth) ? o.maxWidth : 1 / 0,
                    minHeight: i(o.minHeight) ? o.minHeight : 0,
                    maxHeight: i(o.maxHeight) ? o.maxHeight : 1 / 0
                }, (this._aspectRatio || e) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, t = o.maxHeight * this.aspectRatio, s = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), t < o.maxWidth && (o.maxWidth = t), s < o.maxHeight && (o.maxHeight = s)), this._vBoundaries = o
            },
            _updateCache: function(e) {
                this.offset = this.helper.offset(), i(e.left) && (this.position.left = e.left), i(e.top) && (this.position.top = e.top), i(e.height) && (this.size.height = e.height), i(e.width) && (this.size.width = e.width)
            },
            _updateRatio: function(e) {
                var t = this.position,
                    n = this.size,
                    s = this.axis;
                return i(e.height) ? e.width = e.height * this.aspectRatio : i(e.width) && (e.height = e.width / this.aspectRatio), "sw" == s && (e.left = t.left + (n.width - e.width), e.top = null), "nw" == s && (e.top = t.top + (n.height - e.height), e.left = t.left + (n.width - e.width)), e
            },
            _respectSize: function(e) {
                var t = this._vBoundaries,
                    n = this.axis,
                    s = i(e.width) && t.maxWidth && t.maxWidth < e.width,
                    o = i(e.height) && t.maxHeight && t.maxHeight < e.height,
                    r = i(e.width) && t.minWidth && t.minWidth > e.width,
                    a = i(e.height) && t.minHeight && t.minHeight > e.height;
                r && (e.width = t.minWidth), a && (e.height = t.minHeight), s && (e.width = t.maxWidth), o && (e.height = t.maxHeight);
                var l = this.originalPosition.left + this.originalSize.width,
                    c = this.position.top + this.size.height,
                    u = /sw|nw|w/.test(n);
                return n = /nw|ne|n/.test(n), r && u && (e.left = l - t.minWidth), s && u && (e.left = l - t.maxWidth), a && n && (e.top = c - t.minHeight), o && n && (e.top = c - t.maxHeight), (t = !e.width && !e.height) && !e.left && e.top ? e.top = null : t && !e.top && e.left && (e.left = null), e
            },
            _proportionallyResize: function() {
                if (this._proportionallyResizeElements.length)
                    for (var t = this.helper || this.element, i = 0; i < this._proportionallyResizeElements.length; i++) {
                        var n = this._proportionallyResizeElements[i];
                        if (!this.borderDif) {
                            var s = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")],
                                o = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")];
                            this.borderDif = e.map(s, function(e, t) {
                                return e = parseInt(e, 10) || 0, t = parseInt(o[t], 10) || 0, e + t
                            })
                        }
                        e.browser.msie && (e(t).is(":hidden") || e(t).parents(":hidden").length) || n.css({
                            height: t.height() - this.borderDif[0] - this.borderDif[2] || 0,
                            width: t.width() - this.borderDif[1] - this.borderDif[3] || 0
                        })
                    }
            },
            _renderProxy: function() {
                var t = this.options;
                if (this.elementOffset = this.element.offset(), this._helper) {
                    this.helper = this.helper || e('<div style="overflow:hidden;"></div>');
                    var i = e.browser.msie && e.browser.version < 7,
                        n = i ? 1 : 0;
                    i = i ? 2 : -1, this.helper.addClass(this._helper).css({
                        width: this.element.outerWidth() + i,
                        height: this.element.outerHeight() + i,
                        position: "absolute",
                        left: this.elementOffset.left - n + "px",
                        top: this.elementOffset.top - n + "px",
                        zIndex: ++t.zIndex
                    }), this.helper.appendTo("body").disableSelection()
                } else this.helper = this.element
            },
            _change: {
                e: function(e, t) {
                    return {
                        width: this.originalSize.width + t
                    }
                },
                w: function(e, t) {
                    return {
                        left: this.originalPosition.left + t,
                        width: this.originalSize.width - t
                    }
                },
                n: function(e, t, i) {
                    return {
                        top: this.originalPosition.top + i,
                        height: this.originalSize.height - i
                    }
                },
                s: function(e, t, i) {
                    return {
                        height: this.originalSize.height + i
                    }
                },
                se: function(t, i, n) {
                    return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, n]))
                },
                sw: function(t, i, n) {
                    return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, n]))
                },
                ne: function(t, i, n) {
                    return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, n]))
                },
                nw: function(t, i, n) {
                    return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, n]))
                }
            },
            _propagate: function(t, i) {
                e.ui.plugin.call(this, t, [i, this.ui()]), "resize" != t && this._trigger(t, i, this.ui())
            },
            plugins: {},
            ui: function() {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                }
            }
        }), e.extend(e.ui.resizable, {
            version: "1.8.16"
        }), e.ui.plugin.add("resizable", "alsoResize", {
            start: function() {
                var t = e(this).data("resizable").options,
                    i = function(t) {
                        e(t).each(function() {
                            var t = e(this);
                            t.data("resizable-alsoresize", {
                                width: parseInt(t.width(), 10),
                                height: parseInt(t.height(), 10),
                                left: parseInt(t.css("left"), 10),
                                top: parseInt(t.css("top"), 10),
                                position: t.css("position")
                            })
                        })
                    };
                "object" != typeof t.alsoResize || t.alsoResize.parentNode ? i(t.alsoResize) : t.alsoResize.length ? (t.alsoResize = t.alsoResize[0], i(t.alsoResize)) : e.each(t.alsoResize, function(e) {
                    i(e)
                })
            },
            resize: function(t, i) {
                var n = e(this).data("resizable");
                t = n.options;
                var s = n.originalSize,
                    o = n.originalPosition,
                    r = {
                        height: n.size.height - s.height || 0,
                        width: n.size.width - s.width || 0,
                        top: n.position.top - o.top || 0,
                        left: n.position.left - o.left || 0
                    },
                    a = function(t, s) {
                        e(t).each(function() {
                            var t = e(this),
                                o = e(this).data("resizable-alsoresize"),
                                a = {},
                                l = s && s.length ? s : t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                            e.each(l, function(e, t) {
                                (e = (o[t] || 0) + (r[t] || 0)) && e >= 0 && (a[t] = e || null)
                            }), e.browser.opera && /relative/.test(t.css("position")) && (n._revertToRelativePosition = !0, t.css({
                                position: "absolute",
                                top: "auto",
                                left: "auto"
                            })), t.css(a)
                        })
                    };
                "object" != typeof t.alsoResize || t.alsoResize.nodeType ? a(t.alsoResize) : e.each(t.alsoResize, function(e, t) {
                    a(e, t)
                })
            },
            stop: function() {
                var t = e(this).data("resizable"),
                    i = t.options,
                    n = function(t) {
                        e(t).each(function() {
                            var t = e(this);
                            t.css({
                                position: t.data("resizable-alsoresize").position
                            })
                        })
                    };
                t._revertToRelativePosition && (t._revertToRelativePosition = !1, "object" != typeof i.alsoResize || i.alsoResize.nodeType ? n(i.alsoResize) : e.each(i.alsoResize, function(e) {
                    n(e)
                })), e(this).removeData("resizable-alsoresize")
            }
        }), e.ui.plugin.add("resizable", "animate", {
            stop: function(t) {
                var i = e(this).data("resizable"),
                    n = i.options,
                    s = i._proportionallyResizeElements,
                    o = s.length && /textarea/i.test(s[0].nodeName),
                    r = o && e.ui.hasScroll(s[0], "left") ? 0 : i.sizeDiff.height;
                o = {
                    width: i.size.width - (o ? 0 : i.sizeDiff.width),
                    height: i.size.height - r
                }, r = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null;
                var a = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
                i.element.animate(e.extend(o, a && r ? {
                    top: a,
                    left: r
                } : {}), {
                    duration: n.animateDuration,
                    easing: n.animateEasing,
                    step: function() {
                        var n = {
                            width: parseInt(i.element.css("width"), 10),
                            height: parseInt(i.element.css("height"), 10),
                            top: parseInt(i.element.css("top"), 10),
                            left: parseInt(i.element.css("left"), 10)
                        };
                        s && s.length && e(s[0]).css({
                            width: n.width,
                            height: n.height
                        }), i._updateCache(n), i._propagate("resize", t)
                    }
                })
            }
        }), e.ui.plugin.add("resizable", "containment", {
            start: function() {
                var i = e(this).data("resizable"),
                    n = i.element,
                    s = i.options.containment;
                if (n = s instanceof e ? s.get(0) : /parent/.test(s) ? n.parent().get(0) : s)
                    if (i.containerElement = e(n), /document/.test(s) || s == document) i.containerOffset = {
                        left: 0,
                        top: 0
                    }, i.containerPosition = {
                        left: 0,
                        top: 0
                    }, i.parentData = {
                        element: e(document),
                        left: 0,
                        top: 0,
                        width: e(document).width(),
                        height: e(document).height() || document.body.parentNode.scrollHeight
                    };
                    else {
                        var o = e(n),
                            r = [];
                        e(["Top", "Right", "Left", "Bottom"]).each(function(e, i) {
                            r[e] = t(o.css("padding" + i))
                        }), i.containerOffset = o.offset(), i.containerPosition = o.position(), i.containerSize = {
                            height: o.innerHeight() - r[3],
                            width: o.innerWidth() - r[1]
                        }, s = i.containerOffset;
                        var a = i.containerSize.height,
                            l = i.containerSize.width;
                        l = e.ui.hasScroll(n, "left") ? n.scrollWidth : l, a = e.ui.hasScroll(n) ? n.scrollHeight : a, i.parentData = {
                            element: n,
                            left: s.left,
                            top: s.top,
                            width: l,
                            height: a
                        }
                    }
            },
            resize: function(t) {
                var i = e(this).data("resizable"),
                    n = i.options,
                    s = i.containerOffset,
                    o = i.position;
                t = i._aspectRatio || t.shiftKey;
                var r = {
                        top: 0,
                        left: 0
                    },
                    a = i.containerElement;
                a[0] != document && /static/.test(a.css("position")) && (r = s), o.left < (i._helper ? s.left : 0) && (i.size.width += i._helper ? i.position.left - s.left : i.position.left - r.left, t && (i.size.height = i.size.width / n.aspectRatio), i.position.left = n.helper ? s.left : 0), o.top < (i._helper ? s.top : 0) && (i.size.height += i._helper ? i.position.top - s.top : i.position.top, t && (i.size.width = i.size.height * n.aspectRatio), i.position.top = i._helper ? s.top : 0), i.offset.left = i.parentData.left + i.position.left, i.offset.top = i.parentData.top + i.position.top, n = Math.abs((i._helper ? i.offset.left - r.left : i.offset.left - r.left) + i.sizeDiff.width), s = Math.abs((i._helper ? i.offset.top - r.top : i.offset.top - s.top) + i.sizeDiff.height), o = i.containerElement.get(0) == i.element.parent().get(0), r = /relative|absolute/.test(i.containerElement.css("position")), o && r && (n -= i.parentData.left), n + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - n, t && (i.size.height = i.size.width / i.aspectRatio)), s + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - s, t && (i.size.width = i.size.height * i.aspectRatio))
            },
            stop: function() {
                var t = e(this).data("resizable"),
                    i = t.options,
                    n = t.containerOffset,
                    s = t.containerPosition,
                    o = t.containerElement,
                    r = e(t.helper),
                    a = r.offset(),
                    l = r.outerWidth() - t.sizeDiff.width;
                r = r.outerHeight() - t.sizeDiff.height, t._helper && !i.animate && /relative/.test(o.css("position")) && e(this).css({
                    left: a.left - s.left - n.left,
                    width: l,
                    height: r
                }), t._helper && !i.animate && /static/.test(o.css("position")) && e(this).css({
                    left: a.left - s.left - n.left,
                    width: l,
                    height: r
                })
            }
        }), e.ui.plugin.add("resizable", "ghost", {
            start: function() {
                var t = e(this).data("resizable"),
                    i = t.options,
                    n = t.size;
                t.ghost = t.originalElement.clone(), t.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: n.height,
                    width: n.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper)
            },
            resize: function() {
                var t = e(this).data("resizable");
                t.ghost && t.ghost.css({
                    position: "relative",
                    height: t.size.height,
                    width: t.size.width
                })
            },
            stop: function() {
                var t = e(this).data("resizable");
                t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
            }
        }), e.ui.plugin.add("resizable", "grid", {
            resize: function() {
                var t = e(this).data("resizable"),
                    i = t.options,
                    n = t.size,
                    s = t.originalSize,
                    o = t.originalPosition,
                    r = t.axis;
                i.grid = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid;
                var a = Math.round((n.width - s.width) / (i.grid[0] || 1)) * (i.grid[0] || 1);
                i = Math.round((n.height - s.height) / (i.grid[1] || 1)) * (i.grid[1] || 1), /^(se|s|e)$/.test(r) ? (t.size.width = s.width + a, t.size.height = s.height + i) : /^(ne)$/.test(r) ? (t.size.width = s.width + a, t.size.height = s.height + i, t.position.top = o.top - i) : (/^(sw)$/.test(r) ? (t.size.width = s.width + a, t.size.height = s.height + i) : (t.size.width = s.width + a, t.size.height = s.height + i, t.position.top = o.top - i), t.position.left = o.left - a)
            }
        });
        var t = function(e) {
                return parseInt(e, 10) || 0
            },
            i = function(e) {
                return !isNaN(parseInt(e, 10))
            }
    }(jQuery),
    function(e) {
        e.widget("ui.selectable", e.ui.mouse, {
            options: {
                appendTo: "body",
                autoRefresh: !0,
                distance: 0,
                filter: "*",
                tolerance: "touch"
            },
            _create: function() {
                var t = this;
                this.element.addClass("ui-selectable"), this.dragged = !1;
                var i;
                this.refresh = function() {
                    i = e(t.options.filter, t.element[0]), i.each(function() {
                        var t = e(this),
                            i = t.offset();
                        e.data(this, "selectable-item", {
                            element: this,
                            $element: t,
                            left: i.left,
                            top: i.top,
                            right: i.left + t.outerWidth(),
                            bottom: i.top + t.outerHeight(),
                            startselected: !1,
                            selected: t.hasClass("ui-selected"),
                            selecting: t.hasClass("ui-selecting"),
                            unselecting: t.hasClass("ui-unselecting")
                        })
                    })
                }, this.refresh(), this.selectees = i.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>")
            },
            destroy: function() {
                return this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"), this._mouseDestroy(), this
            },
            _mouseStart: function(t) {
                var i = this;
                if (this.opos = [t.pageX, t.pageY], !this.options.disabled) {
                    var n = this.options;
                    this.selectees = e(n.filter, this.element[0]), this._trigger("start", t), e(n.appendTo).append(this.helper), this.helper.css({
                        left: t.clientX,
                        top: t.clientY,
                        width: 0,
                        height: 0
                    }), n.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                        var n = e.data(this, "selectable-item");
                        n.startselected = !0, t.metaKey || (n.$element.removeClass("ui-selected"), n.selected = !1, n.$element.addClass("ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", t, {
                            unselecting: n.element
                        }))
                    }), e(t.target).parents().andSelf().each(function() {
                        var n = e.data(this, "selectable-item");
                        if (n) {
                            var s = !t.metaKey || !n.$element.hasClass("ui-selected");
                            return n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, (n.selected = s) ? i._trigger("selecting", t, {
                                selecting: n.element
                            }) : i._trigger("unselecting", t, {
                                unselecting: n.element
                            }), !1
                        }
                    })
                }
            },
            _mouseDrag: function(t) {
                var i = this;
                if (this.dragged = !0, !this.options.disabled) {
                    var n = this.options,
                        s = this.opos[0],
                        o = this.opos[1],
                        r = t.pageX,
                        a = t.pageY;
                    if (s > r) {
                        var l = r;
                        r = s, s = l
                    }
                    return o > a && (l = a, a = o, o = l), this.helper.css({
                        left: s,
                        top: o,
                        width: r - s,
                        height: a - o
                    }), this.selectees.each(function() {
                        var l = e.data(this, "selectable-item");
                        if (l && l.element != i.element[0]) {
                            var c = !1;
                            "touch" == n.tolerance ? c = !(l.left > r || l.right < s || l.top > a || l.bottom < o) : "fit" == n.tolerance && (c = l.left > s && l.right < r && l.top > o && l.bottom < a), c ? (l.selected && (l.$element.removeClass("ui-selected"), l.selected = !1), l.unselecting && (l.$element.removeClass("ui-unselecting"), l.unselecting = !1), l.selecting || (l.$element.addClass("ui-selecting"), l.selecting = !0, i._trigger("selecting", t, {
                                selecting: l.element
                            }))) : (l.selecting && (t.metaKey && l.startselected ? (l.$element.removeClass("ui-selecting"), l.selecting = !1, l.$element.addClass("ui-selected"), l.selected = !0) : (l.$element.removeClass("ui-selecting"), l.selecting = !1, l.startselected && (l.$element.addClass("ui-unselecting"), l.unselecting = !0), i._trigger("unselecting", t, {
                                unselecting: l.element
                            }))), l.selected && (t.metaKey || l.startselected || (l.$element.removeClass("ui-selected"), l.selected = !1, l.$element.addClass("ui-unselecting"), l.unselecting = !0, i._trigger("unselecting", t, {
                                unselecting: l.element
                            }))))
                        }
                    }), !1
                }
            },
            _mouseStop: function(t) {
                var i = this;
                return this.dragged = !1, e(".ui-unselecting", this.element[0]).each(function() {
                    var n = e.data(this, "selectable-item");
                    n.$element.removeClass("ui-unselecting"), n.unselecting = !1, n.startselected = !1, i._trigger("unselected", t, {
                        unselected: n.element
                    })
                }), e(".ui-selecting", this.element[0]).each(function() {
                    var n = e.data(this, "selectable-item");
                    n.$element.removeClass("ui-selecting").addClass("ui-selected"), n.selecting = !1, n.selected = !0, n.startselected = !0, i._trigger("selected", t, {
                        selected: n.element
                    })
                }), this._trigger("stop", t), this.helper.remove(), !1
            }
        }), e.extend(e.ui.selectable, {
            version: "1.8.16"
        })
    }(jQuery),
    function(e) {
        e.widget("ui.sortable", e.ui.mouse, {
            widgetEventPrefix: "sort",
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3
            },
            _create: function() {
                var e = this.options;
                this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = !!this.items.length && ("x" === e.axis || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display"))), this.offset = this.element.offset(), this._mouseInit()
            },
            destroy: function() {
                this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable"), this._mouseDestroy();
                for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData("sortable-item");
                return this
            },
            _setOption: function(t, i) {
                "disabled" === t ? (this.options[t] = i, this.widget()[i ? "addClass" : "removeClass"]("ui-sortable-disabled")) : e.Widget.prototype._setOption.apply(this, arguments)
            },
            _mouseCapture: function(t, i) {
                if (this.reverting) return !1;
                if (this.options.disabled || "static" == this.options.type) return !1;
                this._refreshItems(t);
                var n = null,
                    s = this;
                if (e(t.target).parents().each(function() {
                        if (e.data(this, "sortable-item") == s) return n = e(this), !1
                    }), e.data(t.target, "sortable-item") == s && (n = e(t.target)), !n) return !1;
                if (this.options.handle && !i) {
                    var o = !1;
                    if (e(this.options.handle, n).find("*").andSelf().each(function() {
                            this == t.target && (o = !0)
                        }), !o) return !1
                }
                return this.currentItem = n, this._removeCurrentsFromItems(), !0
            },
            _mouseStart: function(t, i, n) {
                i = this.options;
                var s = this;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    }, this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), e.extend(this.offset, {
                        click: {
                            left: t.pageX - this.offset.left,
                            top: t.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), i.containment && this._setContainment(), i.cursor && (e("body").css("cursor") && (this._storedCursor = e("body").css("cursor")), e("body").css("cursor", i.cursor)), i.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", i.opacity)), i.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", i.zIndex)), this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
                    for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", t, s._uiHash(this));
                return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
            },
            _mouseDrag: function(t) {
                if (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll) {
                    var i = this.options,
                        n = !1;
                    this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = n = this.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = n = this.scrollParent[0].scrollTop - i.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = n = this.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = n = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (t.pageY - e(document).scrollTop() < i.scrollSensitivity ? n = e(document).scrollTop(e(document).scrollTop() - i.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < i.scrollSensitivity && (n = e(document).scrollTop(e(document).scrollTop() + i.scrollSpeed)), t.pageX - e(document).scrollLeft() < i.scrollSensitivity ? n = e(document).scrollLeft(e(document).scrollLeft() - i.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < i.scrollSensitivity && (n = e(document).scrollLeft(e(document).scrollLeft() + i.scrollSpeed))), n !== !1 && e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)
                }
                for (this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--) {
                    n = this.items[i];
                    var s = n.item[0],
                        o = this._intersectsWithPointer(n);
                    if (o && !(s == this.currentItem[0] || this.placeholder[1 == o ? "next" : "prev"]()[0] == s || e.ui.contains(this.placeholder[0], s) || "semi-dynamic" == this.options.type && e.ui.contains(this.element[0], s))) {
                        if (this.direction = 1 == o ? "down" : "up", "pointer" != this.options.tolerance && !this._intersectsWithSides(n)) break;
                        this._rearrange(t, n), this._trigger("change", t, this._uiHash());
                        break
                    }
                }
                return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function(t, i) {
                if (t) {
                    if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
                        var n = this;
                        i = n.placeholder.offset(), n.reverting = !0, e(this.helper).animate({
                            left: i.left - this.offset.parent.left - n.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                            top: i.top - this.offset.parent.top - n.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                        }, parseInt(this.options.revert, 10) || 500, function() {
                            n._clear(t)
                        })
                    } else this._clear(t, i);
                    return !1
                }
            },
            cancel: function() {
                var t = this;
                if (this.dragging) {
                    this._mouseUp({
                        target: null
                    }), "original" == this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                    for (var i = this.containers.length - 1; i >= 0; i--) this.containers[i]._trigger("deactivate", null, t._uiHash(this)), this.containers[i].containerCache.over && (this.containers[i]._trigger("out", null, t._uiHash(this)), this.containers[i].containerCache.over = 0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" != this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
            },
            serialize: function(t) {
                var i = this._getItemsAsjQuery(t && t.connected),
                    n = [];
                return t = t || {}, e(i).each(function() {
                    var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[-=_](.+)/);
                    i && n.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2]))
                }), !n.length && t.key && n.push(t.key + "="), n.join("&")
            },
            toArray: function(t) {
                var i = this._getItemsAsjQuery(t && t.connected),
                    n = [];
                return t = t || {}, i.each(function() {
                    n.push(e(t.item || this).attr(t.attribute || "id") || "")
                }), n
            },
            _intersectsWith: function(e) {
                var t = this.positionAbs.left,
                    i = t + this.helperProportions.width,
                    n = this.positionAbs.top,
                    s = n + this.helperProportions.height,
                    o = e.left,
                    r = o + e.width,
                    a = e.top,
                    l = a + e.height,
                    c = this.offset.click.top,
                    u = this.offset.click.left;
                return c = n + c > a && n + c < l && t + u > o && t + u < r, "pointer" == this.options.tolerance || this.options.forcePointerForContainers || "pointer" != this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? c : o < t + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < r && a < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l
            },
            _intersectsWithPointer: function(t) {
                var i = e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height);
                t = e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width), i = i && t, t = this._getDragVerticalDirection();
                var n = this._getDragHorizontalDirection();
                return !!i && (this.floating ? n && "right" == n || "down" == t ? 2 : 1 : t && ("down" == t ? 2 : 1))
            },
            _intersectsWithSides: function(t) {
                var i = e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height);
                t = e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width);
                var n = this._getDragVerticalDirection(),
                    s = this._getDragHorizontalDirection();
                return this.floating && s ? "right" == s && t || "left" == s && !t : n && ("down" == n && i || "up" == n && !i)
            },
            _getDragVerticalDirection: function() {
                var e = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 != e && (e > 0 ? "down" : "up")
            },
            _getDragHorizontalDirection: function() {
                var e = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 != e && (e > 0 ? "right" : "left")
            },
            refresh: function(e) {
                return this._refreshItems(e), this.refreshPositions(), this
            },
            _connectWith: function() {
                var e = this.options;
                return e.connectWith.constructor == String ? [e.connectWith] : e.connectWith
            },
            _getItemsAsjQuery: function(t) {
                var i = [],
                    n = [],
                    s = this._connectWith();
                if (s && t)
                    for (t = s.length - 1; t >= 0; t--)
                        for (var o = e(s[t]), r = o.length - 1; r >= 0; r--) {
                            var a = e.data(o[r], "sortable");
                            a && a != this && !a.options.disabled && n.push([e.isFunction(a.options.items) ? a.options.items.call(a.element) : e(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a])
                        }
                for (n.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                        options: this.options,
                        item: this.currentItem
                    }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), t = n.length - 1; t >= 0; t--) n[t][0].each(function() {
                    i.push(this)
                });
                return e(i)
            },
            _removeCurrentsFromItems: function() {
                for (var e = this.currentItem.find(":data(sortable-item)"), t = 0; t < this.items.length; t++)
                    for (var i = 0; i < e.length; i++) e[i] == this.items[t].item[0] && this.items.splice(t, 1)
            },
            _refreshItems: function(t) {
                this.items = [], this.containers = [this];
                var i = this.items,
                    n = [
                        [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                            item: this.currentItem
                        }) : e(this.options.items, this.element), this]
                    ],
                    s = this._connectWith();
                if (s)
                    for (var o = s.length - 1; o >= 0; o--)
                        for (var r = e(s[o]), a = r.length - 1; a >= 0; a--) {
                            var l = e.data(r[a], "sortable");
                            l && l != this && !l.options.disabled && (n.push([e.isFunction(l.options.items) ? l.options.items.call(l.element[0], t, {
                                item: this.currentItem
                            }) : e(l.options.items, l.element), l]), this.containers.push(l))
                        }
                for (o = n.length - 1; o >= 0; o--)
                    for (t = n[o][1], s = n[o][0], a = 0, r = s.length; a < r; a++) l = e(s[a]), l.data("sortable-item", t), i.push({
                        item: l,
                        instance: t,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
            },
            refreshPositions: function(t) {
                this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                for (var i = this.items.length - 1; i >= 0; i--) {
                    var n = this.items[i];
                    if (n.instance == this.currentContainer || !this.currentContainer || n.item[0] == this.currentItem[0]) {
                        var s = this.options.toleranceElement ? e(this.options.toleranceElement, n.item) : n.item;
                        t || (n.width = s.outerWidth(), n.height = s.outerHeight()), s = s.offset(), n.left = s.left, n.top = s.top
                    }
                }
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (i = this.containers.length - 1; i >= 0; i--) s = this.containers[i].element.offset(), this.containers[i].containerCache.left = s.left, this.containers[i].containerCache.top = s.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                return this
            },
            _createPlaceholder: function(t) {
                var i = t || this,
                    n = i.options;
                if (!n.placeholder || n.placeholder.constructor == String) {
                    var s = n.placeholder;
                    n.placeholder = {
                        element: function() {
                            var t = e(document.createElement(i.currentItem[0].nodeName)).addClass(s || i.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                            return s || (t.style.visibility = "hidden"), t
                        },
                        update: function(e, t) {
                            s && !n.forcePlaceholderSize || (t.height() || t.height(i.currentItem.innerHeight() - parseInt(i.currentItem.css("paddingTop") || 0, 10) - parseInt(i.currentItem.css("paddingBottom") || 0, 10)), t.width() || t.width(i.currentItem.innerWidth() - parseInt(i.currentItem.css("paddingLeft") || 0, 10) - parseInt(i.currentItem.css("paddingRight") || 0, 10)))
                        }
                    }
                }
                i.placeholder = e(n.placeholder.element.call(i.element, i.currentItem)), i.currentItem.after(i.placeholder), n.placeholder.update(i, i.placeholder)
            },
            _contactContainers: function(t) {
                for (var i = null, n = null, s = this.containers.length - 1; s >= 0; s--) e.ui.contains(this.currentItem[0], this.containers[s].element[0]) || (this._intersectsWith(this.containers[s].containerCache) ? i && e.ui.contains(this.containers[s].element[0], i.element[0]) || (i = this.containers[s], n = s) : this.containers[s].containerCache.over && (this.containers[s]._trigger("out", t, this._uiHash(this)), this.containers[s].containerCache.over = 0));
                if (i)
                    if (1 === this.containers.length) this.containers[n]._trigger("over", t, this._uiHash(this)), this.containers[n].containerCache.over = 1;
                    else if (this.currentContainer != this.containers[n]) {
                    i = 1e4, s = null;
                    for (var o = this.positionAbs[this.containers[n].floating ? "left" : "top"], r = this.items.length - 1; r >= 0; r--)
                        if (e.ui.contains(this.containers[n].element[0], this.items[r].item[0])) {
                            var a = this.items[r][this.containers[n].floating ? "left" : "top"];
                            Math.abs(a - o) < i && (i = Math.abs(a - o), s = this.items[r])
                        }(s || this.options.dropOnEmpty) && (this.currentContainer = this.containers[n], s ? this._rearrange(t, s, null, !0) : this._rearrange(t, null, this.containers[n].element, !0), this._trigger("change", t, this._uiHash()), this.containers[n]._trigger("change", t, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[n]._trigger("over", t, this._uiHash(this)), this.containers[n].containerCache.over = 1)
                }
            },
            _createHelper: function(t) {
                var i = this.options;
                return t = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t, this.currentItem])) : "clone" == i.helper ? this.currentItem.clone() : this.currentItem, t.parents("body").length || e("parent" != i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(t[0]), t[0] == this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), ("" == t[0].style.width || i.forceHelperSize) && t.width(this.currentItem.width()), ("" == t[0].style.height || i.forceHelperSize) && t.height(this.currentItem.height()), t
            },
            _adjustOffsetFromHelper: function(t) {
                "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                    left: +t[0],
                    top: +t[1] || 0
                }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                this.offsetParent = this.helper.offsetParent();
                var t = this.offsetParent.offset();
                return "absolute" == this.cssPosition && this.scrollParent[0] != document && e.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(),
                    t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && e.browser.msie) && (t = {
                    top: 0,
                    left: 0
                }), {
                    top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" == this.cssPosition) {
                    var e = this.currentItem.position();
                    return {
                        top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var t = this.options;
                if ("parent" == t.containment && (t.containment = this.helper[0].parentNode), "document" != t.containment && "window" != t.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e("document" == t.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (e("document" == t.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), !/^(document|window|parent)$/.test(t.containment)) {
                    var i = e(t.containment)[0];
                    t = e(t.containment).offset();
                    var n = "hidden" != e(i).css("overflow");
                    this.containment = [t.left + (parseInt(e(i).css("borderLeftWidth"), 10) || 0) + (parseInt(e(i).css("paddingLeft"), 10) || 0) - this.margins.left, t.top + (parseInt(e(i).css("borderTopWidth"), 10) || 0) + (parseInt(e(i).css("paddingTop"), 10) || 0) - this.margins.top, t.left + (n ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(e(i).css("borderLeftWidth"), 10) || 0) - (parseInt(e(i).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, t.top + (n ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(e(i).css("borderTopWidth"), 10) || 0) - (parseInt(e(i).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
                }
            },
            _convertPositionTo: function(t, i) {
                i || (i = this.position), t = "absolute" == t ? 1 : -1;
                var n = "absolute" != this.cssPosition || this.scrollParent[0] != document && e.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    s = /(html|body)/i.test(n[0].tagName);
                return {
                    top: i.top + this.offset.relative.top * t + this.offset.parent.top * t - (e.browser.safari && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : n.scrollTop()) * t),
                    left: i.left + this.offset.relative.left * t + this.offset.parent.left * t - (e.browser.safari && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : n.scrollLeft()) * t)
                }
            },
            _generatePosition: function(t) {
                var i = this.options,
                    n = "absolute" != this.cssPosition || this.scrollParent[0] != document && e.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    s = /(html|body)/i.test(n[0].tagName);
                "relative" != this.cssPosition || this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset());
                var o = t.pageX,
                    r = t.pageY;
                return this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), i.grid && (r = this.originalPageY + Math.round((r - this.originalPageY) / i.grid[1]) * i.grid[1], r = this.containment && (r - this.offset.click.top < this.containment[1] || r - this.offset.click.top > this.containment[3]) ? r - this.offset.click.top < this.containment[1] ? r + i.grid[1] : r - i.grid[1] : r, o = this.originalPageX + Math.round((o - this.originalPageX) / i.grid[0]) * i.grid[0], o = this.containment && (o - this.offset.click.left < this.containment[0] || o - this.offset.click.left > this.containment[2]) ? o - this.offset.click.left < this.containment[0] ? o + i.grid[0] : o - i.grid[0] : o)), {
                    top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (e.browser.safari && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : n.scrollTop()),
                    left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (e.browser.safari && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : n.scrollLeft())
                }
            },
            _rearrange: function(e, t, i, n) {
                i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" == this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                var s = this,
                    o = this.counter;
                window.setTimeout(function() {
                    o == s.counter && s.refreshPositions(!n)
                }, 0)
            },
            _clear: function(t, i) {
                this.reverting = !1;
                var n = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] == this.currentItem[0]) {
                    for (var s in this._storedCSS) "auto" != this._storedCSS[s] && "static" != this._storedCSS[s] || (this._storedCSS[s] = "");
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else this.currentItem.show();
                if (this.fromOutside && !i && n.push(function(e) {
                        this._trigger("receive", e, this._uiHash(this.fromOutside))
                    }), !this.fromOutside && this.domPosition.prev == this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent == this.currentItem.parent()[0] || i || n.push(function(e) {
                        this._trigger("update", e, this._uiHash())
                    }), !e.ui.contains(this.element[0], this.currentItem[0]))
                    for (i || n.push(function(e) {
                            this._trigger("remove", e, this._uiHash())
                        }), s = this.containers.length - 1; s >= 0; s--) e.ui.contains(this.containers[s].element[0], this.currentItem[0]) && !i && (n.push(function(e) {
                        return function(t) {
                            e._trigger("receive", t, this._uiHash(this))
                        }
                    }.call(this, this.containers[s])), n.push(function(e) {
                        return function(t) {
                            e._trigger("update", t, this._uiHash(this))
                        }
                    }.call(this, this.containers[s])));
                for (s = this.containers.length - 1; s >= 0; s--) i || n.push(function(e) {
                    return function(t) {
                        e._trigger("deactivate", t, this._uiHash(this))
                    }
                }.call(this, this.containers[s])), this.containers[s].containerCache.over && (n.push(function(e) {
                    return function(t) {
                        e._trigger("out", t, this._uiHash(this))
                    }
                }.call(this, this.containers[s])), this.containers[s].containerCache.over = 0);
                if (this._storedCursor && e("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" == this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                    if (!i) {
                        for (this._trigger("beforeStop", t, this._uiHash()), s = 0; s < n.length; s++) n[s].call(this, t);
                        this._trigger("stop", t, this._uiHash())
                    }
                    return !1
                }
                if (i || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null, !i) {
                    for (s = 0; s < n.length; s++) n[s].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !0
            },
            _trigger: function() {
                e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
            },
            _uiHash: function(t) {
                var i = t || this;
                return {
                    helper: i.helper,
                    placeholder: i.placeholder || e([]),
                    position: i.position,
                    originalPosition: i.originalPosition,
                    offset: i.positionAbs,
                    item: i.currentItem,
                    sender: t ? t.element : null
                }
            }
        }), e.extend(e.ui.sortable, {
            version: "1.8.16"
        })
    }(jQuery),
    function(e) {
        e.widget("ui.accordion", {
            options: {
                active: 0,
                animated: "slide",
                autoHeight: !0,
                clearStyle: !1,
                collapsible: !1,
                event: "click",
                fillSpace: !1,
                header: "> li > :first-child,> :not(li):even",
                icons: {
                    header: "ui-icon-triangle-1-e",
                    headerSelected: "ui-icon-triangle-1-s"
                },
                navigation: !1,
                navigationFilter: function() {
                    return this.href.toLowerCase() === location.href.toLowerCase()
                }
            },
            _create: function() {
                var t = this,
                    i = t.options;
                if (t.running = 0, t.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix"), t.headers = t.element.find(i.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion", function() {
                        i.disabled || e(this).addClass("ui-state-hover")
                    }).bind("mouseleave.accordion", function() {
                        i.disabled || e(this).removeClass("ui-state-hover")
                    }).bind("focus.accordion", function() {
                        i.disabled || e(this).addClass("ui-state-focus")
                    }).bind("blur.accordion", function() {
                        i.disabled || e(this).removeClass("ui-state-focus")
                    }), t.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"), i.navigation) {
                    var n = t.element.find("a").filter(i.navigationFilter).eq(0);
                    if (n.length) {
                        var s = n.closest(".ui-accordion-header");
                        t.active = s.length ? s : n.closest(".ui-accordion-content").prev()
                    }
                }
                t.active = t._findActive(t.active || i.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top"), t.active.next().addClass("ui-accordion-content-active"), t._createIcons(), t.resize(), t.element.attr("role", "tablist"), t.headers.attr("role", "tab").bind("keydown.accordion", function(e) {
                    return t._keydown(e)
                }).next().attr("role", "tabpanel"), t.headers.not(t.active || "").attr({
                    "aria-expanded": "false",
                    "aria-selected": "false",
                    tabIndex: -1
                }).next().hide(), t.active.length ? t.active.attr({
                    "aria-expanded": "true",
                    "aria-selected": "true",
                    tabIndex: 0
                }) : t.headers.eq(0).attr("tabIndex", 0), e.browser.safari || t.headers.find("a").attr("tabIndex", -1), i.event && t.headers.bind(i.event.split(" ").join(".accordion ") + ".accordion", function(e) {
                    t._clickHandler.call(t, e, this), e.preventDefault()
                })
            },
            _createIcons: function() {
                var t = this.options;
                t.icons && (e("<span></span>").addClass("ui-icon " + t.icons.header).prependTo(this.headers), this.active.children(".ui-icon").toggleClass(t.icons.header).toggleClass(t.icons.headerSelected), this.element.addClass("ui-accordion-icons"))
            },
            _destroyIcons: function() {
                this.headers.children(".ui-icon").remove(), this.element.removeClass("ui-accordion-icons")
            },
            destroy: function() {
                var t = this.options;
                this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex"), this.headers.find("a").removeAttr("tabIndex"), this._destroyIcons();
                var i = this.headers.next().css("display", "").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
                return (t.autoHeight || t.fillHeight) && i.css("height", ""), e.Widget.prototype.destroy.call(this)
            },
            _setOption: function(t, i) {
                e.Widget.prototype._setOption.apply(this, arguments), "active" == t && this.activate(i), "icons" == t && (this._destroyIcons(), i && this._createIcons()), "disabled" == t && this.headers.add(this.headers.next())[i ? "addClass" : "removeClass"]("ui-accordion-disabled ui-state-disabled")
            },
            _keydown: function(t) {
                if (!(this.options.disabled || t.altKey || t.ctrlKey)) {
                    var i = e.ui.keyCode,
                        n = this.headers.length,
                        s = this.headers.index(t.target),
                        o = !1;
                    switch (t.keyCode) {
                        case i.RIGHT:
                        case i.DOWN:
                            o = this.headers[(s + 1) % n];
                            break;
                        case i.LEFT:
                        case i.UP:
                            o = this.headers[(s - 1 + n) % n];
                            break;
                        case i.SPACE:
                        case i.ENTER:
                            this._clickHandler({
                                target: t.target
                            }, t.target), t.preventDefault()
                    }
                    return !o || (e(t.target).attr("tabIndex", -1), e(o).attr("tabIndex", 0), o.focus(), !1)
                }
            },
            resize: function() {
                var t, i = this.options;
                if (i.fillSpace) {
                    if (e.browser.msie) {
                        var n = this.element.parent().css("overflow");
                        this.element.parent().css("overflow", "hidden")
                    }
                    t = this.element.parent().height(), e.browser.msie && this.element.parent().css("overflow", n), this.headers.each(function() {
                        t -= e(this).outerHeight(!0)
                    }), this.headers.next().each(function() {
                        e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height()))
                    }).css("overflow", "auto")
                } else i.autoHeight && (t = 0, this.headers.next().each(function() {
                    t = Math.max(t, e(this).height("").height())
                }).height(t));
                return this
            },
            activate: function(e) {
                return this.options.active = e, e = this._findActive(e)[0], this._clickHandler({
                    target: e
                }, e), this
            },
            _findActive: function(t) {
                return t ? "number" == typeof t ? this.headers.filter(":eq(" + t + ")") : this.headers.not(this.headers.not(t)) : t === !1 ? e([]) : this.headers.filter(":eq(0)")
            },
            _clickHandler: function(t, i) {
                var n = this.options;
                if (!n.disabled)
                    if (t.target) {
                        if (t = e(t.currentTarget || i), i = t[0] === this.active[0], n.active = (!n.collapsible || !i) && this.headers.index(t), !(this.running || !n.collapsible && i)) {
                            var s = this.active;
                            l = t.next(), r = this.active.next(), a = {
                                options: n,
                                newHeader: i && n.collapsible ? e([]) : t,
                                oldHeader: this.active,
                                newContent: i && n.collapsible ? e([]) : l,
                                oldContent: r
                            };
                            var o = this.headers.index(this.active[0]) > this.headers.index(t[0]);
                            this.active = i ? e([]) : t, this._toggle(l, r, a, i, o), s.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(n.icons.headerSelected).addClass(n.icons.header), i || (t.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(n.icons.header).addClass(n.icons.headerSelected), t.next().addClass("ui-accordion-content-active"))
                        }
                    } else if (n.collapsible) {
                    this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(n.icons.headerSelected).addClass(n.icons.header), this.active.next().addClass("ui-accordion-content-active");
                    var r = this.active.next(),
                        a = {
                            options: n,
                            newHeader: e([]),
                            oldHeader: n.active,
                            newContent: e([]),
                            oldContent: r
                        },
                        l = this.active = e([]);
                    this._toggle(l, r, a)
                }
            },
            _toggle: function(t, i, n, s, o) {
                var r = this,
                    a = r.options;
                r.toShow = t, r.toHide = i, r.data = n;
                var l = function() {
                    if (r) return r._completed.apply(r, arguments)
                };
                if (r._trigger("changestart", null, r.data), r.running = 0 === i.size() ? t.size() : i.size(), a.animated) {
                    n = {}, n = a.collapsible && s ? {
                        toShow: e([]),
                        toHide: i,
                        complete: l,
                        down: o,
                        autoHeight: a.autoHeight || a.fillSpace
                    } : {
                        toShow: t,
                        toHide: i,
                        complete: l,
                        down: o,
                        autoHeight: a.autoHeight || a.fillSpace
                    }, a.proxied || (a.proxied = a.animated), a.proxiedDuration || (a.proxiedDuration = a.duration), a.animated = e.isFunction(a.proxied) ? a.proxied(n) : a.proxied, a.duration = e.isFunction(a.proxiedDuration) ? a.proxiedDuration(n) : a.proxiedDuration, s = e.ui.accordion.animations;
                    var c = a.duration,
                        u = a.animated;
                    !u || s[u] || e.easing[u] || (u = "slide"), s[u] || (s[u] = function(e) {
                        this.slide(e, {
                            easing: u,
                            duration: c || 700
                        })
                    }), s[u](n)
                } else a.collapsible && s ? t.toggle() : (i.hide(), t.show()), l(!0);
                i.prev().attr({
                    "aria-expanded": "false",
                    "aria-selected": "false",
                    tabIndex: -1
                }).blur(), t.prev().attr({
                    "aria-expanded": "true",
                    "aria-selected": "true",
                    tabIndex: 0
                }).focus()
            },
            _completed: function(e) {
                this.running = e ? 0 : --this.running, this.running || (this.options.clearStyle && this.toShow.add(this.toHide).css({
                    height: "",
                    overflow: ""
                }), this.toHide.removeClass("ui-accordion-content-active"), this.toHide.length && (this.toHide.parent()[0].className = this.toHide.parent()[0].className), this._trigger("change", null, this.data))
            }
        }), e.extend(e.ui.accordion, {
            version: "1.8.16",
            animations: {
                slide: function(t, i) {
                    if (t = e.extend({
                            easing: "swing",
                            duration: 300
                        }, t, i), t.toHide.size())
                        if (t.toShow.size()) {
                            var n, s = t.toShow.css("overflow"),
                                o = 0,
                                r = {},
                                a = {};
                            i = t.toShow, n = i[0].style.width, i.width(parseInt(i.parent().width(), 10) - parseInt(i.css("paddingLeft"), 10) - parseInt(i.css("paddingRight"), 10) - (parseInt(i.css("borderLeftWidth"), 10) || 0) - (parseInt(i.css("borderRightWidth"), 10) || 0)), e.each(["height", "paddingTop", "paddingBottom"], function(i, n) {
                                a[n] = "hide", i = ("" + e.css(t.toShow[0], n)).match(/^([\d+-.]+)(.*)$/), r[n] = {
                                    value: i[1],
                                    unit: i[2] || "px"
                                }
                            }), t.toShow.css({
                                height: 0,
                                overflow: "hidden"
                            }).show(), t.toHide.filter(":hidden").each(t.complete).end().filter(":visible").animate(a, {
                                step: function(e, i) {
                                    "height" == i.prop && (o = i.end - i.start === 0 ? 0 : (i.now - i.start) / (i.end - i.start)), t.toShow[0].style[i.prop] = o * r[i.prop].value + r[i.prop].unit
                                },
                                duration: t.duration,
                                easing: t.easing,
                                complete: function() {
                                    t.autoHeight || t.toShow.css("height", ""), t.toShow.css({
                                        width: n,
                                        overflow: s
                                    }), t.complete()
                                }
                            })
                        } else t.toHide.animate({
                            height: "hide",
                            paddingTop: "hide",
                            paddingBottom: "hide"
                        }, t);
                    else t.toShow.animate({
                        height: "show",
                        paddingTop: "show",
                        paddingBottom: "show"
                    }, t)
                },
                bounceslide: function(e) {
                    this.slide(e, {
                        easing: e.down ? "easeOutBounce" : "swing",
                        duration: e.down ? 1e3 : 200
                    })
                }
            }
        })
    }(jQuery),
    function(e) {
        var t = 0;
        e.widget("ui.autocomplete", {
            options: {
                appendTo: "body",
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null
            },
            pending: 0,
            _create: function() {
                var t, i = this,
                    n = this.element[0].ownerDocument;
                this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({
                    role: "textbox",
                    "aria-autocomplete": "list",
                    "aria-haspopup": "true"
                }).bind("keydown.autocomplete", function(n) {
                    if (!i.options.disabled && !i.element.propAttr("readOnly")) {
                        t = !1;
                        var s = e.ui.keyCode;
                        switch (n.keyCode) {
                            case s.PAGE_UP:
                                i._move("previousPage", n);
                                break;
                            case s.PAGE_DOWN:
                                i._move("nextPage", n);
                                break;
                            case s.UP:
                                i._move("previous", n), n.preventDefault();
                                break;
                            case s.DOWN:
                                i._move("next", n), n.preventDefault();
                                break;
                            case s.ENTER:
                            case s.NUMPAD_ENTER:
                                i.menu.active && (t = !0, n.preventDefault());
                            case s.TAB:
                                if (!i.menu.active) return;
                                i.menu.select(n);
                                break;
                            case s.ESCAPE:
                                i.element.val(i.term), i.close(n);
                                break;
                            default:
                                clearTimeout(i.searching), i.searching = setTimeout(function() {
                                    i.term != i.element.val() && (i.selectedItem = null, i.search(null, n))
                                }, i.options.delay)
                        }
                    }
                }).bind("keypress.autocomplete", function(e) {
                    t && (t = !1, e.preventDefault())
                }).bind("focus.autocomplete", function() {
                    i.options.disabled || (i.selectedItem = null, i.previous = i.element.val())
                }).bind("blur.autocomplete", function(e) {
                    i.options.disabled || (clearTimeout(i.searching), i.closing = setTimeout(function() {
                        i.close(e), i._change(e)
                    }, 150))
                }), this._initSource(), this.response = function() {
                    return i._response.apply(i, arguments)
                }, this.menu = e("<ul></ul>").addClass("ui-autocomplete").appendTo(e(this.options.appendTo || "body", n)[0]).mousedown(function(t) {
                    var n = i.menu.element[0];
                    e(t.target).closest(".ui-menu-item").length || setTimeout(function() {
                        e(document).one("mousedown", function(t) {
                            t.target !== i.element[0] && t.target !== n && !e.ui.contains(n, t.target) && i.close()
                        })
                    }, 1), setTimeout(function() {
                        clearTimeout(i.closing)
                    }, 13)
                }).menu({
                    focus: function(e, t) {
                        t = t.item.data("item.autocomplete"), !1 !== i._trigger("focus", e, {
                            item: t
                        }) && /^key/.test(e.originalEvent.type) && i.element.val(t.value)
                    },
                    selected: function(e, t) {
                        var s = t.item.data("item.autocomplete"),
                            o = i.previous;
                        i.element[0] !== n.activeElement && (i.element.focus(), i.previous = o, setTimeout(function() {
                            i.previous = o, i.selectedItem = s
                        }, 1)), !1 !== i._trigger("select", e, {
                            item: s
                        }) && i.element.val(s.value), i.term = i.element.val(), i.close(e), i.selectedItem = s
                    },
                    blur: function() {
                        i.menu.element.is(":visible") && i.element.val() !== i.term && i.element.val(i.term)
                    }
                }).zIndex(this.element.zIndex() + 1).css({
                    top: 0,
                    left: 0
                }).hide().data("menu"), e.fn.bgiframe && this.menu.element.bgiframe()
            },
            destroy: function() {
                this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"), this.menu.element.remove(), e.Widget.prototype.destroy.call(this)
            },
            _setOption: function(t, i) {
                e.Widget.prototype._setOption.apply(this, arguments), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(e(i || "body", this.element[0].ownerDocument)[0]), "disabled" === t && i && this.xhr && this.xhr.abort()
            },
            _initSource: function() {
                var i, n, s = this;
                e.isArray(this.options.source) ? (i = this.options.source, this.source = function(t, n) {
                    n(e.ui.autocomplete.filter(i, t.term))
                }) : "string" == typeof this.options.source ? (n = this.options.source, this.source = function(i, o) {
                    s.xhr && s.xhr.abort(), s.xhr = e.ajax({
                        url: n,
                        data: i,
                        dataType: "json",
                        autocompleteRequest: ++t,
                        success: function(e) {
                            this.autocompleteRequest === t && o(e)
                        },
                        error: function() {
                            this.autocompleteRequest === t && o([])
                        }
                    })
                }) : this.source = this.options.source
            },
            search: function(e, t) {
                return e = null != e ? e : this.element.val(), this.term = this.element.val(), e.length < this.options.minLength ? this.close(t) : (clearTimeout(this.closing), this._trigger("search", t) !== !1 ? this._search(e) : void 0)
            },
            _search: function(e) {
                this.pending++, this.element.addClass("ui-autocomplete-loading"), this.source({
                    term: e
                }, this.response)
            },
            _response: function(e) {
                !this.options.disabled && e && e.length ? (e = this._normalize(e), this._suggest(e), this._trigger("open")) : this.close(), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
            },
            close: function(e) {
                clearTimeout(this.closing), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.deactivate(), this._trigger("close", e))
            },
            _change: function(e) {
                this.previous !== this.element.val() && this._trigger("change", e, {
                    item: this.selectedItem
                })
            },
            _normalize: function(t) {
                return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
                    return "string" == typeof t ? {
                        label: t,
                        value: t
                    } : e.extend({
                        label: t.label || t.value,
                        value: t.value || t.label
                    }, t)
                })
            },
            _suggest: function(t) {
                var i = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
                this._renderMenu(i, t), this.menu.deactivate(), this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({ of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next(new e.Event("mouseover"))
            },
            _resizeMenu: function() {
                var e = this.menu.element;
                e.outerWidth(Math.max(e.width("").outerWidth(), this.element.outerWidth()))
            },
            _renderMenu: function(t, i) {
                var n = this;
                e.each(i, function(e, i) {
                    n._renderItem(t, i)
                })
            },
            _renderItem: function(t, i) {
                return e("<li></li>").data("item.autocomplete", i).append(e("<a></a>").text(i.label)).appendTo(t)
            },
            _move: function(e, t) {
                this.menu.element.is(":visible") ? this.menu.first() && /^previous/.test(e) || this.menu.last() && /^next/.test(e) ? (this.element.val(this.term), this.menu.deactivate()) : this.menu[e](t) : this.search(null, t)
            },
            widget: function() {
                return this.menu.element
            }
        }), e.extend(e.ui.autocomplete, {
            escapeRegex: function(e) {
                return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
            },
            filter: function(t, i) {
                var n = new RegExp(e.ui.autocomplete.escapeRegex(i), "i");
                return e.grep(t, function(e) {
                    return n.test(e.label || e.value || e)
                })
            }
        })
    }(jQuery),
    function(e) {
        e.widget("ui.menu", {
            _create: function() {
                var t = this;
                this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({
                    role: "listbox",
                    "aria-activedescendant": "ui-active-menuitem"
                }).click(function(i) {
                    e(i.target).closest(".ui-menu-item a").length && (i.preventDefault(), t.select(i))
                }), this.refresh()
            },
            refresh: function() {
                var t = this;
                this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem").children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter(function(i) {
                    t.activate(i, e(this).parent())
                }).mouseleave(function() {
                    t.deactivate()
                })
            },
            activate: function(e, t) {
                if (this.deactivate(), this.hasScroll()) {
                    var i = t.offset().top - this.element.offset().top,
                        n = this.element.scrollTop(),
                        s = this.element.height();
                    i < 0 ? this.element.scrollTop(n + i) : i >= s && this.element.scrollTop(n + i - s + t.height())
                }
                this.active = t.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end(), this._trigger("focus", e, {
                    item: t
                })
            },
            deactivate: function() {
                this.active && (this.active.children("a").removeClass("ui-state-hover").removeAttr("id"), this._trigger("blur"), this.active = null)
            },
            next: function(e) {
                this.move("next", ".ui-menu-item:first", e)
            },
            previous: function(e) {
                this.move("prev", ".ui-menu-item:last", e)
            },
            first: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            last: function() {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            move: function(e, t, i) {
                this.active ? (e = this.active[e + "All"](".ui-menu-item").eq(0), e.length ? this.activate(i, e) : this.activate(i, this.element.children(t))) : this.activate(i, this.element.children(t))
            },
            nextPage: function(t) {
                if (this.hasScroll())
                    if (!this.active || this.last()) this.activate(t, this.element.children(".ui-menu-item:first"));
                    else {
                        var i = this.active.offset().top,
                            n = this.element.height(),
                            s = this.element.children(".ui-menu-item").filter(function() {
                                var t = e(this).offset().top - i - n + e(this).height();
                                return t < 10 && t > -10
                            });
                        s.length || (s = this.element.children(".ui-menu-item:last")), this.activate(t, s)
                    }
                else this.activate(t, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"))
            },
            previousPage: function(t) {
                if (this.hasScroll())
                    if (!this.active || this.first()) this.activate(t, this.element.children(".ui-menu-item:last"));
                    else {
                        var i = this.active.offset().top,
                            n = this.element.height();
                        result = this.element.children(".ui-menu-item").filter(function() {
                            var t = e(this).offset().top - i + n - e(this).height();
                            return t < 10 && t > -10
                        }), result.length || (result = this.element.children(".ui-menu-item:first")), this.activate(t, result)
                    }
                else this.activate(t, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"))
            },
            hasScroll: function() {
                return this.element.height() < this.element[e.fn.prop ? "prop" : "attr"]("scrollHeight")
            },
            select: function(e) {
                this._trigger("selected", e, {
                    item: this.active
                })
            }
        })
    }(jQuery),
    function(e) {
        var t, i, n, s, o = function() {
                var t = e(this).find(":ui-button");
                setTimeout(function() {
                    t.button("refresh")
                }, 1)
            },
            r = function(t) {
                var i = t.name,
                    n = t.form,
                    s = e([]);
                return i && (s = n ? e(n).find("[name='" + i + "']") : e("[name='" + i + "']", t.ownerDocument).filter(function() {
                    return !this.form
                })), s
            };
        e.widget("ui.button", {
            options: {
                disabled: null,
                text: !0,
                label: null,
                icons: {
                    primary: null,
                    secondary: null
                }
            },
            _create: function() {
                this.element.closest("form").unbind("reset.button").bind("reset.button", o), "boolean" != typeof this.options.disabled && (this.options.disabled = this.element.propAttr("disabled")), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
                var a = this,
                    l = this.options,
                    c = "checkbox" === this.type || "radio" === this.type,
                    u = "ui-state-hover" + (c ? "" : " ui-state-active");
                null === l.label && (l.label = this.buttonElement.html()), this.element.is(":disabled") && (l.disabled = !0), this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role", "button").bind("mouseenter.button", function() {
                    l.disabled || (e(this).addClass("ui-state-hover"), this === t && e(this).addClass("ui-state-active"))
                }).bind("mouseleave.button", function() {
                    l.disabled || e(this).removeClass(u)
                }).bind("click.button", function(e) {
                    l.disabled && (e.preventDefault(), e.stopImmediatePropagation())
                }), this.element.bind("focus.button", function() {
                    a.buttonElement.addClass("ui-state-focus")
                }).bind("blur.button", function() {
                    a.buttonElement.removeClass("ui-state-focus")
                }), c && (this.element.bind("change.button", function() {
                    s || a.refresh()
                }), this.buttonElement.bind("mousedown.button", function(e) {
                    l.disabled || (s = !1, i = e.pageX, n = e.pageY)
                }).bind("mouseup.button", function(e) {
                    l.disabled || i === e.pageX && n === e.pageY || (s = !0)
                })), "checkbox" === this.type ? this.buttonElement.bind("click.button", function() {
                    return !l.disabled && !s && (e(this).toggleClass("ui-state-active"), void a.buttonElement.attr("aria-pressed", a.element[0].checked))
                }) : "radio" === this.type ? this.buttonElement.bind("click.button", function() {
                    if (l.disabled || s) return !1;
                    e(this).addClass("ui-state-active"), a.buttonElement.attr("aria-pressed", "true");
                    var t = a.element[0];
                    r(t).not(t).map(function() {
                        return e(this).button("widget")[0]
                    }).removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : (this.buttonElement.bind("mousedown.button", function() {
                    return !l.disabled && (e(this).addClass("ui-state-active"), t = this, void e(document).one("mouseup", function() {
                        t = null
                    }))
                }).bind("mouseup.button", function() {
                    return !l.disabled && void e(this).removeClass("ui-state-active")
                }).bind("keydown.button", function(t) {
                    return !l.disabled && void(t.keyCode != e.ui.keyCode.SPACE && t.keyCode != e.ui.keyCode.ENTER || e(this).addClass("ui-state-active"))
                }).bind("keyup.button", function() {
                    e(this).removeClass("ui-state-active")
                }), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
                    t.keyCode === e.ui.keyCode.SPACE && e(this).click()
                })), this._setOption("disabled", l.disabled), this._resetButton()
            },
            _determineButtonType: function() {
                if (this.type = this.element.is(":checkbox") ? "checkbox" : this.element.is(":radio") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type) {
                    var e = this.element.parents().filter(":last"),
                        t = "label[for='" + this.element.attr("id") + "']";
                    this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), (e = this.element.is(":checked")) && this.buttonElement.addClass("ui-state-active"), this.buttonElement.attr("aria-pressed", e)
                } else this.buttonElement = this.element
            },
            widget: function() {
                return this.buttonElement
            },
            destroy: function() {
                this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title"), e.Widget.prototype.destroy.call(this)
            },
            _setOption: function(t, i) {
                e.Widget.prototype._setOption.apply(this, arguments), "disabled" === t ? i ? this.element.propAttr("disabled", !0) : this.element.propAttr("disabled", !1) : this._resetButton()
            },
            refresh: function() {
                var t = this.element.is(":disabled");
                t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? r(this.element[0]).each(function() {
                    e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
            },
            _resetButton: function() {
                if ("input" === this.type) this.options.label && this.element.val(this.options.label);
                else {
                    var t = this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
                        i = e("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
                        n = this.options.icons,
                        s = n.primary && n.secondary,
                        o = [];
                    n.primary || n.secondary ? (this.options.text && o.push("ui-button-text-icon" + (s ? "s" : n.primary ? "-primary" : "-secondary")), n.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + n.primary + "'></span>"), n.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + n.secondary + "'></span>"), this.options.text || (o.push(s ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", i))) : o.push("ui-button-text-only"), t.addClass(o.join(" "))
                }
            }
        }), e.widget("ui.buttonset", {
            options: {
                items: ":button, :submit, :reset, :checkbox, :radio, a, :data(button)"
            },
            _create: function() {
                this.element.addClass("ui-buttonset")
            },
            _init: function() {
                this.refresh()
            },
            _setOption: function(t, i) {
                "disabled" === t && this.buttons.button("option", t, i), e.Widget.prototype._setOption.apply(this, arguments)
            },
            refresh: function() {
                var t = "ltr" === this.element.css("direction");
                this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                    return e(this).button("widget")[0]
                }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-left" : "ui-corner-right").end().filter(":last").addClass(t ? "ui-corner-right" : "ui-corner-left").end().end()
            },
            destroy: function() {
                this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                    return e(this).button("widget")[0]
                }).removeClass("ui-corner-left ui-corner-right").end().button("destroy"), e.Widget.prototype.destroy.call(this)
            }
        })
    }(jQuery),
    function(e, t) {
        var i = {
                buttons: !0,
                height: !0,
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0,
                width: !0
            },
            n = {
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0
            },
            s = e.attrFn || {
                val: !0,
                css: !0,
                html: !0,
                text: !0,
                data: !0,
                width: !0,
                height: !0,
                offset: !0,
                click: !0
            };
        e.widget("ui.dialog", {
            options: {
                autoOpen: !0,
                buttons: {},
                closeOnEscape: !0,
                closeText: "close",
                dialogClass: "",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: !1,
                maxWidth: !1,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: "center",
                    at: "center",
                    collision: "fit",
                    using: function(t) {
                        var i = e(this).css(t).offset().top;
                        i < 0 && e(this).css("top", t.top - i)
                    }
                },
                resizable: !0,
                show: null,
                stack: !0,
                title: "",
                width: 300,
                zIndex: 1e3
            },
            _create: function() {
                this.originalTitle = this.element.attr("title"), "string" != typeof this.originalTitle && (this.originalTitle = ""), this.options.title = this.options.title || this.originalTitle;
                var t = this,
                    i = t.options,
                    n = i.title || "&#160;",
                    s = e.ui.dialog.getTitleId(t.element),
                    o = (t.uiDialog = e("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all " + i.dialogClass).css({
                        zIndex: i.zIndex
                    }).attr("tabIndex", -1).css("outline", 0).keydown(function(n) {
                        i.closeOnEscape && !n.isDefaultPrevented() && n.keyCode && n.keyCode === e.ui.keyCode.ESCAPE && (t.close(n), n.preventDefault())
                    }).attr({
                        role: "dialog",
                        "aria-labelledby": s
                    }).mousedown(function(e) {
                        t.moveToTop(!1, e)
                    });
                t.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(o);
                var r = (t.uiDialogTitlebar = e("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(o),
                    a = e('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role", "button").hover(function() {
                        a.addClass("ui-state-hover")
                    }, function() {
                        a.removeClass("ui-state-hover")
                    }).focus(function() {
                        a.addClass("ui-state-focus")
                    }).blur(function() {
                        a.removeClass("ui-state-focus")
                    }).click(function(e) {
                        return t.close(e), !1
                    }).appendTo(r);
                (t.uiDialogTitlebarCloseText = e("<span></span>")).addClass("ui-icon ui-icon-closethick").text(i.closeText).appendTo(a), e("<span></span>").addClass("ui-dialog-title").attr("id", s).html(n).prependTo(r), e.isFunction(i.beforeclose) && !e.isFunction(i.beforeClose) && (i.beforeClose = i.beforeclose), r.find("*").add(r).disableSelection(), i.draggable && e.fn.draggable && t._makeDraggable(), i.resizable && e.fn.resizable && t._makeResizable(), t._createButtons(i.buttons), t._isOpen = !1, e.fn.bgiframe && o.bgiframe()
            },
            _init: function() {
                this.options.autoOpen && this.open()
            },
            destroy: function() {
                var e = this;
                return e.overlay && e.overlay.destroy(), e.uiDialog.hide(), e.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), e.uiDialog.remove(), e.originalTitle && e.element.attr("title", e.originalTitle), e
            },
            widget: function() {
                return this.uiDialog
            },
            close: function(t) {
                var i, n, s = this;
                if (!1 !== s._trigger("beforeClose", t)) return s.overlay && s.overlay.destroy(), s.uiDialog.unbind("keypress.ui-dialog"), s._isOpen = !1, s.options.hide ? s.uiDialog.hide(s.options.hide, function() {
                    s._trigger("close", t)
                }) : (s.uiDialog.hide(), s._trigger("close", t)), e.ui.dialog.overlay.resize(), s.options.modal && (i = 0, e(".ui-dialog").each(function() {
                    this !== s.uiDialog[0] && (n = e(this).css("z-index"), isNaN(n) || (i = Math.max(i, n)))
                }), e.ui.dialog.maxZ = i), s
            },
            isOpen: function() {
                return this._isOpen
            },
            moveToTop: function(t, i) {
                var n = this,
                    s = n.options;
                return s.modal && !t || !s.stack && !s.modal ? n._trigger("focus", i) : (s.zIndex > e.ui.dialog.maxZ && (e.ui.dialog.maxZ = s.zIndex), n.overlay && (e.ui.dialog.maxZ += 1, n.overlay.$el.css("z-index", e.ui.dialog.overlay.maxZ = e.ui.dialog.maxZ)), t = {
                    scrollTop: n.element.scrollTop(),
                    scrollLeft: n.element.scrollLeft()
                }, e.ui.dialog.maxZ += 1, n.uiDialog.css("z-index", e.ui.dialog.maxZ), n.element.attr(t), n._trigger("focus", i), n)
            },
            open: function() {
                if (!this._isOpen) {
                    var t = this,
                        i = t.options,
                        n = t.uiDialog;
                    return t.overlay = i.modal ? new e.ui.dialog.overlay(t) : null, t._size(), t._position(i.position), n.show(i.show), t.moveToTop(!0), i.modal && n.bind("keypress.ui-dialog", function(t) {
                        if (t.keyCode === e.ui.keyCode.TAB) {
                            var i = e(":tabbable", this),
                                n = i.filter(":first");
                            if (i = i.filter(":last"), t.target === i[0] && !t.shiftKey) return n.focus(1), !1;
                            if (t.target === n[0] && t.shiftKey) return i.focus(1), !1
                        }
                    }), e(t.element.find(":tabbable").get().concat(n.find(".ui-dialog-buttonpane :tabbable").get().concat(n.get()))).eq(0).focus(), t._isOpen = !0, t._trigger("open"), t
                }
            },
            _createButtons: function(t) {
                var i = this,
                    n = !1,
                    o = e("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
                    r = e("<div></div>").addClass("ui-dialog-buttonset").appendTo(o);
                i.uiDialog.find(".ui-dialog-buttonpane").remove(), "object" == typeof t && null !== t && e.each(t, function() {
                    return !(n = !0)
                }), n && (e.each(t, function(t, n) {
                    n = e.isFunction(n) ? {
                        click: n,
                        text: t
                    } : n;
                    var o = e('<button type="button"></button>').click(function() {
                        n.click.apply(i.element[0], arguments)
                    }).appendTo(r);
                    e.each(n, function(e, t) {
                        "click" !== e && (e in s ? o[e](t) : o.attr(e, t))
                    }), e.fn.button && o.button()
                }), o.appendTo(i.uiDialog))
            },
            _makeDraggable: function() {
                function t(e) {
                    return {
                        position: e.position,
                        offset: e.offset
                    }
                }
                var i, n = this,
                    s = n.options,
                    o = e(document);
                n.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function(o, r) {
                        i = "auto" === s.height ? "auto" : e(this).height(), e(this).height(e(this).height()).addClass("ui-dialog-dragging"), n._trigger("dragStart", o, t(r))
                    },
                    drag: function(e, i) {
                        n._trigger("drag", e, t(i))
                    },
                    stop: function(r, a) {
                        s.position = [a.position.left - o.scrollLeft(), a.position.top - o.scrollTop()], e(this).removeClass("ui-dialog-dragging").height(i), n._trigger("dragStop", r, t(a)), e.ui.dialog.overlay.resize()
                    }
                })
            },
            _makeResizable: function(i) {
                function n(e) {
                    return {
                        originalPosition: e.originalPosition,
                        originalSize: e.originalSize,
                        position: e.position,
                        size: e.size
                    }
                }
                i = i === t ? this.options.resizable : i;
                var s = this,
                    o = s.options,
                    r = s.uiDialog.css("position");
                i = "string" == typeof i ? i : "n,e,s,w,se,sw,ne,nw", s.uiDialog.resizable({
                    cancel: ".ui-dialog-content",
                    containment: "document",
                    alsoResize: s.element,
                    maxWidth: o.maxWidth,
                    maxHeight: o.maxHeight,
                    minWidth: o.minWidth,
                    minHeight: s._minHeight(),
                    handles: i,
                    start: function(t, i) {
                        e(this).addClass("ui-dialog-resizing"), s._trigger("resizeStart", t, n(i))
                    },
                    resize: function(e, t) {
                        s._trigger("resize", e, n(t))
                    },
                    stop: function(t, i) {
                        e(this).removeClass("ui-dialog-resizing"), o.height = e(this).height(), o.width = e(this).width(), s._trigger("resizeStop", t, n(i)), e.ui.dialog.overlay.resize()
                    }
                }).css("position", r).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
            },
            _minHeight: function() {
                var e = this.options;
                return "auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height)
            },
            _position: function(t) {
                var i, n = [],
                    s = [0, 0];
                t ? (("string" == typeof t || "object" == typeof t && "0" in t) && (n = t.split ? t.split(" ") : [t[0], t[1]], 1 === n.length && (n[1] = n[0]), e.each(["left", "top"], function(e, t) {
                    +n[e] === n[e] && (s[e] = n[e], n[e] = t)
                }), t = {
                    my: n.join(" "),
                    at: n.join(" "),
                    offset: s.join(" ")
                }), t = e.extend({}, e.ui.dialog.prototype.options.position, t)) : t = e.ui.dialog.prototype.options.position, (i = this.uiDialog.is(":visible")) || this.uiDialog.show(), this.uiDialog.css({
                    top: 0,
                    left: 0
                }).position(e.extend({ of: window
                }, t)), i || this.uiDialog.hide()
            },
            _setOptions: function(t) {
                var s = this,
                    o = {},
                    r = !1;
                e.each(t, function(e, t) {
                    s._setOption(e, t), e in i && (r = !0), e in n && (o[e] = t)
                }), r && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", o)
            },
            _setOption: function(t, i) {
                var n = this,
                    s = n.uiDialog;
                switch (t) {
                    case "beforeclose":
                        t = "beforeClose";
                        break;
                    case "buttons":
                        n._createButtons(i);
                        break;
                    case "closeText":
                        n.uiDialogTitlebarCloseText.text("" + i);
                        break;
                    case "dialogClass":
                        s.removeClass(n.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all " + i);
                        break;
                    case "disabled":
                        i ? s.addClass("ui-dialog-disabled") : s.removeClass("ui-dialog-disabled");
                        break;
                    case "draggable":
                        var o = s.is(":data(draggable)");
                        o && !i && s.draggable("destroy"), !o && i && n._makeDraggable();
                        break;
                    case "position":
                        n._position(i);
                        break;
                    case "resizable":
                        (o = s.is(":data(resizable)")) && !i && s.resizable("destroy"), o && "string" == typeof i && s.resizable("option", "handles", i), !o && i !== !1 && n._makeResizable(i);
                        break;
                    case "title":
                        e(".ui-dialog-title", n.uiDialogTitlebar).html("" + (i || "&#160;"))
                }
                e.Widget.prototype._setOption.apply(n, arguments)
            },
            _size: function() {
                var t, i, n = this.options,
                    s = this.uiDialog.is(":visible");
                this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    height: 0
                }), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({
                    height: "auto",
                    width: n.width
                }).height(), i = Math.max(0, n.minHeight - t), "auto" === n.height ? e.support.minHeight ? this.element.css({
                    minHeight: i,
                    height: "auto"
                }) : (this.uiDialog.show(), n = this.element.css("height", "auto").height(), s || this.uiDialog.hide(), this.element.height(Math.max(n, i))) : this.element.height(Math.max(n.height - t, 0)), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            }
        }), e.extend(e.ui.dialog, {
            version: "1.8.16",
            uuid: 0,
            maxZ: 0,
            getTitleId: function(e) {
                return e = e.attr("id"), e || (this.uuid += 1, e = this.uuid), "ui-dialog-title-" + e
            },
            overlay: function(t) {
                this.$el = e.ui.dialog.overlay.create(t)
            }
        }), e.extend(e.ui.dialog.overlay, {
            instances: [],
            oldInstances: [],
            maxZ: 0,
            events: e.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function(e) {
                return e + ".dialog-overlay"
            }).join(" "),
            create: function(t) {
                0 === this.instances.length && (setTimeout(function() {
                    e.ui.dialog.overlay.instances.length && e(document).bind(e.ui.dialog.overlay.events, function(t) {
                        if (e(t.target).zIndex() < e.ui.dialog.overlay.maxZ) return !1
                    })
                }, 1), e(document).bind("keydown.dialog-overlay", function(i) {
                    t.options.closeOnEscape && !i.isDefaultPrevented() && i.keyCode && i.keyCode === e.ui.keyCode.ESCAPE && (t.close(i), i.preventDefault())
                }), e(window).bind("resize.dialog-overlay", e.ui.dialog.overlay.resize));
                var i = (this.oldInstances.pop() || e("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({
                    width: this.width(),
                    height: this.height()
                });
                return e.fn.bgiframe && i.bgiframe(), this.instances.push(i), i
            },
            destroy: function(t) {
                var i = e.inArray(t, this.instances);
                i != -1 && this.oldInstances.push(this.instances.splice(i, 1)[0]), 0 === this.instances.length && e([document, window]).unbind(".dialog-overlay"), t.remove();
                var n = 0;
                e.each(this.instances, function() {
                    n = Math.max(n, this.css("z-index"))
                }), this.maxZ = n
            },
            height: function() {
                var t, i;
                return e.browser.msie && e.browser.version < 7 ? (t = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), i = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), t < i ? e(window).height() + "px" : t + "px") : e(document).height() + "px"
            },
            width: function() {
                var t, i;
                return e.browser.msie ? (t = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), i = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), t < i ? e(window).width() + "px" : t + "px") : e(document).width() + "px"
            },
            resize: function() {
                var t = e([]);
                e.each(e.ui.dialog.overlay.instances, function() {
                    t = t.add(this)
                }), t.css({
                    width: 0,
                    height: 0
                }).css({
                    width: e.ui.dialog.overlay.width(),
                    height: e.ui.dialog.overlay.height()
                })
            }
        }), e.extend(e.ui.dialog.overlay.prototype, {
            destroy: function() {
                e.ui.dialog.overlay.destroy(this.$el)
            }
        })
    }(jQuery),
    function(e) {
        e.widget("ui.slider", e.ui.mouse, {
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null
            },
            _create: function() {
                var t = this,
                    i = this.options,
                    n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                    s = i.values && i.values.length || 1,
                    o = [];
                this._mouseSliding = this._keySliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all" + (i.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = e([]), i.range && (i.range === !0 && (i.values || (i.values = [this._valueMin(), this._valueMin()]), i.values.length && 2 !== i.values.length && (i.values = [i.values[0], i.values[0]])), this.range = e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + ("min" === i.range || "max" === i.range ? " ui-slider-range-" + i.range : "")));
                for (var r = n.length; r < s; r += 1) o.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>");
                this.handles = n.add(e(o.join("")).appendTo(t.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function(e) {
                    e.preventDefault()
                }).hover(function() {
                    i.disabled || e(this).addClass("ui-state-hover")
                }, function() {
                    e(this).removeClass("ui-state-hover")
                }).focus(function() {
                    i.disabled ? e(this).blur() : (e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), e(this).addClass("ui-state-focus"))
                }).blur(function() {
                    e(this).removeClass("ui-state-focus")
                }), this.handles.each(function(t) {
                    e(this).data("index.ui-slider-handle", t)
                }), this.handles.keydown(function(i) {
                    var n, s, o, r = !0,
                        a = e(this).data("index.ui-slider-handle");
                    if (!t.options.disabled) {
                        switch (i.keyCode) {
                            case e.ui.keyCode.HOME:
                            case e.ui.keyCode.END:
                            case e.ui.keyCode.PAGE_UP:
                            case e.ui.keyCode.PAGE_DOWN:
                            case e.ui.keyCode.UP:
                            case e.ui.keyCode.RIGHT:
                            case e.ui.keyCode.DOWN:
                            case e.ui.keyCode.LEFT:
                                if (r = !1, !t._keySliding && (t._keySliding = !0, e(this).addClass("ui-state-active"), n = t._start(i, a), n === !1)) return
                        }
                        switch (o = t.options.step, n = s = t.options.values && t.options.values.length ? t.values(a) : t.value(), i.keyCode) {
                            case e.ui.keyCode.HOME:
                                s = t._valueMin();
                                break;
                            case e.ui.keyCode.END:
                                s = t._valueMax();
                                break;
                            case e.ui.keyCode.PAGE_UP:
                                s = t._trimAlignValue(n + (t._valueMax() - t._valueMin()) / 5);
                                break;
                            case e.ui.keyCode.PAGE_DOWN:
                                s = t._trimAlignValue(n - (t._valueMax() - t._valueMin()) / 5);
                                break;
                            case e.ui.keyCode.UP:
                            case e.ui.keyCode.RIGHT:
                                if (n === t._valueMax()) return;
                                s = t._trimAlignValue(n + o);
                                break;
                            case e.ui.keyCode.DOWN:
                            case e.ui.keyCode.LEFT:
                                if (n === t._valueMin()) return;
                                s = t._trimAlignValue(n - o)
                        }
                        return t._slide(i, a, s), r
                    }
                }).keyup(function(i) {
                    var n = e(this).data("index.ui-slider-handle");
                    t._keySliding && (t._keySliding = !1, t._stop(i, n), t._change(i, n), e(this).removeClass("ui-state-active"))
                }), this._refreshValue(), this._animateOff = !1
            },
            destroy: function() {
                return this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"), this._mouseDestroy(), this
            },
            _mouseCapture: function(t) {
                var i, n, s, o, r, a = this.options;
                return !a.disabled && (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), i = this._normValueFromMouse({
                    x: t.pageX,
                    y: t.pageY
                }), n = this._valueMax() - this._valueMin() + 1, o = this, this.handles.each(function(t) {
                    var a = Math.abs(i - o.values(t));
                    n > a && (n = a, s = e(this), r = t)
                }), a.range === !0 && this.values(1) === a.min && (r += 1, s = e(this.handles[r])), this._start(t, r) !== !1 && (this._mouseSliding = !0, o._handleIndex = r, s.addClass("ui-state-active").focus(), a = s.offset(), this._clickOffset = e(t.target).parents().andSelf().is(".ui-slider-handle") ? {
                    left: t.pageX - a.left - s.width() / 2,
                    top: t.pageY - a.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
                } : {
                    left: 0,
                    top: 0
                }, this.handles.hasClass("ui-state-hover") || this._slide(t, r, i), this._animateOff = !0))
            },
            _mouseStart: function() {
                return !0
            },
            _mouseDrag: function(e) {
                var t = this._normValueFromMouse({
                    x: e.pageX,
                    y: e.pageY
                });
                return this._slide(e, this._handleIndex, t), !1
            },
            _mouseStop: function(e) {
                return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._clickOffset = this._handleIndex = null, this._animateOff = !1
            },
            _detectOrientation: function() {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function(e) {
                var t;
                return "horizontal" === this.orientation ? (t = this.elementSize.width, e = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, e = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), t = e / t, t > 1 && (t = 1), t < 0 && (t = 0), "vertical" === this.orientation && (t = 1 - t), e = this._valueMax() - this._valueMin(), this._trimAlignValue(this._valueMin() + t * e)
            },
            _start: function(e, t) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i)
            },
            _slide: function(e, t, i) {
                var n;
                this.options.values && this.options.values.length ? (n = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > n || 1 === t && i < n) && (i = n), i !== this.values(t) && (n = this.values(), n[t] = i, e = this._trigger("slide", e, {
                    handle: this.handles[t],
                    value: i,
                    values: n
                }), this.values(t ? 0 : 1), e !== !1 && this.values(t, i, !0))) : i !== this.value() && (e = this._trigger("slide", e, {
                    handle: this.handles[t],
                    value: i
                }), e !== !1 && this.value(i))
            },
            _stop: function(e, t) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i)
            },
            _change: function(e, t) {
                if (!this._keySliding && !this._mouseSliding) {
                    var i = {
                        handle: this.handles[t],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("change", e, i)
                }
            },
            value: function(e) {
                return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), void 0) : this._value()
            },
            values: function(t, i) {
                var n, s, o;
                if (arguments.length > 1) this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), this._change(null, t);
                else {
                    if (!arguments.length) return this._values();
                    if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
                    for (n = this.options.values, s = arguments[0], o = 0; o < n.length; o += 1) n[o] = this._trimAlignValue(s[o]), this._change(null, o);
                    this._refreshValue()
                }
            },
            _setOption: function(t, i) {
                var n, s = 0;
                switch (e.isArray(this.options.values) && (s = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments), t) {
                    case "disabled":
                        i ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.propAttr("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.propAttr("disabled", !1), this.element.removeClass("ui-disabled"));
                        break;
                    case "orientation":
                        this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                        break;
                    case "value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                        break;
                    case "values":
                        for (this._animateOff = !0, this._refreshValue(), n = 0; n < s; n += 1) this._change(null, n);
                        this._animateOff = !1
                }
            },
            _value: function() {
                var e = this.options.value;
                return e = this._trimAlignValue(e)
            },
            _values: function(e) {
                var t, i;
                if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
                for (t = this.options.values.slice(), i = 0; i < t.length; i += 1) t[i] = this._trimAlignValue(t[i]);
                return t
            },
            _trimAlignValue: function(e) {
                if (e <= this._valueMin()) return this._valueMin();
                if (e >= this._valueMax()) return this._valueMax();
                var t = this.options.step > 0 ? this.options.step : 1,
                    i = (e - this._valueMin()) % t;
                return e -= i, 2 * Math.abs(i) >= t && (e += i > 0 ? t : -t), parseFloat(e.toFixed(5))
            },
            _valueMin: function() {
                return this.options.min
            },
            _valueMax: function() {
                return this.options.max
            },
            _refreshValue: function() {
                var t, i, n, s, o, r = this.options.range,
                    a = this.options,
                    l = this,
                    c = !this._animateOff && a.animate,
                    u = {};
                this.options.values && this.options.values.length ? this.handles.each(function(n) {
                    t = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, u["horizontal" === l.orientation ? "left" : "bottom"] = t + "%", e(this).stop(1, 1)[c ? "animate" : "css"](u, a.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[c ? "animate" : "css"]({
                        left: t + "%"
                    }, a.animate), 1 === n && l.range[c ? "animate" : "css"]({
                        width: t - i + "%"
                    }, {
                        queue: !1,
                        duration: a.animate
                    })) : (0 === n && l.range.stop(1, 1)[c ? "animate" : "css"]({
                        bottom: t + "%"
                    }, a.animate), 1 === n && l.range[c ? "animate" : "css"]({
                        height: t - i + "%"
                    }, {
                        queue: !1,
                        duration: a.animate
                    }))), i = t
                }) : (n = this.value(), s = this._valueMin(), o = this._valueMax(), t = o !== s ? (n - s) / (o - s) * 100 : 0, u["horizontal" === l.orientation ? "left" : "bottom"] = t + "%", this.handle.stop(1, 1)[c ? "animate" : "css"](u, a.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                    width: t + "%"
                }, a.animate), "max" === r && "horizontal" === this.orientation && this.range[c ? "animate" : "css"]({
                    width: 100 - t + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                }), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                    height: t + "%"
                }, a.animate), "max" === r && "vertical" === this.orientation && this.range[c ? "animate" : "css"]({
                    height: 100 - t + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                }))
            }
        }), e.extend(e.ui.slider, {
            version: "1.8.16"
        })
    }(jQuery),
    function(e, i) {
        function n() {
            return ++o
        }

        function s() {
            return ++r
        }
        var o = 0,
            r = 0;
        e.widget("ui.tabs", {
            options: {
                add: null,
                ajaxOptions: null,
                cache: !1,
                cookie: null,
                collapsible: !1,
                disable: null,
                disabled: [],
                enable: null,
                event: "click",
                fx: null,
                idPrefix: "ui-tabs-",
                load: null,
                panelTemplate: "<div></div>",
                remove: null,
                select: null,
                show: null,
                spinner: "<em>Loading&#8230;</em>",
                tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
            },
            _create: function() {
                this._tabify(!0)
            },
            _setOption: function(e, t) {
                "selected" == e ? this.options.collapsible && t == this.options.selected || this.select(t) : (this.options[e] = t, this._tabify())
            },
            _tabId: function(e) {
                return e.title && e.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "") || this.options.idPrefix + n()
            },
            _sanitizeSelector: function(e) {
                return e.replace(/:/g, "\\:")
            },
            _cookie: function() {
                var t = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + s());
                return e.cookie.apply(null, [t].concat(e.makeArray(arguments)))
            },
            _ui: function(e, t) {
                return {
                    tab: e,
                    panel: t,
                    index: this.anchors.index(e)
                }
            },
            _cleanup: function() {
                this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function() {
                    var t = e(this);
                    t.html(t.data("label.tabs")).removeData("label.tabs")
                })
            },
            _tabify: function(t) {
                function n(t, i) {
                    t.css("display", ""), !e.support.opacity && i.opacity && t[0].style.removeAttribute("filter")
                }
                var s = this,
                    o = this.options,
                    r = /^#.+/;
                this.list = this.element.find("ol,ul").eq(0), this.lis = e(" > li:has(a[href])", this.list), this.anchors = this.lis.map(function() {
                    return e("a", this)[0]
                }), this.panels = e([]), this.anchors.each(function(t, i) {
                    var n, a = e(i).attr("href"),
                        l = a.split("#")[0];
                    l && (l === location.toString().split("#")[0] || (n = e("base")[0]) && l === n.href) && (a = i.hash, i.href = a), r.test(a) ? s.panels = s.panels.add(s.element.find(s._sanitizeSelector(a))) : a && "#" !== a ? (e.data(i, "href.tabs", a), e.data(i, "load.tabs", a.replace(/#.*$/, "")), a = s._tabId(i), i.href = "#" + a, i = s.element.find("#" + a), i.length || (i = e(o.panelTemplate).attr("id", a).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(s.panels[t - 1] || s.list), i.data("destroy.tabs", !0)), s.panels = s.panels.add(i)) : o.disabled.push(t)
                }), t ? (this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"), this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.lis.addClass("ui-state-default ui-corner-top"), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"), o.selected === i ? (location.hash && this.anchors.each(function(e, t) {
                    if (t.hash == location.hash) return o.selected = e, !1
                }), "number" != typeof o.selected && o.cookie && (o.selected = parseInt(s._cookie(), 10)), "number" != typeof o.selected && this.lis.filter(".ui-tabs-selected").length && (o.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"))), o.selected = o.selected || (this.lis.length ? 0 : -1)) : null === o.selected && (o.selected = -1), o.selected = o.selected >= 0 && this.anchors[o.selected] || o.selected < 0 ? o.selected : 0, o.disabled = e.unique(o.disabled.concat(e.map(this.lis.filter(".ui-state-disabled"), function(e) {
                    return s.lis.index(e)
                }))).sort(), e.inArray(o.selected, o.disabled) != -1 && o.disabled.splice(e.inArray(o.selected, o.disabled), 1), this.panels.addClass("ui-tabs-hide"), this.lis.removeClass("ui-tabs-selected ui-state-active"), o.selected >= 0 && this.anchors.length && (s.element.find(s._sanitizeSelector(s.anchors[o.selected].hash)).removeClass("ui-tabs-hide"), this.lis.eq(o.selected).addClass("ui-tabs-selected ui-state-active"), s.element.queue("tabs", function() {
                    s._trigger("show", null, s._ui(s.anchors[o.selected], s.element.find(s._sanitizeSelector(s.anchors[o.selected].hash))[0]))
                }), this.load(o.selected)), e(window).bind("unload", function() {
                    s.lis.add(s.anchors).unbind(".tabs"), s.lis = s.anchors = s.panels = null
                })) : o.selected = this.lis.index(this.lis.filter(".ui-tabs-selected")), this.element[o.collapsible ? "addClass" : "removeClass"]("ui-tabs-collapsible"), o.cookie && this._cookie(o.selected, o.cookie), t = 0;
                for (var a; a = this.lis[t]; t++) e(a)[e.inArray(t, o.disabled) == -1 || e(a).hasClass("ui-tabs-selected") ? "removeClass" : "addClass"]("ui-state-disabled");
                if (o.cache === !1 && this.anchors.removeData("cache.tabs"), this.lis.add(this.anchors).unbind(".tabs"), "mouseover" !== o.event) {
                    var l = function(e, t) {
                            t.is(":not(.ui-state-disabled)") && t.addClass("ui-state-" + e)
                        },
                        c = function(e, t) {
                            t.removeClass("ui-state-" + e)
                        };
                    this.lis.bind("mouseover.tabs", function() {
                        l("hover", e(this))
                    }), this.lis.bind("mouseout.tabs", function() {
                        c("hover", e(this))
                    }), this.anchors.bind("focus.tabs", function() {
                        l("focus", e(this).closest("li"))
                    }), this.anchors.bind("blur.tabs", function() {
                        c("focus", e(this).closest("li"))
                    })
                }
                var u, h;
                o.fx && (e.isArray(o.fx) ? (u = o.fx[0], h = o.fx[1]) : u = h = o.fx);
                var d = h ? function(t, i) {
                        e(t).closest("li").addClass("ui-tabs-selected ui-state-active"), i.hide().removeClass("ui-tabs-hide").animate(h, h.duration || "normal", function() {
                            n(i, h), s._trigger("show", null, s._ui(t, i[0]))
                        })
                    } : function(t, i) {
                        e(t).closest("li").addClass("ui-tabs-selected ui-state-active"), i.removeClass("ui-tabs-hide"), s._trigger("show", null, s._ui(t, i[0]))
                    },
                    p = u ? function(e, t) {
                        t.animate(u, u.duration || "normal", function() {
                            s.lis.removeClass("ui-tabs-selected ui-state-active"), t.addClass("ui-tabs-hide"), n(t, u), s.element.dequeue("tabs")
                        })
                    } : function(e, t) {
                        s.lis.removeClass("ui-tabs-selected ui-state-active"), t.addClass("ui-tabs-hide"), s.element.dequeue("tabs")
                    };
                this.anchors.bind(o.event + ".tabs", function() {
                    var t = this,
                        i = e(t).closest("li"),
                        n = s.panels.filter(":not(.ui-tabs-hide)"),
                        r = s.element.find(s._sanitizeSelector(t.hash));
                    if (i.hasClass("ui-tabs-selected") && !o.collapsible || i.hasClass("ui-state-disabled") || i.hasClass("ui-state-processing") || s.panels.filter(":animated").length || s._trigger("select", null, s._ui(this, r[0])) === !1) return this.blur(), !1;
                    if (o.selected = s.anchors.index(this), s.abort(), o.collapsible) {
                        if (i.hasClass("ui-tabs-selected")) return o.selected = -1, o.cookie && s._cookie(o.selected, o.cookie), s.element.queue("tabs", function() {
                            p(t, n)
                        }).dequeue("tabs"), this.blur(), !1;
                        if (!n.length) return o.cookie && s._cookie(o.selected, o.cookie), s.element.queue("tabs", function() {
                            d(t, r)
                        }), s.load(s.anchors.index(this)), this.blur(), !1
                    }
                    if (o.cookie && s._cookie(o.selected, o.cookie), !r.length) throw "jQuery UI Tabs: Mismatching fragment identifier.";
                    n.length && s.element.queue("tabs", function() {
                        p(t, n)
                    }), s.element.queue("tabs", function() {
                        d(t, r)
                    }), s.load(s.anchors.index(this)), e.browser.msie && this.blur()
                }), this.anchors.bind("click.tabs", function() {
                    return !1
                })
            },
            _getIndex: function(e) {
                return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$=" + e + "]"))), e
            },
            destroy: function() {
                var t = this.options;
                return this.abort(), this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"), this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.anchors.each(function() {
                    var t = e.data(this, "href.tabs");
                    t && (this.href = t);
                    var i = e(this).unbind(".tabs");
                    e.each(["href", "load", "cache"], function(e, t) {
                        i.removeData(t + ".tabs")
                    })
                }), this.lis.unbind(".tabs").add(this.panels).each(function() {
                    e.data(this, "destroy.tabs") ? e(this).remove() : e(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")
                }), t.cookie && this._cookie(null, t.cookie), this
            },
            add: function(t, n, s) {
                s === i && (s = this.anchors.length);
                var o = this,
                    r = this.options;
                n = e(r.tabTemplate.replace(/#\{href\}/g, t).replace(/#\{label\}/g, n)), t = t.indexOf("#") ? this._tabId(e("a", n)[0]) : t.replace("#", ""), n.addClass("ui-state-default ui-corner-top").data("destroy.tabs", !0);
                var a = o.element.find("#" + t);
                return a.length || (a = e(r.panelTemplate).attr("id", t).data("destroy.tabs", !0)), a.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"), s >= this.lis.length ? (n.appendTo(this.list), a.appendTo(this.list[0].parentNode)) : (n.insertBefore(this.lis[s]), a.insertBefore(this.panels[s])), r.disabled = e.map(r.disabled, function(e) {
                    return e >= s ? ++e : e
                }), this._tabify(), 1 == this.anchors.length && (r.selected = 0, n.addClass("ui-tabs-selected ui-state-active"), a.removeClass("ui-tabs-hide"), this.element.queue("tabs", function() {
                    o._trigger("show", null, o._ui(o.anchors[0], o.panels[0]))
                }), this.load(0)), this._trigger("add", null, this._ui(this.anchors[s], this.panels[s])), this
            },
            remove: function(t) {
                t = this._getIndex(t);
                var i = this.options,
                    n = this.lis.eq(t).remove(),
                    s = this.panels.eq(t).remove();
                return n.hasClass("ui-tabs-selected") && this.anchors.length > 1 && this.select(t + (t + 1 < this.anchors.length ? 1 : -1)), i.disabled = e.map(e.grep(i.disabled, function(e) {
                    return e != t
                }), function(e) {
                    return e >= t ? --e : e
                }), this._tabify(), this._trigger("remove", null, this._ui(n.find("a")[0], s[0])), this
            },
            enable: function(t) {
                t = this._getIndex(t);
                var i = this.options;
                if (e.inArray(t, i.disabled) != -1) return this.lis.eq(t).removeClass("ui-state-disabled"), i.disabled = e.grep(i.disabled, function(e) {
                    return e != t
                }), this._trigger("enable", null, this._ui(this.anchors[t], this.panels[t])), this
            },
            disable: function(e) {
                e = this._getIndex(e);
                var t = this.options;
                return e != t.selected && (this.lis.eq(e).addClass("ui-state-disabled"), t.disabled.push(e), t.disabled.sort(), this._trigger("disable", null, this._ui(this.anchors[e], this.panels[e]))), this
            },
            select: function(e) {
                if (e = this._getIndex(e), e == -1) {
                    if (!this.options.collapsible || this.options.selected == -1) return this;
                    e = this.options.selected
                }
                return this.anchors.eq(e).trigger(this.options.event + ".tabs"), this
            },
            load: function(t) {
                t = this._getIndex(t);
                var i = this,
                    n = this.options,
                    s = this.anchors.eq(t)[0],
                    o = e.data(s, "load.tabs");
                if (this.abort(), o && (0 === this.element.queue("tabs").length || !e.data(s, "cache.tabs"))) {
                    if (this.lis.eq(t).addClass("ui-state-processing"), n.spinner) {
                        var r = e("span", s);
                        r.data("label.tabs", r.html()).html(n.spinner)
                    }
                    return this.xhr = e.ajax(e.extend({}, n.ajaxOptions, {
                        url: o,
                        success: function(o, r) {
                            i.element.find(i._sanitizeSelector(s.hash)).html(o), i._cleanup(), n.cache && e.data(s, "cache.tabs", !0), i._trigger("load", null, i._ui(i.anchors[t], i.panels[t]));
                            try {
                                n.ajaxOptions.success(o, r)
                            } catch (e) {}
                        },
                        error: function(e, o) {
                            i._cleanup(), i._trigger("load", null, i._ui(i.anchors[t], i.panels[t]));
                            try {
                                n.ajaxOptions.error(e, o, t, s)
                            } catch (e) {}
                        }
                    })), i.element.dequeue("tabs"), this
                }
                this.element.dequeue("tabs")
            },
            abort: function() {
                return this.element.queue([]), this.panels.stop(!1, !0), this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2)), this.xhr && (this.xhr.abort(), delete this.xhr), this._cleanup(), this
            },
            url: function(e, t) {
                return this.anchors.eq(e).removeData("cache.tabs").data("load.tabs", t), this
            },
            length: function() {
                return this.anchors.length
            }
        }), e.extend(e.ui.tabs, {
            version: "1.8.16"
        }), e.extend(e.ui.tabs.prototype, {
            rotation: null,
            rotate: function(e, i) {
                var n = this,
                    s = this.options,
                    o = n._rotate || (n._rotate = function(t) {
                        clearTimeout(n.rotation), n.rotation = setTimeout(function() {
                            var e = s.selected;
                            n.select(++e < n.anchors.length ? e : 0)
                        }, e), t && t.stopPropagation()
                    });
                return i = n._unrotate || (n._unrotate = i ? function() {
                    t = s.selected, o()
                } : function(e) {
                    e.clientX && n.rotate(null)
                }), e ? (this.element.bind("tabsshow", o), this.anchors.bind(s.event + ".tabs", i), o()) : (clearTimeout(n.rotation), this.element.unbind("tabsshow", o), this.anchors.unbind(s.event + ".tabs", i), delete this._rotate, delete this._unrotate), this
            }
        })
    }(jQuery),
    function(d, C) {
        function M() {
            this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._inDialog = this._datepickerShowing = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, d.extend(this._defaults, this.regional[""]), this.dpDiv = N(d('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
        }

        function N(e) {
            return e.bind("mouseout", function(e) {
                e = d(e.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"),
                    e.length && e.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")
            }).bind("mouseover", function(t) {
                t = d(t.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"), !d.datepicker._isDisabledDatepicker(J.inline ? e.parent()[0] : J.input[0]) && t.length && (t.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t.addClass("ui-state-hover"), t.hasClass("ui-datepicker-prev") && t.addClass("ui-datepicker-prev-hover"), t.hasClass("ui-datepicker-next") && t.addClass("ui-datepicker-next-hover"))
            })
        }

        function H(e, t) {
            d.extend(e, t);
            for (var i in t) null != t[i] && t[i] != C || (e[i] = t[i]);
            return e
        }
        d.extend(d.ui, {
            datepicker: {
                version: "1.8.16"
            }
        });
        var B = (new Date).getTime(),
            J;
        d.extend(M.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            log: function() {
                this.debug && console.log.apply("", arguments)
            },
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(e) {
                return H(this._defaults, e || {}), this
            },
            _attachDatepicker: function(a, b) {
                var c = null;
                for (var e in this._defaults) {
                    var f = a.getAttribute("date:" + e);
                    if (f) {
                        c = c || {};
                        try {
                            c[e] = eval(f)
                        } catch (t) {
                            c[e] = f
                        }
                    }
                }
                e = a.nodeName.toLowerCase(), f = "div" == e || "span" == e, a.id || (this.uuid += 1, a.id = "dp" + this.uuid);
                var i = this._newInst(d(a), f);
                i.settings = d.extend({}, b || {}, c || {}), "input" == e ? this._connectDatepicker(a, i) : f && this._inlineDatepicker(a, i)
            },
            _newInst: function(e, t) {
                return {
                    id: e[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1"),
                    input: e,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: t,
                    dpDiv: t ? N(d('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
                }
            },
            _connectDatepicker: function(e, t) {
                var i = d(e);
                t.append = d([]), t.trigger = d([]), i.hasClass(this.markerClassName) || (this._attachments(i, t), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(e, i, n) {
                    t.settings[i] = n
                }).bind("getData.datepicker", function(e, i) {
                    return this._get(t, i)
                }), this._autoSize(t), d.data(e, "datepicker", t), t.settings.disabled && this._disableDatepicker(e))
            },
            _attachments: function(e, t) {
                var i = this._get(t, "appendText"),
                    n = this._get(t, "isRTL");
                if (t.append && t.append.remove(), i && (t.append = d('<span class="' + this._appendClass + '">' + i + "</span>"), e[n ? "before" : "after"](t.append)), e.unbind("focus", this._showDatepicker), t.trigger && t.trigger.remove(), i = this._get(t, "showOn"), "focus" != i && "both" != i || e.focus(this._showDatepicker), "button" == i || "both" == i) {
                    i = this._get(t, "buttonText");
                    var s = this._get(t, "buttonImage");
                    t.trigger = d(this._get(t, "buttonImageOnly") ? d("<img/>").addClass(this._triggerClass).attr({
                        src: s,
                        alt: i,
                        title: i
                    }) : d('<button type="button"></button>').addClass(this._triggerClass).html("" == s ? i : d("<img/>").attr({
                        src: s,
                        alt: i,
                        title: i
                    }))), e[n ? "before" : "after"](t.trigger), t.trigger.click(function() {
                        return d.datepicker._datepickerShowing && d.datepicker._lastInput == e[0] ? d.datepicker._hideDatepicker() : d.datepicker._showDatepicker(e[0]), !1
                    })
                }
            },
            _autoSize: function(e) {
                if (this._get(e, "autoSize") && !e.inline) {
                    var t = new Date(2009, 11, 20),
                        i = this._get(e, "dateFormat");
                    if (i.match(/[DM]/)) {
                        var n = function(e) {
                            for (var t = 0, i = 0, n = 0; n < e.length; n++) e[n].length > t && (t = e[n].length, i = n);
                            return i
                        };
                        t.setMonth(n(this._get(e, i.match(/MM/) ? "monthNames" : "monthNamesShort"))), t.setDate(n(this._get(e, i.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - t.getDay())
                    }
                    e.input.attr("size", this._formatDate(e, t).length)
                }
            },
            _inlineDatepicker: function(e, t) {
                var i = d(e);
                i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(t.dpDiv).bind("setData.datepicker", function(e, i, n) {
                    t.settings[i] = n
                }).bind("getData.datepicker", function(e, i) {
                    return this._get(t, i)
                }), d.data(e, "datepicker", t), this._setDate(t, this._getDefaultDate(t), !0), this._updateDatepicker(t), this._updateAlternate(t), t.settings.disabled && this._disableDatepicker(e), t.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function(e, t, i, n, s) {
                return e = this._dialogInst, e || (this.uuid += 1, this._dialogInput = d('<input type="text" id="dp' + this.uuid + '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>'), this._dialogInput.keydown(this._doKeyDown), d("body").append(this._dialogInput), e = this._dialogInst = this._newInst(this._dialogInput, !1), e.settings = {}, d.data(this._dialogInput[0], "datepicker", e)), H(e.settings, n || {}), t = t && t.constructor == Date ? this._formatDate(e, t) : t, this._dialogInput.val(t), this._pos = s ? s.length ? s : [s.pageX, s.pageY] : null, this._pos || (this._pos = [document.documentElement.clientWidth / 2 - 100 + (document.documentElement.scrollLeft || document.body.scrollLeft), document.documentElement.clientHeight / 2 - 150 + (document.documentElement.scrollTop || document.body.scrollTop)]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), e.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), d.blockUI && d.blockUI(this.dpDiv), d.data(this._dialogInput[0], "datepicker", e), this
            },
            _destroyDatepicker: function(e) {
                var t = d(e),
                    i = d.data(e, "datepicker");
                if (t.hasClass(this.markerClassName)) {
                    var n = e.nodeName.toLowerCase();
                    d.removeData(e, "datepicker"), "input" == n ? (i.append.remove(), i.trigger.remove(), t.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : "div" != n && "span" != n || t.removeClass(this.markerClassName).empty()
                }
            },
            _enableDatepicker: function(e) {
                var t = d(e),
                    i = d.data(e, "datepicker");
                if (t.hasClass(this.markerClassName)) {
                    var n = e.nodeName.toLowerCase();
                    "input" == n ? (e.disabled = !1, i.trigger.filter("button").each(function() {
                        this.disabled = !1
                    }).end().filter("img").css({
                        opacity: "1.0",
                        cursor: ""
                    })) : "div" != n && "span" != n || (t = t.children("." + this._inlineClass), t.children().removeClass("ui-state-disabled"), t.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")), this._disabledInputs = d.map(this._disabledInputs, function(t) {
                        return t == e ? null : t
                    })
                }
            },
            _disableDatepicker: function(e) {
                var t = d(e),
                    i = d.data(e, "datepicker");
                if (t.hasClass(this.markerClassName)) {
                    var n = e.nodeName.toLowerCase();
                    "input" == n ? (e.disabled = !0, i.trigger.filter("button").each(function() {
                        this.disabled = !0
                    }).end().filter("img").css({
                        opacity: "0.5",
                        cursor: "default"
                    })) : "div" != n && "span" != n || (t = t.children("." + this._inlineClass), t.children().addClass("ui-state-disabled"), t.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled")), this._disabledInputs = d.map(this._disabledInputs, function(t) {
                        return t == e ? null : t
                    }), this._disabledInputs[this._disabledInputs.length] = e
                }
            },
            _isDisabledDatepicker: function(e) {
                if (!e) return !1;
                for (var t = 0; t < this._disabledInputs.length; t++)
                    if (this._disabledInputs[t] == e) return !0;
                return !1
            },
            _getInst: function(e) {
                try {
                    return d.data(e, "datepicker")
                } catch (e) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function(e, t, i) {
                var n = this._getInst(e);
                if (2 == arguments.length && "string" == typeof t) return "defaults" == t ? d.extend({}, d.datepicker._defaults) : n ? "all" == t ? d.extend({}, n.settings) : this._get(n, t) : null;
                var s = t || {};
                if ("string" == typeof t && (s = {}, s[t] = i), n) {
                    this._curInst == n && this._hideDatepicker();
                    var o = this._getDateDatepicker(e, !0),
                        r = this._getMinMaxDate(n, "min"),
                        a = this._getMinMaxDate(n, "max");
                    H(n.settings, s), null !== r && s.dateFormat !== C && s.minDate === C && (n.settings.minDate = this._formatDate(n, r)), null !== a && s.dateFormat !== C && s.maxDate === C && (n.settings.maxDate = this._formatDate(n, a)), this._attachments(d(e), n), this._autoSize(n), this._setDate(n, o), this._updateAlternate(n), this._updateDatepicker(n)
                }
            },
            _changeDatepicker: function(e, t, i) {
                this._optionDatepicker(e, t, i)
            },
            _refreshDatepicker: function(e) {
                (e = this._getInst(e)) && this._updateDatepicker(e)
            },
            _setDateDatepicker: function(e, t) {
                (e = this._getInst(e)) && (this._setDate(e, t), this._updateDatepicker(e), this._updateAlternate(e))
            },
            _getDateDatepicker: function(e, t) {
                return (e = this._getInst(e)) && !e.inline && this._setDateFromField(e, t), e ? this._getDate(e) : null
            },
            _doKeyDown: function(e) {
                var t = d.datepicker._getInst(e.target),
                    i = !0,
                    n = t.dpDiv.is(".ui-datepicker-rtl");
                if (t._keyEvent = !0, d.datepicker._datepickerShowing) switch (e.keyCode) {
                    case 9:
                        d.datepicker._hideDatepicker(), i = !1;
                        break;
                    case 13:
                        return i = d("td." + d.datepicker._dayOverClass + ":not(." + d.datepicker._currentClass + ")", t.dpDiv), i[0] && d.datepicker._selectDay(e.target, t.selectedMonth, t.selectedYear, i[0]), (e = d.datepicker._get(t, "onSelect")) ? (i = d.datepicker._formatDate(t), e.apply(t.input ? t.input[0] : null, [i, t])) : d.datepicker._hideDatepicker(), !1;
                    case 27:
                        d.datepicker._hideDatepicker();
                        break;
                    case 33:
                        d.datepicker._adjustDate(e.target, e.ctrlKey ? -d.datepicker._get(t, "stepBigMonths") : -d.datepicker._get(t, "stepMonths"), "M");
                        break;
                    case 34:
                        d.datepicker._adjustDate(e.target, e.ctrlKey ? +d.datepicker._get(t, "stepBigMonths") : +d.datepicker._get(t, "stepMonths"), "M");
                        break;
                    case 35:
                        (e.ctrlKey || e.metaKey) && d.datepicker._clearDate(e.target), i = e.ctrlKey || e.metaKey;
                        break;
                    case 36:
                        (e.ctrlKey || e.metaKey) && d.datepicker._gotoToday(e.target), i = e.ctrlKey || e.metaKey;
                        break;
                    case 37:
                        (e.ctrlKey || e.metaKey) && d.datepicker._adjustDate(e.target, n ? 1 : -1, "D"), i = e.ctrlKey || e.metaKey, e.originalEvent.altKey && d.datepicker._adjustDate(e.target, e.ctrlKey ? -d.datepicker._get(t, "stepBigMonths") : -d.datepicker._get(t, "stepMonths"), "M");
                        break;
                    case 38:
                        (e.ctrlKey || e.metaKey) && d.datepicker._adjustDate(e.target, -7, "D"), i = e.ctrlKey || e.metaKey;
                        break;
                    case 39:
                        (e.ctrlKey || e.metaKey) && d.datepicker._adjustDate(e.target, n ? -1 : 1, "D"), i = e.ctrlKey || e.metaKey, e.originalEvent.altKey && d.datepicker._adjustDate(e.target, e.ctrlKey ? +d.datepicker._get(t, "stepBigMonths") : +d.datepicker._get(t, "stepMonths"), "M");
                        break;
                    case 40:
                        (e.ctrlKey || e.metaKey) && d.datepicker._adjustDate(e.target, 7, "D"), i = e.ctrlKey || e.metaKey;
                        break;
                    default:
                        i = !1
                } else 36 == e.keyCode && e.ctrlKey ? d.datepicker._showDatepicker(this) : i = !1;
                i && (e.preventDefault(), e.stopPropagation())
            },
            _doKeyPress: function(e) {
                var t = d.datepicker._getInst(e.target);
                if (d.datepicker._get(t, "constrainInput")) {
                    t = d.datepicker._possibleChars(d.datepicker._get(t, "dateFormat"));
                    var i = String.fromCharCode(e.charCode == C ? e.keyCode : e.charCode);
                    return e.ctrlKey || e.metaKey || i < " " || !t || t.indexOf(i) > -1
                }
            },
            _doKeyUp: function(e) {
                if (e = d.datepicker._getInst(e.target), e.input.val() != e.lastVal) try {
                    d.datepicker.parseDate(d.datepicker._get(e, "dateFormat"), e.input ? e.input.val() : null, d.datepicker._getFormatConfig(e)) && (d.datepicker._setDateFromField(e), d.datepicker._updateAlternate(e), d.datepicker._updateDatepicker(e))
                } catch (e) {
                    d.datepicker.log(e)
                }
                return !0
            },
            _showDatepicker: function(e) {
                if (e = e.target || e, "input" != e.nodeName.toLowerCase() && (e = d("input", e.parentNode)[0]), !d.datepicker._isDisabledDatepicker(e) && d.datepicker._lastInput != e) {
                    var t = d.datepicker._getInst(e);
                    d.datepicker._curInst && d.datepicker._curInst != t && (d.datepicker._datepickerShowing && d.datepicker._triggerOnClose(d.datepicker._curInst), d.datepicker._curInst.dpDiv.stop(!0, !0));
                    var i = d.datepicker._get(t, "beforeShow");
                    if (i = i ? i.apply(e, [e, t]) : {}, i !== !1) {
                        H(t.settings, i), t.lastVal = null, d.datepicker._lastInput = e, d.datepicker._setDateFromField(t), d.datepicker._inDialog && (e.value = ""), d.datepicker._pos || (d.datepicker._pos = d.datepicker._findPos(e), d.datepicker._pos[1] += e.offsetHeight);
                        var n = !1;
                        if (d(e).parents().each(function() {
                                return n |= "fixed" == d(this).css("position"), !n
                            }), n && d.browser.opera && (d.datepicker._pos[0] -= document.documentElement.scrollLeft, d.datepicker._pos[1] -= document.documentElement.scrollTop), i = {
                                left: d.datepicker._pos[0],
                                top: d.datepicker._pos[1]
                            }, d.datepicker._pos = null, t.dpDiv.empty(), t.dpDiv.css({
                                position: "absolute",
                                display: "block",
                                top: "-1000px"
                            }), d.datepicker._updateDatepicker(t), i = d.datepicker._checkOffset(t, i, n), t.dpDiv.css({
                                position: d.datepicker._inDialog && d.blockUI ? "static" : n ? "fixed" : "absolute",
                                display: "none",
                                left: i.left + "px",
                                top: i.top + "px"
                            }), !t.inline) {
                            i = d.datepicker._get(t, "showAnim");
                            var s = d.datepicker._get(t, "duration"),
                                o = function() {
                                    var e = t.dpDiv.find("iframe.ui-datepicker-cover");
                                    if (e.length) {
                                        var i = d.datepicker._getBorders(t.dpDiv);
                                        e.css({
                                            left: -i[0],
                                            top: -i[1],
                                            width: t.dpDiv.outerWidth(),
                                            height: t.dpDiv.outerHeight()
                                        })
                                    }
                                };
                            t.dpDiv.zIndex(d(e).zIndex() + 1), d.datepicker._datepickerShowing = !0, d.effects && d.effects[i] ? t.dpDiv.show(i, d.datepicker._get(t, "showOptions"), s, o) : t.dpDiv[i || "show"](i ? s : null, o), i && s || o(), t.input.is(":visible") && !t.input.is(":disabled") && t.input.focus(), d.datepicker._curInst = t
                        }
                    }
                }
            },
            _updateDatepicker: function(e) {
                this.maxRows = 4;
                var t = d.datepicker._getBorders(e.dpDiv);
                J = e, e.dpDiv.empty().append(this._generateHTML(e));
                var i = e.dpDiv.find("iframe.ui-datepicker-cover");
                if (i.length && i.css({
                        left: -t[0],
                        top: -t[1],
                        width: e.dpDiv.outerWidth(),
                        height: e.dpDiv.outerHeight()
                    }), e.dpDiv.find("." + this._dayOverClass + " a").mouseover(), t = this._getNumberOfMonths(e), i = t[1], e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), i > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + i).css("width", 17 * i + "em"), e.dpDiv[(1 != t[0] || 1 != t[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e == d.datepicker._curInst && d.datepicker._datepickerShowing && e.input && e.input.is(":visible") && !e.input.is(":disabled") && e.input[0] != document.activeElement && e.input.focus(), e.yearshtml) {
                    var n = e.yearshtml;
                    setTimeout(function() {
                        n === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), n = e.yearshtml = null
                    }, 0)
                }
            },
            _getBorders: function(e) {
                var t = function(e) {
                    return {
                        thin: 1,
                        medium: 2,
                        thick: 3
                    }[e] || e
                };
                return [parseFloat(t(e.css("border-left-width"))), parseFloat(t(e.css("border-top-width")))]
            },
            _checkOffset: function(e, t, i) {
                var n = e.dpDiv.outerWidth(),
                    s = e.dpDiv.outerHeight(),
                    o = e.input ? e.input.outerWidth() : 0,
                    r = e.input ? e.input.outerHeight() : 0,
                    a = document.documentElement.clientWidth + d(document).scrollLeft(),
                    l = document.documentElement.clientHeight + d(document).scrollTop();
                return t.left -= this._get(e, "isRTL") ? n - o : 0, t.left -= i && t.left == e.input.offset().left ? d(document).scrollLeft() : 0, t.top -= i && t.top == e.input.offset().top + r ? d(document).scrollTop() : 0, t.left -= Math.min(t.left, t.left + n > a && a > n ? Math.abs(t.left + n - a) : 0), t.top -= Math.min(t.top, t.top + s > l && l > s ? Math.abs(s + r) : 0), t
            },
            _findPos: function(e) {
                for (var t = this._get(this._getInst(e), "isRTL"); e && ("hidden" == e.type || 1 != e.nodeType || d.expr.filters.hidden(e));) e = e[t ? "previousSibling" : "nextSibling"];
                return e = d(e).offset(), [e.left, e.top]
            },
            _triggerOnClose: function(e) {
                var t = this._get(e, "onClose");
                t && t.apply(e.input ? e.input[0] : null, [e.input ? e.input.val() : "", e])
            },
            _hideDatepicker: function(e) {
                var t = this._curInst;
                if (t && (!e || t == d.data(e, "datepicker")) && this._datepickerShowing) {
                    e = this._get(t, "showAnim");
                    var i = this._get(t, "duration"),
                        n = function() {
                            d.datepicker._tidyDialog(t), this._curInst = null
                        };
                    d.effects && d.effects[e] ? t.dpDiv.hide(e, d.datepicker._get(t, "showOptions"), i, n) : t.dpDiv["slideDown" == e ? "slideUp" : "fadeIn" == e ? "fadeOut" : "hide"](e ? i : null, n), e || n(), d.datepicker._triggerOnClose(t), this._datepickerShowing = !1, this._lastInput = null, this._inDialog && (this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px"
                    }), d.blockUI && (d.unblockUI(), d("body").append(this.dpDiv))), this._inDialog = !1
                }
            },
            _tidyDialog: function(e) {
                e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
            _checkExternalClick: function(e) {
                d.datepicker._curInst && (e = d(e.target), e[0].id != d.datepicker._mainDivId && 0 == e.parents("#" + d.datepicker._mainDivId).length && !e.hasClass(d.datepicker.markerClassName) && !e.hasClass(d.datepicker._triggerClass) && d.datepicker._datepickerShowing && !(d.datepicker._inDialog && d.blockUI) && d.datepicker._hideDatepicker())
            },
            _adjustDate: function(e, t, i) {
                e = d(e);
                var n = this._getInst(e[0]);
                this._isDisabledDatepicker(e[0]) || (this._adjustInstDate(n, t + ("M" == i ? this._get(n, "showCurrentAtPos") : 0), i), this._updateDatepicker(n))
            },
            _gotoToday: function(e) {
                e = d(e);
                var t = this._getInst(e[0]);
                if (this._get(t, "gotoCurrent") && t.currentDay) t.selectedDay = t.currentDay, t.drawMonth = t.selectedMonth = t.currentMonth, t.drawYear = t.selectedYear = t.currentYear;
                else {
                    var i = new Date;
                    t.selectedDay = i.getDate(), t.drawMonth = t.selectedMonth = i.getMonth(), t.drawYear = t.selectedYear = i.getFullYear()
                }
                this._notifyChange(t), this._adjustDate(e)
            },
            _selectMonthYear: function(e, t, i) {
                e = d(e);
                var n = this._getInst(e[0]);
                n["selected" + ("M" == i ? "Month" : "Year")] = n["draw" + ("M" == i ? "Month" : "Year")] = parseInt(t.options[t.selectedIndex].value, 10), this._notifyChange(n), this._adjustDate(e)
            },
            _selectDay: function(e, t, i, n) {
                var s = d(e);
                d(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(s[0]) || (s = this._getInst(s[0]), s.selectedDay = s.currentDay = d("a", n).html(), s.selectedMonth = s.currentMonth = t, s.selectedYear = s.currentYear = i, this._selectDate(e, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear)))
            },
            _clearDate: function(e) {
                e = d(e), this._getInst(e[0]), this._selectDate(e, "")
            },
            _selectDate: function(e, t) {
                e = this._getInst(d(e)[0]), t = null != t ? t : this._formatDate(e), e.input && e.input.val(t), this._updateAlternate(e);
                var i = this._get(e, "onSelect");
                i ? i.apply(e.input ? e.input[0] : null, [t, e]) : e.input && e.input.trigger("change"), e.inline ? this._updateDatepicker(e) : (this._hideDatepicker(), this._lastInput = e.input[0], "object" != typeof e.input[0] && e.input.focus(), this._lastInput = null)
            },
            _updateAlternate: function(e) {
                var t = this._get(e, "altField");
                if (t) {
                    var i = this._get(e, "altFormat") || this._get(e, "dateFormat"),
                        n = this._getDate(e),
                        s = this.formatDate(i, n, this._getFormatConfig(e));
                    d(t).each(function() {
                        d(this).val(s)
                    })
                }
            },
            noWeekends: function(e) {
                return e = e.getDay(), [e > 0 && e < 6, ""]
            },
            iso8601Week: function(e) {
                e = new Date(e.getTime()), e.setDate(e.getDate() + 4 - (e.getDay() || 7));
                var t = e.getTime();
                return e.setMonth(0), e.setDate(1), Math.floor(Math.round((t - e) / 864e5) / 7) + 1
            },
            parseDate: function(e, t, i) {
                if (null == e || null == t) throw "Invalid arguments";
                if (t = "object" == typeof t ? t.toString() : t + "", "" == t) return null;
                var n = (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff;
                n = "string" != typeof n ? n : (new Date).getFullYear() % 100 + parseInt(n, 10);
                for (var s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, o = (i ? i.dayNames : null) || this._defaults.dayNames, r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, a = (i ? i.monthNames : null) || this._defaults.monthNames, l = i = -1, c = -1, u = -1, h = !1, p = function(t) {
                        return (t = y + 1 < e.length && e.charAt(y + 1) == t) && y++, t
                    }, f = function(e) {
                        var i = p(e);
                        if (e = new RegExp("^\\d{1," + ("@" == e ? 14 : "!" == e ? 20 : "y" == e && i ? 4 : "o" == e ? 3 : 2) + "}"), e = t.substring(v).match(e), !e) throw "Missing number at position " + v;
                        return v += e[0].length, parseInt(e[0], 10)
                    }, g = function(e, i, n) {
                        e = d.map(p(e) ? n : i, function(e, t) {
                            return [
                                [t, e]
                            ]
                        }).sort(function(e, t) {
                            return -(e[1].length - t[1].length)
                        });
                        var s = -1;
                        if (d.each(e, function(e, i) {
                                if (e = i[1], t.substr(v, e.length).toLowerCase() == e.toLowerCase()) return s = i[0], v += e.length, !1
                            }), s != -1) return s + 1;
                        throw "Unknown name at position " + v
                    }, m = function() {
                        if (t.charAt(v) != e.charAt(y)) throw "Unexpected literal at position " + v;
                        v++
                    }, v = 0, y = 0; y < e.length; y++)
                    if (h) "'" != e.charAt(y) || p("'") ? m() : h = !1;
                    else switch (e.charAt(y)) {
                        case "d":
                            c = f("d");
                            break;
                        case "D":
                            g("D", s, o);
                            break;
                        case "o":
                            u = f("o");
                            break;
                        case "m":
                            l = f("m");
                            break;
                        case "M":
                            l = g("M", r, a);
                            break;
                        case "y":
                            i = f("y");
                            break;
                        case "@":
                            var b = new Date(f("@"));
                            i = b.getFullYear(), l = b.getMonth() + 1, c = b.getDate();
                            break;
                        case "!":
                            b = new Date((f("!") - this._ticksTo1970) / 1e4), i = b.getFullYear(), l = b.getMonth() + 1, c = b.getDate();
                            break;
                        case "'":
                            p("'") ? m() : h = !0;
                            break;
                        default:
                            m()
                    }
                if (v < t.length) throw "Extra/unparsed characters found in date: " + t.substring(v);
                if (i == -1 ? i = (new Date).getFullYear() : i < 100 && (i += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (i <= n ? 0 : -100)), u > -1)
                    for (l = 1, c = u;;) {
                        if (n = this._getDaysInMonth(i, l - 1), c <= n) break;
                        l++, c -= n
                    }
                if (b = this._daylightSavingAdjust(new Date(i, l - 1, c)), b.getFullYear() != i || b.getMonth() + 1 != l || b.getDate() != c) throw "Invalid date";
                return b
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
            formatDate: function(e, t, i) {
                if (!t) return "";
                var n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    s = (i ? i.dayNames : null) || this._defaults.dayNames,
                    o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort;
                i = (i ? i.monthNames : null) || this._defaults.monthNames;
                var r = function(t) {
                        return (t = h + 1 < e.length && e.charAt(h + 1) == t) && h++, t
                    },
                    a = function(e, t, i) {
                        if (t = "" + t, r(e))
                            for (; t.length < i;) t = "0" + t;
                        return t
                    },
                    l = function(e, t, i, n) {
                        return r(e) ? n[t] : i[t]
                    },
                    c = "",
                    u = !1;
                if (t)
                    for (var h = 0; h < e.length; h++)
                        if (u) "'" != e.charAt(h) || r("'") ? c += e.charAt(h) : u = !1;
                        else switch (e.charAt(h)) {
                            case "d":
                                c += a("d", t.getDate(), 2);
                                break;
                            case "D":
                                c += l("D", t.getDay(), n, s);
                                break;
                            case "o":
                                c += a("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                c += a("m", t.getMonth() + 1, 2);
                                break;
                            case "M":
                                c += l("M", t.getMonth(), o, i);
                                break;
                            case "y":
                                c += r("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                                break;
                            case "@":
                                c += t.getTime();
                                break;
                            case "!":
                                c += 1e4 * t.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                r("'") ? c += "'" : u = !0;
                                break;
                            default:
                                c += e.charAt(h)
                        }
                return c
            },
            _possibleChars: function(e) {
                for (var t = "", i = !1, n = function(t) {
                        return (t = s + 1 < e.length && e.charAt(s + 1) == t) && s++, t
                    }, s = 0; s < e.length; s++)
                    if (i) "'" != e.charAt(s) || n("'") ? t += e.charAt(s) : i = !1;
                    else switch (e.charAt(s)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            t += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            n("'") ? t += "'" : i = !0;
                            break;
                        default:
                            t += e.charAt(s)
                    }
                return t
            },
            _get: function(e, t) {
                return e.settings[t] !== C ? e.settings[t] : this._defaults[t]
            },
            _setDateFromField: function(e, t) {
                if (e.input.val() != e.lastVal) {
                    var i, n, s = this._get(e, "dateFormat"),
                        o = e.lastVal = e.input ? e.input.val() : null;
                    i = n = this._getDefaultDate(e);
                    var r = this._getFormatConfig(e);
                    try {
                        i = this.parseDate(s, o, r) || n
                    } catch (e) {
                        this.log(e), o = t ? "" : o
                    }
                    e.selectedDay = i.getDate(), e.drawMonth = e.selectedMonth = i.getMonth(), e.drawYear = e.selectedYear = i.getFullYear(), e.currentDay = o ? i.getDate() : 0, e.currentMonth = o ? i.getMonth() : 0, e.currentYear = o ? i.getFullYear() : 0, this._adjustInstDate(e)
                }
            },
            _getDefaultDate: function(e) {
                return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
            },
            _determineDate: function(e, t, i) {
                var n = function(e) {
                        var t = new Date;
                        return t.setDate(t.getDate() + e), t
                    },
                    s = function(t) {
                        try {
                            return d.datepicker.parseDate(d.datepicker._get(e, "dateFormat"), t, d.datepicker._getFormatConfig(e))
                        } catch (e) {}
                        var i = (t.toLowerCase().match(/^c/) ? d.datepicker._getDate(e) : null) || new Date,
                            n = i.getFullYear(),
                            s = i.getMonth();
                        i = i.getDate();
                        for (var o = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, r = o.exec(t); r;) {
                            switch (r[2] || "d") {
                                case "d":
                                case "D":
                                    i += parseInt(r[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    i += 7 * parseInt(r[1], 10);
                                    break;
                                case "m":
                                case "M":
                                    s += parseInt(r[1], 10), i = Math.min(i, d.datepicker._getDaysInMonth(n, s));
                                    break;
                                case "y":
                                case "Y":
                                    n += parseInt(r[1], 10), i = Math.min(i, d.datepicker._getDaysInMonth(n, s))
                            }
                            r = o.exec(t)
                        }
                        return new Date(n, s, i)
                    };
                return (t = (t = null == t || "" === t ? i : "string" == typeof t ? s(t) : "number" == typeof t ? isNaN(t) ? i : n(t) : new Date(t.getTime())) && "Invalid Date" == t.toString() ? i : t) && (t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0)), this._daylightSavingAdjust(t)
            },
            _daylightSavingAdjust: function(e) {
                return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
            },
            _setDate: function(e, t, i) {
                var n = !t,
                    s = e.selectedMonth,
                    o = e.selectedYear;
                t = this._restrictMinMax(e, this._determineDate(e, t, new Date)), e.selectedDay = e.currentDay = t.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = t.getMonth(), e.drawYear = e.selectedYear = e.currentYear = t.getFullYear(), s == e.selectedMonth && o == e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(n ? "" : this._formatDate(e))
            },
            _getDate: function(e) {
                return !e.currentYear || e.input && "" == e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay))
            },
            _generateHTML: function(e) {
                var t = new Date;
                t = this._daylightSavingAdjust(new Date(t.getFullYear(), t.getMonth(), t.getDate()));
                var i = this._get(e, "isRTL"),
                    n = this._get(e, "showButtonPanel"),
                    s = this._get(e, "hideIfNoPrevNext"),
                    o = this._get(e, "navigationAsDateFormat"),
                    r = this._getNumberOfMonths(e),
                    a = this._get(e, "showCurrentAtPos"),
                    l = this._get(e, "stepMonths"),
                    c = 1 != r[0] || 1 != r[1],
                    u = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                    h = this._getMinMaxDate(e, "min"),
                    p = this._getMinMaxDate(e, "max");
                a = e.drawMonth - a;
                var f = e.drawYear;
                if (a < 0 && (a += 12, f--), p) {
                    var g = this._daylightSavingAdjust(new Date(p.getFullYear(), p.getMonth() - r[0] * r[1] + 1, p.getDate()));
                    for (g = h && g < h ? h : g; this._daylightSavingAdjust(new Date(f, a, 1)) > g;) a--, a < 0 && (a = 11, f--)
                }
                e.drawMonth = a, e.drawYear = f, g = this._get(e, "prevText"), g = o ? this.formatDate(g, this._daylightSavingAdjust(new Date(f, a - l, 1)), this._getFormatConfig(e)) : g, g = this._canAdjustMonth(e, -1, f, a) ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + B + ".datepicker._adjustDate('#" + e.id + "', -" + l + ", 'M');\" title=\"" + g + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + g + "</span></a>" : s ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + g + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + g + "</span></a>";
                var m = this._get(e, "nextText");
                m = o ? this.formatDate(m, this._daylightSavingAdjust(new Date(f, a + l, 1)), this._getFormatConfig(e)) : m, s = this._canAdjustMonth(e, 1, f, a) ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + B + ".datepicker._adjustDate('#" + e.id + "', +" + l + ", 'M');\" title=\"" + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + m + "</span></a>" : s ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + m + "</span></a>", l = this._get(e, "currentText"), m = this._get(e, "gotoCurrent") && e.currentDay ? u : t, l = o ? this.formatDate(l, m, this._getFormatConfig(e)) : l, o = e.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + B + '.datepicker._hideDatepicker();">' + this._get(e, "closeText") + "</button>", n = n ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (i ? o : "") + (this._isInRange(e, m) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + B + ".datepicker._gotoToday('#" + e.id + "');\">" + l + "</button>" : "") + (i ? "" : o) + "</div>" : "", o = parseInt(this._get(e, "firstDay"), 10), o = isNaN(o) ? 0 : o, l = this._get(e, "showWeek"), m = this._get(e, "dayNames"), this._get(e, "dayNamesShort");
                var v = this._get(e, "dayNamesMin"),
                    y = this._get(e, "monthNames"),
                    b = this._get(e, "monthNamesShort"),
                    w = this._get(e, "beforeShowDay"),
                    x = this._get(e, "showOtherMonths"),
                    _ = this._get(e, "selectOtherMonths");
                this._get(e, "calculateWeek");
                for (var k = this._getDefaultDate(e), C = "", S = 0; S < r[0]; S++) {
                    var T = "";
                    this.maxRows = 4;
                    for (var D = 0; D < r[1]; D++) {
                        var E = this._daylightSavingAdjust(new Date(f, a, e.selectedDay)),
                            P = " ui-corner-all",
                            M = "";
                        if (c) {
                            if (M += '<div class="ui-datepicker-group', r[1] > 1) switch (D) {
                                case 0:
                                    M += " ui-datepicker-group-first", P = " ui-corner-" + (i ? "right" : "left");
                                    break;
                                case r[1] - 1:
                                    M += " ui-datepicker-group-last", P = " ui-corner-" + (i ? "left" : "right");
                                    break;
                                default:
                                    M += " ui-datepicker-group-middle", P = ""
                            }
                            M += '">'
                        }
                        M += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + P + '">' + (/all|left/.test(P) && 0 == S ? i ? s : g : "") + (/all|right/.test(P) && 0 == S ? i ? g : s : "") + this._generateMonthYearHeader(e, a, f, h, p, S > 0 || D > 0, y, b) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
                        var A = l ? '<th class="ui-datepicker-week-col">' + this._get(e, "weekHeader") + "</th>" : "";
                        for (P = 0; P < 7; P++) {
                            var I = (P + o) % 7;
                            A += "<th" + ((P + o + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + m[I] + '">' + v[I] + "</span></th>"
                        }
                        M += A + "</tr></thead><tbody>", A = this._getDaysInMonth(f, a), f == e.selectedYear && a == e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, A)), P = (this._getFirstDayOfMonth(f, a) - o + 7) % 7, A = Math.ceil((P + A) / 7), this.maxRows = A = c && this.maxRows > A ? this.maxRows : A, I = this._daylightSavingAdjust(new Date(f, a, 1 - P));
                        for (var N = 0; N < A; N++) {
                            M += "<tr>";
                            var z = l ? '<td class="ui-datepicker-week-col">' + this._get(e, "calculateWeek")(I) + "</td>" : "";
                            for (P = 0; P < 7; P++) {
                                var O = w ? w.apply(e.input ? e.input[0] : null, [I]) : [!0, ""],
                                    j = I.getMonth() != a,
                                    H = j && !_ || !O[0] || h && I < h || p && I > p;
                                z += '<td class="' + ((P + o + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (j ? " ui-datepicker-other-month" : "") + (I.getTime() == E.getTime() && a == e.selectedMonth && e._keyEvent || k.getTime() == I.getTime() && k.getTime() == E.getTime() ? " " + this._dayOverClass : "") + (H ? " " + this._unselectableClass + " ui-state-disabled" : "") + (j && !x ? "" : " " + O[1] + (I.getTime() == u.getTime() ? " " + this._currentClass : "") + (I.getTime() == t.getTime() ? " ui-datepicker-today" : "")) + '"' + (j && !x || !O[2] ? "" : ' title="' + O[2] + '"') + (H ? "" : ' onclick="DP_jQuery_' + B + ".datepicker._selectDay('#" + e.id + "'," + I.getMonth() + "," + I.getFullYear() + ', this);return false;"') + ">" + (j && !x ? "&#xa0;" : H ? '<span class="ui-state-default">' + I.getDate() + "</span>" : '<a class="ui-state-default' + (I.getTime() == t.getTime() ? " ui-state-highlight" : "") + (I.getTime() == u.getTime() ? " ui-state-active" : "") + (j ? " ui-priority-secondary" : "") + '" href="#">' + I.getDate() + "</a>") + "</td>", I.setDate(I.getDate() + 1), I = this._daylightSavingAdjust(I)
                            }
                            M += z + "</tr>"
                        }
                        a++, a > 11 && (a = 0, f++), M += "</tbody></table>" + (c ? "</div>" + (r[0] > 0 && D == r[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), T += M
                    }
                    C += T
                }
                return C += n + (d.browser.msie && parseInt(d.browser.version, 10) < 7 && !e.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), e._keyEvent = !1, C
            },
            _generateMonthYearHeader: function(e, t, i, n, s, o, r, a) {
                var l = this._get(e, "changeMonth"),
                    c = this._get(e, "changeYear"),
                    u = this._get(e, "showMonthAfterYear"),
                    h = '<div class="ui-datepicker-title">',
                    d = "";
                if (o || !l) d += '<span class="ui-datepicker-month">' + r[t] + "</span>";
                else {
                    r = n && n.getFullYear() == i;
                    var p = s && s.getFullYear() == i;
                    d += '<select class="ui-datepicker-month" onchange="DP_jQuery_' + B + ".datepicker._selectMonthYear('#" + e.id + "', this, 'M');\" >";
                    for (var f = 0; f < 12; f++)(!r || f >= n.getMonth()) && (!p || f <= s.getMonth()) && (d += '<option value="' + f + '"' + (f == t ? ' selected="selected"' : "") + ">" + a[f] + "</option>");
                    d += "</select>"
                }
                if (u || (h += d + (!o && l && c ? "" : "&#xa0;")), !e.yearshtml)
                    if (e.yearshtml = "", o || !c) h += '<span class="ui-datepicker-year">' + i + "</span>";
                    else {
                        a = this._get(e, "yearRange").split(":");
                        var g = (new Date).getFullYear();
                        for (r = function(e) {
                                return e = e.match(/c[+-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+-].*/) ? g + parseInt(e, 10) : parseInt(e, 10), isNaN(e) ? g : e
                            }, t = r(a[0]), a = Math.max(t, r(a[1] || "")), t = n ? Math.max(t, n.getFullYear()) : t, a = s ? Math.min(a, s.getFullYear()) : a, e.yearshtml += '<select class="ui-datepicker-year" onchange="DP_jQuery_' + B + ".datepicker._selectMonthYear('#" + e.id + "', this, 'Y');\" >"; t <= a; t++) e.yearshtml += '<option value="' + t + '"' + (t == i ? ' selected="selected"' : "") + ">" + t + "</option>";
                        e.yearshtml += "</select>", h += e.yearshtml, e.yearshtml = null
                    }
                return h += this._get(e, "yearSuffix"), u && (h += (!o && l && c ? "" : "&#xa0;") + d), h += "</div>"
            },
            _adjustInstDate: function(e, t, i) {
                var n = e.drawYear + ("Y" == i ? t : 0),
                    s = e.drawMonth + ("M" == i ? t : 0);
                t = Math.min(e.selectedDay, this._getDaysInMonth(n, s)) + ("D" == i ? t : 0), n = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(n, s, t))), e.selectedDay = n.getDate(), e.drawMonth = e.selectedMonth = n.getMonth(), e.drawYear = e.selectedYear = n.getFullYear(), "M" != i && "Y" != i || this._notifyChange(e)
            },
            _restrictMinMax: function(e, t) {
                var i = this._getMinMaxDate(e, "min");
                return e = this._getMinMaxDate(e, "max"), t = i && t < i ? i : t, t = e && t > e ? e : t
            },
            _notifyChange: function(e) {
                var t = this._get(e, "onChangeMonthYear");
                t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
            },
            _getNumberOfMonths: function(e) {
                return e = this._get(e, "numberOfMonths"), null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
            },
            _getMinMaxDate: function(e, t) {
                return this._determineDate(e, this._get(e, t + "Date"), null)
            },
            _getDaysInMonth: function(e, t) {
                return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
            },
            _getFirstDayOfMonth: function(e, t) {
                return new Date(e, t, 1).getDay()
            },
            _canAdjustMonth: function(e, t, i, n) {
                var s = this._getNumberOfMonths(e);
                return i = this._daylightSavingAdjust(new Date(i, n + (t < 0 ? t : s[0] * s[1]), 1)), t < 0 && i.setDate(this._getDaysInMonth(i.getFullYear(), i.getMonth())), this._isInRange(e, i)
            },
            _isInRange: function(e, t) {
                var i = this._getMinMaxDate(e, "min");
                return e = this._getMinMaxDate(e, "max"), (!i || t.getTime() >= i.getTime()) && (!e || t.getTime() <= e.getTime())
            },
            _getFormatConfig: function(e) {
                var t = this._get(e, "shortYearCutoff");
                return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                    shortYearCutoff: t,
                    dayNamesShort: this._get(e, "dayNamesShort"),
                    dayNames: this._get(e, "dayNames"),
                    monthNamesShort: this._get(e, "monthNamesShort"),
                    monthNames: this._get(e, "monthNames")
                }
            },
            _formatDate: function(e, t, i, n) {
                return t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear), t = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(n, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay)), this.formatDate(this._get(e, "dateFormat"), t, this._getFormatConfig(e))
            }
        }), d.fn.datepicker = function(e) {
            if (!this.length) return this;
            d.datepicker.initialized || (d(document).mousedown(d.datepicker._checkExternalClick).find("body").append(d.datepicker.dpDiv), d.datepicker.initialized = !0);
            var t = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof e || "isDisabled" != e && "getDate" != e && "widget" != e ? "option" == e && 2 == arguments.length && "string" == typeof arguments[1] ? d.datepicker["_" + e + "Datepicker"].apply(d.datepicker, [this[0]].concat(t)) : this.each(function() {
                "string" == typeof e ? d.datepicker["_" + e + "Datepicker"].apply(d.datepicker, [this].concat(t)) : d.datepicker._attachDatepicker(this, e)
            }) : d.datepicker["_" + e + "Datepicker"].apply(d.datepicker, [this[0]].concat(t))
        }, d.datepicker = new M, d.datepicker.initialized = !1, d.datepicker.uuid = (new Date).getTime(), d.datepicker.version = "1.8.16", window["DP_jQuery_" + B] = d
    }(jQuery),
    function(e, t) {
        e.widget("ui.progressbar", {
            options: {
                value: 0,
                max: 100
            },
            min: 0,
            _create: function() {
                this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                    role: "progressbar",
                    "aria-valuemin": this.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._value()
                }), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue()
            },
            destroy: function() {
                this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove(), e.Widget.prototype.destroy.apply(this, arguments)
            },
            value: function(e) {
                return e === t ? this._value() : (this._setOption("value", e), this)
            },
            _setOption: function(t, i) {
                "value" === t && (this.options.value = i, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), e.Widget.prototype._setOption.apply(this, arguments)
            },
            _value: function() {
                var e = this.options.value;
                return "number" != typeof e && (e = 0), Math.min(this.options.max, Math.max(this.min, e))
            },
            _percentage: function() {
                return 100 * this._value() / this.options.max
            },
            _refreshValue: function() {
                var e = this.value(),
                    t = this._percentage();
                this.oldValue !== e && (this.oldValue = e, this._trigger("change")), this.valueDiv.toggle(e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(t.toFixed(0) + "%"), this.element.attr("aria-valuenow", e)
            }
        }), e.extend(e.ui.progressbar, {
            version: "1.8.16"
        })
    }(jQuery), jQuery.effects || function(e, t) {
        function i(t) {
            var i;
            return t && t.constructor == Array && 3 == t.length ? t : (i = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t)) ? [parseInt(i[1], 10), parseInt(i[2], 10), parseInt(i[3], 10)] : (i = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t)) ? [2.55 * parseFloat(i[1]), 2.55 * parseFloat(i[2]), 2.55 * parseFloat(i[3])] : (i = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t)) ? [parseInt(i[1], 16), parseInt(i[2], 16), parseInt(i[3], 16)] : (i = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t)) ? [parseInt(i[1] + i[1], 16), parseInt(i[2] + i[2], 16), parseInt(i[3] + i[3], 16)] : /rgba\(0, 0, 0, 0\)/.exec(t) ? c.transparent : c[e.trim(t).toLowerCase()]
        }

        function n(t, n) {
            var s;
            do {
                if (s = e.curCSS(t, n), "" != s && "transparent" != s || e.nodeName(t, "body")) break;
                n = "backgroundColor"
            } while (t = t.parentNode);
            return i(s)
        }

        function s() {
            var e, t, i = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
                n = {};
            if (i && i.length && i[0] && i[i[0]])
                for (var s = i.length; s--;) e = i[s], "string" == typeof i[e] && (t = e.replace(/\-(\w)/g, function(e, t) {
                    return t.toUpperCase()
                }), n[t] = i[e]);
            else
                for (e in i) "string" == typeof i[e] && (n[e] = i[e]);
            return n
        }

        function o(t) {
            var i, n;
            for (i in t) n = t[i], (null == n || e.isFunction(n) || i in h || /scrollbar/.test(i) || !/color/i.test(i) && isNaN(parseFloat(n))) && delete t[i];
            return t
        }

        function r(e, t) {
            var i, n = {
                _: 0
            };
            for (i in t) e[i] != t[i] && (n[i] = t[i]);
            return n
        }

        function a(t, i, n, s) {
            return "object" == typeof t && (s = i, n = null, i = t, t = i.effect), e.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || e.fx.speeds[i]) && (s = n, n = i, i = {}), e.isFunction(n) && (s = n, n = null), i = i || {}, n = n || i.duration, n = e.fx.off ? 0 : "number" == typeof n ? n : n in e.fx.speeds ? e.fx.speeds[n] : e.fx.speeds._default, s = s || i.complete, [t, i, n, s]
        }

        function l(t) {
            return !(t && "number" != typeof t && !e.fx.speeds[t]) || "string" == typeof t && !e.effects[t]
        }
        e.effects = {}, e.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function(t, s) {
            e.fx.step[s] = function(e) {
                e.colorInit || (e.start = n(e.elem, s), e.end = i(e.end), e.colorInit = !0), e.elem.style[s] = "rgb(" + Math.max(Math.min(parseInt(e.pos * (e.end[0] - e.start[0]) + e.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(e.pos * (e.end[1] - e.start[1]) + e.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(e.pos * (e.end[2] - e.start[2]) + e.start[2], 10), 255), 0) + ")"
            }
        });
        var c = {
                aqua: [0, 255, 255],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                black: [0, 0, 0],
                blue: [0, 0, 255],
                brown: [165, 42, 42],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgrey: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkviolet: [148, 0, 211],
                fuchsia: [255, 0, 255],
                gold: [255, 215, 0],
                green: [0, 128, 0],
                indigo: [75, 0, 130],
                khaki: [240, 230, 140],
                lightblue: [173, 216, 230],
                lightcyan: [224, 255, 255],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                navy: [0, 0, 128],
                olive: [128, 128, 0],
                orange: [255, 165, 0],
                pink: [255, 192, 203],
                purple: [128, 0, 128],
                violet: [128, 0, 128],
                red: [255, 0, 0],
                silver: [192, 192, 192],
                white: [255, 255, 255],
                yellow: [255, 255, 0],
                transparent: [255, 255, 255]
            },
            u = ["add", "remove", "toggle"],
            h = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
        e.effects.animateClass = function(t, i, n, a) {
            return e.isFunction(n) && (a = n, n = null), this.queue(function() {
                var l, c = e(this),
                    h = c.attr("style") || " ",
                    d = o(s.call(this)),
                    p = c.attr("class");
                e.each(u, function(e, i) {
                    t[i] && c[i + "Class"](t[i])
                }), l = o(s.call(this)), c.attr("class", p), c.animate(r(d, l), {
                    queue: !1,
                    duration: i,
                    easing: n,
                    complete: function() {
                        e.each(u, function(e, i) {
                            t[i] && c[i + "Class"](t[i])
                        }), "object" == typeof c.attr("style") ? (c.attr("style").cssText = "", c.attr("style").cssText = h) : c.attr("style", h), a && a.apply(this, arguments), e.dequeue(this)
                    }
                })
            })
        }, e.fn.extend({
            _addClass: e.fn.addClass,
            addClass: function(t, i, n, s) {
                return i ? e.effects.animateClass.apply(this, [{
                    add: t
                }, i, n, s]) : this._addClass(t)
            },
            _removeClass: e.fn.removeClass,
            removeClass: function(t, i, n, s) {
                return i ? e.effects.animateClass.apply(this, [{
                    remove: t
                }, i, n, s]) : this._removeClass(t)
            },
            _toggleClass: e.fn.toggleClass,
            toggleClass: function(i, n, s, o, r) {
                return "boolean" == typeof n || n === t ? s ? e.effects.animateClass.apply(this, [n ? {
                    add: i
                } : {
                    remove: i
                }, s, o, r]) : this._toggleClass(i, n) : e.effects.animateClass.apply(this, [{
                    toggle: i
                }, n, s, o])
            },
            switchClass: function(t, i, n, s, o) {
                return e.effects.animateClass.apply(this, [{
                    add: i,
                    remove: t
                }, n, s, o])
            }
        }), e.extend(e.effects, {
            version: "1.8.16",
            save: function(e, t) {
                for (var i = 0; i < t.length; i++) null !== t[i] && e.data("ec.storage." + t[i], e[0].style[t[i]])
            },
            restore: function(e, t) {
                for (var i = 0; i < t.length; i++) null !== t[i] && e.css(t[i], e.data("ec.storage." + t[i]))
            },
            setMode: function(e, t) {
                return "toggle" == t && (t = e.is(":hidden") ? "show" : "hide"), t
            },
            getBaseline: function(e, t) {
                var i;
                switch (e[0]) {
                    case "top":
                        i = 0;
                        break;
                    case "middle":
                        i = .5;
                        break;
                    case "bottom":
                        i = 1;
                        break;
                    default:
                        i = e[0] / t.height
                }
                switch (e[1]) {
                    case "left":
                        e = 0;
                        break;
                    case "center":
                        e = .5;
                        break;
                    case "right":
                        e = 1;
                        break;
                    default:
                        e = e[1] / t.width
                }
                return {
                    x: e,
                    y: i
                }
            },
            createWrapper: function(t) {
                if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                var i = {
                        width: t.outerWidth(!0),
                        height: t.outerHeight(!0),
                        "float": t.css("float")
                    },
                    n = e("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }),
                    s = document.activeElement;
                return t.wrap(n), (t[0] === s || e.contains(t[0], s)) && e(s).focus(), n = t.parent(), "static" == t.css("position") ? (n.css({
                    position: "relative"
                }), t.css({
                    position: "relative"
                })) : (e.extend(i, {
                    position: t.css("position"),
                    zIndex: t.css("z-index")
                }), e.each(["top", "left", "bottom", "right"], function(e, n) {
                    i[n] = t.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
                }), t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), n.css(i).show()
            },
            removeWrapper: function(t) {
                var i, n = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") ? (i = t.parent().replaceWith(t), (t[0] === n || e.contains(t[0], n)) && e(n).focus(), i) : t
            },
            setTransition: function(t, i, n, s) {
                return s = s || {}, e.each(i, function(e, i) {
                    unit = t.cssUnit(i), unit[0] > 0 && (s[i] = unit[0] * n + unit[1])
                }), s
            }
        }), e.fn.extend({
            effect: function(t) {
                var i = a.apply(this, arguments),
                    n = {
                        options: i[1],
                        duration: i[2],
                        callback: i[3]
                    };
                i = n.options.mode;
                var s = e.effects[t];
                return e.fx.off || !s ? i ? this[i](n.duration, n.callback) : this.each(function() {
                    n.callback && n.callback.call(this)
                }) : s.call(this, n)
            },
            _show: e.fn.show,
            show: function(e) {
                if (l(e)) return this._show.apply(this, arguments);
                var t = a.apply(this, arguments);
                return t[1].mode = "show", this.effect.apply(this, t)
            },
            _hide: e.fn.hide,
            hide: function(e) {
                if (l(e)) return this._hide.apply(this, arguments);
                var t = a.apply(this, arguments);
                return t[1].mode = "hide", this.effect.apply(this, t)
            },
            __toggle: e.fn.toggle,
            toggle: function(t) {
                if (l(t) || "boolean" == typeof t || e.isFunction(t)) return this.__toggle.apply(this, arguments);
                var i = a.apply(this, arguments);
                return i[1].mode = "toggle", this.effect.apply(this, i)
            },
            cssUnit: function(t) {
                var i = this.css(t),
                    n = [];
                return e.each(["em", "px", "%", "pt"], function(e, t) {
                    i.indexOf(t) > 0 && (n = [parseFloat(i), t])
                }), n
            }
        }), e.easing.jswing = e.easing.swing, e.extend(e.easing, {
            def: "easeOutQuad",
            swing: function(t, i, n, s, o) {
                return e.easing[e.easing.def](t, i, n, s, o)
            },
            easeInQuad: function(e, t, i, n, s) {
                return n * (t /= s) * t + i
            },
            easeOutQuad: function(e, t, i, n, s) {
                return -n * (t /= s) * (t - 2) + i
            },
            easeInOutQuad: function(e, t, i, n, s) {
                return (t /= s / 2) < 1 ? n / 2 * t * t + i : -n / 2 * (--t * (t - 2) - 1) + i
            },
            easeInCubic: function(e, t, i, n, s) {
                return n * (t /= s) * t * t + i
            },
            easeOutCubic: function(e, t, i, n, s) {
                return n * ((t = t / s - 1) * t * t + 1) + i
            },
            easeInOutCubic: function(e, t, i, n, s) {
                return (t /= s / 2) < 1 ? n / 2 * t * t * t + i : n / 2 * ((t -= 2) * t * t + 2) + i
            },
            easeInQuart: function(e, t, i, n, s) {
                return n * (t /= s) * t * t * t + i
            },
            easeOutQuart: function(e, t, i, n, s) {
                return -n * ((t = t / s - 1) * t * t * t - 1) + i
            },
            easeInOutQuart: function(e, t, i, n, s) {
                return (t /= s / 2) < 1 ? n / 2 * t * t * t * t + i : -n / 2 * ((t -= 2) * t * t * t - 2) + i
            },
            easeInQuint: function(e, t, i, n, s) {
                return n * (t /= s) * t * t * t * t + i
            },
            easeOutQuint: function(e, t, i, n, s) {
                return n * ((t = t / s - 1) * t * t * t * t + 1) + i
            },
            easeInOutQuint: function(e, t, i, n, s) {
                return (t /= s / 2) < 1 ? n / 2 * t * t * t * t * t + i : n / 2 * ((t -= 2) * t * t * t * t + 2) + i
            },
            easeInSine: function(e, t, i, n, s) {
                return -n * Math.cos(t / s * (Math.PI / 2)) + n + i
            },
            easeOutSine: function(e, t, i, n, s) {
                return n * Math.sin(t / s * (Math.PI / 2)) + i
            },
            easeInOutSine: function(e, t, i, n, s) {
                return -n / 2 * (Math.cos(Math.PI * t / s) - 1) + i
            },
            easeInExpo: function(e, t, i, n, s) {
                return 0 == t ? i : n * Math.pow(2, 10 * (t / s - 1)) + i
            },
            easeOutExpo: function(e, t, i, n, s) {
                return t == s ? i + n : n * (-Math.pow(2, -10 * t / s) + 1) + i
            },
            easeInOutExpo: function(e, t, i, n, s) {
                return 0 == t ? i : t == s ? i + n : (t /= s / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + i : n / 2 * (-Math.pow(2, -10 * --t) + 2) + i
            },
            easeInCirc: function(e, t, i, n, s) {
                return -n * (Math.sqrt(1 - (t /= s) * t) - 1) + i
            },
            easeOutCirc: function(e, t, i, n, s) {
                return n * Math.sqrt(1 - (t = t / s - 1) * t) + i
            },
            easeInOutCirc: function(e, t, i, n, s) {
                return (t /= s / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + i : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
            },
            easeInElastic: function(e, t, i, n, s) {
                e = 1.70158;
                var o = 0,
                    r = n;
                return 0 == t ? i : 1 == (t /= s) ? i + n : (o || (o = .3 * s), r < Math.abs(n) ? (r = n, e = o / 4) : e = o / (2 * Math.PI) * Math.asin(n / r), -(r * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * s - e) * Math.PI / o)) + i)
            },
            easeOutElastic: function(e, t, i, n, s) {
                e = 1.70158;
                var o = 0,
                    r = n;
                return 0 == t ? i : 1 == (t /= s) ? i + n : (o || (o = .3 * s), r < Math.abs(n) ? (r = n, e = o / 4) : e = o / (2 * Math.PI) * Math.asin(n / r), r * Math.pow(2, -10 * t) * Math.sin(2 * (t * s - e) * Math.PI / o) + n + i)
            },
            easeInOutElastic: function(e, t, i, n, s) {
                e = 1.70158;
                var o = 0,
                    r = n;
                return 0 == t ? i : 2 == (t /= s / 2) ? i + n : (o || (o = .3 * s * 1.5), r < Math.abs(n) ? (r = n, e = o / 4) : e = o / (2 * Math.PI) * Math.asin(n / r), t < 1 ? -.5 * r * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * s - e) * Math.PI / o) + i : r * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t * s - e) * Math.PI / o) * .5 + n + i)
            },
            easeInBack: function(e, i, n, s, o, r) {
                return r == t && (r = 1.70158), s * (i /= o) * i * ((r + 1) * i - r) + n
            },
            easeOutBack: function(e, i, n, s, o, r) {
                return r == t && (r = 1.70158), s * ((i = i / o - 1) * i * ((r + 1) * i + r) + 1) + n
            },
            easeInOutBack: function(e, i, n, s, o, r) {
                return r == t && (r = 1.70158), (i /= o / 2) < 1 ? s / 2 * i * i * (((r *= 1.525) + 1) * i - r) + n : s / 2 * ((i -= 2) * i * (((r *= 1.525) + 1) * i + r) + 2) + n
            },
            easeInBounce: function(t, i, n, s, o) {
                return s - e.easing.easeOutBounce(t, o - i, 0, s, o) + n
            },
            easeOutBounce: function(e, t, i, n, s) {
                return (t /= s) < 1 / 2.75 ? 7.5625 * n * t * t + i : t < 2 / 2.75 ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : t < 2.5 / 2.75 ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
            },
            easeInOutBounce: function(t, i, n, s, o) {
                return i < o / 2 ? .5 * e.easing.easeInBounce(t, 2 * i, 0, s, o) + n : .5 * e.easing.easeOutBounce(t, 2 * i - o, 0, s, o) + .5 * s + n
            }
        })
    }(jQuery),
    function(e) {
        e.effects.blind = function(t) {
            return this.queue(function() {
                var i = e(this),
                    n = ["position", "top", "bottom", "left", "right"],
                    s = e.effects.setMode(i, t.options.mode || "hide"),
                    o = t.options.direction || "vertical";
                e.effects.save(i, n), i.show();
                var r = e.effects.createWrapper(i).css({
                        overflow: "hidden"
                    }),
                    a = "vertical" == o ? "height" : "width";
                o = "vertical" == o ? r.height() : r.width(), "show" == s && r.css(a, 0);
                var l = {};
                l[a] = "show" == s ? o : 0, r.animate(l, t.duration, t.options.easing, function() {
                    "hide" == s && i.hide(), e.effects.restore(i, n), e.effects.removeWrapper(i), t.callback && t.callback.apply(i[0], arguments), i.dequeue()
                })
            })
        }
    }(jQuery),
    function(e) {
        e.effects.bounce = function(t) {
            return this.queue(function() {
                var i = e(this),
                    n = ["position", "top", "bottom", "left", "right"],
                    s = e.effects.setMode(i, t.options.mode || "effect"),
                    o = t.options.direction || "up",
                    r = t.options.distance || 20,
                    a = t.options.times || 5,
                    l = t.duration || 250;
                /show|hide/.test(s) && n.push("opacity"), e.effects.save(i, n), i.show(), e.effects.createWrapper(i);
                var c = "up" == o || "down" == o ? "top" : "left";
                if (o = "up" == o || "left" == o ? "pos" : "neg", r = t.options.distance || ("top" == c ? i.outerHeight({
                        margin: !0
                    }) / 3 : i.outerWidth({
                        margin: !0
                    }) / 3), "show" == s && i.css("opacity", 0).css(c, "pos" == o ? -r : r), "hide" == s && (r /= 2 * a), "hide" != s && a--, "show" == s) {
                    var u = {
                        opacity: 1
                    };
                    u[c] = ("pos" == o ? "+=" : "-=") + r, i.animate(u, l / 2, t.options.easing), r /= 2, a--
                }
                for (u = 0; u < a; u++) {
                    var h = {},
                        d = {};
                    h[c] = ("pos" == o ? "-=" : "+=") + r, d[c] = ("pos" == o ? "+=" : "-=") + r, i.animate(h, l / 2, t.options.easing).animate(d, l / 2, t.options.easing), r = "hide" == s ? 2 * r : r / 2
                }
                "hide" == s ? (u = {
                    opacity: 0
                }, u[c] = ("pos" == o ? "-=" : "+=") + r, i.animate(u, l / 2, t.options.easing, function() {
                    i.hide(), e.effects.restore(i, n), e.effects.removeWrapper(i), t.callback && t.callback.apply(this, arguments)
                })) : (h = {}, d = {}, h[c] = ("pos" == o ? "-=" : "+=") + r, d[c] = ("pos" == o ? "+=" : "-=") + r, i.animate(h, l / 2, t.options.easing).animate(d, l / 2, t.options.easing, function() {
                    e.effects.restore(i, n), e.effects.removeWrapper(i), t.callback && t.callback.apply(this, arguments)
                })), i.queue("fx", function() {
                    i.dequeue()
                }), i.dequeue()
            })
        }
    }(jQuery),
    function(e) {
        e.effects.clip = function(t) {
            return this.queue(function() {
                var i = e(this),
                    n = ["position", "top", "bottom", "left", "right", "height", "width"],
                    s = e.effects.setMode(i, t.options.mode || "hide"),
                    o = t.options.direction || "vertical";
                e.effects.save(i, n), i.show();
                var r = e.effects.createWrapper(i).css({
                    overflow: "hidden"
                });
                r = "IMG" == i[0].tagName ? r : i;
                var a = {
                    size: "vertical" == o ? "height" : "width",
                    position: "vertical" == o ? "top" : "left"
                };
                o = "vertical" == o ? r.height() : r.width(), "show" == s && (r.css(a.size, 0), r.css(a.position, o / 2));
                var l = {};
                l[a.size] = "show" == s ? o : 0, l[a.position] = "show" == s ? 0 : o / 2, r.animate(l, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.options.easing,
                    complete: function() {
                        "hide" == s && i.hide(), e.effects.restore(i, n), e.effects.removeWrapper(i), t.callback && t.callback.apply(i[0], arguments), i.dequeue()
                    }
                })
            })
        }
    }(jQuery),
    function(e) {
        e.effects.drop = function(t) {
            return this.queue(function() {
                var i = e(this),
                    n = ["position", "top", "bottom", "left", "right", "opacity"],
                    s = e.effects.setMode(i, t.options.mode || "hide"),
                    o = t.options.direction || "left";
                e.effects.save(i, n), i.show(), e.effects.createWrapper(i);
                var r = "up" == o || "down" == o ? "top" : "left";
                o = "up" == o || "left" == o ? "pos" : "neg";
                var a = t.options.distance || ("top" == r ? i.outerHeight({
                    margin: !0
                }) / 2 : i.outerWidth({
                    margin: !0
                }) / 2);
                "show" == s && i.css("opacity", 0).css(r, "pos" == o ? -a : a);
                var l = {
                    opacity: "show" == s ? 1 : 0
                };
                l[r] = ("show" == s ? "pos" == o ? "+=" : "-=" : "pos" == o ? "-=" : "+=") + a, i.animate(l, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.options.easing,
                    complete: function() {
                        "hide" == s && i.hide(), e.effects.restore(i, n), e.effects.removeWrapper(i), t.callback && t.callback.apply(this, arguments), i.dequeue()
                    }
                })
            })
        }
    }(jQuery),
    function(e) {
        e.effects.explode = function(t) {
            return this.queue(function() {
                var i = t.options.pieces ? Math.round(Math.sqrt(t.options.pieces)) : 3,
                    n = t.options.pieces ? Math.round(Math.sqrt(t.options.pieces)) : 3;
                t.options.mode = "toggle" == t.options.mode ? e(this).is(":visible") ? "hide" : "show" : t.options.mode;
                var s = e(this).show().css("visibility", "hidden"),
                    o = s.offset();
                o.top -= parseInt(s.css("marginTop"), 10) || 0, o.left -= parseInt(s.css("marginLeft"), 10) || 0;
                for (var r = s.outerWidth(!0), a = s.outerHeight(!0), l = 0; l < i; l++)
                    for (var c = 0; c < n; c++) s.clone().appendTo("body").wrap("<div></div>").css({
                        position: "absolute",
                        visibility: "visible",
                        left: -c * (r / n),
                        top: -l * (a / i)
                    }).parent().addClass("ui-effects-explode").css({
                        position: "absolute",
                        overflow: "hidden",
                        width: r / n,
                        height: a / i,
                        left: o.left + c * (r / n) + ("show" == t.options.mode ? (c - Math.floor(n / 2)) * (r / n) : 0),
                        top: o.top + l * (a / i) + ("show" == t.options.mode ? (l - Math.floor(i / 2)) * (a / i) : 0),
                        opacity: "show" == t.options.mode ? 0 : 1
                    }).animate({
                        left: o.left + c * (r / n) + ("show" == t.options.mode ? 0 : (c - Math.floor(n / 2)) * (r / n)),
                        top: o.top + l * (a / i) + ("show" == t.options.mode ? 0 : (l - Math.floor(i / 2)) * (a / i)),
                        opacity: "show" == t.options.mode ? 1 : 0
                    }, t.duration || 500);
                setTimeout(function() {
                    "show" == t.options.mode ? s.css({
                        visibility: "visible"
                    }) : s.css({
                        visibility: "visible"
                    }).hide(), t.callback && t.callback.apply(s[0]), s.dequeue(), e("div.ui-effects-explode").remove()
                }, t.duration || 500)
            })
        }
    }(jQuery),
    function(e) {
        e.effects.fade = function(t) {
            return this.queue(function() {
                var i = e(this),
                    n = e.effects.setMode(i, t.options.mode || "hide");
                i.animate({
                    opacity: n
                }, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.options.easing,
                    complete: function() {
                        t.callback && t.callback.apply(this, arguments), i.dequeue()
                    }
                })
            })
        }
    }(jQuery),
    function(e) {
        e.effects.fold = function(t) {
            return this.queue(function() {
                var i = e(this),
                    n = ["position", "top", "bottom", "left", "right"],
                    s = e.effects.setMode(i, t.options.mode || "hide"),
                    o = t.options.size || 15,
                    r = !!t.options.horizFirst,
                    a = t.duration ? t.duration / 2 : e.fx.speeds._default / 2;
                e.effects.save(i, n), i.show();
                var l = e.effects.createWrapper(i).css({
                        overflow: "hidden"
                    }),
                    c = "show" == s != r,
                    u = c ? ["width", "height"] : ["height", "width"];
                c = c ? [l.width(), l.height()] : [l.height(), l.width()];
                var h = /([0-9]+)%/.exec(o);
                h && (o = parseInt(h[1], 10) / 100 * c["hide" == s ? 0 : 1]), "show" == s && l.css(r ? {
                    height: 0,
                    width: o
                } : {
                    height: o,
                    width: 0
                }), r = {}, h = {}, r[u[0]] = "show" == s ? c[0] : o, h[u[1]] = "show" == s ? c[1] : 0, l.animate(r, a, t.options.easing).animate(h, a, t.options.easing, function() {
                    "hide" == s && i.hide(), e.effects.restore(i, n), e.effects.removeWrapper(i), t.callback && t.callback.apply(i[0], arguments), i.dequeue()
                })
            })
        }
    }(jQuery),
    function(e) {
        e.effects.highlight = function(t) {
            return this.queue(function() {
                var i = e(this),
                    n = ["backgroundImage", "backgroundColor", "opacity"],
                    s = e.effects.setMode(i, t.options.mode || "show"),
                    o = {
                        backgroundColor: i.css("backgroundColor")
                    };
                "hide" == s && (o.opacity = 0), e.effects.save(i, n), i.show().css({
                    backgroundImage: "none",
                    backgroundColor: t.options.color || "#ffff99"
                }).animate(o, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.options.easing,
                    complete: function() {
                        "hide" == s && i.hide(), e.effects.restore(i, n), "show" == s && !e.support.opacity && this.style.removeAttribute("filter"), t.callback && t.callback.apply(this, arguments), i.dequeue()
                    }
                })
            })
        }
    }(jQuery),
    function(e) {
        e.effects.pulsate = function(t) {
            return this.queue(function() {
                var i = e(this),
                    n = e.effects.setMode(i, t.options.mode || "show");
                for (times = 2 * (t.options.times || 5) - 1, duration = t.duration ? t.duration / 2 : e.fx.speeds._default / 2, isVisible = i.is(":visible"), animateTo = 0, isVisible || (i.css("opacity", 0).show(), animateTo = 1), ("hide" == n && isVisible || "show" == n && !isVisible) && times--, n = 0; n < times; n++) i.animate({
                    opacity: animateTo
                }, duration, t.options.easing), animateTo = (animateTo + 1) % 2;
                i.animate({
                    opacity: animateTo
                }, duration, t.options.easing, function() {
                    0 == animateTo && i.hide(), t.callback && t.callback.apply(this, arguments)
                }), i.queue("fx", function() {
                    i.dequeue()
                }).dequeue()
            })
        }
    }(jQuery),
    function(e) {
        e.effects.puff = function(t) {
            return this.queue(function() {
                var i = e(this),
                    n = e.effects.setMode(i, t.options.mode || "hide"),
                    s = parseInt(t.options.percent, 10) || 150,
                    o = s / 100,
                    r = {
                        height: i.height(),
                        width: i.width()
                    };
                e.extend(t.options, {
                    fade: !0,
                    mode: n,
                    percent: "hide" == n ? s : 100,
                    from: "hide" == n ? r : {
                        height: r.height * o,
                        width: r.width * o
                    }
                }), i.effect("scale", t.options, t.duration, t.callback), i.dequeue()
            })
        }, e.effects.scale = function(t) {
            return this.queue(function() {
                var i = e(this),
                    n = e.extend(!0, {}, t.options),
                    s = e.effects.setMode(i, t.options.mode || "effect"),
                    o = parseInt(t.options.percent, 10) || (0 == parseInt(t.options.percent, 10) ? 0 : "hide" == s ? 0 : 100),
                    r = t.options.direction || "both",
                    a = t.options.origin;
                "effect" != s && (n.origin = a || ["middle", "center"], n.restore = !0), a = {
                    height: i.height(),
                    width: i.width()
                }, i.from = t.options.from || ("show" == s ? {
                    height: 0,
                    width: 0
                } : a), o = {
                    y: "horizontal" != r ? o / 100 : 1,
                    x: "vertical" != r ? o / 100 : 1
                }, i.to = {
                    height: a.height * o.y,
                    width: a.width * o.x
                }, t.options.fade && ("show" == s && (i.from.opacity = 0, i.to.opacity = 1), "hide" == s && (i.from.opacity = 1, i.to.opacity = 0)), n.from = i.from, n.to = i.to, n.mode = s, i.effect("size", n, t.duration, t.callback), i.dequeue()
            })
        }, e.effects.size = function(t) {
            return this.queue(function() {
                var i = e(this),
                    n = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                    s = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                    o = ["width", "height", "overflow"],
                    r = ["fontSize"],
                    a = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                    l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                    c = e.effects.setMode(i, t.options.mode || "effect"),
                    u = t.options.restore || !1,
                    h = t.options.scale || "both",
                    d = t.options.origin,
                    p = {
                        height: i.height(),
                        width: i.width()
                    };
                i.from = t.options.from || p, i.to = t.options.to || p, d && (d = e.effects.getBaseline(d, p), i.from.top = (p.height - i.from.height) * d.y, i.from.left = (p.width - i.from.width) * d.x, i.to.top = (p.height - i.to.height) * d.y, i.to.left = (p.width - i.to.width) * d.x);
                var f = {
                    from: {
                        y: i.from.height / p.height,
                        x: i.from.width / p.width
                    },
                    to: {
                        y: i.to.height / p.height,
                        x: i.to.width / p.width
                    }
                };
                "box" != h && "both" != h || (f.from.y != f.to.y && (n = n.concat(a), i.from = e.effects.setTransition(i, a, f.from.y, i.from), i.to = e.effects.setTransition(i, a, f.to.y, i.to)), f.from.x != f.to.x && (n = n.concat(l), i.from = e.effects.setTransition(i, l, f.from.x, i.from), i.to = e.effects.setTransition(i, l, f.to.x, i.to))), "content" != h && "both" != h || f.from.y != f.to.y && (n = n.concat(r), i.from = e.effects.setTransition(i, r, f.from.y, i.from), i.to = e.effects.setTransition(i, r, f.to.y, i.to)), e.effects.save(i, u ? n : s), i.show(), e.effects.createWrapper(i), i.css("overflow", "hidden").css(i.from), "content" != h && "both" != h || (a = a.concat(["marginTop", "marginBottom"]).concat(r), l = l.concat(["marginLeft", "marginRight"]), o = n.concat(a).concat(l), i.find("*[width]").each(function() {
                    child = e(this), u && e.effects.save(child, o);
                    var i = {
                        height: child.height(),
                        width: child.width()
                    };
                    child.from = {
                        height: i.height * f.from.y,
                        width: i.width * f.from.x
                    }, child.to = {
                        height: i.height * f.to.y,
                        width: i.width * f.to.x
                    }, f.from.y != f.to.y && (child.from = e.effects.setTransition(child, a, f.from.y, child.from), child.to = e.effects.setTransition(child, a, f.to.y, child.to)), f.from.x != f.to.x && (child.from = e.effects.setTransition(child, l, f.from.x, child.from), child.to = e.effects.setTransition(child, l, f.to.x, child.to)), child.css(child.from), child.animate(child.to, t.duration, t.options.easing, function() {
                        u && e.effects.restore(child, o)
                    })
                })), i.animate(i.to, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.options.easing,
                    complete: function() {
                        0 === i.to.opacity && i.css("opacity", i.from.opacity), "hide" == c && i.hide(), e.effects.restore(i, u ? n : s), e.effects.removeWrapper(i), t.callback && t.callback.apply(this, arguments), i.dequeue()
                    }
                })
            })
        }
    }(jQuery),
    function(e) {
        e.effects.shake = function(t) {
            return this.queue(function() {
                var i = e(this),
                    n = ["position", "top", "bottom", "left", "right"];
                e.effects.setMode(i, t.options.mode || "effect");
                var s = t.options.direction || "left",
                    o = t.options.distance || 20,
                    r = t.options.times || 3,
                    a = t.duration || t.options.duration || 140;
                e.effects.save(i, n), i.show(), e.effects.createWrapper(i);
                var l = "up" == s || "down" == s ? "top" : "left",
                    c = "up" == s || "left" == s ? "pos" : "neg";
                s = {};
                var u = {},
                    h = {};
                for (s[l] = ("pos" == c ? "-=" : "+=") + o, u[l] = ("pos" == c ? "+=" : "-=") + 2 * o, h[l] = ("pos" == c ? "-=" : "+=") + 2 * o, i.animate(s, a, t.options.easing), o = 1; o < r; o++) i.animate(u, a, t.options.easing).animate(h, a, t.options.easing);
                i.animate(u, a, t.options.easing).animate(s, a / 2, t.options.easing, function() {
                    e.effects.restore(i, n), e.effects.removeWrapper(i), t.callback && t.callback.apply(this, arguments)
                }), i.queue("fx", function() {
                    i.dequeue()
                }), i.dequeue()
            })
        }
    }(jQuery),
    function(e) {
        e.effects.slide = function(t) {
            return this.queue(function() {
                var i = e(this),
                    n = ["position", "top", "bottom", "left", "right"],
                    s = e.effects.setMode(i, t.options.mode || "show"),
                    o = t.options.direction || "left";
                e.effects.save(i, n), i.show(), e.effects.createWrapper(i).css({
                    overflow: "hidden"
                });
                var r = "up" == o || "down" == o ? "top" : "left";
                o = "up" == o || "left" == o ? "pos" : "neg";
                var a = t.options.distance || ("top" == r ? i.outerHeight({
                    margin: !0
                }) : i.outerWidth({
                    margin: !0
                }));
                "show" == s && i.css(r, "pos" == o ? isNaN(a) ? "-" + a : -a : a);
                var l = {};
                l[r] = ("show" == s ? "pos" == o ? "+=" : "-=" : "pos" == o ? "-=" : "+=") + a, i.animate(l, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.options.easing,
                    complete: function() {
                        "hide" == s && i.hide(), e.effects.restore(i, n), e.effects.removeWrapper(i), t.callback && t.callback.apply(this, arguments), i.dequeue()
                    }
                })
            })
        }
    }(jQuery),
    function(e) {
        e.effects.transfer = function(t) {
            return this.queue(function() {
                var i = e(this),
                    n = e(t.options.to),
                    s = n.offset();
                n = {
                    top: s.top,
                    left: s.left,
                    height: n.innerHeight(),
                    width: n.innerWidth()
                }, s = i.offset();
                var o = e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(t.options.className).css({
                    top: s.top,
                    left: s.left,
                    height: i.innerHeight(),
                    width: i.innerWidth(),
                    position: "absolute"
                }).animate(n, t.duration, t.options.easing, function() {
                    o.remove(), t.callback && t.callback.apply(i[0], arguments), i.dequeue()
                })
            })
        }
    }(jQuery), $.widget("eme.lightbox", {
        options: {
            slides: null,
            autoSlide: !1,
            slideTime: 3e3,
            transition: "fade"
        },
        _create: function() {
            var e = this.options.slides,
                t = (this.options.autoSlide, this.options.slideTime),
                i = this.options.transition,
                n = (this.options.counter, this.element);
            if (e) {
                this.stuffSlides(e, n);
                var s = e,
                    o = s.length,
                    r = s[0]
            } else {
                var s = n.children();
                o = s.length, r = s[0], s.addClass("eme_slide"), o > 1 && (this.initNav(), this.initPager())
            }
            1 == this.options.autoSlide && this.autoPause(t), i && $(n).addClass(i), this.initLightbox(), $(n).addClass("emeGallery_wrapper")
        },
        stuffSlides: function(e, t) {
            $.getJSON(e, function(e) {
                var i = "";
                $(e).each(function(t) {
                    var n = "<img src='" + e[t].image_url + "' />";
                    i += "search" == e[t].link_type ? "<div class='search-by' data-search-by='" + e[t].link_url + "'>" + n + "</div>" : "filter" == e[t].link_type ? "<div class='filter-by' data-filter-by='" + e[t].link_url + "'>" + n + "</div>" : "<div><a href='" + e[t].link_url + "'>" + n + "</a></div>"
                }), $(t).append(i);
                var n = e;
                n.length, n[0]
            })
        },
        initNav: function() {
            $('<div class="buttons"><button class="prev">&lsaquo; <span class="offscreen">prev</span></button><button class="next"><span class="offscreen">next</span> &rsaquo;</button></div><!-- end of buttons -->').prependTo(this.element), navigate(0)
        },
        autoPause: function(e) {
            function t() {
                i.find($(".next")).trigger("click")
            }
            var i = this.element;
            $(i).on("mouseenter", function() {
                clearInterval(n)
            }), $(i).on("mouseleave", function() {
                n = setInterval(t, e)
            });
            var n = setInterval(function() {
                t()
            }, e)
        },
        initPager: function() {
            var e = this.element;
            e.each(function() {
                $('<div class="pagers"></div><!-- end of pagers -->').prependTo($(this));
                var e = $(this).find(".eme_slide");
                pWrapper = $(this).find(".pagers"), e.each(function(e) {
                    var t = e + 1;
                    $("<button/>", {
                        "class": "carouselpager",
                        "data-pager": t
                    }).appendTo(pWrapper), $(this).attr("data-slide", t)
                }), $(".pagers button:first-child()").addClass("active"), $(document).on("click", "#emelightbox-content .carouselpager", function(e) {
                    e.preventDefault(), $(this).siblings(".carouselpager").removeClass("active");
                    var t = $(this).attr("data-pager");
                    $(this).addClass("active");
                    var i = $("#emelightbox-content").find(".eme_slide"),
                        n = i.filter(function() {
                            return $(this).data("slide") == t
                        });
                    $(this).parent().nextAll(".eme_slide").removeClass("active"), n.addClass("active")
                })
            })
        },
        initLightbox: function() {
            function e(e) {
                $(document.body).removeClass("emelightbox-open"), $("#blackout").hide(), $("#bg_sheer").remove(), $(e).closest("#emelightbox-wrapper").remove(), $(".emelightbox-pop").find(".eme_slide").removeClass("active"), $(".emelightbox-pop").find(".carouselpager").removeClass("active")
            }
            var t = this.element;
            $(t).wrap("<div class='emelightbox-pop'></div>"), $(document).on("click", ".emelightbox-close", function() {
                var t = $(this);
                e(t)
            }), $(document).on("click", "#blackout", function() {
                var t = $("#emelightbox-wrapper");
                e(t)
            })
        }
    }), $(document).on("click", ".emelightbox-pop .eme_slide", function() {
        var e = $(this).parent();
        active = $(this), $(this).addClass("active");
        var t = $(this).attr("data-slide"),
            i = e.find($(".carouselpager")),
            n = i.filter(function() {
                return $(this).data("pager") == t
            });
        i.removeClass("active"), n.addClass("active");
        var s = ($(e).offset(), $(window).scrollTop() + 50),
            o = e.clone().html(),
            r = '<div id="emelightbox-wrapper"><div id="emelightbox" style="top:' + s + 'px;"><div class="emelightbox-close"><span>X</span></div><div id="emelightbox-content">' + o + "</div></div></div>";
        $(document.body).append(r), setupSwipe();
        var a = $("#emelightbox-wrapper").find(".eme_slide img");
        a.each(function() {
            var e = $(this).data("large"),
                t = $(this).data("video"),
                i = $(this).data("content");
            if (e && $(this).attr("src", e), t) {
                var n = '<iframe width="1100" height="622" allowfullscreen="allowfullscreen" src="' + t + '" frameborder="0"></iframe>';
                $(this).replaceWith(n)
            }
            if (i) {
                var s = $("body").find("#" + i).clone();
                s.css("display", "block"), $(this).replaceWith(s)
            }
        }, $("body").trigger("lightbox:loaded"))
    }), $("body").on("lightbox:loaded", function() {
        $(document.body).addClass("emelightbox-open"), $("#blackout").show()
    }), $(document).on("click", "#emelightbox-content .next", function(e) {
        e.preventDefault();
        var t = $("#emelightbox");
        navigate(1, t)
    }), $(document).on("click", "#emelightbox-content .prev", function(e) {
        e.preventDefault();
        var t = $("#emelightbox");
        navigate(-1, t)
    }), $(document).ready(function() {
        $(".eme-lightbox").lightbox()
    });
var OAUTH2_CLIENT_ID = "__YOUR_CLIENT_ID__",
    OAUTH2_SCOPES = ["https://www.googleapis.com/auth/youtube"];
googleApiClientReady = function() {
    gapi.auth.init(function() {
        window.setTimeout(checkAuth, 1)
    })
};
var EME = function() {
    "use strict";

    function e(e) {
        var t = new Date((e || "").replace(/-/g, "/").replace(/[TZ]/g, " ")),
            i = new Date,
            n = (i.getTime() - t.getTime()) / 1e3,
            s = Math.floor(n / 86400),
            o = i.getMonth() - t.getMonth() + 12 * (i.getFullYear() - t.getFullYear()),
            r = "Posted ";
        return n < 120 ? r + "1 Minute Ago " : n < 3600 ? r + Math.floor(n / 60) + " Minutes Ago " : n < 7200 ? r + "1 Hour Ago " : 0 == s ? r + Math.floor(n / 60 / 60) + " Hours Ago " : 1 == s ? r + "1 Day Ago " : s < 7 ? r + s + " Days Ago " : s < 14 ? r + "1 Week Ago " : 0 == o ? r + Math.floor(s / 7) + " Weeks Ago " : o < 2 ? r + "1 Month Ago " : o < 12 ? r + o + " Months Ago " : o < 24 ? r + "1 Year Ago " : r + Math.floor(o / 12) + " Years Ago"
    }

    function t(t) {
        $.each(t, function() {
            var t = $(this).find("time.posted_at"),
                i = t.attr("datetime");
            t.html(e(i)).show()
        })
    }
    var i;
    return {
        init: function() {
            t($("section.details"))
        },
        getVersion: function() {
            return i.version
        }
    }
}();
$(function() {
    EME.init()
});
var EMEPOST = function() {
    "use strict";

    function e(e) {
        var t = new Date((e || "").replace(/-/g, "/").replace(/[TZ]/g, " ")),
            i = new Date,
            n = (i.getTime() - t.getTime()) / 1e3,
            s = Math.floor(n / 86400),
            o = i.getMonth() - t.getMonth() + 12 * (i.getFullYear() - t.getFullYear());
        return n < 120 ? {
            time: 1,
            ago: "Minute Ago"
        } : n < 3600 ? {
            time: Math.floor(n / 60),
            ago: "Minutes Ago"
        } : n < 7200 ? {
            time: 1,
            ago: "Hour Ago"
        } : 0 == s ? {
            time: Math.floor(n / 60 / 60),
            ago: "Hours Ago"
        } : 1 == s ? {
            time: 1,
            ago: "Day Ago"
        } : s < 7 ? {
            time: s,
            ago: "Days Ago"
        } : s < 14 ? {
            time: 1,
            ago: "Week Ago"
        } : 0 == o ? {
            time: Math.floor(s / 7),
            ago: "Weeks Ago"
        } : o < 2 ? {
            time: 1,
            ago: "Month Ago"
        } : o < 12 ? {
            time: o,
            ago: "Months Ago"
        } : o < 24 ? {
            time: 1,
            ago: "Year Ago"
        } : {
            time: Math.floor(o / 12),
            ago: "Years Ago"
        }
    }

    function t(t) {
        $.each(t, function() {
            var t = $(this).find("time.posted_at"),
                i = t.attr("datetime"),
                n = e(i),
                s = $(this).find("em.author"),
                o = s.text();
            s.remove(), t.html(n.time).before("<strong>Posted</strong>").after("<span>" + n.ago + "<br><em>" + o + "</em></span>").show()
        })
    }
    var i;
    return {
        init: function() {
            t($("section.details"))
        },
        getVersion: function() {
            return i.version
        }
    }
}();
$(function() {
    EMEPOST.init()
}), $(document).ready(function() {
    function e(e) {
        var t = e.id;
        document.getElementById(t + "sheet").classList += " show"
    }

    function t(e, t) {
        i(t.target, "close-btn") && e.classList.remove("show")
    }

    function i(e, t) {
        return (" " + e.className + " ").indexOf(" " + t + " ") > -1
    }
    if ($(document.body).hasClass("home") || $(document.body).hasClass("about")) {
        Array.from || (Array.from = function() {
            var e = Object.prototype.toString,
                t = function(t) {
                    return "function" == typeof t || "[object Function]" === e.call(t)
                },
                i = function(e) {
                    var t = Number(e);
                    return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t
                },
                n = Math.pow(2, 53) - 1,
                s = function(e) {
                    var t = i(e);
                    return Math.min(Math.max(t, 0), n)
                };
            return function(e) {
                var i = this,
                    n = Object(e);
                if (null == e) throw new TypeError("Array.from requires an array-like object - not null or undefined");
                var o, r = arguments.length > 1 ? arguments[1] : void 0;
                if ("undefined" != typeof r) {
                    if (!t(r)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                    arguments.length > 2 && (o = arguments[2])
                }
                for (var a, l = s(n.length), c = t(i) ? Object(new i(l)) : new Array(l), u = 0; u < l;) a = n[u], r ? c[u] = "undefined" == typeof o ? r(a, u) : r.call(o, a, u) : c[u] = a, u += 1;
                return c.length = l, c
            }
        }());
        var n = document.getElementsByClassName("character");
        Array.from(n).forEach(function(t) {
            t.addEventListener("click", function() {
                e(t)
            })
        });
        var s = document.getElementsByClassName("char-sheet");
        Array.from(s).forEach(function(e) {
            e.addEventListener("click", function(i) {
                t(e, i)
            })
        })
    }
}), $(document).ready(function() {
    if ($(document.body).hasClass("packs")) {
        var e = function() {
            this.days = 0, this.hours = 0, this.minutes = 0, this.seconds = 0, this.updateClock = function() {
                console.log("clock update"), this.now = (new Date).getTime(), this.countdownDate = new Date("January 2, 2018 0:00:00");
                var e = this.countdownDate - this.now;
                this.days = Math.floor(e / 864e5), this.hours = Math.floor(e % 864e5 / 36e5), this.minutes = Math.floor(e % 36e5 / 6e4), this.seconds = Math.floor(e % 6e4 / 1e3), $("#days").text(this.days), $("#hours").text(this.hours), $("#minutes").text(this.minutes), $("#seconds").text(this.seconds)
            }, setInterval(function() {
                this.updateClock()
            }.bind(this), 1e3)
        };
        new e
    }
}), $(document).ready(function() {
    function e(e, i) {
        if (!$(e).hasClass("selected")) {
            for (var o = 0; o < n.length; o++) n[o].classList.remove("selected"), n[o].src = "/assets/icons/pagination-deselected.png";
            e.src = "/assets/icons/pagination-selected.png", e.classList.add("selected");
            var r = document.getElementById("featured-content"),
                a = r.offsetWidth;
            r.children[0].style.marginLeft = a * i * -1 + "px", s = i, t()
        }
    }

    function t() {
        clearTimeout(i), i = setTimeout(function() {
            o && (2 != s ? s++ : s = 0, e(n[s], s))
        }, 8e3)
    }
    if ($(document.body).hasClass("home")) {
        for (var i, n = document.getElementById("featured-content-tabs").getElementsByClassName("tab"), s = 0, o = !0, r = 0; r < n.length; r++) ! function(t) {
            n[t].addEventListener("click", function() {
                o = !1, e(n[t], t)
            })
        }(r);
        t()
    }
}), $(document).ready(function() {
    function e(e, i) {
        if (!$(e).hasClass("selected")) {
            for (var n = 0; n < t.length; n++) t[n].classList.remove("selected");
            e.classList.add("selected");
            for (var s = document.getElementById("featured-containers").getElementsByClassName("container"), o = 0; o < s.length; o++) s[o].classList.remove("selected");
            s[i].classList.add("selected")
        }
    }
    if ($(document.body).hasClass("home"))
        for (var t = document.getElementById("featured-tabs").getElementsByClassName("tab"), i = 0; i < t.length; i++) ! function(i) {
            t[i].addEventListener("click", function() {
                e(t[i], i), 2 == i ? $("#vid-placehold").get(0).play() : $("#vid-placehold").get(0).pause()
            })
        }(i)
}), $(document).ready(function() {
    function e(e) {
        this.node = e, this.items = e.getElementsByClassName("media-container")[0].getElementsByClassName("item"), this.init = function() {
            this.createPaginateButtons()
        }, this.createPaginateButtons = function() {
            for (var e = Math.ceil(this.items.length / 6), t = 0; t < e; t++) {
                var i = "";
                if (0 == t) var i = " selected";
                this.node.getElementsByClassName("pagination")[0].innerHTML += "<div class='page" + i + "'><span>" + (t + 1) + "/" + e + "</span><button page='" + t + "' class='page-btn'></button></div>"
            }
        }, this.changePage = function(e) {
            var t = e.getAttribute("page"),
                n = this.node.getElementsByClassName("page");
            this.node.getElementsByClassName("media-container")[0].getElementsByClassName("wrapper")[0].style.marginTop = t * i + "px";
            for (var s = 0; s < n.length; s++) n[s].classList.remove("selected");
            e.parentElement.classList.add("selected")
        }, this.init(), this.node.addEventListener("click", function() {
            $(event.target).hasClass("page-btn") && this.changePage(event.target)
        }.bind(this))
    }
    for (var t = document.getElementsByClassName("media-section"), i = -567, n = 0; n < t.length; n++) new e(t[n])
}), $(function() {
    for (var e = document.getElementsByClassName("downloads"), t = 0; t < e.length; t++)
        for (var i = e[t].getElementsByTagName("a"), n = 0; n < i.length; n++) i[n].setAttribute("download", "Closers_Wallpaper")
}), $(document).ready(function() {
    function e() {
        var e = window.scrollY;
        e >= t ? $("body").removeClass("nav-style") : $("body").addClass("nav-style")
    }
    if ($("body").hasClass("firstabout")) {
        var t = (document.getElementById("navigation"), 510);
        $("body").addClass("nav-style"), e(), document.addEventListener("scroll", function() {
            e()
        })
    }
});
var navigation = $("#navigation"),
    navBtn = $("#mobile-nav-btn"),
    navSpan = $("#mobile-nav-btn span"),
    _body = $("body");
exposeNav = function(e) {
        e.preventDefault(), _body.toggleClass("mobile-nav-open")
    }, navBtn.on("click", exposeNav), measureHide = function() {
        var e = -1 * navigation.height();
        $("#main-wrap").css("top", e), $("#main-wrap").css("margin-bottom", e)
    }, measureExpose = function() {
        $("#main-wrap").css("top", "0"), $("#main-wrap").css("margin-bottom", "0"), $(".mobile-nav-open").length && measureHide(), _body.toggleClass("mobile-nav-open")
    }, reCheckNav = function(e) {
        e >= 768 ? ($("#main-wrap").css("top", "0"), $("#main-wrap").css("margin-bottom", "0")) : measureHide()
    }, $(".nav a").on("click", function(e) {
        var t = e.target;
        $(t).parent().find("ul").length > 0 && $("body").hasClass("mobile-nav-open") && (e.preventDefault(), $(t).parent().toggleClass("open"))
    }), $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var e = $(this.hash);
                if (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"), e.length) return $("html, body").animate({
                    scrollTop: e.offset().top
                }, 1e3), !1
            }
        })
    }), window.onload = function() {
        $(".action .button").on("click", function(e) {
            e.preventDefault(), console.log("you clicked me ", this), $(this).closest(".mapBundle").toggleClass("open")
        })
    }, $(window).load(function() {
        function e(e) {
            this.init = function() {
                this.offsetTop = $(e).offset().top, this.setSettings(), window.requestAnimationFrame(function() {
                    this.checkScroll()
                }.bind(this))
            }, this.checkScroll = function() {
                var t = $(document).scrollTop(),
                    i = -t * this.speed + this.offsetTop * this.speed - 200 * this.speed;
                e.style.transform = "translateY(" + i + "px)", window.requestAnimationFrame(function() {
                    this.checkScroll()
                }.bind(this))
            }, this.setSettings = function() {
                this.speed = $(e).data("speed") / 10 || .2, e.style.transition = "100ms ease"
            }, this.init()
        }
        for (var t = document.getElementsByClassName("rellax"), i = 0; i < t.length; i++) new e(t[i])
    }), $(function() {
        Array.from || (Array.from = function() {
            var e = Object.prototype.toString,
                t = function(t) {
                    return "function" == typeof t || "[object Function]" === e.call(t)
                },
                i = function(e) {
                    var t = Number(e);
                    return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t
                },
                n = Math.pow(2, 53) - 1,
                s = function(e) {
                    var t = i(e);
                    return Math.min(Math.max(t, 0), n)
                };
            return function(e) {
                var i = this,
                    n = Object(e);
                if (null == e) throw new TypeError("Array.from requires an array-like object - not null or undefined");
                var o, r = arguments.length > 1 ? arguments[1] : void 0;
                if ("undefined" != typeof r) {
                    if (!t(r)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                    arguments.length > 2 && (o = arguments[2])
                }
                for (var a, l = s(n.length), c = t(i) ? Object(new i(l)) : new Array(l), u = 0; u < l;) a = n[u], r ? c[u] = "undefined" == typeof o ? r(a, u) : r.call(o, a, u) : c[u] = a, u += 1;
                return c.length = l, c
            }
        }()), $("#partnerApplication").submit(function() {
            function e() {
                if (1 == o) {
                    var e = "/partner/create";
                    $.ajax({
                        type: "POST",
                        url: e,
                        data: $("#partnerApplication").serialize(),
                        success: function() {
                            $("input[type=submit]").removeAttr("disabled"), t()
                        },
                        error: function() {
                            alert("Your application was unable to be processed at this time. Please try again later."), $("input[type=submit]").removeAttr("disabled")
                        }
                    })
                } else $("input[type=submit]").removeAttr("disabled")
            }

            function t() {
                $("#success").css("display", "block"), $("#fields").css("display", "none"), $("#submit").css("display", "none"), $("#partnerApplication").toggleClass("success");
                var e = location.href;
                location.href = "#applyform", history.replaceState(null, null, e)
            }

            function i(e, t) {
                e.className += " error", n(e, t), o = !1
            }

            function n(e, t) {
                0 == $(e).parent().find(".message").length && $(e).parent().append("<div class='message'><span>X</span> " + t + "</div>")
            }

            function s() {
                var e = $("form #email"),
                    t = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                t.test(e.val()) || i(e, "Oh no! You have entered an invalid email address")
            }
            var o = !0,
                r = this.querySelectorAll("input, textarea");
            $("input[type=submit]").attr("disabled", "disabled");
            for (var a = Array.from(r).filter(function(e) {
                    return $(e).hasClass("required") && "" == e.value
                }), l = this.querySelectorAll("input[number]"), c = 0; c < r.length; c++) $(r[c]).removeClass("error"), $(r[c]).parent().find(".message").remove();
            for (var c = 0; c < a.length; c++) {
                var u = a[c];
                u.className += " error", i(u, "Oh no! This field has been left empty")
            }
            for (var c = 0; c < l.length; c++) {
                var u = l[c];
                parseInt(u[c]) || (u.className += " error", i(u, "Oh no! You have not entered a valid number into this field"))
            }
            return s(), e(), !1
        })
    }), $(document).ready(function() {
        ($(document.body).hasClass("characters") || $(document.body).hasClass("wolf")) && ($(window).on("hashchange", function() {
            for (var e = document.getElementsByClassName("profile"), t = 0; t < e.length; t++) e[t].style.display = "none";
            if ($(document.body).hasClass("characters")) switch (location.hash) {
                case "#Sylvi":
                    document.getElementById("Sylvi").style.display = "block";
                    break;
                case "#Yuri":
                    document.getElementById("Yuri").style.display = "block";
                    break;
                case "#Misteltein":
                    document.getElementById("Misteltein").style.display = "block";
                    break;
                case "#J":
                    document.getElementById("J").style.display = "block";
                    break;
                default:
                    document.getElementById("Seha").style.display = "block"
            } else if ($(document.body).hasClass("wolf")) switch (location.hash) {
                default: document.getElementById("Levia").style.display = "block"
            }
        }), $(document).ready(function() {
            location.hash;
            $(window).trigger("hashchange");
            for (var e = document.getElementsByClassName("character"), t = 0; t < e.length; t++) $(e[t]).hasClass("inactive") || e[t].addEventListener("click", function(e) {
                location.hash = $(e.target).data("profile")
            })
        }), $(".nav .first").addClass("selected"))
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && module.exports ? module.exports = t() : e.Rellax = t()
    }(this, function() {
        var e = function(t, i) {
            "use strict";
            var n = Object.create(e.prototype),
                s = 0,
                o = 0,
                r = [],
                a = !1,
                l = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(e) {
                    setTimeout(e, 1e3 / 60)
                },
                c = window.transformProp || function() {
                    var e = document.createElement("div");
                    if (null == e.style.transform) {
                        var t = ["Webkit", "Moz", "ms"];
                        for (var i in t)
                            if (void 0 !== e.style[t[i] + "Transform"]) return t[i] + "Transform"
                    }
                    return "transform"
                }(),
                u = function(e, t, i) {
                    return e <= t ? t : e >= i ? i : e
                };
            n.options = {
                speed: -2,
                center: !1,
                round: !0
            }, i && Object.keys(i).forEach(function(e) {
                n.options[e] = i[e]
            }), n.options.speed = u(n.options.speed, -10, 10), t || (t = ".rellax");
            var h = document.querySelectorAll(t);
            if (!(h.length > 0)) throw new Error("The elements you're trying to select don't exist.");
            n.elems = h;
            var d = function() {
                    o = window.innerHeight, f();
                    for (var e = 0; e < n.elems.length; e++) {
                        var t = p(n.elems[e]);
                        r.push(t)
                    }
                    window.addEventListener("resize", function() {
                        v()
                    }), m(), v()
                },
                p = function(e) {
                    var t = e.dataset.rellaxPercentage,
                        i = e.dataset.rellaxSpeed,
                        s = t || n.options.center ? window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop : 0,
                        r = s + e.getBoundingClientRect().top,
                        a = e.clientHeight || e.offsetHeight || e.scrollHeight,
                        l = t ? t : (s - r + o) / (a + o);
                    n.options.center && (l = .5);
                    var c = i ? u(i, -10, 10) : n.options.speed;
                    (t || n.options.center) && (c = u(i || n.options.speed, -5, 5));
                    var h = g(l, c),
                        d = e.style.cssText,
                        p = "";
                    if (d.indexOf("transform") >= 0) {
                        var f = d.indexOf("transform"),
                            m = d.slice(f),
                            v = m.indexOf(";");
                        p = v ? " " + m.slice(11, v).replace(/\s/g, "") : " " + m.slice(11).replace(/\s/g, "")
                    }
                    return {
                        base: h,
                        top: r,
                        height: a,
                        speed: c,
                        style: d,
                        transform: p
                    }
                },
                f = function() {
                    var e = s;
                    return s = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop, e != s
                },
                g = function(e, t) {
                    var i = t * (100 * (1 - e));
                    return n.options.round ? Math.round(10 * i) / 10 : i
                },
                m = function() {
                    f() && a === !1 && v(), l(m)
                },
                v = function() {
                    for (var e = 0; e < n.elems.length; e++) {
                        var t = (s - r[e].top + o) / (r[e].height + o),
                            i = g(t, r[e].speed) - r[e].base,
                            a = "translate3d(0," + i + "px,0) " + r[e].transform;
                        n.elems[e].style[c] = a
                    }
                };
            return n.destroy = function() {
                for (var e = 0; e < n.elems.length; e++) n.elems[e].style.cssText = r[e].style;
                a = !0
            }, d(), n
        };
        return e
    }), $(function() {});
var $allVideos = $("iframe[src^='//player.vimeo.com'], iframe[src^='//www.youtube.com'], iframe[src^='//player.twitch.tv']"),
    $fluidEl = $("body");
$allVideos.each(function() {
        $(this).attr("data-aspectRatio", this.height / this.width).removeAttr("height").removeAttr("width")
    }), $(window).resize(function() {
        var e = $fluidEl.width();
        $allVideos.each(function() {
            var t = $(this);
            t.width(e).height(e * t.attr("data-aspectRatio"))
        })
    }).resize(), $(function() {
        function e(e) {
            var t = [];
            return e.forEach(function(e) {
                var i = document.getElementsByClassName(e);
                Array.prototype.forEach.call(i, function(i) {
                    t.push({
                        node: i,
                        type: e
                    })
                })
            }), t
        }

        function t(e) {
            e.forEach(function(e) {
                e.node.style.transform = n(e.type, "start"), e.node.style.transition = "500ms"
            })
        }

        function i(e) {
            var t = e.node.getBoundingClientRect().top,
                i = window.innerHeight;
            return "scroll-popup" == e.type ? i += 600 : "scroll-popout" == e.type && (i -= 100), t < i
        }

        function n(e, t) {
            if ("scroll-popup" == e) {
                if ("start" == t) return "translateY(800px)";
                if ("finish" == t) return "translateY(0px)"
            } else if ("scroll-popout" == e) {
                if ("start" == t) return "scale(0)";
                if ("finish" == t) return "scale(1)"
            }
        }
        var s = ["scroll-popup", "scroll-popout"],
            o = e(s);
        t(o), setTimeout(function() {
            for (var e = 0; e < o.length; e++) i(o[e]) && (o[e].node.style.transform = n(o[e].type, "finish"))
        }, 500), document.addEventListener("scroll", function() {
            o.forEach(function(e) {
                i(e) && (e.node.style.transform = n(e.type, "finish"))
            })
        })
    }), $(document).ready(function() {
        $("#games .trigger").on("click", function() {
            $("body.home main").toggleClass("lowerZ")
        }), $(".bundle_button").on("click", function() {
            var e = "[SessionID]",
                t = Math.random() + "";
            t *= 1e6, $("#specialscripts_wrapper").length && ($("#specialscripts_wrapper").empty(), $("#specialscripts_wrapper").html('<script src="HTTPS://bs.serving-sys.com/Serving/ActivityServer.bs?cn=as&amp;ActivityID=1101311&amp;rnd=' + t + "&amp;Session=" + e + '"></script><noscript><img width="1" height="1" style="border:0" src="HTTPS://bs.serving-sys.com/Serving/ActivityServer.bs?cn=as&amp;ActivityID=1101311&amp;Session=[SessionID]&amp;ns=1"/></noscript>'))
        })
    }), $(document).ready(function() {
        if ($("body.shopping").length > 0) {
            var e = document.createElement("script");
            e.type = "text/javascript", e.async = !0, e.src = "//static.xsolla.com/embed/pay2play/2.1.0/widget.min.js";
            var t = document.getElementsByTagName("head")[0];
            if (t.appendChild(e), $(".bundle_button").on("mouseenter", function() {
                    $(this).nextAll(".btn-plate").addClass("hover")
                }), $(".bundle_button").on("mouseleave", function() {
                    $(this).nextAll(".btn-plate").removeClass("hover")
                }), $("#XS-pay2play-widget-1").length) {
                var i = $("#XS-pay2play-widget-1"),
                    n = i.data("project_id"),
                    s = "" + i.data("id"),
                    o = {
                        access_data: {
                            settings: {
                                project_id: n
                            },
                            purchase: {
                                pin_codes: {
                                    codes: [{
                                        digital_content: s
                                    }]
                                }
                            }
                        },
                        theme: {
                            foreground: "green",
                            background: "light"
                        },
                        lightbox: {
                            overlayOpacity: ".8",
                            spinner: "round"
                        },
                        target_element: "#XS-pay2play-widget-1"
                    };
                e.addEventListener("load", function() {
                    XPay2PlayWidget.create(o)
                }, !1), $(".xpay2Play-widget-payment-button").on("click", function() {
                    $(this).toggleClass("hover")
                })
            }
            if ($("#XS-pay2play-widget-2").length) {
                var i = $("#XS-pay2play-widget-2"),
                    n = i.data("project_id"),
                    s = "" + i.data("id"),
                    r = {
                        access_data: {
                            settings: {
                                project_id: n
                            },
                            purchase: {
                                pin_codes: {
                                    codes: [{
                                        digital_content: s
                                    }]
                                }
                            }
                        },
                        theme: {
                            foreground: "green",
                            background: "light"
                        },
                        lightbox: {
                            overlayOpacity: ".8",
                            spinner: "round"
                        },
                        target_element: "#XS-pay2play-widget-2"
                    };
                e.addEventListener("load", function() {
                    XPay2PlayWidget.create(r)
                }, !1), $(".xpay2Play-widget-payment-button").on("click", function() {
                    $(this).toggleClass("hover")
                })
            }
            if ($("#XS-pay2play-widget-3").length) {
                var i = $("#XS-pay2play-widget-3"),
                    n = i.data("project_id"),
                    s = "" + i.data("id"),
                    a = {
                        access_data: {
                            settings: {
                                project_id: n
                            },
                            purchase: {
                                pin_codes: {
                                    codes: [{
                                        digital_content: s
                                    }]
                                }
                            }
                        },
                        theme: {
                            foreground: "green",
                            background: "light"
                        },
                        lightbox: {
                            overlayOpacity: ".8",
                            spinner: "round"
                        },
                        target_element: "#XS-pay2play-widget-3"
                    };
                e.addEventListener("load", function() {
                    XPay2PlayWidget.create(a)
                }, !1), $(".xpay2Play-widget-payment-button").on("click", function() {
                    $(this).toggleClass("hover")
                })
            }
            if ($("#XS-pay2play-widget-4").length) {
                var i = $("#XS-pay2play-widget-4"),
                    n = i.data("project_id"),
                    s = "" + i.data("id"),
                    l = {
                        access_data: {
                            settings: {
                                project_id: n
                            },
                            purchase: {
                                pin_codes: {
                                    codes: [{
                                        digital_content: s
                                    }]
                                }
                            }
                        },
                        theme: {
                            foreground: "green",
                            background: "light"
                        },
                        lightbox: {
                            overlayOpacity: ".8",
                            spinner: "round"
                        },
                        target_element: "#XS-pay2play-widget-4"
                    };
                e.addEventListener("load", function() {
                    XPay2PlayWidget.create(l)
                }, !1), $(".xpay2Play-widget-payment-button").on("click", function() {
                    $(this).toggleClass("hover")
                })
            }
        }
    }), $(function() {
        function e(e) {
            var t = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,
                i = e.match(t);
            if (i && 11 == i[2].length) return i[2]
        }
        for (var t = document.getElementsByClassName("youtube-bg"), i = 0; i < t.length; i++) {
            var n = e($(t[i].getElementsByClassName("youtube-data")[0]).data("video"));
            t[i].style.backgroundImage = "url('https://img.youtube.com/vi/" + n + "/hqdefault.jpg')"
        }
    }),
    function(e) {
        "use strict";

        function t() {
            x(!0)
        }
        var i = {};
        e.respond = i, i.update = function() {};
        var n = [],
            s = function() {
                var t = !1;
                try {
                    t = new e.XMLHttpRequest
                } catch (i) {
                    t = new e.ActiveXObject("Microsoft.XMLHTTP")
                }
                return function() {
                    return t
                }
            }(),
            o = function(e, t) {
                var i = s();
                i && (i.open("GET", e, !0), i.onreadystatechange = function() {
                    4 !== i.readyState || 200 !== i.status && 304 !== i.status || t(i.responseText)
                }, 4 !== i.readyState && i.send(null))
            },
            r = function(e) {
                return e.replace(i.regex.minmaxwh, "").match(i.regex.other)
            };
        if (i.ajax = o, i.queue = n, i.unsupportedmq = r, i.regex = {
                media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
                keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
                comments: /\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,
                urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
                findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
                only: /(only\s+)?([a-zA-Z]+)\s?/,
                minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
                maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
                minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
                other: /\([^\)]*\)/g
            }, i.mediaQueriesSupported = e.matchMedia && null !== e.matchMedia("only all") && e.matchMedia("only all").matches, !i.mediaQueriesSupported) {
            var a, l, c, u = e.document,
                h = u.documentElement,
                d = [],
                p = [],
                f = [],
                g = {},
                m = 30,
                v = u.getElementsByTagName("head")[0] || h,
                y = u.getElementsByTagName("base")[0],
                b = v.getElementsByTagName("link"),
                w = function() {
                    var e, t = u.createElement("div"),
                        i = u.body,
                        n = h.style.fontSize,
                        s = i && i.style.fontSize,
                        o = !1;
                    return t.style.cssText = "position:absolute;font-size:1em;width:1em", i || (i = o = u.createElement("body"), i.style.background = "none"), h.style.fontSize = "100%", i.style.fontSize = "100%", i.appendChild(t), o && h.insertBefore(i, h.firstChild), e = t.offsetWidth, o ? h.removeChild(i) : i.removeChild(t), h.style.fontSize = n, s && (i.style.fontSize = s), e = c = parseFloat(e)
                },
                x = function(t) {
                    var i = "clientWidth",
                        n = h[i],
                        s = "CSS1Compat" === u.compatMode && n || u.body[i] || n,
                        o = {},
                        r = b[b.length - 1],
                        g = (new Date).getTime();
                    if (t && a && g - a < m) return e.clearTimeout(l), void(l = e.setTimeout(x, m));
                    a = g;
                    for (var y in d)
                        if (d.hasOwnProperty(y)) {
                            var _ = d[y],
                                k = _.minw,
                                C = _.maxw,
                                S = null === k,
                                T = null === C,
                                D = "em";
                            k && (k = parseFloat(k) * (k.indexOf(D) > -1 ? c || w() : 1)), C && (C = parseFloat(C) * (C.indexOf(D) > -1 ? c || w() : 1)), _.hasquery && (S && T || !(S || s >= k) || !(T || s <= C)) || (o[_.media] || (o[_.media] = []), o[_.media].push(p[_.rules]))
                        }
                    for (var E in f) f.hasOwnProperty(E) && f[E] && f[E].parentNode === v && v.removeChild(f[E]);
                    f.length = 0;
                    for (var P in o)
                        if (o.hasOwnProperty(P)) {
                            var M = u.createElement("style"),
                                A = o[P].join("\n");
                            M.type = "text/css", M.media = P, v.insertBefore(M, r.nextSibling), M.styleSheet ? M.styleSheet.cssText = A : M.appendChild(u.createTextNode(A)), f.push(M)
                        }
                },
                _ = function(e, t, n) {
                    var s = e.replace(i.regex.comments, "").replace(i.regex.keyframes, "").match(i.regex.media),
                        o = s && s.length || 0;
                    t = t.substring(0, t.lastIndexOf("/"));
                    var a = function(e) {
                            return e.replace(i.regex.urls, "$1" + t + "$2$3")
                        },
                        l = !o && n;
                    t.length && (t += "/"), l && (o = 1);
                    for (var c = 0; c < o; c++) {
                        var u, h, f, g;
                        l ? (u = n, p.push(a(e))) : (u = s[c].match(i.regex.findStyles) && RegExp.$1, p.push(RegExp.$2 && a(RegExp.$2))), f = u.split(","), g = f.length;
                        for (var m = 0; m < g; m++) h = f[m], r(h) || d.push({
                            media: h.split("(")[0].match(i.regex.only) && RegExp.$2 || "all",
                            rules: p.length - 1,
                            hasquery: h.indexOf("(") > -1,
                            minw: h.match(i.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                            maxw: h.match(i.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                        })
                    }
                    x()
                },
                k = function() {
                    if (n.length) {
                        var t = n.shift();
                        o(t.href, function(i) {
                            _(i, t.href, t.media), g[t.href] = !0, e.setTimeout(function() {
                                k()
                            }, 0)
                        })
                    }
                },
                C = function() {
                    for (var t = 0; t < b.length; t++) {
                        var i = b[t],
                            s = i.href,
                            o = i.media,
                            r = i.rel && "stylesheet" === i.rel.toLowerCase();
                        s && r && !g[s] && (i.styleSheet && i.styleSheet.rawCssText ? (_(i.styleSheet.rawCssText, s, o), g[s] = !0) : (/^([a-zA-Z:]*\/\/)/.test(s) || y) && s.replace(RegExp.$1, "").split("/")[0] !== e.location.host || ("//" === s.substring(0, 2) && (s = e.location.protocol + s), n.push({
                            href: s,
                            media: o
                        })))
                    }
                    k()
                };
            C(), i.update = C, i.getEmValue = w, e.addEventListener ? e.addEventListener("resize", t, !1) : e.attachEvent && e.attachEvent("onresize", t)
        }
    }(this),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
    }(function(e) {
        function t(e) {
            return a.raw ? e : encodeURIComponent(e)
        }

        function i(e) {
            return a.raw ? e : decodeURIComponent(e)
        }

        function n(e) {
            return t(a.json ? JSON.stringify(e) : String(e))
        }

        function s(e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return e = decodeURIComponent(e.replace(r, " ")), a.json ? JSON.parse(e) : e
            } catch (e) {}
        }

        function o(t, i) {
            var n = a.raw ? t : s(t);
            return e.isFunction(i) ? i(n) : n
        }
        var r = /\+/g,
            a = e.cookie = function(s, r, l) {
                if (void 0 !== r && !e.isFunction(r)) {
                    if (l = e.extend({}, a.defaults, l), "number" == typeof l.expires) {
                        var c = l.expires,
                            u = l.expires = new Date;
                        u.setTime(+u + 864e5 * c)
                    }
                    return document.cookie = [t(s), "=", n(r), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
                }
                for (var h = s ? void 0 : {}, d = document.cookie ? document.cookie.split("; ") : [], p = 0, f = d.length; p < f; p++) {
                    var g = d[p].split("="),
                        m = i(g.shift()),
                        v = g.join("=");
                    if (s && s === m) {
                        h = o(v, r);
                        break
                    }
                    s || void 0 === (v = o(v)) || (h[m] = v)
                }
                return h
            };
        a.defaults = {}, e.removeCookie = function(t, i) {
            return void 0 !== e.cookie(t) && (e.cookie(t, "", e.extend({}, i, {
                expires: -1
            })), !e.cookie(t))
        }
    });