import{e as a,u as y,o as i,c as d,f as e,a as s,w as t,d as I,g as Q,t as $,Q as C,b as _}from"./index-e20c092a.js";import{Q as V,a as n,b,c as B,d as M,e as T,f as h}from"./BasicInfo.vue_vue_type_style_index_0_lang-3dcb7900.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";const A={class:"row full-width"},D={class:"col-2 q-mr-md"},k={class:"aside full-height full-width"},H={class:"map"},S={class:"aside__content flex column items-center q-pt-md"},j=e("span",{class:"text-body2"},"服務電話",-1),G=e("span",{class:"text-body2"},"傳真電話",-1),N=e("span",{class:"text-body2"},"分行地址",-1),Y=e("span",{class:"text-body2"},"電子信箱",-1),z=e("span",{class:"text-body2"},"是否延長營業",-1),E=e("span",{class:"text-body2"},"營業項目",-1),F={class:"col"},K={class:"basicInfo__main"},P=e("h3",{class:"q-ma-none q-py-xs basicInfo__main__title text-h6 bg-primary text-white text-center rounded-borders"}," 營業單位基本資料 ",-1),R={class:"basicInfo__main__content q-pa-sm"},U={class:"personalInfo q-mb-md"},J=e("h4",{class:"text-h5 text-secondary text-weight-bold q-my-none"},"分行人員資訊",-1),L={class:"row"},O={class:"col-4"},W=e("span",{class:"text-h6 text-weight-bold"},"分行經理",-1),X={class:"col-4"},Z=e("span",{class:"text-h6 text-weight-bold"},"經理到任日期",-1),ee={class:"col-4"},se=e("span",{class:"text-h6 text-weight-bold"},"總人數",-1),te={class:"col-4"},oe=e("span",{class:"text-h6 text-weight-bold"},"副理人數",-1),ne={class:"col-4"},le=e("span",{class:"text-h6 text-weight-bold"},"經辦人員人數",-1),ae={class:"col-4"},ce=e("span",{class:"text-h6 text-weight-bold"},"區域組別",-1),ie={class:"branchCounter q-mb-md"},de=e("h4",{class:"text-h5 text-secondary text-weight-bold q-my-none"},"分行櫃台作業(2023/10)",-1),me={class:"row"},re={class:"col-6"},_e=e("span",{class:"text-h6 text-weight-bold branchCounter__label"},"分行經理",-1),be={class:"col-6"},he=e("span",{class:"text-h6 text-weight-bold branchCounter__label"},"經理到任日期",-1),ue={class:"col-6"},fe=e("span",{class:"text-h6 text-weight-bold branchCounter__label"},"總人數",-1),pe={class:"col-6"},qe=e("span",{class:"text-h6 text-weight-bold branchCounter__label"},"副理人數",-1),xe={class:"col-6"},ge=e("span",{class:"text-h6 text-weight-bold branchCounter__label"},"經辦人員人數",-1),ve={class:"col-6"},we=e("span",{class:"text-h6 text-weight-bold branchCounter__label"},"區域組別",-1),ye={class:"counterInfo"},Ie=e("h4",{class:"text-h5 text-secondary text-weight-bold q-my-none"},"行舍概況",-1),Qe={class:"q-px-lg q-py-md bg-grey-4"},$e=e("span",{class:"text-h6 text-weight-bold"},"所有權狀態",-1),Ce={class:"text-primary text-weight-bold text-body2 q-ma-none"},Ve={__name:"BasicInfo",setup(m){const l=a("https://images.unsplash.com/photo-1562504208-03d85cc8c23e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),r=y(),o=a(!0),c=a(null),p=a(null),u=a(!1),q=[{label:"name",field:"name",name:"name",align:"center",sortable:!0},{label:"calories",field:"calories",name:"calories",align:"center",sortable:!1}],x=[{id:1,name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,sodium:87,calcium:"14%",iron:"1%"},{id:2,name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,sodium:129,calcium:"8%",iron:"1%"},{id:3,name:"Eclair",calories:262,fat:16,carbs:23,protein:6,sodium:337,calcium:"6%",iron:"7%"},{id:4,name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,sodium:413,calcium:"3%",iron:"8%"},{id:5,name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,sodium:327,calcium:"7%",iron:"16%"},{id:6,name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,sodium:50,calcium:"0%",iron:"0%"},{id:7,name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,sodium:38,calcium:"0%",iron:"2%"},{id:8,name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,sodium:562,calcium:"0%",iron:"45%"},{id:9,name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,sodium:326,calcium:"2%",iron:"22%"},{id:10,name:"KitKat",calories:518,fat:26,carbs:65,protein:7,sodium:54,calcium:"12%",iron:"6%"}],g=()=>{u.value!==!0?r.notify({color:"red-5",textColor:"white",icon:"warning",message:"You need to accept the license and terms first"}):r.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"Submitted"})},v=()=>{c.value=null,p.value=null,u.value=!1};return(Fe,Ke)=>(i(),d("div",null,[e("div",A,[e("div",D,[e("div",k,[e("div",H,[s(V,{src:l.value,"spinner-color":"white",style:{height:"200px",width:"100%"}},null,8,["src"])]),e("div",S,[s(Q,{color:"primary",unelevated:"",rounded:"",size:"md",style:{width:"200px"}},{default:t(()=>[I("聯絡資訊")]),_:1}),s(b,{onSubmit:g,onReset:v,class:"q-gutter-md full-width q-mt-sm"},{default:t(()=>[s(n,{class:"q-mb-none q-ml-none q-mt-none",filled:"","bottom-slots":"",dense:o.value},{before:t(()=>[j]),_:1},8,["dense"]),s(n,{class:"q-mb-none q-ml-none q-mt-none",filled:"","bottom-slots":"",dense:o.value},{before:t(()=>[G]),_:1},8,["dense"]),s(n,{class:"q-mb-none q-ml-none q-mt-none",filled:"","bottom-slots":"",dense:o.value},{before:t(()=>[N]),_:1},8,["dense"]),s(n,{class:"q-mb-none q-ml-none q-mt-none",filled:"","bottom-slots":"",dense:o.value},{before:t(()=>[Y]),_:1},8,["dense"]),s(n,{class:"q-mb-none q-ml-none q-mt-none",filled:"","bottom-slots":"",dense:o.value},{before:t(()=>[z]),_:1},8,["dense"]),s(n,{class:"q-mb-none q-ml-none q-mt-none",filled:"","bottom-slots":"",dense:o.value,type:"textarea"},{before:t(()=>[E]),_:1},8,["dense"])]),_:1})])])]),e("div",F,[e("div",K,[P,e("div",R,[e("div",U,[J,s(b,{class:"q-px-lg q-pt-md bg-grey-4"},{default:t(()=>[e("div",L,[e("div",O,[s(n,{"bg-color":"white",class:"q-mb-none q-ml-none q-mt-none q-px-sm",filled:"","bottom-slots":"",dense:o.value},{before:t(()=>[W]),_:1},8,["dense"])]),e("div",X,[s(n,{"bg-color":"white",class:"q-mb-none q-ml-none q-mt-none q-px-sm",filled:"","bottom-slots":"",dense:o.value},{before:t(()=>[Z]),_:1},8,["dense"])]),e("div",ee,[s(n,{"bg-color":"white",class:"q-mb-none q-ml-none q-mt-none q-px-sm",filled:"","bottom-slots":"",dense:o.value},{before:t(()=>[se]),_:1},8,["dense"])]),e("div",te,[s(n,{"bg-color":"white",class:"q-mb-none q-ml-none q-mt-none q-px-sm",filled:"","bottom-slots":"",dense:o.value},{before:t(()=>[oe]),_:1},8,["dense"])]),e("div",ne,[s(n,{"bg-color":"white",class:"q-mb-none q-ml-none q-mt-none q-px-sm",filled:"","bottom-slots":"",dense:o.value},{before:t(()=>[le]),_:1},8,["dense"])]),e("div",ae,[s(n,{"bg-color":"white",class:"q-mb-none q-ml-none q-mt-none q-px-sm",filled:"","bottom-slots":"",dense:o.value},{before:t(()=>[ce]),_:1},8,["dense"])])])]),_:1})]),e("div",ie,[de,s(b,{class:"q-px-lg q-pt-md bg-grey-4"},{default:t(()=>[e("div",me,[e("div",re,[s(n,{"bg-color":"white",class:"q-mb-none q-ml-none q-mt-none q-px-sm",filled:"","bottom-slots":"",dense:o.value},{before:t(()=>[_e]),_:1},8,["dense"])]),e("div",be,[s(n,{"bg-color":"white",class:"q-mb-none q-ml-none q-mt-none q-px-sm",filled:"","bottom-slots":"",dense:o.value},{before:t(()=>[he]),_:1},8,["dense"])]),e("div",ue,[s(n,{"bg-color":"white",class:"q-mb-none q-ml-none q-mt-none q-px-sm",filled:"","bottom-slots":"",dense:o.value},{before:t(()=>[fe]),_:1},8,["dense"])]),e("div",pe,[s(n,{"bg-color":"white",class:"q-mb-none q-ml-none q-mt-none q-px-sm",filled:"","bottom-slots":"",dense:o.value},{before:t(()=>[qe]),_:1},8,["dense"])]),e("div",xe,[s(n,{"bg-color":"white",class:"q-mb-none q-ml-none q-mt-none q-px-sm",filled:"","bottom-slots":"",dense:o.value},{before:t(()=>[ge]),_:1},8,["dense"])]),e("div",ve,[s(n,{"bg-color":"white",class:"q-mb-none q-ml-none q-mt-none q-px-sm",filled:"","bottom-slots":"",dense:o.value},{before:t(()=>[we]),_:1},8,["dense"])])])]),_:1})]),e("div",ye,[Ie,e("div",Qe,[s(n,{"bg-color":"white",class:"q-mb-none q-ml-none q-mt-none q-px-sm",filled:"","bottom-slots":"",dense:o.value,style:{width:"250px"}},{before:t(()=>[$e]),_:1},8,["dense"]),s(M,{rows:x,columns:q,"row-key":"id"},{"header-cell":t(w=>[s(B,null,{default:t(()=>[e("p",Ce,$(w.col.label),1)]),_:2},1024)]),_:1})])])])])])])]))}},Be={};function Me(m,l){return i(),d("div",null," 地圖查詢 ")}const Te=f(Be,[["render",Me]]),Ae={};function De(m,l){return i(),d("div",null," 營運管理表 ")}const ke=f(Ae,[["render",De]]),He={class:"flex items-center justify-between text-weight-bold bg-white q-mb-md"},Se=e("div",{class:"location q-pl-md"},[e("span",{class:"q-mr-md"},"縣市: 屏東縣"),e("span",{class:"q-mr-md"},"鄉鎮市區: 萬巒鎮"),e("span",{class:"q-mr-md"},"分行: 785"),e("span",null,"萬巒分行")],-1),je=e("p",{class:"q-ma-none text-weight-bold"},"基本資料",-1),Ge=e("p",{class:"q-ma-none text-weight-bold"},"地圖查詢",-1),Ne=e("p",{class:"q-ma-none text-weight-bold"},"營運管理表",-1),Ye=e("div",{class:"text-h6"},"basicInfo",-1),ze=e("div",{class:"text-h6"},"mapApplication",-1),Ee=e("div",{class:"text-h6"},"operationManagement",-1),Je={__name:"BankBranchInfo",setup(m){const l=a("basicInfo");return(r,o)=>(i(),d("div",null,[e("div",He,[Se,s(C,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=c=>l.value=c),dense:"","indicator-color":"transparent","active-bg-color":"grey","active-color":"white",align:"justify","narrow-indicator":""},{default:t(()=>[s(_,{name:"basicInfo"},{default:t(()=>[je]),_:1}),s(_,{name:"mapApplication"},{default:t(()=>[Ge]),_:1}),s(_,{name:"operationManagement"},{default:t(()=>[Ne]),_:1})]),_:1},8,["modelValue"])]),s(T,{modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=c=>l.value=c),animated:"",class:"bg-transparent"},{default:t(()=>[s(h,{name:"basicInfo"},{default:t(()=>[Ye,s(Ve)]),_:1}),s(h,{name:"mapApplication"},{default:t(()=>[ze,s(Te)]),_:1}),s(h,{name:"operationManagement"},{default:t(()=>[Ee,s(ke)]),_:1})]),_:1},8,["modelValue"])]))}};export{Je as default};
