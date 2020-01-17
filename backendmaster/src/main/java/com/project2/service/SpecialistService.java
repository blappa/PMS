package com.project2.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project2.entities.Specialist;
import com.project2.repositories.SpecialistRepository;


@Service
public class SpecialistService  implements ISpecialistService{

	@Autowired
	SpecialistRepository sr;
	
	@Override
	public Specialist createSpecialist(Specialist specialist) {
		return sr.save(specialist);
	}

	@Override
	public Specialist getSpecialistById(int id) {
		return sr.findById(id).get();
	}

	@Override
	public Specialist updateSpecialist(Specialist specialist) {
		return sr.save(specialist);
	}

	@Override
	public boolean deleteSpecialist(Specialist specialist) {
		sr.delete(specialist);
		return true;
	}

	public List<Specialist> allSpecialists(){
		return (List<Specialist>) sr.findAll();
	}
}
