package com.fr.tse.poc.startupPOC.business;

import javax.persistence.*;
import java.util.List;

@Entity
public class Project {

    @Id @GeneratedValue
    private Long id;

    private String nom;

    private Long chargePrevue;

    @ManyToOne
    private Company client;

    @ManyToMany
    private List<User> users;

    @ManyToOne
    private User projectManager;

    @OneToMany
    private List<WorkedTime> workedTimes;
}
