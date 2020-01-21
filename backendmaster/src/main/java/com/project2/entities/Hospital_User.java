package com.project2.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class Hospital_User {
	
	@Id
	@GeneratedValue
	private int id;
	
	private String f_name;
	private String l_name;
    private int age;
    private String phone;
    private String email;
    private String username;
    private String password;
    private String role;
    
    @JsonIgnore
    @OneToMany(mappedBy = "doctor", cascade = CascadeType.ALL)
	private List<Appointment> appointment_doctors;
    @JsonIgnore
    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL)
	private List<Appointment> appointment_clients;
    @JsonIgnore
    @OneToMany(mappedBy = "sender", cascade = CascadeType.ALL)
	private List<Message> message_senders;
    @JsonIgnore
    @OneToMany(mappedBy = "receiver", cascade = CascadeType.ALL)
	private List<Message> message_receivers;
    @JsonIgnore
    @OneToMany(mappedBy = "hospital_user", cascade = CascadeType.ALL)
	private List<Schedule> schedules;
    
    
	public Hospital_User() {
		super();
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getF_name() {
		return f_name;
	}


	public void setF_name(String f_name) {
		this.f_name = f_name;
	}


	public String getL_name() {
		return l_name;
	}


	public void setL_name(String l_name) {
		this.l_name = l_name;
	}


	public int getAge() {
		return age;
	}


	public void setAge(int age) {
		this.age = age;
	}


	public String getPhone() {
		return phone;
	}


	public void setPhone(String phone) {
		this.phone = phone;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}


	public List<Appointment> getAppointment_doctors() {
		return appointment_doctors;
	}


	public void setAppointment_doctors(List<Appointment> appointment_doctors) {
		this.appointment_doctors = appointment_doctors;
	}


	public List<Appointment> getAppointment_clients() {
		return appointment_clients;
	}


	public void setAppointment_clients(List<Appointment> appointment_clients) {
		this.appointment_clients = appointment_clients;
	}


	public List<Message> getMessage_senders() {
		return message_senders;
	}


	public void setMessage_senders(List<Message> message_senders) {
		this.message_senders = message_senders;
	}


	public List<Message> getMessage_receivers() {
		return message_receivers;
	}


	public void setMessage_receivers(List<Message> message_receivers) {
		this.message_receivers = message_receivers;
	}


	public List<Schedule> getSchedules() {
		return schedules;
	}


	public void setSchedules(List<Schedule> schedules) {
		this.schedules = schedules;
	}

  
}
