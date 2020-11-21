(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/topic/TopicEdit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/topic/TopicEdit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_topic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/topic */ \"./src/api/topic.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"TopicEdit\",\n  components: {},\n  data: function data() {\n    return {\n      topicMap: {\n        topic: {},\n        tags: []\n      },\n      placeholder: '本站已全部支持markdown语法',\n      boxShadow: false,\n      boxShadowStyle: {},\n      subfield: false,\n      toolbars: {\n        bold: true,\n        // 粗体\n        italic: true,\n        // 斜体\n        header: true,\n        // 标题\n        underline: true,\n        // 下划线\n        strikethrough: true,\n        // 中划线\n        mark: true,\n        // 标记\n        superscript: false,\n        // 上角标\n        subscript: false,\n        // 下角标\n        quote: true,\n        // 引用\n        ol: true,\n        // 有序列表\n        ul: true,\n        // 无序列表\n        link: true,\n        // 链接\n        imagelink: true,\n        // 图片链接\n        code: true,\n        // code\n        table: true,\n        // 表格\n        fullscreen: true,\n        // 全屏编辑\n        readmodel: false,\n        // 沉浸式阅读\n        htmlcode: false,\n        // 展示html源码\n        help: true,\n        // 帮助\n\n        /* 1.3.5 */\n        undo: false,\n        // 上一步\n        redo: false,\n        // 下一步\n        trash: false,\n        // 清空\n        save: false,\n        // 保存（触发events中的save事件）\n\n        /* 1.4.2 */\n        navigation: false,\n        // 导航目录\n\n        /* 2.1.8 */\n        alignleft: true,\n        // 左对齐\n        aligncenter: true,\n        // 居中\n        alignright: true,\n        // 右对齐\n\n        /* 2.2.1 */\n        subfield: true,\n        // 单双栏模式\n        preview: true // 预览\n\n      }\n    };\n  },\n  created: function created() {\n    this.fetchTopic();\n  },\n  methods: {\n    fetchTopic: function fetchTopic() {\n      var _this = this;\n\n      Object(_api_topic__WEBPACK_IMPORTED_MODULE_0__[\"getTopicById\"])(this.$route.query.id).then(function (value) {\n        console.log(value);\n        _this.topicMap = value.data;\n      });\n    },\n    handleUpdate: function handleUpdate() {\n      var _this2 = this;\n\n      this.topicMap.topic.content = this.$refs.md.d_value;\n      Object(_api_topic__WEBPACK_IMPORTED_MODULE_0__[\"update\"])(this.topicMap.topic).then(function (response) {\n        var data = response.data;\n        console.log(data);\n        setTimeout(function () {\n          _this2.$router.push({\n            name: 'topic-detail',\n            params: {\n              id: data.id\n            }\n          });\n        }, 800);\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/topic/TopicEdit.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"550781b6-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/topic/TopicEdit.vue?vue&type=template&id=f2cb81a2&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"550781b6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/topic/TopicEdit.vue?vue&type=template&id=f2cb81a2&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"section\", [\n    _c(\"div\", { staticClass: \"columns is-mobile\" }, [\n      _c(\"div\", { staticClass: \"column is-four-fifths\" }, [\n        _c(\"article\", { staticClass: \"message is-light\" }, [\n          _vm._m(0),\n          _c(\n            \"div\",\n            { staticClass: \"message-body\" },\n            [\n              _c(\"div\", { staticClass: \"field\" }, [\n                _c(\"div\", { staticClass: \"control\" }, [\n                  _c(\"input\", {\n                    directives: [\n                      {\n                        name: \"model\",\n                        rawName: \"v-model\",\n                        value: _vm.topicMap.topic.title,\n                        expression: \"topicMap.topic.title\"\n                      }\n                    ],\n                    staticClass: \"input is-primary\",\n                    attrs: { type: \"text\", placeholder: \"请输入标题\" },\n                    domProps: { value: _vm.topicMap.topic.title },\n                    on: {\n                      input: function($event) {\n                        if ($event.target.composing) {\n                          return\n                        }\n                        _vm.$set(\n                          _vm.topicMap.topic,\n                          \"title\",\n                          $event.target.value\n                        )\n                      }\n                    }\n                  })\n                ])\n              ]),\n              _c(\n                \"b-field\",\n                { attrs: { rows: \"8\" } },\n                [\n                  _c(\"mavon-editor\", {\n                    ref: \"md\",\n                    attrs: {\n                      value: _vm.topicMap.topic.content,\n                      placeholder: _vm.placeholder,\n                      boxShadow: _vm.boxShadow,\n                      toolbars: _vm.toolbars\n                    }\n                  })\n                ],\n                1\n              ),\n              _c(\n                \"b-button\",\n                {\n                  attrs: { type: \"is-info\", outlined: \"\" },\n                  on: {\n                    click: function($event) {\n                      return _vm.handleUpdate()\n                    }\n                  }\n                },\n                [_vm._v(\"更新\")]\n              )\n            ],\n            1\n          )\n        ])\n      ]),\n      _vm._m(1)\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"message-header\" }, [\n      _c(\"i\", { staticClass: \"fa fa fa-book\" }, [_vm._v(\" 主题 / 更新主题\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"column\" }, [\n      _c(\"article\", { staticClass: \"message is-light\" }, [\n        _c(\"div\", { staticClass: \"message-header\" }, [\n          _c(\"i\", { staticClass: \"fa fa-exclamation-circle\" }, [\n            _vm._v(\" 发帖提示\")\n          ])\n        ]),\n        _c(\"div\", { staticClass: \"message-body\" }, [\n          _c(\"p\", [_vm._v(\"1. 请在标题中描述内容要点。\")]),\n          _c(\"br\"),\n          _c(\"p\", [\n            _vm._v(\n              \"2. 可以在正文中为你要发布的主题添加更多细节。编辑器支持 Markdown 文本标记语法。\"\n            )\n          ]),\n          _c(\"br\"),\n          _c(\"p\", [\n            _vm._v(\n              \"3. 在最后，请为你的话题选择一个或多个标签。恰当的标签会让你发布的信息更加有用。\"\n            )\n          ])\n        ])\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/topic/TopicEdit.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22550781b6-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/views/topic/TopicEdit.vue":
/*!***************************************!*\
  !*** ./src/views/topic/TopicEdit.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TopicEdit_vue_vue_type_template_id_f2cb81a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopicEdit.vue?vue&type=template&id=f2cb81a2&scoped=true& */ \"./src/views/topic/TopicEdit.vue?vue&type=template&id=f2cb81a2&scoped=true&\");\n/* harmony import */ var _TopicEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopicEdit.vue?vue&type=script&lang=js& */ \"./src/views/topic/TopicEdit.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _TopicEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _TopicEdit_vue_vue_type_template_id_f2cb81a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _TopicEdit_vue_vue_type_template_id_f2cb81a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"f2cb81a2\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/topic/TopicEdit.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/topic/TopicEdit.vue?");

/***/ }),

/***/ "./src/views/topic/TopicEdit.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/views/topic/TopicEdit.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TopicEdit.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/topic/TopicEdit.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/topic/TopicEdit.vue?");

/***/ }),

/***/ "./src/views/topic/TopicEdit.vue?vue&type=template&id=f2cb81a2&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./src/views/topic/TopicEdit.vue?vue&type=template&id=f2cb81a2&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_550781b6_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicEdit_vue_vue_type_template_id_f2cb81a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"550781b6-vue-loader-template\"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TopicEdit.vue?vue&type=template&id=f2cb81a2&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"550781b6-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/topic/TopicEdit.vue?vue&type=template&id=f2cb81a2&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_550781b6_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicEdit_vue_vue_type_template_id_f2cb81a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_550781b6_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicEdit_vue_vue_type_template_id_f2cb81a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/topic/TopicEdit.vue?");

/***/ })

}]);