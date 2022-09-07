/* videojs-hotkeys v0.2.27 - https://github.com/ctd1500/videojs-hotkeys */ ! function(e, t) {
	"undefined" != typeof window && window.videojs ? t(window.videojs) : "function" == typeof define && define.amd ? define("videojs-hotkeys", ["video.js"], function(e) {
		return t(e.default || e)
	}) : "undefined" != typeof module && module.exports && (module.exports = t(require("video.js")))
}(0, function(e) {
	"use strict";
	"undefined" != typeof window && (window.videojs_hotkeys = {
		version: "0.2.27"
	});
	(e.registerPlugin || e.plugin)("hotkeys", function(t) {
		function n(e) {
			return "function" == typeof s ? s(e) : s
		}

		function o(e) {
			null != e && "function" == typeof e.then && e.then(null, function(e) {})
		}
		var r = this,
			u = r.el(),
			l = document,
			i = {
				volumeStep: .1,
				seekStep: 10,
				enableMute: !0,
				enableVolumeScroll: !0,
				enableHoverScroll: !1,
				enableFullscreen: !0,
				enableNumbers: !0,
				enableJogStyle: !1,
				alwaysCaptureHotkeys: !1,
				captureDocumentHotkeys: !1,
				documentHotkeysFocusElementFilter: function() {
					return !1
				},
				enableModifiersForNumbers: !0,
				enableInactiveFocus: !0,
				skipInitialFocus: !1,
				playPauseKey: function(e) {
					return 32 === e.which || 179 === e.which
				},
				rewindKey: function(e) {
					return 37 === e.which || 177 === e.which
				},
				forwardKey: function(e) {
					return 39 === e.which || 176 === e.which
				},
				volumeUpKey: function(e) {
					return 38 === e.which
				},
				volumeDownKey: function(e) {
					return 40 === e.which
				},
				muteKey: function(e) {
					return 77 === e.which
				},
				fullscreenKey: function(e) {
					return 70 === e.which
				},
				customKeys: {}
			},
			c = e.mergeOptions || e.util.mergeOptions,
			a = (t = c(i, t || {})).volumeStep,
			s = t.seekStep,
			m = t.enableMute,
			y = t.enableVolumeScroll,
			f = t.enableHoverScroll,
			v = t.enableFullscreen,
			d = t.enableNumbers,
			p = t.enableJogStyle,
			b = t.alwaysCaptureHotkeys,
			h = t.captureDocumentHotkeys,
			w = t.documentHotkeysFocusElementFilter,
			k = t.enableModifiersForNumbers,
			S = t.enableInactiveFocus,
			K = t.skipInitialFocus,
			F = e.VERSION;
		u.hasAttribute("tabIndex") || u.setAttribute("tabIndex", "-1"), u.style.outline = "none", !b && r.autoplay() || K || r.one("play", function() {
			u.focus()
		}), S && r.on("userinactive", function() {
			var e = function() {
					clearTimeout(t)
				},
				t = setTimeout(function() {
					r.off("useractive", e);
					var t = l.activeElement,
						n = u.querySelector(".vjs-control-bar");
					t && t.parentElement == n && u.focus()
				}, 10);
			r.one("useractive", e)
		}), r.on("play", function() {
			var e = u.querySelector(".iframeblocker");
			e && "" === e.style.display && (e.style.display = "block", e.style.bottom = "39px")
		});
		var q = function(e) {
				var i, c, s = e.which,
					y = e.preventDefault.bind(e),
					f = r.duration();
				if(r.controls()) {
					var S = l.activeElement;
					if(b || h && w(S) || S == u || S == u.querySelector(".vjs-tech") || S == u.querySelector(".vjs-control-bar") || S == u.querySelector(".iframeblocker")) switch(g(e, r)) {
						case 1:
							y(), (b || h) && e.stopPropagation(), r.paused() ? o(r.play()) : r.pause();
							break;
						case 2:
							i = !r.paused(), y(), i && r.pause(), (c = r.currentTime() - n(e)) <= 0 && (c = 0), r.currentTime(c), i && o(r.play());
							break;
						case 3:
							i = !r.paused(), y(), i && r.pause(), (c = r.currentTime() + n(e)) >= f && (c = i ? f - .001 : f), r.currentTime(c), i && o(r.play());
							break;
						case 5:
							y(), p ? (c = r.currentTime() - 1, r.currentTime() <= 1 && (c = 0), r.currentTime(c)) : r.volume(r.volume() - a);
							break;
						case 4:
							y(), p ? ((c = r.currentTime() + 1) >= f && (c = f), r.currentTime(c)) : r.volume(r.volume() + a);
							break;
						case 6:
							m && r.muted(!r.muted());
							break;
						case 7:
							v && (r.isFullscreen() ? r.exitFullscreen() : r.requestFullscreen());
							break;
						default:
							if((s > 47 && s < 59 || s > 95 && s < 106) && (k || !(e.metaKey || e.ctrlKey || e.altKey)) && d) {
								var K = 48;
								s > 95 && (K = 96);
								var F = s - K;
								y(), r.currentTime(r.duration() * F * .1)
							}
							for(var q in t.customKeys) {
								var j = t.customKeys[q];
								j && j.key && j.handler && j.key(e) && (y(), j.handler(r, t, e))
							}
					}
				}
			},
			j = !1,
			T = u.querySelector(".vjs-volume-menu-button") || u.querySelector(".vjs-volume-panel");
		null != T && (T.onmouseover = function() {
			j = !0
		}, T.onmouseout = function() {
			j = !1
		});
		var E = function(e) {
				if(f) t = 0;
				else var t = l.activeElement;
				if(r.controls() && (b || t == u || t == u.querySelector(".vjs-tech") || t == u.querySelector(".iframeblocker") || t == u.querySelector(".vjs-control-bar") || j) && y) {
					e = window.event || e;
					var n = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
					e.preventDefault(), 1 == n ? r.volume(r.volume() + a) : -1 == n && r.volume(r.volume() - a)
				}
			},
			g = function(e, n) {
				return t.playPauseKey(e, n) ? 1 : t.rewindKey(e, n) ? 2 : t.forwardKey(e, n) ? 3 : t.volumeUpKey(e, n) ? 4 : t.volumeDownKey(e, n) ? 5 : t.muteKey(e, n) ? 6 : t.fullscreenKey(e, n) ? 7 : void 0
			};
		return r.on("keydown", q), r.on("dblclick", function(e) {
			if(null != F && F <= "7.1.0" && r.controls()) {
				var t = e.relatedTarget || e.toElement || l.activeElement;
				t != u && t != u.querySelector(".vjs-tech") && t != u.querySelector(".iframeblocker") || v && (r.isFullscreen() ? r.exitFullscreen() : r.requestFullscreen())
			}
		}), r.on("mousewheel", E), r.on("DOMMouseScroll", E), h && document.addEventListener("keydown", function(e) {
			q(e)
		}), this
	})
});
//# sourceMappingURL=videojs.hotkeys.min.js.map