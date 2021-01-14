package com.fr.tse.poc.startupPOC.business;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
public class Project {

    @Id @GeneratedValue
    private Long id;

    private String name;

    private Long workLoad;

    @ManyToOne
    private Company client;

    @ManyToMany
    private List<User> users;

    @ManyToOne
    private User projectManager;

    @OneToMany
    private List<WorkedTime> workedTimes;

    public Project(String name, Long workLoad, Company client, User projectManager) {
        this.name = name;
        this.workLoad = workLoad;
        this.client = client;
        this.projectManager = projectManager;
    }

}
