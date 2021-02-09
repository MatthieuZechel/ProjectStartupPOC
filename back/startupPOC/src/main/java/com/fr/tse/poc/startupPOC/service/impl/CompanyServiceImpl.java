package com.fr.tse.poc.startupPOC.service.impl;

import com.fr.tse.poc.startupPOC.business.Company;
import com.fr.tse.poc.startupPOC.dao.CompanyDao;
import com.fr.tse.poc.startupPOC.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CompanyServiceImpl implements CompanyService {

    @Autowired
    CompanyDao companyDao;

    @Override
    @Transactional(readOnly = true)
    public Company getCompany(Long companyId) {
        Optional<Company> company = companyDao.findById(companyId);
        if(company.isPresent()){
            return company.get();
        }
        return null;
    }

    @Override
    public List<Company> getAllCompany() {
        return companyDao.findAll();
    }

    @Override
    @Transactional(readOnly = false, propagation = Propagation.REQUIRES_NEW)
    public Company addCompany(Company company) {
        return companyDao.save(company);
    }

    @Override
    @Transactional(readOnly = false, propagation = Propagation.REQUIRES_NEW)
    public Company createCompany(String companyName) {
        Company company = new Company(companyName);
        return companyDao.save(company);
    }

    @Override
    @Transactional(readOnly = false, propagation = Propagation.REQUIRES_NEW)
    public Company updateCompany(Long companyId, String companyName) {
        Company company = getCompany(companyId);
        company.setName(companyName);
        return companyDao.save(company);
    }

    @Override
    @Transactional(readOnly = false, propagation = Propagation.REQUIRES_NEW)
    public Boolean deleteCompany(Long companyId) {
        Optional<Company> company = companyDao.findById(companyId);
        if(!company.isPresent()){
            return false;
        }
        companyDao.delete(company.get());
        return true;
    }
}
