"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[6311],{"./src/components/Switch/Switch.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:function(){return Playground},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Switch_stories}});var objectSpread2=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("../../node_modules/react/index.js"),esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),getPlatformClassName=__webpack_require__("./src/helpers/getPlatformClassName.ts"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),callMultiple=__webpack_require__("./src/lib/callMultiple.ts"),usePlatform=__webpack_require__("./src/hooks/usePlatform.ts"),useAdaptivity=__webpack_require__("./src/hooks/useAdaptivity.ts"),VisuallyHiddenInput=__webpack_require__("./src/components/VisuallyHiddenInput/VisuallyHiddenInput.tsx"),useFocusVisible=__webpack_require__("./src/hooks/useFocusVisible.ts"),FocusVisible=__webpack_require__("./src/components/FocusVisible/FocusVisible.tsx"),getSizeYClassName=__webpack_require__("./src/helpers/getSizeYClassName.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Switch_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./src/components/Switch/Switch.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Switch_module.Z,options);var Switch_Switch_module=Switch_module.Z&&Switch_module.Z.locals?Switch_module.Z.locals:void 0,_excluded=["style","className","getRootRef"],Switch=function Switch(_ref){var style=_ref.style,className=_ref.className,getRootRef=_ref.getRootRef,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded),platform=(0,usePlatform.F)(),sizeY=(0,useAdaptivity.g)().sizeY,_useFocusVisible=(0,useFocusVisible._)(),focusVisible=_useFocusVisible.focusVisible,onBlur=_useFocusVisible.onBlur,onFocus=_useFocusVisible.onFocus;return react.createElement("label",{className:(0,es6.AK)(Switch_Switch_module.Switch,(0,getPlatformClassName.h)(Switch_Switch_module.Switch,platform),(0,getSizeYClassName.d)(Switch_Switch_module.Switch,sizeY),restProps.disabled&&Switch_Switch_module["Switch--disabled"],focusVisible&&Switch_Switch_module["Switch--focus-visible"],className),style:style,ref:getRootRef},react.createElement(VisuallyHiddenInput.b,(0,esm_extends.Z)({},restProps,{type:"checkbox",className:Switch_Switch_module.Switch__self,onBlur:(0,callMultiple.C)(onBlur,restProps.onBlur),onFocus:(0,callMultiple.C)(onFocus,restProps.onFocus)})),react.createElement("span",{"aria-hidden":!0,className:Switch_Switch_module.Switch__pseudo}),react.createElement(FocusVisible.W,{mode:"outside"}))};try{Switch.displayName="Switch",Switch.__docgenInfo={description:"",displayName:"Switch",props:{getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLLabelElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Switch/Switch.tsx#Switch"]={docgenInfo:Switch.__docgenInfo,name:"Switch",path:"src/components/Switch/Switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}var constants=__webpack_require__("./src/storybook/constants.ts"),helpers=__webpack_require__("./src/storybook/helpers.ts"),Switch_stories={title:"Blocks/Switch",component:Switch,parameters:(0,objectSpread2.Z)((0,objectSpread2.Z)((0,objectSpread2.Z)({},constants.tW),(0,helpers.c)("Switch")),constants.nB),argTypes:{disabled:{control:"boolean"}}},Playground=function Template(args){return react.createElement(Switch,args)}.bind({});Playground.args={},Playground.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <Switch {...args} />"}},Playground.parameters);var __namedExportsOrder=["Playground"]},"./src/components/FocusVisible/FocusVisible.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{W:function(){return FocusVisible}});var react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),FocusVisible_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./src/components/FocusVisible/FocusVisible.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(FocusVisible_module.Z,options);var FocusVisible_FocusVisible_module=FocusVisible_module.Z&&FocusVisible_module.Z.locals?FocusVisible_module.Z.locals:void 0,FocusVisible=function FocusVisible(_ref){var mode=_ref.mode;return react.createElement("span",{"aria-hidden":!0,className:(0,es6.AK)(FocusVisible_FocusVisible_module.FocusVisible,FocusVisible_FocusVisible_module["FocusVisible--mode-".concat(mode)])})};try{FocusVisible.displayName="FocusVisible",FocusVisible.__docgenInfo={description:"",displayName:"FocusVisible",props:{mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"inside"'},{value:'"outside"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FocusVisible/FocusVisible.tsx#FocusVisible"]={docgenInfo:FocusVisible.__docgenInfo,name:"FocusVisible",path:"src/components/FocusVisible/FocusVisible.tsx#FocusVisible"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/VisuallyHiddenInput/VisuallyHiddenInput.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{b:function(){return VisuallyHiddenInput}});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),VisuallyHiddenInput_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./src/components/VisuallyHiddenInput/VisuallyHiddenInput.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(VisuallyHiddenInput_module.Z,options);var VisuallyHiddenInput_VisuallyHiddenInput_module=VisuallyHiddenInput_module.Z&&VisuallyHiddenInput_module.Z.locals?VisuallyHiddenInput_module.Z.locals:void 0,_excluded=["getRef","className"],VisuallyHiddenInput=function VisuallyHiddenInput(_ref){var getRef=_ref.getRef,className=_ref.className,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded);return react.createElement("input",(0,esm_extends.Z)({},restProps,{className:(0,es6.AK)(VisuallyHiddenInput_VisuallyHiddenInput_module.VisuallyHiddenInput,className),ref:getRef}))};try{VisuallyHiddenInput.displayName="VisuallyHiddenInput",VisuallyHiddenInput.__docgenInfo={description:"",displayName:"VisuallyHiddenInput",props:{getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLInputElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VisuallyHiddenInput/VisuallyHiddenInput.tsx#VisuallyHiddenInput"]={docgenInfo:VisuallyHiddenInput.__docgenInfo,name:"VisuallyHiddenInput",path:"src/components/VisuallyHiddenInput/VisuallyHiddenInput.tsx#VisuallyHiddenInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/helpers/getPlatformClassName.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{h:function(){return getPlatformClassName}});var _lib_platform__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/lib/platform.ts");function getPlatformClassName(base){var osname=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,_lib_platform__WEBPACK_IMPORTED_MODULE_0__.J)(),styles=arguments.length>2?arguments[2]:void 0,platformClassName="".concat(String(base),"--").concat(osname);return styles?styles[platformClassName]:platformClassName}},"./src/hooks/useFocusVisible.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{_:function(){return useFocusVisible}});var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_components_AppRoot_AppRootContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/AppRoot/AppRootContext.ts");function useFocusVisible(){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),_useState2=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.Z)(_useState,2),isFocused=_useState2[0],setIsFocused=_useState2[1];return{focusVisible:(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_AppRoot_AppRootContext__WEBPACK_IMPORTED_MODULE_2__.A).keyboardInput&&isFocused,onFocus:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(event){event.stopPropagation(),setIsFocused(!0)}),[setIsFocused]),onBlur:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(event){event.stopPropagation(),setIsFocused(!1)}),[setIsFocused])}}},"./src/lib/callMultiple.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{C:function(){return callMultiple}});var callMultiple=function callMultiple(){for(var _len=arguments.length,fns=new Array(_len),_key=0;_key<_len;_key++)fns[_key]=arguments[_key];return function(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];return fns.filter((function(f){return"function"==typeof f})).forEach((function(f){return f.apply(void 0,args)}))}}},"./src/storybook/constants.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{R0:function(){return StringArg},nB:function(){return DisableCartesianParam},tW:function(){return CanvasFullLayout},uf:function(){return FigmaUrls}});var CanvasFullLayout={layout:"fullscreen",previewTabs:{"storybook/docs/panel":{hidden:!0}},viewMode:"story",centered:!0},DisableCartesianParam={cartesian:{disable:!0}},StringArg={control:{type:"text"}},FigmaUrls={ActionSheet:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=27%3A4&t=PMn6l8SzrfRRUSod-0",ActionSheetItem:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=27%3A4&t=PMn6l8SzrfRRUSod-0",Alert:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=146%3A0&t=PMn6l8SzrfRRUSod-0",ScreenSpinner:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=146%3A8&t=uhwIZneBQyQtx8Td-0",Snackbar:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=146%3A10&t=uhwIZneBQyQtx8Td-0",Typography:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=18802%3A108351&t=uhwIZneBQyQtx8Td-0",ModalCard:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=146%3A4&t=uhwIZneBQyQtx8Td-0",ModalPage:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=146%3A5&t=uhwIZneBQyQtx8Td-0",Epic:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=9374%3A63616&t=uhwIZneBQyQtx8Td-0",HorizontalCell:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=2121%3A114693&t=uhwIZneBQyQtx8Td-0",PanelHeader:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=27%3A0&t=uhwIZneBQyQtx8Td-0",Tabbar:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=27%3A1&t=uhwIZneBQyQtx8Td-0",Calendar:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=17935%3A102822&t=uhwIZneBQyQtx8Td-0",Forms:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=27%3A3&t=0HQxAeW7YFeDL2gn-0",Avatar:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=16667%3A66875&t=QIyBJwdYLsAmk3wb-0",Badge:"",Banner:"",Button:"",Card:"",CardGrid:"",Cell:"",CellButton:"",ContentCard:"",Counter:"",Footer:"",Gallery:"",Gradient:"",GridAvatar:"",Group:"",Header:"",MiniInfoCell:"",Pagination:"",Placeholder:"",Progress:"",Search:"",Separator:"",Spacing:"",SubnavigationBar:"",Switch:"",Tabs:"",UsersStack:""}},"./src/storybook/helpers.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{c:function(){return getFigmaPage}});var _constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/storybook/constants.ts");function getFigmaPage(componentName){return{design:{type:"figma",url:_constants__WEBPACK_IMPORTED_MODULE_0__.uf[componentName]}}}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./src/components/FocusVisible/FocusVisible.module.css":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'[class$="--focus-visible"]>.vkuiFocusVisible{border-radius:inherit;overflow:hidden;pointer-events:none;position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[class$="--focus-visible"]>.vkuiFocusVisible--mode-inside{border-color:#2688eb;border-color:var(--vkui--color_stroke_accent);border-style:solid;border-width:2px;bottom:2px;box-sizing:border-box;left:2px;right:2px;top:2px}[class$="--focus-visible"]>.vkuiFocusVisible--mode-outside{bottom:-2px;box-shadow:0 0 0 2px #2688eb;box-shadow:0 0 0 2px var(--vkui--color_stroke_accent);left:-2px;right:-2px;top:-2px}@media (prefers-reduced-motion:no-preference){[class$="--focus-visible"]>.vkuiFocusVisible{animation:vkui-animation-focus-visible .15s ease-in-out forwards;animation-delay:.01ms;bottom:4px;left:4px;right:4px;top:4px;will-change:top,left,bottom,right}[class$="--focus-visible"]>.vkuiFocusVisible--mode-outside{animation-name:vkui-animation-focus-visible-outside;bottom:0;left:0;right:0;top:0}@keyframes vkui-animation-focus-visible{0%{}to{bottom:0;left:0;right:0;top:0;will-change:auto}}@keyframes vkui-animation-focus-visible-outside{0%{}to{bottom:-2px;left:-2px;right:-2px;top:-2px;will-change:auto}}}',"",{version:3,sources:["webpack://./src/components/FocusVisible/FocusVisible.module.css"],names:[],mappings:"AAAA,6CAEE,qBAAsB,CAGtB,eAAgB,CADhB,mBAAoB,CAHpB,iBAAkB,CAElB,wBAAiB,CAAjB,qBAAiB,CAAjB,oBAAiB,CAAjB,gBAGF,CAEA,0DAKE,oBAA8C,CAA9C,6CAA8C,CAE9C,kBAAmB,CADnB,gBAAiB,CAFjB,UAAW,CAIX,qBAAsB,CANtB,QAAS,CACT,SAAU,CAFV,OAQF,CAEA,2DAIE,WAAY,CACZ,4BAAsD,CAAtD,qDAAsD,CAHtD,SAAU,CACV,UAAW,CAFX,QAKF,CAQA,8CACE,6CAKE,gEAAkE,CAClE,qBAAuB,CAFvB,UAAW,CAFX,QAAS,CACT,SAAU,CAFV,OAAQ,CAMR,iCACF,CAEA,2DAKE,mDAAoD,CAFpD,QAAS,CADT,MAAO,CAEP,OAAQ,CAHR,KAKF,CAEA,wCACE,GACA,CAEA,GAGE,QAAS,CADT,MAAO,CAEP,OAAQ,CAHR,KAAM,CAIN,gBACF,CACF,CAEA,gDACE,GACA,CAEA,GAGE,WAAY,CADZ,SAAU,CAEV,UAAW,CAHX,QAAS,CAIT,gBACF,CACF,CACF",sourcesContent:["[class$='--focus-visible'] > .FocusVisible {\n  position: absolute;\n  border-radius: inherit;\n  user-select: none;\n  pointer-events: none;\n  overflow: hidden;\n}\n\n[class$='--focus-visible'] > .FocusVisible--mode-inside {\n  top: 2px;\n  left: 2px;\n  right: 2px;\n  bottom: 2px;\n  border-color: var(--vkui--color_stroke_accent);\n  border-width: 2px;\n  border-style: solid;\n  box-sizing: border-box;\n}\n\n[class$='--focus-visible'] > .FocusVisible--mode-outside {\n  top: -2px;\n  left: -2px;\n  right: -2px;\n  bottom: -2px;\n  box-shadow: 0 0 0 2px var(--vkui--color_stroke_accent);\n}\n\n/**\n * [a11y]\n * add animation for browsers that support prefers-reduced-motion\n * so that users with vestibular motion disorders have no problem\n * navigating accessible vkui apps via keyboard\n */\n@media (prefers-reduced-motion: no-preference) {\n  [class$='--focus-visible'] > .FocusVisible {\n    top: 4px;\n    left: 4px;\n    right: 4px;\n    bottom: 4px;\n    animation: vkui-animation-focus-visible 0.15s ease-in-out forwards;\n    animation-delay: 0.01ms;\n    will-change: top, left, bottom, right;\n  }\n\n  [class$='--focus-visible'] > .FocusVisible--mode-outside {\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    animation-name: vkui-animation-focus-visible-outside;\n  }\n\n  @keyframes vkui-animation-focus-visible {\n    0% {\n    }\n\n    100% {\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      will-change: auto;\n    }\n  }\n\n  @keyframes vkui-animation-focus-visible-outside {\n    0% {\n    }\n\n    100% {\n      top: -2px;\n      left: -2px;\n      bottom: -2px;\n      right: -2px;\n      will-change: auto;\n    }\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={FocusVisible:"vkuiFocusVisible","FocusVisible--mode-inside":"vkuiFocusVisible--mode-inside","FocusVisible--mode-outside":"vkuiFocusVisible--mode-outside","vkui-animation-focus-visible":"vkui-animation-focus-visible","vkui-animation-focus-visible-outside":"vkui-animation-focus-visible-outside"},__webpack_exports__.Z=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./src/components/Switch/Switch.module.css":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.vkuiSwitch{cursor:pointer;display:block;padding:calc((20px - 14px) / 2);padding:calc((var(--vkui--size_switch_pin--regular) - var(--vkui--size_switch_height--regular)) / 2);position:relative}.vkuiSwitch--sizeY-compact{padding:calc((18px - 12px) / 2);padding:calc((var(--vkui--size_switch_pin--compact) - var(--vkui--size_switch_height--compact)) / 2)}@media (pointer:fine) and (min-width:768px),not (min-height:415px){.vkuiSwitch--sizeY-none{padding:calc((18px - 12px) / 2);padding:calc((var(--vkui--size_switch_pin--compact) - var(--vkui--size_switch_height--compact)) / 2)}}.vkuiSwitch--disabled{cursor:default}.vkuiSwitch__pseudo{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box;display:block;position:relative}.vkuiSwitch__pseudo:before{background:#f2f3f5;background:var(--vkui--color_icon_contrast_secondary);border-radius:50%;box-shadow:0 0 2px 0 rgba(0,0,0,.12),0 2px 2px 0 rgba(0,0,0,.24);box-sizing:border-box;content:"";height:20px;height:var(--vkui--size_switch_pin--regular);left:calc((14px - 20px) / 2);left:calc((var(--vkui--size_switch_height--regular) - var(--vkui--size_switch_pin--regular)) / 2);position:absolute;top:calc((14px - 20px) / 2);top:calc((var(--vkui--size_switch_height--regular) - var(--vkui--size_switch_pin--regular)) / 2);width:20px;width:var(--vkui--size_switch_pin--regular)}.vkuiSwitch--sizeY-compact .vkuiSwitch__pseudo:before{height:18px;height:var(--vkui--size_switch_pin--compact);left:calc((12px - 18px) / 2);left:calc((var(--vkui--size_switch_height--compact) - var(--vkui--size_switch_pin--compact)) / 2);top:calc((12px - 18px) / 2);top:calc((var(--vkui--size_switch_height--compact) - var(--vkui--size_switch_pin--compact)) / 2);width:18px;width:var(--vkui--size_switch_pin--compact)}@media (pointer:fine) and (min-width:768px),not (min-height:415px){.vkuiSwitch--sizeY-none .vkuiSwitch__pseudo:before{height:18px;height:var(--vkui--size_switch_pin--compact);left:calc((12px - 18px) / 2);left:calc((var(--vkui--size_switch_height--compact) - var(--vkui--size_switch_pin--compact)) / 2);top:calc((12px - 18px) / 2);top:calc((var(--vkui--size_switch_height--compact) - var(--vkui--size_switch_pin--compact)) / 2);width:18px;width:var(--vkui--size_switch_pin--compact)}}.vkuiSwitch__self:checked+.vkuiSwitch__pseudo:before{background:#2688eb;background:var(--vkui--color_icon_accent);transform:translateX(calc(34px - 14px));transform:translateX(calc(var(--vkui--size_switch_width--regular) - var(--vkui--size_switch_height--regular)))}.vkuiSwitch__pseudo:after{background:rgba(0,0,0,.24);background:var(--vkui--color_icon_tertiary_alpha);border-radius:calc(34px / 2);border-radius:calc(var(--vkui--size_switch_width--regular) / 2);content:"";display:block;height:14px;height:var(--vkui--size_switch_height--regular);width:34px;width:var(--vkui--size_switch_width--regular)}.vkuiSwitch--sizeY-compact .vkuiSwitch__pseudo:after{border-radius:calc(32px / 2);border-radius:calc(var(--vkui--size_switch_width--compact) / 2);height:12px;height:var(--vkui--size_switch_height--compact);width:32px;width:var(--vkui--size_switch_width--compact)}@media (pointer:fine) and (min-width:768px),not (min-height:415px){.vkuiSwitch--sizeY-none .vkuiSwitch__pseudo:after{border-radius:calc(32px / 2);border-radius:calc(var(--vkui--size_switch_width--compact) / 2);height:12px;height:var(--vkui--size_switch_height--compact);width:32px;width:var(--vkui--size_switch_width--compact)}}.vkuiSwitch__self:checked+.vkuiSwitch__pseudo:after{background:#2688eb;background:var(--vkui--color_icon_accent);opacity:.48}.vkuiSwitch--sizeY-compact .vkuiSwitch__self:checked+.vkuiSwitch__pseudo:before{transform:translateX(calc(32px - 12px));transform:translateX(calc(var(--vkui--size_switch_width--compact) - var(--vkui--size_switch_height--compact)))}@media (pointer:fine) and (min-width:768px),not (min-height:415px){.vkuiSwitch--sizeY-none .vkuiSwitch__self:checked+.vkuiSwitch__pseudo:before{transform:translateX(calc(32px - 12px));transform:translateX(calc(var(--vkui--size_switch_width--compact) - var(--vkui--size_switch_height--compact)))}}.vkuiSwitch__self[disabled]+.vkuiSwitch__pseudo{opacity:.4;opacity:var(--vkui--opacity_disable)}.vkuiSwitch--ios .vkuiSwitch__pseudo:before{box-shadow:0 3px 8px rgba(0,0,0,.15),0 3px 1px rgba(0,0,0,.06),inset 0 0 0 .5px rgba(0,0,0,.04)}.vkuiSwitch--ios .vkuiSwitch__pseudo:before,.vkuiSwitch--ios .vkuiSwitch__self:checked+.vkuiSwitch__pseudo:before{background:#fff;background:var(--vkui_internal--white)}.vkuiSwitch--ios .vkuiSwitch__pseudo:after{background:#e1e3e6;background:var(--vkui--color_track_background)}.vkuiSwitch--ios .vkuiSwitch__self:checked+.vkuiSwitch__pseudo:after{opacity:1}@media (prefers-reduced-motion:no-preference){.vkuiSwitch__pseudo:after{transition:background-color .1s ease}.vkuiSwitch__pseudo:before{transition:transform .1s ease}.vkuiSwitch--ios .vkuiSwitch__pseudo:after{transition:background-color .2s ease}.vkuiSwitch--ios .vkuiSwitch__pseudo:before{transition:transform .2s cubic-bezier(.36,-.24,.26,1.32)}}.vkuiSimpleCell__after>.vkuiSwitch{margin-left:12px}.vkuiSimpleCell>.vkuiSwitch:first-child{margin-right:12px}.vkuiSwitch--focus-visible{}',"",{version:3,sources:["webpack://./src/components/Switch/Switch.module.css"],names:[],mappings:"AAAA,YAGE,cAAe,CADf,aAAc,CAId,+BAEC,CAFD,oGAEC,CAPD,iBAQF,CAEA,2BACE,+BAEC,CAFD,oGAGF,CAEA,mEACE,wBACE,+BAEC,CAFD,oGAGF,CACF,CAEA,sBACE,cACF,CAEA,oBAIE,yCAA6C,CAC7C,uCAAwC,CAFxC,qBAAsB,CADtB,aAAc,CADd,iBAKF,CAKA,2BAKE,kBAAsD,CAAtD,qDAAsD,CAFtD,iBAAkB,CAGlB,gEAA0E,CAF1E,qBAAsB,CAFtB,UAAW,CAYX,WAA6C,CAA7C,4CAA6C,CAJ7C,4BAEC,CAFD,iGAEC,CAXD,iBAAkB,CAQlB,2BAAiG,CAAjG,gGAAiG,CAIjG,UAA4C,CAA5C,2CAEF,CAEA,sDAME,WAA6C,CAA7C,4CAA6C,CAJ7C,4BAEC,CAFD,iGAEC,CAHD,2BAAiG,CAAjG,gGAAiG,CAIjG,UAA4C,CAA5C,2CAEF,CAEA,mEACE,mDAQE,WAA6C,CAA7C,4CAA6C,CAJ7C,4BAEC,CAFD,iGAEC,CALD,2BAEC,CAFD,gGAEC,CAID,UAA4C,CAA5C,2CAEF,CACF,CAEA,qDACE,kBAA0C,CAA1C,yCAA0C,CAC1C,uCAEC,CAFD,8GAGF,CAKA,0BAGE,0BAAkD,CAAlD,iDAAkD,CAClD,4BAAgE,CAAhE,+DAAgE,CAHhE,UAAW,CACX,aAAc,CAId,WAAgD,CAAhD,+CAAgD,CADhD,UAA8C,CAA9C,6CAEF,CAEA,qDACE,4BAAgE,CAAhE,+DAAgE,CAEhE,WAAgD,CAAhD,+CAAgD,CADhD,UAA8C,CAA9C,6CAEF,CAEA,mEACE,kDACE,4BAAgE,CAAhE,+DAAgE,CAEhE,WAAgD,CAAhD,+CAAgD,CADhD,UAA8C,CAA9C,6CAEF,CACF,CAEA,oDAEE,kBAA0C,CAA1C,yCAA0C,CAD1C,WAEF,CAEA,gFACE,uCAEC,CAFD,8GAGF,CAEA,mEACE,6EACE,uCAEC,CAFD,8GAGF,CACF,CAEA,gDACE,UAAqC,CAArC,oCACF,CAKA,4CAEE,+FAEF,CAEA,kHALE,eAAuC,CAAvC,sCAOF,CAKA,2CACE,kBAA+C,CAA/C,8CACF,CAEA,qEACE,SACF,CAQA,8CACE,0BACE,oCACF,CAEA,2BACE,6BACF,CAEA,2CACE,oCACF,CAEA,4CACE,wDACF,CACF,CAMA,mCACE,gBACF,CAEA,wCACE,iBACF,CAEA,2BAEA",sourcesContent:[".Switch {\n  position: relative;\n  display: block;\n  cursor: pointer;\n\n  /* Добавляем отступы, если пин больше трека */\n  padding: calc(\n    (var(--vkui--size_switch_pin--regular) - var(--vkui--size_switch_height--regular)) / 2\n  );\n}\n\n.Switch--sizeY-compact {\n  padding: calc(\n    (var(--vkui--size_switch_pin--compact) - var(--vkui--size_switch_height--compact)) / 2\n  );\n}\n\n@media (--sizeY-compact) {\n  .Switch--sizeY-none {\n    padding: calc(\n      (var(--vkui--size_switch_pin--compact) - var(--vkui--size_switch_height--compact)) / 2\n    );\n  }\n}\n\n.Switch--disabled {\n  cursor: default;\n}\n\n.Switch__pseudo {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n}\n\n/**\n * Пин\n */\n.Switch__pseudo::before {\n  position: absolute;\n  content: '';\n  border-radius: 50%;\n  box-sizing: border-box;\n  background: var(--vkui--color_icon_contrast_secondary);\n  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24);\n\n  /* Делаем пин по центру */\n  top: calc((var(--vkui--size_switch_height--regular) - var(--vkui--size_switch_pin--regular)) / 2);\n  left: calc(\n    (var(--vkui--size_switch_height--regular) - var(--vkui--size_switch_pin--regular)) / 2\n  );\n  width: var(--vkui--size_switch_pin--regular);\n  height: var(--vkui--size_switch_pin--regular);\n}\n\n.Switch--sizeY-compact .Switch__pseudo::before {\n  top: calc((var(--vkui--size_switch_height--compact) - var(--vkui--size_switch_pin--compact)) / 2);\n  left: calc(\n    (var(--vkui--size_switch_height--compact) - var(--vkui--size_switch_pin--compact)) / 2\n  );\n  width: var(--vkui--size_switch_pin--compact);\n  height: var(--vkui--size_switch_pin--compact);\n}\n\n@media (--sizeY-compact) {\n  .Switch--sizeY-none .Switch__pseudo::before {\n    top: calc(\n      (var(--vkui--size_switch_height--compact) - var(--vkui--size_switch_pin--compact)) / 2\n    );\n    left: calc(\n      (var(--vkui--size_switch_height--compact) - var(--vkui--size_switch_pin--compact)) / 2\n    );\n    width: var(--vkui--size_switch_pin--compact);\n    height: var(--vkui--size_switch_pin--compact);\n  }\n}\n\n.Switch__self:checked + .Switch__pseudo::before {\n  background: var(--vkui--color_icon_accent);\n  transform: translateX(\n    calc(var(--vkui--size_switch_width--regular) - var(--vkui--size_switch_height--regular))\n  );\n}\n\n/**\n * Трек\n */\n.Switch__pseudo::after {\n  content: '';\n  display: block;\n  background: var(--vkui--color_icon_tertiary_alpha);\n  border-radius: calc(var(--vkui--size_switch_width--regular) / 2);\n  width: var(--vkui--size_switch_width--regular);\n  height: var(--vkui--size_switch_height--regular);\n}\n\n.Switch--sizeY-compact .Switch__pseudo::after {\n  border-radius: calc(var(--vkui--size_switch_width--compact) / 2);\n  width: var(--vkui--size_switch_width--compact);\n  height: var(--vkui--size_switch_height--compact);\n}\n\n@media (--sizeY-compact) {\n  .Switch--sizeY-none .Switch__pseudo::after {\n    border-radius: calc(var(--vkui--size_switch_width--compact) / 2);\n    width: var(--vkui--size_switch_width--compact);\n    height: var(--vkui--size_switch_height--compact);\n  }\n}\n\n.Switch__self:checked + .Switch__pseudo::after {\n  opacity: 0.48;\n  background: var(--vkui--color_icon_accent);\n}\n\n.Switch--sizeY-compact .Switch__self:checked + .Switch__pseudo::before {\n  transform: translateX(\n    calc(var(--vkui--size_switch_width--compact) - var(--vkui--size_switch_height--compact))\n  );\n}\n\n@media (--sizeY-compact) {\n  .Switch--sizeY-none .Switch__self:checked + .Switch__pseudo::before {\n    transform: translateX(\n      calc(var(--vkui--size_switch_width--compact) - var(--vkui--size_switch_height--compact))\n    );\n  }\n}\n\n.Switch__self[disabled] + .Switch__pseudo {\n  opacity: var(--vkui--opacity_disable);\n}\n\n/**\n * Пин\n */\n.Switch--ios .Switch__pseudo::before {\n  background: var(--vkui_internal--white);\n  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15), 0 3px 1px rgba(0, 0, 0, 0.06),\n    inset 0 0 0 0.5px rgba(0, 0, 0, 0.04);\n}\n\n.Switch--ios .Switch__self:checked + .Switch__pseudo::before {\n  background: var(--vkui_internal--white);\n}\n\n/**\n * Трек\n */\n.Switch--ios .Switch__pseudo::after {\n  background: var(--vkui--color_track_background);\n}\n\n.Switch--ios .Switch__self:checked + .Switch__pseudo::after {\n  opacity: 1;\n}\n\n/**\n * [a11y]\n * add animation for browsers that support prefers-reduced-motion\n * so that users with vestibular motion disorders have no problem\n * navigating accessible vkui apps via keyboard\n */\n@media (prefers-reduced-motion: no-preference) {\n  .Switch__pseudo::after {\n    transition: background-color 0.1s ease;\n  }\n\n  .Switch__pseudo::before {\n    transition: transform 0.1s ease;\n  }\n\n  .Switch--ios .Switch__pseudo::after {\n    transition: background-color 0.2s ease;\n  }\n\n  .Switch--ios .Switch__pseudo::before {\n    transition: transform 0.2s cubic-bezier(0.36, -0.24, 0.26, 1.32);\n  }\n}\n\n/**\n * CMP:\n * SimpleCell\n */\n.SimpleCell__after > .Switch {\n  margin-left: 12px;\n}\n\n.SimpleCell > .Switch:first-child {\n  margin-right: 12px;\n}\n\n.Switch--focus-visible {\n  /* Пустой класс для CSS Modules (см. CONTRIBUTING.md)  */\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Switch:"vkuiSwitch","Switch--sizeY-compact":"vkuiSwitch--sizeY-compact","Switch--sizeY-none":"vkuiSwitch--sizeY-none","Switch--disabled":"vkuiSwitch--disabled",Switch__pseudo:"vkuiSwitch__pseudo",Switch__self:"vkuiSwitch__self","Switch--ios":"vkuiSwitch--ios",SimpleCell__after:"vkuiSimpleCell__after",SimpleCell:"vkuiSimpleCell","Switch--focus-visible":"vkuiSwitch--focus-visible"},__webpack_exports__.Z=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./src/components/VisuallyHiddenInput/VisuallyHiddenInput.module.css":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".vkuiVisuallyHiddenInput{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;opacity:0;overflow:hidden;position:absolute;white-space:nowrap}","",{version:3,sources:["webpack://./src/components/VisuallyHiddenInput/VisuallyHiddenInput.module.css"],names:[],mappings:"AAAA,yBAIE,kBAAmB,CACnB,4BAAqB,CAArB,oBAAqB,CAHrB,UAAW,CAKX,SAAU,CADV,eAAgB,CALhB,iBAAkB,CAElB,kBAKF",sourcesContent:[".VisuallyHiddenInput {\n  position: absolute;\n  height: 1px;\n  white-space: nowrap;\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  overflow: hidden;\n  opacity: 0;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={VisuallyHiddenInput:"vkuiVisuallyHiddenInput"},__webpack_exports__.Z=___CSS_LOADER_EXPORT___}}]);