package com.project2.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Specialist {
	
	@Id
	@GeneratedValue
	@Column(name="sp_id")
	private int sp_id;
	
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


	public int getSp_id() {
		return sp_id;
	}


	public void setSp_id(int sp_id) {
		this.sp_id = sp_id;
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
		return "Specialist [sp_id=" + sp_id + ", u_id=" + u_id + ", specialty=" + specialty + "]";
	}
	
}
