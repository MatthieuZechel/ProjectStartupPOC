package com.fr.tse.poc.startupPOC.web;

import com.fr.tse.poc.startupPOC.business.User;
import com.fr.tse.poc.startupPOC.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @Autowired
    LoginService loginService;

    @RequestMapping(method = RequestMethod.GET, path = "/connexion")
    public User connect(String email, String password){
        return loginService.connexion(email,password);
    }

    @RequestMapping(method = RequestMethod.POST, path="/createAccount")
    public User createAccount(String firstName, String lastName, String email, String password){
        return loginService.createAccount(firstName,lastName,email,password);
    }
}
