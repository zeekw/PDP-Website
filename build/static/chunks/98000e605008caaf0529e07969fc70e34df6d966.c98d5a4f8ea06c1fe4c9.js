(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7AiA":function(t,e,n){},BLB4:function(t,e,n){},"CyK+":function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},Gnek:function(t,e){t.exports=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}},Ipk4:function(t,e,n){"use strict";var i=n("0iUn"),o=n("sLSF"),r=n("MI3g"),s=n("a7VT"),a=n("AT/M"),c=n("Tit0"),h=n("vYYK"),l=n("q1tI"),u=n.n(l),p=(n("YFqc"),n("dJSo"),n("8Kt/"),n("oTbS"),n("SLNS"),n("/UNz")),d=(n("BLB4"),u.a.createElement),f=function(t){function e(){return Object(i.a)(this,e),Object(r.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return d("a",{href:this.props.src,className:"File"},d("div",{className:"cover"}),d("div",{className:"info"},this.props.src.split("/")[6]))}}]),e}(u.a.Component),b=u.a.createElement,v=n("osSN"),S=function(t){function e(){var t;return Object(i.a)(this,e),t=Object(r.a)(this,Object(s.a)(e).call(this)),Object(h.a)(Object(a.a)(t),"state",{data:[]}),t}return Object(c.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){this.props.data.null="",this.setState({data:this.props.data})}},{key:"render",value:function(){var t=this.props.image,e=this.props.headline,n=this.props.primaryDetail,i=this.props.secondaryDetail,o=this.props.tertiaryDetail,r=this.props.body,s={types:{code:function(t){return b("pre",{"data-language":t.node.language},b("code",null,t.node.code))},file:function(t){var e=t.node.asset._ref.split("-"),n=e[1]+"."+e[2];return b(f,{src:"https://cdn.sanity.io/files/ocpl5ulk/pdp-data/"+n})},embed:function(t){return b("div",{className:"embed",dangerouslySetInnerHTML:{__html:t.node.code}})}}};var a=function(e){return null==t?"":t in e&&"asset"in e[t]?b("img",{id:"DocumentImage",src:Object(p.a)(e[t],{w:800,h:400,fp:(n=e[t],"hotspot"in n?{x:n.hotspot.x,y:n.hotspot.y}:{x:.5,y:.5})})}):"";var n};return b("div",{id:"DocumentContainer"},""!=a(this.props.data)?b("div",{id:"ImageContainer"}," ",a(this.props.data)," "):null,b("div",{id:"DocumentText"},b("h3",null,this.props.data[e]),b("h6",{style:{display:null!=n||"undefined"!==typeof n?"inline":"none"}},b("span",{id:"PrimaryDetail"},this.props.data[n]),b("span",{id:"DetailDivider",style:{display:null==i&&"undefined"===typeof i||""==this.props.data[i]?"none":"inline"}},"|"),b("span",{id:"SecondaryDetail"},this.props.data[i]),b("span",{id:"DetailDivider",style:{display:null==o&&"undefined"===typeof o||""==this.props.data[o]?"none":"inline"}},"|"),b("span",{id:"tertiaryDetail"},this.props.data[o])),b(v,{id:"DocumentDescription",blocks:this.props.data[r],serializers:s,projectId:"ocpl5ulk",dataset:"pdp-data"})))}}]),e}(u.a.Component);e.a=S},"O/Pa":function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},gL9P:function(t,e,n){var i=n("O/Pa");t.exports=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?Object(arguments[e]):{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(e){i(t,e,n[e])}))}return t}},hAPS:function(t,e,n){"use strict";var i=n("0iUn"),o=n("sLSF"),r=n("MI3g"),s=n("a7VT"),a=n("AT/M"),c=n("Tit0"),h=n("vYYK"),l=n("q1tI"),u=n.n(l),p=(n("YFqc"),n("dJSo")),d=n.n(p),f=n("gL9P"),b=n.n(f),v=n("Gnek"),S=n.n(v),y=n("CyK+"),m=n.n(y),g=(n("17x9"),{position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden"}),O={zIndex:2,position:"absolute",top:0,bottom:0,transition:"transform .3s ease-out",WebkitTransition:"-webkit-transform .3s ease-out",willChange:"transform",overflowY:"auto"},T={position:"absolute",top:0,left:0,right:0,bottom:0,overflowY:"auto",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"},C={zIndex:1,position:"fixed",top:0,left:0,right:0,bottom:0,opacity:0,visibility:"hidden",transition:"opacity .3s ease-out, visibility .3s ease-out",backgroundColor:"rgba(0,0,0,.3)"},w={zIndex:1,position:"fixed",top:0,bottom:0},j=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={sidebarWidth:e.defaultSidebarWidth,touchIdentifier:null,touchStartX:null,touchCurrentX:null,dragSupported:!1},n.overlayClicked=n.overlayClicked.bind(m()(m()(n))),n.onTouchStart=n.onTouchStart.bind(m()(m()(n))),n.onTouchMove=n.onTouchMove.bind(m()(m()(n))),n.onTouchEnd=n.onTouchEnd.bind(m()(m()(n))),n.onScroll=n.onScroll.bind(m()(m()(n))),n.saveSidebarRef=n.saveSidebarRef.bind(m()(m()(n))),n}S()(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=/iPad|iPhone|iPod/.test(navigator?navigator.userAgent:"");this.setState({dragSupported:"object"===typeof window&&"ontouchstart"in window&&!t}),this.saveSidebarWidth()},n.componentDidUpdate=function(){this.isTouching()||this.saveSidebarWidth()},n.onTouchStart=function(t){if(!this.isTouching()){var e=t.targetTouches[0];this.setState({touchIdentifier:e.identifier,touchStartX:e.clientX,touchCurrentX:e.clientX})}},n.onTouchMove=function(t){if(this.isTouching())for(var e=0;e<t.targetTouches.length;e++)if(t.targetTouches[e].identifier===this.state.touchIdentifier){this.setState({touchCurrentX:t.targetTouches[e].clientX});break}},n.onTouchEnd=function(){if(this.isTouching()){var t=this.touchSidebarWidth();(this.props.open&&t<this.state.sidebarWidth-this.props.dragToggleDistance||!this.props.open&&t>this.props.dragToggleDistance)&&this.props.onSetOpen(!this.props.open),this.setState({touchIdentifier:null,touchStartX:null,touchCurrentX:null})}},n.onScroll=function(){this.isTouching()&&this.inCancelDistanceOnScroll()&&this.setState({touchIdentifier:null,touchStartX:null,touchCurrentX:null})},n.inCancelDistanceOnScroll=function(){return this.props.pullRight?Math.abs(this.state.touchCurrentX-this.state.touchStartX)<20:Math.abs(this.state.touchStartX-this.state.touchCurrentX)<20},n.isTouching=function(){return null!==this.state.touchIdentifier},n.overlayClicked=function(){this.props.open&&this.props.onSetOpen(!1)},n.saveSidebarWidth=function(){var t=this.sidebar.offsetWidth;t!==this.state.sidebarWidth&&this.setState({sidebarWidth:t})},n.saveSidebarRef=function(t){this.sidebar=t},n.touchSidebarWidth=function(){return this.props.pullRight?this.props.open&&window.innerWidth-this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth+this.state.touchStartX-this.state.touchCurrentX:this.state.sidebarWidth:Math.min(window.innerWidth-this.state.touchCurrentX,this.state.sidebarWidth):this.props.open&&this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth:this.state.sidebarWidth-this.state.touchStartX+this.state.touchCurrentX:Math.min(this.state.touchCurrentX,this.state.sidebarWidth)},n.render=function(){var t,e=b()({},O,this.props.styles.sidebar),n=b()({},T,this.props.styles.content),i=b()({},C,this.props.styles.overlay),o=this.state.dragSupported&&this.props.touch,r=this.isTouching(),s={className:this.props.rootClassName,style:b()({},g,this.props.styles.root),role:"navigation",id:this.props.rootId},a=this.props.shadow&&(r||this.props.open||this.props.docked);if(this.props.pullRight?(e.right=0,e.transform="translateX(100%)",e.WebkitTransform="translateX(100%)",a&&(e.boxShadow="-2px 2px 4px rgba(0, 0, 0, 0.15)")):(e.left=0,e.transform="translateX(-100%)",e.WebkitTransform="translateX(-100%)",a&&(e.boxShadow="2px 2px 4px rgba(0, 0, 0, 0.15)")),r){var c=this.touchSidebarWidth()/this.state.sidebarWidth;this.props.pullRight?(e.transform="translateX("+100*(1-c)+"%)",e.WebkitTransform="translateX("+100*(1-c)+"%)"):(e.transform="translateX(-"+100*(1-c)+"%)",e.WebkitTransform="translateX(-"+100*(1-c)+"%)"),i.opacity=c,i.visibility="visible"}else this.props.docked?(0!==this.state.sidebarWidth&&(e.transform="translateX(0%)",e.WebkitTransform="translateX(0%)"),this.props.pullRight?n.right=this.state.sidebarWidth+"px":n.left=this.state.sidebarWidth+"px"):this.props.open&&(e.transform="translateX(0%)",e.WebkitTransform="translateX(0%)",i.opacity=1,i.visibility="visible");if(!r&&this.props.transitions||(e.transition="none",e.WebkitTransition="none",n.transition="none",i.transition="none"),o)if(this.props.open)s.onTouchStart=this.onTouchStart,s.onTouchMove=this.onTouchMove,s.onTouchEnd=this.onTouchEnd,s.onTouchCancel=this.onTouchEnd,s.onScroll=this.onScroll;else{var h=b()({},w,this.props.styles.dragHandle);h.width=this.props.touchHandleWidth,this.props.pullRight?h.right=0:h.left=0,t=u.a.createElement("div",{style:h,onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd})}return u.a.createElement("div",s,u.a.createElement("div",{className:this.props.sidebarClassName,style:e,ref:this.saveSidebarRef,id:this.props.sidebarId},this.props.sidebar),u.a.createElement("div",{className:this.props.overlayClassName,style:i,onClick:this.overlayClicked,id:this.props.overlayId}),u.a.createElement("div",{className:this.props.contentClassName,style:n,id:this.props.contentId},t,this.props.children))},e}(l.Component);j.defaultProps={docked:!1,open:!1,transitions:!0,touch:!0,touchHandleWidth:20,pullRight:!1,shadow:!0,dragToggleDistance:30,onSetOpen:function(){},styles:{},defaultSidebarWidth:0};var W=j,X=(n("7AiA"),u.a.createElement),k=function(t){function e(){var t;return Object(i.a)(this,e),t=Object(r.a)(this,Object(s.a)(e).call(this)),Object(h.a)(Object(a.a)(t),"state",{sidebarOpen:!1}),d()(Object(a.a)(t)),t}return Object(c.a)(e,t),Object(o.a)(e,[{key:"onSetSidebarOpen",value:function(t){this.setState({sidebarOpen:t})}},{key:"render",value:function(){var t=this;return X("div",{id:"SidebarContainer"},X(W,{rootId:"Sidebar",rootClassName:this.state.sidebarOpen?"":"hidden",sidebar:X("div",{id:"SidebarContent"},X("div",{id:"SidebarHeader"},X("h1",null,this.props.headline),X("h2",{onClick:function(){return t.onSetSidebarOpen(!1)}},"\u2716")),X("ul",{id:"SidebarList"},this.props.children)),pullRight:!0,open:this.state.sidebarOpen,onSetOpen:this.onSetSidebarOpen,styles:{sidebar:{background:"white"}}}),X("button",{id:"OpenSidebarButton",class:this.state.sidebarOpen?"hiddenButton":"",onClick:function(){return t.onSetSidebarOpen(!0)}},this.props.headline))}}]),e}(u.a.Component);e.a=k},oTbS:function(t,e,n){},"r/wR":function(t,e,n){"use strict";(function(t){var i=n("q1tI"),o=n.n(i),r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};var s="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},a="Expected a function",c=NaN,h="[object Symbol]",l=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,d=/^0o[0-7]+$/i,f=parseInt,b="object"==typeof s&&s&&s.Object===Object&&s,v="object"==typeof self&&self&&self.Object===Object&&self,S=b||v||Function("return this")(),y=Object.prototype.toString,m=Math.max,g=Math.min,O=function(){return S.Date.now()};function T(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function C(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&y.call(t)==h}(t))return c;if(T(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=T(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var n=p.test(t);return n||d.test(t)?f(t.slice(2),n?2:8):u.test(t)?c:+t}var w=function(t,e,n){var i,o,r,s,c,h,l=0,u=!1,p=!1,d=!0;if("function"!=typeof t)throw new TypeError(a);function f(e){var n=i,r=o;return i=o=void 0,l=e,s=t.apply(r,n)}function b(t){var n=t-h;return void 0===h||n>=e||n<0||p&&t-l>=r}function v(){var t=O();if(b(t))return S(t);c=setTimeout(v,function(t){var n=e-(t-h);return p?g(n,r-(t-l)):n}(t))}function S(t){return c=void 0,d&&i?f(t):(i=o=void 0,s)}function y(){var t=O(),n=b(t);if(i=arguments,o=this,h=t,n){if(void 0===c)return function(t){return l=t,c=setTimeout(v,e),u?f(t):s}(h);if(p)return c=setTimeout(v,e),f(h)}return void 0===c&&(c=setTimeout(v,e)),s}return e=C(e)||0,T(n)&&(u=!!n.leading,r=(p="maxWait"in n)?m(C(n.maxWait)||0,e):r,d="trailing"in n?!!n.trailing:d),y.cancel=function(){void 0!==c&&clearTimeout(c),l=0,i=h=o=c=void 0},y.flush=function(){return void 0===c?s:S(O())},y},j=function(t){function e(e){var n=t.call(this,e)||this;return n.optionalScrollContainerRef=o.a.createRef(),e.debounce?n.handleOnScroll=w(n.handleOnScroll.bind(n),e.debounce,{trailing:!0}):n.handleOnScroll=n.handleOnScroll.bind(n),n}return function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.componentDidMount=function(){if(this.props.children instanceof Function){if(!this.optionalScrollContainerRef.current)throw Error("Unable to use scroll container: Ref to child not available, did you pass the ref prop to an element?");this.optionalScrollContainerRef.current.addEventListener("scroll",this.handleOnScroll)}else document.addEventListener("scroll",this.handleOnScroll)},e.prototype.componentWillUnmount=function(){if(this.props.children instanceof Function){if(!this.optionalScrollContainerRef.current)throw Error("Unable to clean up scroll container: Ref has been unmounted prematurely.");this.optionalScrollContainerRef.current.removeEventListener("scroll",this.handleOnScroll)}else document.removeEventListener("scroll",this.handleOnScroll)},e.prototype.handleOnScroll=function(){if(this.props.children instanceof Function){if(null!=(e=this.optionalScrollContainerRef.current)){var t=Math.round(e.scrollTop+e.clientHeight);Math.round(e.scrollHeight-this.props.offset)<=t&&this.props.onBottom()}}else{var e=document.scrollingElement||document.documentElement;t=Math.round(e.scrollTop+window.innerHeight);Math.round(e.scrollHeight-this.props.offset)<=t&&this.props.onBottom()}},e.prototype.render=function(){return this.props.children?this.props.children instanceof Function?this.props.children(this.optionalScrollContainerRef):this.props.children:null},e.defaultProps={debounce:200,offset:0},e}(i.Component);e.a=j}).call(this,n("yLpj"))}}]);