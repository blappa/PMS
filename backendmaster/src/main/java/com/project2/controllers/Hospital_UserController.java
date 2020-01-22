package com.project2.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@RequestMapping({"/portal"})
public class Hospital_UserController {
    
	@Autowired
	Hospital_UserService hu;
	
	@RequestMapping(value="/hospital_user", method=RequestMethod.POST, consumes = "application/json")
	public Hospital_User createHospital_User(@RequestBody Hospital_User hospital_User) {
		//System.out.println(hospital_User.getF_name());
		Hospital_User hospu = hu.createHospital_User(hospital_User);
		 if(hospu !=null) {
			 return hospu;
		 }else {
			 return null;
		 }
	}
	
	@GetMapping(value="/hospital_users")
	public List<Hospital_User> allHospital_Users() {
		return hu.allHospital_Users();
	}
	
	@GetMapping(value="/hospital_doctors")
	public List<Hospital_User> allHospital_Doctors() {
		List<Hospital_User> docs = hu.allHospital_Users();
		List<Hospital_User> docsss = new ArrayList<Hospital_User>();
		for(Hospital_User hus: docs) {
			if(hus.getRole().equals("doctor")) {
				docsss.add(hus);
			}
		}
		System.out.println(docsss);
		return docsss;
	}
	
	@GetMapping(value="/hospital_receptionists")
	public List<Hospital_User> allHospital_Receptionists() {
		List<Hospital_User> docs = hu.allHospital_Users();
		List<Hospital_User> docsss = new ArrayList<Hospital_User>();
		for(Hospital_User hus: docs) {
			if(hus.getRole().equals("receptionist")) {
				docsss.add(hus);
			}
		}
		System.out.println(docsss);
		return docsss;
	}
	
	@GetMapping(value="/hospital_user/{id}")
	public Hospital_User getHospital_UserById(@PathVariable("id") int id) {
		return hu.getHospital_UserById(id);
	}
	
	@PutMapping(value="/hospital_user", consumes="application/json")
	public Hospital_User updateHospital_User(@RequestBody Hospital_User change) {
		return hu.updateHospital_User(change);
	}
	

	@DeleteMapping(value="/hospital_user/{id}")
	public boolean removeHospital_User(@PathVariable("id") int id) {
		return hu.deleteHospital_User(hu.getHospital_UserById(id));
	}
	
	@GetMapping(value="/hospital_username/{username}")
	public Map<String, String> login(@PathVariable("username") String username) {
	    //System.out.println(username);
		Hospital_User h =  hu.getHospital_UserByUsername(username);
		Map<String, String> resp = new HashMap<String, String>();
		if( h != null) {
			resp.put("0",h.getPassword());
			resp.put("1",h.getF_name()+" "+h.getL_name());
			resp.put("2",h.getRole());
			resp.put("3",String.valueOf(h.getId()));
		}else {
			resp.put("0", "0");
		}
		return resp;
	}
	
	
}
