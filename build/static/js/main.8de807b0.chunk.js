(this.webpackJsonpporfolio=this.webpackJsonpporfolio||[]).push([[0],{11:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),i=c(6),n=c.n(i),r=(c(11),c(2)),o=(c(3),c.p,c(4)),j=c.n(o),b=c(0),l=function(){return Object(a.useEffect)((function(){j.a.init({duration:1e3})}),[]),Object(b.jsx)("div",{className:"about",id:"about",children:Object(b.jsxs)("div",{className:"about-container",children:[Object(b.jsx)("p",{className:"about-container-content-text","data-aos":"fade-right",children:"I'm 19 years old web developer based in Nowy S\u0105cz, Poland. Passionated about web technologies. Skilled in HTML, CSS/SCSS, JavaScript/ReactJS"}),Object(b.jsxs)("div",{className:"about-technologies","data-aos":"fade-left",children:[Object(b.jsx)("i",{class:"fa-brands fa-react"}),Object(b.jsx)("i",{class:"fa-brands fa-html5"}),Object(b.jsx)("i",{class:"fa-brands fa-css3"})]}),Object(b.jsxs)("p",{className:"bg-text",children:["ABOUT",Object(b.jsx)("br",{}),"ABOUT",Object(b.jsx)("br",{}),"ABOUT",Object(b.jsx)("br",{})]})]})})},d=function(){return Object(b.jsxs)("div",{className:"main",children:[Object(b.jsxs)("div",{className:"main-text",children:[Object(b.jsx)("h1",{children:"SZYMON ZYGMUNT"}),Object(b.jsx)("h3",{children:"JUNIOR WEB DEVELOPER"})]}),Object(b.jsx)("a",{href:"#about",children:Object(b.jsx)("i",{class:"fa-solid fa-angle-down"})})]})},O=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(!1),n=Object(r.a)(i,2),o=n[0],j=n[1],l=Object(a.useState)(!1),d=Object(r.a)(l,2),O=d[0],u=d[1];return window.addEventListener("resize",(function(){window.innerWidth<1100?(j(!1),s(!0)):(j(!1),s(!1))})),window.addEventListener("load",(function(){window.innerWidth<1100?(s(!0),j(!1)):(s(!1),j(!1))})),document.addEventListener("scroll",(function(){window.scrollY>100?u(!0):u(!1)})),Object(a.useEffect)((function(){window.innerWidth<1100?(s(!0),j(!1)):(s(!1),j(!1))}),[]),Object(b.jsxs)("div",{className:O?"navbar transparent":"navbar",children:[Object(b.jsx)("div",{className:"navbar-container",children:c?Object(b.jsx)("div",{className:"navbar-hamburger-box",onClick:function(){return j(!o)},children:Object(b.jsx)("span",{className:o?"navbar-hamburger active":"navbar-hamburger"})}):Object(b.jsxs)("div",{className:"navbar-buttons",children:[Object(b.jsx)("a",{href:"#about",children:"About"}),Object(b.jsx)("a",{href:"#projects",children:"Projects"}),Object(b.jsx)("a",{href:"#contact",id:"contact-btn",children:"Contact"})]})}),Object(b.jsxs)("div",{className:o?"mobile-menu opened":"mobile-menu closed",children:[Object(b.jsx)("a",{href:"#about",className:o?"a visible":"a invisible",onClick:function(){j(!1)},children:"ABOUT"}),Object(b.jsx)("a",{href:"#projects",className:o?"a visible":"a invisible",onClick:function(){j(!1)},children:"PROJECTS"}),Object(b.jsx)("a",{href:"#contact",className:o?"a visible":"a invisible",onClick:function(){j(!1)},children:"CONTACT"})]})]})},u=c.p+"static/media/snipcoded-color.c5160d74.png",h=c.p+"static/media/snipcoded-color-mobile.a90d4432.png",p=c.p+"static/media/imatura-color.3a9412e3.png",m=c.p+"static/media/imatura-color-mobile.b8d91b5e.png",f=(c(13),function(e){var t=e.imgSRC,c=e.imgSRCmobile,s=e.projectSourceCode,i=e.projectVisit,n=e.title,r=e.desc;return Object(a.useEffect)((function(){j.a.init({duration:1e3})}),[]),Object(b.jsxs)("div",{"data-aos":"fade-up",className:"project",children:[Object(b.jsx)("p",{className:"project-title",children:n}),Object(b.jsxs)("div",{className:"project-img-container",children:[Object(b.jsx)("img",{src:t,alt:"snipcoded.web.app"}),Object(b.jsx)("img",{src:c,alt:"snipcoded.web.app"})]}),Object(b.jsx)("p",{className:"project-description",children:r}),Object(b.jsxs)("div",{className:"project-links",children:[Object(b.jsx)("a",{href:s,target:"_blank",children:Object(b.jsx)("i",{class:"fa-brands fa-github"})}),Object(b.jsx)("a",{href:i,target:"_blank",children:Object(b.jsx)("i",{class:"fa-solid fa-eye"})})]})]})}),x=function(){return Object(b.jsxs)("div",{className:"projects",id:"projects",children:[Object(b.jsx)("p",{className:"projects-header",children:"MY PROJECTS"}),Object(b.jsx)(f,{imgSRC:u,imgSRCmobile:h,projectSourceCode:"",projectVisit:"https://snipcoded.web.app/",title:"SNIPCODED",desc:"Web application allowing you to store your favorite code snippets or notes. Sign In functionality and real-time database connection.\r\n"}),Object(b.jsx)(f,{imgSRC:p,imgSRCmobile:m,projectSourceCode:"",projectVisit:"https://imatura.web.app/",title:"iMATURA",desc:"English e-learning website concept for high school graduates."})]})},v=function(){return Object(b.jsx)("div",{className:"loading-screen",children:Object(b.jsx)("p",{className:"circle",children:Object(b.jsx)("p",{className:"circle2"})})})};var g=function(){var e=Object(a.useState)(!0),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){setTimeout((function(){return s(!1)}),3e3)}),[]),Object(b.jsx)(b.Fragment,{children:!1===c?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{}),Object(b.jsx)(d,{}),Object(b.jsx)(l,{}),Object(b.jsx)(x,{})]}):Object(b.jsx)(v,{})})};n.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))},3:function(e,t,c){}},[[14,1,2]]]);
//# sourceMappingURL=main.8de807b0.chunk.js.map