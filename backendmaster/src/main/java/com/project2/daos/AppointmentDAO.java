package com.project2.daos;

import java.util.List;

import com.project2.models.Appointment;

public interface AppointmentDAO {
	
	public boolean addAppointment(Appointment appointment);
	
	public Appointment getAppointment(int id);
	
	public List<Appointment> getAllAppointments(int id);
	
	public boolean updateAppointment(Appointment change);
	
	public boolean deleteAppointment(int id);

}
