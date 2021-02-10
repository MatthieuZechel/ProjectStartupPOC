package com.fr.tse.poc.startupPOC.service.impl;

import com.fr.tse.poc.startupPOC.business.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.core.AutoConfigureCache;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ActiveProfiles("test")
class LoginServiceImplTest {

    @Autowired
    LoginServiceImpl loginService;

    @Test
    void shouldConnect(){
        User user = loginService.connexion("test.test@gmail.com","test");
        assertNotNull(user);
        assertEquals("Test",user.getUserName());
    }

}