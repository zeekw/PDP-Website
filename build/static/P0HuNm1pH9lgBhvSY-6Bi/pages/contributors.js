(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2Yu2":function(n,r,t){"use strict";t.r(r);var e=t("ln6h"),o=t.n(e),u=t("O40h"),a=t("0iUn"),s=t("sLSF"),i=t("MI3g"),l=t("a7VT"),c=t("Tit0"),p=t("q1tI"),d=t.n(p),b=(t("YFqc"),t("SLNS")),f=(t("S8MR"),t("b0oO")),h=t("8lYe"),m=d.a.createElement,w=function(n){function r(){return Object(a.a)(this,r),Object(i.a)(this,Object(l.a)(r).apply(this,arguments))}return Object(c.a)(r,n),Object(s.a)(r,[{key:"render",value:function(){var n=this.props.currentContributors.map(function(n){return m("a",{href:n.url},m("li",null,n.name))}),r=this.props.pastContributors.map(function(n){return m("a",{href:n.url},m("li",null,n.name))}),t=this.props.donors.map(function(n){return m("span",null,m("span",null,n.firstName+" "+n.lastName),m("span",null,"\xa0\u2022\xa0"))});return console.log(this.props.donors),m("div",{id:"body"},m("title",null,"PDP - Contributors"),m(f.a,{CurrentPage:"Contributors"}),m("div",{id:"Contributors"},m("h3",null,"Contributors"),m("h4",null,"PDP gratefully acknowledges support from:"),m("ul",null,n),m("h4",null,"Additionally past support has included:"),m("ul",null,r)),m("div",{id:"Donors"},m("h3",null,"Donors"),m("p",null,t)),m(h.a,null))}}]),r}(d.a.Component);w.getInitialProps=function(){var n=Object(u.a)(o.a.mark(function n(r){var t,e,u,a;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t='*[_type == "currentcontributor"] | order(order asc, name asc)',n.next=3,b.b.fetch(t,{});case 3:return e=n.sent,t='*[_type == "pastcontributor"] | order(order asc, name asc)',n.next=7,b.b.fetch(t,{});case 7:return u=n.sent,t='*[_type == "donor"] | order(order asc)',n.next=11,b.b.fetch(t,{});case 11:return a=n.sent,n.abrupt("return",{currentContributors:e,pastContributors:u,donors:a});case 13:case"end":return n.stop()}},n)}));return function(r){return n.apply(this,arguments)}}(),r.default=w},"6XAd":function(n,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contributors",function(){var n=t("2Yu2");return{page:n.default||n}}])}},[["6XAd",1,0,2]]]);