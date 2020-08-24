(this.webpackJsonpbgner=this.webpackJsonpbgner||[]).push([[0],{202:function(e,t,a){},203:function(e,t,a){},204:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(67),o=a.n(c),u=a(5),s=a.n(u),l=a(10),i=a(68),d=a(69),m=a(75),f=a(74),p=a(223),v=a(228),h=a(224),b=a(225),E=a(29),y=a.n(E),g=(a(88),function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:"container"},r.a.createElement(p.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:"infected"},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"INFECTED"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:a.value,duration:3,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of Active cases"))),r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:"card recovered"},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"RECOVERED"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:n.value,duration:3,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of Recovered cases"))),r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:"card deaths"},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"DEATH"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:c.value,duration:3,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of deaths"))))):"loading..."}),x=a(28),w=a(30),j=a.n(w),k="https://covid19.mathdro.id/api",O=function(){var e=Object(l.a)(s.a.mark((function e(t){var a,n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=k,t&&(a="".concat(k,"/countries/").concat(t)),e.prev=2,e.next=5,j.a.get(a);case 5:return n=e.sent,r=n.data,c={confirmed:r.confirmed,recovered:r.recovered,deaths:r.deaths,lastUpdate:r.lastUpdate},e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(k,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log("nothing"+e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(k,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),D=a(41),N=(a(202),function(e){var t=e.data,a=e.country,c=Object(n.useState)([]),o=Object(x.a)(c,2),u=o[0],i=o[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,C();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var d=u.length?r.a.createElement(D.Line,{data:{labels:u.map((function(e){return e.date})),datasets:[{data:u.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:u.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null,m=t.confirmed?r.a.createElement(D.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)"],data:[t.confirmed.value,t.recovered.value,t.deaths.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current State in ".concat(a)}}}):null;return r.a.createElement("div",{className:"container"},a?m:d)}),B=a(227),I=a(226),P=(a(203),function(e){var t=e.handelCountryPicker,a=Object(n.useState)([]),c=Object(x.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,S();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement(B.a,{className:"form_control"},r.a.createElement(I.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))}),R=(a(204),function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:[],country:""},e.handelCountryPicker=function(){var t=Object(l.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:"https://i.ibb.co/7QpKsCX/image.png",alt:"Covid-19"}),r.a.createElement(g,{data:t}),r.a.createElement(P,{handelCountryPicker:this.handelCountryPicker}),r.a.createElement(N,{data:t,country:a}))}}]),a}(r.a.Component));o.a.render(r.a.createElement(R,null),document.getElementById("root"))},78:function(e,t,a){e.exports=a(205)},88:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.66a3e0f7.chunk.js.map