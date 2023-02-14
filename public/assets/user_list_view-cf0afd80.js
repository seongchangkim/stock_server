import{r as f,o as i,c as a,a as e,y as g,z as h,F as u,g as y,e as l,b as x,w as L,t as n,A as w}from"./index-84ba1e36.js";import{a as d}from"./axios-a900fd7e.js";import{P as p,h as v}from"./pagination-0fb0ce4d.js";import{N as m}from"./nothing_list_view-e39fbc3e.js";const U={class:"flex justify-between text-right sm:px-1"},k=e("div",{class:"text-2xl font-bold"},"회원 목록",-1),I={class:"flex flex-col mt-8"},C={class:"py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"},P={class:"inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"},S={class:"min-w-full"},V={class:"px-3 border-b border-gray-200 bg-gray-50"},D=e("th",{class:"px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"}," 이름 ",-1),N=e("th",{class:"px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"}," 권한 ",-1),$=e("th",{class:"px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"}," 생성 날짜 ",-1),j={class:"bg-white"},A={class:"px-3 py-4 border-b border-gray-200 whitespace-nowrap text-center"},B=["id","value"],E={class:"px-6 py-4 border-b border-gray-200 whitespace-nowrap"},M={class:"flex items-center"},R={class:"flex-shrink-0 w-10 h-10"},F=["src"],H={class:"ml-4"},z={class:"text-sm font-medium leading-5 text-gray-900"},O={class:"text-sm leading-5 text-gray-500"},q={class:"px-6 py-4 border-b border-gray-200 whitespace-nowrap"},G={class:"text-sm leading-5 text-gray-500"},J={key:0},K={key:1},Q={class:"px-6 py-4 border-b border-gray-200 whitespace-nowrap"},T={class:"text-sm leading-5 text-gray-500"},W={key:1},X={colspan:4},Y={class:"h-96 flex items-center justify-center"},Z={key:0},ee={data(){return{userList:[],checkUserIdList:[],selectUserIdList:[],page:1,totalPage:1}},components:{NothingListView:m,Pagination:p},computed:{allSelected:{get:function(){return this.checkUserIdList.length===this.selectUserIdList.length&&this.userList!=""},set:function(s){this.selectUserIdList=s?this.checkUserIdList:[]}}},methods:{getImageUrl(s){const t=s??"/src/assets/default-user-profile.png";return new URL(t,import.meta.url).href},async deleteUserList(){if(console.log("click delete!!"),console.log(`bool : ${this.selectUserIdList}`),this.selectUserIdList.length==0){alert("삭제하고자 사용자를 선택하세요!!");return}console.log("delete continue!!");try{var s={ids:this.selectUserIdList},t=await d.delete(`${d.defaults.baseURL}api/admin/user/leave`,{data:s},{withCredentials:!0});t.data.success&&this.$router.go("/dashboard/users/list")}catch(o){console.log(`e : ${o}`)}},renderingUserList(s){this.checkUserIdList=[],s.forEach(t=>this.checkUserIdList.push(t.id)),this.userList=s},updateCurrentPage(s){this.page=s}},async beforeCreate(){var s=await d.get(`${d.defaults.baseURL}api/admin/users/list?page=1`,{withCredentials:!0});s.data.userList.forEach(t=>this.checkUserIdList.push(t.id)),this.userList=s.data.userList,this.totalPage=s.data.totalPage}},ie=Object.assign(ee,{__name:"user_list_view",setup(s){return(t,o)=>{const _=f("router-link");return i(),a(u,null,[e("div",U,[k,e("div",null,[e("button",{onClick:o[0]||(o[0]=(...r)=>t.deleteUserList&&t.deleteUserList(...r)),class:"inline-flex justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"}," 회원 삭제 ")])]),e("div",I,[e("div",C,[e("div",P,[e("table",S,[e("thead",null,[e("tr",null,[e("th",V,[g(e("input",{type:"checkbox",value:"all","onUpdate:modelValue":o[1]||(o[1]=r=>t.allSelected=r)},null,512),[[h,t.allSelected]])]),D,N,$])]),e("tbody",j,[t.userList!=""?(i(!0),a(u,{key:0},y(t.userList,(r,c)=>(i(),a("tr",{key:c},[e("td",A,[g((i(),a("input",{type:"checkbox",id:r.id,value:r.id,"onUpdate:modelValue":o[2]||(o[2]=b=>t.selectUserIdList=b),key:c},null,8,B)),[[h,t.selectUserIdList]])]),e("td",E,[e("div",M,[e("div",R,[e("img",{class:"w-10 h-10 rounded-full",src:t.getImageUrl(r.profile_image),alt:""},null,8,F)]),l(_,{to:{name:"UserDetail",params:{id:r.id}}},{default:L(()=>[e("div",H,[e("div",z,n(r.name),1),e("div",O,n(r.email),1)])]),_:2},1032,["to"])])]),e("td",q,[e("div",G,[r.Auth.role==0?(i(),a("p",J,"일반회원")):(i(),a("p",K,"관리자"))])]),e("td",Q,[e("div",T,n(w(v)(r.createdAt).format("yyyy-MM-DD HH:mm:ss")),1)])]))),128)):(i(),a("tr",W,[e("td",X,[e("div",Y,[l(m,{imageUrl:"icons-user-32",content:"존재하는 사용자 정보가 없습니다."})])])]))])]),t.userList!=""?(i(),a("div",Z,[l(p,{page:t.page,totalPage:t.totalPage,subUrl:"/admin/users",onSetList:t.renderingUserList,onSetCurrentPage:t.updateCurrentPage},null,8,["page","totalPage","onSetList","onSetCurrentPage"])])):x("",!0)])])])],64)}}});export{ie as default};
