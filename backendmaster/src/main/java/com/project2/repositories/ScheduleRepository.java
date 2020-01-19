package com.project2.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.project2.entities.Schedule;

@Repository
public interface ScheduleRepository extends CrudRepository<Schedule, Integer> {

}
