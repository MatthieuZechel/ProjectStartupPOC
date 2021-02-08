package com.fr.tse.poc.startupPOC.web;

import com.fr.tse.poc.startupPOC.business.User;
import com.fr.tse.poc.startupPOC.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class LoginController {

    @Autowired
    LoginService loginService;

    @RequestMapping(method = RequestMethod.GET, path ="/ping")
    public String test(){
        return "pong !";
    }

    @RequestMapping(method = RequestMethod.POST, path = "/connexion")
    @ResponseStatus(HttpStatus.OK)
    public User connect(@RequestBody User credentials){

        return loginService.connexion(credentials.getEmail(), credentials.getPassword());
    }

    @RequestMapping(method = RequestMethod.POST, path="/createAccount")
    public User createAccount(String firstName, String lastName, String email, String password){
        return loginService.createAccount(firstName,lastName,email,password);
    }
}
