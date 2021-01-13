package com.fr.tse.poc.startupPOC.service.impl;

import com.fr.tse.poc.startupPOC.business.WorkedTime;
import com.fr.tse.poc.startupPOC.service.WorkedTimeService;

import java.time.Month;
import java.util.List;

public class WorkedTimeServiceImpl implements WorkedTimeService {
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
        return null;
    }


}
