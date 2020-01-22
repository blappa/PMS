

package com.project2.controllers;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project2.entities.Message;
import com.project2.service.Hospital_UserService;
import com.project2.service.MessageService;


@RestController
@RequestMapping({"/portal"})
public class MessageController {

    @Autowired
    MessageService ms;
    @Autowired
    Hospital_UserService hu;

    
    //@RequestMapping(value="/message", method=RequestMethod.POST, consumes = "application/json")
    @GetMapping("/message/{data}/send")
    public List<Message> createMessage(@PathVariable("data") String[] data) {
        System.out.println(data);
        Message message =  new Message();
        message.setMessage(data[0]);
        message.setSender(hu.getHospital_UserById(Integer.parseInt(data[1])));
        message.setReceiver((hu.getHospital_UserById(Integer.parseInt(data[2]))));
        message.setStatus(data[3]);
        message.setTime(java.time.LocalTime.now().toString());
        message.setRead(0);
        ms.createMessage(message);
        List<Message> mss = new ArrayList<Message>();
        int id = Integer.parseInt(data[1]);
        SimpleDateFormat format = new SimpleDateFormat("HH:mm:ss");

        for(Message m: ms.allMessages()) {
            if((m.getSender().getId() == id) || (m.getReceiver().getId() == id)) {
                Date date1;
                Date date2;
                try {
                    date1 = format.parse(m.getTime());
                    date2 = format.parse(java.time.LocalTime.now().toString());
                    long difference = date2.getTime()/ (60000) - date1.getTime()/ (60000);
                    m.setTime(String.valueOf(difference) );
                    mss.add(m);
                } catch (ParseException e) {
                }
            }
        }
        return mss;
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
        SimpleDateFormat format = new SimpleDateFormat("HH:mm:ss");
        for(Message m: ms.allMessages()) {
            if((m.getSender().getId() == id) || (m.getReceiver().getId() == id)) {
                Date date1;
                Date date2;
                try {
                    date1 = format.parse(m.getTime());
                    date2 = format.parse(java.time.LocalTime.now().toString());
                    long difference = date2.getTime()/ (60000) - date1.getTime()/ (60000);
                    m.setTime(String.valueOf(difference) );
                    mss.add(m);
                } catch (ParseException e) {
                }
            }
        }
        return mss;
    }

    
    @GetMapping(value="/message/all/unread/{id}")
    public List<Message> allMessagesUnreadByUser(@PathVariable("id") int id) {
        List<Message> mss = new ArrayList<Message>();
        SimpleDateFormat format = new SimpleDateFormat("HH:mm:ss");
        for(Message m: ms.allMessages()) {
            if((m.getSender().getId() != id) && (m.getReceiver().getId() == id) && (m.getStatus().equals("unread"))) {
                Date date1;
                Date date2;
                try {
                    date1 = format.parse(m.getTime());
                    date2 = format.parse(java.time.LocalTime.now().toString());
                    long difference = date2.getTime()/ (60000) - date1.getTime()/ (60000);
                    m.setTime(String.valueOf(difference) );
                    mss.add(m);
                } catch (ParseException e) {
                }
            }
        }
        return mss;
    }

    
    @GetMapping(value="/message/setread/{id}/{message_id}")
    public List<Message> setReadMessage(@PathVariable("id") int id, @PathVariable("message_id") int message_id) {
        Message message = ms.getMessageById(message_id);
        message.setStatus("read");
        message.setRead(1);
        List<Message> mss = new ArrayList<Message>();
        SimpleDateFormat format = new SimpleDateFormat("HH:mm:ss");
        for(Message m: ms.allMessages()) {
            if(!(m.getSender().getId() == id) && (m.getReceiver().getId() == id) && (m.getStatus().equals("unread"))) {
                Date date1;
                Date date2;
                try {
                    date1 = format.parse(m.getTime());
                    date2 = format.parse(java.time.LocalTime.now().toString());
                    long difference = date2.getTime()/ (60000) - date1.getTime()/ (60000); 
                    m.setTime(String.valueOf(difference) );
                    mss.add(m);
                } catch (ParseException e) {
                }
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


