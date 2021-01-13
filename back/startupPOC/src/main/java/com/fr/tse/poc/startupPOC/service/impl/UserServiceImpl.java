package com.fr.tse.poc.startupPOC.service.impl;

import com.fr.tse.poc.startupPOC.business.User;
import com.fr.tse.poc.startupPOC.dao.UserDao;
import com.fr.tse.poc.startupPOC.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public User addUser(User user) {
        return userDao.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userDao.findAll();
    }

    @Override
    public User getUser(Long userId) {
        Optional<User> user =  userDao.findById(userId);
        if(user.isPresent()) {
            return user.get();
        }else {
            return null;
        }
    }

    @Override
    public User updateUser(Long userId, String userLastName, String userName, String email, String profile, Long managerId) {
        return null;
    }

    @Override
    public User createUser(Long userId, String userLastName, String userName, String email, String profile, Long managerId) {
        User user = new User(userLastName,userName,email,profile,managerId);
        return addUser(user);
    }

    @Override
    public User updateUserManager(Long userId, Long managerId) {
        User user = getUser(userId);
        user.setManager(getUser(managerId));
        return userDao.save(user);
    }

    @Override
    public Boolean deleteUser(Long userId) {
        Optional<User> user = userDao.findById(userId);
        if(user.isPresent()){
            return false;
        }
        userDao.delete(user.get());
        return true;
    }
}
