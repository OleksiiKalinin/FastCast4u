(this["webpackJsonpfast-cast4u"]=this["webpackJsonpfast-cast4u"]||[]).push([[0],{14:function(e,t,s){e.exports={TopicImg:"styles_TopicImg__3CIdi"}},16:function(e,t,s){e.exports={InfoPanel:"InfoPanel_InfoPanel__1XU8i",InfoPanelInner:"InfoPanel_InfoPanelInner__3Mm3n",InfoPanelTable:"InfoPanel_InfoPanelTable__1Phtg",InfoPanelTableTopics:"InfoPanel_InfoPanelTableTopics__2xqZP",InfoPanelTableTopic:"InfoPanel_InfoPanelTableTopic__rvxs0",ActiveTopic:"InfoPanel_ActiveTopic__1jKmu",InfoPanelTableInfo:"InfoPanel_InfoPanelTableInfo__IPhHZ",ScrollButton:"InfoPanel_ScrollButton__gGw6Y",fadeInDown:"InfoPanel_fadeInDown__1F6nJ"}},34:function(e,t,s){e.exports={Header:"Header_Header__2nGMT",Logo:"Header_Logo__3uEFy",Login:"Header_Login__3wOdX"}},35:function(e,t,s){e.exports={RegistrationPanel:"RegistrationPanel_RegistrationPanel__1mOLd",LeftSide:"RegistrationPanel_LeftSide__37GKN",RightSide:"RegistrationPanel_RightSide__3Eec1",LeftSidePanel:"RegistrationPanel_LeftSidePanel__17DjB",RightSidePanel:"RegistrationPanel_RightSidePanel__3fZoK",Title:"RegistrationPanel_Title__28srm",Price:"RegistrationPanel_Price__cplCx",Features:"RegistrationPanel_Features__2qvwE",RightSideTitle:"RegistrationPanel_RightSideTitle__1cHeY",RightSideForm:"RegistrationPanel_RightSideForm__1etsd",Column:"RegistrationPanel_Column__Hj1wv",RightSideFormAgreement:"RegistrationPanel_RightSideFormAgreement__3sMG1",RightSideFormSubmit:"RegistrationPanel_RightSideFormSubmit__2jNn4"}},36:function(e,t,s){e.exports={HomePage:"HomePage_HomePage__3vIS-",SidePanel:"HomePage_SidePanel__9mzYD",ClosePanel:"HomePage_ClosePanel__2ioGX",LoginPanel:"HomePage_LoginPanel__1UUU5",LoginSubmit:"HomePage_LoginSubmit__3d-IZ",Overlay:"HomePage_Overlay__kC7V3"}},41:function(e,t,s){e.exports={Footer:"Footer_Footer__1USsY",Copyrights:"Footer_Copyrights__3i824"}},64:function(e,t,s){},65:function(e,t,s){"use strict";s.r(t);var n=s(1),i=s.n(n),c=s(9),a=s.n(c),r=s(8),o=s(41),l=s.n(o),d=s(0),j=function(){return Object(d.jsx)("footer",{className:l.a.Footer,children:Object(d.jsxs)("div",{className:l.a.Copyrights,children:[Object(d.jsx)("span",{children:"Copyrights \xa9 2008-2021 All Rights Reserved by FastCast DWC-LLC"}),Object(d.jsxs)("span",{children:[Object(d.jsx)("a",{href:"#",children:"Terms of Service"})," / ",Object(d.jsx)("a",{href:"#",children:"Privacy Policy"})]})]})})},b=s(34),h=s.n(b),x=s.p+"static/media/logo.c9a436ec.png",O=s(43),p=s.n(O),u=function(e){var t=e.toggleSidePannel;return Object(d.jsxs)("header",{className:h.a.Header,children:[Object(d.jsx)("div",{className:h.a.Logo,children:Object(d.jsx)("img",{src:x,alt:"logo"})}),Object(d.jsxs)("div",{className:h.a.Login,onClick:t,children:[Object(d.jsx)(p.a,{fontSize:"small",htmlColor:"#4772d9"}),Object(d.jsx)("span",{children:Object(d.jsx)("color",{children:"Login"})})]})]})},m=function(e){var t=e.activeTopic,s=e.setActiveTopic,n=e.classes;return Object(d.jsx)("div",{className:n.InfoPanelTableTopics,children:Object(d.jsx)("div",{children:["FreeSHOUTcast","AutoDJ","Live Stream","Limits"].map((function(e,i){return Object(d.jsx)("div",{onClick:function(e){return s(+e.target.getAttribute("index"))},index:"".concat(i+1),className:"".concat(n.InfoPanelTableTopic," ").concat(t===i+1?n.ActiveTopic:""),children:e},i)}))})})},g=s(5),f=s(87),v=s(88),P=s(86),_=Object(g.a)({root:{border:"1px solid #DDD",borderTop:"1px dotted #DDD",boxShadow:"none",background:"none","&:not(:last-child)":{borderBottom:0},"&:first-child":{borderTopLeftRadius:"4px",borderTopRightRadius:"4px",borderTop:"1px solid #DDD"},"&:last-child":{borderBottomLeftRadius:"4px",borderBottomRightRadius:"4px",borderBottom:"1px solid #DDD"},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(f.a),S=Object(g.a)({root:{marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"},padding:"0px 16px"},expanded:{}})(v.a),T=Object(g.a)((function(e){return{root:{padding:e.spacing(2)}}}))(P.a);function y(e){var t=i.a.useState("panel1"),s=Object(r.a)(t,2),n=s[0],c=s[1];return Object(d.jsx)("div",{children:e.children.map((function(e,t){return Object(d.jsxs)(_,{square:!0,expanded:n==="panel".concat(t+1),onChange:(s="panel".concat(t+1),function(e,t){c(!!t&&s)}),children:[Object(d.jsx)(S,{"aria-controls":"panel".concat(t+1,"d-content"),id:"panel".concat(t+1,"d-header"),children:Object(d.jsx)("div",{style:{fontSize:"15px",fontWeight:700,color:"#444"},children:e.props.children[0]})}),Object(d.jsx)(T,{children:Object(d.jsx)("div",{style:{paddingLeft:"16px",fontWeight:400,color:"#555",lineHeight:1.8},children:e.props.children[1]})})]},t);var s}))})}var R=function(){return Object(d.jsxs)(y,{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"What is FreeSHOUTcast?"}),Object(d.jsx)("p",{children:"FreeSHOUTcast provides Free Online Radio Servers. You can get your own server and start your internet radio station for free!"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Is the service really free?"}),Object(d.jsx)("p",{children:"Yes, FreeSHOUTcast completely free, this is not a demo or trial."})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"What's the trick?"}),Object(d.jsx)("p",{children:"There is no trick, we created this service for online radio enthusiasts. You can try streaming online, share favorite music or become a radio DJ for free."})]})]})},I=function(){return Object(d.jsxs)(y,{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Are there any limits?"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Yes, the machines for free radio servers are shared. The limits guarantee machine stability and prevent outages."}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:"After a grace period of 3 days, you need to keep your audience above 3 listeners per 3 days - if you don't generate the traffic, your account will be stopped after 3 days. Stopped servers will be terminated after 7 days of inactivity."}),Object(d.jsx)("br",{}),Object(d.jsxs)("p",{children:["The current limits for the free radio servers are:",Object(d.jsx)("br",{}),"- up to 100 listeners connected at one time,",Object(d.jsx)("br",{}),"- 96 kbps maximum broadcasting bitrate,",Object(d.jsx)("br",{}),"- 1GB AutoDJ space per Server,",Object(d.jsx)("br",{}),"- 1 Radio Channel per Server."]})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"What if I need Unlimited?"}),Object(d.jsx)("p",{children:"Just ask our support agents for the Unlimited Server offer if you need anything more that provided in the free radio server."})]})]})},C=s(14),w=s.n(C),N=function(){return Object(d.jsxs)(y,{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"What is AutoDJ?"}),Object(d.jsx)("p",{children:"AutoDJ lets you upload music and pre-recorded shows to your free radio server (like a free music cloud) and create playlists online so you can listen and share your stream on the Internet. Everything can be accessed via your web browser, not need to install anything on your computer."})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Playlist Setup"}),Object(d.jsx)("p",{children:"To learn how to add tracks to a playlists in AutoDJ, watch the video"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"How many tracks can I upload?"}),Object(d.jsx)("p",{children:"You have 1GB of disc space for your tracks. If it\u2019s full, remove old tracks to upload new."})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"How to activate AutoDJ (Centova Cast Control Panel)"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"When you get a new server, AutoDJ is disabled by default. To enable AutoDJ, perform the instructions described below. "}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:"1. Stop your server"}),Object(d.jsx)("img",{className:w.a.TopicImg,src:"https://img.fastcast4u.com/content/tutorials/enable1.jpg",alt:"blabla"})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"How to upload your audio files to AutoDJ? (Centova Cast Control Panel)"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("big",{children:"To learn how to add tracks to playlists in AutoDJ see the tutorial below:"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:"1. Select MEDIA hyperlink in the panel on the left side of Centova Control Panel, under the AutoDJ section"}),Object(d.jsx)("br",{}),Object(d.jsx)("img",{className:w.a.TopicImg,src:"https://img.fastcast4u.com/tutorials/centovacast/media.jpg",alt:"blabla"})]})]})]})},D=function(){return Object(d.jsxs)(y,{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"How to set up a live stream? (Centova Cast Control Panel and Mixxx)"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("big",{children:"To learn how to add tracks to playlists in AutoDJ see the tutorial below:"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:"1. Select MEDIA hyperlink in the panel on the left side of Centova Control Panel, under the AutoDJ section"}),Object(d.jsx)("br",{}),Object(d.jsx)("img",{className:w.a.TopicImg,src:"https://img.fastcast4u.com/tutorials/centovacast/media.jpg",alt:"blabla"})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"How to set up a live stream? (Centova Cast Control Panel and BUTT)"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("big",{children:"To learn how to add tracks to playlists in AutoDJ see the tutorial below:"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:"1. Select MEDIA hyperlink in the panel on the left side of Centova Control Panel, under the AutoDJ section"}),Object(d.jsx)("br",{}),Object(d.jsx)("img",{className:w.a.TopicImg,src:"https://img.fastcast4u.com/tutorials/centovacast/media.jpg",alt:"blabla"})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"How to set up a live stream? (Centova Cast Control Panel and Winamp)"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("big",{children:"To learn how to add tracks to playlists in AutoDJ see the tutorial below:"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:"1. Select MEDIA hyperlink in the panel on the left side of Centova Control Panel, under the AutoDJ section"}),Object(d.jsx)("br",{}),Object(d.jsx)("img",{className:w.a.TopicImg,src:"https://img.fastcast4u.com/tutorials/centovacast/media.jpg",alt:"blabla"})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Recommended free broadcasting software"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("big",{children:"To learn how to add tracks to playlists in AutoDJ see the tutorial below:"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:"1. Select MEDIA hyperlink in the panel on the left side of Centova Control Panel, under the AutoDJ section"}),Object(d.jsx)("br",{}),Object(d.jsx)("img",{className:w.a.TopicImg,src:"https://img.fastcast4u.com/tutorials/centovacast/media.jpg",alt:"blabla"})]})]})]})},F=function(e){var t=e.activeTopic;return 1===t?Object(d.jsx)(R,{}):2===t?Object(d.jsx)(N,{}):3===t?Object(d.jsx)(D,{}):4===t?Object(d.jsx)(I,{}):void 0},A=s(16),k=s.n(A),H=s(45),L=s.n(H),E=function(){var e=Object(n.useRef)(null),t=Object(n.useState)(1),s=Object(r.a)(t,2),i=s[0],c=s[1];return Object(d.jsxs)("section",{ref:e,className:k.a.InfoPanel,children:[Object(d.jsxs)("div",{className:k.a.InfoPanelInner,children:[Object(d.jsx)("h2",{children:"Frequently Asked Questions:"}),Object(d.jsxs)("div",{className:k.a.InfoPanelTable,children:[Object(d.jsx)(m,{classes:k.a,activeTopic:i,setActiveTopic:c}),Object(d.jsx)("div",{className:k.a.InfoPanelTableInfo,children:Object(d.jsx)(F,{activeTopic:i})})]})]}),Object(d.jsx)("div",{className:k.a.ScrollButton,onClick:function(){var t=document.querySelector("html");t.scrollTo({top:e.current.offsetTop-t.getBoundingClientRect().top-60,behavior:"smooth",block:"center"})},children:Object(d.jsx)(L.a,{})})]})},J=function(e){var t=e.classes;return Object(d.jsx)("div",{className:t.LeftSide,children:Object(d.jsxs)("div",{className:t.LeftSidePanel,children:[Object(d.jsxs)("div",{className:t.Title,children:[Object(d.jsx)("color",{children:"FREE SHOUTCAST"})," SERVER"]}),Object(d.jsx)("div",{className:t.Price,children:Object(d.jsx)("color",{children:"FREE"})}),Object(d.jsxs)("div",{className:t.Features,children:[Object(d.jsx)("div",{children:"Online Radio Control Panel"}),Object(d.jsx)("div",{children:"Stream Live"}),Object(d.jsx)("div",{children:"AutoDJ Mode"}),Object(d.jsx)("div",{children:"Radio Player & Page"}),Object(d.jsx)("div",{children:"LiveChat Support"}),Object(d.jsx)("div",{children:Object(d.jsx)("a",{href:"#",children:"and more..."})})]})]})})},U=function(e){var t=e.classes;return Object(d.jsxs)("div",{className:t.RightSideForm,children:[Object(d.jsxs)("div",{className:t.Column,children:[Object(d.jsx)("label",{htmlFor:"username",children:"Username"}),Object(d.jsx)("input",{type:"text",id:"username"})]}),Object(d.jsxs)("div",{className:t.Column,children:[Object(d.jsx)("label",{htmlFor:"email",children:"Email"}),Object(d.jsx)("input",{type:"text",id:"email"})]}),Object(d.jsxs)("div",{className:t.Column,children:[Object(d.jsx)("label",{htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{type:"password",id:"password"})]}),Object(d.jsxs)("div",{className:t.Column,children:[Object(d.jsx)("label",{htmlFor:"c-password",children:"Comfirm Password"}),Object(d.jsx)("input",{type:"password",id:"c-password"})]}),Object(d.jsxs)("div",{className:t.RightSideFormAgreement,children:[Object(d.jsx)("input",{type:"checkbox",id:"agreement"}),Object(d.jsxs)("label",{htmlFor:"agreement",children:["I Agree To The ",Object(d.jsx)("a",{href:"#",children:"Terms Of Service"})]})]}),Object(d.jsx)("div",{className:t.RightSideFormSubmit,children:Object(d.jsx)("span",{children:"REGISTER NOW"})}),Object(d.jsx)("br",{}),Object(d.jsxs)("em",{children:["Free Service Provided by ",Object(d.jsx)("a",{href:"https://fastcast4u.com/",children:"Fastcast4u.com"})]})]})},B=function(e){var t=e.classes;return Object(d.jsxs)("div",{className:t.RightSideTitle,children:[Object(d.jsxs)("h1",{children:["GET YOUR ",Object(d.jsx)("color",{children:"FREE"})," RADIO SERVER"]}),Object(d.jsx)("span",{children:"No Card - 100% Free. Start Your Online Radio Station Today!"})]})},G=function(e){var t=e.classes;return Object(d.jsx)("div",{className:t.RightSide,children:Object(d.jsxs)("div",{className:t.RightSidePanel,children:[Object(d.jsx)(B,{classes:t}),Object(d.jsx)(U,{classes:t})]})})},W=s(35),Y=s.n(W),M=function(){return Object(d.jsxs)("section",{className:Y.a.RegistrationPanel,children:[Object(d.jsx)(J,{classes:Y.a}),Object(d.jsx)(G,{classes:Y.a})]})},q=s(36),z=s.n(q),X=s(46),Z=s.n(X),K=function(e){var t=e.isSidePanelOpened,s=e.toggleSidePannel,n=e.classes,i=e.isForgotPassword,c=e.setIsForgotPassword;return Object(d.jsxs)("div",{style:t?{right:"0"}:{},className:n.SidePanel,children:[Object(d.jsx)("div",{onClick:s,className:n.ClosePanel,children:Object(d.jsx)("div",{children:Object(d.jsx)(Z.a,{})})}),Object(d.jsxs)("div",{className:n.LoginPanel,children:[Object(d.jsx)("h4",{children:i?"FORGOT PASSWORD?":"LOGIN TO YOUR ACCOUNT"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"login-username",children:"USERNAME"}),Object(d.jsx)("input",{type:"text",id:"login-username"})]}),!i&&Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"login-password",children:"PASSWORD"}),Object(d.jsx)("input",{type:"password",id:"login-password"})]}),Object(d.jsx)("div",{className:n.LoginSubmit,children:Object(d.jsx)("span",{children:i?"RESET":"LOGIN"})}),Object(d.jsx)("a",{href:"#",onClick:function(){return c(!i)},children:i?"Return to login":"Forgot Password?"})]})]})},V=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),s=t[0],i=t[1],c=Object(n.useState)(!1),a=Object(r.a)(c,2),o=a[0],l=a[1],b=function(){return i(!s)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{style:s?{transform:"translateX(-300px)"}:{},className:z.a.HomePage,children:[Object(d.jsx)(u,{toggleSidePannel:b}),Object(d.jsx)(M,{}),Object(d.jsx)(E,{}),Object(d.jsx)(j,{}),Object(d.jsx)("div",{style:s?{zIndex:999}:{},className:z.a.Overlay,onClick:b})]}),Object(d.jsx)(K,{classes:z.a,isSidePanelOpened:s,toggleSidePannel:b,isForgotPassword:o,setIsForgotPassword:l})]})},$=function(){return Object(d.jsx)(V,{})};s(64);a.a.render(Object(d.jsx)($,{}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.a1d304b6.chunk.js.map