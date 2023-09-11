"use strict";(self.webpackChunkawareness_labs_github_io=self.webpackChunkawareness_labs_github_io||[]).push([[805],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),i=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=i(a),h=r,m=c["".concat(u,".").concat(h)]||c[h]||p[h]||s;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var i=2;i<s;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2089:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_position:1},o="Quickstart",l={unversionedId:"quickstart/intro",id:"quickstart/intro",title:"Quickstart",description:"\u9019\u500b Quickstart \u7684\u76ee\u7684\u662f\u8b93\u4f7f\u7528\u8005\u53ef\u4ee5\u5feb\u901f\u4e86\u89e3\u3001\u4f7f\u7528 rainforest \u7684\u6838\u5fc3\u529f\u80fd\u3002",source:"@site/docs/quickstart/intro.md",sourceDirName:"quickstart",slug:"/quickstart/intro",permalink:"/docs/quickstart/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quickstart/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Docs",permalink:"/docs/category/docs"}},u={},i=[{value:"STEP-1: \u53d6\u5f97\u539f\u59cb\u78bc\u548c\u5de5\u5177\u934a",id:"step-1-\u53d6\u5f97\u539f\u59cb\u78bc\u548c\u5de5\u5177\u934a",level:2},{value:"\u8907\u88fd Repository",id:"\u8907\u88fd-repository",level:2},{value:"\u5b89\u88dd Toolchain (\u6ce8\u610f\uff01\u6211\u662f\u7528 brew \u6240\u4ee5\u8981\u5148\u5b89\u88dd\u597d\u5594)",id:"\u5b89\u88dd-toolchain-\u6ce8\u610f\u6211\u662f\u7528-brew-\u6240\u4ee5\u8981\u5148\u5b89\u88dd\u597d\u5594",level:3},{value:"STEP-2: \u5617\u8a66\u7b2c\u4e00\u500b Rainforest Instance",id:"step-2-\u5617\u8a66\u7b2c\u4e00\u500b-rainforest-instance",level:2},{value:"\u555f\u52d5 Rainforest Hub",id:"\u555f\u52d5-rainforest-hub",level:3},{value:"\u555f\u52d5\u7b2c\u4e00\u500b Rainforest Leaf",id:"\u555f\u52d5\u7b2c\u4e00\u500b-rainforest-leaf",level:3},{value:"STEP-3: \u5efa\u7acb\u4e00\u500b State Data Product",id:"step-3-\u5efa\u7acb\u4e00\u500b-state-data-product",level:2},{value:"\u5beb\u5165 State \u5230 State Data Product",id:"\u5beb\u5165-state-\u5230-state-data-product",level:3},{value:"\u6211\u5011\u5617\u8a66\u5f9e State Data product \u8b80\u53d6\u770b\u770b State",id:"\u6211\u5011\u5617\u8a66\u5f9e-state-data-product-\u8b80\u53d6\u770b\u770b-state",level:3},{value:"\u6211\u9084\u8a2d\u8a08\u4e86\u4e00\u500b OLTP \u53ef\u4ee5\u76f4\u63a5\u8b8a\u6210 Sorted Map\uff0c\u5617\u8a66\u770b\u770b Range Query \u5427! (\u53ef\u4ee5\u76f4\u63a5\u958b\u767c\u6210 Prod-Level RESTful API)",id:"\u6211\u9084\u8a2d\u8a08\u4e86\u4e00\u500b-oltp-\u53ef\u4ee5\u76f4\u63a5\u8b8a\u6210-sorted-map\u5617\u8a66\u770b\u770b-range-query-\u5427-\u53ef\u4ee5\u76f4\u63a5\u958b\u767c\u6210-prod-level-restful-api",level:3},{value:"\u5efa\u7acb\u4e00\u500b Event Data Product",id:"\u5efa\u7acb\u4e00\u500b-event-data-product",level:2},{value:"\u5beb\u5165 Event \u5230 Event Data Product",id:"\u5beb\u5165-event-\u5230-event-data-product",level:3},{value:"\u6211\u5011\u5617\u8a66\u5f9e Event Data product \u8b80\u53d6\u770b\u770b Event",id:"\u6211\u5011\u5617\u8a66\u5f9e-event-data-product-\u8b80\u53d6\u770b\u770b-event",level:3},{value:"\u6211\u9084\u8a2d\u8a08\u4e86\u4e00\u500b OLAP \u53ef\u4ee5\u76f4\u63a5\u57f7\u884c SQL \u6307\u4ee4\uff0c\u4f7f\u7528\u8005\u53ef\u4ee5\u76f4\u63a5 SQL Event Data Product",id:"\u6211\u9084\u8a2d\u8a08\u4e86\u4e00\u500b-olap-\u53ef\u4ee5\u76f4\u63a5\u57f7\u884c-sql-\u6307\u4ee4\u4f7f\u7528\u8005\u53ef\u4ee5\u76f4\u63a5-sql-event-data-product",level:3},{value:"STEP-4: \u555f\u52d5\u7b2c\u4e8c\u500b Rainforest Leaf",id:"step-4-\u555f\u52d5\u7b2c\u4e8c\u500b-rainforest-leaf",level:2},{value:"\u9019\u6642\u5019\u6211\u5011\u8981\u5efa\u7acb\u4e00\u500b\u539f\u6709 Data Product \u7684\u526f\u672c\uff0c\u7a31\u4f5c Source Data Product",id:"\u9019\u6642\u5019\u6211\u5011\u8981\u5efa\u7acb\u4e00\u500b\u539f\u6709-data-product-\u7684\u526f\u672c\u7a31\u4f5c-source-data-product",level:3},{value:"\u6aa2\u67e5\u770b\u770b Data Product \u662f\u4e0d\u662f\u5df2\u7d93\u6210\u529f\u5efa\u7acb\u81ea\u5df1 Domain \u7684 Snapshot!",id:"\u6aa2\u67e5\u770b\u770b-data-product-\u662f\u4e0d\u662f\u5df2\u7d93\u6210\u529f\u5efa\u7acb\u81ea\u5df1-domain-\u7684-snapshot",level:3},{value:"\u5c31\u7b97\u6e90\u982d\u639b\u6389\uff0c\u9084\u662f\u53ef\u4ee5\u8b80\u5230\u8cc7\u6599\u5594!",id:"\u5c31\u7b97\u6e90\u982d\u639b\u6389\u9084\u662f\u53ef\u4ee5\u8b80\u5230\u8cc7\u6599\u5594",level:3},{value:"\u6e90\u982d\u91cd\u65b0\u555f\u52d5\u4e4b\u5f8c\uff0c\u7e7c\u7e8c\u767c\u5e03\uff0cSource Data Product \u4e5f\u80fd\u6301\u7e8c\u66f4\u65b0",id:"\u6e90\u982d\u91cd\u65b0\u555f\u52d5\u4e4b\u5f8c\u7e7c\u7e8c\u767c\u5e03source-data-product-\u4e5f\u80fd\u6301\u7e8c\u66f4\u65b0",level:3},{value:"STEP-5: \u7d50\u8ad6",id:"step-5-\u7d50\u8ad6",level:2}],d={toc:i},c="wrapper";function p(e){let{components:t,...s}=e;return(0,r.kt)(c,(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quickstart"},"Quickstart"),(0,r.kt)("p",null,"\u9019\u500b Quickstart \u7684\u76ee\u7684\u662f\u8b93\u4f7f\u7528\u8005\u53ef\u4ee5\u5feb\u901f\u4e86\u89e3\u3001\u4f7f\u7528 rainforest \u7684\u6838\u5fc3\u529f\u80fd\u3002"),(0,r.kt)("h2",{id:"step-1-\u53d6\u5f97\u539f\u59cb\u78bc\u548c\u5de5\u5177\u934a"},"STEP-1: \u53d6\u5f97\u539f\u59cb\u78bc\u548c\u5de5\u5177\u934a"),(0,r.kt)("h2",{id:"\u8907\u88fd-repository"},"\u8907\u88fd Repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/Awareness-Labs/rainforest.git\n")),(0,r.kt)("p",null,"\u5b89\u88dd Process \u7ba1\u7406\u5668 (\u4f7f\u7528\u4e0a\u6703\u7528\u5230)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"go install github.com/mattn/goreman@latest\n")),(0,r.kt)("h3",{id:"\u5b89\u88dd-toolchain-\u6ce8\u610f\u6211\u662f\u7528-brew-\u6240\u4ee5\u8981\u5148\u5b89\u88dd\u597d\u5594"},"\u5b89\u88dd Toolchain (\u6ce8\u610f\uff01\u6211\u662f\u7528 brew \u6240\u4ee5\u8981\u5148\u5b89\u88dd\u597d\u5594)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bash script/install_toolchain.sh\n")),(0,r.kt)("h2",{id:"step-2-\u5617\u8a66\u7b2c\u4e00\u500b-rainforest-instance"},"STEP-2: \u5617\u8a66\u7b2c\u4e00\u500b Rainforest Instance"),(0,r.kt)("h3",{id:"\u555f\u52d5-rainforest-hub"},"\u555f\u52d5 Rainforest Hub"),(0,r.kt)("p",null,"Rainforest \u63a1\u53d6\u7684\u67b6\u69cb\u662f Hub-Leaf (\u53c8\u7a31\u4f5c Hub-Spoke) \u7684\u67b6\u69cb\uff0c\u5728\u904b\u884c\u4efb\u4f55 Leaf \u4e4b\u524d\uff0c\u5efa\u8b70\u5148\u555f\u52d5 Rainforest Hub\uff0c\u4ee5\u4e0b\u6307\u4ee4\u53ef\u4ee5\u555f\u52d5 Rainforest Hub\u3002   "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd cmd/rainforest_hub\ngoreman start\n")),(0,r.kt)("p",null,"\u73fe\u5728\u7cfb\u7d71\u7684\u62d3\u8b5c\u67b6\u69cb\u5716\u6703\u50cf\u662f\u4e0b\u5716"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(4565).Z,width:"2354",height:"1374"})),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u9023\u7dda\u76f8\u95dc\u7684 Port \u8cc7\u8a0a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Client connections:   4222 ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u8ca0\u8cac\u8655\u7406 NATS Client \u4f46\u7531\u65bc\u662f Hub \u6240\u4ee5\u9019\u500b Port \u4f7f\u7528\u8005\u901a\u5e38\u4e0d\u6703\u76f4\u63a5\u4f7f\u7528"))),(0,r.kt)("li",{parentName:"ul"},"Leafnode connections: 7422 ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9019\u500b Port \u662f\u7528\u4f86\u8655\u7406 Leaf \u9023\u7dda\u7684 Port\uff0c\u96b8\u5c6c\u65bc\u9019\u500b Hub \u7684 Leaf \u90fd\u6703\u7d93\u7531\u9019\u500b Port \u6e9d\u901a")))),(0,r.kt)("h3",{id:"\u555f\u52d5\u7b2c\u4e00\u500b-rainforest-leaf"},"\u555f\u52d5\u7b2c\u4e00\u500b Rainforest Leaf"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u7684\u6307\u4ee4\u53ef\u4ee5\u555f\u52d5 Rainforest Leaf\uff0c\u901a\u5e38 Rainforest Leaf \u5c31\u662f\u7d44\u7e54\u4e2d\u4e00\u500b\u5718\u968a\u767c\u5e03\u548c\u8a02\u95b1 Data Product \u7684\u5be6\u9ad4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go run cmd/rainforest_leaf/rainforest_leaf.go \\\n--port=4111 \\\n--domain=tachun \\\n--hub-urls=localhost:7422 \\\n--kv-path=./data/badger/sts-0 \\\n--stream-path=./data/stream/sts-0 \\\n--sink-path=./data/sink/sts-0\n")),(0,r.kt)("p",null,"\u4ee5\u4e0b\u70ba flag \u7684\u8aaa\u660e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"--port:        \u9019\u500b Leaf \u7684 NATS Client"),(0,r.kt)("li",{parentName:"ul"},"--domain:      \u9019\u500b Leaf \u7684 Domain \u540d\u7a31\uff0c\u901a\u5e38\u53ef\u4ee5\u7528\u7d44\u7e54\u540d\u7a31\u7576\u4f5c\u547d\u540d\u6a19\u6e96  "),(0,r.kt)("li",{parentName:"ul"},"--hub-urls:    \u9019\u500b Leaf \u7d81\u5b9a\u7684 Hub\uff0c\u4e00\u500b Leaf \u53ef\u4ee5\u7d81\u5b9a\u591a\u500b Hub\uff0c\u96d6\u7136\u5927\u591a\u6578\u7684\u60c5\u6cc1\u6839\u672c\u4e0d\u7528\uff0c\u56e0\u70ba NATS Leaf Node \u7684\u8a2d\u8a08\u672c\u4f86\u5c31\u80fd\u5920\u5bb9\u7d0d\u6578\u5343\u500b Leaf Nodes"),(0,r.kt)("li",{parentName:"ul"},"--kv-path:     Key-Value Database \u7684\u5b58\u53d6\u8def\u5f91"),(0,r.kt)("li",{parentName:"ul"},"--stream-path: JetStream \u5b58\u53d6\u7684\u8def\u5f91")),(0,r.kt)("p",null,"\u73fe\u5728\u7cfb\u7d71\u7684\u62d3\u8b5c\u67b6\u69cb\u5716\u6703\u50cf\u662f\u4e0b\u5716\n",(0,r.kt)("img",{src:a(1574).Z,width:"2354",height:"1374"})),(0,r.kt)("h2",{id:"step-3-\u5efa\u7acb\u4e00\u500b-state-data-product"},"STEP-3: \u5efa\u7acb\u4e00\u500b State Data Product"),(0,r.kt)("p",null,"\u63a5\u8457\u6211\u5011\u5efa\u7acb\u4e00\u500b State Data Product\uff0c\u9019\u500b\u7a2e\u985e\u7684 Data Product \u5c08\u9580\u7528\u4f86\u8655\u7406\u72c0\u614b\u7684\u5132\u5b58\uff0c\u6211\u5011\u53ef\u4ee5\u76f4\u63a5\u900f\u904e nats CLI \u9032\u884c API \u547c\u53eb\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'nats request \'$RAINFOREST.API.DP.CREATE.*\' --server=localhost:4111 \\\n\'{\n  "product": {\n    "name": "OrdersState",\n    "type": "DATA_PRODUCT_TYPE_STATE",\n    "description": "This is a State Data Product"\n  }\n}\'\n')),(0,r.kt)("p",null,'\u53ef\u4ee5\u85c9\u7531\u4ee5\u4e0b\u6307\u4ee4\u78ba\u8a8d\u6210\u529f\u5efa\u7acb\uff0c\u5176\u4e2d "STATE_" \u524d\u7db4\u8868\u793a\u9019\u662f\u4e00\u500b State Data product\u3002'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nats s ls --server=localhost:4111\n\u256d\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e\n\u2502                                                 Streams                                                 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Name              \u2502 Description                  \u2502 Created             \u2502 Messages \u2502 Size \u2502 Last Message \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 STATE_OrdersState \u2502 This is a State Data Product \u2502 2023-08-25 06:01:13 \u2502 0        \u2502 0 B  \u2502 never        \u2502\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f\n")),(0,r.kt)("p",null,"\u73fe\u5728\u7cfb\u7d71\u7684\u62d3\u8b5c\u67b6\u69cb\u5716\u6703\u50cf\u662f\u4e0b\u5716\n",(0,r.kt)("img",{src:a(127).Z,width:"2354",height:"1374"})),(0,r.kt)("h3",{id:"\u5beb\u5165-state-\u5230-state-data-product"},"\u5beb\u5165 State \u5230 State Data Product"),(0,r.kt)("p",null,"\u65e2\u7136\u662f State Data Product\uff0c\u90a3\u6211\u5011\u4e0d\u59a8\u5beb\u5165\u4e00\u4e9b State \u4f86\u505a\u793a\u7bc4\u3002"),(0,r.kt)("p",null,"\u7576\u6211\u5011\u5728\u4e0a\u500b\u6b65\u9a5f\u5efa\u7acb State Data Product \u7684\u6642\u5019\uff0c\u6211\u5011\u5176\u5be6\u5efa\u7acb\u4e86\u4e00\u500b Stream\uff0c\u4e26\u4e14\u9650\u5236\u6bcf\u4e00\u500b Subject \u53ea\u80fd\u5132\u5b58 1 \u5247\u8a0a\u606f\uff0c\u6211\u5011\u53ef\u4ee5\u76f4\u63a5\u7576\u6210 Table \u4f86\u64cd\u4f5c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$RAINFOREST.DP.STATE.<data_product_name>.<primary_key> -> \u9019\u500b Subject \u5132\u5b58\u7684\u5c31\u662f State \u5e8f\u5217\u5316\u6210 []byte \u7684\u683c\u5f0f(\u9019\u88e1\u65b9\u4fbf\u8aaa\u660e\uff0c\u6240\u4ee5\u7528\u7c21\u55ae string\uff0c\u5be6\u969b\u5834\u666f\u662f\u5b58\u53d6 JSON)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nats publish '$RAINFOREST.DP.STATE.OrdersState.0' value_0 --server=localhost:4111\nnats publish '$RAINFOREST.DP.STATE.OrdersState.1' value_1 --server=localhost:4111\nnats publish '$RAINFOREST.DP.STATE.OrdersState.2' value_2 --server=localhost:4111\nnats publish '$RAINFOREST.DP.STATE.OrdersState.3' value_3 --server=localhost:4111\nnats publish '$RAINFOREST.DP.STATE.OrdersState.4' value_4 --server=localhost:4111\nnats publish '$RAINFOREST.DP.STATE.OrdersState.5' value_5 --server=localhost:4111\nnats publish '$RAINFOREST.DP.STATE.OrdersState.6' value_6 --server=localhost:4111\nnats publish '$RAINFOREST.DP.STATE.OrdersState.7' value_7 --server=localhost:4111\nnats publish '$RAINFOREST.DP.STATE.OrdersState.8' value_8 --server=localhost:4111\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nats s ls --server=localhost:4111\n\u256d\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e\n\u2502                                                 Streams                                                  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Name              \u2502 Description                  \u2502 Created             \u2502 Messages \u2502 Size  \u2502 Last Message \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 STATE_OrdersState \u2502 This is a State Data Product \u2502 2023-08-25 06:01:13 \u2502 9        \u2502 639 B \u2502 26.92s       \u2502\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f\n")),(0,r.kt)("h3",{id:"\u6211\u5011\u5617\u8a66\u5f9e-state-data-product-\u8b80\u53d6\u770b\u770b-state"},"\u6211\u5011\u5617\u8a66\u5f9e State Data product \u8b80\u53d6\u770b\u770b State"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nats subscribe '$RAINFOREST.DP.STATE.OrdersState.3' --last --server=localhost:4111\n\n[#1] Received JetStream message: stream: STATE_OrdersState seq 4 / subject: $RAINFOREST.DP.STATE.OrdersState.3 / time: 2023-08-25T06:03:38Z\nvalue_3\n")),(0,r.kt)("h3",{id:"\u6211\u9084\u8a2d\u8a08\u4e86\u4e00\u500b-oltp-\u53ef\u4ee5\u76f4\u63a5\u8b8a\u6210-sorted-map\u5617\u8a66\u770b\u770b-range-query-\u5427-\u53ef\u4ee5\u76f4\u63a5\u958b\u767c\u6210-prod-level-restful-api"},"\u6211\u9084\u8a2d\u8a08\u4e86\u4e00\u500b OLTP \u53ef\u4ee5\u76f4\u63a5\u8b8a\u6210 Sorted Map\uff0c\u5617\u8a66\u770b\u770b Range Query \u5427! (\u53ef\u4ee5\u76f4\u63a5\u958b\u767c\u6210 Prod-Level RESTful API)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'nats request \'$RAINFOREST.API.KV.*\' \\\n\'{\n  "scan": {\n    "limit": 10,\n    "reverse": false,\n    "start_key": "OrdersState/3",\n    "end_key": "OrdersState/"\n  }\n}\n\' --server=localhost:4111 | jq\n')),(0,r.kt)("h2",{id:"\u5efa\u7acb\u4e00\u500b-event-data-product"},"\u5efa\u7acb\u4e00\u500b Event Data Product"),(0,r.kt)("p",null,"\u7576\u7136\u5566\uff0crainforest \u9664\u4e86\u53ef\u4ee5\u8655\u7406 State\uff0cEvent \u7576\u7136\u4e5f\u53ef\u4ee5\u8655\u7406 (\u7562\u7adf Gravity \u5c31\u662f\u5efa\u7acb\u5728 Event \u4e4b\u4e0a\u7684\u561b~)"),(0,r.kt)("p",null,"\u6211\u5011\u5efa\u7acb\u4e00\u500b Event Data Product"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'nats request \'$RAINFOREST.API.DP.CREATE.*\' --server=localhost:4111 \\\n\'{\n  "product": {\n    "name": "ConversationEvent",\n    "type": "DATA_PRODUCT_TYPE_EVENT",\n    "description": "This is a Event Data Product"\n  }\n}\'\n')),(0,r.kt)("p",null,'\u53ef\u4ee5\u85c9\u7531\u4ee5\u4e0b\u6307\u4ee4\u78ba\u8a8d\u6210\u529f\u5efa\u7acb\uff0c\u5176\u4e2d "EVENT_" \u524d\u7db4\u8868\u793a\u9019\u662f\u4e00\u500b Event Data product\u3002'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nats s ls --server=localhost:4111\n\n\u256d\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e\n\u2502                                                    Streams                                                     \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Name                    \u2502 Description                  \u2502 Created             \u2502 Messages \u2502 Size  \u2502 Last Message \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 EVENT_ConversationEvent \u2502 This is a Event Data Product \u2502 2023-08-25 06:06:58 \u2502 0        \u2502 0 B   \u2502 never        \u2502\n\u2502 STATE_OrdersState       \u2502 This is a State Data Product \u2502 2023-08-25 06:01:13 \u2502 9        \u2502 639 B \u2502 3m46s        \u2502\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f\n")),(0,r.kt)("h3",{id:"\u5beb\u5165-event-\u5230-event-data-product"},"\u5beb\u5165 Event \u5230 Event Data Product"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'nats publish \'$RAINFOREST.DP.EVENT.ConversationEvent.1\' \\\n\'{\n  "from": "Tachun",\n  "to": "Fred",\n  "payload": "Hi Fred how are you today",\n  "timestamp": "2023-08-25T08:00:00Z"\n}\' --server=localhost:4111\n\nnats publish \'$RAINFOREST.DP.EVENT.ConversationEvent.2\' \\\n\'{\n  "from": "Fred",\n  "to": "Tachun",\n  "payload": "Hello Tachun Im good thanks And you",\n  "timestamp": "2023-08-25T08:01:00Z"\n}\' --server=localhost:4111\n\nnats publish \'$RAINFOREST.DP.EVENT.ConversationEvent.3\' \\\n\'{\n  "from": "Tachun",\n  "to": "Fred",\n  "payload": "Im doing well thanks for asking",\n  "timestamp": "2023-08-25T08:02:00Z"\n}\' --server=localhost:4111\n\nnats publish \'$RAINFOREST.DP.EVENT.ConversationEvent.4\' \\\n\'{\n  "from": "Fred",\n  "to": "Tachun",\n  "payload": "Great to hear Do you have plans for the weekend",\n  "timestamp": "2023-08-25T08:03:00Z"\n}\' --server=localhost:4111\n\nnats publish \'$RAINFOREST.DP.EVENT.ConversationEvent.5\' \\\n\'{\n  "from": "Tachun",\n  "to": "Fred",\n  "payload": "Yes Ill be visiting some friends How about you",\n  "timestamp": "2023-08-25T08:04:00Z"\n}\' --server=localhost:4111\n\nnats publish \'$RAINFOREST.DP.EVENT.ConversationEvent.6\' \\\n\'{\n  "from": "Fred",\n  "to": "Tachun",\n  "payload": "I might go hiking if the weather is good",\n  "timestamp": "2023-08-25T08:05:00Z"\n}\' --server=localhost:4111\n\nnats publish \'$RAINFOREST.DP.EVENT.ConversationEvent.7\' \\\n\'{\n  "from": "Tachun",\n  "to": "Fred",\n  "payload": "That sounds lovely Have a great time",\n  "timestamp": "2023-08-25T08:06:00Z"\n}\' --server=localhost:4111\n\nnats publish \'$RAINFOREST.DP.EVENT.ConversationEvent.8\' \\\n\'{\n  "from": "Fred",\n  "to": "Tachun",\n  "payload": "Thanks You too Talk later",\n  "timestamp": "2023-08-25T08:07:00Z"\n}\' --server=localhost:4111\n\nnats publish \'$RAINFOREST.DP.EVENT.ConversationEvent.9\' \\\n\'{\n  "from": "Tachun",\n  "to": "Fred",\n  "payload": "Sure bye for now",\n  "timestamp": "2023-08-25T08:08:00Z"\n}\' --server=localhost:4111\n')),(0,r.kt)("h3",{id:"\u6211\u5011\u5617\u8a66\u5f9e-event-data-product-\u8b80\u53d6\u770b\u770b-event"},"\u6211\u5011\u5617\u8a66\u5f9e Event Data product \u8b80\u53d6\u770b\u770b Event"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nats subscribe --stream=EVENT_ConversationEvent --all --server=localhost:4111\n")),(0,r.kt)("h3",{id:"\u6211\u9084\u8a2d\u8a08\u4e86\u4e00\u500b-olap-\u53ef\u4ee5\u76f4\u63a5\u57f7\u884c-sql-\u6307\u4ee4\u4f7f\u7528\u8005\u53ef\u4ee5\u76f4\u63a5-sql-event-data-product"},"\u6211\u9084\u8a2d\u8a08\u4e86\u4e00\u500b OLAP \u53ef\u4ee5\u76f4\u63a5\u57f7\u884c SQL \u6307\u4ee4\uff0c\u4f7f\u7528\u8005\u53ef\u4ee5\u76f4\u63a5 SQL Event Data Product"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"duckdb\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SELECT * from './data/sink/sts-0/ConversationEvent.json';\n\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  from   \u2502   to    \u2502                     payload                     \u2502      timestamp      \u2502\n\u2502 varchar \u2502 varchar \u2502                     varchar                     \u2502      timestamp      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Tachun  \u2502 Fred    \u2502 Hi Fred how are you today                       \u2502 2023-08-25 08:00:00 \u2502\n\u2502 Fred    \u2502 Tachun  \u2502 Hello Tachun Im good thanks And you             \u2502 2023-08-25 08:01:00 \u2502\n\u2502 Tachun  \u2502 Fred    \u2502 Im doing well thanks for asking                 \u2502 2023-08-25 08:02:00 \u2502\n\u2502 Fred    \u2502 Tachun  \u2502 Great to hear Do you have plans for the weekend \u2502 2023-08-25 08:03:00 \u2502\n\u2502 Tachun  \u2502 Fred    \u2502 Yes Ill be visiting some friends How about you  \u2502 2023-08-25 08:04:00 \u2502\n\u2502 Fred    \u2502 Tachun  \u2502 I might go hiking if the weather is good        \u2502 2023-08-25 08:05:00 \u2502\n\u2502 Tachun  \u2502 Fred    \u2502 That sounds lovely Have a great time            \u2502 2023-08-25 08:06:00 \u2502\n\u2502 Fred    \u2502 Tachun  \u2502 Thanks You too Talk later                       \u2502 2023-08-25 08:07:00 \u2502\n\u2502 Tachun  \u2502 Fred    \u2502 Sure bye for now                                \u2502 2023-08-25 08:08:00 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,r.kt)("p",null,"\u6216\u662f\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT \"payload\" from './data/sink/sts-0/ConversationEvent.json';\n\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502                     payload                     \u2502\n\u2502                     varchar                     \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Hi Fred how are you today                       \u2502\n\u2502 Hello Tachun Im good thanks And you             \u2502\n\u2502 Im doing well thanks for asking                 \u2502\n\u2502 Great to hear Do you have plans for the weekend \u2502\n\u2502 Yes Ill be visiting some friends How about you  \u2502\n\u2502 I might go hiking if the weather is good        \u2502\n\u2502 That sounds lovely Have a great time            \u2502\n\u2502 Thanks You too Talk later                       \u2502\n\u2502 Sure bye for now                                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"step-4-\u555f\u52d5\u7b2c\u4e8c\u500b-rainforest-leaf"},"STEP-4: \u555f\u52d5\u7b2c\u4e8c\u500b Rainforest Leaf"),(0,r.kt)("p",null,"\u5404\u4f4d\u61c9\u8a72\u5df2\u7d93\u9ad4\u9a57\u5b8c Rainforest \u91dd\u5c0d\u55ae\u4e00 Data Product \u7684\u529f\u80fd\u4e86\uff0c\u73fe\u5728\u6211\u5011\u4f86\u5be6\u73fe Data Mesh \u4e2d\u81ea\u7531\u53d6\u5f97 Data Product \u7684\u7279\u8272\u5427\u3002"),(0,r.kt)("p",null,"\u6211\u5011\u5047\u8a2d\u4e00\u500b\u60c5\u5883\u6709\u53e6\u5916\u4e00\u500b\u65b0\u5efa\u7acb\u7684\u5718\u968a\u60f3\u8981\u52a0\u5165 Data Mesh\uff0c\u90a3\u9ebc\u5c31\u5982\u540c\u524d\u9762\u7684\u4f8b\u5b50\u4e00\u6a23\u5efa\u7acb\u4e00\u500b Leaf\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go run cmd/rainforest_leaf/rainforest_leaf.go \\\n--port=4112 \\\n--domain=prod \\\n--hub-urls=localhost:7422 \\\n--kv-path=./data/badger/sts-1 \\\n--stream-path=./data/stream/sts-1\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1153).Z,width:"2354",height:"1374"})),(0,r.kt)("h3",{id:"\u9019\u6642\u5019\u6211\u5011\u8981\u5efa\u7acb\u4e00\u500b\u539f\u6709-data-product-\u7684\u526f\u672c\u7a31\u4f5c-source-data-product"},"\u9019\u6642\u5019\u6211\u5011\u8981\u5efa\u7acb\u4e00\u500b\u539f\u6709 Data Product \u7684\u526f\u672c\uff0c\u7a31\u4f5c Source Data Product"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'nats request \'$RAINFOREST.API.DP.CREATE.*\' --server=localhost:4112 \\\n\'{\n  "product": {\n    "name": "SecondaryOrdersDataProduct",\n    "domain": "tachun",\n    "type": "DATA_PRODUCT_TYPE_STATE",\n    "description": "This is a Source Data Product",\n    "source_data_products": [\n      {\n        "name": "STATE_OrdersState",\n        "domain": "tachun"\n      }\n    ]\n  }\n}\'\n')),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(7918).Z,width:"2354",height:"1374"})),(0,r.kt)("h3",{id:"\u6aa2\u67e5\u770b\u770b-data-product-\u662f\u4e0d\u662f\u5df2\u7d93\u6210\u529f\u5efa\u7acb\u81ea\u5df1-domain-\u7684-snapshot"},"\u6aa2\u67e5\u770b\u770b Data Product \u662f\u4e0d\u662f\u5df2\u7d93\u6210\u529f\u5efa\u7acb\u81ea\u5df1 Domain \u7684 Snapshot!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nats s ls --server=localhost:4112\n")),(0,r.kt)("h3",{id:"\u5c31\u7b97\u6e90\u982d\u639b\u6389\u9084\u662f\u53ef\u4ee5\u8b80\u5230\u8cc7\u6599\u5594"},"\u5c31\u7b97\u6e90\u982d\u639b\u6389\uff0c\u9084\u662f\u53ef\u4ee5\u8b80\u5230\u8cc7\u6599\u5594!"),(0,r.kt)("p",null,"\u5148\u780d\u5230 localhost:4111 \u7684 Rainforest Leaf\uff0c\u7136\u5f8c\u518d\u8b80\u53d6\u770b\u770b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'nats request \'$RAINFOREST.API.KV.*\' \\\n\'{\n  "scan": {\n    "limit": 10,\n    "reverse": false,\n    "start_key": "OrdersState/3",\n    "end_key": "OrdersState/"\n  }\n}\n\' --server=localhost:4112 | jq\n')),(0,r.kt)("h3",{id:"\u6e90\u982d\u91cd\u65b0\u555f\u52d5\u4e4b\u5f8c\u7e7c\u7e8c\u767c\u5e03source-data-product-\u4e5f\u80fd\u6301\u7e8c\u66f4\u65b0"},"\u6e90\u982d\u91cd\u65b0\u555f\u52d5\u4e4b\u5f8c\uff0c\u7e7c\u7e8c\u767c\u5e03\uff0cSource Data Product \u4e5f\u80fd\u6301\u7e8c\u66f4\u65b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go run cmd/rainforest_leaf/rainforest_leaf.go \\\n--port=4111 \\\n--domain=tachun \\\n--hub-urls=localhost:7422 \\\n--kv-path=./data/badger/sts-0 \\\n--stream-path=./data/stream/sts-0\n")),(0,r.kt)("p",null,"\u5f9e\u539f\u59cb\u7684 Leaf \u767c\u9001\u8a0a\u865f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nats publish '$RAINFOREST.DP.STATE.OrdersState.0' value_0_NEW_VERSION --server=localhost:4111\n")),(0,r.kt)("p",null,"\u6aa2\u67e5\u65b0\u7684 Leaf \u6709\u6c92\u6709\u6210\u529f\u7570\u6b65\u8907\u88fd Data Product \u7684\u5167\u5bb9\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nats subscribe --stream=STATE_SecondaryOrdersDataProduct --last --server=localhost:4112\n")),(0,r.kt)("h2",{id:"step-5-\u7d50\u8ad6"},"STEP-5: \u7d50\u8ad6"),(0,r.kt)("p",null,"Rainforest \u5927\u6982\u5f80\u4ee5\u4e0b\u65b9\u5411\u8a2d\u8a08"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Data Product Scale \u57fa\u672c\u4e0a\u7121\u9650\u5927"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u790e\u8a2d\u65bd\u548c\u61c9\u7528\u7a0b\u5f0f\u5b8c\u5168\u5c01\u88dd\u6210\u4e00\u500b\u81ea\u52d5\u5316\u7684\u55ae\u4f4d"),(0,r.kt)("li",{parentName:"ul"},"Stream Analyze (Stream + OLAP)"),(0,r.kt)("li",{parentName:"ul"},"State Service  (Stream + OLTP)"),(0,r.kt)("li",{parentName:"ul"},"\u9a57\u8b49\uff0c\u7528 NATS/JetStream \u53ef\u4ee5\u76f4\u63a5\u5c0d Data Product \u505a\u6b0a\u9650\u7ba1\u7406")))}p.isMDXComponent=!0},4565:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/0_hub_only-8ff2b731869b52948c57a01897bf67dc.jpg"},1574:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1_hub_leaf-1cd754a541d96b1255ea28bb470bfa4a.jpg"},127:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2_add_dp-5ec0807e83cc682af7e00248b0098b42.jpg"},1153:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/3_add_leaf-08f4b2b7d51f046e9ebbcc45b3acd0fb.jpg"},7918:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/4_source-2c39bca41a6f24175fc9a66908f2dbc6.jpg"}}]);