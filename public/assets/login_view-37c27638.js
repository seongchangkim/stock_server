import{m,r as c,o as p,c as u,a as r,P as h,e as a,f as g,w as f,Q as w}from"./index-d85befdf.js";import{a as i}from"./axios-a900fd7e.js";import{U as n}from"./user_input_form_component-eac8d19e.js";import{U as l}from"./user_button_1-5df50d00.js";const C={class:"flex items-center justify-center h-screen px-6 bg-gray-200"},_={class:"w-full max-w-sm p-6 bg-white rounded-xl shadow-md"},v=w('<div class="flex items-center justify-center"><svg class="w-10 h-10" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path></svg><span class="text-2xl font-semibold text-gray-700">V-Dashboard</span></div>',1),x={class:"mt-4 text-sm font-display font-semibold text-gray-700 text-center"},b=r("span",{class:"cursor-pointer text-indigo-600 hover:text-indigo-800"},"회원가입하세요",-1),k={components:{UserInputForm:n,UserButton1:l},data(){return{email:"",password:""}},computed:m({user:"getUser"}),methods:{async login(){var s=this.email,e=this.password;console.log(`email : ${s}, password : ${e}`);var o={email:s,password:e};try{await i.post(`${i.defaults.baseURL}api/user/login`,o,{withCredentials:!0}).then(t=>{console.log(document.cookie),t.data.loginSuccess?this.$router.push("/dashboard/home"):alert(t.data.message)})}catch(t){alert(`오류 : ${t}`)}},valueChange(s,e){console.log(`value : ${s}`),console.log(`value : ${e}`),e==="email"?this.email=s:e==="password"&&(this.password=s)}}},$=Object.assign(k,{__name:"login_view",setup(s){return(e,o)=>{const t=c("router-link");return p(),u("div",C,[r("div",_,[v,r("form",{class:"mt-4",onSubmit:o[0]||(o[0]=h((...d)=>e.login&&e.login(...d),["prevent"]))},[a(n,{title:"이메일",type:"email",onInputFormValue:e.valueChange},null,8,["onInputFormValue"]),a(n,{title:"비밀번호",type:"password",onInputFormValue:e.valueChange},null,8,["onInputFormValue"]),r("div",x,[g(" 만약 회원이 존재하지 않으면 "),a(t,{to:"/users/register"},{default:f(()=>[b]),_:1})]),a(l,{content:"로그인"})],32)])])}}});export{$ as default};
