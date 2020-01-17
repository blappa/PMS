package com.project2.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.project2.entities.Appointment;

@Repository
public interface AppointmentRepository extends CrudRepository<Appointment, Integer> {

}
