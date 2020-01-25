package com.project2.entities;import javax.persistence.Entity;
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
    private String pcp;   
    private String status;   
    private String cancel_reason;  
    
    @ManyToOne
	private Hospital_User doctor;    
    @ManyToOne
	private Hospital_User client;   
    @ManyToOne
	private Schedule schedule;  
	
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
	
	public Schedule getSchedule() {
		return schedule;
	}	
	
	public void setSchedule(Schedule schedule) {
		this.schedule = schedule;
	}	
	
	public String getPcp() {
		return pcp;
	}	
	
	public void setPcp(String pcp) {
		this.pcp = pcp;
	}

	public Hospital_User getDoctor() {
		return doctor;
	}

	public void setDoctor(Hospital_User doctor) {
		this.doctor = doctor;
	}

	public Hospital_User getClient() {
		return client;
	}

	public void setClient(Hospital_User client) {
		this.client = client;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getCancel_reason() {
		return cancel_reason;
	}

	public void setCancel_reason(String cancel_reason) {
		this.cancel_reason = cancel_reason;
	}	
	
}