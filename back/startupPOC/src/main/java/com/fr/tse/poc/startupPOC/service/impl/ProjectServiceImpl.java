package com.fr.tse.poc.startupPOC.service.impl;

import com.fr.tse.poc.startupPOC.business.Company;
import com.fr.tse.poc.startupPOC.business.Project;
import com.fr.tse.poc.startupPOC.business.User;
import com.fr.tse.poc.startupPOC.dao.ProjectDao;
import com.fr.tse.poc.startupPOC.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    ProjectDao projectDao;

    @Override
    @Transactional(readOnly = false, propagation = Propagation.REQUIRES_NEW)
    public Project addProject(Project project) {
        return projectDao.save(project);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Project> getAllProjects() {
        return projectDao.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Project getProject(Long projectId) {
        Optional<Project> project = projectDao.findById(projectId);
        if(project.isPresent()){
            return project.get();
        }
        return null;
    }

    @Override
    @Transactional(readOnly = false, propagation = Propagation.REQUIRES_NEW)
    public Project updateProject(Long projectId, String name, Long workLoad, Company client, User projectManager) {
        Project project = getProject(projectId);
        if(project != null){
            project.setName(name);
            project.setWorkLoad(workLoad);
            if(!(project.getClient() != null && client == null)) {
                project.setClient(client);
            }
            if(!(project.getProjectManager() != null && projectManager == null)){
                project.setProjectManager(projectManager);
            }
            return projectDao.save(project);
        }
        return null;
    }

    @Override
    @Transactional(readOnly = false, propagation = Propagation.REQUIRES_NEW)
    public Project updateProjectManager(Long projectId,User manager) {
        Project project = getProject(projectId);
        if(manager != null){
            project.setProjectManager(manager);
            return projectDao.save(project);
        }
        return null;
    }

    @Override
    @Transactional(readOnly = false, propagation = Propagation.REQUIRES_NEW)
    public Project updateProjectWorkLoad(Long projectId,Long workLoad) {
        Project project = getProject(projectId);
        if(workLoad != null){
            project.setWorkLoad(workLoad);
            return projectDao.save(project);
        }
        return null;
    }

    @Override
    @Transactional(readOnly = false, propagation = Propagation.REQUIRES_NEW)
    public Project createProject(String name, Long workLoad, Company client, User projectManager) {
        Project project = new Project(name,workLoad,client,projectManager);
        return projectDao.save(project);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Project> getManagerAllProjects(Long managerId) {
        List<Project> projects = projectDao.findAll();
        return projects.stream()
                .filter(project -> (project.getProjectManager() !=null && project.getProjectManager().getId().equals(managerId)))
                .collect(Collectors.toList());
    }

    @Override
    public List<Project> getUserAllProjects(User user) {
        List<Project> projects = projectDao.findAll();
        List<Project> collect = projects.stream()
                .filter(project -> (project !=null && project.getWorkers().contains(user)))
                .collect(Collectors.toList());
        return collect;
    }

    @Override
    @Transactional(readOnly = false, propagation = Propagation.REQUIRES_NEW)
    public Boolean deleteProject(Long projectId) {
        Optional<Project> project = projectDao.findById(projectId);
        if(!project.isPresent()){
            return false;
        }
        projectDao.delete(project.get());
        return true;
    }
}
