package com.project2.daos;

import java.util.List;

import com.project2.entities.Specialist;

public interface SpecialistDAO {
	
	public boolean addAppointment(Specialist specialist);
	
	public Specialist getSpecialist(int id);
	
	public List<Specialist> getAllSpecialists(int id);

}
