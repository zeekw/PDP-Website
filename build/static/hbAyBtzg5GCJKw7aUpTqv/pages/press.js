(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"CyK+":function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},Gnek:function(t,e){t.exports=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}},Ipk4:function(t,e,n){"use strict";var i=n("0iUn"),r=n("sLSF"),o=n("MI3g"),a=n("a7VT"),s=n("AT/M"),c=n("Tit0"),l=n("vYYK"),u=n("q1tI"),h=n.n(u),p=(n("YFqc"),n("dJSo"),n("m/Pd"),n("oTbS"),n("SLNS"),n("/UNz")),d=(n("BLB4"),h.a.createElement),f=function(t){function e(){return Object(i.a)(this,e),Object(o.a)(this,Object(a.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return d("a",{href:this.props.src,className:"File"},d("div",{className:"cover"}),d("div",{className:"info"},this.props.src.split("/")[6]))}}]),e}(h.a.Component),b=h.a.createElement,v=n("osSN"),y=function(t){function e(){var t;return Object(i.a)(this,e),t=Object(o.a)(this,Object(a.a)(e).call(this)),Object(l.a)(Object(s.a)(t),"state",{data:[]}),t}return Object(c.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.props.data.null="",this.setState({data:this.props.data})}},{key:"render",value:function(){var t=this.props.image,e=this.props.headline,n=this.props.primaryDetail,i=this.props.secondaryDetail,r=this.props.tertiaryDetail,o=this.props.body,a={types:{code:function(t){return b("pre",{"data-language":t.node.language},b("code",null,t.node.code))},file:function(t){var e=t.node.asset._ref.split("-"),n=e[1]+"."+e[2];return b(f,{src:"https://cdn.sanity.io/files/ocpl5ulk/pdp-data/"+n})},embed:function(t){return b("div",{className:"embed",dangerouslySetInnerHTML:{__html:t.node.code}})}}};var s=function(e){return null==t?"":t in e&&"asset"in e[t]?b("img",{id:"DocumentImage",src:Object(p.a)(e[t],{w:800,h:400,fp:(n=e[t],"hotspot"in n?{x:n.hotspot.x,y:n.hotspot.y}:{x:.5,y:.5})})}):"";var n};return b("div",{id:"DocumentContainer"},""!=s(this.props.data)?b("div",{id:"ImageContainer"}," ",s(this.props.data)," "):null,b("div",{id:"DocumentText"},b("h3",null,this.props.data[e]),b("h6",{style:{display:null!=n||"undefined"!==typeof n?"inline":"none"}},b("span",{id:"PrimaryDetail"},this.props.data[n]),b("span",{id:"DetailDivider",style:{display:null==i&&"undefined"===typeof i||""==this.props.data[i]?"none":"inline"}},"|"),b("span",{id:"SecondaryDetail"},this.props.data[i]),b("span",{id:"DetailDivider",style:{display:null==r&&"undefined"===typeof r||""==this.props.data[r]?"none":"inline"}},"|"),b("span",{id:"tertiaryDetail"},this.props.data[r])),b(v,{id:"DocumentDescription",blocks:this.props.data[o],serializers:a,projectId:"ocpl5ulk",dataset:"pdp-data"})))}}]),e}(h.a.Component);e.a=y},"O/Pa":function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},T85h:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/press",function(){var t=n("U2yE");return{page:t.default||t}}])},U2yE:function(t,e,n){"use strict";n.r(e);var i=n("ln6h"),r=n.n(i),o=n("XXOK"),a=n.n(o),s=n("O40h"),c=n("0iUn"),l=n("sLSF"),u=n("MI3g"),h=n("a7VT"),p=n("AT/M"),d=n("Tit0"),f=n("vYYK"),b=n("q1tI"),v=n.n(b),y=n("SLNS"),m=n("b0oO"),S=n("8lYe"),g=n("Ipk4"),O=n("dJSo"),T=n.n(O),w=n("r/wR"),j=n("hAPS"),C=n("YFqc"),k=n.n(C),X=(n("7AiA"),v.a.createElement),x=function(t){function e(){var t;return Object(c.a)(this,e),t=Object(u.a)(this,Object(h.a)(e).call(this)),Object(f.a)(Object(p.a)(t),"state",{clips:[],sidebarOpen:!1}),T()(Object(p.a)(t)),t}return Object(d.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.data;this.setState({clips:t})}},{key:"getNextPage",value:function(){var t=Object(s.a)(r.a.mark(function t(){var e,n,i,o,s,c,l,u,h,p,d;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.state.clips.length,n=e+this.props.pageIncrement,i='*[_type == "pressclip"]{ "primaryDetail": author + " for " + organization + " - " + date, ... } | order(date desc) ['.concat(e,"...").concat(n,"]"),t.next=5,y.b.fetch(i,{});case 5:for(o=t.sent,s=!0,c=!1,l=void 0,t.prev=9,u=a()(o);!(s=(h=u.next()).done);s=!0)"undefined"!==typeof(p=h.value).articleURL?p.secondaryDetail=X("a",{href:p.articleURL},"Read it on "+p.organization+" here"):p.secondaryDetail="";t.next=17;break;case 13:t.prev=13,t.t0=t.catch(9),c=!0,l=t.t0;case 17:t.prev=17,t.prev=18,s||null==u.return||u.return();case 20:if(t.prev=20,!c){t.next=23;break}throw l;case 23:return t.finish(20);case 24:return t.finish(17);case 25:d=this.state.clips,this.setState({clips:d.concat(o)});case 27:case"end":return t.stop()}},t,this,[[9,13,17,25],[18,,20,24]])}));return function(){return t.apply(this,arguments)}}()},{key:"onSetSidebarOpen",value:function(t){this.setState({sidebarOpen:t})}},{key:"render",value:function(){var t=this.state.clips,e=!0,n=!1,i=void 0;try{for(var r,o=a()(t);!(e=(r=o.next()).done);e=!0){var s=r.value;s.readableDate=new Date(s.date).toLocaleString([],{year:"numeric",month:"2-digit",day:"numeric"})}}catch(u){n=!0,i=u}finally{try{e||null==o.return||o.return()}finally{if(n)throw i}}var c=t.map(function(t){return X(g.a,{data:t,image:"heroImage",headline:"title",body:"body",primaryDetail:"primaryDetail",secondaryDetail:"secondaryDetail"})}),l=this.props.allClips.map(function(t){return X(k.a,{href:"/pressclip/"+t.slug.current,to:"/pressclip/"+t.slug.current},X("li",null,t.title))});return X("div",null,X("title",null,"PDP"),X(m.a,{CurrentPage:"Press"}),c,X(j.a,{headline:"Archive"},l),X(w.a,{onBottom:this.getNextPage}),X(S.a,null))}}]),e}(v.a.Component);x.getInitialProps=function(){var t=Object(s.a)(r.a.mark(function t(e){var n,i,o,s,c,l,u,h,p,d;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i='*[_type == "pressclip"]{ "primaryDetail": author + " for " + organization + " - " + date, ... } | order(date desc) [0...'.concat(n=2,"]"),t.next=4,y.b.fetch(i,{});case 4:for(o=t.sent,s=!0,c=!1,l=void 0,t.prev=8,u=a()(o);!(s=(h=u.next()).done);s=!0)"undefined"!==typeof(p=h.value).articleURL?p.secondaryDetail=X("a",{href:p.articleURL},"Read it on "+p.organization+" here"):p.secondaryDetail="";t.next=16;break;case 12:t.prev=12,t.t0=t.catch(8),c=!0,l=t.t0;case 16:t.prev=16,t.prev=17,s||null==u.return||u.return();case 19:if(t.prev=19,!c){t.next=22;break}throw l;case 22:return t.finish(19);case 23:return t.finish(16);case 24:return i='*[_type == "pressclip"]{ title, slug }',t.next=27,y.b.fetch(i,{});case 27:return d=t.sent,t.abrupt("return",{data:o,pageIncrement:n,allClips:d});case 29:case"end":return t.stop()}},t,null,[[8,12,16,24],[17,,19,23]])}));return function(e){return t.apply(this,arguments)}}(),e.default=x},gL9P:function(t,e,n){var i=n("O/Pa");t.exports=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?Object(arguments[e]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){i(t,e,n[e])})}return t}},hAPS:function(t,e,n){"use strict";var i=n("0iUn"),r=n("sLSF"),o=n("MI3g"),a=n("a7VT"),s=n("AT/M"),c=n("Tit0"),l=n("vYYK"),u=n("q1tI"),h=n.n(u),p=(n("YFqc"),n("dJSo")),d=n.n(p),f=n("gL9P"),b=n.n(f),v=n("Gnek"),y=n.n(v),m=n("CyK+"),S=n.n(m),g=(n("17x9"),{position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden"}),O={zIndex:2,position:"absolute",top:0,bottom:0,transition:"transform .3s ease-out",WebkitTransition:"-webkit-transform .3s ease-out",willChange:"transform",overflowY:"auto"},T={position:"absolute",top:0,left:0,right:0,bottom:0,overflowY:"auto",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"},w={zIndex:1,position:"fixed",top:0,left:0,right:0,bottom:0,opacity:0,visibility:"hidden",transition:"opacity .3s ease-out, visibility .3s ease-out",backgroundColor:"rgba(0,0,0,.3)"},j={zIndex:1,position:"fixed",top:0,bottom:0},C=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={sidebarWidth:e.defaultSidebarWidth,touchIdentifier:null,touchStartX:null,touchCurrentX:null,dragSupported:!1},n.overlayClicked=n.overlayClicked.bind(S()(S()(n))),n.onTouchStart=n.onTouchStart.bind(S()(S()(n))),n.onTouchMove=n.onTouchMove.bind(S()(S()(n))),n.onTouchEnd=n.onTouchEnd.bind(S()(S()(n))),n.onScroll=n.onScroll.bind(S()(S()(n))),n.saveSidebarRef=n.saveSidebarRef.bind(S()(S()(n))),n}y()(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=/iPad|iPhone|iPod/.test(navigator?navigator.userAgent:"");this.setState({dragSupported:"object"===typeof window&&"ontouchstart"in window&&!t}),this.saveSidebarWidth()},n.componentDidUpdate=function(){this.isTouching()||this.saveSidebarWidth()},n.onTouchStart=function(t){if(!this.isTouching()){var e=t.targetTouches[0];this.setState({touchIdentifier:e.identifier,touchStartX:e.clientX,touchCurrentX:e.clientX})}},n.onTouchMove=function(t){if(this.isTouching())for(var e=0;e<t.targetTouches.length;e++)if(t.targetTouches[e].identifier===this.state.touchIdentifier){this.setState({touchCurrentX:t.targetTouches[e].clientX});break}},n.onTouchEnd=function(){if(this.isTouching()){var t=this.touchSidebarWidth();(this.props.open&&t<this.state.sidebarWidth-this.props.dragToggleDistance||!this.props.open&&t>this.props.dragToggleDistance)&&this.props.onSetOpen(!this.props.open),this.setState({touchIdentifier:null,touchStartX:null,touchCurrentX:null})}},n.onScroll=function(){this.isTouching()&&this.inCancelDistanceOnScroll()&&this.setState({touchIdentifier:null,touchStartX:null,touchCurrentX:null})},n.inCancelDistanceOnScroll=function(){return this.props.pullRight?Math.abs(this.state.touchCurrentX-this.state.touchStartX)<20:Math.abs(this.state.touchStartX-this.state.touchCurrentX)<20},n.isTouching=function(){return null!==this.state.touchIdentifier},n.overlayClicked=function(){this.props.open&&this.props.onSetOpen(!1)},n.saveSidebarWidth=function(){var t=this.sidebar.offsetWidth;t!==this.state.sidebarWidth&&this.setState({sidebarWidth:t})},n.saveSidebarRef=function(t){this.sidebar=t},n.touchSidebarWidth=function(){return this.props.pullRight?this.props.open&&window.innerWidth-this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth+this.state.touchStartX-this.state.touchCurrentX:this.state.sidebarWidth:Math.min(window.innerWidth-this.state.touchCurrentX,this.state.sidebarWidth):this.props.open&&this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth:this.state.sidebarWidth-this.state.touchStartX+this.state.touchCurrentX:Math.min(this.state.touchCurrentX,this.state.sidebarWidth)},n.render=function(){var t,e=b()({},O,this.props.styles.sidebar),n=b()({},T,this.props.styles.content),i=b()({},w,this.props.styles.overlay),r=this.state.dragSupported&&this.props.touch,o=this.isTouching(),a={className:this.props.rootClassName,style:b()({},g,this.props.styles.root),role:"navigation",id:this.props.rootId},s=this.props.shadow&&(o||this.props.open||this.props.docked);if(this.props.pullRight?(e.right=0,e.transform="translateX(100%)",e.WebkitTransform="translateX(100%)",s&&(e.boxShadow="-2px 2px 4px rgba(0, 0, 0, 0.15)")):(e.left=0,e.transform="translateX(-100%)",e.WebkitTransform="translateX(-100%)",s&&(e.boxShadow="2px 2px 4px rgba(0, 0, 0, 0.15)")),o){var c=this.touchSidebarWidth()/this.state.sidebarWidth;this.props.pullRight?(e.transform="translateX("+100*(1-c)+"%)",e.WebkitTransform="translateX("+100*(1-c)+"%)"):(e.transform="translateX(-"+100*(1-c)+"%)",e.WebkitTransform="translateX(-"+100*(1-c)+"%)"),i.opacity=c,i.visibility="visible"}else this.props.docked?(0!==this.state.sidebarWidth&&(e.transform="translateX(0%)",e.WebkitTransform="translateX(0%)"),this.props.pullRight?n.right=this.state.sidebarWidth+"px":n.left=this.state.sidebarWidth+"px"):this.props.open&&(e.transform="translateX(0%)",e.WebkitTransform="translateX(0%)",i.opacity=1,i.visibility="visible");if(!o&&this.props.transitions||(e.transition="none",e.WebkitTransition="none",n.transition="none",i.transition="none"),r)if(this.props.open)a.onTouchStart=this.onTouchStart,a.onTouchMove=this.onTouchMove,a.onTouchEnd=this.onTouchEnd,a.onTouchCancel=this.onTouchEnd,a.onScroll=this.onScroll;else{var l=b()({},j,this.props.styles.dragHandle);l.width=this.props.touchHandleWidth,this.props.pullRight?l.right=0:l.left=0,t=h.a.createElement("div",{style:l,onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd})}return h.a.createElement("div",a,h.a.createElement("div",{className:this.props.sidebarClassName,style:e,ref:this.saveSidebarRef,id:this.props.sidebarId},this.props.sidebar),h.a.createElement("div",{className:this.props.overlayClassName,style:i,onClick:this.overlayClicked,id:this.props.overlayId}),h.a.createElement("div",{className:this.props.contentClassName,style:n,id:this.props.contentId},t,this.props.children))},e}(u.Component);C.defaultProps={docked:!1,open:!1,transitions:!0,touch:!0,touchHandleWidth:20,pullRight:!1,shadow:!0,dragToggleDistance:30,onSetOpen:function(){},styles:{},defaultSidebarWidth:0};var k=C,X=(n("7AiA"),h.a.createElement),x=function(t){function e(){var t;return Object(i.a)(this,e),t=Object(o.a)(this,Object(a.a)(e).call(this)),Object(l.a)(Object(s.a)(t),"state",{sidebarOpen:!1}),d()(Object(s.a)(t)),t}return Object(c.a)(e,t),Object(r.a)(e,[{key:"onSetSidebarOpen",value:function(t){this.setState({sidebarOpen:t})}},{key:"render",value:function(){var t=this;return X("div",{id:"SidebarContainer"},X(k,{rootId:"Sidebar",rootClassName:this.state.sidebarOpen?"":"hidden",sidebar:X("div",{id:"SidebarContent"},X("div",{id:"SidebarHeader"},X("h1",null,this.props.headline),X("h2",{onClick:function(){return t.onSetSidebarOpen(!1)}},"\u2716")),X("ul",{id:"SidebarList"},this.props.children)),pullRight:!0,open:this.state.sidebarOpen,onSetOpen:this.onSetSidebarOpen,styles:{sidebar:{background:"white"}}}),X("button",{id:"OpenSidebarButton",class:this.state.sidebarOpen?"hiddenButton":"",onClick:function(){return t.onSetSidebarOpen(!0)}},this.props.headline))}}]),e}(h.a.Component);e.a=x},"r/wR":function(t,e,n){"use strict";(function(t){var i=n("q1tI"),r=n.n(i),o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};var a="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},s="Expected a function",c=NaN,l="[object Symbol]",u=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,d=/^0o[0-7]+$/i,f=parseInt,b="object"==typeof a&&a&&a.Object===Object&&a,v="object"==typeof self&&self&&self.Object===Object&&self,y=b||v||Function("return this")(),m=Object.prototype.toString,S=Math.max,g=Math.min,O=function(){return y.Date.now()};function T(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&m.call(t)==l}(t))return c;if(T(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=T(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var n=p.test(t);return n||d.test(t)?f(t.slice(2),n?2:8):h.test(t)?c:+t}var j=function(t,e,n){var i,r,o,a,c,l,u=0,h=!1,p=!1,d=!0;if("function"!=typeof t)throw new TypeError(s);function f(e){var n=i,o=r;return i=r=void 0,u=e,a=t.apply(o,n)}function b(t){var n=t-l;return void 0===l||n>=e||n<0||p&&t-u>=o}function v(){var t=O();if(b(t))return y(t);c=setTimeout(v,function(t){var n=e-(t-l);return p?g(n,o-(t-u)):n}(t))}function y(t){return c=void 0,d&&i?f(t):(i=r=void 0,a)}function m(){var t=O(),n=b(t);if(i=arguments,r=this,l=t,n){if(void 0===c)return function(t){return u=t,c=setTimeout(v,e),h?f(t):a}(l);if(p)return c=setTimeout(v,e),f(l)}return void 0===c&&(c=setTimeout(v,e)),a}return e=w(e)||0,T(n)&&(h=!!n.leading,o=(p="maxWait"in n)?S(w(n.maxWait)||0,e):o,d="trailing"in n?!!n.trailing:d),m.cancel=function(){void 0!==c&&clearTimeout(c),u=0,i=l=r=c=void 0},m.flush=function(){return void 0===c?a:y(O())},m},C=function(t){function e(e){var n=t.call(this,e)||this;return n.optionalScrollContainerRef=r.a.createRef(),e.debounce?n.handleOnScroll=j(n.handleOnScroll.bind(n),e.debounce,{trailing:!0}):n.handleOnScroll=n.handleOnScroll.bind(n),n}return function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.componentDidMount=function(){if(this.props.children instanceof Function){if(!this.optionalScrollContainerRef.current)throw Error("Unable to use scroll container: Ref to child not available, did you pass the ref prop to an element?");this.optionalScrollContainerRef.current.addEventListener("scroll",this.handleOnScroll)}else document.addEventListener("scroll",this.handleOnScroll)},e.prototype.componentWillUnmount=function(){if(this.props.children instanceof Function){if(!this.optionalScrollContainerRef.current)throw Error("Unable to clean up scroll container: Ref has been unmounted prematurely.");this.optionalScrollContainerRef.current.removeEventListener("scroll",this.handleOnScroll)}else document.removeEventListener("scroll",this.handleOnScroll)},e.prototype.handleOnScroll=function(){if(this.props.children instanceof Function){if(null!=(e=this.optionalScrollContainerRef.current)){var t=Math.round(e.scrollTop+e.clientHeight);Math.round(e.scrollHeight-this.props.offset)<=t&&this.props.onBottom()}}else{var e=document.scrollingElement||document.documentElement;t=Math.round(e.scrollTop+window.innerHeight);Math.round(e.scrollHeight-this.props.offset)<=t&&this.props.onBottom()}},e.prototype.render=function(){return this.props.children?this.props.children instanceof Function?this.props.children(this.optionalScrollContainerRef):this.props.children:null},e.defaultProps={debounce:200,offset:0},e}(i.Component);e.a=C}).call(this,n("yLpj"))}},[["T85h",1,0,2]]]);