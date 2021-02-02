package com.fr.tse.poc.startupPOC.service.impl;

import com.fr.tse.poc.startupPOC.business.Company;
import com.fr.tse.poc.startupPOC.business.Project;
import com.fr.tse.poc.startupPOC.business.User;
import com.fr.tse.poc.startupPOC.dao.CompanyDao;
import com.fr.tse.poc.startupPOC.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


public class CompanyServiceImpl implements CompanyService {

    @Autowired
    private CompanyDao companyDao;

    @Override
    public Company getCompany(Long companyId) {
        Optional<Company> company = companyDao.findById(companyId);
        if(company.isPresent()){
            return company.get();
        }
        return null;
    }

    @Override
    public Company addCompany(Company company) {
        return companyDao.save(company);
    }

    @Override
    public Company createCompany(String companyName) {
        Company company = new Company(companyName);
        return companyDao.save(company);
    }

    @Override
    public Company updateCompany(Long companyId, String companyName) {
        Company company = getCompany(companyId);
        company.setName(companyName);
        return companyDao.save(company);
    }

    @Override
    public Boolean deleteCompany(Long companyId) {
        Optional<Company> company = companyDao.findById(companyId);
        if(!company.isPresent()){
            return false;
        }
        companyDao.delete(company.get());
        return true;
    }
}
