package com.fr.tse.poc.startupPOC.service;

import com.fr.tse.poc.startupPOC.business.WorkedTime;

import java.time.Month;
import java.util.Date;
import java.util.List;

public interface WorkedTimeService {

    Long getTimeUserForMonth(Long userId, Integer month);

    Boolean generateReport(Long userId, Month month);

    List<WorkedTime> getWorkedTimesForWeek(Integer weekNumber, Long userId);
}
