/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (e) {
  function t(t) {
    for (var r, o, c = t[0], i = t[1], l = t[2], d = 0, b = []; d < c.length; d++) {
      o = c[d], Object.prototype.hasOwnProperty.call(s, o) && s[o] && b.push(s[o][0]), s[o] = 0;
    }

    for (r in i) {
      Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    }

    u && u(t);

    while (b.length) {
      b.shift()();
    }

    return a.push.apply(a, l || []), n();
  }

  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, c = 1; c < n.length; c++) {
        var i = n[c];
        0 !== s[i] && (r = !1);
      }

      r && (a.splice(t--, 1), e = o(o.s = n[0]));
    }

    return e;
  }

  var r = {},
      s = {
    app: 0
  },
      a = [];

  function o(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, o), n.l = !0, n.exports;
  }

  o.m = e, o.c = r, o.d = function (e, t, n) {
    o.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, o.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, o.t = function (e, t) {
    if (1 & t && (e = o(e)), 8 & t) return e;
    if (4 & t && "object" === _typeof(e) && e && e.__esModule) return e;
    var n = Object.create(null);
    if (o.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      o.d(n, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return n;
  }, o.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return o.d(t, "a", t), t;
  }, o.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, o.p = "/";
  var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
      i = c.push.bind(c);
  c.push = t, c = c.slice();

  for (var l = 0; l < c.length; l++) {
    t(c[l]);
  }

  var u = i;
  a.push([0, "chunk-vendors"]), n();
})({
  0: function _(e, t, n) {
    e.exports = n("56d7");
  },
  "56d7": function d7(e, t, n) {
    "use strict";

    n.r(t);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var r = n("7a23");
    n("a2f0");

    function s(e, t, n, s, a, o) {
      var c = Object(r["x"])("router-view");
      return Object(r["q"])(), Object(r["d"])("div", null, [Object(r["g"])("main", null, [Object(r["g"])(c)])]);
    }

    var a = {
      name: "App",
      data: function data() {
        return {};
      }
    };
    a.render = s;
    var o = a,
        c = (n("caad"), n("6c02")),
        i = {
      "class": "py-8 px-4"
    },
        l = Object(r["g"])("h2", {
      "class": "text-lg font-medium text-gray-900 truncate pb-8 px-1"
    }, "Upload Video", -1),
        u = {
      method: "post",
      action: "",
      enctype: "multipart/form-data",
      ref: "videoForm",
      "class": "w-full max-w-lg"
    },
        d = {
      "class": "w-full flex flex-wrap -mx-3 mb-6"
    },
        b = {
      "class": "w-1/2  px-3 mb-6 "
    },
        p = {
      "class": "w-1/3  px-3 mb-6 md:mb-0"
    },
        g = {
      "class": "w-60 flex inline-flex items-center items-center px-4 py-1.5 bg-white hover:bg-gray-600 rounded-md shadow-md tracking-wide font-medium uppercase border border-blue cursor-pointer hover:bg-white-600 hover:text-white text-gray-600 ease-linear transition-all duration-150"
    },
        m = Object(r["g"])("span", {
      "class": "text-base leading-normal px-2"
    }, "Choose Video", -1),
        f = {
      key: 0,
      "class": "flex flex-wrap -mx-4 -mb-8"
    };

    function j(e, t, n, s, a, o) {
      var c = Object(r["x"])("font-awesome-icon");
      return Object(r["q"])(), Object(r["d"])("section", i, [l, Object(r["g"])("form", u, [Object(r["I"])(Object(r["g"])("input", {
        type: "hidden",
        name: "projectId",
        id: "projectId",
        "onUpdate:modelValue": t[1] || (t[1] = function (e) {
          return o.projectId = e;
        })
      }, null, 512), [[r["D"], o.projectId]]), Object(r["g"])("div", d, [Object(r["g"])("div", b, [Object(r["I"])(Object(r["g"])("input", {
        type: "text",
        "class": "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
        name: "title",
        "onUpdate:modelValue": t[2] || (t[2] = function (e) {
          return a.formData.title = e;
        }),
        placeholder: "Video Title"
      }, null, 512), [[r["D"], a.formData.title]])]), Object(r["g"])("div", p, [Object(r["g"])("label", g, [Object(r["g"])(c, {
        icon: "cloud-upload-alt",
        size: "1x"
      }), m, Object(r["g"])("input", {
        type: "file",
        "class": "hidden",
        name: "video",
        onChange: t[3] || (t[3] = function () {
          return o.onFileUpload && o.onFileUpload.apply(o, arguments);
        })
      }, null, 32)])])])], 512), o.galleries ? (Object(r["q"])(), Object(r["d"])("div", f, [(Object(r["q"])(!0), Object(r["d"])(r["a"], null, Object(r["w"])(o.galleries, function (e, t) {
        return Object(r["q"])(), Object(r["d"])("div", {
          "class": "md:w-1/4 px-4 mb-8",
          key: t
        }, [Object(r["g"])("img", {
          "class": "rounded shadow-md",
          src: e,
          alt: ""
        }, null, 8, ["src"])]);
      }), 128))])) : Object(r["e"])("", !0)]);
    }

    var O = n("1da1"),
        h = (n("96cf"), n("159b"), {
      name: "App",
      data: function data() {
        return {
          formData: {
            title: "",
            files: Object
          },
          projects: []
        };
      },
      methods: {
        createLayer: function createLayer() {
          var e = this.$store.state.Layers.length + 1;
          this.$store.commit("addLayers", {
            layerName: "Layer" + e,
            textLayer: "Text Layer" + e,
            imgSrc: "./ResumePart6.jpg",
            editable: !1,
            focusable: !1,
            className: ""
          });
        },
        onFileUpload: function onFileUpload(e) {
          var t = this;
          return Object(O["a"])(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function e() {
            var n, r, s;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function (e) {
              while (1) {
                switch (e.prev = e.next) {
                  case 0:
                    return n = t.$refs.videoForm, r = new FormData(n), s = [], t.$store.state.loading = !0, e.next = 6, t.axios.post(t.appURI + "api/upload", r).then(function (e) {
                      e.data.files.forEach(function (e) {
                        s.push(t.appURI + "uploads/" + e);
                      });
                    });

                  case 6:
                    return t.$store.commit("GET_GALLERIES", {
                      galArray: s
                    }), e.next = 9, t.axios.get(t.appURI + "api/getVideos", {
                      params: {
                        project_id: t.projectId
                      }
                    }).then(function (e) {
                      t.$store.state.projects = e.data, t.$router.push("/project"), t.$store.state.loading = !1;
                    });

                  case 9:
                  case "end":
                    return e.stop();
                }
              }
            }, e);
          }))();
        }
      },
      computed: {
        Layers: function Layers() {
          return this.$store.state.Layers;
        },
        projectId: function projectId() {
          return this.$store.state.project_id;
        },
        galleries: function galleries() {
          return this.$store.state.galleries;
        },
        appURI: function appURI() {
          return this.$store.state.appURI;
        }
      }
    });
    h.render = j;
    var x = h,
        v = {
      "class": "bg-gray-100 w-full rounded py-8 px-4"
    },
        y = {
      "class": "flex justify-left items-center my-4"
    },
        w = {
      "class": "bg-white p-16 text-left mx-auto border"
    },
        k = {
      "class": "py-8 px-4"
    },
        I = Object(r["g"])("h2", {
      "class": "text-lg font-medium text-gray-900 truncate pb-8 px-1"
    }, "Create Project", -1),
        E = {
      method: "post",
      ref: "createForm",
      "class": "w-full max-w-lg"
    },
        _ = {
      "class": "w-full flex flex-wrap -mx-3 mb-6"
    },
        U = {
      "class": "w-1/2  px-3 mb-6 "
    },
        C = {
      "class": "w-1/3  px-3 mb-6 md:mb-0"
    },
        q = {
      key: 0,
      "class": "flex flex-wrap -mx-4 -mb-8"
    };

    function V(e, t, n, s, a, o) {
      var c = Object(r["x"])("classComponent");
      return Object(r["q"])(), Object(r["d"])("div", v, [Object(r["g"])("ul", y, [(Object(r["q"])(!0), Object(r["d"])(r["a"], null, Object(r["w"])(a.tabs, function (e, t) {
        return Object(r["q"])(), Object(r["d"])("li", {
          key: t,
          "class": ["cursor-pointer py-2 px-4 text-gray-500 border-b-8", a.activeTab === t ? "text-gray-700 border-gray-700" : ""],
          onClick: function onClick(e) {
            return a.activeTab = t;
          },
          textContent: Object(r["z"])(e)
        }, null, 10, ["onClick", "textContent"]);
      }), 128))]), Object(r["g"])("div", w, [Object(r["I"])(Object(r["g"])("div", null, [Object(r["g"])("section", k, [I, Object(r["g"])("form", E, [Object(r["g"])("div", _, [Object(r["g"])("div", U, [Object(r["I"])(Object(r["g"])("input", {
        type: "text",
        "class": "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
        name: "title",
        "onUpdate:modelValue": t[1] || (t[1] = function (e) {
          return a.formData.title = e;
        }),
        placeholder: "Enter Project Name"
      }, null, 512), [[r["D"], a.formData.title]])]), Object(r["g"])("div", C, [Object(r["I"])(Object(r["g"])("textarea", {
        "class": "resize border rounded-md",
        "onUpdate:modelValue": t[2] || (t[2] = function (e) {
          return a.formData.Description = e;
        })
      }, null, 512), [[r["D"], a.formData.Description]])]), Object(r["g"])("a", {
        "class": "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
        onClick: t[3] || (t[3] = function () {
          return o.createProject && o.createProject.apply(o, arguments);
        })
      }, " Submit ")])], 512), o.galleries ? (Object(r["q"])(), Object(r["d"])("div", q, [(Object(r["q"])(!0), Object(r["d"])(r["a"], null, Object(r["w"])(o.galleries, function (e, t) {
        return Object(r["q"])(), Object(r["d"])("div", {
          "class": "md:w-1/4 px-4 mb-8",
          key: t
        }, [Object(r["g"])("img", {
          "class": "rounded shadow-md",
          src: e,
          alt: ""
        }, null, 8, ["src"])]);
      }), 128))])) : Object(r["e"])("", !0)])], 512), [[r["E"], 0 === a.activeTab]]), Object(r["I"])(Object(r["g"])("div", null, [Object(r["g"])(c)], 512), [[r["E"], 1 === a.activeTab]])])]);
    }

    var L = {
      "class": "w-full bg-grey-500"
    },
        P = Object(r["g"])("span", {
      "class": "px-2"
    }, "New Class", -1),
        $ = {
      key: 0,
      "class": "container mx-auto py-8"
    },
        R = {
      key: 0,
      "class": "mx-2 py-4 px-8 text-black text-xl font-bold border-b border-grey-500"
    },
        A = {
      name: "class_creation",
      id: "class_creation"
    },
        N = {
      "class": "py-10 px-8"
    },
        S = {
      "class": "mb-4"
    },
        D = Object(r["g"])("span", {
      "class": "px-2"
    }, "Add Attributes", -1),
        z = {
      "class": "flex flex-row py-2 px-8"
    },
        T = {
      "class": "w-1/4 "
    },
        B = {
      "class": "w-1/4"
    },
        H = {
      key: 0,
      "class": "w-1/4"
    },
        F = {
      "class": "border flex flex-wrap items-stretch w-full relative py-2 px-3  bg-white items-center rounded"
    },
        M = {
      "class": "flex -mr-px"
    },
        Y = {
      "class": "flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600"
    },
        G = {
      "class": "flex w-1/4 px-3 items-center"
    },
        X = {
      "class": "align-middle py-3 "
    },
        J = {
      "class": "align-middle py-3 "
    },
        K = {
      key: 0,
      "class": "flex flex-row py-2 px-8"
    },
        Z = {
      "class": "text-xs font-normal py-2 px-2"
    };

    function W(e, t, n, s, a, o) {
      var c = Object(r["x"])("font-awesome-icon");
      return Object(r["q"])(), Object(r["d"])("div", L, [Object(r["g"])("button", {
        "class": "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center",
        onClick: t[1] || (t[1] = function () {
          return o.addClass && o.addClass.apply(o, arguments);
        })
      }, [Object(r["g"])(c, {
        icon: "plus",
        size: "1x"
      }), P]), a.classes && a.classes.length > 0 ? (Object(r["q"])(), Object(r["d"])("div", $, [(Object(r["q"])(!0), Object(r["d"])(r["a"], null, Object(r["w"])(a.classes, function (t, n) {
        return Object(r["q"])(), Object(r["d"])("div", {
          "class": "w-full mx-auto bg-white rounded shadow",
          key: n
        }, ["" !== t.className ? (Object(r["q"])(), Object(r["d"])("div", R, Object(r["z"])(t.className), 1)) : Object(r["e"])("", !0), Object(r["g"])("form", A, [Object(r["g"])("div", N, [Object(r["g"])("div", S, [Object(r["I"])(Object(r["g"])("input", {
          "class": "w-3/4 border rounded py-2 px-3 text-grey-darker",
          type: t.type,
          name: t.idName,
          id: t.idName,
          "onUpdate:modelValue": function onUpdateModelValue(e) {
            return t.className = e;
          },
          placeholder: t.placeHolder
        }, null, 8, ["type", "name", "id", "onUpdate:modelValue", "placeholder"]), [[r["B"], t.className]]), Object(r["g"])("button", {
          onClick: Object(r["J"])(function (e) {
            return o.saveClass(t);
          }, ["prevent"])
        }, [Object(r["g"])(c, {
          icon: "save",
          size: "1x",
          "class": "mx-3"
        })], 8, ["onClick"])]), Object(r["g"])("a", {
          "class": "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center",
          onClick: function onClick(e) {
            return o.addAttributes(t);
          }
        }, [Object(r["g"])(c, {
          icon: "plus",
          size: "1x"
        }), D], 8, ["onClick"]), t.attributes && t.attributes.length > 0 ? (Object(r["q"])(!0), Object(r["d"])(r["a"], {
          key: 0
        }, Object(r["w"])(t.attributes, function (s, a) {
          return Object(r["q"])(), Object(r["d"])("div", {
            "class": "w-full mx-auto bg-white mb-4 mt-4",
            key: a + n
          }, [Object(r["g"])("div", z, [Object(r["g"])("div", T, [Object(r["I"])(Object(r["g"])("input", {
            "class": " border rounded  py-2 px-3 text-grey-darker border-0 relative self-center outline-none",
            type: s.nametype,
            name: s.idName,
            id: s.idName,
            "onUpdate:modelValue": function onUpdateModelValue(e) {
              return s.attributeName = e;
            },
            placeholder: s.placeHolder
          }, null, 8, ["type", "name", "id", "onUpdate:modelValue", "placeholder"]), [[r["B"], s.attributeName]])]), Object(r["g"])("div", B, [Object(r["I"])(Object(r["g"])("select", {
            "onUpdate:modelValue": function onUpdateModelValue(e) {
              return s.attributeType = e;
            },
            "class": "border rounded w-3/4 py-2 px-3 text-grey-darker border-0 relative self-center outline-none"
          }, [(Object(r["q"])(!0), Object(r["d"])(r["a"], null, Object(r["w"])(s.typeValues, function (e, t) {
            return Object(r["q"])(), Object(r["d"])("option", {
              key: t
            }, Object(r["z"])(e), 1);
          }), 128))], 8, ["onUpdate:modelValue"]), [[r["C"], s.attributeType]])]), "select" === s.attributeType ? (Object(r["q"])(), Object(r["d"])("div", H, [Object(r["g"])("div", F, [Object(r["I"])(Object(r["g"])("input", {
            "class": "flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 relative self-center outline-none",
            type: "text",
            name: "selectValue",
            id: "selectValue",
            "onUpdate:modelValue": function onUpdateModelValue(e) {
              return s.selectValue = e;
            },
            placeholder: "Enter Select Value"
          }, null, 8, ["onUpdate:modelValue"]), [[r["D"], s.selectValue]]), Object(r["g"])("div", M, [Object(r["g"])("span", Y, [Object(r["g"])(c, {
            icon: "plus",
            size: "1x",
            onClick: function onClick(e) {
              return o.addAttributesValues(s);
            }
          }, null, 8, ["onClick"])])])])])) : Object(r["e"])("", !0), Object(r["g"])("div", G, [Object(r["g"])("div", X, [Object(r["g"])("a", {
            "class": "cursor-pointer",
            onClick: Object(r["J"])(function (e) {
              return o.saveAttributes(t, s);
            }, ["prevent"])
          }, [Object(r["g"])(c, {
            icon: "save",
            size: "1x"
          })], 8, ["onClick"])]), Object(r["g"])("div", J, [Object(r["g"])("button", {
            onClick: function onClick(t) {
              return e.deleteAttributesValues(s);
            }
          }, [Object(r["g"])(c, {
            icon: "trash",
            size: "1x"
          })], 8, ["onClick"])])])]), "select" === s.attributeType && s.attributeValues.length > 0 ? (Object(r["q"])(), Object(r["d"])("div", K, [(Object(r["q"])(!0), Object(r["d"])(r["a"], null, Object(r["w"])(s.attributeValues, function (e, t) {
            return Object(r["q"])(), Object(r["d"])("div", {
              "class": "flex w-auto  justify-center items-center m-1 px-5 py-1 rounded-full bg-green-700 text-base text-white font-medium",
              key: t
            }, [Object(r["g"])("div", Z, Object(r["z"])(e), 1), Object(r["g"])(c, {
              icon: "times",
              size: "1x",
              onClick: function onClick(e) {
                return o.addAttributesValues(s);
              }
            }, null, 8, ["onClick"])]);
          }), 128))])) : Object(r["e"])("", !0)]);
        }), 128)) : Object(r["e"])("", !0)])])]);
      }), 128))])) : Object(r["e"])("", !0)]);
    }

    n("d3b7"), n("25f0");
    var Q = {
      data: function data() {
        return {
          "class": {
            classId: "",
            className: "",
            idName: "",
            placeHolder: "Enter Your Class Name",
            type: "text",
            attributes: []
          },
          attribute: {
            attributeName: "",
            nameType: "text",
            idName: "",
            placeHolder: "Enter Your Attribute Name",
            attributeType: "",
            typeValues: ["text", "select", "YesNo"],
            selectValue: "",
            attributeValues: []
          },
          classes: [],
          last_ID: ""
        };
      },
      methods: {
        addClass: function addClass() {
          var e = this;
          return Object(O["a"])(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function t() {
            var n;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function (t) {
              while (1) {
                switch (t.prev = t.next) {
                  case 0:
                    n = Object.create(e["class"]), e.classes.length > 0 ? n.idName = "className" + e.classes.length : n.idName = "className", e.classes.push(n);

                  case 3:
                  case "end":
                    return t.stop();
                }
              }
            }, t);
          }))();
        },
        saveClass: function saveClass(e) {
          var t = this;
          return Object(O["a"])(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function n() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function (n) {
              while (1) {
                switch (n.prev = n.next) {
                  case 0:
                    return n.next = 2, t.axios.post(t.appURI + "api/createClass", {
                      projectid: t.$store.state.project_id,
                      className: e.className
                    }).then(function (n) {
                      e.classId = n.data.last_insert_id, t.last_ID = n.data.last_insert_id;
                    });

                  case 2:
                  case "end":
                    return n.stop();
                }
              }
            }, n);
          }))();
        },
        addAttributes: function addAttributes(e) {
          var t = Object.create(this.attribute);
          e.attributes.length > 0 ? t.idName = "attributeName" + e.attributes.length : t.idName = "attributeName", e.attributes.push(t);
        },
        saveAttributes: function saveAttributes(e, t) {
          var n = this;
          return Object(O["a"])(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function r() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function (r) {
              while (1) {
                switch (r.prev = r.next) {
                  case 0:
                    return r.next = 2, n.axios.post(n.appURI + "api/createAttribute", {
                      class_id: e.classId.toString(),
                      attribute_name: t.attributeName,
                      attribute_type: t.attributeType,
                      attribute_Values: t.attributeValues
                    }).then(function (e) {
                      t.attributeId = e.last_insert_id;
                    });

                  case 2:
                  case "end":
                    return r.stop();
                }
              }
            }, r);
          }))();
        },
        addAttributesValues: function addAttributesValues(e) {
          "" !== e.selectValue && e.attributeValues.push(e.selectValue), e.selectValue = "";
        }
      },
      computed: {
        appURI: function appURI() {
          return this.$store.state.appURI;
        }
      }
    };
    Q.render = W;
    var ee = Q,
        te = {
      name: "App",
      components: {
        classComponent: ee
      },
      data: function data() {
        return {
          tabs: ["Projects", "Attributes"],
          activeTab: 0,
          formData: {
            title: "",
            description: ""
          },
          projects: []
        };
      },
      methods: {
        createProject: function createProject() {
          var e = this;
          return Object(O["a"])(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function t() {
            var n, r;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function (t) {
              while (1) {
                switch (t.prev = t.next) {
                  case 0:
                    return n = e.$refs.createForm, r = new FormData(n), e.$store.state.loading = !0, t.next = 5, e.axios.post(e.appURI + "api/createProject", r).then(function (t) {
                      e.$store.state.project_id = t.data.last_insert_id;
                    });

                  case 5:
                    return t.next = 7, e.axios.get(e.appURI + "api/getProjects").then(function (t) {
                      e.$store.state.mainProjects = t.data;
                    });

                  case 7:
                    e.activeTab = 1;

                  case 8:
                  case "end":
                    return t.stop();
                }
              }
            }, t);
          }))();
        }
      },
      computed: {
        Layers: function Layers() {
          return this.$store.state.Layers;
        },
        galleries: function galleries() {
          return this.$store.state.galleries;
        },
        appURI: function appURI() {
          return this.$store.state.appURI;
        }
      }
    };
    te.render = V;
    var ne = te,
        re = {
      key: 0,
      "class": "bg-gray-100 w-full rounded py-8 px-4"
    },
        se = {
      "class": "bg-white p-16 text-left mx-auto border"
    },
        ae = {
      "class": "text-lg font-medium text-gray-900 truncate pb-8 px-1"
    },
        oe = {
      "class": "flex flex-wrap -mx-4 -mb-8"
    };

    function ce(e, t, n, s, a, o) {
      return o.project ? (Object(r["q"])(), Object(r["d"])("div", re, [Object(r["g"])("div", se, [Object(r["g"])("div", null, [Object(r["g"])("h2", ae, Object(r["z"])(o.project.project_name), 1), Object(r["g"])("div", oe, [(Object(r["q"])(!0), Object(r["d"])(r["a"], null, Object(r["w"])(o.project.Details, function (e, t) {
        return Object(r["q"])(), Object(r["d"])("div", {
          "class": "md:w-1/4 px-4 mb-8",
          key: t
        }, [Object(r["g"])("img", {
          "class": "rounded shadow-md",
          src: o.appURI + "uploads/" + e.image_Location,
          alt: "",
          onClick: function onClick(t) {
            return o.editImage(e, o.project);
          }
        }, null, 8, ["src", "onClick"])]);
      }), 128))])])])])) : Object(r["e"])("", !0);
    }

    var ie = {
      name: "Grid",
      data: function data() {
        return {
          activeTab: 0,
          tabs: ["Video Frames", "Attributes"],
          tableHeader: []
        };
      },
      computed: {
        project: function project() {
          return this.$store.state.selectedProject;
        },
        appURI: function appURI() {
          return this.$store.state.appURI;
        }
      },
      methods: {
        editImage: function editImage(e, t) {
          e.boundingBoxes = [], this.$store.state.selectedImage = e.image_Location, this.$router.push("/editor");
        }
      }
    };
    ie.render = ce;
    var le = ie,
        ue = {
      "class": "w-full overflow-hidden"
    };

    function de(e, t, n, s, a, o) {
      var c = Object(r["x"])("bb-component"),
          i = Object(r["x"])("carousal");
      return Object(r["q"])(), Object(r["d"])("div", ue, [Object(r["g"])(c, {
        src: o.imgSrc,
        project: o.project,
        key: o.selectedImage
      }, null, 8, ["src", "project"]), Object(r["g"])(i)]);
    }

    function be(e, t, n, s, a, o) {
      return a.imgsize ? (Object(r["q"])(), Object(r["d"])("svg", {
        key: 0,
        viewBox: "0 0 " + a.imgsize.width + " " + a.imgsize.height,
        id: "viewport"
      }, [Object(r["g"])("image", {
        "xlink:href": n.src,
        width: "100%",
        height: "100%"
      }, null, 8, ["xlink:href"]), (Object(r["q"])(!0), Object(r["d"])(r["a"], null, Object(r["w"])(o.bbs.boundingBoxes, function (e, t) {
        return Object(r["q"])(), Object(r["d"])("rect", {
          key: "bb" + t,
          x: e.x || "0",
          y: e.y || "0",
          width: e.w || "0",
          height: e.h || "0",
          fill: "#EF5350",
          "fill-opacity": "0.4",
          stroke: n.bbcolor || "#EF5350",
          "stroke-width": n.bbstroke || "2",
          "vector-effect": "non-scaling-stroke",
          "shape-rendering": "crispEdges",
          "class": ["draggable", "bb-" + t + " cursor-move"]
        }, null, 10, ["x", "y", "width", "height", "stroke", "stroke-width"]);
      }), 128)), (Object(r["q"])(!0), Object(r["d"])(r["a"], null, Object(r["w"])(o.bbs.boundingBoxes, function (e, t) {
        return Object(r["q"])(), Object(r["d"])("circle", {
          key: "bb" + t,
          cx: e.x + e.w || "0",
          cy: e.y || "0",
          r: "15",
          fill: "#EF5350",
          "fill-opacity": "0.4",
          stroke: n.bbcolor || "#EF5350",
          "stroke-width": n.bbstroke || "2",
          "vector-effect": "non-scaling-stroke",
          "shape-rendering": "crispEdges",
          "class": ["resize", "bb-" + t]
        }, null, 10, ["cx", "cy", "stroke", "stroke-width"]);
      }), 128)), (Object(r["q"])(!0), Object(r["d"])(r["a"], null, Object(r["w"])(o.bbs.boundingBoxes, function (e, t) {
        return Object(r["q"])(), Object(r["d"])("circle", {
          key: "bb" + t,
          cx: e.x || "0",
          cy: e.y + e.h || "0",
          r: "15",
          fill: "#EF5350",
          "fill-opacity": "0.4",
          stroke: n.bbcolor || "#EF5350",
          "stroke-width": n.bbstroke || "2",
          "vector-effect": "non-scaling-stroke",
          "shape-rendering": "crispEdges",
          "class": ["resize", "bb-" + t]
        }, null, 10, ["cx", "cy", "stroke", "stroke-width"]);
      }), 128)), (Object(r["q"])(!0), Object(r["d"])(r["a"], null, Object(r["w"])(o.bbs.boundingBoxes, function (e, t) {
        return Object(r["q"])(), Object(r["d"])("circle", {
          key: "bb" + t,
          cx: e.x || "0",
          cy: e.y || "0",
          r: "15",
          fill: "#EF5350",
          "fill-opacity": "0.4",
          stroke: n.bbcolor || "#EF5350",
          "stroke-width": n.bbstroke || "2",
          "vector-effect": "non-scaling-stroke",
          "shape-rendering": "crispEdges",
          "class": ["resize", "bb-" + t]
        }, null, 10, ["cx", "cy", "stroke", "stroke-width"]);
      }), 128)), (Object(r["q"])(!0), Object(r["d"])(r["a"], null, Object(r["w"])(o.bbs.boundingBoxes, function (e, t) {
        return Object(r["q"])(), Object(r["d"])("circle", {
          key: "bb" + t,
          cx: e.x + e.w || "0",
          cy: e.y + e.h || "0",
          r: "15",
          fill: "#EF5350",
          "fill-opacity": "0.4",
          stroke: n.bbcolor || "#EF5350",
          "stroke-width": n.bbstroke || "2",
          "vector-effect": "non-scaling-stroke",
          "shape-rendering": "crispEdges",
          "class": ["resize", "bb-" + t]
        }, null, 10, ["cx", "cy", "stroke", "stroke-width"]);
      }), 128))], 8, ["viewBox"])) : Object(r["e"])("", !0);
    }

    n("99af"), n("07ac"), n("b0c0");
    var pe = {
      props: ["src", "bbcolor", "bbstroke"],
      data: function data() {
        return {
          imgsize: null,
          svgElement: Object,
          svgPoint: Object,
          boundingBoxes: [],
          oneRectangle: {},
          mousePosition: {},
          start: {},
          isDrawing: !1,
          baseImage: Object,
          selectedElement: !1,
          draggingElement: "",
          offset: null,
          transform: null,
          annotation: {
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            printCoordinates: function printCoordinates() {
              console.log("X: ".concat(this.x, "px, Y: ").concat(this.y, "px, Width: ").concat(this.w, "px, Height: ").concat(this.h, "px"));
            }
          }
        };
      },
      mounted: function mounted() {
        var e = this;
        return Object(O["a"])(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function t() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function (t) {
            while (1) {
              switch (t.prev = t.next) {
                case 0:
                  if (!e.src) {
                    t.next = 4;
                    break;
                  }

                  return t.next = 3, e.getImageSize(e.src).then(function (t) {
                    e.imgsize = t;
                  });

                case 3:
                  e.createPoints();

                case 4:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      },
      computed: {
        projectDetails: function projectDetails() {
          return this.$store.state.selectedProject.Details;
        },
        selectedImage: function selectedImage() {
          return this.$store.state.selectedImage;
        },
        bbs: function bbs() {
          var e,
              t = this;
          return Object.values(this.projectDetails).forEach(function (n) {
            n.image_Location === t.selectedImage && (e = n);
          }), e;
        }
      },
      methods: {
        handleMouseDown: function handleMouseDown(e) {
          var t = this;
          return Object(O["a"])(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function n() {
            var r, s, a, o, c, i, l, u, d;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function (n) {
              while (1) {
                switch (n.prev = n.next) {
                  case 0:
                    e.target.classList.contains("draggable") ? (r = e.target.classList[1].toString().substring(3), t.selectedElement = e.target, s = function s(e) {
                      if (t.selectedElement) {
                        var n = {
                          x: t.bbs.boundingBoxes[r].x,
                          y: t.bbs.boundingBoxes[r].y
                        };
                        e.preventDefault();
                        var s = t.svgPoint(t.svgElement, e.clientX, e.clientY);
                        t.bbs.boundingBoxes[r].x = s.x - n.x, t.bbs.boundingBoxes[r].y = s.y - n.y;
                      }
                    }, a = function e(n) {
                      t.svgElement.removeEventListener("mousemove", s), t.svgElement.removeEventListener("mouseup", e), t.svgElement.removeEventListener("mouseleave", e), t.selectedElement = null;
                    }, t.svgElement.addEventListener("mousemove", s), t.svgElement.addEventListener("mouseup", a), t.svgElement.addEventListener("mouseleave", a)) : e.target.classList.contains("resize") ? (r = e.target.classList[1].toString().substring(3), t.draggingElement = e.target, o = function o(e) {
                      if (t.draggingElement) {
                        e.preventDefault();
                        var n = t.svgPoint(t.svgElement, e.clientX, e.clientY);
                        t.bbs.boundingBoxes[r].w = Math.max(n.x, 1), t.bbs.boundingBoxes[r].h = Math.max(n.y, 1);
                      }
                    }, c = function e(n) {
                      t.svgElement.removeEventListener("mousemove", o), t.svgElement.removeEventListener("mouseup", e), t.svgElement.removeEventListener("mouseleave", e), t.draggingElement = null;
                    }, t.svgElement.addEventListener("mousemove", o), t.svgElement.addEventListener("mouseup", c), t.svgElement.addEventListener("mouseleave", c)) : (i = document.createElementNS("http://www.w3.org/2000/svg", "rect"), l = t.svgPoint(t.svgElement, e.clientX, e.clientY), u = function u(e) {
                      var n = t.svgPoint(t.svgElement, e.clientX, e.clientY),
                          r = Math.abs(n.x - l.x),
                          s = Math.abs(n.y - l.y);
                      n.x > l.x && (n.x = l.x), n.y > l.y && (n.y = l.y), i.setAttributeNS(null, "x", n.x), i.setAttributeNS(null, "y", n.y), i.setAttributeNS(null, "width", r), i.setAttributeNS(null, "height", s), i.setAttributeNS(null, "stroke", "#EF5350"), i.setAttributeNS(null, "fill", "#EF5350"), i.setAttributeNS(null, "fill-opacity", "0.4"), i.setAttributeNS(null, "stroke-width", "2"), i.setAttributeNS(null, "vector-effect", "non-scaling-stroke"), i.setAttributeNS(null, "shape-rendering", "crispEdges"), i.setAttributeNS(null, "class", "draggable"), t.svgElement.appendChild(i), l.x = n.x, l.y = n.y;
                    }, d = function () {
                      var e = Object(O["a"])(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function e(n) {
                        var r, s, a, o;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function (e) {
                          while (1) {
                            switch (e.prev = e.next) {
                              case 0:
                                r = t.svgPoint(t.svgElement, n.clientX, n.clientY), s = Math.abs(r.x - l.x), a = Math.abs(r.y - l.y), o = Object.create(t.annotation), o.x = l.x, o.y = l.y, o.w = s, o.h = a, o.selectedClass = "", o.selectedAttribute = "", o.attributeValues = [], o.name = "Bounding Box Name", s > 10 && a > 10 && (t.boundingBoxes.push(o), t.$store.commit("PUSH_BOUNDING_BOX", t.boundingBoxes)), t.svgElement.removeChild(i), t.svgElement.removeEventListener("mousemove", u), t.svgElement.removeEventListener("mouseup", d);

                              case 16:
                              case "end":
                                return e.stop();
                            }
                          }
                        }, e);
                      }));
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    }(), t.svgElement.addEventListener("mousemove", u), t.svgElement.addEventListener("mouseup", d));

                  case 1:
                  case "end":
                    return n.stop();
                }
              }
            }, n);
          }))();
        },
        getMousePosition: function getMousePosition(e) {
          return {
            x: e.clientX,
            y: e.clientY
          };
        },
        createPoints: function createPoints() {
          var e = this;
          this.svgElement = document.querySelector("#viewport"), this.svgPoint = function (t, n, r) {
            var s = e.svgElement.createSVGPoint();
            return s.x = n, s.y = r, s.matrixTransform(t.getScreenCTM().inverse());
          }, this.svgElement.addEventListener("mousedown", this.handleMouseDown);
        },
        getImageSize: function getImageSize(e) {
          return new Promise(function (t) {
            var n = new Image();
            n.onload = function () {
              t({
                width: n.width,
                height: n.height
              });
            }, n.src = e;
          });
        }
      }
    };
    pe.render = be;
    var ge = pe;

    function me(e, t, n, s, a, o) {
      var c = Object(r["x"])("slide"),
          i = Object(r["x"])("navigation"),
          l = Object(r["x"])("carousel", !0);
      return o.project ? (Object(r["q"])(), Object(r["d"])(l, {
        key: 0,
        "items-to-show": "7",
        "class": "my-2 m-auto w-11/12"
      }, {
        addons: Object(r["H"])(function () {
          return [Object(r["g"])(i)];
        }),
        "default": Object(r["H"])(function () {
          return [(Object(r["q"])(!0), Object(r["d"])(r["a"], null, Object(r["w"])(o.project.Details, function (e) {
            return Object(r["q"])(), Object(r["d"])(c, {
              key: e
            }, {
              "default": Object(r["H"])(function () {
                return [Object(r["g"])("img", {
                  src: o.appURI + "/uploads/" + e.image_Location,
                  "class": "w-40",
                  onClick: function onClick(t) {
                    return o.changeImage(e.image_Location);
                  }
                }, null, 8, ["src", "onClick"])];
              }),
              _: 2
            }, 1024);
          }), 128))];
        }),
        _: 1
      })) : Object(r["e"])("", !0);
    }

    n("4001");
    var fe = n("0b81"),
        je = {
      name: "App",
      components: {
        Carousel: fe["a"],
        Slide: fe["c"],
        Navigation: fe["b"]
      },
      methods: {
        changeImage: function changeImage(e) {
          this.$store.state.designComponent = this.$store.state.designComponent + 1, this.$store.state.bboxComponent = this.$store.state.bboxComponent++, this.$store.state.selectedImage = e;
        }
      },
      computed: {
        project: function project() {
          return this.$store.state.selectedProject;
        },
        number: function number() {
          return this.$store.state.selectedImage;
        },
        appURI: function appURI() {
          return this.$store.state.appURI;
        }
      }
    };
    je.render = me;
    var Oe = je,
        he = {
      components: {
        carousal: Oe,
        bbComponent: ge
      },
      data: function data() {
        return {
          componentKey: 0
        };
      },
      methods: {
        forceRerender: function forceRerender(e) {
          this.componentKey += 1;
        }
      },
      computed: {
        project: function project() {
          return this.$store.state.selectedProject;
        },
        selectedImage: function selectedImage() {
          return this.$store.state.selectedImage;
        },
        appURI: function appURI() {
          return this.$store.state.appURI;
        },
        imgSrc: function imgSrc() {
          return this.appURI + "uploads/" + this.selectedImage;
        }
      }
    };
    he.render = de;
    var xe = he,
        ve = {
      "class": "h-screen w-screen bg-white flex flex-col"
    },
        ye = {
      "class": "relative flex flex-1 flex-row"
    },
        we = {
      "class": "w-full h-full relative z-10 scrollbar text-left text-none"
    };

    function ke(e, t, n, s, a, o) {
      var c = Object(r["x"])("NavBar"),
          i = Object(r["x"])("Layers"),
          l = Object(r["x"])("Videos"),
          u = Object(r["x"])("router-view"),
          d = Object(r["x"])("Design"),
          b = Object(r["x"])("Loading");
      return Object(r["q"])(), Object(r["d"])("main", ve, [Object(r["g"])(c), Object(r["g"])("section", ye, ["Editor" !== e.$route.name ? (Object(r["q"])(), Object(r["d"])(i, {
        key: 0
      })) : Object(r["e"])("", !0), "Grid" === e.$route.name || "Editor" === e.$route.name || "Home" === e.$route.name ? (Object(r["q"])(), Object(r["d"])(l, {
        key: 1
      })) : Object(r["e"])("", !0), Object(r["g"])("section", we, [Object(r["g"])(u)]), Object(r["g"])(d, {
        key: o.designComponent
      })]), o.loading ? (Object(r["q"])(), Object(r["d"])(b, {
        key: 0
      })) : Object(r["e"])("", !0)]);
    }

    var Ie = {
      id: "right-panel",
      "class": "relative bg-gray-800 border-l border-gray-600 h-full w-64 flex flex-col overflow-hidden flex-shrink-0"
    },
        Ee = {
      "class": "text-white text-lg font-medium tracking-wide flex justify-between items-center py-3 "
    },
        _e = {
      "class": "flex items-center leading-5 py-px"
    },
        Ue = {
      key: 0
    },
        Ce = {
      key: 0,
      "class": "my-4"
    },
        qe = {
      "class": "text-white text-sm font-medium tracking-wide flex justify-between items-center py-1"
    },
        Ve = Object(r["g"])("option", {
      value: "Yes"
    }, "Yes", -1),
        Le = Object(r["g"])("option", {
      value: "No"
    }, "No", -1),
        Pe = {
      key: 1,
      "class": "my-4"
    },
        $e = {
      "class": "text-white text-sm font-medium tracking-wide flex justify-between items-center py-1"
    };

    function Re(e, t, n, s, a, o) {
      return Object(r["q"])(), Object(r["d"])("aside", Ie, [o.selectedDetail && o.selectedDetail.boundingBoxes && o.selectedDetail.boundingBoxes.length > 0 ? (Object(r["q"])(!0), Object(r["d"])(r["a"], {
        key: 0
      }, Object(r["w"])(o.selectedDetail.boundingBoxes, function (e, t) {
        return Object(r["q"])(), Object(r["d"])("section", {
          "class": "mx-5 w-full h-auto relative z-10 scrollbar text-none overflow-auto",
          key: t
        }, [Object(r["g"])("header", Ee, [Object(r["g"])("div", _e, Object(r["z"])(e.name), 1)]), Object(r["g"])("div", null, [Object(r["I"])(Object(r["g"])("select", {
          "onUpdate:modelValue": function onUpdateModelValue(t) {
            return e.selectedClass = t;
          },
          "class": "border rounded w-3/4 py-2 px-3 text-grey-darker border-0 relative self-center outline-none",
          onChange: function onChange(t) {
            return o.getAttributes(e);
          }
        }, [(Object(r["q"])(!0), Object(r["d"])(r["a"], null, Object(r["w"])(o.selectedDetail.classDetails, function (e, t) {
          return Object(r["q"])(), Object(r["d"])("option", {
            key: t,
            value: e.id
          }, Object(r["z"])(e.class_name), 9, ["value"]);
        }), 128))], 40, ["onUpdate:modelValue", "onChange"]), [[r["C"], e.selectedClass]])]), e && e.attributeValues ? (Object(r["q"])(), Object(r["d"])("div", Ue, [(Object(r["q"])(!0), Object(r["d"])(r["a"], null, Object(r["w"])(e.attributeValues, function (e, t) {
          return Object(r["q"])(), Object(r["d"])(r["a"], {
            key: t
          }, ["YesNo" === e.attribute_type ? (Object(r["q"])(), Object(r["d"])("div", Ce, [Object(r["g"])("div", qe, Object(r["z"])(e.attribute_name), 1), Object(r["I"])(Object(r["g"])("select", {
            "onUpdate:modelValue": function onUpdateModelValue(t) {
              return e.setValue = t;
            },
            "class": "border rounded w-3/4 py-2 px-3 text-grey-darker border-0 relative self-center outline-none"
          }, [Ve, Le], 8, ["onUpdate:modelValue"]), [[r["C"], e.setValue]])])) : Object(r["e"])("", !0), "select" === e.attribute_type ? (Object(r["q"])(), Object(r["d"])("div", Pe, [Object(r["g"])("div", $e, Object(r["z"])(e.attribute_name), 1), Object(r["I"])(Object(r["g"])("select", {
            "onUpdate:modelValue": function onUpdateModelValue(t) {
              return e.setValue = t;
            },
            "class": "border rounded w-3/4 py-2 px-3 text-grey-darker border-0 relative self-center outline-none"
          }, [(Object(r["q"])(!0), Object(r["d"])(r["a"], null, Object(r["w"])(e.attribute_Values, function (e, t) {
            return Object(r["q"])(), Object(r["d"])("option", {
              key: t,
              value: e
            }, Object(r["z"])(e), 9, ["value"]);
          }), 128))], 8, ["onUpdate:modelValue"]), [[r["C"], e.setValue]])])) : Object(r["e"])("", !0)], 64);
        }), 128))])) : Object(r["e"])("", !0)]);
      }), 128)) : Object(r["e"])("", !0)]);
    }

    n("7db0"), n("c740");
    var Ae = {
      watch: {
        selectedDetail: {
          immediate: !0,
          deep: !0,
          handler: function handler(e, t) {
            console.log(e, t), this.selectedDetail = e;
          }
        }
      },
      computed: {
        details: function details() {
          return this.$store.state.selectedProject && this.$store.state.selectedProject.Details ? this.$store.state.selectedProject.Details : "";
        },
        selectedImage: function selectedImage() {
          return this.$store.state.selectedImage;
        },
        selectedDetail: function selectedDetail() {
          var e = this;
          return Object.values(this.details).find(function (t) {
            return t.image_Location === e.selectedImage;
          });
        },
        selectedIndex: function selectedIndex() {
          var e = this;
          return Object.values(this.details).findIndex(function (t) {
            return t.image_Location === e.selectedImage;
          });
        },
        designComponent: function designComponent() {
          return this.$store.state.designComponent;
        },
        appURI: function appURI() {
          return this.$store.state.appURI;
        }
      },
      methods: {
        getAttributes: function getAttributes(e) {
          var t = this;
          return Object(O["a"])(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function n() {
            var r;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function (n) {
              while (1) {
                switch (n.prev = n.next) {
                  case 0:
                    return r = t, n.next = 3, t.axios.get(t.appURI + "api/getAttributes", {
                      params: {
                        class_id: e.selectedClass
                      }
                    }).then(function (e) {
                      r.$store.commit("PUSH_ATTRIBUTE_VALUES", e.data);
                    });

                  case 3:
                  case "end":
                    return n.stop();
                }
              }
            }, n);
          }))();
        }
      }
    };
    Ae.render = Re;
    var Ne = Ae,
        Se = {
      id: "right-panel",
      "class": "relative bg-gray-800 border-l border-gray-600 h-full w-64 flex flex-col overflow-hidden flex-shrink-0"
    },
        De = {
      key: 0,
      "class": "rounded px-6"
    },
        ze = {
      "class": "sticky top-0 z-50 border-l-4 border-red-400 -ml-6 pl-6 flex items-center justify-between py-4"
    },
        Te = Object(r["g"])("div", {
      "class": "font-semibold text-white"
    }, "Projects", -1),
        Be = Object(r["g"])("hr", {
      "class": "-mx-6"
    }, null, -1),
        He = {
      "class": "flex-1 pl-2"
    },
        Fe = {
      "class": "text-white font-semibold"
    },
        Me = Object(r["g"])("div", {
      "class": "text-gray-600 font-thin"
    }, null, -1),
        Ye = Object(r["g"])("hr", {
      "class": "boder-b-0 my-4"
    }, null, -1);

    function Ge(e, t, n, s, a, o) {
      var c = Object(r["x"])("font-awesome-icon");
      return Object(r["q"])(), Object(r["d"])("aside", Se, [o.projects && o.projects.length > 0 ? (Object(r["q"])(), Object(r["d"])("div", De, [Object(r["g"])("div", ze, [Te, Object(r["g"])("button", {
        "class": "text-red-400 font-bold py-2 px-4 rounded inline-flex items-center",
        onClick: t[1] || (t[1] = function (e) {
          return o.goToCreate();
        })
      }, [Object(r["g"])(c, {
        icon: "plus",
        size: "1x"
      })])]), Be, (Object(r["q"])(!0), Object(r["d"])(r["a"], null, Object(r["w"])(o.projects, function (e, t) {
        return Object(r["q"])(), Object(r["d"])(r["a"], {
          key: t
        }, [Object(r["g"])("div", {
          "class": "flex items-center justify-between my-4",
          onClick: function onClick(t) {
            return o.getAllFrames(e);
          }
        }, [Object(r["g"])("div", He, [Object(r["g"])("div", Fe, Object(r["z"])(e.project_name), 1), Me])], 8, ["onClick"]), Ye], 64);
      }), 128))])) : Object(r["e"])("", !0)]);
    }

    var Xe = {
      data: function data() {
        return {
          tableHeader: []
        };
      },
      created: function created() {
        var e = this;
        this.axios.get(this.appURI + "api/getProjects").then(function (t) {
          e.$store.state.mainProjects = t.data;
        });
      },
      methods: {
        getAllFrames: function getAllFrames(e) {
          this.$store.state.selectedMainProject = e, this.$store.state.project_id = e.id, this.$router.push("/project");
        },
        goToCreate: function goToCreate() {
          this.$router.push("/");
        }
      },
      computed: {
        projects: function projects() {
          return this.$store.state.mainProjects;
        },
        appURI: function appURI() {
          return this.$store.state.appURI;
        }
      }
    };
    Xe.render = Ge;
    var Je = Xe,
        Ke = {
      id: "right-panel",
      "class": "relative bg-gray-800 border-l border-gray-600 h-full w-64 flex flex-col overflow-hidden flex-shrink-0"
    },
        Ze = {
      "class": "rounded px-6"
    },
        We = {
      "class": "sticky top-0 z-50 border-l-4 border-red-400 -ml-6 pl-6 flex items-center justify-between py-4"
    },
        Qe = Object(r["g"])("div", {
      "class": "font-semibold text-white"
    }, "Videos", -1),
        et = Object(r["g"])("hr", {
      "class": "-mx-6"
    }, null, -1),
        tt = {
      "class": "flex-1 pl-2"
    },
        nt = {
      "class": "text-white font-semibold"
    },
        rt = Object(r["g"])("div", {
      "class": "text-gray-600 font-thin"
    }, null, -1),
        st = Object(r["g"])("hr", {
      "class": "boder-b-0 my-4"
    }, null, -1);

    function at(e, t, n, s, a, o) {
      var c = Object(r["x"])("font-awesome-icon");
      return Object(r["q"])(), Object(r["d"])("aside", Ke, [Object(r["g"])("div", Ze, [Object(r["g"])("div", We, [Qe, Object(r["g"])("button", {
        "class": "text-red-400 font-bold py-2 px-4 rounded inline-flex items-center",
        onClick: t[1] || (t[1] = function (e) {
          return o.goToUpload();
        })
      }, [Object(r["g"])(c, {
        icon: "plus",
        size: "1x"
      })])]), et, o.projects && o.projects.length > 0 ? (Object(r["q"])(), Object(r["d"])(r["a"], {
        key: 0
      }, [(Object(r["q"])(!0), Object(r["d"])(r["a"], null, Object(r["w"])(o.projects, function (e, t) {
        return Object(r["q"])(), Object(r["d"])("div", {
          "class": "flex items-center justify-between my-4",
          onClick: function onClick(t) {
            return o.getAllFrames(e);
          },
          key: t
        }, [Object(r["g"])("div", tt, [Object(r["g"])("div", nt, Object(r["z"])(e.project_name), 1), rt])], 8, ["onClick"]);
      }), 128)), st], 64)) : Object(r["e"])("", !0)])]);
    }

    var ot = {
      data: function data() {
        return {
          tableHeader: []
        };
      },
      created: function created() {
        var e = this;
        this.axios.get(this.appURI + "api/getVideos", {
          params: {
            project_id: this.$store.state.project_id
          }
        }).then(function (t) {
          e.$store.state.projects = t.data;
        });
      },
      methods: {
        getAllFrames: function getAllFrames(e) {
          this.$store.state.selectedProject = e, this.$router.push("/project");
        },
        goToUpload: function goToUpload() {
          this.$router.push("/upload");
        }
      },
      computed: {
        projects: function projects() {
          return this.$store.state.projects;
        },
        appURI: function appURI() {
          return this.$store.state.appURI;
        }
      }
    };
    ot.render = at;
    var ct = ot,
        it = {
      "class": "flex flex-wrap"
    },
        lt = {
      "class": "w-full"
    },
        ut = {
      "class": "relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900"
    },
        dt = {
      "class": "container flex flex-wrap items-center justify-between"
    },
        bt = {
      "class": "w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
    },
        pt = Object(r["g"])("a", {
      href: "/",
      "class": "p-3 h-full flex items-center group border-r border-gray-600"
    }, [Object(r["g"])("img", {
      src: "https://drill-d.co.il/wp-content/uploads/2020/06/Big-Logo.d110a0.webp",
      "class": "h-10"
    })], -1),
        gt = Object(r["g"])("i", {
      "class": "fas fa-bars"
    }, null, -1),
        mt = {
      "class": "lg:flex lg:flex-grow items-center"
    },
        ft = {
      "class": "flex flex-col lg:flex-row list-none"
    },
        jt = {
      "class": "nav-item"
    },
        Ot = Object(r["f"])("Projects"),
        ht = Object(r["g"])("li", {
      "class": "nav-item"
    }, [Object(r["g"])("a", {
      "class": "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75",
      href: "#pablo"
    }, " Profile ")], -1),
        xt = Object(r["g"])("li", {
      "class": "nav-item"
    }, [Object(r["g"])("a", {
      "class": "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75",
      href: "#pablo"
    }, " Settings ")], -1),
        vt = {
      "class": "nav-item"
    },
        yt = Object(r["f"])("Add Users");

    function wt(e, t, n, s, a, o) {
      var c = Object(r["x"])("router-link");
      return Object(r["q"])(), Object(r["d"])("div", it, [Object(r["g"])("div", lt, [Object(r["g"])("nav", ut, [Object(r["g"])("div", dt, [Object(r["g"])("div", bt, [pt, Object(r["g"])("button", {
        "class": "text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",
        type: "button",
        onClick: t[1] || (t[1] = function (t) {
          return e.toggleNavbar();
        })
      }, [gt])]), Object(r["g"])("div", mt, [Object(r["g"])("ul", ft, [Object(r["g"])("li", jt, [Object(r["g"])(c, {
        "class": "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75",
        to: "/dashboard"
      }, {
        "default": Object(r["H"])(function () {
          return [Ot];
        }),
        _: 1
      })]), ht, xt, Object(r["g"])("li", vt, [Object(r["g"])(c, {
        "class": "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75",
        to: "/create-user"
      }, {
        "default": Object(r["H"])(function () {
          return [yt];
        }),
        _: 1
      })])])])]), Object(r["g"])("button", {
        "class": "bg-transparent px-6 text-white font-bold cursor-pointer",
        onClick: t[2] || (t[2] = function () {
          return o.Logout && o.Logout.apply(o, arguments);
        })
      }, "Logout")])])]);
    }

    var kt = n("bc3a"),
        It = n.n(kt),
        Et = {
      methods: {
        Logout: function Logout() {
          var e = this;
          It.a.post("api/users/logout").then(function () {
            localStorage.removeItem("user_token"), localStorage.removeItem("id"), localStorage.removeItem("name"), localStorage.removeItem("user_role"), e.$router.push("/");
          })["catch"](function (e) {
            console.log(e);
          });
        }
      }
    };
    Et.render = wt;
    var _t = Et,
        Ut = {
      "class": "flex w-full h-full fixed block h-screen text-center bg-white opacity-75 z-50"
    },
        Ct = Object(r["g"])("div", {
      "class": "flex justify-around m-auto"
    }, [Object(r["g"])("span", {
      "class": "inline-flex rounded-md shadow-sm"
    }, [Object(r["g"])("button", {
      type: "button",
      "class": "inline-flex items-center px-4 py-2 border border-transparent text-base text-xl leading-6 font-medium rounded-md text-gray-700 transition ease-in-out duration-150 cursor-not-allowed",
      disabled: ""
    }, [Object(r["g"])("svg", {
      "class": "animate-spin -ml-1 mr-3 h-8 w-8 text-gray-700",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24"
    }, [Object(r["g"])("circle", {
      "class": "opacity-25",
      cx: "12",
      cy: "12",
      r: "10",
      stroke: "currentColor",
      "stroke-width": "4"
    }), Object(r["g"])("path", {
      "class": "opacity-75",
      fill: "currentColor",
      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    })]), Object(r["f"])(" Processing ")])])], -1);

    function qt(e, t) {
      return Object(r["q"])(), Object(r["d"])("div", Ut, [Ct]);
    }

    var Vt = {};
    Vt.render = qt;
    var Lt = Vt,
        Pt = {
      name: "App",
      components: {
        Design: Ne,
        NavBar: _t,
        Layers: Je,
        Loading: Lt,
        Videos: ct
      },
      computed: {
        designComponent: function designComponent() {
          return this.$store.state.designComponent;
        },
        loading: function loading() {
          return this.$store.state.loading;
        }
      }
    };
    Pt.render = ke;
    var $t = Pt,
        Rt = n("dd45"),
        At = n.n(Rt),
        Nt = Object(r["K"])("data-v-0765108e");
    Object(r["t"])("data-v-0765108e");
    var St = {
      "class": "login_page"
    },
        Dt = {
      "class": "w-full h-screen flex items-center justify-center login_full_scrn bg-gray-900"
    },
        zt = {
      "class": "\r\n          bg-white\r\n          w-6/12\r\n          flex\r\n          items-center\r\n          justify-center\r\n          rounded\r\n          px-16\r\n          pt-16\r\n          pb-16\r\n          mb-4\r\n        "
    },
        Tt = Object(r["g"])("div", {
      "class": "w-1/2"
    }, [Object(r["g"])("img", {
      src: At.a,
      alt: ""
    })], -1),
        Bt = {
      "class": "form_box w-1/2 px-10 pb-16 pt-8 border-l-2 border-gainsboro"
    },
        Ht = {
      "class": "err_box h-12"
    },
        Ft = {
      key: 0,
      "class": "error py-3 text-red-500"
    },
        Mt = {
      "class": "mb-4"
    },
        Yt = Object(r["g"])("label", {
      "class": "block text-gray-700 text-sm font-bold mb-2",
      "for": "username"
    }, " Username ", -1),
        Gt = {
      "class": "mb-6"
    },
        Xt = Object(r["g"])("label", {
      "class": "block text-gray-700 text-sm font-bold mb-2",
      "for": "password"
    }, " Password ", -1),
        Jt = {
      "class": "flex items-center justify-between"
    },
        Kt = Object(r["g"])("a", {
      "class": "\r\n                inline-block\r\n                align-baseline\r\n                font-bold\r\n                text-sm text-blue-500\r\n                hover:text-blue-800\r\n              ",
      href: "#"
    }, " Forgot Password? ", -1);
    Object(r["r"])();
    var Zt = Nt(function (e, t, n, s, a, o) {
      return Object(r["q"])(), Object(r["d"])("div", St, [Object(r["g"])("div", Dt, [Object(r["g"])("form", zt, [Tt, Object(r["g"])("div", Bt, [Object(r["g"])("div", Ht, [1 == a.error ? (Object(r["q"])(), Object(r["d"])("div", Ft, "Invalid Credentials")) : Object(r["e"])("", !0)]), Object(r["g"])("div", Mt, [Yt, Object(r["I"])(Object(r["g"])("input", {
        "class": "\r\n                shadow\r\n                appearance-none\r\n                border\r\n                rounded\r\n                w-full\r\n                py-2\r\n                px-3\r\n                text-gray-700\r\n                leading-tight\r\n                focus:outline-none\r\n                focus:shadow-outline\r\n              ",
        id: "username",
        type: "text",
        placeholder: "Username",
        "onUpdate:modelValue": t[1] || (t[1] = function (e) {
          return a.email = e;
        })
      }, null, 512), [[r["D"], a.email]])]), Object(r["g"])("div", Gt, [Xt, Object(r["I"])(Object(r["g"])("input", {
        "class": "\r\n                shadow\r\n                appearance-none\r\n                border\r\n                rounded\r\n                w-full\r\n                py-2\r\n                px-3\r\n                text-gray-700\r\n                leading-tight\r\n                focus:outline-none\r\n                focus:shadow-outline\r\n              ",
        id: "password",
        type: "password",
        placeholder: "Password",
        "onUpdate:modelValue": t[2] || (t[2] = function (e) {
          return a.password = e;
        })
      }, null, 512), [[r["D"], a.password]])]), Object(r["g"])("div", Jt, [Object(r["g"])("button", {
        "class": "\r\n                bg-blue-500\r\n                hover:bg-blue-700\r\n                text-white\r\n                font-bold\r\n                py-2\r\n                px-4\r\n                rounded\r\n                focus:outline-none\r\n                focus:shadow-outline\r\n                login_btn\r\n              ",
        type: "button",
        onClick: t[3] || (t[3] = function () {
          return o.Login && o.Login.apply(o, arguments);
        })
      }, " Sign In "), Kt])])])])]);
    }),
        Wt = {
      data: function data() {
        return {
          email: "",
          password: "",
          error: !1
        };
      },
      methods: {
        Login: function Login() {
          var e = this,
              t = document.querySelector(".login_btn");
          t.innerHTML = "Loading", It.a.post("api/users/login", {
            email: this.email,
            password: this.password
          }).then(function (n) {
            var r = n.data.token,
                s = n.data.user.id,
                a = n.data.user.name,
                o = n.data.user.user_role;
            localStorage.setItem("user_token", r), localStorage.setItem("id", s), localStorage.setItem("name", a), localStorage.setItem("user_role", o), "" !== r && e.$router.push("/dashboard"), t.innerHTML = "Sign In";
          })["catch"](function (n) {
            console.log(n), e.error = !0, t.innerHTML = "Sign In";
          });
        }
      }
    };
    n("cbfc");
    Wt.render = Zt, Wt.__scopeId = "data-v-0765108e";
    var Qt = Wt,
        en = {
      "class": "w-2/5 mt-40 mx-auto login_full_scrn"
    },
        tn = {
      "class": "bg-white rounded mb-4"
    },
        nn = {
      "class": "form_box"
    },
        rn = {
      "class": "err_box h-12"
    },
        sn = {
      key: 0,
      "class": "success py-3 text-green-500"
    },
        an = {
      key: 1,
      "class": "error py-3 text-red-500"
    },
        on = {
      key: 2,
      "class": "error py-3 text-red-500"
    },
        cn = {
      "class": "mb-4"
    },
        ln = Object(r["g"])("label", {
      "class": "block text-gray-700 text-sm font-bold mb-2",
      "for": "name"
    }, " Your Name ", -1),
        un = {
      "class": "mb-4"
    },
        dn = Object(r["g"])("label", {
      "class": "block text-gray-700 text-sm font-bold mb-2",
      "for": "userrole"
    }, " User Role ", -1),
        bn = {
      "class": "mb-4"
    },
        pn = Object(r["g"])("label", {
      "class": "block text-gray-700 text-sm font-bold mb-2",
      "for": "username"
    }, " Email ", -1),
        gn = {
      "class": "mb-12"
    },
        mn = Object(r["g"])("label", {
      "class": "block text-gray-700 text-sm font-bold mb-2",
      "for": "password"
    }, " Password ", -1),
        fn = {
      "class": "flex items-center justify-between"
    };

    function jn(e, t, n, s, a, o) {
      return Object(r["q"])(), Object(r["d"])("div", null, [Object(r["g"])("div", en, [Object(r["g"])("form", tn, [Object(r["g"])("div", nn, [Object(r["g"])("div", rn, [1 == a.success ? (Object(r["q"])(), Object(r["d"])("div", sn, " Added Successfully ")) : Object(r["e"])("", !0), 1 == a.empty_valid ? (Object(r["q"])(), Object(r["d"])("div", an, " Values should not be empty ")) : Object(r["e"])("", !0), 1 == a.email_valid ? (Object(r["q"])(), Object(r["d"])("div", on, " Enter a valid Email ")) : Object(r["e"])("", !0)]), Object(r["g"])("div", cn, [ln, Object(r["I"])(Object(r["g"])("input", {
        "class": "\r\n                shadow\r\n                appearance-none\r\n                border\r\n                rounded\r\n                w-full\r\n                py-2\r\n                px-3\r\n                text-gray-700\r\n                leading-tight\r\n                focus:outline-none\r\n                focus:shadow-outline\r\n              ",
        id: "name",
        type: "text",
        placeholder: "Your Name",
        "onUpdate:modelValue": t[1] || (t[1] = function (e) {
          return a.name = e;
        })
      }, null, 512), [[r["D"], a.name]])]), Object(r["g"])("div", un, [dn, Object(r["I"])(Object(r["g"])("input", {
        "class": "\r\n                shadow\r\n                appearance-none\r\n                border\r\n                rounded\r\n                w-full\r\n                py-2\r\n                px-3\r\n                text-gray-700\r\n                leading-tight\r\n                focus:outline-none\r\n                focus:shadow-outline\r\n              ",
        id: "userrole",
        type: "text",
        placeholder: "User Role",
        "onUpdate:modelValue": t[2] || (t[2] = function (e) {
          return a.userRole = e;
        })
      }, null, 512), [[r["D"], a.userRole]])]), Object(r["g"])("div", bn, [pn, Object(r["I"])(Object(r["g"])("input", {
        "class": "\r\n                shadow\r\n                appearance-none\r\n                border\r\n                rounded\r\n                w-full\r\n                py-2\r\n                px-3\r\n                text-gray-700\r\n                leading-tight\r\n                focus:outline-none\r\n                focus:shadow-outline\r\n              ",
        id: "username",
        type: "email",
        placeholder: "Email",
        "onUpdate:modelValue": t[3] || (t[3] = function (e) {
          return a.email = e;
        })
      }, null, 512), [[r["D"], a.email]])]), Object(r["g"])("div", gn, [mn, Object(r["I"])(Object(r["g"])("input", {
        "class": "\r\n                shadow\r\n                appearance-none\r\n                border\r\n                rounded\r\n                w-full\r\n                py-2\r\n                px-3\r\n                text-gray-700\r\n                leading-tight\r\n                focus:outline-none\r\n                focus:shadow-outline\r\n              ",
        id: "password",
        type: "password",
        placeholder: "Password",
        "onUpdate:modelValue": t[4] || (t[4] = function (e) {
          return a.password = e;
        })
      }, null, 512), [[r["D"], a.password]])]), Object(r["g"])("div", fn, [Object(r["g"])("button", {
        "class": "\r\n                bg-blue-500\r\n                hover:bg-blue-700\r\n                text-white\r\n                font-bold\r\n                w-full\r\n                py-2\r\n                px-4\r\n                rounded\r\n                focus:outline-none\r\n                focus:shadow-outline\r\n                reg_btn\r\n              ",
        type: "button",
        onClick: t[5] || (t[5] = function () {
          return o.AddUser && o.AddUser.apply(o, arguments);
        })
      }, " Add User ")])])])])]);
    }

    var On = {
      data: function data() {
        return {
          email: "",
          password: "",
          userRole: "",
          name: "",
          success: !1,
          empty_valid: !1,
          email_valid: !1
        };
      },
      methods: {
        AddUser: function AddUser() {
          var e = this,
              t = document.querySelector(".reg_btn");
          t.innerHTML = "Loading";
          var n = 0,
              r = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          "" === this.email || "" === this.password || "" === this.userRole || "" === this.name ? (n++, this.empty_valid = !0, this.email_valid = !1, t.innerHTML = "Add User") : (this.empty_valid = !1, r.test(this.email) || (n++, this.email_valid = !0, t.innerHTML = "Add User")), 0 === n && (this.empty_valid = !1, this.email_valid = !1, It.a.post("/api/users/register", {
            email: this.email,
            password: this.password,
            user_role: this.userRole,
            name: this.name,
            password_confirmation: this.password
          }).then(function (n) {
            console.log(n), e.success = !0, t.innerHTML = "Add User";
          })["catch"](function (e) {
            console.log(e), t.innerHTML = "Add User";
          }));
        }
      }
    };
    On.render = jn;
    var hn = On,
        xn = [{
      path: "/",
      name: "Login",
      component: Qt
    }, {
      path: "/dashboard",
      name: "Dashboard",
      component: $t,
      children: [{
        path: "/dashboard",
        name: "Project",
        component: ne
      }, {
        path: "/create-user",
        name: "CreateUser",
        component: hn
      }, {
        path: "/upload",
        name: "Home",
        component: x
      }, {
        path: "/project",
        name: "Grid",
        component: le
      }, {
        path: "/editor",
        name: "Editor",
        component: xe
      }]
    }],
        vn = Object(c["a"])({
      history: Object(c["b"])("/"),
      routes: xn
    });
    vn.beforeEach(function (e, t, n) {
      var r = ["/"],
          s = !r.includes(e.path);
      if (s && !localStorage.getItem("user_token")) return n("/");
      n();
    });

    var yn = vn,
        wn = (n("ac1f"), n("1276"), n("5502")),
        kn = Object(wn["a"])({
      state: {
        galleries: [],
        loading: !1,
        project_id: "",
        mainProjects: [],
        selectedMainProject: {},
        projects: [],
        selectedProject: {},
        selectedImage: 0,
        designComponent: 0,
        bboxComponent: 0,
        appURI: ""
      },
      mutations: {
        GET_GALLERIES: function GET_GALLERIES(e, t) {
          e.galleries = t.galArray, e.loading = !1;
        },
        PUSH_BOUNDING_BOX: function PUSH_BOUNDING_BOX(e, t) {
          e.selectedProject.Details.forEach(function (n) {
            n.image_Location === e.selectedImage && (n.boundingBoxes = t);
          });
        },
        PUSH_ATTRIBUTE_VALUES: function PUSH_ATTRIBUTE_VALUES(e, t) {
          e.selectedProject.Details.forEach(function (n) {
            n.image_Location === e.selectedImage && n.boundingBoxes.forEach(function (e) {
              e && 0 === e.attributeValues.length && "" !== e.selectedClass && (t.forEach(function (e) {
                e && e.attribute_Values && (e.attribute_Values = e.attribute_Values.split(","));
              }), e.attributeValues = t);
            });
          });
        }
      },
      actions: {},
      modules: {}
    }),
        In = n("ecee"),
        En = n("c074"),
        _n = n("ad3d"),
        Un = n("2106"),
        Cn = n.n(Un);

    In["c"].add(En["f"], En["a"], En["b"], En["e"], En["d"], En["c"]);
    var qn = Object(r["c"])(o);
    qn.component("font-awesome-icon", _n["a"]), qn.config.productionTip = !1, qn.use(kn).use(yn).use(Cn.a, It.a).mount("#app"), console.log(Object({
      NODE_ENV: "production",
      VUE_APP_API_URI_PREFIX: "",
      VUE_APP_THEME: "theme2",
      VUE_APP_TITLE: "Image Annotate v1.0",
      BASE_URL: "/"
    }));
  },
  a2f0: function a2f0(e, t, n) {},
  cbfc: function cbfc(e, t, n) {
    "use strict";

    n("cc41");
  },
  cc41: function cc41(e, t, n) {},
  dd45: function dd45(e, t, n) {
    e.exports = n.p + "img/hello.f7b2eaa4.png";
  }
});

/***/ }),

/***/ "./resources/css/chunk-vendors.d15afbfd.css":
/*!**************************************************!*\
  !*** ./resources/css/chunk-vendors.d15afbfd.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0,
/******/ 			"css/chunk-vendors.d15afbfd": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app","css/chunk-vendors.d15afbfd"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	__webpack_require__.O(undefined, ["css/app","css/chunk-vendors.d15afbfd"], () => (__webpack_require__("./resources/css/chunk-vendors.d15afbfd.css")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app","css/chunk-vendors.d15afbfd"], () => (__webpack_require__("./resources/css/app.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;