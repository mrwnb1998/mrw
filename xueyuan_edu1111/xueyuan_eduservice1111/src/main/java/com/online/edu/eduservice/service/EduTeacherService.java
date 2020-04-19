package com.online.edu.eduservice.service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.online.edu.eduservice.entity.EduTeacher;
import com.baomidou.mybatisplus.extension.service.IService;
import com.online.edu.eduservice.entity.query.QueryTeacher;

/**
 * <p>
 * 讲师 服务类
 * </p>
 *
 * @author testjava
 * @since 2019-04-10
 */
public interface EduTeacherService extends IService<EduTeacher> {

    //条件查询带分页
    void pageListCondition(Page<EduTeacher> pageTeacher, QueryTeacher queryTeacher);
}
