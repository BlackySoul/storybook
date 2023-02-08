"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[7478],{"./src/components/Touch/Touch.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:function(){return Playground},__namedExportsOrder:function(){return __namedExportsOrder}});var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_Touch__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Touch/Touch.tsx"),_storybook_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/storybook/constants.ts");__webpack_exports__.default={title:"Service/Touch",component:_Touch__WEBPACK_IMPORTED_MODULE_1__.X,parameters:(0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.Z)({},_storybook_constants__WEBPACK_IMPORTED_MODULE_3__.tW),{},{cantered:!1},_storybook_constants__WEBPACK_IMPORTED_MODULE_3__.nB)};var circleStyle={width:40,height:40,borderRadius:"50%",background:"var(--vkui--color_background_accent)",position:"absolute",left:"50%",top:"50%",marginLeft:-20,marginTop:-20},containerStyle={height:200,width:"50%",border:"8px solid var(--vkui--color_icon_secondary)",position:"relative"},Playground=function Template(args){var _React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(0),_React$useState2=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.Z)(_React$useState,2),shiftX=_React$useState2[0],setShiftX=_React$useState2[1],_React$useState3=react__WEBPACK_IMPORTED_MODULE_0__.useState(0),_React$useState4=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.Z)(_React$useState3,2),shiftY=_React$useState4[0],setShiftY=_React$useState4[1],_React$useState5=react__WEBPACK_IMPORTED_MODULE_0__.useState(0),_React$useState6=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.Z)(_React$useState5,2),limitX=_React$useState6[0],setLimitX=_React$useState6[1],_React$useState7=react__WEBPACK_IMPORTED_MODULE_0__.useState(0),_React$useState8=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.Z)(_React$useState7,2),limitY=_React$useState8[0],setLimitY=_React$useState8[1],circleRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),startX=react__WEBPACK_IMPORTED_MODULE_0__.useRef(0),startY=react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect((function(){circleRef.current&&(setLimitX(circleRef.current.offsetLeft),setLimitY(circleRef.current.offsetTop))}));var limitExceeded=Math.abs(shiftX)>=limitX||Math.abs(shiftY)>=limitY;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:(0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.Z)({},containerStyle),{},{borderColor:limitExceeded?"var(--vkui--color_icon_negative)":"var(--vkui--color_icon_secondary)"})},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Touch__WEBPACK_IMPORTED_MODULE_1__.X,(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},args,{getRootRef:circleRef,onMove:function onMove(e){var shiftX=startX.current+e.shiftX,shiftY=startY.current+e.shiftY;setShiftX(shiftX>limitX?limitX:shiftX<-limitX?-limitX:shiftX),setShiftY(shiftY>limitY?limitY:shiftY<-limitY?-limitY:shiftY)},onEnd:function onEnd(e){startX.current+=e.shiftX,startY.current+=e.shiftY},style:(0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.Z)({},circleStyle),{},{transform:"translate(".concat(shiftX,"px, ").concat(shiftY,"px)")})})))}.bind({});Playground.args={},Playground.parameters=(0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.Z)({storySource:{source:"(args) => {\n  const [shiftX, setShiftX] = React.useState(0);\n  const [shiftY, setShiftY] = React.useState(0);\n  const [limitX, setLimitX] = React.useState(0);\n  const [limitY, setLimitY] = React.useState(0);\n\n  const circleRef = React.useRef<HTMLDivElement | null>(null);\n  const startX = React.useRef(0);\n  const startY = React.useRef(0);\n\n  \n  React.useLayoutEffect(() => {\n    if (circleRef.current) {\n      setLimitX(circleRef.current.offsetLeft);\n      setLimitY(circleRef.current.offsetTop);\n    }\n  });\n\n  const onMove = (e: TouchEvent) => {\n    const shiftX = startX.current + e.shiftX;\n    const shiftY = startY.current + e.shiftY;\n\n    setShiftX(shiftX > limitX ? limitX : shiftX < -limitX ? -limitX : shiftX);\n    setShiftY(shiftY > limitY ? limitY : shiftY < -limitY ? -limitY : shiftY);\n  };\n\n  const onEnd = (e: TouchEvent) => {\n    startX.current += e.shiftX;\n    startY.current += e.shiftY;\n  };\n\n  const limitExceeded = Math.abs(shiftX) >= limitX || Math.abs(shiftY) >= limitY;\n\n  return (\n    <div\n      style={{\n        ...containerStyle,\n        borderColor: limitExceeded\n          ? 'var(--vkui--color_icon_negative)'\n          : 'var(--vkui--color_icon_secondary)',\n      }}\n    >\n      <Touch\n        {...args}\n        getRootRef={circleRef}\n        onMove={onMove}\n        onEnd={onEnd}\n        style={{\n          ...circleStyle,\n          transform: `translate(${shiftX}px, ${shiftY}px)`,\n        }}\n      />\n    </div>\n  );\n}"}},Playground.parameters);var __namedExportsOrder=["Playground"]},"./src/storybook/constants.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{R0:function(){return StringArg},nB:function(){return DisableCartesianParam},tW:function(){return CanvasFullLayout},uf:function(){return FigmaUrls}});var CanvasFullLayout={layout:"fullscreen",previewTabs:{"storybook/docs/panel":{hidden:!0}},viewMode:"story",centered:!0},DisableCartesianParam={cartesian:{disable:!0}},StringArg={control:{type:"text"}},FigmaUrls={ActionSheet:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=27%3A4&t=PMn6l8SzrfRRUSod-0",ActionSheetItem:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=27%3A4&t=PMn6l8SzrfRRUSod-0",Alert:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=146%3A0&t=PMn6l8SzrfRRUSod-0",ScreenSpinner:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=146%3A8&t=uhwIZneBQyQtx8Td-0",Snackbar:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=146%3A10&t=uhwIZneBQyQtx8Td-0",Typography:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=18802%3A108351&t=uhwIZneBQyQtx8Td-0",ModalCard:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=146%3A4&t=uhwIZneBQyQtx8Td-0",ModalPage:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=146%3A5&t=uhwIZneBQyQtx8Td-0",Epic:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=9374%3A63616&t=uhwIZneBQyQtx8Td-0",HorizontalCell:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=2121%3A114693&t=uhwIZneBQyQtx8Td-0",PanelHeader:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=27%3A0&t=uhwIZneBQyQtx8Td-0",Tabbar:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=27%3A1&t=uhwIZneBQyQtx8Td-0",Calendar:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=17935%3A102822&t=uhwIZneBQyQtx8Td-0",Forms:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=27%3A3&t=0HQxAeW7YFeDL2gn-0",Avatar:"https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=16667%3A66875&t=QIyBJwdYLsAmk3wb-0",Badge:"",Banner:"",Button:"",Card:"",CardGrid:"",Cell:"",CellButton:"",ContentCard:"",Counter:"",Footer:"",Gallery:"",Gradient:"",GridAvatar:"",Group:"",Header:"",MiniInfoCell:"",Pagination:"",Placeholder:"",Progress:"",Search:"",Separator:"",Spacing:"",SubnavigationBar:"",Switch:"",Tabs:"",UsersStack:""}}}]);