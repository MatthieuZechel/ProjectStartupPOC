package com.fr.tse.poc.startupPOC.business;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
public class User {

    @Id @GeneratedValue
    private Long id;

    private String userLastName;

    private String userName;

    private String email;

    private String password;

    private String profile;

    @OneToOne
    private User manager;

    @ManyToMany
    private List<Project> projects;

    @OneToMany
    private List<WorkedTime> workedTimes;

    @OneToMany
    private List<Project> projectsManaged;


    public User(){}

    public User(String userLastName, String userName, String email, String password, String profile, Long managerId) {
        this.userLastName = userLastName;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.profile = profile;
        this.manager = null;
    }
}
