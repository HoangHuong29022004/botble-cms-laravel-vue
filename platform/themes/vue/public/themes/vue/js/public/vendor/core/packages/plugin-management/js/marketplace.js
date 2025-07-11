/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/js/components/Pagination.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/js/components/Pagination.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  props: {
    meta: {
      type: Object,
      required: true
    },
    scrollToTop: {
      type: Boolean,
      "default": false
    }
  },
  computed: {
    totalPages: function totalPages() {
      return this.meta.last_page;
    },
    currentPage: function currentPage() {
      return this.meta.current_page;
    },
    hasPrevious: function hasPrevious() {
      return this.currentPage > 1;
    },
    hasNext: function hasNext() {
      return this.currentPage < this.totalPages;
    },
    pages: function pages() {
      var pages = [];
      for (var i = 1; i <= this.meta.last_page; i++) {
        pages.push(i);
      }
      return pages;
    },
    fromItem: function fromItem() {
      return this.meta.from || 0;
    },
    toItem: function toItem() {
      return this.meta.to || 0;
    },
    totalItems: function totalItems() {
      return this.meta.total;
    }
  },
  methods: {
    selectPage: function selectPage(page) {
      if (page === this.currentPage) {
        return;
      }
      this.$emit('page-selected', page);
      if (this.scrollToTop) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    },
    selectPreviousPage: function selectPreviousPage() {
      this.selectPage(this.currentPage - 1);
    },
    selectNextPage: function selectNextPage() {
      this.selectPage(this.currentPage + 1);
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/js/components/PluginDetails.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/js/components/PluginDetails.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  props: {
    plugin: {
      type: Object,
      required: true
    }
  },
  emits: ['back', 'install', 'uninstall', 'toggleActivation'],
  data: function data() {
    return {
      isInstalled: false,
      isActivated: false
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.initModal();
    this.checkInstalled();
    this.checkActivated();
    $event.on('plugin-installed', function (packageName) {
      if (packageName === _this.packageName) {
        _this.isInstalled = true;
      }
    });
    $event.on('plugin-toggle-activation', function (packageName) {
      if (packageName === _this.packageName) {
        _this.isActivated = !_this.isActivated;
      }
    });
    $event.on('plugin-uninstalled', function (packageName) {
      if (packageName === _this.packageName) {
        _this.isInstalled = false;
        _this.isActivated = false;
      }
    });
  },
  methods: {
    initModal: function initModal() {
      var _this2 = this;
      var modal = new bootstrap.Modal(this.$refs.modal);
      modal.show();
      this.$refs.modal.addEventListener('hidden.bs.modal', function () {
        _this2.$emit('back');
      });
    },
    checkInstalled: function checkInstalled() {
      this.isInstalled = window.marketplace.installed.includes(this.packageName);
    },
    checkActivated: function checkActivated() {
      this.isActivated = window.marketplace.activated.includes(this.packageName);
    },
    install: function install() {
      bootstrap.Modal.getInstance(this.$refs.modal).hide();
      this.$emit('install', $event, this.plugin.id);
    }
  },
  computed: {
    packageName: function packageName() {
      var packageName = this.plugin.package_name;
      return packageName.substring(packageName.indexOf('/') + 1);
    },
    authorAvatar: function authorAvatar() {
      return "https://github.com/".concat(this.plugin.author_name, ".png");
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/js/components/PluginItem.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/js/components/PluginItem.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  props: {
    plugin: {
      type: Object,
      required: true
    }
  },
  emits: ['showPlugin', 'install', 'uninstall', 'toggleActivation'],
  data: function data() {
    return {
      isInstalled: false,
      isActivated: false
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.checkInstalled();
    this.checkActivated();
    $event.on('plugin-installed', function (packageName) {
      if (packageName === _this.packageName) {
        _this.isInstalled = true;
      }
    });
    $event.on('plugin-toggle-activation', function (packageName) {
      if (packageName === _this.packageName) {
        _this.isActivated = !_this.isActivated;
      }
    });
    $event.on('plugin-uninstalled', function (packageName) {
      if (packageName === _this.packageName) {
        _this.isInstalled = false;
        _this.isActivated = false;
      }
    });
  },
  methods: {
    checkInstalled: function checkInstalled() {
      this.isInstalled = window.marketplace.installed.includes(this.packageName);
    },
    checkActivated: function checkActivated() {
      this.isActivated = window.marketplace.activated.includes(this.packageName);
    }
  },
  computed: {
    packageName: function packageName() {
      var packageName = this.plugin.package_name;
      return packageName.substring(packageName.indexOf('/') + 1);
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/js/components/PluginList.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/js/components/PluginList.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PluginItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PluginItem.vue */ "./platform/packages/plugin-management/resources/js/components/PluginItem.vue");
/* harmony import */ var _PluginDetails_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PluginDetails.vue */ "./platform/packages/plugin-management/resources/js/components/PluginDetails.vue");
/* harmony import */ var _Pagination_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pagination.vue */ "./platform/packages/plugin-management/resources/js/components/Pagination.vue");
/* harmony import */ var _PluginPlaceholder_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PluginPlaceholder.vue */ "./platform/packages/plugin-management/resources/js/components/PluginPlaceholder.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  components: {
    PluginPlaceholder: _PluginPlaceholder_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    PluginItem: _PluginItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    PluginDetails: _PluginDetails_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Pagination: _Pagination_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    pluginListUrl: {
      type: String,
      "default": function _default() {
        return null;
      },
      required: true
    },
    pluginRemoveUrl: {
      type: String,
      "default": function _default() {
        return null;
      },
      required: true
    }
  },
  data: function data() {
    return {
      initializing: true,
      loading: true,
      serverError: false,
      serverErrorMessage: '',
      serverNoticeHtml: '',
      plugins: [],
      meta: {},
      filter: 'all',
      sort: 'default',
      search: window.location.search.replace('?q=', ''),
      page: 1,
      showingPlugin: null,
      lastPluginsCount: 12
    };
  },
  mounted: function mounted() {
    this.getPlugins();
    document.addEventListener('terms-and-policy-accepted', function (event) {
      var url = window.marketplace.route.install;
      var _event$detail = event.detail,
        element = _event$detail.element,
        id = _event$detail.id;
      $httpClient.make().withButtonLoading(element).post(url.replace(':id', id)).then(function (_ref) {
        var data = _ref.data;
        Botble.showSuccess(data.message);
        $event.emit('plugin-installed', data.data.name);
        window.marketplace.installed.push(data.data.name);
      })["finally"](function () {
        return element.closest('.modal').modal('hide');
      });
    });
  },
  computed: {
    params: function params() {
      var params = {
        page: this.page,
        q: this.search
      };
      if (this.filter === 'featured') {
        Object.assign(params, {
          is_featured: true
        });
      }
      switch (this.sort) {
        case 'popular':
          Object.assign(params, {
            is_popular: true
          });
          break;
        case 'top_rated':
          Object.assign(params, {
            is_top_rating: true
          });
          break;
      }
      return params;
    }
  },
  watch: {
    page: function page() {
      this.getPlugins();
    },
    search: _.debounce(function () {
      window.history.replaceState({}, null, this.search === '' ? window.location.pathname : "?q=".concat(this.search));
      this.page = 1;
      this.getPlugins();
    }, 300),
    filter: function filter() {
      this.page = 1;
      this.getPlugins();
    },
    sort: function sort() {
      this.page = 1;
      this.getPlugins();
    }
  },
  methods: {
    getPlugins: function getPlugins() {
      var _this = this;
      this.loading = true;
      this.plugins = [];
      $httpClient.make().get(this.pluginListUrl, _objectSpread({}, this.params)).then(function (_ref2) {
        var data = _ref2.data;
        _this.plugins = data.data;
        _this.meta = data.meta;
        _this.initializing = false;
        _this.lastPluginsCount = _this.plugins.length;
        if (data.additional && data.additional.advertisement) {
          _this.serverNoticeHtml = data.additional.advertisement;
        }
      })["catch"](function (_ref3) {
        var response = _ref3.response;
        _this.serverError = true;
        _this.serverErrorMessage = response.data.message;
      })["finally"](function () {
        _this.loading = false;
      });
    },
    setPage: function setPage(page) {
      this.page = page;
    },
    showPlugin: function showPlugin(plugin) {
      this.showingPlugin = plugin;
    },
    goBack: function goBack() {
      this.showingPlugin = null;
    },
    install: function install(event, id) {
      document.dispatchEvent(new CustomEvent('show-terms-and-policy-modal', {
        detail: {
          id: id
        }
      }));
    },
    uninstall: function uninstall(event, plugin) {
      if (!confirm(this.__('This action will remove all data of this plugin. Are you sure you want continue?'))) {
        return;
      }
      $httpClient.make().withButtonLoading(event.currentTarget)["delete"](this.pluginRemoveUrl.replace('__name__', plugin)).then(function (_ref4) {
        var data = _ref4.data;
        Botble.showSuccess(data.message);
        $event.emit('plugin-uninstalled', plugin);
        window.marketplace.installed.splice(window.marketplace.installed.indexOf(plugin), 1);
      });
    },
    toggleActivation: function toggleActivation(event, name) {
      $httpClient.make().withButtonLoading(event.currentTarget).put(window.marketplace.route.active, {
        name: name
      }).then(function (_ref5) {
        var data = _ref5.data;
        Botble.showSuccess(data.message);
        $event.emit('plugin-toggle-activation', name);
        data.data.status === 'activated' ? window.marketplace.activated.push(name) : window.marketplace.activated.splice(window.marketplace.activated.indexOf(name), 1);
      });
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/js/components/Pagination.vue?vue&type=template&id=83f4f886":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/js/components/Pagination.vue?vue&type=template&id=83f4f886 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": "d-flex justify-content-between align-items-center"
};
var _hoisted_2 = {
  "class": "m-0 text-secondary"
};
var _hoisted_3 = {
  "class": "pagination"
};
var _hoisted_4 = ["tabindex", "aria-disabled"];
var _hoisted_5 = ["aira-current"];
var _hoisted_6 = ["onClick", "textContent"];
var _hoisted_7 = ["tabindex", "aria-disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("nav", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.showing')) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.fromItem), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.to')) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.toItem), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.of')) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.totalItems), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.results')), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item", {
      disabled: !_ctx.hasPrevious
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:void(0)",
    "class": "page-link",
    tabindex: !_ctx.hasPrevious ? -1 : undefined,
    "aria-disabled": !_ctx.hasPrevious,
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.selectPreviousPage && _ctx.selectPreviousPage.apply(_ctx, arguments);
    })
  }, _cache[2] || (_cache[2] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "class": "icon",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    d: "M15 6l-6 6l6 6"
  })], -1 /* HOISTED */)]), 8 /* PROPS */, _hoisted_4)], 2 /* CLASS */), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.pages, function (page, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item", {
        active: page === _ctx.currentPage
      }]),
      key: i,
      "aira-current": page === _ctx.currentPage
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "javascript:void(0)",
      "class": "page-link",
      onClick: function onClick($event) {
        return _ctx.selectPage(page);
      },
      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(page === '...' ? '...' : page)
    }, null, 8 /* PROPS */, _hoisted_6)], 10 /* CLASS, PROPS */, _hoisted_5);
  }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item", {
      disabled: !_ctx.hasNext
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:void(0)",
    "class": "page-link",
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.selectNextPage && _ctx.selectNextPage.apply(_ctx, arguments);
    }),
    tabindex: !_ctx.hasNext ? -1 : undefined,
    "aria-disabled": !_ctx.hasNext
  }, _cache[3] || (_cache[3] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "class": "icon",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    d: "M9 6l6 6l-6 6"
  })], -1 /* HOISTED */)]), 8 /* PROPS */, _hoisted_7)], 2 /* CLASS */)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/js/components/PluginDetails.vue?vue&type=template&id=cd300f88":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/js/components/PluginDetails.vue?vue&type=template&id=cd300f88 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var _hoisted_1 = {
  "class": "modal modal-blur fade",
  ref: "modal",
  tabindex: "-1",
  "aria-labelledby": "exampleModalLabel",
  "aria-hidden": "true"
};
var _hoisted_2 = {
  "class": "modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable"
};
var _hoisted_3 = {
  "class": "modal-content"
};
var _hoisted_4 = {
  "class": "modal-header py-3 px-5"
};
var _hoisted_5 = {
  "class": "d-flex flex-wrap gap-3 align-items-center justify-content-between w-100"
};
var _hoisted_6 = {
  "class": "mb-1"
};
var _hoisted_7 = {
  "class": "text-muted mb-0"
};
var _hoisted_8 = ["href"];
var _hoisted_9 = {
  "class": "modal-body bg-body"
};
var _hoisted_10 = ["src", "alt"];
var _hoisted_11 = {
  "class": "card my-3"
};
var _hoisted_12 = {
  "class": "card-body"
};
var _hoisted_13 = {
  "class": "datagrid"
};
var _hoisted_14 = {
  "class": "datagrid-item"
};
var _hoisted_15 = {
  "class": "datagrid-title"
};
var _hoisted_16 = {
  "class": "datagrid-content"
};
var _hoisted_17 = {
  "class": "d-flex align-items-center"
};
var _hoisted_18 = {
  "class": "datagrid-item"
};
var _hoisted_19 = {
  "class": "datagrid-title"
};
var _hoisted_20 = {
  "class": "datagrid-content"
};
var _hoisted_21 = {
  "class": "datagrid-item"
};
var _hoisted_22 = {
  "class": "datagrid-title"
};
var _hoisted_23 = {
  "class": "datagrid-content"
};
var _hoisted_24 = {
  key: 0,
  "class": "datagrid-item"
};
var _hoisted_25 = {
  "class": "datagrid-title"
};
var _hoisted_26 = {
  "class": "datagrid-content"
};
var _hoisted_27 = {
  key: 1,
  "class": "datagrid-item"
};
var _hoisted_28 = {
  "class": "datagrid-title"
};
var _hoisted_29 = {
  "class": "datagrid-content"
};
var _hoisted_30 = {
  key: 2,
  "class": "datagrid-item"
};
var _hoisted_31 = {
  "class": "datagrid-title"
};
var _hoisted_32 = {
  "class": "datagrid-content d-flex align-items-center gap-1"
};
var _hoisted_33 = {
  "class": "lh-1"
};
var _hoisted_34 = {
  "class": "text-muted"
};
var _hoisted_35 = {
  "class": "datagrid-item"
};
var _hoisted_36 = {
  "class": "datagrid-title"
};
var _hoisted_37 = {
  "class": "datagrid-content"
};
var _hoisted_38 = {
  "class": "datagrid-item"
};
var _hoisted_39 = {
  "class": "datagrid-title"
};
var _hoisted_40 = {
  "class": "datagrid-content"
};
var _hoisted_41 = ["href"];
var _hoisted_42 = {
  key: 0,
  "class": "card card-lg"
};
var _hoisted_43 = ["innerHTML"];
var _hoisted_44 = {
  "class": "modal-footer"
};
var _hoisted_45 = ["textContent"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.plugin.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.plugin.description), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: _ctx.plugin.url,
    target: "_blank",
    "class": "btn me-5 d-none d-md-block"
  }, [_cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path><path d=\"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6\"></path><path d=\"M11 13l9 -9\"></path><path d=\"M15 4h5v5\"></path></svg>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.view_on_marketplace')), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_8), _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-close",
    "data-bs-dismiss": "modal",
    "aria-label": "Close"
  }, null, -1 /* HOISTED */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _ctx.plugin.image_url,
    alt: _ctx.plugin.name,
    "class": "rounded"
  }, null, 8 /* PROPS */, _hoisted_10), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.author')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "avatar avatar-xs me-2 rounded",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("background-image: url(".concat(_ctx.authorAvatar, ")"))
  }, null, 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.plugin.author_name), 1 /* TEXT */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.downloads')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.plugin.downloads_count), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.version')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.plugin.latest_version), 1 /* TEXT */)]), _ctx.plugin.version_check ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.compatible_version')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [_cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "class": "icon text-success",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    d: "M5 12l5 5l10 -10"
  })], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.plugin.minimum_core_version), 1 /* TEXT */)])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.incompatible_version')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [_cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "class": "icon text-danger",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    d: "M5 12l5 5l10 -10"
  })], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.plugin.minimum_core_version), 1 /* TEXT */)])])), _ctx.plugin.ratings_count > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.rating')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(5, function (n) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
      key: n,
      xmlns: "http://www.w3.org/2000/svg",
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["icon icon-sm text-secondary", {
        'text-yellow': n <= _ctx.plugin.ratings_avg
      }]),
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      "stroke-width": "2",
      stroke: "currentColor",
      fill: "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, _toConsumableArray(_cache[7] || (_cache[7] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
      d: "M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z",
      "stroke-width": "0",
      fill: "currentColor"
    }, null, -1 /* HOISTED */)])), 2 /* CLASS */);
  }), 64 /* STABLE_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_34, "(" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.plugin.ratings_count) + ")", 1 /* TEXT */)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.last_update')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.plugin.humanized_last_updated_at), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.license')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [_ctx.plugin.license_url ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
    key: 0,
    href: _ctx.plugin.license_url,
    target: "_blank"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.plugin.license), 9 /* TEXT, PROPS */, _hoisted_41)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.plugin.license), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */))])])])])]), _ctx.plugin.content ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-body markdown",
    innerHTML: _ctx.plugin.content
  }, null, 8 /* PROPS */, _hoisted_43)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [!_ctx.isInstalled ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    type: "button",
    "class": "btn btn-primary",
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.install && _ctx.install.apply(_ctx, arguments);
    })
  }, [_cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path><path d=\"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2\"></path><path d=\"M7 11l5 5l5 -5\"></path><path d=\"M12 4l0 12\"></path></svg>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.install_now')), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.isInstalled ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [!_ctx.isActivated ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    type: "button",
    "class": "btn btn-danger",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('uninstall', $event, _this.packageName);
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.remove')), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["btn", {
      'btn-danger': _ctx.isActivated,
      'btn-primary': !_ctx.isActivated
    }]),
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.$emit('toggleActivation', $event, _this.packageName);
    }),
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.isActivated ? _ctx.__('base.deactivate') : _ctx.__('base.activate'))
  }, null, 10 /* CLASS, PROPS */, _hoisted_45)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])], 512 /* NEED_PATCH */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/js/components/PluginItem.vue?vue&type=template&id=78db59ee":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/js/components/PluginItem.vue?vue&type=template&id=78db59ee ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": "col-md-3"
};
var _hoisted_2 = {
  "class": "card h-100"
};
var _hoisted_3 = {
  "class": "card-body"
};
var _hoisted_4 = {
  "class": "card-title"
};
var _hoisted_5 = {
  "class": "text-secondary"
};
var _hoisted_6 = {
  "class": "card-footer"
};
var _hoisted_7 = {
  "class": "d-flex"
};
var _hoisted_8 = ["textContent"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "img-responsive img-responsive-21x9 card-img-top",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      backgroundImage: "url(".concat(_ctx.plugin.image_url, ")")
    })
  }, null, 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.plugin.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.plugin.description), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [!_ctx.isInstalled ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    type: "button",
    "class": "btn btn-primary",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('install', $event, _ctx.plugin.id);
    })
  }, [_cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path><path d=\"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2\"></path><path d=\"M7 11l5 5l5 -5\"></path><path d=\"M12 4l0 12\"></path></svg>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.install_now')), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.isInstalled ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    type: "button",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["btn", {
      'btn-danger': _ctx.isActivated,
      'btn-primary': !_ctx.isActivated
    }]),
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('toggle-activation', $event, _ctx.packageName);
    }),
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.isActivated ? _ctx.__('base.deactivate') : _ctx.__('base.activate'))
  }, null, 10 /* CLASS, PROPS */, _hoisted_8)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn ms-auto",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.$emit('showPlugin', _ctx.plugin);
    })
  }, [_cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path><path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\"></path><path d=\"M12 9h.01\"></path><path d=\"M11 12h1v4h1\"></path></svg>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.detail')), 1 /* TEXT */)])])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/js/components/PluginList.vue?vue&type=template&id=64d069d8":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/js/components/PluginList.vue?vue&type=template&id=64d069d8 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = ["innerHTML"];
var _hoisted_2 = {
  key: 1,
  "class": "card"
};
var _hoisted_3 = {
  "class": "empty"
};
var _hoisted_4 = {
  "class": "empty-img"
};
var _hoisted_5 = {
  height: 128,
  id: "b5fd0f28-1473-49d3-b766-fd4b3ddcb807",
  "data-name": "Layer 1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1118.03",
  viewBox: "0 0 1118.03 765.72"
};
var _hoisted_6 = {
  "class": "empty-title"
};
var _hoisted_7 = {
  "class": "empty-subtitle text-secondary"
};
var _hoisted_8 = {
  key: 2,
  "class": "card"
};
var _hoisted_9 = {
  "class": "card mb-3"
};
var _hoisted_10 = {
  "class": "card-header"
};
var _hoisted_11 = {
  "class": "nav nav-tabs card-header-tabs"
};
var _hoisted_12 = ["onClick", "disabled"];
var _hoisted_13 = {
  key: 0,
  "class": "badge bg-blue text-blue-fg badge-notification badge-pill"
};
var _hoisted_14 = {
  "class": "nav-item ms-auto"
};
var _hoisted_15 = {
  "class": "dropdown"
};
var _hoisted_16 = {
  href: "#",
  "class": "nav-link",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
};
var _hoisted_17 = {
  "class": "dropdown-menu dropdown-menu-end"
};
var _hoisted_18 = ["onClick"];
var _hoisted_19 = {
  "class": "card-body"
};
var _hoisted_20 = {
  "class": "input-group input-group-flat"
};
var _hoisted_21 = ["placeholder"];
var _hoisted_22 = {
  key: 0,
  "class": "input-group-text"
};
var _hoisted_23 = ["aria-label", "title"];
var _hoisted_24 = {
  "class": "mb-3 row row-cards position-relative"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_plugin_placeholder = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("plugin-placeholder");
  var _component_plugin_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("plugin-item");
  var _component_pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("pagination");
  var _component_plugin_details = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("plugin-details");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [_ctx.serverNoticeHtml ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    innerHTML: _ctx.serverNoticeHtml
  }, null, 8 /* PROPS */, _hoisted_1)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.serverError ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_5, _cache[2] || (_cache[2] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<defs><linearGradient id=\"a5826235-76eb-40dc-ae18-c7de67d692d4\" x1=\"898.64\" y1=\"821.89\" x2=\"898.64\" y2=\"100.83\" gradientTransform=\"matrix(-1, 0, 0, 1, 1741, 0)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"gray\" stop-opacity=\"0.25\"></stop><stop offset=\"0.54\" stop-color=\"gray\" stop-opacity=\"0.12\"></stop><stop offset=\"1\" stop-color=\"gray\" stop-opacity=\"0.1\"></stop></linearGradient></defs><title>quitting time</title><path d=\"M690.57,180.36c-71.67-2.28-139.94-23.52-205.12-46.75s-129.76-49-199.72-61.28c-45-7.92-96.45-9-132.71,13.1-34.88,21.3-46.16,58.08-52.22,92.21-4.56,25.67-7.24,52.69,5.25,76.73,8.68,16.68,24.08,30.71,34.73,46.69,37.07,55.62,10.87,124.2-29.3,178.5C92.64,505,70.79,529.34,56.25,556.45S35,614.64,47.71,642.3c12.61,27.42,42.65,48,75.2,62.5,66.1,29.42,144,37.84,220,42.61C511,758,680,753.39,848.63,748.82c62.39-1.7,125-3.41,186.43-12.27,34.08-4.92,69.27-12.72,94-31.56,31.42-23.91,39.2-64.41,18.15-94.39-35.3-50.3-132.92-62.8-157.6-116.77C976,464.11,990,431,1009.73,403.46c42.34-59.11,113.32-111,117.06-178.54,2.57-46.41-31.55-92.89-84.31-114.85-55.3-23-132-20.12-172.79,18C827.68,167.28,753.86,182.38,690.57,180.36Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#4285f4\" opacity=\"0.1\"></path><ellipse cx=\"802.9\" cy=\"744.72\" rx=\"129\" ry=\"21\" fill=\"#4285f4\" opacity=\"0.1\"></ellipse><polygon points=\"295.39 389.56 295.07 407.2 292.45 550.22 270.04 602.71 192.8 603.59 192.8 397.68 273.41 391.3 295.39 389.56\" fill=\"#5f5d7e\"></polygon><polygon points=\"295.39 389.56 295.07 407.2 292.45 550.22 270.04 602.71 192.8 603.59 192.8 397.68 273.41 391.3 295.39 389.56\" opacity=\"0.1\"></polygon><polygon points=\"295.39 389.56 295.07 407.2 292.45 550.22 270.04 602.71 275.94 407.54 275.92 407.41 273.41 391.3 295.39 389.56\" fill=\"#5f5d7e\"></polygon><polygon points=\"273.41 391.3 295.39 389.56 295.07 407.2 275.92 407.41 192.8 408.34 192.8 397.68 273.41 391.3\" opacity=\"0.1\"></polygon><polygon points=\"989.68 397.68 989.68 602.4 971.7 602.4 899.76 549.93 899.76 391.91 964.03 385.87 967.97 387.68 971.7 389.4 989.68 397.68\" fill=\"#5f5d7e\"></polygon><rect x=\"971.7\" y=\"387.68\" width=\"17.98\" height=\"214.72\" opacity=\"0.1\"></rect><polygon points=\"989.68 387.68 989.68 399.45 971.7 399.66 899.76 400.45 899.76 391.91 964.03 385.87 967.97 387.68 971.7 389.4 971.7 387.68 989.68 387.68\" opacity=\"0.1\"></polygon><polygon points=\"989.68 381 989.68 397.68 106.13 407.54 106.13 386.31 189.26 369.5 912.73 364.2 989.68 381\" fill=\"#5f5d7e\"></polygon><polygon points=\"989.68 381 989.68 397.68 106.13 407.54 106.13 386.31 989.68 381\" opacity=\"0.1\"></polygon><ellipse cx=\"256.69\" cy=\"374.88\" rx=\"39.83\" ry=\"2.55\" opacity=\"0.1\"></ellipse><path d=\"M331.11,343.43a15.18,15.18,0,0,0-2,3.8c-.12.33-.24.71-.36,1.07a3.13,3.13,0,0,0-.71-.24,9.8,9.8,0,0,0-3.15-.28q0-.61.06-1.29c.13-4.66-.42-11.16-4.87-8.41-4.26,2.65-1.22,7.06,1.53,9.91.24.25.48.48.71.7-2.51,1.8-3,5.95-3.41,10.29s-4.1,9.1-6.54,11.8l-.7.75a8.92,8.92,0,0,0-7.11-1.83q-.17-.57-.33-1.2c-2-7.15-6.09-19.54-11.34-22.26l.69-.87c2.23-2.92,4.74-7.25,1-8.36s-4,3.76-3.83,7.4c0,.46.06.89.1,1.3A5.46,5.46,0,0,0,287,347.6c-.18-.22-.36-.44-.57-.68-3-3.55-8.52-9.17-10.19-4.91-1.55,4,3.3,9.1,6.72,12.08l.21.19c-2.29,9.3,7.71,16.88,13.1,20.19l.69.43c-7.43,8.75-12,25.16-12,25.16l20.8,3.72s13.79-11.9,12-23.08l.14,0c13.78-2.76,16.92-17.46,14.77-26.18l.25-.1a15.77,15.77,0,0,0,6.38-4.83C343.16,344.22,335.07,338.17,331.11,343.43Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#4285f4\"></path><path d=\"M331.11,343.43a15.18,15.18,0,0,0-2,3.8c-.12.33-.24.71-.36,1.07a3.13,3.13,0,0,0-.71-.24,9.8,9.8,0,0,0-3.15-.28q0-.61.06-1.29c.13-4.66-.42-11.16-4.87-8.41-4.26,2.65-1.22,7.06,1.53,9.91.24.25.48.48.71.7-2.51,1.8-3,5.95-3.41,10.29s-4.1,9.1-6.54,11.8l-.7.75a8.92,8.92,0,0,0-7.11-1.83q-.17-.57-.33-1.2c-2-7.15-6.09-19.54-11.34-22.26l.69-.87c2.23-2.92,4.74-7.25,1-8.36s-4,3.76-3.83,7.4c0,.46.06.89.1,1.3A5.46,5.46,0,0,0,287,347.6c-.18-.22-.36-.44-.57-.68-3-3.55-8.52-9.17-10.19-4.91-1.55,4,3.3,9.1,6.72,12.08l.21.19c-2.29,9.3,7.71,16.88,13.1,20.19l.69.43c-7.43,8.75-12,25.16-12,25.16l20.8,3.72s13.79-11.9,12-23.08l.14,0c13.78-2.76,16.92-17.46,14.77-26.18l.25-.1a15.77,15.77,0,0,0,6.38-4.83C343.16,344.22,335.07,338.17,331.11,343.43Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M289.7,349.43l-2.43,7.12s-1.35-.95-3.06-2.46c-3.41-3-8.27-8.12-6.71-12.08,1.67-4.26,7.18,1.36,10.19,4.91C288.9,348.34,289.7,349.43,289.7,349.43Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#4285f4\"></path><path d=\"M294.83,345.37a35,35,0,0,1-2.37,2.79,37,37,0,0,1-.43-3.75c-.2-3.64.18-8.48,3.83-7.4S297.06,342.45,294.83,345.37Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#4285f4\"></path><path d=\"M326.2,346.49c-.07,2.34-.3,4.21-.3,4.21a28.6,28.6,0,0,1-3-2.71c-2.75-2.85-5.8-7.26-1.53-9.91C325.78,335.33,326.33,341.83,326.2,346.49Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#4285f4\"></path><path d=\"M340.57,349.56a15.77,15.77,0,0,1-6.38,4.83,18.3,18.3,0,0,1-2.14.77l-2.87-4a30.14,30.14,0,0,1,1.19-3.91,15.18,15.18,0,0,1,2-3.8C336.34,338.17,344.43,344.22,340.57,349.56Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#4285f4\"></path><path d=\"M287.69,346.92c1.21,1.42,2,2.51,2,2.51l-2.43,7.12s-1.35-.95-3.06-2.46a13.87,13.87,0,0,1,2.74-6.25C287.19,347.51,287.44,347.2,287.69,346.92Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M294.83,345.37a35,35,0,0,1-2.37,2.79,37,37,0,0,1-.43-3.75A4.88,4.88,0,0,1,294.83,345.37Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M306.79,373.63l-6.05,2.66a35.85,35.85,0,0,1-3.22-1.82c-6.36-3.91-19.14-13.75-10.57-25.36s15.72,9.21,18.53,19.39C306.33,371.54,306.79,373.63,306.79,373.63Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#4285f4\"></path><path d=\"M322.87,348a4.92,4.92,0,0,1,3.33-1.5c-.07,2.34-.3,4.21-.3,4.21A28.6,28.6,0,0,1,322.87,348Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M334.19,354.39a18.3,18.3,0,0,1-2.14.77l-2.87-4a30.14,30.14,0,0,1,1.19-3.91C332.22,348.31,333.58,351,334.19,354.39Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M319.17,380.67q-.5.1-1,.18c-20.27,3.09-6.68-7.86-6.68-7.86s.91-.84,2.15-2.21c2.44-2.7,6.13-7.43,6.55-11.8.63-6.57,1.37-12.73,9.13-10.92S338.37,376.83,319.17,380.67Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#4285f4\"></path><rect x=\"239.06\" y=\"364.02\" width=\"38.75\" height=\"10.19\" fill=\"#474157\"></rect><rect x=\"232.9\" y=\"330.91\" width=\"50.63\" height=\"35.56\" fill=\"#474157\"></rect><rect x=\"238.68\" y=\"364.02\" width=\"38.75\" height=\"10.19\" opacity=\"0.1\"></rect><rect x=\"232.74\" y=\"330.91\" width=\"50.63\" height=\"35.56\" opacity=\"0.1\"></rect><rect x=\"241.61\" y=\"364.02\" width=\"38.75\" height=\"10.19\" fill=\"#474157\"></rect><path d=\"M305.48,368.5c.85,3,1.31,5.13,1.31,5.13l-6.05,2.66a35.85,35.85,0,0,1-3.22-1.82C299.89,371.47,302.56,369.2,305.48,368.5Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M319.17,380.67q-.5.1-1,.18c-20.27,3.09-6.68-7.86-6.68-7.86s.91-.84,2.15-2.21C317.4,373.81,319,377.22,319.17,380.67Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M286.2,400.06s11.36-40.65,27.28-28.12S307,403.78,307,403.78Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#4285f4\"></path><circle cx=\"250.95\" cy=\"288.34\" r=\"1.27\" opacity=\"0.1\"></circle><circle cx=\"250.84\" cy=\"294.29\" r=\"1.27\" opacity=\"0.1\"></circle><circle cx=\"287.78\" cy=\"289.51\" r=\"1.27\" opacity=\"0.1\"></circle><circle cx=\"258.06\" cy=\"319.97\" r=\"1.27\" opacity=\"0.1\"></circle><circle cx=\"285.12\" cy=\"299.38\" r=\"1.27\" opacity=\"0.1\"></circle><circle cx=\"271.96\" cy=\"312.54\" r=\"1.27\" opacity=\"0.1\"></circle><circle cx=\"255.3\" cy=\"290.89\" r=\"1.27\" opacity=\"0.1\"></circle><circle cx=\"284.27\" cy=\"293.33\" r=\"1.27\" opacity=\"0.1\"></circle><circle cx=\"279.92\" cy=\"303.2\" r=\"1.27\" opacity=\"0.1\"></circle><circle cx=\"266.55\" cy=\"319.02\" r=\"1.27\" opacity=\"0.1\"></circle><circle cx=\"263.79\" cy=\"312.76\" r=\"1.27\" opacity=\"0.1\"></circle><circle cx=\"257.21\" cy=\"298.64\" r=\"1.27\" opacity=\"0.1\"></circle><rect x=\"241.61\" y=\"364.02\" width=\"38.75\" height=\"3.72\" opacity=\"0.1\"></rect><rect x=\"235.45\" y=\"330.91\" width=\"50.63\" height=\"35.56\" fill=\"#474157\"></rect><circle cx=\"268.25\" cy=\"324.75\" r=\"1.27\" opacity=\"0.1\"></circle><circle cx=\"260.6\" cy=\"326.34\" r=\"1.27\" opacity=\"0.1\"></circle><path d=\"M423,533.93s6.31,8.25-2.91,20.71-16.83,23-13.76,30.74c0,0,13.92-23.14,25.24-23.46S435.42,547.84,423,533.93Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#4285f4\"></path><path d=\"M423,533.93a10.49,10.49,0,0,1,1.29,2.58c11.05,13,16.94,25.11,6.31,25.41-9.89.28-21.76,18-24.6,22.44a8.67,8.67,0,0,0,.33,1s13.92-23.14,25.24-23.46S435.42,547.84,423,533.93Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M434.69,544.44c0,2.91-.33,5.26-.73,5.26s-.73-2.35-.73-5.26.41-1.53.81-1.53S434.69,541.54,434.69,544.44Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#ffd037\"></path><path d=\"M438.71,547.91c-2.55,1.39-4.77,2.23-5,1.88s1.72-1.77,4.27-3.16,1.54-.38,1.73,0S441.26,546.52,438.71,547.91Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#ffd037\"></path><path d=\"M389.63,533.93s-6.32,8.25,2.91,20.71,16.83,23,13.75,30.74c0,0-13.91-23.14-25.24-23.46S377.17,547.84,389.63,533.93Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#4285f4\"></path><path d=\"M389.63,533.93a10.08,10.08,0,0,0-1.29,2.58c-11.06,13-16.94,25.11-6.32,25.41,9.9.28,21.77,18,24.61,22.44-.1.35-.21.69-.34,1,0,0-13.91-23.14-25.24-23.46S377.17,547.84,389.63,533.93Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M377.89,544.44c0,2.91.33,5.26.73,5.26s.73-2.35.73-5.26-.41-1.53-.81-1.53S377.89,541.54,377.89,544.44Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#ffd037\"></path><path d=\"M373.87,547.91c2.55,1.39,4.77,2.23,5,1.88s-1.71-1.77-4.26-3.16-1.55-.38-1.74,0S371.32,546.52,373.87,547.91Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#ffd037\"></path><ellipse cx=\"365.31\" cy=\"571.24\" rx=\"65.98\" ry=\"10.13\" fill=\"#4285f4\" opacity=\"0.1\"></ellipse><path d=\"M440.25,574.26l-.32,2.58-.44,3.64-.18,1.51-.44,3.65-.2,1.51-.44,3.64-5.05,41.39c-.45,3.7-6.48,6.58-13.77,6.58H393.17c-7.28,0-13.31-2.88-13.76-6.58l-5.06-41.39-.44-3.64-.18-1.51-.46-3.65-.18-1.51-.44-3.64-.32-2.58c-.25-2.09,3-3.85,7.14-3.85h53.65C437.24,570.41,440.51,572.17,440.25,574.26Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#65617d\"></path><polygon points=\"398.95 509.69 398.5 513.33 332.11 513.33 331.66 509.69 398.95 509.69\" fill=\"#9d9cb5\"></polygon><polygon points=\"398.32 514.85 397.88 518.49 332.74 518.49 332.29 514.85 398.32 514.85\" fill=\"#9d9cb5\"></polygon><polygon points=\"397.69 520.01 397.25 523.65 333.37 523.65 332.92 520.01 397.69 520.01\" fill=\"#9d9cb5\"></polygon><path d=\"M606.46,433.68v2.06H545.55v-1.67a20,20,0,0,0,13.06-18.78,20,20,0,0,0-11.68-18.19h59.12a20,20,0,0,0,.41,36.58Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#c8cad7\"></path><path d=\"M606.05,397.1A20,20,0,0,0,595,410.37H558a20.06,20.06,0,0,0-11.07-13.27Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M475.8,386.6v11.57c0,6.38,4.68,11.56,10.44,11.56H665.45c5.76,0,10.44-5.18,10.44-11.56V386.6Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#c8cad7\"></path><path d=\"M606.46,433.68v2.06H545.55v-1.67a20.16,20.16,0,0,0,4.7-2.5h52.48A20.12,20.12,0,0,0,606.46,433.68Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><rect x=\"484.44\" y=\"365.07\" width=\"101.17\" height=\"6.1\" rx=\"3.05\" fill=\"#c8cad7\"></rect><path d=\"M675.89,259.91a10.44,10.44,0,0,0-10.44-10.44H486.24a10.44,10.44,0,0,0-10.44,10.44V388.85H675.89Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#5f5d7e\"></path><path d=\"M670.43,264.56v110.8a5.14,5.14,0,0,1-5.14,5.14H486.4a5.14,5.14,0,0,1-5.14-5.14V264.56A5.09,5.09,0,0,1,482,262a5.15,5.15,0,0,1,4.45-2.57H665.29A5.14,5.14,0,0,1,670.43,264.56Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#4285f4\"></path><circle cx=\"534.86\" cy=\"187.3\" r=\"2.41\" fill=\"#fff\"></circle><circle cx=\"534.86\" cy=\"331.51\" r=\"5.94\" fill=\"#fff\"></circle><path d=\"M670.43,264.56H481.26a5.14,5.14,0,0,1,5.14-5.14H665.29A5.14,5.14,0,0,1,670.43,264.56Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#fff\"></path><circle cx=\"445.42\" cy=\"194.85\" r=\"1.28\" fill=\"#ededf4\"></circle><circle cx=\"449.27\" cy=\"194.85\" r=\"1.28\" fill=\"#ededf4\"></circle><circle cx=\"453.12\" cy=\"194.85\" r=\"1.28\" fill=\"#ededf4\"></circle><path d=\"M698,489s12,4.88,26.73,10.73a38.17,38.17,0,0,1,1.16,5.14c.26,3.4,7,8.19,7,8.19s12.5,2.26,21.91,4.91c7.31,2,8.32-2,7.38-3.56l2.19.84c.49,20.24,1.05,35,1.05,35s3.2,0,8.25.24c.06.64.12,1.3.19,2,1.93,20,5.48,53,8.23,55.74,4,3.87,2.23,32.39.69,37.43s0,41.31,0,41.31,6.19,22.16,5.67,46.34,6.7,36.78,6.7,36.78l2.59.19c0,.67-.08,1.33-.11,2-.12,2.19-.21,4.38-.24,6.37a15.66,15.66,0,0,1-3,8.42A51.77,51.77,0,0,0,786,806.82a43.2,43.2,0,0,0-.64,4.8c0,.4-.05.62-.05.62s2.4,7.06,24.92,9.41,19.26-13.94,19.26-13.94.11-.46.25-1.3a48.78,48.78,0,0,0,.09-16.66c-.79-4.3-.11-11.74.87-18.56.1-.71.21-1.41.31-2.1a12.58,12.58,0,0,0,5.17-2.4c7.05-6.43,0-57.55,0-57.55s-12.72-41.81-9.62-47.86,6.7-20.65,6.7-20.65V589.75c5-8.07,7.25-19.11,8.18-29.16.06-.67.12-1.33.17-2,4.17.08,8.17-.07,11.8-.32l1,2c5.9,11.43,11.9,22.75,13.37,24.42,3.09,3.53.51,19.65,0,27.71s5.67,24.18,5.67,24.18c-7.73,4.53-9.28,57.93-9.28,57.93s5.67,13.1-6.19,27.71-7.22,42.32-5.67,41.31c.41-.27,2.92.14,6.49.73a17.14,17.14,0,0,1-3.4,6.52c-3.83,4.76-5.14,12.22-5.52,18.18a65.11,65.11,0,0,0,0,9.33l8.59,6s5.33,0,5.33,4.71,13.06,9.4,13.06,9.4,19.42,5.37,34.38,0c4.85-1.74,6.33-4.73,5.76-8.36-1.18-7.59-11.33-18-18.65-25.56-4.94-5.13-7.19-11.93-8.19-17.82-.11-.63-.2-1.25-.28-1.86a5.9,5.9,0,0,0,1.59-1.31c6.19-7.56,12.89-28.21,12.89-28.21S901.3,714.18,908,695c5-14.19,11.07-47.45,13.89-63.74a63.55,63.55,0,0,0,.56-17.9c-1.3-11.89-3.3-33.92-2.59-51.36.24-5.69.07-14.74-.32-25.35v-.15c3.67-6.93,11.63-18.24,24.91-19.17,19.25-1.35,9.28-11.92,9.28-11.92S942.44,426.08,935,412a5.81,5.81,0,0,0-.39-.71c-1.1-1.75-2.3-5.25-3.57-9.92-7.33-27.05-16.71-93.69-16.71-93.69l-1.15-16.21c11.48,5.63,32.78,15.9,41.37,18.9,12,4.2,28.7,1.51,32.83-12.26s-13.06-41.64-13.06-41.64c-2.53-9.88-20-30.45-29.09-40.66-.88-1.33-1.75-2.65-2.6-3.91-2.34-3.49-4.45-6.57-5.79-8.38l-.13.25c-.33-.46-.64-.89-.91-1.25l-.22.44c-3.25-6-6.9-12.17-9.73-15.48-6.58-7.68-35.28-15.94-38.12-13.67-2.07,1.65,6.52,8.85,12.53,13.27l-5.74-3.88-12.83-11.1-5.65-3.82a5.41,5.41,0,0,0-.74-.42A40.52,40.52,0,0,0,868.78,134c-.4-.55-.83-1.1-1.26-1.63,5.91-4.92,7.78-13.05,7.78-20.2v-.27a14.33,14.33,0,0,0-3.43-7.21c.09.18.18.38.26.57a11.61,11.61,0,0,0-8.65-4.45c-5-.08-9.19,3.2-13.58,5.45a35.09,35.09,0,0,1-29.25,1c-2.71-1.16-5.44-2.7-8.38-2.46S807,106.93,805,108.9a47.69,47.69,0,0,0-11.1,16.42c-.74,1.81-1.4,3.74-2.83,5.1a19.93,19.93,0,0,1-3.52,2.3A18.91,18.91,0,0,0,779.16,145a26.44,26.44,0,0,0,1.51,14.85,22.44,22.44,0,0,0,5.54,8.6c1.87,1.73,4.11,3,6.09,4.63a21.91,21.91,0,0,1,2.51,2.4,47.59,47.59,0,0,0-23.67,13.12,62.06,62.06,0,0,0-12,16.12c-8.37,15.73-13.45,25.52-16.47,31.73-1.51.46-2.44.68-2.44.68s-11.34,10.07-11.17,38.95h0l-8.77,57.76v29.55S709,395.46,710.85,422c0,.36,0,.71.07,1.06l-.92,4.51a10.39,10.39,0,0,0-2,6.68,8.55,8.55,0,0,0,.18,2.44l-4.6,22.72.87.92L702.08,467C693.15,481.27,698,489,698,489Zm66.32-162c.57.39.89.59.89.59s5,44.77,2,71.39l-10.53-.72-5-1.54,1.79-14.23S759.88,345,764.28,327Zm41.38-129.95,1-1.54c-.21.55-.42,1.09-.64,1.59ZM758.17,398.76l5.45.56,3.45.72q-.09.72-.18,1.41ZM875.3,205.2a12.16,12.16,0,0,0-.1-1.49l4.28,2.54.26.16c-1.48-.43-3-.81-4.44-1.16ZM908.52,225a32.11,32.11,0,0,0-1.9-2.67c3,.72,4.86,1.14,4.86,1.14a13.28,13.28,0,0,1,7.12.72,39.72,39.72,0,0,0,2.47,4.32l7.9,15.3s-1.72.17-5.16-1.51S908.52,225,908.52,225ZM758.43,513l2.47,1h0C760.35,514.17,759.47,513.77,758.43,513Z\" transform=\"translate(-40.99 -67.14)\" fill=\"url(#a5826235-76eb-40dc-ae18-c7de67d692d4)\"></path><path d=\"M844,184.29c3.18,1.87,3.28,9.86,2.79,16.27-.35,4.69-1,8.53-1,8.53l20.69,50.3s7.67-35.84,7.79-51.84a11.86,11.86,0,0,0-.57-3.72C870.09,192.3,849.81,185.9,844,184.29Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#67647e\"></path><path d=\"M842.51,183.89s.56.13,1.53.4A3,3,0,0,0,842.51,183.89Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#67647e\"></path><path d=\"M849.68,796.22l8.33,6s5.17,0,5.17,4.67,12.66,9.33,12.66,9.33,18.84,5.33,33.34,0c4.7-1.73,6.14-4.69,5.59-8.3-1.15-7.53-11-17.82-18.09-25.37-4.79-5.09-7-11.84-7.94-17.68a52.82,52.82,0,0,1-.56-12.65l-30.5-2.17a20.14,20.14,0,0,1,0,14.29,18.58,18.58,0,0,1-2.67,4.58c-3.72,4.72-5,12.13-5.36,18A65.93,65.93,0,0,0,849.68,796.22Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#67647e\"></path><path d=\"M787,810.05s2.33,7,24.17,9.34,18.67-13.84,18.67-13.84.11-.46.25-1.29a49.76,49.76,0,0,0,.08-16.54c-.76-4.26-.1-11.65.85-18.42,1.12-8.06,2.65-15.25,2.65-15.25l-33.84,2.5s-.59,6.89-.93,13.85c-.11,2.17-.2,4.34-.23,6.32a15.78,15.78,0,0,1-2.92,8.35,52.17,52.17,0,0,0-8.08,19.6,44.57,44.57,0,0,0-.62,4.76C787,809.83,787,810.05,787,810.05Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#67647e\"></path><path d=\"M849.68,796.22l8.33,6s5.17,0,5.17,4.67,12.66,9.33,12.66,9.33,18.84,5.33,33.34,0c4.7-1.73,6.14-4.69,5.59-8.3-.45,0-.88.06-1.24.07-5.94.19-11.72,1.79-17.63,2.32a87.64,87.64,0,0,1-10.12.16,35.3,35.3,0,0,1-5-.39c-4-.71-7.71-2.78-11.28-4.81a6.4,6.4,0,0,1-2.25-1.76,8.6,8.6,0,0,1-1-2.68c-1.26-4.52-4.78-8.14-8.82-10.52a38.46,38.46,0,0,0-7.77-3.35A65.93,65.93,0,0,0,849.68,796.22Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#67647e\"></path><path d=\"M787,810.05s2.33,7,24.17,9.34,18.67-13.84,18.67-13.84.11-.46.25-1.29c-1,.52-1.85,1-2.24,1.22-2,1.17-3.79,2.78-5.87,3.87-5,2.63-11,1.85-16.64,1-2.65-.4-5.3-.8-7.94-1.29a20.08,20.08,0,0,1-5.81-1.72,34.62,34.62,0,0,1-3.92-2.66,44.57,44.57,0,0,0-.62,4.76C787,809.83,787,810.05,787,810.05Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#67647e\"></path><path d=\"M849.68,796.22l8.33,6s5.17,0,5.17,4.67,12.66,9.33,12.66,9.33,18.84,5.33,33.34,0c4.7-1.73,6.14-4.69,5.59-8.3-.45,0-.88.06-1.24.07-5.94.19-11.72,1.79-17.63,2.32a87.64,87.64,0,0,1-10.12.16,35.3,35.3,0,0,1-5-.39c-4-.71-7.71-2.78-11.28-4.81a6.4,6.4,0,0,1-2.25-1.76,8.6,8.6,0,0,1-1-2.68c-1.26-4.52-4.78-8.14-8.82-10.52a38.46,38.46,0,0,0-7.77-3.35A65.93,65.93,0,0,0,849.68,796.22Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M787,810.05s2.33,7,24.17,9.34,18.67-13.84,18.67-13.84.11-.46.25-1.29c-1,.52-1.85,1-2.24,1.22-2,1.17-3.79,2.78-5.87,3.87-5,2.63-11,1.85-16.64,1-2.65-.4-5.3-.8-7.94-1.29a20.08,20.08,0,0,1-5.81-1.72,34.62,34.62,0,0,1-3.92-2.66,44.57,44.57,0,0,0-.62,4.76C787,809.83,787,810.05,787,810.05Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M857.68,750.05a20.14,20.14,0,0,1,0,14.29c8.75,1.49,25.06,4.5,31.06.53a52.82,52.82,0,0,1-.56-12.65Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M798.91,770.4c6.18.44,22.81,1.31,32.12-1.1,1.12-8.06,2.65-15.25,2.65-15.25l-33.84,2.5S799.25,763.44,798.91,770.4Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M774.51,537.22s.52,6.25,1.35,15c1.87,19.86,5.32,52.65,8,55.32,3.84,3.85,2.17,32.15.67,37.15s0,41,0,41a183,183,0,0,1,5.5,46c-.5,24,6.5,36.5,6.5,36.5s33,3,39.83-3.38,0-57.12,0-57.12S824,666.22,827,660.22s6.5-20.5,6.5-20.5v-50.5c4.85-8,7-19,7.93-28.94a152.17,152.17,0,0,0,.07-25.56s6.21,12.7,12.54,25.26c5.72,11.35,11.54,22.58,13,24.24,3,3.5.5,19.5,0,27.5s5.5,24,5.5,24c-7.5,4.5-9,57.5-9,57.5s5.5,13-6,27.5-7,42-5.5,41,32,7.5,38,0,12.5-28,12.5-28-3-21,3.5-40c4.82-14.08,10.73-47.09,13.47-63.26A64.45,64.45,0,0,0,920,612.7c-1.26-11.81-3.2-33.67-2.51-51,.23-5.65.07-14.63-.31-25.16-1.29-36.1-5.19-90.34-5.19-90.34l-27.1-18.36L867,415.72l-4.38.67L781,429l-3.17,40.26Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#444053\"></path><path d=\"M884.91,427.86l1.43,7.86s12,57.5,14.5,87,13,21,13,21a46.76,46.76,0,0,1,3.36-7.16c-1.29-36.1-5.19-90.34-5.19-90.34Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M799.18,209.72s56,44.83,45.66,35.83c-5.66-4.94-1.81-26,2.83-44,3.82-14.85,8.17-27.63,8.17-27.63s-48.88-45.73-45.33-8.34c1.25,13.18.21,22.55-1.66,29.17C805.42,206.88,799.18,209.72,799.18,209.72Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#efb7b9\"></path><path d=\"M803.84,197.8l35.5,27.75,10.33-11.5s8.84-3.83,9.5.5,3.17,31-2,33.5-11.83,4.17-17.66,3.34-12.34-7.34-16.67-9.84-20.33-15.5-20.33-15.5l-8-11.16Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M803.84,198.8l35.5,27.75,10.33-11.5s8.84-3.83,9.5.5,3.17,31-2,33.5-11.83,4.17-17.66,3.34-12.34-7.34-16.67-9.84-20.33-15.5-20.33-15.5l-8-11.16Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#a36468\"></path><path d=\"M774.51,537.22s.52,6.25,1.35,15c11,.42,32.34,1.72,47.32,5.64a82.1,82.1,0,0,0,18.26,2.39,152.17,152.17,0,0,0,.07-25.56s6.21,12.7,12.54,25.26a132.25,132.25,0,0,0,16.13-2.09l-6.67-86.67s.22-29.09-.88-54.83L781,429l-3.17,40.26Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M835.84,223.22s-24.25-26.51-30-22.3-9.47,14.47-9.47,14.47l19.75,21.66Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M834.84,222.22s-24.25-26.51-30-22.3-9.47,14.47-9.47,14.47l19.75,21.66Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#a36468\"></path><path d=\"M855,239.21,841,221.66s2.2-16.59,7.32-14.47S855,217.8,855,217.8Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M856,238.05,842.07,220.5s2.2-16.59,7.32-14.47S856,216.64,856,216.64Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#a36468\"></path><path d=\"M791.84,206.55s28.71,31,45.85,33.08c1.55.19,3.1.45,4.63.76,4.48.88,14.24,0,12.69-25.63l2.16-4.54,13.34,8.17,4.5,36.66,8,94,11.83,104.67s-36.33-3.5-46.5,5.67-13-50-13-50l-27.83-120-29.67-77.17Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M777.84,216.22l29.67,77.17,27.83,120s2.84,59.16,13,50c3.32-3,9.44-4.64,16.17-5.49a146.63,146.63,0,0,1,24.92-.56c3.32.18,5.41.38,5.41.38L883,353.05l-8-94-4.5-36.66-13.33-8.17L855,218.76c0,.67.07,1.33.1,2,.94,23.68-8.43,24.52-12.78,23.66-1.54-.31-3.08-.57-4.64-.76-12.14-1.49-30.08-17.46-39.51-26.64-3.89-3.8-6.34-6.44-6.34-6.44Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M777.84,213.22l29.67,77.17,27.83,120s2.84,59.16,13,50c3.32-3,9.44-4.64,16.17-5.49a146.63,146.63,0,0,1,24.92-.56c3.32.18,5.41.38,5.41.38L883,350.05l-8-94-4.5-36.66-13.33-8.17L855,215.76c0,.67.07,1.33.1,2,.94,23.68-8.43,24.52-12.78,23.66-1.54-.31-3.08-.57-4.64-.76-12.14-1.49-30.08-17.46-39.51-26.64-3.89-3.8-6.34-6.44-6.34-6.44Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#4285f4\"></path><path d=\"M855,215.76c0,.67.07,1.33.1,2l.23.16c3.52,2.32,9.17,41.5,9.17,41.5l7.33,99.83,13.5,74.5s1.77,8.49,4.09,20.62c3.32.18,5.41.38,5.41.38L883,350.05l-8-94-4.5-36.66-13.33-8.17Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M845.82,209.09s8,6.48,11.52,8.8,9.17,41.5,9.17,41.5l7.33,99.83,13.5,74.5s12,57.5,14.5,87,13,21,13,21,7.84-23,26.5-24.33,9-11.84,9-11.84-10.93-78.77-18.12-92.8a6.48,6.48,0,0,0-.38-.7c-1.06-1.74-2.23-5.21-3.46-9.85-7.11-26.84-16.2-93-16.2-93l-5.67-82C892,203.55,847,204.37,847,204.37Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#67647e\"></path><path d=\"M777.84,213.22l29.67,77.17,27.83,120s2.84,59.16,13,50c3.32-3,9.44-4.64,16.17-5.49-.12-20.34-.74-56.84-3.67-72.18a203.82,203.82,0,0,1-3.16-42.5l-36.34-79.17s-27.33-33.69-27.5-38.51c-.06-1.78,1.88-5.08,4.34-8.55-3.89-3.8-6.34-6.44-6.34-6.44Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M869.17,555.89l-6.66-86.67s.5-64.67-3.67-86.5a203.44,203.44,0,0,1-3.17-42.5l-36.33-79.17s-27.33-33.69-27.5-38.51,14.31-20.85,14.31-20.85-31.64,3.7-35.81,17.86-27,19.67-27,19.67-11,10-10.83,38.67,35,51.16,35,51.16,5.83,54,.83,78.34-.67,142.66-.67,142.66,33.5.34,54.5,5.84S869.17,555.89,869.17,555.89Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#67647e\"></path><path d=\"M819.84,418.39l-25.67,97.16s-3.5,8.67-21.5,2-70.33-28.33-70.33-28.33-4.67-7.67,4-21.83l26.17-76.67Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#b07473\"></path><polygon points=\"745.65 394.21 704.15 348.58 677.65 337.83 666.77 392.7 717.15 447.45 745.65 394.21\" fill=\"#e1e7ef\"></polygon><path d=\"M742.29,476.59s12.34,7.25,15.59,7.5,14.73,21.92,9.88,21.75-16.13-6-15-3,8.48,12,10.62,11.15,3.13,6.6-6,4-21.25-4.88-21.25-4.88-6.5-4.75-6.75-8.12-5.87-21.13-5.87-21.13Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#efb7b9\"></path><path d=\"M940.4,220.59s-10.68-23.05-17.06-30.68-34.21-15.82-37-13.57,14,14.89,17,16.51-19.39,16.67-19.84,17-17.5-1.52-8.75,4.23,34.62,11.61,34.62,11.61a13,13,0,0,1,10,2.39C924.38,231.72,940.4,220.59,940.4,220.59Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#efb7b9\"></path><path d=\"M718.23,477.75a69.18,69.18,0,0,0,5.66,13.35c2.5-2.26,26.37-10.13,26.37-10.13l-2.65-4.09-4.32-6.66s-21.28-4.62-24.9,0C717.17,471.77,717.39,474.63,718.23,477.75Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M717.23,476.75a69.18,69.18,0,0,0,5.66,13.35c2.5-2.26,26.37-10.13,26.37-10.13l-2.65-4.09-4.32-6.66s-21.28-4.62-24.9,0C716.17,470.77,716.39,473.63,717.23,476.75Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#a36468\"></path><path d=\"M916,225.8a35.16,35.16,0,0,0,2.7,4.94c3.85,6.07,9.68,13.23,9.68,13.23s22.74-10.46,22.74-10.92-6.9-11.33-12.51-19.9c-2.27-3.46-4.32-6.52-5.62-8.31,0,0-8.49,17.76-16.87,17.88C913.93,222.75,915.1,223.63,916,225.8Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M917,226.8a35.16,35.16,0,0,0,2.7,4.94c3.85,6.07,9.68,13.23,9.68,13.23s22.74-10.46,22.74-10.92-6.9-11.33-12.51-19.9c-2.27-3.46-4.32-6.52-5.62-8.31,0,0-8.49,17.76-16.87,17.88C914.93,223.75,916.1,224.63,917,226.8Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#a36468\"></path><polygon points=\"747.77 343.08 750.69 334.33 709.71 331.45 725.02 333.08 744.52 337.26 743.02 343.08 747.77 343.08\" fill=\"#b07473\"></polygon><path d=\"M717.23,476.75c4.52-2.13,16.58-6.56,29.38-.87l-4.32-6.66s-21.28-4.62-24.9,0C716.17,470.77,716.39,473.63,717.23,476.75Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M714.84,422.72c.1,1.45.19,2.9.28,4.34.25,4.41.42,8.78.53,13,.5,19.54-.31,35.66-.31,35.66s15.5-9.33,32-1.5L749,442.6l0-.55,1.69-13.83,5.48-44.67s10.33-62,13.5-64.33-23.5-52.5-23.5-52.5l-13.67,11.17L724,335.22v29.33S713,396.39,714.84,422.72Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#67647e\"></path><path d=\"M916.51,225.39l3.2,6.35c3.85,6.07,9.68,13.23,9.68,13.23s22.74-10.46,22.74-10.92-6.9-11.33-12.51-19.9c-1.73-2-2.78-3.1-2.78-3.1C943.51,227.55,916.51,225.39,916.51,225.39Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M897.17,222.54l9.34,4.68s11.5,15.5,14.83,17.17,5,1.5,5,1.5l-9.83-19.5s27,2.16,20.33-14.34c0,0,30.17,33,33.5,46.34,0,0,16.67,27.66,12.67,41.33s-20.17,16.33-31.84,12.17-47.5-22.5-47.5-22.5Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#67647e\"></path><path d=\"M930.67,255.05s25.17,28.17,23.17,32S932,260.72,930.67,255.05Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M817.09,179.22s-35.42-10.67-55.42,27.83S741,248.22,742,250.05s39.83-8.33,42-3.83-22,23-22,23l93.66,71-39.35-83.64a63,63,0,0,0-10.46-16.07c-6.47-7.24-15.32-18.33-12.19-21.75,2.76-3,7.18-10.83,13.14-19.84C811.17,192.31,818.11,184.86,817.09,179.22Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.2\"></path><path d=\"M818.09,178.22s-35.42-10.67-55.42,27.83S742,247.22,743,249.05s39.83-8.33,42-3.83-22,23-22,23l92.66,72-38.35-84.64a63,63,0,0,0-10.46-16.07c-6.47-7.24-15.32-18.33-12.19-21.75,2.76-3,7.18-10.83,13.14-19.84C812.17,191.31,819.11,183.86,818.09,178.22Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#67647e\"></path><path d=\"M818.09,178.22s-35.42-10.67-55.42,27.83S742,247.22,743,249.05s39.83-8.33,42-3.83-22,23-22,23l92.66,72-40.19-88.71a34.79,34.79,0,0,0-6.24-9.39c-6.33-6.82-18.11-20.49-14.57-24.36,2.76-3,7.18-10.83,13.14-19.84C812.17,191.31,819.11,183.86,818.09,178.22Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><circle cx=\"769.85\" cy=\"280.24\" r=\"7.33\" fill=\"#444053\"></circle><circle cx=\"769.85\" cy=\"325.74\" r=\"7.33\" fill=\"#444053\"></circle><path d=\"M715.65,440.06c4.22,1,24.23.55,33.33,2.54l0-.55,1.69-13.83c-10.26-1.28-32.56-3.71-35.58-1.16C711.18,430.39,710.62,438.91,715.65,440.06Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#67647e\"></path><path d=\"M715.65,441.06c4.22,1,24.23.55,33.33,2.54l0-.55,1.69-13.83c-10.26-1.28-32.56-3.71-35.58-1.16C711.18,431.39,710.62,439.91,715.65,441.06Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M715.65,440.06c4.22,1,24.23.55,33.33,2.54l0-.55,1.69-13.83c-10.26-1.28-32.56-3.71-35.58-1.16C711.18,430.39,710.62,438.91,715.65,440.06Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><circle cx=\"679.02\" cy=\"366.24\" r=\"4.42\" fill=\"#444053\"></circle><path d=\"M803.51,451.05l-18.67,63.67s-5,2.33-5-1.83S803.51,451.05,803.51,451.05Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#fff\" opacity=\"0.1\"></path><path d=\"M810.67,191.62a39.81,39.81,0,0,0,3.69,2.63c6.35,4,12,9.44,20.1,9.44a40.93,40.93,0,0,0,13.21-2.17c3.82-14.85,8.17-27.63,8.17-27.63s-48.88-45.73-45.33-8.34C811.76,178.73,812.54,185,810.67,191.62Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M793.4,160.63a41.06,41.06,0,1,0,41.06-41.06A40.87,40.87,0,0,0,793.4,160.63Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#efb7b9\"></path><path d=\"M857.73,195a4.64,4.64,0,0,0,1.92,2.25l6.52,4,12.19,7.41,19.29,11.72q.68.41,1.38.75a16.6,16.6,0,0,0,14.63.2,12,12,0,0,0,6.83-8.52,14.23,14.23,0,0,0-5.22-14,.92.92,0,0,0-.36-.19,35.26,35.26,0,0,1-11.4-5.57l-12.14-8.4-10.84-9.91-5.48-3.79a5.11,5.11,0,0,0-5.51-.2C863.92,174,852.73,182.36,857.73,195Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#e1e7ef\"></path><path d=\"M866.17,201.19l12.19,7.41c2.54-10.24,9-17.47,14.61-22.93l-12.44-11C871.07,179.36,867.31,195,866.17,201.19Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#a36468\"></path><path d=\"M899,221.07a16.6,16.6,0,0,0,14.63.2,12,12,0,0,0,6.83-8.52,14.23,14.23,0,0,0-5.22-14,30.73,30.73,0,0,0-8.3,5.21,23.32,23.32,0,0,0-7.18,11.3A24,24,0,0,0,899,221.07Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M793.4,160.63a40.87,40.87,0,0,0,3.82,17.31,23.18,23.18,0,0,1,5.52,8.76c2.78,3.38,3.87,5.29,7.58,7.63,1.49-1.57,4.85-2.52,5.46-4.55,1.55-5.23.67-10.82.59-16.27,0-2.42.34-5.28,2.47-6.44,1.77-1,4-.28,5.74.7s3.47,2.25,5.47,2.48c3,.34,5.74-1.77,7.42-4.25s2.65-5.38,4.24-7.92c2.1-3.35,5.2-5.92,8.25-8.42,3.49-2.88,6.88-6.07,10.6-8.65,2.22-1.55,4.88-2.27,7.07-3.83l.35-.26a41.06,41.06,0,0,0-74.58,23.71Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M874.3,115.24c-.87-5.76-5.64-11.17-11.46-11.27-4.81-.08-8.91,3.18-13.17,5.41a33.28,33.28,0,0,1-28.37,1c-2.61-1.15-5.27-2.68-8.12-2.44s-5.12,2.1-7.1,4a47.62,47.62,0,0,0-10.76,16.3c-.71,1.8-1.36,3.71-2.74,5.07a20.3,20.3,0,0,1-3.42,2.27,18.85,18.85,0,0,0-8.09,12.17,26.89,26.89,0,0,0,1.47,14.75,22.65,22.65,0,0,0,5.37,8.53c1.82,1.71,4,3,5.91,4.59a23.65,23.65,0,0,1,8,21.89c5.32,1.22,10.42-3.54,12-8.77s.67-10.81.59-16.27c0-2.42.34-5.27,2.47-6.43,1.77-1,4-.28,5.74.7s3.46,2.24,5.47,2.48c3,.34,5.74-1.77,7.42-4.25s2.64-5.38,4.24-7.92c2.09-3.35,5.2-5.92,8.25-8.42,3.49-2.88,6.88-6.07,10.59-8.65,2.23-1.55,4.89-2.27,7.08-3.83C872.25,131.44,874.3,122.8,874.3,115.24Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#585268\"></path><path d=\"M842.51,183.89s.56.13,1.53.4A3,3,0,0,0,842.51,183.89Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><g opacity=\"0.1\"><path d=\"M811.78,185.51c1.55-5.23.67-10.82.59-16.27,0-2.42.34-5.28,2.47-6.44,1.77-1,4-.28,5.74.7s3.46,2.25,5.47,2.48c3,.34,5.74-1.76,7.42-4.25s2.64-5.38,4.24-7.92c2.09-3.35,5.2-5.92,8.25-8.42,3.49-2.87,6.88-6.07,10.59-8.65,2.23-1.55,4.89-2.27,7.08-3.83,6.62-4.74,8.67-13.38,8.67-20.93a14,14,0,0,0-1.33-4.16A14.31,14.31,0,0,1,874.3,115c0,7.55-2,16.19-8.67,20.93-2.19,1.56-4.85,2.28-7.08,3.83-3.71,2.58-7.1,5.78-10.59,8.65-3.05,2.5-6.16,5.07-8.25,8.42-1.6,2.54-2.55,5.44-4.24,7.92s-4.44,4.59-7.42,4.25c-2-.23-3.7-1.51-5.47-2.48s-4-1.66-5.74-.7c-2.13,1.16-2.51,4-2.47,6.44.08,5.45,1,11-.59,16.27s-6.66,10-12,8.76a20.9,20.9,0,0,0,.31-2.84C806.54,194.07,810.45,190,811.78,185.51Z\" transform=\"translate(-40.99 -67.14)\"></path><path d=\"M785.91,167.79c1.82,1.71,4,3,5.91,4.59a22.8,22.8,0,0,1,5.21,6.31,22.33,22.33,0,0,0-3.21-3.31c-1.92-1.59-4.09-2.88-5.91-4.59a19.52,19.52,0,0,1-3.64-4.78A18.4,18.4,0,0,0,785.91,167.79Z\" transform=\"translate(-40.99 -67.14)\"></path></g><path d=\"M841.15,524.75c.73,2.17,1.77,4.29,1.91,6.58.24,3.89-2.14,7.52-2.31,11.42-.2,4.54,2.56,8.61,5.2,12.3-3.13,0-6.55-1.08-8.14-3.77a12.29,12.29,0,0,1-1.17-3.29c-2.83-11.29-5.58-23.64-.66-34.18a15.11,15.11,0,0,1,3.25-4.88C840.06,514.25,839.36,519.48,841.15,524.75Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M919.37,445.07l8.31-11.21c2-2.71,4.07-5.53,4.79-8.82.78-3.61-.13-7.35-.25-11,0-.41,0-.83,0-1.25a6.48,6.48,0,0,0-.38-.7c-1.06-1.74-2.23-5.21-3.46-9.85a12,12,0,0,0-2.76,4.25c-3.87,9.44-.29,20.52-3.49,30.2C921.21,439.47,919.71,442.13,919.37,445.07Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M898.21,784.41a35.42,35.42,0,0,1-28.73,5.69\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M829.36,786.06a21.06,21.06,0,0,1-30.67-2\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M873.24,635.31A18.93,18.93,0,0,0,894,626.13\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M825.84,660.58a27.67,27.67,0,0,1-17.85-4.9\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M858.19,721c5.33,2.17,10.08,5.54,15.27,8s11.2,4.08,16.7,2.36\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><ellipse cx=\"529.34\" cy=\"644.14\" rx=\"85.12\" ry=\"24.55\" fill=\"#5f5d7e\"></ellipse><ellipse cx=\"529.34\" cy=\"636.23\" rx=\"17.03\" ry=\"4.91\" opacity=\"0.1\"></ellipse><rect x=\"519.87\" y=\"506.73\" width=\"17.5\" height=\"129.5\" fill=\"#5f5d7e\"></rect><path d=\"M578.36,580.28v15c-3.5-1.08-11.49-5.63-17.5-9.21V573.87h3.65Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M537.13,517.49s57.78-14.87,72.16-26,70.85,41.25,63.39,61-34.62,34.08-34.62,34.08-75.12,12.22-87.9-13.27S537.13,517.49,537.13,517.49Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#474157\"></path><path d=\"M537.13,517.49s57.78-14.87,72.16-26,70.85,41.25,63.39,61-34.62,34.08-34.62,34.08-75.12,12.22-87.9-13.27S537.13,517.49,537.13,517.49Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M532.13,511.49s57.78-14.87,72.16-26,70.85,41.25,63.39,61-34.62,34.08-34.62,34.08-75.12,12.22-87.9-13.27S532.13,511.49,532.13,511.49Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#474157\"></path><path d=\"M650.89,409.58c-.22,0-.43-.05-.64-.09A1.33,1.33,0,0,1,650.89,409.58Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M479.71,467.21c-5.77-1.41-21.68-2.71-29.25,22.68a112.32,112.32,0,0,1-6.71,17.17c-7.27,14.91-16.64,45.56,24.61,52.31l99,22.5s53,6.5,56.5,4,3-8,3-8-58.5,0-70-18-12-42.5-12-42.5,1.44-37.83-59-48.82C483.82,468.18,481.76,467.71,479.71,467.21Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#474157\"></path><path d=\"M479.71,467.38c-5.77-1.41-21.68-2.71-29.25,22.68a112.84,112.84,0,0,1-6.71,17.18c-7.27,14.9-16.64,45.56,24.61,52.31l99,22.5s53,6.5,56.5,4,3-8,3-8-58.5,0-70-18-12-42.5-12-42.5,1.44-37.83-59-48.82C483.82,468.35,481.76,467.88,479.71,467.38Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><path d=\"M687.24,441.34a15.3,15.3,0,0,0-15.45-12.93c-12.71.24-49,1.78-71.12,11.56-4.86,2.15-9.73,4.24-14.73,6-4.52,1.61-9.91,4.18-12.58,7.87s-65.5,52,25,98.5c0,0,48.5,13.81,67.5-18.59,0,0,13.5-34.81,12.5-46.86s9-44.55,9-44.55S687.34,442,687.24,441.34Z\" transform=\"translate(-40.99 -67.14)\" fill=\"#474157\"></path><path d=\"M687.24,450.1c-1.14-7-7.8-12.06-15.45-11.93-14.24.24-58.07,2-78.43,14.27,0,0-15.5,9.23-20,9.23s-65.5,48,25,90.93c0,0,48.5,12.74,67.5-17.17,0,0,13.5-32.13,12.5-43.25s9-41.13,9-41.13S687.34,450.7,687.24,450.1Z\" transform=\"translate(-40.99 -67.14)\" opacity=\"0.1\"></path><rect x=\"581.87\" y=\"485.23\" width=\"16\" height=\"34.07\" fill=\"#5f5d7e\"></rect>", 157)])))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.something_went_wrong')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.serverErrorMessage || _ctx.__('base.could_not_connect')), 1 /* TEXT */)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.initializing && !_ctx.serverError ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, _cache[3] || (_cache[3] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-body",
    style: {
      "margin": "3rem auto"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "loading-spinner"
  })], -1 /* HOISTED */)]))) : !_ctx.initializing && !_ctx.serverError ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 3
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_11, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(['all', 'featured'], function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
      "class": "nav-item",
      key: index,
      role: "presentation"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      href: "javascript:(0)",
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["nav-link position-relative", {
        active: _ctx.filter === item
      }]),
      onClick: function onClick($event) {
        return _ctx.filter = item;
      },
      "data-bs-toggle": "tab",
      "aria-selected": "true",
      role: "tab",
      disabled: _ctx.loading
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__("base.".concat(item))) + " ", 1 /* TEXT */), _ctx.filter === item && !_ctx.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.meta.total), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_12)]);
  }), 64 /* STABLE_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_16, [_cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon me-1icon-tabler-sort-descending\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path><path d=\"M4 6l9 0\"></path><path d=\"M4 12l7 0\"></path><path d=\"M4 18l7 0\"></path><path d=\"M15 15l3 3l3 -3\"></path><path d=\"M18 6l0 12\"></path></svg>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__("base.".concat(_ctx.sort))), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(['default', 'popular', 'top_rated'], function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["dropdown-item", {
        active: _ctx.sort === item
      }]),
      key: index,
      onClick: function onClick($event) {
        return _ctx.sort = item;
      }
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__("base.".concat(item))), 11 /* TEXT, CLASS, PROPS */, _hoisted_18);
  }), 64 /* STABLE_FRAGMENT */))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<span class=\"input-group-text\"><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path><path d=\"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\"></path><path d=\"M21 21l-6 -6\"></path></svg></span>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "search",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.search = $event;
    }),
    "class": "form-control",
    placeholder: _ctx.__('base.search')
  }, null, 8 /* PROPS */, _hoisted_21), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.search]]), _ctx.search ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:void(0)",
    "class": "link-secondary",
    "data-bs-toggle": "tooltip",
    "aria-label": _ctx.__('base.clear_search'),
    title: _ctx.__('base.clear_search'),
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.search = '';
    })
  }, _cache[5] || (_cache[5] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "class": "icon",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    d: "M18 6l-12 12"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    d: "M6 6l12 12"
  })], -1 /* HOISTED */)]), 8 /* PROPS */, _hoisted_23)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [_ctx.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(this.lastPluginsCount, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_plugin_placeholder, {
      key: item
    });
  }), 128 /* KEYED_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.plugins, function (plugin, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_plugin_item, {
      key: index,
      plugin: plugin,
      onShowPlugin: _ctx.showPlugin,
      onInstall: _ctx.install,
      onUninstall: _ctx.uninstall,
      onToggleActivation: _ctx.toggleActivation
    }, null, 8 /* PROPS */, ["plugin", "onShowPlugin", "onInstall", "onUninstall", "onToggleActivation"]);
  }), 128 /* KEYED_FRAGMENT */))]), _ctx.meta.last_page > 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_pagination, {
    key: 0,
    meta: _ctx.meta,
    onPageSelected: _ctx.setPage,
    "scroll-to-top": true
  }, null, 8 /* PROPS */, ["meta", "onPageSelected"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.showingPlugin ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_plugin_details, {
    key: 1,
    plugin: _ctx.showingPlugin,
    onBack: _ctx.goBack,
    onInstall: _ctx.install,
    onUninstall: _ctx.uninstall,
    onToggleActivation: _ctx.toggleActivation
  }, null, 8 /* PROPS */, ["plugin", "onBack", "onInstall", "onUninstall", "onToggleActivation"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/js/components/PluginPlaceholder.vue?vue&type=template&id=51e8ec26":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/js/components/PluginPlaceholder.vue?vue&type=template&id=51e8ec26 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": "col-md-3"
};
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, _cache[0] || (_cache[0] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"card placeholder-glow\"><div class=\"ratio ratio-21x9 card-img-top placeholder\"></div><div class=\"card-body\"><div class=\"placeholder col-9 mb-3\"></div><div class=\"placeholder placeholder-xs col-10\"></div><div class=\"placeholder placeholder-xs col-11\"></div></div><div class=\"card-footer\"><div class=\"d-flex justify-content-between\"><a href=\"#\" tabindex=\"-1\" class=\"btn btn-primary disabled placeholder col-4\" aria-hidden=\"true\"></a><a href=\"#\" tabindex=\"-1\" class=\"btn disabled placeholder col-4\" aria-hidden=\"true\"></a></div></div></div>", 1)]));
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./platform/packages/plugin-management/resources/js/components/Pagination.vue":
/*!************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/js/components/Pagination.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Pagination_vue_vue_type_template_id_83f4f886__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination.vue?vue&type=template&id=83f4f886 */ "./platform/packages/plugin-management/resources/js/components/Pagination.vue?vue&type=template&id=83f4f886");
/* harmony import */ var _Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.vue?vue&type=script&lang=js */ "./platform/packages/plugin-management/resources/js/components/Pagination.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Pagination_vue_vue_type_template_id_83f4f886__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"platform/packages/plugin-management/resources/js/components/Pagination.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./platform/packages/plugin-management/resources/js/components/Pagination.vue?vue&type=script&lang=js":
/*!************************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/js/components/Pagination.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pagination.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/js/components/Pagination.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./platform/packages/plugin-management/resources/js/components/Pagination.vue?vue&type=template&id=83f4f886":
/*!******************************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/js/components/Pagination.vue?vue&type=template&id=83f4f886 ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_template_id_83f4f886__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_template_id_83f4f886__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pagination.vue?vue&type=template&id=83f4f886 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/js/components/Pagination.vue?vue&type=template&id=83f4f886");


/***/ }),

