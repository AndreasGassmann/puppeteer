/*! For license information please see 3d70cde6.8d33ed1b.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45529],{64393:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=t(85893),s=t(11151),i=t(23277),o=t(64757);const a={},l="FAQ",p={id:"faq",title:"FAQ",description:"Q: Who maintains Puppeteer?",source:"@site/../docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/next/faq",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Supported browsers",permalink:"/next/supported-browsers"}},u={},c=[{value:"Q: Who maintains Puppeteer?",id:"q-who-maintains-puppeteer",level:2},{value:"Q: What is the status of cross-browser support?",id:"q-what-is-the-status-of-cross-browser-support",level:2},{value:"Q: Does Puppeteer support WebDriver BiDi?",id:"q-does-puppeteer-support-webdriver-bidi",level:2},{value:"Q: What are Puppeteer\u2019s goals and principles?",id:"q-what-are-puppeteers-goals-and-principles",level:2},{value:"Q: Is Puppeteer a replacement for Selenium WebDriver?",id:"q-is-puppeteer-a-replacement-for-selenium-webdriver",level:2},{value:"Q: Why doesn\u2019t Puppeteer v.XXX work with Chromium v.YYY?",id:"q-why-doesnt-puppeteer-vxxx-work-with-chromium-vyyy",level:2},{value:"Q: Which Chrome version does Puppeteer use?",id:"q-which-chrome-version-does-puppeteer-use",level:2},{value:"Q: Which Firefox version does Puppeteer use?",id:"q-which-firefox-version-does-puppeteer-use",level:2},{value:"Q: What\u2019s considered a \u201cNavigation\u201d?",id:"q-whats-considered-a-navigation",level:2},{value:"Q: What\u2019s the difference between a \u201ctrusted&quot; and &quot;untrusted&quot; input event?",id:"q-whats-the-difference-between-a-trusted-and-untrusted-input-event",level:2},{value:"Q: Does Puppeteer support media and audio playback?",id:"q-does-puppeteer-support-media-and-audio-playback",level:2},{value:"Q: I am having trouble installing / running Puppeteer in my test environment. Where should I look for help?",id:"q-i-am-having-trouble-installing--running-puppeteer-in-my-test-environment-where-should-i-look-for-help",level:2},{value:"Q: I have more questions! Where do I ask?",id:"q-i-have-more-questions-where-do-i-ask",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"faq",children:"FAQ"}),"\n",(0,n.jsx)(r.h2,{id:"q-who-maintains-puppeteer",children:"Q: Who maintains Puppeteer?"}),"\n",(0,n.jsxs)(r.p,{children:["The Chrome Browser Automation team maintains the library, but we'd love your help and\nexpertise on the project! See our\n",(0,n.jsx)(r.a,{href:"https://pptr.dev/contributing",children:"contributing guide"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"q-what-is-the-status-of-cross-browser-support",children:"Q: What is the status of cross-browser support?"}),"\n",(0,n.jsx)(r.p,{children:"Official Firefox support is currently experimental. The ongoing collaboration\nwith Mozilla aims to support common end-to-end testing use cases, for which\ndevelopers expect cross-browser coverage. The Puppeteer team needs input from\nusers to stabilize Firefox support and to bring missing APIs to our attention."}),"\n",(0,n.jsxs)(r.p,{children:["From Puppeteer v2.1.0 onwards you can specify\n",(0,n.jsx)(r.a,{href:"./api/puppeteer.puppeteernode.launch",children:(0,n.jsx)(r.code,{children:"puppeteer.launch({product: 'firefox'})"})}),"\nto run your Puppeteer scripts in Firefox Nightly, without any additional custom\npatches. While\n",(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/puppeteer-firefox",children:"an older experiment"})," required\na patched version of Firefox,\n",(0,n.jsx)(r.a,{href:"https://wiki.mozilla.org/Remote",children:"the current approach"})," works with \u201cstock\u201d\nFirefox."]}),"\n",(0,n.jsx)(r.p,{children:"We will continue to collaborate with other browser vendors to bring Puppeteer\nsupport to browsers such as Safari. This effort includes exploration of a\nstandard for executing cross-browser commands (instead of relying on the\nnon-standard DevTools Protocol used by Chrome)."}),"\n",(0,n.jsxs)(r.p,{children:["Update 2023-11-17: Puppeteer has experimental support for the new\n",(0,n.jsx)(r.a,{href:"https://w3c.github.io/webdriver-bidi/",children:"WebDriverBiDi"})," protocol that can be used\nto automate Firefox. The WebDriver BiDi implementation in Firefox will replace\nthe current CDP implementation in Firefox in the future. See\n",(0,n.jsx)(r.a,{href:"https://pptr.dev/webdriver-bidi",children:"https://pptr.dev/webdriver-bidi"})," for more details."]}),"\n",(0,n.jsx)(r.h2,{id:"q-does-puppeteer-support-webdriver-bidi",children:"Q: Does Puppeteer support WebDriver BiDi?"}),"\n",(0,n.jsxs)(r.p,{children:["Puppeteer has experimental support for WebDriver BiDi. See ",(0,n.jsx)(r.a,{href:"https://pptr.dev/webdriver-bidi",children:"https://pptr.dev/webdriver-bidi"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"q-what-are-puppeteers-goals-and-principles",children:"Q: What are Puppeteer\u2019s goals and principles?"}),"\n",(0,n.jsx)(r.p,{children:"The goals of the project are:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Provide a reference implementation that highlights the capabilities of the\n",(0,n.jsx)(r.a,{href:"https://chromedevtools.github.io/devtools-protocol/",children:"Chrome DevTools"}),"\nand ",(0,n.jsx)(r.a,{href:"https://w3c.github.io/webdriver-bidi/",children:"WebDriver BiDi"})," protocols."]}),"\n",(0,n.jsx)(r.li,{children:"Grow the adoption of automated cross-browser testing."}),"\n",(0,n.jsx)(r.li,{children:"Help dogfood new DevTools Protocol and WebDriver BiDi features...and catch bugs!"}),"\n",(0,n.jsx)(r.li,{children:"Learn more about the pain points of automated browser testing and help fill\nthose gaps."}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["We adapt\n",(0,n.jsx)(r.a,{href:"https://www.chromium.org/developers/core-principles",children:"Chromium principles"})," to\nhelp us drive product decisions:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Speed"}),": Puppeteer has almost zero performance overhead over an automated\npage."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Security"}),": Puppeteer operates off-process with respect to the browser, making\nit safe to automate potentially malicious pages."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Stability"}),": Puppeteer should not be flaky and should not leak memory."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Simplicity"}),": Puppeteer provides a high-level API that\u2019s easy to use,\nunderstand, and debug."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"q-is-puppeteer-a-replacement-for-selenium-webdriver",children:"Q: Is Puppeteer a replacement for Selenium WebDriver?"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"No"}),". Both projects are valuable for very different reasons:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Selenium WebDriver focuses on cross-browser automation and provides bindings for\nmultiple languages; Puppeteer is only for JavaScript."}),"\n",(0,n.jsx)(r.li,{children:"Puppeteer focuses on Chromium; its value proposition is richer functionality\nfor Chromium-based browsers."}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["That said, you ",(0,n.jsx)(r.strong,{children:"can"})," use Puppeteer to run tests against Chromium, e.g. using\nthe community-driven\n",(0,n.jsx)(r.a,{href:"https://github.com/smooth-code/jest-puppeteer",children:"jest-puppeteer"})," or\n",(0,n.jsx)(r.a,{href:"https://pptr.dev/integrations/ng-schematics",children:"Puppeteer's Angular integration"}),". While this\nprobably shouldn\u2019t be your only testing solution, it does have a few good points\ncompared to WebDriver classic:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Puppeteer requires zero setup and comes bundled with the Chrome version it\nworks best with, making it\n",(0,n.jsx)(r.a,{href:"https://github.com/puppeteer/puppeteer/#getting-started",children:"very easy to start with"}),"."]}),"\n",(0,n.jsx)(r.li,{children:"Puppeteer has event-driven architecture, which removes a lot of potential\nflakiness. There\u2019s no need for \u201csleep(1000)\u201d calls in puppeteer scripts."}),"\n",(0,n.jsx)(r.li,{children:"Puppeteer exposes browser contexts, making it possible to efficiently\nparallelize test execution."}),"\n",(0,n.jsx)(r.li,{children:"Puppeteer shines when it comes to debugging: flip the \u201cheadless\u201d bit to false,\nadd \u201cslowMo\u201d, and you\u2019ll see what the browser is doing. You can even open\nChrome DevTools to inspect the test environment."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"q-why-doesnt-puppeteer-vxxx-work-with-chromium-vyyy",children:"Q: Why doesn\u2019t Puppeteer v.XXX work with Chromium v.YYY?"}),"\n",(0,n.jsxs)(r.p,{children:["We see Puppeteer as an ",(0,n.jsx)(r.strong,{children:"indivisible entity"})," with Chromium. Each version of\nPuppeteer bundles a specific version of Chromium \u2013 ",(0,n.jsx)(r.strong,{children:"the only"})," version it is\nguaranteed to work with."]}),"\n",(0,n.jsx)(r.p,{children:"This is not an artificial constraint: A lot of work on Puppeteer is actually\ntaking place in the Chromium repository. Here\u2019s a typical story:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["A Puppeteer bug is reported:\n",(0,n.jsx)(r.a,{href:"https://github.com/puppeteer/puppeteer/issues/2709",children:"https://github.com/puppeteer/puppeteer/issues/2709"})]}),"\n",(0,n.jsxs)(r.li,{children:["It turned out this is an issue with the DevTools protocol, so we\u2019re fixing it\nin Chromium: ",(0,n.jsx)(r.a,{href:"https://chromium-review.googlesource.com/c/chromium/src/+/1102154",children:"https://chromium-review.googlesource.com/c/chromium/src/+/1102154"})]}),"\n",(0,n.jsxs)(r.li,{children:["Once the upstream fix is landed, we roll updated Chromium into Puppeteer:\n",(0,n.jsx)(r.a,{href:"https://github.com/puppeteer/puppeteer/pull/2769",children:"https://github.com/puppeteer/puppeteer/pull/2769"})]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"q-which-chrome-version-does-puppeteer-use",children:"Q: Which Chrome version does Puppeteer use?"}),"\n",(0,n.jsxs)(r.p,{children:["Look for the ",(0,n.jsx)(r.code,{children:"chrome"})," entry in\n",(0,n.jsx)(r.a,{href:"https://github.com/puppeteer/puppeteer/blob/main/packages/puppeteer-core/src/revisions.ts",children:"revisions.ts"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"q-which-firefox-version-does-puppeteer-use",children:"Q: Which Firefox version does Puppeteer use?"}),"\n",(0,n.jsxs)(r.p,{children:["Since Firefox support is experimental, Puppeteer downloads the latest\n",(0,n.jsx)(r.a,{href:"https://wiki.mozilla.org/Nightly",children:"Firefox Nightly"})," when the ",(0,n.jsx)(r.code,{children:"PUPPETEER_BROWSER"}),"\nenvironment variable is set to ",(0,n.jsx)(r.code,{children:"firefox"}),". That's also why the value of ",(0,n.jsx)(r.code,{children:"firefox"}),"\nin\n",(0,n.jsx)(r.a,{href:"https://github.com/puppeteer/puppeteer/blob/main/packages/puppeteer-core/src/revisions.ts",children:"revisions.ts"}),"\nis ",(0,n.jsx)(r.code,{children:"latest"})," -- Puppeteer isn't tied to a particular Firefox version."]}),"\n",(0,n.jsx)(r.p,{children:"To fetch Firefox Nightly as part of Puppeteer installation:"}),"\n",(0,n.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,n.jsx)(o.Z,{value:"npm",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"PUPPETEER_BROWSER=firefox npm i puppeteer\n"})})}),(0,n.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"PUPPETEER_BROWSER=firefox yarn add puppeteer\n"})})}),(0,n.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"PUPPETEER_BROWSER=firefox pnpm add puppeteer\n"})})})]}),"\n",(0,n.jsx)(r.p,{children:"To download Firefox Nightly into an existing Puppeteer project:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"npx puppeteer browsers install firefox\n"})}),"\n",(0,n.jsx)(r.h2,{id:"q-whats-considered-a-navigation",children:"Q: What\u2019s considered a \u201cNavigation\u201d?"}),"\n",(0,n.jsxs)(r.p,{children:["From Puppeteer\u2019s standpoint, ",(0,n.jsx)(r.strong,{children:"\u201cnavigation\u201d is anything that changes a page\u2019s\nURL"}),". Aside from regular navigation where the browser hits the network to fetch\na new document from the web server, this includes\n",(0,n.jsx)(r.a,{href:"https://www.w3.org/TR/html5/single-page.html#scroll-to-fragid",children:"anchor navigations"}),"\nand ",(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/History_API",children:"History API"}),"\nusage."]}),"\n",(0,n.jsxs)(r.p,{children:["With this definition of \u201cnavigation,\u201d ",(0,n.jsx)(r.strong,{children:"Puppeteer works seamlessly with\nsingle-page applications."})]}),"\n",(0,n.jsx)(r.h2,{id:"q-whats-the-difference-between-a-trusted-and-untrusted-input-event",children:'Q: What\u2019s the difference between a \u201ctrusted" and "untrusted" input event?'}),"\n",(0,n.jsx)(r.p,{children:"In browsers, input events could be divided into two big groups: trusted vs.\nuntrusted."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Trusted events"}),": events generated by users interacting with the page, e.g.\nusing a mouse or keyboard."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Untrusted event"}),": events generated by Web APIs, e.g. ",(0,n.jsx)(r.code,{children:"document.createEvent"}),"\nor ",(0,n.jsx)(r.code,{children:"element.click()"})," methods."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Websites can distinguish between these two groups:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["using an\n",(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/isTrusted",children:(0,n.jsx)(r.code,{children:"Event.isTrusted"})}),"\nevent flag"]}),"\n",(0,n.jsxs)(r.li,{children:["sniffing for accompanying events. For example, every trusted ",(0,n.jsx)(r.code,{children:"'click'"})," event\nis preceded by ",(0,n.jsx)(r.code,{children:"'mousedown'"})," and ",(0,n.jsx)(r.code,{children:"'mouseup'"})," events."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["For automation purposes it\u2019s important to generate trusted events. ",(0,n.jsx)(r.strong,{children:"All input\nevents generated with Puppeteer are trusted and fire proper accompanying\nevents."})," If, for some reason, one needs an untrusted event, it\u2019s always\npossible to hop into a page context with ",(0,n.jsx)(r.code,{children:"page.evaluate"})," and generate a fake\nevent:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"await page.evaluate(() => {\n  document.querySelector('button[type=submit]').click();\n});\n"})}),"\n",(0,n.jsx)(r.h2,{id:"q-does-puppeteer-support-media-and-audio-playback",children:"Q: Does Puppeteer support media and audio playback?"}),"\n",(0,n.jsxs)(r.p,{children:["Puppeteer uses ",(0,n.jsx)(r.a,{href:"https://developer.chrome.com/blog/chrome-for-testing/",children:"Chrome for Testing"})," binaries\nby default which ship with properietary codecs support starting from\n",(0,n.jsx)(r.a,{href:"https://chromiumdash.appspot.com/commit/12d607016c31ea13579e897740c765be189ed6eb",children:"M120"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"q-i-am-having-trouble-installing--running-puppeteer-in-my-test-environment-where-should-i-look-for-help",children:"Q: I am having trouble installing / running Puppeteer in my test environment. Where should I look for help?"}),"\n",(0,n.jsxs)(r.p,{children:["We have a\n",(0,n.jsx)(r.a,{href:"https://pptr.dev/troubleshooting",children:"troubleshooting"}),"\nguide for various operating systems that lists the required dependencies."]}),"\n",(0,n.jsx)(r.h2,{id:"q-i-have-more-questions-where-do-i-ask",children:"Q: I have more questions! Where do I ask?"}),"\n",(0,n.jsx)(r.p,{children:"There are many ways to get help on Puppeteer:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["For questions: ",(0,n.jsx)(r.a,{href:"https://stackoverflow.com/questions/tagged/puppeteer",children:"Stack Overflow"})]}),"\n",(0,n.jsxs)(r.li,{children:["For bug reports: ",(0,n.jsx)(r.a,{href:"https://github.com/puppeteer/puppeteer/issues",children:"GitHub Issues"})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Make sure to search these channels before posting your question."})]})}function d(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},75251:(e,r,t)=>{var n=t(67294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,t){var n,i={},p=null,u=null;for(n in void 0!==t&&(p=""+t),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(u=r.ref),r)o.call(r,n)&&!l.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:s,type:e,key:p,ref:u,props:i,_owner:a.current}}r.Fragment=i,r.jsx=p,r.jsxs=p},85893:(e,r,t)=>{e.exports=t(75251)},64757:(e,r,t)=>{t.d(r,{Z:()=>o});var n=t(67294),s=t(90512);const i={tabItem:"tabItem__kUE"};function o({children:e,hidden:r,className:t}){return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(i.tabItem,t),hidden:r},e)}},23277:(e,r,t)=>{t.d(r,{Z:()=>q});var n=t(67294),s=t(90512),i=t(6379),o=t(16550),a=t(11666),l=t(47348),p=t(83928),u=t(25633);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function h(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function d(e){var r,t;return null!==(t=null===(r=n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===r?void 0:r.filter(Boolean))&&void 0!==t?t:[]}function f(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=null!=r?r:function(e){return d(e).map((({props:{value:e,label:r,attributes:t,default:n}})=>({value:e,label:r,attributes:t,default:n})))}(t);return function(e){const r=(0,p.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function m({value:e,tabValues:r}){return r.some((r=>r.value===e))}function b({queryString:e=!1,groupId:r}){const t=(0,o.k6)(),s=function({queryString:e=!1,groupId:r}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:e,groupId:r}),i=(0,l._X)(s),a=(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(t.location.search);r.set(s,e),t.replace(h(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){c(e,r,t[r])}))}return e}({},t.location),{search:r.toString()}))}),[s,t]);return[i,a]}function v(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,i=f(e),[o,l]=(0,n.useState)((()=>function({defaultValue:e,tabValues:r}){if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var t;const n=null!==(t=r.find((e=>e.default)))&&void 0!==t?t:r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:i}))),[p,c]=b({queryString:t,groupId:s}),[h,d]=function({groupId:e}){const r=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,s]=(0,u.Nk)(r);return[t,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:s}),v=(()=>{const e=null!=p?p:h;return m({value:e,tabValues:i})?e:null})();(0,a.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),d(e)}),[c,d,i]),tabValues:i}}var g=t(30358);const x={tabList:"tabList_fbd4",tabItem:"tabItem_v5XY"};function j(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function w(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){j(e,r,t[r])}))}return e}function y(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function P({className:e,block:r,selectedValue:t,selectValue:o,tabValues:a}){const l=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),u=e=>{const r=e.currentTarget,n=l.indexOf(r),s=a[n].value;s!==t&&(p(r),o(s))},c=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;var t;r=null!==(t=l[n])&&void 0!==t?t:l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;var n;r=null!==(n=l[t])&&void 0!==n?n:l[l.length-1];break}}null==r||r.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},e)},a.map((({value:e,label:r,attributes:i})=>n.createElement("li",y(w({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>l.push(e),onKeyDown:c,onClick:u},i),{className:(0,s.Z)("tabs__item",x.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===e})}),null!=r?r:e))))}function k({lazy:e,children:r,selectedValue:t}){const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){const e=s.find((e=>e.props.value===t));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},s.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==t}))))}function O(e){const r=v(e);return n.createElement("div",{className:(0,s.Z)("tabs-container",x.tabList)},n.createElement(P,w({},r,e)),n.createElement(k,w({},r,e)))}function q(e){const r=(0,g.Z)();return n.createElement(O,w({key:String(r)},e),d(e.children))}},11151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>o});var n=t(67294);const s={},i=n.createContext(s);function o(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);