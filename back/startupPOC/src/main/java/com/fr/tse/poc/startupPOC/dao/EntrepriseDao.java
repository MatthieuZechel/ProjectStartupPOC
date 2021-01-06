package com.fr.tse.poc.startupPOC.dao;

import com.fr.tse.poc.startupPOC.business.Entreprise;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EntrepriseDao extends JpaRepository<Entreprise, Long> {
}
