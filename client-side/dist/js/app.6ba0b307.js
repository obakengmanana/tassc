(function(){"use strict";var t={4960:function(t,e,a){var o=a(5130),s=a(6768);const n={id:"app"};function r(t,e,a,o,r,i){const l=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)("div",n,[(0,s.bF)(l)])}var i={name:"App"},l=a(1241);const u=(0,l.A)(i,[["render",r]]);var c=u,d=a(1387),k=a.p+"img/logo4.6976de39.png";const p=t=>((0,s.Qi)("data-v-79436654"),t=t(),(0,s.jt)(),t),m={class:"home-container"},h=p((()=>(0,s.Lk)("div",{class:"logo-container"},[(0,s.Lk)("img",{src:k,alt:"Logo",class:"logo"})],-1)));function g(t,e,a,o,n,r){return(0,s.uX)(),(0,s.CE)("div",m,[h,(0,s.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>r.goToLogin&&r.goToLogin(...t)),class:"btn-primary"},"Proceed")])}a(4114);var f={name:"HomePage",methods:{goToLogin(){this.$router.push("/login")}}};const L=(0,l.A)(f,[["render",g],["__scopeId","data-v-79436654"]]);var v=L;const b=t=>((0,s.Qi)("data-v-1d407c16"),t=t(),(0,s.jt)(),t),y={class:"navbar"},w={class:"navbar-logo"},T=b((()=>(0,s.Lk)("img",{src:k,alt:"Logo",class:"logo"},null,-1))),D={class:"login-container"},E=b((()=>(0,s.Lk)("h1",null,"Login",-1))),C=b((()=>(0,s.Lk)("p",null,"Enter your email below to login to your account",-1))),_={class:"form-group"},P=b((()=>(0,s.Lk)("label",{for:"email"},"Email",-1))),$={class:"form-group"},A=b((()=>(0,s.Lk)("label",{for:"password"},"Password",-1))),S={class:"password-container"},j=b((()=>(0,s.Lk)("a",{href:"#",class:"forgot-password"},"Forgot your password?",-1))),x=b((()=>(0,s.Lk)("button",{type:"submit",class:"btn-primary"},"Login",-1))),O={class:"sign-up"};function U(t,e,a,n,r,i){const l=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("nav",y,[(0,s.Lk)("div",w,[(0,s.bF)(l,{to:"/"},{default:(0,s.k6)((()=>[T])),_:1})])]),(0,s.Lk)("div",D,[E,C,(0,s.Lk)("form",{onSubmit:e[2]||(e[2]=(0,o.D$)(((...t)=>i.handleLogin&&i.handleLogin(...t)),["prevent"]))},[(0,s.Lk)("div",_,[P,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>r.email=t),type:"email",id:"email",placeholder:"m@example.com",required:""},null,512),[[o.Jo,r.email]])]),(0,s.Lk)("div",$,[A,(0,s.Lk)("div",S,[(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>r.password=t),type:"password",id:"password",placeholder:"Password",required:""},null,512),[[o.Jo,r.password]]),j])]),x],32),(0,s.Lk)("p",O,[(0,s.eW)(" Don't have an account? "),(0,s.bF)(l,{to:"/register"},{default:(0,s.k6)((()=>[(0,s.eW)("Sign up")])),_:1})])])])}var X=a(4373);const I="http://localhost:5000/api/auth",N=async t=>{const e=await X.A.post(`${I}/register`,t);return e.data},F=async t=>{const e=await X.A.post(`${I}/login`,t);return e.data};async function V(){localStorage.removeItem("token")}const q=async()=>{try{const t=await X.A.get(`${I}/user`,{headers:{"x-auth-token":localStorage.getItem("token")}});return t.data}catch(t){throw console.error("Error fetching user:",t),t}};var J={name:"UserLogin",data(){return{email:"",password:""}},methods:{async handleLogin(){try{const{token:t}=await F({email:this.email,password:this.password});localStorage.setItem("token",t),this.$router.push("/tasks")}catch(t){console.error("Login error:",t)}},loginWithGoogle(){console.log("Logging in with Google")}}};const B=(0,l.A)(J,[["render",U],["__scopeId","data-v-1d407c16"]]);var Q=B;const W=t=>((0,s.Qi)("data-v-7ef021b0"),t=t(),(0,s.jt)(),t),R={class:"navbar"},G={class:"navbar-logo"},M=W((()=>(0,s.Lk)("img",{src:k,alt:"Logo",class:"logo"},null,-1))),z={class:"register-container"},H=W((()=>(0,s.Lk)("h1",null,"Register",-1))),Y={class:"form-group"},K=W((()=>(0,s.Lk)("label",{for:"name"},"Name",-1))),Z={class:"form-group"},tt=W((()=>(0,s.Lk)("label",{for:"email"},"Email",-1))),et={class:"form-group"},at=W((()=>(0,s.Lk)("label",{for:"password"},"Password",-1))),ot=W((()=>(0,s.Lk)("button",{type:"submit",class:"btn-primary"},"Register",-1))),st={class:"back-to-login"};function nt(t,e,a,n,r,i){const l=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("nav",R,[(0,s.Lk)("div",G,[(0,s.bF)(l,{to:"/login"},{default:(0,s.k6)((()=>[M])),_:1})])]),(0,s.Lk)("div",z,[H,(0,s.Lk)("form",{onSubmit:e[3]||(e[3]=(0,o.D$)(((...t)=>i.handleRegister&&i.handleRegister(...t)),["prevent"]))},[(0,s.Lk)("div",Y,[K,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>r.name=t),type:"text",id:"name",placeholder:"Name",required:""},null,512),[[o.Jo,r.name]])]),(0,s.Lk)("div",Z,[tt,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>r.email=t),type:"email",id:"email",placeholder:"Email",required:""},null,512),[[o.Jo,r.email]])]),(0,s.Lk)("div",et,[at,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>r.password=t),type:"password",id:"password",placeholder:"Password",required:""},null,512),[[o.Jo,r.password]])]),ot],32),(0,s.Lk)("div",st,[(0,s.Lk)("button",{onClick:e[4]||(e[4]=(...t)=>i.goToLogin&&i.goToLogin(...t)),class:"btn-secondary"},"Back to Login")])])])}var rt={name:"UserRegister",data(){return{name:"",email:"",password:""}},methods:{async handleRegister(){try{const{token:t}=await N({name:this.name,email:this.email,password:this.password});localStorage.setItem("token",t),this.$router.push("/")}catch(t){console.error("Registration error:",t)}},goToLogin(){this.$router.push("/login")}}};const it=(0,l.A)(rt,[["render",nt],["__scopeId","data-v-7ef021b0"]]);var lt=it,ut=a(4232);const ct=t=>((0,s.Qi)("data-v-652b7148"),t=t(),(0,s.jt)(),t),dt={class:"navbar"},kt={class:"navbar-logo"},pt=ct((()=>(0,s.Lk)("img",{src:k,alt:"Logo",class:"logo"},null,-1))),mt={class:"task-list-container"},ht={class:"header"},gt=ct((()=>(0,s.Lk)("h1",null,"Tasks",-1))),ft={class:"header-buttons"},Lt={key:0,class:"user-info"},vt={class:"user-card"},bt={class:"user-details"},yt={class:"user-name"},wt={class:"user-email"},Tt={key:1,class:"task-table"},Dt=ct((()=>(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th",null,"Task Name"),(0,s.Lk)("th",null,"Description"),(0,s.Lk)("th",null,"Status"),(0,s.Lk)("th",null,"Due Date"),(0,s.Lk)("th",null,"Actions")])],-1))),Et=["onClick"],Ct=["onClick"],_t=["onClick"],Pt={key:2},$t={key:3,class:"popup"},At=ct((()=>(0,s.Lk)("p",null,"Task has been deleted successfully!",-1))),St={key:4,class:"confirm-dialog"},jt=ct((()=>(0,s.Lk)("p",null,"Are you sure you want to delete this task?",-1)));function xt(t,e,a,o,n,r){const i=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("nav",dt,[(0,s.Lk)("div",kt,[(0,s.bF)(i,{to:"/"},{default:(0,s.k6)((()=>[pt])),_:1})])]),(0,s.Lk)("div",mt,[(0,s.Lk)("div",ht,[gt,(0,s.Lk)("div",ft,[(0,s.bF)(i,{to:"/profile",class:"btn-secondary"},{default:(0,s.k6)((()=>[(0,s.eW)("Profile")])),_:1}),(0,s.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>r.logout&&r.logout(...t)),class:"btn-secondary"},"Logout"),(0,s.bF)(i,{to:"/add-task",class:"btn-primary"},{default:(0,s.k6)((()=>[(0,s.eW)("Add Task")])),_:1}),(0,s.Lk)("button",{onClick:e[1]||(e[1]=(...t)=>r.exportToPDF&&r.exportToPDF(...t)),class:"btn-primary"},"Export to PDF")])]),n.user?((0,s.uX)(),(0,s.CE)("div",Lt,[(0,s.Lk)("div",vt,[(0,s.Lk)("div",bt,[(0,s.Lk)("p",yt,[(0,s.eW)("Logged in as: "),(0,s.Lk)("strong",null,(0,ut.v_)(n.user.name),1)]),(0,s.Lk)("p",wt,[(0,s.eW)("Email: "),(0,s.Lk)("strong",null,(0,ut.v_)(n.user.email),1)])])])])):(0,s.Q3)("",!0),n.tasks.length?((0,s.uX)(),(0,s.CE)("table",Tt,[Dt,(0,s.Lk)("tbody",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.tasks,(t=>((0,s.uX)(),(0,s.CE)("tr",{key:t._id},[(0,s.Lk)("td",null,(0,ut.v_)(t.name),1),(0,s.Lk)("td",null,(0,ut.v_)(t.description),1),(0,s.Lk)("td",null,(0,ut.v_)(t.status),1),(0,s.Lk)("td",null,(0,ut.v_)(r.formatDate(t.dueDate)),1),(0,s.Lk)("td",null,[(0,s.Lk)("button",{onClick:e=>r.viewDetails(t._id),class:"btn-action"}," View Details ",8,Et),(0,s.Lk)("button",{onClick:e=>r.editTask(t._id),class:"btn-action"},"Edit",8,Ct),(0,s.Lk)("button",{onClick:e=>r.confirmDelete(t._id),class:"btn-action"}," Delete ",8,_t)])])))),128))])])):((0,s.uX)(),(0,s.CE)("p",Pt,"No tasks available")),n.showPopup?((0,s.uX)(),(0,s.CE)("div",$t,[At,(0,s.Lk)("button",{onClick:e[2]||(e[2]=(...t)=>r.goToTasks&&r.goToTasks(...t))},"Go Back to Task List")])):(0,s.Q3)("",!0),n.showConfirmDialog?((0,s.uX)(),(0,s.CE)("div",St,[jt,(0,s.Lk)("button",{onClick:e[3]||(e[3]=t=>r.deleteTask(n.taskToDelete)),class:"btn-primary"},"Yes"),(0,s.Lk)("button",{onClick:e[4]||(e[4]=t=>n.showConfirmDialog=!1),class:"btn-secondary"}," No ")])):(0,s.Q3)("",!0)])])}const Ot="http://localhost:5000/api/tasks",Ut=()=>{const t=localStorage.getItem("token");return{headers:{"Content-Type":"application/json","x-auth-token":t}}},Xt=async t=>{try{const e=await X.A.post(Ot,t,Ut());return e.data}catch(e){throw e.response.data}},It=async(t,e)=>{try{const a=await X.A.put(`${Ot}/${t}`,e,Ut());return a.data}catch(a){throw a.response.data}},Nt=async t=>{try{const e=await X.A.delete(`${Ot}/${t}`,Ut());return e.data}catch(e){throw e.response.data}},Ft=async()=>{try{const t=await X.A.get(Ot,Ut());return t.data}catch(t){throw t.response.data}},Vt=async t=>{try{const e=await X.A.get(`${Ot}/${t}`,Ut());return e.data}catch(e){throw e.response.data}};var qt=a(1749),Jt=(a(5839),{name:"TaskList",data(){return{tasks:[],showPopup:!1,showConfirmDialog:!1,taskToDelete:null,user:null}},async created(){try{const t=await Ft();this.tasks=t;const e=await q();this.user=e}catch(t){console.error("Error fetching data:",t)}},methods:{viewDetails(t){this.$router.push(`/task/${t}`)},editTask(t){this.$router.push(`/edit-task/${t}`)},confirmDelete(t){this.taskToDelete=t,this.showConfirmDialog=!0},async deleteTask(t){try{await Nt(t),this.tasks=this.tasks.filter((e=>e._id!==t)),this.showConfirmDialog=!1,this.showPopup=!0}catch(e){console.error("Error deleting task:",e)}},async logout(){try{await V(),localStorage.removeItem("token"),this.$router.push("/login")}catch(t){console.error("Error during logout:",t)}},formatDate(t){return new Date(t).toLocaleDateString("en-GB")},goToTasks(){this.$router.push("/tasks"),this.showPopup=!1},exportToPDF(){const t=new qt["default"];t.setFontSize(12);const e=t.internal.pageSize.getWidth(),a="Tasks List",o=t.getTextWidth(a),s=(e-o)/2;t.text(a,s,10);const n=["Task Name","Description","Status","Due Date"],r=this.tasks.map((t=>[t.name,t.description,t.status,this.formatDate(t.dueDate)]));t.autoTable(n,r,{startY:20}),t.save("tasks-list.pdf")}}});const Bt=(0,l.A)(Jt,[["render",xt],["__scopeId","data-v-652b7148"]]);var Qt=Bt;const Wt=t=>((0,s.Qi)("data-v-a46a551e"),t=t(),(0,s.jt)(),t),Rt={class:"task-details-container"},Gt=Wt((()=>(0,s.Lk)("h1",null,"Task Details",-1))),Mt={key:0,class:"task-details"},zt=Wt((()=>(0,s.Lk)("strong",null,"Name:",-1))),Ht=Wt((()=>(0,s.Lk)("strong",null,"Description:",-1))),Yt=Wt((()=>(0,s.Lk)("strong",null,"Status:",-1))),Kt=Wt((()=>(0,s.Lk)("strong",null,"Due Date:",-1))),Zt={key:1};function te(t,e,a,o,n,r){return(0,s.uX)(),(0,s.CE)("div",Rt,[Gt,n.task?((0,s.uX)(),(0,s.CE)("div",Mt,[(0,s.Lk)("p",null,[zt,(0,s.eW)(" "+(0,ut.v_)(n.task.name),1)]),(0,s.Lk)("p",null,[Ht,(0,s.eW)(" "+(0,ut.v_)(n.task.description),1)]),(0,s.Lk)("p",null,[Yt,(0,s.eW)(" "+(0,ut.v_)(n.task.status),1)]),(0,s.Lk)("p",null,[Kt,(0,s.eW)(" "+(0,ut.v_)(r.formatDate(n.task.dueDate)),1)])])):((0,s.uX)(),(0,s.CE)("p",Zt,"Loading task details...")),(0,s.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>r.goBack&&r.goBack(...t)),class:"btn-primary"},"Back to Tasks")])}var ee={name:"TaskDetails",data(){return{task:null}},methods:{goBack(){this.$router.push("/tasks")},formatDate(t){return new Date(t).toLocaleDateString("en-GB")}},async mounted(){try{const t=this.$route.params.id,e=await Vt(t);this.task=e}catch(t){console.error("Error fetching task details:",t)}}};const ae=(0,l.A)(ee,[["render",te],["__scopeId","data-v-a46a551e"]]);var oe=ae;const se=t=>((0,s.Qi)("data-v-5d83cf00"),t=t(),(0,s.jt)(),t),ne={class:"navbar"},re={class:"navbar-logo"},ie=se((()=>(0,s.Lk)("img",{src:k,alt:"Logo",class:"logo"},null,-1))),le={class:"add-task-container"},ue=se((()=>(0,s.Lk)("h1",null,"Add New Task",-1))),ce={class:"form-group"},de=se((()=>(0,s.Lk)("label",{for:"name"},"Task Name",-1))),ke={class:"form-group"},pe=se((()=>(0,s.Lk)("label",{for:"description"},"Description",-1))),me={class:"form-group"},he=se((()=>(0,s.Lk)("label",{for:"status"},"Status",-1))),ge=se((()=>(0,s.Lk)("option",null,"Pending",-1))),fe=se((()=>(0,s.Lk)("option",null,"In Progress",-1))),Le=se((()=>(0,s.Lk)("option",null,"Completed",-1))),ve=[ge,fe,Le],be={class:"form-group"},ye=se((()=>(0,s.Lk)("label",{for:"dueDate"},"Due Date",-1))),we=se((()=>(0,s.Lk)("button",{type:"submit",class:"btn-primary"},"Add Task",-1)));function Te(t,e,a,n,r,i){const l=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("nav",ne,[(0,s.Lk)("div",re,[(0,s.bF)(l,{to:"/tasks"},{default:(0,s.k6)((()=>[ie])),_:1})])]),(0,s.Lk)("div",le,[ue,(0,s.Lk)("form",{onSubmit:e[4]||(e[4]=(0,o.D$)(((...t)=>i.handleSubmit&&i.handleSubmit(...t)),["prevent"]))},[(0,s.Lk)("div",ce,[de,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>r.task.name=t),type:"text",id:"name",placeholder:"Task Name",required:""},null,512),[[o.Jo,r.task.name]])]),(0,s.Lk)("div",ke,[pe,(0,s.bo)((0,s.Lk)("textarea",{"onUpdate:modelValue":e[1]||(e[1]=t=>r.task.description=t),id:"description",placeholder:"Description",required:""},null,512),[[o.Jo,r.task.description]])]),(0,s.Lk)("div",me,[he,(0,s.bo)((0,s.Lk)("select",{"onUpdate:modelValue":e[2]||(e[2]=t=>r.task.status=t),id:"status",required:""},ve,512),[[o.u1,r.task.status]])]),(0,s.Lk)("div",be,[ye,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>r.task.dueDate=t),type:"date",id:"dueDate",required:""},null,512),[[o.Jo,r.task.dueDate]])]),we],32)])])}var De={name:"AddTask",data(){return{task:{name:"",description:"",status:"Pending",dueDate:""}}},methods:{async handleSubmit(){try{await Xt(this.task),this.$router.push("/tasks")}catch(t){console.error("Error adding task:",t)}}}};const Ee=(0,l.A)(De,[["render",Te],["__scopeId","data-v-5d83cf00"]]);var Ce=Ee;const _e=t=>((0,s.Qi)("data-v-749ab72c"),t=t(),(0,s.jt)(),t),Pe={class:"edit-task-container"},$e=_e((()=>(0,s.Lk)("h1",null,"Edit Task",-1))),Ae={class:"form-group"},Se=_e((()=>(0,s.Lk)("label",{for:"name"},"Task Name",-1))),je={class:"form-group"},xe=_e((()=>(0,s.Lk)("label",{for:"description"},"Description",-1))),Oe={class:"form-group"},Ue=_e((()=>(0,s.Lk)("label",{for:"status"},"Status",-1))),Xe=_e((()=>(0,s.Lk)("option",{value:"Pending"},"Pending",-1))),Ie=_e((()=>(0,s.Lk)("option",{value:"In Progress"},"In Progress",-1))),Ne=_e((()=>(0,s.Lk)("option",{value:"Completed"},"Completed",-1))),Fe=[Xe,Ie,Ne],Ve={class:"form-group"},qe=_e((()=>(0,s.Lk)("label",{for:"dueDate"},"Due Date",-1))),Je=_e((()=>(0,s.Lk)("button",{type:"submit",class:"btn-primary"},"Save Changes",-1))),Be={class:"back-to-tasks"},Qe={key:0,class:"popup"},We=_e((()=>(0,s.Lk)("p",null,"Task has been updated successfully!",-1)));function Re(t,e,a,n,r,i){return(0,s.uX)(),(0,s.CE)("div",Pe,[$e,(0,s.Lk)("form",{onSubmit:e[4]||(e[4]=(0,o.D$)(((...t)=>i.handleEdit&&i.handleEdit(...t)),["prevent"]))},[(0,s.Lk)("div",Ae,[Se,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>r.task.name=t),type:"text",id:"name",placeholder:"Task Name",required:""},null,512),[[o.Jo,r.task.name]])]),(0,s.Lk)("div",je,[xe,(0,s.bo)((0,s.Lk)("textarea",{"onUpdate:modelValue":e[1]||(e[1]=t=>r.task.description=t),id:"description",placeholder:"Description",required:""},null,512),[[o.Jo,r.task.description]])]),(0,s.Lk)("div",Oe,[Ue,(0,s.bo)((0,s.Lk)("select",{"onUpdate:modelValue":e[2]||(e[2]=t=>r.task.status=t),id:"status",required:""},Fe,512),[[o.u1,r.task.status]])]),(0,s.Lk)("div",Ve,[qe,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>r.task.dueDate=t),type:"date",id:"dueDate",required:""},null,512),[[o.Jo,r.task.dueDate]])]),Je],32),(0,s.Lk)("div",Be,[(0,s.Lk)("button",{onClick:e[5]||(e[5]=(...t)=>i.goToTasks&&i.goToTasks(...t)),class:"btn-secondary"},"Back to Tasks")]),r.showPopup?((0,s.uX)(),(0,s.CE)("div",Qe,[We,(0,s.Lk)("button",{onClick:e[6]||(e[6]=(...t)=>i.goToTasks&&i.goToTasks(...t))},"Go Back to Task List")])):(0,s.Q3)("",!0)])}var Ge={name:"EditTask",data(){return{task:{name:"",description:"",status:"",dueDate:""},showPopup:!1}},async created(){try{const t=this.$route.params.id,e=await Vt(t);this.task=e}catch(t){console.error("Error fetching task:",t)}},methods:{async handleEdit(){try{await It(this.task._id,this.task),this.showPopup=!0}catch(t){console.error("Error updating task:",t)}},goToTasks(){this.$router.push("/tasks"),this.showPopup=!1}}};const Me=(0,l.A)(Ge,[["render",Re],["__scopeId","data-v-749ab72c"]]);var ze=Me;const He=t=>((0,s.Qi)("data-v-77505a63"),t=t(),(0,s.jt)(),t),Ye={class:"navbar"},Ke={class:"navbar-logo"},Ze=He((()=>(0,s.Lk)("img",{src:k,alt:"Logo",class:"logo"},null,-1))),ta={class:"edit-profile-container"},ea=He((()=>(0,s.Lk)("h1",null,"Edit Profile",-1))),aa={class:"form-group"},oa=He((()=>(0,s.Lk)("label",{for:"name"},"Name",-1))),sa={class:"form-group"},na=He((()=>(0,s.Lk)("label",{for:"email"},"Email",-1))),ra={class:"form-group"},ia=He((()=>(0,s.Lk)("label",{for:"password"},"Password",-1))),la=He((()=>(0,s.Lk)("button",{type:"submit",class:"btn-primary"},"Save Changes",-1))),ua={class:"back-to-profile"},ca={key:0,class:"popup"},da=He((()=>(0,s.Lk)("p",null,"Changes have been saved successfully!",-1)));function ka(t,e,a,n,r,i){const l=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("nav",Ye,[(0,s.Lk)("div",Ke,[(0,s.bF)(l,{to:"/tasks"},{default:(0,s.k6)((()=>[Ze])),_:1})])]),(0,s.Lk)("div",ta,[ea,(0,s.Lk)("form",{onSubmit:e[3]||(e[3]=(0,o.D$)(((...t)=>i.handleEdit&&i.handleEdit(...t)),["prevent"]))},[(0,s.Lk)("div",aa,[oa,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>r.user.name=t),type:"text",id:"name",placeholder:"Name",required:""},null,512),[[o.Jo,r.user.name]])]),(0,s.Lk)("div",sa,[na,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>r.user.email=t),type:"email",id:"email",placeholder:"Email",required:""},null,512),[[o.Jo,r.user.email]])]),(0,s.Lk)("div",ra,[ia,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>r.user.password=t),type:"password",id:"password",placeholder:"New Password"},null,512),[[o.Jo,r.user.password]])]),la],32),(0,s.Lk)("div",ua,[(0,s.Lk)("button",{onClick:e[4]||(e[4]=(...t)=>i.goToProfile&&i.goToProfile(...t)),class:"btn-secondary"}," Back to Profile ")]),r.showPopup?((0,s.uX)(),(0,s.CE)("div",ca,[da,(0,s.Lk)("button",{onClick:e[5]||(e[5]=(...t)=>i.goToTasks&&i.goToTasks(...t))},"Go Back to Task List")])):(0,s.Q3)("",!0)])])}const pa="http://localhost:5000/api/users",ma=()=>{const t=localStorage.getItem("token");return{headers:{"Content-Type":"application/json","x-auth-token":t}}},ha=async()=>{try{const t=await X.A.get(`${pa}/me`,ma());return t.data}catch(t){throw t.response.data}},ga=async t=>{try{const e=await X.A.put(`${pa}/me`,t,ma());return e.data}catch(e){throw e.response.data}};var fa={name:"EditProfile",data(){return{user:{name:"",email:"",password:""},showPopup:!1}},async created(){try{const t=await ha();this.user={...t}}catch(t){console.error("Error fetching user profile:",t)}},methods:{async handleEdit(){try{await ga(this.user),this.showPopup=!0}catch(t){console.error("Error updating profile:",t)}},goToProfile(){this.$router.push("/profile")},goToTasks(){this.$router.push("/tasks"),this.showPopup=!1}}};const La=(0,l.A)(fa,[["render",ka],["__scopeId","data-v-77505a63"]]);var va=La;const ba=[{path:"/",name:"HomePage",component:v},{path:"/login",name:"UserLogin",component:Q},{path:"/register",name:"UserRegister",component:lt},{path:"/tasks",name:"TaskList",component:Qt},{path:"/task/:id",name:"TaskDetails",component:oe,props:!0},{path:"/add-task",name:"AddTask",component:Ce},{path:"/edit-task/:id",name:"EditTask",component:ze,props:!0},{path:"/profile",name:"EditProfile",component:va}],ya=(0,d.aE)({history:(0,d.LA)(),routes:ba});var wa=ya;const Ta=(0,o.Ef)(c);Ta.use(wa),Ta.mount("#app")}},e={};function a(o){var s=e[o];if(void 0!==s)return s.exports;var n=e[o]={exports:{}};return t[o].call(n.exports,n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,o,s,n){if(!o){var r=1/0;for(c=0;c<t.length;c++){o=t[c][0],s=t[c][1],n=t[c][2];for(var i=!0,l=0;l<o.length;l++)(!1&n||r>=n)&&Object.keys(a.O).every((function(t){return a.O[t](o[l])}))?o.splice(l--,1):(i=!1,n<r&&(r=n));if(i){t.splice(c--,1);var u=s();void 0!==u&&(e=u)}}return e}n=n||0;for(var c=t.length;c>0&&t[c-1][2]>n;c--)t[c]=t[c-1];t[c]=[o,s,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};a.t=function(o,s){if(1&s&&(o=this(o)),8&s)return o;if("object"===typeof o&&o){if(4&s&&o.__esModule)return o;if(16&s&&"function"===typeof o.then)return o}var n=Object.create(null);a.r(n);var r={};t=t||[null,e({}),e([]),e(e)];for(var i=2&s&&o;"object"==typeof i&&!~t.indexOf(i);i=e(i))Object.getOwnPropertyNames(i).forEach((function(t){r[t]=function(){return o[t]}}));return r["default"]=function(){return o},a.d(n,r),n}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,o){return a.f[o](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+t+"."+{125:"ac0927e9",179:"dc84fd86",427:"809b2683"}[t]+".js"}}(),function(){a.miniCssF=function(t){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="client-side:";a.l=function(o,s,n,r){if(t[o])t[o].push(s);else{var i,l;if(void 0!==n)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+n){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",e+n),i.src=o),t[o]=[s];var k=function(e,a){i.onerror=i.onload=null,clearTimeout(p);var s=t[o];if(delete t[o],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((function(t){return t(a)})),e)return e(a)},p=setTimeout(k.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=k.bind(null,i.onerror),i.onload=k.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={524:0};a.f.j=function(e,o){var s=a.o(t,e)?t[e]:void 0;if(0!==s)if(s)o.push(s[2]);else{var n=new Promise((function(a,o){s=t[e]=[a,o]}));o.push(s[2]=n);var r=a.p+a.u(e),i=new Error,l=function(o){if(a.o(t,e)&&(s=t[e],0!==s&&(t[e]=void 0),s)){var n=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",i.name="ChunkLoadError",i.type=n,i.request=r,s[1](i)}};a.l(r,l,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,o){var s,n,r=o[0],i=o[1],l=o[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(s in i)a.o(i,s)&&(a.m[s]=i[s]);if(l)var c=l(a)}for(e&&e(o);u<r.length;u++)n=r[u],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(c)},o=self["webpackChunkclient_side"]=self["webpackChunkclient_side"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[504],(function(){return a(4960)}));o=a.O(o)})();
//# sourceMappingURL=app.6ba0b307.js.map