"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[7262],{3905:(e,n,i)=>{i.d(n,{Zo:()=>c,kt:()=>k});var t=i(67294);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function s(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function m(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var d=t.createContext({}),l=function(e){var n=t.useContext(d),i=n;return e&&(i="function"==typeof e?e(n):s(s({},n),e)),i},c=function(e){var n=l(e.components);return t.createElement(d.Provider,{value:n},e.children)},p="mdxType",o={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),p=l(i),u=r,k=p["".concat(d,".").concat(u)]||p[u]||o[u]||a;return i?t.createElement(k,s(s({ref:n},c),{},{components:i})):t.createElement(k,s({ref:n},c))}));function k(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=i.length,s=new Array(a);s[0]=u;var m={};for(var d in n)hasOwnProperty.call(n,d)&&(m[d]=n[d]);m.originalType=e,m[p]="string"==typeof e?e:r,s[1]=m;for(var l=2;l<a;l++)s[l]=i[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,i)}u.displayName="MDXCreateElement"},80680:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>o,frontMatter:()=>a,metadata:()=>m,toc:()=>l});var t=i(87462),r=(i(67294),i(3905));const a={},s="Lab6-Performance Lab \u6df1\u5165\u89e3\u6790",m={unversionedId:"system/CSAPP/Lab06-Performance_Lab",id:"system/CSAPP/Lab06-Performance_Lab",title:"Lab6-Performance Lab \u6df1\u5165\u89e3\u6790",description:"\u5728 CMU\uff0c\u8fd9\u4e2a\u5b9e\u9a8c\u5df2\u7ecf\u88ab Cache Lab \u53d6\u4ee3\u4e86\uff0c\u542b\u91d1\u91cf\u4e0d\u9ad8\uff0c\u76f8\u6bd4\u5176\u4ed6\u5b9e\u9a8c\u4e5f\u7c97\u7cd9\u4e86\u5f88\u591a\uff0c\u6211\u4e0d\u662f\u5f88\u5efa\u8bae\u505a\u3002\u8fd9\u5468\uff0c\u6211\u672c\u6253\u7b97\u5f00\u5e72 Shell Lab\uff0c\u5948\u4f55\u5bf9 CSAPP \u7684\u7b2c7\u30018\u7ae0\u7406\u89e3\u4e0d\u751a\u900f\u5f7b\uff0c\u4e8e\u662f\u5148\u505a\u505a Performance Lab \u7f13\u51b2\u4e00\u4e0b\u3002",source:"@site/docs/system/CSAPP/Lab06-Performance_Lab.md",sourceDirName:"system/CSAPP",slug:"/system/CSAPP/Lab06-Performance_Lab",permalink:"/system/CSAPP/Lab06-Performance_Lab",draft:!1,editUrl:"https://github.com/kcxain/kcxain.github.io/tree/master/docs/system/CSAPP/Lab06-Performance_Lab.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lab5-Cache Lab \u6df1\u5165\u89e3\u6790",permalink:"/system/CSAPP/Lab05-Cache_Lab"},next:{title:"Lab7-Shell Lab \u6df1\u5165\u89e3\u6790",permalink:"/system/CSAPP/Lab07-Shell_Lab"}},d={},l=[{value:"\u5b9e\u9a8c\u6982\u89c8",id:"\u5b9e\u9a8c\u6982\u89c8",level:2},{value:"\u56de\u987e\uff1a\u7a0b\u5e8f\u6027\u80fd\u4f18\u5316\u65b9\u6cd5",id:"\u56de\u987e\u7a0b\u5e8f\u6027\u80fd\u4f18\u5316\u65b9\u6cd5",level:2},{value:"1. \u6d88\u9664\u5faa\u73af\u4f4e\u6548\u7387",id:"1-\u6d88\u9664\u5faa\u73af\u4f4e\u6548\u7387",level:3},{value:"2. \u6d88\u9664\u5185\u5b58\u5f15\u7528",id:"2-\u6d88\u9664\u5185\u5b58\u5f15\u7528",level:3},{value:"3. \u5faa\u73af\u5c55\u5f00",id:"3-\u5faa\u73af\u5c55\u5f00",level:3},{value:"rotate",id:"rotate",level:2},{value:"32 \xd7 32 \u5206\u5757",id:"32--32-\u5206\u5757",level:3},{value:"\u6700\u4f18\u5206\u5757",id:"\u6700\u4f18\u5206\u5757",level:3},{value:"smooth",id:"smooth",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],c={toc:l},p="wrapper";function o(e){let{components:n,...a}=e;return(0,r.kt)(p,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lab6-performance-lab-\u6df1\u5165\u89e3\u6790"},"Lab6-Performance Lab \u6df1\u5165\u89e3\u6790"),(0,r.kt)("p",null,"\u5728 CMU\uff0c\u8fd9\u4e2a\u5b9e\u9a8c\u5df2\u7ecf\u88ab Cache Lab \u53d6\u4ee3\u4e86\uff0c\u542b\u91d1\u91cf\u4e0d\u9ad8\uff0c\u76f8\u6bd4\u5176\u4ed6\u5b9e\u9a8c\u4e5f\u7c97\u7cd9\u4e86\u5f88\u591a\uff0c\u6211\u4e0d\u662f\u5f88\u5efa\u8bae\u505a\u3002\u8fd9\u5468\uff0c\u6211\u672c\u6253\u7b97\u5f00\u5e72 Shell Lab\uff0c\u5948\u4f55\u5bf9 CSAPP \u7684\u7b2c7\u30018\u7ae0\u7406\u89e3\u4e0d\u751a\u900f\u5f7b\uff0c\u4e8e\u662f\u5148\u505a\u505a Performance Lab \u7f13\u51b2\u4e00\u4e0b\u3002"),(0,r.kt)("h2",{id:"\u5b9e\u9a8c\u6982\u89c8"},"\u5b9e\u9a8c\u6982\u89c8"),(0,r.kt)("p",null,"\u8981\u6c42\u7f16\u5199\u4e24\u4e2a\u56fe\u7247\u5904\u7406\u7684\u51fd\u6570\uff1a\u5c06\u56fe\u7247\u9006\u65f6\u9488\u65cb\u8f6c90\xb0\u3001\u5229\u7528\u5e73\u5747\u503c\u66ff\u6362\u7684\u65b9\u5f0f\u4f7f\u56fe\u7247\u5e73\u6ed1\u3002\u6700\u540e\u6839\u636e\u51fd\u6570\u8fd0\u884c\u7684 CPE \u5f97\u5230\u5206\u6570\u3002\u6d4b\u8bd5\u6570\u636e\u4ee5\u53ca\u8ba1\u7b97\u65b9\u5f0f\u4e3e\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(53248).Z,width:"1491",height:"524"})),(0,r.kt)("p",null,"\u5b9e\u9a8c\u7684\u8bbe\u8ba1\u8005\u7528\u6734\u7d20\u65b9\u6cd5\u5b9e\u73b0\u4e86\u4e24\u4e2a\u51fd\u6570\uff0c\u8fd0\u884c\u60c5\u51b5\u53ca\u5206\u6570\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"> ./driver\nTeamname: Oh!\nMember 1: Deconx\nEmail 1: deconx@vip.qq.com\n\nRotate: Version = naive_rotate: Naive baseline implementation:\nDim             64      128     256     512     1024    Mean\nYour CPEs       1.4     2.0     3.8     7.1     6.3\nBaseline CPEs   14.7    40.1    46.4    65.9    94.5\nSpeedup         10.8    19.9    12.2    9.3     15.1    13.0\n\nRotate: Version = rotate: Current working version:\nDim             64      128     256     512     1024    Mean\nYour CPEs       1.4     2.0     3.9     7.4     6.5\nBaseline CPEs   14.7    40.1    46.4    65.9    94.5\nSpeedup         10.6    20.0    12.0    8.9     14.5    12.7\n\nSmooth: Version = smooth: Current working version:\nDim             32      64      128     256     512     Mean\nYour CPEs       40.4    41.9    41.2    41.8    41.8\nBaseline CPEs   695.0   698.0   702.0   717.0   722.0\nSpeedup         17.2    16.6    17.0    17.2    17.3    17.1\n\nSmooth: Version = naive_smooth: Naive baseline implementation:\nDim             32      64      128     256     512     Mean\nYour CPEs       39.4    41.2    41.4    42.2    42.7\nBaseline CPEs   695.0   698.0   702.0   717.0   722.0\nSpeedup         17.6    17.0    17.0    17.0    16.9    17.1\n\nSummary of Your Best Scores:\n  Rotate: 13.0 (naive_rotate: Naive baseline implementation)\n  Smooth: 17.1 (naive_smooth: Naive baseline implementation)\n")),(0,r.kt)("h2",{id:"\u56de\u987e\u7a0b\u5e8f\u6027\u80fd\u4f18\u5316\u65b9\u6cd5"},"\u56de\u987e\uff1a\u7a0b\u5e8f\u6027\u80fd\u4f18\u5316\u65b9\u6cd5"),(0,r.kt)("p",null,"\u505a\u5b9e\u9a8c\u7684\u76ee\u7684\u5728\u4e8e\u5b66\u4e60\u4e0e\u5de9\u56fa\uff0c\u8d81\u7740\u8fd9\u4e2a\u673a\u4f1a\uff0c\u6211\u5c06\u7b2c 5 \u7ae0\u7684\u5185\u5bb9\u603b\u7ed3\u4e00\u4e0b"),(0,r.kt)("h3",{id:"1-\u6d88\u9664\u5faa\u73af\u4f4e\u6548\u7387"},"1. \u6d88\u9664\u5faa\u73af\u4f4e\u6548\u7387"),(0,r.kt)("p",null,"\u8003\u8651\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int sum(int a[])\n{\n    int sum = 0;\n    for(i = 0; i < length(a); i++){\n        sum += a[i];\n    }\n    return sum;\n}\n")),(0,r.kt)("p",null,"\u8fc7\u7a0b",(0,r.kt)("inlineCode",{parentName:"p"},"sum"),"\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"length"),"\u51fd\u6570\u4f5c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"for"),"\u5faa\u73af\u7684\u6d4b\u8bd5\u6761\u4ef6\uff0c\u6bcf\u6b21\u5faa\u73af\u8fed\u4ee3\u65f6\u90fd\u90fd\u4f1a\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\uff0c\u800c\u6570\u7ec4",(0,r.kt)("inlineCode",{parentName:"p"},"a"),"\u7684\u957f\u5ea6\u5e76\u4e0d\u4f1a\u968f\u7740\u5faa\u73af\u7684\u8fdb\u884c\u800c\u6539\u53d8\uff0c\u8fd9\u6837\u5c31\u4f1a\u62d6\u7d2f\u7a0b\u5e8f\u6027\u80fd\uff0c\u53ef\u4ee5\u6539\u4e3a\u4ee5\u4e0b\u5f62\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int sum(int a[])\n{\n    int i;\n    int sum = 0;\n    int len = length(a);\n    for(i = 0; i < len; i++){\n        sum += a[i];\n    }\n    return sum;\n}\n")),(0,r.kt)("p",null,"\u8fd9\u79cd\u4f18\u5316\u529e\u6cd5\u79f0\u4e3a",(0,r.kt)("strong",{parentName:"p"},"\u4ee3\u7801\u79fb\u52a8")),(0,r.kt)("h3",{id:"2-\u6d88\u9664\u5185\u5b58\u5f15\u7528"},"2. \u6d88\u9664\u5185\u5b58\u5f15\u7528"),(0,r.kt)("p",null,"\u8003\u8651\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void mult(int a[], int *dst)\n{\n    int i;\n    int len = length(a);\n    for(i = 0; i < len; i++){\n        *dst = *dst*a[i];\n    }\n}\n")),(0,r.kt)("p",null,"\u8be5\u51fd\u6570\u7684\u529f\u80fd\u662f\u5c06\u6570\u7ec4",(0,r.kt)("inlineCode",{parentName:"p"},"a"),"\u7684\u5168\u90e8\u5143\u7d20\u90fd\u4e58\u5230\u6307\u9488",(0,r.kt)("inlineCode",{parentName:"p"},"dst"),"\u6307\u5411\u7684\u5185\u5b58\u4e2d\u3002\u6bcf\u6b21\u8fed\u4ee3\u65f6\uff0c\u7d2f\u79ef\u53d8\u91cf\u7684\u503c\u90fd\u4f1a\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"dst"),"\u6307\u5411\u7684\u5185\u5b58\u4e2d\u8bfb\u51fa\uff0c\u8fdb\u884c\u8fd0\u7b97\u540e\u518d\u5199\u5165\uff0c\u8fd9\u6837\u7684\u5185\u5b58\u8bfb\u5199\u975e\u5e38\u6d6a\u8d39\uff0c\u8003\u8651\u5982\u4e0b\u4f18\u5316\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void mult(int a[], int *dst)\n{\n    int i;\n    int len = length(a);\n    int temp = *dst;\n    for(i = 0; i < len; i++){\n        temp = temp*a[i];\n    }\n    *dst = temp;\n}\n")),(0,r.kt)("p",null,"\u5148\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"dst"),"\u6307\u5411\u7684\u5185\u5b58\u52a0\u8f7d\u5230\u5bc4\u5b58\u5668\u4e2d\uff0c\u6240\u6709\u64cd\u4f5c\u7ed3\u675f\u540e\u624d\u5199\u56de\u5230\u5185\u5b58\u4e2d\uff0c\u8fd9\u6837\u5c31\u80fd\u907f\u514d\u5927\u91cf\u7684\u5185\u5b58\u8bfb\u5199\u3002"),(0,r.kt)("h3",{id:"3-\u5faa\u73af\u5c55\u5f00"},"3. \u5faa\u73af\u5c55\u5f00"),(0,r.kt)("p",null,"\u5faa\u73af\u5c55\u5f00\u5728 Architecture Lab \u4e2d\u8fdb\u884c\u4e86\u6df1\u5165\u7684\u63a2\u8ba8\uff1a"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/480380496"},"https://zhuanlan.zhihu.com/p/480380496")),(0,r.kt)("p",null,"\u5faa\u73af\u5c55\u5f00\u901a\u8fc7\u589e\u52a0\u6bcf\u6b21\u8fed\u4ee3\u8ba1\u7b97\u7684\u5143\u7d20\u7684\u6570\u91cf\uff0c\u51cf\u5c11\u5faa\u73af\u7684\u8fed\u4ee3\u6b21\u6570\u6765\u63d0\u5347\u6548\u7387\uff0c\u4e3b\u8981\u6709\u4ee5\u4e0b\u4e24\u65b9\u9762\u539f\u56e0\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u4e86\u7d22\u5f15\u8ba1\u7b97\u7684\u6b21\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u4e86\u6761\u4ef6\u5206\u652f\u7684\u5224\u65ad\u6b21\u6570")),(0,r.kt)("h2",{id:"rotate"},"rotate"),(0,r.kt)("p",null,"\u77e9\u9635\u65cb\u8f6c\u53ef\u4ee5\u8f6c\u5316\u4e3a\u4ee5\u4e0b\u4e24\u6b65\u7b80\u5355\u7684\u77e9\u9635\u64cd\u4f5c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8f6c\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"\u5c06\u7b2c ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"i")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i")))))," \u884c\u4e0e\u7b2c ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"N"),(0,r.kt)("mo",{parentName:"mrow"},"\u2212"),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow"},"\u2212"),(0,r.kt)("mi",{parentName:"mrow"},"i")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"N-1-i")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i")))))," \u884c\u4ea4\u6362")),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(27489).Z,width:"1156",height:"732"})),(0,r.kt)("p",null,"\u5b9e\u9a8c\u8bbe\u8ba1\u8005\u7f16\u5199\u7684\u539f\u59cb\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void naive_rotate(int dim, pixel *src, pixel *dst) \n{\n    int i, j;\n\n    for (i = 0; i < dim; i++)\n    for (j = 0; j < dim; j++)\n        dst[RIDX(dim-1-j, i, dim)] = src[RIDX(i, j, dim)];\n}\n")),(0,r.kt)("p",null,"\u5f88\u660e\u663e\uff0c\u8fd9\u91cc\u53ef\u4ee5\u8fdb\u884c\u77e9\u9635\u5206\u5757\uff0c\u5206\u5757\u5904\u7406\u6211\u4eec\u5df2\u7ecf\u5728 Cache Lab \u4e2d\u8fdb\u884c\u4e86\u6df1\u5165\u7684\u7814\u7a76\uff0c\u8fd9\u91cc\u5c31\u4e0d\u518d\u91cd\u590d\u5206\u6790\u4e86\u3002"),(0,r.kt)("h3",{id:"32--32-\u5206\u5757"},"32 \xd7 32 \u5206\u5757"),(0,r.kt)("p",null,"\u6d4b\u8bd5\u6570\u636e\u7684\u77e9\u9635\u7ef4\u6570\u5747\u4e3a 32 \u7684\u500d\u6570\uff0c\u6240\u4ee5\u5148\u8003\u8651 32 \xd7 32 \u5206\u5757"),(0,r.kt)("p",null,"32\xd732 \u5206\u5757"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void rotate(int dim, pixel *src, pixel *dst) \n{\n    for (int i = 0; i < dim; i += 32){\n        for (int j = 0; j < dim; j += 32){\n            for (int k = i; k < i+32; k++){\n                for (int s = j; s < j+32; s++){\n                    dst[RIDX(dim-1-s, k, dim)] = src[RIDX(k, s, dim)];\n                }\n            }\n        }\n    }\n}\n")),(0,r.kt)("p",null,"\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"Rotate: Version = naive_rotate: Naive baseline implementation:\nDim             64      128     256     512     1024    Mean\nYour CPEs       1.4     2.1     3.6     7.8     6.9\nBaseline CPEs   14.7    40.1    46.4    65.9    94.5\nSpeedup         10.2    18.7    12.7    8.4     13.8    12.3\n\nRotate: Version = rotate: Current working version:\nDim             64      128     256     512     1024    Mean\nYour CPEs       1.9     2.1     2.3     2.9     6.9\nBaseline CPEs   14.7    40.1    46.4    65.9    94.5\nSpeedup         7.9     19.5    19.8    22.6    13.8    15.7\n")),(0,r.kt)("p",null,"\u6548\u679c\u4e0d\u592a\u7406\u60f3\uff0c\u8003\u8651\u6d88\u9664\u6700\u5185\u5c42\u5faa\u73af\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void rotate(int dim, pixel *src, pixel *dst) \n{\n    for (int i = 0; i < dim; i += 32){\n        for (int j = 0; j < dim; j += 32){\n            for (int k = i; k < i+32; k++){\n                dst[RIDX(dim-1-j, k, dim)] = src[RIDX(k, j+0, dim)];\n                dst[RIDX(dim-2-j, k, dim)] = src[RIDX(k, j+1, dim)];\n                dst[RIDX(dim-3-j, k, dim)] = src[RIDX(k, j+2, dim)];\n                dst[RIDX(dim-4-j, k, dim)] = src[RIDX(k, j+3, dim)];\n                dst[RIDX(dim-5-j, k, dim)] = src[RIDX(k, j+4, dim)];\n                dst[RIDX(dim-6-j, k, dim)] = src[RIDX(k, j+5, dim)];\n                dst[RIDX(dim-7-j, k, dim)] = src[RIDX(k, j+6, dim)];\n                dst[RIDX(dim-8-j, k, dim)] = src[RIDX(k, j+7, dim)];\n                dst[RIDX(dim-9-j, k, dim)] = src[RIDX(k, j+8, dim)];\n                dst[RIDX(dim-10-j, k, dim)] = src[RIDX(k, j+9, dim)];\n                dst[RIDX(dim-11-j, k, dim)] = src[RIDX(k, j+10, dim)];\n                dst[RIDX(dim-12-j, k, dim)] = src[RIDX(k, j+11, dim)];\n                dst[RIDX(dim-13-j, k, dim)] = src[RIDX(k, j+12, dim)];\n                dst[RIDX(dim-14-j, k, dim)] = src[RIDX(k, j+13, dim)];\n                dst[RIDX(dim-15-j, k, dim)] = src[RIDX(k, j+14, dim)];\n                dst[RIDX(dim-16-j, k, dim)] = src[RIDX(k, j+15, dim)];\n                dst[RIDX(dim-17-j, k, dim)] = src[RIDX(k, j+16, dim)];\n                dst[RIDX(dim-18-j, k, dim)] = src[RIDX(k, j+17, dim)];\n                dst[RIDX(dim-19-j, k, dim)] = src[RIDX(k, j+18, dim)];\n                dst[RIDX(dim-20-j, k, dim)] = src[RIDX(k, j+19, dim)];\n                dst[RIDX(dim-21-j, k, dim)] = src[RIDX(k, j+20, dim)];\n                dst[RIDX(dim-22-j, k, dim)] = src[RIDX(k, j+21, dim)];\n                dst[RIDX(dim-23-j, k, dim)] = src[RIDX(k, j+22, dim)];\n                dst[RIDX(dim-24-j, k, dim)] = src[RIDX(k, j+23, dim)];\n                dst[RIDX(dim-25-j, k, dim)] = src[RIDX(k, j+24, dim)];\n                dst[RIDX(dim-26-j, k, dim)] = src[RIDX(k, j+25, dim)];\n                dst[RIDX(dim-27-j, k, dim)] = src[RIDX(k, j+26, dim)];\n                dst[RIDX(dim-28-j, k, dim)] = src[RIDX(k, j+27, dim)];\n                dst[RIDX(dim-29-j, k, dim)] = src[RIDX(k, j+28, dim)];\n                dst[RIDX(dim-30-j, k, dim)] = src[RIDX(k, j+29, dim)];\n                dst[RIDX(dim-31-j, k, dim)] = src[RIDX(k, j+30, dim)];\n                dst[RIDX(dim-32-j, k, dim)] = src[RIDX(k, j+31, dim)];\n            }\n        }\n    }\n}\n")),(0,r.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"Rotate: Version = naive_rotate: Naive baseline implementation:\nDim             64      128     256     512     1024    Mean\nYour CPEs       1.4     2.1     3.8     7.4     6.5\nBaseline CPEs   14.7    40.1    46.4    65.9    94.5\nSpeedup         10.3    19.1    12.1    8.9     14.6    12.5\n\nRotate: Version = rotate: Current working version:\nDim             64      128     256     512     1024    Mean\nYour CPEs       1.6     1.8     2.1     2.7     5.7\nBaseline CPEs   14.7    40.1    46.4    65.9    94.5\nSpeedup         9.2     22.8    22.0    24.0    16.5    17.8\n")),(0,r.kt)("h3",{id:"\u6700\u4f18\u5206\u5757"},"\u6700\u4f18\u5206\u5757"),(0,r.kt)("p",null,"\u7ecf\u8fc7\u591a\u8f6e\u6d4b\u8bd5\uff0c\u6211\u53d1\u73b0 8 \xd7 8 \u5206\u5757\u7684\u6548\u679c\u662f\u6700\u597d\u7684\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void rotate(int dim, pixel *src, pixel *dst) \n{\n    for (int i = 0; i < dim; i += 8){\n        for (int j = 0; j < dim; j += 8){\n            for (int k = i; k < i+8; k++){\n                dst[RIDX(dim-1-j, k, dim)] = src[RIDX(k, j+0, dim)];\n                dst[RIDX(dim-2-j, k, dim)] = src[RIDX(k, j+1, dim)];\n                dst[RIDX(dim-3-j, k, dim)] = src[RIDX(k, j+2, dim)];\n                dst[RIDX(dim-4-j, k, dim)] = src[RIDX(k, j+3, dim)];\n                dst[RIDX(dim-5-j, k, dim)] = src[RIDX(k, j+4, dim)];\n                dst[RIDX(dim-6-j, k, dim)] = src[RIDX(k, j+5, dim)];\n                dst[RIDX(dim-7-j, k, dim)] = src[RIDX(k, j+6, dim)];\n                dst[RIDX(dim-8-j, k, dim)] = src[RIDX(k, j+7, dim)];\n            }\n        }\n    }\n}\n")),(0,r.kt)("p",null,"\u6d4b\u8bd5\u4e00\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"Rotate: Version = naive_rotate: Naive baseline implementation:\nDim             64      128     256     512     1024    Mean\nYour CPEs       1.4     1.9     3.6     7.0     6.1\nBaseline CPEs   14.7    40.1    46.4    65.9    94.5\nSpeedup         10.8    21.1    13.0    9.5     15.6    13.4\n\nRotate: Version = rotate: Current working version:\nDim             64      128     256     512     1024    Mean\nYour CPEs       1.4     1.6     1.7     1.9     2.4\nBaseline CPEs   14.7    40.1    46.4    65.9    94.5\nSpeedup         10.1    25.5    27.7    34.5    39.3    25.0\n")),(0,r.kt)("p",null,"\u62ff\u5230\u4e86 ",(0,r.kt)("strong",{parentName:"p"},"25 \u5206"),"\uff0c\u8fd9\u4e2a\u7ed3\u679c\u5e94\u8be5\u662f\u6bd4\u8f83\u7406\u60f3\u4e86\u3002"),(0,r.kt)("h2",{id:"smooth"},"smooth"),(0,r.kt)("p",null,"\u8fd9\u90e8\u5206\u662f\u5c06\u56fe\u50cf\u5149\u6ed1\u5904\u7406\uff0c\u5c06\u6bcf\u4e00\u4e2a\u50cf\u7d20\u70b9\u7684 RGB \u503c\u8bbe\u7f6e\u4e3a\u4ee5\u5b83\u4e3a\u4e2d\u5fc3\u9644\u8fd1\u6700\u591a\u4e5d\u5757\u7684\u5e73\u5747\u503c\u3002\u8981\u6ce8\u610f\u8fb9\u754c\u7684\u60c5\u51b5\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(61737).Z,width:"1332",height:"561"})),(0,r.kt)("p",null,"\u539f\u59cb\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"typedef struct {\n    int red;\n    int green;\n    int blue;\n    int num;\n} pixel_sum;\n/* Compute min and max of two integers, respectively */\nstatic int min(int a, int b) { return (a < b ? a : b); }\nstatic int max(int a, int b) { return (a > b ? a : b); }\n/* \n * initialize_pixel_sum - Initializes all fields of sum to 0 \n */\nstatic void initialize_pixel_sum(pixel_sum *sum) \n{\n    sum->red = sum->green = sum->blue = 0;\n    sum->num = 0;\n    return;\n}\n/* \n * accumulate_sum - Accumulates field values of p in corresponding \n * fields of sum \n */\nstatic void accumulate_sum(pixel_sum *sum, pixel p) \n{\n    sum->red += (int) p.red;\n    sum->green += (int) p.green;\n    sum->blue += (int) p.blue;\n    sum->num++;\n    return;\n}\n/* \n * assign_sum_to_pixel - Computes averaged pixel value in current_pixel \n */\nstatic void assign_sum_to_pixel(pixel *current_pixel, pixel_sum sum) \n{\n    current_pixel->red = (unsigned short) (sum.red/sum.num);\n    current_pixel->green = (unsigned short) (sum.green/sum.num);\n    current_pixel->blue = (unsigned short) (sum.blue/sum.num);\n    return;\n}\n/* \n * avg - Returns averaged pixel value at (i,j) \n */\nstatic pixel avg(int dim, int i, int j, pixel *src) \n{\n    int ii, jj;\n    pixel_sum sum;\n    pixel current_pixel;\n\n    initialize_pixel_sum(&sum);\n    for(ii = max(i-1, 0); ii <= min(i+1, dim-1); ii++) \n    for(jj = max(j-1, 0); jj <= min(j+1, dim-1); jj++) \n        accumulate_sum(&sum, src[RIDX(ii, jj, dim)]);\n\n    assign_sum_to_pixel(&current_pixel, sum);\n    return current_pixel;\n}\n/*\n * naive_smooth - The naive baseline version of smooth \n */\nvoid naive_smooth(int dim, pixel *src, pixel *dst) \n{\n    int i, j;\n\n    for (i = 0; i < dim; i++)\n    for (j = 0; j < dim; j++)\n        dst[RIDX(i, j, dim)] = avg(dim, i, j, src);\n}\n")),(0,r.kt)("p",null,"\u4ee5\u4e0a\u4ee3\u7801\u6709\u660e\u663e\u7684\u6027\u80fd\u7f3a\u9677\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5faa\u73af\u4f4e\u6548\u7387\u3002\u904d\u5386\u8fc7\u7a0b\u4e2d\uff0c\u5bf9\u6bcf\u4e00\u4e2a\u70b9\u90fd\u8c03\u7528\u4e86",(0,r.kt)("inlineCode",{parentName:"li"},"min"),"\u51fd\u6570\u3001"),(0,r.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u5229\u7528\u5faa\u73af\u5c55\u5f00")),(0,r.kt)("p",null,"\u601d\u8def\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5148\u5bf9\u56db\u89d2\u3001\u56db\u8fb9\u5355\u72ec\u5904\u7406\uff0c\u7136\u540e\u518d\u5bf9\u5185\u90e8\u8fdb\u884c\u5faa\u73af\u5904\u7406\uff0c\u8fd9\u6837\u5c31\u80fd\u907f\u514d\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"min"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"max"),"\u51fd\u6570")),(0,r.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'static void set_corner(int cc, pixel *src, pixel *dst, int a1, int a2, int a3){\n    dst[cc].blue = (src[cc].blue+src[a1].blue+src[a2].blue+src[a3].blue) >> 2;\n    dst[cc].green = (src[cc].green+src[a1].green+src[a2].green+src[a3].green) >> 2;\n    dst[cc].red = (src[cc].red+src[a1].red+src[a2].red+src[a3].red) >> 2;\n}\nstatic void set_top(int dim, pixel *src, pixel *dst, int j){\n    dst[j].blue = (src[j].blue+src[j+dim].blue+src[j-1].blue+src[j+1].blue+src[j+dim-1].blue+src[j+dim+1].blue)/6;\n    dst[j].green = (src[j].green+src[j+dim].green+src[j-1].green+src[j+1].green+src[j+dim-1].green+src[j+dim+1].green)/6;\n    dst[j].red = (src[j].red+src[j+dim].red+src[j-1].red+src[j+1].red+src[j+dim-1].red+src[j+dim+1].red)/6;\n}\nstatic void set_bottom(int dim, pixel *src, pixel *dst, int j){\n    dst[j].blue = (src[j].blue+src[j-dim].blue+src[j-1].blue+src[j+1].blue+src[j-dim-1].blue+src[j-dim+1].blue)/6;\n    dst[j].green = (src[j].green+src[j-dim].green+src[j-1].green+src[j+1].green+src[j-dim-1].green+src[j-dim+1].green)/6;\n    dst[j].red = (src[j].red+src[j-dim].red+src[j-1].red+src[j+1].red+src[j-dim-1].red+src[j-dim+1].red)/6;\n}\nstatic void set_left(int dim, pixel *src, pixel *dst, int i){\n    dst[i].blue = (src[i].blue+src[i-dim].blue+src[i-dim+1].blue+src[i+1].blue+src[i+dim].blue+src[i+dim+1].blue)/6;\n    dst[i].green = (src[i].green+src[i-dim].green+src[i-dim+1].green+src[i+1].green+src[i+dim].green+src[i+dim+1].green)/6;\n    dst[i].red = (src[i].red+src[i-dim].red+src[i-dim+1].red+src[i+1].red+src[i+dim].red+src[i+dim+1].red)/6;\n}\nstatic void set_right(int dim, pixel *src, pixel *dst, int i){\n    dst[i].blue = (src[i].blue+src[i-dim].blue+src[i-dim-1].blue+src[i-1].blue+src[i+dim].blue+src[i+dim-1].blue)/6;\n    dst[i].green = (src[i].green+src[i-dim].green+src[i-dim-1].green+src[i-1].green+src[i+dim].green+src[i+dim-1].green)/6;\n    dst[i].red = (src[i].red+src[i-dim].red+src[i-dim-1].red+src[i-1].red+src[i+dim].red+src[i+dim-1].red)/6;\n}\nstatic void set_in(int dim, pixel *src, pixel *dst, int k){\n    dst[k].blue = (src[k].blue+src[k-1].blue+src[k+1].blue+src[k+dim-1].blue+src[k+dim].blue+src[k+dim+1].blue+src[k-dim-1].blue+src[k-dim].blue+src[k-dim+1].blue)/9;\n    dst[k].green = (src[k].green+src[k-1].green+src[k+1].green+src[k+dim-1].green+src[k+dim].green+src[k+dim+1].green+src[k-dim-1].green+src[k-dim].green+src[k-dim+1].green)/9;\n    dst[k].red = (src[k].red+src[k-1].red+src[k+1].red+src[k+dim-1].red+src[k+dim].red+src[k+dim+1].red+src[k-dim-1].red+src[k-dim].red+src[k-dim+1].red)/9;\n}\n/*\n * smooth - Your current working version of smooth. \n * IMPORTANT: This is the version you will be graded on\n */\nchar smooth_descr[] = "smooth: Current working version";\nvoid smooth(int dim, pixel *src, pixel *dst) \n{\n    // \u5904\u7406\u56db\u4e2a\u89d2\n    set_corner(0, src, dst, 1, dim, dim+1);\n    set_corner(dim-1, src, dst, dim-2, dim+dim-2, dim+dim-1);\n    set_corner(RIDX(dim-1, 0, dim), src, dst, RIDX(dim-1, 1, dim), RIDX(dim-2, 0, dim), RIDX(dim-2, 1, dim));\n    set_corner(RIDX(dim-1, dim-1, dim), src, dst, RIDX(dim-1, dim-2, dim), RIDX(dim-2, dim-2, dim), RIDX(dim-2, dim-1, dim));\n    // \u5904\u7406\u56db\u4e2a\u8fb9\n    for(int j = 1; j <= dim-2; j++){\n        set_top(dim, src, dst, j);\n        set_bottom(dim, src, dst, dim*dim-dim+j);\n        set_left(dim, src, dst, j*dim);\n        set_right(dim, src, dst, j*dim+dim-1);\n    }\n    // \u4e2d\u95f4\u90e8\u5206\n    for(int i = 1; i <= dim-2; i++){\n        for(int j = 1; j <= dim-2; j++){\n            set_in(dim, src, dst, i*dim+j);\n        }\n    }    \n}\n')),(0,r.kt)("p",null,"\u6d4b\u8bd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"Smooth: Version = smooth: Current working version:\nDim             32      64      128     256     512     Mean\nYour CPEs       9.3     9.4     9.4     9.2     9.4\nBaseline CPEs   695.0   698.0   702.0   717.0   722.0\nSpeedup         75.0    74.6    74.4    78.0    76.6    75.7\n\nSmooth: Version = naive_smooth: Naive baseline implementation:\nDim             32      64      128     256     512     Mean\nYour CPEs       40.2    42.1    42.3    41.8    43.5\nBaseline CPEs   695.0   698.0   702.0   717.0   722.0\nSpeedup         17.3    16.6    16.6    17.1    16.6    16.8\n")),(0,r.kt)("p",null,"\u6027\u80fd\u76f8\u6bd4\u539f\u6765\u63d0\u5347\u4e86\u8fd1 5 \u500d\uff0c\u53ef\u4ee5\u8bf4\u76f8\u5f53\u4e0d\u9519\u4e86\u3002"),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Performance Lab \u8bbe\u8ba1\u5f97\u5f88\u7c97\u7cd9\uff0c\u6ca1\u6709\u5177\u4f53\u7684\u8bc4\u5206\u6807\u51c6\uff0c\u540c\u6837\u7684\u4ee3\u7801\u6bcf\u6b21\u8fd0\u884c\u7684\u5206\u6570\u751a\u81f3\u8fd8\u662f\u4e0d\u4e00\u6837\u7684\uff0c\u542b\u91d1\u91cf\u8fdc\u8fdc\u4e0d\u5982 Architeture Lab \u7684 Part B \u548c Cache Lab\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u5468\u672b\u76f8\u5f53\u4e8e\u4f11\u606f\u4e86\u4e24\u5929\uff0c\u517b\u7cbe\u84c4\u9510\uff0c\u8fce\u63a5\u4e0b\u5468 Shell Lab \u7684\u6311\u6218\uff01")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u672c\u5b9e\u9a8c\u8017\u65f6 1 \u5929\uff0c\u7ea6 3 \u5c0f\u65f6"))))}o.isMDXComponent=!0},53248:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/image-20220326101355982-0298da8cf91ddc41a2df5162afc0c4ee.png"},27489:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/image-20220326145343499-1ffb149ff79ffe42e12086bee8efe66e.png"},61737:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/image-20220326160348748-de627c6b2d814c76b830a8c82d9bbfce.png"}}]);