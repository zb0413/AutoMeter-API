webpackJsonp([18],{"5qdU":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Dd8w"),o=i.n(n),a=i("IBLw"),s=i("vuyV"),c=i("2d0t"),l=i("W+bg"),d=i("XcM5"),r=i("0xDb"),p=i("NYxO"),m={filters:{statusFilter:function(t){return{published:"success",draft:"gray",deleted:"danger"}[t]}},data:function(){return{itemKey:null,tmpconditionname:"",execplanList:[],conditionList:[],apiList:[],caseList:[],deployunitList:[],enviromentnameList:[],machinenameList:[],testcasevisible:!1,executeplanVisible:!1,listLoading:!1,total:0,deployunitquery:{deployunitname:""},apiquery:{casedeployunitname:"",caseapiname:""},listQuery:{page:1,size:10,listLoading:!0},dialogStatus:"add",dialogFormVisible:!1,textMap:{updateRole:"修改条件",update:"修改条件",add:"添加条件"},btnLoading:!1,tmpcondition:{id:"",conditionname:"",objecttype:"",objectid:"",objectname:"",conditiontype:"",memo:"",creator:"",deployunitname:"",apiname:""},search:{page:1,size:10,conditionname:null}}},computed:o()({},Object(p.b)(["name","sidebar","avatar"])),created:function(){this.getconditionList(),this.getdepunitList()},methods:{unix2CurrentTime:r.b,targetChanged:function(t){var e=this;"执行计划"===t&&(this.executeplanVisible=!0,this.testcasevisible=!1,this.tmpcondition.objectid="",this.tmpcondition.objectname="",Object(s.d)().then(function(t){e.execplanList=t.data}).catch(function(t){e.$message.error("加载执行计划列表失败")})),"测试用例"===t&&(this.executeplanVisible=!1,this.testcasevisible=!0,this.tmpcondition.objectid="",this.tmpcondition.objectname="",this.tmpcondition.deployunitname="",this.tmpcondition.deployunitname="",this.tmpcondition.apiname="")},selectChanged:function(t){var e=this;this.tmpcondition.apiname="",this.deployunitquery.deployunitname=t,this.tmpcondition.apiname="",this.tmpcondition.objectname="",Object(l.c)(this.deployunitquery).then(function(t){e.apiList=t.data}).catch(function(t){e.$message.error("加载api列表失败")})},apiselectChanged:function(t){var e=this;this.apiquery.caseapiname=t,this.apiquery.casedeployunitname=this.deployunitquery.deployunitname,Object(c.c)(this.apiquery).then(function(t){e.caseList=t.data}).catch(function(t){e.$message.error("加载api用例列表失败")})},execplanChanged:function(t){for(var e=0;e<this.execplanList.length;e++)this.execplanList[e].executeplanname===t&&(this.tmpcondition.objectid=this.execplanList[e].id,this.tmpcondition.objectname=this.execplanList[e].executeplanname)},testcaseChanged:function(t){for(var e=0;e<this.caseList.length;e++)this.caseList[e].casename===t&&(this.tmpcondition.objectid=this.caseList[e].id)},getdepunitList:function(){var t=this;this.listLoading=!0,Object(d.d)(this.listQuery).then(function(e){t.deployunitList=e.data.list,t.listLoading=!1}).catch(function(e){t.$message.error("加载发布单元列表失败")})},getconditionList:function(){var t=this;this.listLoading=!0,this.search.enviromentname=this.tmpenviromentname,Object(a.d)(this.search).then(function(e){t.conditionList=e.data.list,t.total=e.data.total,t.listLoading=!1}).catch(function(e){t.$message.error("加载条件列表失败")})},searchBy:function(){var t=this;this.search.page=1,this.listLoading=!0,Object(a.d)(this.search).then(function(e){t.itemKey=Math.random(),t.conditionList=e.data.list,t.total=e.data.total}).catch(function(e){t.$message.error("搜索失败")}),this.tmpconditionname=this.search.conditionname,this.listLoading=!1,this.btnLoading=!1},handleSizeChange:function(t){this.search.page=1,this.search.size=t,this.getconditionList()},handleCurrentChange:function(t){this.search.page=t,this.getconditionList()},getIndex:function(t){return(this.search.page-1)*this.search.size+t+1},showAddconditionDialog:function(){this.dialogFormVisible=!0,this.testcasevisible=!1,this.dialogStatus="add",this.tmpcondition.id="",this.tmpcondition.conditionname="",this.tmpcondition.objectid="",this.tmpcondition.objectname="",this.tmpcondition.objecttype="",this.tmpcondition.conditiontype="",this.tmpcondition.memo="",this.tmpcondition.creator=this.name},addcondition:function(){var t=this;this.$refs.tmpcondition.validate(function(e){e&&(t.btnLoading=!0,Object(a.a)(t.tmpcondition).then(function(){t.$message.success("添加成功"),t.getconditionList(),t.dialogFormVisible=!1,t.btnLoading=!1,t.testcasevisible=!1,t.tmpcondition.id="",t.tmpcondition.conditionname="",t.tmpcondition.objectid="",t.tmpcondition.objectname="",t.tmpcondition.objecttype="",t.tmpcondition.deployunitname="",t.tmpcondition.apiname="",t.tmpcondition.memo=""}).catch(function(e){t.$message.error("添加失败"),t.btnLoading=!1}))})},showUpdateconditionDialog:function(t){this.dialogFormVisible=!0,this.dialogStatus="update","执行计划"===this.conditionList[t].objecttype&&(this.executeplanVisible=!0,this.testcasevisible=!1),"测试用例"===this.conditionList[t].objecttype&&(this.testcasevisible=!0,this.executeplanVisible=!1),this.tmpcondition.id=this.conditionList[t].id,this.tmpcondition.objectid=this.conditionList[t].objectid,this.tmpcondition.conditionname=this.conditionList[t].conditionname,this.tmpcondition.objectname=this.conditionList[t].objectname,this.tmpcondition.objecttype=this.conditionList[t].objecttype,this.tmpcondition.conditiontype=this.conditionList[t].conditiontype,this.tmpcondition.memo=this.conditionList[t].memo,this.tmpcondition.creator=this.name},updatecondition:function(){var t=this;this.$refs.tmpcondition.validate(function(e){e&&Object(a.e)(t.tmpcondition).then(function(){t.$message.success("更新成功"),t.getconditionList(),t.dialogFormVisible=!1}).catch(function(e){t.$message.error("更新失败")})})},removecondition:function(t){var e=this;this.$confirm("删除该条件？","警告",{confirmButtonText:"是",cancelButtonText:"否",type:"warning"}).then(function(){var i=e.conditionList[t].id;Object(a.c)(i).then(function(){e.$message.success("删除成功"),e.getconditionList()})}).catch(function(){e.$message.info("已取消删除")})},isUniqueDetail:function(t){for(var e=0;e<this.conditionList.length;e++)if(this.conditionList[e].id!==t.id&&this.conditionList[e].enviromentname===t.enviromentname&&this.conditionList[e].machinename===t.machinename)return this.$message.error("条件名已存在"),!1;return!0}}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"filter-container"},[i("el-form",{attrs:{inline:!0}},[i("el-form-item",[t.hasPermission("condition:list")?i("el-button",{attrs:{type:"success",size:"mini",icon:"el-icon-refresh"},nativeOn:{click:function(e){return e.preventDefault(),t.getconditionList(e)}}},[t._v("刷新")]):t._e(),t._v(" "),t.hasPermission("condition:add")?i("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},nativeOn:{click:function(e){return e.preventDefault(),t.showAddconditionDialog(e)}}},[t._v("添加条件")]):t._e()],1),t._v(" "),t.hasPermission("condition:search")?i("span",[i("el-form-item",[i("el-input",{attrs:{clearable:"",placeholder:"条件名"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchBy(e)}},model:{value:t.search.conditionname,callback:function(e){t.$set(t.search,"conditionname",e)},expression:"search.conditionname"}})],1),t._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:t.searchBy}},[t._v("查询")])],1)],1):t._e()],1)],1),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.listLoading,expression:"listLoading",modifiers:{body:!0}}],key:t.itemKey,attrs:{data:t.conditionList,"element-loading-text":"loading",border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{label:"编号",align:"center",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{domProps:{textContent:t._s(t.getIndex(e.$index))}})]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"条件名",align:"center",prop:"conditionname",width:"120"}}),t._v(" "),i("el-table-column",{attrs:{label:"目标名",align:"center",prop:"objectname",width:"120"}}),t._v(" "),i("el-table-column",{attrs:{label:"目标类型",align:"center",prop:"objecttype",width:"120"}}),t._v(" "),i("el-table-column",{attrs:{label:"条件类型",align:"center",prop:"conditiontype",width:"120"}}),t._v(" "),i("el-table-column",{attrs:{label:"备注",align:"center",prop:"memo",width:"120"}}),t._v(" "),i("el-table-column",{attrs:{label:"操作人",align:"center",prop:"creator",width:"100"}}),t._v(" "),i("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.unix2CurrentTime(e.row.createTime)))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"最后修改时间",align:"center",prop:"lastmodifyTime",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.unix2CurrentTime(e.row.lastmodifyTime))+"\n      ")]}}])}),t._v(" "),t.hasPermission("condition:update")||t.hasPermission("condition:delete")?i("el-table-column",{attrs:{label:"管理",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.hasPermission("condition:update")&&e.row.id!==t.id?i("el-button",{attrs:{type:"warning",size:"mini"},nativeOn:{click:function(i){return i.preventDefault(),t.showUpdateconditionDialog(e.$index)}}},[t._v("修改")]):t._e(),t._v(" "),t.hasPermission("condition:delete")&&e.row.id!==t.id?i("el-button",{attrs:{type:"danger",size:"mini"},nativeOn:{click:function(i){return i.preventDefault(),t.removecondition(e.$index)}}},[t._v("删除")]):t._e()]}}],null,!1,2036400870)}):t._e()],1),t._v(" "),i("el-pagination",{attrs:{"current-page":t.search.page,"page-size":t.search.size,total:t.total,"page-sizes":[10,20,30,40],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),t._v(" "),i("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-form",{ref:"tmpcondition",staticClass:"small-space",staticStyle:{width:"300px","margin-left":"50px"},attrs:{"status-icon":"","label-position":"left","label-width":"100px",model:t.tmpcondition}},[i("el-form-item",{attrs:{label:"条件名",prop:"conditionname",required:""}},[i("el-input",{attrs:{type:"text",maxlength:"40","prefix-icon":"el-icon-edit","auto-complete":"off"},model:{value:t.tmpcondition.conditionname,callback:function(e){t.$set(t.tmpcondition,"conditionname",e)},expression:"tmpcondition.conditionname"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"目标类型",prop:"objecttype",required:""}},[i("el-select",{attrs:{placeholder:"目标类型"},on:{change:function(e){return t.targetChanged(e)}},model:{value:t.tmpcondition.objecttype,callback:function(e){t.$set(t.tmpcondition,"objecttype",e)},expression:"tmpcondition.objecttype"}},[i("el-option",{attrs:{label:"测试用例",value:"测试用例"}}),t._v(" "),i("el-option",{attrs:{label:"执行计划",value:"执行计划"}})],1)],1),t._v(" "),t.testcasevisible?i("div",[i("el-form-item",{attrs:{label:"发布单元",prop:"deployunitname",required:""}},[i("el-select",{attrs:{placeholder:"发布单元"},on:{change:function(e){return t.selectChanged(e)}},model:{value:t.tmpcondition.deployunitname,callback:function(e){t.$set(t.tmpcondition,"deployunitname",e)},expression:"tmpcondition.deployunitname"}},[i("el-option",{staticStyle:{display:"none"},attrs:{label:"请选择",value:"''"}}),t._v(" "),t._l(t.deployunitList,function(t,e){return i("div",{key:e},[i("el-option",{attrs:{label:t.deployunitname,value:t.deployunitname,required:""}})],1)})],2)],1),t._v(" "),i("el-form-item",{attrs:{label:"API",prop:"apiname",required:""}},[i("el-select",{attrs:{placeholder:"API"},on:{change:function(e){return t.apiselectChanged(e)}},model:{value:t.tmpcondition.apiname,callback:function(e){t.$set(t.tmpcondition,"apiname",e)},expression:"tmpcondition.apiname"}},[i("el-option",{staticStyle:{display:"none"},attrs:{label:"请选择",value:"''"}}),t._v(" "),t._l(t.apiList,function(t,e){return i("div",{key:e},[i("el-option",{attrs:{label:t.apiname,value:t.apiname,required:""}})],1)})],2)],1),t._v(" "),i("el-form-item",{attrs:{label:"用例",prop:"objectname",required:""}},[i("el-select",{attrs:{placeholder:"用例"},on:{change:function(e){return t.testcaseChanged(e)}},model:{value:t.tmpcondition.objectname,callback:function(e){t.$set(t.tmpcondition,"objectname",e)},expression:"tmpcondition.objectname"}},[i("el-option",{staticStyle:{display:"none"},attrs:{label:"请选择",value:"''"}}),t._v(" "),t._l(t.caseList,function(t,e){return i("div",{key:e},[i("el-option",{attrs:{label:t.casename,value:t.casename,required:""}})],1)})],2)],1)],1):t._e(),t._v(" "),t.executeplanVisible?i("div",[i("el-form-item",{attrs:{label:"执行计划",prop:"objectname",required:""}},[i("el-select",{attrs:{placeholder:"执行计划"},on:{change:function(e){return t.execplanChanged(e)}},model:{value:t.tmpcondition.objectname,callback:function(e){t.$set(t.tmpcondition,"objectname",e)},expression:"tmpcondition.objectname"}},[i("el-option",{staticStyle:{display:"none"},attrs:{label:"请选择",value:"''"}}),t._v(" "),t._l(t.execplanList,function(t,e){return i("div",{key:e},[i("el-option",{attrs:{label:t.executeplanname,value:t.executeplanname}})],1)})],2)],1)],1):t._e(),t._v(" "),i("el-form-item",{attrs:{label:"条件类型",prop:"conditiontype",required:""}},[i("el-select",{attrs:{placeholder:"条件类型"},model:{value:t.tmpcondition.conditiontype,callback:function(e){t.$set(t.tmpcondition,"conditiontype",e)},expression:"tmpcondition.conditiontype"}},[i("el-option",{attrs:{label:"前置条件",value:"前置条件"}})],1)],1),t._v(" "),i("el-form-item",{attrs:{label:"备注",prop:"memo"}},[i("el-input",{attrs:{type:"text",maxlength:"100","prefix-icon":"el-icon-message","auto-complete":"off"},model:{value:t.tmpcondition.memo,callback:function(e){t.$set(t.tmpcondition,"memo",e)},expression:"tmpcondition.memo"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{nativeOn:{click:function(e){e.preventDefault(),t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),"add"===t.dialogStatus?i("el-button",{attrs:{type:"danger"},nativeOn:{click:function(e){return e.preventDefault(),t.$refs.tmpcondition.resetFields()}}},[t._v("重置")]):t._e(),t._v(" "),"add"===t.dialogStatus?i("el-button",{attrs:{type:"success",loading:t.btnLoading},nativeOn:{click:function(e){return e.preventDefault(),t.addcondition(e)}}},[t._v("添加")]):t._e(),t._v(" "),"update"===t.dialogStatus?i("el-button",{attrs:{type:"success",loading:t.btnLoading},nativeOn:{click:function(e){return e.preventDefault(),t.updatecondition(e)}}},[t._v("修改")]):t._e()],1)],1)],1)},staticRenderFns:[]},h=i("VU/8")(m,u,!1,null,null,null);e.default=h.exports},IBLw:function(t,e,i){"use strict";e.d=function(t){return Object(n.a)({url:"/testcondition/search",method:"post",data:t})},e.b=function(){return Object(n.a)({url:"/testcondition/getalltestcondition",method:"get"})},e.a=function(t){return Object(n.a)({url:"/testcondition",method:"post",data:t})},e.e=function(t){return Object(n.a)({url:"/testcondition/detail",method:"put",data:t})},e.c=function(t){return Object(n.a)({url:"/testcondition/"+t,method:"delete"})};var n=i("vLgD")}});
//# sourceMappingURL=18.1836abf8119a323b7ffd.js.map