/***/ "./platform/packages/plugin-management/resources/js/components/PluginDetails.vue":
/*!***************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/js/components/PluginDetails.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PluginDetails_vue_vue_type_template_id_cd300f88__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginDetails.vue?vue&type=template&id=cd300f88 */ "./platform/packages/plugin-management/resources/js/components/PluginDetails.vue?vue&type=template&id=cd300f88");
/* harmony import */ var _PluginDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PluginDetails.vue?vue&type=script&lang=js */ "./platform/packages/plugin-management/resources/js/components/PluginDetails.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PluginDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PluginDetails_vue_vue_type_template_id_cd300f88__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"platform/packages/plugin-management/resources/js/components/PluginDetails.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./platform/packages/plugin-management/resources/js/components/PluginDetails.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/js/components/PluginDetails.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PluginDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PluginDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PluginDetails.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/js/components/PluginDetails.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./platform/packages/plugin-management/resources/js/components/PluginDetails.vue?vue&type=template&id=cd300f88":
/*!*********************************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/js/components/PluginDetails.vue?vue&type=template&id=cd300f88 ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PluginDetails_vue_vue_type_template_id_cd300f88__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PluginDetails_vue_vue_type_template_id_cd300f88__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PluginDetails.vue?vue&type=template&id=cd300f88 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/js/components/PluginDetails.vue?vue&type=template&id=cd300f88");


/***/ }),

