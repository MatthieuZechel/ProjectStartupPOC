package com.fr.tse.poc.startupPOC.dao;

import com.fr.tse.poc.startupPOC.business.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends JpaRepository<User,Long> {
}
