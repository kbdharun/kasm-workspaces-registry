(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858],{4873:function(e,l,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new/[[...workspace]]",function(){return a(4734)}])},4734:function(e,l,a){"use strict";a.r(l),a.d(l,{__N_SSG:function(){return u},default:function(){return New}});var s=a(5893),t=a(9008),n=a.n(t),i=a(7294),r=a(3162),o=a(8813),c=a(3157),d=a(1163),m=JSON.parse('{"wZ":[{"description":"This development image is based on Debian bookworm with all essential development tools preinstalled.","docker_registry":"https://index.docker.io/v1/","name":"kbdharun/kasm-dev-debian:1.14.0","image_src":"debian.png","categories":["Development"],"friendly_name":"Debian Bookworm","architecture":["amd64","arm64"],"compatibility":["1.14.x"],"uncompressed_size_mb":2333,"sha":"96b426bd9f844251cc734c06f3f677efa04e1abf"},{"description":"This development image is based on Fedora Workstation 38 with all essential development tools preinstalled.","docker_registry":"https://index.docker.io/v1/","name":"kbdharun/kasm-dev-debian:1.14.0","image_src":"fedora.png","categories":["Development"],"friendly_name":"Fedora Workstation 38","architecture":["amd64","arm64"],"compatibility":["1.14.x"],"uncompressed_size_mb":2784,"sha":"7b84ef7c727c927707f280f412b668000e895170"},{"description":"This development image is based on Ubuntu LTS 22.04 with all essential development tools preinstalled.","docker_registry":"https://index.docker.io/v1/","name":"kbdharun/kasm-dev-ubuntu:1.14.0","image_src":"ubuntu.png","categories":["Development"],"friendly_name":"Ubuntu LTS 22.04","architecture":["amd64","arm64"],"compatibility":["1.14.x"],"uncompressed_size_mb":2376,"sha":"49a121b81c329a780915937e429223214290607e"}]}'),u=!0;function New(e){let{workspace:l}=e,t=(0,i.useRef)(null),u=(0,i.useRef)(null),p=(0,i.useRef)(null),[h,b]=(0,i.useState)(null),[f,x]=(0,i.useState)(null),[g,v]=(0,i.useState)(null),[w,y]=(0,i.useState)("png"),[j,N]=(0,i.useState)(null),_={friendly_name:null,image_src:null,description:null,name:null,cores:2,memory:2768,gpu_count:0,cpu_allocation_method:"Inherit",docker_registry:"https://index.docker.io/v1/",categories:[],require_gpu:!1,enabled:!0,image_type:"Container"},[k,C]=(0,i.useState)(_);(0,d.useRouter)(),(0,i.useEffect)(()=>{if(null===l)p.current.value="",t.current.value="",u.current.value="",b(null),x(null),v(null),C(_);else if(l&&l[0]){let e=m.wZ.find(e=>e.name===atob(l[0]));if(delete e.sha,p.current.value=e.description,t.current.value=e.name,u.current.value=e.friendly_name,e.categories){let l=[];e.categories.map(e=>l.push({label:e,value:e})),b(l)}if(e.architecture){let l=[];e.architecture.map(e=>l.push({label:e,value:e})),x(l)}N("../../icons/"+e.image_src),C({...k,...e})}},[l]);let S={control:(e,l)=>({...e,background:"#f1f5f9",borderRadius:"0.5rem",borderColor:"#94a3b8"}),multiValue:(e,l)=>{let{data:a}=l;return{...e,backgroundColor:"#dde6f1"}}};function friendlyUrl(e){var l=e.toString().toLowerCase();return(l=(l=(l=l.split(/\&+/).join("-and-")).split(/[^a-z0-9]/).join("-")).split(/-+/).join("-")).trim("-")}(0,i.useEffect)(()=>{if(k&&k.friendly_name){let e={...k};e.image_src=friendlyUrl(e.friendly_name)+"."+w,C(e)}},[w]);let handleChange=e=>{let l={...k};l[e.target.name]=e.target.value,"icon"===e.target.name&&(delete l.icon,v({value:e.target.value,file:e.target.files[0]}),y(e.target.value.substr(e.target.value.lastIndexOf(".")+1)),N(null)),l.friendly_name&&(l.image_src=friendlyUrl(l.friendly_name)+"."+w),C(l)};return(0,s.jsxs)("div",{className:"",children:[(0,s.jsxs)(n(),{children:[(0,s.jsx)("title",{children:"Kasm Workspaces"}),(0,s.jsx)("meta",{name:"description",content:"List of workspaces for Kasm Webspaces"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsxs)("div",{className:"flex flex-col lg:flex-row w-full my-20 max-w-6xl text-sm rounded-xl overflow-hidden mx-auto",children:[(0,s.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-300",children:[(0,s.jsx)("h1",{className:"text-2xl font-medium mb-2",children:"Add Workspace"}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("p",{className:"mb-8 opacity-70",children:'This page is designed to allow admins to generate the JSON they need to upload to the "workspaces" directory. It also allows end users to see what settings are needed if they want to manually copy them into a new workspace.'}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Icon"}),(0,s.jsx)("input",{type:"file",name:"icon",onChange:handleChange,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,s.jsx)("p",{className:"mb-6 opacity-70",children:"Select the image to use, image will be renamed when it's downloaded."}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Friendly Name"}),(0,s.jsx)("input",{ref:u,name:"friendly_name",onChange:handleChange,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,s.jsx)("p",{className:"mb-6 opacity-70",children:"This is the name that will show for users"}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Categories"}),(0,s.jsx)(o.Z,{instanceId:"1",name:"categories",isMulti:!0,options:[{value:"Browser",label:"Browser"},{value:"Communication",label:"Communication"},{value:"Desktop",label:"Desktop"},{value:"Development",label:"Development"},{value:"Games",label:"Games"},{value:"Multimedia",label:"Multimedia"},{value:"Office",label:"Office"},{value:"Privacy",label:"Privacy"},{value:"Productivity",label:"Productivity"},{value:"Remote Access",label:"Remote Access"}],onChange:e=>{let l={...k};l.categories=e.map(e=>e.value),C(l);let a=[];l.categories.map(e=>a.push({label:e,value:e})),b(a)},styles:S,value:h}),(0,s.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Description"}),(0,s.jsx)("input",{ref:p,name:"description",onChange:handleChange,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,s.jsx)("p",{className:"mb-6 opacity-70",children:"A short description about the workspace"}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Docker Image"}),(0,s.jsx)("input",{ref:t,name:"name",onChange:handleChange,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,s.jsxs)("p",{className:"mb-6 opacity-70",children:["The docker image to use, i.e. ",(0,s.jsx)("code",{className:"text-xs p-1 px-2 rounded bg-white/40",children:"kasmweb/filezilla:develop"})]}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Architecture"}),(0,s.jsx)(c.ZP,{instanceId:"2",name:"architecture",isMulti:!0,options:[{value:"amd64",label:"amd64"},{value:"arm64",label:"arm64"}],onChange:e=>{let l={...k};l.architecture=e.map(e=>e.value),C(l);let a=[];l.architecture.map(e=>a.push({label:e,value:e})),x(a)},styles:S,value:f}),(0,s.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."})]})]}),(0,s.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-100",children:[(0,s.jsx)(Workspace,{workspace:k,icon:g,inlineImage:j}),(0,s.jsx)("pre",{className:"my-8 overflow-y-auto text-xs",children:JSON.stringify({...k},null,2)}),(0,s.jsx)("button",{onClick:()=>{var e=a(5733);let l=new e,s=l.folder(k.friendly_name);if(s.file("workspace.json",JSON.stringify(k,null,2)),g)s.file(k.image_src,g.file);else if(j){let e=fetch(j).then(e=>e.blob());s.file(k.image_src,e)}l.generateAsync({type:"blob"}).then(function(e){(0,r.saveAs)(e,friendlyUrl(k.friendly_name)+".zip")})},className:"p-4 relative z-10 px-5 bg-cyan-700 border-t border-white/20 border-solid hover:bg-slate-900 transition m-2 rounded items-center text-white/70 flex cursor-pointer",children:"Download"})]})]})]})}function Workspace(e){let{workspace:l,icon:a,inlineImage:t}=e,[n,r]=(0,i.useState)(!1),o=null;if(a){let e=new Blob([a.file]);o=URL.createObjectURL(e),l.image_src=o}return(0,s.jsx)("div",{className:"rounded-xl group w-full shadow max-w-xs relative overflow-hidden h-[100px] border border-solid flex flex-col justify-between bg-slate-300 border-slate-400/50",children:(0,s.jsxs)("div",{className:"absolute top-0 left-0 right-0 h-[200px] transition-all"+(n?" -translate-y-1/2":""),children:[(0,s.jsxs)("div",{onClick:()=>r(!0),className:"h-[100px] p-4 relative overflow-hidden cursor-pointer",children:[(0,s.jsx)("img",{className:"h-[90px] group-hover:scale-150 transition-all absolute left-2 top-1",src:l.image_src,onError:e=>{null!==t&&(e.target.src=t)},alt:l.friendly_name}),(0,s.jsxs)("div",{className:"flex-col pl-28",children:[(0,s.jsx)("div",{className:"font-bold",children:l.friendly_name||"Friendly Name"}),(0,s.jsxs)("div",{className:"text-xs mb-2 flex gap-2",children:["Dharun Krishna"," ",(0,s.jsx)("span",{children:void 0})]}),(0,s.jsx)("div",{className:" h-8"})]}),(0,s.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 bg-slate-400/20 h-8 text-[10px] flex items-center justify-center",children:[l.architecture&&l.architecture.map((e,l)=>(0,s.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-400/70",children:e},"arch"+l)),l.categories.map((e,l)=>(0,s.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-300/90",children:e},"cat"+l))]}),!1]}),(0,s.jsxs)("div",{className:"h-[100px] text-xs relative p-2 pl-4 flex",children:[(0,s.jsx)("button",{className:"absolute right-2 top-2 bg-slate-100 rounded-full flex justify-center items-center h-6 w-6",onClick:()=>r(!1),children:(0,s.jsx)("svg",{style:{height:"14px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:(0,s.jsx)("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})})}),(0,s.jsxs)("div",{className:"flex flex-col flex-grow",children:[(0,s.jsx)("div",{className:"font-bold",children:l.friendly_name})," ",l.description]}),(0,s.jsxs)("div",{className:"flex flex-col justify-end gap-1",children:[(0,s.jsx)("div",{className:"text-xs text-color w-full p-4 py-1 rounded-lg bg-black/5 flex justify-center items-center",children:"Edit"}),(0,s.jsx)("button",{className:"text-xs w-full p-4 py-1 rounded-lg flex justify-center items-center bg-blue-500 font-bold text-white",children:"Install"})]})]})]})})}}},function(e){e.O(0,[484,774,888,179],function(){return e(e.s=4873)}),_N_E=e.O()}]);