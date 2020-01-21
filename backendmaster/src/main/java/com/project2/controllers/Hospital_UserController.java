package com.project2.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.project2.entities.Hospital_User;
import com.project2.service.Hospital_UserService;

@RestController
public class Hospital_UserController {
    
	@Autowired
	Hospital_UserService hu;
	
	@RequestMapping(value="/hospital_users", method=RequestMethod.POST, consumes = "application/json")
	public Hospital_User createHospital_User(@RequestBody Hospital_User Hospital_User) {
		System.out.println(Hospital_User);
		return hu.createHospital_User(Hospital_User);
	}
	
	@GetMapping(value="/hospital_users")
	public List<Hospital_User> allHospital_Users() {
		return hu.allHospital_Users();
	}
	
	@GetMapping(value="/hospital_users/{id}")
	public Hospital_User getHospital_UserById(@PathVariable("id") int id) {
		return hu.getHospital_UserById(id);
	}
	
	
	@PutMapping(value="/hospital_users", consumes="application/json")
	public Hospital_User updateHospital_User(@RequestBody Hospital_User change) {
		return hu.updateHospital_User(change);
	}
	

	@DeleteMapping(value="/hospital_users/{id}")
	public boolean removeHospital_User(@PathVariable("id") int id) {
		return hu.deleteHospital_User(hu.getHospital_UserById(id));
	}
	
	@GetMapping(value="/hospital_user/{username}")
	public String login(@PathVariable("username") String username) {
		Hospital_User h =  hu.getHospital_UserByUsername(username);
		if( h != null) {
			return h.getPassword();
		}else {
			return null;
		}
	}
	
	
}
