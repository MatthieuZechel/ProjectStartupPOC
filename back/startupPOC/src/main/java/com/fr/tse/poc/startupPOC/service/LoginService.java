package com.fr.tse.poc.startupPOC.service;

import com.fr.tse.poc.startupPOC.business.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public interface LoginService {

    User connexion(String email, String password);

    User createAccount(String firstName, String lastName, String email, String password);

}
