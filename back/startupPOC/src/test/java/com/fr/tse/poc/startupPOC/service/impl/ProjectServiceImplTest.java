package com.fr.tse.poc.startupPOC.service.impl;

import com.fr.tse.poc.startupPOC.business.Project;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ActiveProfiles("test")
class ProjectServiceImplTest {

    private Project testProject;

    @Autowired
    ProjectServiceImpl projectService;

    @BeforeEach
    void initTest(){
        testProject = new Project("TestProject4",560L,null,null);
    }

    @Test
    void shouldAddProject() {
        Project project = projectService.addProject(testProject);
        assertNotNull(project);
        assertEquals("TestProject4",project.getName());
        assertNotNull(projectService.getProject(project.getId()));
        projectService.deleteProject(project.getId());
    }

    @Test
    void shouldGetAllProjects() {
        List<Project> projects = projectService.getAllProjects();
        assertNotNull(projects);
        assertTrue(!projects.isEmpty());
        assertEquals(4,projects.size());
    }

    @Test
    void shouldGetProject() {
        Project project = projectService.getProject(1L);
        assertNotNull(project);
        assertEquals("TestProject1",project.getName());
    }

    @Test
    void shouldUpdateProject() {
        Project project = projectService.updateProject(1L,"ModifiedName",0L,null,null);
        assertNotNull(project);
        assertEquals("ModifiedName",project.getName());
        assertEquals("ModifiedName",projectService.getProject(1L).getName());
        assertEquals(1L,projectService.getProject(1L).getProjectManager().getId());
    }

    @Test
    void shouldUpdateProjectManager(){
        Project project = projectService.updateProjectManager(1L,null);
        assertNull(project);
        assertEquals(1L,projectService.getProject(1L).getProjectManager().getId());
    }

    @Test
    void shouldUpdateProjectWorkLoad(){
        Project project = projectService.updateProjectWorkLoad(1L,666L);
        assertNotNull(project);
        assertEquals(666L,project.getWorkLoad());
    }

    @Test
    void shouldCreateProject() {
        Project project = projectService.createProject("TestToCreateProjectFromCode",200L,null,null);
        assertNotNull(project);
        assertEquals("TestToCreateProjectFromCode",project.getName());
        assertEquals("TestToCreateProjectFromCode",projectService.getProject(project.getId()).getName());
    }

    @Test
    void shouldGetManagerAllProjects() {
        List<Project> managerAllProjects = projectService.getManagerAllProjects(1L);
        assertNotNull(managerAllProjects);
        assertTrue(!managerAllProjects.isEmpty());
        assertEquals(2,managerAllProjects.size());
    }

    @Test
    void shouldDeleteProject() {
        Project project = new Project("TestProject666",345L,null,null);
        projectService.addProject(project);
        assertNotNull(project);
        assertTrue(projectService.deleteProject(project.getId()));
    }
}