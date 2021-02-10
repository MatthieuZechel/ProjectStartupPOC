package com.fr.tse.poc.startupPOC.service.impl;

import com.fr.tse.poc.startupPOC.business.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ActiveProfiles("test")
class UserServiceImplTest {

    private User userTest1;

    @Autowired
    UserServiceImpl userService;

    @BeforeEach
    void setUp() {
        userTest1 = new User("Zechel","Matthieu","example@example.com","test","developer",null);
    }

    @Test
    void shouldAddUser() {
        User user = userService.addUser(userTest1);

        assertNotNull(user);
        assertEquals("example@example.com",user.getEmail());
    }

    @Test
    void shouldGetAllUsers() {
        List<User> users = userService.getAllUsers();
        assertNotNull(users);
        assertTrue(!users.isEmpty());
    }

    @Test
    void shouldGetUser() {
        Long userId = 3L;

        User user = userService.getUser(userId);
        assertNotNull(user);
    }

    @Test
    void shouldUpdateUser() {
        User user = userService.updateUser(2L,"Test","if","modified","1234","works",1L);
        assertNotNull(user);
        assertEquals("modified",user.getEmail());
        assertEquals(userService.getUser(2L).getUserName(),"if");
    }

    @Test
    void shouldCreateUser() {
        User user = userService.createUser("Test","create","user","from","code",1L);
        assertNotNull(user);
        assertEquals("Test",user.getUserLastName());
        assertEquals("create",userService.getUser(user.getId()).getUserName());
    }

    @Test
    void shouldUpdateUserManager() {
        assertTrue(userService.updateUserManager(1L,3L));
        User user = userService.getUser(1L);
        assertNotNull(user);
        assertEquals(3L,user.getManager().getId());
        assertEquals(3L,userService.getUser(1L).getManager().getId());
    }

    @Test
    void shouldDeleteUser() {
        User user = new User("This","is","a","delete","test",null);
        userService.addUser(user);
        assertTrue(userService.deleteUser(user.getId()));
        assertNull(userService.getUser(user.getId()));

    }
}