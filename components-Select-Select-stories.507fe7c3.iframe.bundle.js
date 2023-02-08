"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[7531],{"./src/components/Select/Select.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:function(){return Playground},__namedExportsOrder:function(){return __namedExportsOrder}});var _babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_Select__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Select/Select.tsx"),_storybook_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/storybook/constants.ts"),_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/storybook/helpers.ts");__webpack_exports__.default={title:"Forms/Select",component:_Select__WEBPACK_IMPORTED_MODULE_1__.P,parameters:(0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.Z)({},_storybook_constants__WEBPACK_IMPORTED_MODULE_3__.tW),(0,_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__.c)("Forms")),_storybook_constants__WEBPACK_IMPORTED_MODULE_3__.nB)};var Playground=function Template(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Select__WEBPACK_IMPORTED_MODULE_1__.P,args)}.bind({});Playground.args={style:{width:300}},Playground.parameters=(0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.Z)({storySource:{source:"(args) => <Select {...args} />"}},Playground.parameters);var __namedExportsOrder=["Playground"]},"./src/components/NativeSelect/NativeSelect.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{p:function(){return NativeSelect}});var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),_DropdownIcon_DropdownIcon__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/components/DropdownIcon/DropdownIcon.tsx"),_FormField_FormField__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/FormField/FormField.tsx"),_helpers_getPlatformClassName__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/helpers/getPlatformClassName.ts"),_lib_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/lib/useIsomorphicLayoutEffect.ts"),_hooks_useEnsuredControl__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/hooks/useEnsuredControl.ts"),_hooks_useExternRef__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/hooks/useExternRef.ts"),_hooks_usePlatform__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/hooks/usePlatform.ts"),_hooks_useAdaptivity__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/hooks/useAdaptivity.ts"),_helpers_getSizeXClassName__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/helpers/getSizeXClassName.ts"),_helpers_getSizeYClassName__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/helpers/getSizeYClassName.ts"),_SelectTypography_SelectTypography__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./src/components/SelectTypography/SelectTypography.tsx"),_Select_Select_module_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Select/Select.module.css"),_excluded=["style","defaultValue","align","placeholder","children","className","getRef","getRootRef","disabled","multiline","selectType","status","onChange","value"],NativeSelect=function NativeSelect(_ref){var style=_ref.style,_ref$defaultValue=_ref.defaultValue,defaultValue=void 0===_ref$defaultValue?"":_ref$defaultValue,align=_ref.align,placeholder=_ref.placeholder,children=_ref.children,className=_ref.className,getRef=_ref.getRef,getRootRef=_ref.getRootRef,disabled=_ref.disabled,multiline=_ref.multiline,_ref$selectType=_ref.selectType,selectType=void 0===_ref$selectType?"default":_ref$selectType,status=_ref.status,onChangeProp=_ref.onChange,valueProp=_ref.value,restProps=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded),platform=(0,_hooks_usePlatform__WEBPACK_IMPORTED_MODULE_4__.F)(),_React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(""),_React$useState2=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__.Z)(_React$useState,2),title=_React$useState2[0],setTitle=_React$useState2[1],_React$useState3=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),_React$useState4=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__.Z)(_React$useState3,2),empty=_React$useState4[0],setEmpty=_React$useState4[1],_useEnsuredControl=(0,_hooks_useEnsuredControl__WEBPACK_IMPORTED_MODULE_6__.V)({defaultValue:defaultValue,disabled:disabled,onChange:onChangeProp,value:valueProp}),_useEnsuredControl2=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__.Z)(_useEnsuredControl,2),value=_useEnsuredControl2[0],onChange=_useEnsuredControl2[1],selectRef=(0,_hooks_useExternRef__WEBPACK_IMPORTED_MODULE_7__.Q)(getRef),_useAdaptivity=(0,_hooks_useAdaptivity__WEBPACK_IMPORTED_MODULE_8__.g)(),sizeX=_useAdaptivity.sizeX,sizeY=_useAdaptivity.sizeY;return(0,_lib_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_9__.L)((function(){var _selectRef$current,selectedOption=null===(_selectRef$current=selectRef.current)||void 0===_selectRef$current?void 0:_selectRef$current.options[selectRef.current.selectedIndex];selectedOption&&(setTitle(selectedOption.text),setEmpty(""===selectedOption.value&&null!=placeholder))}),[value,children]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormField_FormField__WEBPACK_IMPORTED_MODULE_10__.W,{Component:"label",className:(0,_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__.AK)(_Select_Select_module_css__WEBPACK_IMPORTED_MODULE_2__.Z.Select,(0,_helpers_getPlatformClassName__WEBPACK_IMPORTED_MODULE_11__.h)(_Select_Select_module_css__WEBPACK_IMPORTED_MODULE_2__.Z.Select,platform),empty&&_Select_Select_module_css__WEBPACK_IMPORTED_MODULE_2__.Z["Select--empty"],multiline&&_Select_Select_module_css__WEBPACK_IMPORTED_MODULE_2__.Z["Select--multiline"],align&&_Select_Select_module_css__WEBPACK_IMPORTED_MODULE_2__.Z["Select--align-".concat(align)],(0,_helpers_getSizeXClassName__WEBPACK_IMPORTED_MODULE_12__.q)(_Select_Select_module_css__WEBPACK_IMPORTED_MODULE_2__.Z.Select,sizeX),(0,_helpers_getSizeYClassName__WEBPACK_IMPORTED_MODULE_13__.d)(_Select_Select_module_css__WEBPACK_IMPORTED_MODULE_2__.Z.Select,sizeY),className),style:style,getRootRef:getRootRef,disabled:disabled,after:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DropdownIcon_DropdownIcon__WEBPACK_IMPORTED_MODULE_14__.K,null),status:status},react__WEBPACK_IMPORTED_MODULE_0__.createElement("select",(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_15__.Z)({},restProps,{disabled:disabled,className:_Select_Select_module_css__WEBPACK_IMPORTED_MODULE_2__.Z.Select__el,onChange:onChange,value:value,ref:selectRef}),placeholder&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:""},placeholder),children),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:_Select_Select_module_css__WEBPACK_IMPORTED_MODULE_2__.Z.Select__container},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SelectTypography_SelectTypography__WEBPACK_IMPORTED_MODULE_16__.S,{className:_Select_Select_module_css__WEBPACK_IMPORTED_MODULE_2__.Z.Select__title,selectType:selectType},title)))};try{NativeSelect.displayName="NativeSelect",NativeSelect.__docgenInfo={description:"",displayName:"NativeSelect",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},multiline:{defaultValue:null,description:"",name:"multiline",required:!1,type:{name:"boolean"}},selectType:{defaultValue:{value:"default"},description:"",name:"selectType",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"accent"'},{value:'"plain"'}]}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLSelectElement>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLLabelElement>"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"valid"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/NativeSelect/NativeSelect.tsx#NativeSelect"]={docgenInfo:NativeSelect.__docgenInfo,name:"NativeSelect",path:"src/components/NativeSelect/NativeSelect.tsx#NativeSelect"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Select/Select.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{P:function(){return Select}});var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_NativeSelect_NativeSelect__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/NativeSelect/NativeSelect.tsx"),_CustomSelect_CustomSelect__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/CustomSelect/CustomSelect.tsx"),_hooks_useAdaptivityHasPointer__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/hooks/useAdaptivityHasPointer.ts"),_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),_Select_module_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Select/Select.module.css"),_excluded=["children","options","popupDirection","renderOption","className"],Select=function Select(_ref){_ref.children;var _ref$options=_ref.options,options=void 0===_ref$options?[]:_ref$options,popupDirection=_ref.popupDirection,renderOption=_ref.renderOption,className=_ref.className,props=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded),hasPointer=(0,_hooks_useAdaptivityHasPointer__WEBPACK_IMPORTED_MODULE_4__.K)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,(void 0===hasPointer||hasPointer)&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CustomSelect_CustomSelect__WEBPACK_IMPORTED_MODULE_5__.A,(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({className:(0,_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__.AK)(_Select_module_css__WEBPACK_IMPORTED_MODULE_2__.Z.Select__custom,className),options:options,popupDirection:popupDirection,renderOption:renderOption},props)),(void 0===hasPointer||!hasPointer)&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NativeSelect_NativeSelect__WEBPACK_IMPORTED_MODULE_7__.p,(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({className:(0,_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__.AK)(_Select_module_css__WEBPACK_IMPORTED_MODULE_2__.Z.Select__native,className)},props),options.map((function(_ref2){var label=_ref2.label,value=_ref2.value;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:value,key:"".concat(value)},label)}))))};try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{searchable:{defaultValue:null,description:"Если `true`, то при клике на селект в нём появится текстовое поле для поиска по `options`. По умолчанию поиск\nпроизводится по `option.label`.",name:"searchable",required:!1,type:{name:"boolean"}},emptyText:{defaultValue:null,description:"Текст, который будет отображен, если приходит пустой `options`.",name:"emptyText",required:!1,type:{name:"string"}},onInputChange:{defaultValue:null,description:"> ⚠️ В v6 из возвращаемых типов будет удалён `CustomSelectOptionInterface[]`. Для кастомной фильтрации используйте\n> `filterFn`.",name:"onInputChange",required:!1,type:{name:"((e: ChangeEvent<Element>, options: CustomSelectOptionInterface[]) => void | CustomSelectOptionInterface[])"}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"CustomSelectOptionInterface[]"}},filterFn:{defaultValue:null,description:"Функция для кастомной фильтрации. По умолчанию поиск производится по `option.label`.",name:"filterFn",required:!1,type:{name:"false | ((value: string, option: CustomSelectOptionInterface, getOptionLabel?: ((option: Partial<CustomSelectOptionInterface>) => string)) => boolean)"}},popupDirection:{defaultValue:null,description:"",name:"popupDirection",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},renderOption:{defaultValue:null,description:"Рендер-проп для кастомного рендера опции.\nВ объекте аргумента приходят [свойства опции](https://vkcom.github.io/VKUI/#/CustomSelectOption?id=props)",name:"renderOption",required:!1,type:{name:"((props: CustomSelectOptionProps) => ReactNode)"}},renderDropdown:{defaultValue:null,description:"Рендер-проп для кастомного рендера содержимого дропдауна.\nВ `defaultDropdownContent` содержится список опций в виде скроллящегося блока.",name:"renderDropdown",required:!1,type:{name:"(({ defaultDropdownContent, }: { defaultDropdownContent: ReactNode; }) => ReactNode)"}},fetching:{defaultValue:null,description:'Если `true`, то в дропдауне вместо списка опций рисуется спиннер. При переданных `renderDropdown` и `fetching: true`\n"победит" `renderDropdown`.',name:"fetching",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"VoidFunction"}},onOpen:{defaultValue:null,description:"",name:"onOpen",required:!1,type:{name:"VoidFunction"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},dropdownOffsetDistance:{defaultValue:null,description:"",name:"dropdownOffsetDistance",required:!1,type:{name:"number"}},fixDropdownWidth:{defaultValue:null,description:"",name:"fixDropdownWidth",required:!1,type:{name:"boolean"}},forceDropdownPortal:{defaultValue:null,description:"",name:"forceDropdownPortal",required:!1,type:{name:"boolean"}},selectType:{defaultValue:null,description:"",name:"selectType",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"accent"'},{value:'"plain"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},multiline:{defaultValue:null,description:"",name:"multiline",required:!1,type:{name:"boolean"}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLSelectElement>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLLabelElement>"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"valid"'}]}},before:{defaultValue:null,description:"Добавляет иконку слева.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Добавляет иконку справа.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"after",required:!1,type:{name:"ReactNode"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"plain"'}]}},autoHideScrollbar:{defaultValue:null,description:"Скрывать ли ползунок скроллбара",name:"autoHideScrollbar",required:!1,type:{name:"boolean"}},autoHideScrollbarDelay:{defaultValue:null,description:"Через какое кол-во миллисекунд ползунок скроллбара скрывается",name:"autoHideScrollbarDelay",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"src/components/Select/Select.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Spinner/Spinner.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$:function(){return Spinner}});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),spinner=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/16/spinner.js"),_24_spinner=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/24/spinner.js"),_32_spinner=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/32/spinner.js"),_44_spinner=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/44/spinner.js"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Spinner_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./src/components/Spinner/Spinner.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Spinner_module.Z,options);var Spinner_Spinner_module=Spinner_module.Z&&Spinner_module.Z.locals?Spinner_module.Z.locals:void 0,_excluded=["size","aria-label","className"],Spinner=react.memo((function(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"regular":_ref$size,_ref$ariaLabel=_ref["aria-label"],ariaLabel=void 0===_ref$ariaLabel?"Загружается...":_ref$ariaLabel,className=_ref.className,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded),SpinnerIcon={small:spinner.Z,regular:_24_spinner.Z,medium:_32_spinner.Z,large:_44_spinner.Z}[size];return react.createElement("span",(0,esm_extends.Z)({role:"status","aria-label":ariaLabel},restProps,{className:(0,es6.AK)(Spinner_Spinner_module.Spinner,className)}),react.createElement(SpinnerIcon,{className:Spinner_Spinner_module.Spinner__self}))}));Spinner.displayName="Spinner";try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"regular"'},{value:'"medium"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/Spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/Spinner/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Typography/Footnote/Footnote.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{w:function(){return Footnote}});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Footnote_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./src/components/Typography/Footnote/Footnote.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Footnote_module.Z,options);var Footnote_Footnote_module=Footnote_module.Z&&Footnote_module.Z.locals?Footnote_module.Z.locals:void 0,_excluded=["className","children","weight","caps","Component"],Footnote=function Footnote(_ref){var className=_ref.className,children=_ref.children,weight=_ref.weight,caps=_ref.caps,_ref$Component=_ref.Component,Component=void 0===_ref$Component?"span":_ref$Component,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded);return react.createElement(Component,(0,esm_extends.Z)({},restProps,{className:(0,es6.AK)(className,Footnote_Footnote_module.Footnote,caps&&Footnote_Footnote_module["Footnote--caps"],weight&&Footnote_Footnote_module["Footnote--weight-".concat(weight)])}),children)};try{Footnote.displayName="Footnote",Footnote.__docgenInfo={description:"",displayName:"Footnote",props:{weight:{defaultValue:null,description:"Задаёт начертание шрифта отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},caps:{defaultValue:null,description:"",name:"caps",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Footnote/Footnote.tsx#Footnote"]={docgenInfo:Footnote.__docgenInfo,name:"Footnote",path:"src/components/Typography/Footnote/Footnote.tsx#Footnote"})}catch(__react_docgen_typescript_loader_error){}},"./src/helpers/getPlatformClassName.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{h:function(){return getPlatformClassName}});var _lib_platform__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/lib/platform.ts");function getPlatformClassName(base){var osname=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,_lib_platform__WEBPACK_IMPORTED_MODULE_0__.J)(),styles=arguments.length>2?arguments[2]:void 0,platformClassName="".concat(String(base),"--").concat(osname);return styles?styles[platformClassName]:platformClassName}},"./src/hooks/useAdaptivityHasPointer.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{K:function(){return useAdaptivityHasPointer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),_components_AdaptivityProvider_AdaptivityContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/AdaptivityProvider/AdaptivityContext.tsx"),_useIsClient__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/useIsClient.ts");function useAdaptivityHasPointer(){var deferDetect=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],_React$useContext=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_components_AdaptivityProvider_AdaptivityContext__WEBPACK_IMPORTED_MODULE_2__.s),hasPointerContext=_React$useContext.hasPointer,hasPointer=void 0===hasPointerContext?_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__.RX:hasPointerContext,isClient=(0,_useIsClient__WEBPACK_IMPORTED_MODULE_3__.O)(!deferDetect);if(isClient)return hasPointer}},"./src/hooks/useEnsuredControl.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{V:function(){return useEnsuredControl},q:function(){return useCustomEnsuredControl}});var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_excluded=["onChange","disabled"];function useEnsuredControl(_ref){var onChangeProp=_ref.onChange,disabled=_ref.disabled,_useCustomEnsuredCont=useCustomEnsuredControl((0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded)),_useCustomEnsuredCont2=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.Z)(_useCustomEnsuredCont,2),value=_useCustomEnsuredCont2[0],onChangeValue=_useCustomEnsuredCont2[1];return[value,react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(e){disabled||(onChangeValue(e.target.value),onChangeProp&&onChangeProp(e))}),[onChangeValue,onChangeProp,disabled])]}function useCustomEnsuredControl(_ref2){var disabled=_ref2.disabled,onChangeProp=_ref2.onChange,defaultValue=_ref2.defaultValue,value=_ref2.value,isControlled=void 0!==value,_React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultValue),_React$useState2=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.Z)(_React$useState,2),localValue=_React$useState2[0],setLocalValue=_React$useState2[1],onChange=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(v){disabled||(!isControlled&&setLocalValue(v),onChangeProp&&onChangeProp(v))}),[disabled,isControlled,onChangeProp]);return[isControlled?value:localValue,onChange]}},"./src/storybook/constants.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{R0:function(){return StringArg},nB:function(){return DisableCartesianParam},tW:function(){return CanvasFullLayout},uf:function(){return FigmaUrls}});var CanvasFullLayout={layout:"fullscreen",previewTabs:{"storybook/docs/panel":{hidden:!0}},viewMode:"story",centered:!0},DisableCartesianParam={cartesian:{disable:!0}},StringArg={control:{type:"text"}},FigmaUrls={ActionSheet:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=27%3A4&t=PMn6l8SzrfRRUSod-0",ActionSheetItem:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=27%3A4&t=PMn6l8SzrfRRUSod-0",Alert:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=146%3A0&t=PMn6l8SzrfRRUSod-0",ScreenSpinner:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=146%3A8&t=uhwIZneBQyQtx8Td-0",Snackbar:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=146%3A10&t=uhwIZneBQyQtx8Td-0",Typography:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=18802%3A108351&t=uhwIZneBQyQtx8Td-0",ModalCard:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=146%3A4&t=uhwIZneBQyQtx8Td-0",ModalPage:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=146%3A5&t=uhwIZneBQyQtx8Td-0",Epic:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=9374%3A63616&t=uhwIZneBQyQtx8Td-0",HorizontalCell:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=2121%3A114693&t=uhwIZneBQyQtx8Td-0",PanelHeader:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=27%3A0&t=uhwIZneBQyQtx8Td-0",Tabbar:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=27%3A1&t=uhwIZneBQyQtx8Td-0",Calendar:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=17935%3A102822&t=uhwIZneBQyQtx8Td-0",Forms:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=27%3A3&t=0HQxAeW7YFeDL2gn-0",Avatar:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=16667%3A66875&t=QIyBJwdYLsAmk3wb-0",Badge:"",Banner:"",Button:"",Card:"",CardGrid:"",Cell:"",CellButton:"",ContentCard:"",Counter:"",Footer:"",Gallery:"",Gradient:"",GridAvatar:"",Group:"",Header:"",MiniInfoCell:"",Pagination:"",Placeholder:"",Progress:"",Search:"",Separator:"",Spacing:"",SubnavigationBar:"",Switch:"",Tabs:"",UsersStack:""}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./src/components/Spinner/Spinner.module.css":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".vkuiSpinner{align-items:center;color:#818c99;color:var(--vkui--color_icon_medium);display:flex;height:100%;justify-content:center;width:100%}.vkuiSpinner__self{animation:vkui-rotator .7s linear infinite;animation:vkui-rotator var(--vkui_internal--duration) linear infinite;transform-origin:center}.vkuiSpinner__self svg{transform:scale(1)}.vkuiButton .vkuiSpinner,.vkuiPanelHeader .vkuiSpinner{color:currentColor}","",{version:3,sources:["webpack://./src/components/Spinner/Spinner.module.css"],names:[],mappings:"AAAA,aAIE,kBAAmB,CAEnB,aAAqC,CAArC,oCAAqC,CAHrC,YAAa,CADb,WAAY,CAGZ,sBAAuB,CAJvB,UAMF,CAEA,mBACE,0CAAsE,CAAtE,qEAAsE,CACtE,uBACF,CAEA,uBACE,kBACF,CAcA,uDACE,kBACF",sourcesContent:[".Spinner {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--vkui--color_icon_medium);\n}\n\n.Spinner__self {\n  animation: vkui-rotator var(--vkui_internal--duration) linear infinite;\n  transform-origin: center;\n}\n\n.Spinner__self svg {\n  transform: scale(1);\n}\n\n/**\n * PanelHeader\n */\n\n.PanelHeader .Spinner {\n  color: currentColor;\n}\n\n/**\n * Button\n */\n\n.Button .Spinner {\n  color: currentColor;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Spinner:"vkuiSpinner",Spinner__self:"vkuiSpinner__self","vkui-rotator":"vkui-rotator",Button:"vkuiButton",PanelHeader:"vkuiPanelHeader"},__webpack_exports__.Z=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./src/components/Typography/Footnote/Footnote.module.css":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".vkuiFootnote{display:block;font-family:VK Sans Text,-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_footnote--font_family--regular);font-size:13px;font-size:var(--vkui--font_footnote--font_size--regular);font-weight:400;font-weight:var(--vkui--font_footnote--font_weight--regular);line-height:16px;line-height:var(--vkui--font_footnote--line_height--regular);margin:0}.vkuiFootnote--caps{font-family:VK Sans Text,-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_footnote_caps--font_family--regular);font-size:13px;font-size:var(--vkui--font_footnote_caps--font_size--regular);font-weight:400;font-weight:var(--vkui--font_footnote_caps--font_weight--regular);line-height:16px;line-height:var(--vkui--font_footnote_caps--line_height--regular);text-transform:uppercase}.vkuiFootnote--weight-1{font-weight:600;font-weight:var(--vkui--font_weight_accent1)}.vkuiFootnote--weight-2{font-weight:500;font-weight:var(--vkui--font_weight_accent2)}.vkuiFootnote--weight-3{font-weight:400;font-weight:var(--vkui--font_weight_accent3)}","",{version:3,sources:["webpack://./src/components/Typography/Footnote/Footnote.module.css"],names:[],mappings:"AAAA,cACE,aAAc,CAKd,iFAA6D,CAA7D,4DAA6D,CAH7D,cAAyD,CAAzD,wDAAyD,CAEzD,eAA6D,CAA7D,4DAA6D,CAD7D,gBAA6D,CAA7D,4DAA6D,CAF7D,QAKF,CAEA,oBAIE,iFAAkE,CAAlE,iEAAkE,CAHlE,cAA8D,CAA9D,6DAA8D,CAE9D,eAAkE,CAAlE,iEAAkE,CADlE,gBAAkE,CAAlE,iEAAkE,CAGlE,wBACF,CAEA,wBACE,eAA6C,CAA7C,4CACF,CAEA,wBACE,eAA6C,CAA7C,4CACF,CAEA,wBACE,eAA6C,CAA7C,4CACF",sourcesContent:[".Footnote {\n  display: block;\n  margin: 0;\n  font-size: var(--vkui--font_footnote--font_size--regular);\n  line-height: var(--vkui--font_footnote--line_height--regular);\n  font-weight: var(--vkui--font_footnote--font_weight--regular);\n  font-family: var(--vkui--font_footnote--font_family--regular);\n}\n\n.Footnote--caps {\n  font-size: var(--vkui--font_footnote_caps--font_size--regular);\n  line-height: var(--vkui--font_footnote_caps--line_height--regular);\n  font-weight: var(--vkui--font_footnote_caps--font_weight--regular);\n  font-family: var(--vkui--font_footnote_caps--font_family--regular);\n  text-transform: uppercase;\n}\n\n.Footnote--weight-1 {\n  font-weight: var(--vkui--font_weight_accent1);\n}\n\n.Footnote--weight-2 {\n  font-weight: var(--vkui--font_weight_accent2);\n}\n\n.Footnote--weight-3 {\n  font-weight: var(--vkui--font_weight_accent3);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Footnote:"vkuiFootnote","Footnote--caps":"vkuiFootnote--caps","Footnote--weight-1":"vkuiFootnote--weight-1","Footnote--weight-2":"vkuiFootnote--weight-2","Footnote--weight-3":"vkuiFootnote--weight-3"},__webpack_exports__.Z=___CSS_LOADER_EXPORT___}}]);