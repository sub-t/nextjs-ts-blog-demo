(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5755)}])},6895:function(t,n,r){"use strict";r.d(n,{X:function(){return u}});var e=r(5893),o=r(7294),i=r(3018),a=r(4713),s=(0,a.zo)("span",{all:"unset",marginBottom:8,fontSize:18,fontWeight:900,textTransform:"uppercase",color:"$violet11"}),c=(0,a.zo)("h2",{all:"unset",display:"flex",gap:"$2",fontSize:32,fontWeight:900,color:"$hiContrast"}),l=(0,a.zo)("span",{display:"flex",alignItems:"center",width:48}),u=o.forwardRef((function(t,n){var r=t.children,a=t.text,u=t.icon,f=o.cloneElement(u,{size:48});return(0,e.jsxs)(i.xu,{children:[(0,e.jsxs)(s,{children:["---- ",a," ----"]}),(0,e.jsxs)(c,{ref:n,children:[(0,e.jsx)(l,{children:f}),r]})]})}));u.displayName="Heading"},8775:function(t,n,r){"use strict";r.d(n,{V:function(){return g}});var e=r(5893),o=(r(7294),r(2094));function i(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}var a=(0,r(4713).zo)(o.E.div,{width:"100%",height:"100%"}),s={once:!0,amount:.2,y:20,duration:.6},c=function(t){var n=t.children,r=t.config,o=function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},e=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),e.forEach((function(n){i(t,n,r[n])}))}return t}({},s,r),c=o.once,l=o.amount,u=o.y,f=o.duration;return(0,e.jsx)(a,{initial:{opacity:0,y:u},whileInView:{opacity:1,y:0},viewport:{once:c,amount:l},transition:{duration:f,ease:"easeOut"},children:n})},l=r(4427),u=r(7919),f=r(3018),h=r(4929),d=r(6375),p=r(3188),x=function(t){var n=t.post,r=n.slug,o=n.date,i=n.year,a=n.month,s=n.title,c=n.category,x=n.tags;return(0,e.jsx)(h.P,{href:"/".concat(i,"/").concat(a,"/").concat(r),children:(0,e.jsx)(f.xu,{css:{boxSizing:"border-box",position:"relative",h:"100%",p:20,borderRadius:6,bgColor:"$loContrast",boxShadow:"$colors$shadow1"},children:(0,e.jsxs)(f.gC,{gap:"4",children:[(0,e.jsxs)(f.gC,{gap:"2",children:[(0,e.jsxs)(f.Ug,{align:"center",gap:"3",children:[(0,e.jsx)(u.E,{children:(0,p.p)(o)}),(0,e.jsx)(l.C,{text:c})]}),(0,e.jsx)(f.xu,{css:{fontWeight:900,fontSize:20,color:"$slate12"},children:s})]}),(0,e.jsx)(f.Eq,{align:"center",gap:"2",children:x.map((function(t){return(0,e.jsx)(d.V,{text:t},t)}))})]})},r)})},g=function(t){var n=t.posts;return(0,e.jsx)(f.rj,{gap:"4",css:{gridAutoRows:"max-content",gridTemplateColumns:"repeat(1, 1fr)","@md":{gridTemplateColumns:"repeat(2, 1fr)"},"@lg":{gridTemplateColumns:"repeat(3, 1fr)"}},children:n.map((function(t){return(0,e.jsx)(c,{children:(0,e.jsx)(x,{post:t})},t.title)}))})}},4427:function(t,n,r){"use strict";r.d(n,{C:function(){return s}});var e=r(5893),o=(r(7294),r(4713)),i=r(4929),a=(0,o.zo)("span",{userSelect:"none",whiteSpace:"nowrap",boxSizing:"border-box",fontFamily:"inherit",flexShrink:0,display:"flex",justifyContent:"center",alignItems:"center",lineHeight:1,WebkitTapHighlightColor:"transparent",padding:"4px 10px",gap:"$1",border:"solid 1px currentColor",borderRadius:4,fontVariantNumeric:"tabular-nums",fontWeight:500,fontSize:12,color:"$slate1",bgColor:"$slate12"}),s=function(t){var n=t.text,r=t.href;return r?(0,e.jsx)(i.P,{href:r,children:(0,e.jsx)(a,{children:n})}):(0,e.jsx)(a,{children:n})}},7919:function(t,n,r){"use strict";r.d(n,{E:function(){return e}});var e=(0,r(4713).zo)("span",{fontSize:14,fontWeight:500,color:"$violet11"})},4929:function(t,n,r){"use strict";r.d(n,{P:function(){return s}});var e=r(5893),o=(r(7294),r(1664)),i=r.n(o),a=(0,r(4713).zo)("a",{textDecoration:"none"}),s=function(t){var n=t.href,r=t.as,o=t.children;return(0,e.jsx)(i(),{href:n,as:null!==r&&void 0!==r?r:n,passHref:!0,children:(0,e.jsx)(a,{children:o})})}},6375:function(t,n,r){"use strict";r.d(n,{V:function(){return c}});var e=r(5893),o=(r(7294),r(8193)),i=r(4713),a=r(4929),s=(0,i.zo)("span",{userSelect:"none",whiteSpace:"nowrap",boxSizing:"border-box",fontFamily:"inherit",flexShrink:0,display:"flex",justifyContent:"center",alignItems:"center",lineHeight:1,WebkitTapHighlightColor:"transparent",padding:"4px 8px",gap:"$1",border:"solid 1px currentColor",borderRadius:9999,fontVariantNumeric:"tabular-nums",fontWeight:500,fontSize:12,color:"$violet11"}),c=function(t){var n=t.text,r=t.href;return r?(0,e.jsx)(a.P,{href:r,children:(0,e.jsxs)(s,{children:[(0,e.jsx)(o.IR6,{}),n]})}):(0,e.jsxs)(s,{children:[(0,e.jsx)(o.IR6,{}),n]})}},7155:function(t,n,r){"use strict";r.d(n,{FX:function(){return o},PB:function(){return i},iC:function(){return e}});var e="nextjs-ts-blog-demo",o="localhost:3000",i="nextjs-ts-blog-demo"},5755:function(t,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return $},default:function(){return F}});var e=r(5893),o=r(9008),i=r.n(o),a=r(9352),s=r(8973),c=r(3854),l=r(6895),u=r(8775),f=r(3018),h=r(2120),d=r(4713),p=r(7294),x=r(7407),g=r(897),j=r(3432),m=r(5852),b=r(9477);function y(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}var v=Array.from({length:30},(function(){return{factor:b.MathUtils.randInt(20,100),speed:b.MathUtils.randFloat(.01,1),xFactor:b.MathUtils.randFloatSpread(80),yFactor:b.MathUtils.randFloatSpread(40),zFactor:b.MathUtils.randFloatSpread(40)}})),w=function(){return(0,e.jsxs)(m.Xz,{shadows:!0,dpr:[1,2],gl:{antialias:!1},camera:{fov:75,position:[0,0,60],near:10,far:150},children:[(0,e.jsx)("color",{attach:"background",args:["#f0f0f0"]}),(0,e.jsx)("ambientLight",{intensity:.8}),(0,e.jsx)(S,{}),(0,e.jsx)(x.j,{"rotation-x":Math.PI/2,position:[0,-35,0],opacity:.25,width:100,height:100,blur:2,far:50}),(0,e.jsx)(p.Suspense,{fallback:null,children:(0,e.jsx)(g.qA,{preset:"city"})})]})},S=function(){var t=(0,p.useRef)();return(0,m.xQ)((function(n,r){t.current.rotation.y=b.MathUtils.damp(t.current.rotation.y,-n.mouse.x*Math.PI/6,2.75,r)})),(0,e.jsxs)(j.EJ,{limit:v.length,ref:t,castShadow:!0,receiveShadow:!0,position:[0,10,0],children:[(0,e.jsx)("boxGeometry",{args:[3,3,3]}),(0,e.jsx)("meshStandardMaterial",{roughness:1,color:"#f0f0f0"}),v.map((function(t,n){return(0,e.jsx)(C,function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},e=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),e.forEach((function(n){y(t,n,r[n])}))}return t}({},t),n)}))]})},C=function(t){var n=t.factor,r=t.speed,o=t.xFactor,i=t.yFactor,a=t.zFactor,s=(0,p.useRef)();return(0,m.xQ)((function(t){var e=n+t.clock.elapsedTime*(r/2);s.current.scale.setScalar(Math.max(1.5,5*Math.cos(e))),s.current.position.set(Math.cos(e)+Math.sin(1*e)/10+o+Math.cos(e/10*n)+Math.sin(1*e)*n/10,Math.sin(e)+Math.cos(2*e)/10+i+Math.sin(e/10*n)+Math.cos(2*e)*n/10,Math.sin(e)+Math.cos(2*e)/10+a+Math.cos(e/10*n)+Math.sin(3*e)*n/10)})),(0,e.jsx)(j.K4,{ref:s})};function z(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function M(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var e,o,i=[],a=!0,s=!1;try{for(r=r.call(t);!(a=(e=r.next()).done)&&(i.push(e.value),!n||i.length!==n);a=!0);}catch(c){s=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}}(t,n)||function(t,n){if(!t)return;if("string"===typeof t)return z(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return z(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var O=(0,d.zo)("h2",{all:"unset",display:"block",fontWeight:900,fontSize:40,"@sm":{fontSize:56},lineHeight:1.1,color:"$hiContrast",textTransform:"uppercase",variants:{dark:{true:{color:"$loContrast"}}}}),P=function(){var t=M((0,h.I)(),1)[0];return(0,e.jsx)(f.gC,{align:"center",css:{overflow:"hidden"},children:(0,e.jsxs)(f.xu,{css:{position:"relative",flex:1,width:"100vw"},children:[(0,e.jsx)(w,{}),(0,e.jsx)(f.xu,{css:{position:"absolute",top:"50%",left:"50%",transform:"translate3d(-50%, -50%, 0)"},children:(0,e.jsxs)(O,{dark:"dark"===t,children:["website",(0,e.jsx)("br",{}),"under",(0,e.jsx)("br",{}),"construction"]})})]})})},_=r(7155),k=function(t){var n=t.posts;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(i(),{children:[(0,e.jsx)("title",{children:"blog"}),(0,e.jsx)("meta",{name:"description",content:_.PB}),(0,e.jsx)("meta",{property:"og:title",content:_.iC}),(0,e.jsx)("meta",{property:"og:description",content:_.PB}),(0,e.jsx)("meta",{property:"og:url",content:_.FX})]}),(0,e.jsx)(l.X,{icon:(0,e.jsx)(a.N9Z,{}),text:"home",children:"\u6700\u65b0\u306e\u8a18\u4e8b"}),(0,e.jsx)(u.V,{posts:n})]})};k.getLayout=function(t){return(0,e.jsxs)("div",{className:"global-layout",children:[(0,e.jsxs)(f.rj,{className:"global-layout__header",css:{h:"100vh",gridTemplateRows:"auto 1fr"},children:[(0,e.jsx)(c.h,{}),(0,e.jsx)(P,{})]}),(0,e.jsx)(s.A,{className:"global-layout__contents",children:t})]})};var $=!0,F=k},3188:function(t,n,r){"use strict";r.d(n,{p:function(){return e}});var e=function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"2-digit"})}}},function(t){t.O(0,[617,737,937,261,774,888,179],(function(){return n=8312,t(t.s=n);var n}));var n=t.O();_N_E=n}]);