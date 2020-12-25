package com.api.autotest.test.marketingservice;

import com.alibaba.fastjson.JSONObject;
import com.api.autotest.core.TestAssert;
import com.api.autotest.core.TestCore;
import com.api.autotest.dto.RequestObject;
import org.apache.jmeter.config.Arguments;
import org.apache.jmeter.protocol.java.sampler.AbstractJavaSamplerClient;
import org.apache.jmeter.protocol.java.sampler.JavaSamplerContext;
import org.apache.jmeter.samplers.SampleResult;

import java.util.Date;

public class retrySendSmsOrFindShortUrl extends AbstractJavaSamplerClient {
    //测试核心
    private TestCore core;
    //API请求数据对象
    private RequestObject ob;
    //运行用例错误信息
    private String errorInfo="";
    //运行API用例返回值
    private String actualResult="";
    //用例运行开始时间
    private long start = 0;
    //用例运行结束时间
    private long end = 0;

    // 初始化方法，实际运行时每个线程仅执行一次
    public void setupTest(JavaSamplerContext context) {
        super.setupTest(context);
    }

    // 设置传入的参数，已设置的参数会显示到Jmeter的参数列表中
    public Arguments getDefaultParameters() {
        Arguments params = new Arguments();
        //定义一个参数，显示到Jmeter的参数列表中，第一个参数为参数默认的显示名称，第二个参数为默认值
        params.addArgument("testplanid", "11");
        params.addArgument("caseid", "15");
        params.addArgument("batchid", "11");
        params.addArgument("slaverid", "15");
        params.addArgument("batchname", "cornerservice2020-10-21-tag-100");
        params.addArgument("executeplanname", "11");
        params.addArgument("casename", "11");
        params.addArgument("expect", "/opt/");
        params.addArgument("protocal", "11");
        params.addArgument("RequestmMthod", "11");
        params.addArgument("casetype", "11");
        params.addArgument("resource", "15");
        params.addArgument("apistyle", "11");
        params.addArgument("requestcontenttype", "15");
        params.addArgument("responecontenttype", "cornerservice2020-10-21-tag-100");
        params.addArgument("headjson", "/opt/");
        params.addArgument("paramsjson", "/opt/");
        params.addArgument("bodyjson", "/opt/");
        params.addArgument("dubbojson", "/opt/");
        return params;
    }

    // 测试执行的循环体，根据线程数和循环次数的不同可执行多次，类似于LoadRunner中的Action方法
    public SampleResult runTest(JavaSamplerContext ctx) {
        SampleResult results = new SampleResult();
        //Jmeter java实例开始执行
        results.sampleStart();
        //用例多次断言信息汇总
        String assertInfo = "";
        //断言对象
        TestAssert testAssert = new TestAssert();
        try {
            // 初始化用例数据
            initalTestData(ctx);
            // 发送用例请求
            sendCaseRequest();

            //获取请求返回值actualResult转换成JSONObject对象
            JSONObject actualResultObject = JSONObject.parseObject(actualResult);

            // 断言code
            String expectCode = getCaseExpectValue("code");
            String actualCode = actualResultObject.get("code").toString();
            getLogger().info(TestCore.logplannameandcasename + "actualcode is:" + expectCode);
            // 完成期望值和实际值的比较代码，并且收集断言结果
            assertInfo = testAssert.AssertEqual(expectCode, actualCode);

            // 断言message
            String expectMessage = getCaseExpectValue("message");
            String actualMessage = actualResultObject.get("message").toString();
            getLogger().info(TestCore.logplannameandcasename + "actualMessage is:" + actualMessage);
            // 完成期望值和实际值的比较代码，并且收集断言结果
            assertInfo = testAssert.AssertEqual(expectMessage, actualMessage);

            // 断言result
            String expectResult = getCaseExpectValue("result");
            String actualResult = actualResultObject.get("result").toString();
            getLogger().info(TestCore.logplannameandcasename + "actualResult is:" + actualResult);
            // 完成期望值和实际值的比较代码，并且收集断言结果
            assertInfo = testAssert.AssertEqual(expectResult, actualResult);

        } catch (Exception ex) {
            caseException(results, testAssert, ex.getMessage());
        } finally {
            // 保存用例运行结果，Jmeter的sample运行结果
            caseFinish(results, testAssert, assertInfo);
        }
        //Jmeter事务，表示这是事务的结束点
        results.sampleEnd();
        return results;
    }


