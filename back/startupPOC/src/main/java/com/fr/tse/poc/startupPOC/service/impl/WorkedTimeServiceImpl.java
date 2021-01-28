package com.fr.tse.poc.startupPOC.service.impl;

import com.fr.tse.poc.startupPOC.business.WorkedTime;
import com.fr.tse.poc.startupPOC.dao.WorkedTimeDao;
import com.fr.tse.poc.startupPOC.service.WorkedTimeService;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.Month;
import java.time.ZoneId;
import java.time.temporal.TemporalAdjusters;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class WorkedTimeServiceImpl implements WorkedTimeService {

    @Autowired
    WorkedTimeDao workedTimeDao;

    private Integer year = LocalDate.now().getYear();

    private Calendar calendar = new GregorianCalendar();

    @Override
    public Long getTimeUserForMonth(Long userId, Integer month) {

        LocalDate firstDayOfMonth = getFirstDayOfMonth(month);
        LocalDate lastDayOMonth = getLastDayOfMonth(month);
        Optional<Long> hoursWorked;

        List<WorkedTime> workedTimes = workedTimeDao.findAll();

        hoursWorked = workedTimes.stream()
                    .filter(workedTime -> workedTime.getUser().getId().equals(userId))
                    .filter(workedTime -> workedTime.getDateDebut().isAfter(firstDayOfMonth))
                    .filter(workedTime -> workedTime.getDateDebut().isBefore(lastDayOMonth))
                    .map(WorkedTime::getDuree)
                    .reduce(Long::sum);

        if (hoursWorked.isPresent()) {
            return hoursWorked.get();
        }

        return null;

    }

    @Override
    public Boolean generateReport(Long userId, Month month) {
        return null;
    }

    @Override
    public List<WorkedTime> getWorkedTimesForWeek(Integer weekNumber, Long userId) {

        LocalDate firstDayOfSelectedWeek = getFirstDayOfWeek(weekNumber);
        LocalDate lastDayOfSelectedWeek = getLastDayOfWeek(weekNumber);
        List<WorkedTime> workedTimes = workedTimeDao.findAll();

        return workedTimes.stream()
                .filter(workedTime -> workedTime.getUser().getId().equals(userId))
                .filter(workedTime -> workedTime.getDateDebut().isAfter(firstDayOfSelectedWeek))
                .filter(workedTime -> ((workedTime.getDateDebut()).with(TemporalAdjusters.next(DayOfWeek.FRIDAY)) ).isBefore(lastDayOfSelectedWeek))
                .collect(Collectors.toList());
    }

    private LocalDate getFirstDayOfWeek(int weekNumber){
        calendar.set(Calendar.WEEK_OF_YEAR, weekNumber);
        calendar.set(Calendar.YEAR, year);
        return (calendar.getTime()).toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
    }

    private LocalDate getLastDayOfWeek(int weekNumber){
        calendar.set(Calendar.WEEK_OF_YEAR, weekNumber);
        calendar.set(Calendar.YEAR, year);
        calendar.add(Calendar.DATE, 6);
        return (calendar.getTime()).toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
    }

    private LocalDate getFirstDayOfMonth(int monthNumber){
        calendar.set(Calendar.MONTH, monthNumber);
        calendar.set(Calendar.YEAR, year);
        return (calendar.getTime()).toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
    }

    private LocalDate getLastDayOfMonth(int monthNumber){
        calendar.set(Calendar.MONTH, monthNumber);
        calendar.set(Calendar.YEAR, year);
        int lastDay = calendar.getInstance().getActualMaximum(calendar.DAY_OF_MONTH);
        calendar.set(Calendar.DAY_OF_MONTH,lastDay);
        return (calendar.getTime()).toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
    }
}
