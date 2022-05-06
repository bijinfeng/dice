(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"3vkF":function(e,n,a){},Sq8w:function(e,n,a){"use strict";var t=a("jem/"),l=a("9ciD"),c=a.n(l),o=a("Kk1M"),i=a.n(o),r=a("2tE6"),s=a("7O4Y");a("3vkF");n["a"]=e=>{var n=e.code,a=e.lang,l=e.showCopy,o=void 0===l||l,d=Object(r["useCopy"])(),m=Object(t["a"])(d,2),u=m[0],p=m[1];return c.a.createElement("div",{className:Object(s["a"])("van-doc-code-block",{"van-doc-code-block-copy-success":"copied"===p})},o&&c.a.createElement("span",{className:"van-doc-code-block-copy-btn",onClick:()=>u(n),"aria-hidden":"true"}),c.a.createElement(i.a,{language:a},n))}},TDdy:function(e,n,a){"use strict";var t=a("9ciD"),l=a.n(t),c=e=>{var n=e.children;return l.a.createElement("table",null,n)};n["a"]=c},Ulia:function(e,n,a){"use strict";a.r(n);var t=a("9ciD"),l=a.n(t),c=a("2tE6"),o=a("Sq8w"),i=(a("TDdy"),l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u57fa\u7840\u7528\u6cd5"},l.a.createElement(c["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5"),l.a.createElement("p",null,"\u901a\u8fc7 ",l.a.createElement("code",null,"visible")," \u63a7\u5236\u5f39\u51fa\u5c42\u662f\u5426\u5c55\u793a\u3002"),l.a.createElement(o["a"],{code:"import React, { useState } from 'react';\nimport { Popup } from 'dice-ui';\n\nexport default () => {\n  const [visible, setVisible] = useState(false);\n\n  return (\n    <Popup visible={visible}>\n      <Text>demo</Text>\n    </Popup>\n  );\n}",lang:"jsx"}),l.a.createElement("h2",{id:"\u5f39\u51fa\u4f4d\u7f6e"},l.a.createElement(c["AnchorLink"],{to:"#\u5f39\u51fa\u4f4d\u7f6e","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5f39\u51fa\u4f4d\u7f6e"),l.a.createElement("p",null,"\u901a\u8fc7 ",l.a.createElement("code",null,"position")," \u5c5e\u6027\u8bbe\u7f6e\u5f39\u51fa\u4f4d\u7f6e\uff0c\u9ed8\u8ba4\u5c45\u4e2d\u5f39\u51fa\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e3a ",l.a.createElement("code",null,"top"),"\u3001",l.a.createElement("code",null,"bottom"),"\u3001",l.a.createElement("code",null,"left"),"\u3001",l.a.createElement("code",null,"right"),"\u3002"),l.a.createElement(o["a"],{code:'<Popup visible={visible} position="top">\n  <Text>demo</Text>\n</Popup>',lang:"jsx"}),l.a.createElement("h2",{id:"\u5173\u95ed\u56fe\u6807"},l.a.createElement(c["AnchorLink"],{to:"#\u5173\u95ed\u56fe\u6807","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5173\u95ed\u56fe\u6807"),l.a.createElement("p",null,"\u8bbe\u7f6e ",l.a.createElement("code",null,"closeable")," \u5c5e\u6027\u540e\uff0c\u4f1a\u5728\u5f39\u51fa\u5c42\u7684\u53f3\u4e0a\u89d2\u663e\u793a\u5173\u95ed\u56fe\u6807\uff0c\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7 ",l.a.createElement("code",null,"closeIcon")," \u5c5e\u6027\u81ea\u5b9a\u4e49\u56fe\u6807\uff0c\u4f7f\u7528 ",l.a.createElement("code",null,"closeIconPosition")," \u5c5e\u6027\u53ef\u4ee5\u81ea\u5b9a\u4e49\u56fe\u6807\u4f4d\u7f6e\u3002"),l.a.createElement(o["a"],{code:'<Popup\n  visible={visible}\n  position="top"\n  closeable\n  closeIcon="close"\n  closeIconPosition="top-left"\n>\n  <Text>demo</Text>\n</Popup>',lang:"jsx"}),l.a.createElement("h2",{id:"\u5706\u89d2\u5f39\u7a97"},l.a.createElement(c["AnchorLink"],{to:"#\u5706\u89d2\u5f39\u7a97","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5706\u89d2\u5f39\u7a97"),l.a.createElement("p",null,"\u8bbe\u7f6e ",l.a.createElement("code",null,"round")," \u5c5e\u6027\u540e\uff0c\u5f39\u7a97\u4f1a\u6839\u636e\u5f39\u51fa\u4f4d\u7f6e\u6dfb\u52a0\u4e0d\u540c\u7684\u5706\u89d2\u6837\u5f0f\u3002"),l.a.createElement(o["a"],{code:"<Popup visible={visible} round>\n  <Text>demo</Text>\n</Popup>",lang:"jsx"})))})));n["default"]=e=>{var n=l.a.useContext(c["context"]),a=n.demos;return l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(i,{demos:a})}}}]);