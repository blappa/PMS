package com.project2.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.project2.entities.Appointment;
import com.project2.service.AppointmentService;



//@CrossOrigin(origins = "http://sitemedpark.s3-website-us-east-1.amazonaws.com/")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping({"/portal"})
public class AppointmentController {
	
	@Autowired
	AppointmentService as;
	
	@RequestMapping(value="/appointment", method=RequestMethod.POST, consumes = "application/json")
	public Appointment createAppointment(@RequestBody Appointment appointment) {
		System.out.println(appointment);
		return as.createAppointment(appointment);
	}
	
	@GetMapping(value="/appointments")
	public List<Appointment> allAppointments() {
		return as.allAppointments();
	}
	
	@GetMapping(value="/appointment/{id}")
	public Appointment getAppointmentById(@PathVariable("id") int id) {
		return as.getAppointmentById(id);
	}
	
	
	@PutMapping(value="/appointment", consumes="application/json")
	public Appointment updateAppointment(@RequestBody Appointment change) {
		return as.updateAppointment(change);
	}
	

	@DeleteMapping(value="/appointment/{id}")
	public boolean removeAppointment(@PathVariable("id") int id) {
		return as.deleteAppointment(as.getAppointmentById(id));
	}
	

}
