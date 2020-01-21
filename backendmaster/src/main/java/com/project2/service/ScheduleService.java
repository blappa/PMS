package com.project2.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project2.entities.Schedule;
import com.project2.repositories.ScheduleRepository;

@Service
public class ScheduleService implements IScheduleService{

	@Autowired
	ScheduleRepository sr;
	
	@Override
	public Schedule createSchedule(Schedule schedule) {
		return sr.save(schedule);
	}

	@Override
	public Schedule getScheduleById(int id) {
		return sr.findById(id).get();
	}

	@Override
	public Schedule updateSchedule(Schedule schedule) {
		return sr.save(schedule);
	}

	@Override
	public boolean deleteSchedule(Schedule schedule) {
		 sr.delete(schedule);
		 return true;
	}
	
	public List<Schedule> allSchedules(){
		return (List<Schedule>) sr.findAll();
	}

}
