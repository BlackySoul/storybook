"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[9802],{"./src/components/Typography/Subhead/Subhead.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:function(){return Playground},__namedExportsOrder:function(){return __namedExportsOrder}});var _babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_project_tools_storybook_addon_cartesian__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../tools/storybook-addon-cartesian/src/index.tsx"),_Subhead__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Typography/Subhead/Subhead.tsx"),_storybook_constants__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/storybook/constants.ts"),_storybook_helpers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/storybook/helpers.ts");__webpack_exports__.default={title:"Typography/Subhead",component:_Subhead__WEBPACK_IMPORTED_MODULE_2__.v,parameters:(0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_3__.Z)((0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_3__.Z)({},_storybook_constants__WEBPACK_IMPORTED_MODULE_4__.tW),(0,_storybook_helpers__WEBPACK_IMPORTED_MODULE_5__.c)("Typography")),decorators:[_project_tools_storybook_addon_cartesian__WEBPACK_IMPORTED_MODULE_1__.nW]};var Playground=function Template(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Subhead__WEBPACK_IMPORTED_MODULE_2__.v,args,"Subhead")}.bind({});Playground.args={},Playground.parameters=(0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"(args) => <Subhead {...args}>Subhead</Subhead>"}},Playground.parameters);var __namedExportsOrder=["Playground"]},"./src/components/Typography/Subhead/Subhead.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{v:function(){return Subhead}});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),useAdaptivity=__webpack_require__("./src/hooks/useAdaptivity.ts"),getSizeYClassName=__webpack_require__("./src/helpers/getSizeYClassName.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Subhead_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./src/components/Typography/Subhead/Subhead.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Subhead_module.Z,options);var Subhead_Subhead_module=Subhead_module.Z&&Subhead_module.Z.locals?Subhead_module.Z.locals:void 0,_excluded=["className","children","weight","Component"],Subhead=function Subhead(_ref){var className=_ref.className,children=_ref.children,weight=_ref.weight,_ref$Component=_ref.Component,Component=void 0===_ref$Component?"h5":_ref$Component,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded),sizeY=(0,useAdaptivity.g)().sizeY;return react.createElement(Component,(0,esm_extends.Z)({},restProps,{className:(0,es6.AK)(className,Subhead_Subhead_module.Subhead,(0,getSizeYClassName.d)(Subhead_Subhead_module.Subhead,sizeY),weight&&Subhead_Subhead_module["Subhead--weight-".concat(weight)])}),children)};try{Subhead.displayName="Subhead",Subhead.__docgenInfo={description:"",displayName:"Subhead",props:{weight:{defaultValue:null,description:"Задаёт начертание шрифта отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},Component:{defaultValue:{value:"h5"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Subhead/Subhead.tsx#Subhead"]={docgenInfo:Subhead.__docgenInfo,name:"Subhead",path:"src/components/Typography/Subhead/Subhead.tsx#Subhead"})}catch(__react_docgen_typescript_loader_error){}},"./src/storybook/constants.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{R0:function(){return StringArg},nB:function(){return DisableCartesianParam},tW:function(){return CanvasFullLayout},uf:function(){return FigmaUrls}});var CanvasFullLayout={layout:"fullscreen",previewTabs:{"storybook/docs/panel":{hidden:!0}},viewMode:"story",centered:!0},DisableCartesianParam={cartesian:{disable:!0}},StringArg={control:{type:"text"}},FigmaUrls={ActionSheet:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=27%3A4&t=PMn6l8SzrfRRUSod-0",ActionSheetItem:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=27%3A4&t=PMn6l8SzrfRRUSod-0",Alert:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=146%3A0&t=PMn6l8SzrfRRUSod-0",ScreenSpinner:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=146%3A8&t=uhwIZneBQyQtx8Td-0",Snackbar:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=146%3A10&t=uhwIZneBQyQtx8Td-0",Typography:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=18802%3A108351&t=uhwIZneBQyQtx8Td-0",ModalCard:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=146%3A4&t=uhwIZneBQyQtx8Td-0",ModalPage:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=146%3A5&t=uhwIZneBQyQtx8Td-0",Epic:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=9374%3A63616&t=uhwIZneBQyQtx8Td-0",HorizontalCell:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=2121%3A114693&t=uhwIZneBQyQtx8Td-0",PanelHeader:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=27%3A0&t=uhwIZneBQyQtx8Td-0",Tabbar:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=27%3A1&t=uhwIZneBQyQtx8Td-0",Calendar:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=17935%3A102822&t=uhwIZneBQyQtx8Td-0",Forms:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=27%3A3&t=0HQxAeW7YFeDL2gn-0",Avatar:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=16667%3A66875&t=QIyBJwdYLsAmk3wb-0",Badge:"",Banner:"",Button:"",Card:"",CardGrid:"",Cell:"",CellButton:"",ContentCard:"",Counter:"",Footer:"",Gallery:"",Gradient:"",GridAvatar:"",Group:"",Header:"",MiniInfoCell:"",Pagination:"",Placeholder:"",Progress:"",Search:"",Separator:"",Spacing:"",SubnavigationBar:"",Switch:"",Tabs:"",UsersStack:""}},"./src/storybook/helpers.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{c:function(){return getFigmaPage}});var _constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/storybook/constants.ts");function getFigmaPage(componentName){return{design:{type:"figma",url:_constants__WEBPACK_IMPORTED_MODULE_0__.uf[componentName]}}}},"../../tools/storybook-addon-cartesian/src/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{nW:function(){return withCartesian}});var objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),defineProperty=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectSpread2=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("../../node_modules/react/index.js"),_excluded=["cartesian"],CartesianContainerStyle={display:"flex",flexWrap:"wrap",overflow:"auto",margin:"10px",gap:"5px",boxSizing:"border-box",alignItems:"baseline"};var withCartesian=function withCartesian(StoryFn,context){var _context$args=context.args,cartesian=_context$args.cartesian,restArgs=(0,objectWithoutProperties.Z)(_context$args,_excluded);if(cartesian){var variants=function cartesianFunc(propDesc){return Object.entries(propDesc).reduce((function(acc,_ref){var _ref2=(0,slicedToArray.Z)(_ref,2),prop=_ref2[0],values=_ref2[1],res=[];return acc.forEach((function(props){values.forEach((function(value){res.push((0,objectSpread2.Z)((0,objectSpread2.Z)({},props),{},(0,defineProperty.Z)({},prop,value)))}))})),res}),[{}])}(cartesian);return react.createElement("div",{style:CartesianContainerStyle},variants.map((function(ops,index){return react.createElement(StoryFn,{key:index,args:(0,objectSpread2.Z)((0,objectSpread2.Z)({},restArgs),ops)})})))}return react.createElement(StoryFn,{args:restArgs})};"".concat("storybook/addon-cartesian","/tool")},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./src/components/Typography/Subhead/Subhead.module.css":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".vkuiSubhead{font-family:VK Sans Text,-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_subhead--font_family--regular);font-size:14px;font-size:var(--vkui--font_subhead--font_size--regular);font-weight:400;font-weight:var(--vkui--font_subhead--font_weight--regular);line-height:18px;line-height:var(--vkui--font_subhead--line_height--regular);margin:0}.vkuiSubhead--sizeY-compact{font-size:13px;font-size:var(--vkui--font_subhead--font_size--compact);line-height:16px;line-height:var(--vkui--font_subhead--line_height--compact)}@media (pointer:fine) and (min-width:768px),not (min-height:415px){.vkuiSubhead--sizeY-none{font-size:13px;font-size:var(--vkui--font_subhead--font_size--compact);line-height:16px;line-height:var(--vkui--font_subhead--line_height--compact)}}.vkuiSubhead--weight-1{font-weight:600;font-weight:var(--vkui--font_weight_accent1)}.vkuiSubhead--weight-2{font-weight:500;font-weight:var(--vkui--font_weight_accent2)}.vkuiSubhead--weight-3{font-weight:400;font-weight:var(--vkui--font_weight_accent3)}","",{version:3,sources:["webpack://./src/components/Typography/Subhead/Subhead.module.css"],names:[],mappings:"AAAA,aAKE,iFAA4D,CAA5D,2DAA4D,CAH5D,cAAwD,CAAxD,uDAAwD,CAExD,eAA4D,CAA5D,2DAA4D,CAD5D,gBAA4D,CAA5D,2DAA4D,CAF5D,QAKF,CAEA,4BACE,cAAwD,CAAxD,uDAAwD,CACxD,gBAA4D,CAA5D,2DACF,CAEA,mEACE,yBACE,cAAwD,CAAxD,uDAAwD,CACxD,gBAA4D,CAA5D,2DACF,CACF,CAEA,uBACE,eAA6C,CAA7C,4CACF,CAEA,uBACE,eAA6C,CAA7C,4CACF,CAEA,uBACE,eAA6C,CAA7C,4CACF",sourcesContent:[".Subhead {\n  margin: 0;\n  font-size: var(--vkui--font_subhead--font_size--regular);\n  line-height: var(--vkui--font_subhead--line_height--regular);\n  font-weight: var(--vkui--font_subhead--font_weight--regular);\n  font-family: var(--vkui--font_subhead--font_family--regular);\n}\n\n.Subhead--sizeY-compact {\n  font-size: var(--vkui--font_subhead--font_size--compact);\n  line-height: var(--vkui--font_subhead--line_height--compact);\n}\n\n@media (--sizeY-compact) {\n  .Subhead--sizeY-none {\n    font-size: var(--vkui--font_subhead--font_size--compact);\n    line-height: var(--vkui--font_subhead--line_height--compact);\n  }\n}\n\n.Subhead--weight-1 {\n  font-weight: var(--vkui--font_weight_accent1);\n}\n\n.Subhead--weight-2 {\n  font-weight: var(--vkui--font_weight_accent2);\n}\n\n.Subhead--weight-3 {\n  font-weight: var(--vkui--font_weight_accent3);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Subhead:"vkuiSubhead","Subhead--sizeY-compact":"vkuiSubhead--sizeY-compact","Subhead--sizeY-none":"vkuiSubhead--sizeY-none","Subhead--weight-1":"vkuiSubhead--weight-1","Subhead--weight-2":"vkuiSubhead--weight-2","Subhead--weight-3":"vkuiSubhead--weight-3"},__webpack_exports__.Z=___CSS_LOADER_EXPORT___}}]);