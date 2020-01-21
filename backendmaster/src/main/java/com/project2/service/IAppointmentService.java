package com.project2.service;

import java.util.List;

import com.project2.entities.Appointment;

public interface IAppointmentService{

	public Appointment createAppointment(Appointment appointment);
	
	public Appointment getAppointmentById(int id);
	
	public Appointment updateAppointment(Appointment appointment);
	
	public boolean deleteAppointment(Appointment appointment);
	
	public List<Appointment> allAppointments();
	
}
