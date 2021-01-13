package com.fr.tse.poc.startupPOC.service;

import com.fr.tse.poc.startupPOC.business.Project;

import java.util.List;

public interface ProjectService {

    Project addProject(Project project);

    List<Project> getAllProjects();

    Project getProject(Long projectId);

    Project updateProject(Long projectId, String nom, Long companyId);

    Project createProject(Long projectId, String nom, Long companyId);

    List<Project> getManagerAllProjects(Long managerId);

    void deleteProject(Long projectId);
}
