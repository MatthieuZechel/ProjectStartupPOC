package com.fr.tse.poc.startupPOC.dao;

import com.fr.tse.poc.startupPOC.business.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectDao extends JpaRepository<Project, Long> {
}
