"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[918],{155:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(689),a=n(87),u="MoviesList_list__0Owr9",c="MoviesList_item__eePYv",s="MoviesList_link__8rTGX",i=n(184),o=function(e){var t=e.movies,n=(0,r.TH)();return(0,i.jsx)("ul",{className:u,children:t.map((function(e){var t;return(0,i.jsx)("li",{className:c,children:(0,i.jsx)(a.rU,{className:s,state:{from:n},to:"/movies/".concat(e.id),children:null!==(t=e.title)&&void 0!==t?t:e.name})},e.id)}))})}},701:function(e,t,n){n.d(t,{Df:function(){return i},IQ:function(){return f},Jh:function(){return p},Pg:function(){return o},Ph:function(){return l}});var r=n(861),a=n(757),u=n.n(a),c=n(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="805cb31c09494aa61874748808ac02e8",i=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/week?api_key=".concat(s));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(s,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},918:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(861),a=n(439),u=n(757),c=n.n(u),s=n(791),i="Form_form__e1yzW",o="Form_input__FTtTw",f="Form_button__8NOIT",p=n(184),l=function(e){var t=e.setSearchParams,n=(0,s.useState)(""),r=(0,a.Z)(n,2),u=r[0],c=r[1];return(0,p.jsxs)("form",{className:i,onSubmit:function(e){e.preventDefault(),t({query:u}),c("")},children:[(0,p.jsx)("label",{children:(0,p.jsx)("input",{className:o,type:"text",placeholder:"Name movie",autoFocus:!0,onChange:function(e){c(e.target.value)},value:u})}),(0,p.jsx)("button",{className:f,type:"submit",children:"Search"})]})},v=n(155),m=n(701),h=n(87),d="Movies_box__xiWBb",_=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],i=(0,h.lr)(),o=(0,a.Z)(i,2),f=o[0],_=o[1];return(0,s.useEffect)((function(){var e=f.get("query");if(e){var t=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,m.Ph)(e);case 3:n=t.sent,u(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}}),[f]),(0,p.jsxs)("div",{className:d,children:[(0,p.jsx)(l,{setSearchParams:_}),n.length>0&&(0,p.jsx)(v.Z,{movies:n})]})}}}]);
//# sourceMappingURL=918.d323bf0b.chunk.js.map