import{h as B,i as M,j as D,k as F,b as $,l as A,_ as R,f as ae,n as oe,o as se,t as ne,p as re,q as U,r as ce,u as ie,v as le}from"./index-31bcfb88.js";/* empty css                    *//* empty css                       *//* empty css                   *//* empty css                  *//* empty css               */import{x as de}from"./index-0fc1d9c4.js";import{J as O,d as l,o as J,c as me,Q as a,W as e,u as r,U as h,$ as w,q as ue,t as v,V as q}from"./vue-4048d110.js";const pe=O({__name:"index",emits:["onSubmit","resetSubmit"],setup(Q,{emit:p}){let d=l({storeName:"",status:""});const I=()=>{console.log("submit!"),p("onSubmit",d.value)},V=()=>{d.value={storeName:"",status:""},p("resetSubmit",d.value)};return(z,f)=>{const x=B,_=M,j=D,k=F,y=$,S=A;return J(),me(S,{inline:!0,model:r(d),class:"demo-form-inline"},{default:a(()=>[e(_,{label:"仓库名称"},{default:a(()=>[e(x,{modelValue:r(d).storeName,"onUpdate:modelValue":f[0]||(f[0]=C=>r(d).storeName=C),placeholder:"用户昵称"},null,8,["modelValue"])]),_:1}),e(_,{label:"商品状态"},{default:a(()=>[e(k,{modelValue:r(d).status,"onUpdate:modelValue":f[1]||(f[1]=C=>r(d).status=C),placeholder:"商品状态"},{default:a(()=>[e(j,{label:"出库中",value:"出库中"}),e(j,{label:"成功",value:"成功"})]),_:1},8,["modelValue"])]),_:1}),e(_,null,{default:a(()=>[e(y,{type:"primary",onClick:I},{default:a(()=>[h("查询")]),_:1}),e(y,{onClick:V},{default:a(()=>[h("重置")]),_:1})]),_:1})]),_:1},8,["model"])}}});const ge=R(pe,[["__scopeId","data-v-68b7e183"]]),fe={class:"table-warp"},_e={class:"table-template-warp"},he=["src"],je={style:{display:"flex","align-items":"center"}},Ce={style:{"margin-left":"10px"}},Ne={class:"pagination"},be=O({__name:"index",setup(Q){const p=l(!1);w({});const d=l("编辑"),I=(n,t)=>{n===void 0&&(n=""),t===void 0&&(t=8);let c=[["张","王","李","赵","毕","慕容","上官","欧阳","刘","范"],["昔","苏","迪","飞","宇","杰","月","国","佳","晓","爱","章","往","呆","我","他","草","花","鼠","扬","科","阳","亮","真","家","雨"]],g=n;for(var m=0;m<t;m++){let N=Math.floor(Math.random()*2),b=c[N][Math.floor(Math.random()*c[N].length)];N===1&&Math.floor(Math.random()*2)===1&&(b=b.toUpperCase()),g+=b}return g},V=n=>{for(let t=0;t<n;t++){let c=I("",3),g={id:1+t,date:"2016-05-03",storeName:c,status:"出库中",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔"+t,createTime:"2022-1-15",storeCount:12,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"};s.data.push(g)}},z=l(!1),f=l(!1),x=l(!1),_=l(4),j=l(100),k=n=>{for(let t=0;t<n*10;t++){let c=I("",4),g={id:1+t,date:"2016-05-03",storeName:c,status:"1",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔"+t,createTime:"2022-1-15",storeCount:12,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"};s.data.push(g)}},y=()=>{s.data=[{id:1,storeId:1,date:"2016-05-03",storeName:"王小虎12",status:"出库中",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:12},{id:1,storeId:2,date:"2016-05-02",storeName:"王小虎11",status:"2",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:13},{id:2,storeId:3,date:"2016-05-04",storeName:"王小虎10",status:"出库中",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:2},{id:2,storeId:4,date:"2016-05-01",storeName:"王小虎9",status:"出库中",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:5},{id:3,storeId:5,date:"2016-05-08",storeName:"王小虎8",status:"成功",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:1},{id:4,storeId:6,date:"2016-05-06",storeName:"王小虎7",status:"成功",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:1},{id:4,storeId:7,date:"2016-05-07",storeName:"王小虎6",status:"成功",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:1},{id:4,storeId:7,date:"2016-05-07",storeName:"王小虎5",status:"成功",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:1},{id:4,storeId:7,date:"2016-05-07",storeName:"王小虎4",status:"成功",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:1},{id:4,storeId:7,date:"2016-05-07",storeName:"王小虎3",status:"成功",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:1},{id:4,storeId:7,date:"2016-05-07",storeName:"王小虎2",status:"成功",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:1},{id:4,storeId:7,date:"2016-05-07",storeName:"王小虎1",status:"成功",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:1}]},S=n=>{if(n.storeName)if(s.data.length){let t=l(!1);s.data.filter(c=>{c.storeName.includes(n.storeName)&&(s.data=[],s.data.push(c),t.value=!0)}),t.value||(s.data=[])}else s.data=[{id:1,storeId:1,date:"2016-05-03",storeName:"王小虎12",status:"出库中",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:12,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{id:1,storeId:2,date:"2016-05-02",storeName:"王小虎11",status:"2",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:13,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{id:2,storeId:3,date:"2016-05-04",storeName:"王小虎10",status:"出库中",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:2,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{id:2,storeId:4,date:"2016-05-01",storeName:"王小虎9",status:"出库中",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:5,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{id:3,storeId:5,date:"2016-05-08",storeName:"王小虎8",status:"成功",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:1,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{id:4,storeId:6,date:"2016-05-06",storeName:"王小虎7",status:"成功",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:1,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{id:4,storeId:7,date:"2016-05-07",storeName:"王小虎6",status:"成功",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:1,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{id:4,storeId:7,date:"2016-05-07",storeName:"王小虎5",status:"成功",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:1,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{id:4,storeId:7,date:"2016-05-07",storeName:"王小虎4",status:"成功",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:1,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{id:4,storeId:7,date:"2016-05-07",storeName:"王小虎3",status:"成功",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:1,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{id:4,storeId:7,date:"2016-05-07",storeName:"王小虎2",status:"成功",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:1,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{id:4,storeId:7,date:"2016-05-07",storeName:"王小虎1",status:"成功",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:1,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"}];if(n.status)if(console.log(n.status),console.log(999),s.data.length){let t=l(!1);s.data.filter(c=>{c.status.includes(n.status)&&(s.data=[],s.data.push(c),t.value=!0)}),t.value||(s.data=[])}else s.data=[{id:1,storeId:1,date:"2016-05-03",storeName:"王小虎",status:"1",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:12,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{id:1,storeId:2,date:"2016-05-02",storeName:"王小虎",status:"2",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:13,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{id:2,storeId:3,date:"2016-05-04",storeName:"王小虎",status:"3",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:2,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{id:2,storeId:4,date:"2016-05-01",storeName:"王小虎",status:"4",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:5,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{id:3,storeId:5,date:"2016-05-08",storeName:"王小虎",status:"5",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:1,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{id:1,storeId:1,date:"2016-05-03",storeName:"王小虎12",status:"出库中",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:12,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{id:1,storeId:1,date:"2016-05-03",storeName:"王小虎12",status:"出库中",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:12,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{id:1,storeId:1,date:"2016-05-03",storeName:"王小虎12",status:"出库中",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:12,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"}]},C=l();let i=l({id:1,storeId:2,storeName:"",status:"",origin:"",phone:"",concat:"",date:"",createTime:"",storeCount:""});const W=w({storeName:[{required:!0,message:"Please input Activity name",trigger:"blur"}],status:[{required:!0,message:"Please select Activity zone",trigger:"blur"}],origin:[{required:!0,message:"Please select Activity count",trigger:"change"}],date:[{type:"date",required:!0,message:"Please pick a date",trigger:"change"}],phone:[{type:"array",required:!0,message:"Please select at least one activity type",trigger:"change"}],concat:[{required:!0,message:"Please select activity resource",trigger:"change"}]}),G=()=>{i.value={},p.value=!1},H=()=>{i.value={},p.value=!0,d.value="新建"},K=(n,t)=>{p.value=!0,i.value=t},X=(n,t)=>{re.confirm("确定删除当前这条数据么?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{s.data.splice(n,1),U({type:"success",message:"删除成功"})}).catch(()=>{U({type:"info",message:"已取消"})})},Y=()=>{p.value=!1,s.data.splice(0,0,i.value)};let s=w({data:[{id:1,storeId:1,date:"2016-05-03",storeName:"王小虎12",status:"出库中",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:12,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{id:1,storeId:1,date:"2016-05-03",storeName:"王小虎12",status:"出库中",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:12,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{id:1,storeId:1,date:"2016-05-03",storeName:"王小虎12",status:"出库中",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:12,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{id:1,storeId:1,date:"2016-05-03",storeName:"王小虎12",status:"出库中",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:12,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{id:1,storeId:1,date:"2016-05-03",storeName:"王小虎12",status:"出库中",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:12,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{id:1,storeId:1,date:"2016-05-03",storeName:"王小虎12",status:"出库中",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:12,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{id:1,storeId:1,date:"2016-05-03",storeName:"王小虎12",status:"出库中",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:12,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{id:1,storeId:1,date:"2016-05-03",storeName:"王小虎12",status:"出库中",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:12,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{id:1,storeId:1,date:"2016-05-03",storeName:"王小虎12",status:"出库中",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:12,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{id:1,storeId:1,date:"2016-05-03",storeName:"王小虎12",status:"出库中",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:12,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{id:1,storeId:1,date:"2016-05-03",storeName:"王小虎12",status:"出库中",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:12,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{id:1,storeId:1,date:"2016-05-03",storeName:"王小虎12",status:"出库中",origin:"上海市普陀区金沙江路 1518 弄",phone:"15117960415",concat:"小鱼仔",createTime:"2022-1-15",storeCount:12,img:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"}]});return(n,t)=>{const c=$,g=ae,m=ce,N=ie,b=oe,Z=se,E=B,T=M,P=D,L=F,ee=le,te=A;return J(),ue("section",fe,[e(g,{class:"top-button-warp"},{default:a(()=>[e(ge,{onOnSubmit:S,onResetSubmit:y,ref:"childComp"},null,512),e(c,{type:"primary",onClick:H},{default:a(()=>[h("新建")]),_:1})]),_:1}),v("div",_e,[e(b,{data:r(s).data,style:{width:"100%"}},{default:a(()=>[e(m,{label:"商品id",prop:"id"}),e(m,{label:"仓库名称",prop:"storeName"}),e(m,{label:"商品图片"},{default:a(o=>{var u;return[v("img",{src:(u=o.row)==null?void 0:u.img,alt:"图片",width:"100",height:"60"},null,8,he)]}),_:1}),e(m,{label:"商品状态",prop:"status"},{default:a(o=>{var u;return[h(q(((u=o.row)==null?void 0:u.status)==="1"?"出库中":" 成功"),1)]}),_:1}),e(m,{label:"商品源",prop:"origin"}),e(m,{label:"日期"},{default:a(o=>{var u;return[v("div",je,[e(N,null,{default:a(()=>[e(r(ne))]),_:1}),v("span",Ce,q((u=o.row)==null?void 0:u.date),1)])]}),_:1}),e(m,{label:"操作"},{default:a(o=>[e(c,{size:"small",type:"primary",onClick:u=>K(o.$index,o.row)},{default:a(()=>[h("Edit")]),_:2},1032,["onClick"]),e(c,{size:"small",type:"danger",onClick:u=>X(o.$index,o.row)},{default:a(()=>[h("Delete")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),v("div",Ne,[e(Z,{"current-page":_.value,"onUpdate:currentPage":t[0]||(t[0]=o=>_.value=o),"page-size":j.value,"onUpdate:pageSize":t[1]||(t[1]=o=>j.value=o),"page-sizes":[100,200,300,400],small:z.value,disabled:x.value,background:f.value,layout:"total, sizes, prev, pager, next, jumper",total:400,onSizeChange:V,onCurrentChange:k},null,8,["current-page","page-size","small","disabled","background"])]),e(de,{dialogVisible:p.value,onCancel:G,onSure:Y,Tips:d.value},{default:a(()=>[e(te,{ref_key:"ruleFormRef",ref:C,model:r(i),rules:W,"label-width":"80px",class:"demo-ruleForm","status-icon":""},{default:a(()=>[e(T,{label:"商品id",prop:"name"},{default:a(()=>[e(E,{modelValue:r(i).id,"onUpdate:modelValue":t[2]||(t[2]=o=>r(i).id=o),modelModifiers:{number:!0},placeholder:"请输入商品id"},null,8,["modelValue"])]),_:1}),e(T,{label:"仓库名称",prop:"storeName"},{default:a(()=>[e(E,{modelValue:r(i).storeName,"onUpdate:modelValue":t[3]||(t[3]=o=>r(i).storeName=o),placeholder:"请输入仓库名称"},null,8,["modelValue"])]),_:1}),e(T,{label:"商品状态",prop:"status"},{default:a(()=>[e(L,{modelValue:r(i).status,"onUpdate:modelValue":t[4]||(t[4]=o=>r(i).status=o),placeholder:"请选择商品状态"},{default:a(()=>[e(P,{label:"出库中",value:"1"}),e(P,{label:"成功",value:"2"})]),_:1},8,["modelValue"])]),_:1}),e(T,{label:"日期",required:"",prop:"date1"},{default:a(()=>[e(ee,{modelValue:r(i).date,"onUpdate:modelValue":t[5]||(t[5]=o=>r(i).date=o),type:"date",label:"Pick a date",placeholder:"请选择日期",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(T,{label:"商品源",prop:"desc"},{default:a(()=>[e(E,{modelValue:r(i).origin,"onUpdate:modelValue":t[6]||(t[6]=o=>r(i).origin=o),type:"textarea",placeholder:"请输入商品源"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["dialogVisible","Tips"])])}}});const Ee=R(be,[["__scopeId","data-v-0987e5f3"]]);export{Ee as default};