/***/ "./platform/packages/plugin-management/resources/js/components/PluginItem.vue":
/*!************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/js/components/PluginItem.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PluginItem_vue_vue_type_template_id_78db59ee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginItem.vue?vue&type=template&id=78db59ee */ "./platform/packages/plugin-management/resources/js/components/PluginItem.vue?vue&type=template&id=78db59ee");
/* harmony import */ var _PluginItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PluginItem.vue?vue&type=script&lang=js */ "./platform/packages/plugin-management/resources/js/components/PluginItem.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PluginItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PluginItem_vue_vue_type_template_id_78db59ee__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"platform/packages/plugin-management/resources/js/components/PluginItem.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./platform/packages/plugin-management/resources/js/components/PluginItem.vue?vue&type=script&lang=js":
/*!************************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/js/components/PluginItem.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PluginItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PluginItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PluginItem.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/js/components/PluginItem.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./platform/packages/plugin-management/resources/js/components/PluginItem.vue?vue&type=template&id=78db59ee":
/*!******************************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/js/components/PluginItem.vue?vue&type=template&id=78db59ee ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PluginItem_vue_vue_type_template_id_78db59ee__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PluginItem_vue_vue_type_template_id_78db59ee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PluginItem.vue?vue&type=template&id=78db59ee */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/js/components/PluginItem.vue?vue&type=template&id=78db59ee");


