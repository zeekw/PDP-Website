(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{Ipk4:function(t,e,a){"use strict";var n=a("0iUn"),i=a("sLSF"),r=a("MI3g"),s=a("a7VT"),o=a("AT/M"),p=a("Tit0"),c=a("vYYK"),l=a("q1tI"),d=a.n(l),u=(a("YFqc"),a("dJSo"),a("m/Pd"),a("oTbS"),a("SLNS"),a("/UNz")),h=(a("BLB4"),d.a.createElement),y=function(t){function e(){return Object(n.a)(this,e),Object(r.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return h("a",{href:this.props.src,className:"File"},h("div",{className:"cover"}),h("div",{className:"info"},this.props.src.split("/")[6]))}}]),e}(d.a.Component),f=d.a.createElement,m=a("osSN"),b=function(t){function e(){var t;return Object(n.a)(this,e),t=Object(r.a)(this,Object(s.a)(e).call(this)),Object(c.a)(Object(o.a)(t),"state",{data:[]}),t}return Object(p.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){this.props.data.null="",this.setState({data:this.props.data})}},{key:"render",value:function(){var t=this.props.image,e=this.props.headline,a=this.props.primaryDetail,n=this.props.secondaryDetail,i=this.props.tertiaryDetail,r=this.props.body,s={types:{code:function(t){return f("pre",{"data-language":t.node.language},f("code",null,t.node.code))},file:function(t){var e=t.node.asset._ref.split("-"),a=e[1]+"."+e[2];return f(y,{src:"https://cdn.sanity.io/files/ocpl5ulk/pdp-data/"+a})},embed:function(t){return f("div",{className:"embed",dangerouslySetInnerHTML:{__html:t.node.code}})}}};var o=function(e){return null==t?"":t in e&&"asset"in e[t]?f("img",{id:"DocumentImage",src:Object(u.a)(e[t],{w:800,h:400,fp:(a=e[t],"hotspot"in a?{x:a.hotspot.x,y:a.hotspot.y}:{x:.5,y:.5})})}):"";var a};return f("div",{id:"DocumentContainer"},""!=o(this.props.data)?f("div",{id:"ImageContainer"}," ",o(this.props.data)," "):null,f("div",{id:"DocumentText"},f("h3",null,this.props.data[e]),f("h6",{style:{display:null!=a||"undefined"!==typeof a?"inline":"none"}},f("span",{id:"PrimaryDetail"},this.props.data[a]),f("span",{id:"DetailDivider",style:{display:null==n&&"undefined"===typeof n||""==this.props.data[n]?"none":"inline"}},"|"),f("span",{id:"SecondaryDetail"},this.props.data[n]),f("span",{id:"DetailDivider",style:{display:null==i&&"undefined"===typeof i||""==this.props.data[i]?"none":"inline"}},"|"),f("span",{id:"tertiaryDetail"},this.props.data[i])),f(m,{id:"DocumentDescription",blocks:this.props.data[r],serializers:s,projectId:"ocpl5ulk",dataset:"pdp-data"})))}}]),e}(d.a.Component);e.a=b},iFtZ:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pressclip/[slug]",function(){var t=a("xCEP");return{page:t.default||t}}])},xCEP:function(t,e,a){"use strict";a.r(e);var n=a("ln6h"),i=a.n(n),r=a("O40h"),s=a("0iUn"),o=a("sLSF"),p=a("MI3g"),c=a("a7VT"),l=a("AT/M"),d=a("Tit0"),u=a("vYYK"),h=a("q1tI"),y=a.n(h),f=(a("YFqc"),a("nOHt"),a("SLNS")),m=a("b0oO"),b=a("8lYe"),v=a("Ipk4"),D=y.a.createElement,g=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return a=Object(p.a)(this,(t=Object(c.a)(e)).call.apply(t,[this].concat(i))),Object(u.a)(Object(l.a)(a),"state",{data:{}}),a}return Object(d.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.data;t.readableDate=new Date(t.date).toLocaleString([],{year:"numeric",month:"2-digit",day:"numeric"}),this.setState({data:t})}},{key:"render",value:function(){return D("div",null,D("title",null,"PDP"),D(m.a,{CurrentPage:"Press Clip"}),D(v.a,{data:this.props.data,image:"heroImage",headline:"title",body:"body",primaryDetail:"primaryDetail",secondaryDetail:"secondaryDetail"}),D(b.a,null))}}]),e}(y.a.Component);g.getInitialProps=function(){var t=Object(r.a)(i.a.mark(function t(e){var a,n,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.query.slug,n='*[_type == "pressclip" && slug.current == "'.concat(a,'"]{ "primaryDetail": author + " for " + organization + " - " + date, ... }'),t.next=4,f.b.fetch(n,{});case 4:return"undefined"!==typeof(r=(r=t.sent)[0]).articleURL?r.secondaryDetail=D("a",{href:r.articleURL},"Read it on "+r.organization+" here"):r.secondaryDetail="",t.abrupt("return",{data:r});case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.default=g}},[["iFtZ",1,0,2]]]);