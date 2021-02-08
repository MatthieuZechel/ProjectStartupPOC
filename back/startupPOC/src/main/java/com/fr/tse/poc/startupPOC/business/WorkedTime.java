package com.fr.tse.poc.startupPOC.business;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.temporal.TemporalAdjuster;
import java.time.temporal.TemporalField;
import java.time.temporal.WeekFields;
import java.util.Locale;

@Entity
@Getter
@Setter
public class WorkedTime {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate startDate;

    private Long duree;

    private Integer weekNumber;

    @ManyToOne
    private User user;

    @ManyToOne
    private Project project;

    public WorkedTime(){}

    public WorkedTime(LocalDate startDate,Long duree,User user, Project project) {
        this.startDate = startDate;
        this.duree = duree;
        this.weekNumber = getWeekNumberFromStartDate();
        this.user = user;
        this.project = project;
    }

    public Integer getWeekNumberFromStartDate(){
        WeekFields weekFields = WeekFields.of(Locale.getDefault());
        Integer weekNumber = this.startDate.get(weekFields.weekOfWeekBasedYear());
        return weekNumber;
    }

}
