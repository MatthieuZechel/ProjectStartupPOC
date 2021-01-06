package com.fr.tse.poc.startupPOC.business;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Entreprise {

    @Id @GeneratedValue
    private Long id;

    private String nom;
}