/***/ }),

/***/ "./platform/packages/plugin-management/resources/js/components/PluginList.vue":
/*!************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/js/components/PluginList.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PluginList_vue_vue_type_template_id_64d069d8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginList.vue?vue&type=template&id=64d069d8 */ "./platform/packages/plugin-management/resources/js/components/PluginList.vue?vue&type=template&id=64d069d8");
/* harmony import */ var _PluginList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PluginList.vue?vue&type=script&lang=js */ "./platform/packages/plugin-management/resources/js/components/PluginList.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PluginList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PluginList_vue_vue_type_template_id_64d069d8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"platform/packages/plugin-management/resources/js/components/PluginList.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./platform/packages/plugin-management/resources/js/components/PluginList.vue?vue&type=script&lang=js":
/*!************************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/js/components/PluginList.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PluginList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PluginList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PluginList.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/js/components/PluginList.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./platform/packages/plugin-management/resources/js/components/PluginList.vue?vue&type=template&id=64d069d8":
/*!******************************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/js/components/PluginList.vue?vue&type=template&id=64d069d8 ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PluginList_vue_vue_type_template_id_64d069d8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PluginList_vue_vue_type_template_id_64d069d8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PluginList.vue?vue&type=template&id=64d069d8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/js/components/PluginList.vue?vue&type=template&id=64d069d8");


/***/ }),

