(this.webpackJsonphack36=this.webpackJsonphack36||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),c=n.n(s),i=n(19),r=n.n(i),o=(n(27),n(2)),l=n(3),u=n(5),j=n(4),h=(n(28),n(20)),m=n(6),d=(n(29),s.Component,n(30),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.changeMenu;e.activeMenu;return Object(a.jsx)("nav",{className:"Sidebar",children:Object(a.jsxs)("ul",{className:"Sidebar-nav",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsxs)("a",{href:"#Home",className:"nav-link",onClick:function(e){return t(e,"Home")},children:[Object(a.jsx)("i",{className:"lni lni-home"}),Object(a.jsx)("span",{className:"link-text about",children:"Home"})]})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsxs)("a",{href:"#ComingSoon",className:"nav-link",onClick:function(e){return t(e,"About")},children:[Object(a.jsx)("i",{className:"lni lni-information"}),Object(a.jsx)("span",{className:"link-text about",children:"About"})]})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsxs)("a",{href:"#ComingSoon",className:"nav-link",onClick:function(e){return t(e,"Stats")},children:[Object(a.jsx)("i",{className:"lni lni-stats-up"}),Object(a.jsx)("span",{className:"link-text stats",children:"Stats"})]})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsxs)("a",{href:"#ComingSoon",className:"nav-link",onClick:function(e){return t(e,"Sponsor")},children:[Object(a.jsx)("i",{className:"lni lni-dollar"}),Object(a.jsx)("span",{className:"link-text sponsors",children:"Sponsors"})]})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsxs)("a",{href:"#ComingSoon",className:"nav-link",onClick:function(e){return t(e,"FAQ")},children:[Object(a.jsx)("i",{className:"lni lni-question-circle"}),Object(a.jsx)("span",{className:"link-text faqs",children:"FAQs"})]})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsxs)("a",{href:"#ComingSoon",className:"nav-link",onClick:function(e){return t(e,"Team")},children:[Object(a.jsx)("i",{className:"lni lni-network"}),Object(a.jsx)("span",{className:"link-text team",children:"Team"})]})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsxs)("a",{href:"#ComingSoon",className:"nav-link",onClick:function(e){return t(e,"Contact")},children:[Object(a.jsx)("i",{className:"lni lni-phone"}),Object(a.jsx)("span",{className:"link-text contact",children:"Contact"})]})})]})})}}]),n}(s.Component)),b=(n(31),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"FooterContainer",children:"Copyright \xa9 Hack36 2021"})}}]),n}(s.Component)),f=(n(32),n.p+"static/media/LandingPageMobile.a45356a5.mp4"),O=function(){function e(t,n){Object(o.a)(this,e),this.el=t,this.chars="!<>-_\\/[]{}\u2014=+*^?#________",this.update=this.update.bind(this),this.updateText=n}return Object(l.a)(e,[{key:"setText",value:function(e){var t=this,n=this.el.state.text,a=Math.max(n.length,e.length),s=new Promise((function(e){return t.resolve=e}));this.queue=[];for(var c=0;c<a;c++){var i=n[c]||"",r=e[c]||"",o=Math.floor(40*Math.random()),l=o+Math.floor(40*Math.random());this.queue.push({from:i,to:r,start:o,end:l})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),s}},{key:"update",value:function(){for(var e="",t=0,n=0,a=this.queue.length;n<a;n++){var s=this.queue[n],c=s.from,i=s.to,r=s.start,o=s.end,l=s.char;this.frame>=o?(t++,e+=i):this.frame>=r?((!l||Math.random()<.28)&&(l=this.randomChar(),this.queue[n].char=l),e+=l):e+=c}this.el.updateText(e),t===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)}},{key:"randomChar",value:function(){return this.chars[Math.floor(Math.random()*this.chars.length)]}}]),e}(),v=n.p+"static/media/logo.1a97265f.png",p=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).updateText=function(e){a.setState({text:e})},a.state={text:""},a}return Object(l.a)(n,[{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"restart",value:function(){document.getElementById("myVideo").currentTime=5}},{key:"componentDidMount",value:function(){if(window.innerWidth<700){var e=document.getElementById("typo"),t=e.parentNode.parentNode;e.style.top=t.offsetHeight-40+"px"}document.getElementById("root").style.display="none";var n=document.getElementById("myVideo");n&&n.play(),this.interval=setInterval((function(){document.getElementById("myVideo").currentTime=0}),4100);var a=["36 hours of excitement","36 hours of fun","36 hours of coding","36 hours of hacking","36 hours of wired in"],s=new O(this,this.updateText),c=0;!function e(){s.setText(a[c]).then((function(){setTimeout(e,800)})),c=(c+1)%a.length}()}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"Base",id:"Home",children:[Object(a.jsxs)("div",{className:"vid",children:[Object(a.jsx)("div",{className:"back1"}),Object(a.jsx)("video",{autoplay:!0,muted:!0,loop:!0,id:"myVideo",children:Object(a.jsx)("source",{src:f,type:"video/mp4"})}),Object(a.jsx)("div",{className:"back2"})]}),Object(a.jsx)("div",{className:"cnt",children:Object(a.jsxs)("div",{className:"cntcnt",children:[Object(a.jsx)("div",{id:"Hacklogo",children:Object(a.jsx)("img",{src:v,className:"hackl"})}),Object(a.jsx)("br",{className:"noMob"}),Object(a.jsx)("div",{className:"ScrambledTextBase",id:"typo",children:this.state.text})]})})]})}}]),n}(s.Component),x=(n(33),s.Component,n(34),s.Component,n(35),s.Component,n.p+"static/media/blue_arrow.7846f6e0.svg"),g=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).getAnswerStyle=function(){return a.state.open?{display:"block"}:{display:"none"}},a.openAnswer=function(e){a.setState({open:!a.state.open})},a.getToggleStyle=function(){return a.state.open?{MozTransform:"rotate(90deg)",WebkitTransform:"rotate(90deg)",OTransform:"rotate(90deg)",transition:"0.5s",WebkitTransition:"0.5s",MozTransition:"0.5s",transform:"rotate(90deg)"}:{MozTransform:"rotate(0deg)",WebkitTransform:"rotate(0deg)",OTransform:"rotate(0deg)",transition:"0.5s",WebkitTransition:"0.5s",MozTransition:"0.5s",transform:"rotate(0deg)"}},a.state={open:!1},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"content",children:[Object(a.jsxs)("div",{className:"question",onClick:this.openAnswer,children:[Object(a.jsx)("span",{children:Object(a.jsx)("img",{className:"toggle",src:x,style:this.getToggleStyle()})}),"  ",this.props.question]}),Object(a.jsx)("p",{className:"answer",style:this.getAnswerStyle(),children:this.props.answer})]})}}]),n}(s.Component),k=(n(36),s.Component,n(15),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.activeTheme;return Object(a.jsxs)("div",{className:"ThemeMain",children:["I am Theme ",e,"."]})}}]),n}(s.Component)),N=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.elements,n=e.type,s=e.updateTheme;return Object(a.jsx)("div",{className:"ThemeElement",children:t&&t.map((function(e,t){return Object(a.jsx)("div",{className:"1"===n&&t%2===1||"2"===n&&t%2===0?"ThemeSubElement SpecialThemeSubElement"+n:"ThemeSubElement",onClick:function(){return s(e)},children:e})}))})}}]),n}(s.Component),y=(s.Component,n(37),s.Component,n(38),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).consoleText=function(e,t,n){void 0===n&&(n=["#fff"]);var a=!0,s=document.getElementById("console"),c=1,i=1,r=!1,o=document.getElementById(t);o.setAttribute("style","color:"+n[0]),window.setInterval((function(){0===c&&!1===r?(r=!0,o.innerHTML=e[0].substring(0,c),window.setTimeout((function(){var t=n.shift();n.push(t);var a=e.shift();e.push(a),i=1,o.setAttribute("style","color:"+n[0]),c+=i,r=!1}),1e3)):c===e[0].length+1&&!1===r?(r=!0,window.setTimeout((function(){c+=i=-1,r=!1}),1e3)):!1===r&&(o.innerHTML=e[0].substring(0,c),c+=i)}),120),window.setInterval((function(){!0===a?(s.className="console-underscore hidden",a=!1):(s.className="console-underscore",a=!0)}),400)},a.state={},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.consoleText(["Coming Soon","Under Construction"],"text",["black"])}},{key:"render",value:function(){return Object(a.jsx)("div",{id:"ComingSoon",children:Object(a.jsxs)("div",{class:"console-container",children:[Object(a.jsx)("span",{id:"text"}),Object(a.jsx)("div",{class:"console-underscore",id:"console",children:"_"})]})})}}]),n}(s.Component)),C=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){this.props.activeMenu;return Object(a.jsxs)("div",{className:"Content",children:[Object(a.jsx)(p,{}),Object(a.jsx)(y,{})]})}}]),n}(s.Component),T=(n(39),n.p,function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).changeMenu=function(e,t){a.setState({activeMenu:t}),e.stopPropagation()},a.state={activeMenu:"Home"},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.activeMenu;return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("div",{className:"MainContainer",children:[Object(a.jsxs)("div",{className:"MainContent",children:[Object(a.jsx)(d,{changeMenu:this.changeMenu,activeMenu:e}),Object(a.jsx)(C,{activeMenu:e})]}),Object(a.jsx)(b,{})]})})}}]),n}(s.Component)),M=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(h.a,{children:Object(a.jsx)(m.a,{path:"/",exact:!0,render:function(e){return Object(a.jsx)(c.a.Fragment,{children:Object(a.jsx)(T,{})})}})})}}]),n}(s.Component),S=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(M,{})})}}]),n}(s.Component),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root")),w()}],[[45,1,2]]]);
//# sourceMappingURL=main.7b446bf5.chunk.js.map