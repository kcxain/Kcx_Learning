"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[4013],{39058:(e,t,a)=>{a.d(t,{Z:()=>E});var l=a(67294),r=a(86010),n=a(36723),i=a(87524),s=a(39960),c=a(95999);const m={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function o(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,r.Z)(m.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(m.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,r.Z)(m.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:m.sidebarItem},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive},e.title)))))))}var g=a(13102);function u(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function d(e){return l.createElement(g.Zo,{component:u,props:e})}function b(e){let{sidebar:t}=e;const a=(0,i.i)();return t?.items.length?"mobile"===a?l.createElement(d,{sidebar:t}):l.createElement(o,{sidebar:t}):null}function E(e){const{sidebar:t,toc:a,children:i,...s}=e,c=t&&t.items.length>0;return l.createElement(n.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(b,{sidebar:t}),l.createElement("main",{className:(0,r.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},13008:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(67294),r=a(86010),n=a(39960);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function s(e){let{permalink:t,label:a,count:s}=e;return l.createElement(n.Z,{href:t,className:(0,r.Z)(i.tag,s?i.tagWithCount:i.tagRegular)},a,s&&l.createElement("span",null,s))}},10159:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var l=a(67294),r=a(86010),n=a(95999);const i=()=>(0,n.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var s=a(10833),c=a(35281),m=a(39058),o=a(13008);const g={tag:"tag_Yyuv"};function u(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:g.tag},l.createElement(o.Z,e))))),l.createElement("hr",null))}function d(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(u,{key:e.letter,letterEntry:e}))))}function b(e){let{tags:t}=e;return console.log(t),l.createElement("section",{className:"margin-vert--lg"},l.createElement("ul",{className:"padding--none"},t.map((e=>l.createElement("li",{key:e.permalink,className:g.tag},l.createElement(o.Z,e))))))}var E=a(90197),p=a(1954);function h(e){let{tags:t,sidebar:a}=e;const n=i(),[o,g]=(0,l.useState)("grid");return l.createElement(s.FG,{className:(0,r.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage)},l.createElement(s.d,{title:n}),l.createElement(E.Z,{tag:"blog_tags_list"}),l.createElement(m.Z,{sidebar:a},l.createElement("div",{className:"blogtag__swith-view"},l.createElement("h1",null,n),l.createElement("div",null,l.createElement(p.JO,{icon:"ph:grid-four",width:"24",height:"24",onClick:()=>g("grid"),color:"grid"===o?"var(--ifm-color-primary)":"#ccc"}),l.createElement(p.JO,{icon:"ph:list-fill",width:"24",height:"24",onClick:()=>g("list"),color:"list"===o?"var(--ifm-color-primary)":"#ccc"}))),"list"===o&&l.createElement(d,{tags:t}),"grid"===o&&l.createElement(b,{tags:t})))}}}]);