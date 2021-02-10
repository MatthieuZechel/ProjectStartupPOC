package com.fr.tse.poc.startupPOC.business;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.temporal.WeekFields;
import java.util.Locale;

@Entity
@Getter
@Setter
public class WorkedTime {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime startDate;

    private Long duree;

    private Integer weekNumber;

    @ManyToOne
    private User user;

    @ManyToOne
    private Project project;

    public WorkedTime(){}

    public WorkedTime(LocalDateTime startDate,Long duree,User user, Project project) {
        this.startDate = startDate;
        this.duree = duree;
        this.weekNumber = getWeekNumberFromStartDate();
        this.user = user;
        this.project = project;
    }

    public Integer getWeekNumberFromStartDate(){
        WeekFields weekFields = WeekFields.of(Locale.getDefault());
        Integer tmp = this.startDate.get(weekFields.weekOfWeekBasedYear());
        return tmp;
    }

}
