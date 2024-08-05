/*! For license information please see 35f4ee4c.05136f57.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61376],{18244:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=t(85893),r=t(11151);const i={sidebar_label:"ElementHandle"},d="ElementHandle class",l={id:"api/puppeteer.elementhandle",title:"ElementHandle class",description:"ElementHandle represents an in-page DOM element.",source:"@site/versioned_docs/version-22.15.0/api/puppeteer.elementhandle.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle",permalink:"/api/puppeteer.elementhandle",draft:!1,unlisted:!1,tags:[],version:"22.15.0",frontMatter:{sidebar_label:"ElementHandle"},sidebar:"api",previous:{title:"JSHandle.toString",permalink:"/api/puppeteer.jshandle.tostring"},next:{title:"ElementHandle.$",permalink:"/api/puppeteer.elementhandle._"}},h={},c=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"elementhandle-class",children:"ElementHandle class"}),"\n",(0,s.jsx)(n.p,{children:"ElementHandle represents an in-page DOM element."}),"\n",(0,s.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"export declare abstract class ElementHandle<ElementType extends Node = Element> extends JSHandle<ElementType>\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Extends:"})," ",(0,s.jsx)(n.a,{href:"/api/puppeteer.jshandle",children:"JSHandle"}),"<ElementType>"]}),"\n",(0,s.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(n.p,{children:["ElementHandles can be created with the ",(0,s.jsx)(n.a,{href:"/api/puppeteer.page._",children:"Page.$()"})," method."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://example.com');\n  const hrefElement = await page.$('a');\n  await hrefElement.click();\n  // ...\n})();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["ElementHandle prevents the DOM element from being garbage-collected unless the handle is ",(0,s.jsx)(n.a,{href:"/api/puppeteer.jshandle.dispose",children:"disposed"}),". ElementHandles are auto-disposed when their origin frame gets navigated."]}),"\n",(0,s.jsxs)(n.p,{children:["ElementHandle instances can be used as arguments in ",(0,s.jsx)(n.a,{href:"/api/puppeteer.page._eval",children:"Page.$eval()"})," and ",(0,s.jsx)(n.a,{href:"/api/puppeteer.page.evaluate",children:"Page.evaluate()"})," methods."]}),"\n",(0,s.jsxs)(n.p,{children:["If you're using TypeScript, ElementHandle takes a generic argument that denotes the type of element the handle is holding within. For example, if you have a handle to a ",(0,s.jsx)(n.code,{children:"<select>"})," element, you can type it as ",(0,s.jsx)(n.code,{children:"ElementHandle<HTMLSelectElement>"})," and you get some nicer type checks."]}),"\n",(0,s.jsxs)(n.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,s.jsx)(n.code,{children:"ElementHandle"})," class."]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Property"})}),(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Modifiers"})}),(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Description"})})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"frame",children:"frame"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"readonly"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/api/puppeteer.frame",children:"Frame"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Frame corresponding to the current handle."})})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Method"})}),(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Modifiers"})}),(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"_",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle._",children:"$(selector)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Queries the current element for an element matching the given selector."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"__",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.__",children:"$$(selector, options)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Queries the current element for all elements matching the given selector."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"__eval",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.__eval",children:"$$eval(selector, pageFunction, args)"})})}),(0,s.jsx)("td",{}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.p,{children:"Runs the given function on an array of elements matching the given selector in the current element."}),(0,s.jsx)(n.p,{children:"If the given function returns a promise, then this method will wait till the promise resolves."})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"_eval",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle._eval",children:"$eval(selector, pageFunction, args)"})})}),(0,s.jsx)("td",{}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.p,{children:"Runs the given function on the first element matching the given selector in the current element."}),(0,s.jsx)(n.p,{children:"If the given function returns a promise, then this method will wait till the promise resolves."})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"autofill",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.autofill",children:"autofill(data)"})})}),(0,s.jsx)("td",{}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(n.p,{children:["If the element is a form input, you can use ",(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.autofill",children:"ElementHandle.autofill()"})," to test if the form is compatible with the browser's autofill implementation. Throws an error if the form cannot be autofilled."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Remarks:"})}),(0,s.jsx)(n.p,{children:"Currently, Puppeteer supports auto-filling credit card information only and in Chrome in the new headless and headful modes only."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Select an input on the credit card form.\nconst name = await page.waitForSelector('form #name');\n// Trigger autofill with the desired data.\nawait name.autofill({\n  creditCard: {\n    number: '4444444444444444',\n    name: 'John Smith',\n    expiryMonth: '01',\n    expiryYear: '2030',\n    cvc: '123',\n  },\n});\n"})})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"boundingbox",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.boundingbox",children:"boundingBox()"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:["This method returns the bounding box of the element (relative to the main frame), or ",(0,s.jsx)(n.code,{children:"null"})," if the element is ",(0,s.jsx)(n.a,{href:"https://drafts.csswg.org/css-display-4/#box-generation",children:"not part of the layout"})," (example: ",(0,s.jsx)(n.code,{children:"display: none"}),")."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"boxmodel",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.boxmodel",children:"boxModel()"})})}),(0,s.jsx)("td",{}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(n.p,{children:["This method returns boxes of the element, or ",(0,s.jsx)(n.code,{children:"null"})," if the element is ",(0,s.jsx)(n.a,{href:"https://drafts.csswg.org/css-display-4/#box-generation",children:"not part of the layout"})," (example: ",(0,s.jsx)(n.code,{children:"display: none"}),")."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Remarks:"})}),(0,s.jsxs)(n.p,{children:["Boxes are represented as an array of points; Each Point is an object ",(0,s.jsx)(n.code,{children:"{x, y}"}),". Box points are sorted clock-wise."]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"click",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.click",children:"click(this, options)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:["This method scrolls element into view if needed, and then uses ",(0,s.jsx)(n.a,{href:"/api/puppeteer.page#mouse",children:"Page.mouse"})," to click in the center of the element. If the element is detached from DOM, the method throws an error."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"clickablepoint",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.clickablepoint",children:"clickablePoint(offset)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Returns the middle point within an element unless a specific offset is provided."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"contentframe",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.contentframe",children:"contentFrame(this)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Resolves the frame associated with the element, if any. Always exists for HTMLIFrameElements."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"contentframe",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.contentframe",children:"contentFrame()"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"drag",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.drag",children:"drag(this, target)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Drags an element over the given element or point."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"draganddrop",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.draganddrop",children:"dragAndDrop(this, target, options)"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"deprecated"})})}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Deprecated:"})}),(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.code,{children:"ElementHandle.drop"})," instead."]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"dragenter",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.dragenter",children:"dragEnter(this, data)"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"deprecated"})})}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Deprecated:"})}),(0,s.jsxs)(n.p,{children:["Do not use. ",(0,s.jsx)(n.code,{children:"dragenter"})," will automatically be performed during dragging."]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"dragover",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.dragover",children:"dragOver(this, data)"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"deprecated"})})}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Deprecated:"})}),(0,s.jsxs)(n.p,{children:["Do not use. ",(0,s.jsx)(n.code,{children:"dragover"})," will automatically be performed during dragging."]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"drop",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.drop",children:"drop(this, element)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Drops the given element onto the current one."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"drop",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.drop",children:"drop(this, data)"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"deprecated"})})}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Deprecated:"})}),(0,s.jsx)(n.p,{children:"No longer supported."})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"focus",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.focus",children:"focus()"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:["Calls ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus",children:"focus"})," on the element."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"hover",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.hover",children:"hover(this)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:["This method scrolls element into view if needed, and then uses ",(0,s.jsx)(n.a,{href:"/api/puppeteer.page#mouse",children:"Page.mouse"})," to hover over the center of the element. If the element is detached from DOM, the method throws an error."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"ishidden",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.ishidden",children:"isHidden()"})})}),(0,s.jsx)("td",{}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.p,{children:"An element is considered to be hidden if at least one of the following is true:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["the element has no ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle",children:"computed styles"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["the element has an empty ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect",children:"bounding client rect"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["the element's ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/visibility",children:"visibility"})," is ",(0,s.jsx)(n.code,{children:"hidden"})," or ",(0,s.jsx)(n.code,{children:"collapse"}),"."]}),"\n"]}),"\n"]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"isintersectingviewport",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.isintersectingviewport",children:"isIntersectingViewport(this, options)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:["Resolves to true if the element is visible in the current viewport. If an element is an SVG, we check if the svg owner element is in the viewport instead. See ",(0,s.jsx)(n.a,{href:"https://crbug.com/963246",children:"https://crbug.com/963246"}),"."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"isvisible",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.isvisible",children:"isVisible()"})})}),(0,s.jsx)("td",{}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.p,{children:"An element is considered to be visible if all of the following is true:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["the element has ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle",children:"computed styles"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["the element has a non-empty ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect",children:"bounding client rect"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["the element's ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/visibility",children:"visibility"})," is not ",(0,s.jsx)(n.code,{children:"hidden"})," or ",(0,s.jsx)(n.code,{children:"collapse"}),"."]}),"\n"]}),"\n"]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"press",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.press",children:"press(key, options)"})})}),(0,s.jsx)("td",{}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(n.p,{children:["Focuses the element, and then uses ",(0,s.jsx)(n.a,{href:"/api/puppeteer.keyboard.down",children:"Keyboard.down()"})," and ",(0,s.jsx)(n.a,{href:"/api/puppeteer.keyboard.up",children:"Keyboard.up()"}),"."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Remarks:"})}),(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.code,{children:"key"})," is a single character and no modifier keys besides ",(0,s.jsx)(n.code,{children:"Shift"})," are being held down, a ",(0,s.jsx)(n.code,{children:"keypress"}),"/",(0,s.jsx)(n.code,{children:"input"})," event will also be generated. The ",(0,s.jsx)(n.code,{children:"text"})," option can be specified to force an input event to be generated."]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NOTE"})," Modifier keys DO affect ",(0,s.jsx)(n.code,{children:"elementHandle.press"}),". Holding down ",(0,s.jsx)(n.code,{children:"Shift"})," will type the text in upper case."]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"screenshot",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.screenshot",children:"screenshot(options)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:["This method scrolls element into view if needed, and then uses ",(0,s.jsx)(n.a,{href:"/api/puppeteer.page.screenshot",children:"Page.screenshot()"})," to take a screenshot of the element. If the element is detached from DOM, the method throws an error."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"screenshot",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.screenshot",children:"screenshot(options)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"scrollintoview",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.scrollintoview",children:"scrollIntoView(this)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Scrolls the element into view using either the automation protocol client or by calling element.scrollIntoView."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"select",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.select",children:"select(values)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:["Triggers a ",(0,s.jsx)(n.code,{children:"change"})," and ",(0,s.jsx)(n.code,{children:"input"})," event once all the provided options have been selected. If there's no ",(0,s.jsx)(n.code,{children:"<select>"})," element matching ",(0,s.jsx)(n.code,{children:"selector"}),", the method throws an error."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"tap",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.tap",children:"tap(this)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:["This method scrolls element into view if needed, and then uses ",(0,s.jsx)(n.a,{href:"/api/puppeteer.touchscreen.tap",children:"Touchscreen.tap()"})," to tap in the center of the element. If the element is detached from DOM, the method throws an error."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"toelement",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.toelement",children:"toElement(tagName)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Converts the current handle to the given element type."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"touchend",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.touchend",children:"touchEnd(this)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"touchmove",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.touchmove",children:"touchMove(this)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"touchstart",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.touchstart",children:"touchStart(this)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"type",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.type",children:"type(text, options)"})})}),(0,s.jsx)("td",{}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(n.p,{children:["Focuses the element, and then sends a ",(0,s.jsx)(n.code,{children:"keydown"}),", ",(0,s.jsx)(n.code,{children:"keypress"}),"/",(0,s.jsx)(n.code,{children:"input"}),", and ",(0,s.jsx)(n.code,{children:"keyup"})," event for each character in the text."]}),(0,s.jsxs)(n.p,{children:["To press a special key, like ",(0,s.jsx)(n.code,{children:"Control"})," or ",(0,s.jsx)(n.code,{children:"ArrowDown"}),", use ",(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.press",children:"ElementHandle.press()"}),"."]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"uploadfile",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.uploadfile",children:"uploadFile(this, paths)"})})}),(0,s.jsx)("td",{}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(n.p,{children:["Sets the value of an ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input",children:"input element"})," to the given file paths."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Remarks:"})}),(0,s.jsxs)(n.p,{children:["This will not validate whether the file paths exists. Also, if a path is relative, then it is resolved against the ",(0,s.jsx)(n.a,{href:"https://nodejs.org/api/process.html#process_process_cwd",children:"current working directory"}),". For locals script connecting to remote chrome environments, paths must be absolute."]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"waitforselector",children:(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle.waitforselector",children:"waitForSelector(selector, options)"})})}),(0,s.jsx)("td",{}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.p,{children:"Wait for an element matching the given selector to appear in the current element."}),(0,s.jsxs)(n.p,{children:["Unlike ",(0,s.jsx)(n.a,{href:"/api/puppeteer.frame.waitforselector",children:"Frame.waitForSelector()"}),", this method does not work across navigations or if the element is detached from DOM."]})]})]})]})]})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},75251:(e,n,t)=>{var s=t(67294),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,i={},c=null,a=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)d.call(n,s)&&!h.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:r,type:e,key:c,ref:a,props:i,_owner:l.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},85893:(e,n,t)=>{e.exports=t(75251)},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>d});var s=t(67294);const r={},i=s.createContext(r);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);