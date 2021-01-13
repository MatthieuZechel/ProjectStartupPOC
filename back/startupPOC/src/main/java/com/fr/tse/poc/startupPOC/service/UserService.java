package com.fr.tse.poc.startupPOC.service;

import com.fr.tse.poc.startupPOC.business.User;

import java.util.List;

public interface UserService {

    User addUser(User user);

    List<User> getAllUsers();

    User getUser(Long userId);

    User updateUser(Long userId, String userLastName, String userName, String email, String profile,Long managerId);

    User createUser(Long userId, String userLastName, String userName, String email, String profile,Long managerId);

    User updateUserManager(Long userId,Long managerId);

    Boolean deleteUser(Long userId);
}
