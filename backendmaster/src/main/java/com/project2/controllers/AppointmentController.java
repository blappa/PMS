package com.project2.controllers;

import java.util.ArrayList;
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
import com.project2.entities.Hospital_User;
import com.project2.entities.Schedule;
import com.project2.service.AppointmentService;
import com.project2.service.Hospital_UserService;
import com.project2.service.ScheduleService;



//@CrossOrigin(origins = "http://sitemedpark.s3-website-us-east-1.amazonaws.com/")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping({"/portal"})
public class AppointmentController {
	
	@Autowired
	AppointmentService as;
	@Autowired
	Hospital_UserService hs;
	@Autowired
	ScheduleService ss;
	
	@GetMapping(value="/appointment/{app}/add")
	public Appointment createAppointment(@PathVariable("app") String[] app) {
		System.out.println(app);
		Appointment appointment= new Appointment();
		appointment.setVisit_reason(app[0]);
		appointment.setAllergy(app[1]);
		appointment.setMedication_list(app[2]);
		appointment.setAppointment_type(app[3]);
		appointment.setPcp(app[4]);
		appointment.setHospital_user(hs.getHospital_UserById(Integer.parseInt(app[5])));
		appointment.setSchedule(ss.getScheduleById(Integer.parseInt(app[6])));
		/*Hospital_User hu = hs.getHospital_UserById(appointment.getHospital_user().getAge());
		Schedule sc =  ss.getScheduleById(appointment.getId());
		appointment.setHospital_user(hu);
		appointment.setSchedule(sc);*/
		Appointment a= as.createAppointment(appointment);
		if(a !=null) {
			 return a;
		 }else {
			 return null;
		 }
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
	
	@GetMapping(value="/appointment_user/{id}")
	public List<Appointment>  getUsersAppointments(@PathVariable("id") int id) {
		List<Appointment> apps = new ArrayList<Appointment>();
		for(Appointment a: as.allAppointments()) {
			try {
			if(a.getHospital_user().getId() == id) {
				apps.add(a);
			}
			}catch(Exception e) {
			}
		}
		return apps;
	}

}
