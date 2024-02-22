/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./BlockSettings.js":
/*!**************************!*\
  !*** ./BlockSettings.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockSettings: () => (/* binding */ BlockSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




class BlockSettings extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    const {
      attributes,
      setAttributes
    } = this.props;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: "Basic",
      initialOpen: true
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, "Set Padding for each section"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: "Padding for each section",
      value: attributes.sectionMargin,
      onChange: sectionMargin => setAttributes({
        sectionMargin
      }),
      options: [{
        value: '',
        label: 'Default'
      }, {
        value: '10px',
        label: '10px'
      }, {
        value: '50px',
        label: '50px'
      }]
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, "Hide the Content if you want users to take the quiz question from memory"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: "Hide Content",
      value: attributes.hideContent,
      onChange: hideContent => setAttributes({
        hideContent
      }),
      options: [{
        value: 'block',
        label: 'visible'
      }, {
        value: 'none',
        label: 'hide'
      }]
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, "Set Header Gradient First Color"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
      color: attributes.headerBackgroundColor,
      onChange: headerBackgroundColor => setAttributes({
        headerBackgroundColor
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, "Set Header Gradient Second Color"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
      color: attributes.secondHeaderBackgroundColor,
      onChange: secondHeaderBackgroundColor => setAttributes({
        secondHeaderBackgroundColor
      })
    }))));
  }
}

/***/ }),

/***/ "./src/blocks/cms-course-module/edit.js":
/*!**********************************************!*\
  !*** ./src/blocks/cms-course-module/edit.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/cms-course-module/editor.scss");
/* harmony import */ var _components_QuizQuestion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/QuizQuestion */ "./src/components/QuizQuestion.js");
/* harmony import */ var _components_QuizAnswers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/QuizAnswers */ "./src/components/QuizAnswers.js");
/* harmony import */ var _BlockSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../BlockSettings */ "./BlockSettings.js");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */






/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
function Edit({
  attributes,
  setAttributes
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BlockSettings__WEBPACK_IMPORTED_MODULE_6__.BlockSettings, {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: {
      backgroundImage: `linear-gradient(${attributes.headerBackgroundColor}, ${attributes.secondHeaderBackgroundColor})`
    },
    className: "module-section-header"
  }, "Add a Title Here"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    style: {
      marginBottom: attributes.sectionMargin
    },
    className: "subject-title",
    tagName: "div",
    placeholder: "title for module",
    value: attributes.title,
    onChange: title => setAttributes({
      title
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: {
      marginBottom: attributes.sectionMargin,
      display: attributes.hideContent,
      backgroundImage: `linear-gradient(${attributes.headerBackgroundColor}, ${attributes.secondHeaderBackgroundColor})`
    },
    className: "module-section-header"
  }, "Add Your Content Here"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    style: {
      marginBottom: attributes.sectionMargin,
      display: attributes.hideContent
    },
    className: "info",
    tagName: "div",
    placeholder: "Information you want the user to read",
    value: attributes.info,
    onChange: info => setAttributes({
      info
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: {
      backgroundImage: `linear-gradient(${attributes.headerBackgroundColor}, ${attributes.secondHeaderBackgroundColor})`
    },
    className: "module-section-header"
  }, "Place an Image for Users to Reference Here"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "photo"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    style: {
      marginBottom: attributes.sectionMargin
    },
    allowedTypes: ['image'],
    onSelect: file => setAttributes({
      imgUrl: file.sizes.medium.url
    }),
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.imgUrl,
      alt: "Upload a photo",
      onClick: open
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: {
      backgroundImage: `linear-gradient(${attributes.headerBackgroundColor}, ${attributes.secondHeaderBackgroundColor})`
    },
    className: "module-section-header"
  }, "Estimated Time to Complete Module"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    style: {
      marginBottom: attributes.sectionMargin
    },
    className: "length",
    placeholder: "1 Hour",
    value: attributes.length,
    onChange: length => setAttributes({
      length
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: {
      backgroundImage: `linear-gradient(${attributes.headerBackgroundColor}, ${attributes.secondHeaderBackgroundColor})`
    },
    className: "module-section-header"
  }, "Quiz Question for Users"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_QuizQuestion__WEBPACK_IMPORTED_MODULE_4__["default"], {
    question: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      className: "quiz-question",
      tagName: "div",
      placeholder: "Quiz Question for Users",
      value: attributes.question,
      onChange: question => setAttributes({
        question
      })
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    className: "module-section-incorrect-answer"
  }, "Incorrect Answer #1"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "answerone",
    tagName: "div",
    placeholder: "Incorrect Answer #1",
    value: attributes.answerone,
    onChange: answerone => setAttributes({
      answerone
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    className: "module-section-incorrect-answer"
  }, "Incorrect Answer #2"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "answertwo",
    tagName: "div",
    placeholder: "Incorrect Answer #2",
    value: attributes.answertwo,
    onChange: answertwo => setAttributes({
      answertwo
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    className: "module-section-incorrect-answer"
  }, "Incorrect Answer #3"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "answerthree",
    tagName: "div",
    placeholder: "Incorrect Answer #3",
    value: attributes.answerthree,
    onChange: answerthree => setAttributes({
      answerthree
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    className: "module-section-correct-answer"
  }, "Correct Answer"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "correctanswer",
    tagName: "div",
    placeholder: "Correct Answer",
    value: attributes.correctanswer,
    onChange: correctanswer => setAttributes({
      correctanswer
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_QuizAnswers__WEBPACK_IMPORTED_MODULE_5__["default"], null));
}

/***/ }),

/***/ "./src/blocks/cms-course-module/index.js":
/*!***********************************************!*\
  !*** ./src/blocks/cms-course-module/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/cms-course-module/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/cms-course-module/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/cms-course-module/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/cms-course-module/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/blocks/cms-course-module/save.js":
/*!**********************************************!*\
  !*** ./src/blocks/cms-course-module/save.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
function save({
  attributes
}) {
  const randomNumber = String(Math.random());
  const answerArray = [attributes.answerone, attributes.answertwo, attributes.answerthree, attributes.correctanswer];
  const shuffledArray = answerArray.sort(() => Math.random() - 0.5);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: attributes.backgroundColorClass
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "module-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    style: {
      marginBottom: attributes.sectionMargin,
      backgroundImage: `linear-gradient(${attributes.headerBackgroundColor}, ${attributes.secondHeaderBackgroundColor})`
    },
    className: "title"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    className: "module-title",
    tagName: "div",
    value: attributes.title
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    style: {
      marginBottom: attributes.sectionMargin,
      display: attributes.hideContent
    },
    className: "subject-info",
    tagName: "div",
    value: attributes.info
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    style: {
      marginBottom: attributes.sectionMargin
    },
    className: "module-image",
    src: attributes.imgUrl,
    alt: "Photo"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: {
      marginBottom: attributes.sectionMargin,
      backgroundImage: `linear-gradient(${attributes.headerBackgroundColor}, ${attributes.secondHeaderBackgroundColor})`
    },
    className: "module-length"
  }, "Estimated Module Completion Time: ", attributes.length), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: {
      marginBottom: attributes.sectionMargin,
      backgroundImage: `linear-gradient(${attributes.headerBackgroundColor}, ${attributes.secondHeaderBackgroundColor})`
    },
    className: "module-question"
  }, attributes.question), shuffledArray.map(answer => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "answers"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "radio",
      className: "possible-answer",
      name: randomNumber,
      id: answer
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: answer === attributes.correctanswer ? "correct-answer" : "incorrect-answer",
      htmlFor: answer
    }, answer));
  })));
}

/***/ }),

/***/ "./src/components/QuizAnswers.js":
/*!***************************************!*\
  !*** ./src/components/QuizAnswers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuizAnswers)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _QuizQuestion_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuizQuestion.scss */ "./src/components/QuizQuestion.scss");



function QuizAnswers({}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null);
}

