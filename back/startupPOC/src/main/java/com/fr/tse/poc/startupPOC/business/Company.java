package com.fr.tse.poc.startupPOC.business;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class Company {

    @Id @GeneratedValue
    private Long id;

    @OneToMany
    private List<Project> projects;

    private String nom;
}
