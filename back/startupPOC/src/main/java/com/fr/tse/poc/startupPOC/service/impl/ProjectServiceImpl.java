package com.fr.tse.poc.startupPOC.service.impl;

import com.fr.tse.poc.startupPOC.business.Company;
import com.fr.tse.poc.startupPOC.business.Project;
import com.fr.tse.poc.startupPOC.business.User;
import com.fr.tse.poc.startupPOC.dao.ProjectDao;
import com.fr.tse.poc.startupPOC.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectDao projectDao;

    @Override
    public Project addProject(Project project) {
        return projectDao.save(project);
    }

    @Override
    public List<Project> getAllProjects() {
        return projectDao.findAll();
    }

    @Override
    public Project getProject(Long projectId) {
        Optional<Project> project = projectDao.findById(projectId);
        if(project.isPresent()){
            return project.get();
        }
        return null;
    }

    @Override
    public Project updateProject(Long projectId, String name, Long workLoad) {
        Project project = getProject(projectId);
        if(project != null){
            project.setName(name);
            project.setWorkLoad(workLoad);
            return projectDao.save(project);
        }
        return null;
    }

    @Override
    public Project createProject(String name, Long workLoad, Company client, User projectManager) {
        Project project = new Project(name,workLoad,client,projectManager);
        return projectDao.save(project);
    }

    @Override
    public List<Project> getManagerAllProjects(Long managerId) {
        List<Project> projects = projectDao.findAll();
        List<Project> managerProjects  =  projects.stream()
                .filter(project -> project.getProjectManager().getId().equals(managerId))
                .collect(Collectors.toList());
        return managerProjects;
    }

    @Override
    public Boolean deleteProject(Long projectId) {
        Optional<Project> project = projectDao.findById(projectId);
        if(!project.isPresent()){
            return false;
        }
        projectDao.delete(project.get());
        return true;
    }
}