/***/ }),

/***/ "./src/components/QuizQuestion.js":
/*!****************************************!*\
  !*** ./src/components/QuizQuestion.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuizQuestion)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _QuizQuestion_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuizQuestion.scss */ "./src/components/QuizQuestion.scss");



function QuizQuestion({
  question,
  options,
  answer
}) {
  const [selection, setSelection] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('a');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "question"
  }, question));
}

/***/ }),

/***/ "./src/blocks/cms-course-module/editor.scss":
/*!**************************************************!*\
  !*** ./src/blocks/cms-course-module/editor.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/cms-course-module/style.scss":
/*!*************************************************!*\
  !*** ./src/blocks/cms-course-module/style.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/QuizQuestion.scss":
/*!******************************************!*\
  !*** ./src/components/QuizQuestion.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/cms-course-module/block.json":
/*!*************************************************!*\
  !*** ./src/blocks/cms-course-module/block.json ***!
  \*************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"mz/cms-course-module","version":"0.1.0","title":"CMS Course Module","category":"design","icon":"smiley","description":"Create a module for your course","example":{},"supports":{"html":false},"textdomain":"cms-course-module","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","keywords":["cms","course","module","hera","mz"],"attributes":{"title":{"type":"string","source":"html","selector":".subject-title"},"info":{"type":"string","source":"html","selector":".info"},"length":{"type":"string","selector":".length","default":1},"imgUrl":{"type":"string","default":"https://placehold.it/75"},"answerone":{"type":"string","source":"html","selector":".answerone"},"answertwo":{"type":"string","source":"html","selector":".answertwo"},"answerthree":{"type":"string","source":"html","selector":".answerthree"},"correctanswer":{"type":"string","source":"html","selector":".correctanswer"},"backgroundColorClass":{"type":"string"},"borderColor":{"type":"string"},"textColor":{"type":"string"},"sectionMargin":{"type":"string"},"headerBackgroundColor":{"type":"string"},"secondHeaderBackgroundColor":{"type":"string"}}}');

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
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
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
/******/ 			"blocks/cms-course-module/index": 0,
/******/ 			"blocks/cms-course-module/style-index": 0
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
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkcms_course_module"] = globalThis["webpackChunkcms_course_module"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/cms-course-module/style-index"], () => (__webpack_require__("./src/blocks/cms-course-module/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map