"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[1747],{"./src/components/Button/Button.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:function(){return Playground},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Button_stories}});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),objectSpread2=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("../../node_modules/react/index.js"),src=__webpack_require__("../../tools/storybook-addon-cartesian/src/index.tsx"),Button=__webpack_require__("./src/components/Button/Button.tsx"),constants=__webpack_require__("./src/storybook/constants.ts"),Counter=__webpack_require__("./src/components/Counter/Counter.tsx"),SvgIcon=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/SvgIcon.js"),add=(0,SvgIcon.D)("Icon12Add","add_12","0 0 12 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 12 12" id="add_12"><path d="M6.75 1.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" /></symbol>',12,12,!1,void 0),_16_add=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/16/add.js"),_24_add=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/24/add.js"),tag=(0,SvgIcon.D)("Icon12Tag","tag_12","0 0 12 12",'<symbol fill="none" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" id="tag_12"><path d="M2.918 1C1.858 1 1 1.846 1 2.89v2.402c0 .802.323 1.572.899 2.139l4.073 4.015a1.937 1.937 0 0 0 2.712 0l2.642-2.604a2.246 2.246 0 0 0 0-3.208L7.524 1.886A3.09 3.09 0 0 0 5.354 1zM4.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" fill="currentColor" /></symbol>',12,12,!1,void 0),chevron_compact_right=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/24/chevron_compact_right.js"),helpers=__webpack_require__("./src/storybook/helpers.ts"),_excluded=["addBefore","addAfter"],Button_stories={title:"Blocks/Button",component:Button.z,parameters:(0,objectSpread2.Z)((0,objectSpread2.Z)({},constants.tW),(0,helpers.c)("Button")),argTypes:{before:{control:!1},after:{control:!1},addBefore:{control:{type:"boolean"}},addAfter:{control:{type:"boolean"}}},decorators:[src.nW]},Playground=function Template(_ref){var addBefore=_ref.addBefore,addAfter=_ref.addAfter,args=(0,objectWithoutProperties.Z)(_ref,_excluded),buttonBefore=addBefore&&("s"===args.size?react.createElement(add,null):"m"===args.size?react.createElement(_16_add.Z,null):react.createElement(_24_add.Z,null)),buttonAfter=addAfter&&("s"===args.size?react.createElement(tag,null):"m"===args.size?react.createElement(chevron_compact_right.Z,null):react.createElement(Counter.A,null,"16"));return react.createElement(Button.z,(0,esm_extends.Z)({},args,{before:buttonBefore,after:buttonAfter}))}.bind({});Playground.args={children:"Button",size:"s"},Playground.parameters=(0,objectSpread2.Z)({storySource:{source:"({ addBefore, addAfter, ...args }) => {\n  const buttonBefore =\n    addBefore &&\n    (args.size === 's' ? <Icon12Add /> : args.size === 'm' ? <Icon16Add /> : <Icon24Add />);\n  const buttonAfter =\n    addAfter &&\n    (args.size === 's' ? (\n      <Icon12Tag />\n    ) : args.size === 'm' ? (\n      <Icon24ChevronCompactRight />\n    ) : (\n      <Counter>16</Counter>\n    ));\n\n  return <Button {...args} before={buttonBefore} after={buttonAfter} />;\n}"}},Playground.parameters);var __namedExportsOrder=["Playground"]},"./src/components/Typography/Headline/Headline.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{s:function(){return Headline}});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../node_modules/react/index.js"),useAdaptivity=__webpack_require__("./src/hooks/useAdaptivity.ts"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),warnOnce=__webpack_require__("./src/lib/warnOnce.ts"),getSizeYClassName=__webpack_require__("./src/helpers/getSizeYClassName.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Headline_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./src/components/Typography/Headline/Headline.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Headline_module.Z,options);var Headline_Headline_module=Headline_module.Z&&Headline_module.Z.locals?Headline_module.Z.locals:void 0,_excluded=["className","children","weight","level","Component","getRootRef"],Headline=((0,warnOnce.O)("Headline"),function Headline(_ref){var className=_ref.className,children=_ref.children,_ref$weight=_ref.weight,weight=void 0===_ref$weight?"3":_ref$weight,_ref$level=_ref.level,level=void 0===_ref$level?"1":_ref$level,_ref$Component=_ref.Component,Component=void 0===_ref$Component?"h4":_ref$Component,getRootRef=_ref.getRootRef,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded),sizeY=(0,useAdaptivity.g)().sizeY;return react.createElement(Component,(0,esm_extends.Z)({},restProps,{ref:getRootRef,className:(0,es6.AK)(className,Headline_Headline_module.Headline,(0,getSizeYClassName.d)(Headline_Headline_module.Headline,sizeY),Headline_Headline_module["Headline--level-".concat(level)],Headline_Headline_module["Headline--weight-".concat(weight)])}),children)});try{Headline.displayName="Headline",Headline.__docgenInfo={description:"",displayName:"Headline",props:{weight:{defaultValue:{value:"3"},description:"Задаёт начертание шрифта отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:{value:"h4"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Headline/Headline.tsx#Headline"]={docgenInfo:Headline.__docgenInfo,name:"Headline",path:"src/components/Typography/Headline/Headline.tsx#Headline"})}catch(__react_docgen_typescript_loader_error){}},"../../tools/storybook-addon-cartesian/src/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{nW:function(){return withCartesian}});var objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),defineProperty=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectSpread2=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("../../node_modules/react/index.js"),_excluded=["cartesian"],CartesianContainerStyle={display:"flex",flexWrap:"wrap",overflow:"auto",margin:"10px",gap:"5px",boxSizing:"border-box",alignItems:"baseline"};var withCartesian=function withCartesian(StoryFn,context){var _context$args=context.args,cartesian=_context$args.cartesian,restArgs=(0,objectWithoutProperties.Z)(_context$args,_excluded);if(cartesian){var variants=function cartesianFunc(propDesc){return Object.entries(propDesc).reduce((function(acc,_ref){var _ref2=(0,slicedToArray.Z)(_ref,2),prop=_ref2[0],values=_ref2[1],res=[];return acc.forEach((function(props){values.forEach((function(value){res.push((0,objectSpread2.Z)((0,objectSpread2.Z)({},props),{},(0,defineProperty.Z)({},prop,value)))}))})),res}),[{}])}(cartesian);return react.createElement("div",{style:CartesianContainerStyle},variants.map((function(ops,index){return react.createElement(StoryFn,{key:index,args:(0,objectSpread2.Z)((0,objectSpread2.Z)({},restArgs),ops)})})))}return react.createElement(StoryFn,{args:restArgs})};"".concat("storybook/addon-cartesian","/tool")},"../../node_modules/@vkontakte/icons/dist/es6/16/add.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _SvgIcon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/SvgIcon.js");__webpack_exports__.Z=(0,_SvgIcon__WEBPACK_IMPORTED_MODULE_0__.D)("Icon16Add","add_16","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="add_16"><path fill="currentColor" d="M9 9v4a1 1 0 1 1-2 0V9H3a1 1 0 1 1 0-2h4V3a1 1 0 1 1 2 0v4h4a1 1 0 1 1 0 2H9Z" /></symbol>',16,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/16/spinner.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _SvgIcon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/SvgIcon.js");__webpack_exports__.Z=(0,_SvgIcon__WEBPACK_IMPORTED_MODULE_0__.D)("Icon16Spinner","spinner_16","0 0 16 16",'<symbol fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" id="spinner_16"><path clip-rule="evenodd" d="M11.21 2.93a6 6 0 0 0-8.64 7.62 1 1 0 1 1-1.8.86A8 8 0 1 1 8 16a1 1 0 1 1 0-2 6 6 0 0 0 3.21-11.07z" fill="currentColor" fill-rule="evenodd" /></symbol>',16,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/add.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _SvgIcon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/SvgIcon.js");__webpack_exports__.Z=(0,_SvgIcon__WEBPACK_IMPORTED_MODULE_0__.D)("Icon24Add","add_24","0 0 24 24",'<symbol viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="add_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M13 11h6.5a1 1 0 0 1 0 2H13v6.5a1 1 0 0 1-2 0V13H4.5a1 1 0 0 1 0-2H11V4.5a1 1 0 0 1 2 0V11Z" fill="currentColor" /></g></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_compact_right.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _SvgIcon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/SvgIcon.js");__webpack_exports__.Z=(0,_SvgIcon__WEBPACK_IMPORTED_MODULE_0__.D)("Icon24ChevronCompactRight","chevron_compact_right_24","0 0 16 24",'<symbol fill="none" viewBox="0 0 16 24" xmlns="http://www.w3.org/2000/svg" id="chevron_compact_right_24"><path d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12z" fill="currentColor" /></symbol>',16,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/spinner.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _SvgIcon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/SvgIcon.js");__webpack_exports__.Z=(0,_SvgIcon__WEBPACK_IMPORTED_MODULE_0__.D)("Icon24Spinner","spinner_24","0 0 24 24",'<symbol fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="spinner_24"><path clip-rule="evenodd" d="M16.394 5.077A8.2 8.2 0 0 0 4.58 15.49a.9.9 0 0 1-1.628.767A10 10 0 1 1 12 22a.9.9 0 0 1 0-1.8 8.2 8.2 0 0 0 4.394-15.123z" fill="currentColor" fill-rule="evenodd" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/32/spinner.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _SvgIcon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/SvgIcon.js");__webpack_exports__.Z=(0,_SvgIcon__WEBPACK_IMPORTED_MODULE_0__.D)("Icon32Spinner","spinner_32","0 0 32 32",'<symbol viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" id="spinner_32"><path d="M16 32a1.5 1.5 0 0 1 0-3c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16c0 1.557.273 3.074.8 4.502A1.5 1.5 0 1 1 .986 21.54 15.97 15.97 0 0 1 0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16Z" fill="currentColor" /></symbol>',32,32,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/44/spinner.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _SvgIcon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/SvgIcon.js");__webpack_exports__.Z=(0,_SvgIcon__WEBPACK_IMPORTED_MODULE_0__.D)("Icon44Spinner","spinner_44","0 0 44 44",'<symbol viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" id="spinner_44"><path d="M22 44a1.5 1.5 0 0 1 0-3c10.493 0 19-8.507 19-19S32.493 3 22 3 3 11.507 3 22c0 2.208.376 4.363 1.103 6.397a1.5 1.5 0 1 1-2.825 1.01A21.964 21.964 0 0 1 0 22C0 9.85 9.85 0 22 0s22 9.85 22 22-9.85 22-22 22Z" fill="currentColor" /></symbol>',44,44,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./src/components/Typography/Headline/Headline.module.css":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".vkuiHeadline{display:block;margin:0}.vkuiHeadline--level-1{font-family:VK Sans Text,-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_headline1--font_family--regular);font-size:16px;font-size:var(--vkui--font_headline1--font_size--regular);font-weight:500;font-weight:var(--vkui--font_headline1--font_weight--regular);line-height:20px;line-height:var(--vkui--font_headline1--line_height--regular)}.vkuiHeadline--sizeY-compact.vkuiHeadline--level-1{font-size:15px;font-size:var(--vkui--font_headline1--font_size--compact);line-height:20px;line-height:var(--vkui--font_headline1--line_height--compact)}@media (pointer:fine) and (min-width:768px),not (min-height:415px){.vkuiHeadline--sizeY-none.vkuiHeadline--level-1{font-size:15px;font-size:var(--vkui--font_headline1--font_size--compact);line-height:20px;line-height:var(--vkui--font_headline1--line_height--compact)}}.vkuiHeadline--level-2{font-family:VK Sans Text,-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_headline2--font_family--regular);font-size:15px;font-size:var(--vkui--font_headline2--font_size--regular);font-weight:500;font-weight:var(--vkui--font_headline2--font_weight--regular);line-height:20px;line-height:var(--vkui--font_headline2--line_height--regular)}.vkuiHeadline--sizeY-compact.vkuiHeadline--level-2{font-size:14px;font-size:var(--vkui--font_headline2--font_size--compact);line-height:20px;line-height:var(--vkui--font_headline2--line_height--compact)}@media (pointer:fine) and (min-width:768px),not (min-height:415px){.vkuiHeadline--sizeY-none.vkuiHeadline--level-2{font-size:14px;font-size:var(--vkui--font_headline2--font_size--compact);line-height:20px;line-height:var(--vkui--font_headline2--line_height--compact)}}.vkuiHeadline--weight-1{font-weight:600;font-weight:var(--vkui--font_weight_accent1)}.vkuiHeadline--weight-2{font-weight:500;font-weight:var(--vkui--font_weight_accent2)}.vkuiHeadline--weight-3{font-weight:400;font-weight:var(--vkui--font_weight_accent3)}.vkuiPanelHeaderContent__children .vkuiHeadline{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}","",{version:3,sources:["webpack://./src/components/Typography/Headline/Headline.module.css"],names:[],mappings:"AAAA,cACE,aAAc,CACd,QACF,CAEA,uBAIE,iFAA8D,CAA9D,6DAA8D,CAH9D,cAA0D,CAA1D,yDAA0D,CAE1D,eAA8D,CAA9D,6DAA8D,CAD9D,gBAA8D,CAA9D,6DAGF,CAEA,mDACE,cAA0D,CAA1D,yDAA0D,CAC1D,gBAA8D,CAA9D,6DACF,CAEA,mEACE,gDACE,cAA0D,CAA1D,yDAA0D,CAC1D,gBAA8D,CAA9D,6DACF,CACF,CAEA,uBAIE,iFAA8D,CAA9D,6DAA8D,CAH9D,cAA0D,CAA1D,yDAA0D,CAE1D,eAA8D,CAA9D,6DAA8D,CAD9D,gBAA8D,CAA9D,6DAGF,CAEA,mDACE,cAA0D,CAA1D,yDAA0D,CAC1D,gBAA8D,CAA9D,6DACF,CAEA,mEACE,gDACE,cAA0D,CAA1D,yDAA0D,CAC1D,gBAA8D,CAA9D,6DACF,CACF,CAEA,wBACE,eAA6C,CAA7C,4CACF,CAEA,wBACE,eAA6C,CAA7C,4CACF,CAEA,wBACE,eAA6C,CAA7C,4CACF,CAMA,gDACE,eAAgB,CAEhB,sBAAuB,CADvB,kBAEF",sourcesContent:[".Headline {\n  display: block;\n  margin: 0;\n}\n\n.Headline--level-1 {\n  font-size: var(--vkui--font_headline1--font_size--regular);\n  line-height: var(--vkui--font_headline1--line_height--regular);\n  font-weight: var(--vkui--font_headline1--font_weight--regular);\n  font-family: var(--vkui--font_headline1--font_family--regular);\n}\n\n.Headline--sizeY-compact.Headline--level-1 {\n  font-size: var(--vkui--font_headline1--font_size--compact);\n  line-height: var(--vkui--font_headline1--line_height--compact);\n}\n\n@media (--sizeY-compact) {\n  .Headline--sizeY-none.Headline--level-1 {\n    font-size: var(--vkui--font_headline1--font_size--compact);\n    line-height: var(--vkui--font_headline1--line_height--compact);\n  }\n}\n\n.Headline--level-2 {\n  font-size: var(--vkui--font_headline2--font_size--regular);\n  line-height: var(--vkui--font_headline2--line_height--regular);\n  font-weight: var(--vkui--font_headline2--font_weight--regular);\n  font-family: var(--vkui--font_headline2--font_family--regular);\n}\n\n.Headline--sizeY-compact.Headline--level-2 {\n  font-size: var(--vkui--font_headline2--font_size--compact);\n  line-height: var(--vkui--font_headline2--line_height--compact);\n}\n\n@media (--sizeY-compact) {\n  .Headline--sizeY-none.Headline--level-2 {\n    font-size: var(--vkui--font_headline2--font_size--compact);\n    line-height: var(--vkui--font_headline2--line_height--compact);\n  }\n}\n\n.Headline--weight-1 {\n  font-weight: var(--vkui--font_weight_accent1);\n}\n\n.Headline--weight-2 {\n  font-weight: var(--vkui--font_weight_accent2);\n}\n\n.Headline--weight-3 {\n  font-weight: var(--vkui--font_weight_accent3);\n}\n\n/**\n * CMP:\n * PanelHeaderContent\n */\n.PanelHeaderContent__children .Headline {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Headline:"vkuiHeadline","Headline--level-1":"vkuiHeadline--level-1","Headline--sizeY-compact":"vkuiHeadline--sizeY-compact","Headline--sizeY-none":"vkuiHeadline--sizeY-none","Headline--level-2":"vkuiHeadline--level-2","Headline--weight-1":"vkuiHeadline--weight-1","Headline--weight-2":"vkuiHeadline--weight-2","Headline--weight-3":"vkuiHeadline--weight-3",PanelHeaderContent__children:"vkuiPanelHeaderContent__children"},__webpack_exports__.Z=___CSS_LOADER_EXPORT___},"../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);