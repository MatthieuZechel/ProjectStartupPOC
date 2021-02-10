package com.fr.tse.poc.startupPOC.web;

import com.fr.tse.poc.startupPOC.business.Project;
import com.fr.tse.poc.startupPOC.business.User;
import com.fr.tse.poc.startupPOC.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {

    @Autowired
    UserServiceImpl userService;

    @RequestMapping(method = RequestMethod.GET, path = "/getAllManager")
    @ResponseStatus(HttpStatus.OK)
    List<User> getAllManager(){

        return userService.getAllManager();

    }

    @RequestMapping(method = RequestMethod.POST, path = "/createUser")
    @ResponseStatus(HttpStatus.OK)
    User createUser(@RequestBody Map<String,String> json){
        String userLastName = json.get("userLastName");
        String userName = json.get("userName");
        String email = json.get("email");
        String password = json.get("password");
        String profile = json.get("profile");
        Long managerId = Long.parseLong(json.get("managerId"));

        return userService.createUser(userLastName,userName,email,password,profile,managerId);

    }

    @RequestMapping(method = RequestMethod.POST, path = "/updateUser")
    @ResponseStatus(HttpStatus.OK)
    User updateUser(@RequestBody Map<String,String> json){
        Long userId = Long.parseLong(json.get("userId"));
        String userLastName = json.get("userLastName");
        String userName = json.get("userName");
        String email = json.get("email");
        String password = json.get("password");
        String profile = json.get("profile");
        Long managerId = Long.parseLong(json.get("managerId"));

        return userService.updateUser(userId,userLastName,userName,email,password,profile,managerId);

    }

    @RequestMapping(method = RequestMethod.DELETE,path="/user")
    @ResponseStatus(HttpStatus.OK)
    Boolean deleteUser(@RequestBody Map<String,String> json){
        Long userId = Long.parseLong(json.get("userId"));

        return userService.deleteUser(userId);
    }


}
