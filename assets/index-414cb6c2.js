import{d as U,r as u,a as c,o as A,b as M,e,f as o,p as $,q as z,g as m,M as h,A as v,u as l,T as R,U as S,n as x,l as j,y as O,V as W,k as X,j as G,W as H,X as J,h as K,m as L,_ as Q}from"./index-fdcc1e3a.js";/* empty css                     *//* empty css                       *//* empty css                   *//* empty css                  *//* empty css               */import{x as Y}from"./index-a09a7843.js";const Z={class:"table-warp"},ee={style:{display:"flex","align-items":"center"}},te={style:{"margin-left":"10px"}},oe=U({__name:"index",setup(ae){const i=u(!1);c({});const b=u("编辑");u("default");const C=u();let a=c({id:1,storeId:2,storeName:"",status:"",origin:"",phone:"",concat:"",date:"",createTime:"",storeCount:""});const V=c({storeName:[{required:!0,message:"Please input Activity name",trigger:"blur"}],status:[{required:!0,message:"Please select Activity zone",trigger:"blur"}],origin:[{required:!0,message:"Please select Activity count",trigger:"change"}],date:[{type:"date",required:!0,message:"Please pick a date",trigger:"change"}],phone:[{type:"array",required:!0,message:"Please select at least one activity type",trigger:"change"}],concat:[{required:!0,message:"Please select activity resource",trigger:"change"}]}),N=()=>{a={},i.value=!1},T=()=>{a={},i.value=!0,b.value="新建"},I=(_,s)=>{i.value=!0,a=s},E=(_,s)=>{S.confirm("确定删除当前这条数据么?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{p.splice(_,1),x({type:"success",message:"删除成功"})}).catch(()=>{x({type:"info",message:"已取消"})})},w=()=>{i.value=!1,p.splice(0,0,a)},p=c([{id:1,storeId:1,date:"2016-05-03",storeName:"王小虎",status:"1",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:12},{id:1,storeId:2,date:"2016-05-02",storeName:"王小虎",status:"2",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:13},{id:2,storeId:3,date:"2016-05-04",storeName:"王小虎",status:"3",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:2},{id:2,storeId:4,date:"2016-05-01",storeName:"王小虎",status:"4",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:5},{id:3,storeId:5,date:"2016-05-08",storeName:"王小虎",status:"5",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:1},{id:4,storeId:6,date:"2016-05-06",storeName:"王小虎",status:"6",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:1},{id:4,storeId:7,date:"2016-05-07",storeName:"王小虎",status:"7",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:1},{id:4,storeId:7,date:"2016-05-07",storeName:"王小虎",status:"7",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:1},{id:4,storeId:7,date:"2016-05-07",storeName:"王小虎",status:"2",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:1},{id:4,storeId:7,date:"2016-05-07",storeName:"王小虎",status:"7",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:1},{id:4,storeId:7,date:"2016-05-07",storeName:"王小虎",status:"7",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:1},{id:4,storeId:7,date:"2016-05-07",storeName:"王小虎",status:"7",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:1}]);return(_,s)=>{const g=j,k=$,n=O,q=W,P=z,f=X,d=G,y=H,B=J,D=K,F=L;return A(),M("section",Z,[e(k,{class:"top-button-warp"},{default:o(()=>[e(g,{type:"primary",onClick:T},{default:o(()=>[m("新建")]),_:1})]),_:1}),e(P,{data:p,style:{width:"100%"}},{default:o(()=>[e(n,{label:"商品id",prop:"id"}),e(n,{label:"仓库名称",prop:"storeName"}),e(n,{label:"商品状态",prop:"status"},{default:o(t=>{var r;return[m(h(((r=t.row)==null?void 0:r.status)==="1"?"出库中":" 成功"),1)]}),_:1}),e(n,{label:"商品源",prop:"origin"}),e(n,{label:"日期"},{default:o(t=>{var r;return[v("div",ee,[e(q,null,{default:o(()=>[e(l(R))]),_:1}),v("span",te,h((r=t.row)==null?void 0:r.date),1)])]}),_:1}),e(n,{label:"操作"},{default:o(t=>[e(g,{size:"small",onClick:r=>I(t.$index,t.row)},{default:o(()=>[m("Edit")]),_:2},1032,["onClick"]),e(g,{size:"small",type:"danger",onClick:r=>E(t.$index,t.row)},{default:o(()=>[m("Delete")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e(Y,{dialogVisible:i.value,onCancel:N,onSure:w,Tips:b.value},{default:o(()=>[e(F,{ref_key:"ruleFormRef",ref:C,model:l(a),rules:V,"label-width":"80px",class:"demo-ruleForm","status-icon":""},{default:o(()=>[e(d,{label:"商品id",prop:"name"},{default:o(()=>[e(f,{modelValue:l(a).id,"onUpdate:modelValue":s[0]||(s[0]=t=>l(a).id=t),modelModifiers:{number:!0},placeholder:"请输入商品id"},null,8,["modelValue"])]),_:1}),e(d,{label:"仓库名称",prop:"storeName"},{default:o(()=>[e(f,{modelValue:l(a).storeName,"onUpdate:modelValue":s[1]||(s[1]=t=>l(a).storeName=t),placeholder:"请输入仓库名称"},null,8,["modelValue"])]),_:1}),e(d,{label:"商品状态",prop:"status"},{default:o(()=>[e(B,{modelValue:l(a).status,"onUpdate:modelValue":s[2]||(s[2]=t=>l(a).status=t),placeholder:"请选择商品状态"},{default:o(()=>[e(y,{label:"出库中",value:"1"}),e(y,{label:"成功",value:"2"})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"日期",required:"",prop:"date1"},{default:o(()=>[e(D,{modelValue:l(a).date,"onUpdate:modelValue":s[3]||(s[3]=t=>l(a).date=t),type:"date",label:"Pick a date",placeholder:"请选择日期",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(d,{label:"商品源",prop:"desc"},{default:o(()=>[e(f,{modelValue:l(a).origin,"onUpdate:modelValue":s[4]||(s[4]=t=>l(a).origin=t),type:"textarea",placeholder:"请输入商品源"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["dialogVisible","Tips"])])}}});const ce=Q(oe,[["__scopeId","data-v-f7c896ce"]]);export{ce as default};
