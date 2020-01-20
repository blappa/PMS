package com.project2.controllers;

import java.util.List;

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

import com.project2.entities.Specialist;
import com.project2.service.SpecialistService;

//@CrossOrigin(origins = "http://sitemedpark.s3-website-us-east-1.amazonaws.com/")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping({"/portal"})
public class SpecialistController {

	@Autowired
	SpecialistService ss;
	
	@RequestMapping(value="/specialist", method=RequestMethod.POST, consumes = "application/json")
	public Specialist createSpecialist(@RequestBody Specialist Specialist) {
		System.out.println(Specialist);
		return ss.createSpecialist(Specialist);
	}
	
	@GetMapping(value="/specialists")
	public List<Specialist> allSpecialists() {
		return ss.allSpecialists();
	}
	
	@GetMapping(value="/specialist/{id}")
	public Specialist getSpecialistById(@PathVariable("id") int id) {
		return ss.getSpecialistById(id);
	}
	
	
	@PutMapping(value="/specialist", consumes="application/json")
	public Specialist updateSpecialist(@RequestBody Specialist change) {
		return ss.updateSpecialist(change);
	}
	

	@DeleteMapping(value="/specialist/{id}")
	public boolean removeSpecialist(@PathVariable("id") int id) {
		return ss.deleteSpecialist(ss.getSpecialistById(id));
	}
	
	
}
