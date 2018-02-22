webpackJsonp([0xcff41da1d1d5],{274:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),s=a(l),u=n(5),d=a(u),c=n(336),p=a(c),f=n(658),h=a(f),m={name:"Textarea\n",description:"",start:{line:1,column:1},end:{line:30,column:4},example:[{type:"html",description:null,code:'<label>\n  <span class="oui-label">Experiment Hypothesis</span>\n  <textarea class="oui-textarea" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></textarea>\n</label>'},{type:"html",description:null,code:'<label>\n  <span class="oui-label oui-label--disabled">\n    Experiment Hypothesis\n  </span>\n  <textarea class="oui-textarea" disabled placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></textarea>\n</label>'},{type:"html",description:null,code:'<label>\n  <span class="oui-label">\n    Tall Experiment Hypothesis\n  </span>\n  <textarea class="oui-textarea oui-textarea--tall" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></textarea>\n</label>'},{type:"html",description:null,code:'<label class="#{$namespace}form-bad-news">\n  <span class="oui-label oui-label--required">\n    Experiment Hypothesis\n  </span>\n  <textarea class="oui-textarea" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></textarea>\n  <div class="#{$namespace}form-note #{$namespace}form-note--bad-news">This field is required.</div>\n</label>'}]},b={description:"Generates a `textarea` element.",displayName:"Textarea",methods:[{name:"blur",docblock:null,modifiers:[],params:[],returns:null}],props:{defaultValue:{type:{name:"string"},required:!1,description:"The default value of the textarea used on initial render"},isDisabled:{type:{name:"bool"},required:!1,description:"Prevents textarea from being modified and appears disabled"},isReadOnly:{type:{name:"bool"},required:!1,description:"Prevents textarea from being modified but doesn't appear disabled"},isRequired:{type:{name:"bool"},required:!1,description:"Prevents textarea from being submitted without value"},onBlur:{type:{name:"func"},required:!1,description:"Function that fires when the textarea loses focus. It fires regardless of\n    whether the value has changed."},onChange:{type:{name:"func"},required:!1,description:"Function that fires when the textarea loses focus after the value\n    changes"},onFocus:{type:{name:"func"},required:!1,description:"Function that fires when the textarea gains focus"},onInput:{type:{name:"func"},required:!1,description:"Function that fires the the textarea value changes"},onKeyDown:{type:{name:"func"},required:!1,description:"Function that fires when a key is pressed down"},placeholder:{type:{name:"string"},required:!1,description:"Textarea placeholder text"},testSection:{type:{name:"string"},required:!1,description:"Hook for automated JavaScript tests"},value:{type:{name:"string"},required:!1,description:"Text within the textarea"}},private:!1},y={react:b,examples:p.default?p.default:null,readme:h.default?h.default:null,sass:m},x=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return s.default.createElement(d.default,{data:y})},t}(s.default.Component);t.default=x,e.exports=t.default},658:function(e,t){e.exports="# Textarea Component\n\n- Add storybook link\n- Add deisgn guidelines"},336:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),o=a(r),i=n(337),l=a(i),s=function(){};t.default=[{examples:[o.default.createElement(l.default,{placeholder:"Enter a comment…"})]},{examples:[o.default.createElement(l.default,{isDisabled:!0,defaultValue:"This textarea is disabled."})]},{examples:[o.default.createElement(l.default,{defaultValue:"This textarea has many event listeners.",onBlur:s,onChange:s,onFocus:s,onInput:s,onKeyDown:s})]}],e.exports=t.default},337:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),s=a(l),u=n(9),d=a(u),c=n(2),p=a(c),f=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.blur=function(){this._textarea&&this._textarea.blur()},t.prototype.render=function(){var e=this,t=this.props,n=t.defaultValue,a=t.isReadOnly,r=t.isRequired,o=t.isDisabled,i=t.onBlur,l=t.onChange,u=t.onFocus,c=t.onInput,p=t.onKeyDown,f=t.placeholder,h=t.testSection,m=t.value,b=(0,d.default)({"oui-textarea":!0});return s.default.createElement("textarea",{"data-oui-component":!0,className:b,ref:function(t){e._textarea=t},value:m,defaultValue:n,placeholder:f,required:r,readOnly:a,disabled:o,onInput:c,onChange:l,onBlur:i,onKeyDown:p,onFocus:u,"data-test-section":h})},t}(s.default.Component);f.propTypes={defaultValue:p.default.string,isDisabled:p.default.bool,isReadOnly:p.default.bool,isRequired:p.default.bool,onBlur:p.default.func,onChange:p.default.func,onFocus:p.default.func,onInput:p.default.func,onKeyDown:p.default.func,placeholder:p.default.string,testSection:p.default.string,value:p.default.string},t.default=f,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-components-textarea-js-6ecae42aeced847e2eab.js.map