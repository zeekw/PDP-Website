(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"1imz":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(void 0===e)return void console.error("Autobind error: No context provided.");var t=Object.getPrototypeOf(e);a=arguments.length>1?Array.prototype.slice.call(arguments,1):Object.getOwnPropertyNames(t);a.forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);void 0!==n?-1===i.indexOf(e)&&"function"===typeof n.value&&Object.defineProperty(t,e,function(e,t,n){var i=n.value;return{configurable:!0,get:function(){if(this===e||this.hasOwnProperty(t))return i;var n=i.bind(this);return Object.defineProperty(this,t,{value:n,configurable:!0,writable:!0}),n}}}(t,e,n)):console.warn('Autobind: "'+e+'" method not found in class.')}))};var i=["constructor","render","componentWillMount","componentDidMount","componentWillReceiveProps","shouldComponentUpdate","componentWillUpdate","componentDidUpdate","componentWillUnmount"],a=[];e.exports=t.default},"8oxB":function(e,t){var n,i,a=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:s}catch(e){n=s}try{i="function"===typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var u,l=[],c=!1,d=-1;function f(){c&&u&&(c=!1,u.length?l=u.concat(l):d=-1,l.length&&h())}function h(){if(!c){var e=r(f);c=!0;for(var t=l.length;t;){for(u=l,l=[];++d<t;)u&&u[d].run();d=-1,t=l.length}u=null,c=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function p(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new m(e,t)),1!==l.length||c||r(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=p,a.addListener=p,a.once=p,a.off=p,a.removeListener=p,a.removeAllListeners=p,a.emit=p,a.prependListener=p,a.prependOnceListener=p,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},ALdH:function(e,t,n){"use strict";n.r(t),function(e){var i=n("0iUn"),a=n("sLSF"),s=n("MI3g"),o=n("a7VT"),r=n("AT/M"),u=n("Tit0"),l=n("vYYK"),c=n("q1tI"),d=n.n(c),f=(n("YFqc"),n("dJSo")),h=n.n(f),m=(n("m2Io"),n("b0oO")),p=n("8lYe"),v=n("D5Hz"),g=n.n(v),S=d.a.createElement,b=function(t){function n(){var e;return Object(i.a)(this,n),e=Object(s.a)(this,Object(o.a)(n).call(this)),Object(l.a)(Object(r.a)(e),"state",{sendStatus:"Send",message:"",email:"",name:"",notification:"",notificationType:""}),h()(Object(r.a)(e)),e}return Object(u.a)(n,t),Object(a.a)(n,[{key:"handleNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handleMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"sendEmail",value:function(){var t=this;if(""==this.state.message)this.setState({notification:"Message is a required field",notificationType:"bad"});else if(""==this.state.email)this.setState({notification:"Your email address is a required field",notificationType:"bad"});else if(""==this.state.name)this.setState({notification:"Your name is a required field",notificationType:"bad"});else{this.setState({sendStatus:"Sending"});var n={name:this.state.name,email:this.state.email,message:this.state.message};console.log(e.env.EMAILJS_UID),g.a.send("default_service","contact_form",n,"user_iwNYDzYdroz7xWuiQ7c0q").then((function(e){t.setState({sendStatus:"sent",notification:"Message sent",notificationType:"good"})}),(function(e){console.log("FAILED...",e)}))}}},{key:"render",value:function(){return S("div",{id:"body"},S("title",null,"PDP - Contact Us"),S(m.a,{CurrentPage:"Contact"}),S("div",{id:"contact-form"},S("h1",null,"Email Us"),S("label",null,"Your Name:"),S("input",{name:"name",type:"text",placeholder:"John Smith",value:this.state.name,onChange:this.handleNameChange}),S("label",null,"Your Email Address:"),S("input",{name:"email",type:"email",placeholder:"jsmith@example.com",value:this.state.email,onChange:this.handleEmailChange}),S("label",null,"Message:"),S("textarea",{name:"message",value:this.state.message,onChange:this.handleMessageChange}),S("button",{className:this.state.sendStatus,onClick:this.sendEmail},this.state.sendStatus),S("label",{id:"notification",className:this.state.notificationType},this.state.notification)),S("div",{id:"AlternateMethods"},S("h4",null,"Phone: (215) 546-2552"),S("div",null,S("h6",null,"Philadelphia Dance Projects"),S("h6",null,"at Philadanco, 9 N. Preston Street"),S("h6",null,"Philadelphia, PA 19104"))),S(p.a,null))}}]),n}(d.a.Component);t.default=b}.call(this,n("8oxB"))},D5Hz:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("MkV5");t.EmailJSResponseStatus=i.EmailJSResponseStatus;var a=n("USkh"),s=null,o="https://api.emailjs.com";function r(e,t,n){return void 0===n&&(n={}),new Promise((function(a,s){var o=new XMLHttpRequest;for(var r in o.addEventListener("load",(function(e){var t=new i.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?a(t):s(t)})),o.addEventListener("error",(function(e){s(new i.EmailJSResponseStatus(e.target))})),o.open("POST",e,!0),n)o.setRequestHeader(r,n[r]);o.send(t)}))}function u(e){var t=document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function l(e,t){s=e,o=t||"https://api.emailjs.com"}function c(e,t,n,i){var a={lib_version:"2.4.1",user_id:i||s,service_id:e,template_id:t,template_params:u(n)};return r(o+"/api/v1.0/email/send",JSON.stringify(a),{"Content-type":"application/json"})}function d(e,t,n,i){if("string"===typeof n&&(n=document.querySelector(n)),!n||"FORM"!==n.nodeName)throw"Expected the HTML form element or the style selector of form";a.UI.progressState(n);var u=new FormData(n);return u.append("lib_version","2.4.1"),u.append("service_id",e),u.append("template_id",t),u.append("user_id",i||s),r(o+"/api/v1.0/email/send-form",u).then((function(e){return a.UI.successState(n),e}),(function(e){return a.UI.errorState(n),Promise.reject(e)}))}t.init=l,t.send=c,t.sendForm=d,t.default={init:l,send:c,sendForm:d}},MkV5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){this.status=e.status,this.text=e.responseText};t.EmailJSResponseStatus=i},USkh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=i},dJSo:function(e,t,n){e.exports=n("1imz")},lqnA:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n("ALdH")}])},vYYK:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("hfKm"),a=n.n(i);function s(e,t,n){return t in e?a()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}}},[["lqnA",1,3,0,4,2]]]);