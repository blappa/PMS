package com.project2.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.project2.entities.Schedule;
import com.project2.service.ScheduleService;

@RestController
public class ScheduleController {
	
	@Autowired
	ScheduleService ss;

	@RequestMapping(value="/schedules", method=RequestMethod.POST, consumes = "application/json")
	public Schedule createSchedule(@RequestBody Schedule Schedule) {
		System.out.println(Schedule);
		return ss.createSchedule(Schedule);
	}
	
	@GetMapping(value="/schedules")
	public List<Schedule> allSchedules() {
		return ss.allSchedules();
	}
	
	@GetMapping(value="/schedules/{id}")
	public Schedule getScheduleById(@PathVariable("id") int id) {
		return ss.getScheduleById(id);
	}
	
	
	@PutMapping(value="/schedules", consumes="application/json")
	public Schedule updateSchedule(@RequestBody Schedule change) {
		return ss.updateSchedule(change);
	}
	

	@DeleteMapping(value="/schedules/{id}")
	public boolean removeSchedule(@PathVariable("id") int id) {
		return ss.deleteSchedule(ss.getScheduleById(id));
	}
	
}
