"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[2965],{"./src/components/FormField/FormField.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{W:function(){return FormField}});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),slicedToArray=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),useAdaptivity=__webpack_require__("./src/hooks/useAdaptivity.ts"),getSizeYClassName=__webpack_require__("./src/helpers/getSizeYClassName.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),FormField_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./src/components/FormField/FormField.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(FormField_module.Z,options);var FormField_FormField_module=FormField_module.Z&&FormField_module.Z.locals?FormField_module.Z.locals:void 0,_excluded=["Component","status","children","getRootRef","before","after","disabled","mode","className"],FormField=function FormField(_ref){var _ref$Component=_ref.Component,Component=void 0===_ref$Component?"div":_ref$Component,_ref$status=_ref.status,status=void 0===_ref$status?"default":_ref$status,children=_ref.children,getRootRef=_ref.getRootRef,before=_ref.before,after=_ref.after,disabled=_ref.disabled,_ref$mode=_ref.mode,mode=void 0===_ref$mode?"default":_ref$mode,className=_ref.className,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded),sizeY=(0,useAdaptivity.g)().sizeY,_React$useState=react.useState(!1),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),hover=_React$useState2[0],setHover=_React$useState2[1];return react.createElement(Component,(0,esm_extends.Z)({role:"presentation"},restProps,{ref:getRootRef,onMouseEnter:function handleMouseEnter(e){e.stopPropagation(),setHover(!0)},onMouseLeave:function handleMouseLeave(e){e.stopPropagation(),setHover(!1)},className:(0,es6.AK)(FormField_FormField_module.FormField,FormField_FormField_module["FormField--mode-".concat(mode)],FormField_FormField_module["FormField--status-".concat(status)],(0,getSizeYClassName.d)(FormField_FormField_module.FormField,sizeY),disabled&&FormField_FormField_module["FormField--disabled"],!disabled&&hover&&FormField_FormField_module["FormField--hover"],className)}),before&&react.createElement("div",{role:"presentation",className:FormField_FormField_module.FormField__before},before),children,after&&react.createElement("div",{role:"presentation",className:FormField_FormField_module.FormField__after},after),react.createElement("div",{role:"presentation",className:FormField_FormField_module.FormField__border}))};try{FormField.displayName="FormField",FormField.__docgenInfo={description:"",displayName:"FormField",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:{value:"div"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},status:{defaultValue:{value:"default"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"valid"'}]}},before:{defaultValue:null,description:"Добавляет иконку слева.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Добавляет иконку справа.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"after",required:!1,type:{name:"ReactNode"}},mode:{defaultValue:{value:"default"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"plain"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormField/FormField.tsx#FormField"]={docgenInfo:FormField.__docgenInfo,name:"FormField",path:"src/components/FormField/FormField.tsx#FormField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Input/Input.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{I:function(){return Input}});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),FormField=__webpack_require__("./src/components/FormField/FormField.tsx"),getSizeYClassName=__webpack_require__("./src/helpers/getSizeYClassName.ts"),useAdaptivity=__webpack_require__("./src/hooks/useAdaptivity.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Input_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./src/components/Input/Input.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Input_module.Z,options);var Input_Input_module=Input_module.Z&&Input_module.Z.locals?Input_module.Z.locals:void 0,_excluded=["type","align","getRef","className","getRootRef","style","before","after","status"],Input=function Input(_ref){var _ref$type=_ref.type,type=void 0===_ref$type?"text":_ref$type,align=_ref.align,getRef=_ref.getRef,className=_ref.className,getRootRef=_ref.getRootRef,style=_ref.style,before=_ref.before,after=_ref.after,status=_ref.status,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded),sizeY=(0,useAdaptivity.g)().sizeY;return react.createElement(FormField.W,{style:style,className:(0,es6.AK)(Input_Input_module.Input,align&&Input_Input_module["Input--align-".concat(align)],(0,getSizeYClassName.d)(Input_Input_module.Input,sizeY),before&&Input_Input_module["Input--hasBefore"],after&&Input_Input_module["Input--hasAfter"],className),getRootRef:getRootRef,before:before,after:after,disabled:restProps.disabled,status:status},react.createElement("input",(0,esm_extends.Z)({},restProps,{type:type,className:Input_Input_module.Input__el,ref:getRef})))};try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"valid"'}]}},before:{defaultValue:null,description:"Добавляет иконку слева.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Добавляет иконку справа.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"after",required:!1,type:{name:"ReactNode"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"plain"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./src/components/FormField/FormField.module.css":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".vkuiFormField{-webkit-tap-highlight-color:transparent;align-items:center;border-radius:8px;border-radius:var(--vkui--size_border_radius--regular);box-sizing:border-box;display:flex;font-family:VK Sans Text,-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_family_base);isolation:isolate;min-height:44px;min-height:var(--vkui--size_field_height--regular);position:relative}.vkuiFormField--sizeY-compact{min-height:36px;min-height:var(--vkui--size_field_height--compact)}@media (pointer:fine) and (min-width:768px),not (min-height:415px){.vkuiFormField--sizeY-none{min-height:36px;min-height:var(--vkui--size_field_height--compact)}}.vkuiFormField>*{border-radius:inherit;z-index:1;z-index:var(--vkui_internal--z_index_form_field_element)}.vkuiFormField__after,.vkuiFormField__before{align-content:center;align-items:center;color:#99a2ad;color:var(--vkui--color_icon_secondary);display:flex;flex-shrink:0;height:100%;justify-content:center;min-width:44px;min-width:var(--vkui--size_field_height--regular);position:relative;z-index:6;z-index:var(--vkui_internal--z_index_form_field_side)}.vkuiFormField--sizeY-compact .vkuiFormField__after,.vkuiFormField--sizeY-compact .vkuiFormField__before{height:36px;height:var(--vkui--size_field_height--compact);min-width:36px;min-width:var(--vkui--size_field_height--compact)}@media (pointer:fine) and (min-width:768px),not (min-height:415px){.vkuiFormField--sizeY-none .vkuiFormField__after,.vkuiFormField--sizeY-none .vkuiFormField__before{height:36px;height:var(--vkui--size_field_height--compact);min-width:36px;min-width:var(--vkui--size_field_height--compact)}}.vkuiFormField__before{color:#2688eb;color:var(--vkui--color_icon_accent)}.vkuiFormField__after{color:#99a2ad;color:var(--vkui--color_icon_secondary)}.vkuiFormField__border{border:1px solid transparent;border:var(--vkui_internal--thin_border) solid transparent;border-radius:inherit;box-sizing:border-box;height:100%;left:0;pointer-events:none;position:absolute;top:0;transform-origin:left top;width:100%;z-index:2;z-index:var(--vkui_internal--z_index_form_field_border)}.vkuiFormField--mode-default .vkuiFormField__border{border-color:rgba(0,0,0,.12);border-color:var(--vkui--color_field_border_alpha)}.vkuiFormField--mode-default{background-color:#f2f3f5;background-color:var(--vkui--color_field_background)}.vkuiFormField--status-error .vkuiFormField__border,.vkuiFormItem--status-error .vkuiFormField__border{border-color:#e64646;border-color:var(--vkui--color_stroke_negative);z-index:3;z-index:var(--vkui_internal--z_index_form_field_status)}.vkuiFormField--status-error,.vkuiFormItem--status-error .vkuiFormField{background-color:#faebeb;background-color:var(--vkui--color_background_negative_tint)}.vkuiFormField--status-valid .vkuiFormField__border,.vkuiFormItem--status-valid .vkuiFormField__border{border-color:#4bb34b;border-color:var(--vkui--color_stroke_positive);z-index:3;z-index:var(--vkui_internal--z_index_form_field_status)}.vkuiFormField--disabled{cursor:default;opacity:.64;opacity:var(--vkui--opacity_disable_accessibility);pointer-events:none}.vkuiFormField--hover{background-color:#f2f3f5;background-color:var(--vkui--color_field_background)}.vkuiFormField--mode-default.vkuiFormField--hover .vkuiFormField__border{border-color:rgba(0,0,0,.24);border-color:var(--vkui--color_field_border_alpha--hover);z-index:4;z-index:var(--vkui_internal--z_index_form_field_border_hover)}.vkuiFormField :focus{outline:none}.vkuiFormField :focus~.vkuiFormField__border,.vkuiFormField:focus-within .vkuiFormField__border{border-color:#2688eb;border-color:var(--vkui--color_stroke_accent);z-index:5;z-index:var(--vkui_internal--z_index_form_field_focus)}.vkuiModalCardBase__header+.vkuiFormField,.vkuiModalCardBase__subheader+.vkuiFormField{margin-top:16px}.vkuiSelect .vkuiFormField__after{pointer-events:none}.vkuiCalendarHeader__picker .vkuiFormField__after{min-width:12px;padding-right:8px}.vkuiChipsInput .vkuiFormField__after{z-index:6;z-index:var(--vkui_internal--z_index_form_field_side)}.vkuiFormLayoutGroup--segmented .vkuiFormField{isolation:auto;z-index:auto}.vkuiFormLayoutGroup--segmented .vkuiRemovable__content>.vkuiFormItem:not(:first-of-type):not(:last-of-type) .vkuiFormField,.vkuiFormLayoutGroup--segmented>.vkuiFormItem:not(:first-of-type):not(:last-of-type) .vkuiFormField{border-radius:0}.vkuiFormLayoutGroup--segmented .vkuiRemovable__content>:first-of-type:not(:last-of-type) .vkuiFormField,.vkuiFormLayoutGroup--segmented>:first-of-type:not(:last-of-type) .vkuiFormField{border-bottom-right-radius:0;border-top-right-radius:0}.vkuiFormLayoutGroup--segmented .vkuiRemovable__content>.vkuiFormItem:not(:first-of-type):last-of-type .vkuiFormField,.vkuiFormLayoutGroup--segmented>.vkuiFormItem:not(:first-of-type):last-of-type .vkuiFormField{border-bottom-left-radius:0;border-top-left-radius:0}.vkuiFormField--mode-plain,.vkuiFormField--status-default{}","",{version:3,sources:["webpack://./src/components/FormField/FormField.module.css"],names:[],mappings:"AAAA,eAOE,uCAAwC,CAJxC,kBAAmB,CAMnB,iBAAuD,CAAvD,sDAAuD,CALvD,qBAAsB,CAFtB,YAAa,CAIb,iFAA0C,CAA1C,yCAA0C,CAE1C,iBAAkB,CAHlB,eAAmD,CAAnD,kDAAmD,CAJnD,iBASF,CAEA,8BACE,eAAmD,CAAnD,kDACF,CAEA,mEACE,2BACE,eAAmD,CAAnD,kDACF,CACF,CAGA,iBACE,qBAAsB,CACtB,SAAyD,CAAzD,wDACF,CAEA,6CAME,oBAAqB,CADrB,kBAAmB,CAMnB,aAAwC,CAAxC,uCAAwC,CAPxC,YAAa,CAIb,aAAc,CAEd,WAAY,CAHZ,sBAAuB,CAEvB,cAAkD,CAAlD,iDAAkD,CAPlD,iBAAkB,CAClB,SAAsD,CAAtD,qDASF,CAEA,yGAGE,WAA+C,CAA/C,8CAA+C,CAD/C,cAAkD,CAAlD,iDAEF,CAEA,mEACE,mGAGE,WAA+C,CAA/C,8CAA+C,CAD/C,cAAkD,CAAlD,iDAEF,CACF,CAEA,uBACE,aAAqC,CAArC,oCACF,CAEA,sBACE,aAAwC,CAAxC,uCACF,CAEA,uBAUE,4BAA2D,CAA3D,0DAA2D,CAC3D,qBAAsB,CAHtB,qBAAsB,CADtB,WAAY,CAHZ,MAAO,CAHP,mBAAoB,CACpB,iBAAkB,CAGlB,KAAM,CAIN,yBAA0B,CAH1B,UAAW,CAHX,SAAwD,CAAxD,uDASF,CAEA,oDACE,4BAAmD,CAAnD,kDACF,CAEA,6BACE,wBAAqD,CAArD,oDACF,CAOA,uGAEE,oBAAgD,CAAhD,+CAAgD,CAChD,SAAwD,CAAxD,uDACF,CAEA,wEAEE,wBAA6D,CAA7D,4DACF,CAEA,uGAEE,oBAAgD,CAAhD,+CAAgD,CAChD,SAAwD,CAAxD,uDACF,CAGA,yBAEE,cAAe,CADf,WAAmD,CAAnD,kDAAmD,CAEnD,mBACF,CAEA,sBACE,wBAAqD,CAArD,oDACF,CAEA,yEACE,4BAA0D,CAA1D,yDAA0D,CAC1D,SAA8D,CAA9D,6DACF,CAGA,sBACE,YACF,CAKA,gGAEE,oBAA8C,CAA9C,6CAA8C,CAC9C,SAAuD,CAAvD,sDACF,CAMA,uFAEE,eACF,CAMA,kCACE,mBACF,CAMA,kDACE,cAAe,CACf,iBACF,CAMA,sCACE,SAAsD,CAAtD,qDACF,CAMA,+CAEE,cAAe,CADf,YAEF,CAEA,gOAKE,eACF,CAEA,0LAGE,4BAA6B,CAD7B,yBAEF,CAEA,oNAME,2BAA4B,CAD5B,wBAEF,CAEA,0DAGA",sourcesContent:[".FormField {\n  position: relative;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  min-height: var(--vkui--size_field_height--regular);\n  font-family: var(--vkui--font_family_base);\n  -webkit-tap-highlight-color: transparent;\n  isolation: isolate;\n  border-radius: var(--vkui--size_border_radius--regular);\n}\n\n.FormField--sizeY-compact {\n  min-height: var(--vkui--size_field_height--compact);\n}\n\n@media (--sizeY-compact) {\n  .FormField--sizeY-none {\n    min-height: var(--vkui--size_field_height--compact);\n  }\n}\n\n/* stylelint-disable-next-line vkui/atomic */\n.FormField > * {\n  border-radius: inherit;\n  z-index: var(--vkui_internal--z_index_form_field_element);\n}\n\n.FormField__before,\n.FormField__after {\n  position: relative;\n  z-index: var(--vkui_internal--z_index_form_field_side);\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  flex-shrink: 0;\n  min-width: var(--vkui--size_field_height--regular);\n  height: 100%;\n  color: var(--vkui--color_icon_secondary);\n}\n\n.FormField--sizeY-compact .FormField__before,\n.FormField--sizeY-compact .FormField__after {\n  min-width: var(--vkui--size_field_height--compact);\n  height: var(--vkui--size_field_height--compact);\n}\n\n@media (--sizeY-compact) {\n  .FormField--sizeY-none .FormField__before,\n  .FormField--sizeY-none .FormField__after {\n    min-width: var(--vkui--size_field_height--compact);\n    height: var(--vkui--size_field_height--compact);\n  }\n}\n\n.FormField__before {\n  color: var(--vkui--color_icon_accent);\n}\n\n.FormField__after {\n  color: var(--vkui--color_icon_secondary);\n}\n\n.FormField__border {\n  pointer-events: none;\n  position: absolute;\n  z-index: var(--vkui_internal--z_index_form_field_border);\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  transform-origin: left top;\n  border: var(--vkui_internal--thin_border) solid transparent;\n  border-radius: inherit;\n}\n\n.FormField--mode-default .FormField__border {\n  border-color: var(--vkui--color_field_border_alpha);\n}\n\n.FormField--mode-default {\n  background-color: var(--vkui--color_field_background);\n}\n\n/**\n * [start]\n * CMP:\n * FormItem\n */\n.FormItem--status-error .FormField__border,\n.FormField--status-error .FormField__border {\n  border-color: var(--vkui--color_stroke_negative);\n  z-index: var(--vkui_internal--z_index_form_field_status);\n}\n\n.FormItem--status-error .FormField,\n.FormField--status-error {\n  background-color: var(--vkui--color_background_negative_tint);\n}\n\n.FormItem--status-valid .FormField__border,\n.FormField--status-valid .FormField__border {\n  border-color: var(--vkui--color_stroke_positive);\n  z-index: var(--vkui_internal--z_index_form_field_status);\n}\n/* [end] */\n\n.FormField--disabled {\n  opacity: var(--vkui--opacity_disable_accessibility);\n  cursor: default;\n  pointer-events: none;\n}\n\n.FormField--hover {\n  background-color: var(--vkui--color_field_background);\n}\n\n.FormField--mode-default.FormField--hover .FormField__border {\n  border-color: var(--vkui--color_field_border_alpha--hover);\n  z-index: var(--vkui_internal--z_index_form_field_border_hover);\n}\n\n/* stylelint-disable-next-line vkui/atomic */\n.FormField *:focus {\n  outline: none;\n}\n\n/**\n * FIXME: необходимо заменить на `useFocusVisible()`\n */\n.FormField:focus-within .FormField__border,\n.FormField *:focus ~ .FormField__border {\n  border-color: var(--vkui--color_stroke_accent);\n  z-index: var(--vkui_internal--z_index_form_field_focus);\n}\n\n/**\n * CMP:\n * ModalCardBase\n */\n.ModalCardBase__header + .FormField,\n.ModalCardBase__subheader + .FormField {\n  margin-top: 16px;\n}\n\n/**\n * CMP:\n * Select\n */\n.Select .FormField__after {\n  pointer-events: none;\n}\n\n/**\n * CMP:\n * CalendarHeader\n */\n.CalendarHeader__picker .FormField__after {\n  min-width: 12px;\n  padding-right: 8px;\n}\n\n/**\n * CMP:\n * ChipsInput\n */\n.ChipsInput .FormField__after {\n  z-index: var(--vkui_internal--z_index_form_field_side);\n}\n\n/**\n * CMP:\n * FormLayoutGroup\n */\n.FormLayoutGroup--segmented .FormField {\n  z-index: auto;\n  isolation: auto;\n}\n\n.FormLayoutGroup--segmented > .FormItem:not(:first-of-type):not(:last-of-type) .FormField,\n.FormLayoutGroup--segmented\n  .Removable__content\n  > .FormItem:not(:first-of-type):not(:last-of-type)\n  .FormField {\n  border-radius: 0;\n}\n\n.FormLayoutGroup--segmented > *:first-of-type:not(:last-of-type) .FormField,\n.FormLayoutGroup--segmented .Removable__content > *:first-of-type:not(:last-of-type) .FormField {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.FormLayoutGroup--segmented > .FormItem:not(:first-of-type):last-of-type .FormField,\n.FormLayoutGroup--segmented\n  .Removable__content\n  > .FormItem:not(:first-of-type):last-of-type\n  .FormField {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.FormField--mode-plain,\n.FormField--status-default {\n  /* Пустой класс для CSS Modules (см. CONTRIBUTING.md)  */\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={FormField:"vkuiFormField","FormField--sizeY-compact":"vkuiFormField--sizeY-compact","FormField--sizeY-none":"vkuiFormField--sizeY-none",FormField__after:"vkuiFormField__after",FormField__before:"vkuiFormField__before",FormField__border:"vkuiFormField__border","FormField--mode-default":"vkuiFormField--mode-default","FormField--status-error":"vkuiFormField--status-error","FormItem--status-error":"vkuiFormItem--status-error","FormField--status-valid":"vkuiFormField--status-valid","FormItem--status-valid":"vkuiFormItem--status-valid","FormField--disabled":"vkuiFormField--disabled","FormField--hover":"vkuiFormField--hover",ModalCardBase__header:"vkuiModalCardBase__header",ModalCardBase__subheader:"vkuiModalCardBase__subheader",Select:"vkuiSelect",CalendarHeader__picker:"vkuiCalendarHeader__picker",ChipsInput:"vkuiChipsInput","FormLayoutGroup--segmented":"vkuiFormLayoutGroup--segmented",Removable__content:"vkuiRemovable__content",FormItem:"vkuiFormItem","FormField--mode-plain":"vkuiFormField--mode-plain","FormField--status-default":"vkuiFormField--status-default"},__webpack_exports__.Z=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./src/components/Input/Input.module.css":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".vkuiInput{font-size:16px;line-height:20px;position:relative}.vkuiInput--align-center .vkuiInput__el{text-align:center}.vkuiInput--align-right .vkuiInput__el{text-align:right}.vkuiInput__el{align-self:stretch;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:none;border-radius:inherit;box-shadow:none;box-sizing:border-box;color:#000;color:var(--vkui--color_text_primary);display:block;font-family:inherit;font-size:16px;font-size:var(--vkui--font_text--font_size--regular);font-weight:400;font-weight:var(--vkui--font_text--font_weight--regular);line-height:20px;line-height:var(--vkui--font_text--line_height--regular);margin:0;padding:0 12px;position:relative;text-overflow:ellipsis;width:100%;z-index:1;z-index:var(--vkui_internal--z_index_form_field_element)}.vkuiInput--sizeY-compact .vkuiInput__el{font-size:15px;font-size:var(--vkui--font_text--font_size--compact);line-height:20px;line-height:var(--vkui--font_text--line_height--compact)}.vkuiInput--hasBefore .vkuiInput__el{padding-left:0}.vkuiInput--hasAfter .vkuiInput__el{padding-right:0}@media (pointer:fine) and (min-width:768px),not (min-height:415px){.vkuiInput--sizeY-none .vkuiInput__el{font-size:15px;font-size:var(--vkui--font_text--font_size--compact);line-height:20px;line-height:var(--vkui--font_text--line_height--compact)}}.vkuiInput__el:disabled{opacity:.64;opacity:var(--vkui--opacity_disable_accessibility)}.vkuiInput__el::-webkit-input-placeholder{color:#818c99;color:var(--vkui--color_text_secondary);opacity:1}.vkuiInput__el::-moz-placeholder{color:#818c99;color:var(--vkui--color_text_secondary);opacity:1}.vkuiInput__el::-ms-input-placeholder{color:#818c99;color:var(--vkui--color_text_secondary);opacity:1}.vkuiInput__el::placeholder{color:#818c99;color:var(--vkui--color_text_secondary);opacity:1}.vkuiInput__el:disabled::-webkit-input-placeholder{color:#818c99;color:var(--vkui--color_text_secondary)}.vkuiInput__el:disabled::-moz-placeholder{color:#818c99;color:var(--vkui--color_text_secondary)}.vkuiInput__el:disabled::-ms-input-placeholder{color:#818c99;color:var(--vkui--color_text_secondary)}.vkuiInput__el:disabled::placeholder{color:#818c99;color:var(--vkui--color_text_secondary)}.vkuiInput--align-left{}","",{version:3,sources:["webpack://./src/components/Input/Input.module.css"],names:[],mappings:"AAAA,WAGE,cAAe,CADf,gBAAiB,CADjB,iBAGF,CAEA,wCACE,iBACF,CAEA,uCACE,gBACF,CAEA,eACE,kBAAmB,CAQnB,uBAAgB,CAAhB,oBAAgB,CAAhB,eAAgB,CAUhB,sBAAuB,CAZvB,WAAY,CACZ,qBAAsB,CAFtB,eAAgB,CADhB,qBAAsB,CAUtB,UAAsC,CAAtC,qCAAsC,CAXtC,aAAc,CAOd,mBAAoB,CAEpB,cAAqD,CAArD,oDAAqD,CADrD,eAAyD,CAAzD,wDAAyD,CAEzD,gBAAyD,CAAzD,wDAAyD,CAZzD,QAAS,CAcT,cAAe,CACf,iBAAkB,CAPlB,sBAAuB,CAPvB,UAAW,CAeX,SAAyD,CAAzD,wDAEF,CAEA,yCACE,cAAqD,CAArD,oDAAqD,CACrD,gBAAyD,CAAzD,wDACF,CAEA,qCACE,cACF,CAEA,oCACE,eACF,CAEA,mEACE,sCACE,cAAqD,CAArD,oDAAqD,CACrD,gBAAyD,CAAzD,wDACF,CACF,CAEA,wBACE,WAAmD,CAAnD,kDACF,CAEA,0CACE,aAAwC,CAAxC,uCAAwC,CAExC,SACF,CAJA,iCACE,aAAwC,CAAxC,uCAAwC,CAExC,SACF,CAJA,sCACE,aAAwC,CAAxC,uCAAwC,CAExC,SACF,CAJA,4BACE,aAAwC,CAAxC,uCAAwC,CAExC,SACF,CAEA,mDACE,aAAwC,CAAxC,uCACF,CAFA,0CACE,aAAwC,CAAxC,uCACF,CAFA,+CACE,aAAwC,CAAxC,uCACF,CAFA,qCACE,aAAwC,CAAxC,uCACF,CAEA,uBAEA",sourcesContent:[".Input {\n  position: relative;\n  line-height: 20px;\n  font-size: 16px;\n}\n\n.Input--align-center .Input__el {\n  text-align: center;\n}\n\n.Input--align-right .Input__el {\n  text-align: right;\n}\n\n.Input__el {\n  align-self: stretch;\n  margin: 0;\n  width: 100%;\n  display: block;\n  box-sizing: border-box;\n  box-shadow: none;\n  border: none;\n  border-radius: inherit;\n  appearance: none;\n  text-overflow: ellipsis;\n  font-family: inherit;\n  font-weight: var(--vkui--font_text--font_weight--regular);\n  font-size: var(--vkui--font_text--font_size--regular);\n  line-height: var(--vkui--font_text--line_height--regular);\n  color: var(--vkui--color_text_primary);\n  padding: 0 12px;\n  position: relative;\n  z-index: var(--vkui_internal--z_index_form_field_element);\n  background: transparent;\n}\n\n.Input--sizeY-compact .Input__el {\n  font-size: var(--vkui--font_text--font_size--compact);\n  line-height: var(--vkui--font_text--line_height--compact);\n}\n\n.Input--hasBefore .Input__el {\n  padding-left: 0;\n}\n\n.Input--hasAfter .Input__el {\n  padding-right: 0;\n}\n\n@media (--sizeY-compact) {\n  .Input--sizeY-none .Input__el {\n    font-size: var(--vkui--font_text--font_size--compact);\n    line-height: var(--vkui--font_text--line_height--compact);\n  }\n}\n\n.Input__el:disabled {\n  opacity: var(--vkui--opacity_disable_accessibility);\n}\n\n.Input__el::placeholder {\n  color: var(--vkui--color_text_secondary);\n  /* Для Firefox */\n  opacity: 1;\n}\n\n.Input__el:disabled::placeholder {\n  color: var(--vkui--color_text_secondary);\n}\n\n.Input--align-left {\n  /* Пустой класс для CSS Modules (см. CONTRIBUTING.md)  */\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Input:"vkuiInput","Input--align-center":"vkuiInput--align-center",Input__el:"vkuiInput__el","Input--align-right":"vkuiInput--align-right","Input--sizeY-compact":"vkuiInput--sizeY-compact","Input--hasBefore":"vkuiInput--hasBefore","Input--hasAfter":"vkuiInput--hasAfter","Input--sizeY-none":"vkuiInput--sizeY-none","Input--align-left":"vkuiInput--align-left"},__webpack_exports__.Z=___CSS_LOADER_EXPORT___}}]);