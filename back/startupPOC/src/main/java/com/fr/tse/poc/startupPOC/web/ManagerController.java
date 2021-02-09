package com.fr.tse.poc.startupPOC.web;

import com.fr.tse.poc.startupPOC.business.Company;
import com.fr.tse.poc.startupPOC.business.Project;
import com.fr.tse.poc.startupPOC.business.User;
import com.fr.tse.poc.startupPOC.business.WorkedTime;
import com.fr.tse.poc.startupPOC.service.CompanyService;
import com.fr.tse.poc.startupPOC.service.impl.ProjectServiceImpl;
import com.fr.tse.poc.startupPOC.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ManagerController {

    @Autowired
    UserServiceImpl userService;

    @Autowired
    ProjectServiceImpl projectService;

    @Autowired
    CompanyService companyService;

    @RequestMapping(method = RequestMethod.POST, path = "/updateUserManager")
    @ResponseStatus(HttpStatus.OK)
    Boolean updateUserManager(@RequestBody Map<String,String> json){
        Long userId = Long.parseLong(json.get("userId"));
        Long managerId = Long.parseLong(json.get("managerId"));

        return userService.updateUserManager(userId,managerId);

    }

    @RequestMapping(method = RequestMethod.GET, path = "/updateUserManager")
    @ResponseStatus(HttpStatus.OK)
    List<Project> getManagerAllProjects(@RequestParam Map<String,String> json){
        Long managerId = Long.parseLong(json.get("managerId"));

        return projectService.getManagerAllProjects(managerId);

    }

    @RequestMapping(method = RequestMethod.GET, path = "/getProject")
    @ResponseStatus(HttpStatus.OK)
    Project getProject(@RequestParam Map<String,String> json){
        Long projectId = Long.parseLong(json.get("projectId"));

        return projectService.getProject(projectId);

    }

    @RequestMapping(method = RequestMethod.POST, path = "/updateProject")
    @ResponseStatus(HttpStatus.OK)
    Project updateProject(@RequestBody Map<String,String> json){
        Long projectId = Long.parseLong(json.get("projectId"));
        String name = json.get("name");
        Long workLoad = Long.parseLong(json.get("workload"));
        Long clientId = Long.parseLong(json.get("clientId"));
        Long projectManagerId = Long.parseLong(json.get("projectManagerId"));

        Company client = companyService.getCompany(clientId);
        User manager = userService.getUser(projectManagerId);

        return projectService.updateProject(projectId,name,workLoad,client,manager);

    }

    @RequestMapping(method = RequestMethod.POST, path = "/addProject")
    @ResponseStatus(HttpStatus.OK)
    Project addProject(@RequestBody Map<String,String> json){
        String name = json.get("name");
        Long workLoad = Long.parseLong(json.get("workload"));
        Long clientId = Long.parseLong(json.get("clientId"));
        Long projectManagerId = Long.parseLong(json.get("projectManagerId"));

        Company client = companyService.getCompany(clientId);
        User manager = userService.getUser(projectManagerId);

        return projectService.createProject(name,workLoad,client,manager);
    }

    @RequestMapping(method = RequestMethod.POST, path = "/addCompany")
    @ResponseStatus(HttpStatus.OK)
    Company addCompany(@RequestBody Map<String,String> json){
        String name = json.get("name");

        return companyService.createCompany(name);
    }
    @RequestMapping(method = RequestMethod.DELETE,path="/project")
    @ResponseStatus(HttpStatus.OK)
    Boolean deleteProject(@RequestBody Map<String,String> json){
        Long projectId = Long.parseLong(json.get("projectId"));

        return projectService.deleteProject(projectId);
    }
}
