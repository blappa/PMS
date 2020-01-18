package com.project2.service;

import java.util.List;

import com.project2.entities.Hospital_User;

public interface IHospital_UserService {
	
	public Hospital_User createHospital_User(Hospital_User hospital_User);
	
	public Hospital_User getHospital_UserById(int id);
	
	public Hospital_User updateHospital_User(Hospital_User hospital_User);
	
	public boolean deleteHospital_User(Hospital_User hospital_User);
	
	public List<Hospital_User> allHospital_Users();
	
	public Hospital_User getHospital_UserByUsername(String username);

}
