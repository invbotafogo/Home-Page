(()=>{var n={56:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},72:n=>{"use strict";var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=o.base?c[0]+o.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=o(n,r),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},130:(n,e,t)=>{var o={"./script":279,"./script.js":279};function r(n){return Promise.resolve().then((()=>{if(!t.o(o,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return t(o[n])}))}r.keys=()=>Object.keys(o),r.id=130,n.exports=r},279:(n,e,t)=>{"use strict";var o=t(72),r=t.n(o),a=t(825),i=t.n(a),s=t(659),c=t.n(s),d=t(56),l=t.n(d),p=t(540),u=t.n(p),f=t(113),h=t.n(f),m=t(621),g={};g.styleTagTransform=h(),g.setAttributes=l(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=u(),r()(m.A,g),m.A&&m.A.locals&&m.A.locals;var x=t(716),v={};v.styleTagTransform=h(),v.setAttributes=l(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),r()(x.A,v),x.A&&x.A.locals&&x.A.locals,document.addEventListener("DOMContentLoaded",(function(){fetch("/components/header.html").then((n=>n.text())).then((n=>document.body.insertAdjacentHTML("afterbegin",n))),fetch("/components/footer.html").then((n=>n.text())).then((n=>document.body.insertAdjacentHTML("beforeend",n)))})),window.addEventListener("scroll",(function(){const n=document.querySelector(".section-hero"),e=document.querySelector(".section-cultos");n&&e&&(window.scrollY>100?(n.classList.add("fade-out"),e.style.opacity=1,e.style.transition="opacity 1s ease-in-out"):(n.classList.remove("fade-out"),e.style.opacity=0))})),document.addEventListener("DOMContentLoaded",(function(){const n=document.getElementById("content");function e(e){fetch(e).then((n=>n.text())).then((t=>{const o=(new DOMParser).parseFromString(t,"text/html").getElementById("content");o&&(n.style.opacity=0,setTimeout((()=>{n.innerHTML=o.innerHTML,n.style.opacity=1,history.pushState({},"",e)}),300))})).catch((n=>console.error("Erro ao carregar a página:",n)))}document.body.addEventListener("click",(function(n){n.target.matches(".ajax-link")?(n.preventDefault(),e(n.target.href)):n.target.parentElement&&n.target.parentElement.matches(".ajax-link")&&(n.preventDefault(),e(n.target.parentElement.href))})),window.addEventListener("popstate",(function(){e(location.pathname)})),location.pathname}))},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},417:n=>{"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},601:n=>{"use strict";n.exports=function(n){return n[1]}},621:(n,e,t)=>{"use strict";t.d(e,{A:()=>u});var o=t(601),r=t.n(o),a=t(314),i=t.n(a),s=t(417),c=t.n(s),d=new URL(t(773),t.b),l=i()(r()),p=c()(d);l.push([n.id,`body {\n    font-family: 'Poppins', sans-serif;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${p}) no-repeat center center fixed;\n    background-size: cover;\n    height: 100vh;\n    color: #fff;\n    padding-top: 70px; /* Adiciona um espaçamento para o conteúdo não ficar escondido atrás do header */\n}\n\nheader {\n    background-color: #001f3d;\n    color: whitesmoke;\n    padding: 15px 20px;\n    position: absolute;\n    width: 100%;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n    z-index: 1000;\n    height: 70px;\n}\n\n.logo img {\n    max-height: 50px;\n    filter: brightness(0) invert(1);\n}\n\nnav {\n    flex-grow: 1;\n    display: flex;\n    justify-content: center;\n    padding-right: 5vw;\n    margin-left: 40px;\n}\n\nnav ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    gap: 30px;\n    justify-content: space-around;\n    width: 100%;\n}\n\nnav ul li a {\n    text-decoration: none;\n    color: whitesmoke;\n    font-weight: bold;\n    font-family: 'Montserrat', sans-serif;\n    transition: 0.3s;\n    font-size: 1.1rem;\n}\n\nnav ul li a:hover {\n    color: #ffcc00;\n}\n\n/* Primeira Seção - Bem-vindo */\n.section-hero {\n    display: flex;\n    justify-content: center; /* Alinha o conteúdo horizontalmente */\n    align-items: center; /* Alinha o conteúdo verticalmente */\n    height: calc(100vh - 70px); /* Compensa a altura do header fixo */\n    color: whitesmoke;\n    background: rgba(0, 0, 0, 0.6);\n    transition: opacity 1s ease-out;\n    text-align: center; /* Centraliza o texto */\n}\n\n.section-hero .text h1, .section-hero .text h4, .section-hero .text p {\n    margin: 0; /* Remove qualquer margem do h1, h4, e p */\n}\n\n.section-hero .text h1 {\n    font-size: 3rem;\n}\n\n.section-hero .text h4 {\n    font-size: 1.8rem;\n}\n\n.section-hero .text p {\n    font-size: 1.5rem;\n}\n\n.section-hero .text h1, .section-hero .text h4, .section-hero .text p {\n    font-family: 'Montserrat', sans-serif;\n}\n\n/* Quando a seção "Bem-vindo" estiver em fade-out */\n.section-hero.fade-out{\n    opacity: 0;\n    pointer-events: none; /* Evita interação enquanto está em fade-out */\n}\n\n/* Seção Cultos */\n.section-cultos {\n    padding: 50px;\n    background-color: #f8f9fa;\n    color: #333;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.section-cultos h2 {\n    font-size: 2rem;\n    margin-bottom: 20px;\n}\n\n.section-cultos p {\n    font-size: 1.2rem;\n    margin-bottom: 10px;\n}\n\n.map-container {\n    flex: 1;\n    max-width: 45%;\n    margin-left: 20px;\n}\n\n.map-container iframe {\n    width: 100%;\n    height: 300px;\n    border: 0;\n    border-radius: 10px;\n}\n\n\n\n/* Seção Contato */\n.section-contato{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    padding: 50px;\n    color: whitesmoke;\n    /* background: url('~/images/image2.png') no-repeat center center fixed; */\n    background-size: cover;\n    transition: opacity 1s ease-out;\n    text-align: center; /* Centraliza o texto */\n}\n\n.contact-form {\n    margin-top: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    width: 100%;\n    max-width: 400px;\n}\n\n.contact-form input, \n.contact-form textarea {\n    width: 100%;\n    padding: 10px;\n    border-radius: 5px;\n    border: none;\n    font-size: 1rem;\n}\n\n.contact-form button{\n    background-color: #ffcc00;\n    color: #333;\n    font-size: 1rem;\n    padding: 10px;\n    border: none;\n    cursor: pointer;\n    transition: 0.3s;\n}\n\n.contact-form button:hover {\n    background-color: #e6b800\n}\n\n\n\nfooter {\n    background-color: #001f3d;\n    color: white;\n    text-align: center;\n    padding: 20px 0;\n    margin-top: 50px;\n    width: 100%;\n    position: relative;\n}\n\nfooter nav ul {\n    justify-content: center;\n}\n\nfooter nav ul li a {\n    color: white;\n}\n\nfooter a:hover {\n    color: #ffcc00;\n}`,""]);const u=l},659:n=>{"use strict";var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},716:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([n.id,"/* .container {\n    background: white;\n    width: 80%;\n    margin-top: 20vh;\n    padding: 30px;\n    border-radius: 10px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    width: 90%;\n    max-width: 500px;\n    text-align: center;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\nlabel {\n    font-weight: bold;\n}\n\ninput, textarea {\n    width: 100%;\n    padding: 10px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    font-size: 1em;\n}\n\nbutton {\n    background-color: #004080;\n    color: white;\n    border: none;\n    padding: 10px;\n    border-radius: 5px;\n    font-size: 1em;\n    cursor: pointer;\n    transition: 0.3s;\n} */",""]);const s=i},773:(n,e,t)=>{"use strict";n.exports=t.p+"assets/images/image.png"},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.e=()=>Promise.resolve(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.p="/invbotafogo/",t.b=document.baseURI||self.location.href,t.nc=void 0,t(279)})();