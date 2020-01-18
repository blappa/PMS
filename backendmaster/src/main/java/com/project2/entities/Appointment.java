package com.project2.entities;

import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Appointment {
	
	@Id
	@GeneratedValue
	@Column(name="ap_id")
	private int ap_id;
	
	private int u_id;	
    private String visit_reason;
    private String allergy;
    private String medication_list;
    private String appointment_type;
    private int doctor;
    private int appointment_time;
    private String pcp;
    private byte[] load_file;
    
  //pcp => primary care phisician
    
    public Appointment() {
    	super();
    }
    
	public Appointment(int u_id, String visit_reason, String allergy, String medication_list, String appointment_type,
			int doctor, int appointment_time, String pcp, byte[] load_file) {
		super();
		this.u_id = u_id;
		this.visit_reason = visit_reason;
		this.allergy = allergy;
		this.medication_list = medication_list;
		this.appointment_type = appointment_type;
		this.doctor = doctor;
		this.appointment_time = appointment_time;
		this.pcp = pcp;
		this.load_file = load_file;
	}
	

	public int getAp_id() {
		return ap_id;
	}

	public void setAp_id(int ap_id) {
		this.ap_id = ap_id;
	}

	public int getU_id() {
		return u_id;
	}

	public void setU_id(int u_id) {
		this.u_id = u_id;
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

	@Override
	public String toString() {
		return "Appointment [ap_id=" + ap_id + ", u_id=" + u_id + ", visit_reason=" + visit_reason + ", allergy="
				+ allergy + ", medication_list=" + medication_list + ", appointment_type=" + appointment_type
				+ ", doctor=" + doctor + ", appointment_time=" + appointment_time + ", pcp=" + pcp + ", load_file="
				+ Arrays.toString(load_file) + "]";
	}

 

}
