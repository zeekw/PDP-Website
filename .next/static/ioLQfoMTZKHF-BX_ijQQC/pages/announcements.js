(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{NrHy:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/announcements",function(){return t("wwct")}])},wwct:function(e,n,t){"use strict";t.r(n);var a=t("XXOK"),r=t.n(a),c=t("ln6h"),o=t.n(c),u=t("0iUn"),s=t("sLSF"),i=t("MI3g"),l=t("a7VT"),p=t("AT/M"),d=t("Tit0"),h=t("vYYK"),m=t("q1tI"),f=t.n(m),b=t("SLNS"),w=t("b0oO"),v=t("8lYe"),y=t("Ipk4"),g=t("dJSo"),O=t.n(g),A=t("r/wR"),S=t("hAPS"),_=t("YFqc"),P=t.n(_),j=(t("7AiA"),f.a.createElement),x=function(e){function n(){var e;return Object(u.a)(this,n),e=Object(i.a)(this,Object(l.a)(n).call(this)),Object(h.a)(Object(p.a)(e),"state",{announcements:[],sidebarOpen:!1}),O()(Object(p.a)(e)),e}return Object(d.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.data;this.setState({announcements:e})}},{key:"getNextPage",value:function(){var e,n,t,a,r;return o.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return e=this.state.announcements.length,n=e+this.props.pageIncrement,t='*[_type == "announcement"] | order(date desc) ['.concat(e,"...").concat(n,"]"),c.next=5,o.a.awrap(b.b.fetch(t,{}));case 5:a=c.sent,r=this.state.announcements,this.setState({announcements:r.concat(a)});case 8:case"end":return c.stop()}}),null,this)}},{key:"onSetSidebarOpen",value:function(e){this.setState({sidebarOpen:e})}},{key:"render",value:function(){var e=this.state.announcements,n=!0,t=!1,a=void 0;try{for(var c,o=r()(e);!(n=(c=o.next()).done);n=!0){var u=c.value;u.readableDate=new Date(u._createdAt).toLocaleString([],{year:"numeric",month:"2-digit",day:"numeric",hour:"numeric",minute:"numeric"})}}catch(l){t=!0,a=l}finally{try{n||null==o.return||o.return()}finally{if(t)throw a}}var s=e.map((function(e){return j(y.a,{data:e,image:"heroImage",headline:"title",body:"body",primaryDetail:"readableDate"})})),i=this.props.allAnnouncements.map((function(e){return j(P.a,{href:"/pressclip/"+e.slug.current,to:"/announcement/"+e.slug.current},j("li",null,e.title))}));return console.log(this.props.allAnnouncements),j("div",null,j("title",null,"PDP - Announcements"),j(w.a,{CurrentPage:"Announcements"}),s,j(S.a,{headline:"Archive"},i),j(A.a,{onBottom:this.getNextPage}),j(v.a,null))}}]),n}(f.a.Component);x.getInitialProps=function(e){var n,t,a,r;return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return t='*[_type == "announcement"] | order(date desc) [0...'.concat(n=2,"]"),e.next=4,o.a.awrap(b.b.fetch(t,{}));case 4:return a=e.sent,t='*[_type == "announcement"]{ title, slug }',e.next=8,o.a.awrap(b.b.fetch(t,{}));case 8:return r=e.sent,console.log(r),e.abrupt("return",{data:a,pageIncrement:n,allAnnouncements:r});case 11:case"end":return e.stop()}}))},n.default=x}},[["NrHy",0,2,1,3,4,5,10]]]);