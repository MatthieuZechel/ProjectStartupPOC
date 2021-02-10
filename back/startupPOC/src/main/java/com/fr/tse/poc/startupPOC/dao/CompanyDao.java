package com.fr.tse.poc.startupPOC.dao;

import com.fr.tse.poc.startupPOC.business.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyDao extends JpaRepository<Company, Long> {
}
