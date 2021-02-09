package com.fr.tse.poc.startupPOC.business;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
public class Project {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private Long workLoad;

    @ManyToOne
    @JoinColumn(name="client_id")
    private Company client;

    @ManyToMany(mappedBy = "projects")
    private List<User> workers;

    @ManyToOne
    @JoinColumn(name="projects_manager_id")
    private User projectManager;

    @OneToMany(mappedBy="project")
    private List<WorkedTime> workedTimes;

    public Project(){}

    public Project(String name, Long workLoad, Company client, User projectManager) {
        this.name = name;
        this.workLoad = workLoad;
        this.client = client;
        this.projectManager = projectManager;
    }



}
