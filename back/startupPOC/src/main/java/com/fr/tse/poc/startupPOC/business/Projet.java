package com.fr.tse.poc.startupPOC.business;

import javax.persistence.*;
import java.util.List;

@Entity
public class Projet {

    @Id @GeneratedValue
    private Long id;

    private String nom;

    private Long chargePrevue;

    private Entreprise client;

    @ManyToMany
    private List<User> users;
}
