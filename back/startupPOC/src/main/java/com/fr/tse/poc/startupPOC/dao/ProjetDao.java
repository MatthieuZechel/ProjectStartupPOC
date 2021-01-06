package com.fr.tse.poc.startupPOC.dao;

import com.fr.tse.poc.startupPOC.business.Projet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjetDao extends JpaRepository<Projet, Long> {
}
