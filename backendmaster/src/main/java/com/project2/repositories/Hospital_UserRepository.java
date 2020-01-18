package com.project2.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.project2.entities.Hospital_User;

@Repository
public interface Hospital_UserRepository extends CrudRepository<Hospital_User, Integer> {
	
	public Hospital_User findByUsername(String username);

}
