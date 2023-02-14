import{f as v,a as y,b as w}from"./twelve_data_global_key-22d9eb43.js";import{a as u}from"./axios-a900fd7e.js";import{_ as L,r as S,o as n,c as d,a as t,y as m,B as p,F as b,g as k,e as _,f as x,t as h,b as I}from"./index-d85befdf.js";const C={data(){return{user:{},count:1,portName:"",initialPrice:0,id:"",name:"",stockInputList:Array.from({length:10},o=>""),ratioInputList:Array.from({length:10},o=>0),stockSearchList:Array.from({length:10},o=>[])}},setup(){return{faPlus:v,faXmark:y}},methods:{addStockInput(){if(this.count==10){alert("주식을 등록할 수 있는 개수가 10개입니다.");return}this.count+=1},deleteStockInput(o){if(this.count==1){alert("해당 주식 입력창을 삭제할 수 없습니다.");return}this.count-=1,this.stockInputList.splice(o,1),this.ratioInputList.splice(o,1),this.stockSearchList.splice(o,1),this.stockInputList.push(""),this.ratioInputList.push(0),this.stockSearchList.push([])},async searchStock(o,s){this.stockSearchList.forEach(i=>console.log(i));var l=o.target.value;this.stockInputList[s]=l,this.stockSearchList[s]!=={}&&(this.stockSearchList[s]=[]);const c=o.target.value;var r=await u.get(`https://api.twelvedata.com/symbol_search?outputsize=30&country=United States&symbol=${c}`,{headers:{Authorization:`apikey ${w}`}});this.stockSearchList[s]=r.data.data},selectStock(o,s,l){this.stockInputList[o]=s,l.target.value=this.stockInputList[o],this.stockSearchList[o]=[]},async addStockPorfolio(){console.log(`id : ${this.id}`),console.log(`name : ${this.name}`),this.id=this.$store.state.userStore.user.id,this.name=this.$store.state.userStore.user.name;let o=0;if(this.ratioInputList.forEach(c=>o+=c*1),o<100){alert("주식 포트폴리오 총 비율이 100%이어야 합니다.");return}var s={initialPrice:this.initialPrice,title:this.portName,writer:this.name,userId:this.id,stock:`${this.stockInputList}`,ratio:`${this.ratioInputList}`},l=await u.post(`${u.defaults.baseURL}api/stock/portfolio/create`,s,{withCredentials:!0});console.log(`success : ${l.data.success}`),l.data.success&&(alert("포트폴리오 생성되었습니다."),this.$router.push("/dashboard/stock/port/list"))}},async beforeCreate(){this.id=this.$store.state.userStore.user.id,this.name=this.$store.state.userStore.user.name;var o={id:this.id},s=await u.get(`${u.defaults.baseURL}api/user/profile/show`,{params:o},{withCredentials:!0});this.user=s.data.user}},P={class:"md:grid md:grid-cols-1 md:gap-6"},V={class:"mt-5 md:col-span-1 md:mt-0"},N={class:"space-y-6 bg-white px-4 py-5 sm:p-6"},U=t("div",{class:"text-lg font-semibold"},"자산 포트폴리오 생성",-1),z={class:"col-span-6 sm:col-span-3"},A=t("label",{for:"title",class:"block text-sm font-medium text-gray-700"},"포트폴리오 이름",-1),B={class:"col-span-6 sm:col-span-3"},E=t("label",{for:"writer",class:"block text-sm font-medium text-gray-700"},"아름",-1),T={class:"col-span-6 sm:col-span-3"},j=t("label",{for:"price",class:"block text-sm font-medium text-gray-700"},"총 비용 ",-1),D={id:"assetInput",class:"col-span-6 mb-8 sm:col-span-3"},F=t("div",{class:"mb-4"},[t("label",{class:"block text-sm font-medium text-gray-700"},"자산 비율")],-1),R={class:"flex-none mr-2"},X={class:"relative flex-auto w-64"},K=["onInput","value"],M={key:0,class:"w-full absolute z-50 overflow-auto touch-auto cursor-default h-40 bg-white border-2 border-solid border-black rounded-md"},W={class:"hover:bg-gray-300 cursor-default my-2 ml-2"},q=["onClick"],G={class:"flex-auto w-24"},H=["onUpdate:modelValue"],J={class:"flex-none ml-4 mt-1"},O={class:"col-span-6 mb-8 sm:col-span-3"},Q={class:"bg-gray-50 px-4 py-3 text-right sm:px-6"};function Y(o,s,l,c,r,i){const f=S("svg-icon");return n(),d("div",P,[t("div",V,[t("div",N,[U,t("div",z,[A,m(t("input",{type:"text",name:"title",id:"title",autocomplete:"title",class:"mt-1 block w-full rounded-md border-2 border-solid border-black sm:text-sm","onUpdate:modelValue":s[0]||(s[0]=e=>r.portName=e)},null,512),[[p,r.portName]])]),t("div",B,[E,m(t("input",{type:"text",name:"writer",id:"writer",autocomplete:"writer",class:"mt-1 block w-full rounded-md border-2 border-solid border-black sm:text-sm","onUpdate:modelValue":s[1]||(s[1]=e=>r.user.name=e),disabled:!0},null,512),[[p,r.user.name]])]),t("div",T,[j,m(t("input",{type:"text",name:"price",id:"price",autocomplete:"price",class:"mt-1 block w-full rounded-md border-2 border-solid border-black sm:text-sm","onUpdate:modelValue":s[2]||(s[2]=e=>r.initialPrice=e)},null,512),[[p,r.initialPrice]])]),t("div",D,[F,(n(!0),d(b,null,k(r.count,e=>(n(),d("div",{class:"flex mb-3 w-full",key:e},[t("div",R,"자산"+h(e)+" :",1),t("div",X,[t("input",{type:"text",name:"stock",id:"stock",autocomplete:"stock",class:"w-full rounded-md border-2 border-solid border-black sm:text-sm",onInput:a=>i.searchStock(a,e-1),value:r.stockInputList[e-1]},null,40,K),r.stockSearchList[e-1].length>0?(n(),d("div",M,[(n(!0),d(b,null,k(r.stockSearchList[e-1],(a,Z)=>(n(),d("div",W,[t("p",{class:"cursor-default",onClick:g=>i.selectStock(e-1,a.symbol,g)},h(a.symbol)+"("+h(a.instrument_name)+") ",9,q)]))),256))])):I("",!0)]),t("div",G,[m(t("input",{type:"text",name:"percent",id:"percent",autocomplete:"percent",class:"ml-2 w-full rounded-md border-2 border-solid border-black sm:text-sm","onUpdate:modelValue":a=>r.ratioInputList[e-1]=a},null,8,H),[[p,r.ratioInputList[e-1]]])]),t("div",J,[_(f,{"fa-icon":c.faXmark,size:16,onClick:a=>i.deleteStockInput(e-1)},null,8,["fa-icon","onClick"])])]))),128))]),t("div",O,[t("button",{class:"w-full inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",onClick:s[3]||(s[3]=(...e)=>i.addStockInput&&i.addStockInput(...e))},[_(f,{"fa-icon":c.faPlus,size:18,class:"mr-2"},null,8,["fa-icon"]),x("자산 추가 ")])])]),t("div",Q,[t("button",{onClick:s[4]||(s[4]=(...e)=>i.addStockPorfolio&&i.addStockPorfolio(...e)),class:"inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"}," 생성 ")])])])}const et=L(C,[["render",Y]]);export{et as default};
