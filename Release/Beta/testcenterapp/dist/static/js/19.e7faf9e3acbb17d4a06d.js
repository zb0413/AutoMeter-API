webpackJsonp([19],{IBLw:function(t,i,e){"use strict";i.d=function(t){return Object(n.a)({url:"/testcondition/search",method:"post",data:t})},i.b=function(){return Object(n.a)({url:"/testcondition/getalltestcondition",method:"get"})},i.a=function(t){return Object(n.a)({url:"/testcondition",method:"post",data:t})},i.e=function(t){return Object(n.a)({url:"/testcondition/detail",method:"put",data:t})},i.c=function(t){return Object(n.a)({url:"/testcondition/"+t,method:"delete"})};var n=e("vLgD")},UKWE:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("Dd8w"),a=e.n(n),o=e("vLgD");function s(t){return Object(o.a)({url:"/condition/api/search",method:"post",data:t})}var c=e("IBLw"),d=e("W+bg"),l=e("2d0t"),r=e("XcM5"),p=e("0xDb"),u=e("NYxO"),m={filters:{statusFilter:function(t){return{published:"success",draft:"gray",deleted:"danger"}[t]}},data:function(){return{itemKey:null,tmpconditionname:"",conditionList:[],apiconditionList:[],apiList:[],caseList:[],deployunitList:[],listLoading:!1,total:0,deployunitQuery:{deployunitname:""},apiquery:{casedeployunitname:"",caseapiname:""},apicaseQuery:{apiname:""},listQuery:{page:1,size:10,listLoading:!0},dialogStatus:"add",dialogFormVisible:!1,textMap:{updateRole:"修改测试环境",update:"修改测试环境",add:"添加测试环境"},btnLoading:!1,tmpapicondition:{id:"",conditionid:"",conditionname:"",deployunitid:"",deployunitname:"",apiname:"",apiid:"",caseid:"",casename:"",memo:"",creator:""},search:{page:1,size:10,conditionname:null}}},computed:a()({},Object(u.b)(["name","sidebar","avatar"])),created:function(){this.getapiconditionList(),this.getdepunitList(),this.getalltestcondition()},methods:{unix2CurrentTime:p.b,deployunitselectChanged:function(t){for(var i=this,e=0;e<this.deployunitList.length;e++)this.deployunitList[e].deployunitname===t&&(this.tmpapicondition.deployunitid=this.deployunitList[e].id);this.tmpapicondition.apiname="",this.tmpapicondition.casename="",this.deployunitQuery.deployunitname=t,Object(d.c)(this.deployunitQuery).then(function(t){i.apiList=t.data}).catch(function(t){i.$message.error("加载api列表失败")})},apiselectChanged:function(t){for(var i=this,e=0;e<this.apiList.length;e++)this.apiList[e].apiname===t&&(this.tmpapicondition.apiid=this.apiList[e].id);this.tmpapicondition.casename="",this.apiquery.caseapiname=t,this.apiquery.casedeployunitname=this.deployunitQuery.deployunitname,Object(l.c)(this.apiquery).then(function(t){i.caseList=t.data}).catch(function(t){i.$message.error("加载apicase列表失败")})},testcaseselectChanged:function(t){for(var i=0;i<this.caseList.length;i++)this.caseList[i].casename===t&&(this.tmpapicondition.caseid=this.caseList[i].id)},ConditionselectChanged:function(t){for(var i=0;i<this.conditionList.length;i++)this.conditionList[i].conditionname===t&&(this.tmpapicondition.conditionid=this.conditionList[i].id),this.tmpapicondition.deployunitname="",this.tmpapicondition.apiname="",this.tmpapicondition.casename=""},selectChangedMN:function(t){for(var i=0;i<this.machinenameList.length;i++)this.machinenameList[i].machinename===t&&(this.tmpapicondition.machineid=this.machinenameList[i].id),console.log(this.machinenameList[i].id)},getdepunitList:function(){var t=this;this.listLoading=!0,Object(r.d)(this.listQuery).then(function(i){t.deployunitList=i.data.list,t.listLoading=!1}).catch(function(i){t.$message.error("加载发布单元列表失败")})},getapiconditionList:function(){var t=this;this.listLoading=!0,this.search.conditionname=this.tmpconditionname,s(this.search).then(function(i){t.apiconditionList=i.data.list,t.total=i.data.total,t.listLoading=!1}).catch(function(i){t.$message.error("加载测试接口条件列表失败")})},getalltestcondition:function(){var t=this;this.listLoading=!0,Object(c.b)().then(function(i){t.conditionList=i.data,t.total=i.data.total,t.listLoading=!1}).catch(function(i){t.$message.error("加载条件列表失败")})},searchBy:function(){var t=this;this.search.page=1,this.listLoading=!0,s(this.search).then(function(i){t.itemKey=Math.random(),t.apiconditionList=i.data.list,t.total=i.data.total}).catch(function(i){t.$message.error("搜索失败")}),this.tmpconditionname=this.search.conditionname,this.listLoading=!1,this.btnLoading=!1},handleSizeChange:function(t){this.search.page=1,this.search.size=t,this.getapiconditionList()},handleCurrentChange:function(t){this.search.page=t,this.getapiconditionList()},getIndex:function(t){return(this.search.page-1)*this.search.size+t+1},showAddapiconditionDialog:function(){this.dialogFormVisible=!0,this.dialogStatus="add",this.tmpapicondition.id="",this.tmpapicondition.conditionname="",this.tmpapicondition.deployunitname="",this.tmpapicondition.apiname="",this.tmpapicondition.casename="",this.tmpapicondition.creator=this.name},addapicondition:function(){var t=this;this.$refs.tmpapicondition.validate(function(i){var e;i&&(t.btnLoading=!0,(e=t.tmpapicondition,Object(o.a)({url:"/condition/api",method:"post",data:e})).then(function(){t.$message.success("添加成功"),t.getapiconditionList(),t.dialogFormVisible=!1,t.btnLoading=!1}).catch(function(i){t.$message.error("添加失败"),t.btnLoading=!1}))})},showUpdateapiconditionDialog:function(t){var i=this;this.dialogFormVisible=!0,this.dialogStatus="update",this.tmpapicondition.id=this.apiconditionList[t].id,this.tmpapicondition.conditionname=this.apiconditionList[t].conditionname,this.tmpapicondition.deployunitname=this.apiconditionList[t].deployunitname,this.deployunitQuery.deployunitname=this.tmpapicondition.deployunitname,Object(d.c)(this.deployunitQuery).then(function(t){i.apiList=t.data}).catch(function(t){i.$message.error("加载api列表失败")}),this.tmpapicondition.apiname=this.apiconditionList[t].apiname,this.apiquery.caseapiname=this.tmpapicondition.apiname,this.apiquery.casedeployunitname=this.tmpapicondition.deployunitname,Object(l.c)(this.apiquery).then(function(t){i.caseList=t.data}).catch(function(t){i.$message.error("加载apicase列表失败")}),this.tmpapicondition.casename=this.apiconditionList[t].casename,this.tmpapicondition.creator=this.name},updateapicondition:function(){var t=this;this.$refs.tmpapicondition.validate(function(i){var e;i&&(e=t.tmpapicondition,Object(o.a)({url:"/condition/api/detail",method:"put",data:e})).then(function(){t.$message.success("更新成功"),t.getapiconditionList(),t.dialogFormVisible=!1}).catch(function(i){t.$message.error("更新失败")})})},removeapicondition:function(t){var i=this;this.$confirm("删除该测试环境？","警告",{confirmButtonText:"是",cancelButtonText:"否",type:"warning"}).then(function(){var e,n=i.apiconditionList[t].id;(e=n,Object(o.a)({url:"/condition/api/"+e,method:"delete"})).then(function(){i.$message.success("删除成功"),i.getapiconditionList()})}).catch(function(){i.$message.info("已取消删除")})},isUniqueDetail:function(t){for(var i=0;i<this.apiconditionList.length;i++)if(this.apiconditionList[i].id!==t.id&&this.apiconditionList[i].enviromentname===t.enviromentname&&this.apiconditionList[i].machinename===t.machinename)return this.$message.error("测试环境名已存在"),!1;return!0}}},h={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"app-container"},[e("div",{staticClass:"filter-container"},[e("el-form",{attrs:{inline:!0}},[e("el-form-item",[t.hasPermission("apicondition:list")?e("el-button",{attrs:{type:"success",size:"mini",icon:"el-icon-refresh"},nativeOn:{click:function(i){return i.preventDefault(),t.getapiconditionList(i)}}},[t._v("刷新")]):t._e(),t._v(" "),t.hasPermission("apicondition:add")?e("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},nativeOn:{click:function(i){return i.preventDefault(),t.showAddapiconditionDialog(i)}}},[t._v("添加接口条件")]):t._e()],1),t._v(" "),t.hasPermission("apicondition:search")?e("span",[e("el-form-item",[e("el-select",{attrs:{placeholder:"条件名"},model:{value:t.search.conditionname,callback:function(i){t.$set(t.search,"conditionname",i)},expression:"search.conditionname"}},[e("el-option",{attrs:{label:"请选择",value:""}}),t._v(" "),t._l(t.conditionList,function(t,i){return e("div",{key:i},[e("el-option",{attrs:{label:t.conditionname,value:t.conditionname}})],1)})],2)],1),t._v(" "),e("el-form-item",[e("el-button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:t.searchBy}},[t._v("查询")])],1)],1):t._e()],1)],1),t._v(" "),e("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.listLoading,expression:"listLoading",modifiers:{body:!0}}],key:t.itemKey,attrs:{data:t.apiconditionList,"element-loading-text":"loading",border:"",fit:"","highlight-current-row":""}},[e("el-table-column",{attrs:{label:"编号",align:"center",width:"60"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("span",{domProps:{textContent:t._s(t.getIndex(i.$index))}})]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"条件名",align:"center",prop:"conditionname",width:"120"}}),t._v(" "),e("el-table-column",{attrs:{label:"发布单元名",align:"center",prop:"deployunitname",width:"120"}}),t._v(" "),e("el-table-column",{attrs:{label:"api名",align:"center",prop:"apiname",width:"120"}}),t._v(" "),e("el-table-column",{attrs:{label:"接口名",align:"center",prop:"casename",width:"120"}}),t._v(" "),e("el-table-column",{attrs:{label:"操作人",align:"center",prop:"creator",width:"100"}}),t._v(" "),e("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"160"},scopedSlots:t._u([{key:"default",fn:function(i){return[t._v(t._s(t.unix2CurrentTime(i.row.createTime)))]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"最后修改时间",align:"center",prop:"lastmodifyTime",width:"160"},scopedSlots:t._u([{key:"default",fn:function(i){return[t._v(t._s(t.unix2CurrentTime(i.row.lastmodifyTime))+"\n      ")]}}])}),t._v(" "),t.hasPermission("apicondition:update")||t.hasPermission("apicondition:delete")?e("el-table-column",{attrs:{label:"管理",align:"center"},scopedSlots:t._u([{key:"default",fn:function(i){return[t.hasPermission("apicondition:update")&&i.row.id!==t.id?e("el-button",{attrs:{type:"warning",size:"mini"},nativeOn:{click:function(e){return e.preventDefault(),t.showUpdateapiconditionDialog(i.$index)}}},[t._v("修改")]):t._e(),t._v(" "),t.hasPermission("apicondition:delete")&&i.row.id!==t.id?e("el-button",{attrs:{type:"danger",size:"mini"},nativeOn:{click:function(e){return e.preventDefault(),t.removeapicondition(i.$index)}}},[t._v("删除")]):t._e()]}}],null,!1,2643348166)}):t._e()],1),t._v(" "),e("el-pagination",{attrs:{"current-page":t.search.page,"page-size":t.search.size,total:t.total,"page-sizes":[10,20,30,40],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),t._v(" "),e("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(i){t.dialogFormVisible=i}}},[e("el-form",{ref:"tmpapicondition",staticClass:"small-space",staticStyle:{width:"300px","margin-left":"50px"},attrs:{"status-icon":"","label-position":"left","label-width":"100px",model:t.tmpapicondition}},[e("el-form-item",{attrs:{label:"条件名",prop:"conditionname",required:""}},[e("el-select",{attrs:{placeholder:"条件名"},on:{change:function(i){return t.ConditionselectChanged(i)}},model:{value:t.tmpapicondition.conditionname,callback:function(i){t.$set(t.tmpapicondition,"conditionname",i)},expression:"tmpapicondition.conditionname"}},[e("el-option",{staticStyle:{display:"none"},attrs:{label:"请选择",value:"''"}}),t._v(" "),t._l(t.conditionList,function(t,i){return e("div",{key:i},[e("el-option",{attrs:{label:t.conditionname,value:t.conditionname,required:""}})],1)})],2)],1),t._v(" "),e("el-form-item",{attrs:{label:"发布单元",prop:"deployunitname",required:""}},[e("el-select",{attrs:{placeholder:"发布单元"},on:{change:function(i){return t.deployunitselectChanged(i)}},model:{value:t.tmpapicondition.deployunitname,callback:function(i){t.$set(t.tmpapicondition,"deployunitname",i)},expression:"tmpapicondition.deployunitname"}},[e("el-option",{staticStyle:{display:"none"},attrs:{label:"请选择",value:"''"}}),t._v(" "),t._l(t.deployunitList,function(t,i){return e("div",{key:i},[e("el-option",{attrs:{label:t.deployunitname,value:t.deployunitname,required:""}})],1)})],2)],1),t._v(" "),e("el-form-item",{attrs:{label:"api",prop:"apiname",required:""}},[e("el-select",{attrs:{placeholder:"api"},on:{change:function(i){return t.apiselectChanged(i)}},model:{value:t.tmpapicondition.apiname,callback:function(i){t.$set(t.tmpapicondition,"apiname",i)},expression:"tmpapicondition.apiname"}},[e("el-option",{attrs:{label:"请选择",value:""}}),t._v(" "),t._l(t.apiList,function(t,i){return e("div",{key:i},[e("el-option",{attrs:{label:t.apiname,value:t.apiname}})],1)})],2)],1),t._v(" "),e("el-form-item",{attrs:{label:"接口",prop:"casename",required:""}},[e("el-select",{attrs:{placeholder:"接口"},on:{change:function(i){return t.testcaseselectChanged(i)}},model:{value:t.tmpapicondition.casename,callback:function(i){t.$set(t.tmpapicondition,"casename",i)},expression:"tmpapicondition.casename"}},[e("el-option",{staticStyle:{display:"none"},attrs:{label:"请选择",value:"''"}}),t._v(" "),t._l(t.caseList,function(t,i){return e("div",{key:i},[e("el-option",{attrs:{label:t.casename,value:t.casename,required:""}})],1)})],2)],1)],1),t._v(" "),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{nativeOn:{click:function(i){i.preventDefault(),t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),"add"===t.dialogStatus?e("el-button",{attrs:{type:"danger"},nativeOn:{click:function(i){return i.preventDefault(),t.$refs.tmpapicondition.resetFields()}}},[t._v("重置")]):t._e(),t._v(" "),"add"===t.dialogStatus?e("el-button",{attrs:{type:"success",loading:t.btnLoading},nativeOn:{click:function(i){return i.preventDefault(),t.addapicondition(i)}}},[t._v("添加")]):t._e(),t._v(" "),"update"===t.dialogStatus?e("el-button",{attrs:{type:"success",loading:t.btnLoading},nativeOn:{click:function(i){return i.preventDefault(),t.updateapicondition(i)}}},[t._v("修改")]):t._e()],1)],1)],1)},staticRenderFns:[]},g=e("VU/8")(m,h,!1,null,null,null);i.default=g.exports}});
//# sourceMappingURL=19.e7faf9e3acbb17d4a06d.js.map