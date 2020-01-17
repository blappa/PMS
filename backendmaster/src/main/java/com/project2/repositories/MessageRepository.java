package com.project2.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.project2.entities.Message;

@Repository
public interface MessageRepository extends CrudRepository<Message, Integer> {

}
