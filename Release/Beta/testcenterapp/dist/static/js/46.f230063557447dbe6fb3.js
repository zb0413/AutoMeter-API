webpackJsonp([46],{"6XMt":function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=t("vLgD");function n(e){return Object(a.a)({url:"/apicases_condition/search",method:"post",data:e})}var s=t("2d0t"),o=t("W+bg"),c=t("nAq6"),l=t("XcM5"),p=t("0xDb"),d=t("L6vm"),r=t("vuyV"),u=t("mKAx"),m={filters:{statusFilter:function(e){return{published:"success",draft:"gray",deleted:"danger"}[e]}},data:function(){return{tmpcasedeployunitname:null,tmpcasename:null,tmpcaseapiname:null,execplanList:[],assembleList:[],casebaseconditionList:[],caseconditionList:[],searchapiList:[],apiList:[],interfaceapiList:[],caseList:[],searchcaseList:[],interfacecaseList:[],deployunitList:[],caseparamtypelist:[],caseparamsbytypelist:[],listLoading:!1,total:0,listQuery:{page:"",size:"",listLoading:!0,casedeployunitname:null,casename:null,caseapiname:null},apiQuery:{deployunitname:""},caseQuery:{deployunitname:""},apicaseQuery:{casedeployunitname:"",caseapiname:""},dialogStatus:"add",testcasevisible:!1,executeplanVisible:!1,conditiondbVisible:!1,childconditionVisible:!1,conditionintefaceVisible:!1,dialogFormVisible:!1,textMap:{updateRole:"修改前后置条件",update:"修改前后置条件",add:"添加前后置条件"},diclevelQuery:{page:1,size:30,diccode:"casecondition"},btnLoading:!1,tmpapicases_condition:{casedeployunitname:"",id:"",target:"",execplanid:"",execplanname:"",caseid:"",conditioncaseid:"",envassemid:"",caseapiname:"",casename:"",deployunitname:"",apiname:"",basetype:"",conditionbasetype:"",conditiontype:"",conditionvalue:"",connectstr:"",memo:"",creator:"admin"},search:{page:1,size:10,casedeployunitname:null,casename:null,caseapiname:null},searchassemble:{page:1,size:100,assembletype:null}}},created:function(){this.getapicases_conditionList(),this.getdepunitList(),this.getcaseconditionList()},methods:{unix2CurrentTime:p.b,targetChanged:function(e){var i=this;"执行计划"===e&&(this.executeplanVisible=!0,this.testcasevisible=!1,this.tmpapicases_condition.caseid="",this.tmpapicases_condition.casename="",Object(r.d)().then(function(e){i.execplanList=e.data}).catch(function(e){i.$message.error("加载执行计划列表失败")})),"用例"===e&&(this.executeplanVisible=!1,this.testcasevisible=!0,this.tmpapicases_condition.execplanid="",this.tmpapicases_condition.execplanname="")},prebasetypeChanged:function(e){var i=this;this.caseconditionList=[],"数据库"===e&&(this.conditionintefaceVisible=!1,this.childconditionVisible=!0,this.conditiondbVisible=!0,this.diclevelQuery.diccode="machinedeploy",Object(d.c)(this.diclevelQuery).then(function(e){i.caseconditionList=e.data.list}).catch(function(e){i.$message.error("加载用例条件数据库条件失败")})),"接口"===e&&(this.conditiondbVisible=!1,this.childconditionVisible=!1,this.conditionintefaceVisible=!0,this.diclevelQuery.diccode="Caseinterface"),this.tmpapicases_condition.conditionvalue=""},conditiontypeChanged:function(e){var i=this;this.assembleList=[],this.searchassemble.assembletype=e,this.tmpapicases_condition.connectstr="",this.tmpapicases_condition.conditionvalue="",Object(u.d)(this.searchassemble).then(function(e){i.assembleList=e.data.list}).catch(function(e){i.$message.error("加载api列表失败")})},connectstrChanged:function(e){for(var i=0;i<this.assembleList.length;i++)this.assembleList[i].connectstr===e&&(this.tmpapicases_condition.envassemid=this.assembleList[i].id)},conditionvalueChanged:function(e){for(var i=0;i<this.interfacecaseList.length;i++)this.interfacecaseList[i].casename===e&&(this.tmpapicases_condition.conditioncaseid=this.interfacecaseList[i].id)},execplanChanged:function(e){for(var i=0;i<this.execplanList.length;i++)this.execplanList[i].executeplanname===e&&(this.tmpapicases_condition.execplanid=this.execplanList[i].id)},conditiondeploynameChanged:function(e){var i=this;this.interfaceapiList=[],this.apiQuery.deployunitname=e,Object(o.c)(this.apiQuery).then(function(e){i.interfaceapiList=e.data}).catch(function(e){i.$message.error("加载api列表失败")})},handleClickTableRow:function(e,i,t){},handleSelectionChange:function(e){this.multipleSelection=e,console.log("apicase00000000000000000000000000"),console.log(this.multipleSelection)},getcaseconditionList:function(){var e=this;Object(d.c)(this.diclevelQuery).then(function(i){e.casebaseconditionList=i.data.list}).catch(function(i){e.$message.error("加载用例基本条件失败")})},selectparamsChanged:function(e){this.getcaseparamsbytype(e)},getapicases_conditionList:function(){var e,i=this;this.listLoading=!0,(e=this.listQuery,Object(a.a)({url:"/apicases_condition",method:"get",params:e})).then(function(e){i.apicases_conditionList=e.data.list,i.total=e.data.total,i.listLoading=!1}).catch(function(e){i.$message.error("加载用例列表失败")})},selectChanged:function(e){var i=this;this.apiList=[],this.caseQuery.deployunitname=e,Object(o.c)(this.caseQuery).then(function(e){i.apiList=e.data}).catch(function(e){i.$message.error("加载api列表失败")})},searchapiselectChanged:function(e){var i=this;this.search.casename="",this.searchcaseList=[],this.apicaseQuery.casedeployunitname=this.search.casedeployunitname,this.apicaseQuery.caseapiname=e,Object(s.c)(this.apicaseQuery).then(function(e){i.searchcaseList=e.data}).catch(function(e){i.$message.error("查询加载api用例列表失败")})},apiselectChanged:function(e){var i=this;this.caseList=[],this.apicaseQuery.casedeployunitname=this.tmpapicases_condition.casedeployunitname,this.apicaseQuery.caseapiname=e,Object(s.c)(this.apicaseQuery).then(function(e){i.caseList=e.data}).catch(function(e){i.$message.error("加载api用例列表失败")})},conditionapinameChanged:function(e){var i=this;this.apicaseQuery.casedeployunitname=this.tmpapicases_condition.deployunitname,this.apicaseQuery.caseapiname=e,Object(s.c)(this.apicaseQuery).then(function(e){i.interfacecaseList=e.data}).catch(function(e){i.$message.error("加载api用例列表失败")})},deployunitselectChanged:function(e){var i=this;this.apiList=[],this.search.casename="",this.search.caseapiname="",this.apiQuery.deployunitname=e,Object(o.c)(this.apiQuery).then(function(e){i.searchapiList=e.data}).catch(function(e){i.$message.error("加载api列表失败")})},getdepunitList:function(){var e=this;this.listLoading=!0,Object(l.d)(this.listQuery).then(function(i){e.deployunitList=i.data.list,e.listLoading=!1}).catch(function(i){e.$message.error("加载发布单元列表失败")})},searchBy:function(){var e=this;this.btnLoading=!0,this.listLoading=!0,n(this.search).then(function(i){e.apicases_conditionList=i.data.list,e.total=i.data.total}).catch(function(i){e.$message.error("搜索失败")}),this.tmpcasedeployunitname=this.search.casedeployunitname,this.tmpcasename=this.search.casename,this.tmpcaseapiname=this.search.caseapiname,this.listLoading=!1,this.btnLoading=!1},searchBypageing:function(){var e=this;this.btnLoading=!0,this.listLoading=!0,this.listQuery.casedeployunitname=this.tmpcasedeployunitname,this.listQuery.casename=this.tmpcasename,this.listQuery.caseapiname=this.tmpcaseapiname,n(this.listQuery).then(function(i){e.apicases_conditionList=i.data.list,e.total=i.data.total}).catch(function(i){e.$message.error("搜索失败")}),this.listLoading=!1,this.btnLoading=!1},handleSizeChange:function(e){this.listQuery.size=e,this.listQuery.page=1,this.searchBypageing()},handleCurrentChange:function(e){this.listQuery.page=e,this.searchBypageing()},getIndex:function(e){return(this.listQuery.page-1)*this.listQuery.size+e+1},showAddapicases_conditionDialog:function(){this.dialogFormVisible=!0,this.dialogStatus="add",this.tmpapicases_condition.id="",this.tmpapicases_condition.execplanname="",this.tmpapicases_condition.target="",this.tmpapicases_condition.casedeployunitname="",this.tmpapicases_condition.caseapiname="",this.tmpapicases_condition.casename="",this.tmpapicases_condition.apiname="",this.tmpapicases_condition.basetype="",this.tmpapicases_condition.conditionbasetype="",this.tmpapicases_condition.conditiontype="",this.tmpapicases_condition.deployunitname="",this.tmpapicases_condition.conditionvalue="",this.tmpapicases_condition.connectstr="",this.tmpapicases_condition.memo="",this.conditiondbVisible=!1,this.conditionintefaceVisible=!1,this.childconditionVisible=!1,this.assembleList=[]},addapicases_condition:function(){var e=this;this.$refs.tmpapicases_condition.validate(function(i){if(i){for(var t=0;t<e.caseList.length;t++)e.caseList[t].casename===e.tmpapicases_condition.casename&&(e.tmpapicases_condition.caseid=e.caseList[t].id);e.btnLoading=!0,(n=e.tmpapicases_condition,Object(a.a)({url:"/apicases_condition",method:"post",data:n})).then(function(){e.$message.success("添加成功"),e.getapicases_conditionList(),e.dialogFormVisible=!1,e.btnLoading=!1}).catch(function(i){e.$message.error("添加失败"),e.btnLoading=!1})}var n})},addapicases_conditiondata:function(){var e=this;this.tmpapicases_conditiondata.casedataMap=[],this.$refs.tmpapicases_conditiondata.validate(function(i){if(i)for(var t=0;t<e.tmpcaseparamslist.length;t++)for(var a=0;a<e.paraList.length;a++)if(t===a){var n={caseid:e.apicases_conditionList[e.caseindex].id,casename:e.apicases_conditionList[e.caseindex].casename,apiparam:e.tmpcaseparamslist[t],apiparamvalue:e.paraList[a],propertytype:e.tmpapicases_conditiondata.propertytype,memo:"memo"};console.log(n),e.tmpapicases_conditiondata.casedataMap.push(n)}})},showUpdateapicases_conditionDialog:function(e){var i=this;this.dialogFormVisible=!0,this.dialogStatus="update",this.tmpapicases_condition.id=this.apicases_conditionList[e].id,this.tmpapicases_condition.execplanname=this.apicases_conditionList[e].execplanname,this.tmpapicases_condition.target=this.apicases_conditionList[e].target,this.tmpapicases_condition.casedeployunitname=this.apicases_conditionList[e].casedeployunitname,this.tmpapicases_condition.caseapiname=this.apicases_conditionList[e].caseapiname,this.tmpapicases_condition.apiname=this.apicases_conditionList[e].apiname,this.tmpapicases_condition.casename=this.apicases_conditionList[e].casename,this.tmpapicases_condition.basetype=this.apicases_conditionList[e].basetype,this.tmpapicases_condition.conditionbasetype=this.apicases_conditionList[e].conditionbasetype,this.tmpapicases_condition.conditiontype=this.apicases_conditionList[e].conditiontype,this.tmpapicases_condition.conditionvalue=this.apicases_conditionList[e].conditionvalue,this.tmpapicases_condition.deployunitname=this.apicases_conditionList[e].deployunitname,this.tmpapicases_condition.memo=this.apicases_conditionList[e].memo,this.tmpapicases_condition.connectstr=this.apicases_conditionList[e].connectstr,this.selectChanged(this.tmpapicases_condition.casedeployunitname),this.conditiondeploynameChanged(this.tmpapicases_condition.deployunitname),this.apiselectChanged(this.apicases_conditionList[e].apiname),this.conditionapinameChanged(this.apicases_conditionList[e].caseapiname),"接口"===this.apicases_conditionList[e].conditionbasetype?(this.conditiondbVisible=!1,this.childconditionVisible=!1,this.conditionintefaceVisible=!0):(this.conditiondbVisible=!0,this.childconditionVisible=!0,this.conditionintefaceVisible=!1,this.diclevelQuery.diccode="machinedeploy",Object(d.c)(this.diclevelQuery).then(function(e){i.caseconditionList=e.data.list}).catch(function(e){i.$message.error("加载用例条件数据库条件失败")})),"执行计划"===this.tmpapicases_condition.target&&(this.executeplanVisible=!0,this.testcasevisible=!1,this.tmpapicases_condition.caseid="",this.tmpapicases_condition.casename="",this.tmpapicases_condition.execplanid=this.apicases_conditionList[e].execplanid,Object(r.d)().then(function(e){i.execplanList=e.data}).catch(function(e){i.$message.error("加载执行计划列表失败")})),"用例"===this.tmpapicases_condition.target&&(this.executeplanVisible=!1,this.testcasevisible=!0,this.tmpapicases_condition.execplanid="",this.tmpapicases_condition.execplanname="",this.tmpapicases_condition.caseid=this.apicases_conditionList[e].caseid)},showUpdateapicases_conditionparamsDialog:function(e){var i=this;this.tmpapicases_conditiondata.caseid=this.apicases_conditionList[e].id,this.tmpapicases_condition.casename=this.apicases_conditionList[e].casename,this.tmpapicases_condition.deployunitname=this.apicases_conditionList[e].deployunitname,this.tmpapicases_condition.apiname=this.apicases_conditionList[e].apiname,this.caseindex=e,this.tmpcaseparamslist=null,this.tmpapicases_conditiondata.propertytype=null,this.caseparamtypelist=null,this.paramdialogFormVisible=!0,Object(c.b)(this.tmpapicases_condition).then(function(e){i.caseparamsbytypelist=e.data.list,i.caseparamtypelist=i.caseparamsbytypelist,console.log(i.caseparamtypelist)}).catch(function(e){i.$message.error()})},showpreconditionDialog:function(){this.multipleSelection.length>1?this.$message.error("不支持多个用例一起设置条件，选择单个设置"):(this.preconditiondialogFormVisible=!0,this.tmpapicases_condition.id=this.multipleSelection[0].id)},updateapicases_condition:function(){var e=this;this.$refs.tmpapicases_condition.validate(function(i){var t;i&&(t=e.tmpapicases_condition,Object(a.a)({url:"/apicases_condition/detail",method:"put",data:t})).then(function(){e.$message.success("更新成功"),e.getapicases_conditionList(),e.dialogFormVisible=!1}).catch(function(i){e.$message.error("更新失败")})})},removeapicases_condition:function(e){var i=this;this.$confirm("删除该用例？","警告",{confirmButtonText:"是",cancelButtonText:"否",type:"warning"}).then(function(){var t,n=i.apicases_conditionList[e].id;(t=n,Object(a.a)({url:"/apicases_condition/"+t,method:"delete"})).then(function(){i.$message.success("删除成功"),i.getapicases_conditionList()})}).catch(function(){i.$message.info("已取消删除")})},isUniqueDetail:function(e){for(var i=0;i<this.apicases_conditionList.length;i++)if(this.apicases_conditionList[i].id!==e.id&&this.apicases_conditionList[i].deployunitname===e.deployunitname&&this.apicases_conditionList[i].apiname===e.apiname&&this.apicases_conditionList[i].casename===e.casename)return this.$message.error("用例名已存在"),!1;return!0}}},h={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"app-container"},[t("div",{staticClass:"filter-container"},[t("el-form",{attrs:{inline:!0}},[t("el-form-item",[e.hasPermission("apicases_condition:list")?t("el-button",{attrs:{type:"success",size:"mini",icon:"el-icon-refresh"},nativeOn:{click:function(i){return i.preventDefault(),e.getapicases_conditionList(i)}}},[e._v("刷新\n        ")]):e._e(),e._v(" "),e.hasPermission("apicases_condition:add")?t("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},nativeOn:{click:function(i){return i.preventDefault(),e.showAddapicases_conditionDialog(i)}}},[e._v("添加前后置条件\n        ")]):e._e()],1),e._v(" "),e.hasPermission("apicases_condition:search")?t("span",[t("el-form-item",[t("el-select",{attrs:{placeholder:"发布单元"},on:{change:function(i){return e.deployunitselectChanged(i)}},model:{value:e.search.casedeployunitname,callback:function(i){e.$set(e.search,"casedeployunitname",i)},expression:"search.casedeployunitname"}},[t("el-option",{attrs:{label:"请选择",value:""}}),e._v(" "),e._l(e.deployunitList,function(e,i){return t("div",{key:i},[t("el-option",{attrs:{label:e.deployunitname,value:e.deployunitname}})],1)})],2)],1),e._v(" "),t("el-form-item",[t("el-select",{attrs:{placeholder:"api名"},on:{change:function(i){return e.searchapiselectChanged(i)}},model:{value:e.search.caseapiname,callback:function(i){e.$set(e.search,"caseapiname",i)},expression:"search.caseapiname"}},[t("el-option",{attrs:{label:"请选择",value:""}}),e._v(" "),e._l(e.searchapiList,function(e,i){return t("div",{key:i},[t("el-option",{attrs:{label:e.apiname,value:e.apiname}})],1)})],2)],1),e._v(" "),t("el-form-item",[t("el-select",{attrs:{placeholder:"用例"},model:{value:e.search.casename,callback:function(i){e.$set(e.search,"casename",i)},expression:"search.casename"}},[t("el-option",{attrs:{label:"请选择",value:""}}),e._v(" "),e._l(e.searchcaseList,function(e,i){return t("div",{key:i},[t("el-option",{attrs:{label:e.casename,value:e.casename}})],1)})],2)],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.searchBy}},[e._v("查询")])],1)],1):e._e()],1)],1),e._v(" "),t("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],ref:"fileTable",attrs:{data:e.apicases_conditionList,"element-loading-text":"loading",border:"",fit:"","highlight-current-row":""}},[t("el-table-column",{attrs:{label:"编号",align:"center",width:"50"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("span",{domProps:{textContent:e._s(e.getIndex(i.$index))}})]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"计划名",align:"center",prop:"execplanname",width:"80"}}),e._v(" "),t("el-table-column",{attrs:{label:"用例名",align:"center",prop:"casename",width:"80"}}),e._v(" "),t("el-table-column",{attrs:{label:"前后置",align:"center",prop:"basetype",width:"80"}}),e._v(" "),t("el-table-column",{attrs:{label:"基础分类",align:"center",prop:"conditionbasetype",width:"80"}}),e._v(" "),t("el-table-column",{attrs:{label:"条件类型",align:"center",prop:"conditiontype",width:"80"}}),e._v(" "),t("el-table-column",{attrs:{label:"接口所属单元",align:"center",prop:"deployunitname",width:"100"}}),e._v(" "),t("el-table-column",{attrs:{label:"数据库连接",align:"center",prop:"connectstr",width:"100"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("el-popover",{attrs:{trigger:"hover",placement:"top"}},[t("p",[e._v(e._s(i.row.connectstr))]),e._v(" "),t("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[t("el-tag",{attrs:{size:"medium"}},[e._v("...")])],1)])]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"条件详情(接口，sql)",align:"center",prop:"conditionvalue",width:"150"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("el-popover",{attrs:{trigger:"hover",placement:"top"}},[t("p",[e._v(e._s(i.row.conditionvalue))]),e._v(" "),t("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[t("el-tag",{attrs:{size:"medium"}},[e._v("...")])],1)])]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"备注",align:"center",prop:"memo",width:"60"}}),e._v(" "),t("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"100"},scopedSlots:e._u([{key:"default",fn:function(i){return[e._v(e._s(e.unix2CurrentTime(i.row.createTime)))]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"最后修改时间",align:"center",prop:"lastmodifyTime",width:"100"},scopedSlots:e._u([{key:"default",fn:function(i){return[e._v(e._s(e.unix2CurrentTime(i.row.lastmodifyTime))+"\n      ")]}}])}),e._v(" "),e.hasPermission("apicases_condition:update")||e.hasPermission("apicases_condition:delete")?t("el-table-column",{attrs:{label:"管理",align:"center"},scopedSlots:e._u([{key:"default",fn:function(i){return[e.hasPermission("apicases_condition:update")&&i.row.id!==e.id?t("el-button",{attrs:{type:"warning",size:"mini"},nativeOn:{click:function(t){return t.preventDefault(),e.showUpdateapicases_conditionDialog(i.$index)}}},[e._v("修改\n        ")]):e._e(),e._v(" "),e.hasPermission("apicases_condition:delete")&&i.row.id!==e.id?t("el-button",{attrs:{type:"danger",size:"mini"},nativeOn:{click:function(t){return t.preventDefault(),e.removeapicases_condition(i.$index)}}},[e._v("删除\n        ")]):e._e(),e._v(" "),e.hasPermission("apicases_condition:params")&&i.row.id!==e.id?t("el-button",{attrs:{type:"primary",size:"mini"},nativeOn:{click:function(t){return t.preventDefault(),e.showUpdateapicases_conditionparamsDialog(i.$index)}}},[e._v("参数值\n        ")]):e._e()]}}],null,!1,1713385276)}):e._e()],1),e._v(" "),t("el-pagination",{attrs:{"current-page":e.listQuery.page,"page-size":e.listQuery.size,total:e.total,"page-sizes":[10,20,30,40],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),t("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(i){e.dialogFormVisible=i}}},[t("el-form",{ref:"tmpapicases_condition",staticClass:"small-space",staticStyle:{width:"500px","margin-left":"50px"},attrs:{"status-icon":"","label-position":"left","label-width":"180px",model:e.tmpapicases_condition}},[t("el-form-item",{attrs:{label:"条件目标",prop:"target",required:""}},[t("el-select",{attrs:{placeholder:"条件目标"},on:{change:function(i){return e.targetChanged(i)}},model:{value:e.tmpapicases_condition.target,callback:function(i){e.$set(e.tmpapicases_condition,"target",i)},expression:"tmpapicases_condition.target"}},[t("el-option",{attrs:{label:"用例",value:"用例"}}),e._v(" "),t("el-option",{attrs:{label:"执行计划",value:"执行计划"}})],1)],1),e._v(" "),e.testcasevisible?t("div",[t("el-form-item",{attrs:{label:"发布单元",prop:"casedeployunitname",required:""}},[t("el-select",{attrs:{placeholder:"发布单元"},on:{change:function(i){return e.selectChanged(i)}},model:{value:e.tmpapicases_condition.casedeployunitname,callback:function(i){e.$set(e.tmpapicases_condition,"casedeployunitname",i)},expression:"tmpapicases_condition.casedeployunitname"}},[t("el-option",{staticStyle:{display:"none"},attrs:{label:"请选择",value:"''"}}),e._v(" "),e._l(e.deployunitList,function(e,i){return t("div",{key:i},[t("el-option",{attrs:{label:e.deployunitname,value:e.deployunitname,required:""}})],1)})],2)],1),e._v(" "),t("el-form-item",{attrs:{label:"API",prop:"caseapiname",required:""}},[t("el-select",{attrs:{placeholder:"API"},on:{change:function(i){return e.apiselectChanged(i)}},model:{value:e.tmpapicases_condition.caseapiname,callback:function(i){e.$set(e.tmpapicases_condition,"caseapiname",i)},expression:"tmpapicases_condition.caseapiname"}},[t("el-option",{staticStyle:{display:"none"},attrs:{label:"请选择",value:"''"}}),e._v(" "),e._l(e.apiList,function(e,i){return t("div",{key:i},[t("el-option",{attrs:{label:e.apiname,value:e.apiname,required:""}})],1)})],2)],1),e._v(" "),t("el-form-item",{attrs:{label:"用例",prop:"casename",required:""}},[t("el-select",{attrs:{placeholder:"用例"},model:{value:e.tmpapicases_condition.casename,callback:function(i){e.$set(e.tmpapicases_condition,"casename",i)},expression:"tmpapicases_condition.casename"}},[t("el-option",{staticStyle:{display:"none"},attrs:{label:"请选择",value:"''"}}),e._v(" "),e._l(e.caseList,function(e,i){return t("div",{key:i},[t("el-option",{attrs:{label:e.casename,value:e.casename,required:""}})],1)})],2)],1)],1):e._e(),e._v(" "),e.executeplanVisible?t("div",[t("el-form-item",{attrs:{label:"执行计划",prop:"execplanname",required:""}},[t("el-select",{attrs:{placeholder:"执行计划"},on:{change:function(i){return e.execplanChanged(i)}},model:{value:e.tmpapicases_condition.execplanname,callback:function(i){e.$set(e.tmpapicases_condition,"execplanname",i)},expression:"tmpapicases_condition.execplanname"}},[t("el-option",{staticStyle:{display:"none"},attrs:{label:"请选择",value:"''"}}),e._v(" "),e._l(e.execplanList,function(e,i){return t("div",{key:i},[t("el-option",{attrs:{label:e.executeplanname,value:e.executeplanname}})],1)})],2)],1)],1):e._e(),e._v(" "),t("el-form-item",{attrs:{label:"条件类型",prop:"basetype",required:""}},[t("el-select",{attrs:{placeholder:"条件类型"},model:{value:e.tmpapicases_condition.basetype,callback:function(i){e.$set(e.tmpapicases_condition,"basetype",i)},expression:"tmpapicases_condition.basetype"}},[t("el-option",{attrs:{label:"前置条件",value:"前置条件"}}),e._v(" "),t("el-option",{attrs:{label:"后置条件",value:"后置条件"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"基础类型",prop:"conditionbasetype",required:""}},[t("el-select",{attrs:{placeholder:"基础类型"},on:{change:function(i){return e.prebasetypeChanged(i)}},model:{value:e.tmpapicases_condition.conditionbasetype,callback:function(i){e.$set(e.tmpapicases_condition,"conditionbasetype",i)},expression:"tmpapicases_condition.conditionbasetype"}},[t("el-option",{staticStyle:{display:"none"},attrs:{label:"请选择",value:"''"}}),e._v(" "),e._l(e.casebaseconditionList,function(e,i){return t("div",{key:i},[t("el-option",{attrs:{label:e.dicitmevalue,value:e.dicitmevalue}})],1)})],2)],1),e._v(" "),e.childconditionVisible?t("div",[t("el-form-item",{attrs:{label:"子类型",prop:"conditiontype",required:""}},[t("el-select",{attrs:{placeholder:"子类型"},on:{change:function(i){return e.conditiontypeChanged(i)}},model:{value:e.tmpapicases_condition.conditiontype,callback:function(i){e.$set(e.tmpapicases_condition,"conditiontype",i)},expression:"tmpapicases_condition.conditiontype"}},[t("el-option",{staticStyle:{display:"none"},attrs:{label:"请选择",value:"''"}}),e._v(" "),e._l(e.caseconditionList,function(e,i){return t("div",{key:i},[t("el-option",{attrs:{label:e.dicitmevalue,value:e.dicitmevalue}})],1)})],2)],1)],1):e._e(),e._v(" "),e.conditiondbVisible?t("div",[t("el-form-item",{attrs:{label:"类型值",prop:"conditionvalue",required:""}},[t("el-input",{attrs:{type:"textarea",maxlength:"400","prefix-icon":"el-icon-message","auto-complete":"off",placeholder:"在用例执行前会先执行如下sql，如有多条，用英文逗号分开"},model:{value:e.tmpapicases_condition.conditionvalue,callback:function(i){e.$set(e.tmpapicases_condition,"conditionvalue",i)},expression:"tmpapicases_condition.conditionvalue"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"连接字",prop:"connectstr",required:""}},[t("el-select",{attrs:{placeholder:"数据库连接字"},on:{change:function(i){return e.connectstrChanged(i)}},model:{value:e.tmpapicases_condition.connectstr,callback:function(i){e.$set(e.tmpapicases_condition,"connectstr",i)},expression:"tmpapicases_condition.connectstr"}},[t("el-option",{staticStyle:{display:"none"},attrs:{label:"请选择",value:"''"}}),e._v(" "),e._l(e.assembleList,function(e,i){return t("div",{key:i},[t("el-option",{attrs:{label:e.connectstr,value:e.connectstr,required:""}})],1)})],2)],1)],1):e._e(),e._v(" "),e.conditionintefaceVisible?t("div",[t("el-form-item",{attrs:{label:"接口单元",prop:"deployunitname",required:""}},[t("el-select",{attrs:{placeholder:"接口所属单元"},on:{change:function(i){return e.conditiondeploynameChanged(i)}},model:{value:e.tmpapicases_condition.deployunitname,callback:function(i){e.$set(e.tmpapicases_condition,"deployunitname",i)},expression:"tmpapicases_condition.deployunitname"}},[t("el-option",{staticStyle:{display:"none"},attrs:{label:"请选择",value:"''"}}),e._v(" "),e._l(e.deployunitList,function(e,i){return t("div",{key:i},[t("el-option",{attrs:{label:e.deployunitname,value:e.deployunitname,required:""}})],1)})],2)],1),e._v(" "),t("el-form-item",{attrs:{label:"API",prop:"apiname",required:""}},[t("el-select",{attrs:{placeholder:"API"},on:{change:function(i){return e.conditionapinameChanged(i)}},model:{value:e.tmpapicases_condition.apiname,callback:function(i){e.$set(e.tmpapicases_condition,"apiname",i)},expression:"tmpapicases_condition.apiname"}},[t("el-option",{staticStyle:{display:"none"},attrs:{label:"请选择",value:"''"}}),e._v(" "),e._l(e.interfaceapiList,function(e,i){return t("div",{key:i},[t("el-option",{attrs:{label:e.apiname,value:e.apiname,required:""}})],1)})],2)],1),e._v(" "),t("el-form-item",{attrs:{label:"接口",prop:"conditionvalue",required:""}},[t("el-select",{attrs:{placeholder:"接口"},on:{change:function(i){return e.conditionvalueChanged(i)}},model:{value:e.tmpapicases_condition.conditionvalue,callback:function(i){e.$set(e.tmpapicases_condition,"conditionvalue",i)},expression:"tmpapicases_condition.conditionvalue"}},[t("el-option",{staticStyle:{display:"none"},attrs:{label:"请选择",value:"''"}}),e._v(" "),e._l(e.interfacecaseList,function(e,i){return t("div",{key:i},[t("el-option",{attrs:{label:e.casename,value:e.casename,required:""}})],1)})],2)],1)],1):e._e(),e._v(" "),t("el-form-item",{attrs:{label:"备注",prop:"memo"}},[t("el-input",{attrs:{type:"text",maxlength:"100","prefix-icon":"el-icon-message","auto-complete":"off"},model:{value:e.tmpapicases_condition.memo,callback:function(i){e.$set(e.tmpapicases_condition,"memo",i)},expression:"tmpapicases_condition.memo"}})],1)],1),e._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{nativeOn:{click:function(i){i.preventDefault(),e.dialogFormVisible=!1}}},[e._v("取消")]),e._v(" "),"add"===e.dialogStatus?t("el-button",{attrs:{type:"danger"},nativeOn:{click:function(i){return i.preventDefault(),e.$refs.tmpapicases_condition.resetFields()}}},[e._v("重置\n      ")]):e._e(),e._v(" "),"add"===e.dialogStatus?t("el-button",{attrs:{type:"success",loading:e.btnLoading},nativeOn:{click:function(i){return i.preventDefault(),e.addapicases_condition(i)}}},[e._v("添加\n      ")]):e._e(),e._v(" "),"update"===e.dialogStatus?t("el-button",{attrs:{type:"success",loading:e.btnLoading},nativeOn:{click:function(i){return i.preventDefault(),e.updateapicases_condition(i)}}},[e._v("修改\n      ")]):e._e()],1)],1)],1)},staticRenderFns:[]},_=t("VU/8")(m,h,!1,null,null,null);i.default=_.exports}});
//# sourceMappingURL=46.f230063557447dbe6fb3.js.map