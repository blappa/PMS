package com.project2.service;

import java.util.List;

import com.project2.entities.Schedule;

public interface IScheduleService{

	public Schedule createSchedule(Schedule schedule);
	
	public Schedule getScheduleById(int id);
	
	public Schedule updateSchedule(Schedule schedule);
	
	public  boolean deleteSchedule(Schedule schedule);
	
	public List<Schedule> allSchedules();
	
}
