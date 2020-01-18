package com.project2.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project2.entities.Hospital_User;
import com.project2.repositories.Hospital_UserRepository;

@Service
public class Hospital_UserService implements IHospital_UserService{

	@Autowired
	Hospital_UserRepository hr;
	
	@Override
	public Hospital_User createHospital_User(Hospital_User hospital_User) {
		return  hr.save(hospital_User);
	}

	@Override
	public Hospital_User getHospital_UserById(int id) {
		return  hr.findById(id).get();
	}

	@Override
	public Hospital_User updateHospital_User(Hospital_User hospital_User) {
		return  hr.save(hospital_User);
	}

	@Override
	public boolean deleteHospital_User(Hospital_User hospital_User) {
		 hr.delete(hospital_User);
		 return true;
	}
	
	public List<Hospital_User> allHospital_Users(){
		return (List<Hospital_User>) hr.findAll();
	}
	
	public Hospital_User getHospital_UserByUsername(String username) {
		return hr.findByUsername(username);
	}

}
