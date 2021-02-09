package com.fr.tse.poc.startupPOC.web;

import com.fr.tse.poc.startupPOC.business.Project;
import com.fr.tse.poc.startupPOC.business.User;
import com.fr.tse.poc.startupPOC.business.WorkedTime;
import com.fr.tse.poc.startupPOC.service.impl.ProjectServiceImpl;
import com.fr.tse.poc.startupPOC.service.impl.UserServiceImpl;
import com.fr.tse.poc.startupPOC.service.impl.WorkedTimeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    WorkedTimeServiceImpl workedTimeService;

    @Autowired
    UserServiceImpl userService;

    @Autowired
    ProjectServiceImpl projectService;

    @RequestMapping(method = RequestMethod.GET, path = "/getTimeUser")
    @ResponseStatus(HttpStatus.OK)
    List<WorkedTime> getTimeUser(Long userId){
       return workedTimeService.getUserAllWorkedTimes(userId);
    }

    @RequestMapping(method = RequestMethod.POST, path = "/addWorkedTime")
    @ResponseStatus(HttpStatus.CREATED)
    WorkedTime addWorkedTime(Long userId, LocalDate startDate, Long duree, Project project){
        User userSelected = userService.getUser(userId);
        return workedTimeService.addWorkedTime(startDate,duree,userSelected,project);
    }

    @RequestMapping(method = RequestMethod.POST, path = "/updateWorkedTime")
    @ResponseStatus(HttpStatus.OK)
    WorkedTime updateWorkedTime(Long workedTimeId, LocalDate startDate, Long duree,Long userId, Long projectId){
        User userSelected = userService.getUser(userId);
        WorkedTime workedTimeSelected = workedTimeService.getWorkedTime(workedTimeId);
        Project projectSelected = projectService.getProject(projectId);
        return workedTimeService.updateWorkedTime(workedTimeId,startDate,duree,userSelected,projectSelected);
    }
}
