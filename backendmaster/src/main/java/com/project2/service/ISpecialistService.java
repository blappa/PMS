package com.project2.service;

import java.util.List;

import com.project2.entities.Specialist;

public interface ISpecialistService {

	public Specialist createSpecialist(Specialist specialist);
	
	public Specialist getSpecialistById(int id);
	
	public Specialist updateSpecialist(Specialist specialist);
	
	public boolean deleteSpecialist(Specialist specialist);
	
	public List<Specialist> allSpecialists();
	
}
