package com.fr.tse.poc.startupPOC.service;

import com.fr.tse.poc.startupPOC.business.Project;
import com.fr.tse.poc.startupPOC.business.User;
import com.fr.tse.poc.startupPOC.business.WorkedTime;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Month;
import java.util.List;

@Service
@Transactional
public interface WorkedTimeService {

    Long getTimeUserForMonth(Long userId, Integer month);

    Boolean generateReport(Long userId, Month month);

    List<WorkedTime> getWorkedTimesForWeek(Integer weekNumber, Long userId);

    List<WorkedTime> getUserAllWorkedTimes(Long userId);

    WorkedTime addWorkedTime(LocalDateTime startDate, Long duree, User user, Project project);

    WorkedTime updateWorkedTime(Long workedTimeId, LocalDateTime startDate, Long duree, User user, Project project);

    WorkedTime getWorkedTime(Long workedTimeId);
}
