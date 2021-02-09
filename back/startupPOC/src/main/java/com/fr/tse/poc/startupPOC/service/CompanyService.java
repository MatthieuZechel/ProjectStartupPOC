package com.fr.tse.poc.startupPOC.service;

import com.fr.tse.poc.startupPOC.business.Company;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public interface CompanyService {
    Company getCompany(Long companyId);

    List<Company> getAllCompany();

    Company addCompany(Company company);

    Company createCompany(String companyName);

    Company updateCompany(Long companyId,String companyName);

    Boolean deleteCompany(Long companyId);
}
