(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var s=o.apply(null,n);s&&e.push(s)}else if("object"===a)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7201)}])},7201:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var r=n(5893),o=n(9008),a=n(7294);const s=(0,a.createContext)({setTheme:e=>{},themes:[]}),c=["light","dark"],i="(prefers-color-scheme: dark)",l=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:r=!0,storageKey:o="theme",themes:l=["light","dark"],defaultTheme:m=(n?"system":"light"),attribute:p="data-theme",value:v,children:y})=>{const[g,k]=(0,a.useState)((()=>d(o,m))),[b,_]=(0,a.useState)((()=>d(o))),T=v?Object.values(v):l,w=(0,a.useCallback)((t=>{const n=f(t);_(n),"system"!==g||e||j(n,!1)}),[g,e]),x=(0,a.useRef)(w);x.current=w;const j=(0,a.useCallback)(((e,r=!0,a=!0)=>{let s=(null==v?void 0:v[e])||e;const c=t&&a?h():null;if(r)try{localStorage.setItem(o,e)}catch(e){}if("system"===e&&n){const e=f();s=(null==v?void 0:v[e])||e}if(a){const e=document.documentElement;"class"===p?(e.classList.remove(...T),e.classList.add(s)):e.setAttribute(p,s),null==c||c()}}),[]);(0,a.useEffect)((()=>{const e=function(){return x.current(...[].slice.call(arguments))},t=window.matchMedia(i);return t.addListener(e),e(t),()=>t.removeListener(e)}),[]);const E=(0,a.useCallback)((t=>{e?j(t,!0,!1):j(t),k(t)}),[e]);return(0,a.useEffect)((()=>{const e=e=>{e.key===o&&E(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)}),[E]),(0,a.useEffect)((()=>{if(!r)return;let t=e&&c.includes(e)?e:g&&c.includes(g)?g:"system"===g&&b||null;document.documentElement.style.setProperty("color-scheme",t)}),[r,g,b,e]),a.createElement(s.Provider,{value:{theme:g,setTheme:E,forcedTheme:e,resolvedTheme:"system"===g?b:g,themes:n?[...l,"system"]:l,systemTheme:n?b:void 0}},a.createElement(u,{forcedTheme:e,storageKey:o,attribute:p,value:v,enableSystem:n,defaultTheme:m,attrs:T}),y)},u=(0,a.memo)((({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,defaultTheme:s,value:c,attrs:l})=>{const u="class"===n?`var d=document.documentElement.classList;d.remove(${l.map((e=>`'${e}'`)).join(",")});`:"var d=document.documentElement;",d=(e,t)=>{e=(null==c?void 0:c[e])||e;const r=t?e:`'${e}'`;return"class"===n?`d.add(${r})`:`d.setAttribute('${n}', ${r})`},h="system"===s;return a.createElement(o.default,null,a.createElement("script",e?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){${u}${d(e)}}()`}}:r?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){try {${u}var e=localStorage.getItem('${t}');${h?"":d(s)+";"}if("system"===e||(!e&&${h})){var t="${i}",m=window.matchMedia(t);m.media!==t||m.matches?${d("dark")}:${d("light")}}else if(e) ${c?`var x=${JSON.stringify(c)};`:""}${d(c?"x[e]":"e",!0)}}catch(e){}}()`}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){try{${u}var e=localStorage.getItem("${t}");if(e){${c?`var x=${JSON.stringify(c)};`:""}${d(c?"x[e]":"e",!0)}}else{${d(s)};}}catch(t){}}();`}}))}),((e,t)=>e.forcedTheme===t.forcedTheme)),d=(e,t)=>{if("undefined"==typeof window)return;let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},h=()=>{const e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout((()=>{document.head.removeChild(e)}),1)}},f=e=>(e||(e=window.matchMedia(i)),e.matches?"dark":"light");var m=n(888),p=n(3889),v=n.n(p),y=(n(6730),function(){var e=(0,a.useContext)(s),t=e.theme,n=e.setTheme;return t?(0,r.jsxs)("div",{className:v().switch,children:[(0,r.jsx)("img",{width:18,height:18,src:"/sun.png",alt:"Sun"}),(0,r.jsx)(m.Z,{className:v().button,checked:"dark"===t,onChange:function(e){return n(e.target.checked?"dark":"light")},icons:!1,"aria-label":"Toggle dark mode"}),(0,r.jsx)("img",{width:18,height:18,src:"/moon.png",alt:"Moon"})]}):null}),g=n(8570),k=n.n(g),b=function(){return(0,r.jsx)("footer",{className:k().footer,children:(0,r.jsxs)("div",{className:"container ".concat(k().footerContainer),children:[(0,r.jsxs)("h4",{className:k().footerLeft,children:["Designed & Developed by Mirian Okradze",(0,r.jsx)("span",{className:k().emoji,children:(0,r.jsx)("img",{src:"/rockon.png",alt:"Rock On Emoji",width:15})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("a",{rel:"noopener noreferrer",href:"mailto:okradzemirian@gmail.com",target:"_blank",className:k().link,children:"EMAIL"}),(0,r.jsx)("a",{rel:"noopener noreferrer",href:"https://github.com/okradze",target:"_blank",className:k().link,children:"GITHUB"})]})]})})},_=n(4288),T=n.n(_),w=function(e){var t=e.children;return(0,r.jsxs)("main",{className:T().main,children:[(0,r.jsx)(y,{}),t,(0,r.jsx)(b,{})]})};n(572);function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){x(e,t,n[t])}))}return e}var E=function(e){var t=e.Component,n=e.pageProps;return(0,r.jsxs)(l,{defaultTheme:"dark",children:[(0,r.jsx)(o.default,{children:(0,r.jsx)("title",{children:"Mirian Okradze | A Software Developer"})}),(0,r.jsx)(w,{children:(0,r.jsx)(t,j({},n))})]})}},8570:function(e){e.exports={footer:"footer_footer__ZK5Q_",footerContainer:"footer_footerContainer__wsg4V",footerLeft:"footer_footerLeft___i7Wz",emoji:"footer_emoji__GLHiV",link:"footer_link__j_gJ3"}},4288:function(e){e.exports={main:"layout_main__Foe4Z"}},3889:function(e){e.exports={switch:"switch_switch__ZWbxs",button:"switch_button__7uvNG"}},6730:function(){},572:function(){},9008:function(e,t,n){e.exports=n(5443)},2703:function(e,t,n){"use strict";var r=n(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,s){if(s!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5224:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(7294),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(){return a.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},a.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},888:function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(7294),s=h(a),c=h(n(4184)),i=h(n(5697)),l=h(n(5224)),u=h(n(6963)),d=n(1520);function h(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){if(!this.props.disabled){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}}},{key:"handleTouchStart",value:function(e){this.props.disabled||(this.startX=(0,d.pointerCoord)(e).x,this.activated=!0)}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,o=(t.icons,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["className","icons"])),a=(0,c.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return s.default.createElement("div",{className:a,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},s.default.createElement("div",{className:"react-toggle-track"},s.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),s.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),s.default.createElement("div",{className:"react-toggle-thumb"}),s.default.createElement("input",r({},o,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(a.PureComponent);t.Z=f,f.displayName="Toggle",f.defaultProps={icons:{checked:s.default.createElement(l.default,null),unchecked:s.default.createElement(u.default,null)}},f.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},1520:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var r=e.pageX;if(void 0!==r)return{x:r,y:e.pageY}}return{x:0,y:0}}},6963:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(7294),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(){return a.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},a.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(387)}));var n=e.O();_N_E=n}]);