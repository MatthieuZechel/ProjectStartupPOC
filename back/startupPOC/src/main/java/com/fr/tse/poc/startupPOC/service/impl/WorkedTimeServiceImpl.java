package com.fr.tse.poc.startupPOC.service.impl;

import com.fr.tse.poc.startupPOC.business.WorkedTime;
import com.fr.tse.poc.startupPOC.dao.WorkedTimeDao;
import com.fr.tse.poc.startupPOC.service.WorkedTimeService;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.Month;
import java.time.ZoneId;
import java.time.chrono.ChronoLocalDate;
import java.time.temporal.TemporalAdjuster;
import java.time.temporal.TemporalAdjusters;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.stream.Collectors;

public class WorkedTimeServiceImpl implements WorkedTimeService {

    @Autowired
    WorkedTimeDao workedTimeDao;

    @Override
    public Long getTimeUser(Long userId) {
        return null;
    }

    @Override
    public Boolean generateReport(Long userId, Month month) {
        return null;
    }

    @Override
    public List<WorkedTime> getWorkedTimesForWeek(Integer weekNumber, Long userId) {

        Integer year = LocalDate.now().getYear();

        Calendar calendar = new GregorianCalendar();
        calendar.set(Calendar.WEEK_OF_YEAR, weekNumber);
        calendar.set(Calendar.YEAR, year);
        LocalDate firstDayOfSelectedWeek = (calendar.getTime()).toInstant().atZone(ZoneId.systemDefault()).toLocalDate();

        calendar.add(Calendar.DATE, 7);
        LocalDate lastDayOfSelectedWeek = (calendar.getTime()).toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
        List<WorkedTime> workedTimes = workedTimeDao.findAll();

        return workedTimes.stream()
                .filter(workedTime -> workedTime.getUser().getId().equals(userId))
                .filter(workedTime -> workedTime.getDateDebut().isAfter(firstDayOfSelectedWeek))
                .filter(workedTime -> ((workedTime.getDateDebut()).with(TemporalAdjusters.next(DayOfWeek.WEDNESDAY)) ).isBefore(lastDayOfSelectedWeek))
                .collect(Collectors.toList());
    }


}
