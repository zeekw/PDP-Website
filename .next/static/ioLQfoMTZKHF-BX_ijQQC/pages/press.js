(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{T85h:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/press",function(){return a("U2yE")}])},U2yE:function(e,t,a){"use strict";a.r(t);var r=a("ln6h"),n=a.n(r),i=a("XXOK"),s=a.n(i),c=a("0iUn"),o=a("sLSF"),l=a("MI3g"),u=a("a7VT"),p=a("AT/M"),d=a("Tit0"),h=a("vYYK"),f=a("q1tI"),v=a.n(f),y=a("SLNS"),b=a("b0oO"),g=a("8lYe"),w=a("Ipk4"),m=a("dJSo"),x=a.n(m),D=a("r/wR"),O=a("hAPS"),k=a("YFqc"),P=a.n(k),S=(a("7AiA"),v.a.createElement),_=function(e){function t(){var e;return Object(c.a)(this,t),e=Object(l.a)(this,Object(u.a)(t).call(this)),Object(h.a)(Object(p.a)(e),"state",{clips:[],sidebarOpen:!1}),x()(Object(p.a)(e)),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.data;this.setState({clips:e})}},{key:"getNextPage",value:function(){var e,t,a,r,i,c,o,l,u,p,d;return n.a.async((function(h){for(;;)switch(h.prev=h.next){case 0:return e=this.state.clips.length,t=e+this.props.pageIncrement,a='*[_type == "pressclip"]{ "primaryDetail": author + " for " + organization + " - " + date, ... } | order(date desc) ['.concat(e,"...").concat(t,"]"),h.next=5,n.a.awrap(y.b.fetch(a,{}));case 5:for(r=h.sent,i=!0,c=!1,o=void 0,h.prev=9,l=s()(r);!(i=(u=l.next()).done);i=!0)"undefined"!==typeof(p=u.value).articleURL?p.secondaryDetail=S("a",{href:p.articleURL},"Read it on "+p.organization+" here"):p.secondaryDetail="";h.next=17;break;case 13:h.prev=13,h.t0=h.catch(9),c=!0,o=h.t0;case 17:h.prev=17,h.prev=18,i||null==l.return||l.return();case 20:if(h.prev=20,!c){h.next=23;break}throw o;case 23:return h.finish(20);case 24:return h.finish(17);case 25:d=this.state.clips,this.setState({clips:d.concat(r)});case 27:case"end":return h.stop()}}),null,this,[[9,13,17,25],[18,,20,24]])}},{key:"onSetSidebarOpen",value:function(e){this.setState({sidebarOpen:e})}},{key:"render",value:function(){var e=this.state.clips,t=!0,a=!1,r=void 0;try{for(var n,i=s()(e);!(t=(n=i.next()).done);t=!0){var c=n.value;c.readableDate=new Date(c.date).toLocaleString([],{year:"numeric",month:"2-digit",day:"numeric"})}}catch(u){a=!0,r=u}finally{try{t||null==i.return||i.return()}finally{if(a)throw r}}var o=e.map((function(e){return S(w.a,{data:e,image:"heroImage",headline:"title",body:"body",primaryDetail:"primaryDetail",secondaryDetail:"secondaryDetail"})})),l=this.props.allClips.map((function(e){return S(P.a,{href:"/pressclip/"+e.slug.current,to:"/pressclip/"+e.slug.current},S("li",null,e.title))}));return S("div",null,S("title",null,"PDP - Press"),S(b.a,{CurrentPage:"Press"}),o,S(O.a,{headline:"Archive"},l),S(D.a,{onBottom:this.getNextPage}),S(g.a,null))}}]),t}(v.a.Component);_.getInitialProps=function(e){var t,a,r,i,c,o,l,u,p,d;return n.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return a='*[_type == "pressclip"]{ "primaryDetail": author + " for " + organization + " - " + date, ... } | order(date desc) [0...'.concat(t=2,"]"),e.next=4,n.a.awrap(y.b.fetch(a,{}));case 4:for(r=e.sent,i=!0,c=!1,o=void 0,e.prev=8,l=s()(r);!(i=(u=l.next()).done);i=!0)"undefined"!==typeof(p=u.value).articleURL?p.secondaryDetail=S("a",{href:p.articleURL},"Read it on "+p.organization+" here"):p.secondaryDetail="";e.next=16;break;case 12:e.prev=12,e.t0=e.catch(8),c=!0,o=e.t0;case 16:e.prev=16,e.prev=17,i||null==l.return||l.return();case 19:if(e.prev=19,!c){e.next=22;break}throw o;case 22:return e.finish(19);case 23:return e.finish(16);case 24:return a='*[_type == "pressclip"]{ title, slug }',e.next=27,n.a.awrap(y.b.fetch(a,{}));case 27:return d=e.sent,e.abrupt("return",{data:r,pageIncrement:t,allClips:d});case 29:case"end":return e.stop()}}),null,null,[[8,12,16,24],[17,,19,23]])},t.default=_}},[["T85h",0,2,1,3,4,5,10]]]);