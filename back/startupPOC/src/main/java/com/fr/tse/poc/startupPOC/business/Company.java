package com.fr.tse.poc.startupPOC.business;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
public class Company {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "client")
    private List<Project> projects;

    private String name;

    public Company(){}

    public Company(String name){
        this.name = name;
    }
}
