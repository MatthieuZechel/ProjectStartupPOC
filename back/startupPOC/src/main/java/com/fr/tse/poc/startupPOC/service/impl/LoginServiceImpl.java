package com.fr.tse.poc.startupPOC.service.impl;

import com.fr.tse.poc.startupPOC.business.User;
import com.fr.tse.poc.startupPOC.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class LoginServiceImpl implements LoginService {

    @Autowired
    UserServiceImpl userService;

    @Override
    public User connexion(String email, String password) {
        List<User> userList = userService.getAllUsers();
        User userConnected = userList.stream()
                .filter(user -> user.getEmail().equals(email))
                .findFirst().get();

        if(userConnected.getPassword().equals(password)) {
            return userConnected;
        }else{

        return null;
}
    }

    @Override
    public User createAccount(String firstName, String lastName, String email, String password) {
        return userService.createUser(firstName, lastName, email,password,"developer",1L);
    }
}
