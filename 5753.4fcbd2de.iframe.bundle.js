"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[5753],{"./src/components/Checkbox/Checkbox.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{X:function(){return Checkbox}});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../node_modules/react/index.js"),Tappable=__webpack_require__("./src/components/Tappable/Tappable.tsx"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),lib_platform=__webpack_require__("./src/lib/platform.ts"),SvgIcon=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/SvgIcon.js"),check_box_on=(0,SvgIcon.D)("Icon20CheckBoxOn","check_box_on_20","0 0 20 20",'<symbol viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" id="check_box_on_20"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.436 4.184C2 5.04 2 6.16 2 8.4v3.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 18 6.16 18 8.4 18h3.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C18 14.96 18 13.84 18 11.6V8.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C14.96 2 13.84 2 11.6 2H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748Zm12.2 3.803a.9.9 0 1 0-1.272-1.274l-4.673 4.665-2.055-2.052A.9.9 0 0 0 5.364 10.6l2.691 2.687a.9.9 0 0 0 1.272 0l5.309-5.3Z" fill="currentColor" /></symbol>',20,20,!1,void 0),_24_check_box_on=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/24/check_box_on.js"),check_box_off=(0,SvgIcon.D)("Icon20CheckBoxOff","check_box_off_20","0 0 20 20",'<symbol viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" id="check_box_off_20"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.046 2.534C4.788 2.138 5.517 2 7.128 2h5.744c1.61 0 2.34.138 3.082.534.65.348 1.164.862 1.512 1.512.396.742.534 1.471.534 3.082v5.744c0 1.61-.138 2.34-.534 3.082a3.644 3.644 0 0 1-1.512 1.512c-.742.396-1.472.534-3.082.534H7.128c-1.61 0-2.34-.138-3.082-.534a3.644 3.644 0 0 1-1.512-1.512C2.138 15.212 2 14.482 2 12.872V7.128c0-1.61.138-2.34.534-3.082a3.645 3.645 0 0 1 1.512-1.512Zm3.082.966c-1.531 0-1.962.136-2.374.357a2.145 2.145 0 0 0-.897.897c-.22.412-.357.843-.357 2.374v5.744c0 1.531.136 1.962.357 2.374.208.389.508.69.897.897.412.22.843.357 2.374.357h5.744c1.531 0 1.962-.136 2.374-.357.389-.208.69-.508.897-.897.22-.412.357-.843.357-2.374V7.128c0-1.531-.136-1.962-.357-2.374a2.145 2.145 0 0 0-.897-.897c-.412-.22-.843-.357-2.374-.357H7.128Z" fill="currentColor" /></symbol>',20,20,!1,void 0),_24_check_box_off=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/24/check_box_off.js"),check_box_indetermanate=(0,SvgIcon.D)("Icon20CheckBoxIndetermanate","check_box_indetermanate_20","0 0 20 20",'<symbol fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" id="check_box_indetermanate_20"><path clip-rule="evenodd" d="M2 8.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C5.04 2 6.16 2 8.4 2h3.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C18 5.04 18 6.16 18 8.4v3.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C14.96 18 13.84 18 11.6 18H8.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C2 14.96 2 13.84 2 11.6zm4.4.7a.9.9 0 1 0 0 1.8h7.2a.9.9 0 1 0 0-1.8z" fill="currentColor" fill-rule="evenodd" /></symbol>',20,20,!1,void 0),usePlatform=__webpack_require__("./src/hooks/usePlatform.ts"),Footnote=__webpack_require__("./src/components/Typography/Footnote/Footnote.tsx"),getSizeYClassName=__webpack_require__("./src/helpers/getSizeYClassName.ts"),useAdaptivity=__webpack_require__("./src/hooks/useAdaptivity.ts"),useExternRef=__webpack_require__("./src/hooks/useExternRef.ts"),useAdaptivityConditionalRender=__webpack_require__("./src/hooks/useAdaptivityConditionalRender/useAdaptivityConditionalRender.tsx"),VisuallyHiddenInput=__webpack_require__("./src/components/VisuallyHiddenInput/VisuallyHiddenInput.tsx"),warnOnce=__webpack_require__("./src/lib/warnOnce.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Checkbox_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./src/components/Checkbox/Checkbox.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Checkbox_module.Z,options);var Checkbox_Checkbox_module=Checkbox_module.Z&&Checkbox_module.Z.locals?Checkbox_module.Z.locals:void 0,_excluded=["children","className","style","getRootRef","getRef","description","indeterminate","defaultIndeterminate","onChange"],Checkbox=((0,warnOnce.O)("Checkbox"),function Checkbox(_ref){var children=_ref.children,className=_ref.className,style=_ref.style,getRootRef=_ref.getRootRef,getRef=_ref.getRef,description=_ref.description,indeterminate=_ref.indeterminate,defaultIndeterminate=_ref.defaultIndeterminate,onChange=_ref.onChange,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded),inputRef=(0,useExternRef.Q)(getRef),platform=(0,usePlatform.F)(),sizeY=(0,useAdaptivity.g)().sizeY,adaptiveSizeY=(0,useAdaptivityConditionalRender.m)().sizeY;react.useEffect((function(){var indeterminateValue=void 0===indeterminate?defaultIndeterminate:indeterminate;inputRef.current&&(inputRef.current.indeterminate=Boolean(indeterminateValue))}),[defaultIndeterminate,indeterminate,inputRef]);var handleChange=react.useCallback((function(event){void 0!==defaultIndeterminate&&void 0===indeterminate&&void 0===restProps.checked&&inputRef.current&&(inputRef.current.indeterminate=!1),void 0!==indeterminate&&inputRef.current&&(inputRef.current.indeterminate=indeterminate),onChange&&onChange(event)}),[defaultIndeterminate,indeterminate,restProps.checked,onChange,inputRef]);return react.createElement(Tappable.KR,{Component:"label",className:(0,es6.AK)(Checkbox_Checkbox_module.Checkbox,platform===lib_platform.t.VKCOM&&Checkbox_Checkbox_module["Checkbox--vkcom"],(0,getSizeYClassName.d)(Checkbox_Checkbox_module.Checkbox,sizeY),!((0,es6.p7)(children)||(0,es6.p7)(description))&&Checkbox_Checkbox_module["Checkbox--simple"],className),style:style,disabled:restProps.disabled,activeEffectDelay:platform===lib_platform.t.IOS?100:Tappable.Kp,getRootRef:getRootRef},react.createElement(VisuallyHiddenInput.b,(0,esm_extends.Z)({},restProps,{onChange:handleChange,type:"checkbox",className:Checkbox_Checkbox_module.Checkbox__input,getRef:inputRef})),react.createElement("div",{className:(0,es6.AK)(Checkbox_Checkbox_module.Checkbox__icon,Checkbox_Checkbox_module["Checkbox__icon--on"])},platform===lib_platform.t.VKCOM?react.createElement(check_box_on,null):react.createElement(react.Fragment,null,adaptiveSizeY.compact&&react.createElement(check_box_on,{className:adaptiveSizeY.compact.className}),adaptiveSizeY.regular&&react.createElement(_24_check_box_on.Z,{className:adaptiveSizeY.regular.className}))),react.createElement("div",{className:(0,es6.AK)(Checkbox_Checkbox_module.Checkbox__icon,Checkbox_Checkbox_module["Checkbox__icon--off"])},platform===lib_platform.t.VKCOM?react.createElement(check_box_off,null):react.createElement(react.Fragment,null,adaptiveSizeY.compact&&react.createElement(check_box_off,{className:adaptiveSizeY.compact.className}),adaptiveSizeY.regular&&react.createElement(_24_check_box_off.Z,{className:adaptiveSizeY.regular.className}))),react.createElement("div",{className:(0,es6.AK)(Checkbox_Checkbox_module.Checkbox__icon,Checkbox_Checkbox_module["Checkbox__icon--indeterminate"])},platform===lib_platform.t.VKCOM?react.createElement(check_box_indetermanate,{width:20,height:20}):react.createElement(react.Fragment,null,adaptiveSizeY.compact&&react.createElement(check_box_indetermanate,{className:adaptiveSizeY.compact.className,width:20,height:20}),adaptiveSizeY.regular&&react.createElement(check_box_indetermanate,{className:adaptiveSizeY.regular.className,width:24,height:24}))),react.createElement("div",{className:Checkbox_Checkbox_module.Checkbox__content},react.createElement("div",{className:Checkbox_Checkbox_module.Checkbox__children},children),(0,es6.p7)(description)&&react.createElement(Footnote.w,{className:Checkbox_Checkbox_module.Checkbox__description},description)))});try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},indeterminate:{defaultValue:null,description:"",name:"indeterminate",required:!1,type:{name:"boolean"}},defaultIndeterminate:{defaultValue:null,description:"",name:"defaultIndeterminate",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLLabelElement>"}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLInputElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/Checkbox.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/VisuallyHiddenInput/VisuallyHiddenInput.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{b:function(){return VisuallyHiddenInput}});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),VisuallyHiddenInput_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./src/components/VisuallyHiddenInput/VisuallyHiddenInput.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(VisuallyHiddenInput_module.Z,options);var VisuallyHiddenInput_VisuallyHiddenInput_module=VisuallyHiddenInput_module.Z&&VisuallyHiddenInput_module.Z.locals?VisuallyHiddenInput_module.Z.locals:void 0,_excluded=["getRef","className"],VisuallyHiddenInput=function VisuallyHiddenInput(_ref){var getRef=_ref.getRef,className=_ref.className,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded);return react.createElement("input",(0,esm_extends.Z)({},restProps,{className:(0,es6.AK)(VisuallyHiddenInput_VisuallyHiddenInput_module.VisuallyHiddenInput,className),ref:getRef}))};try{VisuallyHiddenInput.displayName="VisuallyHiddenInput",VisuallyHiddenInput.__docgenInfo={description:"",displayName:"VisuallyHiddenInput",props:{getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLInputElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VisuallyHiddenInput/VisuallyHiddenInput.tsx#VisuallyHiddenInput"]={docgenInfo:VisuallyHiddenInput.__docgenInfo,name:"VisuallyHiddenInput",path:"src/components/VisuallyHiddenInput/VisuallyHiddenInput.tsx#VisuallyHiddenInput"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/@vkontakte/icons/dist/es6/24/check_box_off.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _SvgIcon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/SvgIcon.js");__webpack_exports__.Z=(0,_SvgIcon__WEBPACK_IMPORTED_MODULE_0__.D)("Icon24CheckBoxOff","check_box_off_24","0 0 24 24",'<symbol fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="check_box_off_24"><path d="M16.872 2c1.783 0 2.43.186 3.082.534.651.349 1.163.86 1.512 1.512S22 5.345 22 7.128v9.744c0 1.783-.186 2.43-.534 3.082a3.635 3.635 0 0 1-1.512 1.512c-.652.348-1.299.534-3.082.534H7.128c-1.783 0-2.43-.186-3.082-.534s-1.163-.86-1.512-1.512C2.186 19.302 2 18.655 2 16.872V7.128c0-1.783.186-2.43.534-3.082a3.635 3.635 0 0 1 1.512-1.512C4.698 2.186 5.345 2 7.128 2zm.564 2H6.564c-.892 0-1.215.093-1.54.267-.327.174-.583.43-.757.756-.174.326-.267.65-.267 1.54v10.873c0 .892.093 1.215.267 1.54.174.327.43.583.756.757.326.174.65.267 1.54.267h10.873c.892 0 1.215-.093 1.54-.267.327-.174.583-.43.757-.756.174-.326.267-.65.267-1.54V6.563c0-.892-.093-1.215-.267-1.54a1.817 1.817 0 0 0-.756-.757c-.326-.174-.65-.267-1.54-.267z" fill="currentColor" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/check_box_on.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _SvgIcon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/SvgIcon.js");__webpack_exports__.Z=(0,_SvgIcon__WEBPACK_IMPORTED_MODULE_0__.D)("Icon24CheckBoxOn","check_box_on_24","0 0 24 24",'<symbol fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="check_box_on_24"><path clip-rule="evenodd" d="M2.436 4.184C2 5.04 2 6.16 2 8.4v7.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 22 6.16 22 8.4 22h7.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C22 18.96 22 17.84 22 15.6V8.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C18.96 2 17.84 2 15.6 2H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748zm15.771 5.023a1 1 0 0 0-1.414-1.414L10 14.586l-2.793-2.793a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0z" fill="currentColor" fill-rule="evenodd" /></symbol>',24,24,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./src/components/Checkbox/Checkbox.module.css":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".vkuiCheckbox{align-items:center;display:flex;font-family:VK Sans Text,-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_family_base);justify-content:flex-start;min-height:44px;min-height:var(--vkui--size_field_height--regular);min-width:44px;min-width:var(--vkui--size_field_height--regular);padding:0 16px;padding:0 var(--vkui--size_base_padding_horizontal--regular)}.vkuiFormItem .vkuiCheckbox{box-sizing:initial;margin:0 calc(-1 * 16px);margin:0 calc(-1 * var(--vkui--size_base_padding_horizontal--regular));width:100%}.vkuiCheckbox__icon{flex-shrink:0;margin-right:12px}.vkuiCheckbox__icon--indeterminate,.vkuiCheckbox__icon--on{color:#2688eb;color:var(--vkui--color_icon_accent);display:none}.vkuiCheckbox__icon--off{color:#b8c1cc;color:var(--vkui--color_icon_tertiary)}.vkuiCheckbox__content{color:#000;color:var(--vkui--color_text_primary);flex-grow:1;font-weight:400;font-weight:var(--vkui--font_weight_accent3);word-break:break-word}.vkuiCheckbox--sizeY-regular:not(.vkuiCheckbox--vkcom) .vkuiCheckbox__content{font-size:16px;font-size:var(--vkui--font_headline1--font_size--regular);line-height:20px;line-height:var(--vkui--font_headline1--line_height--regular)}@media (not (min-width:768px)) and (min-height:415px),(pointer:coarse) and (min-height:415px),(pointer:none) and (min-height:415px){.vkuiCheckbox--sizeY-none:not(.vkuiCheckbox--vkcom) .vkuiCheckbox__content{font-size:16px;font-size:var(--vkui--font_headline1--font_size--regular);line-height:20px;line-height:var(--vkui--font_headline1--line_height--regular)}}.vkuiCheckbox--sizeY-compact .vkuiCheckbox__content,.vkuiCheckbox--vkcom .vkuiCheckbox__content{font-size:15px;font-size:var(--vkui--font_text--font_size--compact);line-height:20px;line-height:var(--vkui--font_text--line_height--compact)}@media (pointer:fine) and (min-width:768px),not (min-height:415px){.vkuiCheckbox--sizeY-none .vkuiCheckbox__content{font-size:15px;font-size:var(--vkui--font_text--font_size--compact);line-height:20px;line-height:var(--vkui--font_text--line_height--compact)}}.vkuiCheckbox__description{color:#818c99;color:var(--vkui--color_text_secondary);display:block;margin-bottom:12px;margin-top:2px}.vkuiCheckbox__children{margin-top:12px}.vkuiCheckbox__children:last-child{margin-bottom:12px}.vkuiCheckbox__input:checked~.vkuiCheckbox__icon--on{display:flex}.vkuiCheckbox__input:checked~.vkuiCheckbox__icon--off,.vkuiCheckbox__input:indeterminate~.vkuiCheckbox__icon--indeterminate{display:none}.vkuiCheckbox__input:indeterminate~.vkuiCheckbox__icon--indeterminate{display:flex}.vkuiCheckbox__input:indeterminate~.vkuiCheckbox__icon--off,.vkuiCheckbox__input:indeterminate~.vkuiCheckbox__icon--on{display:none}.vkuiCheckbox__input[disabled]~*{opacity:.64;opacity:var(--vkui--opacity_disable_accessibility)}.vkuiCheckbox--sizeY-compact{min-height:36px;min-height:var(--vkui--size_field_height--compact);min-width:36px;min-width:var(--vkui--size_field_height--compact)}.vkuiCheckbox--sizeY-compact .vkuiCheckbox__children{margin-top:8px}.vkuiCheckbox--sizeY-compact .vkuiCheckbox__children:last-child,.vkuiCheckbox--sizeY-compact .vkuiCheckbox__description{margin-bottom:8px}@media (pointer:fine) and (min-width:768px),not (min-height:415px){.vkuiCheckbox--sizeY-none{min-height:36px;min-height:var(--vkui--size_field_height--compact);min-width:36px;min-width:var(--vkui--size_field_height--compact)}.vkuiCheckbox--sizeY-none .vkuiCheckbox__children{margin-top:8px}.vkuiCheckbox--sizeY-none .vkuiCheckbox__children:last-child,.vkuiCheckbox--sizeY-none .vkuiCheckbox__description{margin-bottom:8px}}.vkuiCheckbox--simple{align-items:center;border-radius:50%;display:flex;justify-content:center;padding:0}.vkuiCheckbox--simple .vkuiCheckbox__content{display:none}.vkuiCheckbox--simple .vkuiCheckbox__icon{margin:0}","",{version:3,sources:["webpack://./src/components/Checkbox/Checkbox.module.css"],names:[],mappings:"AAAA,cAEE,kBAAmB,CADnB,YAAa,CAMb,iFAA0C,CAA1C,yCAA0C,CAJ1C,0BAA2B,CAG3B,eAAmD,CAAnD,kDAAmD,CADnD,cAAkD,CAAlD,iDAAkD,CADlD,cAA6D,CAA7D,4DAIF,CAEA,4BAEE,kBAAuB,CACvB,wBAAuE,CAAvE,sEAAuE,CAFvE,UAGF,CAEA,oBACE,aAAc,CACd,iBACF,CAOA,2DACE,aAAqC,CAArC,oCAAqC,CACrC,YACF,CAEA,yBACE,aAAuC,CAAvC,sCACF,CAEA,uBAEE,UAAsC,CAAtC,qCAAsC,CADtC,WAAY,CAGZ,eAA6C,CAA7C,4CAA6C,CAD7C,qBAEF,CAEA,8EACE,cAA0D,CAA1D,yDAA0D,CAC1D,gBAA8D,CAA9D,6DACF,CAEA,oIACE,2EACE,cAA0D,CAA1D,yDAA0D,CAC1D,gBAA8D,CAA9D,6DACF,CACF,CAEA,gGAEE,cAAqD,CAArD,oDAAqD,CACrD,gBAAyD,CAAzD,wDACF,CAEA,mEACE,iDACE,cAAqD,CAArD,oDAAqD,CACrD,gBAAyD,CAAzD,wDACF,CACF,CAEA,2BACE,aAAwC,CAAxC,uCAAwC,CACxC,aAAc,CACd,kBAAmB,CACnB,cACF,CAEA,wBACE,eACF,CAEA,mCACE,kBACF,CAEA,qDACE,YACF,CAEA,4HAEE,YACF,CAEA,sEACE,YACF,CAEA,uHAEE,YACF,CAEA,iCACE,WAAmD,CAAnD,kDACF,CAMA,6BAEE,eAAmD,CAAnD,kDAAmD,CADnD,cAAkD,CAAlD,iDAEF,CAEA,qDACE,cACF,CAMA,wHACE,iBACF,CAEA,mEACE,0BAEE,eAAmD,CAAnD,kDAAmD,CADnD,cAAkD,CAAlD,iDAEF,CAEA,kDACE,cACF,CAMA,kHACE,iBACF,CACF,CAEA,sBAGE,kBAAmB,CAEnB,iBAAkB,CAJlB,YAAa,CACb,sBAAuB,CAEvB,SAEF,CAEA,6CACE,YACF,CAEA,0CACE,QACF",sourcesContent:[".Checkbox {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 0 var(--vkui--size_base_padding_horizontal--regular);\n  min-width: var(--vkui--size_field_height--regular);\n  min-height: var(--vkui--size_field_height--regular);\n  font-family: var(--vkui--font_family_base);\n}\n\n.FormItem .Checkbox {\n  width: 100%;\n  box-sizing: content-box;\n  margin: 0 calc(-1 * var(--vkui--size_base_padding_horizontal--regular));\n}\n\n.Checkbox__icon {\n  flex-shrink: 0;\n  margin-right: 12px;\n}\n\n.Checkbox__icon--on {\n  color: var(--vkui--color_icon_accent);\n  display: none;\n}\n\n.Checkbox__icon--indeterminate {\n  color: var(--vkui--color_icon_accent);\n  display: none;\n}\n\n.Checkbox__icon--off {\n  color: var(--vkui--color_icon_tertiary);\n}\n\n.Checkbox__content {\n  flex-grow: 1;\n  color: var(--vkui--color_text_primary);\n  word-break: break-word;\n  font-weight: var(--vkui--font_weight_accent3);\n}\n\n.Checkbox--sizeY-regular:not(.Checkbox--vkcom) .Checkbox__content {\n  font-size: var(--vkui--font_headline1--font_size--regular);\n  line-height: var(--vkui--font_headline1--line_height--regular);\n}\n\n@media (--sizeY-regular) {\n  .Checkbox--sizeY-none:not(.Checkbox--vkcom) .Checkbox__content {\n    font-size: var(--vkui--font_headline1--font_size--regular);\n    line-height: var(--vkui--font_headline1--line_height--regular);\n  }\n}\n\n.Checkbox--vkcom .Checkbox__content,\n.Checkbox--sizeY-compact .Checkbox__content {\n  font-size: var(--vkui--font_text--font_size--compact);\n  line-height: var(--vkui--font_text--line_height--compact);\n}\n\n@media (--sizeY-compact) {\n  .Checkbox--sizeY-none .Checkbox__content {\n    font-size: var(--vkui--font_text--font_size--compact);\n    line-height: var(--vkui--font_text--line_height--compact);\n  }\n}\n\n.Checkbox__description {\n  color: var(--vkui--color_text_secondary);\n  display: block;\n  margin-bottom: 12px;\n  margin-top: 2px;\n}\n\n.Checkbox__children {\n  margin-top: 12px;\n}\n\n.Checkbox__children:last-child {\n  margin-bottom: 12px;\n}\n\n.Checkbox__input:checked ~ .Checkbox__icon--on {\n  display: flex;\n}\n\n.Checkbox__input:indeterminate ~ .Checkbox__icon--indeterminate,\n.Checkbox__input:checked ~ .Checkbox__icon--off {\n  display: none;\n}\n\n.Checkbox__input:indeterminate ~ .Checkbox__icon--indeterminate {\n  display: flex;\n}\n\n.Checkbox__input:indeterminate ~ .Checkbox__icon--on,\n.Checkbox__input:indeterminate ~ .Checkbox__icon--off {\n  display: none;\n}\n\n.Checkbox__input[disabled] ~ * {\n  opacity: var(--vkui--opacity_disable_accessibility);\n}\n\n/**\n * sizeY COMPACT\n */\n\n.Checkbox--sizeY-compact {\n  min-width: var(--vkui--size_field_height--compact);\n  min-height: var(--vkui--size_field_height--compact);\n}\n\n.Checkbox--sizeY-compact .Checkbox__children {\n  margin-top: 8px;\n}\n\n.Checkbox--sizeY-compact .Checkbox__children:last-child {\n  margin-bottom: 8px;\n}\n\n.Checkbox--sizeY-compact .Checkbox__description {\n  margin-bottom: 8px;\n}\n\n@media (--sizeY-compact) {\n  .Checkbox--sizeY-none {\n    min-width: var(--vkui--size_field_height--compact);\n    min-height: var(--vkui--size_field_height--compact);\n  }\n\n  .Checkbox--sizeY-none .Checkbox__children {\n    margin-top: 8px;\n  }\n\n  .Checkbox--sizeY-none .Checkbox__children:last-child {\n    margin-bottom: 8px;\n  }\n\n  .Checkbox--sizeY-none .Checkbox__description {\n    margin-bottom: 8px;\n  }\n}\n\n.Checkbox--simple {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  border-radius: 50%;\n}\n\n.Checkbox--simple .Checkbox__content {\n  display: none;\n}\n\n.Checkbox--simple .Checkbox__icon {\n  margin: 0;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Checkbox:"vkuiCheckbox",FormItem:"vkuiFormItem",Checkbox__icon:"vkuiCheckbox__icon","Checkbox__icon--indeterminate":"vkuiCheckbox__icon--indeterminate","Checkbox__icon--on":"vkuiCheckbox__icon--on","Checkbox__icon--off":"vkuiCheckbox__icon--off",Checkbox__content:"vkuiCheckbox__content","Checkbox--sizeY-regular":"vkuiCheckbox--sizeY-regular","Checkbox--vkcom":"vkuiCheckbox--vkcom","Checkbox--sizeY-none":"vkuiCheckbox--sizeY-none","Checkbox--sizeY-compact":"vkuiCheckbox--sizeY-compact",Checkbox__description:"vkuiCheckbox__description",Checkbox__children:"vkuiCheckbox__children",Checkbox__input:"vkuiCheckbox__input","Checkbox--simple":"vkuiCheckbox--simple"},__webpack_exports__.Z=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./src/components/VisuallyHiddenInput/VisuallyHiddenInput.module.css":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".vkuiVisuallyHiddenInput{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;opacity:0;overflow:hidden;position:absolute;white-space:nowrap}","",{version:3,sources:["webpack://./src/components/VisuallyHiddenInput/VisuallyHiddenInput.module.css"],names:[],mappings:"AAAA,yBAIE,kBAAmB,CACnB,4BAAqB,CAArB,oBAAqB,CAHrB,UAAW,CAKX,SAAU,CADV,eAAgB,CALhB,iBAAkB,CAElB,kBAKF",sourcesContent:[".VisuallyHiddenInput {\n  position: absolute;\n  height: 1px;\n  white-space: nowrap;\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  overflow: hidden;\n  opacity: 0;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={VisuallyHiddenInput:"vkuiVisuallyHiddenInput"},__webpack_exports__.Z=___CSS_LOADER_EXPORT___}}]);