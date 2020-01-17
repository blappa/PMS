package com.project2.models;

public class Specialist {
	
	private int u_id;
	private String specialty;

	
	public Specialist() {
		super();
	}


	public Specialist(int u_id, String specialty) {
		super();
		this.u_id = u_id;
		this.specialty = specialty;
	}


	public int getU_id() {
		return u_id;
	}


	public void setU_id(int u_id) {
		this.u_id = u_id;
	}


	public String getSpecialty() {
		return specialty;
	}


	public void setSpecialty(String specialty) {
		this.specialty = specialty;
	}


	@Override
	public String toString() {
		return "Specialist [u_id=" + u_id + ", specialty=" + specialty + "]";
	}

	
}
