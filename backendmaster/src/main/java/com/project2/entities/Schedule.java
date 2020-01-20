package com.project2.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Schedule {
	
	@Id
	@GeneratedValue
	private int id;
	
	private String dates;
	private String time;
	private String status;
	
	@JsonIgnore
    @OneToMany(mappedBy = "schedule", cascade = CascadeType.ALL)
	private List<Appointment> appointments;
	
	//@JsonIgnore
	@ManyToOne
	private Hospital_User hospital_user;
	
	public Schedule() {
		super();
	}

	public Schedule(String dates, String time) {
		super();
		this.dates = dates;
		this.time = time;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDates() {
		return dates;
	}

	public void setDates(String dates) {
		this.dates = dates;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Hospital_User getHospital_user() {
		return hospital_user;
	}

	public void setHospital_user(Hospital_User hospital_user) {
		this.hospital_user = hospital_user;
	}
	
	
}
