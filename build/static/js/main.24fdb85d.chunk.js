(this["webpackJsonpinvoice-generator"]=this["webpackJsonpinvoice-generator"]||[]).push([[0],[,function(e,t,a){e.exports={invoice_customer:"invoiceCustomer_invoice_customer__1_llr",invoice_customer_cardLeft:"invoiceCustomer_invoice_customer_cardLeft__27ZK3",invoice_customer_cardRight:"invoiceCustomer_invoice_customer_cardRight__X83Si",invoice_customer_text:"invoiceCustomer_invoice_customer_text__3FJMM",invoice_customer_text_name:"invoiceCustomer_invoice_customer_text_name__jagWA",invoice_customer_visible:"invoiceCustomer_invoice_customer_visible__1P02n",invoice_customer_textBlock:"invoiceCustomer_invoice_customer_textBlock__bbCrn",invoice_customer_textBlock_title:"invoiceCustomer_invoice_customer_textBlock_title__3gRGk",invoice_customer_textBlock_title_bold:"invoiceCustomer_invoice_customer_textBlock_title_bold__2FGo4",invoice_customer_textBlock_text:"invoiceCustomer_invoice_customer_textBlock_text__1dHbl",invoice_customer_textBlock_text_bold:"invoiceCustomer_invoice_customer_textBlock_text_bold__1QnMQ",invoice_customer_textBlock_textTitle:"invoiceCustomer_invoice_customer_textBlock_textTitle__2B8NF"}},,function(e,t,a){e.exports={invoice_summary_price:"invoiceSummary_invoice_summary_price__nDCDL",invoice_summary_text:"invoiceSummary_invoice_summary_text__1b0SM",invoice_summary_mention:"invoiceSummary_invoice_summary_mention__dpqCk",invoice_summary_mention_text:"invoiceSummary_invoice_summary_mention_text__IYnF_",invoice_summary_total:"invoiceSummary_invoice_summary_total__3zQhK",invoice_summary_total_title:"invoiceSummary_invoice_summary_total_title__3r8_8",invoice_summary_total_text:"invoiceSummary_invoice_summary_total_text__2NKuO",invoice_summary_total_text_mention:"invoiceSummary_invoice_summary_total_text_mention__MkQM8",invoice_summary_total_box:"invoiceSummary_invoice_summary_total_box__2fWig",noteText:"invoiceSummary_noteText__2Y0gQ",noteText_bank:"invoiceSummary_noteText_bank__1SQ1Q"}},,,function(e,t,a){e.exports={invoice_header:"invoiceHeader_invoice_header__2RwhZ",invoice_header_img:"invoiceHeader_invoice_header_img__2nxya",invoice_header_title:"invoiceHeader_invoice_header_title__UbSjo",invoice_header_title_code:"invoiceHeader_invoice_header_title_code__fF0f0",invoice_header_text:"invoiceHeader_invoice_header_text__2JGGg"}},,,,,function(e,t,a){e.exports={home_button:"button_home_button__3Ckir",home_button_print:"button_home_button_print__iawT1"}},,,function(e,t,a){e.exports={title_panel_title:"titlepanel_title_panel_title__3Fzie",title_panel_seperator:"titlepanel_title_panel_seperator__1cMat"}},function(e,t,a){e.exports={expandpanel:"ExpandPanel_expandpanel__3zA0n",expandpanel_header:"ExpandPanel_expandpanel_header__O4bZd",expandpanel_button_container:"ExpandPanel_expandpanel_button_container__1nNKo"}},function(e,t,a){e.exports={invoiceForm_container:"invoiceForm_invoiceForm_container__FXIlP",invoiceForm_button:"invoiceForm_invoiceForm_button__1ieCd",invoiceForm_item:"invoiceForm_invoiceForm_item__QEHl7"}},function(e,t,a){e.exports={invoice_sign:"invoiceSignature_invoice_sign__1cfoM",invoice_sign_textbox:"invoiceSignature_invoice_sign_textbox__3rPEr"}},,,function(e,t,a){e.exports={text:"text_text__2ySFH",text_secondary:"text_text_secondary__24xSa"}},function(e,t,a){e.exports={title_input_seperator:"titleinput_title_input_seperator__tTHcp"}},function(e,t,a){e.exports={invoice_item:"invoiceItem_invoice_item__3JUG7",invoice_item_table:"invoiceItem_invoice_item_table__2DlLh"}},,,function(e,t,a){e.exports={input:"input_input__1CPxR"}},function(e,t,a){e.exports={iconbutton:"iconbutton_iconbutton__2_S73"}},function(e,t,a){e.exports=a.p+"static/media/risetron-logo.f0b6e635.png"},function(e,t,a){e.exports={a4_page:"invoicepage_a4_page__36l3H"}},,,,,function(e,t,a){e.exports=a(40)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(24),o=a.n(i),r=a(2),l=a.n(r),s=a(4),m=a(20),_=a.n(m);function u(e){var t=l()(_.a.text,Object(s.a)({},_.a.text_secondary,e.secondary),e.textclass);return c.a.createElement("span",{className:t},e.children)}u.defaultProps={secondary:!1};var v=a(14),d=a.n(v);function x(e){return c.a.createElement("div",{className:l()(d.a.title_panel,e.titlecontainerclass)},c.a.createElement(u,{textclass:l()(d.a.title_panel_title,e.titleclass)},e.title),c.a.createElement("div",{className:d.a.title_panel_seperator},e.children))}var p=a(13),E=a(25),h=a.n(E);function f(e){return c.a.createElement("input",{className:l()(h.a.input,e.inputclass),type:e.type,name:e.name,value:e.value,onChange:e.onChange})}f.defaultProps={type:"text"};var y=f,g=a(21),b=a.n(g);function I(e){var t=e.title,a=e.textclass,n=Object(p.a)(e,["title","textclass"]);return c.a.createElement("div",{className:l()(b.a.title_input,e.titleclass)},c.a.createElement(u,{textclass:a},t),c.a.createElement("div",{className:b.a.title_input_seperator},c.a.createElement(y,n)))}function F(e){var t=e.form,a=e.handleForm;return c.a.createElement(x,{title:"Customer Info",titlecontainerclass:e.formclass},c.a.createElement(I,{title:"Name",name:"customerName",value:t.customerName,onChange:a}),c.a.createElement(I,{title:"Address 1",name:"customerAddress1",value:t.customerAddress1,onChange:a}),c.a.createElement(I,{title:"Address2",name:"customerAddress2",value:t.customerAddress2,onChange:a}),c.a.createElement(I,{title:"Tel",name:"customerTel",value:t.customerTel,onChange:a}),c.a.createElement(I,{title:"Invoice",name:"customerInvoice",value:t.customerInvoice,onChange:a}),c.a.createElement(I,{title:"Term",name:"customerTerm",value:t.customerTerm,onChange:a}),c.a.createElement(I,{title:"Date",name:"customerInvoiceDate",type:"date",value:t.customerInvoiceDate,onChange:a}))}var N=a(5);function k(e){return c.a.createElement("button",{className:e.buttonclass,onClick:e.onClick},e.left,e.children,e.right)}k.defaultProps={left:null,right:null};var C=a(26),T=a.n(C);function P(e){var t=e.iconName,a=e.iconType,n=e.iconclass,i=e.buttonclass,o=Object(p.a)(e,["iconName","iconType","iconclass","buttonclass"]);return c.a.createElement(k,Object.assign({buttonclass:l()(T.a.iconbutton,i)},o),c.a.createElement("i",{className:l()(a,t,n)}))}P.defaultProps={iconType:"fa"};var A=a(15),B=a.n(A);function S(e){var t=Object(n.useState)(!1),a=Object(N.a)(t,2),i=a[0],o=a[1],r=i?"fa-angle-up":"fa-angle-down";return c.a.createElement("div",{className:l()(B.a.expandpanel,e.expandclass)},c.a.createElement("div",{className:B.a.expandpanel_header},c.a.createElement(u,null,e.title),c.a.createElement("div",{className:B.a.expandpanel_button_container},c.a.createElement(P,{iconName:r,onClick:function(){return o(!i)}}),e.button)),c.a.createElement("div",{style:{display:i?"block":"none"}},e.children))}var O=a(16),D=a.n(O);function j(e){var t=e.invoiceForm,a=e.handleInvoiceItem,n=e.handleDeleteInvoiceItem,i=e.handleAddInvoiceItem;return c.a.createElement(x,{title:"Invoice Items"},t.map((function(e,t){var i="rise_".concat(t),o="Item ".concat(t+1),r=c.a.createElement(P,{iconName:"fa-trash",onClick:function(){return n(t)}}),l=a(t);return c.a.createElement(S,{expandclass:D.a.invoiceForm_item,key:i,title:o,button:r},c.a.createElement(I,{title:"Item Index",name:"itemIndex",value:e.itemIndex,onChange:l}),c.a.createElement(I,{title:"Description",name:"description",value:e.description,onChange:l}),c.a.createElement(I,{title:"Qty",name:"qty",value:e.qty,onChange:l}),c.a.createElement(I,{title:"Unit Price",name:"unitPrice",value:e.unitPrice,onChange:l}),c.a.createElement(I,{title:"Discount",name:"discount",value:e.discount,onChange:l}))})),c.a.createElement("div",{className:D.a.invoiceForm_container},c.a.createElement(k,{buttonclass:D.a.invoiceForm_button,onClick:i},"Add Item")))}var w=a(27),R=a.n(w),M=a(6),q=a.n(M);function G(){return c.a.createElement("div",{className:q.a.invoice_header},c.a.createElement("img",{src:R.a,alt:"company-logo",className:q.a.invoice_header_img}),c.a.createElement(u,{textclass:q.a.invoice_header_title},"Risetron Technology",c.a.createElement(u,{textclass:q.a.invoice_header_title_code},"(CA0305296-D)")),c.a.createElement(u,{textclass:q.a.invoice_header_text},"347, LRG PERDANA 1/9, BANDAR PERDANA"),c.a.createElement(u,{textclass:q.a.invoice_header_text},"08000 SUNGAI PETANI KEDAH"),c.a.createElement(u,{textclass:q.a.invoice_header_text},"Tel: 010 7759560"))}function H(e){var t=e.center?c.a.createElement(u,null,e.center):null;return c.a.createElement("div",{className:e.containerclass},c.a.createElement(u,{textclass:e.titleclass},e.title),t,c.a.createElement(u,{textclass:e.textclass},e.children))}var Q=a(1),L=a.n(Q);function J(e){var t=e.customerForm,a=t.customerName,n=t.customerAddress1,i=t.customerAddress2,o=t.customerTel,r=t.customerInvoice,s=t.customerTerm,m=t.customerInvoiceDate;return c.a.createElement("div",{className:L.a.invoice_customer},c.a.createElement("div",{className:L.a.invoice_customer_cardLeft},c.a.createElement(H,{containerclass:L.a.invoice_customer_visible,titleclass:L.a.invoice_customer_textBlock_title,textclass:L.a.invoice_customer_textBlock_textTitle,title:""}," INVOICE"),c.a.createElement(u,{textclass:l()(L.a.invoice_customer_text,L.a.invoice_customer_text_name)},a),c.a.createElement(u,{textclass:L.a.invoice_customer_text},n),c.a.createElement(u,{textclass:L.a.invoice_customer_text},i),c.a.createElement(u,{textclass:L.a.invoice_customer_text},"Tel: ",o)),c.a.createElement("div",{className:L.a.invoice_customer_cardRight},c.a.createElement(H,{containerclass:L.a.invoice_customer_textBlock,titleclass:L.a.invoice_customer_textBlock_title,textclass:L.a.invoice_customer_textBlock_textTitle,title:""},"INVOICE"),c.a.createElement(H,{containerclass:L.a.invoice_customer_textBlock,titleclass:l()(L.a.invoice_customer_textBlock_title,L.a.invoice_customer_textBlock_title_bold),textclass:l()(L.a.invoice_customer_textBlock_text,L.a.invoice_customer_textBlock_text_bold),title:"Invoice",center:":"},r),c.a.createElement(H,{containerclass:L.a.invoice_customer_textBlock,titleclass:L.a.invoice_customer_textBlock_title,textclass:L.a.invoice_customer_textBlock_text,title:"Terms",center:":"},s),c.a.createElement(H,{containerclass:L.a.invoice_customer_textBlock,titleclass:L.a.invoice_customer_textBlock_title,textclass:L.a.invoice_customer_textBlock_text,title:"Date",center:":"},m),c.a.createElement(H,{containerclass:L.a.invoice_customer_textBlock,titleclass:L.a.invoice_customer_textBlock_title,textclass:L.a.invoice_customer_textBlock_text,title:"Page",center:":"},"1")))}var U=a(22),K=a.n(U);function Y(e){return 0===(e=parseFloat(e))?"":e.toFixed(2)}function W(e){return c.a.createElement("div",{className:K.a.invoice_item},c.a.createElement("table",{className:K.a.invoice_item_table},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{style:{width:"50px"}},"Item"),c.a.createElement("th",{style:{width:"300px",textAlign:"left"}},"Description"),c.a.createElement("th",null,"QTY"),c.a.createElement("th",null,"Unit Price (RM)"),c.a.createElement("th",null,"Discount"),c.a.createElement("th",null,"Amount (RM)"))),c.a.createElement("tbody",null,e.invoicePageItems.map((function(e,t){var a=e.itemIndex,n=e.unitPrice,i=e.discount,o=e.qty,r=e.description,l=0===parseFloat(i)?1:parseFloat(i),s=parseFloat(n)*parseFloat(o)*l;return c.a.createElement("tr",{key:t},c.a.createElement("td",null,a),c.a.createElement("td",{style:{textAlign:"left"}},r),c.a.createElement("td",null,o),c.a.createElement("td",null,Y(n||0)),c.a.createElement("td",null,Y(i||0)),c.a.createElement("td",null,Y(s)))})))))}var z=a(3),Z=a.n(z),V=["","one ","two ","three ","four ","five ","six ","seven ","eight ","nine ","ten ","eleven ","twelve ","thirteen ","fourteen ","fifteen ","sixteen ","seventeen ","eighteen ","nineteen "],X=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];function $(e){var t=e.invoicePageItems.reduce((function(e,t){var a=t.qty,n=t.discount,c=t.unitPrice,i=0===parseFloat(n)?1:parseFloat(n);return parseFloat(c)*parseFloat(a)*i+e}),0),a=function(e){if((e=e.toString()).length>9)return"overflow";var t=("000000000"+e).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);if(t){var a="";return a+=0!==parseFloat(t[1])?(V[Number(t[1])]||X[t[1][0]]+" "+V[t[1][1]])+"crore ":"",a+=0!==parseFloat(t[2])?(V[Number(t[2])]||X[t[2][0]]+" "+V[t[2][1]])+"lakh ":"",a+=0!==parseFloat(t[3])?(V[Number(t[3])]||X[t[3][0]]+" "+V[t[3][1]])+"thousand ":"",a+=0!==parseFloat(t[4])?(V[Number(t[4])]||X[t[4][0]]+" "+V[t[4][1]])+"hundred ":"",(a+=0!==parseFloat(t[5])?(""!==a?"and ":"")+(V[Number(t[5])]||X[t[5][0]]+" "+V[t[5][1]])+"only ":"").includes("only")||(a+="only"),a.toUpperCase()}}(t);return t=t.toFixed(2),c.a.createElement("div",{className:Z.a.invoice_summary},c.a.createElement("div",{className:Z.a.invoice_summary_price},c.a.createElement(u,{textclass:Z.a.invoice_summary_text},"RINGGIT MALAYSIA ",a),c.a.createElement("div",{className:Z.a.invoice_summary_total},c.a.createElement("div",null,c.a.createElement(H,{titleclass:Z.a.invoice_summary_total_title,textclass:Z.a.invoice_summary_total_text,title:"B/F Pages Total"}),c.a.createElement(H,{titleclass:Z.a.invoice_summary_total_title,textclass:Z.a.invoice_summary_total_text,title:"Page Total"},t),c.a.createElement(H,{titleclass:l()(Z.a.invoice_summary_total_title,Z.a.invoice_summary_total_text_mention),textclass:l()(Z.a.invoice_summary_total_text,Z.a.invoice_summary_total_box),title:"Total"},t)))),c.a.createElement("div",null,c.a.createElement(u,{textclass:Z.a.noteText},"Notes:"),c.a.createElement(u,{textclass:Z.a.noteText},"1. Goods sold are not returnable."),c.a.createElement(u,{textclass:Z.a.noteText},"2. All goods sold shall still remain as the property of 'Risetron Technology Solutions' until full payment is made."),c.a.createElement(u,{textclass:Z.a.noteText},"3. Our company reserves the right to charge 1.5% interest per month on all overdue account."),c.a.createElement(u,{textclass:Z.a.noteText},"4. All cheques should be crossed 'A/C Payee Only' and made payable to 'Risetron Technology Solutions'."),c.a.createElement(u,{textclass:Z.a.noteText_bank},"MAYBANK A/C : 502184106317"),c.a.createElement(u,{textclass:Z.a.noteText},"4. Without warranty coverage for FOC item(s).")))}var ee=a(17),te=a.n(ee);function ae(){return c.a.createElement("div",{className:te.a.invoice_sign},c.a.createElement(u,{textclass:te.a.invoice_sign_textbox},"Authorised Signature"),c.a.createElement(u,{textclass:te.a.invoice_sign_textbox},"Customer Sign & Chop"))}var ne=a(28),ce=a.n(ne);function ie(e){return c.a.createElement("section",{id:"invoice_1",className:l()("invoice-page",ce.a.a4_page)},c.a.createElement(G,null),c.a.createElement(J,{customerForm:e.customerForm}),c.a.createElement(W,{invoicePageItems:e.invoicePageItems}),c.a.createElement($,{invoicePageItems:e.invoicePageItems}),c.a.createElement(ae,null))}function oe(e){return c.a.createElement(ie,{customerForm:e.customerForm,invoicePageItems:e.invoicePageItems})}ie.defaultProps={customerForm:{},customerItems:[]};var re=a(8),le=a.n(re),se=a(29),me=a(12),_e=a(30),ue=a(19),ve=a.n(ue);function de(){return(de=Object(me.a)(le.a.mark((function e(t){var a;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ve()(t,{scale:2.5});case 2:return a=e.sent,e.abrupt("return",a.toDataURL());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var xe=function(e){return de.apply(this,arguments)};function pe(){return(pe=Object(me.a)(le.a.mark((function e(){var t,a,n,c,i,o,r;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelectorAll(".invoice-page"),a=[],n=new _e.a,t.forEach((function(e){a.push(xe(e))})),e.next=6,Promise.all(a);case 6:c=e.sent,i=Object(se.a)(c);try{for(i.s();!(o=i.n()).done;)r=o.value,n.addImage(r,"PNG",0,0,210,297)}catch(l){i.e(l)}finally{i.f()}n.save("risetron-invoice.pdf");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ee=function(){return pe.apply(this,arguments)},he=a(11),fe=a.n(he);function ye(){return c.a.createElement(P,{iconName:"fa-print",buttonclass:l()(fe.a.home_button,fe.a.home_button_print),onClick:Ee})}function ge(e){return c.a.createElement(P,{iconName:"fa-file",buttonclass:l()(fe.a.home_button),onClick:e.handleReset})}var be=a(9),Ie={getDate:function(){var e=new Date;return{day:e.getDate(),month:e.getMonth()+1,year:e.getFullYear()}},format:function(e){var t=e.day,a=e.month,n=e.year,c=1===t.toString().length?"0".concat(t):t,i=1===a.toString().length?"0".concat(a):a;return"".concat(n,"-").concat(i,"-").concat(c)},getTodayDate:function(){return this.format(this.getDate())}},Fe=function(){return{customerAddress1:"",customerAddress2:"",customerInvoice:"",customerInvoiceDate:Ie.getTodayDate(),customerName:"",customerTel:"",customerTerm:""}};function Ne(e,t){var a=t.type,n=t.payload,c=void 0===n?{}:n;switch(a){case"reset":return Fe();case"update":var i=c.name,o=c.value;return Object(be.a)(Object(be.a)({},e),{},Object(s.a)({},i,o));case"load":return c.customerForm}}var ke=a(18);function Ce(e,t){var a=t.type,n=t.payload,c=void 0===n?{}:n,i=c.itemAt,o=c.name,r=c.value;switch(a){case"reset":return[{itemIndex:1,description:"item 1 testing",qty:1,unitPrice:0,discount:0,amount:0}];case"add":return[].concat(Object(ke.a)(e),[{itemIndex:1,description:"item 1 testing",qty:1,unitPrice:0,discount:0,amount:0}]);case"delete":var l=Object(ke.a)(e);return l.splice(i,1),l;case"editItem":var m=Object(ke.a)(e),_=m.splice(i,1),u=Object(N.a)(_,1)[0],v=Object(be.a)(Object(be.a)({},u),{},Object(s.a)({},o,r));return v.amount=v.qty*v.unitPrice*v.discount,m.splice(i,0,v),m}}a(38);function Te(){var e=function(){var e=Fe(),t=Object(n.useReducer)(Ne,e),a=Object(N.a)(t,2);return{customerForm:a[0],customerFormDispatch:a[1]}}(),t=e.customerForm,a=e.customerFormDispatch,i=function(){var e=[{itemIndex:1,description:"item 1 testing",qty:1,unitPrice:0,discount:0,amount:0}],t=Object(n.useReducer)(Ce,e),a=Object(N.a)(t,2);return{invoicePageForm:a[0],invoicePageFormReducer:a[1]}}(),o=i.invoicePageForm,r=i.invoicePageFormReducer;return Object(n.useEffect)((function(){var e=localStorage.getItem("risetron-invoice")||"";if(e){var t=JSON.parse(e).customerForm;a({type:"load",payload:{customerForm:t}})}}),[a]),Object(n.useEffect)((function(){var e={customerForm:t};localStorage.setItem("risetron-invoice",JSON.stringify(e))})),c.a.createElement("section",{className:"home"},c.a.createElement(ge,{handleReset:function(){a({type:"reset"}),r({type:"reset"})}}),c.a.createElement(ye,null),c.a.createElement("div",{className:"home_form"},c.a.createElement(F,{form:t,handleForm:function(e){var t=e.currentTarget,n=t.name,c=t.value;a({type:"update",payload:{name:n,value:c}})}}),c.a.createElement("div",{className:"home_invoice_container"},c.a.createElement(j,{invoiceForm:o,handleAddInvoiceItem:function(){return r({type:"add"})},handleInvoiceItem:function(e){return function(t){var a=t.currentTarget,n=a.name,c=a.value;r({type:"editItem",payload:{name:n,value:c,itemAt:e}})}},handleDeleteInvoiceItem:function(e){r({type:"delete",payload:{itemAt:e}})}}))),c.a.createElement("div",{className:"home_viewer"},c.a.createElement(oe,{customerForm:t,invoicePageItems:o})))}a(39);var Pe=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(Te,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[33,1,3]]]);
//# sourceMappingURL=main.24fdb85d.chunk.js.map