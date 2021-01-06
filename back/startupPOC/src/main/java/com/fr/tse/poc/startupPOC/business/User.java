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

    private User manager;

    @ManyToMany
    private List<Projet> projets;

    @OneToMany
    private List<TempsTravaille> tempsTravailles;


}
