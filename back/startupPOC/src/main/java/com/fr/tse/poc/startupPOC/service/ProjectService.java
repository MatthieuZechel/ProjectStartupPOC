package com.fr.tse.poc.startupPOC.service;

import com.fr.tse.poc.startupPOC.business.Company;
import com.fr.tse.poc.startupPOC.business.Project;
import com.fr.tse.poc.startupPOC.business.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProjectService {

    Project addProject(Project project);

    List<Project> getAllProjects();

    Project getProject(Long projectId);

    Project updateProject(Long projectId, String name, Long workload,Company client, User projectManager);

    Project updateProjectManager(Long projectId,User manager);

    Project updateProjectWorkLoad(Long projectId,Long workLoad);

    Project createProject(String name, Long workLoad, Company client, User projectManager);

    List<Project> getManagerAllProjects(Long managerId);

    Boolean deleteProject(Long projectId);
}
