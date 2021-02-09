package com.fr.tse.poc.startupPOC.configuration;

import com.fr.tse.poc.startupPOC.business.Company;
import com.fr.tse.poc.startupPOC.business.Project;
import com.fr.tse.poc.startupPOC.business.User;
import com.fr.tse.poc.startupPOC.business.WorkedTime;
import com.fr.tse.poc.startupPOC.dao.CompanyDao;
import com.fr.tse.poc.startupPOC.dao.ProjectDao;
import com.fr.tse.poc.startupPOC.dao.UserDao;
import com.fr.tse.poc.startupPOC.dao.WorkedTimeDao;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Bean;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.test.context.ContextConfiguration;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Configuration
@Getter
@Slf4j
public class PocTestConfiguration {

    @Autowired
    ProjectDao projectDao;

    @Autowired
    UserDao userDao;

    @Autowired
    CompanyDao companyDao;

    @Autowired
    WorkedTimeDao workedTimeDao;

    private User user1;

    private User user2;

    private User user3;

    private User user4;

    private User user5;

    private Project project1;

    private Project project2;

    private Project project3;

    private Company company;

    private Company company1;

    private WorkedTime workedTime1;

    private void initUsers(UserDao userDao){
        user1 = new User("ZECHEL","Matthieu","matthieu.zechel@gmail.com","1234","admin",null);
        user2 = new User("LAGRANGE","Erwan","erwan.lagrange@gmail.com","password","admin",null);
        user3 = new User("SAGE","Louis","louis.sage@gmail.com","admin","admin",null);
        user4 = new User("TESTING","Test","test.test@gmail.com","test","developer",1L);
        user5 = new User("TESTING2","Test2","test2@gmail.com","test2","developer",2L);

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
        project1 = new Project("TestProject1",23L,company1,user1);
        project2 = new Project("TestProject2",350L,company1,user1);
        project3 = new Project("TestProject3",345L,company1,user2);

        projectDao.save(project1);
        log.info(project1 + " saved to database.");
        projectDao.save(project2);
        log.info(project2 + " saved to database.");
        projectDao.save(project3);
        log.info(project3 + " saved to database.");
    }

    private void initCompany(CompanyDao companyDao){
        company = new Company("TestCompany");
        companyDao.save(company);
        log.info(company + " saved to database.");
        company1 = new Company("TestCompany1");
        companyDao.save(company1);
        log.info(company1 + " saved to database.");
    }

    private void initWorkedTime(WorkedTimeDao workedTimeDao){
        workedTime1 = new WorkedTime(LocalDateTime.now(),3L,user4,project2);
        workedTimeDao.save(workedTime1);
        log.info(workedTime1 + " saved to database.");
    }

    @Bean
    @Profile("test")
    CommandLineRunner initTestDatabase() {

        return args -> {
            initUsers(this.userDao);
            initCompany(this.companyDao);
            initProjects(this.projectDao);
            initWorkedTime(this.workedTimeDao);

            log.info("App initialization for tests finished");
        };
    }
}
