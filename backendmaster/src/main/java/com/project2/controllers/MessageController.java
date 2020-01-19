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

import com.project2.entities.Message;
import com.project2.service.MessageService;

@RestController
public class MessageController {

	@Autowired
	MessageService ms;
	
	
	@RequestMapping(value="/message", method=RequestMethod.POST, consumes = "application/json")
	public Message createMessage(@RequestBody Message message) {
		System.out.println(message);
		return ms.createMessage(message);
	}
	
	@GetMapping(value="/messages")
	public List<Message> allMessages() {
		return ms.allMessages();
	}
	
	@GetMapping(value="/message/{id}")
	public Message getMessageById(@PathVariable("id") int id) {
		return ms.getMessageById(id);
	}
	
	
	@PutMapping(value="/message", consumes="application/json")
	public Message updateMessage(@RequestBody Message change) {
		return ms.updateMessage(change);
	}
	

	@DeleteMapping(value="/message/{id}")
	public boolean removeMessage(@PathVariable("id") int id) {
		return ms.deleteMessage(ms.getMessageById(id));
	}
	

}
