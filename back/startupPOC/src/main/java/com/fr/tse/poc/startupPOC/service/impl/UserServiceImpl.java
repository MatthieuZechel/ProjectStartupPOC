package com.fr.tse.poc.startupPOC.service.impl;

import com.fr.tse.poc.startupPOC.business.User;
import com.fr.tse.poc.startupPOC.dao.UserDao;
import com.fr.tse.poc.startupPOC.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    UserDao userDao;

    @Override
    public User addUser(User user) {
        return userDao.save(user);
    }

    @Override
    @Transactional(readOnly = true)
    public List<User> getAllUsers() {
        return userDao.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public User getUser(Long userId) {
        Optional<User> user =  userDao.findById(userId);
        if(user.isPresent()) {
            return user.get();
        }
        return null;
    }

    @Override
    public User updateUser(Long userId, String userLastName, String userName, String email,String password, String profile, Long managerId) {
        User user = getUser(userId);
        User manager = getUser(managerId);

        if(!(user.getUserLastName() != null && userLastName==null)){
            user.setUserLastName(userLastName);
        }
        if(!(user.getUserName() != null && userName==null)){
            user.setUserName(userName);
        }
        if(!(user.getEmail() != null && email==null)){
            user.setEmail(email);
        }
        if(!(user.getPassword() != null && password==null)){
            user.setPassword(password);
        }
        if(!(user.getProfile() != null && profile==null)){
            user.setProfile(profile);
        }
        if(!(user.getManager() != null && managerId==null)){
            user.setManager(manager);
        }
        return userDao.save(user);
    }

    @Override
    public User createUser(String userLastName, String userName, String email,String password, String profile, Long managerId) {
        User user = new User(userLastName,userName,email,password,profile,managerId);
        return addUser(user);
    }

    @Override
    public Boolean updateUserManager(Long userId, Long managerId) {
        User user = getUser(userId);
        User manager = getUser(managerId);
        if(user != null && manager != null){
            user.setManager(getUser(managerId));
            userDao.save(user);
            return true;
        }
        return false;
    }

    @Override
    public Boolean deleteUser(Long userId) {
        Optional<User> user = userDao.findById(userId);
        if(!user.isPresent()){
            return false;
        }
        userDao.delete(user.get());
        return true;
    }

    @Override
    public List<User> getManagerAllUsers(Long managerId) {
        return getAllUsers().stream().filter(user -> (user.getManager() != null && user.getManager().getId().equals(managerId))).collect(Collectors.toList());
    }
}
