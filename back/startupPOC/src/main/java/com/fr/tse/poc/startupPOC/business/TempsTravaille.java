package com.fr.tse.poc.startupPOC.business;

import net.bytebuddy.asm.Advice;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.time.LocalDate;

@Entity
public class TempsTravaille {

    @Id @GeneratedValue
    private Long id;

    private LocalDate dateDebut;

    private Long duree;

    @ManyToOne
    private User user;

    @ManyToOne
    private Projet projet;

    public TempsTravaille() {
    }
}
