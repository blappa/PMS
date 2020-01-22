package com.project2.controllers;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project2.entities.Schedule;
import com.project2.service.Hospital_UserService;
import com.project2.service.ScheduleService;


@RestController
@RequestMapping({"/portal"})
public class ScheduleController {

    
    @Autowired
    ScheduleService ss;
    @Autowired
    Hospital_UserService hu;

    //@RequestMapping(value="/schedule", method=RequestMethod.POST, consumes = "application/json")
    @GetMapping(value="/create_schedule_doctor/{id}/{date}/{time}")
    public List<Schedule> getScheduleById(@PathVariable("id") int id, @PathVariable("date") String date, @PathVariable("time") String time) {
        Schedule sch = new Schedule();
        sch.setStatus("available");
        sch.setDates(date);
        sch.setTime(time);
        //sch.setTime(LocalTime.now().toString());
        sch.setHospital_user(hu.getHospital_UserById(id));
        ss.createSchedule(sch);
        List<Schedule> schs =  new ArrayList<Schedule>();
        for(Schedule s: ss.allSchedules()) {
            if(s.getHospital_user().getId() == id) {
                schs.add(s);
            }
        }
        return schs;
    }

    

    @GetMapping(value="/schedules")
    public List<Schedule> allSchedules() {
        return ss.allSchedules();
    }


    @GetMapping(value="/schedule/{id}")
    public Schedule getScheduleById(@PathVariable("id") int id) {
        return ss.getScheduleById(id);
    }

   

    @PutMapping(value="/schedule", consumes="application/json")
    public Schedule updateSchedule(@RequestBody Schedule change) {
        return ss.updateSchedule(change);
    }

    

    @DeleteMapping(value="/schedule/{id}")
    public boolean removeSchedule(@PathVariable("id") int id) {
        return ss.deleteSchedule(ss.getScheduleById(id));
    }

    

    @GetMapping(value="/schedule_doctor_date/{id}/{date}")
    public List<Schedule> getAvaillableScheduleByDoctor(@PathVariable("id") int id, @PathVariable("date") String date) {
        List<Schedule> schs =  new ArrayList<Schedule>();
        for(Schedule s: ss.allSchedules()) {
            if((s.getHospital_user().getId() == id) && s.getDates().equals(date) && s.getStatus().equals("available")) {
                schs.add(s);
            }
        }
        return schs;
    }

    

    @GetMapping(value="/update_schedule_doctor/{id}")
    public List<Schedule> getUpdateScheduleByDoctor(@PathVariable("id") int id) {
        List<Schedule> schs =  new ArrayList<Schedule>();
        Schedule sch = ss.getScheduleById(id);
        sch.setStatus("unavailable");
        ss.updateSchedule(sch);
        for(Schedule s: ss.allSchedules()) {
            if(s.getHospital_user().getId() == id) {
                schs.add(s);
            }
        }
        return schs;
    }

    

    @GetMapping(value="/schedule_doctor/{id}")
    public List<Schedule> getAvaillableScheduleByDoctor1(@PathVariable("id") int id) {
        List<Schedule> schs =  new ArrayList<Schedule>();
        for(Schedule s: ss.allSchedules()) {
            if((s.getHospital_user().getId() == id) && s.getStatus().equals("available")) {
                schs.add(s);
            }
        }
        return schs;
    }

    

    @GetMapping(value="/schedule_doctor/{id}/all")
    public List<Schedule> getAllScheduleByDoctor(@PathVariable("id") int id) {
        List<Schedule> schs =  new ArrayList<Schedule>();
        for(Schedule s: ss.allSchedules()) {
            if((s.getHospital_user().getId() == id) && (s.getStatus().equals("available"))) {
                schs.add(s);
            }
        }
        return schs;
    }

}

