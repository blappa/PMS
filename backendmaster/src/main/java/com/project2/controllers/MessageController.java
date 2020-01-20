package com.project2.controllers;

import java.util.ArrayList;
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

import com.project2.entities.Message;
import com.project2.service.Hospital_UserService;
import com.project2.service.MessageService;

//@CrossOrigin(origins = "http://sitemedpark.s3-website-us-east-1.amazonaws.com/")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping({"/portal"})
public class MessageController {

	@Autowired
	MessageService ms;
	@Autowired
	Hospital_UserService hu;
	
	//@RequestMapping(value="/message", method=RequestMethod.POST, consumes = "application/json")
	@GetMapping("/message/{data}/send")
	public Message createMessage(@PathVariable("data") String[] data) {
		System.out.println(data);
		Message message =  new Message();
		message.setMessage(data[0]);
		message.setSender(hu.getHospital_UserById(Integer.parseInt(data[1])));
		message.setReceiver((hu.getHospital_UserById(Integer.parseInt(data[2]))));
		message.setStatus(data[3]);
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
	
	
	@GetMapping(value="/message/all/{id}")
	public List<Message> allMessagesByUser(@PathVariable("id") int id) {
		List<Message> mss = new ArrayList<Message>();
		for(Message m: mss) {
			if((m.getSender().getId() == id) || (m.getReceiver().getId() == id)) {
				mss.add(m);
			}
		}
		return mss;
	}
	
	@GetMapping(value="/message/all/unread/{id}")
	public List<Message> allMessagesUnreadByUser(@PathVariable("id") int id) {
		List<Message> mss = new ArrayList<Message>();
		for(Message m: mss) {
			if((m.getSender().getId() != id) && (m.getReceiver().getId() == id) && (m.getStatus().equals("unread"))) {
				mss.add(m);
			}
		}
		return mss;
	}
	
	
	@GetMapping(value="/message/setread")
	public List<Message> setReadMessage(@PathVariable("id") int id, @PathVariable("message_id") int message_id) {
		Message message = ms.getMessageById(message_id);
		message.setStatus("read");
		List<Message> mss = new ArrayList<Message>();
		for(Message m: mss) {
			if(!(m.getSender().getId() == id) && (m.getReceiver().getId() == id) && (m.getStatus().equals("unread"))) {
				mss.add(m);
			}
		}
		return mss;
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
