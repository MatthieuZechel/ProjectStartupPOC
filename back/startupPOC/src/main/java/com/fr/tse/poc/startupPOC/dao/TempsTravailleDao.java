package com.fr.tse.poc.startupPOC.dao;

import com.fr.tse.poc.startupPOC.business.WorkedTime;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TempsTravailleDao extends JpaRepository<WorkedTime, Long> {
}
