import{_ as u,o as n,c as o,a as r,t as d}from"./index-e1813ca6.js";const c={name:"UserInputForm",data(){return{value:""}},props:{title:{type:String,required:!0},type:{type:String,required:!0},text:{type:String,default:""}},methods:{typeInputValue(t){this.type==="tel"?this.getPhoneNumber(t.target.value):this.value=t.target.value,this.$emit("inputFormValue",this.value,this.type)},getPhoneNumber(t){t=t.replace(/[^0-9]/g,""),console.log(`phoneNumber : ${t}`),t.length<4?this.value=t:t.length===4?this.value=`${t.substr(0,3)}-${t.substr(3)}`:t.length===7&&(this.value=`${t.substr(0,3)}-${t.substr(3,6)}-${t.substr(6)}`)}},mounted(){this.value=this.text}},g={class:"mt-3"},p={class:"text-sm font-semibold text-gray-700"},y=["type","value"];function f(t,e,s,v,a,l){return n(),o("div",g,[r("label",p,d(s.title),1),r("input",{type:s.type,class:"w-full px-3 py-2 border border-gray-200 rounded-md focus:border-indigo-600 focus:ring-indigo-500",value:a.value,onInput:e[0]||(e[0]=(...i)=>l.typeInputValue&&l.typeInputValue(...i)),required:""},null,40,y)])}const h=u(c,[["render",f]]);export{h as U};
