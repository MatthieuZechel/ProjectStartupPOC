package com.fr.tse.poc.startupPOC.business;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.time.LocalDate;

@Entity
@Getter
@Setter
public class WorkedTime {

    @Id @GeneratedValue
    private Long id;

    private LocalDate dateDebut;

    private Long duree;

    private Integer weekNumber;

    @ManyToOne
    private User user;

    @ManyToOne
    private Project project;

    public WorkedTime() {
    }
}
