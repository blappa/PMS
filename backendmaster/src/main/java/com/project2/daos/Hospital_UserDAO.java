package com.project2.daos;

import java.util.List;

import com.project2.entities.Hospital_User;


public interface Hospital_UserDAO {

	public boolean addHospitalUser(Hospital_User user);
	
	public Hospital_User getHospital_User(int id);
	
	public List<Hospital_User> getAllHospitalUsers(int id);
	
	public boolean updateHospitalUser(Hospital_User change);
	
	public boolean deleteHospitalUser(int id);
}
