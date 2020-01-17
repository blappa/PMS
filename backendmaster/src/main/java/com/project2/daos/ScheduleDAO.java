package com.project2.daos;

import java.util.List;

import com.project2.entities.Schedule;


public interface ScheduleDAO {

	public boolean addSchedule(Schedule schedule);
	
	public boolean getSchedule(int id);
	
	public List<Schedule> getAllScheduleByDAte(String dates);
	
	public List<Schedule> getAllScheduleByStatus(String status);
	
	public boolean updateSchedule(Schedule change);

}
