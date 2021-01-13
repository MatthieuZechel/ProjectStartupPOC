package com.fr.tse.poc.startupPOC.business;

import javax.persistence.*;
import java.util.List;

@Entity
public class User {

    @Id @GeneratedValue
    private Long id;

    private String nom;

    private String prenom;

    private String email;

    private String password;

    private String profil;

    @OneToOne
    private User manager;

    @ManyToMany
    private List<Project> projects;

    @OneToMany
    private List<WorkedTime> workedTimes;

    @OneToMany
    private List<Project> projectsManaged;


}
