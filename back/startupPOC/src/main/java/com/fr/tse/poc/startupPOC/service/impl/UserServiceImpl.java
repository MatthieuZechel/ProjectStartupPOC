package com.fr.tse.poc.startupPOC.service.impl;

import com.fr.tse.poc.startupPOC.business.User;
import com.fr.tse.poc.startupPOC.service.UserService;

import java.util.List;

public class UserServiceImpl implements UserService {
    @Override
    public User addUser(User user) {
        return null;
    }

    @Override
    public List<User> getAllUsers() {
        return null;
    }

    @Override
    public User getUser(Long userId) {
        return null;
    }

    @Override
    public User updateUser(Long userId, String userLastName, String userName, String email, String profile, Long managerId) {
        return null;
    }

    @Override
    public User createUser(Long userId, String userLastName, String userName, String email, String profile, Long managerId) {
        return null;
    }

    @Override
    public User updateUserManager(Long userId, Long managerId) {
        return null;
    }

    @Override
    public Boolean deleteUser(Long userId) {
        return null;
    }
}
