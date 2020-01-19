package com.project2.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Specialist {
	
	@Id
	@GeneratedValue
	private int id;
	
	private String specialty;

	@ManyToOne
	private Hospital_User hospital_user;
	
	public Specialist() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getSpecialty() {
		return specialty;
	}

	public void setSpecialty(String specialty) {
		this.specialty = specialty;
	}

	public Hospital_User getHospital_user() {
		return hospital_user;
	}

	public void setHospital_user(Hospital_User hospital_user) {
		this.hospital_user = hospital_user;
	}

	

}
