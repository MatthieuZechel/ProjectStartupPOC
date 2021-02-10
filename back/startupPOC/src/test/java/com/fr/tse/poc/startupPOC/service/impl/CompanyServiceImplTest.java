package com.fr.tse.poc.startupPOC.service.impl;

import com.fr.tse.poc.startupPOC.business.Company;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ActiveProfiles("test")
class CompanyServiceImplTest {

    Company TestCompany3;

    @Autowired
    CompanyServiceImpl companyService;

    @BeforeEach
    void InitTest(){
        TestCompany3 = new Company("TestCompany3");
    }

    @Test
    void shouldGetCompany() {
        Company company = companyService.getCompany(1L);
        assertNotNull(company);
        assertEquals("TestCompany",company.getName());
    }

    @Test
    void shouldAddCompany() {
        Company company = companyService.addCompany(TestCompany3);
        assertNotNull(company);
        assertEquals("TestCompany3",companyService.getCompany(company.getId()).getName());

        companyService.deleteCompany(company.getId());
    }

    @Test
    void shouldCreateCompany() {
        Company company = companyService.createCompany("TestCompany4");
        assertNotNull(company);
        assertEquals("TestCompany4",companyService.getCompany(company.getId()).getName());

        companyService.deleteCompany(company.getId());
    }

    @Test
    void shouldGetAllCompanies() {
        List<Company> companyList = companyService.getAllCompany();
        assertNotNull(companyList);
        assertTrue(!companyList.isEmpty());
        assertEquals(2,companyList.size());
    }

    @Test
    void shouldUpdateCompany() {
        Company company = companyService.updateCompany(1L,"changedName");
        assertNotNull(company);
        assertEquals("changedName",companyService.getCompany(company.getId()).getName());
        companyService.updateCompany(1L,"TestCompany");
    }

    @Test
    void shouldDeleteCompany() {
        Company company = companyService.addCompany(TestCompany3);
        Long id = company.getId();
        assertTrue(companyService.deleteCompany(company.getId()));
        assertNull(companyService.getCompany(id));
    }
}