/***/ "./platform/packages/plugin-management/resources/js/components/PluginPlaceholder.vue":
/*!*******************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/js/components/PluginPlaceholder.vue ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PluginPlaceholder_vue_vue_type_template_id_51e8ec26__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginPlaceholder.vue?vue&type=template&id=51e8ec26 */ "./platform/packages/plugin-management/resources/js/components/PluginPlaceholder.vue?vue&type=template&id=51e8ec26");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_PluginPlaceholder_vue_vue_type_template_id_51e8ec26__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"platform/packages/plugin-management/resources/js/components/PluginPlaceholder.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./platform/packages/plugin-management/resources/js/components/PluginPlaceholder.vue?vue&type=template&id=51e8ec26":
/*!*************************************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/js/components/PluginPlaceholder.vue?vue&type=template&id=51e8ec26 ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PluginPlaceholder_vue_vue_type_template_id_51e8ec26__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PluginPlaceholder_vue_vue_type_template_id_51e8ec26__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PluginPlaceholder.vue?vue&type=template&id=51e8ec26 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/js/components/PluginPlaceholder.vue?vue&type=template&id=51e8ec26");


/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/***/ ((module) => {

module.exports = Vue;

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/js/marketplace.js ***!
  \*************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_PluginList_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/PluginList.vue */ "./platform/packages/plugin-management/resources/js/components/PluginList.vue");

if (typeof vueApp !== 'undefined') {
  vueApp.booting(function (vue) {
    vue.component('plugin-list', _components_PluginList_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
  });
}
$(function () {
  document.addEventListener('show-terms-and-policy-modal', function (e) {
    var $modal = $('#terms-and-policy-modal');
    $modal.modal('show');
    $modal.find('[data-bb-toggle="accept-term-and-policy"]').data('id', e.detail.id);
  });
  $(document).on('click', '[data-bb-toggle="accept-term-and-policy"]', function (e) {
    var currentTarget = $(e.currentTarget);
    document.dispatchEvent(new CustomEvent('terms-and-policy-accepted', {
      detail: {
        element: currentTarget,
        id: currentTarget.data('id')
      }
    }));
  });
});
})();

/******/ })()
;