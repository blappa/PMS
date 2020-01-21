package com.project2.service;

import java.util.List;

import com.project2.entities.Message;

public interface IMessageService {

	public Message createMessage(Message message);
	
	public Message getMessageById(int id);
	
	public Message updateMessage(Message message);
	
	public boolean deleteMessage(Message message);
	
	public List<Message> allMessages();
	
}
