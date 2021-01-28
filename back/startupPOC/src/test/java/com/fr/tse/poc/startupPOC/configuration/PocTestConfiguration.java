package com.fr.tse.poc.startupPOC.configuration;

import com.fr.tse.poc.startupPOC.business.Company;
import com.fr.tse.poc.startupPOC.business.Project;
import com.fr.tse.poc.startupPOC.business.User;
import com.fr.tse.poc.startupPOC.business.WorkedTime;
import com.fr.tse.poc.startupPOC.dao.CompanyDao;
import com.fr.tse.poc.startupPOC.dao.ProjectDao;
import com.fr.tse.poc.startupPOC.dao.UserDao;
import com.fr.tse.poc.startupPOC.dao.WorkedTimeDao;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
@Slf4j
public class PocTestConfiguration {

    private void initUsers(UserDao userDao){
        User user1 = new User("ZECHEL","Matthieu","matthieu.zechel@gmail.com","1234","admin",null);
        User user2 = new User("LAGRANGE","Erwan","erwan.lagrange@gmail.com","password","admin",null);
        User user3 = new User("SAGE","Louis","louis.sage@gmail.com","admin","admin",null);
        User user4 = new User("TESTING","Test","test.test@gmail.com","test","developer",1L);
        User user5 = new User("TESTING2","Test2","test2@gmail.com","test2","developer",2L);

        userDao.save(user1);
        log.info(user1 + " saved to database.");
        userDao.save(user2);
        log.info(user2 + " saved to database.");
        userDao.save(user3);
        log.info(user3 + " saved to database.");
        userDao.save(user4);
        log.info(user4 + " saved to database.");
        userDao.save(user5);
        log.info(user5 + " saved to database.");
    }

    private void initProjects(ProjectDao projectDao){
        Project project1 = new Project("TestProject1",23L,null,null);
        Project project2 = new Project("TestProject2",350L,null,null);

        projectDao.save(project1);
        log.info(project1 + " saved to database.");
        projectDao.save(project2);
        log.info(project2 + " saved to database.");
    }

    private void initCompany(CompanyDao companyDao){
        Company company1 = new Company("TestCompany");
        companyDao.save(company1);
        log.info(company1 + " saved to database.");
    }

    private void initWorkedTime(){

    }
    @Bean
    @Profile("test")
    CommandLineRunner initTestDatabase(UserDao userDao,
                                       ProjectDao projectDao,
                                       CompanyDao companyDao,
                                       WorkedTimeDao workedTimeDao) {

        return args -> {
            initUsers(userDao);
            initProjects(projectDao);
            initCompany(companyDao);


            log.info("App initialization for tests finished");
        };
    }
}
