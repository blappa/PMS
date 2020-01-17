package com.project2.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project2.entities.Appointment;
import com.project2.repositories.AppointmentRepository;


@Service
public class AppointmentService implements IAppointmentService {
	
	@Autowired
	AppointmentRepository ar;
	
	public Appointment createAppointment(Appointment appointment) {
		return ar.save(appointment);
	}

	@Override
	public Appointment getAppointmentById(int id) {
		return ar.findById(id).get();
	}

	@Override
	public Appointment updateAppointment(Appointment appointment) {
		return ar.save(appointment);
	}

	@Override
	public boolean deleteAppointment(Appointment appointment) {
		  ar.delete(appointment);
		  return true;
	}
	
	public List<Appointment> allAppointments(){
		return (List<Appointment>) ar.findAll();
	}

}
