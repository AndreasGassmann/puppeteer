/*! For license information please see 535e2ceb.ed69a408.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86892],{80096:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var t=n(85893),s=n(11151);const i={sidebar_label:"Keyboard.down"},o="Keyboard.down() method",d={id:"api/puppeteer.keyboard.down",title:"Keyboard.down() method",description:"Dispatches a keydown event.",source:"@site/../docs/api/puppeteer.keyboard.down.md",sourceDirName:"api",slug:"/api/puppeteer.keyboard.down",permalink:"/next/api/puppeteer.keyboard.down",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Keyboard.down"},sidebar:"api",previous:{title:"Keyboard",permalink:"/next/api/puppeteer.keyboard"},next:{title:"Keyboard.press",permalink:"/next/api/puppeteer.keyboard.press"}},a={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function p(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"keyboarddown-method",children:"Keyboard.down() method"}),"\n",(0,t.jsxs)(r.p,{children:["Dispatches a ",(0,t.jsx)(r.code,{children:"keydown"})," event."]}),"\n",(0,t.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"class Keyboard {\n  abstract down(\n    key: KeyInput,\n    options?: Readonly<KeyDownOptions>\n  ): Promise<void>;\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Parameter"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"key"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/next/api/puppeteer.keyinput",children:"KeyInput"})})}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["Name of key to press, such as ",(0,t.jsx)(r.code,{children:"ArrowLeft"}),". See ",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.keyinput",children:"KeyInput"})," for a list of all key names."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"options"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["Readonly<",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.keydownoptions",children:"KeyDownOptions"}),">"]})}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"(Optional)"})," An object of options. Accepts text which, if specified, generates an input event with this text. Accepts commands which, if specified, is the commands of keyboard shortcuts, see ",(0,t.jsx)(r.a,{href:"https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/editing/commands/editor_command_names.h",children:"Chromium Source Code"})," for valid command names."]})})]})]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:["If ",(0,t.jsx)(r.code,{children:"key"})," is a single character and no modifier keys besides ",(0,t.jsx)(r.code,{children:"Shift"})," are being held down, a ",(0,t.jsx)(r.code,{children:"keypress"}),"/",(0,t.jsx)(r.code,{children:"input"})," event will also generated. The ",(0,t.jsx)(r.code,{children:"text"})," option can be specified to force an input event to be generated. If ",(0,t.jsx)(r.code,{children:"key"})," is a modifier key, ",(0,t.jsx)(r.code,{children:"Shift"}),", ",(0,t.jsx)(r.code,{children:"Meta"}),", ",(0,t.jsx)(r.code,{children:"Control"}),", or ",(0,t.jsx)(r.code,{children:"Alt"}),", subsequent key presses will be sent with that modifier active. To release the modifier key, use ",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.keyboard.up",children:"Keyboard.up()"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["After the key is pressed once, subsequent calls to ",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.keyboard.down",children:"Keyboard.down()"})," will have ",(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat",children:"repeat"})," set to true. To release the key, use ",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.keyboard.up",children:"Keyboard.up()"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["Modifier keys DO influence ",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.keyboard.down",children:"Keyboard.down()"}),". Holding down ",(0,t.jsx)(r.code,{children:"Shift"})," will type the text in upper case."]})]})}function l(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},75251:(e,r,n)=>{var t=n(67294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var t,i={},c=null,p=null;for(t in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(p=r.ref),r)o.call(r,t)&&!a.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:s,type:e,key:c,ref:p,props:i,_owner:d.current}}r.Fragment=i,r.jsx=c,r.jsxs=c},85893:(e,r,n)=>{e.exports=n(75251)},11151:(e,r,n)=>{n.d(r,{Z:()=>d,a:()=>o});var t=n(67294);const s={},i=t.createContext(s);function o(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);