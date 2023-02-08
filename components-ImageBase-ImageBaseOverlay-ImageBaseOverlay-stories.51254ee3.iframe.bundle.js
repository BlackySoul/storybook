"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[2580,1238],{"./src/components/ImageBase/ImageBaseOverlay/ImageBaseOverlay.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:function(){return Playground},__namedExportsOrder:function(){return __namedExportsOrder}});var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_ImageBaseOverlay__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ImageBase/ImageBaseOverlay/ImageBaseOverlay.tsx"),_storybook_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/storybook/constants.ts"),_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/storybook/helpers.ts"),_excluded=["children"];__webpack_exports__.default={title:"Blocks/ImageBaseOverlay",component:_ImageBaseOverlay__WEBPACK_IMPORTED_MODULE_1__.r,parameters:(0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.Z)({},_storybook_constants__WEBPACK_IMPORTED_MODULE_3__.tW),(0,_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__.c)("Avatar")),_storybook_constants__WEBPACK_IMPORTED_MODULE_3__.nB)};var Playground=function Template(_ref){var children=_ref.children,args=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__.Z)(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ImageBaseOverlay__WEBPACK_IMPORTED_MODULE_1__.r,args,children)}.bind({});Playground.args={},Playground.decorators=[function(Component,context){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:50,height:50,border:"1px dashed red",position:"relative"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{args:(0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.Z)({},context.args)}))}],Playground.parameters=(0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.Z)({storySource:{source:"({ children, ...args }) => (\n  <ImageBaseOverlay {...args}>{children}</ImageBaseOverlay>\n)"}},Playground.parameters);var __namedExportsOrder=["Playground"]},"./src/components/ImageBase/ImageBaseOverlay/ImageBaseOverlay.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return ImageBaseOverlay}});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),useAppearance=__webpack_require__("./src/hooks/useAppearance.ts"),useAdaptivityHasPointer=__webpack_require__("./src/hooks/useAdaptivityHasPointer.ts"),Tappable=__webpack_require__("./src/components/Tappable/Tappable.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),ImageBaseOverlay_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./src/components/ImageBase/ImageBaseOverlay/ImageBaseOverlay.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ImageBaseOverlay_module.Z,options);var ImageBaseOverlay_ImageBaseOverlay_module=ImageBaseOverlay_module.Z&&ImageBaseOverlay_module.Z.locals?ImageBaseOverlay_module.Z.locals:void 0,_excluded=["className","theme","visibility","children","onClick"],ImageBaseOverlay=function ImageBaseOverlay(_ref){var className=_ref.className,themeProp=_ref.theme,visibilityProp=_ref.visibility,children=_ref.children,onClick=_ref.onClick,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded),appearance=(0,useAppearance.M)(),hasPointer=(0,useAdaptivityHasPointer.K)(),theme=null!=themeProp?themeProp:appearance,visibility=null!=visibilityProp?visibilityProp:hasPointer?"on-hover":"always";return react.createElement(Tappable.KR,(0,esm_extends.Z)({},restProps,{type:"button",Component:"button",className:(0,es6.AK)(ImageBaseOverlay_ImageBaseOverlay_module.ImageBaseOverlay,"always"===visibility&&ImageBaseOverlay_ImageBaseOverlay_module["ImageBaseOverlay--visible"],"light"===theme&&ImageBaseOverlay_ImageBaseOverlay_module["ImageBaseOverlay--theme-light"],"dark"===theme&&ImageBaseOverlay_ImageBaseOverlay_module["ImageBaseOverlay--theme-dark"],className),hasHover:"on-hover"===visibility,hoverMode:"on-hover"===visibility?ImageBaseOverlay_ImageBaseOverlay_module["ImageBaseOverlay--visible"]:void 0,focusVisibleMode:ImageBaseOverlay_ImageBaseOverlay_module["ImageBaseOverlay--focus-visible"],hasActive:!1,onClick:onClick}),children)};try{ImageBaseOverlay.displayName="ImageBaseOverlay",ImageBaseOverlay.__docgenInfo={description:"Интерактивный оверлей над картинкой.",displayName:"ImageBaseOverlay",props:{theme:{defaultValue:null,description:"Задаёт тему оформления.\n\n> По умолчанию берётся из параметра `appearance` в `ConfigProvider`.",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},visibility:{defaultValue:null,description:'Определяет каким образом должен показываться оверлей.\n\n- `"on-hover"` – на наведение указателя мыши.\n- `"always"` – всегда показывать.\n\n> По умолчанию определяется в зависимости от того, есть ли у пользователя мышь или нет.',name:"visibility",required:!1,type:{name:"enum",value:[{value:'"always"'},{value:'"on-hover"'}]}},children:{defaultValue:null,description:"Принимает иконку.\n\n\n> 📝 Нужный для `<ImageBase size={...} />` размер можно узнать из функции `getOverlayIconSizeByImageBaseSize()`.\n\n> Предпочтительней использовать иконки из `@vkontakte/icons`.\n\n> 📊️ Если вы хотите передать кастомную иконку, то следует именовать её по шаблону `Icon<size><name>`. Или же\n> чтобы в неё был передан параметр `width`. Тогда мы сможем выводить в консоль подсказку правильного ли размера вы\n> использовали иконку.",name:"children",required:!0,type:{name:"ReactElement<ImageBaseExpectedIconProps, string | JSXElementConstructor<any>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ImageBase/ImageBaseOverlay/ImageBaseOverlay.tsx#ImageBaseOverlay"]={docgenInfo:ImageBaseOverlay.__docgenInfo,name:"ImageBaseOverlay",path:"src/components/ImageBase/ImageBaseOverlay/ImageBaseOverlay.tsx#ImageBaseOverlay"})}catch(__react_docgen_typescript_loader_error){}},"./src/storybook/helpers.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{c:function(){return getFigmaPage}});var _constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/storybook/constants.ts");function getFigmaPage(componentName){return{design:{type:"figma",url:_constants__WEBPACK_IMPORTED_MODULE_0__.uf[componentName]}}}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./src/components/ImageBase/ImageBaseOverlay/ImageBaseOverlay.module.css":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".vkuiImageBaseOverlay{align-items:center;border:none;border-radius:inherit;box-shadow:inherit;box-sizing:border-box;display:flex;height:100%;justify-content:center;left:0;opacity:0;position:absolute;top:0;transition:opacity .3s ease-in-out;width:100%;z-index:0;z-index:var(--vkui_internal--z_index_image_base_overlay)}.vkuiImageBaseOverlay--visible{opacity:1}.vkuiImageBaseOverlay--focus-visible{box-shadow:inset 0 0 0 2px #2688eb;box-shadow:inset 0 0 0 2px var(--vkui--color_stroke_accent);opacity:1}.vkuiImageBaseOverlay--theme-light{background-color:hsla(0,0%,100%,.85);background-color:var(--vkui--color_avatar_overlay_inverse_alpha);color:#2688eb;color:var(--vkui--color_icon_accent)}.vkuiImageBaseOverlay--theme-dark{background-color:rgba(0,0,0,.6);background-color:var(--vkui--color_avatar_overlay);color:#fff;color:var(--vkui--color_icon_contrast)}","",{version:3,sources:["webpack://./src/components/ImageBase/ImageBaseOverlay/ImageBaseOverlay.module.css"],names:[],mappings:"AAAA,sBAME,kBAAmB,CAKnB,WAAY,CACZ,qBAAsB,CACtB,kBAAmB,CALnB,qBAAsB,CAHtB,YAAa,CAKb,WAAY,CAHZ,sBAAuB,CAHvB,MAAO,CAUP,SAAU,CAbV,iBAAkB,CAElB,KAAM,CAYN,kCAAoC,CANpC,UAAW,CAPX,SAAyD,CAAzD,wDAcF,CAEA,+BACE,SACF,CAEA,qCAEE,kCAA4D,CAA5D,2DAA4D,CAD5D,SAEF,CAEA,mCAEE,oCAAiE,CAAjE,gEAAiE,CADjE,aAAqC,CAArC,oCAEF,CAEA,kCAEE,+BAAmD,CAAnD,kDAAmD,CADnD,UAAuC,CAAvC,sCAEF",sourcesContent:[".ImageBaseOverlay {\n  position: absolute;\n  z-index: var(--vkui_internal--z_index_image_base_overlay);\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border: none;\n  border-radius: inherit;\n  box-shadow: inherit;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n}\n\n.ImageBaseOverlay--visible {\n  opacity: 1;\n}\n\n.ImageBaseOverlay--focus-visible {\n  opacity: 1;\n  box-shadow: inset 0 0 0 2px var(--vkui--color_stroke_accent);\n}\n\n.ImageBaseOverlay--theme-light {\n  color: var(--vkui--color_icon_accent);\n  background-color: var(--vkui--color_avatar_overlay_inverse_alpha);\n}\n\n.ImageBaseOverlay--theme-dark {\n  color: var(--vkui--color_icon_contrast);\n  background-color: var(--vkui--color_avatar_overlay);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={ImageBaseOverlay:"vkuiImageBaseOverlay","ImageBaseOverlay--visible":"vkuiImageBaseOverlay--visible","ImageBaseOverlay--focus-visible":"vkuiImageBaseOverlay--focus-visible","ImageBaseOverlay--theme-light":"vkuiImageBaseOverlay--theme-light","ImageBaseOverlay--theme-dark":"vkuiImageBaseOverlay--theme-dark"},__webpack_exports__.Z=___CSS_LOADER_EXPORT___},"../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"../../node_modules/mitt/dist/mitt.mjs":function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){function __WEBPACK_DEFAULT_EXPORT__(n){return{all:n=n||new Map,on:function(t,e){var i=n.get(t);i?i.push(e):n.set(t,[e])},off:function(t,e){var i=n.get(t);i&&(e?i.splice(i.indexOf(e)>>>0,1):n.set(t,[]))},emit:function(t,e){var i=n.get(t);i&&i.slice().map((function(n){n(e)})),(i=n.get("*"))&&i.slice().map((function(n){n(t,e)}))}}}__webpack_require__.d(__webpack_exports__,{Z:function(){return __WEBPACK_DEFAULT_EXPORT__}})}}]);