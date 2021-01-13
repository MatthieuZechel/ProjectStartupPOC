package com.fr.tse.poc.startupPOC.dao;

import com.fr.tse.poc.startupPOC.business.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EntrepriseDao extends JpaRepository<Company, Long> {
}
