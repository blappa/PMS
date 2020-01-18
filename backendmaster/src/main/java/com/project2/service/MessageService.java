package com.project2.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project2.entities.Message;
import com.project2.repositories.MessageRepository;


@Service
public class MessageService implements IMessageService {

	@Autowired
	MessageRepository mr;
	
	@Override
	public Message createMessage(Message message) {
		return  mr.save(message);
	}

	@Override
	public Message getMessageById(int id) {
		return  mr.findById(id).get();
	}

	@Override
	public Message updateMessage(Message message) {
		return  mr.save(message);
	}

	@Override
	public boolean deleteMessage(Message message) {
		 mr.delete(message);
		 return true;
	}
	
	public List<Message> allMessages(){
		return (List<Message>) mr.findAll();
	}

}
