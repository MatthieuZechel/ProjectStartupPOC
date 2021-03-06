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
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.stream.Collector;
import java.util.stream.Collectors;

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
    List<WorkedTime> getTimeUser(@RequestParam Map<String,String> json){
        Long userId = Long.parseLong(json.get("userId"));
       return workedTimeService.getUserAllWorkedTimes(userId);
    }

    @RequestMapping(method = RequestMethod.POST, path = "/addWorkedTime")
    @ResponseStatus(HttpStatus.CREATED)
    WorkedTime addWorkedTime(@RequestBody Map<String,String> json){
        Long userId = Long.parseLong(json.get("userId"));
        LocalDateTime startDate = LocalDateTime.parse(json.get("startDate"));
        Long duree = Long.parseLong(json.get("duree"));
        Long projectId = Long.parseLong(json.get("projectId"));

        User userSelected = userService.getUser(userId);
        Project projectSelected = projectService.getProject(projectId);
        return workedTimeService.addWorkedTime(startDate,duree,userSelected,projectSelected);
    }

    @RequestMapping(method = RequestMethod.POST, path = "/updateWorkedTime")
    @ResponseStatus(HttpStatus.OK)
    WorkedTime updateWorkedTime(@RequestBody Map<String,String> json){
        Long workedTimeId = Long.parseLong(json.get("workedTimeId"));
        LocalDateTime startDate = LocalDateTime.parse(json.get("startDate"));
        Long duree = Long.parseLong(json.get("duree"));
        Long userId = Long.parseLong(json.get("userId"));
        Long projectId = Long.parseLong(json.get("projectId"));

        User userSelected = userService.getUser(userId);
        WorkedTime workedTimeSelected = workedTimeService.getWorkedTime(workedTimeId);
        Project projectSelected = projectService.getProject(projectId);
        return workedTimeService.updateWorkedTime(workedTimeId,startDate,duree,userSelected,projectSelected);
    }

    @RequestMapping(method = RequestMethod.GET, path = "/getUserProjects")
    @ResponseStatus(HttpStatus.OK)
    List<Project> getUserProjects(@RequestParam Map<String,String> json){
        Long userId = Long.parseLong(json.get("userId"));
        List<WorkedTime> allWT =  workedTimeService.getUserAllWorkedTimes(userId);
        return allWT.stream().map(WorkedTime::getProject).distinct().collect(Collectors.toList());
    }
}
