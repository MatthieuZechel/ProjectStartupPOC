package com.fr.tse.poc.startupPOC.service.impl;

import com.fr.tse.poc.startupPOC.business.Project;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.core.AutoConfigureCache;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ActiveProfiles("test")
class ProjectServiceImplTest {

    @Autowired
    ProjectServiceImpl projectService;

    @BeforeEach
    void initTest(){
        Project projectTest = new Project("TestProject3",456L,,null);
    }
    @Test
    void addProject() {
    }

    @Test
    void getAllProjects() {
    }

    @Test
    void getProject() {
    }

    @Test
    void updateProject() {
    }

    @Test
    void createProject() {
    }

    @Test
    void getManagerAllProjects() {
    }

    @Test
    void deleteProject() {
    }
}