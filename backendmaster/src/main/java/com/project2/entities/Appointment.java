package com.project2.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Appointment {
	
	@Id
	@GeneratedValue
	private int id;
		
    private String visit_reason;
    private String allergy;
    private String medication_list;
    private String appointment_type;
    private int doctor;
    private int appointment_time;
    private String pcp;
    private byte[] load_file;
    
    @ManyToOne
	private Hospital_User hospital_user;
    
  //pcp => primary care phisician
    
    public Appointment() {
    	super();
    }

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getVisit_reason() {
		return visit_reason;
	}

	public void setVisit_reason(String visit_reason) {
		this.visit_reason = visit_reason;
	}

	public String getAllergy() {
		return allergy;
	}

	public void setAllergy(String allergy) {
		this.allergy = allergy;
	}

	public String getMedication_list() {
		return medication_list;
	}

	public void setMedication_list(String medication_list) {
		this.medication_list = medication_list;
	}

	public String getAppointment_type() {
		return appointment_type;
	}

	public void setAppointment_type(String appointment_type) {
		this.appointment_type = appointment_type;
	}

	public int getDoctor() {
		return doctor;
	}

	public void setDoctor(int doctor) {
		this.doctor = doctor;
	}

	public int getAppointment_time() {
		return appointment_time;
	}

	public void setAppointment_time(int appointment_time) {
		this.appointment_time = appointment_time;
	}

	public String getPcp() {
		return pcp;
	}

	public void setPcp(String pcp) {
		this.pcp = pcp;
	}

	public byte[] getLoad_file() {
		return load_file;
	}

	public void setLoad_file(byte[] load_file) {
		this.load_file = load_file;
	}

	public Hospital_User getHospital_user() {
		return hospital_user;
	}

	public void setHospital_user(Hospital_User hospital_user) {
		this.hospital_user = hospital_user;
	}
    
    
	

}
