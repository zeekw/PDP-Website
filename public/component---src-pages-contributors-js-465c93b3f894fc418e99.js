(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{159:function(e,t,r){"use strict";r.r(t),r.d(t,"query",function(){return m});r(420);var a=r(7),n=r.n(a),o=r(0),i=r.n(o),l=(r(171),r(160),r(177)),c=r(176),u=r(210),s=function(e){function t(){return e.apply(this,arguments)||this}n()(t,e);var r=t.prototype;return r.FormatContributors=function(e){for(var t=[],r=[],a=[],n=0;n<e.length;n++){var o=e[n].node;null!=o.order?r.push(o):a.push(o)}r=u(r,"order");t=a=u(a,"name");for(n=0;n<r.length;n++)t.splice(r[n].order-1,0,r[n]);return t},r.FormatDonors=function(e){for(var t=[],r=[],a=[],n=0;n<e.length;n++){var o=e[n].node;null!=o.order?r.push(o):a.push(o)}r=u(r,"order");t=a=u(a,"lastName");for(n=0;n<r.length;n++)t.splice(r[n].order-1,0,r[n]);return t},r.render=function(){var e=this.FormatContributors(this.props.data.allSanityCurrentcontributor.edges),t=this.FormatContributors(this.props.data.allSanityPastcontributor.edges),r=this.FormatDonors(this.props.data.allSanityDonor.edges),a=e.map(function(e){return i.a.createElement("a",{href:void 0!==e.url?e.url:null},i.a.createElement("li",null,e.name))}),n=t.map(function(e){return i.a.createElement("a",{href:void 0!==e.url?e.url:null},i.a.createElement("li",null,e.name))}),o=r.map(function(e){return e==(t=r)[t.length-1]?i.a.createElement("span",null,e.firstName+" "+e.lastName):i.a.createElement("span",null,e.firstName+" "+e.lastName+" • ");var t});return i.a.createElement("div",{id:"body"},i.a.createElement("title",null,"PDP - Contributors"),i.a.createElement(l.a,{CurrentPage:"Contributors"}),i.a.createElement("div",{id:"Contributors"},i.a.createElement("h3",null,"Contributors"),i.a.createElement("h4",null,"PDP gratefully acknowledges support from:"),i.a.createElement("ul",null,a),i.a.createElement("h4",null,"Additionally past support has included:"),i.a.createElement("ul",null,n)),i.a.createElement("div",{id:"Donors"},i.a.createElement("h3",null,"Donors"),i.a.createElement("p",null,o)),i.a.createElement(c.a,null))},t}(i.a.Component),m="2171078463";t.default=s},171:function(e,t,r){"use strict";r.d(t,"b",function(){return s});var a=r(0),n=r.n(a),o=r(4),i=r.n(o),l=r(33),c=r.n(l);r.d(t,"a",function(){return c.a}),r.d(t,"c",function(){return l.navigate});r(172);var u=n.a.createContext({}),s=function(e){return n.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},172:function(e,t,r){var a;e.exports=(a=r(173))&&a.default||a},173:function(e,t,r){"use strict";r.r(t);r(36);var a=r(0),n=r.n(a),o=r(4),i=r.n(o),l=r(56),c=r(2),u=function(e){var t=e.location,r=c.default.getResourcesForPathnameSync(t.pathname);return r?n.a.createElement(l.a,Object.assign({location:t,pageResources:r},r.json)):null};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},174:function(e,t,r){e.exports=r.p+"static/logo-07-0b1e5fced821161fe3bb120de1440797.svg"},175:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"Philadelphia Dance Projects",titleTemplate:"%s · PDP",defaultDescription:"The mission of Philadelphia Dance Projects is to support contemporary dance through Projects that encourage artists and audiences to more fully participate and engage in the experience and pursuit of dance as an evolving form.",siteUrl:"https://philadanceprojects.org",defaultImage:"/photos/group-square.jpg"}}}}},176:function(e,t,r){"use strict";var a=r(7),n=r.n(a),o=r(0),i=r.n(o),l=(r(171),r(146),r(147),function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){return i.a.createElement("div",{id:"DonateButton"},i.a.createElement("form",{action:"https://www.paypal.com/cgi-bin/webscr",method:"post",target:"_top"},i.a.createElement("input",{type:"hidden",name:"cmd",value:"_donations"}),i.a.createElement("input",{type:"hidden",name:"business",value:"isaacrwasserman@gmail.com"}),i.a.createElement("input",{type:"hidden",name:"currency_code",value:"USD"}),i.a.createElement("input",{id:"DonateButtonImage",type:"submit",value:"DONATE",border:"0",name:"submit",title:"PayPal - The safer, easier way to pay online!"}),i.a.createElement("img",{alt:"",border:"0",src:"https://www.paypal.com/en_US/i/scr/pixel.gif",width:"1",height:"1"})))},t}(i.a.Component)),c=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){return i.a.createElement("div",{id:"Footer"},i.a.createElement("div",{id:"FooterBody"},i.a.createElement("h6",null,"© "+(new Date).getFullYear()+" Philadelphia Dance Projects"),i.a.createElement("div",{id:"ButtonContainer"},i.a.createElement(l,null),i.a.createElement("div",{id:"ContactButton"},"CONTACT"))))},t}(i.a.Component);t.a=c},177:function(e,t,r){"use strict";var a=r(7),n=r.n(a),o=r(0),i=r.n(o),l=r(171),c=r(174),u=r.n(c),s=(r(144),r(180)),m=r.n(s),p=(r(145),r(175)),d=r(179),f=r(4),y=r.n(f),b=function(e){var t=e.title,r=e.description,a=e.image,n=e.pathname,o=e.article;return i.a.createElement(l.b,{query:E,render:function(e){var l=e.site.siteMetadata,c=l.defaultTitle,u=l.titleTemplate,s=l.defaultDescription,m=l.siteUrl,p=l.defaultImage,f={title:t||c,description:r||s,image:""+m+(a||p),url:""+m+(n||"/")};return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.Helmet,{title:f.title,titleTemplate:u},i.a.createElement("meta",{name:"description",content:f.description}),i.a.createElement("meta",{name:"image",content:f.image}),f.url&&i.a.createElement("meta",{property:"og:url",content:f.url}),!o?null:i.a.createElement("meta",{property:"og:type",content:"article"}),f.title&&i.a.createElement("meta",{property:"og:title",content:f.title}),f.description&&i.a.createElement("meta",{property:"og:description",content:f.description}),f.image&&i.a.createElement("meta",{property:"og:image",content:f.image})))},data:p})},g=b,E="2395431821";b.propTypes={title:y.a.string,description:y.a.string,image:y.a.string,pathname:y.a.string,article:y.a.bool},b.defaultProps={title:null,description:null,image:null,pathname:null,article:!1};var h=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.CurrentPage,t=function(t){return t==e?{borderBottomWidth:2,borderBottomStyle:"solid",borderBottomColor:"black !important"}:{}};return i.a.createElement("div",{id:"Header"},i.a.createElement(g,null),i.a.createElement("img",{src:u.a}),i.a.createElement("ul",{id:"Navigator"},i.a.createElement(l.a,{to:"/"},i.a.createElement("li",{style:t("Home")},"Home")),i.a.createElement(l.a,{to:"/projects"},i.a.createElement("li",{style:t("Projects")},"Projects")),i.a.createElement(l.a,{to:"/calendar"},i.a.createElement("li",{style:t("Calendar")},"Calendar")),i.a.createElement(l.a,{to:"/blog"},i.a.createElement("li",{style:t("Blog")},"Blog")),i.a.createElement(l.a,{to:"/contributors"},i.a.createElement("li",{style:t("Contributors")},"Contributors")),i.a.createElement(l.a,{to:"/about"},i.a.createElement("li",{style:t("About")},"About")),i.a.createElement(l.a,{to:"/contact"},i.a.createElement("li",{style:t("Contact")},"Contact"))),i.a.createElement(m.a,{id:"MobileNavigator"},i.a.createElement(m.a.Toggle,{id:"MobileNavigatorToggle"},e),i.a.createElement(m.a.Menu,null,i.a.createElement(m.a.Item,null,i.a.createElement(l.a,{to:"/"},i.a.createElement("div",{className:"MobileNavigatorInnerItem"},"Home"))),i.a.createElement(m.a.Item,null,i.a.createElement(l.a,{to:"/projects"},i.a.createElement("div",{className:"MobileNavigatorInnerItem"},"Projects"))),i.a.createElement(m.a.Item,null,i.a.createElement(l.a,{to:"/calendar"},i.a.createElement("div",{className:"MobileNavigatorInnerItem"},"Calendar"))),i.a.createElement(m.a.Item,null,i.a.createElement(l.a,{to:"/blog"},i.a.createElement("div",{className:"MobileNavigatorInnerItem"},"Blog"))),i.a.createElement(m.a.Item,null,i.a.createElement(l.a,{to:"/contributors"},i.a.createElement("div",{className:"MobileNavigatorInnerItem"},"Contributors"))),i.a.createElement(m.a.Item,null,i.a.createElement(l.a,{to:"/about"},i.a.createElement("div",{className:"MobileNavigatorInnerItem"},"About"))))))},t}(i.a.Component);t.a=h},210:function(e,t,r){"use strict";var a=r(211),n=r(213),o=r(214);function i(e,t,r){return"function"==typeof e?e(t,r,i.bind(null,null)):e&&"object"==typeof t&&"object"==typeof r?i(null,o(t,e),o(r,e)):a(t,r)}e.exports=function(e,t,r){if(null==e)return[];if(!Array.isArray(e))throw new TypeError("array-sort expects an array.");if(1===arguments.length)return e.sort();var a=function(e){return[].concat.apply([],e)}([].slice.call(arguments,1));return"object"===n(a[a.length-1])&&(r=a.pop()),e.sort(function(e,t){return t=t||{},function(r,a){for(var n,o=e.length,l=-1;++l<o&&0===(n=i(e[l],r,a)););return!0===t.reverse?-1*n:n}}(a,r))}},211:function(e,t,r){"use strict";var a=r(212);e.exports=function(e,t,r){if(null!=r&&"string"!==a(r))throw new TypeError('expected "prop" to be undefined or a string');var n=a(e),o=a(t);return r&&("object"===n&&(e=e[r],n=a(e)),"object"===o&&(t=t[r],o=a(t))),"null"===n?"null"===o?0:"undefined"===o?-1:1:"undefined"===n?"null"===o?1:"undefined"===o?0:1:"null"===o||"undefined"===o?-1:e<t?-1:e>t?1:0}},212:function(e,t){var r=Object.prototype.toString;e.exports=function(e){var t=typeof e;return"undefined"===t?"undefined":null===e?"null":!0===e||!1===e||e instanceof Boolean?"boolean":"string"===t||e instanceof String?"string":"number"===t||e instanceof Number?"number":"function"===t||e instanceof Function?void 0!==e.constructor.name&&"Generator"===e.constructor.name.slice(0,9)?"generatorfunction":"function":void 0!==Array.isArray&&Array.isArray(e)?"array":e instanceof RegExp?"regexp":e instanceof Date?"date":"[object RegExp]"===(t=r.call(e))?"regexp":"[object Date]"===t?"date":"[object Arguments]"===t?"arguments":"[object Error]"===t?"error":"[object Promise]"===t?"promise":function(e){return e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}(e)?"buffer":"[object Set]"===t?"set":"[object WeakSet]"===t?"weakset":"[object Map]"===t?"map":"[object WeakMap]"===t?"weakmap":"[object Symbol]"===t?"symbol":"[object Map Iterator]"===t?"mapiterator":"[object Set Iterator]"===t?"setiterator":"[object String Iterator]"===t?"stringiterator":"[object Array Iterator]"===t?"arrayiterator":"[object Int8Array]"===t?"int8array":"[object Uint8Array]"===t?"uint8array":"[object Uint8ClampedArray]"===t?"uint8clampedarray":"[object Int16Array]"===t?"int16array":"[object Uint16Array]"===t?"uint16array":"[object Int32Array]"===t?"int32array":"[object Uint32Array]"===t?"uint32array":"[object Float32Array]"===t?"float32array":"[object Float64Array]"===t?"float64array":"object"}},213:function(e,t){var r=Object.prototype.toString;e.exports=function(e){var t=typeof e;return"undefined"===t?"undefined":null===e?"null":!0===e||!1===e||e instanceof Boolean?"boolean":"string"===t||e instanceof String?"string":"number"===t||e instanceof Number?"number":"function"===t||e instanceof Function?void 0!==e.constructor.name&&"Generator"===e.constructor.name.slice(0,9)?"generatorfunction":"function":void 0!==Array.isArray&&Array.isArray(e)?"array":e instanceof RegExp?"regexp":e instanceof Date?"date":"[object RegExp]"===(t=r.call(e))?"regexp":"[object Date]"===t?"date":"[object Arguments]"===t?"arguments":"[object Error]"===t?"error":"[object Promise]"===t?"promise":function(e){return e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}(e)?"buffer":"[object Set]"===t?"set":"[object WeakSet]"===t?"weakset":"[object Map]"===t?"map":"[object WeakMap]"===t?"weakmap":"[object Symbol]"===t?"symbol":"[object Map Iterator]"===t?"mapiterator":"[object Set Iterator]"===t?"setiterator":"[object String Iterator]"===t?"stringiterator":"[object Array Iterator]"===t?"arrayiterator":"[object Int8Array]"===t?"int8array":"[object Uint8Array]"===t?"uint8array":"[object Uint8ClampedArray]"===t?"uint8clampedarray":"[object Int16Array]"===t?"int16array":"[object Uint16Array]"===t?"uint16array":"[object Int32Array]"===t?"int32array":"[object Uint32Array]"===t?"uint32array":"[object Float32Array]"===t?"float32array":"[object Float64Array]"===t?"float64array":"object"}},214:function(e,t){function r(e){return e?Array.isArray(e)?e.join("."):e:""}e.exports=function(e,t,a,n,o){if(null===(i=e)||"object"!=typeof i&&"function"!=typeof i||!t)return e;var i;if(t=r(t),a&&(t+="."+r(a)),n&&(t+="."+r(n)),o&&(t+="."+r(o)),t in e)return e[t];for(var l=t.split("."),c=l.length,u=-1;e&&++u<c;){for(var s=l[u];"\\"===s[s.length-1];)s=s.slice(0,-1)+"."+l[++u];e=e[s]}return e}},420:function(e,t,r){var a=r(25).f,n=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in n||r(14)&&a(n,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-contributors-js-465c93b3f894fc418e99.js.map