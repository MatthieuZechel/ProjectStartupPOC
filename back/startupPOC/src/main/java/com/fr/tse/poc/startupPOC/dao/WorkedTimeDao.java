package com.fr.tse.poc.startupPOC.dao;

import com.fr.tse.poc.startupPOC.business.WorkedTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkedTimeDao extends JpaRepository<WorkedTime, Long> {
}
