(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1845:function(e,s,r){Promise.resolve().then(r.bind(r,5681))},5681:function(e,s,r){"use strict";r.d(s,{Webui:function(){return b}});var a=r(7437),t=r(2265),l=r(7138),n=r(1538),i=r(2218),d=r(4839),c=r(6164);function o(){for(var e=arguments.length,s=Array(e),r=0;r<e;r++)s[r]=arguments[r];return(0,c.m6)((0,d.W)(s))}let g=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300",{variants:{variant:{default:"bg-gray-900 text-gray-50 hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90",destructive:"bg-red-500 text-gray-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-gray-50 dark:hover:bg-red-900/90",outline:"border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50",secondary:"bg-gray-100 text-gray-900 hover:bg-gray-100/80 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/80",ghost:"hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50",link:"text-gray-900 underline-offset-4 hover:underline dark:text-gray-50"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),h=t.forwardRef((e,s)=>{let{className:r,variant:t,size:l,asChild:i=!1,...d}=e,c=i?n.g7:"button";return(0,a.jsx)(c,{className:o(g({variant:t,size:l,className:r})),ref:s,...d})});h.displayName="Button";let x=t.forwardRef((e,s)=>{let{className:r,type:t,...l}=e;return(0,a.jsx)("input",{type:t,className:o("flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300",r),ref:s,...l})});x.displayName="Input";var m=r(1650),u=r(7406);let f=t.forwardRef((e,s)=>{let{className:r,...t}=e;return(0,a.jsx)(m.fC,{ref:s,className:o("peer h-4 w-4 shrink-0 rounded-sm border border-gray-200 border-gray-900 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gray-900 data-[state=checked]:text-gray-50 dark:border-gray-800 dark:border-gray-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 dark:data-[state=checked]:bg-gray-50 dark:data-[state=checked]:text-gray-900",r),...t,children:(0,a.jsx)(m.z$,{className:o("flex items-center justify-center text-current"),children:(0,a.jsx)(u.Z,{className:"h-4 w-4"})})})});function y(e){return(0,a.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M3 6h18"}),(0,a.jsx)("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),(0,a.jsx)("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"})]})}function v(e){var s,r,{id:l,name:n,ar:i,artists:d,al:c,album:o,dt:g,duration:x,check:m,dsl:u}=e;let[v,b]=(0,t.useState)(!1);(0,t.useEffect)(()=>{b(m)},[e.check]),void 0==i&&(i=d),void 0==c&&(c=o),void 0==g&&(g=x),g=new Date(g);let[j,p]=(0,t.useState)(!1),k=()=>{p(!0)},w=()=>{p(!1)},N=async e=>{let s=await fetch("http://220.184.125.66:25569/delSongs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({delId:e})});alert((await s.json()).state)};return(0,a.jsxs)("div",{className:"flex items-center justify-between rounded-md bg-gray-100 p-4 dark:bg-gray-800 mb-4 hover:bg-gray-200",onClick:e.rid,children:[(0,a.jsxs)("div",{className:"flex items-center space-x-4 w-full",children:[(0,a.jsx)(f,{onCheckedChange:()=>u(l),onClick:()=>{console.log("[debug]handleCheckboxClick : ",e),b(!v)},checked:v,id:"song1"}),(0,a.jsxs)("div",{className:"w-[20%]",children:[(0,a.jsx)("h3",{className:"text-base font-medium ".concat(j?"edit":""),onClick:k,onBlur:w,contentEditable:j,children:n}),(0,a.jsx)("p",{className:"text-base",onClick:k,onBlur:w,contentEditable:j,children:(r="",(s=i).length>1?(s.map(e=>{r+=" "+e.name+" /"}),r.slice(0,-1)):1==s.length?s[0].name:null)})]}),(0,a.jsx)("div",{className:"w-[20%]",children:(0,a.jsx)("p",{className:"text-sm text-gray-500 dark:text-gray-400 editable",onClick:k,onBlur:w,contentEditable:j,children:c.name})}),(0,a.jsx)("div",{className:"w-[10%]",children:(0,a.jsxs)("p",{className:"text-base text-gray-500",onClick:k,onBlur:w,contentEditable:j,children:[g.getMinutes(),":",g.getSeconds()]})}),(0,a.jsx)("div",{className:"w-[10%]",children:(0,a.jsx)("p",{className:"text-sm text-gray-500 dark:text-gray-400 editable songId",onClick:k,onBlur:w,contentEditable:j,children:l})})]}),(0,a.jsx)("div",{className:"flex items-center space-x-4",children:(0,a.jsxs)(h,{className:"rounded-full transition-colors hover:bg-gray-200 active:bg-[#C20C0C]",size:"icon",variant:"ghost",onClick:e=>{console.log("[debug]handleDeleteClic : ",l),N([l])},children:[(0,a.jsx)(y,{className:"h-5 w-5"}),(0,a.jsx)("span",{className:"sr-only",children:"Delete"})]})})]})}function b(e){let[s,r]=(0,t.useState)(""),[n,i]=(0,t.useState)(!1),[d,c]=(0,t.useState)([]);(async()=>{let e=await fetch("http://220.184.125.66:25569/FileMgs/555.json");c(await e.json())})();var o=[];if(0!=d.length)var o=d.playlist.tracks,g=d.playlist.coverImgUrl,m=d.playlist.name,u=d.playlist.creator.nickname,y=d.playlist.id;let b=e=>{let s=e.currentTarget.getElementsByTagName("div")[4].getElementsByTagName("p")[0].textContent;for(let e=0;e<o.length;e++){let t=o[e];if(t.id==s){var a="al";void 0==t[a]&&(a="album"),void 0!=t[a].picUrl&&(r("url("+t[a].picUrl+")"),console.log(t[a].picUrl))}}},N=e=>{console.log("[debug]delSongList : ",e)},C=async()=>{let e=document.getElementsByClassName("idInput")[0].value,s=await fetch("http://220.184.125.66:25569/addSongs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})});alert((await s.json()).state)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("header",{className:"flex h-16 items-center justify-between bg-[#C20C0C] px-6 text-white",children:[(0,a.jsx)("nav",{className:"flex items-center space-x-6",children:(0,a.jsx)(l.default,{className:"font-semibold",href:"#",children:"增删改查"})}),(0,a.jsx)("div",{className:"flex items-center space-x-4",children:(0,a.jsxs)(h,{size:"icon",variant:"ghost",children:[(0,a.jsx)(w,{className:"h-5 w-5"}),(0,a.jsx)("span",{className:"sr-only",children:"用户名"})]})})]}),(0,a.jsxs)("div",{className:"flex h-[calc(100vh-4rem)]",children:[(0,a.jsx)("div",{className:"flex w-64 flex-col border-r border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-900",children:(0,a.jsxs)("div",{className:"mb-4 flex items-center justify-between bg-gray-100 p-4 rounded-md dark:bg-gray-800 hover:bg-gray-200",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsx)("img",{alt:"Playlist Cover",className:"w-12 h-12 rounded-md object-cover shadow-lg",src:g}),(0,a.jsx)("h2",{className:"text-lg font-semibold",children:y})]}),(0,a.jsx)("div",{className:"flex items-center space-x-2",children:(0,a.jsxs)(h,{className:"rounded-full transition-colors hover:bg-gray-200 active:bg-[#C20C0C]",size:"icon",variant:"ghost",children:[(0,a.jsx)(k,{className:"h-5 w-5"}),(0,a.jsx)("span",{className:"sr-only",children:"删除歌曲"})]})})]})}),(0,a.jsx)("div",{className:"flex-1 flex flex-col",children:(0,a.jsxs)("div",{className:"flex-1 flex flex-col bg-cover bg-center p-6 bg-[url(/placeholder.svg)]",style:{backgroundImage:s},children:[(0,a.jsx)("div",{className:"grid grid-cols-2 gap-6",children:(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsx)("img",{alt:"Playlist Cover",className:"rounded-md object-cover h-[180px] w-[180px] shadow-lg",src:g,style:{aspectRatio:"120/120",objectFit:"cover"}}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-base font-medium",style:{fontSize:"1.5rem",fontWeight:"bold"},children:m}),(0,a.jsx)("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:u})]})]})})}),(0,a.jsxs)("div",{className:"mt-6",children:[(0,a.jsx)("h2",{className:"mb-4 text-lg font-semibold",children:(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)("span",{children:["歌曲列表(",o.length,")"]}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(p,{className:"absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400"}),(0,a.jsx)(x,{className:"w-full bg-gray-100 shadow-none appearance-none pl-8 pr-4 py-2 rounded-md dark:bg-gray-800",placeholder:"搜索歌曲...",type:"search",onKeyDown:e=>{if("Enter"===e.key&&""!=e.target.value){let s=document.getElementsByClassName("listContainer")[0].childNodes;for(let r=0;r<s.length;r++){let a=s[r];a.innerHTML.includes(e.target.value)&&(a.scrollIntoView({block:"center",inline:"nearest",behavior:"smooth"}),a.classList.add("color-animation"),setTimeout(function(){a.classList.remove("color-animation")},1e4))}}}})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)(x,{className:"w-24 bg-gray-100 shadow-none appearance-none px-4 py-2 rounded-md dark:bg-gray-800 idInput",placeholder:"歌曲ID",type:"text"}),(0,a.jsxs)(h,{className:"rounded-full bg-[#C20C0C]",size:"sm",onClick:C,children:[(0,a.jsx)(j,{className:"h-5 w-5"}),(0,a.jsx)("span",{className:"sr-only",children:"添加"})]})]})]})}),(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-4",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between rounded-md bg-gray-100 p-4 dark:bg-gray-800",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-4 w-full",children:[(0,a.jsx)(f,{id:"select-all",onClick:()=>{i(!n)}}),(0,a.jsx)("div",{className:"w-[20%]",children:(0,a.jsx)("h3",{className:"text-base font-medium",children:"歌曲标题"})}),(0,a.jsx)("div",{className:"w-[20%]",children:(0,a.jsx)("h3",{className:"text-base font-medium",children:"专辑"})}),(0,a.jsx)("div",{className:"w-[10%]",children:(0,a.jsx)("h3",{className:"text-base font-medium",children:"时长"})}),(0,a.jsx)("div",{className:"w-[10%]",children:(0,a.jsx)("h3",{className:"text-base font-medium",children:"ID"})})]}),(0,a.jsx)("div",{className:"flex items-center space-x-4",children:(0,a.jsxs)(h,{className:"rounded-full transition-colors hover:bg-gray-200 active:bg-[#C20C0C]",size:"icon",variant:"ghost",children:[(0,a.jsx)(k,{className:"h-5 w-5"}),(0,a.jsx)("span",{className:"sr-only",children:"Delete"})]})})]}),(0,a.jsx)("ul",{className:"listContainer",style:{height:"550px",overflow:"overlay"},children:o.map(e=>(0,a.jsx)(v,{dsl:N,check:n,setcheck:i,rid:b,...e},e.id))})]})]})]})})]})]})}function j(e){return(0,a.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M5 12h14"}),(0,a.jsx)("path",{d:"M12 5v14"})]})}function p(e){return(0,a.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("circle",{cx:"11",cy:"11",r:"8"}),(0,a.jsx)("path",{d:"m21 21-4.3-4.3"})]})}function k(e){return(0,a.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M3 6h18"}),(0,a.jsx)("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),(0,a.jsx)("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"})]})}function w(e){return(0,a.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}),(0,a.jsx)("circle",{cx:"12",cy:"7",r:"4"})]})}f.displayName=m.fC.displayName}},function(e){e.O(0,[679,971,23,744],function(){return e(e.s=1845)}),_N_E=e.O()}]);