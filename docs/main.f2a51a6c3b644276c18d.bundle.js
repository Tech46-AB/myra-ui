(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1111:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(56),_clientLogger=__webpack_require__(36),_configFilename=__webpack_require__(1112);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1112:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1113:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(377).configure)([__webpack_require__(1114),__webpack_require__(1115),__webpack_require__(1116)],module,!1)}).call(this,__webpack_require__(114)(module))},1114:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1114},1115:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1115},1116:function(module,exports,__webpack_require__){var map={"./stories/Button/Button.stories.tsx":1126,"./stories/Typography/Typography.stories.tsx":1124};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1116},1117:function(module,exports,__webpack_require__){},1119:function(module,exports,__webpack_require__){},1120:function(module,exports,__webpack_require__){},1124:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default_Text",(function(){return Default_Text})),__webpack_require__.d(__webpack_exports__,"Headings",(function(){return Headings})),__webpack_require__.d(__webpack_exports__,"Custom_Class",(function(){return Custom_Class}));var objectSpread2=__webpack_require__(52),objectWithoutProperties=(__webpack_require__(0),__webpack_require__(226)),ThemeProvider=__webpack_require__(1149),StylesProvider=__webpack_require__(1151),Typography=__webpack_require__(1150),createMuiTheme=__webpack_require__(500),jsVariables_module=__webpack_require__(489),jsVariables_module_default=__webpack_require__.n(jsVariables_module),lightTheme=Object(createMuiTheme.a)({palette:{primary:{main:jsVariables_module_default.a.primaryColor,light:jsVariables_module_default.a.secondaryColor},secondary:{main:jsVariables_module_default.a.secondaryColor,light:jsVariables_module_default.a.primaryColor}},typography:{fontFamily:jsVariables_module_default.a.fontFamily,h1:{fontSize:jsVariables_module_default.a.heading1},h2:{fontSize:jsVariables_module_default.a.heading2},h3:{fontSize:jsVariables_module_default.a.heading3},body1:{fontSize:jsVariables_module_default.a.body1}},props:{MuiTextField:{style:{borderColor:"none"}}}}),jsx_runtime=(__webpack_require__(1119),__webpack_require__(72)),typographic_component_MyraTypography=function MyraTypography(_ref){var className=_ref.className,props=Object(objectWithoutProperties.a)(_ref,["className"]);return Object(jsx_runtime.jsx)(ThemeProvider.a,{theme:lightTheme,children:Object(jsx_runtime.jsx)(StylesProvider.b,{injectFirst:!0,children:Object(jsx_runtime.jsx)(Typography.a,Object(objectSpread2.a)(Object(objectSpread2.a)({},props),{},{className:className}))})})};try{typographic_component_MyraTypography.displayName="MyraTypography",typographic_component_MyraTypography.__docgenInfo={description:"",displayName:"MyraTypography",props:{align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"Alignment"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"inherit" | "primary" | "secondary" | "textPrimary" | "textSecondary" | "initial" | "error"'}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:'"initial" | "inline" | "block"'}},gutterBottom:{defaultValue:null,description:"",name:"gutterBottom",required:!1,type:{name:"boolean"}},noWrap:{defaultValue:null,description:"",name:"noWrap",required:!1,type:{name:"boolean"}},paragraph:{defaultValue:null,description:"",name:"paragraph",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"inherit" | Variant'}},variantMapping:{defaultValue:null,description:"",name:"variantMapping",required:!1,type:{name:"Partial<Record<Variant, string>>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/Typography/typographic.component.tsx#MyraTypography"]={docgenInfo:typographic_component_MyraTypography.__docgenInfo,name:"MyraTypography",path:"src/lib/Typography/typographic.component.tsx#MyraTypography"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__(1120),__webpack_exports__.default={title:"Components/Typography",component:typographic_component_MyraTypography};var Typography_stories_MyraTemplate=function MyraTemplate(args){return Object(jsx_runtime.jsx)("div",{className:"typography-story",children:Object(jsx_runtime.jsx)(typographic_component_MyraTypography,Object(objectSpread2.a)(Object(objectSpread2.a)({},args),{},{children:args.children}))})},Default_Text=Typography_stories_MyraTemplate.bind({});Default_Text.args={children:"Default paragraph text"};var Headings=Typography_stories_MyraTemplate.bind({});Headings.args={children:"Heading 1",variant:"h1"};var Custom_Class=Typography_stories_MyraTemplate.bind({});Custom_Class.args={children:"Paragraph with custom class name",className:"typography-story__custom-class"},Default_Text.parameters=Object(objectSpread2.a)({storySource:{source:'(args) => (\n  <div className="typography-story">\n    <Typography {...args}>{args.children}</Typography>\n  </div>\n)'}},Default_Text.parameters),Headings.parameters=Object(objectSpread2.a)({storySource:{source:'(args) => (\n  <div className="typography-story">\n    <Typography {...args}>{args.children}</Typography>\n  </div>\n)'}},Headings.parameters),Custom_Class.parameters=Object(objectSpread2.a)({storySource:{source:'(args) => (\n  <div className="typography-story">\n    <Typography {...args}>{args.children}</Typography>\n  </div>\n)'}},Custom_Class.parameters)},1126:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary}));var objectSpread2=__webpack_require__(52),objectWithoutProperties=(__webpack_require__(0),__webpack_require__(226)),StylesProvider=__webpack_require__(1151),Button=__webpack_require__(1152),jsx_runtime=(__webpack_require__(1117),__webpack_require__(72)),button_component_MyraButton=function MyraButton(_ref){var variant=_ref.variant,className=_ref.className,res=Object(objectWithoutProperties.a)(_ref,["variant","className"]),cssClass=className?"".concat(className&&className," myra--primary"):"myra--primary";return Object(jsx_runtime.jsx)(StylesProvider.b,{injectFirst:!0,children:Object(jsx_runtime.jsx)(Button.a,Object(objectSpread2.a)({className:cssClass,variant:variant||"outlined"},res))})};try{button_component_MyraButton.displayName="MyraButton",button_component_MyraButton.__docgenInfo={description:"",displayName:"MyraButton",props:{children:{defaultValue:null,description:"The content of the button.\nThe content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},color:{defaultValue:null,description:"The color of the component. It supports those theme colors that make sense for this component.",name:"color",required:!1,type:{name:'"inherit" | "primary" | "secondary" | "default"'}},disabled:{defaultValue:null,description:"If `true`, the button will be disabled.\nIf `true`, the base button will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},disableElevation:{defaultValue:null,description:"If `true`, no elevation is used.",name:"disableElevation",required:!1,type:{name:"boolean"}},disableFocusRipple:{defaultValue:null,description:"If `true`, the  keyboard focus ripple will be disabled.",name:"disableFocusRipple",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:null,description:"Element placed after the children.",name:"endIcon",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:null,description:"If `true`, the button will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"The URL to link to when the button is clicked.\nIf defined, an `a` element will be used as the root node.",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"The size of the button.\n`small` is equivalent to the dense button styling.",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},startIcon:{defaultValue:null,description:"Element placed before the children.",name:"startIcon",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:null,description:"The variant to use.",name:"variant",required:!1,type:{name:'"text" | "outlined" | "contained"'}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},buttonRef:{defaultValue:null,description:"@ignore Use that prop to pass a ref to the native button component.\n@deprecated Use `ref` instead.",name:"buttonRef",required:!1,type:{name:"Ref<unknown>"}},centerRipple:{defaultValue:null,description:"If `true`, the ripples will be centered.\nThey won't start at the cursor interaction position.",name:"centerRipple",required:!1,type:{name:"boolean"}},disableRipple:{defaultValue:null,description:"If `true`, the ripple effect will be disabled.\n\n⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure\nto highlight the element by applying separate styles with the `focusVisibleClassName`.",name:"disableRipple",required:!1,type:{name:"boolean"}},disableTouchRipple:{defaultValue:null,description:"If `true`, the touch ripple effect will be disabled.",name:"disableTouchRipple",required:!1,type:{name:"boolean"}},focusRipple:{defaultValue:null,description:"If `true`, the base button will have a keyboard focus ripple.",name:"focusRipple",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:"This prop can help a person know which element has the keyboard focus.\nThe class name will be applied when the element gain the focus through a keyboard interaction.\nIt's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).\nThe rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/master/explainer.md).\nA [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components\nif needed.",name:"focusVisibleClassName",required:!1,type:{name:"string"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},TouchRippleProps:{defaultValue:null,description:"Props applied to the `TouchRipple` element.",name:"TouchRippleProps",required:!1,type:{name:"Partial<TouchRippleProps>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/Button/button.component.tsx#MyraButton"]={docgenInfo:button_component_MyraButton.__docgenInfo,name:"MyraButton",path:"src/lib/Button/button.component.tsx#MyraButton"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Components/Button",component:button_component_MyraButton};var Button_stories_MyraTemplate=function MyraTemplate(args){return Object(jsx_runtime.jsx)(button_component_MyraButton,Object(objectSpread2.a)(Object(objectSpread2.a)({},args),{},{children:args.children}))},Primary=Button_stories_MyraTemplate.bind({});Primary.args={children:"Primary Button"};var Secondary=Button_stories_MyraTemplate.bind({});Secondary.args={children:"Secondary Button",color:"secondary",onClick:function onClick(){return alert("Clicked !!!")},className:"myra--secondary"},Primary.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => (\n  <Button {...args}>{args.children}</Button>\n)"}},Primary.parameters),Secondary.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => (\n  <Button {...args}>{args.children}</Button>\n)"}},Secondary.parameters)},489:function(module,exports,__webpack_require__){module.exports={defaultFont:"14px",fontFamily:'"Noto Sans, Roboto, Open Sans, -apple-system, sans-serif"',heading1:"2rem",heading2:"1.5rem",body1:"18px",heading3:"1rem",primaryColor:"#000",secondaryColor:"#fff"}},505:function(module,exports,__webpack_require__){__webpack_require__(506),__webpack_require__(663),__webpack_require__(664),__webpack_require__(829),__webpack_require__(1049),__webpack_require__(1082),__webpack_require__(1090),__webpack_require__(1102),__webpack_require__(1104),__webpack_require__(1109),__webpack_require__(1111),module.exports=__webpack_require__(1113)},573:function(module,exports){},664:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(377)}},[[505,1,2]]]);
//# sourceMappingURL=main.f2a51a6c3b644276c18d.bundle.js.map