"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[2753,1238],{"./src/components/CellButton/CellButton.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:function(){return Playground},__namedExportsOrder:function(){return __namedExportsOrder}});var _babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_CellButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/CellButton/CellButton.tsx"),_storybook_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/storybook/constants.ts"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/28/add_outline.js"),_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/storybook/helpers.ts");__webpack_exports__.default={title:"Blocks/CellButton",component:_CellButton__WEBPACK_IMPORTED_MODULE_1__.S,parameters:(0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.Z)({},_storybook_constants__WEBPACK_IMPORTED_MODULE_3__.tW),(0,_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__.c)("CellButton")),_storybook_constants__WEBPACK_IMPORTED_MODULE_3__.nB)};var Playground=function Template(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CellButton__WEBPACK_IMPORTED_MODULE_1__.S,args)}.bind({});Playground.args={children:"Создать беседу",before:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_vkontakte_icons__WEBPACK_IMPORTED_MODULE_5__.Z,null)},Playground.parameters=(0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.Z)({storySource:{source:"(args) => <CellButton {...args} />"}},Playground.parameters);var __namedExportsOrder=["Playground"]},"./src/components/CellButton/CellButton.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{S:function(){return CellButton}});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),SimpleCell=__webpack_require__("./src/components/SimpleCell/SimpleCell.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),CellButton_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./src/components/CellButton/CellButton.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(CellButton_module.Z,options);var CellButton_CellButton_module=CellButton_module.Z&&CellButton_module.Z.locals?CellButton_module.Z.locals:void 0,_excluded=["centered","mode","className"],CellButton=function CellButton(_ref){var _ref$centered=_ref.centered,centered=void 0!==_ref$centered&&_ref$centered,_ref$mode=_ref.mode,mode=void 0===_ref$mode?"primary":_ref$mode,className=_ref.className,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded);return react.createElement(SimpleCell.q,(0,esm_extends.Z)({stopPropagation:!0},restProps,{className:(0,es6.AK)(CellButton_CellButton_module.CellButton,CellButton_CellButton_module["CellButton--mode-".concat(mode)],centered&&CellButton_CellButton_module["CellButton--centered"],className)}))};try{CellButton.displayName="CellButton",CellButton.__docgenInfo={description:"",displayName:"CellButton",props:{mode:{defaultValue:{value:"primary"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"danger"'}]}},centered:{defaultValue:{value:"false"},description:"",name:"centered",required:!1,type:{name:"boolean"}},before:{defaultValue:null,description:"Иконка 28 или `<Avatar size={28|32|40|48|72} />`",name:"before",required:!1,type:{name:"ReactNode"}},badgeBeforeTitle:{defaultValue:null,description:"Иконка 12 или `<Badge />`. Добавится слева от текста `children`.",name:"badgeBeforeTitle",required:!1,type:{name:"ReactNode"}},badgeAfterTitle:{defaultValue:null,description:"Иконка 12 или `<Badge />`. Добавится справа от текста `children`.",name:"badgeAfterTitle",required:!1,type:{name:"ReactNode"}},badgeBeforeSubtitle:{defaultValue:null,description:"Иконка 12. Добавится слева от текста `subtitle`.",name:"badgeBeforeSubtitle",required:!1,type:{name:"ReactNode"}},badgeAfterSubtitle:{defaultValue:null,description:"Иконка 12. Добавится справа от текста `subtitle`.",name:"badgeAfterSubtitle",required:!1,type:{name:"ReactNode"}},indicator:{defaultValue:null,description:"Контейнер для текста справа от `children`.",name:"indicator",required:!1,type:{name:"ReactNode"}},subhead:{defaultValue:null,description:"Дополнительная строка текста над `children`.",name:"subhead",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"Дополнительная строка текста под `children`.",name:"subtitle",required:!1,type:{name:"ReactNode"}},extraSubtitle:{defaultValue:null,description:"Дополнительная строка текста под `children` и `subtitle`.",name:"extraSubtitle",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Иконка 24|28 или `<Switch />`. Располагается справа от `indicator`.",name:"after",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"Убирает анимацию нажатия",name:"disabled",required:!1,type:{name:"boolean"}},expandable:{defaultValue:null,description:"В iOS добавляет chevron справа. Передавать `true`, если предполагается переход при клике по ячейке.",name:"expandable",required:!1,type:{name:"boolean"}},multiline:{defaultValue:null,description:"Включает многострочный режим для отображения текста",name:"multiline",required:!1,type:{name:"boolean"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа active-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},stopPropagation:{defaultValue:null,description:"",name:"stopPropagation",required:!1,type:{name:"boolean"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeMode:{defaultValue:null,description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"string"}},hoverMode:{defaultValue:null,description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"string"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс во время focus-visible",name:"focusVisibleMode",required:!1,type:{name:"string"}},onEnter:{defaultValue:null,description:"",name:"onEnter",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},onLeave:{defaultValue:null,description:"",name:"onLeave",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"TouchEventHandler"}},onMove:{defaultValue:null,description:"",name:"onMove",required:!1,type:{name:"TouchEventHandler"}},onEnd:{defaultValue:null,description:"",name:"onEnd",required:!1,type:{name:"TouchEventHandler"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CellButton/CellButton.tsx#CellButton"]={docgenInfo:CellButton.__docgenInfo,name:"CellButton",path:"src/components/CellButton/CellButton.tsx#CellButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/storybook/helpers.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{c:function(){return getFigmaPage}});var _constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/storybook/constants.ts");function getFigmaPage(componentName){return{design:{type:"figma",url:_constants__WEBPACK_IMPORTED_MODULE_0__.uf[componentName]}}}},"../../node_modules/@vkontakte/icons/dist/es6/28/add_outline.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _SvgIcon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/SvgIcon.js");__webpack_exports__.Z=(0,_SvgIcon__WEBPACK_IMPORTED_MODULE_0__.D)("Icon28AddOutline","add_outline_28","0 0 28 28",'<symbol viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" id="add_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M14 4a1 1 0 0 1 1 1v8h8a1 1 0 0 1 0 2h-8v8a1 1 0 0 1-2 0v-8H5a1 1 0 0 1 0-2h8V5a1 1 0 0 1 1-1Z" fill="currentColor" fill-rule="nonzero" /></g></symbol>',28,28,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./src/components/CellButton/CellButton.module.css":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".vkuiCellButton{background:transparent;border:none;box-sizing:border-box;cursor:pointer;margin:0;padding-bottom:0;padding-top:0;text-align:left;text-decoration:none;width:100%}.vkuiFormItem .vkuiCellButton{box-sizing:initial;margin:0 calc(-1 * 16px);margin:0 calc(-1 * var(--vkui--size_base_padding_horizontal--regular));width:100%}.vkuiCellButton[disabled]{opacity:.4}.vkuiCellButton--centered{justify-content:center;text-align:center}.vkuiCellButton--centered .vkuiSimpleCell__main{flex-grow:0;max-width:none}.vkuiCellButton--centered>.vkuiIcon{padding-right:8px}.vkuiCellButton{color:#2688eb;color:var(--vkui--color_text_accent)}.vkuiCellButton>.vkuiIcon{color:#2688eb;color:var(--vkui--color_icon_accent)}.vkuiCellButton--mode-danger{color:#e64646;color:var(--vkui--color_text_negative)}.vkuiCellButton--mode-danger>.vkuiIcon{color:#e64646;color:var(--vkui--color_icon_negative)}.vkuiCellButton--mode-primary{}","",{version:3,sources:["webpack://./src/components/CellButton/CellButton.module.css"],names:[],mappings:"AAAA,gBAOE,sBAAuB,CAHvB,WAAY,CAHZ,qBAAsB,CAItB,cAAe,CAFf,QAAS,CAOT,gBAAiB,CADjB,aAAc,CADd,eAAgB,CANhB,oBAAqB,CAIrB,UAKF,CAEA,8BAEE,kBAAuB,CACvB,wBAAuE,CAAvE,sEAAuE,CAFvE,UAGF,CAEA,0BACE,UACF,CAEA,0BACE,sBAAuB,CACvB,iBACF,CAEA,gDACE,WAAkB,CAClB,cACF,CAEA,oCACE,iBACF,CAEA,gBACE,aAAqC,CAArC,oCACF,CAEA,0BACE,aAAqC,CAArC,oCACF,CAEA,6BACE,aAAuC,CAAvC,sCACF,CAEA,uCACE,aAAuC,CAAvC,sCACF,CAEA,8BAEA",sourcesContent:[".CellButton {\n  box-sizing: border-box;\n  text-decoration: none;\n  margin: 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  background: transparent;\n  text-align: left;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.FormItem .CellButton {\n  width: 100%;\n  box-sizing: content-box;\n  margin: 0 calc(-1 * var(--vkui--size_base_padding_horizontal--regular));\n}\n\n.CellButton[disabled] {\n  opacity: 0.4;\n}\n\n.CellButton--centered {\n  justify-content: center;\n  text-align: center;\n}\n\n.CellButton--centered .SimpleCell__main {\n  flex-grow: initial;\n  max-width: initial;\n}\n\n.CellButton--centered > :global(.vkuiIcon) {\n  padding-right: 8px;\n}\n\n.CellButton {\n  color: var(--vkui--color_text_accent);\n}\n\n.CellButton > :global(.vkuiIcon) {\n  color: var(--vkui--color_icon_accent);\n}\n\n.CellButton--mode-danger {\n  color: var(--vkui--color_text_negative);\n}\n\n.CellButton--mode-danger > :global(.vkuiIcon) {\n  color: var(--vkui--color_icon_negative);\n}\n\n.CellButton--mode-primary {\n  /* Пустой класс для CSS Modules (см. CONTRIBUTING.md)  */\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={CellButton:"vkuiCellButton",FormItem:"vkuiFormItem","CellButton--centered":"vkuiCellButton--centered",SimpleCell__main:"vkuiSimpleCell__main",vkuiIcon:"vkuiIcon","CellButton--mode-danger":"vkuiCellButton--mode-danger","CellButton--mode-primary":"vkuiCellButton--mode-primary"},__webpack_exports__.Z=___CSS_LOADER_EXPORT___},"../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"../../node_modules/mitt/dist/mitt.mjs":function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){function __WEBPACK_DEFAULT_EXPORT__(n){return{all:n=n||new Map,on:function(t,e){var i=n.get(t);i?i.push(e):n.set(t,[e])},off:function(t,e){var i=n.get(t);i&&(e?i.splice(i.indexOf(e)>>>0,1):n.set(t,[]))},emit:function(t,e){var i=n.get(t);i&&i.slice().map((function(n){n(e)})),(i=n.get("*"))&&i.slice().map((function(n){n(t,e)}))}}}__webpack_require__.d(__webpack_exports__,{Z:function(){return __WEBPACK_DEFAULT_EXPORT__}})}}]);