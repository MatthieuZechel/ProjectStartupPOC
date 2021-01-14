package com.fr.tse.poc.startupPOC.service;

import com.fr.tse.poc.startupPOC.business.Company;
import com.fr.tse.poc.startupPOC.business.Project;
import com.fr.tse.poc.startupPOC.business.User;

import java.util.List;

public interface ProjectService {

    Project addProject(Project project);

    List<Project> getAllProjects();

    Project getProject(Long projectId);

    Project updateProject(Long projectId, String nom, Long companyId);

    Project createProject(String name, Long workLoad, Company client, User projectManager);

    List<Project> getManagerAllProjects(Long managerId);

    Boolean deleteProject(Long projectId);
}
