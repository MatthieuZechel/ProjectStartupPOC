package com.fr.tse.poc.startupPOC.service;

import com.fr.tse.poc.startupPOC.business.Company;

public interface CompanyService {
    Company getCompany(Long companyId);

    Company addCompany(Company company);

    Company createCompany(String companyName);

    Company updateCompany(Long companyId,String companyName);

    Boolean deleteCompany(Long companyId);
}