    //初始化用例的基础数据
    private void initalTestData(JavaSamplerContext ctx) throws Exception {
        getLogger().info("Hello World runTest 。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。:");
        core = new TestCore(getLogger());
        ob = core.InitHttpDatabyJmeter(ctx);
        //用例开始运行时间
        start = new Date().getTime();
    }

    //用例发送请求
    private void sendCaseRequest() throws Exception {
        actualResult = core.request(ob);
        getLogger().info(TestCore.logplannameandcasename + "请求结果 is:" + actualResult);
        // 用例结束时间
        end = new Date().getTime();
    }

    //用例运行过程中的异常信息处理
    private void caseException(SampleResult results, TestAssert testAssert, String exceptionMessage) {
        // 断言用例运行结果为失败
        testAssert.setCaseresult(false);
        errorInfo = exceptionMessage.replace("'", "");
        end = new Date().getTime();
        getLogger().error(TestCore.logplannameandcasename + "用例执行发生异常，请检查!" + exceptionMessage);
    }

    //用例运行结束收集信息
    private void caseFinish(SampleResult results, TestAssert testAssert, String assertInfo) {
        //jmeter java实例执行完成，记录结果
        results.setSuccessful(testAssert.isCaseresult());
        core.savetestcaseresult(testAssert.isCaseresult(), end - start, actualResult, assertInfo, errorInfo);
    }

    //获取用例期望值
    private String getCaseExpectValue(String expectKey) throws Exception {
        String expectValue = core.getExpectValue(expectKey);
        getLogger().info(TestCore.logplannameandcasename + "expectValue is:" + expectValue);
        return expectValue;
    }

    //结束方法，实际运行时每个线程仅执行一次
    public void teardownTest(JavaSamplerContext ctx) {
        super.teardownTest(ctx);
    }





    // 本地调试
    public static void main(String[] args) {
        Arguments params = new Arguments();
        params.addArgument("testplanid", "12");
        params.addArgument("caseid", "1");
        params.addArgument("batchid", "1");
        params.addArgument("slaverid", "5");
        params.addArgument("batchname", "xxx10000");

        params.addArgument("executeplanname", "兑换服务性能测试");
        params.addArgument("casename", "获取用户信息性能");
        params.addArgument("expect", "code=0,message= Success, result=http://b6i.cn/4Vgxk");
        params.addArgument("protocal", "https");
        params.addArgument("RequestmMthod", "get");
        params.addArgument("casetype", "性能");
        params.addArgument("resource", "https://marketing-ui.confucius.mobi/redeem/ui/retrySendSmsOrFindShortUrl");
        params.addArgument("apistyle", "普通方式");
        params.addArgument("requestcontenttype", "");
        params.addArgument("responecontenttype", "json");
        params.addArgument("headjson", "");
        params.addArgument("paramsjson", "{\"orderId\":\"2012030033263636700\",\"goodsThirdPartyType\":\"ALIPAY\",\"status\":\"OFF\"}");
        params.addArgument("bodyjson", "");
        params.addArgument("dubbojson", "");
        JavaSamplerContext ctx = new JavaSamplerContext(params);
        retrySendSmsOrFindShortUrl test = new retrySendSmsOrFindShortUrl();
        test.setupTest(ctx);
        test.runTest(ctx);
        test.teardownTest(ctx);
        System.exit(0);

    }
}
