package com.zoctan.api.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.zoctan.api.core.response.Result;
import com.zoctan.api.core.response.ResultGenerator;
import com.zoctan.api.entity.Deployunit;
import com.zoctan.api.service.DeployunitService;
import org.springframework.web.bind.annotation.*;
import tk.mybatis.mapper.entity.Condition;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * @author Zoctan
 * @date 2020/04/17
 */
@RestController
@RequestMapping("/deployunit")
public class DeployunitController {
    @Resource
    private DeployunitService deployunitService;

    @PostMapping
    public Result add(@RequestBody Deployunit deployunit) {
        Condition con=new Condition(Deployunit.class);
        con.createCriteria().andCondition("deployunitname = '" + deployunit.getDeployunitname() + "'");
        if(deployunitService.ifexist(con)>0)
        {
            return ResultGenerator.genFailedResult("此发布单元已经存在");
        }
        else
        {
            deployunitService.save(deployunit);
            return ResultGenerator.genOkResult();
        }

    }

    @DeleteMapping("/{id}")
    public Result delete(@PathVariable Long id) {
        deployunitService.deleteById(id);
        return ResultGenerator.genOkResult();
    }

    @PatchMapping
    public Result update(@RequestBody Deployunit deployunit) {
        deployunitService.update(deployunit);
        return ResultGenerator.genOkResult();
    }

    @GetMapping("/{id}")
    public Result detail(@PathVariable Long id) {
        Deployunit deployunit = deployunitService.getById(id);
        return ResultGenerator.genOkResult(deployunit);
    }

    @GetMapping("/getdeploynum")
    public Result getdeploynum() {
        Integer deployunitnum = deployunitService.getdeploynum();
        return ResultGenerator.genOkResult(deployunitnum);
    }

    @GetMapping
    public Result list(@RequestParam(defaultValue = "0") Integer page,
                       @RequestParam(defaultValue = "0") Integer size) {
        PageHelper.startPage(page, size);
        List<Deployunit> list = deployunitService.listAll();
        PageInfo<Deployunit> pageInfo = PageInfo.of(list);
        return ResultGenerator.genOkResult(pageInfo);
    }

    @GetMapping("/getdeplist")
    public Result listall() {
        List<Deployunit> list = deployunitService.listAll();
        return ResultGenerator.genOkResult(list);
    }


    /**
     * 更新自己的资料
     */
    @PutMapping("/detail")
    public Result updateDeploy(@RequestBody final Deployunit deployunit) {
        Condition con=new Condition(Deployunit.class);
        con.createCriteria().andCondition("deployunitname = '" + deployunit.getDeployunitname() + "'")
                .andCondition("id <> " + deployunit.getId());
        if(deployunitService.ifexist(con)>0)
        {
            return ResultGenerator.genFailedResult("此发布单元已经存在");
        }
        else
        {
            this.deployunitService.updateDeploy(deployunit);
            return ResultGenerator.genOkResult();
        }
    }

    /**
     * 输入框查询
     */
    @PostMapping("/search")
    public Result search(@RequestBody final Map<String, Object> param) {
        PageHelper.startPage((Integer) param.get("page"), (Integer) param.get("size"));
        final List<Deployunit> list = this.deployunitService.findDeployWithName(param);
        final PageInfo<Deployunit> pageInfo = new PageInfo<>(list);
        return ResultGenerator.genOkResult(pageInfo);
    }
}
