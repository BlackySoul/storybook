"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[5783],{"./src/components/Typography/Title/Title.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:function(){return Playground},__namedExportsOrder:function(){return __namedExportsOrder}});var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_project_tools_storybook_addon_cartesian__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../tools/storybook-addon-cartesian/src/index.tsx"),_Title__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Typography/Title/Title.tsx"),_storybook_constants__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/storybook/constants.ts"),_storybook_helpers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/storybook/helpers.ts");__webpack_exports__.default={title:"Typography/Title",component:_Title__WEBPACK_IMPORTED_MODULE_2__.D,parameters:(0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_3__.Z)((0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_3__.Z)({},_storybook_constants__WEBPACK_IMPORTED_MODULE_4__.tW),(0,_storybook_helpers__WEBPACK_IMPORTED_MODULE_5__.c)("Typography")),decorators:[_project_tools_storybook_addon_cartesian__WEBPACK_IMPORTED_MODULE_1__.nW]};var Playground=function Template(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Title__WEBPACK_IMPORTED_MODULE_2__.D,(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({level:"1"},args),"Title 1"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Title__WEBPACK_IMPORTED_MODULE_2__.D,(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({level:"2"},args),"Title 2"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Title__WEBPACK_IMPORTED_MODULE_2__.D,(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({level:"3"},args),"Title 3"))}.bind({});Playground.args={},Playground.parameters=(0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:'(args) => (\n  <div>\n    <Title level="1" {...args}>\n      Title 1\n    </Title>\n    <Title level="2" {...args}>\n      Title 2\n    </Title>\n    <Title level="3" {...args}>\n      Title 3\n    </Title>\n  </div>\n)'}},Playground.parameters);var __namedExportsOrder=["Playground"]},"./src/components/Typography/Title/Title.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{D:function(){return Title}});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Title_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./src/components/Typography/Title/Title.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Title_module.Z,options);var Title_Title_module=Title_module.Z&&Title_module.Z.locals?Title_module.Z.locals:void 0,_excluded=["className","children","weight","level","Component"],Title=function Title(_ref){var className=_ref.className,children=_ref.children,weight=_ref.weight,_ref$level=_ref.level,level=void 0===_ref$level?"1":_ref$level,Component=_ref.Component,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded);return Component||(Component="h"+level),react.createElement(Component,(0,esm_extends.Z)({},restProps,{className:(0,es6.AK)(className,Title_Title_module.Title,Title_Title_module["Title--level-".concat(level)],weight&&Title_Title_module["Title--weight-".concat(weight)])}),children)};try{Title.displayName="Title",Title.__docgenInfo={description:"",displayName:"Title",props:{weight:{defaultValue:null,description:"Задаёт начертание шрифта отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Title/Title.tsx#Title"]={docgenInfo:Title.__docgenInfo,name:"Title",path:"src/components/Typography/Title/Title.tsx#Title"})}catch(__react_docgen_typescript_loader_error){}},"./src/storybook/constants.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{R0:function(){return StringArg},nB:function(){return DisableCartesianParam},tW:function(){return CanvasFullLayout},uf:function(){return FigmaUrls}});var CanvasFullLayout={layout:"fullscreen",previewTabs:{"storybook/docs/panel":{hidden:!0}},viewMode:"story",centered:!0},DisableCartesianParam={cartesian:{disable:!0}},StringArg={control:{type:"text"}},FigmaUrls={ActionSheet:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=27%3A4&t=PMn6l8SzrfRRUSod-0",ActionSheetItem:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=27%3A4&t=PMn6l8SzrfRRUSod-0",Alert:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=146%3A0&t=PMn6l8SzrfRRUSod-0",ScreenSpinner:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=146%3A8&t=uhwIZneBQyQtx8Td-0",Snackbar:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=146%3A10&t=uhwIZneBQyQtx8Td-0",Typography:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=18802%3A108351&t=uhwIZneBQyQtx8Td-0",ModalCard:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=146%3A4&t=uhwIZneBQyQtx8Td-0",ModalPage:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=146%3A5&t=uhwIZneBQyQtx8Td-0",Epic:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=9374%3A63616&t=uhwIZneBQyQtx8Td-0",HorizontalCell:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=2121%3A114693&t=uhwIZneBQyQtx8Td-0",PanelHeader:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=27%3A0&t=uhwIZneBQyQtx8Td-0",Tabbar:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=27%3A1&t=uhwIZneBQyQtx8Td-0",Calendar:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=17935%3A102822&t=uhwIZneBQyQtx8Td-0",Forms:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=27%3A3&t=0HQxAeW7YFeDL2gn-0",Avatar:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=16667%3A66875&t=QIyBJwdYLsAmk3wb-0",Badge:"",Banner:"",Button:"",Card:"",CardGrid:"",Cell:"",CellButton:"",ContentCard:"",Counter:"",Footer:"",Gallery:"",Gradient:"",GridAvatar:"",Group:"",Header:"",MiniInfoCell:"",Pagination:"",Placeholder:"",Progress:"",Search:"",Separator:"",Spacing:"",SubnavigationBar:"",Switch:"",Tabs:"",UsersStack:""}},"./src/storybook/helpers.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{c:function(){return getFigmaPage}});var _constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/storybook/constants.ts");function getFigmaPage(componentName){return{design:{type:"figma",url:_constants__WEBPACK_IMPORTED_MODULE_0__.uf[componentName]}}}},"../../tools/storybook-addon-cartesian/src/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{nW:function(){return withCartesian}});var objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),defineProperty=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectSpread2=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("../../node_modules/react/index.js"),_excluded=["cartesian"],CartesianContainerStyle={display:"flex",flexWrap:"wrap",overflow:"auto",margin:"10px",gap:"5px",boxSizing:"border-box",alignItems:"baseline"};var withCartesian=function withCartesian(StoryFn,context){var _context$args=context.args,cartesian=_context$args.cartesian,restArgs=(0,objectWithoutProperties.Z)(_context$args,_excluded);if(cartesian){var variants=function cartesianFunc(propDesc){return Object.entries(propDesc).reduce((function(acc,_ref){var _ref2=(0,slicedToArray.Z)(_ref,2),prop=_ref2[0],values=_ref2[1],res=[];return acc.forEach((function(props){values.forEach((function(value){res.push((0,objectSpread2.Z)((0,objectSpread2.Z)({},props),{},(0,defineProperty.Z)({},prop,value)))}))})),res}),[{}])}(cartesian);return react.createElement("div",{style:CartesianContainerStyle},variants.map((function(ops,index){return react.createElement(StoryFn,{key:index,args:(0,objectSpread2.Z)((0,objectSpread2.Z)({},restArgs),ops)})})))}return react.createElement(StoryFn,{args:restArgs})};"".concat("storybook/addon-cartesian","/tool")},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./src/components/Typography/Title/Title.module.css":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".vkuiTitle{display:block;margin:0}.vkuiTitle--level-1{font-family:VK Sans Text,-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_title1--font_family--regular);font-size:24px;font-size:var(--vkui--font_title1--font_size--regular);font-weight:600;font-weight:var(--vkui--font_title1--font_weight--regular);line-height:28px;line-height:var(--vkui--font_title1--line_height--regular)}.vkuiTitle--level-2{font-family:VK Sans Text,-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_title2--font_family--regular);font-size:20px;font-size:var(--vkui--font_title2--font_size--regular);font-weight:600;font-weight:var(--vkui--font_title2--font_weight--regular);line-height:24px;line-height:var(--vkui--font_title2--line_height--regular)}.vkuiTitle--level-3{font-family:VK Sans Text,-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_title3--font_family--regular);font-size:17px;font-size:var(--vkui--font_title3--font_size--regular);font-weight:600;font-weight:var(--vkui--font_title3--font_weight--regular);line-height:22px;line-height:var(--vkui--font_title3--line_height--regular)}.vkuiTitle--weight-1{font-weight:600;font-weight:var(--vkui--font_weight_accent1)}.vkuiTitle--weight-2{font-weight:500;font-weight:var(--vkui--font_weight_accent2)}.vkuiTitle--weight-3{font-weight:400;font-weight:var(--vkui--font_weight_accent3)}","",{version:3,sources:["webpack://./src/components/Typography/Title/Title.module.css"],names:[],mappings:"AAAA,WACE,aAAc,CACd,QACF,CAEA,oBAIE,iFAA2D,CAA3D,0DAA2D,CAH3D,cAAuD,CAAvD,sDAAuD,CAEvD,eAA2D,CAA3D,0DAA2D,CAD3D,gBAA2D,CAA3D,0DAGF,CAEA,oBAIE,iFAA2D,CAA3D,0DAA2D,CAH3D,cAAuD,CAAvD,sDAAuD,CAEvD,eAA2D,CAA3D,0DAA2D,CAD3D,gBAA2D,CAA3D,0DAGF,CAEA,oBAIE,iFAA2D,CAA3D,0DAA2D,CAH3D,cAAuD,CAAvD,sDAAuD,CAEvD,eAA2D,CAA3D,0DAA2D,CAD3D,gBAA2D,CAA3D,0DAGF,CAEA,qBACE,eAA6C,CAA7C,4CACF,CAEA,qBACE,eAA6C,CAA7C,4CACF,CAEA,qBACE,eAA6C,CAA7C,4CACF",sourcesContent:[".Title {\n  display: block;\n  margin: 0;\n}\n\n.Title--level-1 {\n  font-size: var(--vkui--font_title1--font_size--regular);\n  line-height: var(--vkui--font_title1--line_height--regular);\n  font-weight: var(--vkui--font_title1--font_weight--regular);\n  font-family: var(--vkui--font_title1--font_family--regular);\n}\n\n.Title--level-2 {\n  font-size: var(--vkui--font_title2--font_size--regular);\n  line-height: var(--vkui--font_title2--line_height--regular);\n  font-weight: var(--vkui--font_title2--font_weight--regular);\n  font-family: var(--vkui--font_title2--font_family--regular);\n}\n\n.Title--level-3 {\n  font-size: var(--vkui--font_title3--font_size--regular);\n  line-height: var(--vkui--font_title3--line_height--regular);\n  font-weight: var(--vkui--font_title3--font_weight--regular);\n  font-family: var(--vkui--font_title3--font_family--regular);\n}\n\n.Title--weight-1 {\n  font-weight: var(--vkui--font_weight_accent1);\n}\n\n.Title--weight-2 {\n  font-weight: var(--vkui--font_weight_accent2);\n}\n\n.Title--weight-3 {\n  font-weight: var(--vkui--font_weight_accent3);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Title:"vkuiTitle","Title--level-1":"vkuiTitle--level-1","Title--level-2":"vkuiTitle--level-2","Title--level-3":"vkuiTitle--level-3","Title--weight-1":"vkuiTitle--weight-1","Title--weight-2":"vkuiTitle--weight-2","Title--weight-3":"vkuiTitle--weight-3"},__webpack_exports__.Z=___CSS_LOADER_EXPORT___}}]);